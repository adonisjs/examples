import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'

const basePath = process.env.BASE_PATH ?? ''

export default defineConfig({
  define: {
    'import.meta.env.VITE_BASE_PATH': JSON.stringify(basePath || '/'),
  },

  plugins: [
    react(),
    adonisjs({
      entryPoints: ['inertia/app.tsx'],
      reload: ['resources/views/**/*.edge'],
      assetsUrl: `${basePath}/assets`,
    }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${import.meta.dirname}/inertia/`,
      '@generated': `${import.meta.dirname}/.adonisjs/client/`,
    },
  },

  server: {
    watch: {
      ignored: ['**/storage/**', '**/tmp/**'],
    },
  },
})
