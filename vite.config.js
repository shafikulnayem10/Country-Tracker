import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Country_React_App/', // 🚨 Must match your GitHub repo name
  plugins: [react()],
})

