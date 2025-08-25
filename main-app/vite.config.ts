import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.VITE_USER_MANAGEMENT_URL': JSON.stringify(process.env.VITE_USER_MANAGEMENT_URL),
    'process.env.VITE_SYSTEM_MANAGEMENT_URL': JSON.stringify(process.env.VITE_SYSTEM_MANAGEMENT_URL)
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 优化构建性能
    rollupOptions: {
      output: {
        // 手动分割chunk，优化加载性能
        manualChunks: {
          // Vue核心库
          'vue-vendor': ['vue', 'vue-router'],
          // UI组件库
          'element-vendor': ['element-plus', '@element-plus/icons-vue'],
          // 微前端框架
          'qiankun-vendor': ['qiankun']
        },
        // 文件名命名策略
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId && facadeModuleId.includes('node_modules')) {
            return 'vendor/[name].[hash].js'
          }
          return 'js/[name].[hash].js'
        },
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) {
            return `images/[name].[hash].${ext}`
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) {
            return `fonts/[name].[hash].${ext}`
          }
          return `assets/[name].[hash].${ext}`
        }
      },
      // 外部化大型依赖（在微前端中可选）
      external: (id) => {
        // 在生产环境中可以考虑外部化某些大型库
        return false
      }
    },
    // 启用CSS代码分割
    cssCodeSplit: true,
    // 警告阈值（500KB）
    chunkSizeWarningLimit: 500,
    // 生成sourcemap以便调试
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
