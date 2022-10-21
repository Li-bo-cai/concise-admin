import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Layout/Layout.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('../views/pages/home/index.vue')
            },
        ]
    },
]

// 实例
export default createRouter({
    history: createWebHashHistory(),
    routes,
})

