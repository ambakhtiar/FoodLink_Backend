import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PostController } from './post.controller';
import { PostValidation } from './post.validation';

const router = Router();

router.post(
  '/create',
  auth(),
  validateRequest(PostValidation.createPostSchema),
  PostController.createPostHandler,
);

router.get('/nearby', PostController.nearbyPostsHandler);

export const PostRoutes = router;
