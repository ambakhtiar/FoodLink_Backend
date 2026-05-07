import { Post, PostType, Prisma } from '@prisma/client';
import prisma from '../../utils/prisma';
import { AiService } from '../ai/ai.service';

export type TCreatePostInput = {
  type: PostType;
  quantity: number;
  latitude: number;
  longitude: number;
  imageUrl?: string;
  title?: string;
  description?: string;
  authorId: string;
};

const createPost = async (payload: TCreatePostInput): Promise<Post> => {
  const {
    type,
    quantity,
    latitude,
    longitude,
    imageUrl,
    title,
    description,
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
      postTitle = postTitle ?? 'Food Request';
      postDescription = postDescription ?? 'Requesting food donation';
    } else {
      postTitle = postTitle ?? 'Food Donation';
      postDescription = postDescription ?? 'Donation of food items';
    }
  }

  const post = await prisma.post.create({
    data: {
      type,
      title: postTitle,
      description: postDescription,
      quantity,
      latitude,
      longitude,
      imageUrl: imageUrl ?? null,
      estimatedShelfLife: estimatedShelfLife ?? null,
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

export const PostService = {
  createPost,
  fetchAvailablePostsWithinRadius,
};
