<script setup>
import { useData } from 'vitepress'

const { theme, frontmatter } = useData()
</script>

<template>
  <div v-if="theme.footer && frontmatter.footer !== false" class="doc-disclaimer-footer">
    <div class="doc-disclaimer-container">
      <p v-if="theme.footer.message" class="doc-disclaimer-message" v-html="theme.footer.message"></p>
      <p v-if="theme.footer.copyright" class="doc-disclaimer-copyright" v-html="theme.footer.copyright"></p>
    </div>
  </div>
</template>

<style scoped>
.doc-disclaimer-footer {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
  text-align: center;
}

.doc-disclaimer-container {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
}

.doc-disclaimer-message,
.doc-disclaimer-copyright {
  line-height: 22px;
  font-size: 13px;
  font-weight: 400;
  color: var(--vp-c-text-2);
}

.doc-disclaimer-message {
  margin-bottom: 8px;
}

:deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

:deep(a:hover) {
  color: var(--vp-c-brand-2);
}
</style>
