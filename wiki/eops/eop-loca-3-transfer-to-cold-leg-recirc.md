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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q52</div>
After resetting ALL SECs in EOP-LOCA-3, <span class="hi-exam">the crew IS required to MANUALLY reset the 230V control centers</span> (even though 20 minutes after SEC actuation the lockout is automatically removed). If a subsequent blackout occurs on a 4KV vital bus with SI previously reset, <span class="hi-exam">ECCS pumps and safeguards equipment will NOT automatically start</span> — they must be <span class="hi-exam">manually operated</span> because different equipment is started on a SEC blackout loading than on a safeguards loading. <span class="hi-trap">Trap: A LBLOCA is in progress, so candidates may assume ECCS pumps will auto-start — but with SI/SECs reset, the SEC loads based on blackout loading, NOT safeguards loading.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q88</div>
CAS transition for sump blockage: when ECCS pumps are aligned to sump and <span class="hi-exam">erratic flow/pressure on BOTH trains indicates cavitation → transition to EOP-APPX-7 (CONTAINMENT SUMP BLOCKAGE)</span>. <span class="hi-trap">EOP-LOCA-5 is only for loss of recirculation NOT related to sump blockage.</span> During recirculation, <span class="hi-exam">RHR pump discharge provides the D/P to drive Containment Spray</span> (CS pumps take suction from the outlet of the RHR HXs, not from SI pump discharge).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q4</div>
ECCS realignment for cold leg recirculation is required as soon as the <span class="hi-exam">RWST Level LO alarm is FIRST validated</span> (IAW EOP-LOCA-1). 21SJ44 and 22SJ44 (Containment Sump Suction Valves) each serve a single RHR pump — <span class="hi-exam">with 21SJ44 closed, only 22 RHR pump can draw suction from the containment sump</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
Cold leg recirculation transfer after LBLOCA. <span class="hi-exam">CT#2 (CT-36) — time-critical</span>: (1) Open 21SJ44 and 22SJ44, depress sump auto arm pushbuttons when containment sump >62% lights lit. (2) Remove lockouts for 2SJ67, 2SJ68, 2SJ69. (3) <span class="hi-exam">Close 2SJ69 within ~3.7 min</span> of RWST lo alarm. (4) <span class="hi-exam">Stop 22 CS pump within ~5.5 min</span>. (5) Close 21 and 22RH19s. Select flow path for all 4KV vital buses energized → Step 11. Close 2SJ67 and 2SJ68. Open 22SJ45, then 21SJ45. Close 2SJ30, 2SJ1, 2SJ2. <span class="hi-exam">Place 21RH29 and 22RH29 in manual and ensure closed (Step 15) within ~11.2 min</span>. PO removes lockout from 2SJ30.
</div>

## Connections

- Related systems: [[ECCS]], [[Containment Spray]], [[RHR]], [[SECs]], [[4KV]], [[460/230V AC]]
- Related EOPs: [[EOP-APPX-7 — Containment Sump Blockage]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam questions: [[2018 Q4]], [[2019 Q52]], [[2019 Q77]], [[2019 Q88]], [[2020 Q87]]
- Related JPMs: [[2020 JPM SRO-A5]]
- Related scenarios: [[2018 Scenario 2]], [[2023 Scenario 1]]
- Related exam: [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Operating Exam]]
