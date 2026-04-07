---
title: Auxiliary Systems
category: systems
status: draft
aliases:
  - auxiliary
---

# Auxiliary Systems

## Overview

Chapter 9 covers fuel storage and handling, water systems (service water, CCW, CVCS), process auxiliaries, HVAC systems, and other support systems including fire protection, diesel generator support, and communications. (UFSAR 9)

## Service Water System

Provides cooling water from the Delaware River to: containment fan coil units (CFCUs), component cooling water heat exchangers, diesel generator jacket water coolers, and other plant heat loads. Safety-related, Seismic Category I. (UFSAR 9.2.1)

### Key Design Points
- <span class="hi">Supplies minimum 1300 gpm to each CFCU during accident conditions</span>
- Ultimate heat sink: Delaware River
- Safety-related supply for post-accident cooling

## Component Cooling Water System

Closed-loop cooling water system that provides an intermediate barrier between potentially radioactive systems and the service water system. (UFSAR 9.2.2)

### Key Loads
- Reactor coolant pump thermal barriers and motor coolers
- Residual heat removal heat exchangers (shutdown cooling)
- Letdown heat exchanger (CVCS)
- Excess letdown heat exchanger
- Spent fuel pool heat exchangers
- Various sample coolers

### Key Components
- Component cooling heat exchangers (cooled by service water)
- Component cooling pumps
- Component cooling surge tank (maintains system filled)

Loss of CCW to RCPs requires pump trip to protect seals and thermal barrier. (UFSAR 5.5.1.3.14)

## Chemical and Volume Control System (CVCS)

### Function
Controls RCS chemistry, inventory, and boron concentration. Provides: charging flow, letdown flow, RCP seal injection, boron concentration control, RCS chemistry control, and RCS inventory control. (UFSAR 9.3.4)

### Design Bases
- **Reactivity hold-down:** Compensates for fuel burnup and fission product poisoning by adjusting boron concentration
- **Hot shutdown capability:** Can borate RCS to hot shutdown boron concentration
- **Cold shutdown capability:** Can borate RCS to cold shutdown conditions
- Provides seal water injection to RCPs (8 gpm per pump)
(UFSAR 9.3.4.1)

### Major Components
- **Charging pumps:** 2 centrifugal (also serve as high-head SI pumps during LOCA)
- **Letdown orifices:** Control letdown flow rate
- **Letdown heat exchanger:** Cools letdown flow before processing
- **Mixed bed demineralizers:** Remove ionic impurities and fission products
- **Volume control tank (VCT):** Surge volume for charging/letdown mismatch, hydrogen cover gas for dissolved gas control
- **Boric acid tanks:** Store concentrated boric acid solution for boration
- **Boric acid transfer pumps:** Transfer boric acid from tanks to RCS
- **Excess letdown heat exchanger:** Alternate letdown path
(UFSAR 9.3.4.2)

### Reactor Makeup Control Modes
- **Dilution:** Increases flow from primary water supply, decreases boron concentration
- **Boration:** Transfers boric acid from boric acid tanks to charging pump suction
- **Automatic makeup:** Maintains VCT level by automatically adjusting primary water and boric acid flows
(UFSAR 9.3.4.2.4)

## Auxiliary Feedwater System

Provides feedwater to steam generators when the main feedwater system is unavailable. Safety-related. (UFSAR 10.4.9)

### Pumps
- **2 motor-driven pumps:** Each can supply 2 steam generators. Powered from vital buses (EDG-backed).
- **1 turbine-driven pump:** Steam-driven from main steam. Can supply all 4 steam generators. Powered by vital DC (no AC required).

### Actuation (from UFSAR T7.2-1)
- **Turbine-driven:** <span class="hi-exam">2/3 Lo-Lo level in any 2 SGs; RCP bus undervoltage 1/2 twice; manual</span>
- **Motor-driven:** <span class="hi-exam">2/3 Lo-Lo level in any SG; trip of both main FW pumps; SI signal; blackout signal; manual</span>

### Water Source
- Primary: condensate storage tank
- Backup: service water (safety-related, unlimited supply)

## Spent Fuel Pool Cooling System

Removes decay heat from spent fuel stored in the spent fuel pool. Maintains pool water temperature and clarity. Two cooling trains per unit with heat exchangers cooled by CCW. (UFSAR 9.1.3)

## Compressed Air System

- **Instrument air:** Provides clean, dry air to pneumatic instruments and controls
- **Station air:** Provides air for maintenance and general use
- Loss of instrument air causes air-operated valves to fail to their safe position
(UFSAR 9.3.1)

## Fire Protection

- Fire detection and alarm system throughout the plant
- Water supply (fire water pumps, sprinklers, standpipes)
- CO₂, Halon, and dry chemical suppression in specific areas
- Safe shutdown capability analysis per 10CFR50 Appendix R
- RCP oil collection system prevents fire spread from oil leaks
(UFSAR 9.5.1)

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — AFW, SW, CCW, and other plant systems
- **TS 3/4.7.1.2** — Auxiliary Feedwater
- **TS 3/4.7.3** — Component Cooling Water
- **TS 3/4.7.4** — Service Water
- **[[TS 3/4.1 — Reactivity Control]]** — Boration systems (CVCS)
- **TS 3/4.9** — Refueling Operations (SFP cooling)

## Connections

- Related systems: [[Reactor Coolant System]], [[Steam Generators]], [[Reactor Coolant Pumps]], [[Emergency Core Cooling Systems]], [[Containment Systems]], [[Electrical Power Systems]]
- Related tech specs: [[TS 3/4.7 — Plant Systems]], [[TS 3/4.1 — Reactivity Control]]
