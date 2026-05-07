import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = Router();

router.patch(
  '/profile',
  auth(),
  validateRequest(UserValidation.updateProfileSchema),
  UserController.updateProfileHandler,
);

export const UserRoutes = router;
