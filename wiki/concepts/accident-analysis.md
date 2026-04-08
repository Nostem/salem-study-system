---
title: Accident Analysis
category: concepts
status: draft
aliases:
  - Chapter 15
  - accident analysis
  - LOCA
  - transient analysis
---

# Accident Analysis

## Overview

Chapter 15 of the UFSAR presents the analysis of plant responses to postulated accidents and transients. Events are categorized into four conditions based on expected frequency and consequences. The analyses demonstrate that the plant design meets all applicable safety criteria. (UFSAR 15)

## Event Classification

| Condition | Description | Expected Frequency | Consequence Limit | Source |
|-----------|------------|-------------------|-------------------|--------|
| I | Normal Operation and Operational Transients | Frequently occurring | No fuel damage; within normal operating limits | UFSAR 15.1 |
| II | Faults of Moderate Frequency (AOOs) | Once per year to once per plant lifetime | No fuel rod failure; RCS pressure below 110% of design | UFSAR 15.2 |
| III | Infrequent Faults | Once per plant lifetime to once per 100 plants | Small fraction of fuel failure; offsite doses within 10CFR50.67 | UFSAR 15.3 |
| IV | Limiting Faults | Not expected but postulated | Dose consequences within 10CFR50.67 limits | UFSAR 15.4 |

## Condition II Events (Faults of Moderate Frequency)

| Event | Key Protection | Source |
|-------|---------------|--------|
| Uncontrolled RCCA Bank Withdrawal from Subcritical | Power range high flux trip (low setpoint), OT Delta-T | UFSAR 15.2.1 |
| Uncontrolled RCCA Bank Withdrawal at Power | OT Delta-T, OP Delta-T, high flux trip | UFSAR 15.2.2 |
| RCCA Misalignment (dropped rod) | Automatic rod control response, power range negative flux rate (removed) | UFSAR 15.2.3 |
| Uncontrolled Boron Dilution | Source range flux doubling (shutdown), OT Delta-T (at power) | UFSAR 15.2.4 |
| Partial Loss of Forced Reactor Coolant Flow | Low flow trip (2/3 per loop) | UFSAR 15.2.5 |
| Startup of Inactive RCS Loop | Administrative prohibition in Modes 1-2 | UFSAR 15.2.6 |
| Loss of External Electrical Load | High PZR pressure trip, steam dump | UFSAR 15.2.7 |
| Loss of Normal Feedwater | Lo-Lo SG level trip, AFW actuation | UFSAR 15.2.8 |
| Loss of Offsite Power | RCP coastdown, AFW on UV signal, diesel generators | UFSAR 15.2.9 |
| Excessive Heat Removal (FW malfunction) | High flux trip, OT Delta-T | UFSAR 15.2.10 |
| Excessive Load Increase | Self-limiting with negative MTC; rod control response | UFSAR 15.2.11 |
| CVCS Malfunction (boron dilution) | Source range/OT Delta-T protection | UFSAR 15.2.12 |
| Inadvertent ECCS Actuation | Pressurizer level/pressure control; operator action | UFSAR 15.2.14 |

## Condition III Events (Infrequent Faults)

| Event | Key Protection | Source |
|-------|---------------|--------|
| Loss of Reactor Coolant (Small Break LOCA) | SI on low PZR pressure or high containment pressure | UFSAR 15.3.1 |
| Minor Secondary System Pipe Break | SI, steamline isolation | UFSAR 15.3.2 |
| Inadvertent Loading of a Fuel Assembly into an Improper Position | In-core monitoring, startup physics testing | UFSAR 15.3.3 |
| Complete Loss of Forced Reactor Coolant Flow | Low flow trip, RCP flywheel coastdown | UFSAR 15.3.4 |
| Single RCCA Withdrawal at Full Power | OT Delta-T, OP Delta-T | UFSAR 15.3.6 |

## Condition IV Events (Limiting Faults)

| Event | Key Protection | Source |
|-------|---------------|--------|
| Major Rupture of RCS (Large Break LOCA) | SI signal, ECCS injection (accumulators, SI pumps, RHR pumps) | UFSAR 15.4.1 |
| Major Secondary System Pipe Break (Steamline Break) | SI on steamline signals, MSIV closure, AFW | UFSAR 15.4.2 |
| Steam Generator Tube Rupture (SGTR) | SI on low PZR pressure, operator identification and isolation | UFSAR 15.4.3 |
| Single Reactor Coolant Pump Locked Rotor | Low flow trip, RCP breaker trip | UFSAR 15.4.4 |
| Fuel Handling Accident | Fuel building ventilation, HEPA/charcoal filters | UFSAR 15.4.5 |
| Rupture of a Control Rod Drive Mechanism (Rod Ejection) | High flux trip (high and low setpoints), OT Delta-T | UFSAR 15.4.6 |

## ATWS (Anticipated Transients Without Scram)

Analysis per 10CFR50.62 demonstrates that AMSAC (backup turbine trip and AFW actuation) prevents unacceptable consequences if the RPS fails to trip the reactor. Key mitigation: diverse AMSAC system trips turbine and starts AFW on low SG level independent of the RPS. (UFSAR 15.5)

## Key Analysis Assumptions

- **Initial conditions:** Nominal values with uncertainties applied per RTDP or STDP
- **Reactor trip:** Credited trip functions from TS including instrument uncertainties and response time delays
- **Single failure:** Most limiting single active failure assumed
- **Loss of offsite power:** Assumed concurrent with LOCA unless shown not limiting
- **Decay heat:** ANS-1979 decay heat model (UFSAR 15.1.8)
- **Rod insertion:** RCCA insertion curve from physics testing, most reactive rod stuck out
(UFSAR 15.1)

## Dose Consequence Limits

| Criterion | Limit | Source |
|-----------|-------|--------|
| Exclusion area boundary (2 hr) | 25 rem TEDE | 10CFR50.67 |
| Low population zone (duration) | 25 rem TEDE | 10CFR50.67 |
| Control room (30 days) | 5 rem TEDE | 10CFR50.67 / GDC-19 |

## Tech Spec LCOs

Accident analyses provide the bases for many Tech Spec limits including:
- Trip setpoints and response times ([[TS 3/4.3 — Instrumentation]])
- Shutdown margin requirements ([[TS 3/4.1 — Reactivity Control]])
- Power distribution limits ([[TS 3/4.2 — Power Distribution]])
- ECCS operability ([[TS 3/4.5 — ECCS]])
- Containment integrity ([[TS 3/4.6 — Containment]])

## Connections

- Related systems: [[Emergency Core Cooling Systems]], [[Reactor Coolant System]], [[Instrumentation and Controls]], [[Containment Systems]], [[Auxiliary Feedwater]]
- Related EOPs: [[EOP-TRIP-1 — Standard Post Trip Actions]], [[EOP-LOCA Series]], [[EOP-SGTR-1]], [[Critical Safety Function Status Trees]]
