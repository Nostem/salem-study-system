---
title: Containment Fan Coil Units
category: systems
status: draft
aliases:
  - CFCUs
  - containment cooling
  - containment fan coolers
---

# Containment Fan Coil Units

## Function

Recirculate and cool the containment atmosphere during normal operation and following a LOCA. (UFSAR 6.2.2.2)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 5 per unit | UFSAR 6.2.2.2.2 |
| Type | Centrifugal fan with plate fintube cooling coils | UFSAR 6.2.2.2.2 |
| Normal Operation Airflow | 110000 cfm each | UFSAR 6.2.2.2.2 |
| Accident Operation Airflow | 40000 cfm each | UFSAR 6.2.2.2.2 |
| Heat Removal (accident, per unit) | ≥44 x 10⁶ Btu/hr each | UFSAR 6.2.2.2.2 |
| Heat Removal (3 units, cumulative) | 132 x 10⁶ Btu/hr | UFSAR 6.2.2.2.2 |
| Service Water Flow (per unit, accident) | Minimum 1300 gpm | UFSAR 6.2.2.2.2 |
| Location | Operating floor, between containment wall and polar crane wall | UFSAR 6.2.2.2.2 |
| Seismic Classification | Class I | UFSAR 6.2.2.2.2 |

## Components

Each fan-cooler unit includes: motor, fan, motor heat exchanger, cooling coils, roughing filters, dampers, duct distribution system, instrumentation, and controls. Cooled by service water. (UFSAR 6.2.2.2.2)

## Key Design Points

- 5 units installed, 3 required OPERABLE by Tech Specs
- 3 units provide sufficient post-LOCA heat removal capacity
- Normal operation: recirculate and cool containment atmosphere
- Accident operation: reduced airflow but higher heat removal due to elevated containment temperature

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q25</div>
<span class="hi-exam">In LOW speed, CFCU dampers realign flow through HEPA filters (bypassing roughing filters) to reduce radioactivity inside containment.</span> In HIGH speed (normal), flow goes through roughing filters. EOP-FRCE-3 directs placing all CFCUs in LOW speed for containment atmosphere cleanup.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q13</div>
<span class="hi-exam">R13 radiation monitors monitor CFCU service water DISCHARGE for radioactivity from containment into the SW system. CFCU SW flow discharges into the OPPOSITE unit's Circulating Water system.</span> Loss of the opposite unit's CW flow prevents monitoring of this effluent pathway.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q24</div>
<span class="hi-exam">Service water to CFCUs is NOT isolated by Phase A or Phase B containment isolation signals.</span> Following a LOCA with both Phase A and B actuated, SW from CFCUs is the only source of water into containment that remains unisolated (Fire Protection isolated on Phase A, CCW on Phase B, Primary Water on Phase A).
</div>

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — TS 3.6.2.3 requires at least 3 CFCUs OPERABLE
- 1 inoperable (of required 3): 7 days to restore
- 2 inoperable: 72 hours to restore

## Connections

- Related systems: [[Containment Systems]], [[Service Water]]
