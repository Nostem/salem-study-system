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
<div class="callout-label">Exam — 2023 Q88</div>
During a Solar Magnetic Disturbance (SMD) > K-5 intensity with excess MVAR condition, AB.GRID-0001 Attachment 2 directs a load reduction to <span class="hi-exam"><= 77.6% (942 MWe)</span> at <span class="hi-exam">15% per min</span> using AB.LOAD-0001. <span class="hi-trap">Trap: both AB.GRID-0001 AND AB.LOAD-0001 are required — AB.GRID-0001 alone is insufficient.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
Entered for turbine load reduction to less than 80% power due to condenser DTs exceeding <span class="hi-exam">27 F</span> following loss of 21A-23A CW pumps. RO initiates boration IAW S2.OP-SO.CVC-0006. PO initiates turbine load reduction IAW S2.OP-SO.TRB-0001.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
Entered for load reduction to <span class="hi-exam">85%</span> following 23 Condensate Pump trip. RO initiates boration IAW S2.OP-SO.CVC-0006. PO initiates load reduction using turbine load control IAW S2.OP-SO.TRB-0001. RO maintains Tavg on program IAW Attachment 3. RO energizes all PZR heaters.
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]], [[Circ Water]]
- Related procedures: [[AB.GRID-0001 — Grid Disturbance]], [[AB.CW-0001 — Circulating Water Malfunction]]
- Related exam questions: [[2023 Q88]]
- Related scenarios: [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2023 NRC Written Exam]], [[2020 NRC Operating Exam]]
