---
title: Pressurizer & PRT
category: systems
status: draft
aliases:
  - PZR
  - pressurizer
  - Pressurizer
---

# Pressurizer & PRT

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
<div class="callout-label">Exam — 2022 Q34</div>
PRT has a <span class="hi-exam">rupture disc (NOT a relief valve)</span> rated at <span class="val-trip">100 psig</span>. 2PR15 (PRT Vent to RCDT) <span class="hi-exam">cannot be opened if PRT pressure ≥ <span class="val-alarm">10 psig</span></span> — interlock prevents opening. Per S2.OP-SO.PZR-0003, if PRT pressure ≥ 10 psig: drain PRT first via 2PR14 to lower level and pressure, then open 2PR15 to vent PRT to 3 psig. <span class="hi-trap">2PR15 is NOT available for venting when PRT pressure is above 10 psig — must drain first to clear the interlock.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q32</div>
PRT drain path per S2.OP-SO.PZR-0003: open <span class="hi-exam">2PR14 to drain PRT to RCDT</span>, which automatically opens 2WL12 and starts the RCDT pump (defeats low level cutoff). RCDT pump discharge destinations: <span class="hi-exam">RWST, CVCS Hold-Up Tanks, or Waste Hold-Up Tanks</span>. PRT does NOT gravity drain — the RCDT pump is required.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
PZR vapor space leak (SBLOCA): at RCS pressure <span class="hi-exam">1450 psig</span> stable with subcooling 10°F and PZR level 30% rising, both <span class="hi-exam">charging and SI pumps are injecting</span>. SI termination criteria in EOP-LOCA-1 are met — transition to EOP-TRIP-3, not directly to EOP-LOCA-2. Ultimately: LOCA-1 → TRIP-3 → LOCA-2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q02</div>
PORV discharge temperature is determined by a <span class="hi-exam">constant enthalpy (throttling) process</span> from RCS pressure to PRT pressure (Mollier Diagram). Key relationships: <span class="hi-exam">lowering PRT pressure → lower discharge temperature; raising PRT pressure → higher discharge temperature</span>. Changes in RCS pressure or PORV leak rate do NOT directly lower the indicated discharge temperature. A leaking PRT rupture disk lowers PRT pressure, thereby lowering discharge temperature.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q2</div>
PZR safety valve leak is a <span class="hi-exam">throttling/constant enthalpy process</span>. Tailpipe temperature determined by following the enthalpy line on a Mollier diagram to PRT pressure. At RCS <span class="val-normal">1900 psig</span> (1915 psia, hg ~1140 BTU/lb), throttling to PRT <span class="val-normal">35 psig</span> (50 psia) yields tailpipe temperature of approximately <span class="hi-exam">282°F</span>.
</div>

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.4]]** — Pressurizer (level and heater requirements)
- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.3]]** — PORVs and Block Valves

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-c</div>
EOP-LOCA-2 Step 20 depressurization via Auxiliary Spray: open <span class="hi-exam">2CV75 (RCS Aux Spray Valve)</span>, close 2CV77/2CV79 (charging to loops). Stop when <span class="hi-exam">PZR level >77% (74% adverse) or subcooling <10F</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-d</div>
EOP-FRHS-1 Bleed and Feed: if PORV 2PR2 fails to open, open <span class="hi-exam">reactor head vent valves 2RC40 through 2RC43</span> (key-locked on 2RP2 backpanel) as alternate bleed path. 2PR1 must already be open for the "bleed" portion.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-i</div>
Transfer of 22 Backup Group PZR heaters to emergency power (2A 460V Vital Bus) per S2.OP-SO.PZR-0010 Section 5.3: place <span class="hi-exam">11 of 14 disconnects in OFF</span> (only 3 remain ON to limit load within emergency bus capacity), place <span class="hi-exam">2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH in ON</span> using JAM key, then insert interlock key and <span class="hi-exam">UNLOCK breaker 2AX1AX14X</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
PZR spray valve 2PS3 fails to close during SGTR-1 RCS depressurization. Both spray valves opened for depressurization per Table D criteria. When termination criteria met, RO closes both valves — <span class="hi-exam">2PS3 fails to close</span>. Recovery: <span class="hi-exam">stop 21 and 23 RCPs</span> to eliminate spray flow path (spray valves are in the RCP seal injection lines from the cold legs of loops 1 and 3). Also: earlier in scenario, 2PR2 PORV seat leakage diagnosed via tailpipe temperature and isolated by closing block valve <span class="hi-exam">2PR7</span>.
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related procedures: [[EOP-TRIP-4 — Natural Circulation]], [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]], [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related EOPs: [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam questions: [[2020 Q02]], [[2020 Q05]], [[2020 Q33]], [[2020 Q36]], [[2023 Q32]], [[2023 Q76]], [[2022 Q2]], [[2022 Q34]]
- Related JPMs: [[2023 JPM Sim-c]], [[2023 JPM Sim-d]], [[2022 JPM IP-i]]
- Related scenarios: [[2022 Scenario 4]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
