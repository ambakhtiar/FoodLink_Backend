import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { LikeService } from './like.service';

const toggleLikeHandler = catchAsync(async (req: Request, res: Response) => {
    const { id: postId } = req.params as { id: string };
    const userId = req.user.userId;

    const result = await LikeService.toggleLike(postId, userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.isLiked ? 'Post liked' : 'Post unliked',
        data: result,
    });
});

export const LikeController = {
    toggleLikeHandler,
};
