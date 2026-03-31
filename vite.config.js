import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const my_repo = 'Portfolio-Marco';

// https://vite.dev/config/
export default defineConfig({
  base: `/${my_repo}/`,
  plugins: [
    react(),
    tailwindcss()
  ]
})
