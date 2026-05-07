import { Router } from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { PostRoutes } from '../modules/post/post.route';
import { TransactionRoutes } from '../modules/transaction/transaction.route';

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
        path: '/post',
        route: PostRoutes,
    },
    {
        path: '/transaction',
        route: TransactionRoutes,
    },
    {
        path: '/admin',
        route: AdminRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
