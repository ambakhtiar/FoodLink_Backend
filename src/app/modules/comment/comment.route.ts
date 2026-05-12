import { Router } from 'express';
import auth from '../../middlewares/auth';
import { CommentController } from './comment.controller';

const router = Router();

router.post(
    '/:id/comment',
    auth(),
    CommentController.createCommentHandler
);

router.get(
    '/:id/comments',
    CommentController.getCommentsHandler
);

export const CommentRoutes = router;
