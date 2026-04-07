---
title: Diesel Generators
category: systems
status: draft
aliases:
  - EDG
  - emergency diesel generators
  - diesel generator
---

# Diesel Generators

## Function

Provide standby AC power to vital buses on loss of offsite power or upon receipt of a safety injection signal. Three separate and independent diesel generators per unit, each with a separate fuel supply and day tank. (UFSAR 8.3.1.5)

## Auto-Start Signals

- Safety Injection signal
- Loss of voltage on vital buses
- Degraded voltage on vital buses
(UFSAR 8.3.1.5)

## Key Design Points

- Each vital 4160V bus has a dedicated diesel generator
- 10-second start to rated speed and voltage
- Safeguards loads sequenced onto DGs after start to prevent overloading
- 7-day fuel oil supply required for OPERABILITY
- Each DG independent with separate fuel supply, starting air, and cooling

## Diesel Generator Trip Functions

DGs have protective trips that are bypassed during emergency start (SI or loss of voltage) to ensure the DG remains running when needed. Only certain trips remain active during emergency operation. (UFSAR 8.3.1.5.2)

## Safeguards Loading Sequence

On SI signal with loss of offsite power:
1. DGs auto-start
2. Vital bus loads shed
3. DGs connect to vital buses
4. Safeguards loads sequenced on in prescribed order and time delays
(UFSAR 7.3, 8.3)

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.1.1 requires 3 DGs OPERABLE in Modes 1–4
- 1 DG inoperable: 72 hours; demonstrate OPERABILITY of remaining DGs within 24 hours
- 1 DG AND 1 offsite circuit inoperable: 12 hours

## Connections

- Related systems: [[AC Power]], [[Electrical Power Systems]], [[Emergency Core Cooling Systems]]
- Related tech specs: [[TS 3/4.8 — Electrical]]
