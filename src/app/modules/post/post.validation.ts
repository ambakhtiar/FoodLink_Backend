import { PostType } from '@prisma/client';
import { z } from 'zod';

const createPostSchema = z.object({
  body: z.object({
    type: z.nativeEnum(PostType, { required_error: 'Post type is required' }),
    quantity: z
      .number({ required_error: 'Quantity is required' })
      .int()
      .positive(),
    latitude: z.number({ required_error: 'Latitude is required' }),
    longitude: z.number({ required_error: 'Longitude is required' }),
    imageUrl: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const PostValidation = {
  createPostSchema,
};
