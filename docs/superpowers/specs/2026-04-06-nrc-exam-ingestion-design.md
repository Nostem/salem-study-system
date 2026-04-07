# NRC Exam Ingestion — Design Spec

## Overview

Ingest NRC licensing exam packages (written exams, JPMs, and simulator scenarios) from 10 years of exam data (2012–2023) into the wiki. Written questions are captured verbatim with structured metadata. Key facts are aggressively backfilled into system articles. JPMs and simulator scenarios get their own articles. All articles link to source PDFs.

## Source Material

```
raw/exams/
  2023/  final-written.pdf, final-operating.pdf
  2022/  final-written.pdf, final-operating.pdf, final-operating-outline.pdf
  2020/  final-written.pdf, final-operating.pdf, final-operating-outline.pdf
  2019/  final-written.pdf, final-operating.pdf, final-operating-outline.pdf
  2018/  final-written.pdf, final-operating.pdf, final-operating-outline.pdf
  2017/  final-operating.pdf, final-operating-outline.pdf
  2016/  final-written.pdf, final-outline.pdf, final-operating.pdf
  2015/  final-written.pdf, final-outline.pdf, final-operating.pdf
  2014/  final-written.pdf, final-outline.pdf, final-operating.pdf
  2012/  final-written.pdf, final-outline.pdf, final-operating.pdf
```

Ingestion order: newest first (2023, 2022, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2012).

## Written Exam Articles

### File Location

```
wiki/exams/
  2023-written-exam.md
  2022-written-exam.md
  ...
data/exams/
  2023-written-exam.yaml
  2022-written-exam.yaml
  ...
```

### Article Structure

Each exam year gets one markdown article with two sections:

```markdown
---
title: "2023 NRC Written Exam"
category: exams
status: draft
aliases:
  - 2023 exam
---

# 2023 NRC Written Exam

## Overview
- **Exam Date:** [date]
- **ILOT Class:** [if known]
- **RO Questions:** 75
- **SRO-Only Questions:** 25

<a href="/salem-study-system/exam-pdfs/2023-written.pdf" target="_blank">View Exam PDF</a>

## RO Questions

### Q1 — [brief topic label]

**Given:** [stem verbatim]

**Choices:**
- A. [choice]
- B. [choice]
- C. [choice]
- D. [choice]

**Answer:** [letter]

**Explanation:** [justification verbatim]

**References:** [technical references]
**Learning Objective:** [learning objective]
**Cognitive Level:** [comprehension/analysis]
**Source:** [bank/new/modified + origin]

---

### Q2 — [brief topic label]
...

## SRO-Only Questions

### Q76 — [brief topic label]
...
```

Questions captured word-for-word from the PDF. No paraphrasing or rewording.

### Structured Metadata (YAML)

Each exam gets a companion YAML file in `data/exams/` with queryable metadata per question:

```yaml
exam: 2023
type: written
questions:
  - number: 1
    topic: "SSPS/Reactor Trip Breakers"
    answer: C
    cognitive_level: "Comprehension/Analysis"
    source: "Bank – Beaver Valley 2018"
    systems:
      - instrumentation-and-controls
    tech_specs: []
    ka: "10-105"
    type: RO
  - number: 2
    topic: "Pressurizer Safety Valve Tailpipe Temp"
    answer: A
    cognitive_level: "Comprehension/Analysis"
    source: "Bank – Byron 2019"
    systems:
      - pressurizer
      - reactor-coolant-system
    tech_specs: []
    ka: "11-140"
    type: RO
```

The `systems` array maps to wiki system article slugs. This enables future features: filter questions by system, by K/A, by cognitive level, build quizzes, track coverage across years.

### Backfilling System Articles

For each question, aggressively update the relevant system article(s):

1. **Add callout-exam block** referencing the year and question number with the key fact tested
2. **Apply hi-exam highlights** to existing text that the question tests
3. **Add new content** if the exam answer reveals information not already in the article (e.g., SSPS train-to-breaker mapping, specific valve numbers, operational sequences)
4. **Reorganize/expand sections** if the exam reveals the article is missing important operational detail
5. **Create new system articles** if the question is about a system that doesn't have its own article yet

### Conflict Checking

