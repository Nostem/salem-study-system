// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nostem.github.io',
  base: '/salem-study-system',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
