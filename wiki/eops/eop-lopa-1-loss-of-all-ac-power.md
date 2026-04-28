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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-g</div>
EOP-LOPA-1 Step 13 CAUTION: 4KV VITAL BUS LOADING limits — DG <span class="hi-exam">2000-HR LIMIT 2750 KW</span>, 2-HR LIMIT 2860 KW, HALF-HR LIMIT 3100 KW. Step 14: start 2C EDG, verify FREQUENCY >= 60 Hz and VOLTS >= 4.15 KV, close output breaker via <span class="hi-exam">MIMIC PB for 2C DG 4KV BKR 2CDD</span> (verify Yellow indication on both MIMIC PB and BUS INTLK CLOSE SELECTION bezel), then close 2C BREAKER CLOSE PB. Start one SW pump (25 or 26) for EDG cooling, close <span class="hi-exam">23SW20</span>. Step 17: start C bus loads — 22 Charging Pump, 23 CCW Pump, #2 ECAC.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q59</div>
Vital Power Restoration Steps: prior to restoring AC power, <span class="hi-exam">ALL SECs must be de-energized</span> (not blocked and reset). Reason centrifugal charging pumps must not auto-start: <span class="hi-exam">preventing damage to the RCP seals</span>. After prolonged loss of seal injection, injecting cold charging water into hot seals can cause thermal shock and seal damage. <span class="hi-trap">Trap: "blocked and reset" is an action performed in other EOPs (e.g., EOP-TRIP-1), not in EOP-LOPA-1 power restoration steps. Also: candidates may think preventing seal damage is NOT a concern because seal injection is normally beneficial.</span>
</div>

## Connections

- Related systems: [[Main Steam]], [[Control Air]], [[DC Power]], [[EDGs]], [[Service Water]], [[4KV]], [[SECs]], [[RCPs]], [[CVCS]]
- Related EOPs: [[EOP-LOPA-4 — Extended Loss of All AC Power]]
- Related exam questions: [[2018 Q59]], [[2022 Q77]]
- Related JPMs: [[2019 JPM Sim-g]]
- Related scenarios: [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exam: [[2018 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2019 NRC Operating Exam]]
