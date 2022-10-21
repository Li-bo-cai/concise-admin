import { defineStore } from 'pinia'
import { ref } from 'vue'

// 使用setup模式定义
const common = defineStore('common', () => {
    const count = ref(1)

    function increment() {
        count.value++
    }

    return { count, increment }
})

export default common