---
title: "AB.RCP-0001 — RCP Abnormality"
category: abnormals
status: draft
aliases:
  - AB.RCP-0001
  - RCP abnormality
---

# AB.RCP-0001 — RCP Abnormality

## Purpose
Provides guidance for response to reactor coolant pump abnormal conditions.

## Continuous Action Summary (Attachment 1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q4</div>
AB.RCP-0001 Attachment 2 CAS requires stopping RCPs for motor winding temp <span class="val-trip">>302°F</span>. Common distractors:<br>
- Motor bearing temp 170°F — does NOT exceed CAS limit of <span class="val-trip">>175°F</span><br>
- Motor flange vibration 3 mils — entry condition for AB.RCP-0001 but CAS trip requires <span class="val-trip">>5 mils</span><br>
- CC-131 closure (thermal barrier valve) alone — CAS requires <span class="hi-exam">concurrent loss of BOTH seal injection AND thermal barrier CCW</span> to secure within 2 minutes; loss of thermal barrier CCW alone does not require immediate trip
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q27</div>
Trip reactor and stop affected RCP if ANY of the following validated conditions exist:<br>
- CCW flow lost to ALL RCPs AND not restored within <span class="val-trip">5 minutes</span><br>
- RCP Seal Injection AND Thermal Barrier CCW lost concurrently (secure within <span class="val-trip">2 minutes</span>)<br>
- Shaft vibration > <span class="val-trip">20 mils</span> or motor flange vibration > <span class="val-trip">5 mils</span><br>
- Motor bearing temperature > <span class="val-trip">175°F</span><br>
- Motor winding temperature > <span class="val-trip">302°F</span> (Modes 1-5)<br>
- Seal water outlet temperature > <span class="val-trip">190°F</span><br>
- #1 Seal leakoff < 0.8 gpm AND reverses to ≥ 6.0 gpm<br>
- #1 Seal leakoff < 0.8 gpm with rising pump bearing/seal inlet temps<br>
- #1 Seal leakoff ≥ 6 gpm
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q78</div>
If vibration parameters are below Attachment 1 trip criteria (shaft <span class="val-trip">20 mils</span>, motor flange <span class="val-trip">5 mils</span>), do NOT immediately trip the RCP. Per Step 3.10, the <span class="hi-exam">CRS/SM determines if a controlled Unit shutdown is required</span> to remove the affected RCP from service. Example: shaft vibration at 16 mils and motor flange at 3 mils — both below trip limits, so prepare for controlled shutdown rather than immediate trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q86</div>
A <span class="hi-exam">#3 seal leak</span> is indicated by STANDPIPE LEVEL-LO alarm with #1 seal leakoff steady at 1.5 gpm (normal, indicating intact #2 seal). Action: <span class="hi-exam">make-up to the standpipe per the ARP; power operation may continue</span>. AB.RCP-0001 does not provide specific direction for a #3 seal leak. <span class="hi-trap">Trap: the orderly shutdown and stop RCP within 8 hours action applies to a degraded #2 seal, not a #3 seal leak.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q5</div>
Loss of CCW thermal barrier: if <span class="hi-exam">1CC190 closes (common return), ALL RCP thermal barriers lose CCW</span>. RCPs may continue running if charging flow is maintained. <span class="hi-trap">Trip RCP within 2 minutes only if BOTH CCW and charging are lost.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q86</div>
Attachment 1: #1 seal leak-off flow <span class="hi-exam">>= 6 gpm</span> indicates a <span class="hi-exam">#1 seal failure</span> — go to Attachment 2 (Stopping RCPs). Attachment 2 directs: <span class="hi-exam">manual reactor trip, stop affected RCP, then 3-5 minutes after stopping close the CV104 valve</span>, then go to EOP-TRIP-1. <span class="hi-trap">High seal leak-off indicates #1 seal failure (not #2). An orderly shutdown within 8 hours applies to a degraded #2 seal (leak-off < 0.8 gpm or slowly approaching 6 gpm), NOT a failed #1 seal at >= 6 gpm.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
23 RCP motor bearing oil level low. Motor bearing temperatures rising above <span class="hi-exam">175 degF</span> trip criterion and vibrations > <span class="hi-exam">5 mils</span> per AB.RCP-0001. CRS directs reactor trip and stop 23 RCP IAW Attachment 2. This initiates entry into EOP-TRIP-1 where the main turbine then fails to trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q55</div>
CC131 thermal barrier isolation and RCP trip requirement: <span class="hi-exam">loss of thermal barrier CCW alone (with seal injection still normal) does NOT require securing ALL RCPs within 2 minutes</span>. The 2-minute CAS action applies only when <span class="hi-exam">BOTH seal injection AND thermal barrier CCW are lost concurrently</span>. CC131 auto-closure setpoint: <span class="val-trip">175 gpm</span> hi flow. <span class="hi-trap">Trap: candidates may confuse CC131 closure (thermal barrier loss only) with loss of ALL seal cooling, but seal injection via CVCS is a separate and independent cooling path.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q28</div>
RCP #2 seal failure diagnostics: standpipe level HIGH alarm combined with #1 seal leak-off flow LOWERED = <span class="hi-exam">#2 seal failure</span>. <span class="hi-trap">Standpipe level LOW alarm = #3 seal problem. Do not confuse standpipe high vs low alarm implications.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
23 RCP shaft vibration exceeds <span class="hi-exam">20 mils</span> (OHA D-36 RCP VIB HI, 2RP3 monitor). CRS enters AB.RCP-0001, implements CAS action per Attachment 2 to stop 23 RCP due to exceeding shaft vibration limits. <span class="hi-exam">Trip reactor, confirm trip, stop 23 RCP.</span> Consequence: loss of 23 RCP removes normal PZR spray capability (spray lines fed from Loops 1 and 3 cold legs — requires 21 or 23 RCP running).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #1</div>
22 RCP oil level low (Event 5). OHA D-13 for 22 RCP BRG OIL LVL LO. PO reports 22 RCP Upper Radial Bearing Oil Level Low — motor bearing temperatures rising to or exceed <span class="hi-exam">175 F</span>. CRS enters AB.RCP-0001 and implements <span class="hi-exam">Attachment 2</span> for stopping 22 RCP. Required action: <span class="hi-exam">trip the reactor, confirm the reactor trip, THEN stop 22 RCP</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q51</div>
AB.RCP-0001 CAS: motor flange vibration > <span class="val-trip">5 mils</span> requires stopping the RCP (Attachment 2). After reactor trip from 75% power with one RCP stopped and RTB A closed but RTB B open, <span class="hi-exam">LCO 3.4.1.2 IS met</span> because with the rod control system de-energized (RTB B open, bypass breakers not racked in), only <span class="hi-exam">two RCS loops are required to be OPERABLE</span>. <span class="hi-trap">Trap: LCO 3.4.1.2 requires ALL loops OPERABLE only when rod control is ENERGIZED. Candidates confuse the energized vs de-energized requirements.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q79</div>
Attachment 2 — concurrent loss of seal injection AND thermal barrier CCW (2CC131 closes AND CV pumps unavailable): with Seal Leakoff < <span class="hi-exam">6 gpm</span>, the crew is <span class="hi-exam">NOT required to close 21-24CV104s (SEAL LEAKOFF) within 3-5 minutes</span> after stopping RCPs (Step 1.4). At Attachment 2 Step 5.0, seal cooling method depends on RCP Seal Inlet Temperatures: if ALL temps are < <span class="val-alarm">225 &deg;F</span>, perform <span class="hi-exam">Attachment 4 (Re-establishing RCP Seal Cooling)</span>; if NOT ALL temps are < 225 &deg;F, perform <span class="hi-exam">S2.OP-AB.RC-0004 (Natural Circulation)</span> for seal cooling. <span class="hi-trap">Trap: 22 RCP at 227 &deg;F exceeds the 225 &deg;F threshold, so not ALL are less than 225 &deg;F. The procedure routes to Natural Circulation, not Attachment 4.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
22 RCP #1 seal degradation: seal leakoff flow rises to <span class="hi-exam">~5.2 gpm</span> (stable). CRS enters AB.RCP-0001, uses P-250 to check 22 RCP conditions. CCW supply normal, winding temps normal, seal injection >6 gpm. CRS determines <span class="hi-exam">orderly shutdown required within 8 hours</span> (Step 3.6). Seal then fails — leakoff exceeds 6 gpm → Att 1 CAS and Att 2 (Stopping RCPs). CRS briefs trip actions, assigns <span class="hi-exam">22CV104 closure within 3-5 minutes</span> of stopping 22 RCP. Trip reactor, stop 22 RCP, close 22CV104 (CT#1).
</div>

## Connections
- Related systems: [[RCPs]], [[CCW]], [[CVCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related procedures: [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]], [[AB.RC-0004 — Natural Circulation]]
- Related exam questions: [[2018 Q51]], [[2018 Q79]], [[2019 Q55]], [[2020 Q4]], [[2020 Q28]], [[2022 Q5]], [[2022 Q86]], [[2023 Q27]], [[2023 Q78]], [[2023 Q86]]
- Related scenarios: [[2018 Scenario 1]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]]
- Related exam: [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]]
