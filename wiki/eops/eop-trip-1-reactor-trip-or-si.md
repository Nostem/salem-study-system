---
title: "EOP-TRIP-1 — Reactor Trip or Safety Injection"
category: eops
status: draft
aliases:
  - EOP-TRIP-1
  - reactor trip or safety injection
---

# EOP-TRIP-1 — Reactor Trip or Safety Injection

## Purpose

Entry procedure for reactor trip or safety injection events. Provides immediate operator actions and diagnostic steps following a reactor trip, including verification of safeguard valve alignment and containment spray actuation status.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q1</div>
Referenced for entry on manual reactor trip. Step 12 covers Safeguard Valve Alignment.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q21</div>
Used to assess containment spray actuation status.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q83</div>
Per AB.CR-0001, <span class="hi-exam">EOPs (including EOP-TRIP-1) are NOT applicable</span> during Control Room Evacuation — they should be used for information only or as directed by the TSC.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS directs <span class="hi-exam">actuate SI and return to EOP-TRIP-1</span> when PZR level cannot be maintained > 4% or subcooling reaches 0 degrees F. This is the correct transition — TRIP-4 does NOT direct entry into EOP-LOCA-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q93</div>
Entry from CW malfunction: per AB.CW-0001, with <span class="hi-exam">4 or more circulators out of service at &ge;P-10 power</span>, trip the reactor and enter EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q3</div>
Step 12, Safeguard Valve Alignment: check <span class="hi-exam">2CC1 SAFEGUARDS ACTUATION Bezels — Red light LIT = train actuated, OUT = failed</span>. On 2RP4, lights OUT = component failed to reposition. If any safeguards valve not in required position, <span class="hi-exam">place valves in safeguards position manually</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q42</div>
CS pump manual start requires <span class="hi-exam">SECs to be blocked/reset first</span>. The SEC load sequencer overrides manual keyswitch control.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-f</div>
Step 9 — CNMT Spray/Phase B actuation during LBLOCA: containment pressure NOT < <span class="hi-exam">15 psig</span> → manually initiate Phase B and Spray using safeguards key switches on 2CC1. Alternate path: Phase B valves (<span class="hi-exam">2CC131, 2CC190</span>) fail to auto-close and NaOH valves (<span class="hi-exam">2CS16, 2CS17</span>) fail to auto-open on CS signal. Per Step 9.e, manually reposition valves to safeguards positions.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[ECCS]], [[Containment Spray]]
- Related procedures: [[S2.OP-AR.ZZ-0004 — Alarm Response Procedure]], [[AB.CR-0001 — Control Room Evacuation]], [[EOP-TRIP-4 — Natural Circulation]], [[AB.CW-0001]]
- Related exam questions: [[2022 Q3]], [[2022 Q42]], [[2023 Q1]], [[2023 Q21]], [[2023 Q83]], [[2023 Q87]], [[2023 Q88]], [[2023 Q93]]
- Related JPMs: [[2022 JPM Sim-f]]
- Related exam: [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
