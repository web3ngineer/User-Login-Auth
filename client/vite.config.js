import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/user/api': 'http://localhost:7000',
    },
  },
  plugins: [react()],
})
