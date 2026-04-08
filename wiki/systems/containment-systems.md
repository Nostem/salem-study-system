---
title: Containment Systems
category: systems
status: draft
aliases:
  - containment
  - containment isolation
---

# Containment Systems

## Function

The containment systems ensure that fission product releases are limited following a LOCA or other design basis accident. The containment structure forms a virtually leak-tight barrier. Heat removal systems (spray and fan coolers) reduce containment pressure and temperature. The containment isolation system provides double barriers on all penetrating lines. (UFSAR 6.1, 6.2)

## Containment Structure

| Parameter | Value | Source |
|-----------|-------|--------|
| Type | Steel-lined reinforced concrete | UFSAR 6.2.1.1 |
| <span class="hi">Design Pressure</span> | <span class="hi">47 psig</span> | UFSAR 6.2.1.1 |
| Maximum Allowable Leakage Rate | 0.1% of free volume per day at design pressure | UFSAR 6.2.1.1 |
| Liner | Steel | UFSAR 6.2.1.1 |
| Seismic Design | Class I | UFSAR 3.8 |

Designed to withstand complete blowdown of reactor coolant through any rupture of the RCS up to and including circumferential severance of an RCS pipe. (UFSAR 6.2.1.1)

## Containment Spray System

### Function
Reduces containment pressure and removes iodine from the containment atmosphere by spraying chemically treated (NaOH) water. (UFSAR 6.2.2.1)

### Spray Nozzles
- Hollow-cone pressure nozzle design, no internal parts subject to clogging
- 3/8-inch diameter orifice, stainless steel
- Sauter mean drop size < 1000 microns at design conditions
- Four 360-degree ring headers at two elevations
- Screened through 1/12-inch (2.1 mm) holes during recirculation
(UFSAR 6.2.2.1)

### Operation

**Injection Phase:**
- Containment spray pumps take suction from RWST
- NaOH from spray additive tank mixed with spray flow
- Spray actuated on High-High containment pressure signal

**Recirculation Phase:**
- Spray pumps realigned to containment sump via RHR heat exchangers
- Cooled recirculated water sprayed into containment
(UFSAR 6.2.2.1)

## Containment Fan Coil Units (CFCUs)

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

Each unit includes: motor, fan, motor heat exchanger, cooling coils, roughing filters, dampers, duct distribution system, instrumentation, and controls. Cooled by service water. (UFSAR 6.2.2.2.2)

## Containment Internal Pressure Limits

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q54</div>
<span class="hi-exam">TS 3.6.1.4 requires containment internal pressure between -1.5 and +0.3 psig during Modes 1-4.</span> The upper limit (+0.3 psig) ensures peak pressure does not exceed the <span class="val-trip">47 psig</span> design pressure during a DBA (LOCA or steam line break). The lower limit (-1.5 psig) ensures the design negative pressure differential of <span class="val-trip">3.5 psig</span> is not exceeded. If outside limits, must restore within <span class="val-trip">1 hour</span>.
</div>

| Parameter | Value | Source |
|-----------|-------|--------|
| Upper Pressure Limit | <span class="val-alarm">+0.3 psig</span> | TS 3.6.1.4 |
| Lower Pressure Limit | <span class="val-alarm">-1.5 psig</span> | TS 3.6.1.4 |
| Design Pressure | <span class="val-trip">47 psig</span> | UFSAR 6.2.1.1 |
| Design Negative Differential | <span class="val-trip">3.5 psig</span> | TS 3.6.1.4 Bases |
| Restoration Time | <span class="val-trip">1 hour</span> | TS 3.6.1.4 |

## Containment Isolation System

### Design Basis
Provides double barriers for each line penetrating containment. Automatic isolation on containment isolation signals. (UFSAR 6.2.4)

### Isolation Signals
- **Phase A** — initiated by SI signal. Closes majority of automatic containment isolation valves.
- **Phase B** — initiated by High-High containment pressure (Containment Spray actuation). Closes remaining isolation valves.
(UFSAR 6.3.2, 6.2.4)

## Containment Atmosphere Iodine Removal

- Chemically treated spray (NaOH solution) removes elemental iodine vapor by washing action
- Recirculation through HEPA filter units removes particulates
- Sump pH maintained 7.0–10.0 to minimize iodine re-evolution and chloride stress corrosion cracking
(UFSAR 6.2.3)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q52</div>
<span class="hi-exam">CA330 Instrument Air Containment Isolation valves close on Phase A signal ONLY — NOT on SI or Phase B.</span> 21 CA330 supplies the 2A control air header; 22 CA330 supplies the 2B control air header. <span class="hi-exam">BOTH CA330s must be closed</span> to fully isolate instrument air to containment (each is in a separate air supply line with its own check valve). Backup air receivers inside containment provide PORV air supply during EOP actions.
</div>

## Combustible Gas Control

- Hydrogen generated post-LOCA from: zirconium-water reaction, corrosion of aluminum/zinc, radiolysis
- Hydrogen monitoring provided in containment
- Hydrogen purge capability
(UFSAR 6.2.5)

## Engineered Safety Features Summary

| ESF System | Function | Source |
|-----------|----------|--------|
| Containment Structure | Leak-tight barrier for fission products | UFSAR 6.1 |
| [[Emergency Core Cooling Systems]] | Borated water injection for core cooling | UFSAR 6.3 |
| Containment Spray | Pressure reduction + iodine removal | UFSAR 6.2.2.1 |
| [[Containment Fan Coil Units]] | Atmosphere recirculation and cooling | UFSAR 6.2.2.2 |
| Containment Isolation | Double barriers on penetrations | UFSAR 6.2.4 |

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — Containment integrity, leakage
- **[[TS 3/4.6 — Containment|TS 3/4.6.1]]** — Containment Integrity
- **[[TS 3/4.6 — Containment|TS 3/4.6.2]]** — Depressurization and Cooling Systems (spray, fan coolers)
- **[[TS 3/4.6 — Containment|TS 3/4.6.3]]** — Containment Isolation Valves
- **[[TS 3/4.6 — Containment|TS 3/4.6.4]]** — Combustible Gas Control
- **[[TS 3/4.6 — Containment|TS 3/4.6.5]]** — Containment Structural Integrity

## Connections

- Related tech specs: [[TS 3/4.6 — Containment]]
- Related EOPs: [[EOP-LOCA Series]], [[Critical Safety Function Status Trees]]
- Related exam questions: [[2023 Q52]], [[2023 Q54]]
- Related exam: [[2023 NRC Written Exam]]
