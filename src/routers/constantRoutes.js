export const constantRoutes = [
    {
        path: '/',
        name: "/",
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/home',
        meta: { title: '首页', icon: 'sell-a-01', hasChild: false, breadCrub: true },
        children: [
            {
                path: "home",
                name: "home",
                component: () => import('@/views/pages/home/index.vue'),
                meta: { title: '首页' }
            },
        ]
    },
    {
        path: '/workbench',
        name: "workbench",
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/workbench/show-modle',
        meta: { title: '工作台', icon: 'sell-a-02', hasChild: true, breadCrub: true },
        children: [
            {
                path: "show-modle",
                name: "show-modle",
                component: () => import('@/views/pages/workbench/show-modle/show-modle.vue'),
                meta: { title: '已生成模板' }
            }
        ]
    },
    {
        path: '/materials',
        name: "materials",
        component: () => import('@/views/Layout/Layout.vue'),
        redirect: '/materials/modele-create',
        meta: { title: '材料构建', icon: 'sell-a-03', hasChild: true, breadCrub: true },
        children: [
            {
                path: "modele-create",
                name: "modele-create",
                component: () => import('@/views/pages/materials/modele-create.vue'),
                meta: { title: '组件生成器' }
            },
            {
                path: "wx-materials",
                name: "wx-materials",
                component: () => import('@/views/pages/materials/wx-materials/wx-materials.vue'),
                meta: { title: '小程序生成器' }
            },

        ]
    }
]
