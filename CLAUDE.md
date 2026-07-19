# Salem NRC Exam Study System

## Quality Standard
This project requires the utmost care, meticulousness, and attention to detail. Every value, setpoint, and fact must be verified against source documents — never fabricated or guessed. Every section receives the same rigorous treatment regardless of perceived priority. Do not take shortcuts that sacrifice quality. There is no time constraint. Accuracy and completeness always take precedence over speed.

Codex will review your output once you are done.

## Working Principles
> Reproduced verbatim from [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) (`CLAUDE.md`).

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## What This Is
A personal knowledge base for NRC RO/SRO licensing exam prep at Salem Nuclear Generating Station.
Built using the Karpathy LLM Knowledge Base pattern: source docs go into `raw/`, an LLM incrementally
compiles them into a wiki of interlinked markdown files that I study from.

## How It Works
```
raw/                    ← Source documents (PDFs, scraped text)
  ufsar/                ← UFSAR chapters
  tech-specs/           ← Tech specs + bases
  exams/                ← NRC exam packages
  operating-tests/      ← JPMs, simulator scenarios
  ergs/                 ← WOG ERGs, NUREG-0899

wiki/                   ← Compiled knowledge (what I study from)
  systems/              ← One article per plant system
  tech-specs/           ← One article per TS section
  exams/                ← Exam analysis by year
  eops/                 ← Reconstructed EOP knowledge
  concepts/             ← Cross-cutting concepts (reactivity, heat transfer, etc.)
  _index.md             ← Master index with all links
```

## The Compilation Process
1. I add a source doc to `raw/` and tell Claude Code: "file this to our wiki"
2. Claude reads the doc, extracts key entities and relationships
3. Claude creates or updates the relevant wiki articles with summaries, key values, and backlinks
4. I review the output, correct errors, mark as verified
5. Repeat. The wiki grows incrementally. Each new doc is easier because the pattern is established.

## Station Details
- **Plant:** Salem Nuclear Generating Station, Units 1 & 2
- **Operator:** PSEG Nuclear, LLC
- **Type:** Westinghouse 4-Loop PWR
- **Licensed Power:** 3,459 MWt per unit
- **Dockets:** 05000272 (Unit 1), 05000311 (Unit 2)
- **Licenses:** DPR-70 (Unit 1), DPR-75 (Unit 2)

## Ingestion Order
**Phase 1 — UFSAR** (plant skeleton)
Start with high-priority chapters. Each chapter creates system articles in the wiki.
- Chapter 4: Reactor
- Chapter 5: Reactor Coolant System ← START HERE
- Chapter 6: Engineered Safety Features
- Chapter 7: Instrumentation & Controls
- Chapter 8: Electrical Power Systems
- Chapter 9: Auxiliary Systems
- Chapter 15: Accident Analysis

**Phase 2 — Tech Specs** (regulatory layer)
Adds LCOs, setpoints, action statements, surveillances, and bases to existing system articles.

**Phase 3 — NRC Exams** (testing layer)
Adds exam question analysis, K/A coverage, JPM summaries, and scenario walkthroughs.

## Wiki Article Templates

### System Article Template
```markdown
# [System Name]

## Function
[One-paragraph safety function and purpose]

## Key Components
- [Component]: [function, location]

## Key Setpoints & Limits
| Parameter | Value | Source |
|-----------|-------|--------|
| [name] | [value] | [TS section or UFSAR ref] |

## Tech Spec LCOs
- **[LCO #]** — [brief description, modes, action time]

## Related EOPs
- [EOP name] — [when entered, key actions]

## Exam History
- [year]: [brief description of how this system was tested]

## Connections
- Related systems: [[system1]], [[system2]]
- Related tech specs: [[TS section]]
- Related abnormals: [[AB procedure]]
```

### Tech Spec Article Template
```markdown
# TS [Section Number] — [Title]

## LCO
[The limiting condition in plain language]

## Applicability
[Modes, conditions]

## Actions
| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| [condition] | [action] | [time] |

## Surveillance Requirements
| SR | Requirement | Frequency |
|----|-------------|-----------|
| [SR #] | [what to do] | [how often] |

## Bases Summary
[Why this limit exists — safety analysis basis]

## Key Values
| Parameter | Value | Amendment |
|-----------|-------|-----------|
| [name] | [value] | [Amend #] |

## Exam Questions
- [year] Q[#]: [brief description] → Answer: [letter]
```

### Exam Analysis Template
```markdown
# [Year] NRC Exam — Salem

## Overview
- **ML Number:** [ML#]
- **Date:** [date]
- **ILOT Class:** [if known]
- **RO Questions:** 75 | **SRO-Only:** 25

## K/A Category Breakdown
| Tier | Group | Count |
|------|-------|-------|
| [tier] | [group] | [#] |

## Questions by Tech Spec Section
| TS Section | Questions | Numbers |
|------------|-----------|---------|
| [section] | [count] | [Q#s] |

## Notable Questions
[Particularly instructive or tricky questions with explanations]
```

