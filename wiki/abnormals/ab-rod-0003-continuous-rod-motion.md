---
title: "AB.ROD-0003 — Continuous Rod Motion"
category: abnormals
status: draft
aliases:
  - AB.ROD-0003
  - S2.OP-AB.ROD-0003
  - continuous rod motion
---

# AB.ROD-0003 — Continuous Rod Motion

## Purpose

Provides operator actions for responding to uncontrolled or continuous rod motion, including rod control system failures, failed Tavg channels, and failed NIS channels.

## Key Actions / Information

- Step 3.1: Place rod bank selector switch in Manual
- Step 3.2: Verify rod motion stops (if not, trip the reactor)
- Step 3.5: Adjust rods in manual to control Tavg within 1.5F of Tprogram
- Step 3.9: Determine if a Tavg channel failed high or low
- Step 3.10: Return PZR level to program (take Master Flow Controller to manual)
- Steps 3.11-3.12: Defeat deviation alarms and select valid recorder channels

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-g</div>
Failed high Tavg channel response: recognize unwarranted rod insertion (rods stepping in with no runback), take rods to manual. Restore Tavg within <span class="hi-exam">1.5F of Tprogram</span> by withdrawing rods. Stabilize PZR level by placing Master Flow Controller in manual. Defeat <span class="hi-exam">BOTH Differential Temperature AND Average Temperature</span> deviation alarms on 2CC2 for the affected loop, then select a valid recorder channel (Channel 2, 3, or 4) for both parameters.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-a</div>
During rod surveillance (S2.OP-ST.RCS-0001), after returning the rod bank selector switch to AUTO, if unexpected <span class="hi-exam">continuous rod insertion</span> occurs with no runback in progress — place switch in Manual. If rod motion does NOT stop, <span class="hi-exam">manually trip the reactor</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-a</div>
During rod surveillance (S2.OP-ST.RCS-0001), after placing rod bank selector switch in AUTO at step 4.1.11.3, uncontrolled rod insertion occurs (rods insert in <span class="hi-exam">both AUTO and MANUAL</span>). Applicant must recognize rods continue inserting after placing switch in Manual and <span class="hi-exam">manually trip the reactor</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Event 3: <span class="hi-exam">24 Loop Cold Leg RTD fails high</span> causing continuous rod insertion. RO verifies no turbine runback in progress and places rods in Manual. CRS enters AB.ROD-0003. RO places MFC in Manual, reports various 2CC2 console alarms (RC Loop Tavg Deviation, Tavg-Tref Deviation, RC Tavg Hi or Lo-Lo, RC Loops DT Dev). CRS directs RO to adjust rods to maintain Tavg within <span class="hi-exam">1.5 deg of T program</span>, stop dilution, and return PZR level to program. RO defeats 24 loop RC DT and Average Temperature on 2CC2, selects alternate channel. After restoring rods and placing in Auto, CRS enters <span class="hi-exam">TS 3.3.1.1 Action 6</span> and <span class="hi-exam">TS 3.3.2.1.b Action 19</span> (place channel in tripped condition within 72 hours). CRS initiates S2.OP-SO.RPS-0002.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #2</div>
Event 4: 24 Loop Cold Leg RTD fails high (value 630 F) causing continuous rod insertion. RO reports no turbine runback. Places rods in Manual — motion stops. CRS enters AB.ROD-0003. RO places MFC in Manual, reports 2CC2 console alarms (Tavg Deviation, Tavg-Tref Deviation, RC Tavg Hi/Lo-Lo, DT Dev). Defeats 24 loop DT and Tavg on 2CC2, selects operable channel. Restores rods to Auto after Tavg within <span class="hi-exam">1.5 degrees of Tref</span>. CRS enters <span class="hi-exam">TS 3.3.1.1 Action 6</span> and <span class="hi-exam">TS 3.3.2.1.b Action 19</span> (72 hours each). CRS initiates S2.OP-SO.RPS-0002.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
<span class="hi-exam">2PT-505 turbine inlet pressure channel fails low</span> causing continuous rod insertion at 72 steps per minute. RO places rod control in Manual — rod motion stops. CRS enters AB.ROD-0003. RO maintains Tavg within <span class="hi-exam">1.5 F of Tref</span> using manual rod control. PO identifies PT-505 as the failed channel. PO places main steam dumps in MS Pressure Control-Auto. CRS enters <span class="hi-exam">TS 3.3.2.1.b Action 19 (72 hours)</span>. CRS initiates S2.OP-SO.RPS-0006 for turbine channel trip/restoration. RO withdraws control rods to ARO position.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-c</div>
During rod surveillance at Step 5.1.11.C, when rod bank selector switch placed in AUTO, <span class="hi-exam">continuous rod insertion occurs in both AUTO and MANUAL</span>. Operator announces rods stepping in with no runback, places switch to Manual — rod motion does NOT stop. Recognizes situation and <span class="hi-exam">manually trips the reactor</span>. Same discriminating step concept tested across 2020, 2022, and 2023 exam cycles.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q67</div>
Entry conditions: rods <span class="hi-exam">withdraw OR insert</span> a MINIMUM of <span class="hi-exam">3 steps</span> at steady state conditions. <span class="hi-trap">2 steps of rod motion can occur from process noise (per the AB.ROD-0003 basis) and does NOT warrant procedure entry. The entry threshold is 3 steps, not 2.</span> <span class="hi-trap">Entry applies to BOTH withdrawal and insertion — not withdrawal ONLY.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
Event 3: <span class="hi-exam">22 Hot Leg RTD Avg Sum fails high (value 650 F)</span> causing continuous rod insertion at <span class="hi-exam">72 spm</span>. RO verifies no runback in progress and places rods in Manual. CRS enters AB.ROD-0003. RO reports rod motion stopped, motion was inward, NO NI failures, and <span class="hi-exam">22 loop Tavg failed high with NO dilution in progress</span>. Places MFC in Manual and adjusts charging flow per Att. 2 to return PZR level to program. Selects <span class="hi-exam">Deviation Defeat for Loop 22 DT and Tave</span> on 2CC2; selects recorders to channel other than 22 loop. After Tave within <span class="hi-exam">1.5°F of program</span>, restores rods to Auto. CRS initiates removing 22 loop RCS temperature channel from service IAW <span class="hi-exam">S2.OP-SO.RPS-0002</span>; enters TSAS <span class="hi-exam">3.3.1.1 Action 6 and 3.3.2.1 Action 19</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
22 RC Loop Tavg Channel fails high at 40% power. Rods step in unexpectedly (Tavg/Tref deviation). RO reports no turbine runback, places rod control in Manual. OHAs E-8 (Rod Insertion Lo) and E-16 (Rod Insertion Lo-Lo). CRS enters AB.ROD-0003. RO identifies <span class="hi-exam">22 RC Loop Tavg channel failed high</span>. Adjusts rods to maintain Tavg within 1.5 deg of program. Defeats 22 loop dT and Tavg on 2CC2, selects alternate channel. Restores rods to ARO, returns rod control to Auto. CRS enters TSAS <span class="hi-exam">3.3.1.1 Action 6 (6 hr) and 3.3.2.1.b Action 19 (6 hr)</span>. CRS initiates S2.OP-SO.RPS-0002 to place 22 RC Loop Tavg in tripped condition.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
Event 2: <span class="hi-exam">Power Range NI Channel IV (2N44) fails high</span> during a power ascension, driving control rods to step IN at <span class="hi-exam">72 spm</span> (if rod control is in auto). RO verifies no load reject in progress and places rods in Manual. <span class="hi-trap">If rods were in auto, the crew may enter AB.ROD-0003 first, but transitions to AB.NIS-0001 because the root cause is a nuclear instrument failure, not a temperature/process channel.</span> The failed channel is then removed from service per S2.OP-SO.RPS-0001. See [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q76</div>
AB.ROD-0003 is entered for unwanted continuous rod motion. When outward rod motion is caused by an inadvertent RCS boration (e.g., 1CV185 Makeup to Charging Pump Suction Valve opening), the response is to <span class="hi-exam">place control rods in MANUAL and terminate the boration</span>. Distinguish from a nuclear-instrument fail-low (AB.NIS-0001) and a xenon transient (large AFD change, dampen per Power Operation Attachment 1) — both of which present differently.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #2</div>
The Main Turbine inlet steam pressure transmitter <span class="hi-exam">PT-505 fails low</span>; with rod control in auto, the rods insert at maximum rate. RO verifies no load reject in progress and <span class="hi-exam">places control rods in manual</span>, and CRS enters AB.ROD-0003. If rods are already in manual, the crew diagnoses the failure from the alarms received and the RP4 high steam flow bistable status, then addresses the failed channel per the TSAS.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q40</div>
AB.ROD-0003 Attachments 1 and 2 give the PZR level program as a function of Tavg: <span class="hi-exam">at 20% power Tavg on program is 551.6°F → PZR program level ~28%</span>; no-load (547°F) → 22%; 80% power (569.5°F) → ~51%. Program PZR level is clipped at 59%. See [[Pressurizer Level & Press Control]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q76</div>
With the Main Turbine online below P-2 (Permissive P-2 actuates at <span class="hi-exam">&lt;15% turbine load and prevents automatic rod withdrawal</span>), control rods should NOT be withdrawing in automatic. Unexpected automatic rod withdrawal is addressed by entering AB.ROD-0003 — <span class="hi-exam">place control rods in MANUAL and adjust control rods (not turbine load) to restore Tavg to within 1.5°F of program</span>. Rod control is normally placed in manual upon reaching 20% power in AB.LOAD-0001; the abnormal rod withdrawal is corrected with this procedure, not the load-reduction procedure. See [[Control Rod Drive]].
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Steam Dumps]], [[Control Rod Drive]], [[CVCS]], [[Pressurizer Level & Press Control]]
- Related procedures: [[S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-IO.ZZ-0004 — Power Operation]]
- Related exam questions: [[2019 Q67]], [[2014 Q76]], [[2012 Q40]], [[2012 Q76]]
- Related JPMs: [[2023 JPM Sim-a]], [[2023 JPM Sim-g]], [[2022 JPM Sim-a]], [[2020 JPM Sim-c]]
- Related scenarios: [[2017 Scenario 7]], [[2018 Scenario 2]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]], [[2015 Scenario 1]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]]
- Related exam: [[2017 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]]
