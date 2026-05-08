import { AccountStatus, UserRole } from '../../../generated/prisma';

export type TLoginUser = {
    email: string;
    password: string;
};

export type TJWTPayload = {
    userId: string;
    role: UserRole;
    status: AccountStatus;
};
