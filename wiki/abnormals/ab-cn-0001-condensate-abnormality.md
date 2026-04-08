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

## Connections

- Related systems: [[Feedwater and Condensate]], [[Turbine-Generator]]
- Related exam questions: [[2023 Q64]]
- Related exam: [[2023 NRC Written Exam]]
