import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { constantRoutes } from '../../routers/constantRoutes'
import { asyncRouter } from '../../routers/asyncRoutes'

// 使用setup模式定义
const common = defineStore('common', () => {
    const state = reactive({
        router: [...constantRoutes, ...asyncRouter],
    })
    const setValue = (name, value) => {
        state[name] = value;
    }

    return { state, setValue }
})

export default common