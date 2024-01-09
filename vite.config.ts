import { createServer, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    server: {
      port: 8000,
      hmr: true, // disable auto reload for billing reason,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [vue()],
  }
})
