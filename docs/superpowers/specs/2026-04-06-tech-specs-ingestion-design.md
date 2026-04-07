# Tech Specs Ingestion — Design Spec

## Overview

Ingest Salem Unit 2 Technical Specifications and Bases into the wiki as individual articles per TS subsection. Each article uses Option A formatting (structured callout cards, color-coded values, tables for actions and SRs). The full tech specs PDF is split into per-section PDFs served from the site. Exam-relevant content is highlighted and cross-linked to existing system articles.

## Source Documents

- `raw/tech-specs/tech-specs.pdf` — 379 pages, Unit 2 (DPR-75), latest amendments
- `raw/tech-specs/tech-spec-basis.pdf` — 125 pages, Bases document (current content, some pages visually older)

## Article Granularity

One wiki article per TS subsection (e.g., 3/4.1.1 Boration Control, 3/4.4.3 PORVs). This matches how operators look up specs and is the right size to contain LCO + Actions + SRs + Bases without becoming unwieldy.

## Article Format (Option A — Structured with Cards and Color)

Each article follows this structure:

```markdown
---
title: "TS 3/4.X.X — [Title]"
category: tech-specs
status: draft
aliases: [...]
---

# TS 3/4.X.X — [Title]

<div class="callout callout-important">
<div class="callout-label">LCO 3.X.X.X</div>
The [parameter] shall be [condition] <span class="hi">[limit value]</span>.
</div>

**Applicability:** Modes X, Y, Z

## Actions

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| [condition] | [action] | [time] |

## Surveillance Requirements

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.X.X.X | [requirement] | [frequency] |

(Only exam-relevant SRs included. Others exist in the source PDF.)

## Bases

[Extracted from bases PDF. Prose format. Key exam facts highlighted
with hi-exam. Explains WHY the limit exists — safety analysis basis.]

---

*Amendment No. XXX* | [View Tech Spec PDF](/salem-study-system/ts-pdfs/ts-3-4-X-X.pdf)

## Connections

- Related systems: [[System Name]]
- Related tech specs: [[TS 3/4.X — Section]]
```

### Formatting Conventions

- **LCO** in a blue callout box (`callout-important`) with limit value highlighted (`hi`)
- **Action values:** trip-level actions in red (`val-trip`), normal operating values in green (`val-normal`), alarm values in amber (`val-alarm`)
- **Bases:** presented as prose, not in a callout box. Exam-relevant facts highlighted with `hi-exam`.
- **Amendment number** noted at the bottom of each article
- **PDF link** at the bottom pointing to the split section PDF

### Surveillance Requirements

Only exam-relevant SRs are included in the wiki article. Routine channel checks, calibrations, and procedural SRs are omitted for readability. If an NRC exam question later references an omitted SR, it gets added back during exam ingestion.

## PDF Splitting

The 379-page tech specs PDF is split into individual section PDFs:

```
site/public/ts-pdfs/
  ts-3-4-1-1.pdf      ← pages covering 3/4.1.1 only
  ts-3-4-1-2.pdf
  ts-3-4-1-3.pdf
  ...
```

- Located in `site/public/ts-pdfs/` so Astro serves them as static files
- Each article links to its section PDF: `/salem-study-system/ts-pdfs/ts-3-4-X-X.pdf`
- Split using `pypdf` (already installed in the project venv)
- NOT gitignored — these are small and need to be accessible on the deployed site

## Cross-linking

When a TS article is created:
1. The existing system article's "Tech Spec LCOs" section is updated with working wikilinks to the new TS article
2. The TS article's "Connections" section links back to the relevant system article(s)
3. Entity aliases in the TS article frontmatter enable wikilink resolution from other articles

## Ingestion Order

Priority order (most heavily tested first):

1. **3/4.1** — Reactivity Control (shutdown margin, boration, rod insertion limits, MTC)
2. **3/4.3** — Instrumentation (trip setpoints, ESF actuation setpoints, response times)
3. **3/4.4** — RCS (pressure/temp limits, PORVs, leakage, SG tube integrity)
4. **3/4.5** — ECCS (accumulators, ECCS subsystems, RWST)
5. **3/4.6** — Containment (integrity, spray, fan coolers, isolation, H2 control)
6. **3/4.7** — Plant Systems (AFW, MSSVs, SW, CCW)
7. **3/4.8** — Electrical (AC sources, DC sources, distribution)
8. **1.0** — Definitions
9. **2.0** — Safety Limits and LSSS
10. **3/4.0** — Applicability (LCO applicability rules, modes)
11. **3/4.2** — Power Distribution (FQ, F-delta-H, axial flux difference)
12. **3/4.9** — Refueling Operations
13. **3/4.10** — Special Test Exceptions
14. **3/4.11** — Radioactive Effluents
15. **6.0** — Administrative Controls

## Conflict Handling

Per user requirement: procedures and setpoints change over time with amendments. Before adding any value from the tech specs to the wiki:
- Check it against values already in existing system articles (from UFSAR ingestion)
- If there is a conflict between UFSAR and TS values, do NOT assume — flag it and bring it to the user for confirmation
- The user will manually confirm the current value

## Amendment Tracking

Each article notes its amendment number at the bottom. After all TS sections are ingested, a comprehensive ADAMS amendment reconciliation will be performed (open item — see memory).

## Open Items

- ADAMS amendment reconciliation (deferred to after ingestion)
- Bases PDF has some older-looking pages — extract and clean up as-is, flag any unreadable sections

## What Does NOT Change

- Existing system articles — only the "Tech Spec LCOs" section gets updated with wikilinks
- Wiki article template structure for system articles
- Site build pipeline, deployment, or UI components
