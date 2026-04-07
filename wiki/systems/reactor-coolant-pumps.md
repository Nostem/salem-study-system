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
| Design/Operating Pressure | 2485 / 2235 psig | UFSAR T5.2-6 |
| Hydrostatic Test Pressure (cold) | 3107 psig | UFSAR T5.2-6 |
| Design Temperature (casing) | 650°F | UFSAR T5.2-6 |
| RPM at Nameplate Rating | 1180 | UFSAR T5.2-6 |
| Suction Temperature | 559°F | UFSAR T5.2-6 |
| Developed Head | 277 ft | UFSAR T5.2-6 |
| Capacity | 88500 gpm | UFSAR T5.2-6 |
| Seal Water Injection | 8 gpm | UFSAR T5.2-6 |
| Seal Water Return | 3 gpm | UFSAR T5.2-6 |
| Pump Discharge Nozzle ID | 27½ in | UFSAR T5.2-6 |
| Pump Suction Nozzle ID | 31 in | UFSAR T5.2-6 |
| Overall Unit Height | 25 ft 5¼ in | UFSAR T5.2-6 |
| Water Volume | 56 ft³ | UFSAR T5.2-6 |
| Pump-Motor Moment of Inertia | 82000 lb-ft² | UFSAR T5.2-6 |
| Pump Weight (dry) | 169200 lb | UFSAR T5.2-6 |

## Motor Data

| Parameter | Value | Source |
|-----------|-------|--------|
| Type | AC Induction, Single Speed, Air Cooled | UFSAR T5.2-6 |
| Voltage | 4160 V | UFSAR T5.2-6 |
| Phase | 3 | UFSAR T5.2-6 |
| Frequency | 60 Hz | UFSAR T5.2-6 |
| Power (nameplate) | 6000 HP | UFSAR T5.2-6 |
| Starting Current | 4800 amps | UFSAR T5.2-6 |
| Input (hot reactor coolant) | 4260 kW | UFSAR T5.2-6 |
| Input (cold reactor coolant) | 5690 kW | UFSAR T5.2-6 |
| Insulation | Class B Thermalastic Epoxy | UFSAR T5.2-6 |

## Design Features

- **Flow path:** Coolant drawn up through impeller, discharged through diffuser passages and out discharge nozzle
- **Maintenance:** Rotor-impeller can be removed without removing casing from piping
- **Materials:** All parts in contact with reactor coolant are austenitic stainless steel or equivalent corrosion-resistant materials
- **Controlled leakage seal assembly:** Three-stage seal with seal water injection from CVCS (8 gpm in, 3 gpm return)
- **Flywheel:** Provides coastdown flow during loss of power (moment of inertia 82000 lb-ft²)
- **Anti-reverse rotation device:** Prevents reverse rotation on loss of power
- (UFSAR 5.1, 5.5.1)

## RCP Seal System

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q10</div>
If ANY RCP seal inlet temperature is ≥ <span class="val-trip">225°F</span>, restoring seal injection flow is NOT permitted. Seal injection must be isolated before starting the charging pump. This prevents thermal shock and damage to the #1 seal from cold seal injection water contacting hot seal components.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q4</div>
RCP thermal barrier rupture indications: (1) CCW radiation monitors (R17 A/B) in warning — RCS leaking into CCW, (2) CCW surge tank level rising, (3) CC131 thermal barrier isolation valve goes CLOSED on high CCW flow. PZR level does NOT rise (RCS is leaking OUT). Charging flow does NOT lower.
</div>

- **Seal inlet temp limit:** <span class="val-trip">≥225°F</span> — do not restore seal injection (prevents #1 seal thermal shock damage)
- **Seal outlet temp limit:** <span class="val-trip">190°F</span> — monitored to prevent Safe Shutdown Seal actuation
- **CC131 Thermal Barrier Valve:** Closes automatically on high CCW flow to thermal barrier (indicates thermal barrier leak)

## Loss of Offsite Power

On loss of offsite AC power, reactor coolant pumps are tripped. The flywheel moment of inertia (82000 lb-ft²) provides coastdown flow sufficient to prevent fuel damage. (UFSAR 5.5.1.3.13)

## Loss of Component Cooling Water

Loss of CCW to the RCPs requires pump trip to protect the seals and thermal barrier. (UFSAR 5.5.1.3.14)

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.1]]** — Reactor Coolant Loops (minimum loops in operation by mode)

## Connections

- Related systems: [[Reactor Coolant System]], [[Component Cooling Water]], [[Chemical and Volume Control System]]
