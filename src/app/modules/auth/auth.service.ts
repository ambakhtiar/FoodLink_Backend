import { AccountStatus, User, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';
import { MailHelper } from '../../utils/mailHelper';
import { TJWTPayload } from './auth.interface';

const generateAccessToken = (user: User): string => {
    const jwtPayload: TJWTPayload = {
        userId: user.id,
        role: user.role,
        status: user.status,
    };

    return jwt.sign(
        jwtPayload,
        config.jwt_access_secret as string,
        {
            expiresIn: config.jwt_access_expires_in as any,
        },
    );
};

const generateRefreshToken = (user: User): string => {
    const jwtPayload: TJWTPayload = {
        userId: user.id,
        role: user.role,
        status: user.status,
    };

    return jwt.sign(
        jwtPayload,
        config.jwt_refresh_secret as string,
        {
            expiresIn: config.jwt_refresh_expires_in as any,
        },
    );
};

const registerUser = async (payload: {
    email: string;
    password: string;
    phone: string;
    role?: UserRole;
    name?: string;
    orgName?: string;
    establishedYear?: number;
    registrationNumber?: string;
    latitude: number;
    longitude: number;
}): Promise<User> => {
    const isUserExists = await prisma.user.findUnique({
        where: { email: payload.email },
    });

    if (isUserExists) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User already exists');
    }

    const role = payload.role ?? UserRole.USER;

    if (role === UserRole.ADMIN || role === UserRole.SUPER_ADMIN) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'Cannot register as admin via public endpoint',
        );
    }

    const hashedPassword = await bcrypt.hash(
        payload.password,
        Number(config.bcrypt_salt_rounds),
    );

    const status =
        role === UserRole.ORGANIZATION
            ? AccountStatus.PENDING
            : AccountStatus.ACTIVE;

    const newUser = await prisma.user.create({
        data: {
            email: payload.email,
            passwordHash: hashedPassword,
            phone: payload.phone,
            role,
            status,
            authProvider: 'local',
            ...(role === UserRole.USER && {
                userProfile: {
                    create: {
                        name: payload.name!,
                        latitude: payload.latitude,
                        longitude: payload.longitude,
                    },
                },
            }),
            ...(role === UserRole.ORGANIZATION && {
                organizationProfile: {
                    create: {
                        orgName: payload.orgName!,
                        latitude: payload.latitude,
                        longitude: payload.longitude,
                        ...(payload.establishedYear !== undefined && {
                            establishedYear: payload.establishedYear,
                        }),
                        ...(payload.registrationNumber !== undefined && {
                            registrationNumber: payload.registrationNumber,
                        }),
                    },
                },
            }),
        },
    });

    return newUser;
};

const loginUser = async (
    payload: {
        email: string; // This now acts as a generic identifier (email or phone)
        password: string;
    },
    clientInfo: {
        userAgent?: string | undefined;
        ipAddress?: string | undefined;
    }
): Promise<{ accessToken: string; refreshToken: string }> => {
    // Find user by email OR phone
    const user = await prisma.user.findFirst({
        where: {
            OR: [
                { email: payload.email },
                { phone: payload.email }
            ]
        },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    if (user.status === AccountStatus.PENDING) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'Your organization account is waiting for admin approval.'
        );
    }

    if (!user.passwordHash) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'This account uses OAuth. Please login with Google.',
        );
    }

    // Compare password
    const isPasswordMatched = await bcrypt.compare(
        payload.password,
        user.passwordHash,
    );

    if (!isPasswordMatched) {
        throw new AppError(httpStatus.FORBIDDEN, 'Password does not match');
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save session
    await prisma.session.create({
        data: {
            userId: user.id,
            refreshToken,
            userAgent: clientInfo.userAgent || null,
            ipAddress: clientInfo.ipAddress || null,
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        },
    });

    return {
        accessToken,
        refreshToken,
    };
};

const getMe = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            userProfile: true,
            organizationProfile: true,
            adminProfile: true,
        },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    // Flatten profile data for API response
    const profile =
        user.userProfile ??
        user.organizationProfile ??
        user.adminProfile;

    return {
        id: user.id,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
        authProvider: user.authProvider,
        profilePictureUrl: user.profilePictureUrl,
        name:
            user.userProfile?.name ??
            user.organizationProfile?.orgName ??
            user.adminProfile?.name,
        latitude:
            user.userProfile?.latitude ??
            user.organizationProfile?.latitude,
        longitude:
            user.userProfile?.longitude ??
            user.organizationProfile?.longitude,
        impactScore:
            user.userProfile?.impactScore ??
            user.organizationProfile?.impactScore,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        profile,
    };
};

const changePassword = async (
    userId: string,
    currentPassword: string,
    newPassword: string,
): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    if (!user.passwordHash) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'This account uses OAuth. Password cannot be changed.',
        );
    }

    const isPasswordMatched = await bcrypt.compare(
        currentPassword,
        user.passwordHash,
    );

    if (!isPasswordMatched) {
        throw new AppError(httpStatus.FORBIDDEN, 'Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(
        newPassword,
        Number(config.bcrypt_salt_rounds),
    );

    await prisma.$transaction([
        prisma.user.update({
            where: { id: userId },
            data: { passwordHash: hashedNewPassword },
        }),
        prisma.session.deleteMany({
            where: { userId },
        }),
    ]);
};

