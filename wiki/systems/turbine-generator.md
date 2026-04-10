---
title: Main Turbine
category: systems
status: draft
aliases:
  - turbine generator
  - turbine
  - T/G
  - main generator
---

# Main Turbine

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q17</div>
When one unit trips, reactive load (MVARs) is shared among remaining generators on the grid — the operating unit picks up <span class="hi-exam">LESS than the full amount</span> (grid absorbs the rest). The voltage regulator senses terminal voltage drop from increased MVAR loading and <span class="hi-exam">increases generator field current to restore terminal voltage to setpoint</span>.
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Turbine trip reactor trip interlock

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q66</div>
Stator Water Cooling: <span class="hi-exam">Unit 2 (GE SCW) is the ONLY unit with an automatic turbine runback feature</span> — triggered by low flow, low pressure, or high temperature. If runback fails to lower amps to specified value within the time delay, a turbine trip occurs. <span class="hi-trap">Unit 1 (Westinghouse SCW): low flow inputs into a 45-second time-delayed turbine TRIP circuit — no runback feature. Unit 1 does not have a SLMS System.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q80</div>
ATWS turbine trip verification (EOP-FRSM-1 Step 6): confirmed by <span class="hi-exam">ALL turbine stop valve closed bi-stables LIT on 2RP4</span>. <span class="hi-trap">Auto Stop Oil low pressure bi-stables (2/3) on 2RP4 indicate a turbine trip demand, NOT confirmation the turbine actually tripped (stop valves may not have closed).</span> If turbine trip is not confirmed, dispatch operator to locally trip at the front standard.
</div>

## Connections

- Related exam questions: [[2023 Q15]], [[2023 Q20]], [[2023 Q64]], [[2023 Q66]], [[2023 Q80]], [[2023 Q88]], [[2022 Q17]], [[2022 Q64]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Written Exam]]
