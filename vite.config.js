import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(async ({ mode }) => {
  const isLib = mode === 'lib'
  
  return {
    plugins: [vue()],
    build: isLib ? {
      lib: {
        entry: resolve(process.cwd(), 'src/components/index.js'),
        name: 'VueFormBuilder',
        fileName: (format) => `vue-formbuilder.${format === 'es' ? 'js' : format === 'umd' ? 'umd.cjs' : format}`
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    } : {
      outDir: 'dist'
    }
  }
})