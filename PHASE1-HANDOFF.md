# Salem Study Wiki — Phase 1 Redesign Handoff

**Audience:** Claude Code, running against `Nostem/salem-study-system` on `main`.
**Scope:** Phase 1 only — Visual refresh + new Home page + new Plant Overview page.
**Not in scope:** Quiz mode, Mastery dashboard, Setpoints, Mobile view, Command palette. Those are Phase 2+.

Reference prototype: `Salem Study Wiki Redesign v2.html` (same project). Open it in a browser to see the target aesthetic and the specific screens this phase ships. The prototype contains more than Phase 1 — only implement what this doc describes.

---

## 0. Orientation (read first)

The repo is already well-structured:

- `site/` — Astro 6.x app, Tailwind v4, deployed to GitHub Pages under `/salem-study-system`.
- `site/src/styles/global.css` — single source of truth for design tokens via Tailwind v4 `@theme { }`.
- `site/src/layouts/ArticleLayout.astro` — the main shell (top bar + sidebar + content + right rail).
- `site/src/layouts/BaseLayout.astro` — minimal HTML wrapper.
- `site/src/components/Sidebar.astro` — reads `getCollection('wiki')`, groups by category, collapsible, persists collapse state in localStorage.
- `site/src/pages/index.astro` — currently just renders `_index.md` through ArticleLayout. **This is what we replace.**
- Markdown content lives in `site/src/content/wiki/**` (not imported here; read it via `getCollection('wiki')`).

Existing visual language is already dark, already uses the `#0a0e17` / `#60a5fa` / `#2a6f97` palette, already has the sacred-geometry sidebar pattern. **Do not rewrite the existing aesthetic — extend it.**

## 1. Don't-touch list

Changes here would break content or tests. Leave alone:

- `site/src/plugins/remark-wikilinks.ts` — wikilink parser.
- `site/src/utils/wikilink-map.ts`, `aliases.ts`, `graph-data.ts` — content graph machinery.
- `site/src/content.config.ts` — content collection schema. If you need new frontmatter fields, ASK; don't add silently.
- `site/src/scripts/highlighter.ts` — highlight toolbar logic.
- `site/astro.config.mjs` — base path, plugins, integrations. Leave as is.
- `site/src/components/HighlightToolbar.astro`, `SearchModal.astro`, `Breadcrumbs.astro`, `DraftBadge.astro`, `LocalGraph.astro`, `TableOfContents.astro`, `MobileNav.astro`.
- `site/tests/` — Playwright tests. Update snapshots only if they fail for visual-change reasons; don't rewrite logic.
- All markdown content in `site/src/content/wiki/`.

---

## 2. Phase 1 deliverable — three PRs

Open them in this order. Each is independently mergeable and reviewable from mobile.

**PR 1: Typography + token polish.** Pure CSS. Zero component changes. Low risk.
**PR 2: New Home page.** Replaces `index.astro` contents. Adds a new `HomeDashboard.astro` component. Stats are mocked; homepage reads article metadata but no progress data yet.
**PR 3: Plant Overview page.** New route at `/plant`. New `PlantSchematic.astro` component.

---

## 3. PR 1 — Typography + token polish

### 3a. Add web fonts

Currently the site uses `system-ui`. Move to **IBM Plex Sans** for UI, **JetBrains Mono** for mono, **Instrument Serif** for display numerals and marquee headlines (the "good morning, Fred" type moments). Body copy in articles stays sans for scannability.

**File:** `site/src/layouts/BaseLayout.astro`

Add inside `<head>`, above the favicon link:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif&display=swap" rel="stylesheet">
```

### 3b. Extend tokens in `global.css`

**File:** `site/src/styles/global.css`

Inside the existing `@theme { }` block, add:

```css
/* Font families */
--font-sans: 'IBM Plex Sans', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
--font-serif: 'Instrument Serif', Georgia, serif;

/* Surface elevation (new — use for cards) */
--color-bg-hover: #172033;
--color-border-hi: #283252;

