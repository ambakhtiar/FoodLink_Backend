import { z } from 'zod';
import { AccountStatus, PostStatus } from '@prisma/client';

const userIdParamSchema = z.object({
    params: z.object({
        userId: z.string({ error: () => 'User ID is required' }),
    }),
});

const orgIdParamSchema = z.object({
    params: z.object({
        orgId: z.string({ error: () => 'Organization ID is required' }),
    }),
});

const postIdParamSchema = z.object({
    params: z.object({
        postId: z.string({ error: () => 'Post ID is required' }),
    }),
});

const updateAccountStatusBodySchema = z.object({
    body: z.object({
        status: z.enum(
            Object.values(AccountStatus) as [AccountStatus, ...AccountStatus[]],
            { error: () => 'Invalid status value' },
        ),
    }),
});

const updatePostStatusBodySchema = z.object({
    body: z.object({
        status: z.enum(
            Object.values(PostStatus) as [PostStatus, ...PostStatus[]],
            { error: () => 'Invalid post status value' },
        ),
    }),
});

const createAdminSchema = z.object({
    body: z.object({
        name: z.string().min(2, 'Name must be at least 2 characters'),
        email: z.string().email('Please provide a valid email address'),
        phone: z.string().min(10, 'Phone number must be at least 10 digits'),
        department: z.string().optional(),
    }),
});

const updateUserStatusSchema = userIdParamSchema.merge(updateAccountStatusBodySchema);
const updateOrgStatusSchema = orgIdParamSchema.merge(updateAccountStatusBodySchema);
const updatePostStatusSchema = postIdParamSchema.merge(updatePostStatusBodySchema);

export const AdminValidation = {
    updateUserStatusSchema,
    updateOrgStatusSchema,
    updatePostStatusSchema,
    postIdParamSchema,
    createAdminSchema,
};
