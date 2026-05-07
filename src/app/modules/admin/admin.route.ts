import { UserRole } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';

const router = Router();

router.get(
    '/stats',
    auth(UserRole.ADMIN),
    AdminController.getSystemStats,
);

router.get(
    '/users',
    auth(UserRole.ADMIN),
    AdminController.getAllUsers,
);

router.patch(
    '/users/:userId/verify',
    auth(UserRole.ADMIN),
    validateRequest(AdminValidation.verifyNGOSchema),
    AdminController.verifyNGO,
);

export const AdminRoutes = router;
