---
title: Feedwater and Condensate
category: systems
status: draft
aliases:
  - feedwater
  - main feedwater
  - condensate
  - feedwater regulating valves
  - feedwater isolation
---

# Feedwater and Condensate

## Function

The feedwater system supplies heated feedwater from the condensate system to the steam generators. The condensate system collects condensed steam from the main condensers and pumps it through feedwater heaters to the feedwater pumps. (UFSAR 10.4)

## Main Feedwater

- Feedwater pumps (turbine-driven) supply feedwater through feedwater regulating valves to steam generators
- Feedwater temperature at full power: 432.8°F
- SG level controlled by feedwater regulating valves

## SG Level Control

- **Below P-7 (low power):** Single-element control (SG level only)
- **Above P-7 (at power):** Three-element control (steam flow, feed flow, SG level)
(UFSAR 7.7.2.6)

## Feedwater Isolation

Actuated by:
1. Safety Injection signal
2. 2/3 Hi-Hi SG level (P-14) — trips all FW pumps, closes FW valves, trips turbine
3. Low auctioneered Tavg AND reactor trip (P-4)

Closes main FW control valves (fast closure), bypass valves, and inlet stop valves. (UFSAR T7.2-1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q8</div>
High level in <span class="hi-exam">21A Low Pressure feedwater heater closes ONLY the associated 21CN22</span> inlet valve (not all three LP FW heater strings). With one LP FW heater string bypassed, <span class="hi-exam">cooler feedwater enters the reactor, raising actual reactor thermal power due to positive MTC effect</span>. NI power indication reads lower than actual because cooler moderator provides shielding to PR NIS. Reactor power should be determined from RCS delta-Ts, and turbine load reduced to prevent exceeding thermal power limits.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q42</div>
BF19 (MFW Regulating Valve) fails fully OPEN → SG level rises → <span class="hi-exam">SG High Level Trip (P-14) actuates at 2/3 NR levels ≥<span class="val-trip">67%</span> on any one SG</span>. P-14 trips the main turbine, which causes an auto reactor trip AND actuates <span class="hi-exam">Feedwater Isolation</span> (closes all BF13s, BF19s, BF40s, trips both SGFPs, and trips the Main Turbine). Note: FW Interlock alone only closes the BF19s and BF40s — FW Isolation is the broader actuation.
</div>

## Condenser and Condensate

- Main condensers receive exhaust steam from turbine and steam dump
- Condensate pumps deliver condensate through feedwater heaters to feedwater pumps
- Condenser serves as heat sink for steam dump during load rejection
(UFSAR 10.4)

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.3 (Auxiliary Feed Storage Tank), TS 3.7.13 (FW Isolation Valves)

## Connections

- Related EOPs: [[EOP-TRIP-1 — Standard Post Trip Actions]]
- Related exam questions: [[2023 Q8]], [[2023 Q42]]
- Related exam: [[2023 NRC Written Exam]]
