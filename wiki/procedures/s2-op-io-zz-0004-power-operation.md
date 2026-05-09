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

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
Crew receives the unit at 76% power, EOL with the procedure open and marked up complete to <span class="hi-exam">Step 4.1.21</span>. Power had been reduced last week to 48% for repairs on 21 SGFP casing. The crew is directed to raise power to <span class="hi-exam">89% @ 10%/hr IAW S2.OP-IO.ZZ-0004</span>. RO provides reactivity plan and ensures rod control is in auto. PO initiates a turbine power ascension at 10%/hr; must change Main Turbine load change rate from <span class="hi-exam">15%/min to 10%/hr</span> (the turbine is set up for a SGFP runback when crew takes the watch). RO either announces auto rod movement or withdraws rods in manual to maintain Tavg on program.
</div>

## Connections

- Related systems: [[Rx Vessel & Internals]], [[RPS/SSPS]], [[Feed & Condensate]], [[AFW]]
- Related abnormals: [[AB.CA-0001 — Loss of Control Air]]
- Related procedures: [[S2.OP-SO.CN-0002 — Steam Generator Feed Pump Operation]]
- Related exam questions: [[2016 Q51]], [[2020 Q44]], [[2023 Q43]]
- Related scenarios: [[2017 Scenario 7]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2017 NRC Operating Exam]]
