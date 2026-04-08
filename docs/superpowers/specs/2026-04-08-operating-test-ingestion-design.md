# Operating Test Ingestion Skill — Design Spec

**Date:** 2026-04-08
**Status:** Draft for review

## Purpose

A separate skill governing ingestion of NRC operating test materials (JPMs and simulator scenarios) into the Salem Study System wiki. Companion to the existing `salem-exam-ingestion` skill which handles written exams.

## Why a Separate Skill

- The written exam skill is 558 lines and growing. Operating test workflows are fundamentally different (procedure execution vs question/answer).
- JPMs have step tables, critical elements, initiating cues, and task standards — none of which exist in written exam questions.
- Simulator scenarios have malfunctions, event sequences, critical tasks, and expected operator responses — completely different structure.
- Shared rules (OCR verification, wikilink resolution, no fabricated values, bidirectional links) are referenced from the written exam skill, not duplicated.

## Article Architecture

### File Structure

```
wiki/exams/
  2023-operating-exam.md          ← Master index (auto-embeds JPMs + scenarios)
  2023/
    jpm-ro-a1a-control-room-logs.md    ← One file per JPM
    jpm-ro-a1b-rwst-makeup-time.md
    jpm-sro-a1a-eccs-injection-flow.md
    jpm-sim-a-rod-surveillance.md
    jpm-ip-i-sbo-air-compressor.md
    ...
  scenarios/
    2023-scenario-01-load-reduction-lbloca.md  ← One file per scenario
    2023-scenario-02-....md
    ...
```

### Master Operating Exam Article

```markdown
---
title: "2023 NRC Operating Exam"
category: exams
status: draft
aliases:
  - 2023 operating exam
  - 2023 operating test
---

# 2023 NRC Operating Exam

## Overview

- **Exam:** SALEM 2023 NRC Exam — 21-01 ILOT
- **Admin JPMs (RO):** 4
- **Admin JPMs (SRO):** 5
- **Simulator JPMs:** 8
- **In-Plant JPMs:** 3
- **Simulator Scenarios:** 4

<a href="/salem-study-system/exam-pdfs/2023-operating.pdf" target="_blank">View Operating Test PDF</a>

## Administrative JPMs (RO)
<!-- Auto-embedded from wiki/exams/2023/jpm-ro-a*.md -->

## Administrative JPMs (SRO)
<!-- Auto-embedded from wiki/exams/2023/jpm-sro-a*.md -->

## Simulator JPMs
<!-- Auto-embedded from wiki/exams/2023/jpm-sim-*.md -->

## In-Plant JPMs
<!-- Auto-embedded from wiki/exams/2023/jpm-ip-*.md -->

## Simulator Scenarios
<!-- Auto-embedded from wiki/exams/2023/scenarios/*.md -->
```

### JPM Article Template

```markdown
---
title: "2023 JPM [ID] — [Task Name]"
category: exams
status: draft
aliases:
  - 2023 JPM [ID]
---
```

Followed by an HTML card (similar to question cards but green-accented):

```html
<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM [ID] — [Task Name]</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">[TYPE] | [K/A]</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> [Simulator / In-Plant / Administrative]<br>
<strong>Initial Conditions:</strong><br>
[VERBATIM from PDF]<br><br>
<strong>Initiating Cue:</strong><br>
[VERBATIM from PDF]<br><br>
<strong>Task Standard:</strong><br>
[VERBATIM from PDF]
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

[Step table with critical steps marked]

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: [PROCEDURE] | K/A: [K/A TAG] | PDF: <a href="/salem-study-system/exam-pdfs/2023-operating.pdf#page=[N]" target="_blank">Pages [N]-[M]</a>
</div>
</div>
</details>
</div>
```

**Step table format** (inside the details block):

```html
<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;">[Action]</td>
<td style="padding:6px;color:#9ca3af;">[Expected result]</td>
</tr>
</table>
```

Critical steps marked with `*` get the `.jpm-critical` class (bold green).

### Simulator Scenario Article Template

```markdown
---
title: "2023 Scenario # — [Description]"
category: exams
status: draft
aliases:
  - 2023 Scenario #
---
```

HTML card (green-accented, expandable sections):

```html
<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario # — [Description]</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> [VERBATIM]<br>
<strong>Turnover:</strong> [VERBATIM]
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>[Event 1]</li>
<li>[Event 2]</li>
...
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence & Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

[Event sequence table with evaluator activities and expected responses]

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;">[CT#1 description and acceptance criteria]</span><br>
<span style="color:#c8cdd5;">[CT#2 description and acceptance criteria]</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
PDF: <a href="/salem-study-system/exam-pdfs/2023-operating.pdf#page=[N]" target="_blank">Pages [N]-[M]</a>
</div>
</div>
</details>
</div>
```

## CSS Additions

New classes for operating test content:

