---
title: "EOP-LOCA-4 — Transfer to Hot Leg Recirculation"
category: eops
status: draft
aliases:
  - EOP-LOCA-4
  - hot leg recirculation
  - transfer to hot leg recirc
---

# EOP-LOCA-4 — Transfer to Hot Leg Recirculation

## Purpose

Directs the realignment of ECCS flow from cold leg injection to hot leg injection to prevent boron precipitation in the reactor vessel during a prolonged LOCA. Hot leg recirculation alternates the injection point to flush boron from the core region.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-b</div>
Hot leg recirculation alignment with one SI pump tripped and one RHR pump C/T: at Step 5.0, determine the <span class="hi-exam">22 SI pump is NOT running</span> (alternate path) and proceed to Step 8. To realign 21 SI pump: <span class="hi-exam">STOP 21 SI Pump → CLOSE 21SJ134 (cold leg discharge) → OPEN 21SJ40 (hot leg discharge, key-locked) → START 21 SI Pump</span>. Also at Step 4.0: CLOSE 22CS36 (RHR supply to CS) and OPEN 22SJ49 (cold leg isolation valve).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-b</div>
Nearly identical scenario to 2023 Sim-b. Two alternate paths during hot leg recirc alignment: (1) at Step 4 cont'd, <span class="hi-exam">21SJ45 is CLOSED for 21 RHR pump maintenance</span> — RHR-to-SI pump cross-connect unavailable; (2) at Step 4.1, <span class="hi-exam">22 SI pump NOT running (tripped during LOCA-3)</span> — must use 21 SI pump via Step 6.1. Realignment sequence: <span class="hi-exam">STOP 21 SI Pump → CLOSE 21SJ134 → OPEN 21SJ40 (key-locked) → START 21 SI Pump</span>. Starts in LOCA-1 at Step 27 (remove SJ40 lockouts, wait for 6.5 hour time requirement), then transitions to LOCA-4.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q77</div>
EOP-LOCA-1 timing requirements: <span class="hi-exam">start preparations for hot leg recirculation 12 hours after SI actuation</span>; <span class="hi-exam">perform EOP-LOCA-4 (Transfer to Hot Leg Recirculation) 14 hours after SI actuation</span>. <span class="hi-trap">Trap: 12 hours is when preparations START, 14 hours is when the actual transfer is PERFORMED. With SI at 07:00, LOCA-4 performance time is 21:00, NOT 19:00.</span>
</div>

## Connections

- Related systems: [[ECCS]], [[RHR]]
- Related EOPs: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam questions: [[2018 Q77]], [[2019 Q77]]
- Related JPMs: [[2019 JPM Sim-b]], [[2023 JPM Sim-b]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Operating Exam]]
