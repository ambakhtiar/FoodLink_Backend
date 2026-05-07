import { TransactionStatus } from '@prisma/client';
import { z } from 'zod';

const createTransactionSchema = z.object({
  body: z.object({
    postId: z.string({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Post ID is required'
          : 'Invalid Post ID',
    }),
    requestedQuantity: z.string({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Requested quantity is required'
          : 'Invalid requested quantity',
    }),
  }),
});

const updateTransactionStatusSchema = z.object({
  body: z.object({
    status: z.nativeEnum(TransactionStatus, {
      error: (issue) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (issue as any).code === 'invalid_type' &&
        issue['received'] === 'undefined'
          ? 'Status is required (APPROVED or REJECTED)'
          : 'Invalid Status',
    }),
  }),
});

export const TransactionValidation = {
  createTransactionSchema,
  updateTransactionStatusSchema,
};
