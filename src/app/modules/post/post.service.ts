import { Post, PostCategory, PostType, Prisma } from '../../../generated/prisma';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';
import { AiService } from '../ai/ai.service';

export type TCreatePostInput = {
    type: PostType;
    category: PostCategory;
    quantity: number;
    latitude: number;
    longitude: number;
    imageUrl?: string;
    title?: string;
    description?: string;
    metadata?: Prisma.InputJsonValue;
    authorId: string;
};

const createPost = async (payload: TCreatePostInput): Promise<Post> => {
    const {
        type,
        category,
        quantity,
        latitude,
        longitude,
        imageUrl,
        title,
        description,
        metadata,
        authorId,
    } = payload;

    let postTitle = title;
    let postDescription = description;
    let estimatedShelfLife: Date | undefined;

    if (type === PostType.DONATION && imageUrl) {
        const aiDetails = await AiService.generateFoodDetails(imageUrl);
        postTitle = aiDetails.title;
        postDescription = aiDetails.description;
        estimatedShelfLife = aiDetails.estimatedShelfLife;
    }

    if (!postTitle || !postDescription) {
        if (type === PostType.REQUEST) {
            postTitle = postTitle ?? 'Item Request';
            postDescription = postDescription ?? 'Requesting item donation';
        } else {
            postTitle = postTitle ?? 'Item Donation';
            postDescription = postDescription ?? 'Donation of items';
        }
    }

    const post = await prisma.post.create({
        data: {
            type,
            category,
            title: postTitle,
            description: postDescription,
            quantity,
            latitude,
            longitude,
            imageUrl: imageUrl ?? null,
            estimatedShelfLife: estimatedShelfLife ?? null,
            ...(metadata !== undefined && { metadata }),
            authorId,
        },
    });

    return post;
};

const fetchAvailablePostsWithinRadius = async (
    latitude: number,
    longitude: number,
    page: number = 1,
    limit: number = 10,
    type?: PostType,
    radiusInKm: number = 5,
) => {
    const skip = (page - 1) * limit;

    // Approximate degree offsets for the given radius
    // 1 degree of latitude is ~111.32 km
    const dLat = radiusInKm / 111.32;
    const dLng =
        radiusInKm / (111.32 * Math.cos(latitude * (Math.PI / 180)));

    const where: Prisma.PostWhereInput = {
        status: 'AVAILABLE',
        latitude: {
            gte: latitude - dLat,
            lte: latitude + dLat,
        },
        longitude: {
            gte: longitude - dLng,
            lte: longitude + dLng,
        },
    };

    if (type) {
        where.type = type;
    }

    // Query for total count using Prisma
    const totalCount = await prisma.post.count({ where });

    // Query for paginated data using Prisma
    const posts = await prisma.post.findMany({
        where,
        orderBy: {
            createdAt: 'desc',
        },
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
        data: posts,
    };
};

const getMyPosts = async (
    userId: string,
    page: number = 1,
    limit: number = 10,
) => {
    const skip = (page - 1) * limit;

    const [posts, totalCount] = await Promise.all([
        prisma.post.findMany({
            where: {
                authorId: userId,
            },
            include: {
                _count: {
                    select: {
                        transactionRequests: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
            skip,
            take: limit,
        }),
        prisma.post.count({
            where: {
                authorId: userId,
            },
        }),
    ]);

    return {
        meta: {
            totalCount,
            currentPage: page,
            limit,
            totalPages: Math.ceil(totalCount / limit),
        },
        data: posts,
    };
};

const getPostById = async (id: string) => {
    const post = await prisma.post.findUnique({
        where: { id },
        include: {
            author: {
                include: {
                    userProfile: {
                        select: { name: true },
                    },
                    organizationProfile: {
                        select: { orgName: true },
                    },
                },
            },
            transactionRequests: {
                include: {
                    actor: {
                        include: {
                            userProfile: {
                                select: { name: true },
                            },
                            organizationProfile: {
                                select: { orgName: true },
                            },
                        },
                    },
                },
            },
        },
    });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    return post;
};

const updatePost = async (
    id: string,
    userId: string,
    payload: Partial<Post>,
) => {
    const post = await prisma.post.findUnique({
        where: { id },
    });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    if (post.authorId !== userId) {
        throw new AppError(httpStatus.FORBIDDEN, 'You can only update your own posts');
    }

    // Check if approved transactions exist
    const approvedTransaction = await prisma.transactionRequest.findFirst({
        where: {
            postId: id,
            status: 'APPROVED',
        },
    });

    if (approvedTransaction) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'Cannot update post with approved transactions',
        );
    }

    const result = await prisma.post.update({
        where: { id },
        data: payload,
    });

    return result;
};

const deletePost = async (id: string, userId: string) => {
    const post = await prisma.post.findUnique({
        where: { id },
    });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    if (post.authorId !== userId) {
        throw new AppError(httpStatus.FORBIDDEN, 'You can only delete your own posts');
    }

    if (post.status !== 'AVAILABLE' && post.status !== 'EXPIRED') {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'Can only delete AVAILABLE or EXPIRED posts',
        );
    }

    // Check if pending or approved transactions exist
    const activeTransaction = await prisma.transactionRequest.findFirst({
        where: {
            postId: id,
            status: {
                in: ['PENDING', 'APPROVED'],
            },
        },
    });

    if (activeTransaction) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'Cannot delete post with pending or approved transactions',
        );
    }

    await prisma.post.delete({
        where: { id },
    });

    return null;
};

export const PostService = {
    createPost,
    fetchAvailablePostsWithinRadius,
    getMyPosts,
    getPostById,
    updatePost,
    deletePost,
};
