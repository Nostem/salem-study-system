---
title: "EOP-LOCA-1 — Loss of Reactor or Secondary Coolant"
category: eops
status: draft
aliases:
  - EOP-LOCA-1
  - loss of reactor coolant
  - loss of secondary coolant
---

# EOP-LOCA-1 — Loss of Reactor or Secondary Coolant

## Purpose

Primary EOP for response to a loss of reactor coolant or secondary coolant accident. Entered from EOP-TRIP-1 when RCS or secondary leak conditions are identified.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q37</div>
After performing actions in EOP-LOCA-1 including SI reset and SEC reset, if a subsequent LOOP occurs, EDGs will auto-start in SEC Mode 2 (Blackout only). Only charging pumps are auto-sequenced — other safeguard loads (SI pumps, RHR pumps, CFCUs) must be manually started since SI/SECs were previously reset.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q58</div>
Step 17 — Containment Hydrogen Concentration: <span class="hi-exam">only one hydrogen recombiner may be placed in service</span> when H2 concentration is between >0.5% and <4%. Operation of both recombiners is not permitted. If H2 >4% (6.0% in dry air = upper limit of recombiner operability), consult TSC for additional recovery actions. Purpose: prevent flammable mixture that could cause pressure excursion challenging containment integrity.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
PZR vapor space leak (SBLOCA) with RCS at <span class="hi-exam">1450 psig</span>: both <span class="hi-exam">charging pumps AND SI pumps are injecting</span> (1450 psig is below the shutoff head of both charging pumps at 2670 psig and SI pumps at 1520 psig). With subcooling at 10°F, PZR level 30% and rising, and RCS pressure stable — <span class="hi-exam">SI termination criteria in EOP-LOCA-1 are met</span>, so the next procedure transition is to <span class="hi-exam">EOP-TRIP-3 (SI Termination)</span>, not directly to EOP-LOCA-2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q77</div>
Step 7.4 (stopping containment spray pumps) is a <span class="hi-exam">continuous action step</span>. Per OP-SA-108-101-2002 step 2.16.2: <span class="hi-exam">continuous action steps should NOT be performed when a Red or Purple path FRP is in progress</span>. Even though containment pressure is below 13 psig and conditions for stopping CS pumps are met, a valid PURPLE path on Thermal Shock takes priority — <span class="hi-exam">transition to the FRP, do NOT perform Step 7.4</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-c</div>
Step 14 — accumulator isolation: when at least two RCS T-Hots < <span class="hi-exam">405F</span>, remove lockout from 21-24 SJ54 and close all. If <span class="hi-exam">24SJ54 fails to close</span> (alternate path), vent the unisolated accumulator: open <span class="hi-exam">2NT35 (N2 HDR Valve)</span> and <span class="hi-exam">24SJ93 (N2 Supply Valve)</span>, verify accumulator pressure reaches zero.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Entered from EOP-TRIP-1 following LBLOCA based on <span class="hi-exam">containment pressure &gt;4 psig</span> (or two or more Table J channels not normal). In LOCA-1: RO confirms all RCPs stopped, PO maintains AFW flow. RO resets Phase A, opens 21 and 22 CA330s. RO resets both trains of SI, PO resets SECs. PO stops unloaded EDGs. <span class="hi-exam">22 RHR pump trips</span> during LOCA-1 — CRS determines no RHR pumps available and transitions to EOP-LOCA-5 (loss of emergency recirculation). Possible <span class="hi">CFST Purple Path on Thermal Shock</span> (FRTS-1) during LOCA-1 — enter/exit with no actions performed.
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Containment]]
- Related exam questions: [[2020 Q18]], [[2023 Q37]], [[2023 Q58]], [[2023 Q76]], [[2023 Q77]]
- Related JPMs: [[2022 JPM Sim-c]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
