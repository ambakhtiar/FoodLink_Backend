import { UserProfile } from '../../../generated/prisma';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

const updateProfile = async (
    userId: string,
    payload: Partial<UserProfile>,
): Promise<UserProfile> => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: { userProfile: true },
    });

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }

    if (!user.userProfile) {
        throw new AppError(httpStatus.NOT_FOUND, 'User profile not found');
    }

    const updatedProfile = await prisma.userProfile.update({
        where: { userId },
        data: payload,
    });

    return updatedProfile;
};

export const UserService = {
    updateProfile,
};
