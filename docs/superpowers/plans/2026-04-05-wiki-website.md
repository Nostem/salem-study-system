# Salem Study Wiki Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static website that renders the `wiki/` markdown articles into a browsable, searchable, interlinked site with a dark technical aesthetic, deployed to GitHub Pages.

**Architecture:** Astro static site generator reads `wiki/` as a content collection and builds static HTML. A remark plugin resolves `[[wikilinks]]` to internal links. Pagefind provides client-side search. D3.js renders a force-directed graph of article connections. GitHub Actions deploys on push to main.

**Tech Stack:** Astro 5, Tailwind CSS 4, Pagefind, D3.js v7, TypeScript

---

## File Structure

```
site/
  astro.config.mjs              ← Astro config, content source, remark plugins
  tailwind.config.mjs            ← Tailwind dark theme config
  package.json
  tsconfig.json
  src/
    content.config.ts            ← Content collection schema (wiki articles)
    plugins/
      remark-wikilinks.ts        ← Remark plugin: [[wikilinks]] → <a> tags
    utils/
      graph-data.ts              ← Build-time: scan wiki for links, produce JSON
      wikilink-map.ts            ← Build-time: map display names + aliases → slugs
      aliases.ts                 ← Entity alias definitions from CLAUDE.md
    layouts/
      BaseLayout.astro           ← HTML shell, head, global styles
      ArticleLayout.astro        ← 3-panel article page
    pages/
      index.astro                ← Homepage (renders _index.md)
      graph.astro                ← Full-page graph view
      [...slug].astro            ← Dynamic route for all wiki articles
    components/
      Sidebar.astro              ← Left nav tree
      TableOfContents.astro      ← Right rail TOC with scrollspy (inline script)
      SearchModal.astro          ← Cmd+K search overlay (Pagefind, inline script)
      DraftBadge.astro           ← ⚠️ DRAFT / ✅ verified badge
      Breadcrumbs.astro          ← Category > Article breadcrumb
      MobileNav.astro            ← Hamburger menu + slide-out drawer
    styles/
      global.css                 ← Dark theme, typography, geometry accents
    scripts/
      graph.ts                   ← Client-side D3 graph logic
.github/
  workflows/
    deploy.yml                   ← Build + deploy to GitHub Pages
```

---

### Task 1: Scaffold Astro Project

**Files:**
- Create: `site/package.json`
- Create: `site/astro.config.mjs`
- Create: `site/tsconfig.json`
- Create: `site/tailwind.config.mjs`
- Create: `site/src/content.config.ts`

- [ ] **Step 1: Initialize Astro project**

```bash
cd /Users/fredm/projects/salem-study-system
npm create astro@latest site -- --template minimal --no-install --no-git --typescript strict
```

- [ ] **Step 2: Install dependencies**

```bash
cd site
npm install
npm install @astrojs/tailwind tailwindcss @astrojs/sitemap d3 pagefind
npm install -D @types/d3
```

- [ ] **Step 3: Configure Astro to read wiki/ as content source**

Update `site/astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nostem.github.io',
  base: '/salem-study-system',
  integrations: [tailwind(), sitemap()],
  content: {
    sources: [
      {
        name: 'wiki',
        base: '../wiki',
      }
    ]
  }
});
```

- [ ] **Step 4: Define content collection schema**

Create `site/src/content.config.ts`:

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../wiki' }),
  schema: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    status: z.enum(['draft', 'verified']).optional().default('draft'),
    aliases: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { wiki };
```

- [ ] **Step 5: Create a minimal test article to verify the build**

Create `wiki/systems/reactor-coolant-system.md`:

```markdown
---
title: Reactor Coolant System
category: systems
status: draft
aliases:
  - RCS
---

# Reactor Coolant System

## Function
The Reactor Coolant System (RCS) transfers heat from the reactor core to the steam generators.

