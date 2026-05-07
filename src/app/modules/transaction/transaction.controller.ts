import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TransactionService } from './transaction.service';

const handleCreateTransaction = catchAsync(async (req: Request, res: Response) => {
  const { userId, role } = req.user;
  const result = await TransactionService.createTransactionRequest(
    userId,
    role,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Transaction request created successfully',
    data: result,
  });
});

const handleRespondTransaction = catchAsync(async (req: Request, res: Response) => {
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
});

export const TransactionController = {
  handleCreateTransaction,
  handleRespondTransaction,
};
