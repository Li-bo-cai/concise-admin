import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoutes } from "./constantRoutes";
import { asyncRouter } from "./asyncRoutes";

// 实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: [...constantRoutes, ...asyncRouter],
})

router.beforeEach((to, from, next) => {
    // const token = sessionStorage.getItem('Token')
    // if (token) {
    //     next()
    // } else {
    //     if (to.path === '/login') {
    //         next()
    //     } else {
    //         router.replace('/login')
    //     }
    // }
    // state.router = 15
    next();
    // setValue("router", router)
})

export default router