import { User, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';
import { OAuth2Client } from 'google-auth-library';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';
import { TJWTPayload } from './auth.interface';

const generateAccessToken = (user: User): string => {
    const jwtPayload: TJWTPayload = {
        userId: user.id,
        role: user.role,
    };

    return jwt.sign(
        jwtPayload,
        config.jwt_access_secret as string,
        {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            expiresIn: config.jwt_access_expires_in as any,
        },
    );
};

const registerUser = async (payload: User): Promise<User> => {
    // Check if user already exists
    const isUserExists = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (isUserExists) {
        throw new AppError(httpStatus.BAD_REQUEST, 'User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(
        payload.passwordHash,
        Number(config.bcrypt_salt_rounds),
    );

    // Create user
    const newUser = await prisma.user.create({
        data: {
            ...payload,
            passwordHash: hashedPassword,
        },
    });

    return newUser;
};

const loginUser = async (payload: {
    email: string;
    passwordHash: string;
}): Promise<{ accessToken: string }> => {
    // Find user
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email,
        },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    // Compare password
    const isPasswordMatched = await bcrypt.compare(
        payload.passwordHash,
        user.passwordHash,
    );

    if (!isPasswordMatched) {
        throw new AppError(httpStatus.FORBIDDEN, 'Password does not match');
    }

    const accessToken = generateAccessToken(user);

    return {
        accessToken,
    };
};

const getMe = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
            latitude: true,
            longitude: true,
            createdAt: true,
            updatedAt: true,
        },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    return user;
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

    await prisma.user.update({
        where: { id: userId },
        data: { passwordHash: hashedNewPassword },
    });
};

const forgotPassword = async (email: string): Promise<void> => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.user.update({
        where: { id: user.id },
        data: { otp, otpExpiry },
    });

    // Simulate sending email
    console.log(`[OTP] Email: ${email} | OTP: ${otp} | Expires: ${otpExpiry.toISOString()}`);
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

    const hashedNewPassword = await bcrypt.hash(
        newPassword,
        Number(config.bcrypt_salt_rounds),
    );

    await prisma.user.update({
        where: { email },
        data: {
            passwordHash: hashedNewPassword,
            otp: null,
            otpExpiry: null,
        },
    });
};

const googleLogin = async (payload: {
    googleToken: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
}): Promise<{ accessToken: string }> => {
    const client = new OAuth2Client(config.google_client_id);

    const ticket = await client.verifyIdToken({
        idToken: payload.googleToken,
        audience: config.google_client_id,
    });

    const payload_google = ticket.getPayload();

    if (!payload_google || !payload_google.email) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Invalid Google token');
    }

    const { email, name, sub } = payload_google;

    let user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        const hashedPassword = await bcrypt.hash(
            sub,
            Number(config.bcrypt_salt_rounds),
        );

        user = await prisma.user.create({
            data: {
                email,
                name: name || 'Google User',
                passwordHash: hashedPassword,
                phone: payload.phone || 'N/A',
                role: UserRole.USER,
                latitude: payload.latitude ?? 0,
                longitude: payload.longitude ?? 0,
                isVerified: true,
            },
        });
    }

    const accessToken = generateAccessToken(user);

    return { accessToken };
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
};
