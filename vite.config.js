import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dev/tbsinfotech/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  }
})