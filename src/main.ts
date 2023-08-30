import { createApp } from 'vue'
import '@/assets/styles/index.scss'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia).use(ToastPlugin).mount('#app')
