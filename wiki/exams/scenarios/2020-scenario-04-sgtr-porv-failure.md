---
title: "2020 Scenario 4 — SGTR / PORV Failure"
category: exams
status: draft
aliases:
  - 2020 Scenario 4
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 4 — SGTR / PORV Failure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 3 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-204: 2% power, BOL; 21 SGFP I/S. 25 CFCU is in low speed to monitor bearing temperatures following maintenance.<br><br>
<strong>Turnover:</strong> The crew is directed to continue power ascension to 10% reactor power IAW S2.OP-IO.ZZ-0003 using control rods, steam dumps, and turbine load control. Control Bank D at 114 steps. Steam dumps in MS Pressure Control, Automatic, set at 1000 psig. Rod control in manual. 25 CFCU running in low speed — System Engineering monitoring remotely using PI. RCS boron 1584 ppm. 22 SGFP is O/S in standby.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 10%</li>
<li><span class="hi">2R1B Control Room Radiation Monitor Channel 1 fails high</span></li>
<li><span class="hi">25 CFCU trips in low speed</span></li>
<li><span class="hi">21 SGFP trips and failure of Auto AFW start signal</span></li>
<li><span class="hi">23 RCP high vibration</span> (major transient — reactor trip)</li>
<li><span class="hi-exam">21 SG Tube Rupture (650 gpm)</span></li>
<li><span class="hi">21 SI Pump fails to start on SEC signal</span></li>
<li><span class="hi-exam">PZR PORV fails to close during RCS depressurization</span></li>
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
<td style="padding:6px;color:#c8cdd5;">Power ascension to 10%</td>
<td style="padding:6px;color:#9ca3af;">CRS directs power ascension using main steam dumps in MS Pressure Control and control rods. PO raises steam dump demand IAW S2.OP-SO.MS-0002, section 5.4. RO withdraws control rods at specified increments to maintain Tavg on program (~549 F at 10%). RO announces 5% reactor power and records Mode 1 entry time.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">2R1B Control Room Radiation Monitor Channel 1 fails high</td>
<td style="padding:6px;color:#9ca3af;">RO announces OHA alarm A-6 RMS HI RAD OR TRBL. CRS places power ascension on hold. RO reports control room ventilation in Accident Pressurized mode. CRS enters S2.OP-AB.RAD-0001, Abnormal Radiation. RO reports 2R1B Channel 1 failed high and alarm is invalid. PO calls Unit 1 operator to check 1R1B Channel 2 reading (reading normal). CRS enters TS 3.3.3.1.b Action 28 (immediately place in Accident Pressurized or Recirculation mode). CRS requests assistance in troubleshooting failed RMS channel.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">25 CFCU trips in low speed</td>
<td style="padding:6px;color:#9ca3af;">RO reports 25 CFCU tripped in low speed (overcurrent flag up on low speed breaker). CRS may direct starting 23 CFCU in high speed. CRS enters TS 3.6.2.3 Action a (14 days) and TS 3.6.1.1 (1 hour containment integrity until control power removed). CRS directs WCC to open control power for 25 CFCU high and low speed breakers.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">21 SGFP trips — AFW fails to auto-start</td>
<td style="padding:6px;color:#9ca3af;">RO reports 21 SGFP thrust bearing oil pressure high and 21 SGFP tripped. CRS enters S2.OP-AB.CN-0001, Main Feedwater/Condensate System Abnormality. CRS determines immediate actions not met. PO initiates Att 1 CAS. RO reduces reactor power to less than 4% by inserting control rods. PO reports AFW is not in operation (auto start failed). PO sets 21-24 AF21 demands to 0% and manually starts 21 and 22 AFW pumps. PO adjusts AF21s to maintain SG levels between +/-5% of program.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23 RCP high shaft vibration — reactor trip</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports OHA alarm D-36 RCP VIB HI. RO reports 23 RCP shaft vibration exceeds 20 mils on 2RP3 monitor. CRS enters S2.OP-AB.RCP-0001 and implements CAS action. RO trips the reactor, confirms trip, and stops 23 RCP. CRS enters EOP-TRIP-1. RO performs immediate actions. CRS and RO confirm no SI required. PO throttles AFW flow to no less than 22E4 lbm/hr. CRS transitions to EOP-TRIP-2.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SG Tube Rupture (650 gpm ramped over 5 min)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports RCS pressure and PZR level lowering. RO reports OHA A-6 alarm — 2R15 condenser off-gas rad monitor in alarm. CRS enters S2.OP-AB.SG-0001 and implements CAS. RO initiates Safety Injection. CRS re-enters EOP-TRIP-1. PO reports 21 SI pump failed to start — PO blocks and resets 2A SEC, RO manually starts 21 SI pump. PO reports 21 SG NR levels rising — closes 21AF21 and 21AF11 to isolate feed flow to ruptured SG (CT#1 Part 1). RO verifies valve groups in safeguards positions, containment pressure <15 psig. RO reports 21 SG NR level rising uncontrolled. CRS transitions to EOP-SGTR-1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">EOP-SGTR-1: Isolate ruptured SG, cooldown RCS</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO sets 21MS10 to 1045 psig. PO reports 21MS18, 21MS7, and 21GB4 closed. PO closes 21MS167 (CT#1 Part 2 — steam isolation). PO trips 23 AFW pump. CRS directs WCC to close 21MS45 and 2SS321. CRS determines RCS target temperature using Table B (SG pressure >1000 psig = 503 F CETs). PO dumps steam using steam dumps on intact SGs (CT#2 Part 1 — cooldown). When hottest CETs < RCS target temp, PO stops cooldown by placing MS Pressure Control in Auto (CT#2 Part 2).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PZR PORV fails to close during RCS depressurization</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports normal PZR spray NOT available (23 RCP stopped). RO reports PZR PORVs are available. CRS reviews depressurization termination criteria IAW Table E. RO opens one PZR PORV. When depressurization criteria met, RO attempts to close PZR PORV — PORV fails to close. RO reports PORV failed to close and closes the associated PZR PORV block valve (CT#3). RCS pressure rising confirms block valve closed.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-18):</strong> Isolate feed and steam flow to ruptured SG before a transition to SGTR-3 occurs. Part 1: isolate feed flow to ruptured 21 SG (close 21AF21 and 21AF11) within 10 minutes. Part 2: isolate steam flow to ruptured 21 SG (close 21MS167). Safety significance: failure to isolate the ruptured SG allows continued primary-to-secondary leakage, overfilling the ruptured SG and potentially lifting the SG safety valve, creating an unmonitored release path to the atmosphere.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-19):</strong> Control initial RCS cooldown so that transition from EOP-SGTR-1 does not occur due to low subcooling, or severe challenge on CFST Thermal Shock or Shutdown Margin. This CT has two parts: (1) establish RCS cooldown using steam dumps on intact SGs to reach CET target temperature of 503 F (from Table B, SG pressure >1000 psig), and (2) maintain RCS temperature at or below target by placing MS Pressure Control in Auto. Safety significance: uncontrolled overcooling during SGTR can cause loss of subcooling margin (transition to SGTR-3/4), PTS concerns, or loss of shutdown margin.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#3 (CT-10):</strong> Close PZR PORV block valve of stuck open PZR PORV by completion of MCA step in SGTR-1 that directs closing PZR PORV block valve. Safety significance: a stuck-open PORV during SGTR creates a small break LOCA in addition to the tube rupture, degrading RCS inventory and pressure control, complicating SGTR recovery by allowing continued primary system depressurization.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-IO.ZZ-0003 (power ascension) → S2.OP-AB.RAD-0001 (rad monitor fail high) → S2.OP-AB.CN-0001 (SGFP trip) → S2.OP-AB.RCP-0001 (23 RCP high vibration) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip, no SI required) → <span class="hi-exam">EOP-TRIP-2</span> (reactor trip response) → S2.OP-AB.SG-0001 (SG tube leak identified) → <span class="hi-exam">EOP-TRIP-1</span> (re-entered following manual SI on SGTR) → <span class="hi-exam">EOP-SGTR-1</span> (21 SG NR level rising uncontrolled — isolate ruptured SG, cooldown, depressurize) → Scenario terminated after PZR PORV block valve closed</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 19-01 NRC ESG-4 | <a href="/salem-study-system/exam-pdfs/2020-scenario-04.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCPs]], [[Steam Generator & Blowdown]], [[Pressurizer & PRT]], [[AFW]], [[CFCUs]], [[Feed & Condensate]], [[ECCS]], [[RCS]], [[Main Steam]], [[Radiation Monitoring]], [[CAV]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related procedures: [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[AB.CN-0001 — Condensate System Abnormality]], [[AB.RCP-0001 — RCP Abnormality]], [[AB.SG-0001 — Steam Generator Tube Leak]]
- Related exam: [[2020 NRC Operating Exam]]
