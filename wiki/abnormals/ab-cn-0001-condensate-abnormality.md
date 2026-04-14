---
title: "AB.CN-0001 — Condensate System Abnormality"
category: abnormals
status: draft
aliases:
  - AB.CN-0001
  - S2.OP-AB.CN-0001
---

# AB.CN-0001 — Condensate System Abnormality

## Purpose

Provides operator actions for responding to condensate system abnormalities, including SGFP trips and condensate pump trips.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q17</div>
SGFP trip at 100% power — immediate actions per AB.CN-0001: <span class="hi-exam">initiate a MANUAL Main Turbine load reduction to a MAXIMUM of <span class="val-alarm">66%</span> Turbine Power at a rate less than or equal to a MAXIMUM of <span class="val-alarm">15%</span>/MIN</span>. <span class="hi-trap">50% is NOT the correct target (each SGFP does not provide exactly 50% flow). 30%/MIN is the stator cooling water loss automatic turbine runback rate, NOT the AB.CN-0001 manual load reduction rate.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q64</div>
On a SGFP trip: <span class="hi-exam">DEHC will automatically initiate a turbine runback at <span class="val-trip">200%</span> per minute to 66% power</span>. The 2CN47 (23/24/25 Heater String Bypass valve) will immediately open and the polisher will be bypassed. <span class="hi-trap">Manual turbine runback from the DEHC panel uses a different rate of 15% per minute. On a condensate pump trip, the 2CN47 only opens if SGFP suction pressure lowers to less than <span class="val-alarm">320 psig</span>; on a SGFP trip, the 2CN47 opens regardless of suction pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q45</div>
SG level vs BF19 response during condensate/feedwater abnormalities.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q65</div>
On a condensate pump trip with only one pump running, <span class="hi-exam">SGFP suction pressure lowers first</span> (before SG NR levels). The immediate required action is to <span class="hi-exam">open 21-23 CN108s (Polisher Bypass Valves)</span> to restore SGFP suction pressure and prevent loss of the feedpumps. <span class="hi-trap">Reducing load is also required (to 30% max), but bypassing the polishers takes priority over load reduction. The CN108s do NOT open automatically on a condensate pump trip. The load reduction rate is 5%/min (not 15%/min, which is the SGFP trip runback rate).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-e</div>
Loss of SGFP at >70% power (Step 2.3): auto turbine runback <span class="hi-exam">fails</span>. Operator must verify auto runback NOT occurring (SGFP RUNBACK OPERATE red light NOT lit), then manually initiate load reduction at DEHC panel: toggle from <span class="hi-exam">%/HR to %/MIN</span>, set ramp rate to <span class="hi-exam">15%/min</span>, setter to <span class="hi-exam">66%</span>, select GO. Also: rods fail to insert in AUTO during downpower — take rods to MANUAL and insert.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
21CN22 LP FWH inlet valve fails closed. OHA G-22 FW HTR IN VLV TRIP & LVL HI. CRS enters AB.CN-0001. CRS reviews Attachment 2 for load limitations — load reduction required to <span class="hi-exam">1098 MWe</span> (about 2-3% downpower). If SGFP suction pressure < <span class="hi-exam">320 psig</span>, PO takes CAS actions to open 21-23 CN108s (polisher bypass).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q93</div>
On a condensate pump trip at 100% power: per AB.CN-0001, <span class="hi-exam">open 21-23CN108 (Polisher Bypass Valves) if SGFP suction pressure is less than <span class="val-alarm">320 psig</span></span>. Per Attachment 2, <span class="hi-exam">reduce Reactor Power to a maximum of <span class="val-alarm">85%</span></span>. <span class="hi-trap">265 psig is the CN47 automatic control setpoint (maintains minimum SGFP suction pressure), NOT the procedural threshold for opening CN108s. 75% is the power level for starting the third condensate pump per IOP-4, not the load reduction limit.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
21 SGFP trips on high thrust bearing oil pressure at 2% power (first-out annunciator: thrust bearing oil pressure high, locked in, will not clear). CRS enters AB.CN-0001 — immediate actions not met. RO reduces reactor power to <4% by inserting control rods. AFW pumps fail to auto-start on low SG levels — crew manually starts 21 and 22 motor-driven AFW pumps.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
23 Condensate Pump trips. SGFP suction pressure less than <span class="hi-exam">320 psig</span> — PO opens 21-23 CN108s (Polisher Bypass Valves). CRS evaluates Att 2, Section 4.0 — determines <span class="hi-exam">load reduction to 85% at <=5%/min</span> required. Crew enters AB.LOAD-0001 for load reduction.
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[Main Turbine]], [[AFW]]
- Related exam questions: [[2019 Q17]], [[2020 Q93]], [[2022 Q45]], [[2022 Q65]], [[2023 Q64]]
- Related JPMs: [[2022 JPM Sim-e]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2019 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]]
