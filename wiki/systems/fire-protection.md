---
title: Fire Protection
category: systems
status: draft
aliases:
  - fire suppression
---

# Fire Protection

## Function

Provides fire detection, alarm, and suppression systems throughout the plant. Includes water, CO2, Halon, and dry chemical suppression.

## Fire Pumps

- Two diesel-driven fire pumps, normally aligned in standby
- Jockey pump normally maintains header pressure between <span class="val-normal">110-120 psig</span>

**Automatic Start Signals:**
- Fire Pump #1: Low header pressure <span class="val-alarm"><85 psig</span>
- Fire Pump #2: Low header pressure <span class="val-alarm"><75 psig</span> with time delay
- Both: <span class="hi-exam">Loss of normal AC power to fire pump battery chargers</span> — independent battery auto-starts both fire pumps

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q65</div>
Both fire pumps running (OHA A-15 FIRE PMP 1/2 RUN, OHA A-23 FIRE PUMP 1/2 TRBL) with <span class="hi-exam">no fire system actuations and header pressure stable at 135 psig</span>: cause is <span class="hi-exam">loss of normal AC power to BOTH fire pump battery chargers</span>. The independent battery auto-starts both fire pumps. <span class="hi-trap">Jockey pump trip is NOT an auto-start signal for the fire pumps. A momentary (1 sec) pressure drop to 70 psig would not start BOTH pumps because the #2 fire pump start includes a time delay. A major pipe rupture would cause header pressure to remain low, not stable at 135 psig.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-h</div>
Fire alarm response: coded fire alarm #91 on 2RP5 = <span class="hi-exam">Aux. Bldg., Relay & Battery Rooms, 100 ft. elevation</span>. OHA A-7 (FIRE PROT TRBL) and A-8 (CO2/HALON DISCH) alarm. Relay Room fire requires: page announcement, <span class="hi-exam">FIRE INSIDE CONTROL AREA</span> mode on 2RP2, direct Unit 1 to select same, isolate PORVs (2PR1/2PR2 to MANUAL/CLOSE, close 2PR6/2PR7 block valves), dispatch operator for EMERG CLOSE per Att. 15.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q75</div>
Containment fire response: <span class="hi-exam">2FP147 (Fire Protection Containment Isolation Valve) must be manually opened from the control room</span> after tripping the Reactor, Turbine, and all RCPs. 2FP147 does NOT receive an automatic open signal. Fire pumps will start once 2FP147 is opened. Containment deluge valves are automatic. <span class="hi-trap">PORV BLOCK valve EMER CLOSE is the action for a relay room fire, not a containment fire.</span>
</div>

## Connections

- Related procedures: [[AB.FIRE-0001 — Control Room Fire Response]], [[AB.FP-0001 — Fire Protection System Malfunction]], [[S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A]]
- Related exam questions: [[2020 Q65]], [[2020 Q75]]
- Related JPMs: [[2022 JPM Sim-h]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Operating Exam]]
