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

## Connections

- Related systems: [[Feed & Condensate]], [[Main Turbine]]
- Related exam questions: [[2022 Q45]], [[2022 Q65]], [[2023 Q64]]
- Related JPMs: [[2022 JPM Sim-e]]
- Related exam: [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
