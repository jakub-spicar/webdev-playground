import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    publicDir: 'assets'
  }
})
