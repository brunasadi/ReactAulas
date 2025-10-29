import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Removed invalid import for tailwindcss/vite

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
