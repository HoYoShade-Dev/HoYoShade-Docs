import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import DocFooterDisclaimer from './DocFooterDisclaimer.vue'
import TraditionalChineseModal from './TraditionalChineseModal.vue'
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
      'doc-after': () => h(DocFooterDisclaimer),
      // 繁体中文选择引导弹窗（当首次访问且检测到繁体中文时弹出）
      'layout-bottom': () => h(TraditionalChineseModal)
    })
  },
  enhanceApp({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // 监听用户点击导航栏语言切换选项，保存其手动选择的偏好
      document.addEventListener(
        'click',
        (e) => {
          const link = e.target.closest(
            '.VPNavBarTranslations a, .VPNavScreenTranslations a, .VPNavBarExtra .translations a, [class*="Translations"] a, .translations a'
          );
          if (!link) return;

          const text = (link.textContent || '').trim();
          const path = (link.pathname || link.getAttribute('href') || '').toLowerCase();
          let targetLang = 'en';

          if (
            text.includes('简体中文') ||
            path.includes('/zh_cn/') ||
            path.endsWith('/zh_cn') ||
            path === '/zh_cn'
          ) {
            targetLang = 'zh_cn';
          } else if (
            text.includes('台灣') ||
            text.includes('台湾') ||
            path.includes('/zh_tw/') ||
            path.endsWith('/zh_tw') ||
            path === '/zh_tw'
          ) {
            targetLang = 'zh_tw';
          } else if (
            text.includes('香港') ||
            text.includes('粵語') ||
            text.includes('粤语') ||
            path.includes('/zh_hk/') ||
            path.endsWith('/zh_hk') ||
            path === '/zh_hk'
          ) {
            targetLang = 'zh_hk';
          } else {
            targetLang = 'en';
          }

          try {
            localStorage.setItem('hoyoshade_lang', targetLang);
            document.cookie = `hoyoshade_lang=${targetLang}; path=/; max-age=31536000; SameSite=Lax`;
          } catch (err) {}
        },
        true
      );
    }
  }
}
