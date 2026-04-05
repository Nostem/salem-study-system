# Salem Study Wiki — Website Design Spec

## Overview

A static website that renders the `wiki/` markdown articles into a browsable, searchable, interlinked site hosted on GitHub Pages. Desktop-first design with responsive mobile support. Dark technical/engineering aesthetic with sacred geometry influences — symmetry, golden ratio, spatial harmony, and elegance.

## Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Tailwind CSS
- **Search:** Pagefind (client-side, built at build time)
- **Graph:** D3.js (force-directed graph of wikilinks)
- **Hosting:** GitHub Pages via GitHub Actions
- **Repo:** github.com/Nostem/salem-study-system

## Architecture

```
wiki/                          ← Markdown source (unchanged)
  _index.md
  systems/*.md
  tech-specs/*.md
  exams/*.md
  eops/*.md
  concepts/*.md
  abnormals/*.md

site/                          ← Astro project
  src/
    content/                   ← Astro content collection config (points to ../wiki/)
    layouts/
      ArticleLayout.astro      ← 3-panel layout for wiki articles
      GraphLayout.astro        ← Full-page graph view
    components/
      Sidebar.astro            ← Left nav tree, grouped by category
      TableOfContents.astro    ← Right rail, scrollspy "On This Page"
      SearchModal.astro        ← Cmd+K triggered search overlay
      GraphView.astro          ← D3.js force-directed graph
      WikiLink.astro           ← Resolves [[wikilinks]] to internal hrefs
      DraftBadge.astro         ← Shows ⚠️ DRAFT or ✅ verified status
    styles/
      global.css               ← Dark theme, typography, sacred geometry accents
    utils/
      wikilink-resolver.ts     ← Maps display names + aliases to file paths
      graph-data.ts            ← Extracts link graph from all articles at build
  astro.config.mjs
  tailwind.config.mjs
  package.json

.github/workflows/deploy.yml  ← Build + deploy to GitHub Pages
```

## Content Integration

Astro reads `wiki/` as a content collection. Markdown files remain the single source of truth — no duplication, no transformation step. The same files compiled by the ingestion workflow are what the site renders.

### Frontmatter Convention

Each wiki article should have optional frontmatter that Astro can use:

```yaml
---
title: Emergency Core Cooling Systems
category: systems
status: draft  # or "verified"
aliases:
  - ECCS
  - safety injection
---
```

If frontmatter is absent, Astro infers:
- `title` from the first `# heading`
- `category` from the directory (`systems/`, `tech-specs/`, etc.)
- `status` defaults to `draft`

### Wikilink Resolution

A remark plugin processes `[[wikilinks]]` during the Astro build:

1. At build time, scan all markdown files to build a lookup map: `display name → slug`
2. Include entity aliases from each article's `aliases` frontmatter field
3. Also include the alias map from CLAUDE.md (CVCS = Chemical and Volume Control System, etc.)
4. Transform `[[Display Name]]` → `<a href="/category/slug">Display Name</a>`
5. Unresolved links render with a distinct style (red/dimmed) so missing articles are visible

## Page Layout

### Desktop (≥1024px) — Three Panels

| Panel | Width | Content |
|-------|-------|---------|
| Left sidebar | 240px fixed | Nav tree grouped by category, collapsible sections, graph view link |
| Center | Fluid, max 800px | Article content with breadcrumbs, status badge, all template sections |
| Right rail | 200px fixed | "On This Page" TOC with scrollspy highlighting |

### Tablet (768–1023px)

- Right rail hidden
- Sidebar remains visible but narrower (200px)

### Mobile (<768px)

- Sidebar collapses to hamburger menu (slide-out drawer)
- Right rail hidden; TOC accessible via floating dropdown
- Tables reflow to stacked key-value cards
- Search accessible via icon in top bar

## Visual Design

### Theme: Dark Technical / Sacred Geometry

**Color palette:**

