import { Router } from 'express';
import auth from '../../middlewares/auth';
import upload from '../../middlewares/upload';
import optionalAuth from '../../middlewares/optionalAuth';
import validateRequest from '../../middlewares/validateRequest';
import { PostController } from './post.controller';
import { PostValidation } from './post.validation';

const router = Router();

router.post(
  '/create',
  auth(),
  upload.array('images', 3),
  validateRequest(PostValidation.createPostSchema),
  PostController.createPostHandler,
);

router.get('/my-posts', auth(), PostController.getMyPostsHandler);

router.get('/nearby', PostController.nearbyPostsHandler);

router.get('/:id', optionalAuth, PostController.getPostByIdHandler);

router.patch(
  '/:id',
  auth(),
  validateRequest(PostValidation.updatePostSchema),
  PostController.updatePostHandler,
);

router.delete('/:id', auth(), PostController.deletePostHandler);

export const PostRoutes = router;
