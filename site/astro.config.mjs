// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { buildWikilinkMap } from './src/utils/wikilink-map';
import remarkWikilinks from './src/plugins/remark-wikilinks';

const configuredBasePath = process.env.PUBLIC_BASE_PATH ?? '/salem-study-system';
const basePath = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');
const siteUrl = process.env.PUBLIC_SITE_URL ?? 'https://nostem.github.io';
const wikilinkMap = buildWikilinkMap(basePath);

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  base: basePath || '/',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/create-account-925e867b3f131dd970800516/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      [remarkWikilinks, { wikilinkMap, basePath }],
    ],
  },
});
