import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@stitch': path.resolve(__dirname, './.agents/stitch-skills/plugins/stitch-build/skills/react-components'),
      '@stitch-shadcn': path.resolve(__dirname, './.agents/stitch-skills/plugins/stitch-build/skills/shadcn-ui/examples'),
    },
  },
})
