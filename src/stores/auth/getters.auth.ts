import { computed } from 'vue'
import { useState } from './state.auth'
import { defineStore } from 'pinia'
import UserInfo from '@/common/user.model'

export const useGetters = defineStore('auth.getters', () => {
  const state = useState()

  const users = computed((): UserInfo[] => {
    return state.users
  })

  const user = computed((): UserInfo | null => {
    return state.user
  })

  return {
    users,
    user,
  }
})
