---
title: RHR
category: systems
status: draft
aliases:
  - shutdown cooling
---

# RHR

## Function

The Residual Heat Removal (RHR) system removes decay heat from the reactor core during plant shutdown and cooldown. It reduces RCS temperature from 350°F to 140°F (cold shutdown/refueling). During a LOCA, the RHR pumps function as low-head safety injection pumps for the ECCS. (UFSAR 5.5.7)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| RCS Temperature at RHR Startup | 350°F | UFSAR T5.5-1 |
| Time to Cool from 350°F to 140°F (design, 2 trains) | 16 hr (original); 18 hr (with 1.4% uprate) | UFSAR T5.5-1 |
| Time to Cool (single train requirement) | 72 hr | UFSAR T5.5-1 |
| Decay Heat at 20 hr After Shutdown | 72.1 x 10⁶ Btu/hr (original design) | UFSAR T5.5-1 |
| CCW Supply Temperature (design) | 95°F | UFSAR T5.5-1 |
| RWST Boron Concentration | ~2000 ppm | UFSAR T5.5-1 |
| Plant Design Life | 40 years | UFSAR T5.5-1 |

## Heat Exchangers

| Parameter | Shell Side | Tube Side | Source |
|-----------|-----------|-----------|--------|
| Number | 2 per unit | — | UFSAR T5.5-1 |
| Design Heat Transfer | — | 34.15 x 10⁶ Btu/hr | UFSAR T5.5-1 |
| Design Pressure | 150 psig | 600 psig | UFSAR T5.5-1 |
| Design Temperature | 200°F | 400°F | UFSAR T5.5-1 |
| Design Flow Rate | 2.475 x 10⁶ lb/hr | 1.48 x 10⁶ lb/hr | UFSAR T5.5-1 |
| Design Outlet Temperature | 108.8°F | 114°F | UFSAR T5.5-1 |
| Design Inlet Temperature | 95°F | 137°F | UFSAR T5.5-1 |
| Fluid | CCW | Reactor coolant (borated demin water) | UFSAR T5.5-1 |
| Material | Carbon steel | Austenitic stainless steel | UFSAR T5.5-1 |

## Pumps

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 2 per unit | UFSAR T5.5-1 |
| Type | Vertical centrifugal | UFSAR T5.5-1 |
| Design Pressure | 600 psig | UFSAR T5.5-1 |
| Design Temperature | 400°F | UFSAR T5.5-1 |
| Shutoff Head | 170 psi | UFSAR T5.5-1 |
| Design Flow Rate | 3000 gpm | UFSAR T5.5-1 |
| Design Head | 350 ft | UFSAR T5.5-1 |
| Available NPSH at Design Flow | 25 ft | UFSAR T5.5-1 |
| Fluid Temperature Range | 40–350°F | UFSAR T5.5-1 |
| Material | Austenitic stainless steel | UFSAR T5.5-1 |

## Piping Design

| Section | Pressure | Temperature | Source |
|---------|----------|-------------|--------|
| Pump Suction (isolated loop) | 450 psig* | 400°F | UFSAR T5.5-1 |
| Pump Discharge (isolated loop) | 600 psig | 400°F | UFSAR T5.5-1 |
| Isolation Valves and Piping (RCS boundary) | 2485 psig | 650°F | UFSAR T5.5-1 |

*Unit 2 piping downstream of 2RH75 & 76 designed to 600 psig.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q30</div>
To <span class="hi-exam">LOWER the cooldown rate</span> while maintaining constant RHR flow: <span class="hi-exam">lower RH18 demand</span> (closes HX flow control valves, reducing flow through the RHR HX) and <span class="hi-exam">raise RH20 demand</span> (opens HX bypass valve, routing more flow around the HX). Total RHR flow stays constant but less passes through the heat exchanger. Reverse actions (raise RH18 / lower RH20) would increase cooldown rate.
</div>

## RCS Isolation

The RHR system is isolated from the RCS by two normally closed motor-operated valves in each suction line. These valves are interlocked to prevent opening when RCS pressure is above the RHR system design pressure. (UFSAR 5.5.7.3.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q7</div>
2RH1 and 2RH2 (RHR Suction Isolation Valves) are interlocked to <span class="hi-exam">PREVENT OPENING until PT-403 and PT-405 < <span class="val-normal">375 psig</span></span> — they do <span class="hi-trap">NOT auto-close on high RCS pressure. Must be manually closed during RCS heatup.</span> Design pressures: suction piping <span class="hi-exam">450 psig</span>, discharge piping <span class="hi-exam">600 psig</span> (design temp 400°F). Suction relief valve lifts at <span class="val-trip">350 psig</span>. POPs actuates at RCS > <span class="val-trip">375 psig</span> opening both PZR PORVs.
</div>

## LOCA Recirculation Mode

During LOCA recirculation, the RHR pumps take suction from the containment sump and pump radioactive borated water (with H₂ and NaOH in solution) through the RHR heat exchangers and into the RCS. (UFSAR T5.5-1)

## Tech Spec LCOs

- **[[TS 3/4.5 — ECCS]]** — RHR subsystems as part of ECCS
- **[[TS 3/4.9 — Refueling Operations|TS 3/4.9]]** — RHR requirements during refueling

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q79</div>
Loss of RHR breaker reclosure: per OP-SA-108-106-1001 step 4.2.2, during an <span class="hi-exam">emergency condition</span> the <span class="hi-exam">Shift Manager</span> can authorize one attempt at reclosing a failed breaker without an investigation, if the equipment is essential for plant stability. <span class="hi-trap">Does NOT require Plant Manager authorization or STA concurrence.</span> In the exam scenario, Time to Core Boiling <15 minutes with both RHR pumps lost constitutes an emergency condition.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-b</div>
EOP-LOCA-4 hot leg recirculation with 21 RHR pump C/T: Step 4.0 directs <span class="hi-exam">CLOSE 22CS36 (RHR Supply to CS Valve)</span> and <span class="hi-exam">OPEN 22SJ49 (Cold Leg Isolation Valve)</span> for the running 22 RHR pump alignment.
</div>

## Connections

- Related EOPs: [[EOP-LOCA-4 — Transfer to Hot Leg Recirculation]]
- Related exam questions: [[2023 Q30]], [[2023 Q79]], [[2022 Q7]]
- Related JPMs: [[2023 JPM Sim-b]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
