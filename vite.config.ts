import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://eidoriantan.com',
      changefreq: 'monthly'
    }),
  ],
})
