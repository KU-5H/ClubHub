import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
         target: 'https://localhost:44305',
         changeOrigin: true,
         secure: false,      
         ws: true,
     }
  }
})
