
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// [추가] Buffer 에러 해결을 위한 플러그인 불러오기
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,  // 기존 설정 유지
    })
  ],
  
  // [추가] Vite 설정: 브라우저에서 Node.js 모듈(Buffer 등)을 쓸 수 있게 해줍니다.
  vite: {
    plugins: [
      nodePolyfills({
        globals: {
          Buffer: true, // gray-matter를 위해 필수!
          global: true,
          process: true,
        },
        protocolImports: true,
      }),
    ],
  },

  i18n: {
    defaultLocale: 'ko', // 기존 설정 유지
    locales: ['ko', 'en'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});