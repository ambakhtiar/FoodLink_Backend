import { UserRole } from '../../../generated/prisma';
import { z } from 'zod';

const registerValidationSchema = z.object({
    body: z
        .object({
            name: z
                .string({
                    error: (issue) =>
                        issue.code === 'invalid_type' && issue['received'] === 'undefined'
                            ? 'Name is required'
                            : 'Invalid name',
                })
                .optional(),
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
            role: z
                .nativeEnum(UserRole, {
                    error: (issue) =>
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (issue as any).code === 'invalid_type' &&
                            issue['received'] === 'undefined'
                            ? 'Role is required'
                            : 'Invalid role',
                })
                .refine(
                    (val) => val !== UserRole.ADMIN && val !== UserRole.SUPER_ADMIN,
                    {
                        message:
                            'Cannot register as ADMIN or SUPER_ADMIN via public endpoint',
                    },
                ),
            orgName: z
                .string({
                    error: (issue) =>
                        issue.code === 'invalid_type' && issue['received'] === 'undefined'
                            ? 'Organization name is required'
                            : 'Invalid organization name',
                })
                .optional(),
            establishedYear: z
                .number({
                    error: (issue) =>
                        issue.code === 'invalid_type' && issue['received'] === 'undefined'
                            ? 'Established year is required'
                            : 'Invalid established year',
                })
                .optional(),
            registrationNumber: z
                .string({
                    error: (issue) =>
                        issue.code === 'invalid_type' && issue['received'] === 'undefined'
                            ? 'Registration number is required'
                            : 'Invalid registration number',
                })
                .optional(),
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
        })
        .refine(
            (data) => {
                if (data.role === UserRole.USER) {
                    return data.name !== undefined && data.name.trim().length > 0;
                }
                if (data.role === UserRole.ORGANIZATION) {
                    return data.orgName !== undefined && data.orgName.trim().length > 0;
                }
                return false;
            },
            {
                message:
                    'Name is required for USER role. orgName is required for ORGANIZATION role',
                path: ['name'],
            },
        ),
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

const changePasswordSchema = z.object({
    body: z.object({
        currentPassword: z.string({
            error: (issue) =>
                issue.code === 'invalid_type' && issue['received'] === 'undefined'
                    ? 'Current password is required'
                    : 'Invalid current password',
        }),
        newPassword: z
            .string({
                error: (issue) =>
                    issue.code === 'invalid_type' && issue['received'] === 'undefined'
                        ? 'New password is required'
                        : 'Invalid new password',
            })
            .min(6, 'New password must be at least 6 characters'),
    }),
});

const forgotPasswordSchema = z.object({
    body: z.object({
        email: z
            .string({
                error: (issue) =>
                    issue.code === 'invalid_type' && issue['received'] === 'undefined'
                        ? 'Email is required'
                        : 'Invalid email',
            })
            .email('Invalid email format'),
    }),
});

const verifyOtpSchema = z.object({
    body: z.object({
        email: z
            .string({
                error: (issue) =>
                    issue.code === 'invalid_type' && issue['received'] === 'undefined'
                        ? 'Email is required'
                        : 'Invalid email',
            })
            .email('Invalid email format'),
        otp: z
            .string({
                error: (issue) =>
                    issue.code === 'invalid_type' && issue['received'] === 'undefined'
                        ? 'OTP is required'
                        : 'Invalid OTP',
            })
            .length(6, 'OTP must be exactly 6 digits'),
    }),
});

const resetPasswordSchema = z.object({
    body: z.object({
        email: z
            .string({
                error: (issue) =>
                    issue.code === 'invalid_type' && issue['received'] === 'undefined'
                        ? 'Email is required'
                        : 'Invalid email',
            })
            .email('Invalid email format'),
        otp: z
            .string({
                error: (issue) =>
                    issue.code === 'invalid_type' && issue['received'] === 'undefined'
                        ? 'OTP is required'
                        : 'Invalid OTP',
            })
            .length(6, 'OTP must be exactly 6 digits'),
        newPassword: z
            .string({
                error: (issue) =>
                    issue.code === 'invalid_type' && issue['received'] === 'undefined'
                        ? 'New password is required'
                        : 'Invalid new password',
            })
            .min(6, 'New password must be at least 6 characters'),
    }),
});

const googleLoginSchema = z.object({
    body: z.object({
        googleToken: z.string({
            error: (issue) =>
                issue.code === 'invalid_type' && issue['received'] === 'undefined'
                    ? 'Google token is required'
                    : 'Invalid Google token',
        }),
    }),
});

const completeProfileSchema = z.object({
    body: z.object({
        phone: z.string({
            error: (issue) =>
                issue.code === 'invalid_type' && issue['received'] === 'undefined'
                    ? 'Phone number is required'
                    : 'Invalid phone number',
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

export const AuthValidation = {
    registerValidationSchema,
    loginValidationSchema,
    changePasswordSchema,
    forgotPasswordSchema,
    verifyOtpSchema,
    resetPasswordSchema,
    googleLoginSchema,
    completeProfileSchema,
};
