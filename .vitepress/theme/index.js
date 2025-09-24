// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
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
      })
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
