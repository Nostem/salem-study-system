# Tech Spec Article Restructuring Design

**Date:** 2026-04-13
**Status:** Approved

## Goal

Restructure all 18 tech spec wiki articles to move bases content from a bottom-of-article dump section to inline collapsible blocks after each subsection, place action statement definitions adjacent to their referencing tables, and fix visual formatting in TS 3/4.3.

## Key Decisions

1. **Inline bases format** — collapsible `<details>` with a purple `callout-bases` block inside. Collapsed by default.
2. **Combined bases sections** — manually split by relevance to each subsection. Doesn't have to be verbatim — extract applicable/important parts, use exam material as reference for what matters.
3. **Action statements** — move action definitions immediately after the table that references them (not in a separate section at the bottom).
4. **TS 3/4.3 ESF functions** — `####` headings get a `.esf-function` CSS class for visual distinction (bold, larger, colored left border) without changing heading level.
5. **No subsection gets an empty bases block** — only add where bases content exists.
6. **`## Bases` section removed** from every article after distribution.

## CSS Additions

Add to global stylesheet:

```css
.callout-bases { border-color: #a78bfa; background: rgba(167, 139, 250, 0.06); }
.callout-bases .callout-label { color: #a78bfa; }

.esf-function {
  font-size: 14px;
  font-weight: 700;
  color: #c8cdd5;
  border-left: 3px solid #a78bfa;
  padding-left: 10px;
  margin: 16px 0 8px;
}
```

## Inline Bases Template

Place immediately after each subsection's content (LCO, actions, surveillances, exam callouts), before the `---` horizontal rule that separates it from the next subsection:

```html
<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.X.Y [Subsection Name]</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.X.Y</div>
[Relevant bases content extracted from the combined bases section. Include:
- Why the LCO exists (safety analysis basis)
- Key design assumptions
- Any exam-tested bases facts (reference the exam callout)
- Specific values or logic that justify the setpoints/limits]
</div>
</details>
```

## Action Statement Placement

Wherever a table references action numbers (e.g., "Action 19" in the last column), the action definitions table is placed immediately after that referencing table. Order within a subsection:

1. LCO callout
2. Applicability
3. Channels/setpoints table (references actions by number)
4. **Action Statements table** (defines those numbered actions) — moved here from bottom
5. Surveillance requirements (if any)
6. Exam callouts (if any)
7. Collapsible bases block

## TS 3/4.3 ESF Function Formatting

The numbered ESF functions (1. Safety Injection through 9. Semiautomatic Transfer) keep their `####` heading level but render with the `.esf-function` class:

```html
<h4 class="esf-function">1. Safety Injection</h4>
```

Or equivalently in markdown with an HTML wrapper:

```html
<div class="esf-function">

#### 1. Safety Injection

</div>
```

The left purple border and larger/bolder text distinguishes them from surrounding table content.

## Bases Splitting Guidelines

Many TS articles have a single bases paragraph covering multiple subsections. When splitting:

1. **Read the full bases text** and identify which sentences/paragraphs apply to which subsection
2. **Exam callouts are the guide** — if an exam question tests a specific bases fact, that fact MUST be in the inline bases for the subsection the exam question links to
3. **Shared/general bases** (e.g., "The OPERABILITY requirements ensure redundancy is maintained") can be duplicated to each applicable subsection or placed in the first subsection with a note
4. **Don't fabricate bases content** — only include what's in the source. If the bases section is a single generic paragraph with no subsection-specific content, place it with the first/primary subsection
5. **Reference the actual TS bases PDF** when the wiki bases are thin — the PDF links stay at the bottom of the article

## Execution Phases

| Phase | Articles | Complexity |
|---|---|---|
| 1 | TS 3/4.3 (Instrumentation) | High — ESF formatting fix, action placement, bases split |
| 2 | TS 3/4.4 (RCS) | High — 11 subsections, most bases subsections |
| 3 | TS 3/4.1.1, 3/4.1.2, 3/4.1.3 | Medium — boration group |
| 4 | TS 3/4.5, 3/4.6, 3/4.7 | Medium — ECCS, Containment, Plant Systems |
| 5 | TS 3/4.2, 3/4.8, 3/4.9, 3/4.10, 3/4.11 | Low-Medium — smaller articles |
| 6 | TS 1.0, 2.0, 3/4.0, 6.0 | Low — minimal bases |

Phase 1 includes adding the CSS classes (one-time). Each phase commits independently.

## Subagent Workflow

Each phase dispatches a subagent with:
```
Read this design spec at docs/superpowers/specs/2026-04-13-tech-spec-restructuring-design.md.
Restructure [article path] following the inline bases template and action placement rules.
Read the full article, split the ## Bases section into inline blocks per subsection,
move action statements adjacent to their referencing tables, delete the ## Bases section.
For TS 3/4.3 only: apply .esf-function class to numbered ESF headings.
Build check: cd site && npm run build
```

## Not Building

- No new articles created
- No changes to article frontmatter or aliases
- No changes to wikilinks or Connections sections
- No changes to exam callout blocks (they stay where they are)
- The PDF links at the bottom of each article stay (they're the authoritative source)
