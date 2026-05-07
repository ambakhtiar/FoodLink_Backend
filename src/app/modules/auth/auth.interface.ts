import { UserRole } from '@prisma/client';

export type TLoginUser = {
  email: string;
  passwordHash: string;
};

export type TJWTPayload = {
  userId: string;
  role: UserRole;
};
