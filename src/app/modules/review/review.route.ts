import { UserRole } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewController } from './review.controller';
import { ReviewValidation } from './review.validation';

const router = Router();

router.post(
  '/create',
  auth(UserRole.DONOR, UserRole.RECEIVER),
  validateRequest(ReviewValidation.createReviewSchema),
  ReviewController.handleCreateReview,
);

export const ReviewRoutes = router;
