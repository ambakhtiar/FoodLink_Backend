import httpStatus from 'http-status';
import prisma from '../../utils/prisma';
import AppError from '../../utils/AppError';

const createComment = async (payload: {
    content: string;
    postId: string;
    userId: string;
    parentId?: string;
}) => {
    const { content, postId, userId, parentId } = payload;

    // 1. Check if post exists
    const post = await prisma.post.findUnique({
        where: { id: postId },
    });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    // 2. If it's a reply, check depth
    if (parentId) {
        const parentComment = await prisma.comment.findUnique({
            where: { id: parentId },
        });

        if (!parentComment) {
            throw new AppError(httpStatus.NOT_FOUND, 'Parent comment not found');
        }

        // Check if parent comment is already a reply (has its own parentId)
        if (parentComment.parentId) {
            throw new AppError(
                httpStatus.BAD_REQUEST,
                'Only 1-level deep replies are allowed (Comment -> Reply)'
            );
        }
    }

    // 3. Create comment and increment count in a transaction
    return await prisma.$transaction(async (tx) => {
        const comment = await tx.comment.create({
            data: {
                content,
                postId,
                userId,
                parentId: parentId || null,
            },
            include: {
                user: {
                    include: {
                        userProfile: { select: { name: true } },
                        organizationProfile: { select: { orgName: true } },
                    },
                },
            },
        });

        await tx.post.update({
            where: { id: postId },
            data: {
                commentsCount: {
                    increment: 1,
                },
            },
        });

        return comment;
    });
};

const getCommentsByPostId = async (postId: string) => {
    // Fetch root comments (no parentId) with their direct replies
    const comments = await prisma.comment.findMany({
        where: {
            postId,
            parentId: null,
        },
        include: {
            user: {
                include: {
                    userProfile: { select: { name: true } },
                    organizationProfile: { select: { orgName: true } },
                },
            },
            replies: {
                include: {
                    user: {
                        include: {
                            userProfile: { select: { name: true } },
                            organizationProfile: { select: { orgName: true } },
                        },
                    },
                },
                orderBy: {
                    createdAt: 'asc',
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return comments;
};

export const CommentService = {
    createComment,
    getCommentsByPostId,
};
