---
title: "2022 Scenario 4 — Startup / SGTR"
category: exams
status: draft
aliases:
  - 2022 Scenario 4
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 4 — Startup / SGTR</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-243: Unit 2 is at 2% power, BOL; 21 SGFP in service.<br><br>
<strong>Turnover:</strong> The crew is directed to continue power ascension to 10% reactor power IAW S2.OP-IO.ZZ-0003 using control rods, steam dumps, and turbine load control.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power Ascension</li>
<li>2PR2 PZR PORV leakage</li>
<li>High DP across 23A CW Traveling Screen</li>
<li>23 SG Tube Leak (35 gpm)</li>
<li><span class="hi">23 SG Tube Rupture (650 gpm)</span></li>
<li><span class="hi">21 CFCU fails to start in LOW speed</span></li>
<li><span class="hi">PZR Spray Valve 2PS3 fails to close during RCS depressurization</span></li>
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
<td style="padding:6px;color:#c8cdd5;">Power Ascension to 10% / Mode 1 entry</td>
<td style="padding:6px;color:#9ca3af;">CRS directs power ascension using main steam dumps in MS Pressure Control and control rods. PO raises steam dump demand IAW S2.OP-SO.MS-0002 section 5.4 using Attachments 3 or 4. RO withdraws control rods at specified increments to maintain Tavg on program. RO announces when NIS indicates 5% Reactor Power and records time of Mode 1 entry in Control Room Narrative Log.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">2PR2 PZR PORV seat leakage — OHA E-28 PZR HTR ON PRESS LO</td>
<td style="padding:6px;color:#9ca3af;">RO announces OHA E-28 alarm. CRS places power ascension on hold. RO reports PZR PORV tailpipe temperature rising/elevated. CRS enters S2.OP-AB.PZR-0001. RO verifies POPs not in service, pressure control channel not failed, spray valve not failed open, PORV not failed open but tailpipe temperature elevated. CRS directs RO to close 2PR6 and 2PR7 block valves. RCS pressure stabilizes. RO reopens 2PR6 — tailpipe temp not rising. RO reopens 2PR7 — tailpipe temp rising. RO recloses 2PR7, isolating 2PR2 as the leaking PORV. CRS evaluates Tech Specs: enters TS 3.4.5 action a (1 hour to close PZR PORV block valve with power maintained) and TS 3.2.5.b if RCS pressure below 2200 psia [2185 psig].</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">High DP across 23A CW Traveling Screen — OHA K-1</td>
<td style="padding:6px;color:#9ca3af;">PO reports OHA K-1 (21-23 A CW SCRNWSH TRBL) alarm and 23A CW Traveling Screen running in Fast Speed with rising DP. CW operator reports heavy grass and debris on screens, shear pin NOT broken. CRS refers to OHA ARP or S2.OP-AB.CW-0001. DP continues to rise. CRS directs stopping 23A CW Pump when screen DP exceeds 6 feet and/or emergency trips CW pump when DP exceeds 8 feet. PO stops or emergency trips 23A CW Pump. CRS enters S2.OP-AB.CW-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">23 SG Tube Leak — RMS alarms (2R15, 2R19C, 2R53C)</td>
<td style="padding:6px;color:#9ca3af;">RO reports OHA A-6 for 2R15 in alarm, then 2R53C (MS Line Rad Monitor) and 2R19C (23 SG B/D Rad Monitor) in alarm. RO reports PZR level lowering. CRS enters S2.OP-AB.SG-0001. CRS directs RO to determine RCS leak rate. PO initiates Attachment 1 CAS. RO reports PZR level not stable or rising and no centrifugal charging pump running. CRS directs transfer to centrifugal charging pump IAW step 3.5. Following transfer, RO reports PZR level can be maintained stable. Crew determines RCS leak rate around 20-30 gpm. CRS evaluates Tech Specs: enters TS 3.4.7.2.c action a (be in Hot Standby within 6 hours).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23 SG Tube Rupture — leak worsens to 650 gpm (CT-1 and CT-2)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports leak rate worsened, exceeds makeup capability. CRS implements Attachment 1 CAS — trip the reactor and actuate SI. RO trips reactor, confirms trip, actuates SI.</span> CRS enters EOP-TRIP-1. RO continues immediate actions. PO throttles AFW flow to no less than 22E4 lbm/hr. <span class="hi-exam">PO reports 23 SG NR levels rising — CT#1 Part 1: PO closes 23AF21 and 23AF11 to isolate feed flow to ruptured SG.</span> RO reports containment pressure < 15 psig, 2RP4 does NOT indicate high steam flow coincident with low steam pressure or low-low Tavg. RO reports 2 CCW pumps running, both CCW HXs in Auto, 2CC131 open. PO reports all valve groups per Table E in safeguards positions. RO reports ECCS flow as expected. PO maintains AFW flow > 22E4 lbm/hr until one SG NR level > 9%, then maintains 19-33%. RO reports all RCPs running, Tcolds stable or trending to 547 F, both PZR PORVs closed (only 2PR6 block valve open — 2PR7 closed from earlier isolation), RCS pressure not < 1240 psig. PO reports NO SG pressures dropping uncontrolled. <span class="hi-exam">RO reports 23 SG NR level rising uncontrolled — CRS transitions to EOP-SGTR-1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 CFCU fails to start in LOW speed on SEC signal</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports SEC loading NOT complete — 21 CFCU failed to start. PO blocks 2A SEC. PO resets 2A SEC. RO starts 21 CFCU in LOW speed.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5<br>(cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">SGTR-1 actions: identify and isolate ruptured SG, cooldown, depressurize</td>
<td style="padding:6px;color:#9ca3af;">RO reports RCP trip criteria NOT met. PO reports NR levels rising in 23 SG. PO sets 23MS10 to 1045 psig. PO reports 23 SG is ruptured. PO lowers 23 AFW pump speed to minimum, then trips 23 AFW pump. CRS dispatches operator to close 23MS45. PO reports 23MS18, 23MS7, and 23GB4 are closed. <span class="hi-exam">CT#1 Part 2: PO closes 23MS167 — steam side of ruptured SG isolated (CT#1 complete).</span> PO reports 23MS167, 23MS18, and 23MS7 closed. CRS directs WCC to close 2SS333. CRS determines RCS target temperature using Table B (SG pressure > 1000 psig = 503 F CETs). PO reports steam dumps available. PO places steam dumps in Manual, sets valve demand to 0%, places in MS Press Control, adjusts demand to cooldown at maximum rate. When Tavg Lo-Lo is reached, PO depresses Bypass Tavg pushbuttons. <span class="hi-exam">CT#2 Part 1: PO dumps steam using steam dumps on intact SGs to cool down to target temperature.</span> CRS continues in SGTR-1. PO maintains AFW flow > 22E4 lbm/hr until one SG NR level > 9%, then maintains 19-33%. RO reports power available to both PZR PORV stop valves and both PZR PORVs closed. RO resets SI, Phase A, and Phase B. PO resets each SEC and associated control centers. RO opens 21 and 22 CA330s. RO reports RHR suction aligned to RWST, stops both RHR pumps. Crew waits until hottest CETs less than RCS target cooldown temp (approx. 5 min). <span class="hi-exam">CT#2 Part 2: PO stops cooldown by placing MS Pressure Control in Auto (CT#2 complete).</span> CRS directs PO to dump steam to maintain CET temp less than required. PO reports ruptured SG pressure stable or rising. RO reports RCS subcooling > 20 F and normal PZR spray available.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">PZR Spray Valve 2PS3 fails to close during RCS depressurization</td>
<td style="padding:6px;color:#9ca3af;">RO reports PZR spray valves available. CRS reviews depressurization termination criteria IAW Table D. RO opens both PZR spray valves. RO reports RCS pressure lowering. When termination criteria met, RO closes both spray valves — 2PS3 fails to close. RO reports 2PS3 spray valve failed to close. CRS directs RO to stop 21 and 23 RCPs. RO stops 21 and 23 RCPs. RO reports RCS pressure NOT dropping in uncontrolled manner. CRS continues in SGTR-1 step 19. Scenario terminated.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-18):</strong> Isolate feed and steam flow to ruptured SG before transition to SGTR-3, SGTR with LOCA -- Subcooled Recovery, occurs.<br><br>
<em>Safety significance:</em> Failure to isolate the ruptured SG causes a loss of differential pressure between the ruptured SG and the intact SGs. The crew allowing differential pressure to dissipate forces a transition to contingency ERG ECA-3.1, which delays RCS depressurization and SI termination. A SGTR violates the RCS fission-product barrier -- radioactive RCS inventory leaks into the SG, increasing SG inventory, radioactivity, and pressure. If primary-to-secondary leakage is not stopped, SG pressure increases until the PORV or safety valve(s) open, releasing radioactivity to the environment. To stop leakage the crew must: (1) identify and isolate the ruptured SG, (2) cool down to establish RCS subcooling margin, (3) depressurize RCS to restore inventory, and (4) terminate SI. The crew cannot start cooldown until the ruptured SG is completely isolated (all steam flow from and all feedwater flow into the SG stopped). Isolation maintains a 250 psi differential pressure between ruptured and intact SGs, ensuring minimum RCS subcooling remains after depressurization. Without steam isolation, the differential drops below 250 psi during cooldown, forcing transition to ECA-3.1. For feedwater, isolation must occur after ruptured SG level exceeds minimum indication (tubes covered) -- feedwater coverage of tubes provides a water barrier preventing steam from contacting tubes during cooldown, which would condense steam and reduce SG pressure below the 250 psi differential.<br><br>
<em>Measurable standard:</em> Isolate feed and steam flow before transition to SGTR-3 occurs -- MSIV position lamps closed, MSIV bypass valve position lamps closed, PORV setpoint adjusted to ERG Footnote O.03, blowdown isolation valve closed, steam isolation valve to TDAFW pump closed, AFW valve position lamps closed, feedwater isolation valve position lamps closed.<br><br>
<em>Feedback:</em> Stable or increasing pressure in the ruptured SG. Decreasing or zero feedwater flow rate in the ruptured SG.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-19):</strong> Cooldown RCS to target temperature so that transition from SGTR-1, Steam Generator Tube Rupture, does not occur.<br><br>
<em>Safety significance:</em> Failure to establish and maintain the correct RCS temperature during a SGTR leads to a transition from E-3 to a contingency ERG. Terminating cooldown before reaching target temperature prevents achieving minimum RCS subcooling, forcing transition to ECA-3.1 and delaying depressurization and SI termination -- allowing excessive SG inventory to accumulate until overpressure components release water or SG overfill occurs. Terminating cooldown too late challenges the subcriticality CSF or integrity CSF (because cooldown is at maximum rate) -- the crew would then transition to an integrity or subcriticality FRG, also delaying depressurization and SI termination. The crew must both achieve AND maintain the target temperature.<br><br>
<em>Measurable standard:</em> Cooldown RCS to target temperature so that transition from SGTR-1 does not occur -- steam dump valve position lamps indicate closed, SG PORV valve position lamps indicate closed. RCS temperature not too high to maintain minimum required subcooling, and not below the temperature that causes an extreme (RED) or severe (PURPLE) challenge to the subcriticality and/or integrity CSF.<br><br>
<em>Feedback:</em> Indication of steam flow rate greater than zero. RCS temperature decreasing. RCS temperature less than target temperature.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-IO.ZZ-0003 (power ascension) → S2.OP-AB.PZR-0001 (PORV leakage) → S2.OP-AB.CW-0001 (CW screen DP) → S2.OP-AB.SG-0001 (SG tube leak) → <span class="hi-exam">EOP-TRIP-1</span> (manual reactor trip/SI on 23 SG tube rupture exceeding makeup capability) → <span class="hi-exam">EOP-SGTR-1</span> (23 SG NR level rising uncontrolled — ruptured SG identified and isolated, cooldown to target temp using steam dumps on intact SGs, depressurize RCS using PZR spray) → 2PS3 spray valve fails to close during depressurization → stop 21 and 23 RCPs to eliminate spray flow path → continue in SGTR-1 step 19 → Scenario terminated</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 20-01 ESG-4 | <a href="/salem-study-system/exam-pdfs/2022-scenario-04.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[Steam Generator & Blowdown]], [[Main Steam]], [[Steam Dumps]], [[Circ Water]], [[CFCUs]], [[AFW]], [[ECCS]], [[CVCS]], [[RCPs]], [[SECs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.SG-0001 — Steam Generator Tube Leak]]
- Related exam: [[2022 NRC Operating Exam]]
