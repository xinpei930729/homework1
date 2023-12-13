import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const outDir = resolve(__dirname, 'docs')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/homework1/',
  build: {
    outDir
  }
})
