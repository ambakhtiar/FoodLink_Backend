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
    imageUrls?: string[];
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
        imageUrls,
        title,
        description,
        metadata,
        authorId,
    } = payload;

    let postTitle = title;
    let postDescription = description;
    let estimatedShelfLife: Date | undefined;

    // Send ONLY the FIRST image buffer to the Gemini AI service
    if (type === PostType.DONATION && imageUrls && imageUrls.length > 0) {
        try {
            const aiDetails = await AiService.generateFoodDetails(imageUrls[0] as string, title || '', description || '');
            postTitle = aiDetails.title;
            postDescription = aiDetails.description;
            estimatedShelfLife = aiDetails.estimatedShelfLife;
        } catch (error) {
            console.error('AI Generation failed during post creation, falling back to manual details', error);
            // Fallback: use user provided title/description or keep defaults
            postTitle = title;
            postDescription = description;
        }
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
            imageUrls: imageUrls || [],
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
        include: {
            author: {
                include: {
                    userProfile: { select: { name: true, impactScore: true } },
                    organizationProfile: { select: { orgName: true, impactScore: true } },
                },
            },
            _count: {
                select: {
                    transactionRequests: true,
                    likes: true,
                    comments: true,
                },
            },
        },
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
        data: posts.map((post: any) => ({
            ...post,
            likesCount: post._count?.likes || 0,
            commentsCount: post._count?.comments || 0,
        })),
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
                author: {
                    include: {
                        userProfile: { select: { name: true, impactScore: true } },
                        organizationProfile: { select: { orgName: true, impactScore: true } },
                    },
                },
                _count: {
                    select: {
                        transactionRequests: true,
                        likes: true,
                        comments: true,
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
        data: posts.map((post: any) => ({
            ...post,
            likesCount: post._count?.likes || 0,
            commentsCount: post._count?.comments || 0,
        })),
    };
};

const getPostById = async (id: string, userId?: string) => {
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
            likes: {
                select: {
                    userId: true,
                    user: {
                        include: {
                            userProfile: { select: { name: true } },
                            organizationProfile: { select: { orgName: true } },
                        },
                    },
                },
                take: 5, // Show a few users who liked it
            },
        },
    });

    if (!post) {
        throw new AppError(httpStatus.NOT_FOUND, 'Post not found');
    }

    const isLikedByMe = userId ? post.likes.some(like => like.userId === userId) : false;

    return {
        ...post,
        isLikedByMe,
    };
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

    const {
        id: _id,
        authorId: _authorId,
        createdAt: _createdAt,
        updatedAt: _updatedAt,
        commentsCount: _commentsCount,
        ...updateData
    } = payload as any;

    const result = await prisma.post.update({
        where: { id },
        data: updateData as any,
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

const getAllPosts = async (query: {
    searchTerm?: string | undefined;
    category?: PostCategory | undefined;
    type?: PostType | undefined;
    sortBy?: string | undefined;
    sortOrder?: 'asc' | 'desc' | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    userId?: string | undefined;
}) => {
    const {
        searchTerm,
        category,
        type,
        sortBy = 'createdAt',
        sortOrder = 'desc',
        page = 1,
        limit = 10,
        userId,
    } = query;

    const skip = (page - 1) * limit;

    const where: Prisma.PostWhereInput = {
        status: 'AVAILABLE',
    };

    if (searchTerm) {
        where.OR = [
            { title: { contains: searchTerm, mode: 'insensitive' } },
            { description: { contains: searchTerm, mode: 'insensitive' } },
        ];
    }

    if (category) {
        where.category = category;
    }

    if (type) {
        where.type = type;
    }

    const [posts, totalCount] = await Promise.all([
        prisma.post.findMany({
            where,
            orderBy: {
                [sortBy]: sortOrder,
            },
            skip,
            take: limit,
            select: {
                id: true,
                title: true,
                description: true,
                imageUrls: true,
                type: true,
                category: true,
                quantity: true,
                status: true,
                likesCount: true,
                commentsCount: true,
                createdAt: true,
                estimatedShelfLife: true,
                author: {
                    select: {
                        id: true,
                        profilePictureUrl: true,
                        userProfile: {
                            select: { name: true, impactScore: true },
                        },
                        organizationProfile: {
                            select: { orgName: true, impactScore: true },
                        },
                    },
                },
            },
        }),
        prisma.post.count({ where }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    // Compute isLikedByMe for each post if userId is provided
    let likedPostIds = new Set<string>();
    if (userId && posts.length > 0) {
        const postIds = posts.map((p: any) => p.id);
        const userLikes = await prisma.like.findMany({
            where: {
                userId,
                postId: { in: postIds },
            },
            select: { postId: true },
        });
        likedPostIds = new Set(userLikes.map((l: any) => l.postId));
    }

    const postsWithLiked = posts.map((p: any) => ({
        ...p,
        isLikedByMe: likedPostIds.has(p.id),
    }));

    return {
        meta: {
            totalCount,
            currentPage: page,
            limit,
            totalPages,
            hasNextPage: page < totalPages,
        },
        data: postsWithLiked,
    };
};

export const PostService = {
    createPost,
    getAllPosts,
    fetchAvailablePostsWithinRadius,
    getMyPosts,
    getPostById,
    updatePost,
    deletePost,
};
