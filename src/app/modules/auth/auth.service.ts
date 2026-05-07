import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';
import { TJWTPayload } from './auth.interface';

const registerUser = async (payload: User): Promise<User> => {
  // Check if user already exists
  const isUserExists = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (isUserExists) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User already exists');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(
    payload.passwordHash,
    Number(config.bcrypt_salt_rounds),
  );

  // Create user
  const newUser = await prisma.user.create({
    data: {
      ...payload,
      passwordHash: hashedPassword,
    },
  });

  return newUser;
};

const loginUser = async (payload: {
  email: string;
  passwordHash: string;
}): Promise<{ accessToken: string }> => {
  // Find user
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  // Compare password
  const isPasswordMatched = await bcrypt.compare(
    payload.passwordHash,
    user.passwordHash,
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password does not match');
  }

  // Generate JWT
  const jwtPayload: TJWTPayload = {
    userId: user.id,
    role: user.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in as string,
  });

  return {
    accessToken,
  };
};

export const AuthService = {
  registerUser,
  loginUser,
};
