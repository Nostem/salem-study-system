---
title: "AB.GRID-0001 — Grid Disturbance"
category: abnormals
status: draft
aliases:
  - AB.GRID-0001
  - grid disturbance
---

# AB.GRID-0001 — Grid Disturbance

## Purpose

Provides operator actions for responding to grid disturbances, including voltage and reactive load changes when a generating unit is lost.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q15</div>
Loss of a Salem unit causes 500KV voltage to lower. The remaining unit's MVARs rise as it picks up a greater share of the reactive load on the grid.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q88</div>
Solar Magnetic Disturbance (SMD) > K-5 intensity with excess MVAR condition: per AB.GRID-0001 step 1.3, enter <span class="hi-exam">Attachment 2 (Solar Magnetic Disturbance)</span> and initiate load reduction to <span class="hi-exam"><= 77.6% (942 MWe)</span> at <span class="hi-exam">15% per min</span> using <span class="hi-exam">AB.LOAD-0001</span>. <span class="hi-trap">Trap: a reactor trip is NOT required for SMD conditions (trip is directed per Attachment 1 for frequency <= 57.55 Hz, which is a different condition). Also, AB.GRID-0001 alone is not sufficient — AB.LOAD-0001 must also be performed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q81</div>
<span class="hi-exam">Attachment 3 (Salem 500 KV Switchyard Low Voltage)</span>: if 500 KV Switchyard Voltage is <span class="hi-exam val-trip">&lt; 493 KV</span>, declare the associated off-site power source inoperable and initiate <span class="hi-exam">Station Load Curtailment</span> IAW OP-AA-108-107-1001. <span class="hi-trap">Trap: Attachment 4 (500 KV Grid Instability) directs Generator Load Reduction at 15%/min max as specified by the ESO — this is a different condition from low switchyard voltage. Only lines with voltage below 493 KV are declared inoperable (e.g., 492 KV is inoperable, 495 KV is not).</span>
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]], [[OP-AA-108-107-1001 — Electric System Emergency Operations]]
- Related exam questions: [[2023 Q15]], [[2023 Q88]], [[2020 Q81]]
- Related exam: [[2023 NRC Written Exam]], [[2020 NRC Written Exam]]
