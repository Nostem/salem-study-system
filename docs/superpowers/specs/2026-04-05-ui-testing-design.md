# UI Testing with Playwright — Design Spec

## Overview

A Playwright-based visual and functional regression test suite for the Salem study wiki site. Run manually after UI/theme changes via `npm run test:ui`. Captures screenshots of all pages at desktop and mobile widths, verifies interactive features work, checks link integrity, and runs basic accessibility checks.

The test script must be updated when new features or functionality are added to the site.

## Tech Stack

- **Playwright** (dev dependency in `site/`)
- **@axe-core/playwright** for accessibility checks
- **Astro preview server** as the test target

## Files

```
site/
  tests/
    ui-test.ts              ← Main test script
  playwright.config.ts      ← Playwright configuration
  test-screenshots/         ← Screenshot output (gitignored)
  package.json              ← Add test:ui script, playwright + axe-core devDependencies
```

## Test Flow

1. Build the site (`npm run build`)
2. Start Astro preview server on a random available port
3. Run Playwright tests against the preview server
4. Save screenshots to `test-screenshots/`
5. Print results to terminal
6. Stop the preview server

## Test Checklist

### 1. Screenshots (all pages, two viewports)

For every page the site generates:
- Capture full-page screenshot at **1440x900** (desktop)
- Capture full-page screenshot at **375x812** (mobile)
- Save as `test-screenshots/{slug}-desktop.png` and `test-screenshots/{slug}-mobile.png`
- Homepage saved as `index-desktop.png` / `index-mobile.png`
- Graph page saved as `graph-desktop.png` / `graph-mobile.png`

### 2. Functional Checks

**Search:**
- Press Cmd+K → search modal becomes visible
- Type a query → results appear in the results container
- Press Escape → modal closes

**Sidebar Navigation:**
- Desktop: sidebar element is visible
- Each sidebar link has a valid `href` that returns 200
- Active article link has the active highlight class

**Wikilinks:**
- All rendered wikilinks (`a.wikilink`) have `href` attributes that resolve to existing pages (200 response)
- Broken wikilinks (`.wikilink-broken`) render with the expected styling

**Graph View:**
- Graph page loads
- SVG element is present in `#graph`
- At least one circle element (node) exists
- At least one text element (label) exists

**Draft/Verified Badges:**
- Articles with `status: draft` show the draft badge
- Articles with `status: verified` show the verified badge (when we have verified articles)

**Breadcrumbs:**
- Article pages show breadcrumb text matching the article's category

**Table of Contents:**
- Desktop: TOC aside is visible on articles with h2 headings
- TOC links correspond to h2 headings in the article

### 3. Responsive Layout

**Mobile (375px):**
- Sidebar (`#sidebar`) is not visible
- Hamburger button is visible
- Click hamburger → mobile drawer slides in
- Tables don't have horizontal overflow beyond viewport

**Desktop (1440px):**
- Sidebar is visible
- Hamburger button is not visible
- TOC rail is visible on articles with headings

### 4. Link Integrity

- Crawl all internal links (`a[href]` starting with base path) across all pages
- Verify each returns HTTP 200 from the preview server
- Report any 404s with the source page and broken href

### 5. Accessibility

- Run axe-core on each page
- Report violations at "critical" and "serious" severity levels
- Check heading hierarchy: no skipped heading levels (h1 → h3 without h2)

## Output

**Terminal output:** Summary of pass/fail for each check category, list of any failures with details.

**Screenshots:** Saved to `test-screenshots/` for visual review. Directory cleared before each run.

## Usage

```bash
cd site
npm run test:ui
```

I run this manually after UI changes (theme updates, new components, layout changes). Not needed for content-only changes (adding wiki articles).

## Maintenance

When new features are added to the site (e.g., flashcard mode, quiz system), corresponding test checks must be added to `tests/ui-test.ts`.
