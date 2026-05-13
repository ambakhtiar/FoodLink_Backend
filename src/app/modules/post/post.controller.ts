import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PostService } from './post.service';
import { uploadMultipleImagesToCloudinary } from '../../utils/cloudinary';

const createPostHandler = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user.userId;

  let imageUrls: string[] = [];
  
  // Handle multiple images from upload.array('images', 3)
  const files = req.files as Express.Multer.File[];
  if (files && files.length > 0) {
    const fileBuffers = files.map(file => file.buffer);
    imageUrls = await uploadMultipleImagesToCloudinary(fileBuffers);
  } else if (req.body.imageUrls) {
    // If urls are passed directly (e.g. from a draft)
    imageUrls = Array.isArray(req.body.imageUrls) ? req.body.imageUrls : [req.body.imageUrls];
  }

  const result = await PostService.createPost({
    ...req.body,
    quantity: Number(req.body.quantity),
    latitude: Number(req.body.latitude),
    longitude: Number(req.body.longitude),
    authorId: userId,
    imageUrls: imageUrls,
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
  const userId = req.user?.userId;
  const result = await PostService.getPostById(id, userId);

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

const getAllPostsHandler = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  const query = {
    searchTerm: req.query['searchTerm'] ? String(req.query['searchTerm']) : undefined,
    category: req.query['category'] as any,
    type: req.query['type'] as any,
    sortBy: req.query['sortBy'] ? String(req.query['sortBy']) : 'createdAt',
    sortOrder: (req.query['sortOrder'] === 'asc' ? 'asc' : 'desc') as 'asc' | 'desc',
    page: req.query['page'] ? parseInt(req.query['page'] as string) : 1,
    limit: req.query['limit'] ? parseInt(req.query['limit'] as string) : 10,
    userId,
  };

  const result = await PostService.getAllPosts(query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Posts fetched successfully',
    data: result.data,
    meta: result.meta,
  });
});

export const PostController = {
  createPostHandler,
  getAllPostsHandler,
  nearbyPostsHandler,
  getMyPostsHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostHandler,
};
