---
title: "EOP-LOCA-1 — Loss of Reactor or Secondary Coolant"
category: eops
status: draft
aliases:
  - EOP-LOCA-1
  - loss of reactor coolant
  - loss of secondary coolant
---

# EOP-LOCA-1 — Loss of Reactor or Secondary Coolant

## Purpose

Primary EOP for response to a loss of reactor coolant or secondary coolant accident. Entered from EOP-TRIP-1 when RCS or secondary leak conditions are identified.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q37</div>
After performing actions in EOP-LOCA-1 including SI reset and SEC reset, if a subsequent LOOP occurs, EDGs will auto-start in SEC Mode 2 (Blackout only). Only charging pumps are auto-sequenced — other safeguard loads (SI pumps, RHR pumps, CFCUs) must be manually started since SI/SECs were previously reset.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q58</div>
Step 17 — Containment Hydrogen Concentration: <span class="hi-exam">only one hydrogen recombiner may be placed in service</span> when H2 concentration is between >0.5% and <4%. Operation of both recombiners is not permitted. If H2 >4% (6.0% in dry air = upper limit of recombiner operability), consult TSC for additional recovery actions. Purpose: prevent flammable mixture that could cause pressure excursion challenging containment integrity.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q92</div>
Step 24 — Containment Hydrogen Concentration decision points: <span class="hi-exam">between 0.5% and 4.0% → start ONLY one hydrogen recombiner</span>. <span class="hi-exam">≥ 4.0% → consult TSC for additional recovery actions</span>. <span class="hi-trap">Trap: the normal operating procedure (S2.OP-SO.CAN-0001) starts two recombiners if concentration is 2.0% and rising — but EOP-LOCA-1 limits operation to only ONE recombiner below 4%. Do not confuse OP procedure guidance with EOP guidance.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q91</div>
Step 24 — Containment Hydrogen Concentration Verification (SRO question): with H2 at <span class="hi-exam">0.7%</span> (greater than 0.5%), crew starts <span class="hi-exam">ONLY ONE hydrogen recombiner</span> by performing S1.OP-SO.CAN-0001 CONCURRENTLY with EOP-LOCA-1. <span class="hi-trap">Trap: starting BOTH recombiners is wrong below 4%. Consulting TSC is wrong below 4%. Waiting until 4.0% before acting is wrong (action threshold is 0.5%).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
PZR vapor space leak (SBLOCA) with RCS at <span class="hi-exam">1450 psig</span>: both <span class="hi-exam">charging pumps AND SI pumps are injecting</span> (1450 psig is below the shutoff head of both charging pumps at 2670 psig and SI pumps at 1520 psig). With subcooling at 10°F, PZR level 30% and rising, and RCS pressure stable — <span class="hi-exam">SI termination criteria in EOP-LOCA-1 are met</span>, so the next procedure transition is to <span class="hi-exam">EOP-TRIP-3 (SI Termination)</span>, not directly to EOP-LOCA-2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q77</div>
Step 7.4 (stopping containment spray pumps) is a <span class="hi-exam">continuous action step</span>. Per OP-SA-108-101-2002 step 2.16.2: <span class="hi-exam">continuous action steps should NOT be performed when a Red or Purple path FRP is in progress</span>. Even though containment pressure is below 13 psig and conditions for stopping CS pumps are met, a valid PURPLE path on Thermal Shock takes priority — <span class="hi-exam">transition to the FRP, do NOT perform Step 7.4</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-c</div>
Step 14 — accumulator isolation: when at least two RCS T-Hots < <span class="hi-exam">405F</span>, remove lockout from 21-24 SJ54 and close all. If <span class="hi-exam">24SJ54 fails to close</span> (alternate path), vent the unisolated accumulator: open <span class="hi-exam">2NT35 (N2 HDR Valve)</span> and <span class="hi-exam">24SJ93 (N2 Supply Valve)</span>, verify accumulator pressure reaches zero.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Entered from EOP-TRIP-1 following LBLOCA based on <span class="hi-exam">containment pressure &gt;4 psig</span> (or two or more Table J channels not normal). In LOCA-1: RO confirms all RCPs stopped, PO maintains AFW flow. RO resets Phase A, opens 21 and 22 CA330s. RO resets both trains of SI, PO resets SECs. PO stops unloaded EDGs. <span class="hi-exam">22 RHR pump trips</span> during LOCA-1 — CRS determines no RHR pumps available and transitions to EOP-LOCA-5 (loss of emergency recirculation). Possible <span class="hi">CFST Purple Path on Thermal Shock</span> (FRTS-1) during LOCA-1 — enter/exit with no actions performed.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #2</div>
Entered from EOP-TRIP-1 following LBLOCA based on <span class="hi-exam">containment pressure &gt;4 psig</span>. In LOCA-1: RO resets SI and Phase A, opens 21 and 22 CA330s. PO resets all SECs, stops unloaded EDGs. RO reports subcooling NOT &gt;0 F, RHR not aligned for cold leg recirc, RHR flow &gt;300 gpm. <span class="hi-exam">22 RHR Pump trips (overcurrent)</span> — no RHR pumps available (21 RHR C/T). CRS transitions to <span class="hi-exam">EOP-LOCA-5</span> based on no RHR pumps available at Step 16.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q77</div>
RWST LEVEL LO alarm actuation during EOP-LOCA-1: crew <span class="hi-exam">transitions to EOP-LOCA-3 (TRANSFER TO COLD LEG RECIRCULATION)</span>. <span class="hi-trap">Trap: LOCA-3 is cold leg recirc, LOCA-4 is hot leg recirc. The RWST LO alarm drives the transition to LOCA-3, not remaining in LOCA-1 until LO-LO or performing concurrent RWST makeup.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q14</div>
Containment Spray reset per EOP-LOCA-1 (after AUTOMATIC actuation without manual backup): the NCO resets one train of Containment Spray by <span class="hi-exam">depressing bezel button B ONLY</span>. Key switches A and C are NOT required when resetting after an automatic-only actuation. <span class="hi-trap">Bezel button B is the reset mechanism. Key switches would be involved only if a manual backup actuation had been performed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q25</div>
LOCA outside containment recognition from EOP-LOCA-1: alarms indicating a LOCA outside containment include <span class="hi-exam">2R41D (Plant Vent) in alarm, RHR sump overflow (OHA C-34), and RHR sump pump starts</span>. Combined with inability to recover PZR level, the transition path is from <span class="hi-exam">EOP-LOCA-1 to EOP-LOCA-6</span>. Key recognition: the crew arrives at LOCA-1 via the TRIP-3 CAS (PZR level cannot be maintained > 11%).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q77</div>
Hydrogen recombiner and hot leg recirculation timing: start <span class="hi-exam">ONLY one</span> hydrogen recombiner when containment H2 concentration > 0.5%. Transfer to Hot Leg Recirculation (EOP-LOCA-4) is required <span class="hi-exam">14 hours</span> after SI actuation (not 12 hours). <span class="hi-trap">Trap: 12 hours is the requirement to start PREPARATIONS for hot leg recirc. The actual performance of LOCA-4 is at 14 hours. Also: there are two hydrogen recombiners on site, but EOP-LOCA-1 only starts ONE below 4% H2.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q51</div>
EOP-LOCA-1 Step 3 feed flow requirement: <span class="hi-exam">"MAINTAIN TOTAL FEED FLOW GREATER THAN 22E04 LB/HR UNTIL AT LEAST ONE SG NR IS GREATER THAN 9% (15% ADVERSE)"</span>. Containment pressure at <span class="hi-exam">2.5 psig is NOT adverse</span> — adverse containment threshold has not been reached. Therefore the non-adverse SG NR level limit of <span class="hi-exam">9%</span> applies, and the requirement is <span class="hi-exam">AT LEAST ONE SG</span> (not all SGs). <span class="hi-trap">Trap: "ALL SGs" vs "AT LEAST ONE SG" — the step requires only ONE SG to exceed the limit. Also, 15% is the adverse containment limit, not the normal limit.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
EOP-LOCA-1 entered from EOP-TRIP-1 after LBLOCA. STA reports <span class="hi-exam">RED path for Thermal Shock</span> — CRS transitions to EOP-FRTS-1 (enter/exit: RCS pressure <300 psig and RHR flow >300 gpm). Returns to LOCA-1. RO resets SI, Phase A, Phase B. Resets SECs (2A and 2C reset, 2B de-energized). When <span class="hi-exam">RWST level lo alarm actuates at 15.2 feet</span>, CRS transitions to EOP-LOCA-3 for cold leg recirculation transfer (CT#2: CT-36).
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Containment]], [[RHR]]
- Related EOPs: [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-TRIP-3 — SI Termination]]
- Related exam questions: [[2018 Q4]], [[2018 Q77]], [[2019 Q14]], [[2019 Q51]], [[2019 Q77]], [[2019 Q91]], [[2020 Q18]], [[2020 Q25]], [[2020 Q92]], [[2023 Q37]], [[2023 Q58]], [[2023 Q76]], [[2023 Q77]]
- Related JPMs: [[2022 JPM Sim-c]]
- Related scenarios: [[2018 Scenario 2]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]]
- Related exam: [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
