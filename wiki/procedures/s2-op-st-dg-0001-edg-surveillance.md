---
title: "S2.OP-ST.DG-0001 — Emergency Diesel Generator Surveillance Test"
category: procedures
status: draft
aliases:
  - S2.OP-ST.DG-0001
  - EDG Surveillance Test
---

# S2.OP-ST.DG-0001 — Emergency Diesel Generator Surveillance Test

## Purpose

Provides direction for performing monthly and 18-month surveillance testing on emergency diesel generators, including load testing with synchronization to the grid.

## Key Precautions & Limitations

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q89</div>
P&L 2.1.6: <span class="hi-exam">Only one DG per Unit may be synchronized to the grid at a time.</span> This prohibition minimizes any potential common failure resulting from undetected interdependence among diesel generator units (Reg Guide 1.108, Section C.2.b). For common mode failure testing across both units, the most expeditious compliant method is <span class="hi-exam">one EDG per unit simultaneously</span> (e.g., 1B and 2B at the same time). <span class="hi-trap">Running multiple EDGs on the same unit simultaneously violates this P&L, even during urgent common mode failure testing.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q50</div>
Step 4.3.8.1.c Caution: After closing the generator output breaker, immediately raise generator load to <span class="hi-exam">&ge; 500 KW</span> to prevent <span class="hi-exam">tripping the output breaker on reverse power</span>. <span class="hi-trap">The concern at low load is reverse power trip, not exhaust fire. Oil accumulation in the exhaust system from low load operation is a separate P&L concern (P&L 2.19) from S1.OP-SO.DG-0001 regarding gradual loading to avoid exhaust fire.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q89</div>
TS 3.8.1.1 common mode failure: when an EDG fails due to a component (e.g., K1C relay) and the same component is installed in other EDGs, a <span class="hi-exam">common mode failure exists or cannot be ruled out</span>. Action b.3 requires performing an <span class="hi-exam">operability run within 24 hours</span> on the remaining operable EDGs. Action b.4 requires restoring the inoperable EDG within <span class="hi-exam">72 hours</span>. <span class="hi-trap">Common mode failure does not automatically make all EDGs inoperable — TS 3.0.3 does NOT apply because action "e" exists for two or more inoperable diesels.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q42</div>
EDG load test key values: to prevent tripping the DG Breaker on reverse power, generator load must be IMMEDIATELY raised to greater than a minimum of <span class="hi-exam">500 KW</span> after the breaker is closed. The 2A EDG may NOT exceed its <span class="hi-exam">2600 KW Continuous Load Rating</span> during the load test. P&L also states the EDG is rated to <span class="hi-exam">2750 KW for 2000 hours (2681 KW Local)</span>. When UNLOADING, maintain generator load > <span class="hi-exam">200 KW</span> until breaker is opened. <span class="hi-trap">Trap: 500 KW is for LOADING (breaker closure), 200 KW is for UNLOADING (before breaker opening). 2600 KW is Continuous rating, 2750 KW is 2000-hour rating — candidates confuse these.</span>
</div>

## Surveillance Test Steps

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q48</div>
Step 5.3.11: When EDG is paralleled to the bus for load testing, <span class="hi-exam">Voltage Control Switch adjusts KVAR (reactive) load</span>. To raise KVAR OUT from 1200 to 1400-1500 KVAR OUT, use <span class="hi-exam">Raise on the Voltage Control Switch</span>. Speed Control Switch adjusts KW (real) load, NOT reactive load. <span class="hi-trap">Speed control and voltage control functions are easily confused when a generator is paralleled to the grid.</span>
</div>

## Connections

- Related systems: [[EDGs]]
- Related tech specs: [[TS 3/4.8 — Electrical]]
- Related exam questions: [[2018 Q42]], [[2018 Q60]], [[2020 Q48]], [[2022 Q50]], [[2022 Q89]], [[2023 Q89]]
- Related exam: [[2018 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