## ADAMS Documents Tracker

### Confirmed ML Numbers
| Document | ML Number | Status |
|----------|-----------|--------|
| Unit 1 Complete Tech Specs | ML11175A207 | ✅ Ready |
| 2008 Exam | ML082250612 | ✅ Ready |
| 2011 RO Exam | ML113340040 | ✅ Ready |
| 2011 SRO Exam | ML113330798 | ✅ Ready |
| 2012 Exam | ML13206A339 | ✅ Ready |
| 2014 Exam | ML15009A286 | ✅ Ready |
| 2016 Outlines | ML16081A397 | ✅ Ready |
| 2018 Full Package | ML18074A052 | ✅ Ready |
| 2022 RO Answer Key | ML22175A152 | ✅ Ready |

### Ingestion Status
Ingested (written + operating, in `raw/exams/`): 2012, 2014, 2015, 2016, 2017 (operating only),
2018, 2019, 2020, 2022, 2023.

### Still Needed (search ADAMS: docket 05000311, title "final exam")
2006, 2008, 2009, 2010, 2011, 2021 exam packages (source PDFs not yet in `raw/exams/`)
UFSAR chapters (search: docket 05000272, title "updated final safety analysis")

## Entity Aliases (update as you discover mismatches)
Keep this list current. When the UFSAR, tech specs, and exams use different names
for the same thing, map them here so articles stay unified.

```
Chemical and Volume Control System = CVCS = Boration Systems (TS 3.1.2, formerly 3/4.1.2) = charging and letdown
Reactor Coolant System = RCS = TS 3.4 = TS 3/4.4 (old notation)
Emergency Core Cooling Systems = ECCS = TS 3.5 = TS 3/4.5 (old notation) = safety injection
Containment Fan Coil Units = CFCUs = containment cooling
Residual Heat Removal = RHR = shutdown cooling
Component Cooling Water = CCW = TS 3.7.3 = TS 3/4.7.3 (old notation)
Service Water = SW = TS 3.7.4 = TS 3/4.7.4 (old notation)
Auxiliary Feedwater = AFW = TS 3.7.1.2 = TS 3/4.7.1.2 (old notation)
Power Operated Relief Valves = PORVs = TS 3.4.3 = TS 3/4.4.3 (old notation)
```

## Quality Rules
- Every fact traceable to source (ML number or TS section)
- Values include amendment number when from tech specs
- EOP knowledge labeled "reconstructed from exam materials"
- All content from publicly available NRC documents only
- Articles I've reviewed marked ✅ at top; unreviewed marked ⚠️ DRAFT
- **After ANY work, review `README.md` and update it if it went stale.** The README is the
  project's source-of-truth overview (scope/counts, learner flows, architecture, commands, routes,
  deployment, conventions). Whenever behavior, commands, routes, file layout, generated-artifact
  handling, deployment, counts, or quiz years change, update the README in the same change. Check
  it as a final step before committing — do not leave it describing the old state. (The README
  carries the same rule in its Development conventions; keep the two consistent.)

## Wiki Index Queries
Before creating or modifying any wiki article, run:
- `python3 scripts/wiki_index.py refs <system-or-topic>` — check for existing content
- `python3 scripts/wiki_index.py conflicts <value> <unit>` — check for value disagreements

To rebuild the index: `python3 scripts/wiki_index.py rebuild`
To see article structure: `python3 scripts/wiki_index.py sections <slug>`
To find missing backlinks: `python3 scripts/wiki_index.py backlinks <slug>`

## Subagent Workflow for Exam Ingestion

When ingesting exam questions, do NOT write custom prompts that re-summarize the skill rules. Point subagents directly at the skill file. The skill IS the specification.

**Question creation + backfill subagent prompt:**
```
Read the exam ingestion skill at /Users/fredm/.claude/skills/salem-exam-ingestion/SKILL.md.
Execute Steps 4 through 6 for questions XX-YY.
Source data: data/exams/temp-YYYY-qXX-qYY-raw.txt
Follow every rule in the skill exactly — especially the Connections procedure extraction
checklist and the backfill requirements in Step 5.
Work from: /Users/fredm/projects/salem-study-system
```

**Why this matters:** Custom prompts that summarize the skill are a lossy compression — they
consistently drop the procedure extraction checklist, knowledge gap check, and half the common
mistakes list. The skill file is 550+ lines for a reason. Let the agent read it directly.

