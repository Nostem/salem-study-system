---
title: "2014 Scenario 1 — RCP Seal Failure / MSLI Failure / Loss of Secondary Coolant"
category: exams
status: draft
aliases:
  - 2014 Scenario 1
  - 2014 ESG-1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — RCP Seal Failure / MSLI Failure / Loss of Secondary Coolant</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 3 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in Mode 1 at 90% power, EOL. RCS Boron 895 ppm. 1080 MWe. Core Burnup 6000 EFPH. Control Bank D at 203 steps. Reactivity plan for power ascension to 98.5% is to perform dilution concurrent with rod withdrawal to establish ARO prior to reaching 98.5%. Calorimetric required prior to exceeding 90% power has been performed SAT. S2.OP-IO.ZZ-0004, Power Operation, in progress and complete up to Step 5.1.26. Power was reduced 2 days ago to remove 21 and 22 Heater Drain Pumps from service due to possible damage from spraying water; pumps have been inspected and returned to service. Unit 1 and Hope Creek at 100% power. No penalty minutes in the last 24 hrs.<br><br>
<strong>Turnover:</strong> Raise Rx power to 98.5% @ 10% per hour IAW IOP-4 (S2.OP-IO.ZZ-0004), Power Operation. The crew will take the turnover at 90% power, MOL, with direction to raise power to 98.5% @ 10% per hour. Rx Engineering is bringing an updated reactivity plan to the control room and the crew should determine its own reactivity plan to establish ARO prior to reaching 98.5% power.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension</li>
<li>2C EDG Air Receiver low pressure (2C EDG inoperable)</li>
<li>23 CCW pump trip with failure of standby pump to auto start</li>
<li><span class="hi">24 RCP #1 seal degradation leading to failure</span></li>
<li><span class="hi">Reactor trip and 24 RCP trip</span></li>
<li><span class="hi">Steam leak in containment with MSLI failure</span></li>
<li><span class="hi">Containment Spray pumps fail to start on SEC signal</span></li>
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
<td style="padding:6px;color:#c8cdd5;">Power ascension</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs the crew on the power ascension. RO calculates dilution required to achieve ARO prior to 98.5% power and provides a reactivity plan (dilution concurrent with rod withdrawal, or rod movement only until rods are fully withdrawn). PO sets up the Main Turbine for power ascension to 98.5% at 10% per hour IAW S2.OP-IO.ZZ-0004. RO maintains Tavg in band with rods/boration as power rises.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">2C EDG Air Receiver low pressure — OHA J-20, 2C DG URGENT</td>
<td style="padding:6px;color:#9ca3af;">PO announces OHA J-20, 2C DG URGENT, and refers to the Alarm Response (S2.OP-AR.DG-0003). A large air leak exists on the 2C EDG starting air supply line; the field operator reports both air start compressors running with Air Start tank pressure lowering. CRS determines 2C EDG is inoperable based on lower-than-required Air Start Tank pressure and enters the appropriate Tech Spec for an inoperable EDG. CRS refers to S2.OP-SO.DG-0003, 2C EDG Operation.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">23 CCW pump trip with standby pump failure to auto start</td>
<td style="padding:6px;color:#9ca3af;">RO reports the trip of 23 CCW pump and that the standby pump did not auto start. CRS directs RO to manually start 22 CCW pump. RO manually starts 22 CCW pump and reports clearing of all alarms associated with the CCW system, restoring system pressure. CRS directs RO/PO to validate that alarms received were consistent with low CCW system pressure. RO verifies RCP CCW-cooled parameters. CRS enters the appropriate Tech Spec. (Crew may refer to S2.OP-AB.CC-0001, Component Cooling System Abnormality.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">24 RCP #1 seal degradation</span> — rising seal leakoff flow</td>
<td style="padding:6px;color:#9ca3af;">RO reports degrading 24 RCP #1 seal performance with rising seal leakoff flow. CRS enters <span class="hi-exam">S2.OP-AB.RCP-0001, Reactor Coolant Pump Abnormality</span>, to address the rising seal leakoff flow. Crew monitors seal parameters and prepares to trip the reactor when seal leakoff reaches the point where the RCP must be tripped (seal leakoff > 6 gpm).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">Reactor trip on degrading RCP seal; 24 RCP trip <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">CRS briefs the Rx trip actions to be performed. RO trips the reactor, then stops 24 RCP. RO performs Immediate Actions of EOP-TRIP-1, Reactor Trip or Safety Injection: confirms Rx trip, backs up the Main Turbine trip, reports at least one 4KV vital bus energized, determines no SI is required. CRS reads immediate action steps to RO and RO verifies performance. <span class="hi-exam">3-5 minutes after tripping 24 RCP, the crew shuts the 24 RCP seal leakoff isolation valve 24CV104 to prevent further seal damage (CT#1).</span> CRS determines no condition warrants a Safety Injection and transitions to EOP-TRIP-2, Reactor Trip Response. CFSTs become active upon transition out of TRIP-1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Steam leak in containment with MSLI failure</span> — manual SI</td>
<td style="padding:6px;color:#9ca3af;">During performance of EOP-TRIP-2 RCS cooldown minimization steps, a steam leak develops in containment. Crew initiates a Main Steam Line Isolation (MSLI); all MSIVs remain open (MSLI fails). The crew then <span class="hi-exam">initiates a Safety Injection</span>. RO depresses the stop PB for all RCPs. Crew returns to EOP-TRIP-1 and verifies safeguards actuation; PO reports Table D valves position. PO reports all SG pressures dropping in an uncontrolled manner and that MSLI has failed to shut any MSIV. CRS transitions out of TRIP-1 to EOP-LOSC-1, Loss of Secondary Coolant, then to <span class="hi-exam">EOP-LOSC-2, Uncontrolled Depressurization of All Steam Generators</span>, due to all MSIVs being open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">Containment Spray pumps fail to start on SEC signal <span class="hi-exam">(CT#2)</span>; minimize AFW flow <span class="hi-exam">(CT#3)</span></td>
<td style="padding:6px;color:#9ca3af;">Containment pressure rises to 15 psig and CRS transitions to <span class="hi-exam">EOP-FRCE-1, Response to Excessive Containment Pressure</span>. Crew diagnoses that no Containment Spray pumps are running. Crew ensures Containment Spray by initiating Phase B and Spray actuation: if SECs are not reset, RO blocks and resets the SECs, inserts the keys for 21 and 22 CS actuation, reports spray valve realignment, and <span class="hi-exam">starts 21 and 22 Containment Spray pumps (CT#2 — prior to completion of FRCE-1 step 3).</span> RO reports RCS cooldown rate > 100°F/hr. <span class="hi-exam">PO reduces AFW flow to each SG to no less than 1.0E4 lbm/hr to minimize the RCS cooldown (CT#3).</span> 23 AFW pump not needed for SG level control is tripped/stopped; CRS dispatches operators to shut 23 AFW pump discharge valves. CRS transitions to and verifies FRHS-1 as required, then returns to the procedure in effect. A single MSIV is closed in the field during LOSC-2 performance; the crew recognizes rising pressure in the associated SG and CRS transitions back to LOSC-1. Scenario terminates after the return to LOSC-1 (CRS uses the CAS action of LOSC-2 for rising SG pressure).</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (AB.RCP):</strong> Close 24CV104 <span class="hi-exam">3-5 minutes after tripping the RCP</span> due to Seal Leakoff > 6 gpm. <em>Basis:</em> Closing the Seal Leakoff Isolation Valve 24CV104 prevents unfiltered, high temperature RCS into the #2 RCP seal, which raises the probability of #2 seal failure. The 3 minute time frame is based on expected coastdown time of the RCP since a static condition is more favorable for the #2 seal to perform its backup function to the #1 seal. The 5 minute limitation minimizes RCS leakage from the damaged seal to maintain RCS inventory. Failure to isolate within 5 minutes raises the possibility of a #2 seal failure and subsequent LOCA. <span class="hi-exam">Time-critical — close 24CV104 within 3-5 minutes of tripping 24 RCP.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-3):</strong> Manually start Containment Spray pumps <span class="hi-exam">prior to completion of step 3 of FRCE-1</span>. <em>Basis:</em> Failure to manually actuate the minimum required complement of containment cooling equipment under the postulated conditions demonstrates the inability of the crew to "recognize a failure or an incorrect automatic actuation of an ESF system or component." <span class="hi-exam">Acts before completion of FRCE-1 step 3.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#3 (CT-33):</strong> Reduce AFW flow to <span class="hi-exam">no less than 1.0E4 lbm/hr to each SG</span> to minimize RCS cooldown <span class="hi-exam">prior to exiting FRCE-1</span>. <em>Basis:</em> Failure to perform the critical task increases the challenges to the subcriticality and the containment CSFs beyond those irreparably introduced by the postulated plant conditions.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[S2.OP-AR.DG-0003 — 2C Diesel Generator Alarm Response]] / [[AB.CC-0001 — Loss of Component Cooling Water]] (2C EDG air leak — EDG inoperable, enter TS; 23 CCW pump trip with standby failure — manually start 22 CCW pump, enter TS) → [[AB.RCP-0001 — RCP Abnormality]] (24 RCP #1 seal degrading, leakoff rising > 6 gpm) → trip reactor, stop 24 RCP → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip — immediate actions; <strong>CT#1</strong>: shut 24CV104 seal leakoff isolation 3-5 min after tripping 24 RCP; no SI demand) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response; CFSTs active out of TRIP-1) → steam leak in containment, MSLI fails (all MSIVs stay open) → crew manually initiates SI → return to <span class="hi-exam">EOP-TRIP-1</span> → transition out to <span class="hi-exam">EOP-LOSC-1</span> (Loss of Secondary Coolant) → <span class="hi-exam">EOP-LOSC-2</span> (Uncontrolled Depressurization of All Steam Generators — all MSIVs open) → containment pressure rises to 15 psig → <span class="hi-exam">EOP-FRCE-1</span> (Response to Excessive Containment Pressure — no CS pumps running; <strong>CT#2</strong>: manually start 21/22 CS pumps before FRCE-1 step 3; <strong>CT#3</strong>: reduce AFW to ≥ 1.0E4 lbm/hr per SG before exiting FRCE-1) → [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]] verified/returned as required → single MSIV closed in field, associated SG pressure rises → transition back to <span class="hi-exam">EOP-LOSC-1</span> → terminate. [[EOP-CFST-1]] status trees drive the FRCE-1 (and FRHS-1) front-line/CSF entries.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 13-01 NRC ESG-1, Rev. 00 (New Issue for 13-01 NRC Exam), Form ES-D-1 | <a href="/salem-study-system/exam-pdfs/2014-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCPs]], [[CCW]], [[EDGs]], [[RCS]], [[Main Steam]], [[SECs]], [[Containment Spray]], [[Containment]], [[AFW]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.RCP-0001 — RCP Abnormality]], [[AB.CC-0001 — Loss of Component Cooling Water]], [[S2.OP-IO.ZZ-0004 — Power Operation]], [[S2.OP-SO.DG-0003 — 2C Diesel Generator Operation]], [[S2.OP-AR.DG-0003 — 2C Diesel Generator Alarm Response]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2014 NRC Operating Exam]]
