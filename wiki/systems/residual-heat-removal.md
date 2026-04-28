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
<div class="callout-label">Exam — 2018 Q3</div>
RHR system physical connections: RHR Pumps take suction from the <span class="hi-exam">21 Hot Leg</span> and can be aligned to discharge into the <span class="hi-exam">23 and 24 Hot Legs</span>. The suction and discharge connections are NOT on the same loops — suction is from Loop 1, discharge is to Loops 3 and 4.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q4</div>
During solid plant operations in MODE 5, throttling 22RH18 (RHR HX Outlet Valve) more CLOSED and 2RH20 (RHR HX Bypass Valve) more OPEN reduces flow through the RHR HX → <span class="hi-exam">RCS temperature rises → RCS pressure rises</span> (water is incompressible in solid plant conditions). To restore pressure: <span class="hi-exam">throttle 2CV18 (Low Pressure Letdown Control Valve) more OPEN</span> to increase letdown flow. <span class="hi-trap">Solid plant pressure control is maintained by adjusting letdown (not charging). Throttling CV18 more closed would RAISE RCS pressure, not lower it.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q30</div>
To <span class="hi-exam">LOWER the cooldown rate</span> while maintaining constant RHR flow: <span class="hi-exam">lower RH18 demand</span> (closes HX flow control valves, reducing flow through the RHR HX) and <span class="hi-exam">raise RH20 demand</span> (opens HX bypass valve, routing more flow around the HX). Total RHR flow stays constant but less passes through the heat exchanger. Reverse actions (raise RH18 / lower RH20) would increase cooldown rate.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q31</div>
RHR HX tube blockage from foreign material reduces heat transfer, lowering cooldown rate. To <span class="hi-exam">RESTORE the cooldown rate: raise 21RH18 demand</span> (increases flow through the partially blocked RHR HX to compensate) and <span class="hi-exam">lower 2RH20 demand</span> (decreases HX bypass flow, forcing more total flow through the HX). Per S2.OP-SO.RHR-0001. <span class="hi-trap">Trap: "raise demand" on RH18 OPENS the valve (more HX flow); "lower demand" on RH20 CLOSES the bypass (less bypass flow). Both actions increase heat removal through the HX.</span>
</div>

## Valve Failure Modes

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q31</div>
21RH18 (RHR HX Outlet Valve) fails <span class="hi-exam">OPEN on loss of 2A VIB</span> (115V Vital Instrument Bus) — increases flow through RHR HX, <span class="hi-exam">RCS temperature lowers</span>. 2RH20 (RHR HX Bypass Valve) fails <span class="hi-exam">OPEN on loss of 2D VIB</span> — independent power supply from 21RH18. <span class="hi-trap">Loss of 2A VIB only affects 21RH18, NOT 2RH20. 2RH20 remains as-is unless 2D VIB is lost.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q32</div>
Solid plant ops with RHR pump trip: RCS pressure <span class="hi-exam">rises</span> (charging continues adding inventory with no RHR pump to provide letdown path). Letdown line pressure <span class="hi-exam">lowers</span> (loss of RHR discharge pressure). 2CV18 throttles closed attempting to maintain letdown pressure at setpoint. 2CV6 (Letdown Relief Valve) opens at <span class="val-trip">600 psig</span> to protect downstream piping if pressure not controlled.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q12</div>
RHR pump power supply: <span class="hi-exam">22 RHR Pump is powered from 2B 4KV Vital Bus</span> (NOT 2C). During a Reactor Trip + SI coincident with LOOP and EDG 2C unavailable, 22 RHR Pump is running because 2B bus is powered by EDG 2B. <span class="hi-trap">Common confusion: 22 SI Pump is on 2C bus, but 22 RHR Pump is on 2B bus — pump number does not indicate bus assignment.</span>
</div>

## RCS Isolation