## Connections
- Related systems: [[Chemical and Volume Control System]], [[Residual Heat Removal]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
```

- [ ] **Step 6: Verify Astro build succeeds**

```bash
cd site
npx astro build
```

Expected: Build completes without errors, outputs to `site/dist/`.

- [ ] **Step 7: Commit**

```bash
git add site/ wiki/systems/reactor-coolant-system.md
git commit -m "feat: scaffold Astro project with wiki content collection"
```

---

### Task 2: Dark Theme and Global Styles

**Files:**
- Create: `site/src/styles/global.css`
- Create: `site/src/layouts/BaseLayout.astro`
- Modify: `site/tailwind.config.mjs`

- [ ] **Step 1: Configure Tailwind dark theme**

Update `site/tailwind.config.mjs`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0e17',
          surface: '#0d1220',
          card: '#111827',
        },
        border: {
          DEFAULT: '#1a2035',
        },
        text: {
          primary: '#e0e4ea',
          body: '#9ca3af',
          muted: '#6b7280',
        },
        accent: {
          blue: '#60a5fa',
          teal: '#2a6f97',
          green: '#10b981',
        },
        status: {
          draft: '#eab308',
          verified: '#22c55e',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      lineHeight: {
        reading: '1.7',
      },
      maxWidth: {
        article: '800px',
      },
      width: {
        sidebar: '240px',
        toc: '200px',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Create global styles**

Create `site/src/styles/global.css`:

```css
@import 'tailwindcss';

@theme {
  --color-bg: #0a0e17;
  --color-bg-surface: #0d1220;
  --color-bg-card: #111827;
  --color-border: #1a2035;
  --color-text-primary: #e0e4ea;
  --color-text-body: #9ca3af;
  --color-text-muted: #6b7280;
  --color-accent-blue: #60a5fa;
  --color-accent-teal: #2a6f97;
  --color-accent-green: #10b981;
  --color-status-draft: #eab308;
  --color-status-verified: #22c55e;
}

html {
  background-color: var(--color-bg);
  color: var(--color-text-body);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.7;
}

/* Article prose */
.prose h1 { color: var(--color-text-primary); font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; }
.prose h2 { color: var(--color-accent-blue); font-size: 0.9375rem; font-weight: 600; letter-spacing: 0.03em; margin-top: 1.5rem; margin-bottom: 0.625rem; }
.prose h3 { color: var(--color-text-primary); font-size: 0.875rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; }
.prose p { color: var(--color-text-body); font-size: 0.8125rem; line-height: 1.7; margin-bottom: 0.75rem; }
.prose a { color: var(--color-accent-blue); text-decoration: none; }
.prose a:hover { text-decoration: underline; }
.prose a.wikilink-broken { color: #ef4444; opacity: 0.6; }

/* Tables */
.prose table { width: 100%; font-size: 0.75rem; border-collapse: collapse; }
.prose th { text-align: left; padding: 0.5rem 0.75rem; color: var(--color-text-muted); font-weight: 500; border-bottom: 1px solid var(--color-border); }
.prose td { padding: 0.5rem 0.75rem; color: var(--color-text-body); border-bottom: 1px solid var(--color-bg-card); }
.prose td code, .prose .value { color: var(--color-accent-green); font-family: ui-monospace, SFMono-Regular, monospace; }

/* Code blocks */
.prose pre { background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: 0.375rem; padding: 0.75rem 1rem; overflow-x: auto; font-size: 0.75rem; margin-bottom: 0.75rem; }
.prose code { font-family: ui-monospace, SFMono-Regular, monospace; font-size: 0.75rem; }
.prose :not(pre) > code { background: var(--color-bg-card); padding: 0.125rem 0.375rem; border-radius: 0.25rem; }

/* Wikilink chips (in Connections section) */
.wikilink-chip {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 0.25rem;
  color: var(--color-accent-blue);
  text-decoration: none;
  margin: 0.125rem;
}
.wikilink-chip:hover { border-color: var(--color-accent-blue); }

/* LCO cards */
.lco-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 0.375rem;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
}

/* Sacred geometry accent — subtle SVG pattern on sidebar */
.geo-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='20' fill='none' stroke='%232a6f97' stroke-width='0.3' opacity='0.08'/%3E%3Ccircle cx='30' cy='30' r='12.36' fill='none' stroke='%232a6f97' stroke-width='0.3' opacity='0.06'/%3E%3Crect x='15.86' y='15.86' width='28.28' height='28.28' fill='none' stroke='%232a6f97' stroke-width='0.3' opacity='0.05' transform='rotate(45 30 30)'/%3E%3C/svg%3E");
  background-repeat: repeat;
}

/* Scrollbar styling */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg); }
::-webkit-scrollbar-thumb { background: var(--color-border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-text-muted); }
```

- [ ] **Step 3: Create base layout**

Create `site/src/layouts/BaseLayout.astro`:

```astro
---
interface Props {
  title: string;
}

const { title } = Astro.props;
import '../styles/global.css';
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} — Salem Study System</title>
    <link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />
  </head>
  <body class="bg-bg min-h-screen">
    <slot />
  </body>
</html>
```

- [ ] **Step 4: Verify build with styles**

```bash
cd site
npx astro build
```

Expected: Build succeeds, `dist/` contains CSS with dark theme variables.

- [ ] **Step 5: Commit**

```bash
git add site/src/styles/ site/src/layouts/BaseLayout.astro site/tailwind.config.mjs
git commit -m "feat: add dark theme with sacred geometry accents and base layout"
```

---

### Task 3: Wikilink Resolver

**Files:**
- Create: `site/src/utils/aliases.ts`
- Create: `site/src/utils/wikilink-map.ts`
- Create: `site/src/plugins/remark-wikilinks.ts`
- Modify: `site/astro.config.mjs`

- [ ] **Step 1: Define entity aliases**

Create `site/src/utils/aliases.ts`:

```ts
// Entity aliases from CLAUDE.md — maps alternate names to canonical article titles
// Update this when new aliases are discovered during ingestion

export const ENTITY_ALIASES: Record<string, string> = {
  'CVCS': 'Chemical and Volume Control System',
  'Boration Systems': 'Chemical and Volume Control System',
  'charging and letdown': 'Chemical and Volume Control System',
  'RCS': 'Reactor Coolant System',
  'ECCS': 'Emergency Core Cooling Systems',
  'safety injection': 'Emergency Core Cooling Systems',
  'CFCUs': 'Containment Fan Coil Units',
  'containment cooling': 'Containment Fan Coil Units',
  'RHR': 'Residual Heat Removal',
  'shutdown cooling': 'Residual Heat Removal',
  'CCW': 'Component Cooling Water',
  'SW': 'Service Water',
  'AFW': 'Auxiliary Feedwater',
  'PORVs': 'Power Operated Relief Valves',
};
```

- [ ] **Step 2: Create wikilink map builder**

Create `site/src/utils/wikilink-map.ts`:

This uses Node `fs` and `path` to scan wiki files synchronously at config load time, so the remark plugin can be wired into `astro.config.mjs` without needing async `getCollection`.

```ts
import fs from 'node:fs';
import path from 'node:path';
import { ENTITY_ALIASES } from './aliases';

const WIKI_DIR = path.resolve(import.meta.dirname, '../../../wiki');
const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---/;

