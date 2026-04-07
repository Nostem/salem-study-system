---
title: Turbine-Generator
category: systems
status: draft
aliases:
  - turbine generator
  - turbine
  - T/G
---

# Turbine-Generator

## Function

Converts steam energy from the steam generators into electrical energy. (UFSAR 10.2)

## Design

- Tandem compound, six-flow exhaust, 1800 RPM
- Westinghouse design
- Electro-hydraulic control system
(UFSAR 10.2)

## Turbine Trips

| Trip | Source |
|------|--------|
| Low auto stop oil pressure | UFSAR 10.2 |
| Thrust bearing failure | UFSAR 10.2 |
| Low bearing oil pressure | UFSAR 10.2 |
| Generator protection | UFSAR 10.2 |
| Manual | UFSAR 10.2 |
| Reactor trip (P-4) | UFSAR T7.2-2 |

## Reactor Trip on Turbine Trip

- Turbine trip generates reactor trip on 2/3 low auto stop oil pressure
- Interlocked with P-9: reactor trip on turbine trip is blocked below ~50% RTP
(UFSAR T7.2-1)

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Turbine trip reactor trip interlock

## Connections

- Related systems: [[Main Steam]], [[Feedwater and Condensate]], [[Electrical Power Systems]]