```css
/* Operating test callouts (green) */
.callout-jpm {
  border-color: #34d399;
  background: rgba(52, 211, 153, 0.06);
}
.callout-jpm .callout-label { color: #34d399; }

.callout-scenario {
  border-color: #34d399;
  background: rgba(52, 211, 153, 0.06);
}
.callout-scenario .callout-label { color: #34d399; }

/* JPM critical step marker */
.jpm-critical {
  color: #34d399;
  font-weight: 700;
}
```

Backfill callout format for system/procedure articles:

```html
<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 [ID]</div>
[Key fact from JPM. Use <span class="hi-exam">highlight</span> for critical values.]
</div>
```

```html
<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2023 #[N]</div>
[Key fact from scenario.]
</div>
```

## Extraction Workflow

### Step 1 — Extract Text

Use **markitdown** as primary (best coverage at 350K chars) with **pypdf** as cross-reference. Save both:

```
data/exams/temp-YYYY-operating-markitdown.txt
data/exams/temp-YYYY-operating-pypdf.txt
```

For step tables where column structure is lost, read the source PDF directly.

### Step 2 — Map JPM and Scenario Boundaries

Parse the extracted text to identify page ranges for each JPM and scenario. Create a mapping file:

```yaml
# data/exams/2023-operating-exam.yaml
jpms:
  - id: "RO-A1.a"
    title: "Perform Control Room Logs"
    type: Admin-RO
    procedure: "S2.OP-DL.ZZ-0003"
    pages: "1-13"
    ka: "G2.1.19 (3.9)"
  ...
scenarios:
  - number: 1
    title: "Load Reduction / LBLOCA"
    pages: "278-318"
    major_events:
      - "Planned Load Reduction to 89%"
      - "24 Vacuum Pump trips"
      ...
```

### Step 3 — Create Articles in Batches

Process in batches: Admin JPMs, Sim JPMs, In-Plant JPMs, then Scenarios. Each batch follows:

1. Create articles with verbatim content
2. OCR verify against source PDF
3. Backfill system/procedure articles
4. Create missing procedure articles
5. Wikilink resolution check
6. Commit

### Step 4 — Backfilling

Same mandatory backfilling as written exam, but using green callout classes:

**JPM backfills** — extract from:
- Task standard (what the applicant must demonstrate)
- Critical steps (the pass/fail actions)
- Any instrument readings, setpoints, or system responses described

**Scenario backfills** — extract from:
- Malfunction descriptions and expected plant responses
- Critical task acceptance criteria
- EOP/AB transitions and key decision points
- Instrument failures and how the plant responds

**Target articles:**
- System articles (instrument failures, component responses, interlocks)
- Procedure articles (key steps, P&Ls, critical actions)
- EOP articles (transition criteria, critical task conditions)
- Tech spec articles (LCO entries triggered by scenario events)

### Step 5 — Knowledge Gap Check

Same as written exam: could a student understand this JPM/scenario using only the linked wiki articles? If the JPM tests a procedure step that isn't documented, add it.

## Site Template Changes

Extend `[...slug].astro` to auto-embed operating test articles:

```typescript
// For operating exam master articles
if (slug.startsWith('exams/') && slug.includes('-operating-exam')) {
  const yearMatch = slug.match(/exams\/(\d{4})-operating-exam/);
  if (yearMatch) {
    const year = yearMatch[1];
    const allArticles = await getCollection('wiki');
    // Embed JPMs
    const jpmArticles = allArticles
      .filter((a) => a.id.startsWith(`exams/${year}/jpm-`))
      .sort((a, b) => a.id.localeCompare(b.id));
    // Embed scenarios
    const scenarioArticles = allArticles
      .filter((a) => a.id.startsWith(`exams/scenarios/${year}-scenario-`))
      .sort((a, b) => a.id.localeCompare(b.id));
  }
}
```

## PDF Handling

- Copy `raw/exams/2023/final-operating.pdf` to `site/public/exam-pdfs/2023-operating.pdf`
- Each JPM article links to `2023-operating.pdf#page=N` for its page range
- Each scenario article links to its page range

## Shared Rules (from salem-exam-ingestion skill)

The operating test skill references these rules from the written exam skill rather than duplicating:

- Non-Negotiable Rules 1-8 (no fabricated values, verbatim content, bidirectional links, conflict check, etc.)
- Connections format (one line per category, comma-separated, canonical names)
- Wikilink resolution check (Step 9 shell command)
- OCR accuracy check (visual verification against PDF)
- Missing procedure link detection
- Homepage index updates
- CSS highlight classes (val-trip, val-alarm, val-normal, hi-exam, hi-trap, hi, blank)

## Open Questions

1. Should scenarios embed the full event sequence table or just the summary with critical tasks?
2. For in-plant JPMs, should we capture the physical location/building?
3. Should the YAML metadata include K/A tags per JPM (like written exam questions)?
