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

## Steam Dump System

See [[Steam Dumps]] for condenser steam dump valve operation, interlocks (C-9, P-12), and cooldown mode.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q12</div>
MSLI actuation setpoints: High steam flow (<span class="val-trip">>40%</span>) coincident with either <span class="hi-exam">Low-Low Tavg (<span class="val-trip">≤543°F</span> on 2/4 loops) OR Low SG Pressure (<span class="val-trip"><600 psig</span>)</span>. Also actuates on Containment Pressure <span class="val-trip">>15 psig</span>. <span class="hi-trap">SG Pressure differential >100 psig between one SG and the others actuates SI only (not MSLI) — different signals.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.1 MSSVs, TS 3.7.1.5 MSIVs

## Connections

- Related systems: [[Steam Dumps]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related exam questions: [[2022 Q12]]
- Related JPMs: [[2023 JPM Sim-e]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
