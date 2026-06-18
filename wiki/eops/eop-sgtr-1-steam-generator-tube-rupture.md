---
title: "EOP-SGTR-1 — Steam Generator Tube Rupture"
category: eops
status: draft
aliases:
  - EOP-SGTR-1
  - SGTR-1
---

# EOP-SGTR-1 — Steam Generator Tube Rupture

## Purpose

Provides guidance for mitigation of a steam generator tube rupture event, including identification of the ruptured SG, isolation, cooldown, and depressurization to terminate primary-to-secondary leakage.

## Key Actions / Information

### Identification, Isolation, and AFW Management

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q78</div>
SGTR-1 is one of the two exits from [[EOP-LOSC-1 — Loss of Secondary Coolant]]: <span class="hi-exam">the LOSC-1 transition out is to EOP-SGTR-1 if a tube rupture exists, otherwise to [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]</span>. A faulted (but not ruptured) SG isolated in LOSC-1 sends the crew to LOCA-1, not SGTR-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q55</div>
The 23 TDAFW pump is supplied from the 21 and 23 Main Steam lines (each tap upstream of its MSIV, with its own isolation valve — <span class="hi-exam">21MS45 and 23MS45</span> — and check valve before combining). During an SGTR, the TDAFW pump <span class="hi-exam">remains in service ONLY if it is the SOLE source of feed flow to the SGs</span> (its turbine exhaust is an unmonitored release directly to atmosphere). Per SGTR-1 Steps 4.4, 4.5 and 4.7: if it is NOT the sole source of feed, <span class="hi-exam">lower 23 AFW pump speed to minimum, trip it, and do not restart until 23MS45 is shut</span>. <span class="hi-trap">If 22 AFW pump (powered from 2B 4KV vital bus) is running and feeding, a single SG fed is sufficient for heat-sink status — 23 AFW is not "the only source." 21 AFW pump is lost when 2A 4KV vital bus locks out.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q15</div>
EOP-SGTR-1 <span class="hi-exam">Step 6 (2-EOP-SGTR-1F Sheet 2, Rev 30)</span>: AFW flow control to the ruptured SG. If ruptured SG NR level is &lt;9%, <span class="hi-exam">establish AFW flow to the ruptured SG until NR level reaches &gt;9%, then isolate AFW flow and maintain &gt;9%</span>. Purpose: keep tubes covered to support natural circulation cooldown / RCS heat removal path. <span class="hi-trap">Trap C: 19% is the EOP Rev 30 level above which INTACT SGs are maintained — NOT the ruptured-SG level.</span> <span class="hi-trap">Trap A/D: never feeding the ruptured SG (or only after cooldown) is a misconception — uncovered tubes prevent heat removal during cooldown if intact SGs are unavailable as targets.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q25</div>
EOP-TRIP-7 Rediagnosis transitions to EOP-SGTR-1 when symptoms include <span class="hi-exam">rising SG level and SG high radiation</span> (2R19A in alarm) — distinguishing a tube rupture from a LOCA or faulted SG.
</div>

