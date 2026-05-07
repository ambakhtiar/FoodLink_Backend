import { TransactionStatus } from '@prisma/client';
import { z } from 'zod';

const createTransactionSchema = z.object({
  body: z.object({
    postId: z.string({ required_error: 'Post ID is required' }),
    requestedQuantity: z.string({ required_error: 'Requested quantity is required' }),
  }),
});

const updateTransactionStatusSchema = z.object({
  body: z.object({
    status: z.enum([TransactionStatus.APPROVED, TransactionStatus.REJECTED], {
      required_error: 'Status is required (APPROVED or REJECTED)',
    }),
  }),
});

export const TransactionValidation = {
  createTransactionSchema,
  updateTransactionStatusSchema,
};
