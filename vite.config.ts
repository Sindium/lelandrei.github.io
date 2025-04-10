import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: './postcss.config.js', // This tells Vite where to look for PostCSS config
  },
  server: {
    host: '0.0.0.0',
  },
})
