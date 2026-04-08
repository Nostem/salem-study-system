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
- Flow restrictors (venturi type) in each steam line limit blowdown rate in the event of a steamline break
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

- Dumps steam to the condenser to prevent reactor trip on turbine trip or rapid load reduction
- Controlled by: Tavg error signal (difference between Tavg and Tref)
- Steam dump to condenser blocked by C-9 (high condenser pressure or loss of circulating water)
- Steam dump blocked below P-12 (low Tavg)
- Cooldown mode: controlled by steam pressure for controlled cooldown rate
(UFSAR 7.7.2.7)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q18</div>
<span class="hi-exam">MSLI signals for high steam flow with Lo-Lo Tavg CANNOT be blocked</span> — not even by manually actuating and resetting SI. If steam dump rate is too high during EOP-directed depressurization, high steam flow + P-12 (Lo-Lo Tavg) will actuate MSLI, closing all MSIVs and making steam dumps unavailable. Continue depressurization via MS10 atmospheric dump valves. High steamline differential pressure causes SI, not MSLI — different signals.
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.1 MSSVs, TS 3.7.1.5 MSIVs

## Connections

- Related EOPs: [[EOP-TRIP-1 — Standard Post Trip Actions]]
