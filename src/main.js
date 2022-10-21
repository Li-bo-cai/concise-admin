import { createApp } from 'vue'
import router from './routers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 使用小菠萝
import { createPinia } from 'pinia'
import { registerStore } from './store'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(createPinia())
registerStore()
app.use(router).mount('#app')
