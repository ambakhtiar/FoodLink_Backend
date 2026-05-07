import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewService } from './review.service';

const handleCreateReview = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user;
    const result = await ReviewService.createReview({
      reviewerId: userId,
      ...req.body,
    });

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Review created successfully',
      data: result,
    });
  },
);

export const ReviewController = {
  handleCreateReview,
};
