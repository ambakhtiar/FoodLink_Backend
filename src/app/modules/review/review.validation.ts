import { z } from 'zod';

const createReviewSchema = z.object({
  body: z.object({
    revieweeId: z.string({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Reviewee ID is required'
          : 'Invalid Reviewee ID',
    }),
    transactionId: z.string({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Transaction ID is required'
          : 'Invalid Transaction ID',
    }),
    rating: z
      .number()
      .min(1, 'Rating must be at least 1')
      .max(5, 'Rating must be at most 5'),
    comment: z.string().optional(),
  }),
});

export const ReviewValidation = {
  createReviewSchema,
};