/* Semantic accents (new — use for mastery bands) */
--color-mastery-weak: #f87171;
--color-mastery-mid:  #fbbf24;
--color-mastery-ok:   #34d399;
```

Update the root `html` rule to use the new font variable:

```css
html {
  background-color: var(--color-bg);
  color: var(--color-text-body);
  font-family: var(--font-sans);
  line-height: 1.65;
}
```

Update `.prose h1`, `h2`, `h3`, `p` to:

- Bump `h1` to `font-size: 1.75rem` (was 1.5rem) — gives article titles more weight.
- `h2` stays the same size but change `color` to `var(--color-text-primary)` and add `font-family: var(--font-sans); text-transform: uppercase; letter-spacing: 0.12em; font-size: 0.75rem;` — turns H2s into section-header chips matching the prototype.
- `.prose p` bump to `font-size: 0.9375rem` (was 0.8125rem). Current body size is genuinely too small for long-form reading.
- Mono elements (`.prose pre`, `.prose code`, `.val-*`) — change `font-family: ui-monospace, ...` to `font-family: var(--font-mono)`.

### 3c. Top-bar monogram

**File:** `site/src/layouts/ArticleLayout.astro`

In the header, change the logo text span from `text-sm font-semibold` to `font-mono text-[11px] font-medium tracking-[0.18em]`. Keep the existing SVG monogram.

### 3d. Sidebar category-header font

**File:** `site/src/components/Sidebar.astro`

On the button with the category labels (the one with `data-sidebar-toggle`), change `font-semibold tracking-[1.5px] text-[10px] uppercase` to `font-mono font-semibold tracking-[0.18em] text-[10px] uppercase`. Same size and color — just moves it onto the monospace stack.

### 3e. Mastery dots in sidebar (optional, nice-to-have)

Prototype shows tiny 6px dots next to each article in the sidebar, color-coded by mastery. **Skip for PR 1** since there's no mastery data yet. Add as a TODO comment at the top of `Sidebar.astro`:

```astro
{/* TODO Phase 3: mastery dots — requires progress data source */}
```

### PR 1 acceptance

- All existing pages still build (`npm run build`).
- Visual regression: article H2s read as small uppercase chips, body copy is noticeably larger, mono elements use JetBrains Mono. Nothing else changed.

---

## 4. PR 2 — New Home page

### 4a. What it replaces

Current `site/src/pages/index.astro` renders `_index.md` inside `ArticleLayout`. We replace the **content** — still use `ArticleLayout` for the shell so the sidebar, top bar, and right rail stay consistent.

### 4b. New component

**New file:** `site/src/components/HomeDashboard.astro`

Layout from the prototype's `HomePage` function. In prose:

1. **Greeting row** — left: uppercase mono date/time + serif greeting ("Good morning, Fred." — make the name configurable via a prop, default "operator"). Right: "EXAM IN / 42 days" in serif amber (`--color-status-draft` works). The 42 days is hardcoded for now — add a `<!-- TODO: wire to exam date config -->` comment.
2. **Resume card** — full-width card. Shows a mock "2022 NRC Written Exam — Q47 of 75" with a 75-segment progress bar and two buttons (Resume, Review wrong answers). Hardcode mocked state; mark with TODO comment.
3. **Three-column row** — Streak (7-day bar chart), Overall mastery (SVG donut at 64%), Due for review (list of 4 topics with day counters). All hardcoded.
4. **Today's drill** — section header + 3 drill cards (WEAKEST / DUE / REVIEW badges).
5. **Weakness triage** — section header + list of 4 rows. Each row: topic, last-seen, N-seen, accuracy %, chevron.

Each button/card `href`s do nothing useful yet (Phase 1). Use `<a href={base}>` or a disabled `<button>`. Add `data-phase2` attributes on the interactive ones so we can grep them later.

Match prototype's colors exactly — pull from the prototype's `HomePage`, `ResumeCard`, `StreakCard`, `MasteryRingCard`, `DueReviewCard`, `DrillCard`, `WeakRow`, `SectionHeader` functions. Translate React inline styles to Tailwind classes where clean, to CSS modules / scoped `<style>` where not. **Key rule:** every color value must reference a CSS variable from `global.css`, not a raw hex. Use `text-accent-blue`, `text-text-primary`, etc. — Tailwind v4 auto-generates these from the `@theme` block.

The homepage **should not** pull real article data from `getCollection('wiki')` yet. Future iteration: wire the "Resume" card to last-read article from localStorage, pull real article titles for "Due for review." Out of scope for PR 2. Leave TODOs.

### 4c. Rewrite `index.astro`

```astro
---
import ArticleLayout from '../layouts/ArticleLayout.astro';
import HomeDashboard from '../components/HomeDashboard.astro';
---

<ArticleLayout
  title="Home"
  category=""
  status="verified"
  slug="_index"
  headings={[]}
>
  <HomeDashboard operatorName="operator" examDays={42} />
