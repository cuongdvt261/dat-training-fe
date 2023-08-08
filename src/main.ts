import { createApp } from 'vue'
import '@/assets/styles/index.scss'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import axios from 'axios'

const pinia = createPinia()
const axiosInstance = axios.create({
  withCredentials: true,
})

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
app.config.globalProperties.$axios = { ...axiosInstance }
