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

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #3</div>
Entered from AB.COND-0001 during loss of condenser vacuum (Event 4). CRS directs load reduction to stabilize backpressure. RO calculates required boron addition, CRS verifies, RO commences boration. PO initiates load reduction using turbine load control at CRS-specified rate.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
AB.LOAD-0001 entered for orderly unit shutdown after 35 gpm RCS leak exceeds TS limits. RO develops reactivity plan for shutdown and initiates boration. PO initiates turbine load reduction to <span class="hi-exam">20%</span> at CRS-specified rate. During load reduction, RCS leak worsens to LBLOCA.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
AB.LOAD-0001 entered to perform a controlled <span class="hi-exam">5%/min load reduction to 85%</span> with 2 Condensate pumps and 3 Heater Drain pumps in service after 23 Condensate pump trip (per AB.CN-0001 Attachment 4). RO calculates boron addition and rate for the power reduction; RO initiates boration; PO initiates turbine load reduction at the CRS-specified rate. During the downpower a Charging Master Flow Controller failure occurs, then a 21 SG tube leak develops — leading sequentially to AB.CVC-0001, AB.SG-0001, and ultimately a manual reactor trip and SI on tube rupture.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
AB.LOAD-0001 entered (or AB.RC-0001 power reduction performed) following confirmed 20 gpm RCS leak exceeding TS 3.4.7.2 limits at 100% power. Operations Director directs <span class="hi-exam">30% per hour load reduction to 20%</span> in preparation for taking Unit 2 offline to investigate and repair the RCS leak. RO initiates boration; PO initiates turbine load reduction at the CRS-specified rate. <span class="hi-trap">During the controlled downpower the RCS leak escalates from 20 gpm to 150 gpm — PZR level cannot be maintained &gt;17%; CAS action requires manual reactor trip and SI before reaching FRHS-1 entry conditions.</span>
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]], [[Circ Water]]
- Related procedures: [[AB.GRID-0001 — Grid Disturbance]], [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.COND-0001 — Loss of Condenser Vacuum]]
- Related exam questions: [[2023 Q88]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2018 Scenario 2]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2016 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2020 NRC Operating Exam]]
