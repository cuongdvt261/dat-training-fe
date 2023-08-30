import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/App.vue'
import Login from '@/pages/login/index.vue'
import MyInfo from '@/pages/me/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/me',
    component: MyInfo,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
