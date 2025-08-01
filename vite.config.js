import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(async ({ mode }) => {
  const isLib = mode === 'lib'
  const isEmbed = mode === 'embed'
  
  if (isEmbed) {
    return {
      plugins: [vue()],
      build: {
        outDir: 'dist/embed',
        lib: {
          entry: resolve(process.cwd(), 'src/embed/embed-entry.js'),
          name: 'VueFormEmbed',
          fileName: (format) => `embed.${format === 'es' ? 'js' : format === 'umd' ? 'umd.cjs' : format}`,
          formats: ['es', 'umd']
        },
        rollupOptions: {
          output: {
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
    }
  }
  
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