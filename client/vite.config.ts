import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlify from '@netlify/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify()],
  server: {
    allowedHosts: [
      '86ef-2607-fea8-a51c-d700-e078-5aca-a263-37cc.ngrok-free.app',
      'localhost'
    ]
  }
})
