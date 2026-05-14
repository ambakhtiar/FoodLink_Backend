import { UserRole } from '@prisma/client';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

const updateMyProfile = async (
    userId: string,
    payload: {
        name?: string;
        orgName?: string;
        latitude?: number;
        longitude?: number;
        profilePictureUrl?: string;
        establishedYear?: number;
        registrationNumber?: string;
    },
) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    // Update User level fields
    if (payload.profilePictureUrl) {
        await prisma.user.update({
            where: { id: userId },
            data: { profilePictureUrl: payload.profilePictureUrl },
        });
    }

    // Update Profile level fields based on role
    if (user.role === UserRole.USER) {
        await prisma.userProfile.update({
            where: { userId },
            data: {
                ...(payload.name && { name: payload.name }),
                ...(payload.latitude && { latitude: payload.latitude }),
                ...(payload.longitude && { longitude: payload.longitude }),
            },
        });
    } else if (user.role === UserRole.ORGANIZATION) {
        await prisma.organizationProfile.update({
            where: { userId },
            data: {
                ...(payload.orgName && { orgName: payload.orgName }),
                ...(payload.latitude && { latitude: payload.latitude }),
                ...(payload.longitude && { longitude: payload.longitude }),
                ...(payload.establishedYear && { establishedYear: payload.establishedYear }),
                ...(payload.registrationNumber && { registrationNumber: payload.registrationNumber }),
            },
        });
    } else if (user.role === UserRole.ADMIN || user.role === UserRole.SUPER_ADMIN) {
        await prisma.adminProfile.update({
            where: { userId },
            data: {
                ...(payload.name && { name: payload.name }),
            },
        });
    }

    // Return the full updated user with profile
    return await prisma.user.findUnique({
        where: { id: userId },
        include: {
            userProfile: true,
            organizationProfile: true,
            adminProfile: true,
        },
    });
};

const getPublicProfile = async (userId: string) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            role: true,
            status: true,
            profilePictureUrl: true,
            isVerified: true,
            createdAt: true,
            userProfile: {
                select: {
                    name: true,
                    impactScore: true,
                    latitude: true,
                    longitude: true,
                },
            },
            organizationProfile: {
                select: {
                    orgName: true,
                    establishedYear: true,
                    registrationNumber: true,
                    impactScore: true,
                    latitude: true,
                    longitude: true,
                },
            },
            adminProfile: {
                select: {
                    name: true,
                    department: true,
                },
            },
        },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    return user;
};

export const UserService = {
    updateMyProfile,
    getPublicProfile,
};
