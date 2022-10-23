import { createApp } from 'vue'
import router from './routers'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import '@/assets/scss/index.scss'
// 使用小菠萝
import { createPinia } from 'pinia'
import { registerStore } from './store'

import App from './App.vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElIcons)) {
    app.component(key, component)
}


app.use(ElementPlus, { locale: zhCn, size: "small", zIndex: 3000 })
app.use(router).use(createPinia())
registerStore()
app.mount('#app')
