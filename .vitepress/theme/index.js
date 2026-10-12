import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DocFooterDisclaimer from './DocFooterDisclaimer.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 在导航栏标题前添加 Logo
      'nav-bar-title-before': () => h('img', {
        src: '/HoYoShadeLOGOCorned.png',
        alt: 'HoYoShade Logo',
        class: 'custom-logo'
      }),
      // 在文档页面底部添加全局免责声明
      'doc-after': () => h(DocFooterDisclaimer)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
