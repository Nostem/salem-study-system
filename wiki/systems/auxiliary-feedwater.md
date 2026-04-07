---
title: Auxiliary Feedwater
category: systems
status: draft
aliases:
  - AFW
  - auxiliary feedwater system
---

# Auxiliary Feedwater

## Function

Provides feedwater to steam generators when the main feedwater system is unavailable. Ensures decay heat removal via the steam generators following reactor trip, loss of main feedwater, or loss of offsite power. Safety-related. (UFSAR 10.4.9)

## Pumps

| Parameter | Motor-Driven (2) | Turbine-Driven (1) |
|-----------|------------------|---------------------|
| Number | 2 | 1 |
| Power Source | Vital buses (EDG-backed) | Main steam (no AC required) |
| SG Supply | Each can supply 2 SGs | Can supply all 4 SGs |
| DC Control Power | Vital DC | Vital DC |

## Actuation Signals

| Pump | Actuation Signals | Source |
|------|------------------|--------|
| Turbine-Driven | 2/3 Lo-Lo level in any 2 SGs; OR RCP bus undervoltage (1/2 twice); OR manual (local and remote) | UFSAR T7.2-1 |
| Motor-Driven | 2/3 Lo level in any SG; OR trip of both main FW pumps; OR safeguards sequence signal; OR blackout sequence signal; OR manual (local and remote) | UFSAR T7.2-1 |

## Water Sources

- **Primary:** Condensate storage tank
- **Backup:** Service water system (safety-related, unlimited supply from Delaware River)

## Key Design Points

- Turbine-driven pump is available during station blackout (no AC power required)
- Motor-driven pumps auto-start on lower SG level setpoint than turbine-driven pump
- Turbine-driven pump requires steam pressure >680 psig for IST testing

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.2 requires three independent AFW pumps OPERABLE in Modes 1, 2, and 3
- 1 pump inoperable: 72 hours to restore
- 2 pumps inoperable: Hot Standby in 6 hours
- 3 pumps inoperable: immediately restore at least one

## Connections

- Related systems: [[Steam Generators]], [[Main Steam and Feedwater]], [[Service Water]], [[Electrical Power Systems]]
- Related EOPs: [[EOP-TRIP-1 — Standard Post Trip Actions]]
