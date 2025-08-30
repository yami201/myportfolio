import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import svgrPlugin  from "vite-plugin-svgr"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgrPlugin(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173 
  }
})