import { defineStore } from 'pinia'
import { useState } from './state.auth'
import UserInfo from '@/common/user.model'

export const useActions = defineStore('auth.actions', () => {
  const state = useState()

  function setUser(user: UserInfo): void {
    state.user = user
  }

  function increamentAge(amount: number = 1) {
    if (state.user) {
      state.user.age += amount
    }
  }

  return {
    setUser,
    increamentAge,
  }
})
