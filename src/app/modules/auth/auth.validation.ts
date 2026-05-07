import { UserRole } from '@prisma/client';
import { z } from 'zod';

const registerValidationSchema = z.object({
  body: z.object({
    name: z.string({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Name is required'
          : 'Invalid name',
    }),
    email: z
      .string({
        error: (issue) =>
          issue.code === 'invalid_type' && issue['received'] === 'undefined'
            ? 'Email is required'
            : 'Invalid email',
      })
      .email('Invalid email format'),
    password: z
      .string({
        error: (issue) =>
          issue.code === 'invalid_type' && issue['received'] === 'undefined'
            ? 'Password is required'
            : 'Invalid password',
      })
      .min(6, 'Password must be at least 6 characters'),
    phone: z.string({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Phone number is required'
          : 'Invalid phone number',
    }),
    role: z.nativeEnum(UserRole, {
      error: (issue) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (issue as any).code === 'invalid_type' &&
        issue['received'] === 'undefined'
          ? 'Role is required'
          : 'Invalid role',
    }),
    latitude: z.number({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Latitude is required'
          : 'Invalid latitude',
    }),
    longitude: z.number({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Longitude is required'
          : 'Invalid longitude',
    }),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        error: (issue) =>
          issue.code === 'invalid_type' && issue['received'] === 'undefined'
            ? 'Email is required'
            : 'Invalid email',
      })
      .email('Invalid email format'),
    password: z.string({
      error: (issue) =>
        issue.code === 'invalid_type' && issue['received'] === 'undefined'
          ? 'Password is required'
          : 'Invalid password',
    }),
  }),
});

export const AuthValidation = {
  registerValidationSchema,
  loginValidationSchema,
};
