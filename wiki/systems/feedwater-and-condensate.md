---
title: Feed & Condensate
category: systems
status: draft
aliases:
  - feedwater
  - main feedwater
  - condensate
  - feedwater regulating valves
  - feedwater isolation
---

# Feed & Condensate

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q13</div>
Main feedwater line break vs steam line break: FW line break causes SG levels to <span class="hi-exam">lower FASTER</span> (direct loss of feedwater inventory). RCS cooldown is <span class="hi-exam">LESS than an equivalent steam line break</span> (loss of FW doesn't involve removal of latent heat as steam break does). FW break generates <span class="hi-exam">Low-Low SG Level reactor trip</span>; post-trip RCS Tavg rises due to decreased heat transfer in the affected SG.
</div>

## Condenser and Condensate

- Main condensers receive exhaust steam from turbine and steam dump
- Condensate pumps deliver condensate through feedwater heaters to feedwater pumps
- Condenser serves as heat sink for steam dump during load rejection
(UFSAR 10.4)

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.3 (Auxiliary Feed Storage Tank), TS 3.7.13 (FW Isolation Valves)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q60</div>
CW waterbox tube leak alarms: a gross tube leak is confirmed by <span class="hi-exam">Dissolved Oxygen Hi, Condensate Pump Disch Sodium Hi, and Hotwell Outlet Conductivity Hi</span>. <span class="hi-trap">Hydrazine Lo is NOT expected from a CW tube leak</span> — river water intrusion does not impact hydrazine concentration.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q64</div>
SGFP trip response: DEHC automatically initiates turbine runback at <span class="val-trip">200% per minute</span> to 66% power. <span class="hi-exam">2CN47 (23/24/25 Heater String Bypass valve) immediately opens</span> and the polisher is bypassed. <span class="hi-trap">Manual runback from the DEHC panel uses 15% per minute rate. On a condensate pump trip, 2CN47 only opens if SGFP suction pressure drops below <span class="val-alarm">320 psig</span>; on a SGFP trip, 2CN47 opens regardless of suction pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q74</div>
Condensate depression: the temperature difference between the condenser saturation temperature and the actual condensate temperature. <span class="hi-exam">Decreasing condensate depression (e.g., 5°F to 2°F) raises thermal efficiency</span> (hotter feedwater means SGs add less sensible heat) but moves the condensate pumps <span class="hi-exam">closer to cavitation</span> (less subcooling = less NPSH at pump suction).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-e</div>
EOP-FRHS-1 condensate pump feed: establish condensate flow to selected SG by opening <span class="hi-exam">BF40 (Main Feed Bypass Valve, locally)</span>, <span class="hi-exam">BF13 (Feed Water Isolation Valve)</span>, <span class="hi-exam">21 and 22 CN48 (Feed Pump Bypass Valves)</span>, and closing <span class="hi-exam">21 and 22 CN32 (Feed Pump Suction Valves)</span>. Verify condensate flow established with WR level rising.
</div>

## Connections

- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related exam questions: [[2023 Q8]], [[2023 Q42]], [[2023 Q60]], [[2023 Q64]], [[2023 Q74]], [[2022 Q13]]
- Related JPMs: [[2023 JPM Sim-e]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
