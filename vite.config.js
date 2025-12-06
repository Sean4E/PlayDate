import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/PlayDate/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
