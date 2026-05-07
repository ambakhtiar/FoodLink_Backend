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
  type?: PostType,
  radiusInKm: number = 5,
): Promise<Post[]> => {
  // Haversine formula in raw SQL
  // 6371 is the earth's radius in kilometers
  const typeFilter = type
    ? Prisma.sql`AND type = ${type}::"PostType"`
    : Prisma.empty;

  const posts = await prisma.$queryRaw<Post[]>`
    SELECT * FROM (
      SELECT *, (
        6371 * acos(
          cos(radians(${latitude})) * cos(radians(latitude)) *
          cos(radians(longitude) - radians(${longitude})) +
          sin(radians(${latitude})) * sin(radians(latitude))
        )
      ) AS distance
      FROM posts
      WHERE status = 'AVAILABLE'
      ${typeFilter}
    ) AS subquery
    WHERE distance < ${radiusInKm}
    ORDER BY distance ASC;
  `;

  return posts;
};

export const PostService = {
  createPost,
  fetchAvailablePostsWithinRadius,
};
