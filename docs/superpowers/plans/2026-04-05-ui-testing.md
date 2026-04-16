# UI Testing with Playwright — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Playwright-based visual and functional regression test suite that screenshots all pages, verifies interactive features, checks links, and runs accessibility checks.

**Architecture:** A single Playwright test file runs against Astro's preview server. It dynamically discovers all built pages from `dist/`, captures screenshots at two viewports, then runs functional, responsive, link integrity, and accessibility checks. Results print to terminal, screenshots save to `test-screenshots/`.

**Tech Stack:** Playwright, @axe-core/playwright, Astro preview server

---

## File Structure

```
site/
  playwright.config.ts          ← Playwright config (base URL, screenshot dir, viewports)
  tests/
    ui-test.ts                  ← All test cases in one file
  test-screenshots/             ← Output directory (gitignored)
  package.json                  ← Updated: devDependencies + test:ui script
```

---

### Task 1: Install Dependencies and Configure Playwright

**Files:**
- Modify: `site/package.json`
- Create: `site/playwright.config.ts`
- Modify: `.gitignore`

- [ ] **Step 1: Install Playwright and axe-core as dev dependencies**

```bash
cd /Users/fredm/projects/salem-study-system/site
npm install -D @playwright/test @axe-core/playwright
```

- [ ] **Step 2: Install Playwright browsers**

```bash
cd /Users/fredm/projects/salem-study-system/site
npx playwright install chromium
```

- [ ] **Step 3: Add test:ui script to package.json**

Read `site/package.json`, then add to the `"scripts"` section:

```json
"test:ui": "npm run build && npx playwright test"
```

- [ ] **Step 4: Create Playwright config**

Create `site/playwright.config.ts`:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: 'ui-test.ts',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4321/salem-study-system/',
  },
  webServer: {
    command: 'npx astro preview --port 4321',
    port: 4321,
    reuseExistingServer: false,
    timeout: 10000,
  },
});
```

- [ ] **Step 5: Add test-screenshots to .gitignore**

Append to `/Users/fredm/projects/salem-study-system/.gitignore`:

```
site/test-screenshots/
site/test-results/
```

- [ ] **Step 6: Create test-screenshots directory**

```bash
mkdir -p /Users/fredm/projects/salem-study-system/site/test-screenshots
```

- [ ] **Step 7: Commit**

```bash
cd /Users/fredm/projects/salem-study-system
git add site/package.json site/package-lock.json site/playwright.config.ts .gitignore
git commit -m "feat: add Playwright config and test:ui script"
```

---

### Task 2: Screenshot Capture Tests

**Files:**
- Create: `site/tests/ui-test.ts`

- [ ] **Step 1: Create the test file with screenshot tests**

Create `site/tests/ui-test.ts`:

```ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import * as fs from 'node:fs';
import * as path from 'node:path';

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
```

- [ ] **Step 2: Build the site and run the screenshot tests to verify they work**

```bash
cd /Users/fredm/projects/salem-study-system/site
npm run build
npx playwright test --grep "screenshot"
```

Expected: All screenshot tests pass, PNG files appear in `test-screenshots/`.

- [ ] **Step 3: Commit**

```bash
cd /Users/fredm/projects/salem-study-system
git add site/tests/ui-test.ts
git commit -m "feat: add Playwright screenshot capture for all pages"
```

---

### Task 3: Functional Checks

**Files:**
- Modify: `site/tests/ui-test.ts`

- [ ] **Step 1: Add functional test cases**

Append to `site/tests/ui-test.ts`:

```ts
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

  for (let i = 0; i < count; i++) {
    const href = await sidebarLinks.nth(i).getAttribute('href');
    if (href && href.startsWith(BASE)) {
      const response = await page.request.get(href);
      expect(response.status(), `Sidebar link ${href} should resolve`).toBe(200);
    }
  }
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
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const breadcrumb = page.locator('text=Systems');
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
      const heading = page.locator(`h2#${CSS.escape(slug)}`);
      await expect(heading).toBeAttached();
    }
  }
});
```

- [ ] **Step 2: Run functional tests**

```bash
cd /Users/fredm/projects/salem-study-system/site
npx playwright test --grep -v "screenshot"
```

Expected: All functional tests pass.

- [ ] **Step 3: Commit**

```bash
cd /Users/fredm/projects/salem-study-system
git add site/tests/ui-test.ts
git commit -m "feat: add functional checks — search, sidebar, wikilinks, graph, badges, TOC"
```

---

### Task 4: Responsive Layout Checks

**Files:**
- Modify: `site/tests/ui-test.ts`

- [ ] **Step 1: Add responsive layout tests**

Append to `site/tests/ui-test.ts`:

```ts
// --- 3. Responsive Layout ---

test('mobile: sidebar hidden, hamburger visible', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Sidebar should not be visible on mobile
  const sidebar = page.locator('#sidebar');
  await expect(sidebar).not.toBeVisible();

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

  const sidebar = page.locator('#sidebar');
  await expect(sidebar).toBeVisible();

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
```

- [ ] **Step 2: Run responsive tests**

```bash
cd /Users/fredm/projects/salem-study-system/site
npx playwright test --grep "mobile|desktop"
```

Expected: All responsive layout tests pass.

- [ ] **Step 3: Commit**

```bash
cd /Users/fredm/projects/salem-study-system
git add site/tests/ui-test.ts
git commit -m "feat: add responsive layout checks — mobile/desktop sidebar, hamburger, tables"
```

---

### Task 5: Link Integrity and Accessibility

**Files:**
- Modify: `site/tests/ui-test.ts`

- [ ] **Step 1: Add link integrity and accessibility tests**

Append to `site/tests/ui-test.ts`:

```ts
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
```

- [ ] **Step 2: Run full test suite**

```bash
cd /Users/fredm/projects/salem-study-system/site
npm run test:ui
```

Expected: Build succeeds, all tests pass (screenshots + functional + responsive + links + accessibility).

- [ ] **Step 3: Commit**

```bash
cd /Users/fredm/projects/salem-study-system
git add site/tests/ui-test.ts
git commit -m "feat: add link integrity and accessibility checks"
```

---

### Task 6: Save Memory and Final Verification

- [ ] **Step 1: Run the full suite one more time end-to-end**

```bash
cd /Users/fredm/projects/salem-study-system/site
npm run test:ui
```

Expected: All tests pass cleanly.

- [ ] **Step 2: Read screenshots to visually verify the site**

Read several screenshots from `test-screenshots/` to confirm:
- Dark theme renders correctly
- Color-coded values (red trips, amber alarms, green normal) appear
- Sidebar, breadcrumbs, TOC all render
- Mobile layout collapses properly
- Graph page shows nodes

- [ ] **Step 3: Push**

```bash
cd /Users/fredm/projects/salem-study-system
git push
```
