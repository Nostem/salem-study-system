---
title: "2018 Scenario 1 — Startup / PZR Pressure Channel Failure / SW Bay Leak / RCP Seal Failure / SGTR"
category: exams
status: draft
aliases:
  - 2018 Scenario 1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — Startup / PZR Pressure Channel Failure / SW Bay Leak / RCP Seal Failure / SGTR</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 5 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 is at 3% reactor power (Mode 2) during a plant startup, BOL. Control Bank D at 130 steps. Core burnup 500 EFPH. 21 SGFP is in service; 22 SGFP is O/S in standby. Steam dumps are in MS Pressure Control, Automatic, set at 1000 psig. 23 Charging pump is C/T to troubleshoot flow oscillations with the fluid drive. 21 Charging pump in service. Rod control in manual. S2.OP-IO.ZZ-0003, Hot Standby to Minimum Load, complete up to step 4.3.18. S2.OP-SO.MS-0002, Steam Dump System Operation (5.4.1). Monitoring Tavg > 541 F once per 30 minutes due to RC Loop Tavg - Tref Deviation console alarm. Unit 1 and Hope Creek at 100% power. RCS Boron: 1648 ppm.<br><br>
<strong>Turnover:</strong> The crew is directed to raise power to 10% and enter Mode 1 using control rods and steam dumps. Reactor Engineering directs use of control rods and steam dumps. No Fuel Conditioning Limits are imposed until 50%. No limiting LCOs in effect.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 10% and enter Mode 1</li>
<li><span class="hi">Controlling PZR Pressure Channel fails high</span> (spray valves open, heaters de-energize)</li>
<li><span class="hi">#2 SW Bay leak</span> (split headers, isolate bay)</li>
<li><span class="hi">22 RCP #1 Seal degradation and failure</span> (trip reactor, stop RCP, close 22CV104)</li>
<li><span class="hi">24 SG Tube Rupture</span> (manual SI, EOP-SGTR-1 transition, cooldown)</li>
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
<td style="padding:6px;color:#c8cdd5;">Power Ascension to 10%</td>
<td style="padding:6px;color:#9ca3af;">CRS directs power ascension using Main Steam Dumps in MS Pressure Control and control rods. PO raises steam dump demand IAW S2.OP-SO.MS-0002 Section 5.4 using Attachments 3 or 4. RO withdraws control rods at specified increments to maintain Tavg on program. RO announces when NIS indicates 5% reactor power and records time of Mode 1 entry in Control Room Narrative Log.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Controlling PZR Pressure Channel fails high</td>
<td style="padding:6px;color:#9ca3af;">RO announces OHA D-8 RC PRESS HI and E-42 2PR1 1/2 Trip. RO determines actual pressure is not high, reports spray valves open, recommends placing Master Pressure Controller (MPC) in manual. CRS enters S2.OP-AB.PZR-0001. RO takes manual control of MPC, lowers demand to close spray valves. RO identifies PZR Pressure Channel I failed high. RO selects Channel III for control, matches MPC demand to current pressure, returns MPC to AUTO. RO closes 2PR6 and places 2PR1 in Manual. CRS directs WCC to remove control power from 2PR6. CRS directs PO to remove failed channel from service IAW S2.OP-SO.RPS-0003. PO verifies tripping bistables will NOT cause ESF/RPS actuation, verifies Channel III selected for Master Pressure Control. CRS enters TSAS 3.3.1.1 Action 6 (6 hr LCO), 3.3.2.1.b Action 19 (6 hr LCO), 3.4.5 Action b (1 hr LCO), and 3.2.5 DNB (2 hr LCO).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">#2 SW Bay leak</td>
<td style="padding:6px;color:#9ca3af;">RO announces OHA B-29 (22-23 SW PMP SUMP AREA LVL HI), followed by OHA B-13 (21 SW HDR PRESS LO) and B-14. CRS enters S2.OP-AB.SW-0003, Service Water Bay Leak. PO initiates CAS. Crew dispatches NEO to investigate. RO reports 25 SW pump auto start on low header pressure. Crew splits SW headers by opening nuclear header crossover MOVs 21SW23 and 22SW23, and closing cross-connect valves 21SW17 and 22SW17. Crew determines leak is in #2 Bay. RO/PO starts all available Bay 4 pumps (24, 25, 26). Crew stops #2 Bay pumps. Crew isolates #2 SW Bay by closing 21SW22 and 21SW20. PO reports SW available to DGs through 22SW21 and to Turbine Area through 23SW20. CRS enters TS 3.7.4 (72 hr LCO) for only one operable SW loop. PO removes one CCHX from service per CAS item 4.0. CRS contacts maintenance for leak repair.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 RCP #1 Seal degradation and failure</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO identifies rising 22 RCP seal leakoff flow, reports flow stable at ~5.2 gpm. CRS enters S2.OP-AB.RCP-0001. RO uses P-250 computer to check 22 RCP conditions. CRS determines CCW is not cause, winding temps normal, seal injection >6 gpm. CRS determines orderly unit shutdown required and must stop 22 RCP within 8 hours. Crew commences shutdown — RO manually inserts control rods (enters Mode 2). Seal leakoff flow then rises above 6 gpm — CRS initiates Att 1 CAS and Att 2 (Stopping RCPs). CRS briefs reactor trip actions and assigns 22CV104 closure to RO. RO trips reactor, confirms trip, stops 22 RCP, starts timer. RO closes 22CV104 within 3-5 minutes after stopping 22 RCP. (CT#1)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">24 SG Tube Rupture</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO performs EOP-TRIP-1 immediate actions. CRS and crew transition to EOP-TRIP-2 (no SI required). Shortly after, RO reports OHA A-6 RMS TRBL — 2R53D and 2R15 in alarm, followed by 2R41 and 2R19D. RO reports rapidly lowering RCS pressure/level. CRS directs manual SI and re-enters EOP-TRIP-1. RO reports 24BF13 (FW isolation valve) failed to close on SI/Phase A — PO manually closes 24BF13 from console. RO reports 24 SG NR level rising uncontrolled. CRS transitions to EOP-SGTR-1. PO isolates 24 SG — closes 24MS10 (set at 1045 psig), 24MS167, 24MS18, 24MS7, 24GB4. PO closes 24AF21 and 24AF11. CRS determines RCS cooldown target from Table B: SG press >1000 psig = 503 F CETs. PO initiates RCS cooldown using steam dumps at 25% demand or intact MS10s. (CT#2 Part 1) Crew waits until hottest CETs are less than target cooldown temp, then stops cooldown. (CT#2 Part 2)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (Site Specific):</strong> Stop 22 RCP and close 22CV104 within 3-5 minutes after stopping 22 RCP in EOP-TRIP-1. Safety significance: failure to close the seal leakoff flow valve (CV104) when required could result in damage to the backup #2 seal and loss of RCS inventory. When seal leakoff is greater than 6 gpm the operator must close the associated CV104 within 3-5 minutes. The 3 minutes allows for the RCP to coastdown and enable static conditions for the #2 seal to perform its backup function. The 5 minutes minimizes RCS leakage from the damaged seal to maintain RCS inventory. Measurable performance standard: seal leakoff valve (CV104) position indicates closed; RCP breaker position indicates open.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-19):</strong> Control initial RCS cooldown so that transition from EOP-SGTR-1 does not occur. This CT is broken into two parts: (1) Initiate RCS cooldown — PO places steam dumps in manual, adjusts demand to 0%, then places in MS Pressure Control and adjusts to 25% to open dumps OR dumps steam at maximum rate using intact MS10s; (2) Maintain RCS temperature — crew monitors hottest CETs until less than RCS cooldown target temperature (503 F per Table B for SG pressure >1000 psig), then stops cooldown by closing steam dumps and placing MS Pressure Control in Auto or closing intact MS10s and placing in Auto.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AB.PZR-0001 (PZR pressure channel fail high) → S2.OP-AB.SW-0003 (SW bay leak) → S2.OP-AB.RCP-0001 (RCP seal degradation/failure) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip after RCP seal failure, no SI required) → <span class="hi-exam">EOP-TRIP-2</span> (reactor trip response) → 24 SG tube rupture occurs, manual SI initiated → <span class="hi-exam">EOP-TRIP-1</span> (re-entry with SI) → 24 SG NR level rising uncontrolled → <span class="hi-exam">EOP-SGTR-1</span> (isolate ruptured SG, cooldown to target temp) → Scenario terminated after RCS cooldown stopped</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 16-01 ESG-1 | <a href="/salem-study-system/exam-pdfs/2018-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[Service Water]], [[RCPs]], [[Steam Generator & Blowdown]], [[Main Steam]], [[AFW]], [[ECCS]], [[CVCS]], [[CCW]], [[RPS/SSPS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.SW-0003 — Service Water Bay Leak]], [[AB.RCP-0001 — RCP Abnormality]], [[AB.RAD-0001 — Radiation Monitor Abnormality]]
- Related exam: [[2018 NRC Operating Exam]]
