import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  server: {
    host: true,
    watch: { usePolling: true }
  },
  build: {
    chunkSizeWarningLimit: 1600
  }
})
