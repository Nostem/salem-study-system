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

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
Entered from EOP-LOCA-1 after SI termination criteria are met (subcooling &gt;0 °F, AFW flow &gt;22E4 lbm/hr or SG NR &gt;9%, RCS pressure stable or rising, PZR level &gt;11%). RO resets SI/Phase A/Phase B isolations if not previously reset; opens 21 and 22CA330s; PO resets 2C SEC and 230V control centers. RO stops all but one charging pump; aligns charging suction to RWST; opens 2CV139 and 2CV140; <span class="hi-exam">shuts BIT isolation valves 2SJ4, 2SJ5, 2SJ12, 2SJ13</span>; shuts 2CV55 charging flow control valve; opens <span class="hi-exam">2CV68 and 2CV69 charging discharge valves</span>. <span class="hi-trap">Discriminating step: opening 2CV68/2CV69 reveals an unisolable RCS leak — leak grows to ~2000 gpm equivalent. RO adjusts 2CV55 to maintain PZR level &gt;25% but level cannot be stabilized.</span> Per CAS, RO re-opens BIT isolation valves 2SJ4/5/12/13 and shuts normal charging line isolation valves 2CV68/2CV69. CRS transitions to <span class="hi-exam">EOP-LOCA-2, Post LOCA Cooldown and Depressurization</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q91</div>
EOP-TRIP-3 (SI Termination) <span class="hi-exam">terminates Containment Spray</span>; it is reached from EOP-LOCA-1 Step 9 when subcooling, SG NR level, and PZR level criteria are met. CFCU speed is not set here (governed by the SOP after exiting to the IOP). See [[Containment Spray]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Entered to terminate an Inadvertent SI (caused by a 2nd PZR pressure channel failing low). <span class="hi-exam">CT#1 — stop all but 21 or 22 charging pump within 23 minutes of SI initiation</span>; reset SI/Phase A/Phase B, reset SECs and 230V control centers, restore normal charging alignment (shut BIT isolation 2SJ4/2SJ5/2SJ12/2SJ13, shut 2CV55, open 2CV68/2CV69), and with RCS pressure &gt; 1540 psig stop both SI and both RHR. <span class="hi-exam">CT#2 — re-establish normal letdown within 45 minutes of the inadvertent SI</span> (one letdown orifice at 300 psig, 2CV18 in auto). Both CTs are time-critical (Engineering Eval S-2-RC-MEE-1108: failure leads to PZR overfill / water relief through PORVs/Safeties). A 24 SG tube rupture then initiates → CRS transitions to EOP-SGTR-1.
</div>

## Connections

- Related systems: [[ECCS]], [[CFCUs]], [[RPS/SSPS]], [[RHR]], [[CVCS]]
- Related EOPs: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]], [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-LOSC-1 — Loss of Secondary Coolant]]
- Related exam questions: [[2020 Q25]], [[2023 Q38]], [[2023 Q23]], [[2023 Q76]], [[2015 Q91]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2015 Scenario 2]]
- Related exam: [[2016 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]]
