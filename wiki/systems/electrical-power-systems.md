---
title: Electrical Power Systems
category: systems
status: draft
aliases:
  - electrical
---

# Electrical Power Systems

## Function

The electrical power systems provide reliable power to all station auxiliaries during startup, operation, and shutdown. The Class 1E distribution system meets the intent of IEEE 308-1971. The station can be safely shut down from full power in the event of loss of all offsite power sources. Total loss of all onsite and offsite AC power is not a design basis event. (UFSAR 8.1)

## Offsite Power

- Two 500 kV transmission lines provide offsite power
- Station power transformers (13-4 kV) step down 500 kV to 4160 V for plant buses
- Auxiliary power transformer (25-4-4 kV) provides alternate power from the generator bus
- On unit trip, 4160V group buses automatically transfer from auxiliary transformer to station power transformer
(UFSAR 8.2)

## Onsite AC Power

### 4160V System

- **Group buses:** 4 sections, feed plant auxiliaries (non-safeguards)
- **Vital buses:** 3 sections per unit, feed safeguards equipment
- Vital buses fed from station power transformers (T13/T14 for Unit 1, T23/T24 for Unit 2)
- Two station power transformers per unit, each can supply vital buses
- In-feed breakers electrically interlocked to prevent paralleling through a vital bus
(UFSAR 8.3.1.2)

### 460V/230V Systems

- Step-down from 4160V vital buses via unit substations
- Feed motors, MOVs, heaters, and smaller loads
- Pressurizer heater buses (EP and GP) backed by EDGs for natural circulation support
(UFSAR 8.3.1.3)

### Emergency Diesel Generators

- Provide standby power to vital buses on loss of offsite power
- Auto-start on: SI signal, loss of voltage on vital buses, or degraded voltage
- Each vital bus has a dedicated diesel generator
- Safeguards loads sequenced onto diesel generators after start
(UFSAR 8.3.1.5)

## Onsite DC Power

- **125V DC:** Station batteries provide control power for switchgear, instrumentation, and vital DC loads
- **250V DC:** Provides power for turbine turning gear and other large DC loads
- **28V DC:** Provides power for reactor trip breaker undervoltage coils
- Station batteries located in separate rooms within Seismic Category I structures
- Battery chargers maintain batteries on float charge during normal operation
(UFSAR 8.3.2)

## Safeguards Sequence

On SI signal with loss of offsite power:
1. Diesel generators auto-start
2. Vital bus loads shed
3. Diesel generators connect to vital buses
4. Safeguards loads sequenced on in prescribed order and time delays
5. Ensures diesel generators not overloaded during accident response
(UFSAR 7.3, 8.3)

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — AC and DC power source operability
- **[[TS 3/4.8 — Electrical|TS 3/4.8.1]]** — AC Sources (offsite and onsite)
- **[[TS 3/4.8 — Electrical|TS 3/4.8.2]]** — DC Sources (batteries and chargers)
- **[[TS 3/4.8 — Electrical|TS 3/4.8.3]]** — Onsite Power Distribution

## Connections

