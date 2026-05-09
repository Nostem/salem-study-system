---
title: "S2.OP-IO.ZZ-0004 — Power Operation"
category: procedures
status: draft
aliases:
  - S2.OP-IO.ZZ-0004
  - Power Operation
---

# S2.OP-IO.ZZ-0004 — Power Operation

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for power operation on Salem Unit 2, including monitoring reactor power levels and taking corrective actions to maintain power within licensed limits.

## Key Limits

| Parameter | Value | Source |
|-----------|-------|--------|
| Maximum power level | 3459 MWt (100% RTP) | S2.OP-IO.ZZ-0004 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q43</div>
If an event causes reactor power to rise above 100% RTP (e.g., AFW turbine steam inlet valve failing open and injecting cold feedwater), the operator should <span class="hi-exam">reduce reactor power per S2.OP-IO.ZZ-0004</span> to prevent an overpower condition.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q51</div>
S2.OP-IO.ZZ-0004 (Power Operation) governs <span class="hi-exam">plant shutdowns from power</span> — used as the controlling procedure for power reductions. During a shutdown evolution at 35% power, an SGFP can be removed from service per S2.OP-SO.CN-0002 in support of the shutdown. A subsequent BF19 fail-open / FW Isolation event at 35% does not auto-start AFW pumps because SG NR levels remain &gt;<span class="val-alarm">9%</span>; operator action per EOP-TRIP-2 step 3 is required if total AFW flow &lt;<span class="val-normal">22E4 lbm/hr</span>.
</div>

## Connections

- Related systems: [[Rx Vessel & Internals]], [[RPS/SSPS]], [[Feed & Condensate]], [[AFW]]
- Related abnormals: [[AB.CA-0001 — Loss of Control Air]]
- Related procedures: [[S2.OP-SO.CN-0002 — Steam Generator Feed Pump Operation]]
- Related exam questions: [[2016 Q51]], [[2020 Q44]], [[2023 Q43]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]]
