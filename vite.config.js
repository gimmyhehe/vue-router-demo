import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        // manualChunks: {
        //   'concat-router': [
        //     './src/components/About.vue',
        //     './src/components/Home.vue',
        //   ],
        // },
      },
    },
  },
})
