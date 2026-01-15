import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Astro v5 標準の多言語設定
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ko'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});