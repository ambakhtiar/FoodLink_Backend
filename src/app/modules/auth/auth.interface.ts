import { AccountStatus, UserRole } from '@prisma/client';

export type TLoginUser = {
    email: string;
    password: string;
};

export type TJWTPayload = {
    userId: string;
    role: UserRole;
    status: AccountStatus;
    needsPasswordChange: boolean;
};
