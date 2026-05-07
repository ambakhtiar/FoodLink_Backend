import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { TransactionController } from './transaction.controller';
import { TransactionValidation } from './transaction.validation';

const router = Router();

router.post(
    '/create',
    auth('DONOR', 'RECEIVER'),
    validateRequest(TransactionValidation.createTransactionSchema),
    TransactionController.handleCreateTransaction,
);

router.get(
    '/my-requests',
    auth('DONOR', 'RECEIVER'),
    TransactionController.handleGetMyRequests,
);

router.get(
    '/post/:postId',
    auth('DONOR', 'RECEIVER'),
    TransactionController.handleGetRequestsByPostId,
);

router.patch(
    '/:id/respond',
    auth('DONOR', 'RECEIVER'),
    validateRequest(TransactionValidation.updateTransactionStatusSchema),
    TransactionController.handleRespondTransaction,
);

export const TransactionRoutes = router;
