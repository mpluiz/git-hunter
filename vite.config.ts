/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@tests', replacement: path.resolve(__dirname, './tests') }
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts'
  }
})
