import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo at https://<user>.github.io/Employment-Website/.
  // Update this if the repository is renamed.
  base: '/Employment-Website/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Root-relative on purpose: an absolute path built from import.meta.dirname
      // can differ in drive-letter case on Windows (c:\ vs C:\), which makes
      // Vite load React twice and crash with "Invalid hook call".
      '@': '/src',
    },
  },
})
