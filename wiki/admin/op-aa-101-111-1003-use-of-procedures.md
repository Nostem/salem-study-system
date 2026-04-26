---
title: "OP-AA-101-111-1003 — Use of Procedures"
category: admin
status: draft
aliases:
  - OP-AA-101-111-1003
  - use of procedures
---

# OP-AA-101-111-1003 — Use of Procedures

## Purpose

Administrative procedure governing the proper use of Emergency Operating Procedures (EOPs), including rules of usage for CFST monitoring, functional restoration procedure transitions, and continuous action steps.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q100</div>
EOP-TRIP-1 contains <span class="hi-exam">specific transitions to EOP-FRHS-1 (Step 20) and EOP-FRSM-1 BEFORE CFST monitoring begins at Step 30</span>. These are procedure-directed transitions that occur within the body of EOP-TRIP-1 — they are NOT CFST-based functional restoration transitions. <span class="hi-trap">Trap: CFST monitoring does not begin until Step 30 of EOP-TRIP-1, but EOP-FRHS-1 and EOP-FRSM-1 have explicit step transitions earlier in TRIP-1. Do not confuse procedure-directed transitions (before Step 30) with CFST-based FRP transitions (after Step 30).</span>
</div>

### Continuous Action Verbs (Step 4.2.9)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q74</div>
Salem EOPs' Continuous Action Steps are either surrounded by a shaded box or contain one of three <span class="hi-exam">continuous action verbs: CONTROL, MAINTAIN, and MONITOR</span>. <span class="hi-trap">Trap: ADJUST, MODIFY, and VERIFY are NOT continuous action verbs — they are common distractors.</span>
</div>

### EOP Usage Rules (Section 4.2.5)

| Rule | Description | Source |
|------|-------------|--------|
| Continuous required actions | Apply as soon as the immediate actions are verified | OP-AA-101-111-1003 |
| CFST monitoring | Directed by EOP-TRIP-1 Step 30; functional restoration transitions apply only after this step | OP-AA-101-111-1003 |
| FRHS-1 and FRSM-1 early transitions | EOP-TRIP-1 Steps 20 and earlier specifically direct these transitions before CFST monitoring begins | EOP-TRIP-1 |
| Continuous action steps during FRPs | Should NOT be performed when a Red or Purple path FRP is in progress (per step 2.16.2) | OP-AA-101-111-1003 |

### CFST Monitoring Frequency

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q47</div>
With verified <span class="hi-exam">Red and Purple CFSTs</span>, OP-AA-101-111-1003 states that the CFSTs should be monitored <span class="hi-exam">continuously</span>. If no condition more serious than YELLOW is encountered, CFSTs may be monitored every <span class="hi-exam">10-20 minutes</span>. <span class="hi-trap">Trap: 10-20 minutes is for Yellow-only conditions — any Red or Purple CFST requires continuous monitoring.</span>
</div>

### CSF and FRP Implementation Priority

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q46</div>
CSF Hierarchy per OP-AA-101-111-1003 (high to low): <span class="hi-exam">SHUTDOWN MARGIN, CORE COOLING, HEAT SINK, THERMAL SHOCK, CONTAINMENT ENVIRONMENT, COOLANT INVENTORY</span>. CFST Color Hierarchy (high to low): <span class="hi-exam">Red, Purple, Yellow, Green</span>. When multiple CSFs have challenges, <span class="hi-exam">color takes precedence over hierarchy position</span>. A Red path for a lower-priority CSF overrides a Purple path for a higher-priority CSF. Example: Heat Sink Red + Shutdown Margin Purple → address Heat Sink first.
</div>

## Connections

- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[OP-SA-108-101-2000 — Emergency/Abnormal Operating Procedure Program]]
- Related exam questions: [[2018 Q47]], [[2019 Q46]], [[2020 Q74]], [[2020 Q100]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]]
