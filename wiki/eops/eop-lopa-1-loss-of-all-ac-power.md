---
title: "EOP-LOPA-1 — Loss of All AC Power"
category: eops
status: draft
aliases:
  - EOP-LOPA-1
---

# EOP-LOPA-1 — Loss of All AC Power

## Purpose

Provides operator actions for responding to a loss of all AC power, including cooldown using MS10 atmospheric relief valves.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q77</div>
Step 17.2: MS10 relief valves remain operable from the control room on loss of all control air because each MS10 has a <span class="hi-exam">bottle rack with four bottles of nitrogen (>= 2000 psig)</span> providing backup air for control and operation. Bottle rack capacity is designed for a minimum of <span class="hi-exam">72 hours</span> of MS10 operation. Maximum cooldown rate in EOP-LOPA-1 is <span class="hi-exam">100°F/hr</span>. <span class="hi-trap">Do not confuse with 50°F/hr used in EOP-TRIP-6 (Natural Circulation Without RVLIS). The MS10s do NOT need to be operated locally — nitrogen backup keeps them available from the control room.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
Entry on all three 4KV Vital Buses de-energized (2A Bus Differential, 2B EDG overspeed, 2C EDG C/T). Immediate actions: trip reactor, trip turbine, close 2CV2 and 2CV277. De-energize all SECs. <span class="hi-exam">Stop 2A EDG — running with no SW pumps (will overheat)</span>. Stop all loads in Table A. Reset SI. After maintenance returns 2C EDG from C/T: start 2C EDG, close output breaker to energize bus <span class="hi-exam">(CT-24)</span>, start one SW pump for EDG cooling <span class="hi-exam">(CT-25)</span>. Step 26: "When at least one 4kV vital bus is energized, THEN go to step 43."
</div>

## Connections

- Related systems: [[Main Steam]], [[Control Air]], [[DC Power]], [[EDGs]], [[Service Water]], [[4KV]], [[SECs]]
- Related EOPs: [[EOP-LOPA-4 — Extended Loss of All AC Power]]
- Related exam questions: [[2022 Q77]]
- Related scenarios: [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exam: [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]]
