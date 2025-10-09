import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  base: '/learn-typescript/',
  plugins: [
    react(),
    tailwindcss(),
  ],

  /*
  Para activar el @ para la ruta desde la raíz

  1. Se agrega esto a tsconfig.app.json
  // -- Path alias
  "baseUrl": ".",
  "paths": {
    "@/*": ["src/*"]
  },

  2. Esto en tsconfig.json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
  },

  3. Y en vite.config.ts:
  * Instalar: npm install -D @types/node
  * Importar: import path from "path"
  * Agregar esta configuración:
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
})
