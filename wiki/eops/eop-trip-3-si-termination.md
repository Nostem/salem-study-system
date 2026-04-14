---
title: "EOP-TRIP-3 — SI Termination"
category: eops
status: draft
aliases:
  - EOP-TRIP-3
  - SI termination
---

# EOP-TRIP-3 — SI Termination

## Purpose

Provides guidance for terminating Safety Injection when SI termination criteria are met. Entered from EOP-TRIP-1 or other EOPs when conditions allow SI to be secured.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q38</div>
Step 1 of EOP-TRIP-3 resets both trains of SI and resets all SECs. This is required to regain manual control of equipment that was auto-started by the SECs (e.g., CFCUs — must reset SI AND SECs to return CFCUs from LOW speed to HIGH speed operation).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q23</div>
EOP-TRIP-3 uses a Concurrent Step symbol at Step 1 — initiate the stated action while continuing with the existing flow path.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
PZR vapor space SBLOCA with RCS pressure stable at 1450 psig, 10°F subcooling, PZR level 30% rising: these conditions meet SI termination criteria in EOP-LOCA-1, so the <span class="hi-exam">next procedure transition is to EOP-TRIP-3</span>. In EOP-TRIP-3, the crew reduces ECCS injection flow. Since the leak is unisolable, RCS pressure will lower when ECCS flow is reduced, and EOP-TRIP-3 will then transition the crew to <span class="hi-exam">EOP-LOCA-2</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q25</div>
CAS in EOP-TRIP-3: <span class="hi-exam">if PZR level cannot be maintained > 11%, start ECCS pumps as necessary and GO TO EOP-LOCA-1</span>. From LOCA-1, alarms indicating a LOCA outside containment (2R41D Plant Vent in alarm, RHR sump overflow, RHR sump pump starts) direct transition to <span class="hi-exam">EOP-LOCA-6</span>. <span class="hi-trap">There is no direct transition from TRIP-3 to LOCA-6 — the path is TRIP-3 CAS → LOCA-1 → LOCA-6.</span> Steps 7 and 9 of TRIP-3 direct transitions to LOCA-2, but these would already have been completed by the time the letdown restoration step is reached.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
Entered from EOP-LOSC-1 following feedwater line break isolation. RO resets SI, Phase A, Phase B. Resets all SECs and 230V control centers. <span class="hi-exam">Stops all but one charging pump, stops SI pumps, stops RHR pumps.</span> Restores normal charging alignment: opens 2CV139 and 2CV140, closes 2SJ4/5/12/13, closes 2CV55, opens 2CV68 and 2CV69. Verifies <span class="hi-exam">RCS pressure &gt;1540 psig</span>. Restores normal letdown: opens 2CV2 and 2CV277, opens 2CV7, adjusts 2CV55 to maintain &gt;87 gpm, opens one letdown orifice, adjusts 2CV18 to maintain letdown pressure at <span class="hi-exam">300 psig</span>.
</div>

## Connections

- Related systems: [[ECCS]], [[CFCUs]], [[RPS/SSPS]], [[RHR]], [[CVCS]]
- Related EOPs: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-LOSC-1 — Loss of Secondary Coolant]]
- Related exam questions: [[2020 Q25]], [[2023 Q38]], [[2023 Q23]], [[2023 Q76]]
- Related scenarios: [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2020 NRC Operating Exam]]