The RHR system is isolated from the RCS by two normally closed motor-operated valves in each suction line. These valves are interlocked to prevent opening when RCS pressure is above the RHR system design pressure. (UFSAR 5.5.7.3.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q7</div>
2RH1 and 2RH2 (RHR Suction Isolation Valves) are interlocked to <span class="hi-exam">PREVENT OPENING until PT-403 and PT-405 < <span class="val-normal">375 psig</span></span> — they do <span class="hi-trap">NOT auto-close on high RCS pressure. Must be manually closed during RCS heatup.</span> Design pressures: suction piping <span class="hi-exam">450 psig</span>, discharge piping <span class="hi-exam">600 psig</span> (design temp 400°F). Suction relief valve lifts at <span class="val-trip">350 psig</span>. POPs actuates at RCS > <span class="val-trip">375 psig</span> opening both PZR PORVs.
</div>

## LOCA Recirculation Mode

During LOCA recirculation, the RHR pumps take suction from the containment sump and pump radioactive borated water (with H₂ and NaOH in solution) through the RHR heat exchangers and into the RCS. (UFSAR T5.5-1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q6</div>
Shutdown LOCA in Mode 4 (RCS temp 325°F, pressure 300 psig): enter <span class="hi-exam">AB.LOCA-0001 (Shutdown LOCA)</span> for any uncontrolled reduction in PZR level in Mode 4. CAS directs if PZR level <span class="hi-exam">&lt;11%: stop the operating RHR Pump aligned for Shutdown Cooling and close 2RH1 and 2RH2 (RHR Common Suction)</span>. <span class="hi-trap">AB.RHR-0001 redirects to AB.LOCA-0001 in Mode 4. AB.RHR-0001 actions (isolate letdown, start SI/charging, maintain PZR level 5-50%) apply only to Modes 5 or 6.</span>
</div>

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

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
21 RHR pump C/T for motor bearing inspection. During LBLOCA, <span class="hi-exam">22 RHR pump fails to start on 2B SEC signal</span> (CT#2, CT-5). PO blocks and resets 2B SEC, RO manually starts 22 RHR. Later in EOP-LOCA-1, <span class="hi-exam">22 RHR pump trips on overcurrent</span> — no RHR pumps available for emergency recirculation. CRS transitions to EOP-LOCA-5, Loss of Emergency Recirculation. Loss of both RHR pumps is the driver for CT#3 (RWST conservation actions).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #2</div>
21 RHR Pump C/T for motor bearing replacement (initial condition). During LBLOCA in EOP-TRIP-1, <span class="hi-exam">22 RHR pump fails to start on 2B SEC signal</span> — PO blocks and resets 2B SEC, RO manually starts 22 RHR (CT-5). Later in EOP-LOCA-1, <span class="hi-exam">22 RHR pump trips on overcurrent (relay flag dropped)</span>. No RHR pumps available — transition to EOP-LOCA-5.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q25</div>
LOCA outside containment indication from RHR piping: <span class="hi-exam">OHA C-34 (22 RHR SUMP OVRFLO) and 23/24 RHR Sump Pump starts</span> indicate a leak in the RHR system outside containment. During SI termination (EOP-TRIP-3), these alarms combined with 2R41D Plant Vent alarm and inability to recover PZR level trigger the CAS to restart ECCS pumps and transition to EOP-LOCA-1, then to EOP-LOCA-6.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-b</div>
Loss of both RHR pumps in Mode 5 with RCS depressurized and vented (2PS59). 21 RHR Pump trips on electrical fault. Alternate path: <span class="hi-exam">22 RHR Pump trips shortly after starting</span>. With both pumps lost, navigate AB.RHR-0001 to Step 3.32 and select <span class="hi-exam">Attachment 8, Cold Leg Injection</span> (preferred when core exit TCs <span class="hi-exam">&lt;200°F</span>). Valve lineup: open <span class="hi-exam">RWST outlet (2SJ1/2SJ2)</span>, close <span class="hi-exam">VCT outlet (2CV40/2CV41)</span>, open <span class="hi-exam">BIT inlet/outlet (2SJ4/2SJ5, 2SJ12/2SJ13)</span>, close <span class="hi-exam">charging discharge (2CV68/2CV69)</span> — establishing borated injection from RWST through BIT to cold legs via the running charging pump.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q63</div>
During LOCA outside containment (EOP-LOCA-6), the crew is MOST concerned with <span class="hi-exam">RHR piping connecting to the RCS</span> because it is only rated to <span class="hi-exam">600 psig</span> (vs RCS piping rated to 2500 psig). This is the basis for the leak isolation strategy in LOCA-6.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q84</div>
AB.CONT-0001 (Containment Closure) response during Loss of RHR: <span class="hi-exam">Containment Closure should be established prior to Core Boiling</span> (not within 4 hours — that applies to other initiating events). Outage Equipment Hatch may be closed using <span class="hi-exam">4 corner bolts per AB.CONT-0001</span> (expedited closure for time-critical RHR loss), versus ALL 10 bolts per SC.MD-FR.CAN-0001 for non-RHR events.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q87</div>
AB.RHR-0001 CAS routing for loss of RCS inventory by MODE: In <span class="hi-exam">MODE 5 with inventory loss</span> (PZR level lowering, containment particulate monitor rising), the CAS directs: <span class="hi-exam">START SI and Charging Pumps as required AND CONTROL PZR level between 5% and 50% while maintaining RHR System in service</span>. Do NOT go to AB.LOCA-0001 (Mode 4 only), AB.RHR-0002 (reduced inventory only), or Attachment 9 (loss of all vital buses only).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q63</div>
RH19 (RHR Discharge X-CONN Valves): per EOP-LOCA-6 Step 2, the crew <span class="hi-exam">WILL close 11RH19 and 12RH19</span> to separate the 11 and 12 RHR discharge lines during LOCA outside containment leak isolation. This enhances the ability to diagnose which train has the leak. Successful isolation confirmed by <span class="hi-exam">rising RCS pressure</span>.
</div>

## Connections

- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]], [[AB.RHR-0001 — Loss of RHR]], [[AB.CONT-0001 — Containment Closure]]
- Related EOPs: [[EOP-LOCA-4 — Transfer to Hot Leg Recirculation]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]], [[EOP-LOCA-6 — LOCA Outside Containment]]
- Related exam questions: [[2018 Q3]], [[2018 Q4]], [[2018 Q53]], [[2018 Q60]], [[2018 Q63]], [[2018 Q84]], [[2018 Q87]], [[2019 Q4]], [[2019 Q12]], [[2019 Q63]], [[2020 Q6]], [[2020 Q17]], [[2020 Q18]], [[2020 Q25]], [[2020 Q31]], [[2020 Q87]], [[2023 Q30]], [[2023 Q79]], [[2022 Q7]], [[2022 Q31]], [[2022 Q32]]
- Related JPMs: [[2023 JPM Sim-b]], [[2020 JPM Sim-b]], [[2020 JPM SRO-A5]]
- Related scenarios: [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
