import { UserRole } from '../../../generated/prisma';
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
        return await prisma.userProfile.update({
            where: { userId },
            data: {
                ...(payload.name && { name: payload.name }),
                ...(payload.latitude && { latitude: payload.latitude }),
                ...(payload.longitude && { longitude: payload.longitude }),
            },
        });
    }

    if (user.role === UserRole.ORGANIZATION) {
        return await prisma.organizationProfile.update({
            where: { userId },
            data: {
                ...(payload.orgName && { orgName: payload.orgName }),
                ...(payload.latitude && { latitude: payload.latitude }),
                ...(payload.longitude && { longitude: payload.longitude }),
                ...(payload.establishedYear && { establishedYear: payload.establishedYear }),
                ...(payload.registrationNumber && { registrationNumber: payload.registrationNumber }),
            },
        });
    }

    if (user.role === UserRole.ADMIN || user.role === UserRole.SUPER_ADMIN) {
        return await prisma.adminProfile.update({
            where: { userId },
            data: {
                ...(payload.name && { name: payload.name }),
            },
        });
    }

    throw new AppError(httpStatus.BAD_REQUEST, 'Invalid user role for profile update');
};

export const UserService = {
    updateMyProfile,
};