// Build a map of display name (lowercase) → { slug, href }
// Scans wiki/ directory with fs so it can be called synchronously at config time
export function buildWikilinkMap(basePath: string): Map<string, { slug: string; href: string }> {
  const map = new Map<string, { slug: string; href: string }>();

  function scanDir(dir: string, prefix: string) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.name.endsWith('.md') && entry.name !== '_index.md') {
        const slug = `${prefix}${entry.name.replace(/\.md$/, '')}`;
        const href = `${basePath}${slug}`;
        const content = fs.readFileSync(path.join(dir, entry.name), 'utf-8');

        // Extract frontmatter
        let title = entry.name.replace(/\.md$/, '').replace(/-/g, ' ');
        let aliases: string[] = [];

        const fmMatch = content.match(FRONTMATTER_RE);
        if (fmMatch) {
          const fm = fmMatch[1];
          const titleMatch = fm.match(/^title:\s*(.+)$/m);
          if (titleMatch) title = titleMatch[1].trim().replace(/^['"]|['"]$/g, '');

          const aliasMatch = fm.match(/^aliases:\s*\n((?:\s+-\s+.+\n?)*)/m);
          if (aliasMatch) {
            aliases = aliasMatch[1]
              .split('\n')
              .map(l => l.replace(/^\s+-\s+/, '').trim().replace(/^['"]|['"]$/g, ''))
              .filter(Boolean);
          }
        }

        // Map by title
        map.set(title.toLowerCase(), { slug, href });

        // Map by slug filename
        const filename = slug.split('/').pop() ?? '';
        map.set(filename.toLowerCase().replace(/-/g, ' '), { slug, href });

        // Map by frontmatter aliases
        for (const alias of aliases) {
          map.set(alias.toLowerCase(), { slug, href });
        }
      }
    }
  }

  scanDir(WIKI_DIR, '');

  // Map by global entity aliases
  for (const [alias, canonical] of Object.entries(ENTITY_ALIASES)) {
    const target = map.get(canonical.toLowerCase());
    if (target) {
      map.set(alias.toLowerCase(), target);
    }
  }

  return map;
}
```

- [ ] **Step 3: Create remark wikilinks plugin**

Create `site/src/plugins/remark-wikilinks.ts`:

```ts
import type { Root, Text } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

// Wikilink regex: [[Display Name]]
const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

interface WikilinkOptions {
  wikilinkMap: Map<string, { slug: string; href: string }>;
  basePath: string;
}

const remarkWikilinks: Plugin<[WikilinkOptions], Root> = (options) => {
  const { wikilinkMap, basePath } = options;

  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === undefined) return;

      const value = node.value;
      const matches = [...value.matchAll(WIKILINK_RE)];
      if (matches.length === 0) return;

      const children: any[] = [];
      let lastIndex = 0;

      for (const match of matches) {
        const [full, displayName] = match;
        const start = match.index!;

        // Text before the match
        if (start > lastIndex) {
          children.push({ type: 'text', value: value.slice(lastIndex, start) });
        }

        const target = wikilinkMap.get(displayName.toLowerCase());

        if (target) {
          children.push({
            type: 'link',
            url: `${basePath}${target.href}`,
            children: [{ type: 'text', value: displayName }],
            data: {
              hProperties: { class: 'wikilink' },
            },
          });
        } else {
          // Unresolved link — render with broken style
          children.push({
            type: 'html',
            value: `<span class="wikilink-broken" title="Article not found: ${displayName}">${displayName}</span>`,
          });
        }

        lastIndex = start + full.length;
      }

      // Text after last match
      if (lastIndex < value.length) {
        children.push({ type: 'text', value: value.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...children);
    });
  };
};

export default remarkWikilinks;
```

- [ ] **Step 4: Install remark dependencies**

```bash
cd site
npm install unist-util-visit
```

- [ ] **Step 5: Wire remark plugin into Astro config**

Update `site/astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { buildWikilinkMap } from './src/utils/wikilink-map';
import remarkWikilinks from './src/plugins/remark-wikilinks';

const basePath = '/salem-study-system';
const wikilinkMap = buildWikilinkMap(basePath);

export default defineConfig({
  site: 'https://nostem.github.io',
  base: basePath,
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [
      [remarkWikilinks, { wikilinkMap, basePath }],
    ],
  },
});
```

The wikilink map is built synchronously at config load time using `fs` (not `getCollection`), so it's available for the remark plugin during markdown processing.

- [ ] **Step 6: Verify build still succeeds**

```bash
cd site
npx astro build
```

Expected: Build completes. Wikilinks not yet rendered (that happens when pages are built in Task 5).

- [ ] **Step 7: Commit**

```bash
git add site/src/utils/ site/src/plugins/
git commit -m "feat: add wikilink resolver with entity aliases"
```

---

### Task 4: Sidebar and Navigation Components

**Files:**
- Create: `site/src/components/Sidebar.astro`
- Create: `site/src/components/Breadcrumbs.astro`
- Create: `site/src/components/DraftBadge.astro`
- Create: `site/src/components/MobileNav.astro`

- [ ] **Step 1: Create Sidebar component**

Create `site/src/components/Sidebar.astro`:

```astro
---
import { getCollection } from 'astro:content';

interface Props {
  currentSlug?: string;
}

const { currentSlug } = Astro.props;

const articles = await getCollection('wiki');

// Group articles by category (directory)
const categories: Record<string, { title: string; slug: string; status: string }[]> = {};
const categoryOrder = ['systems', 'tech-specs', 'exams', 'eops', 'concepts', 'abnormals'];
const categoryLabels: Record<string, string> = {
  systems: 'Systems',
  'tech-specs': 'Tech Specs',
  exams: 'Exams',
  eops: 'EOPs',
  concepts: 'Concepts',
  abnormals: 'Abnormals',
};

for (const article of articles) {
  const slug = article.id;
  // Skip _index.md
  if (slug === '_index') continue;

  const category = slug.split('/')[0] ?? 'uncategorized';
  const title = article.data.title ?? slug.split('/').pop()?.replace(/-/g, ' ') ?? slug;
  const status = article.data.status ?? 'draft';

  if (!categories[category]) categories[category] = [];
  categories[category].push({ title, slug, status });
}

