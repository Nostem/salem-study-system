---
title: "2015 Scenario 2 — MPT Fire / Inadvertent SI / SGTR"
category: exams
status: draft
aliases:
  - 2015 Scenario 2
  - 2015 ESG-2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 2 — MPT Fire / Inadvertent SI / SGTR</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in Mode 1 at 100% power, MOL. RCS Boron 864 ppm. 1220 MWe. 26 SW pump CIT for strainer cleaning. Solar Flares are occurring; SMD K-5 is in effect for the next 4 hours. No evolutions/procedures/surveillances in progress. Unit 1 and Hope Creek at 100% power. No penalty minutes in the last 24 hrs. No primary, secondary, or radwaste evolutions in progress.<br><br>
<strong>Turnover:</strong> The crew takes the watch with the unit at 100%, MOL. 26 SW pump is CIT for strainer cleaning. Solar Flares are occurring. SMD K-5 is in effect for the next 4 hours.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>21 ABV Exhaust Fan stopped</li>
<li><span class="hi">Controlling PZR Pressure Channel fails low</span></li>
<li>Main Generator Radio Frequency high</li>
<li><span class="hi">Fire Protection Actuation (deluge) at Main Power Transformer</span> — reactor trip</li>
<li><span class="hi">Inadvertent Safety Injection</span></li>
<li><span class="hi">SGTR after SI termination</span></li>
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
<td style="padding:6px;color:#c8cdd5;">Loss of 21 ABV Exhaust Fan — unexpected AIR FLOW LO alarm</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected AIR FLOW LO alarm for 21 ABV Exhaust Fan. CRS dispatches an operator to check breaker 2AX1AX12X (reported tripped open). CRS refers to OP-SA-108-106-1001, Large Motor Starting Criteria and Protective Circuit Breaker Reset and Reclosure Policy, and determines the cause of the breaker trip must be investigated prior to reclosure. Crew places the alternate ABV Exhaust Fan in service IAW S2.OP-SO.ABV-0001, Auxiliary Building Ventilation System Operation — RO starts 23 ABV Exhaust Fan. CRS enters LCO 3.7.7 (14 day action time) for less than the full complement of Aux Building Ventilation fans.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Controlling PZR Pressure Channel fails low — OHAs D-16, E-12, E-28</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHAs D-16 RC PRESS LO, E-12 PZR PRESS LO, and E-28 PZR HTR ON PRESS LOW, and identifies failure of the controlling PZR Pressure channel (Channel I / PT455). RO requests permission and places the Master Pressure Controller in MANUAL to mitigate the transient. CRS enters S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction, and directs Attachment 1 CAS. RO adjusts demand per Attachment 2, selects PZR Pressure Channel III for control, and restores the Master Controller to AUTO. CRS enters TSAS 3.3.1.1 Action 6, 3.3.2.1.b Action 19, and 3.4.5 Action b. Crew removes the failed channel from service (selects alternate channel for control/recorders/differential temperatures, trips bistables). CRS directs RO to close 2PR6 PORV block valve and directs WCC to de-energize 2PR6.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Main Generator Radio Frequency high — Point 0901 GEN RADIO FREQ HIGH</td>
<td style="padding:6px;color:#9ca3af;">PO reports alarm Point 0901, GEN RADIO FREQ HIGH. CRS enters S2.OP-AB.GEN-0001, Main Generator Abnormal Stator Conditions, and directs Attachment 1 CAS. PO checks Stator T/C and RTD temperatures on SPDS and reports the step 3.2 condition: 3 sequential stator T/Cs exceed assigned temperature limits by &lt; 10°F. Crew dispatches operator to read local RF Monitor (reads just above 50% and rising). CRS determines a load reduction is necessary to lower the Radio Frequency Monitor to &lt; 50% and enters S2.OP-AB.LOAD-0001, Rapid Load Reduction. RO calculates and commences RCS boration; PO initiates turbine load reduction to the target load at the CRS-specified rate; RO maintains Tavg on program with rods/boration and energizes PZR heaters.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">MPT Phase 1 Sudden Pressure / Fire Protection deluge actuation</span> — reactor trip with power &gt; P-9</td>
<td style="padding:6px;color:#9ca3af;">PO reports unexpected OHA H-15, MPT 01 TRBL, and refers to Alarm Response; RO reports CRT point 529, MPT Phase 1 Sudden Pressure, in alarm. FP deluge actuates at MPT Zone 46; RO reports OHA A-15 FIRE PUMP 1/2 RUN (alarms when either Diesel Drive Fire Pump starts). Field operator reports water spraying over MPT Phase 1 with heavy arcing and sparking. CRS determines the Main Generator must be removed from service and power is &gt; P-9, and directs the RO to trip the reactor. RO trips the reactor and performs Immediate Actions of TRIP-1: confirms Rx trip, trips the Main Turbine, reports at least one 4KV Vital bus energized, reports SI is not actuated and not required. CRS and RO verify immediate actions; CRS transitions to EOP-TRIP-2, Reactor Trip Response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">No AFW flow post trip — 21 AFW pump running with no discharge flow; 22/23 AFW pumps did not start</td>
<td style="padding:6px;color:#9ca3af;">PO reports 21 AFW pump running with no discharge flow, and 22 and 23 AFW pumps have not started. PO starts at least one of 22/23 AFW pumps to establish at least 22E4 lbm/hr AFW flow, maintaining that until at least one SG NR level is &gt; 9%, then maintains intact SG NR level 9-33%. PO stops/ensures stopped 21 and 22 SGFP. PO may depress the Pressure Override Defeat for 21 AFW pump to establish flow from it. RO reports RCP status and RCS temperature status.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Inadvertent Safety Injection</span> (2nd PZR pressure channel, PT457, fails low → auto SI on Lo PZR pressure)</td>
<td style="padding:6px;color:#9ca3af;">RO reports alarms and indications that an automatic Safety Injection has occurred and backs up SI. CRS goes to EOP-TRIP-1 from the TRIP-2 CAS on SI initiation. CRS and RO verify immediate actions. PO reports SEC loading complete with all available equipment started (ABV Exhaust fan actions already taken), maintains AFW flow, and reports Table B valve groups in safeguards position. RO reports 21/22CA330 shut, containment pressure &lt; 15 psig, no high steamline flow (RCS pressure controlled by PZR PORV 2PR2 cycling in auto), all 4KV Vital buses energized, CAV in AP mode, ≥ 2 CCW pumps, RHR not aligned for cold leg recirc, RCP in service, RCS temp stable at/trending to 547°F. Crew verifies TRIP-3 transition criteria (PORV/Block Valve status, no faulted/ruptured SGs, no Table F rad monitors in warning/alarm, containment pressure &lt; 4 psig, sump level &lt; 46%, subcooling &gt; 0°F, AFW ≥ 22E4 lbm/hr or one SG NR &gt; 9%, RCS pressure stable/rising and PZR level &gt; 11%). CRS transitions to EOP-TRIP-3, SI Termination.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">Inadvertent SI Termination <span class="hi-exam">(CT#1 + CT#2)</span> → SGTR initiation</td>
<td style="padding:6px;color:#9ca3af;">In EOP-TRIP-3: RO resets SI and Phase A, reports Phase B reset and opens 21/22CA330. (Channels I and III PZR pressure failed low → no demand for spray flow; PZR spray valves not failed open.) RO manually controls RCS pressure. PO resets each SEC and 230V control centers, then <span class="hi-exam">stops all but 21 or 22 charging pump (CT#1 — within 23 min of SI initiation)</span>. RO aligns charging pump suction to RWST, ensures 2CV139/2CV140 mini-flow open, shuts BIT isolation valves 2SJ4/2SJ5/2SJ12/2SJ13, shuts 2CV55, opens 2CV68/2CV69, and adjusts 2CV55 to maintain PZR level &gt; 25%. With RCS pressure &gt; 1540 psig stable/rising, RO stops both SI and both RHR. RO opens 2CV2/2CV277 (auto), ensures 2CV1 open, raises charging flow to ≥ 87 gpm, and <span class="hi-exam">re-establishes normal letdown (CT#2 — within 45 min of inadvertent SI)</span> — places one letdown orifice in service at 300 psig, 2CV18 in auto, and CVCS auto makeup in Auto. A SGTR (24 SG) then initiates; CRS directs CAS action to start ECCS pumps as necessary and go to EOP-SGTR-1. Scenario terminates when the transition to SGTR-1 is made.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (Salem Critical Operator Action):</strong> Terminate an Inadvertent SI by <span class="hi-exam">stopping all but 21 or 22 charging pump within 23 minutes of SI initiation</span>. <em>Bases:</em> Failing to terminate an Inadvertent SI leads to PZR overfill and water relief through the PZR PORVs/Safeties (Engineering Eval S-2-RC-MEE-1108). <span class="hi-exam">Time-critical — ≤ 23 minutes from SI initiation.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (Salem Critical Operator Action):</strong> Terminate an Inadvertent SI by <span class="hi-exam">re-establishing Letdown within 45 minutes of the inadvertent SI</span>. <em>Bases:</em> Failing to terminate an Inadvertent SI leads to PZR overfill and water relief through the PZR PORVs/Safeties (Engineering Eval S-2-RC-MEE-1108). <span class="hi-exam">Time-critical — ≤ 45 minutes from inadvertent SI.</span></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]] (controlling PZR pressure Ch I / PT455 fails low — take manual control, swap to Ch III, restore to auto, isolate 2PR6) → [[AB.GEN-0001 — Main Generator Abnormal Stator Conditions]] (Point 0901 GEN RADIO FREQ HIGH, elevated stator T/Cs) → [[AB.LOAD-0001 — Rapid Load Reduction]] (lower RF Monitor &lt; 50%) → MPT Phase 1 Sudden Pressure / FP deluge at MPT, Main Generator must come off line, power &gt; P-9 → <span class="hi-exam">EOP-TRIP-1</span> (manual reactor trip; immediate actions — SI not required) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response; restore AFW with 22/23 AFW pumps) → 2nd PZR pressure channel (PT457) fails low → <span class="hi-exam">auto Inadvertent SI on Lo PZR pressure</span> → return to <span class="hi-exam">EOP-TRIP-1</span> (from TRIP-2 CAS on SI initiation; back up SI, verify safeguards) → verify TRIP-3 transition criteria → <span class="hi-exam">EOP-TRIP-3</span> (SI Termination — terminate Inadvertent SI: stop all but one charging pump = <strong>CT#1, ≤ 23 min</strong>; re-establish letdown = <strong>CT#2, ≤ 45 min</strong>) → SGTR (24 SG) initiates → CRS directs starting ECCS pumps as necessary and transitions to <span class="hi-exam">EOP-SGTR-1</span> (Steam Generator Tube Rupture) → terminate. No CFST RED/ORANGE path entries occur; containment pressure remains &lt; 15 psig and no faulted/ruptured SGs prior to the SGTR.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 14-01 NRC ESG-2, Rev. 00 (New Issue for 14-01 ILOT NRC exam) | <a href="/salem-study-system/exam-pdfs/2015-scenario-02.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[Pressurizer]], [[RCS]], [[CVCS]], [[ECCS]], [[AFW]], [[ABV]], [[Main Turbine]], [[Stator Cooling Water]], [[Fire Protection]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-TRIP-3 — SI Termination]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.GEN-0001 — Main Generator Abnormal Stator Conditions]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[S2.OP-IO.ZZ-0004 — Power Operation]], [[OP-SA-108-106-1001 — Equipment Control and Large Motor Starting Criteria]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2015 NRC Operating Exam]]
