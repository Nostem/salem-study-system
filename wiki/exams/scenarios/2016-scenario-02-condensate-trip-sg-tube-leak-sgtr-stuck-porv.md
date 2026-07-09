---
title: "2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV"
category: exams
status: draft
aliases:
  - 2016 Scenario 2
  - 2016 ESG-2
  - 15-01 NRC ESG-2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in MODE 1 at 89.4% power, BOL. RCS Boron 1114 ppm; 1080 MWe. Power was reduced last shift in preparation for performing Main Turbine Valve testing later this shift. Control Bank D is at 193 steps; Xenon is building in at 25 pcm/hr following downpower last shift. 2C EDG Jacket Water heater is failed and CIT (abnormal plant configuration). Condensate Polisher is in service. Unit 1 and Hope Creek at 100% power. No penalty minutes in the last 24 hrs. No discharges in progress. No most-limiting LCO in effect.<br><br>
<strong>Turnover:</strong> The crew takes the watch with the unit at 89.4% power, BOL. Power was reduced last shift in preparation for performing Main Turbine Valve testing (S2.OP-PT.TRB-0003) being briefed by a dedicated test team to be performed in one hour. 2C EDG Jacket Water heater failed last shift. Condensate Polisher is in service.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li><span class="hi">2C EDG Pre-Lube pump failure</span> (TS) — CRS identifies 2C EDG inoperable with both Jacket Water heater and Pre-lube pump inoperable; enters LCO 3.8.1.1.b action b; initiates S2.OP-ST.500-0001 within one hour</li>
<li><span class="hi">23 Condensate pump trip / power reduction</span> — crew enters AB.CN-0001, bypasses condensate polisher, isolates letdown if 2CN47 opened, performs power reduction to 85% IAW AB.LOAD-0001</li>
<li>Charging Master Flow Controller failure — crew enters AB.CVC-0001, takes manual control of 23 charging pump per Att. 2 to maintain PZR level on program</li>
<li><span class="hi">21 SG tube leak</span> — crew enters AB.SG-0001 and AB.RAD-0001; isolates 21MS45 steam supply to 23 AFW pump; CRS enters LCO 3.7.1.2 (less than 3 operable AFW pumps) and LCO 3.4.7.2.c (>150 gpd primary-to-secondary leakage); Action Level 3 requires &lt;50% power in 1 hour and Hot Standby in 6 hours</li>
<li><span class="hi">21 SG tube rupture (SGTR)</span> — leak escalates; crew trips Rx and initiates SI based on uncontrolled rise in 21 SG NR/WR level; enters EOP-TRIP-1</li>
<li><span class="hi">21 AFW pump trip</span> after SI — PO isolates AFW flow to and steam flow from 21 SG (CT#1), then transitions to EOP-SGTR-1</li>
<li>23 RCP trip during RCS depressurization — spray no longer effective; crew shuts PZR Spray valves and uses 2PR2 PZR PORV to continue depressurization (2PR1 fails to open)</li>
<li><span class="hi">2PR2 PZR PORV fails to shut</span> after depressurization complete; 2PR7 Block Valve fails 90% open; CRS transitions to EOP-SGTR-3, SGTR with LOCA — Subcooled Recovery (scenario terminates)</li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence &amp; Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">2C EDG Pre-Lube pump failure (TS)</td>
<td style="padding:6px;color:#9ca3af;">PO announces unexpected OHA J-20, 2C DG URGENT TRBL. The crew refers to the ARP and dispatches an operator to investigate; the operator reports back that 2C EDG Alarm Window A-7 PRE-LUBE PUMP FAILURE is in alarm, the Pre-lube pump is NOT running, and the Pre-lube pump breaker remains shut. CRS refers to S2.OP-SO.DG-0003, 2C Diesel Generator Operation, and recognizes 2C EDG is now inoperable with the Jacket Water Heater and Pre-lube pump inoperable, and enters LCO 3.8.1.1.b, action b. CRS determines that S2.OP-ST.500-0001, Electrical Power Systems AC Sources Alignment must be performed within one hour to demonstrate the operability of the independent AC Sources (action b.1).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">23 Condensate pump trip / power reduction</td>
<td style="padding:6px;color:#9ca3af;">PO announces 23 Condensate pump trip. CRS enters S2.OP-AB.CN-0001, Main Feedwater / Condensate System Abnormality. PO reports no SGFP tripped and 23 Condensate pump tripped. PO bypasses condensate polisher by opening 21 thru 23 CN108 if SGFP suction pressure is &lt;320 psig. PO reports SGFP suction pressure. Crew discusses the power increase expected when 2CN47 is opened (note in AB.CN-1). CRS directs 2CN47 opened if suction pressure remains &lt;320 psig. PO isolates letdown by closing 21-24BG4 and 21-24GB185 if 2CN47 is open. CRS directs power reduction to 85% at ~5%/min with 2 Condensate pumps and 3 Heater Drain pumps in service IAW Attachment 4. CRS enters S2.OP-AB.LOAD-0001, Rapid Load Reduction, and directs initiation of AB.LOAD CAS. RO calculates boron addition and rate for power reduction, initiates boration. PO initiates turbine load reduction to 85% at rate directed by CRS.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Charging Master Flow Controller failure</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected low seal injection flow alarms on all RCPs and reports the Master Flow Controller is failed based on lower than expected charging flow (75 gpm vs 87 gpm). CRS enters S2.OP-AB.CVC-0001, Loss of Charging. RO may use Alarm Response Procedure initially in response to Low Seal Injection Flow to adjust 2CV71 to restore seal injection flow above the alarm setpoint, but this will not restore normal charging flow. RO reports a charging pump is running with no indication of cavitation; neither a PZR level nor a VCT level channel has failed; no indication of charging system leak; and confirms the Charging Master Flow Controller has failed. RO takes manual control of 23 charging pump and adjusts speed to maintain PZR level on program IAW Att. 2. RO reports PZR level can be maintained stable or rising and announces auto rod motion when it occurs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SG tube leak</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports unexpected OHA A-6 and identifies 2R53A 21 Main Steamline N-16 monitor from CRT indication in alarm. RO reports 2R53A level &gt;1000 gpd. CRS enters S2.OP-AB.SG-0001, Steam Generator Tube Leak, and S2.OP-AB.RAD-0001, Abnormal Radiation. RO reports OHA A-6 reflash is 2R15 Condenser Air Ejector monitor in alarm. CRS directs initiation of AB.SG CAS. RO reports when 2R19A is in warning and alarm. PO reports when SGBD isolation occurs on high radiation. CRS dispatches operator to isolate TGA and Condensate Polisher area sump pumps. RO reports PZR level being maintained stable by rising charging flow; initial charging flow with stable PZR level is ~89 gpm; if RO reports PZR level is lowering, RO will swap to a centrifugal charging pump at Step 3.6. RO reports PZR level can be maintained stable or rising. SGBD will isolate ~2.5 minutes after 2R53D alarms which causes RCS temp and PZR level to rise. PO reports when load reduction is complete and RO reports unit 2 is in MODE 1. RO reports 21 SG is the affected SG. PO sets 21MS10 to 1045 psig and ensures 21GB4, 21MS18, and 21MS7 are shut. CRS dispatches an operator to shut 21MS45 steam supply to 23 AFW pump. CRS enters LCO 3.7.1.2 for less than 3 operable AFW pumps, and LCO 3.4.7.2.c for &gt;150 gpd primary-to-secondary leakage through 21 SG. CRS determines (Action Level 3) the unit must be less than 50% in less than one hour, the unit placed in Hot Standby within 6 hours. CRS dispatches an operator to realign SGBD and Sampling.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SG tube rupture (SGTR)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports indications of worsening tube leak/rupture, with lowering PZR level and pressure. CRS directs RO to trip the Rx, confirm the Rx trip, and initiate a Safety Injection, then enter TRIP-1. RO trips the Rx, confirms the Rx trip, and initiates Safety Injection. RO backs up the Main Turbine trip, reports 4KV vital buses energized, and reports SI manually initiated. CRS and RO verify TRIP-1 immediate actions. PO receives CRS concurrence and reduces total AFW flow to no less than 22E04 lbm/hr until at least one SG NR level is &gt;9%, then maintains NR levels 19-33%.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 AFW pump trip — isolate 21 SG (CT#1)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports when 21 AFW pump trips, and adjusts flow from 22 and 23 AFW pumps as required based on current SG NR levels (21 AFW pp supplies 23/24 SGs; 22 AFW pp supplies 21/22 SGs; 23 AFW pump supplies all SGs). PO reports all available equipment started on SEC loading and which AFW pumps are running. PO reports correct safeguards valve alignment. RO reports 21 and 22CA330s are shut; containment pressure remains less than 15 psig. PO reports no indication of high steam flow; all 4KV vital buses energized. RO reports ventilation systems lineups correct for current plant conditions. RO reports at least 2 CCW pumps are running; proper ECCS flow indicated. PO reports AFW status, and maintains at least 22E4 lbm/hr flow until at least one SG NR level is &gt;9%, then maintains SG NR levels 19-33%. RO reports RCP status, and RCS temperature stable at or trending to 547&deg;F; both RTBs are open; PZR PORVs are shut with Block valves open; PZR spray status; RCS pressure &gt;1350 psig; maintains seal injection flow to RCPs. PO reports no SGs are faulted; NR or WR level is rising in 21 SG. CRS transitions to EOP-SGTR-1, Steam Generator Tube Rupture. <strong>CT#1 (CT-18):</strong> Isolate feed flow into and steam flow from 21 SG prior to a transition to SGTR-3 being required. PO reports 21 SG is ruptured, ensures 21MS10 is set at 1045 psig; PO reports 21MS10 operating as expected for current pressure; PO shuts 21MS167 and verifies 21MS7, 21MS18, and 21GB4 are shut. PO ensures 23 AFW pump speed at minimum and trips 23 AFW pump. CRS dispatches operator to shut 21MS45 if not previously performed; dispatches operator to shut 2SS321 sample valve. PO reports 21 SG is isolated from all intact SGs. PO controls AFW flow if required to maintain 21 SG NR level &gt;9%. PO reports when 21MS10 opens for pressure control 1045 psig; PO reports 21 SG pressure is &gt;375 psig.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">RCS cooldown to target T (CT#2) and depressurization — 23 RCP trip during depressurization</td>
<td style="padding:6px;color:#9ca3af;">CRS determines target temperature from Table D (503&deg;F for ruptured SG pressure ~1000 psig). PO reports intact SGs are available for cooldown; places steam dumps in MS Pressure Control-Manual at 25% to perform cooldown; bypasses Tavg when Tavg Low-Low is reached. Crew monitors hottest CET temperature while continuing in procedure; when hottest CET is &lt;503&deg;F, crew stops cooldown. RO reports power available to both PZR PORV Stop valves; both PZR PORVs are shut; both PZR PORV Stop valves are open. RO resets SI and Phase A isolation, and reports Phase B isolation reset; opens 21 and 22CA330. PO resets each SEC and reports 230V control centers are reset. RO reports RHR suction is aligned to the RWST and no RHR pump discharge flow; stops both RHR pumps. PO reports 21 SG is ruptured and 21MS167 is shut. RO shuts charging pump miniflows when RCS pressure is &lt;1500 psig. RO reports when hottest CET is less than RCS cooldown target temperature. <strong>CT#2 (CT-19):</strong> Establish and maintain RCS temperature so that transition from SGTR-1 does not occur because temperature is too high to maintain minimum subcooling, or so low it causes transition to FRTS or FRSM. PO reports 21 SG pressure is stable or rising. RO reports normal PZR spray is available; fully opens both PZR Spray Valves; reports PZR Spray is reducing RCS pressure. Crew continues depressurization. RO reports 23 RCP trip; with loss of 23 RCP, spray is no longer effectively reducing RCS pressure. RO shuts both PZR Spray valves; reports both PZR PORVs are available; crew reviews depressurization criteria. If 2PR1 is selected as the PORV to depressurize, RO reports 2PR1 will not open and RO opens 2PR2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">2PR2 PZR PORV fails to shut; 2PR7 Block Valve fails 90% open → EOP-SGTR-3</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports when condition in Table E is met. RO reports 2PR2 will not shut. CRS directs closure of 2PR7 PZR PORV Block Valve. RO reports that after initiating closed on 2PR7, the open limit extinguished but the closed limit has not illuminated (2PR7 fails 90% open). CRS transitions to EOP-SGTR-3, SGTR with LOCA — Subcooled Recovery. Scenario terminates after the transition to SGTR-3 is announced.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-18):</strong> Isolate feed flow into and steam flow from 21 SG prior to a transition to SGTR-3 being required. <em>Basis:</em> Failure to isolate the ruptured SG causes a loss of differential pressure between the ruptured SG and the intact SGs. The fact that the crew allows the differential pressure to dissipate and, as a result, are then forced to transition to a contingency ERG constitutes an incorrect performance that "necessitates the crew taking compensating action that would complicate the event mitigation strategy ...." <em>Measurable performance standard:</em> Part 1 — close 21AF11 and 21AF21 to isolate AFW flow to 21 SG. Part 2 — shut 21MS167 and verify 21MS7, 21MS18, and 21GB4 are shut to isolate steam flow from 21 SG. Both parts must be completed prior to the transition to SGTR-3 being required.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-19):</strong> Establish and maintain an RCS temperature so that transition from SGTR-1 does not occur because temperature is too high to maintain minimum subcooling, or so low it causes transition to FRTS or FRSM. <em>Basis:</em> Failure to establish and maintain the correct RCS temperature during a SGTR leads to a transition from E-3 to a contingency ERG. This failure constitutes an incorrect performance that "necessitates the crew taking compensating action that would complicate the event mitigation strategy ...." <em>Measurable performance standard:</em> cool down the RCS using intact SGs (steam dumps in MS Pressure Control-Manual at 25%) to reach a hottest CET below the target temperature determined from Table D (503&deg;F for ruptured SG pressure ~1000 psig), without lowering RCS temperature so far that EOP-FRTS-1 or EOP-FRSM-1 entry conditions are reached.</span><br><br>
<span style="color:#c8cdd5;font-size:11px;color:#6b7280;"><em>CT numbers in parentheses are the corresponding Westinghouse ERG Rev. 2-based Critical Task procedure WCAP-17711-NP.</em></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-SO.DG-0003 (2C EDG Pre-lube failure → LCO 3.8.1.1.b action b; S2.OP-ST.500-0001 within 1 hour) → S2.OP-AB.CN-0001 (23 Condensate pump trip; bypass polisher and isolate letdown) → S2.OP-AB.LOAD-0001 (controlled 5%/min reduction to 85% power) → S2.OP-AB.CVC-0001 (Master Flow Controller failure; manual control of 23 charging pump) → S2.OP-AB.SG-0001 + S2.OP-AB.RAD-0001 (21 SG tube leak; LCO 3.7.1.2 and 3.4.7.2.c entered; Action Level 3 — &lt;50% in 1 hour and Hot Standby in 6 hours) → leak escalates to rupture, manual reactor trip and SI → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip / safety injection — 21 AFW pump trips; 21 SG isolated per CT#1) → <span class="hi-exam">EOP-SGTR-1</span> (Steam Generator Tube Rupture — cooldown to target T per Table D; CT#2 maintains RCS T below target without challenging FRTS or FRSM; depressurization with PZR Spray) → 23 RCP trips / 2PR1 fails / depressurize via 2PR2 → 2PR2 fails open and 2PR7 Block Valve fails 90% open → <span class="hi-exam">EOP-SGTR-3</span> (SGTR with LOCA — Subcooled Recovery) → scenario terminates after the transition to SGTR-3 is announced.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 15-01 NRC ESG-2 (Rev 00, 8-3-16) | <a href="/salem-study-system/exam-pdfs/2016-scenario-02.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]], [[Feed & Condensate]], [[CVCS]], [[Pressurizer Level & Press Control]], [[Pressurizer & PRT]], [[RCS]], [[ECCS]], [[AFW]], [[SECs]], [[Steam Generator & Blowdown]], [[Main Steam]], [[Steam Dumps]], [[Radiation Monitoring]], [[RCPs]], [[RPS/SSPS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-SGTR-3 — SGTR with LOCA Subcooled Recovery]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]]
- Related procedures: [[AB.CN-0001 — Condensate System Abnormality]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.CVC-0001 — Loss of Charging]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[AB.RAD-0001 — Radiation Monitor Abnormality]]
- Related tech specs: [[TS 3.7 — Plant Systems]], [[TS 3.8 — Electrical]], [[TS 3.4 — Reactor Coolant System]]
- Related exam: [[2016 NRC Operating Exam]]