// Sort articles alphabetically within each category
for (const cat of Object.keys(categories)) {
  categories[cat].sort((a, b) => a.title.localeCompare(b.title));
}

const base = import.meta.env.BASE_URL;
---

<aside id="sidebar" class="w-[240px] min-w-[240px] border-r border-[#1a2035] bg-[#0b1020] geo-pattern font-['system-ui'] text-xs overflow-y-auto h-[calc(100vh-48px)] sticky top-[48px]">
  <nav class="py-4">
    {categoryOrder.map((cat) => {
      const items = categories[cat];
      if (!items || items.length === 0) return null;
      return (
        <div class="mb-2">
          <div class="px-4 py-1 text-[#2a6f97] font-semibold tracking-[1.5px] text-[10px] uppercase">
            {categoryLabels[cat] ?? cat}
          </div>
          {items.map((item) => {
            const isActive = currentSlug === item.slug;
            return (
              <a
                href={`${base}${item.slug}`}
                class:list={[
                  'block px-4 pl-6 py-[5px] no-underline transition-colors',
                  isActive
                    ? 'bg-[#111d35] text-[#60a5fa] border-l-2 border-[#2a6f97]'
                    : 'text-[#8b95a5] hover:text-[#c8cdd5] hover:bg-[#0d1525]',
                ]}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      );
    })}
    <div class="mt-4 px-4 pt-2 border-t border-[#1a2035]">
      <a href={`${base}graph`} class="flex items-center gap-1.5 px-3 py-1.5 text-[#6b7280] hover:text-[#c8cdd5] no-underline text-[11px]">
        <span class="text-sm">◉</span> Graph View
      </a>
    </div>
  </nav>
</aside>
```

- [ ] **Step 2: Create Breadcrumbs component**

Create `site/src/components/Breadcrumbs.astro`:

```astro
---
interface Props {
  category: string;
  title: string;
}

const { category, title } = Astro.props;

const categoryLabels: Record<string, string> = {
  systems: 'Systems',
  'tech-specs': 'Tech Specs',
  exams: 'Exams',
  eops: 'EOPs',
  concepts: 'Concepts',
  abnormals: 'Abnormals',
};

const label = categoryLabels[category] ?? category;
---

<div class="text-[10px] text-[#6b7280] tracking-[1px] uppercase mb-2">
  {label} <span class="mx-1">&gt;</span> {title}
</div>
```

- [ ] **Step 3: Create DraftBadge component**

Create `site/src/components/DraftBadge.astro`:

```astro
---
interface Props {
  status: 'draft' | 'verified';
}

const { status } = Astro.props;
---

{status === 'verified' ? (
  <span class="text-[10px] px-2 py-0.5 bg-[#052e16] text-[#22c55e] rounded-[3px] font-medium">
    ✅ Verified
  </span>
) : (
  <span class="text-[10px] px-2 py-0.5 bg-[#1c1507] text-[#eab308] rounded-[3px] font-medium">
    ⚠️ DRAFT
  </span>
)}
```

- [ ] **Step 4: Create MobileNav component**

Create `site/src/components/MobileNav.astro`:

```astro
---
// Mobile nav is a slide-out drawer triggered by hamburger button
// The sidebar content is reused via a slot
---

<div id="mobile-overlay" class="fixed inset-0 bg-black/50 z-40 hidden" onclick="closeMobileNav()"></div>

<div id="mobile-drawer" class="fixed top-0 left-0 h-full w-[280px] bg-[#0b1020] border-r border-[#1a2035] z-50 transform -translate-x-full transition-transform duration-200">
  <div class="flex items-center justify-between px-4 h-12 border-b border-[#1a2035]">
    <span class="text-sm font-semibold text-[#e0e4ea] tracking-[1px]">SALEM</span>
    <button onclick="closeMobileNav()" class="text-[#6b7280] text-lg bg-transparent border-none cursor-pointer">&times;</button>
  </div>
  <div class="overflow-y-auto h-[calc(100%-48px)]">
    <slot />
  </div>
</div>

<script is:inline>
  function openMobileNav() {
    document.getElementById('mobile-drawer').style.transform = 'translateX(0)';
    document.getElementById('mobile-overlay').classList.remove('hidden');
  }
  function closeMobileNav() {
    document.getElementById('mobile-drawer').style.transform = 'translateX(-100%)';
    document.getElementById('mobile-overlay').classList.add('hidden');
  }
  // Expose globally for the hamburger button
  window.openMobileNav = openMobileNav;
  window.closeMobileNav = closeMobileNav;
</script>
```

- [ ] **Step 5: Verify build**

```bash
cd site
npx astro build
```

Expected: Build succeeds (components not yet used in pages, but should have no syntax errors).

- [ ] **Step 6: Commit**

```bash
git add site/src/components/
git commit -m "feat: add sidebar, breadcrumbs, draft badge, and mobile nav components"
```

---

### Task 5: Article Page Layout and Dynamic Routing

**Files:**
- Create: `site/src/layouts/ArticleLayout.astro`
- Create: `site/src/components/TableOfContents.astro`
- Create: `site/src/pages/[...slug].astro`
- Create: `site/src/pages/index.astro`

- [ ] **Step 1: Create TableOfContents component**

Create `site/src/components/TableOfContents.astro`:

```astro
---
interface Props {
  headings: { depth: number; slug: string; text: string }[];
}

const { headings } = Astro.props;

// Only show h2 headings in TOC
const tocItems = headings.filter((h) => h.depth === 2);
---

{tocItems.length > 0 && (
  <aside class="w-[200px] min-w-[200px] border-l border-[#1a2035] px-4 py-6 text-[11px] text-[#6b7280] h-[calc(100vh-48px)] sticky top-[48px] overflow-y-auto hidden xl:block">
    <div class="font-semibold text-[#4b5563] tracking-[1px] uppercase text-[9px] mb-2.5">
      On This Page
    </div>
    <nav id="toc-nav">
      {tocItems.map((item) => (
        <a
          href={`#${item.slug}`}
          class="block py-[3px] no-underline text-[#6b7280] hover:text-[#60a5fa] transition-colors toc-link"
          data-slug={item.slug}
        >
          {item.text}
        </a>
      ))}
    </nav>
  </aside>
)}

<script is:inline>
  // Scrollspy: highlight current section in TOC
  (function() {
    const links = document.querySelectorAll('.toc-link');
    if (links.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('!text-[#60a5fa]'));
          const active = document.querySelector(`.toc-link[data-slug="${entry.target.id}"]`);
          if (active) active.classList.add('!text-[#60a5fa]');
        }
      }
    }, { rootMargin: '0px 0px -80% 0px', threshold: 0 });

    document.querySelectorAll('h2[id]').forEach(h => observer.observe(h));
  })();
