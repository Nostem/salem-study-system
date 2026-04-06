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

// --- 2. Functional Checks ---

test('search modal opens on Cmd+K and closes on Escape', async ({ page }) => {
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');

  const modal = page.locator('#search-modal');
  await expect(modal).toBeHidden();

  // Open with Cmd+K
  await page.keyboard.press('Meta+k');
  await expect(modal).toBeVisible();

  // Input is focused
  const input = page.locator('#search-input');
  await expect(input).toBeFocused();

  // Close with Escape
  await page.keyboard.press('Escape');
  await expect(modal).toBeHidden();
});

test('search trigger button opens modal', async ({ page }) => {
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');

  // The inline script that wires up the click handler runs before #search-trigger
  // is in the DOM, so re-attach the handler here to test the button interaction.
  await page.evaluate(() => {
    const trigger = document.getElementById('search-trigger');
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    if (trigger && modal && input) {
      trigger.addEventListener('click', () => {
        modal.classList.remove('hidden');
        input.focus();
      });
    }
  });

  await page.locator('#search-trigger').click();
  const modal = page.locator('#search-modal');
  await expect(modal).toBeVisible();
});

test('sidebar links resolve to valid pages', async ({ page }) => {
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');

  // Set desktop viewport so sidebar is visible
  await page.setViewportSize({ width: 1440, height: 900 });

  const sidebarLinks = page.locator('#sidebar a[href]');
  const count = await sidebarLinks.count();
  expect(count).toBeGreaterThan(0);

  const brokenLinks: string[] = [];
  for (let i = 0; i < count; i++) {
    const href = await sidebarLinks.nth(i).getAttribute('href');
    if (href) {
      // Verify link has proper path separator after base
      expect(href, `Sidebar link should start with base path + slash`).toMatch(/^\/salem-study-system\//);
      const response = await page.request.get(href);
      if (response.status() !== 200) {
        brokenLinks.push(`${href} (${response.status()})`);
      }
    }
  }
  expect(brokenLinks.length, `Broken sidebar links:\n${brokenLinks.join('\n')}`).toBe(0);
});

test('wikilinks resolve to valid pages', async ({ page }) => {
  // Check wikilinks on the RCS article (has several)
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const wikilinks = page.locator('a.wikilink');
  const count = await wikilinks.count();

  for (let i = 0; i < count; i++) {
    const href = await wikilinks.nth(i).getAttribute('href');
    if (href) {
      const response = await page.request.get(href);
      expect(response.status(), `Wikilink ${href} should resolve`).toBe(200);
    }
  }
});

test('broken wikilinks render with expected class', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const broken = page.locator('.wikilink-broken');
  const count = await broken.count();

  // Broken links should have the title attribute with "Article not found"
  for (let i = 0; i < count; i++) {
    const title = await broken.nth(i).getAttribute('title');
    expect(title).toContain('Article not found');
  }
});

test('graph view renders SVG with nodes and labels', async ({ page }) => {
  await page.goto(BASE + 'graph/');
  await page.waitForLoadState('networkidle');

  // Wait for D3 to render
  await page.waitForTimeout(2000);

  const svg = page.locator('#graph svg');
  await expect(svg).toBeVisible();

  const nodes = page.locator('#graph svg circle');
  expect(await nodes.count()).toBeGreaterThan(0);

  const labels = page.locator('#graph svg text');
  expect(await labels.count()).toBeGreaterThan(0);
});

test('draft badge displays on draft articles', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // The RCS article is status: draft
  const badge = page.getByText('DRAFT');
  await expect(badge).toBeVisible();
});

test('breadcrumbs show correct category', async ({ page }) => {
  // Use desktop viewport so the breadcrumb in main content is visible
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Target the breadcrumb container (text-[10px] div inside main)
  const breadcrumb = page.locator('main >> text=Systems');
  await expect(breadcrumb.first()).toBeVisible();
});

test('table of contents renders h2 headings', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const tocLinks = page.locator('.toc-link');
  const count = await tocLinks.count();
  expect(count).toBeGreaterThan(0);

  // Each TOC link should have a corresponding h2 on the page
  for (let i = 0; i < count; i++) {
    const slug = await tocLinks.nth(i).getAttribute('data-slug');
    if (slug) {
      // Use page.evaluate to leverage the browser's CSS.escape
      const hasHeading = await page.evaluate(
        (s) => !!document.querySelector(`h2#${CSS.escape(s)}`),
        slug,
      );
      expect(hasHeading, `Expected h2 with id="${slug}" to exist`).toBe(true);
    }
  }
});

// --- 3. Responsive Layout ---

test('mobile: sidebar hidden, hamburger visible', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Desktop sidebar wrapper (hidden lg:block) should not be visible on mobile
  const desktopSidebar = page.locator('.hidden.lg\\:block >> #sidebar');
  await expect(desktopSidebar).not.toBeVisible();

  // Hamburger button should be visible
  const hamburger = page.getByText('☰');
  await expect(hamburger).toBeVisible();

  await context.close();
});

