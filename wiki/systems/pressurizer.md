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
| Design/Operating Pressure | 2485 / <span class="val-normal">2235 psig</span> | UFSAR T5.2-4 |
| Hydrostatic Test Pressure (cold) | 3107 psig | UFSAR T5.2-4 |
| Design/Operating Temperature | 680 / <span class="val-normal">653°F</span> | UFSAR T5.2-4 |
| Shell ID | 84 in | UFSAR T5.2-4 |
| Water Volume (full power) | 1080 ft³ (60% of net internal volume) | UFSAR T5.2-4 |
| Steam Volume (full power) | 720 ft³ | UFSAR T5.2-4 |
| Electric Heater Capacity | 1800 kW | UFSAR T5.2-4 |
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
  - Spray valves begin to open at <span class="val-normal">2260 psig</span>
  - Spray valves full open at <span class="val-normal">2310 psig</span>
- **Pressure decrease:** Heaters energize, generating steam
  - Proportional heaters begin at <span class="val-normal">2250 psig</span>
  - Proportional heaters full at <span class="val-normal">2220 psig</span>
  - Backup heaters on at <span class="val-normal">2210 psig</span>
- **Overpressure protection:**
  - PORVs lift at <span class="val-trip">2335 psig</span> (reset 2315 psig)
  - Safety valves lift at <span class="val-trip">2485 psig</span>
- (UFSAR T5.2-1)

## Pressurizer Heater Power Supplies

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q7</div>
PZR Backup Heater Group power supplies:<br>
- <span class="hi-exam">Group 1 (21): Normal — 2G 4KV Group Bus. Emergency backup — 2C 460V Vital Bus.</span><br>
- <span class="hi-exam">Group 2 (22): Normal — 2E 4KV Group Bus. Emergency backup — 2A 460V Vital Bus.</span><br>
Transfer to emergency backup source is MANUAL (not automatic). EOP-LOSC-2 step 26 directs restoring normal power or transferring to emergency backup.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q14</div>
Following a reactor trip + SI with instrument air to containment isolated, PORVs cycle on accumulators. When air is restored (<span class="hi-exam">accumulators automatically isolate and realign to normal containment control air when pressure is restored — above 90 psig normal supply vs. below 85 psig accumulator</span>). No manual action is required for accumulator realignment. <span class="hi-exam">Pressurizer spray valves reopen when air is restored</span> because the Master Pressure Controller (MPC) will have demand to open spray valves post-trip.
</div>

## Pressurizer Relief Tank

| Parameter | Value | Source |
|-----------|-------|--------|
| Design Pressure | 100 psig | UFSAR T5.2-4 |
| Rupture Disc Release Pressure | 100 psig | UFSAR T5.2-4 |
| Design Temperature | 340°F | UFSAR T5.2-4 |
| Normal Water Temperature | Containment ambient (120°F max) | UFSAR T5.2-4 |
| Total Volume | 1800 ft³ | UFSAR T5.2-4 |
| Total Rupture Disc Relief Capacity | 1.60 x 10⁶ lb/hr | UFSAR T5.2-4 |

- Carbon steel with corrosion-resistant coating on wetted surfaces
- Normally contains water in a predominantly nitrogen atmosphere
- Steam enters through sparger pipe under water level
- Two rupture discs discharge to reactor containment
- Internal spray and drain for cooling after a discharge
- (UFSAR 5.1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q32</div>
PRT drain path per S2.OP-SO.PZR-0003: open <span class="hi-exam">2PR14 to drain PRT to RCDT</span>, which automatically opens 2WL12 and starts the RCDT pump (defeats low level cutoff). RCDT pump discharge destinations: <span class="hi-exam">RWST, CVCS Hold-Up Tanks, or Waste Hold-Up Tanks</span>. PRT does NOT gravity drain — the RCDT pump is required.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q34</div>
MPC fails low (0% output): <span class="hi-exam">spray valves close</span> (controlled by MPC) and <span class="hi-exam">backup heaters energize</span> → RCS pressure rises → PORVs open at <span class="val-trip">2335 psig</span>. <span class="hi-trap">PORVs are interlocked directly from PZR pressure, NOT from MPC output</span> — MPC failure does not prevent PORV actuation.
</div>

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.4]]** — Pressurizer (level and heater requirements)
- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.3]]** — PORVs and Block Valves

## Connections

- Related exam questions: [[2023 Q7]], [[2023 Q14]], [[2023 Q32]], [[2023 Q34]]
- Related exam: [[2023 NRC Written Exam]]