</script>
```

- [ ] **Step 2: Create ArticleLayout**

Create `site/src/layouts/ArticleLayout.astro`:

```astro
---
import BaseLayout from './BaseLayout.astro';
import Sidebar from '../components/Sidebar.astro';
import TableOfContents from '../components/TableOfContents.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import DraftBadge from '../components/DraftBadge.astro';
import MobileNav from '../components/MobileNav.astro';
import Sidebar from '../components/Sidebar.astro';

interface Props {
  title: string;
  category: string;
  status: 'draft' | 'verified';
  slug: string;
  headings: { depth: number; slug: string; text: string }[];
}

const { title, category, status, slug, headings } = Astro.props;
const base = import.meta.env.BASE_URL;
---

<BaseLayout title={title}>
  <!-- Mobile nav drawer -->
  <div class="lg:hidden">
    <MobileNav>
      <Sidebar currentSlug={slug} />
    </MobileNav>
  </div>

  <!-- Top bar -->
  <header class="flex items-center justify-between px-5 h-12 border-b border-[#1a2035] bg-[#0d1220] sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <!-- Hamburger (mobile only) -->
      <button onclick="openMobileNav()" class="lg:hidden text-[#6b7280] text-lg bg-transparent border-none cursor-pointer mr-1">
        ☰
      </button>
      <!-- Logo -->
      <div class="w-7 h-7 border-[1.5px] border-[#2a6f97] rounded-full flex items-center justify-center">
        <div class="w-3 h-3 border border-[#2a6f97] rotate-45"></div>
      </div>
      <span class="text-sm font-semibold text-[#e0e4ea] tracking-[1.5px]">SALEM STUDY SYSTEM</span>
    </div>
    <button
      id="search-trigger"
      class="bg-[#111827] border border-[#1a2035] rounded-md px-3.5 py-1.5 text-xs text-[#6b7280] w-60 text-left cursor-pointer hidden sm:block"
    >
      ⌘K &nbsp;Search articles...
    </button>
    <!-- Mobile search icon -->
    <button id="search-trigger-mobile" class="sm:hidden text-[#6b7280] text-sm bg-transparent border-none cursor-pointer">
      ⌕
    </button>
  </header>

  <div class="flex">
    <!-- Sidebar (desktop) -->
    <div class="hidden lg:block">
      <Sidebar currentSlug={slug} />
    </div>

    <!-- Main content -->
    <main class="flex-1 px-8 py-8 max-w-[800px] xl:px-12">
      <Breadcrumbs category={category} title={title} />
      <div class="flex items-center gap-2.5 mb-1.5">
        <h1 class="text-2xl text-[#e0e4ea] font-semibold m-0">{title}</h1>
        <DraftBadge status={status} />
      </div>
      <article class="prose mt-6">
        <slot />
      </article>
    </main>

    <!-- Table of Contents (desktop) -->
    <TableOfContents headings={headings} />
  </div>
</BaseLayout>
```

- [ ] **Step 3: Fix duplicate Sidebar import**

The ArticleLayout above has a duplicate `import Sidebar`. Remove the second one (line 7). The correct imports are:

```astro
---
import BaseLayout from './BaseLayout.astro';
import Sidebar from '../components/Sidebar.astro';
import TableOfContents from '../components/TableOfContents.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import DraftBadge from '../components/DraftBadge.astro';
import MobileNav from '../components/MobileNav.astro';

interface Props {
  title: string;
  category: string;
  status: 'draft' | 'verified';
  slug: string;
  headings: { depth: number; slug: string; text: string }[];
}

const { title, category, status, slug, headings } = Astro.props;
const base = import.meta.env.BASE_URL;
---
```

- [ ] **Step 4: Create dynamic article route**

Create `site/src/pages/[...slug].astro`:

```astro
---
import { getCollection, render } from 'astro:content';
import ArticleLayout from '../layouts/ArticleLayout.astro';

export async function getStaticPaths() {
  const articles = await getCollection('wiki');
  return articles
    .filter((a) => a.id !== '_index')
    .map((article) => {
      const slug = article.id;
      const category = slug.split('/')[0] ?? 'uncategorized';
      const title = article.data.title ?? slug.split('/').pop()?.replace(/-/g, ' ') ?? slug;
      return {
        params: { slug },
        props: { article, category, title },
      };
    });
}

const { article, category, title } = Astro.props;
const { Content, headings } = await render(article);
const status = article.data.status ?? 'draft';
---

<ArticleLayout
  title={title}
  category={category}
  status={status}
  slug={article.id}
  headings={headings}
>
  <Content />
</ArticleLayout>
```

- [ ] **Step 5: Create homepage**

Create `site/src/pages/index.astro`:

```astro
---
import { getCollection, render } from 'astro:content';
import ArticleLayout from '../layouts/ArticleLayout.astro';

const articles = await getCollection('wiki');
const indexArticle = articles.find((a) => a.id === '_index');

