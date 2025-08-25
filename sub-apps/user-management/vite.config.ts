import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    qiankun('user-management', {
      useDevMode: true
    })
  ],
  server: {
    port: 8081,
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
        name: 'user-management',
        entry: './src/main.ts',
        formats: ['umd']
      },
      rollupOptions: {
        // 在微前端中，这些依赖应该由主应用提供
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
          // 输出文件名配置
          entryFileNames: 'user-management.js',
          chunkFileNames: '[name].[hash].js',
          assetFileNames: '[name].[hash].[ext]'
        }
      }
    } : {}),
    // CSS代码分割
    cssCodeSplit: false,
    // 生成sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production'
      }
    }
  }
})
