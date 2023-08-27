import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/App.vue'
import Login from '@/pages/login/index.vue'
import UserInfoVue from './components/UserInfo.vue'

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
    path: '/user',
    component: UserInfoVue,
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