### RCS Cooldown

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q79</div>
EOP-SGTR-1 does NOT contain a step that directly starts a RCP — it <span class="hi-exam">directs RCP start IAW S2.OP-SO.RC-0001 (RCP Operation)</span>, so all RCP support conditions/P&amp;Ls must be satisfied. With RVLIS upper range &lt;100%, PZR level and saturated PZR conditions are also required (plus RCS subcooling). See [[RCPs]], [[S2.OP-SO.RC-0001 — Reactor Coolant Pump Operation]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q11</div>
Step 38.1 monitors for natural circulation flow. RCS T-Cold in unaffected loops should be approximately <span class="hi-exam">548 °F</span> (saturation temperature at MS10 setpoint of 1015 psig / 1030 psia). Affected SG MS10 set to 1045 psig (1060 psia) per step 3. With a LOOP, steam dumps are unavailable (circulators tripped = blocking signal) — use <span class="hi-exam">atmospheric relief valves (MS10s)</span> on intact SGs to raise steam flow.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-g</div>
EOP-SGTR-1 Step 10 RCS cooldown with steam dumps unavailable (permissive light NOT illuminated on 2RP4). Table B determines target temp from ruptured SG pressure: <span class="hi-exam">1045 psi → 503°F</span>. Condenser steam dumps unavailable → <span class="hi-exam">cooldown using MS10s on intact SGs (21, 22, 23)</span>. Lower MS10 setpoints to fully open for max-rate cooldown. When hottest CET reaches 503°F, stop cooldown by matching MS10 setpoints to current SG pressures. Do NOT dump steam from ruptured 24 SG.
</div>

### SI Termination, Depressurization, and Transitions

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q79</div>
Ruptured SG goes water solid before SI is terminated (after RCS cooled to Target Temp and depressurized to restore inventory): the procedure-in-effect (SGTR-1) governs — <span class="hi-exam">continue in SGTR-1, terminate SI, and establish normal charging/letdown to stop primary-to-secondary leakage</span>. <span class="hi-trap">Trap C/D: EOP-FRHS-3 (Response to SG High Level) is a Yellow Path FRP that may be entered at CRS discretion, but its Step 10.7 checks for SGTR — and would kick back to the SGTR series in effect. FRHS-3 does not address minimizing spread of secondary contamination (that is in the SGTR series), and FRHS-3 only sets affected SG MS10 to <span class="hi-exam">1045 psig</span> (not manual shut), which would already have been done during AB.SG or SGTR-1.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q57</div>
SI termination during SGTR-1: the reason ECCS flow is terminated is to <span class="hi-exam">prevent overfill of the ruptured SG</span> (not the pressurizer). CAS for reestablishing ECCS flow: <span class="hi-exam">PZR level cannot be maintained &ge; 11% OR Subcooling &le; 0&deg;F</span>. The logic is <span class="hi-exam">OR</span> — either condition triggers ECCS restart. <span class="hi-trap">Trap: candidates may confuse overfill concern (it is the SG, not the PZR) or incorrectly believe ONLY PZR level (without the subcooling criterion) triggers ECCS restart.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q79</div>
EOP-SGTR-1 CAS (Continuous Action Step): <span class="hi-exam">If SI has been terminated and RCS subcooling reaches 0°F → start ECCS pumps as necessary to restore subcooling and GO TO EOP-SGTR-3</span> (SGTR with LOCA – Subcooled Recovery). This CAS monitors throughout the procedure. <span class="hi-trap">SGTR-3 (Subcooled Recovery) is the correct transition — NOT SGTR-4 (Saturated Recovery). SGTR-2 (Post SGTR Cooldown) is only for normal recovery when subcooling is maintained. The key discriminator is: SI has been TERMINATED + subcooling lost = SGTR-3.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-c</div>
Step 19 RCS depressurization using normal spray during SGTR on 22 SG. Open spray valves <span class="hi-exam">2PS1 and 2PS3</span>. Monitor depressurization against Table D criteria (RCS pressure < ruptured SG pressure AND PZR level > 11%). When Table D conditions met (CUE: PZR level 79% and rising), close spray valves per CAS at Step 19.1. <span class="hi-exam">2PS3 fails to close</span> (alternate path). Step 19.4: spray valve not closed → <span class="hi-exam">STOP 21 and 23 RCPs</span> to eliminate spray flow path through 2PS3. RCS pressure stops dropping (rising after RCP stop). Proceed to Step 27.
</div>

### Scenarios

**Exam & operating coverage:**

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #2</div>
After a reactor trip and SI on a 23 SG tube rupture, the crew transitions from TRIP-1 to SGTR-1, isolates 23 SG, secures 23 AFW pump, stops both RHR pumps, and cools down to a <span class="hi-exam">target temperature of 503°F</span> on the intact-SG steam dumps. <span class="hi-exam">CT#2 (E-3-B):</span> maintain RCS temperature so Tave is not too high to keep minimum subcooling and not so low as to cause a Red/Purple subcriticality or integrity CSF challenge. A <span class="hi-exam">loss of offsite power occurs when the hottest CET reaches 510°F</span> — crew returns to the Table C actions to restart safeguards loads and re-establishes the cooldown on the 21/22/24 MS10 atmospheric reliefs. At the depressurization step the only available PORV (2PR2) fails to open and both SI pumps are unavailable, so the CRS transitions to [[EOP-SGTR-5 — SGTR without Pressurizer Pressure Control]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #4</div>
After a 23 SG tube rupture and reactor trip, the crew transitions from TRIP-1 to SGTR-1, isolates the ruptured 23 SG, and begins the RCS cooldown to the target temperature (~503°F). During the cooldown, <span class="hi-exam">23 RCP trips, causing a loss of normal pressurizer spray</span>, and no SI pumps are available. The crew must <span class="hi-exam">maintain RCS temperature in the required band (CT#2)</span> so a transition out of SGTR-1 is not forced. At the RCS depressurization step, the only available PORV (2PR2) fails to open (2PR1 inoperable, 2PR6 C/T, normal spray lost), so depressurization is unavailable and the CRS transitions to [[EOP-SGTR-5 — SGTR without Pressurizer Pressure Control]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Terminating event: after Inadvertent SI termination and re-establishing letdown, a <span class="hi-exam">24 SG tube rupture</span> occurs. CRS directs CAS action to start ECCS pumps as necessary (based on RCS pressure/trend — the Basis Document for TRIP-3 does not specify how many) and transitions to EOP-SGTR-1. The scenario terminates when the transition to SGTR-1 is made.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
EOP-SGTR-1 entered from EOP-TRIP-1 after 21 SG tube rupture. <span class="hi-exam">CT#1 (CT-18) — isolate feed flow into and steam flow from 21 SG prior to a transition to SGTR-3 being required:</span> Part 1 — close <span class="hi-exam">21AF11 and 21AF21</span> (AFW isolation valves); Part 2 — shut <span class="hi-exam">21MS167</span> and verify 21MS7, 21MS18, and 21GB4 are shut. PO ensures 21MS10 set at <span class="hi-exam">1045 psig</span>. CRS dispatches operator to shut 21MS45 and 2SS321 sample valve. PO ensures 23 AFW pump speed at minimum and trips 23 AFW pump (steam supply was lost when 21MS45 was shut). Cooldown target from Table D: <span class="hi-exam">503&deg;F CETs</span> for ruptured SG pressure ~1000 psig. PO places steam dumps in MS Pressure Control-Manual at 25% to perform cooldown; bypasses Tavg when Tavg Low-Low reached. <span class="hi-exam">CT#2 (CT-19) — establish/maintain RCS T so transition from SGTR-1 does NOT occur because temperature too high (lose subcooling) or so low it causes transition to FRTS or FRSM.</span> RO depressurizes via PZR Spray initially; when 23 RCP trips spray loses effectiveness — RO shuts both PZR Spray valves and uses 2PR2 PZR PORV (2PR1 fails to open). 2PR2 then fails to shut and 2PR7 Block Valve fails 90% open → CRS transitions to EOP-SGTR-3.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
EOP-SGTR-1 entered from EOP-TRIP-1 after 21 SG tube rupture (escalates to 400 gpm). <span class="hi-exam">CT#1 (CT-18) — isolate feed flow into and steam flow from 21 SG prior to a transition to SGTR-3 being required:</span> PO closes <span class="hi-exam">21MS167</span> and verifies 21MS7, 21MS18, and 21GB4 are closed. (21AF11/21AF21 feed isolation already performed during AB.SG-0001 step.) PO sets <span class="hi-exam">21MS10 at 1045 psig</span>. CRS dispatches operator to close 21MS45 and 2SS321 sample valve. PO trips 23 AFW pump (not the only source). PO STOPS AFW flow if 21 SG NR &gt;9%. Target cooldown temp from Table B: SG press &gt;375 psig threshold; cooldown target <span class="hi-exam">&lt;503°F</span>. <span class="hi-exam">CT#2 (CT-19) — establish/maintain RCS T so transition from SGTR-1 does NOT occur because temp too high (lose subcooling) or so low it causes FRTS/FRSM transition.</span> PO uses steam dumps in MS Pressure Control at 25% for cooldown, then sets to Auto to maintain CET temps. RCS depressurization: 21 RCP trips during PZR spray attempt — RO closes spray valves and uses 2PR2 PZR PORV (2PR6 power removed pre-scenario; do NOT restore). <span class="hi-exam">2PR2 fails to close after demand</span> — RO closes the PORV Block valve and RCS pressure rises. Scenario terminates after the stuck-open PORV is addressed.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
EOP-SGTR-1 entered from EOP-TRIP-1 after 24 SG tube rupture (650 gpm). Isolation of 24 SG: <span class="hi-exam">24MS10 set to 1045 psig and closed, 24MS167, 24MS18, 24MS7, 24GB4 closed</span>. Feed isolation: <span class="hi-exam">24AF21 and 24AF11 closed</span>. Dispatch to close 24SG (2SS339) and shift gland sealing steam to alternate IAW S2.OP-SO.GS-0001. RCS cooldown target from Table B: SG press >1000 psig = <span class="hi-exam">503 F CETs</span>. PO initiates cooldown using steam dumps at 25% demand in MS Pressure Control or intact MS10s. <span class="hi-exam">CT#2 (CT-19): crew must stop cooldown when hottest CETs < target temp</span> to prevent transition out of SGTR-1. Note: 2PR6 power removed earlier (PZR pressure channel failure) — CRS may direct restoring power for subsequent RCS depressurization.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
Entered from EOP-TRIP-1 when <span class="hi-exam">21 SG NR level rising in an uncontrolled manner</span> following 650 gpm tube rupture. Isolate 21 SG: close 21AF21 and 21AF11 (feed — CT-18 Part 1, within 10 min), close <span class="hi-exam">21MS167</span> (steam — CT-18 Part 2), set 21MS10 to 1045 psig. Dispatch to close 21MS45 and 2SS321. Trip 23 AFW pump (lower to min speed first). Target cooldown temp from Table B: <span class="hi-exam">SG press >1000 psig = 503 F CETs</span>. Cooldown using steam dumps on intact SGs — bypass Tavg Lo-Lo pushbuttons. Stop cooldown placing MS Pressure Control in Auto (CT-19 Part 2). Normal spray NOT available (23 RCP stopped) — depressurize using <span class="hi-exam">PZR PORVs</span> IAW Table E. PORV fails to close → close block valve (CT-10).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
Entered from EOP-TRIP-1 when <span class="hi-exam">23 SG NR level rising in an uncontrolled manner</span> following a 650 gpm tube rupture. Key actions in SGTR-1: identify 23 SG as ruptured, set <span class="hi-exam">23MS10 to 1045 psig</span>, isolate ruptured SG (close 23AF21, 23AF11, 23MS167, 23MS18, 23MS7, 23GB4, dispatch operator to close 23MS45, close 2SS333). Determine RCS target temperature using <span class="hi-exam">Table B: SG pressure > 1000 psig = 503 F CETs</span>. Cooldown using steam dumps on intact SGs at maximum rate — bypass Tavg Lo-Lo pushbuttons. After reaching target temp, stop cooldown by placing MS Pressure Control in Auto. Reset SI, Phase A, Phase B. Depressurize using PZR spray valves per Table D criteria. When 2PS3 fails to close, stop 21 and 23 RCPs to eliminate spray flow path, continue at step 19.
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCS]], [[Pressurizer & PRT]], [[Main Steam]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-7 — Rediagnosis]], [[EOP-SGTR-2 — Post SGTR Cooldown]], [[EOP-SGTR-3 — SGTR with LOCA Subcooled Recovery]], [[EOP-SGTR-5 — SGTR without Pressurizer Pressure Control]], [[EOP-FRHS-3 — Response to Steam Generator High Level]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]]
- Related exam questions: [[2015 Q11]], [[2016 Q15]], [[2016 Q79]], [[2018 Q57]], [[2020 Q79]], [[2022 Q11]], [[2022 Q25]], [[2015 Q79]], [[2014 Q14]], [[2012 Q19]], [[2012 Q55]], [[2012 Q78]]
- Related JPMs: [[2019 JPM SRO-A5]], [[2019 JPM Sim-c]], [[2020 JPM Sim-g]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2017 Scenario 8]], [[2018 Scenario 1]], [[2022 Scenario 4]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2015 Scenario 2]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]], [[2012 Scenario 2]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
