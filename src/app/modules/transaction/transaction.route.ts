import { UserRole } from '../../../generated/prisma';
import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { TransactionController } from './transaction.controller';
import { TransactionValidation } from './transaction.validation';

const router = Router();

router.post(
    '/create',
    auth(UserRole.USER, UserRole.ORGANIZATION),
    validateRequest(TransactionValidation.createTransactionSchema),
    TransactionController.handleCreateTransaction,
);

router.get(
    '/my-requests',
    auth(UserRole.USER, UserRole.ORGANIZATION),
    TransactionController.handleGetMyRequests,
);

router.get(
    '/post/:postId',
    auth(UserRole.USER, UserRole.ORGANIZATION),
    TransactionController.handleGetRequestsByPostId,
);

router.patch(
    '/:id/respond',
    auth(UserRole.USER, UserRole.ORGANIZATION),
    validateRequest(TransactionValidation.updateTransactionStatusSchema),
    TransactionController.handleRespondTransaction,
);

export const TransactionRoutes = router;
