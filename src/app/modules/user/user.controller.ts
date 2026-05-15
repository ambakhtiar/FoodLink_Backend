import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
import { 
    uploadImageToCloudinary, 
    deleteImageFromCloudinary, 
    extractPublicIdFromUrl 
} from '../../utils/cloudinary';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
    const { userId } = req.user;
    let payload = { ...req.body };

    if (req.file) {
        const imageUrl = await uploadImageToCloudinary(req.file.buffer);
        payload.profilePictureUrl = imageUrl;
    }

    const result = await UserService.updateMyProfile(userId, payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile updated successfully',
        data: result,
    });
});

const updateProfilePicture = catchAsync(async (req: Request, res: Response) => {
    const { userId } = req.user;

    if (!req.file) {
        throw new AppError(httpStatus.BAD_REQUEST, 'Please upload a file');
    }

    // 1. Get current user to check for existing picture
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { profilePictureUrl: true }
    });

    // 2. If exists, delete old one from Cloudinary
    if (user?.profilePictureUrl) {
        const publicId = extractPublicIdFromUrl(user.profilePictureUrl);
        if (publicId) {
            await deleteImageFromCloudinary(publicId);
        }
    }

    // 3. Upload new one
    const imageUrl = await uploadImageToCloudinary(req.file.buffer);

    // 4. Update DB
    const result = await UserService.updateMyProfile(userId, {
        profilePictureUrl: imageUrl
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile picture updated successfully',
        data: result,
    });
});

const deleteProfilePicture = catchAsync(async (req: Request, res: Response) => {
    const { userId } = req.user;

    // 1. Get current user
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { profilePictureUrl: true }
    });

    if (!user?.profilePictureUrl) {
        throw new AppError(httpStatus.NOT_FOUND, 'No profile picture found');
    }

    // 2. Delete from Cloudinary
    const publicId = extractPublicIdFromUrl(user.profilePictureUrl);
    if (publicId) {
        await deleteImageFromCloudinary(publicId);
    }

    // 3. Set DB field to null
    await prisma.user.update({
        where: { id: userId },
        data: { profilePictureUrl: null }
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile picture deleted successfully',
        data: null,
    });
});

const getPublicProfile = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await UserService.getPublicProfile(id as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Public profile retrieved successfully',
        data: result,
    });
});

export const UserController = {
    updateMyProfile,
    updateProfilePicture,
    deleteProfilePicture,
    getPublicProfile,
};
