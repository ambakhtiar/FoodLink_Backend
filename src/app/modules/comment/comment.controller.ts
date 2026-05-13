import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CommentService } from './comment.service';

const createCommentHandler = catchAsync(async (req: Request, res: Response) => {
    const { id: postId } = req.params as { id: string };
    const userId = req.user.userId;
    const { content, parentId } = req.body;

    const result = await CommentService.createComment({
        content,
        postId,
        userId,
        parentId,
    });

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Comment added successfully',
        data: result,
    });
});

const getCommentsHandler = catchAsync(async (req: Request, res: Response) => {
    const { id: postId } = req.params as { id: string };

    const result = await CommentService.getCommentsByPostId(postId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Comments fetched successfully',
        data: result,
    });
});

export const CommentController = {
    createCommentHandler,
    getCommentsHandler,
};
