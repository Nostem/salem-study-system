---
title: "EOP-LOCA-1 — Loss of Reactor or Secondary Coolant"
category: eops
status: draft
aliases:
  - EOP-LOCA-1
  - EOP-LOCA Series
  - loss of reactor coolant
  - loss of secondary coolant
---

# EOP-LOCA-1 — Loss of Reactor or Secondary Coolant

## Purpose

Primary EOP for response to a loss of reactor coolant or secondary coolant accident. Entered from EOP-TRIP-1 when RCS or secondary leak conditions are identified.

## Major Action Categories

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q4</div>
LOCA-1 has three Major Action Categories: <span class="hi-exam">(1) Check for Subsequent Failure, (2) Monitor Plant Equipment for Optimal Mode of Operation, (3) Determine optimal Method of Long-Term Plant Recovery</span>. The "Check for Subsequent Failure" item verifies that <span class="hi-exam">a faulted or ruptured SG is NOT the actual reason for ECCS injection</span> — and either fixes the SG on the spot (faulted SG isolation) or transitions to a more appropriate procedure. The OTHER condition LOCA-1 explicitly checks for (besides a LOCA) is a <span class="hi-exam">steam break / Loss of Secondary Coolant — because the event could be terminated by isolating the faulted SG</span>. <span class="hi-trap">Trap matrix:<br>&bull; SGTR is NOT the answer — there is no transition from SGTR-1 to LOCA-1, and actions to terminate primary-to-secondary leakage are NOT performed in LOCA-1.<br>&bull; The "unnecessary transition to FRHS-1" framing is plausible because FRHS-1 actions (minimizing AFW flow when all SGs are faulted) DO appear on other procedures (FRCE, LOSC-2) — but that is not why LOCA-1 checks for a steam break.</span>
</div>

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q21 / Q24</div>
LOCA-1 is the base procedure from which the post-LOCA cooldown and recirculation branches are launched and to which they return. <span class="hi-exam">Q21:</span> the SBLOCA depressurization continues in [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]] (Step 31 — minimize subcooling to reduce break flow). <span class="hi-exam">Q24:</span> if [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]] is entered and a train of recirculation capability is later restored, the LOCA-5 Continuous Action Step directs <span class="hi-exam">returning to LOCA-1 and the step previously in effect</span> — and a transfer to [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]] is not initiated until RWST level is evaluated back in LOCA-1.
</div>

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
<div class="callout-label">Exam — 2016 Q44</div>
CS Pump Stop Criteria — depressing both Reset Spray Actuation pushbuttons during LOCA-1: <span class="hi-exam">CS actuation relays have retentive memory</span>, allowing manual reset with the actuation signal still present. Even with containment pressure above the <span class="val-trip">15 psig</span> CS setpoint (e.g., 15.1 psig), the actuation signal resets and <span class="hi-exam">does NOT reinitiate after the pushbuttons are released</span>. CS pumps and CS valves CS2, CS14, CS16, CS17 do NOT reposition; valves remain in spray alignment until actuation is reset.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q45</div>
Hydrogen Recombiner availability per Step 24 with electrical malfunction: <span class="hi-exam">11 recombiner on 1A 460V Vital Bus; 12 recombiner on 1B 460V Vital Bus</span>. With 1A 4KV Vital Bus locked out, only 12 Recombiner is available to start when directed.
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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-b</div>
LBLOCA precursor scenario: TRIP-1 → LOCA-1 → LOCA-3 step 21 waiting for RWST lo-lo. <span class="hi-exam">All ECCS pumps operating (except 22 CS pump stopped at LOCA-1 step 8) when both RHR pumps cavitate</span> from sump blockage, triggering APPX-7 entry from the LOCA-3 CAS.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
Entered from EOP-TRIP-1 with 2 or more radiation monitor channels rising or in warning/alarm. Key LOCA-1 verifications before transition to TRIP-3: PO confirms total <span class="hi-exam">AFW flow &ge;22E4 lbm/hr or SG NR &gt;9% in at least one SG</span>, then maintains 19-33% level; PO reports no ruptured SGs. RO resets SI/Phase A/Phase B isolations, opens 21 and 22CA330s; PO resets 2C SEC and 230V control centers. RO resets <span class="hi-exam">SGBD Sample Isolation Bypass and opens 21-24SS94s</span>; CRS directs chemistry to sample SGs for activity and boron. <span class="hi-exam">SI termination criteria met</span>: PORVs shut with Block valves open, subcooling &gt;0 °F, AFW flow &gt;22E4 lbm/hr or SG NR &gt;9%, RCS pressure stable or rising, PZR level &gt;11% — CRS transitions to EOP-TRIP-3.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q34</div>
At Step 26 (Preparation for Hot Leg Recirc), with <span class="hi-exam">BOTH RHR pumps operating, 22CS36 is opened to supply containment spray from 22 RHR pump discharge</span>; a 22 RHR pump trip then causes loss of flow to the Containment Spray header. See [[RHR]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q82</div>
For a LOCA outside containment, <span class="hi-trap">transition to EOP-LOCA-1 applies only if the break is ISOLATED</span>; an unisolable break transitions to EOP-LOCA-5 instead. See [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q91</div>
From EOP-LOCA-1, <span class="hi-exam">the transition to EOP-TRIP-3 (SI Termination) is made at Step 9 based on adequate subcooling, SG NR level status, and PZR level</span>; otherwise the transition is to EOP-LOCA-2 at Step 18 (RCS pressure &gt;420 psig). Both terminate Containment Spray. See [[Containment Spray]], [[EOP-TRIP-3 — SI Termination]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
Crew transitions from EOP-TRIP-1 to EOP-LOCA-1 after a LBLOCA when transition criteria are met (RTBs open, PORVs shut with block valves open, <span class="hi-exam">no faulted or ruptured SGs</span>, ≥2 channels in Table F in warning/alarm). In LOCA-1 the crew re-verifies no faulted/ruptured SGs, <span class="hi-exam">resets SI, Phase A, and Phase B isolations</span>, opens 21/22CA330s, and resets each SEC. <span class="hi-exam">CFST monitoring begins after the transition out of TRIP-1</span> — an FRTS RED path sends the CRS to FRTS-1 and an FRCE PURPLE path to FRCE-1, each returning to the procedure in effect. The crew remains in LOCA-1 until the <span class="hi-exam">RWST lo level alarm (214 RWST = 15.2 ft)</span>, then transitions to EOP-LOCA-3 for cold leg recirculation. See [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-CFST-1 — Critical Safety Function Status Trees]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
After Rx trip stabilization in TRIP-1 for an SBLOCA with LOOP, the crew transitions to EOP-LOCA-1 to <span class="hi-exam">reset SI and re-establish control of plant equipment</span>. The scenario terminates after the transition to LOCA-1 is made, when the <span class="hi-exam">EOP-TRIP-3 (SI Termination) transition point is reached</span>. See [[2014 Scenario 3]], [[EOP-TRIP-3 — SI Termination]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q78</div>
The procedure transition to <span class="hi-exam">EOP-LOSC-1 is made before EOP-LOCA-1 when in EOP-TRIP-1</span>. Once all actions to isolate a faulted SG are complete and the crew has transitioned to LOCA-1, the <span class="hi-exam">first step in LOCA-1 is to check for faulted SGs that have NOT been isolated</span>. If the only faulted SG is already isolated, the crew <span class="hi-exam">continues in LOCA-1</span> — the unisolated SG pressures lowering is caused by cool ECCS water being pumped into the RCS, not by new SG faults. <span class="hi-trap">Trap: there is no direct transition to EOP-LOSC-2 — LOSC-1 must be entered first; and RCS pressure will still be lowering (not stable/rising) because of the isolated faulted SG, so an "earlier transition to TRIP-3" reasoning is wrong.</span> See [[Steam Generator & Blowdown]], [[EOP-LOSC-1 — Loss of Secondary Coolant]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q77</div>
When a PZR PORV indicates open in EOP-TRIP-1 (Step 23, PZR PORV STATUS) and neither the PORV nor its block valve can be shut, the crew <span class="hi-exam">transitions to EOP-LOCA-1 — the transition to EOP-TRIP-3 is NOT made in TRIP-1</span>, because TRIP-1 cannot size the PORV leak. Once in LOCA-1, there are steps redundant to TRIP-1 to attempt to close the PORV or its block valve, then the procedure continues (no further transition based on PORV/block-valve status). Immediately after the PORV Status step in LOCA-1, <span class="hi-exam">SI Flow Reduction criteria are checked: Subcooling >0°F; AFW flow / adequate SG NR level; RCS pressure stable or rising; PZR level >11%</span>. With a small RCS leak (here 70 gpm, within charging-pump makeup) and a small PORV opening (normal RCS pressure), these criteria can be met, allowing the transition to [[EOP-TRIP-3 — SI Termination]] from LOCA-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q72</div>
EOP-LOCA-1 <span class="hi-exam">step 16</span> checks for radiation outside containment (determining whether a LOCA outside containment is occurring) using these monitors: <span class="hi-exam">2R4 (charging pump area), 2R41D (plant vent process), 2R34 (Mechanical Penetration 100'), 1R3 (Radio Chem lab area), 1R6A (Sampling room), and 1R20B (counting room)</span>.
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Containment]], [[RHR]], [[ESF & Design]]
- Related EOPs: [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-TRIP-3 — SI Termination]], [[EOP-APPX-7 — Containment Sump Blockage]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related exam questions: [[2014 Q4]], [[2015 Q21]], [[2015 Q24]], [[2016 Q4]], [[2016 Q44]], [[2016 Q45]], [[2016 Q73]], [[2016 Q81]], [[2016 Q84]], [[2018 Q4]], [[2018 Q77]], [[2019 Q14]], [[2019 Q51]], [[2019 Q77]], [[2019 Q91]], [[2020 Q18]], [[2020 Q25]], [[2020 Q92]], [[2023 Q37]], [[2023 Q58]], [[2023 Q76]], [[2023 Q77]], [[2015 Q34]], [[2015 Q82]], [[2015 Q91]], [[2014 Q84]], [[2012 Q15]], [[2012 Q21]], [[2012 Q24]], [[2012 Q72]], [[2012 Q77]], [[2012 Q78]], [[2012 Q83]], [[2012 Q84]], [[2012 Q93]]
- Related JPMs: [[2014 JPM Sim-b]], [[2022 JPM Sim-c]], [[2016 JPM Sim-b]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2018 Scenario 2]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]], [[2015 Scenario 1]], [[2015 Scenario 4]], [[2014 Scenario 3]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2012 NRC Written Exam]]
