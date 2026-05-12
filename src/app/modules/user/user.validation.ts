import { z } from 'zod';

const updateProfileSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        orgName: z.string().optional(),
        latitude: z.number().optional(),
        longitude: z.number().optional(),
        profilePictureUrl: z.string().optional(),
        establishedYear: z.number().optional(),
        registrationNumber: z.string().optional(),
    }),
});

export const UserValidation = {
    updateProfileSchema,
};
