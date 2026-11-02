import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Served from https://ponkberry.github.io/dark-souls-ii-sotfs-achievement-guide/
  base: '/dark-souls-ii-sotfs-achievement-guide/',
  build: {
    outDir: 'docs',
  },
})
