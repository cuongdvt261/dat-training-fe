import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/App.vue'
import Login from '@/pages/login/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
