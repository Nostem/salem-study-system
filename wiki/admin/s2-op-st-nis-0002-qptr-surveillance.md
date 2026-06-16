---
title: "S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance"
category: procedures
status: draft
aliases:
  - S2.OP-ST.NIS-0002
  - QPTR surveillance
  - quadrant power tilt ratio surveillance
---

# S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance

## Purpose

Surveillance procedure for manually calculating Quadrant Power Tilt Ratio (QPTR) using excore Power Range NIS detector currents, to verify compliance with TS 3.2.4 (QPTR limit of 1.02).

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 RO-A3</div>
Manual QPTR calculation at 100% power with dropped rod 204: N42 quadrant shows highest power tilt — N42T = <span class="hi-exam">1.025</span>, N42B = <span class="hi-exam">1.023</span> (+/- 0.002). Maximum Power Tilt exceeds <span class="hi-exam">1.02</span> limit, requiring entry into <span class="hi-exam">TS 3.2.4</span>. Alternate path JPM — data drives an UNSAT result. OHAs E-46 (LOWER SECT DEV ABV 50% PWR) and E-38 (UPPER SECT DEV ABV 50% PWR) illuminated as initial conditions.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A3</div>
Manual QPTR calculation procedure: for each upper and lower detector (N41-N44), divide measured current by the REM 100% current value to get the detector ratio. Sum ratios, divide by number of operable detectors (4) to get average. Divide each detector ratio by average to get the power tilt. If Maximum Power Tilt exceeds <span class="hi-exam">1.02</span>, refer to <span class="hi-exam">TS LCO 3.2.4</span> and record surveillance as UNSAT. A dropped rod (e.g. 2D4) causes asymmetric flux distribution resulting in QPTR >1.02 in the affected quadrant (N42).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 RO-A1-2</div>
Manual QPTR with dropped rod 204 and OHA E-46 locked in. NI currents (Upper/Lower): N41 190/200, N42 200/215, N43 180/175, N44 200/205. After the ratio-sum-average-tilt calculation, the highest Maximum Power Tilt remains <span class="hi-exam">&lt; 1.02</span>, so the surveillance is marked <span class="hi-exam">SAT</span> and TS 3.2.4 is NOT entered. Contrast with the 2018/2022 QPTR JPMs whose data drove an UNSAT result — a dropped rod does not automatically yield QPTR &gt; 1.02.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A1-2</div>
SRO independent review of the completed S1.OP-ST.NIS-0002 (same data as 2014 RO-A1-2). The reviewer verifies all four detectors' calculations, confirms no Maximum Power Tilt exceeds <span class="hi-exam">1.02</span>, determines the surveillance result is <span class="hi-exam">SAT</span> with no discrepancies/required actions, and completes Attachment 4 for SM/CRS review.
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related procedures: [[AB.ROD-0002 — Dropped Rod]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related JPMs: [[2018 JPM RO-A3]], [[2022 JPM RO-A3]], [[2014 JPM RO-A1-2]], [[2014 JPM SRO-A1-2]]
- Related exam: [[2018 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Operating Exam]]
