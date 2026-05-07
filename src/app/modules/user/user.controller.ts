import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';

const updateProfileHandler = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const result = await UserService.updateProfile(userId, req.body);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { passwordHash, ...userWithoutPassword } = result as any;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Profile updated successfully',
    data: userWithoutPassword,
  });
});

export const UserController = {
  updateProfileHandler,
};
