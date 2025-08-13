import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'HoYoShade',
  description: '负责任，可持续，全开源的ReShade解决方案。',
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
      ],
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
    ]
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: { label: 'English', lang: 'en' }
  }
})