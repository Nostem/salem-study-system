---
title: "AB.4KV-0003 — Loss of 2C 4KV Bus"
category: abnormals
status: draft
aliases:
  - AB.4KV-0003
  - S2.OP-AB.4KV-0003
  - loss of 2C 4KV bus
---

# AB.4KV-0003 — Loss of 2C 4KV Bus

## Purpose

Provides operator actions for response to a loss of the 2C 4KV vital bus. The 2C bus supplies 22 Charging Pump, 22 SI Pump, 22 Containment Spray Pump, and other safeguards loads.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q29</div>
Charging pump power supply alignment following loss of 2C 4KV bus: <span class="hi-exam">22 CV Pump is supplied from the 2C 4KV bus</span> and is lost. Available charging pumps: <span class="hi-exam">21 CV Pump (2B 4KV bus) and 23 CV Pump (2A 460V bus)</span>. If 22 CV Pump was in service, place either 21 or 23 CV Pump in service. <span class="hi-trap">23 CV Pump is powered from the 2A 460V bus, NOT from 2C 4KV — it remains available on loss of 2C.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q91</div>
A <span class="hi-exam">bus differential fault on 2C 4KV Bus prevents the 2C EDG from re-energizing the bus</span>. AB.4KV-0003 verifies 2C bus energized from EDG and starts/stops loads as necessary, but <span class="hi-trap">this path is unavailable when the bus fault is a differential fault — the EDG output breaker will not close onto a faulted bus</span>. With all Unit 2 charging pumps unavailable, the CRS enters AB.CVC-0001, not AB.4KV-0003, to address loss of charging.
</div>

## Connections

- Related systems: [[4KV]], [[CVCS]], [[ECCS]], [[Containment Spray]]
- Related procedures: [[S2.OP-AR.ZZ-0009 — Overhead Annunciators Window J]]
- Related exam questions: [[2020 Q29]], [[2020 Q91]]
- Related exam: [[2020 NRC Written Exam]]
