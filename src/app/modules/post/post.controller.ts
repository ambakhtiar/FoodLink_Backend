import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { uploadImageToCloudinary } from '../../utils/cloudinary';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PostService } from './post.service';

const createPostHandler = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;

  let imageUrl: string | undefined;
  if (req.file) {
    imageUrl = await uploadImageToCloudinary(req.file.buffer);
  }

  const result = await PostService.createPost({
    ...req.body,
    authorId: userId,
    imageUrl: imageUrl || req.body.imageUrl,
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
  const page = parseInt(req.query['page'] as string) || 1;
  const limit = parseInt(req.query['limit'] as string) || 10;
  const type = req.query['type'] as any; // PostType

  if (isNaN(lat) || isNaN(lng)) {
    return sendResponse(res, {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: 'Invalid latitude or longitude',
      data: null,
    });
  }

  const result = await PostService.fetchAvailablePostsWithinRadius(
    lat,
    lng,
    page,
    limit,
    type,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Nearby posts fetched successfully',
    data: result.data,
    meta: result.meta,
  });
});

const getMyPostsHandler = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;
  const page = parseInt(req.query['page'] as string) || 1;
  const limit = parseInt(req.query['limit'] as string) || 10;

  const result = await PostService.getMyPosts(userId, page, limit);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My posts fetched successfully',
    data: result.data,
    meta: result.meta,
  });
});

const getPostByIdHandler = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const result = await PostService.getPostById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post details fetched successfully',
    data: result,
  });
});

const updatePostHandler = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const userId = req.user.userId;
  const result = await PostService.updatePost(id, userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post updated successfully',
    data: result,
  });
});

const deletePostHandler = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const userId = req.user.userId;
  await PostService.deletePost(id, userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Post deleted successfully',
    data: null,
  });
});

export const PostController = {
  createPostHandler,
  nearbyPostsHandler,
  getMyPostsHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostHandler,
};
