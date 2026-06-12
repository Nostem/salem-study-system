// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { buildWikilinkMap } from './src/utils/wikilink-map';
import remarkWikilinks from './src/plugins/remark-wikilinks';

const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true';
const configuredBasePath = process.env.PUBLIC_BASE_PATH ?? (isVercel ? '/' : '/salem-study-system');
const basePath = configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');
const vercelSiteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;
const siteUrl = process.env.PUBLIC_SITE_URL ?? vercelSiteUrl ?? 'https://nostem.github.io';
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
