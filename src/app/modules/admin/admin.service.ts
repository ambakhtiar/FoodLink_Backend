import { User } from '@prisma/client';
import prisma from '../../utils/prisma';

export type TSystemStats = {
  totalUsers: number;
  totalPosts: number;
  successfulTransactions: number;
};

export type TPaginatedUsers = {
  meta: {
    totalCount: number;
    currentPage: number;
    limit: number;
    totalPages: number;
  };
  data: User[];
};

const getSystemStats = async (): Promise<TSystemStats> => {
  const [totalUsers, totalPosts, successfulTransactions] =
    await prisma.$transaction([
      prisma.user.count(),
      prisma.post.count(),
      prisma.transactionRequest.count({
        where: { status: 'COMPLETED' },
      }),
    ]);

  return {
    totalUsers,
    totalPosts,
    successfulTransactions,
  };
};

const getAllUsers = async (
  page: number = 1,
  limit: number = 10,
): Promise<TPaginatedUsers> => {
  const skip = (page - 1) * limit;

  const totalCount = await prisma.user.count();

  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    skip,
    take: limit,
  });

  return {
    meta: {
      totalCount,
      currentPage: page,
      limit,
      totalPages: Math.ceil(totalCount / limit),
    },
    data: users,
  };
};

const verifyNGO = async (userId: string): Promise<User> => {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { isVerified: true },
  });

  return user;
};

export const AdminService = {
  getSystemStats,
  getAllUsers,
  verifyNGO,
};
