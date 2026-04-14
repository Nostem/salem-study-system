---
title: Main Steam
category: systems
status: draft
aliases:
  - main steam system
  - MSIVs
  - steam dump
  - atmospheric dump valves
---

# Main Steam

## Function

Transports steam from the four steam generators to the turbine-generator and other auxiliary steam loads. Provides overpressure protection via main steam safety valves and atmospheric dump valves. (UFSAR 10.3)

## Main Steam Isolation Valves (MSIVs)

- One per steam line (4 total)
- Close on: high steam flow AND (Lo-Lo Tavg OR low steam pressure); Hi-Hi containment pressure (2/4); manual (1/1 per line)
- Designed to close against full steam flow
- <span class="hi">Flow restrictors (venturi type) in each steam line limit blowdown rate in the event of a steamline break</span>
(UFSAR 10.3.2.2, T7.2-1)

## Main Steam Safety Valves (MSSVs)

5 valves per loop, 4 loops = 20 MSSVs total.

| Valve (per loop) | Lift Setting (±3%) | Orifice Size |
|-------------------|-------------------|--------------|
| xMS11 | 1125 psig | 16.0 in² |
| xMS12 | 1120 psig | 16.0 in² |
| xMS13 | 1110 psig | 16.0 in² |
| xMS14 | 1100 psig | 16.0 in² |
| xMS15 | 1070 psig | 16.0 in² |

(UFSAR 10.3, TS Table 3.7-4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q42</div>
MSSVs will start to open when main steam line pressure FIRST exceeds <span class="hi-exam"><span class="val-trip">1070 psig</span></span> (the lowest lift setting, xMS15). <span class="hi-trap">Trap: 1100 psig (xMS14) is the second lowest — the lowest is 1070 psig.</span> LCO 3.7.1.1 purpose: limit secondary system pressure to within <span class="hi-exam">110% of design pressure AND protect against overpressurization of the Reactor Coolant Pressure boundary</span>. <span class="hi-trap">It is NOT only for secondary overpressure protection — the MSSVs also protect the RCS pressure boundary.</span>
</div>

## Atmospheric Relief Valves (MS10s)

- 4 valves total (one per SG: 21MS10 through 24MS10)
- Design capacity: <span class="hi">10% of rated steam flow total (all 4 valves combined)</span>, <span class="hi">2.5% rated steam flow per individual valve</span>
- Total flow at no-load steam pressure: 390147 lb/hr at 1005 psig
- Controllable from the control room; backup nitrogen bottle racks for loss of control air

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q43</div>
Each MS10 (SG Atmospheric Relief Valve) has a design capacity of <span class="hi-exam">2.5% rated steam flow</span> (total for all 4 valves is <span class="hi-exam">10% rated steam flow at no-load steam pressure — 390147 lb/hr at 1005 psig</span>). <span class="hi-trap">Common trap: 10% is the total design capacity for all 4 valves, not the capacity of a single valve.</span> Per AB.STM-0001, if an MS10 fails open and MSLI does not isolate the leak, a manual SI is required.
</div>

## Steam Dump System

See [[Steam Dumps]] for condenser steam dump valve operation, interlocks (C-9, P-12), and cooldown mode.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q12</div>
MSLI actuation setpoints: High steam flow (<span class="val-trip">>40%</span>) coincident with either <span class="hi-exam">Low-Low Tavg (<span class="val-trip">≤543°F</span> on 2/4 loops) OR Low SG Pressure (<span class="val-trip"><600 psig</span>)</span>. Also actuates on Containment Pressure <span class="val-trip">>15 psig</span>. <span class="hi-trap">SG Pressure differential >100 psig between one SG and the others actuates SI only (not MSLI) — different signals.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.1 MSSVs, TS 3.7.1.5 MSIVs

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q77</div>
MS10 atmospheric dump valves during EOP-LOPA-1 (Loss of All AC Power): on loss of all control air, CA330s fail closed isolating air to containment. MS10s remain operable from the control room via <span class="hi-exam">DC battery power for controls and nitrogen bottle racks (4 bottles >=2000 psig per MS10) for the air operator</span>. Bottle rack capacity: <span class="hi-exam">minimum 72 hours</span> of MS10 operation. Maximum cooldown rate per EOP-LOPA-1 step 17.2 is <span class="hi-exam">100F/hr</span>. <span class="hi-trap">50F/hr is the cooldown rate for EOP-TRIP-6 (Nat Circ without RVLIS above 500F), NOT EOP-LOPA-1.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Main turbine fails to auto trip AND fails to manually trip following reactor trip from AB.RCP-0001. MSLI fails to auto actuate. <span class="hi-exam">CT#1 (CT-12): crew manually actuates MSLI using Fast Close pushbuttons on 2CC2</span> (or Loops 21-24 MSLI on 2CC1 Safeguards bezels). Failure to close MSIVs causes uncontrolled depressurization of all SGs, excessive RCS cooldown, and challenges to Integrity and Subcriticality CSFs. MS10 atmospheric dump valves used in EOP-FRHS-1 to depressurize selected SG to < <span class="hi-exam">575 psig</span> for condensate feed recovery.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-g</div>
EOP-SGTR-1 RCS cooldown with steam dumps unavailable (permissive light NOT illuminated on 2RP4): Step 10 directs cooldown using <span class="hi-exam">MS10 atmospheric relief valves on intact SGs (21, 22, 23)</span>. Table B determines target temperature based on ruptured SG pressure — <span class="hi-exam">1045 psi → 503°F target</span>. Lower MS10 setpoints on intact SGs to fully open for maximum-rate cooldown. When hottest CET reaches 503°F, stop cooldown by matching MS10 setpoints to current SG pressures. Do NOT dump steam from the ruptured 24 SG.
</div>

## Connections

- Related systems: [[Steam Dumps]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-LOPA-1 — Loss of All AC Power]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam questions: [[2019 Q42]], [[2019 Q48]], [[2020 Q43]], [[2022 Q12]], [[2022 Q77]]
- Related JPMs: [[2023 JPM Sim-e]], [[2020 JPM Sim-g]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
