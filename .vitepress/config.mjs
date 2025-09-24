import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HoYoShade Docs",
  description: "HoYoShade官方文档",
  srcDir: 'docs',
  
  rewrites: {
    'zh_cn/:path*': ':path*'
  },
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'HoYoShade 文档',
      description: 'HoYoShade官方文档',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '快速开始', link: '/quick-start' },
          { text: '用户协议', link: '/user-agreement' },
          {
            text: '教程',
            items: [
              { text: '使用米哈游启动器安装HoYoShade', link: '/教程/mihoyo-launcher' },
              { text: '在Starward启动器安装HoYoShade', link: '/教程/starward-launcher' }
            ]
          }
        ],
        sidebar: {
          '/': [
            {
              text: '快速开始',
              items: [
                { text: '快速开始', link: '/quick-start' }
              ]
            },
            {
              text: '用户协议',
              items: [
                { text: '用户协议', link: '/user-agreement' }
              ]
            },
            {
              text: '教程',
              items: [
                { text: '使用米哈游启动器安装HoYoShade', link: '/教程/mihoyo-launcher' },
                { text: '在Starward启动器安装HoYoShade', link: '/教程/starward-launcher' }
              ]
            }
          ]
        }
      }
    },
    'en': {
      label: 'English',
      lang: 'en-US',
      title: 'HoYoShade Docs',
      description: 'Official HoYoShade Documentation',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Quick Start', link: '/en/quick-start' },
          { text: 'User Agreement', link: '/en/user-agreement' },
          {
            text: 'Tutorials',
            items: [
              { text: 'Install HoYoShade with miHoYo Launcher', link: '/en/Tutorial/mihoyo-launcher' },
              { text: 'Install HoYoShade with Starward Launcher', link: '/en/Tutorial/starward-launcher' }
            ]
          }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Quick Start',
              items: [
                { text: 'Quick Start', link: '/en/quick-start' }
              ]
            },
            {
              text: 'User Agreement',
              items: [
                { text: 'User Agreement', link: '/en/user-agreement' }
              ]
            },
            {
              text: 'Tutorials',
              items: [
                { text: 'Install HoYoShade with miHoYo Launcher', link: '/en/Tutorial/mihoyo-launcher' },
                { text: 'Install HoYoShade with Starward Launcher', link: '/en/Tutorial/starward-launcher' }
              ]
            }
          ]
        }
      }
    },
    'zh_hk': {
      label: '繁體中文',
      lang: 'zh-HK',
      title: 'HoYoShade 文檔',
      description: 'HoYoShade官方文檔',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh_hk/' },
          { text: '快速開始', link: '/zh_hk/quick-start' },
          { text: '用戶協議', link: '/zh_hk/user-agreement' },
          {
            text: '教程',
            items: [
              { text: '使用米哈游啟動器安裝HoYoShade', link: '/zh_hk/教程/mihoyo-launcher' },
              { text: '在Starward啟動器安裝HoYoShade', link: '/zh_hk/教程/starward-launcher' }
            ]
          }
        ],
        sidebar: {
          '/zh_hk/': [
            {
              text: '快速開始',
              items: [
                { text: '快速開始', link: '/zh_hk/quick-start' }
              ]
            },
            {
              text: '用戶協議',
              items: [
                { text: '用戶協議', link: '/zh_hk/user-agreement' }
              ]
            },
            {
              text: '教程',
              items: [
                { text: '使用米哈游啟動器安裝HoYoShade', link: '/zh_hk/教程/mihoyo-launcher' },
                { text: '在Starward啟動器安裝HoYoShade', link: '/zh_hk/教程/starward-launcher' }
              ]
            }
          ]
        }
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DuolaD/HoYoShade' }
    ]
  }
})
