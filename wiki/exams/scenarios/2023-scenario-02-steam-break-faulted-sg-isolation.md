---
title: "2023 Scenario 2 — Steam Line Break / Faulted SG Isolation"
category: exams
status: draft
aliases:
  - 2023 Scenario 2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 2 — Steam Line Break / Faulted SG Isolation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 is at 100% power MOL<br><br>
<strong>Turnover:</strong> The crew is directed to reduce power to 95% power at 10% per hour IAW S2.OP-IO.ZZ-0004 using boration, control rods and turbine load control in preparation for removing 21 Heater drain pump from service. The 21 Service Water pump is C/T for maintenance.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>PZR Level channel I fails high (2LT-459)</li>
<li>21 RCP standpipe level Low</li>
<li>23 SW Pump trips and 26 SW Pump fails to auto start</li>
<li>23 Condensate Pump trips</li>
<li>21 Steam Line break (inside containment)</li>
<li>MSLI fails on first train actuated</li>
<li>Isolate faulted SG</li>
<li>Terminate SI</li>
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
<td style="padding:6px;color:#c8cdd5;">Load Reduction to 95% for Heater Drain Pump removal</td>
<td style="padding:6px;color:#9ca3af;">Crew briefs reactivity plan to reduce load to 95%. RO initiates boration and/or inserts control rods — PRESS Makeup mode STOP, ADJUST 2CV172 boric acid flow setpoint, SET boric acid flow register, PRESS Borate, PRESS Start, ENSURE flow indication. PO initiates turbine load reduction IAW S2.OP-SO.TRB-0002 — ADJUST ramp rate to 10%/hr, ADJUST setter to 89%, select GO. RO monitors Tavg and control rods for proper response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">PZR Level CH I fails high (2LT-459)</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected alarms OHA E-4 PZR LVL HI, E-20 PZR HTR ON LVL HI. RO reports PZR Level Channel I has failed high and charging flow has lowered. RO places Master Flow Control in Manual and raises charging flow to restore PZR level to program. CRS enters S2.OP-AB.CVC-0001. PO initiates Attachment 1 CAS. RO reports charging pump running with no cavitation. RO selects operable Channel 3 for control and operable Channel 2 or 3 for recorder. RO reports letdown in service. CRS directs PO to review S2.OP-RPS-0003 to remove failed channel from service. CRS enters TS 3.3.1.1 action 6 (72 hours to place channel in tripped condition).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">21 RCP standpipe level low</td>
<td style="padding:6px;color:#9ca3af;">Crew reports unexpected console alarm, 21 RCP Standpipe level low. Crew refers to alarm response and makes up to standpipe IAW S2.OP-AR.ZZ-0011. RO verifies Seal Water Leakoff alarm is clear. START 21 or 22 Primary Water Pump. OPEN 2WR80 PW to Contmt Stop Valve. OPEN 21WR62 Standpipe Supply Valve. LOG RCP standpipe fill. When low level clears and high level alarms: STOP Primary Water Pump, CLOSE 2WR80, CLOSE 21WR62. Crew monitors parameters.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">23 SW Pump trips / 26 SW Pump fails to auto start</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA alarms: B-13 21 SW HDR PRESS LO, B-14 22 SW HDR PRESS LO, B-15 TURB AREA SW HDR PRESS LO. RO reports 23 SW Pump tripped and 26 SW Pump in Auto failed to start. RO starts 26 SW pump. RO reports low SW pressure alarms cleared. CRS enters S2.OP-AB.SW-0001, Loss of SW Header Pressure. PO initiates Attachment 1 CAS. PO reports no indication of SW Bay leak. PO starts SW Pumps to maintain header pressure 95-150 psi. PO reports all SW OHA alarms cleared. CRS enters TS 3.7.4 (72 hours) — 21 and 23 SW Pumps inoperable in one bay, only one operable SW loop.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">23 Condensate Pump trips</td>
<td style="padding:6px;color:#9ca3af;">PO reports 23 Condensate Pump tripped. CRS enters S2.OP-AB.CN-0001, Main Feedwater/Condensate Abnormality. PO initiates Attachment 1 CAS. PO reports SGFP did not trip. PO reports SGFP suction pressure less than 320 psig. PO opens 21-23 CN108s (Polisher Bypass valves). CRS evaluates plant conditions IAW Attachment 2 section 4.0 — determines load reduction to 85% Rx power at &le; 5%/min is required. CRS briefs load reduction and reactivity plan. RO initiates boration IAW S2.OP-SO.CVC-0006. PO initiates load reduction using turbine load control IAW S2.OP-SO.TRB-0002 — ADJUST setter to 85%, select GO. CRS enters S2.OP-AB.LOAD-0001, Rapid Load Reduction. RO maintains Tavg on program. CRS directs WCC to transfer heating steam to Unit 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SG Steam Line Break (inside containment)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports unexpected alarms: C-38 CFCU LK DET HI, CONT PRESS HI, then C-30 CFCU LK DET HI-HI. PO determines no rise in containment radiation; leak is inside containment based on rising containment pressure. RO reports C-2 CNTMT SUMP PUMP START. CRS enters S2.OP-AB.STM-0001, Excessive Steam Flow. PO verifies EHC system operating correctly, MS10s and Steam Dumps are closed. PO reports no SG Safety Valve open or leaking. RO reports Rx Power not stable and rising containment pressure. RO places all CFCUs in SLOW speed. RO reports steam leak in containment is not isolable. CRS determines Unit shutdown is required.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Unisolable steam leak worsens — Rx Trip, MSLI, and SI</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">CRS determines need to implement CAS of AB.STM-1 based on containment pressure rising towards Auto SI (4 psig). RO trips Rx and confirms trip. RO manually initiates MSLI. RO verifies steam leak is not isolated. RO initiates SI. RO reports 21 SG is the faulted SG. PO throttles AFW flow to no less than 22E4 lbm/hr. <strong>CT#1 Part 1:</strong> PO closes 21AF21 and 21AF11 to isolate faulted 21 SG (&le; 10 minutes). RO reports SEC loading status. PO reports 21 and 22 AFW pumps operating. RO reports 21 and 22 CA330s closed. RO reports containment pressure has NOT remained less than 15 psig. PO reports MSLI requirements met and MSLI previously initiated. RO reports CAV in Accident Pressurized mode. RO reports 2 CCW pumps running, both CCW HXs in Auto. RO reports correct ECCS pump alignment and expected flows. All RCPs stopped (Phase B actuation). RO reports Tavg rising, trending to 547 F. RO reports both PZR PORVs closed and block valves open. PO reports 21 SG pressure lowering in an uncontrolled manner. CRS transitions to EOP-LOSC-1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Faulted SG isolation (LOSC-1) and SI termination (TRIP-3)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">In LOSC-1: PO reports all valves in Table A closed. PO reports 21 SG pressure dropping in uncontrolled manner. <strong>CT#1 Part 2:</strong> PO closes or verifies closed 21BF13, 21BF19, 21BF40, 21MS7, 21MS10, 21MS18, 21MS167, and 21GB4. CRS dispatches operator to close 21MS45. RO resets Phase A, opens 21 and 22 CA330s, resets SG sample isolation bypass, opens 21-24 SS94s. CRS directs Chemistry to sample 21-24 SGs for activity. PO reports all radiation monitors in Table B are normal. RO reports RCS subcooling >0 F, RCS pressure stable or rising, PZR level >11%.<br><br>CRS transitions to EOP-TRIP-3, SI Termination. RO resets SI &amp; SEC, Phase A, Phase B. <strong>CT#2 Part 1:</strong> RO stops all but one Charging Pump. RO reports RCS pressure stable or rising, charging pump suction aligned to RWST. RO opens 2CV139 and 2CV140. <strong>CT#2 Part 2:</strong> RO closes 2SJ4, 2SJ5, 2SJ12, and 2SJ13 (isolate BIT). RO closes 2CV71, opens 2CV68 and 2CV69. RO adjusts 2CV55 to maintain PZR level and RCP Seal Injection. RO reports PZR level stable or rising, RCS pressure >1540 psig (1660 psig adverse). <strong>CT#2 Part 3:</strong> RO stops 21 and 22 SI pumps. <strong>CT#2 Part 4:</strong> RO stops 21 and 22 RHR pumps (suction verified aligned to RWST). Scenario terminated when CT-2 is completed.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-17): Isolate faulted SG before transition out of LOSC-1.</strong> Includes time-critical operator action: isolate AFW flow to faulted SG by closing respective AF21 and AF11 &le; 10 minutes. Part 1 — close 21AF21 and 21AF11 to stop AFW to faulted 21 SG. Part 2 — close or verify closed 21BF13, 21BF19, 21BF40, 21MS7, 21MS10, 21MS18, 21MS167, and 21GB4 to complete feed and steam isolation.<br><br>
<em>Safety significance:</em> Failure to isolate a faulted SG that can be isolated causes challenges to CSFs beyond those irreparably introduced by the postulated conditions. Failure can result in challenges to Integrity, Subcriticality, and Containment (break inside containment). Could also constitute failure to recognize a failure or incorrect automatic actuation of an ESF system or component.<br><br>
<em>Cues:</em> Steam pressure and flow rate indications identify 21 SG as faulted AND valve position/flow rate indication that AFW continues to be delivered to the faulted SG.<br><br>
<em>Measurable performance:</em> MSIVs indicate closed. Feedwater control valves indicate closed (respective AF21 and AF11 closed &le; 10 minutes). Feedline isolation valves indicate closed. Main feed pumps tripped. AFW flow to faulted SG stopped — AFW flow control valves for faulted SG indicate closed. Feedback: depressurization of intact SGs stops, steam flow from faulted SG decreases to zero, RCS cooldown stops, AFW flow rate to faulted SG of zero.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-48): Terminate ECCS flow before transition out of TRIP-3.</strong> Part 1 — secure all but 1 charging pump. Part 2 — isolate BIT by closing 2SJ4 and 2SJ5 or 2SJ12 and 2SJ13. Part 3 — secure SI pumps. Part 4 — secure RHR pumps.<br><br>
<em>Safety significance:</em> Failure to terminate ECCS flow when SI termination criteria are met causes the PZR to fill and RCS pressure to increase. Additionally, unnecessary continuation of ECCS flow needlessly aggravates thermal stress on the reactor vessel. This constitutes an incorrect performance that causes a "significant reduction of safety margin beyond that irreparably introduced by the scenario."<br><br>
<em>Cues:</em> Indication/annunciation of extreme (RED path) or severe (ORANGE path) challenge to Integrity CSF AND indication of reactor trip and SI AND indication that SI termination criteria are met.<br><br>
<em>Measurable performance:</em> Breaker position lamps for all but one charging/SI pump indicate open AND breaker position lamps for all high-head ECCS pumps indicate open AND breaker position lamps for all low-head ECCS pumps indicate open AND valve position lamps for BIT isolation valves indicate closed. Feedback: charging/SI ECCS flow rate through BIT decreasing or zero, high-head ECCS flow rate decreasing or zero, low-head ECCS flow rate decreasing or zero.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">AB.CVC-0001 (PZR level channel fails high) → ARP S2.OP-AR.ZZ-0011 (RCP standpipe) → AB.SW-0001 (SW pump trip) → AB.CN-0001 (condensate pump trip) → AB.LOAD-0001 (rapid load reduction) → AB.STM-0001 (excessive steam flow / steam leak inside containment) → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip and SI for unisolable steam break) → <span class="hi-exam">EOP-LOSC-1</span> (loss of secondary coolant — faulted SG isolation) → <span class="hi-exam">EOP-TRIP-3</span> (SI termination) → Scenario terminated after ECCS flow terminated</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 20-01 ESG-2 | <a href="/salem-study-system/exam-pdfs/2023-scenario-02.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[CVCS]], [[Service Water]], [[Feed & Condensate]], [[Main Steam]], [[Steam Generator & Blowdown]], [[AFW]], [[Containment]], [[ECCS]], [[CFCUs]], [[RCPs]], [[RCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-3 — SI Termination]]
- Related procedures: [[AB.CN-0001 — Condensate System Abnormality]], [[AB.LOAD-0001 — Rapid Load Reduction]]
- Related exam: [[2023 NRC Operating Exam]]
