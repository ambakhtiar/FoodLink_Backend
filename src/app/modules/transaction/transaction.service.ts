import { PostStatus, TransactionRequest, TransactionStatus } from '../../../generated/prisma';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

const createTransactionRequest = async (
    userId: string,
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

    // Prevent users from transacting on their own posts
    if (post.authorId === userId) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'You cannot transact on your own post',
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
            data: { status: PostStatus.PENDING_HANDOVER },
        });

        return transactionRequest;
    });

    return result;
};

const getMyRequests = async (
    userId: string,
    page: number = 1,
    limit: number = 10,
): Promise<{
    meta: {
        totalCount: number;
        currentPage: number;
        limit: number;
        totalPages: number;
    };
    data: TransactionRequest[];
}> => {
    const skip = (page - 1) * limit;

    const totalCount = await prisma.transactionRequest.count({
        where: { actorId: userId },
    });

    const data = await prisma.transactionRequest.findMany({
        where: { actorId: userId },
        include: { post: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
    });

    return {
        meta: {
            totalCount,
            currentPage: page,
            limit,
            totalPages: Math.ceil(totalCount / limit),
        },
        data,
    };
};

const getRequestsByPostId = async (
    userId: string,
    postId: string,
): Promise<TransactionRequest[]> => {
    const post = await prisma.post.findUnique({
        where: { id: postId },
    });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    if (post.authorId !== userId) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'You are not authorized to view requests for this post',
        );
    }

    return prisma.transactionRequest.findMany({
        where: { postId },
        include: { actor: true },
        orderBy: { createdAt: 'desc' },
    });
};

const respondToTransaction = async (
    userId: string,
    transactionId: string,
    status: 'APPROVED' | 'REJECTED',
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
    getMyRequests,
    getRequestsByPostId,
    respondToTransaction,
};
