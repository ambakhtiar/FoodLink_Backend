import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';
import { uploadImageToCloudinary } from '../../utils/cloudinary';

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

export const UserController = {
    updateMyProfile,
};
