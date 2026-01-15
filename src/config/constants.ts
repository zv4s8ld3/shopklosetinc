// src/config/constants.ts
import { LanguageCode, LANGUAGES } from '../i18n/dic';  // ← ここでLANGUAGESもインポート

export const API = {
  LANGUAGE: `language/:locale/hp`,
} as const;

// 表示名はdic.tsのLANGUAGESから使い回し、フラグ画像だけここで定義
export const LANGUAGE_SETTING: Record<LanguageCode, { name: string; flag: string }> = {
  ja: {
    name: LANGUAGES.ja,  // → '日本語'
    flag: "/images/jp.png",
  },
  ko: {
    name: LANGUAGES.ko,  // → '한국어'
    flag: "/images/kr.png",
  },
  en: {
    name: LANGUAGES.en,  // → 'English'
    flag: "/images/gb.png",
  },
} as const;

export const G_TAG = 'https://www.googletagmanager.com/gtag/js?id=' + import.meta.env.PUBLIC_G_TAG;