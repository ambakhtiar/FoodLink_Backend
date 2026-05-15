import { AccountStatus, UserRole, PostStatus, PostCategory, PostType } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

export type TSystemStats = {
    totalUsers: number;
    totalPosts: number;
    successfulTransactions: number;
};

export type TPaginatedMeta = {
    totalCount: number;
    currentPage: number;
    limit: number;
    totalPages: number;
};

export type TPaginatedResult<T> = {
    meta: TPaginatedMeta;
    data: T[];
};

export type TUserQueryParams = {
    page?: number | undefined;
    limit?: number | undefined;
    searchTerm?: string | undefined;
    status?: AccountStatus | undefined;
    role?: UserRole | undefined;
    sortBy?: 'createdAt' | 'email' | undefined;
    sortOrder?: 'asc' | 'desc' | undefined;
};

export type TOrgQueryParams = {
    page?: number | undefined;
    limit?: number | undefined;
    searchTerm?: string | undefined;
    status?: AccountStatus | undefined;
    sortBy?: 'createdAt' | 'orgName' | undefined;
    sortOrder?: 'asc' | 'desc' | undefined;
};

export type TPostQueryParams = {
    page?: number | undefined;
    limit?: number | undefined;
    searchTerm?: string | undefined;
    status?: PostStatus | undefined;
    category?: PostCategory | undefined;
    type?: PostType | undefined;
    sortBy?: string | undefined;
    sortOrder?: 'asc' | 'desc' | undefined;
};

export type TAdminQueryParams = {
    page?: number | undefined;
    limit?: number | undefined;
    searchTerm?: string | undefined;
};

export type TCreateAdminPayload = {
    name: string;
    email: string;
    phone: string;
    department?: string;
};

const DEFAULT_ADMIN_PASSWORD = 'Admin@12345';

// ─── System Stats ────────────────────────────────────────────────────────────
const getSystemStats = async (): Promise<TSystemStats> => {
    const [totalUsers, totalPosts, successfulTransactions] =
        await prisma.$transaction([
            prisma.user.count(),
            prisma.post.count(),
            prisma.transactionRequest.count({
                where: { status: 'COMPLETED' },
            }),
        ]);

    return { totalUsers, totalPosts, successfulTransactions };
};

// ─── Users ────────────────────────────────────────────────────────────────────
const getAllUsers = async (
    params: TUserQueryParams,
): Promise<TPaginatedResult<object>> => {
    const {
        page = 1,
        limit = 10,
        searchTerm,
        status,
        role,
        sortBy = 'createdAt',
        sortOrder = 'desc',
    } = params;

    const skip = (page - 1) * limit;

    const where = {
        ...(status && { status }),
        ...(role && { role }),
        ...(searchTerm && {
            OR: [
                { email: { contains: searchTerm, mode: 'insensitive' as const } },
                {
                    userProfile: {
                        name: { contains: searchTerm, mode: 'insensitive' as const },
                    },
                },
                {
                    organizationProfile: {
                        orgName: { contains: searchTerm, mode: 'insensitive' as const },
                    },
                },
            ],
        }),
    };

    const [totalCount, users] = await prisma.$transaction([
        prisma.user.count({ where }),
        prisma.user.findMany({
            where,
            include: {
                userProfile: { select: { name: true, impactScore: true } },
                organizationProfile: { select: { orgName: true, impactScore: true } },
            },
            orderBy: { [sortBy]: sortOrder },
            skip,
            take: limit,
        }),
    ]);

    const safeUsers = users.map(({ passwordHash: _pw, otp: _otp, otpExpiry: _exp, ...rest }) => rest);

    return {
        meta: {
            totalCount,
            currentPage: page,
            limit,
            totalPages: Math.ceil(totalCount / limit),
        },
        data: safeUsers,
    };
};

const updateUserStatus = async (
    requestingUserId: string,
    targetUserId: string,
    status: AccountStatus,
): Promise<object> => {
    if (requestingUserId === targetUserId) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'You cannot change your own account status.',
        );
    }

    const target = await prisma.user.findUnique({ where: { id: targetUserId } });
    if (!target) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    const updated = await prisma.user.update({
        where: { id: targetUserId },
        data: { status },
    });

    const { passwordHash: _pw, otp: _otp, otpExpiry: _exp, ...safe } = updated;
    return safe;
};

// ─── Organizations ────────────────────────────────────────────────────────────
const getAllOrganizations = async (
    params: TOrgQueryParams,
): Promise<TPaginatedResult<object>> => {
    const {
        page = 1,
        limit = 10,
        searchTerm,
        status,
        sortBy = 'createdAt',
        sortOrder = 'desc',
    } = params;

    const skip = (page - 1) * limit;

    const where = {
        role: UserRole.ORGANIZATION,
        ...(status && { status }),
        ...(searchTerm && {
            OR: [
                { email: { contains: searchTerm, mode: 'insensitive' as const } },
                {
                    organizationProfile: {
                        orgName: { contains: searchTerm, mode: 'insensitive' as const },
                    },
                },
            ],
        }),
    };

    const orderBy =
        sortBy === 'orgName'
            ? { organizationProfile: { orgName: sortOrder } }
            : { [sortBy]: sortOrder };

    const [totalCount, orgs] = await prisma.$transaction([
        prisma.user.count({ where }),
        prisma.user.findMany({
            where,
            include: {
                organizationProfile: true,
            },
            orderBy,
            skip,
            take: limit,
        }),
    ]);

    const safeOrgs = orgs.map(({ passwordHash: _pw, otp: _otp, otpExpiry: _exp, ...rest }) => rest);

    return {
        meta: {
            totalCount,
            currentPage: page,
            limit,
            totalPages: Math.ceil(totalCount / limit),
        },
        data: safeOrgs,
    };
};

