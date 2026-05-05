// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { buildWikilinkMap } from './src/utils/wikilink-map';
import remarkWikilinks from './src/plugins/remark-wikilinks';

const basePath = '/salem-study-system';
const wikilinkMap = buildWikilinkMap(basePath);

// https://astro.build/config
export default defineConfig({
  site: 'https://nostem.github.io',
  base: basePath,
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
