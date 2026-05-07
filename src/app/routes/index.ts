import { Router } from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { PostRoutes } from '../modules/post/post.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { TransactionRoutes } from '../modules/transaction/transaction.route';

import { UserRoutes } from '../modules/user/user.route';

type TModuleRoute = {
    path: string;
    route: Router;
};

const router = Router();

const moduleRoutes: TModuleRoute[] = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/user',
        route: UserRoutes,
    },
    {
        path: '/post',
        route: PostRoutes,
    },
    {
        path: '/transaction',
        route: TransactionRoutes,
    },
    {
        path: '/review',
        route: ReviewRoutes,
    },
    {
        path: '/admin',
        route: AdminRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
