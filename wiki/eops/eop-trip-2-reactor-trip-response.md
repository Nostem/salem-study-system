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
<div class="callout-label">Exam — 2015 Q11</div>
EOP-TRIP-2 directs rapid boration only for <span class="hi-exam">2 or more control rods not fully inserted</span> (Step 7). For a <span class="hi-exam">single stuck rod</span>, boration is NOT performed in TRIP-2 — and there are <span class="hi-exam">no SDM diagnostic steps in TRIP-2</span> that drive a transition to SGTR-1. The single-stuck-rod boration is instead directed by AB.SG-0001 (re-entered at Step 3.27 after exiting the TRIP series), Step 3.28 — 35 minutes per stuck rod.
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
<div class="callout-label">Exam — 2016 Q76</div>
After exit from EOP-TRIP-1 with all AFW pumps failed/inhibited and SPDS indicating Heat Sink Red Path, the next CRS action is to <span class="hi-exam">stay in EOP-TRIP-2 step 3 to establish AFW flow &gt;22E4 lbm/hr</span> (start 11–13 AFW pumps as necessary, including <span class="hi-exam">defeating the Pressure Override circuit</span>) — NOT immediately transition to FRHS-1 on SPDS alone. Per CFST procedure: <span class="hi-trap">"SPDS is not designed to be used as a primary indication, and no actions should be based upon SPDS indications without verification of the primary indications, which are the installed Control Room 1E instruments."</span> The Main Feedwater step in EOP-TRIP-2 is AFTER the AFW step.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q78</div>
At 4% power awaiting Mode 1 entry, an automatic Rx trip signal received with all CR trip attempts failed: Rx is not confirmed tripped <span class="hi-exam">just because power is initially &lt;5%</span> — Rx trip confirmation also requires <span class="hi-exam">negative SUR and power lowering</span>. The crew remains in EOP-TRIP-1 / EOP-TRIP-2 with manual rod insertion, then enters <span class="hi-exam">EOP-FRSM-1</span> (the EOP network including FRPs is in effect in <span class="hi-exam">Modes 1–3</span>) and starts both MDAFW pumps — FRSM-1 specifically checks <span class="hi-exam">AFW flow</span> (not total feed flow), so MDAFW pumps are started even with Main Feedwater still flowing.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q52</div>
On an uncomplicated manual Rx trip, EOP-TRIP-2 conditions allow steam dumps to <span class="hi-exam">modulate to control Tavg at ~547°F</span> — RCS temperature does not reach the P-12 setpoint of 543°F. Over-cooling protection is provided by the <span class="hi-exam">Feedwater Interlock (auctioneered hi Tave &lt;554°F + Rx trip)</span>, which closes the BF19s and BF40 Feed Reg Valves. Feedwater Isolation does NOT actuate on an uncomplicated trip (no SI, no SG NR &gt;67%).
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
<div class="callout-label">Scenario — 2017 ESG-8</div>
Transitioned from EOP-TRIP-1 following Rx trip on RCS Low Flow (loss of 22 RCP from 2E Group Bus loss; SI not actuated). PO throttles AFW flow to no less than <span class="hi-exam">22E4 lbm/hr</span>, then maintains 19-33% NR. PO stops 21 and 22 SGFPs. Then <span class="hi-exam">21 SG tube leak (50 gpm)</span> develops — only the <span class="hi-exam">2R15 Condenser Air Ejector rad monitor</span> alarms (R19 SGBD monitors O/S due to AFW auto-start blowdown isolation; R53 N-16 ineffective with Rx S/D). CRS initiates AB.SG-0001 in parallel with TRIP-2; chemistry confirms 21 SG. Tube subsequently ruptures (escalates to 400 gpm) — crew returns to EOP-TRIP-1 to manually initiate SI.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
Transitioned from EOP-TRIP-1 following reactor trip on 22 RCP seal failure (no SI required). Shortly after entering TRIP-2, <span class="hi-exam">24 SG tube rupture (650 gpm)</span> occurs. Crew identifies tube rupture based on SG NR levels rising, radiation monitors <span class="hi-exam">2R53D, 2R15, 2R41, 2R19D</span> in alarm. CRS directs manual SI initiation and returns to EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q85</div>
TRIP-2 (Reactor Trip Response) is performed but <span class="hi-trap">does NOT check for adequate containment cooling or SI initiation criteria (other than the CAS)</span> — so it is not the prerequisite for a natural circulation rapid cooldown (TRIP-4 is). See [[RCS]], [[EOP-TRIP-4 — Natural Circulation]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-f</div>
TRIP-2 Step 19 (Steam Dump Mode Shift): with Condenser Steam Dumps available, <span class="hi-exam">shift Steam Dumps to MS Pressure Control - Auto</span> (Manual → align demand → MS Pressure Control → Auto). TRIP-2 Step 22 (Source Range NIS): both IR channels must be <span class="hi-exam">&lt;7E-11 Amps</span> to energize the source range. An <span class="hi-exam">undercompensated IR channel reads erroneously high and will not drop below the permissive</span> (diagnosed by elapsed time since trip, SUR 0 with power above minimum display, and NR-45 trend leveling off); the operator then <span class="hi-exam">manually energizes BOTH Source Range channels (RESET SOURCE RANGE A and B)</span>, transfers NR-45 to the source range, and adjusts the audio count rate scale. See [[Excore NIs]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Transitioned from EOP-TRIP-1 after a manual reactor trip with <span class="hi-exam">no SI required</span>. Crew restores secondary heat sink — <span class="hi-exam">21 AFW pump runs with no flow and 22/23 AFW pumps fail to auto-start</span>, so PO manually starts an AFW pump to establish ≥ 22E4 lbm/hr. A 2nd PZR pressure channel then fails low → the TRIP-2 CAS directs going to EOP-TRIP-1 on the resulting auto Inadvertent SI. See [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
Transitioned from EOP-TRIP-1 after a manual reactor trip (both SGFPs tripped on low suction, no SGFP &gt;P-10) with <span class="hi-exam">no SI required</span>. When the Main Generator output breakers open 30 seconds after the turbine trip, the <span class="hi-exam">2B 4KV vital bus de-energizes</span> and 2B EOG loads Blackout — Blackout-loading response is directed at <span class="hi-exam">TRIP-2 Step 12</span>; PO resets 2B SEC (2B SEC is NOT blocked on 2RP1 since no SI signal is present). 21 charging pump starts then trips and 22 AFW pump fails to start; subsequently 21 AFW pump trips 4 min post-trip and 23 AFW pump overspeeds/trips → all AFW lost → Heat Sink RED path → FRHS-1. See [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #4</div>
Transitioned from EOP-TRIP-1 after a manual reactor trip (steam leak outside containment isolated by MSLI) with <span class="hi-exam">no SI required</span>. RO reports <span class="hi-exam">2 control rods failed to fully insert</span> → the crew must <span class="hi-exam">initiate Rapid Boration before exiting TRIP-2 (CT#1)</span> (start a BAT, open 2CV175, shut 21/22 CV160s); CRS determines 70 minutes of boration is required for the 2 stuck-out rods. A LOCA outside containment then develops on 22 RHR piping (24 ECCS Accumulator lo level/pressure, PZR level uncontrollable) → manual SI per the TRIP-2 CAS (fails from Train B, succeeds from Train A) → return to [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]. See [[2015 Scenario 4]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q92</div>
The <span class="hi-exam">Feedwater Interlock (FWI) is a 2/2 interlock: RCS Auctioneered Hi Tavg &lt;554&deg;F AND Rx Trip Breakers open (P-4)</span>, which shuts all BF19's and BF40's to isolate Main Feed flow to the SGs. <span class="hi-exam">If the FWI fails to actuate, the running SGFPs continue to supply Main Feed</span> to the SGs (whose NR level is low after the trip from 100% power), causing <span class="hi-exam">excessive SG cooldown / overfeed</span>. Because the resulting RCS pressure transient is steady but slow, <span class="hi-trap">SI initiation in TRIP-1 is NOT warranted during immediate actions</span> — initiating SI when not required can fill the PZR water-solid. The correct response is to <span class="hi-exam">trip both SGFPs early in TRIP-2 after verifying adequate AFW flow</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q2</div>
EOP-TRIP-2 step 3 asks if total AFW flow is <span class="hi-exam">&gt;22E4 lbm/hr</span>. The Bases document states this is "the minimum safeguards AFW flow requirement for heat removal plus allowances for normal channel accuracy (typically one AFW pump capacity at design pressure.)" TRIP-2 directs maintaining <span class="hi-exam">&gt;22E4 lbm/hr until at least one SG NR level is &gt;9%, then maintain 9-33%</span>. A single SG with &gt;9% NR satisfies the Heat Sink Functional Recovery entry criterion (<span class="hi-exam">22E4 lbm/hr flow OR SG NR &gt;9%</span>), so AFW flow may then be reduced below 22E4 lbm/hr. <span class="hi-trap">15% is the adverse-containment value, not applicable with no SI; the criterion is met by ONE SG &gt;9%, not ALL SGs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q9</div>
For a controlled shutdown due to a 5 gpm SG tube leak (AB.SG-0001), the 5 gpm leak size allows transition to TRIP-2 after the EOP-TRIP-1 immediate actions; <span class="hi-exam">there are no SGTR diagnostic steps in TRIP-2 that would transition to SGTR-1</span>. On exiting the TRIP series, AB.SG is re-entered at step 3.27, and <span class="hi-exam">step 3.28 directs a rapid boration for each stuck rod for 35 minutes</span> — initiated before any depressurization (step 3.29). See [[AB.SG-0001 — Steam Generator Tube Leak]].
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]], [[EDGs]], [[Pressurizer & PRT]], [[Excore NIs]], [[Steam Generator & Blowdown]], [[Radiation Monitoring]], [[Feed & Condensate]], [[AFW]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related procedures: [[S2.OP-TM.ZZ-0002 — Tank Capacity Data]], [[S2.OP-SO.CVC-0008 — Rapid Boration]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[AB.RAD-0001 — Radiation Monitor Abnormality]]
- Related exam questions: [[2015 Q10]], [[2015 Q11]], [[2016 Q8]], [[2016 Q52]], [[2016 Q76]], [[2016 Q78]], [[2020 Q11]], [[2020 Q21]], [[2023 Q19]], [[2015 Q85]], [[2014 Q92]], [[2012 Q2]], [[2012 Q9]]
- Related JPMs: [[2022 JPM RO-A2]], [[2022 JPM SRO-A2]], [[2015 JPM Sim-f]]
- Related scenarios: [[2017 Scenario 8]], [[2018 Scenario 1]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2015 Scenario 2]], [[2015 Scenario 3]], [[2015 Scenario 4]], [[2014 Scenario 1]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]]