**Run ingestion batches SEQUENTIALLY, not in parallel.** Backfilling edits shared system/EOP/
procedure articles; concurrent subagents that touch the same file silently clobber each other's
edits. Dispatch one batch, let it finish, verify, then dispatch the next.

## Quiz Bank & Deploy Gate (CRITICAL — do this before finishing any exam ingestion)

**The four generated quiz-data files are gitignored and rebuilt at deploy — do NOT commit them.**
They are `data/quiz-import/audit-all.json`, `data/quiz-import/supabase-staging-all.json`,
`site/src/data/quiz-bank.json`, and `site/src/data/quiz-bank-v2.json` (see `.gitignore`). There is
no committed-artifact / `git diff --exit-code` gate anymore.

Production is **Vercel** (`.github/workflows/deploy.yml` only redirects GitHub Pages there). Vercel's
`buildCommand` (root `vercel.json`) puts `.venv/bin` on PATH and runs `npm run build`, whose
`prebuild` hook runs `npm run data` → `python3 scripts/build_quiz_data.py`. That script is the single
source of truth: it regenerates the four files from ALL question articles (audit → stage → build →
build-v2 → validate) and **fails the deploy** if any question is invalid. So the source content —
`wiki/exams/**` question articles, `data/exams/*.yaml`, `data/topic-map.yaml` — must be clean.

After ingesting or editing ANY questions — including `status: draft` ones (drafts ARE included and
validated) — run the orchestrator locally as the LAST step and confirm it prints
**"OK — all quiz-data files regenerated and validated"** (the validate step must say "OK: no errors"):

```bash
.venv/bin/python scripts/build_quiz_data.py
```

Use `.venv/bin/python` — the SYSTEM `python3` lacks PyYAML and the import/build scripts will crash with
`ModuleNotFoundError: No module named 'yaml'`. Nothing to commit afterward (the outputs are gitignored);
the point is to catch a validation failure before it breaks the Vercel build. A broken green marker or
invalid question here is what broke the deploys after the 2014/2012 merges.

**The `✓ <LETTER>. Correct.` marker is machine-parsed and load-bearing.** The importer
(`exam_question_import.py` `CORRECT_RE`) detects each question's correct choice from the EXACT
string `✓ <LETTER>. Correct.` in the green answer block. NEVER alter it — not even to flag an
answer-key disagreement. Any caveat (keyed-vs-rationale conflict, "X or Y accepted", "Deleted")
goes in a SEPARATE amber callout ABOVE the green block; the green marker stays `✓ <LETTER>. Correct.`
Deviating (e.g. `✓ B. (keyed answer).`) yields `isCorrect=[]`, fails validation, and breaks the deploy.

## Tooling Notes
- `pdfplumber` is in the SYSTEM `python3`; `pypdf` and `PyYAML` are ONLY in `.venv/bin/python`. Use
  `.venv/bin/python` for PDF splitting AND the importer/quiz scripts (they `import yaml`, so system
  `python3` crashes with `ModuleNotFoundError: No module named 'yaml'`); use system `python3` only for
  pdfplumber text extraction.
- JPM/scenario cover K/As and titles often garble in pdfplumber text but are legible as page
  IMAGES — read the cover image (Read tool, `pages:`) to resolve them and to fix any wrong YAML
  recon placeholder (e.g. "gas" vs "liquid" release). Mark `TBD` only if truly illegible; never fabricate.
- Before every commit, sweep for tool-tag artifacts subagents leave behind:
  `grep -rlE "</content>|</invoke>" wiki/` (must be empty).

## Known Wiki Reconciliations (open)
- **EOP-TRIP-5 / EOP-TRIP-6 "With/Without RVLIS" — direction RESOLVED, partial cleanup left.**
  The wiki article titles are CORRECT per current numbering (TRIP-5 = With RVLIS; confirmed by
  operator feedback in issue #162 and the 2022 exam labeling). Older exam sources (2012, 2014,
  2015, 2020) used the pre-renumbering labels (TRIP-6 = With RVLIS). When old-numbering questions
  surface, sort their callouts/backlinks by CONTENT (with vs. without RVLIS), not by the old
  procedure number. Done for 2014 Q26 (marked outdated, callout moved to the TRIP-5 article);
  still to re-sort: the 2015 Q85 and 2012 Q23 callouts on both EOP articles. Tracked in issue #92.

## Branch & PR Workflow for Exams
- One branch per exam (`ingest-YYYY-exam`), each stacked on the previous so it carries the latest wiki state.
- PRs are SQUASH-merged, and merge DELETES the base branch — which auto-CLOSES any PR stacked on it.
  After a parent exam PR merges, rebase the next exam's commits onto `main`
  (`git rebase --onto origin/main <last-parent-commit>`) and open a fresh PR to `main`.