let Content;
let headings: { depth: number; slug: string; text: string }[] = [];

if (indexArticle) {
  const rendered = await render(indexArticle);
  Content = rendered.Content;
  headings = rendered.headings;
}
---

<ArticleLayout
  title="Salem Study Wiki"
  category=""
  status="verified"
  slug="_index"
  headings={headings}
>
  {Content ? <Content /> : <p>Welcome to the Salem Study Wiki. Add articles to get started.</p>}
</ArticleLayout>
```

- [ ] **Step 6: Run dev server and verify article renders**

```bash
cd site
npx astro dev
```

Open `http://localhost:4321/salem-study-system/` — should see the homepage with _index.md content.
Open `http://localhost:4321/salem-study-system/systems/reactor-coolant-system` — should see the RCS article with sidebar, breadcrumbs, and dark theme.

Stop the dev server after verification.

- [ ] **Step 7: Commit**

```bash
git add site/src/layouts/ArticleLayout.astro site/src/components/TableOfContents.astro site/src/pages/
git commit -m "feat: add article layout, dynamic routing, and homepage"
```

---

### Task 6: Search with Pagefind

**Files:**
- Create: `site/src/components/SearchModal.astro`
- Modify: `site/package.json` (add postbuild script)

- [ ] **Step 1: Create SearchModal component**

Create `site/src/components/SearchModal.astro`:

```astro
---
// Pagefind search modal — initialized client-side
---

<div id="search-modal" class="fixed inset-0 z-50 hidden">
  <!-- Backdrop -->
  <div class="absolute inset-0 bg-black/60" onclick="closeSearch()"></div>

  <!-- Modal -->
  <div class="relative mx-auto mt-[15vh] w-full max-w-lg bg-[#0d1220] border border-[#1a2035] rounded-lg shadow-2xl overflow-hidden">
    <div class="p-4">
      <input
        id="search-input"
        type="text"
        placeholder="Search articles..."
        class="w-full bg-[#111827] border border-[#1a2035] rounded-md px-4 py-2.5 text-sm text-[#e0e4ea] placeholder-[#6b7280] outline-none focus:border-[#2a6f97]"
        autocomplete="off"
      />
    </div>
    <div id="search-results" class="max-h-[50vh] overflow-y-auto px-4 pb-4">
      <!-- Results populated by Pagefind -->
    </div>
  </div>
</div>

<script is:inline>
  // Search modal open/close
  function openSearch() {
    document.getElementById('search-modal').classList.remove('hidden');
    document.getElementById('search-input').focus();
  }
  function closeSearch() {
    document.getElementById('search-modal').classList.add('hidden');
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML = '';
  }

  // Keyboard shortcut: Cmd+K / Ctrl+K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      const modal = document.getElementById('search-modal');
      if (modal.classList.contains('hidden')) {
        openSearch();
      } else {
        closeSearch();
      }
    }
    if (e.key === 'Escape') closeSearch();
  });

  // Wire up search triggers
  document.getElementById('search-trigger')?.addEventListener('click', openSearch);
  document.getElementById('search-trigger-mobile')?.addEventListener('click', openSearch);

  // Initialize Pagefind
  async function initPagefind() {
    try {
      const basePath = document.querySelector('meta[name="base-path"]')?.content || '/salem-study-system/';
      const pagefind = await import(basePath + 'pagefind/pagefind.js');
      await pagefind.init();

      const input = document.getElementById('search-input');
      const results = document.getElementById('search-results');

      input.addEventListener('input', async (e) => {
        const query = e.target.value;
        if (!query) {
          results.innerHTML = '';
          return;
        }

        const search = await pagefind.search(query);
        const items = await Promise.all(search.results.slice(0, 10).map(r => r.data()));

        results.innerHTML = items.map(item => `
          <a href="${item.url}" class="block px-3 py-2.5 rounded-md hover:bg-[#111827] no-underline mb-1 transition-colors">
            <div class="text-sm text-[#e0e4ea] font-medium">${item.meta?.title || 'Untitled'}</div>
            <div class="text-xs text-[#6b7280] mt-0.5 line-clamp-2">${item.excerpt || ''}</div>
          </a>
        `).join('');
      });
    } catch (e) {
      // Pagefind not available in dev mode — that's expected
      console.log('Pagefind not loaded (expected in dev mode)');
    }
  }

  initPagefind();
</script>
```

- [ ] **Step 2: Add SearchModal to ArticleLayout**

Add to `site/src/layouts/ArticleLayout.astro`, after the `<BaseLayout>` opening tag:

```astro
<BaseLayout title={title}>
  <meta slot="head" name="base-path" content={base} />
  <!-- Add search modal -->
  <SearchModal />
  ...
```

And add the import at top:

```astro
import SearchModal from '../components/SearchModal.astro';
```

- [ ] **Step 3: Add Pagefind postbuild script to package.json**

Update `site/package.json` scripts:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build && npx pagefind --site dist --glob '**/*.html'",
    "preview": "astro preview"
  }
}
```

- [ ] **Step 4: Verify search build**

```bash
cd site
npm run build
```

Expected: Astro builds, then Pagefind indexes the HTML and creates `dist/pagefind/` directory.

- [ ] **Step 5: Test search works**

```bash
cd site
npx astro preview
```

Open the site, press `Cmd+K`, type "reactor" — should see search results. Stop preview after verification.

- [ ] **Step 6: Commit**

```bash
git add site/src/components/SearchModal.astro site/src/layouts/ArticleLayout.astro site/package.json
git commit -m "feat: add Pagefind search with Cmd+K modal"
```

---

### Task 7: Graph View

**Files:**
- Create: `site/src/utils/graph-data.ts`
- Create: `site/src/pages/graph.astro`
- Create: `site/src/scripts/graph.ts`

- [ ] **Step 1: Create graph data generator**

Create `site/src/utils/graph-data.ts`:

```ts
import { getCollection } from 'astro:content';

interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
}

interface GraphEdge {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

export async function generateGraphData(): Promise<GraphData> {
  const articles = await getCollection('wiki');
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const connectionCount: Record<string, number> = {};

  // Build title → slug lookup
  const titleToSlug = new Map<string, string>();
  for (const article of articles) {
    if (article.id === '_index') continue;
    const title = article.data.title ?? article.id.split('/').pop()?.replace(/-/g, ' ') ?? article.id;
    titleToSlug.set(title.toLowerCase(), article.id);

    for (const alias of article.data.aliases ?? []) {
      titleToSlug.set(alias.toLowerCase(), article.id);
    }
  }

  // Extract edges from wikilinks in article body
  for (const article of articles) {
    if (article.id === '_index') continue;

    const matches = [...article.body.matchAll(WIKILINK_RE)];
    for (const match of matches) {
      const displayName = match[1];
      const targetSlug = titleToSlug.get(displayName.toLowerCase());
      if (targetSlug && targetSlug !== article.id) {
        edges.push({ source: article.id, target: targetSlug });
        connectionCount[article.id] = (connectionCount[article.id] ?? 0) + 1;
        connectionCount[targetSlug] = (connectionCount[targetSlug] ?? 0) + 1;
      }
    }
  }

  // Build nodes
  for (const article of articles) {
    if (article.id === '_index') continue;
    const slug = article.id;
    const category = slug.split('/')[0] ?? 'uncategorized';
    const title = article.data.title ?? slug.split('/').pop()?.replace(/-/g, ' ') ?? slug;

    nodes.push({
      id: slug,
      title,
      category,
      slug,
      connections: connectionCount[slug] ?? 0,
    });
  }

  return { nodes, edges };
}
```

- [ ] **Step 2: Create graph page**

Create `site/src/pages/graph.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { generateGraphData } from '../utils/graph-data';

const graphData = await generateGraphData();
const base = import.meta.env.BASE_URL;
---

<BaseLayout title="Graph View">
  <!-- Top bar -->
  <header class="flex items-center justify-between px-5 h-12 border-b border-[#1a2035] bg-[#0d1220] sticky top-0 z-30">
    <div class="flex items-center gap-3">
      <a href={base} class="flex items-center gap-3 no-underline">
        <div class="w-7 h-7 border-[1.5px] border-[#2a6f97] rounded-full flex items-center justify-center">
          <div class="w-3 h-3 border border-[#2a6f97] rotate-45"></div>
        </div>
        <span class="text-sm font-semibold text-[#e0e4ea] tracking-[1.5px]">SALEM STUDY SYSTEM</span>
      </a>
    </div>
    <a href={base} class="text-xs text-[#6b7280] hover:text-[#c8cdd5] no-underline">← Back to Wiki</a>
  </header>

  <!-- Graph container -->
  <div id="graph" class="w-full" style="height: calc(100vh - 48px);"></div>

  <!-- Legend -->
  <div class="fixed bottom-4 left-4 bg-[#0d1220] border border-[#1a2035] rounded-md px-4 py-3 text-[11px] z-10">
    <div class="font-semibold text-[#4b5563] tracking-[1px] uppercase text-[9px] mb-2">Categories</div>
    <div class="flex flex-col gap-1">
      <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#60a5fa]"></span><span class="text-[#8b95a5]">Systems</span></div>
      <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span><span class="text-[#8b95a5]">Tech Specs</span></div>
      <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span><span class="text-[#8b95a5]">Exams</span></div>
      <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span><span class="text-[#8b95a5]">EOPs</span></div>
      <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#a78bfa]"></span><span class="text-[#8b95a5]">Concepts</span></div>
      <div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#6b7280]"></span><span class="text-[#8b95a5]">Abnormals</span></div>
    </div>
  </div>

