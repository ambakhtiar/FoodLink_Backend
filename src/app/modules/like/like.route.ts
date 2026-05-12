import { Router } from 'express';
import auth from '../../middlewares/auth';
import { LikeController } from './like.controller';

const router = Router();

router.post(
    '/:id/like',
    auth(),
    LikeController.toggleLikeHandler
);

export const LikeRoutes = router;
