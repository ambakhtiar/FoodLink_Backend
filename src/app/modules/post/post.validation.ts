import { PostType } from '@prisma/client';
import { z } from 'zod';

const createPostSchema = z.object({
  body: z.object({
    type: z.nativeEnum(PostType, {
      error: (issue) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (issue as any).code === 'invalid_type' &&
        issue['received'] === 'undefined'
          ? 'Post type is required'
          : 'Invalid post type',
    }),
    quantity: z.preprocess(
      (val) => (typeof val === 'string' ? Number(val) : val),
      z
        .number({
          error: (issue) =>
            issue.code === 'invalid_type' && issue['received'] === 'undefined'
              ? 'Quantity is required'
              : 'Invalid quantity',
        })
        .int()
        .positive(),
    ),
    latitude: z.preprocess(
      (val) => (typeof val === 'string' ? Number(val) : val),
      z.number({
        error: (issue) =>
          issue.code === 'invalid_type' && issue['received'] === 'undefined'
            ? 'Latitude is required'
            : 'Invalid latitude',
      }),
    ),
    longitude: z.preprocess(
      (val) => (typeof val === 'string' ? Number(val) : val),
      z.number({
        error: (issue) =>
          issue.code === 'invalid_type' && issue['received'] === 'undefined'
            ? 'Longitude is required'
            : 'Invalid longitude',
      }),
    ),
    imageUrl: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const PostValidation = {
  createPostSchema,
};
