import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import multer from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
});

const router = Router();

router.patch(
    '/update-profile',
    auth(),
    upload.single('profilePicture'),
    (req, _res, next) => {
        if (req.body.data) {
            req.body = JSON.parse(req.body.data);
        }
        next();
    },
    validateRequest(UserValidation.updateProfileSchema),
    UserController.updateMyProfile,
);

router.patch(
    '/profile-picture',
    auth(),
    upload.single('file'),
    UserController.updateProfilePicture,
);

router.delete(
    '/profile-picture',
    auth(),
    UserController.deleteProfilePicture,
);

export const UserRoutes = router;
