import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCREENSHOT_DIR = path.resolve(__dirname, '../test-screenshots');
const DIST_DIR = path.resolve(__dirname, '../dist');
const BASE = '/salem-study-system/';

// Discover all built pages from dist/
function discoverPages(): { slug: string; name: string }[] {
  const pages: { slug: string; name: string }[] = [];

  function walk(dir: string, prefix: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.name === 'index.html') {
        const slug = prefix || '/';
        const name = prefix ? prefix.replace(/\/$/, '').replace(/\//g, '-') : 'index';
        pages.push({ slug, name });
      }
    }
  }

  walk(DIST_DIR, '');
  return pages;
}

// Clear and recreate screenshot directory before all tests
test.beforeAll(async () => {
  if (fs.existsSync(SCREENSHOT_DIR)) {
    fs.rmSync(SCREENSHOT_DIR, { recursive: true });
  }
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
});

const pages = discoverPages();

// --- 1. Screenshots at desktop and mobile ---

for (const pg of pages) {
  test(`screenshot desktop: ${pg.name}`, async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    await page.goto(BASE + pg.slug);
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `${pg.name}-desktop.png`),
      fullPage: true,
    });
    await context.close();
  });

  test(`screenshot mobile: ${pg.name}`, async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
    const page = await context.newPage();
    await page.goto(BASE + pg.slug);
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `${pg.name}-mobile.png`),
      fullPage: true,
    });
    await context.close();
  });
}
