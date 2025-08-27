import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '企业级微前端项目',
  description: '基于 Qiankun + Vue3 + Vite + TypeScript 构建的企业级微前端管理后台系统',
  
  // 基础配置
  base: process.env.NODE_ENV === 'production' ? '/qiankun-microfrontend/' : '/',
  lang: 'zh-CN',
  
  // 忽略死链接
  ignoreDeadLinks: [
    // 忽略本地开发链接
    /^http:\/\/localhost:/,
    // 忽略未创建的页面
    './cloud-server',
    './github-actions',
    './../docs/project-development-summary',
    './../docs/vercel-deployment-guide',
    './../docs/performance-optimization'
  ],
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '部署', link: '/deployment/' },
      { text: '问题排查', link: '/troubleshooting/' },
      { text: '在线预览', link: 'https://qiankun-main-app.vercel.app' }
    ],
    
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '项目介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '项目架构', link: '/guide/architecture' }
          ]
        },
        {
          text: '开发指南',
          items: [
            { text: '本地开发', link: '/guide/development' },
            { text: '构建部署', link: '/guide/build' },
            { text: '性能优化', link: '/guide/performance' }
          ]
        }
      ],
      '/deployment/': [
        {
          text: '部署方案',
          items: [
            { text: '部署概览', link: '/deployment/' },
            { text: 'Vercel部署', link: '/deployment/vercel' },
            { text: 'GitHub Actions', link: '/deployment/github-actions' },
            { text: '云服务器部署', link: '/deployment/cloud-server' },
            { text: '部署对比', link: '/deployment/comparison' }
          ]
        }
      ],
      '/troubleshooting/': [
        {
          text: '问题排查',
          items: [
            { text: '常见问题', link: '/troubleshooting/' },
            { text: '部署问题', link: '/troubleshooting/deployment' },
            { text: '开发问题', link: '/troubleshooting/development' }
          ]
        }
      ]
    },
    
    // 页脚
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 企业级微前端项目'
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/tywd/qiankun-microfrontend/edit/main/docs-site/:path',
      text: '在 GitHub 上编辑此页面'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // 搜索
    search: {
      provider: 'local'
    },
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tywd/qiankun-microfrontend' }
    ],
    
    // 文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 大纲配置
    outline: {
      label: '页面导航',
      level: [2, 3]
    },
    
    // 返回顶部
    returnToTopLabel: '回到顶部',
    
    // 外部链接图标
    externalLinkIcon: true
  },
  
  // 构建配置
  vite: {
    server: {
      port: 5173,
      host: '0.0.0.0'
    }
  },
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c4043' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  
  // markdown配置
  markdown: {
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
})