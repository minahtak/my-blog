// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],

	i18n: {
		defaultLocale: 'en', // 기본 언어 영어
		locales: ['en', 'ko'], // 지원할 언어 목록
		routing: {
			prefixDefaultLocale: false,
		}
	}
});
