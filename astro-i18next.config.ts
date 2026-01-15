import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "ja",
  locales: ["ko", "en", "ja"],
  i18nextServer: {
    debug: false,
  },
};

export default config;