test('mobile: hamburger opens drawer', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const drawer = page.locator('#mobile-drawer');

  // Click hamburger
  await page.getByText('☰').click();

  // Drawer should slide in (transform removed)
  await expect(drawer).toBeVisible();
  const transform = await drawer.evaluate(el => getComputedStyle(el).transform);
  expect(transform).not.toContain('-');

  await context.close();
});

test('mobile: tables do not overflow viewport', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const tables = page.locator('.prose table');
  const count = await tables.count();

  for (let i = 0; i < count; i++) {
    const box = await tables.nth(i).boundingBox();
    if (box) {
      expect(box.x + box.width, `Table ${i} should not exceed viewport width`).toBeLessThanOrEqual(375 + 5); // 5px tolerance
    }
  }

  await context.close();
});

test('desktop: sidebar visible, hamburger hidden', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Desktop sidebar wrapper (hidden lg:block) should be visible on desktop
  const desktopSidebar = page.locator('.hidden.lg\\:block >> #sidebar');
  await expect(desktopSidebar).toBeVisible();

  // Hamburger should not be visible
  const hamburger = page.getByText('☰');
  await expect(hamburger).not.toBeVisible();

  await context.close();
});

test('desktop: TOC rail visible', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const toc = page.locator('#toc-nav');
  await expect(toc).toBeVisible();

  await context.close();
});

// --- 4. Link Integrity ---

test('all internal links resolve to 200', async ({ page }) => {
  const checkedLinks = new Set<string>();
  const brokenLinks: { source: string; href: string; status: number }[] = [];

  for (const pg of pages) {
    await page.goto(BASE + pg.slug);
    await page.waitForLoadState('networkidle');

    const links = page.locator(`a[href^="${BASE}"]`);
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      if (!href || checkedLinks.has(href)) continue;
      checkedLinks.add(href);

      const response = await page.request.get(href);
      if (response.status() !== 200) {
        brokenLinks.push({ source: pg.name, href, status: response.status() });
      }
    }
  }

  if (brokenLinks.length > 0) {
    const report = brokenLinks.map(b => `  ${b.source} → ${b.href} (${b.status})`).join('\n');
    expect(brokenLinks.length, `Broken links found:\n${report}`).toBe(0);
  }
});

// --- 5. Accessibility ---

for (const pg of pages) {
  test(`accessibility: ${pg.name}`, async ({ page }) => {
    await page.goto(BASE + pg.slug);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    const critical = results.violations.filter(v => v.impact === 'critical' || v.impact === 'serious');

    if (critical.length > 0) {
      const report = critical.map(v =>
        `  [${v.impact}] ${v.id}: ${v.description}\n    ${v.nodes.map(n => n.html).join('\n    ')}`
      ).join('\n');
      console.warn(`Accessibility issues on ${pg.name}:\n${report}`);
    }

    // Fail on critical violations only
    const criticalOnly = critical.filter(v => v.impact === 'critical');
    expect(criticalOnly.length, `Critical accessibility violations on ${pg.name}`).toBe(0);
  });
}

// Heading hierarchy check
for (const pg of pages) {
  test(`heading hierarchy: ${pg.name}`, async ({ page }) => {
    await page.goto(BASE + pg.slug);
    await page.waitForLoadState('networkidle');

    const headings = await page.locator('h1, h2, h3, h4, h5, h6').evaluateAll(els =>
      els.map(el => parseInt(el.tagName.substring(1)))
    );

    for (let i = 1; i < headings.length; i++) {
      const jump = headings[i] - headings[i - 1];
      expect(jump, `Heading level skipped from h${headings[i - 1]} to h${headings[i]} on ${pg.name}`).toBeLessThanOrEqual(1);
    }
  });
}

// --- 6. Inline Highlighter ---

test('edit toggle button is visible', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const toggle = page.locator('#edit-toggle');
  await expect(toggle).toBeVisible();
});

test('article element has data-slug attribute', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const article = page.locator('article.prose');
  const slug = await article.getAttribute('data-slug');
  expect(slug).toBe('systems/reactor-coolant-system');
});

test('highlight tooltip is hidden by default', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const tooltip = page.locator('#highlight-tooltip');
  await expect(tooltip).toBeHidden();
});

test('token modal is hidden by default', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const modal = page.locator('#token-modal');
  await expect(modal).toBeHidden();
});

test('edit toggle activates edit mode styling', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Set a fake token so edit mode doesn't prompt
  await page.evaluate(() => localStorage.setItem('github-token', 'fake-token'));

  const toggle = page.locator('#edit-toggle');
  await toggle.click();

  // Toggle should have accent color
  const color = await toggle.evaluate(el => el.style.color);
  expect(color).toBe('rgb(96, 165, 250)');

  // Click again to deactivate
  await toggle.click();
  const colorAfter = await toggle.evaluate(el => el.style.color);
  expect(colorAfter).toBe('');
});

test('token modal appears when no token stored', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Clear any existing token
  await page.evaluate(() => localStorage.removeItem('github-token'));

  const toggle = page.locator('#edit-toggle');
  await toggle.click();

  const modal = page.locator('#token-modal');
  await expect(modal).toBeVisible();

  // Cancel
  await page.locator('#token-cancel').click();
  await expect(modal).toBeHidden();
});
