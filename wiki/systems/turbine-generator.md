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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q15</div>
Grid disturbance — loss of a Salem unit causes <span class="hi-exam">500KV switchyard voltage to lower</span>. As grid voltage drops, remaining generating units share reactive load: <span class="hi-exam">Unit 2 MVARs rise</span> to compensate for the lost reactive support from the tripped unit. (Ref: S2.OP-AB.GRID-0001)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q20</div>
Rising condenser backpressure reduces LP turbine efficiency, confirmed by <span class="hi-exam">lowering generator MWe output</span>. The primary operational concern is <span class="hi-exam">overpressurization and damage to the LP turbine/main condenser</span>, not condensate pump cavitation.
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Turbine trip reactor trip interlock

## Connections

- Related exam questions: [[2023 Q15]], [[2023 Q20]]
- Related exam: [[2023 NRC Written Exam]]
