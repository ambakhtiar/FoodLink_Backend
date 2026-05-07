import { User } from '@prisma/client';
import httpStatus from 'http-status';
import AppError from '../../utils/AppError';
import prisma from '../../utils/prisma';

const updateProfile = async (
  userId: string,
  payload: Partial<User>,
): Promise<User> => {
  const isUserExists = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: payload,
  });

  return updatedUser;
};

export const UserService = {
  updateProfile,
};
