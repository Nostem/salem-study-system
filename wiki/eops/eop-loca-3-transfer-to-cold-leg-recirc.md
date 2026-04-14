---
title: "EOP-LOCA-3 — Transfer to Cold Leg Recirculation"
category: eops
status: draft
aliases:
  - EOP-LOCA-3
  - cold leg recirculation
  - transfer to recirc
---

# EOP-LOCA-3 — Transfer to Cold Leg Recirculation

## Purpose

Provides direction for transferring ECCS suction from the RWST to the containment sump when RWST level reaches the Lo Level alarm setpoint. Entered from EOP-LOCA-1 when RWST Lo Level is reached during a LOCA.

## Key Actions / Information

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2023 #1</div>
Transfer to cold leg recirculation during LBLOCA. Time-critical operator actions from RWST Lo Level alarm:<br>
- <span class="hi-exam">Close 2SJ69 within 3.7 minutes</span><br>
- <span class="hi-exam">Stop 22 CS pump within 5.5 minutes</span><br>
- <span class="hi-exam">ECCS pumps verified in recirculation within 11.2 minutes</span><br>
Key steps: depress SUMP AUTO ARMED PB for 21 and 22 SJ44s, remove lockouts from 2SJ67/68/69, verify SJ44s open, close 2SJ67/68, close 2RH1/2RH2, open 21 and 22 SJ45s. Failure to transfer before RWST Lo-Lo (1.2 feet) results in loss of all pumped safety injection and containment spray.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q87</div>
During cold leg recirculation transfer: after sump valves open and RWST common suction (SJ69) closes, <span class="hi-exam">oscillating RHR pump amps, flows, and discharge pressures indicate cavitation from containment sump blockage</span>. The CRS transitions to <span class="hi-exam">EOP-APPX-7 (Containment Sump Blockage)</span>, NOT EOP-LOCA-5. <span class="hi-trap">LOCA-5 is for mechanical/electrical component failures causing loss of recirculation — sump blockage causing pump cavitation is APPX-7.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A5</div>
ECCS aligned for cold leg recirculation at the time of emergency classification escalation. Large Break LOCA with all three fission product barriers lost: 21SJ44 (Containment Sump Suction Valve) <span class="hi-exam">failed to close</span> when crew attempted to isolate RHR sump overflow — creating an <span class="hi-exam">unisolable leak path outside containment</span>. This is the basis for the Containment Barrier loss (CB2.L/CB3.L) in the General Emergency classification.
</div>

## Connections

- Related systems: [[ECCS]], [[Containment Spray]], [[RHR]]
- Related EOPs: [[EOP-APPX-7 — Containment Sump Blockage]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam questions: [[2020 Q87]]
- Related JPMs: [[2020 JPM SRO-A5]]
- Related scenarios: [[2023 Scenario 1]]
- Related exam: [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Operating Exam]]
