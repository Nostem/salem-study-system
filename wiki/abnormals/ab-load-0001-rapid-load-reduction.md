---
title: "AB.LOAD-0001 — Rapid Load Reduction"
category: abnormals
status: draft
aliases:
  - AB.LOAD-0001
  - rapid load reduction
---

# AB.LOAD-0001 — Rapid Load Reduction

## Purpose
Provides operator actions for performing a rapid load reduction when directed by other abnormal procedures or when plant/grid conditions require a fast but controlled power decrease.

## Entry Conditions
- Directed by other abnormal procedures (e.g., AB.GRID-0001 during solar magnetic disturbance)
- Plant or grid conditions requiring rapid power reduction

## Key Actions
- Perform load reduction at the rate specified by the directing procedure
- Coordinate turbine load reduction with reactor power reduction
- Monitor critical plant parameters during the transient

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q64</div>
AB.CW-0001 Step 3.10 directs load reduction to <span class="hi-exam">≤ 83% Reactor Power</span> IAW AB.LOAD-0001 <span class="hi-exam">to prevent flashing in Condensate System</span> when circulators are lost in the same condenser shell. <span class="hi-trap">83% is the CW malfunction limit — different from the 85% limit in AB.CN-0001 for condensate abnormalities.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q88</div>
During a Solar Magnetic Disturbance (SMD) > K-5 intensity with excess MVAR condition, AB.GRID-0001 Attachment 2 directs a load reduction to <span class="hi-exam"><= 77.6% (942 MWe)</span> at <span class="hi-exam">15% per min</span> using AB.LOAD-0001. <span class="hi-trap">Trap: both AB.GRID-0001 AND AB.LOAD-0001 are required — AB.GRID-0001 alone is insufficient.</span>
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]], [[Circ Water]]
- Related procedures: [[AB.GRID-0001 — Grid Disturbance]], [[AB.CW-0001 — Circulating Water Malfunction]]
- Related exam questions: [[2020 Q64]], [[2023 Q88]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]]
