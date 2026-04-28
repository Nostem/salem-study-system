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

## Connections

- Related systems: [[Excore NIs]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related JPMs: [[2018 JPM RO-A3]], [[2022 JPM RO-A3]]
- Related exam: [[2018 NRC Operating Exam]], [[2022 NRC Operating Exam]]
