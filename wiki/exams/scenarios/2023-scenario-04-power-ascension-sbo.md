---
title: "2023 Scenario 4 — Power Ascension / Station Blackout"
category: exams
status: draft
aliases:
  - 2023 Scenario 4
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 4 — Power Ascension / Station Blackout</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 is at 2% power BOL; 21 SGFP in service<br><br>
<strong>Turnover:</strong> The crew is directed to continue power ascension to 10% reactor power IAW S2.OP-IO.ZZ-0003 using control rods, steam dumps, and turbine load control.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power Ascension</li>
<li>Containment pressure channel 1 fails high</li>
<li>Charging master flow controller failure requiring manual control of charging</li>
<li>#2 SW bay leak</li>
<li>Loss of Offsite power</li>
<li>Loss of all AC Power</li>
<li>Failure of 23 AFW pump to auto start</li>
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
<td style="padding:6px;color:#9ca3af;">CRS directs power ascension using Main Steam Dumps in MS Pressure Control and control rods. PO raises steam dump demand IAW S2.OP-SO.MS-0002, section 5.4 using Attachments 3 or 4 — slowly adjusts Steam Dump Pressure Setpoint to maintain less than 1000 psig. RO withdraws control rods at specified increments to maintain Tave on program (~549 F at 10%). RO announces when NIS indicates 5% Reactor Power and records time of Mode 1 entry in Control Room Narrative Log.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Containment pressure channel 1 fails high</td>
<td style="padding:6px;color:#9ca3af;">RO announces unexpected OHA alarm CNTMT PRESS HI-HI OHA C-6. CRS places power ascension on hold. RO reports actual containment pressure is normal and appears the channel is failed. PO reviews S2.OP-AR-ZZ-0003, determines notification must be written and TS evaluation performed. CRS enters TS 3.3.2.1 Act b 16.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Charging Master Flow Controller fails low</td>
<td style="padding:6px;color:#9ca3af;">RO reports lowering charging flow and/or low RCP seal injection flow. RO diagnoses Master Flow Controller (MFC) output lowering with PZR level on or below program. CRS directs RO to place MFC in manual and restore charging flow. RO places MFC in manual and adjusts demand to required flow. CRS enters S2.OP-AB.CVC-0001, Loss of Charging, and directs initiation of Att 1 CAS. RO reports 23 charging pump in service with no indication of cavitation. RO reports NO PZR level channel failure, VCT level channel has NOT failed, NO indication of charging header leak, charging MFC failed. RO reports manual control of 23 charging pump established and PZR level can be maintained stable or rising. CRS assigns responsibility and band for manual PZR level control.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">#2 SW Bay Leak</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA alarm B-29 (21-23 SW PMP SUMP AREA LVL HI), followed by B-13 (21 SW HDR PRESS LO) and B-14. ARP for OHA B-29 directs entry into S2.OP-AB.SW-0003 if concurrent with B-13. RO starts or announces auto start of 25 SW pump, clearing low header pressure alarms. CRS enters S2.OP-AB.SW-0003, SW Bay Leak, and initiates CAS. NEO dispatched — reports large leak in back of #2 SW bay, water level ~2.5 ft above pump pedestal and rising. PO opens 21 and 22 SW23s, closes 21 and 22 SW17s, starts all Bay 4 SW pumps, stops all Bay 2 SW pumps. Crew dispatches NEO to open control power breakers for 21-23 SW pumps. PO closes 21SW22 and 21SW20. NEO reports leak is isolated. PO reports SW remains available to EDGs, SW supplied to Turbine Building through 23SW20. PO initiates action to remove one CCHX from service IAW CAS item 4.0. CRS enters LCO 3.7.4 (72 hours) due to having only one operable SW loop.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Loss of Offsite Power — Automatic Reactor Trip</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">CRS directs RO to trip the Rx and perform immediate actions of EOP-TRIP-1, Reactor Trip or Safety Injection. RO turns reactor trip switch to backup the automatic Rx trip. RO performs immediate actions: confirms reactor tripped, trips main turbine. PO reports NO Vital Buses are energized — entry into EOP-LOPA-1 required. CRS transitions to EOP-LOPA-1, Loss of All AC Power.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Loss of All AC Power (SBO)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO performs LOPA-1 immediate actions: Trip Reactor, Trip Turbine. CRS and RO verify immediate actions. RO may close 2CV2 and 2CV277. RO reports both PORVs closed, excess letdown isolated. PO reports 2A and B EDG running with breakers open and 2C EDG tripped (overspeed, bent linkage). RO reports SI has not been actuated — RO actuates SI. After 74 seconds, crew resets SI. CRS dispatches operator to deenergize all SECs. CRS directs crew to stop 2A and 2B EDGs (no SW pump running). RO depresses stop pushbutton for all loads in Table A of LOPA-1. CRS directs performance of S2.OP-AB.LOOP-0001. CRS has SM contact ESO for power availability. CRS dispatches operator for seal injection isolation, seal return, and CCW thermal barrier isolation.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23 AFW Pump fails to auto start — Manual start required (CT-1)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports 23 AFW pump failed to auto start. PO manually starts 23 AFW pump. PO throttles AFW flow to no less than 220000 lbm/hr. CRS assigns CAS for loss of 23 AFW pump. CRS directs WCC to ensure 21 and 22 AFW pump breakers open and remove control power for 21 and 22 AFW pumps. PO reports valves in Table B closed except 21-24 MS167 — crew closes 21-24 MS167. PO places 21-24 BF19 and 40s in manual and closed. RO states 21-24 SS94 closed. PO states 21-24 GB4s closed. PO states NO SG pressures dropping uncontrolled or completely depressurized. PO gives AFW status and SG levels to CRS. PO reports AFWST greater than 21%. PO reports SG levels greater than 9%. PO opens 21-24 MS10s and begins cooldown at less than 100 F/hr (CT-2).</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-23):</strong> Establish 220000 lbm/hr AFW flow before steam generator dryout occurs (WR ≤ 11%) during SBO. Safety significance: failure to establish minimum AFW flow is a violation of the basic objective of ECA-0.0 and the assumptions of its analyses. Without AFW flow, SGs cannot support any significant plant cooldown and the crew loses the ability to delay adverse consequences of core uncovery. Decay heat would open SG safety valves and rapidly deplete SG inventory, leading to loss of secondary heat sink (SG dryout). Decay heat would then increase RCS temperature and pressure until PORVs open, imposing a larger LOCA than RCP seal leakage. Cues: indication/annunciation of station blackout AND insufficient AFW flow to SGs. Measurable criteria: manipulation of controls to establish minimum required AFW flow rate (valve position indication or pump speed increasing) with indication that at least minimum required AFW flow is being delivered.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-26):</strong> Depressurize the intact SG(s) such that a maximum of 100 F/hr cooldown rate is established and SG pressure(s) does not go below 310 psig. Additional limiting conditions: SG depressurization not initiated until NR level in at least one intact SG >9% (15% for adverse containment); if NR level cannot be maintained >9%, depressurization stopped until level restored; RCS cold leg temperature does not decrease below 280 F; if positive SUR indicated on source or intermediate range, depressurization stopped and RCS allowed to heat up. Safety significance: failure to depressurize and cool down the RCS results in greater possibility for core damage. Depressurization and cooldown reduce RCS inventory loss rate, reduce RCP seal degradation rate, and allow replenishment of RCS inventory by accumulator injection — extending time to core uncovery and maximizing time available to restore AC power. Cues: indication that all AC emergency buses are de-energized AND Step 17 of ECA-0.0 is reached. Measurable criteria: manipulation of controls to depressurize intact SGs at highest achievable rate within 100 F/hr limit, with SG PORVs open maximum consistent with controllability, RCS cold leg cooldown <100 F/hr, NR level >9% in at least one intact SG, SG pressure >310 psig, RCS cold leg temperature >280 F, and zero/negative SUR on source and intermediate ranges.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP / AB Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-IO.ZZ-0003 (power ascension) → S2.OP-AR-ZZ-0003 (containment press alarm, TS 3.3.2.1) → S2.OP-AB.CVC-0001 (loss of charging) → S2.OP-AB.SW-0003 (SW bay leak, TS 3.7.4) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip/SI on loss of offsite power) → <span class="hi-exam">EOP-LOPA-1</span> (loss of all AC power — SBO) → S2.OP-AB.LOOP-0001 (loss of offsite power recovery actions) → Cooldown commenced via SG depressurization → Scenario terminated after CT-2 evaluated</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 20-01 ESG-4 | <a href="/salem-study-system/exam-pdfs/2023-scenario-04.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Service Water]], [[AFW]], [[500KV]], [[EDGs]], [[Containment]], [[Pressurizer & PRT]], [[Steam Generator & Blowdown]], [[RCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related exam: [[2023 NRC Operating Exam]]
