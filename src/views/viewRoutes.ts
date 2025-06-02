import { loginRoutes } from './login/loginRoutes.ts'

import { dashboardRoute } from './dashboards/dashboardRoutes.ts'


const viewRouteChildren = [
    dashboardRoute,
    {
        path: '/demo/1',
        component: () => import('./demo.vue'),
    },
    { path: '/demo/1', component: () => import('./demo.vue') },
    { path: '/demo/12', component: () => import('./demo.vue') },
    { path: '/demo/123', component: () => import('./demo.vue') },
    { path: '/demo/1345', component: () => import('./demo.vue') },
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