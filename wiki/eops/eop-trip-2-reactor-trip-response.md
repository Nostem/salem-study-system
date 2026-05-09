---
title: "EOP-TRIP-2 — Reactor Trip Response"
category: eops
status: draft
aliases:
  - EOP-TRIP-2
  - reactor trip response
---

# EOP-TRIP-2 — Reactor Trip Response

## Purpose

Provides post-trip response actions following a reactor trip without safety injection, including emergency boration procedures.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q19</div>
Step 4 — rapid boration via BAT pump and CV175. Adequate flow is 36 gpm. If flow is inadequate, stop BAT pump and realign charging suction to RWST.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q21</div>
Control Rod Insertion step — if 2CV175 (RAPID BORATE STOP VALVE) fails to open, EOP-TRIP-2 directs: <span class="hi-exam">OPEN RWST to CHARGING SUCTION VALVES 2SJ1 and 2SJ2, then CLOSE VCT to CHARGING SUCTION VALVES 2CV40 and 2CV41</span> to establish rapid boration from the RWST. <span class="hi-trap">Alternate paths via 2CV174 (Blender Bypass), 2CV172/2CV185 (normal boration), or 2CV172/2CV181 (blender to VCT) are in S2.OP-SO.CVC-0008 (Rapid Boration) but are NOT directed in TRIP-2.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q8</div>
Step 7 of EOP-TRIP-2 (boration for 2 or more control rods not fully inserted) provides <span class="hi-exam">two different boration times because two different borated water sources are available with different boron concentrations</span>:<br>
- First attempt: rapid boration from the <span class="hi-exam">Boric Acid Storage Tanks (BAST) via Boric Acid Transfer pump in high speed — <span class="val-normal">35 minutes per rod</span></span> (BAST minimum Cb is <span class="hi-exam">6550 ppm</span> per Tech Specs).<br>
- If unsuccessful: boration from the <span class="hi-exam">Refueling Water Storage Tank (RWST) via charging pump at &gt;<span class="val-normal">87 gpm</span> — <span class="val-normal">120 minutes per rod</span></span> (RWST minimum Cb is <span class="hi-exam">2300 ppm</span>).<br>
The longer RWST time compensates for the lower boron concentration. <span class="hi-trap">The two times are NOT for cooldown vs Hot Standby, BOL vs EOL, or different per-rod amounts based on stuck-rod count.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q51</div>
EOP-TRIP-2 step 3 — total AFW flow check after Rx trip: if total AFW flow is &lt;<span class="hi-exam"><span class="val-normal">22E4 lbm/hr</span></span>, the NO path directs operators to <span class="hi-exam">start 21–23 AFW pumps as necessary to establish &gt;22E4 lbm/hr</span>. This is the immediate operator action when the SGFP-trip MDAFW auto-start did NOT actuate (e.g., when both SGFP trips were caused by FW Isolation, which inhibits the auto-start). FRHS-1 transition from a CFST Heat Sink Red Path is plausible but only after TRIP-2 has been entered.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q76</div>
After exit from EOP-TRIP-1 with all AFW pumps failed/inhibited and SPDS indicating Heat Sink Red Path, the next CRS action is to <span class="hi-exam">stay in EOP-TRIP-2 step 3 to establish AFW flow &gt;22E4 lbm/hr</span> (start 11–13 AFW pumps as necessary, including <span class="hi-exam">defeating the Pressure Override circuit</span>) — NOT immediately transition to FRHS-1 on SPDS alone. Per CFST procedure: <span class="hi-trap">"SPDS is not designed to be used as a primary indication, and no actions should be based upon SPDS indications without verification of the primary indications, which are the installed Control Room 1E instruments."</span> The Main Feedwater step in EOP-TRIP-2 is AFTER the AFW step.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q78</div>
At 4% power awaiting Mode 1 entry, an automatic Rx trip signal received with all CR trip attempts failed: Rx is not confirmed tripped <span class="hi-exam">just because power is initially &lt;5%</span> — Rx trip confirmation also requires <span class="hi-exam">negative SUR and power lowering</span>. The crew remains in EOP-TRIP-1 / EOP-TRIP-2 with manual rod insertion, then enters <span class="hi-exam">EOP-FRSM-1</span> (the EOP network including FRPs is in effect in <span class="hi-exam">Modes 1–3</span>) and starts both MDAFW pumps — FRSM-1 specifically checks <span class="hi-exam">AFW flow</span> (not total feed flow), so MDAFW pumps are started even with Main Feedwater still flowing.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q52</div>
On an uncomplicated manual Rx trip, EOP-TRIP-2 conditions allow steam dumps to <span class="hi-exam">modulate to control Tavg at ~547°F</span> — RCS temperature does not reach the P-12 setpoint of 543°F. Over-cooling protection is provided by the <span class="hi-exam">Feedwater Interlock (3/4 Tavgs &lt;554°F + Rx trip)</span>, which closes the BF19s and BF40 Feed Reg Valves. Feedwater Isolation does NOT actuate on an uncomplicated trip (no SI, no SG NR &gt;67%).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q40</div>
<span class="hi-exam">EOP-TRIP-2 step 22</span> (Reactor Trip Response, 2-EOP-TRIP-2 Sh 4, rev 30): step asks if both IRNI channels are reading &lt;<span class="val-alarm">7E-11 A</span>. If they are NOT, it then asks if <span class="hi-exam">undercompensation is preventing proper operation</span>. If yes, the operator is instructed to <span class="hi-exam">manually energize Source Range channels</span>. IRNI channels normally continue to lower until off-scale on the control console, with automatic SR re-energization at 7E-11 A. An undercompensated IR detector reads abnormally HIGH (more low-energy gammas seen) and shows abnormally low SUR — both signatures of undercompensation.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A2</div>
Step 4 — Control Rod Insertion boration: for stuck control rods, rapid boration time = <span class="hi-exam">35 minutes per stuck rod</span>. Three stuck rods from Control Bank Delta = 35 x 3 = <span class="hi-exam">105 minutes</span> total rapid boration at 40 GPM. Total volume injected = 105 min x 40 GPM = <span class="hi-exam">4200 gallons</span>. Use S2.OP-TM.ZZ-0002 tank capacity curves to convert BAST levels between percent and gallons for determining final tank levels.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A2</div>
Step 4 boration for 3 stuck Control Bank Delta rods: <span class="hi-exam">35 min x 3 = 105 minutes</span> at 40 GPM = 4200 gallons total. Both BASTs start at 70% (5500 gal each). Each lowers by 2100 gal to 3400 gal = <span class="hi-exam">43% per tank</span>. Post-boration TS evaluation: with RWST at 2350 ppm and BAST at 6650 ppm, TS 3.1.2.6 Figure 3.1-2 requires > 96.5% combined BAST level. At 86% combined (43% + 43%), <span class="hi-exam">LCO 3.1.2.6.a.1 is NOT met — restore within 72 hours or Hot Standby in 6 hours</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q11</div>
Step 15 directs selectively energizing PZR backup heaters from the vital bus during a LOOP. Per S2.OP-SO.PZR-0010, aligning PZR heaters adds approximately 210 KW to bus load and the maximum DG load at the 2000 hr rating is 2750 KW.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
Transitioned from EOP-TRIP-1 following reactor trip on 23 RCP high vibration (no SI required). During EOP-TRIP-2, 21 SG tube rupture develops (650 gpm). Crew identifies SGTR based on 21 SG NR levels rising and <span class="hi-exam">2R15 condenser off-gas rad monitor in alarm</span>. CRS enters AB.SG-0001, implements CAS — manually initiates SI, returns to EOP-TRIP-1.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
Transitioned from EOP-TRIP-1 following reactor trip on 22 RCP seal failure (no SI required). Shortly after entering TRIP-2, <span class="hi-exam">24 SG tube rupture (650 gpm)</span> occurs. Crew identifies tube rupture based on SG NR levels rising, radiation monitors <span class="hi-exam">2R53D, 2R15, 2R41, 2R19D</span> in alarm. CRS directs manual SI initiation and returns to EOP-TRIP-1.
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]], [[EDGs]], [[Pressurizer & PRT]], [[Excore NIs]]
- Related procedures: [[S2.OP-TM.ZZ-0002 — Tank Capacity Data]], [[S2.OP-SO.CVC-0008 — Rapid Boration]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]]
- Related exam questions: [[2016 Q8]], [[2016 Q40]], [[2016 Q51]], [[2016 Q52]], [[2016 Q76]], [[2016 Q78]], [[2020 Q11]], [[2020 Q21]], [[2023 Q19]]
- Related JPMs: [[2022 JPM RO-A2]], [[2022 JPM SRO-A2]]
- Related scenarios: [[2018 Scenario 1]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]]
