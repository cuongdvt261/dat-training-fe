import UserInfo from '@/common/user.model'
import { defineStore } from 'pinia'

export interface UserState {
  user: UserInfo | null
}

export const useState = defineStore({
  id: 'auth.state',

  state: (): UserState => ({
    user: JSON.parse(localStorage.getItem('user') ?? ''),
  }),
})
