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

## Connections

- Related systems: [[AC Power]], [[Turbine-Generator]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]]
- Related exam questions: [[2023 Q15]], [[2023 Q88]]
- Related exam: [[2023 NRC Written Exam]]
