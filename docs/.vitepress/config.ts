import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'HoYoShade',
  description: '负责任，可持续，全开源的ReShade解决方案。',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '快速开始', link: '/zh_cn/简介/简介' }
        ],
        sidebar: {
          '/zh_cn/': [
            {
              text: '简介',
              items: [
                { text: '快速开始', link: '/zh_cn/简介/简介' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/DuolaD/HoYoShade' }
        ],
        localeLinks: {
          text: '选择语言',
          items: [
            { text: 'English', link: '/en/' },
            { text: '简体中文', link: '/' }
          ]
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Getting Started', link: '/en/introduction/getting-started' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Getting Started', link: '/en/introduction/getting-started' }
              ]
            }
          ]
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/DuolaD/HoYoShade' }
        ],
        localeLinks: {
          text: 'Languages',
          items: [
            { text: '简体中文', link: '/' },
            { text: 'English', link: '/en/' }
          ]
        }
      }
    }
  }
})