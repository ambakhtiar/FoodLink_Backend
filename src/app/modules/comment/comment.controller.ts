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

const deleteCommentHandler = catchAsync(async (req: Request, res: Response) => {
    const { commentId } = req.params as { commentId: string };
    const userId = req.user.userId;

    await CommentService.deleteComment(commentId, userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Comment deleted successfully',
        data: null,
    });
});

export const CommentController = {
    createCommentHandler,
    getCommentsHandler,
    deleteCommentHandler,
};
