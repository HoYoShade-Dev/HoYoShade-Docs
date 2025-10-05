import { defineConfig } from 'vitepress'
// 终端预览：npx vitepress dev 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HoYoShade Docs",
  head: [["link", { rel: "icon", href: "/HoYoShadeLOGOCorned.png" }]],
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
              { text: '判断你正在使用的 miHoYo（米哈游）/HoYoverse 客户端', link: '/教程/check-your-client' },
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
                { text: '判断你正在使用的 miHoYo（米哈游）/HoYoverse 客户端', link: '/教程/check-your-client' },
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
              { text: 'Check your miHoYo/HoYoverse Client', link: '/en/Tutorial/check-your-client' },
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
                { text: 'Check your miHoYo/HoYoverse Client', link: '/en/Tutorial/check-your-client' },
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
              { text: '判斷你正在使用的 miHoYo（米哈遊）/HoYoverse 客戶端', link: '/zh_hk/教程/check-your-client' },
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
                { text: '判斷你正在使用的 miHoYo（米哈遊）/HoYoverse 客戶端', link: '/zh_hk/教程/check-your-client' },
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
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有找到相关结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search docs'
              },
              modal: {
                displayDetails: 'Display detailed list',
                resetButtonTitle: 'Reset search',
                backButtonTitle: 'Close search',
                noResultsText: 'No results found',
                footer: {
                  selectText: 'Select',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'Navigate',
                  navigateUpKeyAriaLabel: 'Up arrow',
                  navigateDownKeyAriaLabel: 'Down arrow',
                  closeText: 'Close',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          },
          zh_hk: {
            translations: {
              button: {
                buttonText: '搜尋',
                buttonAriaLabel: '搜尋文檔'
              },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '重置搜尋',
                backButtonTitle: '關閉搜尋',
                noResultsText: '沒有找到相關結果',
                footer: {
                  selectText: '選擇',
                  selectKeyAriaLabel: '輸入',
                  navigateText: '導航',
                  navigateUpKeyAriaLabel: '上箭頭',
                  navigateDownKeyAriaLabel: '下箭頭',
                  closeText: '關閉',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DuolaD/HoYoShade' }
    ]
  }
})
