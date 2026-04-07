---
title: AC Power
category: systems
status: draft
aliases:
  - AC power systems
  - offsite power
  - 500kV
  - 4160V
  - vital buses
  - group buses
---

# AC Power

## Function

Provides AC electrical power to all station auxiliaries during startup, operation, and shutdown. Two independent offsite circuits and three onsite diesel generators ensure reliable power. (UFSAR 8.1, 8.2, 8.3)

## Offsite Power (500kV)

- Two physically independent 500kV transmission circuits
- Station power transformers (13-4 kV) step down to 4160V for plant buses
- Auxiliary power transformer (25-4-4 kV) provides alternate from generator bus
- On unit trip, 4160V group buses automatically transfer from auxiliary transformer to station power transformer
(UFSAR 8.2)

## 4160V System

### Group Buses (Non-Safety)
- 4 sections
- Feed plant auxiliaries (non-safeguards loads)
- Powered from station power transformers (normal) or auxiliary power transformer (during operation)
(UFSAR 8.3.1.2)

### Vital Buses (Safety-Related)
- 3 sections per unit (A, B, C)
- Feed safeguards equipment (ECCS pumps, containment spray, etc.)
- Each vital bus fed from station power transformers (T13/T14 for Unit 1, T23/T24 for Unit 2)
- Two station power transformers per unit — each can supply vital buses
- In-feed breakers electrically interlocked to prevent paralleling through a vital bus
- Each vital bus backed by a dedicated diesel generator
(UFSAR 8.3.1.2)

## 460V/230V Systems

- Step-down from 4160V vital buses via unit substations
- Feed motors, MOVs, heaters, and smaller loads
- Pressurizer heater buses (EP and GP) backed by EDGs for natural circulation support
(UFSAR 8.3.1.3)

## 115V AC Instrumentation Power

- Vital instrument buses provide power to protection system instrumentation
- Fed from inverters (normal) with automatic transfer to regulated AC supply (backup)
(UFSAR 8.3.1.4)

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.1.1 requires 2 offsite circuits OPERABLE in Modes 1–4
- 1 offsite circuit inoperable: 72 hours
- 2 offsite circuits inoperable: 24 hours
- TS 3.8.3.1 requires vital buses energized and OPERABLE

## Connections

- Related systems: [[Diesel Generators]], [[DC Power]], [[Electrical Power Systems]]
- Related tech specs: [[TS 3/4.8 — Electrical]]
