---
title: "2018 Scenario 2 — MS167 Drift / Tavg Channel Failure / RCS Leak / LBLOCA"
category: exams
status: draft
aliases:
  - 2018 Scenario 2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 2 — MS167 Drift / Tavg Channel Failure / RCS Leak / LBLOCA</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 is at 40% power, BOL. Mode 1. RCS Boron: 1348 ppm. MWe: 410. 22 SW Pump C/T for pump packing replacement. 23B CW Pump C/T for traveling screen repair. 2A EDG C/T for governor inspection and output breaker swap. 23 condensate pump and all heater drain pumps out of service due to plant power level. Polisher in service. Blowdown at 35K per loop aligned to flash tank/23 condenser. Unit 1 and Hope Creek at 100% power. Power ascension on hold due to Main Turbine Valve Testing issues.<br><br>
<strong>Turnover:</strong> Most limiting LCO: TS 3.8.1.1.b Action b for 2A EDG, expires in 60 hours. No other evolutions in progress beyond holding at 40% power.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li><span class="hi">21MS167 drifts from full open position</span></li>
<li><span class="hi">22 RC Loop Tavg Channel fails high</span> (rods step in, continuous rod motion)</li>
<li><span class="hi">RCS leak inside containment (35 gpm)</span></li>
<li>Orderly unit shutdown due to RCS leak exceeding Tech Spec limits</li>
<li><span class="hi">Large Break LOCA</span></li>
<li><span class="hi">Both trains of SI fail to auto actuate; one keyswitch fails to operate</span></li>
<li><span class="hi">2B SEC fails to actuate on SI signal</span></li>
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
<td style="padding:6px;color:#c8cdd5;">21MS167 drifts from full open position</td>
<td style="padding:6px;color:#9ca3af;">PO announces OHA G-34 (21-24 MS167 VALVES NOT FULL OPEN) and refers to ARP. PO reports CRT and board indication of 21MS167 not full open. CRS directs PO to open 21MS167 per OHA ARP S2.OP-AR.ZZ-0007. PO depresses open pushbutton and reports 21MS167 has fully opened. CRS directs notification to maintenance.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">22 RC Loop Tavg Channel fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports Tavg/Tref deviation and rods stepping in unexpectedly. RO reports no turbine runback in progress and places rod control in Manual. CRS enters S2.OP-AB.ROD-0003, Continuous Rod Motion. RO reports OHA E-8 and E-16 (Rod Insertion Lo and Lo-Lo) and various 2CC2 console alarms (RC Loop Tavg Deviation, Tavg-Tref Deviation, RC Tavg Hi or Lo-Lo). CRS confirms rods in manual and motion stopped. CRS directs RO to adjust rods to maintain Tavg within 1.5 deg of program. RO identifies 22 RC Loop Tavg channel failed high. CRS directs PZR level return to program. RO places Charging System Master Flow Controller in manual, adjusts charging flow, defeats 22 loop dT and Tavg on 2CC2, selects alternate channel. When PZR level restored, returns MFC to Auto. RO restores rods to ARO, places rod control in Auto. CRS enters TSAS 3.3.1.1 Action 6 (6 hr LCO) and 3.3.2.1.b Action 19 (6 hr LCO). CRS initiates S2.OP-SO.RPS-0002 to place 22 RC Loop Tavg in tripped condition.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">RCS leak inside containment (35 gpm)</td>
<td style="padding:6px;color:#9ca3af;">RO reports charging flow rising and PZR level lowering slowly. Crew reports 2R11A containment radiation monitor rising/alarm. RO reports OHA C-2 CNTMT SUMP PMP START. CRS enters S2.OP-AB.RC-0001, RCS Leak, and directs Att 1 CAS. CRS enters S2.OP-AB.RAD-0001 after OHA A-6. RO transfers to centrifugal charging pump IAW step 3.14, raises charging flow to stabilize PZR level. PO reduces letdown to minimum (opens 2CV3, maintains letdown pressure ~300 psig with 2CV18 in manual, closes 75 gpm orifice, returns 2CV18 to auto). RO stabilizes PZR level and estimates leak rate. CRS initiates S2.OP-ST.RC-0008, RCS Water Inventory Balance. CRS contacts Rad Pro — PO places 2 CFCUs in Low Speed and 2 in High Speed. CRS initiates Att 2 actions to locate/isolate leak. CRS enters TSAS 3.4.7.2.b Action b (4 hr LCO) for RCS leakage and 3.6.1.4 (1 hr LCO) for containment pressure if it reaches 0.3 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Orderly unit shutdown due to RCS leak exceeding TS limits</td>
<td style="padding:6px;color:#9ca3af;">CRS determines orderly unit shutdown required based on RCS leak exceeding TS limits. CRS enters S2.OP-AB.LOAD-0001. RO develops reactivity plan for shutdown and initiates boration. PO initiates turbine load reduction to 20% at specified rate.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Large Break LOCA</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RCS leak worsens to LBLOCA. Reactor trips. RO performs EOP-TRIP-1 immediate actions. RO reports demand for SI but SI did NOT auto-actuate.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SI fails to auto-actuate; one keyswitch fails to manually actuate</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports SI failed to auto-actuate. RO manually initiates SI using keyswitch — one train fails to manually initiate. RO goes to other train keyswitch and initiates SI on both trains. (CT#1) RO continues EOP-TRIP-1 immediate actions: trips Main Turbine, reports at least one 4KV vital bus energized, reports SI initiated. CRS enters EOP-TRIP-1 and directs CAS implementation.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">2B SEC fails to actuate on SI signal</td>
<td style="padding:6px;color:#9ca3af;">RO reports SEC loading NOT complete for energized vital buses; available equipment on 2B bus failed to start. RO blocks 2B SEC, resets 2B SEC. CRS directs starting safeguards loads for 2B bus using Table A. PO reports 21 and 22 AFW pumps running. RO reports NOT all valve groups in Table B in safeguards positions — 2SW26 NOT closed. PO manually closes 2SW26. RO reports containment pressure >15 psig — CRS directs Phase B and Spray actuation. RO initiates MSLI. RO stops all RCPs. CRS reads CAS to notify when RWST level lo alarm at 15.2 feet. RO reports SI flow >100 gpm. RO reports RCS pressure dropping through 1540, 300 psig. RO reports RHR flow at least 300 gpm. STA reports RED path for Thermal Shock — CRS transitions to EOP-FRTS-1 (enter/exit: RCS pressure <300 psig and RHR flow >300 gpm, return to EOP-LOCA-1). CRS transitions to EOP-LOCA-1. Crew resets SI, Phase A, Phase B. Resets SECs. At RWST level lo alarm, CRS transitions to EOP-LOCA-3 for cold leg recirculation transfer. (CT#2)</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-2):</strong> Manually actuate SI before transition to EOP-LOCA-1, EOP-FRTS-1, or EOP-TRIP-2. Safety significance: with both trains of auto SI failed, the operator must recognize the failure and manually actuate SI to ensure emergency core cooling. One keyswitch will fail, requiring the operator to use the other train keyswitch to initiate SI on both trains.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-36):</strong> Transfer to cold leg recirculation before RWST level drops below 1.2 feet. This CT is broken into three time-critical parts from RWST low level alarm (15.2 feet): (1) Initiate close on 2SJ69 within ~3.7 minutes, (2) Stop one containment spray pump (22 CS pump) within ~5.5 minutes, (3) Complete transfer to cold leg recirculation (EOP-LOCA-3 Step 15 complete — close 2SJ67 and 2SJ68, open 21SJ45 and 22SJ45, close 2SJ30/2SJ1/2SJ2, place 21RH29 and 22RH29 in manual and ensure closed) within ~11.2 minutes. Safety significance: failure to transfer before RWST empties results in loss of all pumped safety injection and containment spray — core damage.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AB.ROD-0003 (continuous rod motion) → S2.OP-AB.RC-0001 (RCS leak) → S2.OP-AB.LOAD-0001 (orderly shutdown) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip/SI after LBLOCA) → <span class="hi-exam">EOP-LOCA-1</span> (loss of reactor coolant — SI flow >100 gpm, RHR flow >300 gpm) → EOP-FRTS-1 (RED path Thermal Shock — enter/exit, RCS pressure <300 psig and RHR flow >300 gpm) → return to <span class="hi-exam">EOP-LOCA-1</span> → RWST level lo alarm at 15.2 feet → <span class="hi-exam">EOP-LOCA-3</span> (transfer to cold leg recirculation) → Scenario terminated after cold leg recirc transfer complete</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 16-01 ESG-2 | <a href="/salem-study-system/exam-pdfs/2018-scenario-02.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Main Steam]], [[RPS/SSPS]], [[Control Rod Drive]], [[CVCS]], [[Pressurizer & PRT]], [[ECCS]], [[RHR]], [[Containment Spray]], [[Containment]], [[CFCUs]], [[SECs]], [[AFW]], [[Service Water]], [[EDGs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.RAD-0001 — Radiation Monitor Abnormality]]
- Related exam: [[2018 NRC Operating Exam]]
