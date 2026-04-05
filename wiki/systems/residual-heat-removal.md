---
title: Residual Heat Removal
category: systems
status: draft
aliases:
  - RHR
  - shutdown cooling
---

# Residual Heat Removal

## Function

The Residual Heat Removal (RHR) system removes decay heat from the reactor core during plant shutdown and cooldown. It reduces RCS temperature from 350°F to 140°F (cold shutdown/refueling). During a LOCA, the RHR pumps function as low-head safety injection pumps for the ECCS. (UFSAR 5.5.7)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| RCS Temperature at RHR Startup | 350°F | UFSAR T5.5-1 |
| Time to Cool from 350°F to 140°F (design, 2 trains) | 16 hr (original); 18 hr (with 1.4% uprate) | UFSAR T5.5-1 |
| Time to Cool (single train requirement) | 72 hr | UFSAR T5.5-1 |
| Decay Heat at 20 hr After Shutdown | 72.1 x 10⁶ Btu/hr (original design) | UFSAR T5.5-1 |
| CCW Supply Temperature (design) | 95°F | UFSAR T5.5-1 |
| RWST Boron Concentration | ~2000 ppm | UFSAR T5.5-1 |
| Plant Design Life | 40 years | UFSAR T5.5-1 |

## Heat Exchangers

| Parameter | Shell Side | Tube Side | Source |
|-----------|-----------|-----------|--------|
| Number | 2 per unit | — | UFSAR T5.5-1 |
| Design Heat Transfer | — | 34.15 x 10⁶ Btu/hr | UFSAR T5.5-1 |
| Design Pressure | 150 psig | 600 psig | UFSAR T5.5-1 |
| Design Temperature | 200°F | 400°F | UFSAR T5.5-1 |
| Design Flow Rate | 2.475 x 10⁶ lb/hr | 1.48 x 10⁶ lb/hr | UFSAR T5.5-1 |
| Design Outlet Temperature | 108.8°F | 114°F | UFSAR T5.5-1 |
| Design Inlet Temperature | 95°F | 137°F | UFSAR T5.5-1 |
| Fluid | CCW | Reactor coolant (borated demin water) | UFSAR T5.5-1 |
| Material | Carbon steel | Austenitic stainless steel | UFSAR T5.5-1 |

## Pumps

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 per unit | UFSAR T5.5-1 |
| Type | Vertical centrifugal | UFSAR T5.5-1 |
| Design Pressure | 600 psig | UFSAR T5.5-1 |
| Design Temperature | 400°F | UFSAR T5.5-1 |
| Shutoff Head | 170 psi | UFSAR T5.5-1 |
| Design Flow Rate | 3000 gpm | UFSAR T5.5-1 |
| Design Head | 350 ft | UFSAR T5.5-1 |
| Available NPSH at Design Flow | 25 ft | UFSAR T5.5-1 |
| Fluid Temperature Range | 40–350°F | UFSAR T5.5-1 |
| Material | Austenitic stainless steel | UFSAR T5.5-1 |

## Piping Design

| Section | Pressure | Temperature | Source |
|---------|----------|-------------|--------|
| Pump Suction (isolated loop) | 450 psig* | 400°F | UFSAR T5.5-1 |
| Pump Discharge (isolated loop) | 600 psig | 400°F | UFSAR T5.5-1 |
| Isolation Valves and Piping (RCS boundary) | 2485 psig | 650°F | UFSAR T5.5-1 |

*Unit 2 piping downstream of 2RH75 & 76 designed to 600 psig.

## RCS Isolation

The RHR system is isolated from the RCS by two normally closed motor-operated valves in each suction line. These valves are interlocked to prevent opening when RCS pressure is above the RHR system design pressure. (UFSAR 5.5.7.3.2)

## LOCA Recirculation Mode

During LOCA recirculation, the RHR pumps take suction from the containment sump and pump radioactive borated water (with H₂ and NaOH in solution) through the RHR heat exchangers and into the RCS. (UFSAR T5.5-1)

## Tech Spec LCOs

- **[[TS 3/4.5 — ECCS]]** — RHR subsystems as part of ECCS
- **TS 3/4.9** — RHR requirements during refueling

## Connections

- Related systems: [[Reactor Coolant System]], [[Emergency Core Cooling Systems]], [[Component Cooling Water]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