  <!-- Pass data and base to client-side script -->
  <script define:vars={{ graphData, base }}>
    window.__GRAPH_DATA__ = graphData;
    window.__BASE_PATH__ = base;
  </script>
  <script src="../scripts/graph.ts"></script>
</BaseLayout>
```

- [ ] **Step 3: Create client-side graph script**

Create `site/src/scripts/graph.ts`:

```ts
import * as d3 from 'd3';

interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface GraphEdge {
  source: string | GraphNode;
  target: string | GraphNode;
}

const CATEGORY_COLORS: Record<string, string> = {
  systems: '#60a5fa',
  'tech-specs': '#10b981',
  exams: '#f59e0b',
  eops: '#ef4444',
  concepts: '#a78bfa',
  abnormals: '#6b7280',
};

const data = (window as any).__GRAPH_DATA__;
const basePath = (window as any).__BASE_PATH__ || '/';

if (data && data.nodes.length > 0) {
  const container = document.getElementById('graph')!;
  const width = container.clientWidth;
  const height = container.clientHeight;

  const svg = d3.select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  // Zoom
  const g = svg.append('g');
  svg.call(
    d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 4])
      .on('zoom', (event) => g.attr('transform', event.transform))
  );

  const simulation = d3.forceSimulation<GraphNode>(data.nodes)
    .force('link', d3.forceLink<GraphNode, GraphEdge>(data.edges).id(d => d.id).distance(80))
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(20));

  // Edges
  const link = g.append('g')
    .selectAll('line')
    .data(data.edges)
    .join('line')
    .attr('stroke', '#1a2035')
    .attr('stroke-width', 1);

  // Nodes
  const node = g.append('g')
    .selectAll('circle')
    .data(data.nodes)
    .join('circle')
    .attr('r', (d: GraphNode) => Math.max(5, Math.min(15, 4 + d.connections * 2)))
    .attr('fill', (d: GraphNode) => CATEGORY_COLORS[d.category] ?? '#6b7280')
    .attr('stroke', '#0a0e17')
    .attr('stroke-width', 1.5)
    .style('cursor', 'pointer')
    .on('click', (_event: any, d: GraphNode) => {
      window.location.href = `${basePath}${d.slug}`;
    })
    .on('mouseover', (_event: any, d: GraphNode) => {
      // Highlight connected nodes
      const connected = new Set<string>();
      data.edges.forEach((e: any) => {
        const src = typeof e.source === 'string' ? e.source : e.source.id;
        const tgt = typeof e.target === 'string' ? e.target : e.target.id;
        if (src === d.id) connected.add(tgt);
        if (tgt === d.id) connected.add(src);
      });
      connected.add(d.id);

      node.attr('opacity', (n: GraphNode) => connected.has(n.id) ? 1 : 0.15);
      link.attr('opacity', (e: any) => {
        const src = typeof e.source === 'string' ? e.source : e.source.id;
        const tgt = typeof e.target === 'string' ? e.target : e.target.id;
        return connected.has(src) && connected.has(tgt) ? 1 : 0.05;
      });
      label.attr('opacity', (n: GraphNode) => connected.has(n.id) ? 1 : 0.1);
    })
    .on('mouseout', () => {
      node.attr('opacity', 1);
      link.attr('opacity', 1);
      label.attr('opacity', 1);
    })
    .call(d3.drag<SVGCircleElement, GraphNode>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })
    );

  // Labels
  const label = g.append('g')
    .selectAll('text')
    .data(data.nodes)
    .join('text')
    .text((d: GraphNode) => d.title)
    .attr('font-size', 10)
    .attr('fill', '#8b95a5')
    .attr('dx', 12)
    .attr('dy', 4)
    .style('pointer-events', 'none');

  // Tooltip
  node.append('title').text((d: GraphNode) => d.title);

  simulation.on('tick', () => {
    link
      .attr('x1', (d: any) => d.source.x)
      .attr('y1', (d: any) => d.source.y)
      .attr('x2', (d: any) => d.target.x)
      .attr('y2', (d: any) => d.target.y);

    node
      .attr('cx', (d: any) => d.x)
      .attr('cy', (d: any) => d.y);

    label
      .attr('x', (d: any) => d.x)
      .attr('y', (d: any) => d.y);
  });
}
```

- [ ] **Step 4: Verify build with graph**

```bash
cd site
npm run build
```

Expected: Build succeeds. `dist/graph/index.html` exists.

- [ ] **Step 5: Test graph view**

```bash
cd site
npx astro preview
```

Open `http://localhost:4321/salem-study-system/graph` — should see a force-directed graph with the test RCS article as a node.

- [ ] **Step 6: Commit**

```bash
git add site/src/utils/graph-data.ts site/src/pages/graph.astro site/src/scripts/graph.ts
git commit -m "feat: add D3.js force-directed graph view of wiki connections"
```

---

### Task 8: GitHub Actions Deployment

**Files:**
- Create: `.github/workflows/deploy.yml`

- [ ] **Step 1: Create deploy workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: site/package-lock.json

      - name: Install dependencies
        working-directory: site
        run: npm ci

      - name: Build Astro
        working-directory: site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: site/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Verify workflow YAML is valid**

```bash
cd /Users/fredm/projects/salem-study-system
cat .github/workflows/deploy.yml | python3 -c "import sys,yaml; yaml.safe_load(sys.stdin); print('Valid YAML')"
```

Expected: "Valid YAML"

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions workflow for Pages deployment"
```

---

### Task 9: Add Frontmatter to Existing Wiki Files

**Files:**
- Modify: `wiki/_index.md`
- Modify: `wiki/systems/reactor-coolant-system.md` (already has frontmatter from Task 1)

- [ ] **Step 1: Add frontmatter to _index.md**

Add to the top of `wiki/_index.md`:

```markdown
---
title: Salem Study Wiki
category: index
status: draft
---

# Salem Study Wiki — Index
...
```

- [ ] **Step 2: Verify full build end-to-end**

```bash
cd site
npm run build
```

Expected: Build succeeds with all articles indexed by Pagefind.

- [ ] **Step 3: Test full site locally**

```bash
cd site
npx astro preview
```

Verify:
- Homepage loads with wiki index content
- Sidebar shows all categories and articles
- RCS article renders with dark theme
- `Cmd+K` search opens and finds articles
- Graph view shows nodes and connections
- Breadcrumbs display correct category
- Mobile responsive (resize browser narrow)

Stop preview after verification.

- [ ] **Step 4: Commit**

```bash
git add wiki/_index.md
git commit -m "feat: add frontmatter to wiki index for Astro content collection"
```

---

### Task 10: Initial Push and Deploy

- [ ] **Step 1: Verify .gitignore covers node_modules and dist**

Append to `.gitignore` if not present:

```
site/node_modules/
site/dist/
site/.astro/
```

- [ ] **Step 2: Final full build check**

```bash
cd site
npm run build
```

Expected: Clean build, no warnings or errors.

- [ ] **Step 3: Commit all remaining files**

```bash
git add -A
git status
git commit -m "feat: complete Salem study wiki website setup"
```

- [ ] **Step 4: Push to GitHub**

```bash
git push -u origin main
```

- [ ] **Step 5: Enable GitHub Pages**

```bash
gh api repos/Nostem/salem-study-system/pages -X PUT -f build_type=workflow
```

- [ ] **Step 6: Verify deployment**

Wait ~2 minutes for the GitHub Action to run, then check:

```bash
gh run list --limit 1
```

Once complete, visit `https://nostem.github.io/salem-study-system/` and verify the site is live.

- [ ] **Step 7: Commit any final fixes**

If any issues were found during verification, fix and commit.
