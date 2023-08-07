import { extractStore } from '@store/extract.store.ts'
import { defineStore } from 'pinia'
import { useActions } from './actions.auth'
import { useGetters } from './getters.auth'
import { useState } from './state.auth'

export const useAuthStore = defineStore('auth', () => {
  return {
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
  }
})
