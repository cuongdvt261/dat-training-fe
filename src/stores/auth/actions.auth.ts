import { defineStore } from 'pinia'
import { useState } from './state.auth'
import UserInfo from '@/common/user.model'
import { ReponsitoryFactory } from '@/plugins/requests/factory'

export const useActions = defineStore('auth.actions', () => {
  const state = useState()
  const AuthRepository = ReponsitoryFactory.get('auth')

  function setUser(user: UserInfo): void {
    state.user = user
  }

  async function login(username: string, password: string) {
    const { data } = await AuthRepository.login(username, password)
    state.user = data
    localStorage.setItem('user', JSON.stringify(data))
  }

  function logout() {
    state.user = null
    localStorage.removeItem('user')
  }

  return {
    setUser,
    login,
    logout,
  }
})
