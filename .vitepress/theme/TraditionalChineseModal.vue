<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vitepress'

const visible = ref(false)
const rememberChoice = ref(true)
const route = useRoute()

function checkShouldPrompt() {
  if (typeof window === 'undefined') return

  try {
    const pathname = window.location.pathname
    // 仅在根路径（首页）触发判断
    if (pathname !== '/' && pathname !== '/index.html') {
      visible.value = false
      return
    }

    // 1. 若用户已有手动偏好，直接遵守，不弹窗
    const saved = localStorage.getItem('hoyoshade_lang')
    if (saved) return

    const cookieMatch = document.cookie.match(/(?:^|;\s*)hoyoshade_lang=([^;]+)/)
    if (cookieMatch) return

    // 2. 检测浏览器或系统的首选语言
    const langs = navigator.languages || [navigator.language || '']
    let isTraditional = false

    for (let i = 0; i < langs.length; i++) {
      const l = (langs[i] || '').toLowerCase()
      if (
        l.includes('zh-tw') ||
        l.includes('zh-hk') ||
        l.includes('zh-mo') ||
        l.includes('hant')
      ) {
        isTraditional = true
        break
      }
      // 如果第一个语言明确是大陆/新加坡简体，不弹窗（由 check-lang 自动分流至 zh_cn）
      if (i === 0 && (l.includes('zh-cn') || l.includes('zh-sg') || l.includes('hans'))) {
        return
      }
    }

    if (isTraditional) {
      visible.value = true
    }
  } catch (e) {}
}

function selectLanguage(lang) {
  if (typeof window === 'undefined') return

  if (rememberChoice.value) {
    try {
      localStorage.setItem('hoyoshade_lang', lang)
      document.cookie = `hoyoshade_lang=${lang}; path=/; max-age=31536000; SameSite=Lax`
    } catch (e) {}
  }

  const searchAndHash = window.location.search + window.location.hash
  window.location.replace(`/${lang}/${searchAndHash}`)
}

function dismissModal(stayEnglish = true) {
  if (stayEnglish && rememberChoice.value) {
    try {
      localStorage.setItem('hoyoshade_lang', 'en')
      document.cookie = `hoyoshade_lang=en; path=/; max-age=31536000; SameSite=Lax`
    } catch (e) {}
  }
  visible.value = false
}

function onKeyDown(e) {
  if (e.key === 'Escape' && visible.value) {
    dismissModal(false)
  }
}

onMounted(() => {
  checkShouldPrompt()
  window.addEventListener('keydown', onKeyDown)
})

watch(() => route.path, () => {
  checkShouldPrompt()
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="visible" class="tc-modal-overlay" @click.self="dismissModal(false)">
      <div class="tc-modal-dialog" role="dialog" aria-modal="true">
        <!-- 弹窗头部 -->
        <div class="tc-modal-header">
          <div class="tc-modal-icon">🌐</div>
          <div class="tc-modal-title-box">
            <h3 class="tc-modal-title">請選擇繁體中文版本</h3>
            <p class="tc-modal-subtitle">
              偵測到您的系統語言為繁體中文。HoYoShade 提供兩種不同風格的繁體中文版本，請選擇您偏好的內容：
            </p>
          </div>
          <button class="tc-modal-close" @click="dismissModal(false)" aria-label="Close">
            ✕
          </button>
        </div>

        <!-- 选项卡片 -->
        <div class="tc-modal-options">
          <!-- 选项 1：台湾繁体 -->
          <div class="tc-option-card" @click="selectLanguage('zh_tw')">
            <div class="tc-option-top">
              <span class="tc-option-flag">🇹🇼</span>
              <span class="tc-option-name">繁體中文（台灣）</span>
              <span class="tc-option-badge badge-tw">標準書面語</span>
            </div>
            <p class="tc-option-desc">
              採用標準書面中文及台灣資訊科技習慣用語（如：防毒軟體、記憶體、使用者協議）。適合台灣及偏好規範書面語的讀者。
            </p>
            <button class="tc-option-btn btn-tw">
              進入台灣繁體版 →
            </button>
          </div>

          <!-- 选项 2：香港繁体 -->
          <div class="tc-option-card" @click="selectLanguage('zh_hk')">
            <div class="tc-option-top">
              <span class="tc-option-flag">🇭🇰</span>
              <span class="tc-option-name">香港繁體（粵語）</span>
              <span class="tc-option-badge badge-hk">地道口語</span>
            </div>
            <p class="tc-option-desc">
              採用地道港式廣東話口語及生活化俚語風格（如：防毒軟件、加白名單、搞掂、彈 Game）。適合香港及習慣粵語語境的讀者。
            </p>
            <button class="tc-option-btn btn-hk">
              進入香港繁體版 →
            </button>
          </div>
        </div>

        <!-- 底部提示与操作 -->
        <div class="tc-modal-footer">
          <label class="tc-remember-label">
            <input type="checkbox" v-model="rememberChoice" />
            <span>記住我的選擇（下次訪問首頁將自動直達）</span>
          </label>
          <button class="tc-skip-btn" @click="dismissModal(true)">
            繼續瀏覽英文原版 (Continue in English)
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.tc-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 16px;
}

.tc-modal-dialog {
  width: 100%;
  max-width: 680px;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  box-shadow: var(--vp-shadow-5, 0 16px 36px rgba(0, 0, 0, 0.35));
  padding: 28px;
  box-sizing: border-box;
}

.tc-modal-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  margin-bottom: 24px;
}

.tc-modal-icon {
  font-size: 32px;
  line-height: 1;
  flex-shrink: 0;
}

.tc-modal-title-box {
  flex: 1;
  padding-right: 24px;
}

.tc-modal-title {
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.tc-modal-subtitle {
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: var(--vp-c-text-2);
}

.tc-modal-close {
  position: absolute;
  top: -4px;
  right: -4px;
  background: transparent;
  border: none;
  font-size: 18px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s;
}

.tc-modal-close:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-default-soft);
}

.tc-modal-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
}

@media (max-width: 620px) {
  .tc-modal-options {
    grid-template-columns: 1fr;
  }
}

.tc-option-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.tc-option-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
}

.tc-option-top {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.tc-option-flag {
  font-size: 20px;
  line-height: 1;
}

.tc-option-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.tc-option-badge {
  font-size: 11px;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 999px;
}

.badge-tw {
  background-color: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.badge-hk {
  background-color: rgba(239, 68, 68, 0.15);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.tc-option-desc {
  margin: 0 0 18px 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--vp-c-text-2);
  flex-grow: 1;
}

.tc-option-btn {
  width: 100%;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
}

.btn-tw {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.tc-option-card:hover .btn-tw {
  background-color: var(--vp-c-brand-1);
  color: #fff;
}

.btn-hk {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border-color: #ef4444;
}

.tc-option-card:hover .btn-hk {
  background-color: #ef4444;
  color: #fff;
}

.tc-modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.tc-remember-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  user-select: none;
}

.tc-remember-label input {
  cursor: pointer;
  accent-color: var(--vp-c-brand-1);
}

.tc-skip-btn {
  background: transparent;
  border: none;
  font-size: 13px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s;
  padding: 0;
}

.tc-skip-btn:hover {
  color: var(--vp-c-text-1);
}

/* 渐变动画 */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .tc-modal-dialog,
.modal-fade-leave-to .tc-modal-dialog {
  transform: scale(0.95);
}
</style>