const updateOrgStatus = async (
    orgId: string,
    status: AccountStatus,
): Promise<object> => {
    const org = await prisma.user.findUnique({
        where: { id: orgId, role: UserRole.ORGANIZATION },
    });

    if (!org) {
        throw new AppError(httpStatus.NOT_FOUND, 'Organization not found');
    }

    const updated = await prisma.user.update({
        where: { id: orgId },
        data: { status },
    });

    const { passwordHash: _pw, otp: _otp, otpExpiry: _exp, ...safe } = updated;
    return safe;
};

// ─── Posts ────────────────────────────────────────────────────────────────────
const getAllPosts = async (
    params: TPostQueryParams,
): Promise<TPaginatedResult<object>> => {
    const {
        page = 1,
        limit = 10,
        searchTerm,
        status,
        category,
        type,
        sortBy = 'createdAt',
        sortOrder = 'desc',
    } = params;

    const skip = (page - 1) * limit;

    const where: any = {
        ...(status && { status }),
        ...(category && { category }),
        ...(type && { type }),
        ...(searchTerm && {
            OR: [
                { title: { contains: searchTerm, mode: 'insensitive' } },
                { description: { contains: searchTerm, mode: 'insensitive' } },
            ],
        }),
    };

    const [totalCount, posts] = await prisma.$transaction([
        prisma.post.count({ where }),
        prisma.post.findMany({
            where,
            include: {
                author: {
                    include: {
                        userProfile: { select: { name: true } },
                        organizationProfile: { select: { orgName: true } },
                    },
                },
            },
            orderBy: { [sortBy]: sortOrder },
            skip,
            take: limit,
        }),
    ]);

    return {
        meta: {
            totalCount,
            currentPage: page,
            limit,
            totalPages: Math.ceil(totalCount / limit),
        },
        data: posts,
    };
};

const updatePostStatus = async (
    postId: string,
    status: PostStatus,
): Promise<object> => {
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    const updated = await prisma.post.update({
        where: { id: postId },
        data: { status },
    });

    return updated;
};

const adminDeletePost = async (postId: string): Promise<null> => {
    const post = await prisma.post.findUnique({ where: { id: postId } });
    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    await prisma.post.delete({ where: { id: postId } });
    return null;
};

// ─── Admins ────────────────────────────────────────────────────────────────────
const getAllAdmins = async (
    params: TAdminQueryParams,
): Promise<TPaginatedResult<object>> => {
    const { page = 1, limit = 10, searchTerm } = params;
    const skip = (page - 1) * limit;

    const where = {
        role: UserRole.ADMIN,
        ...(searchTerm && {
            OR: [
                { email: { contains: searchTerm, mode: 'insensitive' as const } },
                {
                    adminProfile: {
                        name: { contains: searchTerm, mode: 'insensitive' as const },
                    },
                },
                {
                    adminProfile: {
                        department: { contains: searchTerm, mode: 'insensitive' as const },
                    },
                },
            ],
        }),
    };

    const [totalCount, admins] = await prisma.$transaction([
        prisma.user.count({ where }),
        prisma.user.findMany({
            where,
            include: {
                adminProfile: true,
            },
            orderBy: { createdAt: 'desc' },
            skip,
            take: limit,
        }),
    ]);

    const safeAdmins = admins.map(({ passwordHash: _pw, otp: _otp, otpExpiry: _exp, ...rest }) => rest);

    return {
        meta: {
            totalCount,
            currentPage: page,
            limit,
            totalPages: Math.ceil(totalCount / limit),
        },
        data: safeAdmins,
    };
};

const createAdmin = async (payload: TCreateAdminPayload): Promise<object> => {
    const { name, email, phone, department } = payload;

    // Check email uniqueness
    const existingEmail = await prisma.user.findUnique({ where: { email } });
    if (existingEmail) {
        throw new AppError(httpStatus.CONFLICT, 'An account with this email already exists.');
    }

    // Check phone uniqueness
    if (phone) {
        const existingPhone = await prisma.user.findFirst({ where: { phone } });
        if (existingPhone) {
            throw new AppError(httpStatus.CONFLICT, 'An account with this phone number already exists.');
        }
    }

    const passwordHash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 12);

    const newUser = await prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
            data: {
                email,
                phone,
                passwordHash,
                role: UserRole.ADMIN,
                status: AccountStatus.ACTIVE,
                needsPasswordChange: true,
                isVerified: true,
            },
        });

        await tx.adminProfile.create({
            data: {
                userId: user.id,
                name,
                department: department || null,
            },
        });

        return user;
    });

    const { passwordHash: _pw, otp: _otp, otpExpiry: _exp, ...safeUser } = newUser;

    return {
        ...safeUser,
        defaultPassword: DEFAULT_ADMIN_PASSWORD,
    };
};

export const AdminService = {
    getSystemStats,
    getAllUsers,
    updateUserStatus,
    getAllOrganizations,
    updateOrgStatus,
    getAllPosts,
    updatePostStatus,
    adminDeletePost,
    getAllAdmins,
    createAdmin,
};