| Role | Value | Usage |
|------|-------|-------|
| Background | `#0a0e17` | Page background |
| Surface | `#0d1220` | Top bar, sidebar |
| Card/Panel | `#111827` | Code blocks, tables, LCO cards |
| Border | `#1a2035` | Subtle dividers |
| Text primary | `#e0e4ea` | Headings, emphasis |
| Text body | `#9ca3af` | Paragraph text |
| Text muted | `#6b7280` | Labels, breadcrumbs |
| Accent blue | `#60a5fa` | Links, section headings, active states |
| Accent teal | `#2a6f97` | Category headers, geometric accents |
| Value green | `#10b981` | Setpoints, numeric values (monospace) |
| Draft yellow | `#eab308` | Draft badges |
| Verified green | `#22c55e` | Verified badges |

**Typography:**
- System font stack for body text
- Monospace for values, setpoints, TS numbers
- Generous line-height (1.7) for readability during study sessions
- Section headings in accent blue with letter-spacing

**Sacred geometry / engineering aesthetic:**
- Subtle geometric patterns in the sidebar background or page borders (SVG-based, low opacity)
- Golden ratio (1.618) used for spacing relationships between major layout sections
- Clean symmetry in card layouts and table alignment
- Thin geometric logo mark in the top bar (nested shapes — circle/square/triangle)
- No gratuitous ornamentation — elegance through proportion and restraint

## Navigation

### Sidebar

Categories in fixed order:
1. Systems
2. Tech Specs
3. Exams
4. EOPs
5. Concepts
6. Abnormals

Each category is a collapsible section. Active article highlighted with left border accent. Articles sorted alphabetically within categories.

Bottom of sidebar: "Graph View" link.

### Breadcrumbs

Top of article content: `Category > Article Title`

### Wikilink Chips

In the "Connections" section of articles, linked articles render as pill-shaped chips that are clickable.

## Search

**Pagefind** — client-side search engine that indexes at build time.

- Triggered by `Cmd+K` (Mac) / `Ctrl+K` keyboard shortcut, or clicking search bar
- Modal overlay with input field and instant results
- Results show: article title, category badge, text snippet with highlighted match
- Searches all article content: titles, body text, setpoint values, TS numbers, K/A statements
- No server required — runs entirely in the browser from a static index

## Graph View

**Full-page graph** accessible from sidebar link:

- D3.js force-directed layout
- Nodes = wiki articles, sized by number of connections
- Node color = category (same colors as sidebar category headers)
- Edges = wikilinks between articles
- Click node → navigate to article
- Hover node → highlight direct connections, dim others
- Zoom and pan supported

**Data generation:**
- At build time, `graph-data.ts` scans all markdown files for `[[wikilinks]]`
- Produces a JSON graph: `{ nodes: [{id, title, category, slug}], edges: [{source, target}] }`
- Served as a static JSON file, loaded by the D3 component

**Optional: local graph on article pages** — a small version showing only the current article's direct connections. Lower priority; can add later.

## Build & Deployment

### GitHub Actions Workflow

```yaml
# .github/workflows/deploy.yml
trigger: push to main
steps:
  1. Checkout repo
  2. Setup Node.js 20
  3. Install dependencies (site/)
  4. Build Astro site (reads wiki/ as content)
  5. Run Pagefind on build output
  6. Deploy to GitHub Pages
```

**Build time:** Under 30 seconds for the expected wiki size (<500 articles).

### Local Development

```bash
cd site
npm install
npm run dev    # Astro dev server with hot reload
```

Changes to `wiki/` markdown files trigger hot reload during development.

## What Does NOT Change

- `wiki/` directory structure and markdown format
- `raw/` directory and ingestion workflow
- `scripts/` download helpers
- CLAUDE.md project instructions
- The compilation process (add doc → Claude compiles → review → study)

The website is a read-only presentation layer over the existing wiki content.

## Future Considerations (Out of Scope)

- Custom domain
- Vercel/Netlify migration
- Interactive quizzes or flashcard mode
- Full-text search of raw PDFs
- User authentication or private mode
- Local article graph on each article page (nice to have, add later)
