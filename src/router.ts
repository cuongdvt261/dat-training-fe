import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/App.vue'
import Login from '@/pages/login/index.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})
