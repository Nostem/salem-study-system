# LLM Council Transcript — Operating Test Ingestion Design

**Date:** 2026-04-08
**Topic:** Review of operating test ingestion design spec for Salem Study System

## Framed Question

Review the operating test ingestion design spec for the Salem NRC Exam Study System. The user has already ingested a full 100-question written exam. Now designing a companion skill for the operating test (20 JPMs + 4 simulator scenarios from a 425-page PDF). Key concerns: JPM template adequacy, scenario template practicality, backfilling gaps, NUREG-1021 requirements, and implementation risks.

## Advisor Responses

### The Contrarian

The fatal flaw is the scenario template. A 40+ page simulator scenario is not a table of malfunctions with expected responses. It is a branching evaluation document with simulator operator instructions (which the student should never see), concurrent EOPs, and critical task evaluation criteria. Flattening that into a simple table throws away the structure that makes it useful.

Specific failures: (1) The embedding mechanism in [...slug].astro only handles `q*` files, not `jpm-*` or scenario files -- master page won't work. (2) No CSS classes exist yet for green accents. (3) "Related exam: YYYY NRC Written Exam" is wrong for operating test articles. (4) Critical task definitions should be the PRIMARY structured element in scenarios, not buried. Build the scenario template from an actual scenario PDF before committing to a structure.

### The First Principles Thinker

The fundamental tension is building a reading system to prepare for a doing exam. JPMs test execution from memory cues and panel knowledge. Scenarios test real-time diagnosis and crew direction. No amount of reading replaces those neural pathways.

For JPMs: The critical study artifact isn't the step table -- it's the decision points and gotchas. Where do operators FAIL these? What's the difference between knowing "open valve X" and physically locating it? Capture WHY candidates fail each JPM.

For scenarios: Don't flatten a dynamic event into a static article. Capture initial conditions and the first cue, then what the EOP network demands you evaluate. Make the reader work for the diagnosis.

The real gap: Neither template addresses procedure pathway knowledge -- which EOP branches where, which transitions to monitor. That's what NUREG-1021 competencies target for SRO candidates.

### The Expansionist

The operating test content is the skeleton key to something far more valuable than exam prep. When you map JPM steps and scenario events onto system articles that already have exam questions, you build a causal graph of the plant. You stop studying "what is the ECCS setpoint" and start studying "when SI actuates, what do I verify, what fails next, and what EOP transition does that force."

The scenario content creates a failure-mode atlas -- 15-25 distinct failure progressions mapped to EOP paths. JPM steps are condensed procedure walkthroughs with critical decision points already flagged by the NRC. Backfilling those into procedure articles gives annotated procedures where every NRC-critical step is marked. Every future exam ingested lands in a richer graph. The wiki becomes a reasoning engine.

### The Outsider

You're using the same template approach that worked for multiple-choice questions on fundamentally different content. A JPM is a sequence of physical actions. A scenario is a branching, time-pressured narrative. Forcing them into "article with a table" might strip out what makes them useful.

For scenarios, have you considered timeline or flowchart representations? The PDF extraction struggles with table formatting -- how will you verify critical step data? The green vs amber distinction matters to exam format but maybe not to learning. And for 40+ page scenarios, what's in the 90% you're discarding?

### The Executor

The bottleneck is table extraction. Everything else is sequencing. CSS classes are 20 minutes. Template changes are 30 minutes.

What to do first: (1) Get the PDF into the repo. (2) Extract ONE JPM manually -- try pypdf, pdfplumber, pdftotext -layout -- find what preserves step tables best. (3) Write the template from that extraction. (4) THEN write the skill file. (5) Scenarios last. Budget manual cleanup time for every single JPM.

## Chairman's Verdict

### Where the Council Agrees

- Table extraction from the PDF is the gating risk, not template design
- Scenarios are fundamentally different from JPMs and need different treatment
- Critical tasks are the highest-value content in scenarios
- The existing site infrastructure has concrete gaps (Astro template, CSS, cross-linking)

### Where the Council Clashes

- How much scenario content to preserve vs. discard (Expansionist wants full atlas; First Principles wants active recall)
- Whether step tables are the right primary structure for JPMs (Executor says extract what's there; First Principles says elevate decision points above rote steps)

### Blind Spots Caught

- No plan for EOP pathway knowledge (SRO competency core)
- Simulator operator instructions must be filtered out
- "Related exam" cross-linking points to wrong document
- No acknowledgment of what a wiki CAN'T teach (panel locations, physical actions)

### Recommendation

Build in two phases with distinct templates. Prove extraction before committing to template design. JPMs: step tables as backbone but elevate critical steps, decision points, and key indications. Scenarios: structure around critical tasks with collapsible reveals (not flat event tables), include EOP pathway maps, exclude sim operator instructions.

### The One Thing to Do First

Extract a single JPM manually from the PDF, write it into a wiki article by hand, and let that extraction reality drive the template and skill design.
