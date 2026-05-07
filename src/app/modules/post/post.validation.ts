import { PostType } from '@prisma/client';
import { z } from 'zod';

const createPostSchema = z.object({
  body: z.object({
    type: z.nativeEnum(PostType, { required_error: 'Post type is required' }),
    quantity: z.preprocess(
      (val) => (typeof val === 'string' ? Number(val) : val),
      z.number({ required_error: 'Quantity is required' }).int().positive(),
    ),
    latitude: z.preprocess(
      (val) => (typeof val === 'string' ? Number(val) : val),
      z.number({ required_error: 'Latitude is required' }),
    ),
    longitude: z.preprocess(
      (val) => (typeof val === 'string' ? Number(val) : val),
      z.number({ required_error: 'Longitude is required' }),
    ),
    imageUrl: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const PostValidation = {
  createPostSchema,
};
