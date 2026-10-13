import { defineConfig } from 'vitepress'
// 终端预览：npx vitepress dev 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HoYoShade Docs",
  head: [
    ["link", { rel: "icon", href: "/HoYoShadeLOGOCorned.png" }],
    [
      "script",
      { id: "check-lang" },
      `
(function() {
  try {
    var pathname = window.location.pathname;
    // 仅在根路径（首页）触发重定向
    if (pathname === '/' || pathname === '/index.html') {
      var saved = localStorage.getItem('hoyoshade_lang');
      var searchAndHash = window.location.search + window.location.hash;

      // 1. 若用户已有手动偏好，严格遵守用户选择
      if (saved) {
        if (saved === 'zh_cn') {
          window.location.replace('/zh_cn/' + searchAndHash);
          return;
        }
        if (saved === 'zh_tw') {
          window.location.replace('/zh_tw/' + searchAndHash);
          return;
        }
        if (saved === 'zh_hk') {
          window.location.replace('/zh_hk/' + searchAndHash);
          return;
        }
        // 若 saved === 'en'，留在当前英文首页，不跳转
        return;
      }

      // 2. 若用户从未手动选择，检测系统/浏览器首选语言
      var langs = navigator.languages || [navigator.language || ''];
      var isTraditional = false;

      for (var i = 0; i < langs.length; i++) {
        var l = (langs[i] || '').toLowerCase();
        if (
          l.indexOf('zh-hk') !== -1 ||
          l.indexOf('zh-tw') !== -1 ||
          l.indexOf('zh-mo') !== -1 ||
          l.indexOf('hant') !== -1
        ) {
          isTraditional = true;
          break;
        }
        // 若首选语言是简体中文（zh-cn、zh-sg、zh-hans），直接认定为简体
        if (i === 0 && (l.indexOf('zh-cn') !== -1 || l.indexOf('zh-sg') !== -1 || l.indexOf('hans') !== -1)) {
          break;
        }
      }

      // 繁体中文用户：不自动强制跳转，停留在首页交由 TraditionalChineseModal 弹窗询问
      if (isTraditional) {
        return;
      }

      // 简体中文及其他中文匹配：以 zh 开头（如 zh-cn, zh-sg, zh-hans, zh 等）
      var primary = (langs[0] || '').toLowerCase();
      if (primary.indexOf('zh') === 0) {
        window.location.replace('/zh_cn/' + searchAndHash);
        return;
      }

      // 其它语言默认保留英文首页
    }
  } catch (e) {}
})();
      `.trim()
    ]
  ],
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
              { text: 'Use HoYoShade Hub Launcher', link: '/Tutorial/hoyoshade-hub' },
              { text: 'Check your Client Type', link: '/Tutorial/check-your-client' },
              { text: 'Install with HoYoPlay Launcher', link: '/Tutorial/mihoyo-launcher' },
              { text: 'Install with Starward Launcher', link: '/Tutorial/starward-launcher' },
              { text: 'Antivirus Exclusions', link: '/Tutorial/antivirus' },
              { text: 'Troubleshooting & FAQ', link: '/Tutorial/troubleshooting' }
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
                { text: 'Use HoYoShade Hub Launcher', link: '/Tutorial/hoyoshade-hub' },
                { text: 'Check your Client Type', link: '/Tutorial/check-your-client' },
                { text: 'Install with HoYoPlay Launcher', link: '/Tutorial/mihoyo-launcher' },
                { text: 'Install with Starward Launcher', link: '/Tutorial/starward-launcher' },
                { text: 'Antivirus Exclusions', link: '/Tutorial/antivirus' },
                { text: 'Troubleshooting & FAQ', link: '/Tutorial/troubleshooting' }
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
            text: '教程与指南',
            items: [
              { text: '使用 HoYoShade Hub 启动器', link: '/zh_cn/Tutorial/hoyoshade-hub' },
              { text: '判断客户端类型', link: '/zh_cn/Tutorial/check-your-client' },
              { text: '使用官方启动器 (HoYoPlay)', link: '/zh_cn/Tutorial/mihoyo-launcher' },
              { text: '使用第三方启动器 (Starward)', link: '/zh_cn/Tutorial/starward-launcher' },
              { text: '杀毒软件排除设置', link: '/zh_cn/Tutorial/antivirus' },
              { text: '常见问题与排错', link: '/zh_cn/Tutorial/troubleshooting' }
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
              text: '教程与指南',
              items: [
                { text: '使用 HoYoShade Hub 启动器', link: '/zh_cn/Tutorial/hoyoshade-hub' },
                { text: '判断客户端类型', link: '/zh_cn/Tutorial/check-your-client' },
                { text: '使用官方启动器 (HoYoPlay)', link: '/zh_cn/Tutorial/mihoyo-launcher' },
                { text: '使用第三方启动器 (Starward)', link: '/zh_cn/Tutorial/starward-launcher' },
                { text: '杀毒软件排除设置', link: '/zh_cn/Tutorial/antivirus' },
                { text: '常见问题与排错', link: '/zh_cn/Tutorial/troubleshooting' }
              ]
            }
          ]
        }
      }
    },
    'zh_tw': {
      label: '繁體中文 (台灣)',
      lang: 'zh-TW',
      title: 'HoYoShade 文檔',
      description: 'HoYoShade官方文檔',
      themeConfig: {
        footer: {
          message: '此項目並非 miHoYo / HoYoverse 官方項目，本項目及本項目維護者維護的同系列衍生項目也與 miHoYo / HoYoverse 無任何經濟/隸屬關係。相關遊戲商標與內容版權均歸原權利人所有。<br>若要查看 miHoYo / HoYoverse 最新動態及官方項目，請前往 <a href="https://www.mihoyo.com/" target="_blank" rel="noopener noreferrer">miHoYo (中國大陸)</a> 或 <a href="https://www.hoyoverse.com/" target="_blank" rel="noopener noreferrer">HoYoverse (全球)</a> 了解更多資訊。',
          copyright: 'Copyright © 2024-present 哆啦D夢 | DuolaD'
        },
        nav: [
          { text: '首頁', link: '/zh_tw/' },
          { text: '快速開始', link: '/zh_tw/quick-start' },
          { text: '使用者協議', link: '/zh_tw/user-agreement' },
          {
            text: '教學與指南',
            items: [
              { text: '使用 HoYoShade Hub 啟動器', link: '/zh_tw/Tutorial/hoyoshade-hub' },
              { text: '判斷客戶端類型', link: '/zh_tw/Tutorial/check-your-client' },
              { text: '使用官方啟動器 (HoYoPlay)', link: '/zh_tw/Tutorial/mihoyo-launcher' },
              { text: '使用第三方啟動器 (Starward)', link: '/zh_tw/Tutorial/starward-launcher' },
              { text: '防毒軟體排除設定', link: '/zh_tw/Tutorial/antivirus' },
              { text: '常見問題與疑難排解', link: '/zh_tw/Tutorial/troubleshooting' }
            ]
          }
        ],
        sidebar: {
          '/zh_tw/': [
            {
              text: '快速開始',
              items: [
                { text: '快速開始', link: '/zh_tw/quick-start' }
              ]
            },
            {
              text: '使用者協議',
              items: [
                { text: '使用者協議', link: '/zh_tw/user-agreement' }
              ]
            },
            {
              text: '教學與指南',
              items: [
                { text: '使用 HoYoShade Hub 啟動器', link: '/zh_tw/Tutorial/hoyoshade-hub' },
                { text: '判斷客戶端類型', link: '/zh_tw/Tutorial/check-your-client' },
                { text: '使用官方啟動器 (HoYoPlay)', link: '/zh_tw/Tutorial/mihoyo-launcher' },
                { text: '使用第三方啟動器 (Starward)', link: '/zh_tw/Tutorial/starward-launcher' },
                { text: '防毒軟體排除設定', link: '/zh_tw/Tutorial/antivirus' },
                { text: '常見問題與疑難排解', link: '/zh_tw/Tutorial/troubleshooting' }
              ]
            }
          ]
        }
      }
    },
    'zh_hk': {
      label: '香港繁體 (粵語)',
      lang: 'zh-HK',
      title: 'HoYoShade 文檔',
      description: 'HoYoShade官方文檔',
      themeConfig: {
        footer: {
          message: '呢個項目並非 miHoYo / HoYoverse 官方項目，本項目同埋維護者維護嘅同系列衍生項目都同 miHoYo / HoYoverse 冇任何經濟或隸屬關係。相關遊戲商標同埋內容版權全部歸原權利人所有。<br>若要睇 miHoYo / HoYoverse 最新動態同埋官方項目，請去 <a href="https://www.mihoyo.com/" target="_blank" rel="noopener noreferrer">miHoYo (中國大陸)</a> 或者 <a href="https://www.hoyoverse.com/" target="_blank" rel="noopener noreferrer">HoYoverse (全球)</a> 了解更多資訊。',
          copyright: 'Copyright © 2024-present 哆啦D夢 | DuolaD'
        },
        nav: [
          { text: '首頁', link: '/zh_hk/' },
          { text: '快速上手', link: '/zh_hk/quick-start' },
          { text: '用戶協議', link: '/zh_hk/user-agreement' },
          {
            text: '教學與指南',
            items: [
              { text: '使用 HoYoShade Hub 啟動器', link: '/zh_hk/Tutorial/hoyoshade-hub' },
              { text: '分清客戶端版本', link: '/zh_hk/Tutorial/check-your-client' },
              { text: '用官方啟動器 (HoYoPlay)', link: '/zh_hk/Tutorial/mihoyo-launcher' },
              { text: '用第三方啟動器 (Starward)', link: '/zh_hk/Tutorial/starward-launcher' },
              { text: '防毒軟件加白名單', link: '/zh_hk/Tutorial/antivirus' },
              { text: '常見問題與解決方法', link: '/zh_hk/Tutorial/troubleshooting' }
            ]
          }
        ],
        sidebar: {
          '/zh_hk/': [
            {
              text: '快速上手',
              items: [
                { text: '快速上手', link: '/zh_hk/quick-start' }
              ]
            },
            {
              text: '用戶協議',
              items: [
                { text: '用戶協議', link: '/zh_hk/user-agreement' }
              ]
            },
            {
              text: '教學與指南',
              items: [
                { text: '使用 HoYoShade Hub 啟動器', link: '/zh_hk/Tutorial/hoyoshade-hub' },
                { text: '分清客戶端版本', link: '/zh_hk/Tutorial/check-your-client' },
                { text: '用官方啟動器 (HoYoPlay)', link: '/zh_hk/Tutorial/mihoyo-launcher' },
                { text: '用第三方啟動器 (Starward)', link: '/zh_hk/Tutorial/starward-launcher' },
                { text: '防毒軟件加白名單', link: '/zh_hk/Tutorial/antivirus' },
                { text: '常見問題與解決方法', link: '/zh_hk/Tutorial/troubleshooting' }
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
          zh_tw: {
            translations: {
              button: {
                buttonText: '搜尋',
                buttonAriaLabel: '搜尋文檔'
              },
              modal: {
                displayDetails: '顯示詳細列表',
                resetButtonTitle: '重設搜尋',
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
          },
          zh_hk: {
            translations: {
              button: {
                buttonText: '搵嘢 / 搜尋',
                buttonAriaLabel: '搜尋文檔'
              },
              modal: {
                displayDetails: '顯示詳細清單',
                resetButtonTitle: 'Reset 搜尋',
                backButtonTitle: '閂咗佢',
                noResultsText: '搵唔到相關結果',
                footer: {
                  selectText: '揀選',
                  selectKeyAriaLabel: 'Enter 掣',
                  navigateText: '左右上落',
                  navigateUpKeyAriaLabel: '向上掣',
                  navigateDownKeyAriaLabel: '向下掣',
                  closeText: '閂閉',
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