CRITICAL: Before adding any value from an exam question to a system article:
- Check it against existing values in the wiki
- If there is a conflict (different setpoint, different procedure step, different system response), do NOT assume the exam answer is correct
- Flag the conflict and present it to the user for confirmation
- The user will manually determine the most current/correct value

Procedures and setpoints change over time with amendments and plant modifications. Older exam answers may reflect outdated plant configuration.

### Images and Drawings

- **High-value images** (logic diagrams, simplified system drawings, P&IDs that teach operational concepts): extract from the PDF and embed in the exam article or the relevant system article
- **Generic reference figures** (steam tables, standard curves): reference via PDF link only, do not extract
- Extracted images stored in `site/public/exam-images/[year]/`

## JPM Articles

### Master Index

```
wiki/exams/jpm-index.md
```

One master article cataloging all JPMs across all exam years, grouped by type:
- **Administrative** JPMs
- **Simulator** JPMs
- **In-Plant** JPMs

Each entry includes: JPM title, exam year, task type, and link to the operating test PDF section.

### Individual JPM Articles

High-value or frequently-repeated JPMs get their own article:

```
wiki/exams/jpms/[descriptive-name].md
```

Content: task description, key steps, critical steps (pass/fail), connections to system articles. Only created for JPMs that show up in multiple exam years or cover important operational knowledge. Identified during ingestion.

### Source Files

- Use the `final-operating-outline.pdf` (or `final-outline.pdf`) to build the JPM index — it has the summary with K/A references
- Use the `final-operating.pdf` for detailed content of individual JPM articles
- Both PDFs linked from the articles

## Simulator Scenario Articles

### File Location

```
wiki/exams/scenarios/
  2023-scenario-1-[brief-name].md
  2023-scenario-2-[brief-name].md
  ...
```

### Article Structure

Each scenario gets its own article:

```markdown
---
title: "2023 Scenario 1 — [Brief Description]"
category: exams
status: draft
---

# 2023 Scenario 1 — [Brief Description]

## Initial Conditions
[Plant conditions at scenario start]

## Malfunctions
[List of malfunctions inserted and timing]

## Expected Operator Actions
[Key actions, decision points, procedure entries]

## Critical Tasks
[Pass/fail critical tasks with acceptance criteria]

## Connections
- Related systems: [[system1]], [[system2]]
- Related EOPs: [[EOP-xxx]]
- Related tech specs: [[TS 3/4.x.x]]
```

### Master Scenario Index

```
wiki/exams/scenario-index.md
```

Lists all scenarios across all years with brief descriptions and links.

## PDF Handling

### Written Exams
- Full `final-written.pdf` copied to `site/public/exam-pdfs/[year]-written.pdf`
- Each written exam article links to its full PDF (opens in new tab)

### Operating Tests
- `final-operating.pdf` split into per-JPM and per-scenario sections where practical
- Full operating PDF also available as `site/public/exam-pdfs/[year]-operating.pdf`
- `final-operating-outline.pdf` available as `site/public/exam-pdfs/[year]-outline.pdf`
- All linked with `target="_blank"`

## Ingestion Process Per Exam Year

For each exam year (starting with 2023):

1. **Extract written exam PDF** — read all questions, answers, and explanations
2. **Create written exam article** — verbatim questions in markdown
3. **Create YAML metadata** — structured data for each question
4. **Backfill system articles** — for each question:
   a. Identify the relevant system article(s)
   b. Check for value conflicts with existing content
   c. Flag any conflicts for user confirmation
   d. Add callout-exam blocks, hi-exam highlights, and new content
   e. Create new system articles if needed
5. **Extract operating test outline** — catalog JPMs and scenarios
6. **Build/update JPM index** — add this year's JPMs to the master list
7. **Create scenario articles** — one per simulator scenario
8. **Create individual JPM articles** — for high-value JPMs
9. **Extract high-value images** — logic diagrams, system drawings
10. **Copy source PDFs** — to `site/public/exam-pdfs/`

## What This Enables (Future)

- Query all questions about a specific system across all years
- Track K/A coverage and identify heavily-tested topics
- Build quizzes from ingested question banks (per notes.md — use existing questions only, do not invent new ones)
- Allen Murrow style tracking (per notes.md)
- Fluency guide section (per notes.md)
- Admin procedure compilation from exam references (per notes.md)
