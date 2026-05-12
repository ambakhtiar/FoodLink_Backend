import httpStatus from 'http-status';
import prisma from '../../utils/prisma';
import AppError from '../../utils/AppError';

const toggleLike = async (postId: string, userId: string) => {
    // 1. Check if post exists
    const post = await prisma.post.findUnique({
        where: { id: postId },
    });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    // 2. Check if like already exists
    const existingLike = await prisma.like.findUnique({
        where: {
            postId_userId: {
                postId,
                userId,
            },
        },
    });

    return await prisma.$transaction(async (tx) => {
        if (existingLike) {
            // Remove like
            await tx.like.delete({
                where: {
                    postId_userId: {
                        postId,
                        userId,
                    },
                },
            });

            // Decrement likesCount
            const updatedPost = await tx.post.update({
                where: { id: postId },
                data: {
                    likesCount: {
                        decrement: 1,
                    },
                },
            });

            return { isLiked: false, likesCount: updatedPost.likesCount };
        } else {
            // Add like
            await tx.like.create({
                data: {
                    postId,
                    userId,
                },
            });

            // Increment likesCount
            const updatedPost = await tx.post.update({
                where: { id: postId },
                data: {
                    likesCount: {
                        increment: 1,
                    },
                },
            });

            return { isLiked: true, likesCount: updatedPost.likesCount };
        }
    });
};

export const LikeService = {
    toggleLike,
};
