import { createRouter, createWebHistory } from 'vue-router'

import { viewRoutes } from '../views/viewRoutes.ts'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...viewRoutes
    ]
})

// 路由守卫 鉴权
router.beforeEach((to, from, next) => {
    next()
})

export default router;
