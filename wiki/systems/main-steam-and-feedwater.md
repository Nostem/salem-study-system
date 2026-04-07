---
title: Main Steam and Feedwater
category: systems
status: draft
aliases:
  - main steam
  - feedwater
  - MSIV
  - steam dump
  - turbine generator
---

# Main Steam and Feedwater

## Main Steam System

### Function
Transports steam from the four steam generators to the turbine-generator and other auxiliary steam loads. Provides overpressure protection via main steam safety valves and atmospheric dump valves. (UFSAR 10.3)

### Main Steam Isolation Valves (MSIVs)
- One per steam line (4 total)
- Close on: high steam flow AND (lo-lo Tavg OR low steam pressure); Hi-Hi containment pressure (2/4); manual (1/1 per line)
- Designed to close against full steam flow
- <span class="hi">Flow restrictors (venturi type) in each steam line limit blowdown rate in the event of a steamline break</span>
(UFSAR 10.3.2.2, T7.2-1)

### Steam Dump System
- Dumps steam to the condenser to prevent reactor trip on turbine trip or rapid load reduction
- Controlled by: Tavg error signal (difference between Tavg and Tref)
- Steam dump to condenser blocked by C-9 (high condenser pressure or loss of circulating water)
- Steam dump blocked below P-12 (low Tavg)
- Cooldown mode: controlled by steam pressure for controlled cooldown rate
(UFSAR 7.7.2.7)

### Main Steam Safety Valves
- Multiple safety valves per steam line
- Set to lift at secondary side design pressure to protect steam generators
(UFSAR 10.3)

## Turbine-Generator

- Tandem compound, six-flow exhaust, 1800 RPM
- Westinghouse design
- Electro-hydraulic control system
- Turbine trip on: low auto stop oil pressure, thrust bearing failure, low bearing oil pressure, generator protection, manual, reactor trip (P-4)
(UFSAR 10.2)

## Feedwater System

### Main Feedwater
- Feedwater pumps (turbine-driven) supply feedwater through feedwater regulating valves to steam generators
- Feedwater temperature at full power: 432.8°F
- SG level controlled by feedwater regulating valves (3-element control at power: steam flow, feed flow, SG level)
(UFSAR 10.4)

### Feedwater Isolation
Actuated by:
1. Safety Injection signal
2. 2/3 Hi-Hi SG level (P-14) — trips all FW pumps, closes FW valves, trips turbine
3. Low auctioneered Tavg AND reactor trip (P-4)
(UFSAR T7.2-1)

### Steam Generator Level Control
- **Below P-7 (low power):** Single-element control (SG level only)
- **Above P-7 (at power):** Three-element control (steam flow, feed flow, SG level)
(UFSAR 7.7.2.6)

## Condenser and Condensate

- Main condensers receive exhaust steam from turbine and steam dump
- Condensate pumps deliver condensate through feedwater heaters to feedwater pumps
- Condenser serves as heat sink for steam dump during load rejection
(UFSAR 10.4)

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — Main steam safety valves, AFW, MSIVs
- **TS 3/4.7.1.1** — Main Steam Safety Valves
- **TS 3/4.7.1.5** — Main Steam Isolation Valves

## Connections

- Related systems: [[Steam Generators]], [[Reactor Coolant System]], [[Auxiliary Feedwater]], [[Instrumentation and Controls]]
- Related concepts: [[Thermal-Hydraulic Design]]
- Related EOPs: [[EOP-TRIP-1 — Standard Post Trip Actions]]
