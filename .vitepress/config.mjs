import { defineConfig } from 'vitepress'
// 终端预览：npx vitepress dev 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HoYoShade Docs",
  head: [["link", { rel: "icon", href: "/HoYoShadeLOGOCorned.png" }]],
  description: "HoYoShade官方文档",
  srcDir: 'docs',
  
  rewrites: {
    'en/:path*': ':path*'
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'HoYoShade Docs',
      description: 'Official HoYoShade Documentation',
      themeConfig: {
        footer: {
          message: 'This project is not an official miHoYo / HoYoverse project. Neither this project nor its derivative projects maintained by the maintainer have any economic or affiliated relationship with miHoYo / HoYoverse. All game trademarks and copyrights belong to their respective owners.<br>To check the latest updates and official projects from miHoYo / HoYoverse, please visit <a href="https://www.mihoyo.com/" target="_blank" rel="noopener noreferrer">miHoYo (Mainland China)</a> or <a href="https://www.hoyoverse.com/" target="_blank" rel="noopener noreferrer">HoYoverse (Global)</a> for more information.',
          copyright: 'Copyright © 2024-present DuolaD'
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'User Agreement', link: '/user-agreement' },
          {
            text: 'Tutorials',
            items: [
              { text: 'Check your miHoYo/HoYoverse Client', link: '/Tutorial/check-your-client' },
              { text: 'Install HoYoShade with miHoYo Launcher', link: '/Tutorial/mihoyo-launcher' },
              { text: 'Install HoYoShade with Starward Launcher', link: '/Tutorial/starward-launcher' }
            ]
          }
        ],
        sidebar: {
          '/': [
            {
              text: 'Quick Start',
              items: [
                { text: 'Quick Start', link: '/quick-start' }
              ]
            },
            {
              text: 'User Agreement',
              items: [
                { text: 'User Agreement', link: '/user-agreement' }
              ]
            },
            {
              text: 'Tutorials',
              items: [
                { text: 'Check your miHoYo/HoYoverse Client', link: '/Tutorial/check-your-client' },
                { text: 'Install HoYoShade with miHoYo Launcher', link: '/Tutorial/mihoyo-launcher' },
                { text: 'Install HoYoShade with Starward Launcher', link: '/Tutorial/starward-launcher' }
              ]
            }
          ]
        }
      }
    },
    'zh_cn': {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'HoYoShade 文档',
      description: 'HoYoShade官方文档',
      themeConfig: {
        footer: {
          message: '此项目并非 miHoYo / HoYoverse 官方项目，本项目及本项目维护者维护的同系列衍生项目也与 miHoYo / HoYoverse 无任何经济/隶属关系。相关游戏商标与内容版权均归原权利人所有。<br>若要查看 miHoYo / HoYoverse 最新动态及官方项目，请前往 <a href="https://www.mihoyo.com/" target="_blank" rel="noopener noreferrer">miHoYo (中国大陆)</a> 或 <a href="https://www.hoyoverse.com/" target="_blank" rel="noopener noreferrer">HoYoverse (全球)</a> 了解更多资讯。',
          copyright: 'Copyright © 2024-present 哆啦D夢 | DuolaD'
        },
        nav: [
          { text: '首页', link: '/zh_cn/' },
          { text: '快速开始', link: '/zh_cn/quick-start' },
          { text: '用户协议', link: '/zh_cn/user-agreement' },
          {
            text: '教程',
            items: [
              { text: '判断你正在使用的 miHoYo（米哈游）/HoYoverse 客户端', link: '/zh_cn/Tutorial/check-your-client' },
              { text: '使用米哈游启动器安装HoYoShade', link: '/zh_cn/Tutorial/mihoyo-launcher' },
              { text: '在Starward启动器安装HoYoShade', link: '/zh_cn/Tutorial/starward-launcher' }
            ]
          }
        ],
        sidebar: {
          '/zh_cn/': [
            {
              text: '快速开始',
              items: [
                { text: '快速开始', link: '/zh_cn/quick-start' }
              ]
            },
            {
              text: '用户协议',
              items: [
                { text: '用户协议', link: '/zh_cn/user-agreement' }
              ]
            },
            {
              text: '教程',
              items: [
                { text: '判断你正在使用的 miHoYo（米哈游）/HoYoverse 客户端', link: '/zh_cn/Tutorial/check-your-client' },
                { text: '使用米哈游启动器安装HoYoShade', link: '/zh_cn/Tutorial/mihoyo-launcher' },
                { text: '在Starward启动器安装HoYoShade', link: '/zh_cn/Tutorial/starward-launcher' }
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
        footer: {
          message: '此項目並非 miHoYo / HoYoverse 官方項目，本項目及本項目維護者維護的同系列衍生項目也與 miHoYo / HoYoverse 無任何經濟/隸屬關係。相關遊戲商標與內容版權均歸原權利人所有。<br>若要查看 miHoYo / HoYoverse 最新動態及官方項目，請前往 <a href="https://www.mihoyo.com/" target="_blank" rel="noopener noreferrer">miHoYo (中國大陸)</a> 或 <a href="https://www.hoyoverse.com/" target="_blank" rel="noopener noreferrer">HoYoverse (全球)</a> 了解更多資訊。',
          copyright: 'Copyright © 2024-present 哆啦D夢 | DuolaD'
        },
        nav: [
          { text: '首頁', link: '/zh_hk/' },
          { text: '快速開始', link: '/zh_hk/quick-start' },
          { text: '用戶協議', link: '/zh_hk/user-agreement' },
          {
            text: '教程',
            items: [
              { text: '判斷你正在使用的 miHoYo（米哈遊）/HoYoverse 客戶端', link: '/zh_hk/Tutorial/check-your-client' },
              { text: '使用米哈游啟動器安裝HoYoShade', link: '/zh_hk/Tutorial/mihoyo-launcher' },
              { text: '在Starward啟動器安裝HoYoShade', link: '/zh_hk/Tutorial/starward-launcher' }
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
                { text: '判斷你正在使用的 miHoYo（米哈遊）/HoYoverse 客戶端', link: '/zh_hk/Tutorial/check-your-client' },
                { text: '使用米哈游啟動器安裝HoYoShade', link: '/zh_hk/Tutorial/mihoyo-launcher' },
                { text: '在Starward啟動器安裝HoYoShade', link: '/zh_hk/Tutorial/starward-launcher' }
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
          zh_cn: {
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
    ],
    footer: {
      message: 'This project is not an official miHoYo / HoYoverse project. Neither this project nor its derivative projects maintained by the maintainer have any economic or affiliated relationship with miHoYo / HoYoverse. All game trademarks and copyrights belong to their respective owners.<br>To check the latest updates and official projects from miHoYo / HoYoverse, please visit <a href="https://www.mihoyo.com/" target="_blank" rel="noopener noreferrer">miHoYo (Mainland China)</a> or <a href="https://www.hoyoverse.com/" target="_blank" rel="noopener noreferrer">HoYoverse (Global)</a> for more information.',
      copyright: 'Copyright © 2024-present DuolaD'
    }
  }
})
