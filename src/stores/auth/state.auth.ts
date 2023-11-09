import UserInfo from '@/common/user.model'
import { defineStore } from 'pinia'

export interface UserState {
  users: UserInfo[]
  user: UserInfo | null
}

export const useState = defineStore({
  id: 'auth.state',

  state: (): UserState => ({
    users: [],
    user: null,
  }),
})
