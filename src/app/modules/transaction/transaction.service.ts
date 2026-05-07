import {
  PostStatus,
  PostType,
  TransactionRequest,
  TransactionStatus,
  UserRole,
} from '@prisma/client';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

const createTransactionRequest = async (
  userId: string,
  userRole: UserRole,
  payload: { postId: string; requestedQuantity: string },
): Promise<TransactionRequest> => {
  const post = await prisma.post.findUnique({
    where: { id: payload.postId },
  });

  if (!post) {
    throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
  }

  if (post.status !== PostStatus.AVAILABLE) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Post is not available for request',
    );
  }

  // Validate Intent:
  // DONATION post -> only RECEIVER can request
  // REQUEST post -> only DONOR can fulfill
  if (post.type === PostType.DONATION && userRole !== UserRole.RECEIVER) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'Only Receivers can request a donation post',
    );
  }

  if (post.type === PostType.REQUEST && userRole !== UserRole.DONOR) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'Only Donors can fulfill a request post',
    );
  }

  // Atomic Update using Transaction
  const result = await prisma.$transaction(async (tx) => {
    const transactionRequest = await tx.transactionRequest.create({
      data: {
        postId: payload.postId,
        actorId: userId,
        quantity: payload.requestedQuantity,
        status: TransactionStatus.PENDING,
      },
    });

    await tx.post.update({
      where: { id: payload.postId },
      data: { status: PostStatus.PENDING },
    });

    return transactionRequest;
  });

  return result;
};

const respondToTransaction = async (
  userId: string,
  transactionId: string,
  status: TransactionStatus.APPROVED | TransactionStatus.REJECTED,
): Promise<TransactionRequest> => {
  const transactionRequest = await prisma.transactionRequest.findUnique({
    where: { id: transactionId },
    include: { post: true },
  });

  if (!transactionRequest) {
    throw new AppError(httpStatus.NOT_FOUND, 'Transaction request not found');
  }

  // Only the Post author can respond
  if (transactionRequest.post.authorId !== userId) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      'You are not authorized to respond to this transaction',
    );
  }

  if (transactionRequest.status !== TransactionStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Transaction is already processed',
    );
  }

  const result = await prisma.$transaction(async (tx) => {
    const updatedTransaction = await tx.transactionRequest.update({
      where: { id: transactionId },
      data: { status },
    });

    // Update Post Status based on response
    let postStatus: PostStatus = PostStatus.AVAILABLE;
    if (status === TransactionStatus.APPROVED) {
      postStatus = PostStatus.COMPLETED;
    } else if (status === TransactionStatus.REJECTED) {
      postStatus = PostStatus.AVAILABLE;
    }

    await tx.post.update({
      where: { id: transactionRequest.postId },
      data: { status: postStatus },
    });

    return updatedTransaction;
  });

  return result;
};

export const TransactionService = {
  createTransactionRequest,
  respondToTransaction,
};
