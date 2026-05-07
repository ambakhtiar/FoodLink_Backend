import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PostService } from './post.service';

const createPostHandler = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;

  const result = await PostService.createPost({
    ...req.body,
    authorId: userId,
  });

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Post created successfully',
    data: result,
  });
});

const nearbyPostsHandler = catchAsync(async (req: Request, res: Response) => {
  const lat = parseFloat(req.query['lat'] as string);
  const lng = parseFloat(req.query['lng'] as string);

  if (isNaN(lat) || isNaN(lng)) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Invalid latitude or longitude',
      data: null,
    });
  }

  const result = await PostService.fetchAvailablePostsWithinRadius(lat, lng);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Nearby posts fetched successfully',
    data: result,
  });
});

export const PostController = {
  createPostHandler,
  nearbyPostsHandler,
};
