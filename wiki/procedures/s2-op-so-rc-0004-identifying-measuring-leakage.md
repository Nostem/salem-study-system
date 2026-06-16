---
title: "S2.OP-SO.RC-0004 — Identifying and Measuring Leakage"
category: procedures
status: draft
aliases:
  - S2.OP-SO.RC-0004
  - SO.RC-0004
  - SO.RC-4
  - Identifying and Measuring Leakage
  - containment sump leak rate procedure
---

# S2.OP-SO.RC-0004 — Identifying and Measuring Leakage

> DRAFT — Reconstructed from exam materials

## Purpose

Operating procedure for identifying and quantifying RCS leakage. Provides directions for trending and quantifying both unidentified leakage (containment sump) and identified leakage (PRT, leak-off lines), and for entering Tech Spec 3.4.7.2 actions when leak-rate thresholds are exceeded.

## Key Sections / Information

### Section 5.3 — Containment Sump Leak Rate (from Sump Pump Cycling)

When OHA C-2 CNTMT SUMP PMP START annunciates and a Containment Sump Pump auto starts, this section calculates the unidentified leak rate to the containment sump from the elapsed time between successive sump-pump start cycles.

| Step | Action |
|------|--------|
| 5.3.1 | IF either Containment Sump Pump AUTO starts, THEN RECORD the operating sump pump number and time of pump start on Attachment 1, Section 2.0. |
| 5.3.2 | CALCULATE elapsed time in minutes between start time and previous Containment Sump Pump stop time AND RECORD on Attachment 1, Section 2.0. |
| 5.3.3 | ENSURE no draining, sampling, or liquid additions to Containment Sump have occurred during selected time frame. |
| 5.3.4 | CALCULATE Containment Sump Leak Rate using Attachment 3 (chart of elapsed-time vs. leak rate). |
| 5.3.5 | RECORD Containment Sump Pump stop time and date on Attachment 1, Section 2.0. |
| 5.3.6 | IF leakage to Containment Sump exceeds 1.0 gpm AND Unit in Modes 1-4, THEN: A. INITIATE S2.OP-ST.RC-0008(Q), Reactor Coolant Water Inventory Balance; B. REFER to Technical Specification 3.4.7.2. |
| 5.3.7 | IF leakage to Containment Sump exceeds 0.85 gpm, THEN INITIATE Section 5.6 of this procedure. |

### Action Thresholds (from Section 5.3)

| Leak Rate | Required Action |
|-----------|-----------------|
| ≤ 0.85 gpm | Continue trending; no immediate action |
| &gt; 0.85 gpm | <span class="hi-exam">Initiate Section 5.6 of SO.RC-0004</span> |
| &gt; 1.0 gpm | <span class="hi-exam">Initiate S2.OP-ST.RC-0008 RCS Water Inventory Balance + REFER to TS 3.4.7.2</span> |

### Attachment 3 — Sump Leak Rate Chart

Graphical conversion from elapsed time between sump-pump cycles (minutes) to leak rate (gpm). Increments are in 50-minute steps; extrapolation is required between gridlines. The leak rate determined from the chart MUST be quantified to be within the bounding numbers above so the correct action threshold is identified.

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 RO-A1-1</div>
At 0015 OHA C-2 CNTMT SUMP PMP START annunciates with the previous sump pump stop time of 1855 yesterday. Elapsed time = <span class="hi-exam">320 minutes</span>. Per Attachment 3, 320 minutes corresponds to ~<span class="hi-exam">0.9 gpm</span> — between the 0.85 gpm and 1.0 gpm thresholds. Required action: initiate <span class="hi-exam">Section 5.6</span> only; do NOT initiate S2.OP-ST.RC-0008 and do NOT refer to TS 3.4.7.2 because leakage does not exceed 1.0 gpm.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 RO-A1-1</div>
At 0750 OHA C-2 CNTMT SUMP PMP START annunciates with the previous sump pump stop time of 1510 yesterday. Elapsed time = <span class="hi-exam">1000 minutes</span>. Per Attachment 3 (page 1 of 2), the 1000-minute line crosses the <span class="hi-exam">0.3 gpm</span> leak-rate line — below both thresholds. Required action: take NO action threshold (leakage does NOT exceed 0.85 gpm, so Section 5.6 is not initiated; does NOT exceed 1.0 gpm, so S2.OP-ST.RC-0008 / TS 3.4.7.2 are not required).
</div>

## Connections

- Related systems: [[RCS]], [[Containment]]
- Related procedures: [[AB.RC-0001 — Reactor Coolant System Leak]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related JPMs: [[2016 JPM RO-A1-1]], [[2014 JPM RO-A1-1]]
- Related exam: [[2016 NRC Operating Exam]], [[2014 NRC Operating Exam]]
