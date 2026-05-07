import { z } from 'zod';

const verifyNGOSchema = z.object({
    params: z.object({
        userId: z.string({
            error: (issue) =>
                issue.code === 'invalid_type' && issue['received'] === 'undefined'
                    ? 'User ID is required'
                    : 'Invalid User ID',
        }),
    }),
});

export const AdminValidation = {
    verifyNGOSchema,
};
