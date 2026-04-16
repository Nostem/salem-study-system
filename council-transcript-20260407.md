# LLM Council Transcript — 2026-04-07

## Original Question
Need to create a comprehensive skill that captures the entire ingestion workflow process with all lessons learned and conventions, written in Anthropic's recommended format.

## Framed Question
Should we create a comprehensive Claude Code skill that codifies the entire NRC exam ingestion workflow, capturing 18+ lessons learned about PDF extraction, verbatim preservation, formatting, linking, conflict checking, and more — for a nuclear licensing exam study wiki where accuracy is safety-critical? How should it be structured?

---

## Advisor Responses

### The Contrarian
18+ lessons is a spec, not a skill. Lessons are contextual and will over-apply constraints from one document type to another. Verbatim preservation vs lossy PDF extraction tension is unresolved. The skill will drift with constant maintenance — that's documentation debt in a different location. The right question is: which specific failure mode costs the most, and can we solve just that one reliably?

### The First Principles Thinker
The real problem is making a stateless LLM consistent across sessions. A monolithic skill encoding 18 lessons is fragile — it will drift, grow contradictions, and be partially read. The deeper fix is making the wiki self-enforcing: YAML frontmatter with verified/source fields, validation scripts checking wikilink targets before committing. The skill should be thin orchestration invoking atomic checks. The architecture of the wiki is the real quality control layer.

### The Expansionist
This is a reusable nuclear knowledge compilation engine. 93 operating reactor sites in the US could use it. Build it parameterized from the start (site, unit_count, reactor_type). The 18+ lessons represent a genuine QA protocol. The floor is "Salem works reliably." The ceiling is "the standard method for LLM-assisted nuclear exam prep, used across the industry."

### The Outsider
"18 lessons learned" is a changelog masquerading as a specification. Prose quality control is unverifiable. Need three concrete things: (1) a conflict-check script that diffs before writing, (2) a schema template with required fields that fail if blank, (3) stem preservation as copy-paste verification — output raw text first, human confirms, then format. Skill for orchestration only; enforcement mechanisms must be separate.

### The Executor
Already built the skill (445 lines). Encodes: exact HTML card format, verbatim rule as non-negotiable, conflict-check-first ordering, four-directory procedure routing, batch-of-10 cadence with user confirmation, JPM and simulator scenario templates, Common Mistakes section, image handling. Gap: missing CSS class conventions (val-normal, val-trip, val-alarm).

---

## Peer Review

**Anonymization mapping:** A=Contrarian, B=First Principles, C=Expansionist, D=Outsider, E=Executor

**Strongest response:** D (Outsider) — most actionable with testable quality gates. Doesn't just critique, redirects toward concrete enforcement mechanisms.

**Biggest blind spot:** C (Expansionist) — multi-site fantasy is premature optimization for a solo study project. Actively distracts from the immediate problem.

**Universal gap:** All five missed that the skill already exists (E created it). The real question is whether it works and what specific gaps remain. Also missed: for a solo study system, over-engineering quality controls may cost more than the occasional error the user catches during review.

---

## Chairman's Verdict

### Where the Council Agrees
All five agree that 18 prose lessons inside a skill is the wrong unit of abstraction. The skill needs to exist but must be thin orchestration, not a monolithic instruction set. The core failure mode is silent information loss or corruption — wrong values presented with confidence.

### Where the Council Clashes
Scope (multi-site vs single-site), Build vs Validate (is the skill enough or do we need enforcement scripts), and Maintenance cost (will the skill rot vs can the wiki self-enforce).

### Blind Spots Caught
1. The skill already exists — test it before redesigning it
2. Over-engineering has real cost for a solo study project
3. Duplicating CLAUDE.md content in the skill creates a maintenance fork

### The Recommendation
Keep the existing skill. Strip it to orchestration only. Reference CLAUDE.md for templates/conventions instead of restating them. Add one mechanical enforcement: YAML frontmatter with required fields (status, sources, last_ingestion) that is machine-checkable.

### The One Thing to Do First
Run the existing skill against one batch of unprocessed exam questions and evaluate the output critically. That single test will reveal which lessons actually fire and which are dead weight.
