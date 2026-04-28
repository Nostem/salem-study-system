# Homepage Redesign — Functional Portal

**Goal:** Replace the mocked study dashboard homepage with a functional two-panel portal: navigation cards with real article counts on top, comprehensive PDF document library below.

**Architecture:** Single Astro page component (`index.astro`) using `getCollection('wiki')` at build time for real counts. No mocked data. Uses `BaseLayout` directly (not `ArticleLayout`) since the homepage has its own layout with SearchModal included standalone. All PDF links point to existing files in `site/public/exam-pdfs/` and `site/public/ts-pdfs/`.

**Tech Stack:** Astro 6, Tailwind v4 (CSS-native `@theme` tokens), Pagefind search modal.

---

## Section 1: Header

A flex row with three elements:

- **Left:** Site title (`SALEM STUDY WIKI` in mono) with a stats line below: `"{N} articles · {N} exams · {N} systems"`. All counts computed from `getCollection('wiki')` at build time.
- **Center:** Search bar trigger button — styled as a dark input-like element (`bg-bg-card`, `border-border`), shows `⌘K  Search articles...`. Clicking it or pressing Cmd+K opens the existing `SearchModal` component (Pagefind).
- **Right:** Two pill links: `Graph View` → `/graph`, `Plant Overview` → `/plant`. Styled as small bordered mono pills with hover highlight.

The header has a bottom border (`border-b border-border`) and bottom margin separating it from the cards below.

## Section 2: Navigation Cards

A 2x4 responsive grid (`grid-cols-2 sm:grid-cols-4`) of 8 cards, one per wiki category:

| Card | Glyph | Color | Links to |
|------|-------|-------|----------|
| Systems | ◈ | `--color-accent-blue` (#60a5fa) | First system article |
| Tech Specs | ◇ | `--color-accent-green` (#10b981) | First tech spec article |
| NRC Exams | ◉ | `--color-status-draft` (#f59e0b) | Most recent written exam |
| EOPs | △ | `--color-mastery-weak` (#ef4444) | First EOP article |
| Abnormals | ⬡ | `--color-text-muted` (#6b7280) | First abnormal article |
| Procedures | ▤ | `--color-accent-blue` (#60a5fa) | First procedure article |
| Admin | ▣ | `--color-accent-teal` (#2a6f97) | First admin article |
| Concepts | ✦ | `--color-accent-purple` (#a78bfa) | Homepage (placeholder until concepts exist) |

Each card shows:
- Colored glyph + section name (hover: text turns accent-blue)
- Article count in mono (`{N} articles`)

Styled: `bg-bg-card`, `border border-border`, `rounded-md`, `p-4`. Hover: `border-border-hi`.

## Section 3: Source Documents — Reference Docs

Below the nav cards, separated by an uppercase mono section header: `SOURCE DOCUMENTS`.

Two cards side by side (`grid-cols-1 lg:grid-cols-2`):

### UFSAR Card
- Header: blue glyph + "UFSAR"
- Single PDF link: `salem-ufsar.pdf` → opens in new tab

### Tech Specs & Bases Card
- Header: green glyph + "Tech Specs & Bases"
- Two-column layout inside:
  - Left column: "TECH SPECS" sub-header, then all ~32 TS PDF links (TS 1.0 through TS 3/4.11)
  - Right column: "BASES" sub-header, then all ~12 Bases PDF links
- Each link: `text-accent-blue`, `text-[11px]`, opens in new tab

All PDFs reference existing files in `site/public/ts-pdfs/`.

## Section 4: Source Documents — NRC Exams Timeline

Below the reference docs, separated by uppercase mono header: `NRC EXAMS`.

One card per exam year, newest first: **2023, 2022, 2020, 2019, 2018**. Only years with published PDFs and wiki content are shown.

Each year card contains:

- **Left:** Year in large serif font (`font-serif text-[2.5rem]`)
- **Right content:**
  - ILOT class in mono badge
  - Two-column grid: Written Exam | Operating Exam
  - Each column: PDF link (new tab), ingested question/JPM count (computed from `getCollection`), and a "Browse questions/JPMs" link to the wiki exam article
  - **Expandable `<details>`:** "View all JPMs & Scenarios ({N} PDFs)" — reveals a 5-column grid of individual split PDF links grouped by type (RO Admin, SRO Admin, Simulator, In-Plant, Scenarios)

JPM and scenario slug lists are hardcoded in the component frontmatter (one array per year). New exam years require adding their slug list when ingested.

## What This Replaces

- `site/src/pages/index.astro` — currently renders `HomeDashboard.astro` with mocked data
- `site/src/components/HomeDashboard.astro` — the mocked study dashboard component

`HomeDashboard.astro` will be deleted. `index.astro` will be rewritten with the new homepage content directly (no separate component needed — the page is self-contained).

The `_index.md` wiki article remains in the content collection but is no longer rendered as the homepage. It's accessible via sidebar if needed.

## What This Does NOT Include

- Quiz mode, mastery tracking, progress data — Phase 2
- Streak/donut/weak areas widgets — removed (were mocked)
- Exam years not yet ingested (2012, 2014, 2015, 2016, 2017) — added as they're ingested
- Mobile-specific layout optimizations — the grid is responsive (`grid-cols-2` on small screens) but no dedicated mobile design

## Files Changed

| File | Action |
|------|--------|
| `site/src/pages/index.astro` | Rewrite — new homepage content |
| `site/src/components/HomeDashboard.astro` | Delete |
| `site/src/pages/design-preview.astro` | Delete (temporary preview) |

## Visual Reference

Live preview deployed at `/salem-study-system/design-preview` — approved by user.
