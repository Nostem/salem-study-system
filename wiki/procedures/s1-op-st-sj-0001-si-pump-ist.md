---
title: "S1.OP-ST.SJ-0001 — 11 Safety Injection Pump Inservice Testing"
category: procedures
status: draft
aliases:
  - S1.OP-ST.SJ-0001
  - 11 SI Pump Inservice Testing
---

# S1.OP-ST.SJ-0001 — 11 Safety Injection Pump Inservice Testing

## Purpose

Quarterly inservice testing of 11 Safety Injection Pump on Unit 1. Pump is started and recirculated through the test flow path to verify operability.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q19</div>
While 11 SI Pump is running for IST, a LOOP causes 1B 4KV Vital Bus lockout (Bus Differential). With <span class="hi-exam">no SI signal</span>, SECs strip 4KV vital bus breakers before sequencing on BLACKOUT loads — neither SI pump is restarted (SI pumps are only sequenced when an accident signal is coupled with the Blackout signal). <span class="hi-exam">11/12 SI pumps are powered from 1A/1C 4KV Vital Buses</span> (not 1B). Result: <span class="hi-trap">neither SI pump runs</span> after the LOOP — the running 11 SI pump trips with the bus strip and is not auto-restarted.
</div>

## Connections

- Related systems: [[ECCS]], [[SECs]], [[4KV]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related exam questions: [[2016 Q19]]
- Related exam: [[2016 NRC Written Exam]]
