---
title: Component Cooling Water
category: systems
status: draft
aliases:
  - CCW
---

# Component Cooling Water

## Function

Closed-loop cooling water system that provides an intermediate barrier between potentially radioactive systems and the service water system. Removes heat from various plant components and transfers it to the service water system. (UFSAR 9.2.2)

## Key Loads

- Reactor coolant pump thermal barriers and motor coolers
- Residual heat removal heat exchangers (shutdown cooling)
- Letdown heat exchanger (CVCS)
- Excess letdown heat exchanger
- Spent fuel pool heat exchangers
- Sample coolers
- Reactor support and nozzle cooling

## Key Components

- **Component cooling heat exchangers:** Cooled by service water
- **Component cooling pumps:** Circulate CCW through the closed loop
- **Component cooling surge tank:** Maintains system filled, accommodates thermal expansion

## Key Design Points

- Closed loop prevents direct contact between potentially radioactive fluids and service water
- Surge tank provides indication of system leakage (radioactivity monitoring on CCW)
- Loss of CCW to RCPs requires RCP trip to protect seals and thermal barrier (UFSAR 5.5.1.3.14)

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.3 requires two independent CCW loops OPERABLE in Modes 1–4
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours

## Connections

- Related systems: [[Reactor Coolant Pumps]], [[Residual Heat Removal]], [[Service Water]], [[Chemical and Volume Control System]]
