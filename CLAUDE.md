# Salem NRC Exam Study System

## Quality Standard
This project requires the utmost care, meticulousness, and attention to detail. Every value, setpoint, and fact must be verified against source documents — never fabricated or guessed. Every section receives the same rigorous treatment regardless of perceived priority. Do not take shortcuts that sacrifice quality. There is no time constraint. Accuracy and completeness always take precedence over speed.

Codex will review your output once you are done.

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

### Still Needed (search ADAMS: docket 05000311, title "final exam")
2006, 2009, 2010, 2015, 2019, 2020, 2023 exam packages
UFSAR chapters (search: docket 05000272, title "updated final safety analysis")
Operating test packages for all years

## Entity Aliases (update as you discover mismatches)
Keep this list current. When the UFSAR, tech specs, and exams use different names
for the same thing, map them here so articles stay unified.

```
Chemical and Volume Control System = CVCS = Boration Systems (TS 3/4.1.2) = charging and letdown
Reactor Coolant System = RCS = TS 3/4.4
Emergency Core Cooling Systems = ECCS = TS 3/4.5 = safety injection
Containment Fan Coil Units = CFCUs = containment cooling
Residual Heat Removal = RHR = shutdown cooling
Component Cooling Water = CCW = TS 3/4.7.3
Service Water = SW = TS 3/4.7.4
Auxiliary Feedwater = AFW = TS 3/4.7.1.2
Power Operated Relief Valves = PORVs = TS 3/4.4.3
```

## Quality Rules
- Every fact traceable to source (ML number or TS section)
- Values include amendment number when from tech specs
- EOP knowledge labeled "reconstructed from exam materials"
- All content from publicly available NRC documents only
- Articles I've reviewed marked ✅ at top; unreviewed marked ⚠️ DRAFT

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
