---
title: "2023 Scenario 3 — ATWS / Stuck-Open PORV"
category: exams
status: draft
aliases:
  - 2023 Scenario 3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — ATWS / Stuck-Open PORV</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Unit 2 is at 93% power MOL<br><br>
<strong>Turnover:</strong> The crew is directed to raise power to 98% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using dilution, control rods and turbine load control. The 23 Charging pump is C/T for maintenance.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 98% at 10%/hour</li>
<li>21 CCW pump trips — 23 CCW pump fails to auto start</li>
<li>21 Charging pump trips</li>
<li>Pressurizer pressure channel I fails high</li>
<li>Main turbine rising vibrations</li>
<li>Reactor fails to trip by all means from the control room (ATWS)</li>
<li>2PR2 pressurizer PORV fails open</li>
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
<td style="padding:6px;color:#c8cdd5;">Power Ascension to 98%</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs crew on power ascension to 98% at 10%/hr IAW S2.OP-IO.ZZ-0004, Power Operation. RO briefs reactivity plan — 1000 gal dilution to be performed first, then withdraw control rods. RO initiates dilution IAW S2.OP-SO.CVC-0006. PO initiates turbine load control IAW S2.OP-SO.TRB-0001 — adjust ramp rate to 10%/hr, set to 98%, select GO. RO monitors Tavg and control rods for proper response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">21 CCW pump trips, 23 CCW fails to auto start</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected console alarms for 21 CC HDR Pressure Lo and RCP Thermal Barrier Discharge Flow Lo. RO reports 21 CCW pump tripped and standby pump failed to auto start. CRS enters S2.OP-AB.CC-0001. RO places 23 CCW in Manual and starts 23 CCW pump. RO reports Discharge Flow Lo alarm is cleared.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">21 Charging pump trips</td>
<td style="padding:6px;color:#9ca3af;">RO reports 21 charging pump trip. RO reports letdown is isolated as expected. CRS enters S2.OP-AB.CVC-0001, Loss of Charging. PO initiates AB.CVC-1 CAS. CRS initiates S2.OP-AB.RCP-0001 from CAS item 4.0 (monitor RCP parameters). RO reports no charging pumps running, no indication of cavitation prior to trip, 21 charging pump tripped, 22 charging pump available. RO verifies RCP seal inlet temps <225 F, closes 2CV55. RO starts 22 Charging Pump, adjusts 2CV55 to desired flow, ensures RCP seal injection 6-12 gpm, ensures 2CV7 open. RO opens 2CV2 and 2CV277 and places in Auto, adjusts charging flow to 85-90 gpm. RO opens one letdown orifice and maintains letdown pressure <300 psig by adjusting 2CV18 in manual, then places 2CV18 in Auto. RO reports PZR level stable or rising, returns 2CV55 to auto when PZR level is on program. CRS evaluates Tech Specs: TS 3.5.2.a action a (72 hours), 3.1.2.4 (72 hours), and 3.1.2.2 (72 hours).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">PZR Pressure Channel I fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA alarms D-8 RC Press HI and E-42 2PR1 1/2 Trip. RO determines actual pressure is not high, reports spray valves open and heaters off. CRS directs RO to place Master Pressure Controller (MPC) in manual. RO places MPC to Manual and lowers demand to close sprays and energize PZR heaters. CRS enters S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction. CRS directs initiation of Att. 1 CAS and gives band for control of PZR pressure. RO reports PZR Press Channel I failed high. RO selects Channel III for control, matches MPC demand to current pressure, returns MPC to AUTO. RO closes 2PR6 to comply with Tech Specs. CRS directs WCC to remove control power from 2PR6. CRS directs PO to initiate removing failed channel from service and contact I&C for support IAW S2.OP-SO.RPS-0003. PO checks that tripping associated bistables will not result in ESF or RPS actuation. PO verifies Channel III selected for Master Pressure Control, selects PZR Pressure recorder to channel other than I. CRS evaluates Tech Specs: LCO 3.3.1.1 Action 6 (72 hours), 3.3.2.1.b Action 19 (72 hours), 3.4.5.b (1 hour), and 3.2.5.b DNB (2 hours).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Main turbine high vibrations — ATWS</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO announces unexpected alarm G-35 TSI Trouble and dispatches secondary operator to evaluate. PO checks vibrations on plant computer — vibrations have risen and continue to rise. CRS holds brief to discuss limits and requirements to trip turbine when >9 Mils on any bearing. CRS may direct a downpower to reduce vibrations. Vibrations continue to rise above trip criteria. CRS directs reactor trip and turbine trip.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Reactor fails to trip — ATWS</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO attempts to trip reactor using both Rx trip switches and Rx trip breaker bezels — reactor fails to trip. Crew announces ATWT. RO recommends entering EOP-FRSM-1. CRS enters EOP-FRSM-1, Response to Nuclear Power Generation. RO initiates manual rod insertion (rod speed controller failed to 8 spm — RO should recognize failure and place in manual). Crew dispatches NEO to locally open Reactor Trip Breakers and M-G Set breakers. PO reports PZR heater bus breakers will not open. PO trips Main Turbine. PO starts 21 and 22 AFW pumps. PO reports three S/Gs greater than 14%. PO reports total AFW flow. RO reports immediate actions of EOP-TRIP-1 and FRSM-1 are complete. RO ensures 22 Charging pump is running (21 CV is C/T). RO reports SI has not actuated. RO starts both boric acid pumps in fast speed. RO opens 2CV175 Rapid Boration Valve. RO closes 21 and 22CV160s. RO reports flow indicated on Rapid Borate flowmeter. RO places 2CV55 or Master flow controller in manual and verifies charging pump flow >87 gpm. (Critical Task #1 evaluated here.) Locally dispatched operator opens Rx Trip breakers. RO reports PZR pressure <2335 psig. RO reports 2VC5 and 2VC6 closed. RO reports RTBs and bypass breakers open. PO reports all turbine stop valves closed. RO reports PRNIs <5%. RO reports IRNI SUR is negative. CRS goes to FRSM-1 Step 16, directs boration continue for adequate SDM. CRS returns to EOP-TRIP-1, transitions to EOP-TRIP-2.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">2PR2 PZR PORV fails open</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports unexpected OHA for 2PR1/2 NOT CLSD. RO reports PZR pressure not stable or trending to 2235 psig. RO reports PZR pressure lowering and identifies 2PR2 failed open. RO reports 2PR2 will NOT close in manual. RO closes PZR PORV block valve 2PR7. (Critical Task #2)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-52):</strong> Insert negative reactivity into the core by at least one of the following methods, and dispatch operators to locally trip the reactor and/or the turbine: de-energize the control rod drive MG sets, insert control rods, or establish emergency boration flow to the RCS. Safety significance: failure to insert negative reactivity results in the reactor remaining critical or returning to a critical condition, constituting incorrect reactivity control. Cues: indication of ATWS and indication that reactor is not tripped and manual trip is not effective. Measurable criteria: rod position indication shows rods moving inward and reaching bottom, and/or emergency boration flow path established with appropriate pump(s) running and flow rate indicated. Feedback: negative SUR on IR NIS, less than 5% power on PR NIS.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-10):</strong> Close the block MOV (2PR7) upstream of the stuck-open PZR PORV (2PR2) by completion of the first step in the ERG network that directs the crew to close the block MOV. Safety significance: failure to close the block MOV results in unnecessary continuation of the degraded RCS fission product barrier — crew fails to prevent degradation of a barrier to fission product release. The RCS barrier can be restored to full integrity by closing the block MOV. Cues: valve position indication and/or annunciation that PORV is open after attempts to close manually, decreasing RCS pressure, PRT temperature/level/pressure indications consistent with PZR fluid discharge, and block MOV position indication showing Open. Measurable criteria: valve position indication shows block MOV closed.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP/Procedure Pathway:</strong><br>
<span style="color:#c8cdd5;">ARP (CCW pump trip alarms) → S2.OP-AB.CC-0001 (loss of CCW) → S2.OP-AB.CVC-0001 (loss of charging) → S2.OP-AB.RCP-0001 (RCP monitoring from CAS) → S2.OP-AB.PZR-0001 (PZR pressure channel fail) → S2.OP-AB.TRB-0001 (turbine high vibrations) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip/SI — trip fails) → <span class="hi-exam">EOP-FRSM-1</span> (Response to Nuclear Power Generation — ATWS, manual rod insertion, emergency boration, dispatch to locally trip RTBs) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response — PORV fails open, close block valve 2PR7)</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: New / 21-01 ESG-3 | <a href="/salem-study-system/exam-pdfs/2023-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Reactor Coolant System]], [[Pressurizer]], [[Component Cooling Water]], [[Chemical and Volume Control System]], [[Turbine-Generator]], [[Auxiliary Feedwater]], [[Instrumentation and Controls]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related procedures: [[AB.CC-0001 — Loss of Component Cooling Water]], [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.RCP-0001 — RCP Abnormality]]
- Related exam: [[2023 NRC Operating Exam]]
