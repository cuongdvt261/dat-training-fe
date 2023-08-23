import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@common', replacement: fileURLToPath(new URL('./src/common', import.meta.url)) },
      { find: '@store', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
    ],
  },
})