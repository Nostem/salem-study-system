---
title: Pressurizer
category: systems
status: draft
aliases:
  - PZR
---

# Pressurizer

## Function

The pressurizer provides a point in the RCS where liquid and vapor are maintained in equilibrium under saturated conditions for pressure control. It accommodates positive and negative surges caused by load transients. (UFSAR 5.1, 5.5.10)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Design/Operating Pressure | 2,485 / 2,235 psig | UFSAR T5.2-4 |
| Hydrostatic Test Pressure (cold) | 3,107 psig | UFSAR T5.2-4 |
| Design/Operating Temperature | 680 / 653°F | UFSAR T5.2-4 |
| Shell ID | 84 in | UFSAR T5.2-4 |
| Water Volume (full power) | 1,080 ft³ (60% of net internal volume) | UFSAR T5.2-4 |
| Steam Volume (full power) | 720 ft³ | UFSAR T5.2-4 |
| Electric Heater Capacity | 1,800 kW | UFSAR T5.2-4 |
| Heatup Rate (heaters only) | ~55°F/hr | UFSAR T5.2-4 |
| Maximum Spray Rate | 800 gpm | UFSAR T5.2-4 |
| Surge Line Nozzle Diameter | 14 in | UFSAR T5.2-4 |

## Construction

- Vertical, cylindrical vessel with hemispherical top and bottom heads
- Carbon steel construction with austenitic stainless steel cladding on all surfaces exposed to reactor coolant
- Electrical heaters installed through the bottom head (removable for maintenance)
- Spray nozzle, relief and safety valve connections on top head
- Surge line attached to bottom, connects to hot leg of one RCS loop
- (UFSAR 5.1)

## Pressure Control

- **Pressure increase:** Spray valves open, condensing steam in the pressurizer steam space
  - Spray valves begin to open at <span class="val-normal">2,260 psig</span>
  - Spray valves full open at <span class="val-normal">2,310 psig</span>
- **Pressure decrease:** Heaters energize, generating steam
  - Proportional heaters begin at <span class="val-normal">2,250 psig</span>
  - Proportional heaters full at <span class="val-normal">2,220 psig</span>
  - Backup heaters on at <span class="val-normal">2,210 psig</span>
- **Overpressure protection:**
  - PORVs lift at <span class="val-trip">2,335 psig</span> (reset 2,315 psig)
  - Safety valves lift at <span class="val-trip">2,485 psig</span>
- (UFSAR T5.2-1)

## Pressurizer Relief Tank

| Parameter | Value | Source |
|-----------|-------|--------|
| Design Pressure | 100 psig | UFSAR T5.2-4 |
| Rupture Disc Release Pressure | 100 psig | UFSAR T5.2-4 |
| Design Temperature | 340°F | UFSAR T5.2-4 |
| Normal Water Temperature | Containment ambient (120°F max) | UFSAR T5.2-4 |
| Total Volume | 1,800 ft³ | UFSAR T5.2-4 |
| Total Rupture Disc Relief Capacity | 1.60 x 10⁶ lb/hr | UFSAR T5.2-4 |

- Carbon steel with corrosion-resistant coating on wetted surfaces
- Normally contains water in a predominantly nitrogen atmosphere
- Steam enters through sparger pipe under water level
- Two rupture discs discharge to reactor containment
- Internal spray and drain for cooling after a discharge
- (UFSAR 5.1)

## Tech Spec LCOs

- **TS 3/4.4.4** — Pressurizer (level and heater requirements)
- **TS 3/4.4.3** — PORVs and Block Valves

## Connections

- Related systems: [[Reactor Coolant System]], [[Chemical and Volume Control System]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
