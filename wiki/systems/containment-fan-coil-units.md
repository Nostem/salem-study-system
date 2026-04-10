---
title: CFCUs
category: systems
status: draft
aliases:
  - containment cooling
  - containment fan coolers
---

# CFCUs

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q38</div>
<span class="hi-exam">SEC Mode 1 (SI only): running CFCUs are tripped, then all five auto-start in LOW speed after a 20-second delay</span> (coastdown period before restart). To restore manual HIGH speed control: must reset <span class="hi-exam">BOTH trains of SI AND all SECs</span>. Resetting SI alone is NOT sufficient. EOP-TRIP-3 step 1 accomplishes this.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q39</div>
CFCU power distribution from 4KV Vital Buses: <span class="hi-exam">21 CFCU (A bus), 22 CFCU (B bus), 23 CFCU (B bus, CIT), 24 CFCU (B bus), 25 CFCU (C bus)</span>. Loss of 2B 4KV Vital Bus = 22 and 24 CFCUs unavailable. Only 21 (A bus) and 25 (C bus) remain available.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q41</div>
CFCU SW flow via 2SW223: mechanical stop limits valve travel to <span class="hi-exam">~50%</span>. SW223 opens to the mechanical stop when the CFCU is in service and closes when the CFCU is out of service. <span class="hi-exam">SW flow is the same in both HIGH and LOW speed fan operation</span> — the SW223 valve position does not change with fan speed. <span class="hi-trap">SW flow does NOT increase in LOW speed (accident) mode. The fixed-resistance flow scheme (inlet/outlet orifices + mechanical stop) ensures constant SW flow regardless of fan speed.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — TS 3.6.2.3 requires at least 3 CFCUs OPERABLE
- 1 inoperable (of required 3): 7 days to restore
- 2 inoperable: 72 hours to restore

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU surveillance (S2.OP-ST.CBV-0003): if measured SW header DP is between Exhibit 1 values, per P&L 3.4 select minimum flow for the <span class="hi-exam">next HIGHER DP value</span>. At 106 psi DP (between 105 and 110), required minimum is <span class="hi-exam">1811 gpm (at 110 psi)</span>. Actual ~1785 gpm = <span class="hi-exam">UNSAT / inoperable</span>. Also: CFCU SW flow must be <span class="hi-exam">>=1465 gpm</span> in all cases (P&L 3.3).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q55</div>
SEC Mode 1 (SI only, no LOOP) CFCU response: <span class="hi-exam">SEC trips ALL high-speed 460V breakers (including standby CFCUs), then after a 20-second time delay, starts ALL five CFCUs in low speed</span>. The SEC does NOT use load sequencers in Mode 1. A CFCU in standby receives the same treatment — high-speed breaker trips, then <span class="hi-exam">low-speed breaker closes after 20 seconds</span>. <span class="hi-trap">There is NO immediate start for standby CFCUs — ALL CFCUs (running and standby) start in low speed after the same 20-second delay.</span>
</div>

## Connections

- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]]
- Related exam questions: [[2023 Q13]], [[2023 Q24]], [[2023 Q25]], [[2023 Q38]], [[2023 Q39]], [[2022 Q41]], [[2022 Q55]]
- Related JPMs: [[2023 JPM Sim-f]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]]
