---
title: "2019 Scenario 1 — Power Ascension / LOCA Outside Containment"
category: exams
status: draft
aliases:
  - 2019 Scenario 1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — Power Ascension / LOCA Outside Containment</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-256: 4% power, BOL; 23 Charging Pump is running, 21 SGFP is in service with AFW pumps secured, power ascension in progress at 10% per hour with control rods in manual and steam dumps in MS mode in Auto. 22 SW pump C/T for strainer motor replacement.<br><br>
<strong>Turnover:</strong> Crew is directed to continue raising Rx power to 10% and enter Mode 1 using Control Rods and Main Steam Dumps IAW S2.OP-IO.ZZ-0003.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension at 10% per hour and enter Mode 1</li>
<li>PZR pressure controlling channel fails high (TS exercised)</li>
<li>21 SG NR level fails low (TS only)</li>
<li>21A Main Condenser tube leak</li>
<li>22 RCP motor oil leak requiring manual reactor trip</li>
<li>RHR intersystem RCS leak on 22 RHR heat exchanger during EOP-TRIP-2</li>
<li>One train of SI fails to manually actuate; 22 Charging pump fails to start on SEC; 2CV116 and 2CV284 fail to close on Phase A</li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence & Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Power ascension and enter Mode 1 (5%)</td>
<td style="padding:6px;color:#9ca3af;">CRS directs RO to withdraw control rods or raise demand on steam dumps to raise reactor power IAW S2.OP-IO.ZZ-0003, Hot Standby to Minimum Load. RO withdraws rods in manual to raise power. RO reports reactor power is 5% and the unit is in Mode 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">PZR Pressure Channel I fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA D-8 RC PRESS HI and E-42 2PR1 1/2 TRIP. RO reports PZR Pressure Channel I has failed high and RCS pressure is lowering. RO places Master Pressure Controller (MPC) in Manual. CRS enters S2.OP-AB.PZR-0001. RO reports POPS is not in service. RO selects Channel III for control. RO places MPC to Auto. CRS refers to Tech Specs. CRS enters TSAS for 3.3.3.1 Action 6 (6 hour LCO), 3.3.2.1 Action b.19 (6 hour LCO), 3.4.5 Action b (1 hour LCO), and 3.2.5.b (2 hour LCO if RCS pressure < 2200 psia). CRS directs RO to place 2PR1 in Manual and close 2PR6 Block Valve to comply with Tech Specs. CRS directs WCC to remove control power to 2PR6.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">21 SG Narrow Range Level Channel II fails low (TS only)</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA G-15 ADFCS TROUBLE and 21 SG Console Alarm for PROTECTION LEVEL LO-LO. PO reports 2PR4 bistable illuminated for SG Lo-Lo Level Loop 1 CH II. Crew refers to ARP for 2CC2 and OHA G-15. PO checks digital feed water EWS at 2RP7 and reports 21 SG CH II level has failed low. Crew determines failed channel does not impact plant operation. CRS evaluates Tech Specs and enters TSAS 3.3.1.1 Action 6 (6 hour LCO) and 3.3.2.1 Action b.19 (6 hour LCO).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">21A Condenser tube leak</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected Console Alarm for HOTWELL OUTLET CONDUCTIVITY HI. PO refers to ARP for 2CC1 and notifies CRS that entry into S2.OP-AB.CHEM-0001 is required. CRS enters S2.OP-AB.CHEM-0001, Abnormal Secondary Chemistry. Crew checks secondary plant chemistry recorders on 2RP5 and determines 21A condenser is affected hotwell. PO reports Attachment 1 CAS Step 1.0 is met for condenser tube failure/leak and Attachment 2 is applicable for Gross Condenser Tube Failure. PO Emergency Trips 21A CW pump. CRS also enters S2.OP-AB.CW-0001, Circulating Water System Malfunction. PO reports no indication of CW system piping rupture. PO reports indication of condenser tube leak in 21A condenser.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 RCP oil level low — manual reactor trip</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports unexpected OHA D-13 for 22 RCP BRG OIL LVL LO. PO reports alarm is for 22 RCP Upper Radial Bearing Oil Level Low. PO refers to ARP and reports RCP motor bearing temperatures are rising to or exceed 175 F. CRS enters S2.OP-AB.RCP-0001 and implements Attachment 2 for stopping 22 RCP. CRS directs RO to trip the reactor, confirm the trip, THEN stop 22 RCP. RO trips the reactor and performs immediate actions of EOP-TRIP-1. CRS enters EOP-TRIP-1. RO and CRS review SI parameters and determine no SI is required. PO throttles AFW flow to >22E4 lbm/hr. CRS transitions to EOP-TRIP-2, Reactor Trip Response. PO stops 21 and 22 SGFPs.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RHR intersystem RCS leak (LOCA outside Containment)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports unexpected console alarms for 24 SI Accumulator Level HI-Lo and Press Hi-Lo with levels and pressures lowering. RO reports OHA A-41 for 23 and 24 RHR Sump Pump starts. RO reports OHAs C-34 22 RHR SUMP OVRFLO and E-36 PZR HTR OFF LVL LO. CRS directs RO to estimate RCS leak rate — greater than Auto Makeup capability. RO recommends initiating SI. CRS directs RO to initiate SI. One train of SI fails to manually actuate. RO actuates other train of SI and reports SI initiated on both trains. (Critical Task #1) CRS returns to EOP-TRIP-1. 22 Charging pump fails to start by 2C SEC — PO blocks and resets 2C SEC, RO starts 22 Charging pump. 2CV116 and 2CV284 fail to close on Phase A — RO manually closes both valves. RO reports 2R41D Plant Vent radiation monitor in alarm, 22 RHR sump overflow alarms. Crew determines RCS leak indicated in 22 RHR pump room — LOCA outside containment. CRS transitions to EOP-LOCA-6.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Isolate RHR intersystem leak in EOP-LOCA-6</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO resets SI Phase A and Phase B. RO opens 21 and 22 CA330s. PO resets each SEC and associated 230V control centers. RO reports 2RH1 and 2RH2 (Common Suction) are closed. RO closes 21 and 22 RH19s (RHR discharge cross-connect). RO reports RCS pressure is NOT rising. RO reports 21SJ49 in AUTO — PO removes lockout, RO closes 21SJ49, reports RCS pressure NOT rising, then opens 21SJ49. RO reports 22RH29 is in AUTO — PO removes lockout for 22SJ49, RO closes 22SJ49. (Critical Task #2) RO reports RCS pressure is rising. RO stops 22 RHR pump. CRS transitions to EOP-LOCA-1. Crew determines SI termination requirements are met and transitions to EOP-TRIP-3.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-2):</strong> Manually actuate SI before transition out of EOP-TRIP-1. Safety significance: failure to manually actuate SI when automatic SI has failed results in degraded ECCS capability during a LOCA — crew fails to prevent degradation of a barrier to fission product release and fails to recognize an incorrect automatic actuation of an ESF system. Cues: lowering PZR pressure and level, SI accumulator levels and pressures lowering, RHR sump pump starts and overflow alarms indicating significant RCS leak. Automatic SI has failed to actuate. Measurable criteria: at least one train of SI successfully actuated from the control room.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-32):</strong> Isolate LOCA outside containment before transition out of EOP-LOCA-6. Safety significance: failure to isolate the RHR intersystem leak results in continued loss of RCS inventory outside containment, degrading both the RCS fission product barrier and ECCS recirculation capability. Cues: 2R41D Plant Vent radiation monitor in alarm, 22 RHR sump pump starts and overflow, lowering PZR level and pressure, 24 SI accumulator levels/pressures lowering. RCS pressure does not rise until the leaking flow path (22SJ49) is isolated. Measurable criteria: 22SJ49 closed and RCS pressure rising.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">AB.PZR-0001 (PZR pressure channel fail) → AB.CHEM-0001 / AB.CW-0001 (condenser tube leak) → AB.RCP-0001 (22 RCP oil leak, manual Rx trip) → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response — no SI required) → RHR intersystem leak develops, SI manually actuated → return to <span class="hi-exam">EOP-TRIP-1</span> → <span class="hi-exam">EOP-LOCA-6</span> (LOCA Outside Containment — isolate 22SJ49) → <span class="hi-exam">EOP-LOCA-1</span> (Loss of Reactor Coolant — SI termination criteria met) → <span class="hi-exam">EOP-TRIP-3</span> (SI Termination)</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: New | ESG-1 | 17-01 NRC-1 | <a href="/salem-study-system/exam-pdfs/2019-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[RHR]], [[ECCS]], [[CVCS]], [[AFW]], [[RCPs]], [[Circ Water]], [[Steam Dumps]], [[SECs]], [[Radiation Monitoring]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-TRIP-3 — SI Termination]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.CHEM-0001 — Secondary Chemistry Abnormality]], [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.RCP-0001 — RCP Abnormality]]
- Related exam: [[2019 NRC Operating Exam]]
