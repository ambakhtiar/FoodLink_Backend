import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TransactionService } from './transaction.service';

const handleCreateTransaction = catchAsync(
    async (req: Request, res: Response) => {
        const { userId } = req.user;
        const result = await TransactionService.createTransactionRequest(
            userId,
            req.body,
        );

        sendResponse(res, {
            statusCode: httpStatus.CREATED,
            success: true,
            message: 'Transaction request created successfully',
            data: result,
        });
    },
);

const handleGetMyRequests = catchAsync(
    async (req: Request, res: Response) => {
        const { userId } = req.user;
        const page = parseInt(req.query['page'] as string) || 1;
        const limit = parseInt(req.query['limit'] as string) || 10;

        const result = await TransactionService.getMyRequests(userId, page, limit);

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'My transaction requests retrieved successfully',
            meta: result.meta,
            data: result.data,
        });
    },
);

const handleGetRequestsByPostId = catchAsync(
    async (req: Request, res: Response) => {
        const { userId } = req.user;
        const { postId } = req.params;

        const result = await TransactionService.getRequestsByPostId(
            userId,
            postId as string,
        );

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Post transaction requests retrieved successfully',
            data: result,
        });
    },
);

const handleRespondTransaction = catchAsync(
    async (req: Request, res: Response) => {
        const { userId } = req.user;
        const { id } = req.params;
        const { status } = req.body;

        const result = await TransactionService.respondToTransaction(
            userId,
            id as string,
            status,
        );

        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: `Transaction request ${status.toLowerCase()} successfully`,
            data: result,
        });
    },
);

export const TransactionController = {
    handleCreateTransaction,
    handleGetMyRequests,
    handleGetRequestsByPostId,
    handleRespondTransaction,
};
