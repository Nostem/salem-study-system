---
title: DC Power
category: systems
status: draft
aliases:
  - DC power systems
  - station batteries
  - 125V DC
  - 250V DC
  - 28V DC
---

# DC Power

## Function

Provides DC electrical power for control functions, instrumentation, diesel generator starting, reactor trip breaker operation, and emergency lighting. (UFSAR 8.3.2)

## 125V DC System

- Three 125V battery banks with associated chargers per unit
- Provides control power for: switchgear operation, diesel generator field flashing and starting, vital instrumentation, emergency lighting, PORV and block valve control
- Station batteries located in separate rooms within Seismic Category I structures
- Battery chargers maintain batteries on float charge during normal operation
(UFSAR 8.3.2.1, 8.3.2.2)

## 250V DC System

- Provides power for turbine turning gear and other large DC loads
(UFSAR 8.3.2.1)

## 28V DC System

- Three 28V battery supplies per unit
- Provides power for reactor trip breaker undervoltage coils
- Loss of 28V DC supply causes reactor trip breaker to open (fail-safe design)
(UFSAR 8.3.2.1)

## Key Design Points

- DC power is critical for safety functions — provides control power independent of AC
- 125V batteries sized for station blackout duration
- Battery OPERABILITY verified by regular capacity testing
- Loss of a 28V supply directly trips the associated reactor trip breaker

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.2.1 requires three 125V battery banks and three 28V supplies OPERABLE
- 1 battery bank inoperable: 2 hours to restore
- 1 charger inoperable: 24 hours (with spare charger)
- 1 of 3 28V supplies inoperable: 48 hours

## Connections

- Related systems: [[AC Power]], [[Diesel Generators]], [[Electrical Power Systems]], [[Instrumentation and Controls]]