const forgotPassword = async (email: string): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    if (!user.passwordHash || user.authProvider === 'google') {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'This account uses Google Login. Password reset is not available.'
        );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.user.update({
        where: { id: user.id },
        data: { otp, otpExpiry },
    });

    // Send actual email
    await MailHelper.sendEmail(
        email,
        'Your HelpShare Security Code',
        'otp',
        { otp }
    );

    console.log(`[OTP Sent] Email: ${email} | OTP: ${otp}`);
};

const verifyOtp = async (email: string, otp: string): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    if (!user.otp || !user.otpExpiry) {
        throw new AppError(httpStatus.BAD_REQUEST, 'No OTP found');
    }

    if (user.otp !== otp) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid OTP');
    }

    if (new Date() > user.otpExpiry) {
        throw new AppError(httpStatus.BAD_REQUEST, 'OTP has expired');
    }
};

const resetPassword = async (
    email: string,
    otp: string,
    newPassword: string,
): Promise<void> => {
    await verifyOtp(email, otp);

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    if (!user.passwordHash || user.authProvider === 'google') {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'This account uses Google Login. Password reset is not available.'
        );
    }

    const hashedNewPassword = await bcrypt.hash(
        newPassword,
        Number(config.bcrypt_salt_rounds),
    );

    await prisma.$transaction([
        prisma.user.update({
            where: { email },
            data: {
                passwordHash: hashedNewPassword,
                otp: null,
                otpExpiry: null,
            },
        }),
        prisma.session.deleteMany({
            where: { userId: user!.id },
        }),
    ]);
};

const googleLogin = async (
    payload: {
        googleToken: string;
    },
    clientInfo: {
        userAgent?: string | undefined;
        ipAddress?: string | undefined;
    }
): Promise<{ accessToken: string; refreshToken: string }> => {
    // Fetch user info from Google using access_token
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${payload.googleToken}`);
    const payload_google = await response.json();

    if (!payload_google || !payload_google.email) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid Google token');
    }

    const { email, name } = payload_google;

    let user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                email,
                passwordHash: null,
                phone: null,
                role: UserRole.USER,
                status: AccountStatus.INCOMPLETE_PROFILE,
                authProvider: 'google',
                isVerified: true,
                userProfile: {
                    create: {
                        name: name || 'Google User',
                    },
                },
            },
        });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    // Save session
    await prisma.session.create({
        data: {
            userId: user.id,
            refreshToken,
            userAgent: clientInfo.userAgent || null,
            ipAddress: clientInfo.ipAddress || null,
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
    });

    return { accessToken, refreshToken };
};

const completeProfile = async (
    userId: string,
    payload: {
        phone: string;
        latitude: number;
        longitude: number;
    },
    clientInfo: {
        userAgent?: string | undefined;
        ipAddress?: string | undefined;
    }
): Promise<{ accessToken: string; refreshToken: string }> => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { userProfile: true },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    if (user.status !== AccountStatus.INCOMPLETE_PROFILE) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'Profile is already complete',
        );
    }

    const updatedUser = await prisma.$transaction(async (tx) => {
        const updated = await tx.user.update({
            where: { id: userId },
            data: {
                phone: payload.phone,
                status: AccountStatus.ACTIVE,
            },
        });

        await tx.userProfile.update({
            where: { userId },
            data: {
                latitude: payload.latitude,
                longitude: payload.longitude,
            },
        });

        return updated;
    });

    const accessToken = generateAccessToken(updatedUser);
    const refreshToken = generateRefreshToken(updatedUser);

    // Save session
    await prisma.session.create({
        data: {
            userId: updatedUser.id,
            refreshToken,
            userAgent: clientInfo.userAgent || null,
            ipAddress: clientInfo.ipAddress || null,
            expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        },
    });

    return { accessToken, refreshToken };
};

const refreshToken = async (token: string): Promise<{ accessToken: string }> => {
    // Verify token
    let verifiedToken: any;
    try {
        verifiedToken = jwt.verify(
            token,
            config.jwt_refresh_secret as string
        );
    } catch (error) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid refresh token');
    }

    const { userId } = verifiedToken;

    // Check if session exists and is not expired
    const session = await prisma.session.findUnique({
        where: { refreshToken: token },
    });

    if (!session || new Date() > session.expiresAt) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Session expired or invalid');
    }

    // Get user
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const accessToken = generateAccessToken(user);

    return { accessToken };
};

const logout = async (token: string): Promise<void> => {
    await prisma.session.delete({
        where: { refreshToken: token },
    }).catch(() => {
        // Ignore if already deleted
    });
};

export const AuthService = {
    registerUser,
    loginUser,
    getMe,
    changePassword,
    forgotPassword,
    verifyOtp,
    resetPassword,
    googleLogin,
    completeProfile,
    refreshToken,
    logout,
};
