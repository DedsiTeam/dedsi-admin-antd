import { loginRoutes } from './login/loginRoutes.ts'

import { dashboardRoute } from './dashboards/dashboardRoutes.ts'


const viewRouteChildren = [
    dashboardRoute
]

export const viewRoutes = [
    ...loginRoutes,
    {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        redirect: dashboardRoute.path,
        children: viewRouteChildren
    }
]