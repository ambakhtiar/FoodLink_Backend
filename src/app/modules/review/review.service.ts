import { Review, TransactionStatus } from '../../../generated/prisma';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

const createReview = async (payload: {
    reviewerId: string;
    revieweeId: string;
    transactionId: string;
    rating: number;
    comment?: string;
}): Promise<Review> => {
    const transaction = await prisma.transactionRequest.findUnique({
        where: { id: payload.transactionId },
        include: { post: true },
    });

    if (!transaction) {
        throw new AppError(httpStatus.NOT_FOUND, 'Transaction not found');
    }

    if (transaction.status !== TransactionStatus.COMPLETED) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'Can only review completed transactions',
        );
    }

    // Participant guard: reviewer must be the post author OR the transaction actor
    const isAuthor = transaction.post.authorId === payload.reviewerId;
    const isActor = transaction.actorId === payload.reviewerId;

    if (!isAuthor && !isActor) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'You were not part of this transaction',
        );
    }

    const existingReview = await prisma.review.findFirst({
        where: {
            reviewerId: payload.reviewerId,
            transactionId: payload.transactionId,
        },
    });

    if (existingReview) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'You have already reviewed this transaction',
        );
    }

    const review = await prisma.$transaction(async (tx) => {
        const created = await tx.review.create({
            data: {
                reviewerId: payload.reviewerId,
                revieweeId: payload.revieweeId,
                transactionId: payload.transactionId,
                rating: payload.rating,
                comment: payload.comment ?? null,
            },
        });

        const reviews = await tx.review.findMany({
            where: { revieweeId: payload.revieweeId },
        });

        const avgRating =
            reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

        // Update impact score on the appropriate profile
        const reviewee = await tx.user.findUnique({
            where: { id: payload.revieweeId },
            include: {
                userProfile: true,
                organizationProfile: true,
            },
        });

        if (reviewee?.userProfile) {
            await tx.userProfile.update({
                where: { userId: payload.revieweeId },
                data: { impactScore: avgRating },
            });
        } else if (reviewee?.organizationProfile) {
            await tx.organizationProfile.update({
                where: { userId: payload.revieweeId },
                data: { impactScore: avgRating },
            });
        }

        return created;
    });

    return review;
};

export const ReviewService = {
    createReview,
};
