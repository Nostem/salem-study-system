---
title: Containment Spray
category: systems
status: draft
aliases:
  - containment spray system
  - spray additive
  - NaOH spray
---

# Containment Spray

## Function

Reduces containment pressure and removes iodine from the containment atmosphere by spraying chemically treated (NaOH) water following a LOCA or other DBA. (UFSAR 6.2.2.1)

## Actuation

- Actuated on Hi-Hi Containment Pressure ("P" signal, 2/4 at <span class="val-trip">15.0 psig</span>)
- Phase B containment isolation also actuates on the "P" signal
(UFSAR T7.2-1, TS Table 3.3-4)

## Operation

### Injection Phase
- Spray pumps take suction from RWST
- NaOH from spray additive tank mixed with spray flow via eductors
- Spray into containment atmosphere

### Recirculation Phase
- Spray pumps realigned to containment sump via RHR heat exchangers
- Cooled recirculated water sprayed into containment

## Spray Nozzles

- Hollow-cone pressure nozzle design, no internal parts subject to clogging
- 3/8-inch diameter orifice, stainless steel
- Sauter mean drop size < 1000 microns at design conditions
- Four 360-degree ring headers at two elevations
- Screened through 1/12-inch (2.1 mm) holes during recirculation
(UFSAR 6.2.2.1)

## Spray Additive System

| Parameter | Value | Source |
|-----------|-------|--------|
| Spray Additive Tank Volume | 2568–4000 gallons | TS 3.6.2.2 |
| NaOH Concentration | 30–32% by weight | TS 3.6.2.2 |
| Eductor Flow | 35 ±3.5 gpm to each spray system | TS SR 4.6.2.2 |
| Spray Pump Differential Pressure | ≥204 psid | TS SR 4.6.2.1 |

## Key Design Points

- Two independent containment spray systems
- NaOH additive maintains post-LOCA sump pH between 7.0 and 10.0
- pH control minimizes iodine re-evolution and chloride stress corrosion cracking

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — TS 3.6.2.1 (Spray System), TS 3.6.2.2 (Spray Additive)
- 1 spray system inoperable: 72 hours, then 48 more hours, or Cold Shutdown

## Connections

- Related systems: [[Containment Systems]], [[Emergency Core Cooling Systems]], [[Residual Heat Removal]]