</ArticleLayout>
```

Note: `ArticleLayout` constrains main content to `max-w-[800px]`. The homepage needs more width. Two options:

- **Preferred:** add a `wide?: boolean` prop to `ArticleLayout` that changes `max-w-[800px]` to `max-w-[1200px]` and hides the right rail (`LocalGraph` + `TableOfContents`) when `wide` is true. Pass `wide` from `index.astro`.
- **Fallback:** the homepage breaks out of the constraint with inline styles. Ugly — don't do this unless the prop change feels too invasive.

### 4d. What about `_index.md`?

The current `_index.md` article becomes orphaned. Two options:

- Leave it in the content collection — it's accessible at `/_index` technically, or nowhere (the sidebar filter already skips it).
- Move its content to a new `/about` route. **Defer.** Ask the user.

### PR 2 acceptance

- Visiting `/` shows the new dashboard.
- Layout still has the sidebar and top bar.
- Streak card, mastery donut, resume card, due-for-review list all render with mocked data.
- No broken links. No console errors. Build passes.
- All mocked data has a visible `<!-- TODO -->` comment nearby so future-us knows where the seams are.

---

## 5. PR 3 — Plant Overview page

### 5a. New route

**New file:** `site/src/pages/plant.astro`

```astro
---
import ArticleLayout from '../layouts/ArticleLayout.astro';
import PlantSchematic from '../components/PlantSchematic.astro';
---

<ArticleLayout
  title="Plant Overview"
  category="navigation"
  status="verified"
  slug="plant"
  headings={[]}
  wide={true}
>
  <PlantSchematic />
</ArticleLayout>
```

### 5b. New component

**New file:** `site/src/components/PlantSchematic.astro`

Port the prototype's `PlantPage` function. Two-column layout:

- **Left (flex):** The SVG schematic. Copy the `PLANT_BLOCKS` array verbatim from the prototype. Render each block as an SVG `<rect>` + `<text>` pair. Color-tint by mastery using the new `--color-mastery-*` tokens.
- **Right (300px):** Detail panel. On hover or click of a block, show its name, mastery %, and a list of member articles as links to `/systems/<slug>`.

Interactivity: hover/click handled with a small inline `<script>` at the bottom of the component. Use vanilla DOM — no framework. Pattern:

```astro
<script>
  const blocks = document.querySelectorAll('[data-block]');
  const detail = document.getElementById('plant-detail');
  blocks.forEach(b => {
    b.addEventListener('mouseenter', () => showDetail(b.dataset.blockId));
    b.addEventListener('click', () => selectDetail(b.dataset.blockId));
  });
  // ...
</script>
```

The block -> articles mapping can be a JS object inlined in the component for now. Future iteration: derive from frontmatter. TODO comment.

### 5c. Add to sidebar

**File:** `site/src/components/Sidebar.astro`

Add a new section at the top, above the category loop:

```astro
<div class="px-4 py-3 border-b border-[#1a2035]">
  <a href={`${base}plant`}
     class:list={['flex items-center gap-2 py-1.5 text-[13px] no-underline transition-colors',
                  currentSlug === 'plant' ? 'text-accent-blue' : 'text-[#8b95a5] hover:text-[#c8cdd5]']}>
    <span class="font-mono text-accent-teal">◇</span> Plant overview
  </a>
</div>
```

### PR 3 acceptance

- `/plant` renders the schematic.
- Hovering a block highlights it; clicking selects it.
- Detail panel shows articles. Clicking an article navigates to `/systems/<slug>`.
- Sidebar shows "Plant overview" as a top link.

---

## 6. Tailwind v4 gotcha

This project uses **Tailwind v4 with CSS-native `@theme`** — not `tailwind.config.js`. When you add tokens to `@theme`, classes like `bg-bg-hover`, `text-mastery-weak`, `font-mono`, `font-serif` generate automatically. No config file edits needed.

If classes don't resolve, check that the token is inside the `@theme { }` block in `global.css`, named with the right prefix (`--color-*` for colors, `--font-*` for fonts).

---

## 7. Git hygiene

Branch names: `redesign/phase1-typography`, `redesign/phase1-home`, `redesign/phase1-plant`.
PR descriptions: link to the prototype file in the design project (read-only access fine) and list the acceptance criteria from this doc.
Each PR: under ~400 lines of diff if at all possible. The home page will be the biggest — that's fine.

---

## 8. When you're done with Phase 1

Ping the user to review the three PRs on mobile. Phase 2 (quiz mode, mastery dashboard, setpoints cheat sheet) requires a data layer — a JSON progress store and a question bank schema — which we'll spec separately.
