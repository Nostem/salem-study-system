---
title: Reactor Coolant Pumps
category: systems
status: draft
aliases:
  - RCPs
  - RCP
---

# Reactor Coolant Pumps

## Function

Each reactor coolant loop contains a vertical, single-stage, mixed-flow pump with a controlled leakage seal assembly. The pumps circulate reactor coolant through the core, piping, and steam generators. (UFSAR 5.1, 5.5.1)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Number of Pumps | 4 | UFSAR T5.2-6 |
| Model | 93A | UFSAR T5.2-6 |
| Design/Operating Pressure | 2,485 / 2,235 psig | UFSAR T5.2-6 |
| Hydrostatic Test Pressure (cold) | 3,107 psig | UFSAR T5.2-6 |
| Design Temperature (casing) | 650°F | UFSAR T5.2-6 |
| RPM at Nameplate Rating | 1,180 | UFSAR T5.2-6 |
| Suction Temperature | 559°F | UFSAR T5.2-6 |
| Developed Head | 277 ft | UFSAR T5.2-6 |
| Capacity | 88,500 gpm | UFSAR T5.2-6 |
| Seal Water Injection | 8 gpm | UFSAR T5.2-6 |
| Seal Water Return | 3 gpm | UFSAR T5.2-6 |
| Pump Discharge Nozzle ID | 27½ in | UFSAR T5.2-6 |
| Pump Suction Nozzle ID | 31 in | UFSAR T5.2-6 |
| Overall Unit Height | 25 ft 5¼ in | UFSAR T5.2-6 |
| Water Volume | 56 ft³ | UFSAR T5.2-6 |
| Pump-Motor Moment of Inertia | 82,000 lb-ft² | UFSAR T5.2-6 |
| Pump Weight (dry) | 169,200 lb | UFSAR T5.2-6 |

## Motor Data

| Parameter | Value | Source |
|-----------|-------|--------|
| Type | AC Induction, Single Speed, Air Cooled | UFSAR T5.2-6 |
| Voltage | 4,160 V | UFSAR T5.2-6 |
| Phase | 3 | UFSAR T5.2-6 |
| Frequency | 60 Hz | UFSAR T5.2-6 |
| Power (nameplate) | 6,000 HP | UFSAR T5.2-6 |
| Starting Current | 4,800 amps | UFSAR T5.2-6 |
| Input (hot reactor coolant) | 4,260 kW | UFSAR T5.2-6 |
| Input (cold reactor coolant) | 5,690 kW | UFSAR T5.2-6 |
| Insulation | Class B Thermalastic Epoxy | UFSAR T5.2-6 |

## Design Features

- **Flow path:** Coolant drawn up through impeller, discharged through diffuser passages and out discharge nozzle
- **Maintenance:** Rotor-impeller can be removed without removing casing from piping
- **Materials:** All parts in contact with reactor coolant are austenitic stainless steel or equivalent corrosion-resistant materials
- **Controlled leakage seal assembly:** Three-stage seal with seal water injection from CVCS (8 gpm in, 3 gpm return)
- **Flywheel:** Provides coastdown flow during loss of power (moment of inertia 82,000 lb-ft²)
- **Anti-reverse rotation device:** Prevents reverse rotation on loss of power
- (UFSAR 5.1, 5.5.1)

## Loss of Offsite Power

On loss of offsite AC power, reactor coolant pumps are tripped. The flywheel moment of inertia (82,000 lb-ft²) provides coastdown flow sufficient to prevent fuel damage. (UFSAR 5.5.1.3.13)

## Loss of Component Cooling Water

Loss of CCW to the RCPs requires pump trip to protect the seals and thermal barrier. (UFSAR 5.5.1.3.14)

## Tech Spec LCOs

- **TS 3/4.4.1** — Reactor Coolant Loops (minimum loops in operation by mode)

## Connections

- Related systems: [[Reactor Coolant System]], [[Component Cooling Water]], [[Chemical and Volume Control System]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
