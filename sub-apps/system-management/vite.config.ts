import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('system-management', {
      useDevMode: true
    })
  ],
  server: {
    port: 8082,
    host: '0.0.0.0',
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    // 只在生产环境构建时使用lib模式
    ...(process.env.NODE_ENV === 'production' ? {
      lib: {
        name: 'system-management',
        entry: './src/main.ts',
        formats: ['umd']
      },
      rollupOptions: {
        external: [
          'vue', 
          'vue-router',
          'element-plus',
          '@element-plus/icons-vue'
        ],
        output: {
          globals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            'element-plus': 'ElementPlus',
            '@element-plus/icons-vue': 'ElementPlusIcons'
          },
          entryFileNames: 'system-management.js',
          chunkFileNames: '[name].[hash].js',
          assetFileNames: '[name].[hash].[ext]'
        }
      }
    } : {}),
    cssCodeSplit: false,
    sourcemap: process.env.NODE_ENV === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production'
      }
    }
  }
})
