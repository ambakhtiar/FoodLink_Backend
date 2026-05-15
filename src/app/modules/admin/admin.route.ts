import { UserRole } from '@prisma/client';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.controller';
import { AdminValidation } from './admin.validation';

const router = Router();

// ── Stats ─────────────────────────────────────────────────────────────────────
router.get(
    '/stats',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    AdminController.getSystemStats,
);

// ── Users ─────────────────────────────────────────────────────────────────────
router.get(
    '/users',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    AdminController.getAllUsers,
);

router.patch(
    '/users/:userId/status',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    validateRequest(AdminValidation.updateUserStatusSchema),
    AdminController.updateUserStatus,
);

// ── Organizations ─────────────────────────────────────────────────────────────
router.get(
    '/organizations',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    AdminController.getAllOrganizations,
);

router.patch(
    '/organizations/:orgId/status',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    validateRequest(AdminValidation.updateOrgStatusSchema),
    AdminController.updateOrgStatus,
);

// ── Posts ─────────────────────────────────────────────────────────────────────
router.get(
    '/posts',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    AdminController.getAllPosts,
);

router.patch(
    '/posts/:postId/status',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    validateRequest(AdminValidation.updatePostStatusSchema),
    AdminController.updatePostStatus,
);

router.delete(
    '/posts/:postId',
    auth(UserRole.ADMIN, UserRole.SUPER_ADMIN),
    validateRequest(AdminValidation.postIdParamSchema),
    AdminController.adminDeletePost,
);

// ── Admins ─────────────────────────────────────────────────────────────────────
router.get(
    '/admins',
    auth(UserRole.SUPER_ADMIN),
    AdminController.getAllAdmins,
);

router.post(
    '/create',
    auth(UserRole.SUPER_ADMIN),
    validateRequest(AdminValidation.createAdminSchema),
    AdminController.createAdmin,
);

export const AdminRoutes = router;
