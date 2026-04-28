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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q62</div>
Per AB.GRID-0001 CAS: 500 KV Switchyard voltage <span class="hi-exam val-trip">&lt; 493 KV</span> on any line → declare that A.C. Circuit (Off-Site Power Source) inoperable. With Orchard at 492 KV, New Freedom at 494 KV, and Salem-Hope Creek Tie at 497 KV: <span class="hi-exam">ONLY the Orchard line is inoperable</span> (492 &lt; 493). The other two lines remain operable (494 and 497 are both &ge; 493).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q62</div>
AB.GRID-0001 Attachment 2 (Solar Magnetic Disturbance) turbine load reduction: with turbine controls in OPERATOR MODE - AUTO, the PO will depress <span class="hi-exam">SMD#1 RUNBACK then GO</span> on the TURBINE E-H CONTROL & STATUS touch screen monitor to initiate the generator load reduction to &lt; 942 MW (~77.6% RTP) at 15%/min. <span class="hi-trap">SMD#1 RUNBACK alone is NOT sufficient — the GO button must also be depressed because SMD#1 RUNBACK is a preset setter position/ramp rate. Also, SMD#2 RUNBACK is a different preset — not used for this Attachment 2 evolution.</span>
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]], [[OP-AA-108-107-1001 — Electric System Emergency Operations]]
- Related exam questions: [[2018 Q62]], [[2019 Q62]], [[2020 Q81]], [[2023 Q15]], [[2023 Q88]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]]
