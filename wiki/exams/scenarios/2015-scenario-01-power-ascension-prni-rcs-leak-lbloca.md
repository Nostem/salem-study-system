---
title: "2015 Scenario 1 — Power Ascension / PRNI Failure / RCS Leak / LBLOCA"
category: exams
status: draft
aliases:
  - 2015 Scenario 1
  - 2015 ESG-1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — Power Ascension / PRNI Failure / RCS Leak / LBLOCA</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 6 Events | 3 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in Mode 1 at 67.5% power. RCS Boron: 1235 ppm. 780 MWe. Control Bank D at 168 steps withdrawn. Xenon burning out at 60 pcm per hour. Power was reduced to 45% 2 days ago for a 21 SGFP problem, which was fixed. Most limiting LCO: TS 3.6.2.3 Action a (25 CFCU) expires in 166 hours. Power ascension @ 10% per hour IAW S2.OP-IO.ZZ-0004 in progress. 25 CFCU CIT for motor bearing replacement. 23 Condensate pump O/S. Unit 1 and Hope Creek at 100% power. No penalty minutes in the last 24 hrs.<br><br>
<strong>Turnover:</strong> The crew will take the watch with the unit at 68.5% power, BOL. A power ascension at 10% per hour from 45% was placed on hold for shift turnover. Power was reduced 2 days ago for 21 SGFP control problem. Troubleshooting identified and corrected the problem, and 21 SGFP has been returned to service. The crew is directed to raise power at 10% per hour to 90% IAW S2.OP-IO.ZZ-0004, Power Operation. Rx Engineering is bringing updated reactivity plan to control room and crew should determine its own reactivity plan. 25 CFCU is CIT for bearing replacement. 23 Condensate pump is O/S. Xenon is burning out at 60 pcm per hour.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power Ascension</li>
<li><span class="hi">PRNI failure</span> (Power Range NI Channel IV / 2N44 fails high)</li>
<li><span class="hi">20 gpm RCS leak</span></li>
<li><span class="hi">LBLOCA with failure of RHR pumps to start</span></li>
<li><span class="hi">Transfer to Cold Leg Recirc</span></li>
<li><span class="hi">Charging pump cavitation while isolating RWST</span></li>
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
<td style="padding:6px;color:#c8cdd5;">Power Ascension</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs RO and PO on power ascension. RO provides reactivity plan for dilution and rod movement and initiates dilution if required. PO initiates a power ascension at 10% per hour IAW S2.OP-IO.ZZ-0004. RO either announces expected and actual auto rod movement, or withdraws rods in manual with CRS concurrence to maintain Tavg in band. (Note: Tref is +0.5 °F; xenon is burning out to help temperature control.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Power Range NI Channel IV (2N44) fails high — rods step in at 72 spm</td>
<td style="padding:6px;color:#9ca3af;">RO reports control rods stepping in at 72 spm with no load reject in progress, places rod control in Manual (if in auto) with CRS concurrence. (Crew may enter S2.OP-AB.ROD-0003, Continuous Rod Motion first if rods were in auto, but will transition to S2.OP-AB.NIS-0001.) CRS enters S2.OP-AB.NIS-0001, Nuclear Instrumentation Malfunction. RO identifies Power Range NI Channel IV 2N44 failed high. CRS notifies I&amp;C and requests assistance. PO reviews OHAs in alarm and confirms they are consistent with the NI channel failure. CRS enters TSAS 3.3.1.1 Action 2 and 6; directs QPTR and requests Rx Engineer perform flux map. CRS directs PO to remove 2N44 from service IAW S2.OP-SO.RPS-0001, NIS Channel Trip / Restoration (PO defeats the channel — DETECTOR CURRENT COMPARATOR upper/lower sections to PRN44, POWER MISMATCH BYPASS, ROD STOP BYPASS, COMPARATOR CHANNEL DEFEAT; remainder requires I&amp;C support).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">20 gpm RCS leak</span> inside containment</td>
<td style="padding:6px;color:#9ca3af;">RO reports charging flow rising and PZR level lowering slowly. Crew reports 2R11A containment radiation monitor reading rising. RO reports unexpected OHA C-2 CNTMT SUMP PMP START. CRS enters <span class="hi-exam">S2.OP-AB.RC-0001, Reactor Coolant System Leak</span> and directs implementation of CAS. CRS enters S2.OP-AB.RAD-0001, Abnormal Radiation after OHA A-6. RO swaps to a centrifugal charging pump IAW Step 3.14 and raises charging flow to stabilize PZR level. PO swaps to the 45 gpm letdown orifice. RO estimates leak rate. CRS initiates S2.OP-ST.RC-0008, Reactor Coolant Water Inventory Balance. CRS contacts Rad Pro — PO places 2 CFCUs in Low Speed and 2 CFCUs in High Speed. CRS initiates actions to locate and isolate the leak IAW Attachment 2. CRS enters TSAS 3.4.7.2.b.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Large Break LOCA</span> (RCS loop 22 catastrophic failure) — Auto SI fails</td>
<td style="padding:6px;color:#9ca3af;">RO reports indications of RCS failure (rapidly lowering RCS pressure and PZR level). RO reports the reactor has tripped or initiates a trip and performs Immediate Actions of EOP-TRIP-1: confirms the Rx trip, trips the Main Turbine, reports at least one 4KV vital bus energized. RO reports a demand for SI exists but SI has not initiated and <span class="hi-exam">manually initiates SI</span>. CRS and RO verify performance of immediate actions. PO reports all AFW pumps running and requests permission to throttle AFW flow while maintaining 22E4 lbm/hr or 9% level in at least one SG NR level.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">21 and 22 RHR pumps fail to start on SEC <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">PO performs SEC Loading Verification with safeguards valve alignment and reports neither RHR pump started. <span class="hi-exam">RO blocks 2A and 2B SECs, PO resets 2A and 2B SECs, RO starts 21 and 22 RHR pumps</span> (low-head ECCS pumps manually started — CT#1). RO verifies ECCS flow paths: charging ≥100 gpm, SI flow ≥100 gpm, RHR flow ≥300 gpm on both 21/22SJ49s; stops all RCPs per CAS; closes charging pump mini-flow valves with RCS pressure &lt;1500 psig. PO verifies containment spray pumps running and MSLI occurred; verifies AFW per criteria. Crew confirms TRIP-1 transition criteria (RTBs open, PORVs shut with block valves open, no faulted/ruptured SGs, ≥2 channels in Table F in warning/alarm). CRS transitions to EOP-LOCA-1, Loss of Reactor Coolant. CFST monitoring commences after transition out of TRIP-1; STA reports to control room. If FRTS RED path identified → FRTS-1; if FRCE PURPLE path identified → FRCE-1, then returns to procedure in effect. In LOCA-1: crew re-verifies no faulted/ruptured SGs; RO resets SI, Phase A, Phase B; opens 21/22CA330s; PO resets each SEC.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;">2C 4KV vital bus undervoltage (EOG loads Blackout Mode)</td>
<td style="padding:6px;color:#9ca3af;">(May not occur if crew does not reach SEC reset steps in LOCA-1.) PO reports UV condition on 2C 4KV vital bus and EOG loading Blackout loads. Crew performs Table B actions for 2C SEC: PO verifies loading complete, resets 2C SEC, CRS directs starting of safeguards loads. PO resets 230V control centers. RO resets SGBD Sample Isolation Bypass and opens 21-24SS94s. CRS directs chemistry to sample SGs. Crew verifies proper PORV status, SI flow cannot be reduced, CS flow indicated, no faulted SGs. CRS evaluates continued EOG running status.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">Transfer to Cold Leg Recirculation <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">When RO announces 214 RWST level reached 15.2 ft (RWST lo level alarm — time marked for CT#2), CRS transitions to EOP-LOCA-3, Transfer to Cold Leg Recirculation. RO reports Containment Sump Level Lights illuminated &gt;62%, depresses SUMP AUTO ARMED PB for 21/22SJ44s. PO removes lockouts from 2SJ67, 2SJ68, 2SJ69. RO reports 21/22SJ44 open, both RHR running, then <span class="hi-exam">shuts 2SJ69 (time marked — ≤3.7 min)</span>. RO verifies/performs SI reset, resets SECs and 230V MCCs, <span class="hi-exam">stops 22 CS pump (time marked — ≤5.5 min)</span>, closes 21/22RH19s. Crew completes recirc alignment (shut 2SJ67/2SJ68, verify 2RH1/2RH2 shut, open 22SJ45/21SJ45, verify 21/22SJ113), <span class="hi-exam">verifies 21/22 SI pumps and 21/22 charging pumps running — ECCS in recirc (time marked — ≤11.2/11.7 min)</span>. PO removes lockout from 2SJ30; RO closes 2SJ30, 2SJ1, 2SJ2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;">Charging pump cavitation while isolating RWST <span class="hi-exam">(CT#3)</span></td>
<td style="padding:6px;color:#9ca3af;">When isolating the RWST (closing 2SJ1/2SJ2), both charging pumps cavitate. RO reports indications of charging pump cavitation: fluctuating charging pump amps, seal injection flow alarms, and loss of BIT flow. <span class="hi-exam">RO stops 21 and 22 charging pumps (CT#3)</span>. Scenario terminates when both charging pumps are secured; OR if not secured, after a charging line leak in the Aux Building produces a LOCA outside containment (crew places 21/22RH29 controllers in Manual and shut, CRS implements FRPs as necessary, dispatches operator to tag SJ44 breakers open).</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-5):</strong> Manually start at least one low-head ECCS pump before transition out of TRIP-1. <em>Bases:</em> Failure to manually start at least one low-head ECCS pump under the postulated conditions constitutes incorrect crew performance in which the crew does not prevent "degraded emergency core cooling system (ECCS) capacity." At least one low-head ECCS pump can be manually started from the control room. Failure also represents a failure by the crew to effectively direct or manipulate ESF controls that would prevent a significant reduction of safety margin, and to recognize a failure or incorrect automatic actuation of an ESF system or component. (In this scenario both 21 and 22 RHR pumps fail to start on the SEC signal; crew blocks/resets 2A and 2B SECs and manually starts both RHR pumps.) <span class="hi-exam">Not time-critical.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-36):</strong> Transfer to Cold Leg Recirculation such that at least one train of ECCS is in operation in the recirculation mode within the following time frames:<br>
1. From RWST lo level alarm to initiating closed on <span class="hi-exam">2SJ69 — ≤3.7 minutes</span><br>
2. From RWST lo level alarm to one containment spray pump stop — <span class="hi-exam">≤5.5 minutes</span><br>
3. From RWST lo level alarm to switchover completion (includes restarting ECCS pumps if stopped on RWST lo-lo level) — <span class="hi-exam">≤11.2 minutes</span><br>
<em>Bases:</em> Omission or incorrect performance results in direct adverse consequences or significant degradation in the mitigative capability of the plant. Failure to transfer before the RWST inventory is depleted results in loss of all pumped safety injection and containment spray when the RWST empties. Failure constitutes a significant reduction of safety margin and can challenge the Core Cooling and Containment CSFs. <span class="hi-exam">Time-critical.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#3:</strong> Trip the cavitating charging pump prior to pump/system piping damage. <em>Bases:</em> Failure to trip a cavitating charging pump during the transfer to cold leg recirculation when indications of cavitation are present leads to the possibility of system damage and the advent of a loss of coolant outside the containment building (as is the case in this scenario). <span class="hi-exam">Not time-critical</span> (acts on the cavitation cues — fluctuating amps, seal injection flow alarms, loss of BIT flow).</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.NIS-0001]] (PRNI Ch IV / 2N44 fails high — defeat channel) → [[AB.RC-0001]] + [[AB.RAD-0001]] (20 gpm RCS leak inside containment; OHA C-2 sump pump start, 2R11A rising) → RCS loop 22 catastrophic failure → <span class="hi-exam">EOP-TRIP-1</span> (reactor trip / SI demand; <span class="hi-exam">auto SI fails → crew manually initiates SI</span>; both RHR pumps fail to start on SEC → block/reset 2A/2B SECs, manually start both RHR pumps = <strong>CT#1</strong>) → after transition out of TRIP-1, <span class="hi-exam">CFST monitoring begins</span> → <span class="hi-exam">EOP-FRTS-1</span> (FRTS RED path on imminent PTS — RCS pressure &lt; setpoint; returns to procedure in effect) and <span class="hi-exam">EOP-FRCE-1</span> (FRCE PURPLE path on excessive containment pressure; returns to procedure in effect) → <span class="hi-exam">EOP-LOCA-1</span> (Loss of Reactor Coolant — no faulted/ruptured SGs, RCS subcooling/RVLIS criteria; reset SI/Phase A/Phase B, reset SECs) → at <span class="hi-exam">RWST lo level (214 RWST = 15.2 ft)</span> → <span class="hi-exam">EOP-LOCA-3</span> (Transfer to Cold Leg Recirculation = <strong>CT#2</strong>, time-critical) → charging pumps cavitate on RWST isolation → <strong>CT#3</strong> (trip cavitating charging pumps) → terminate, or if not secured, charging line failure in Aux Building = LOCA outside containment (CRS implements FRPs). [[EOP-CFST-1]] status trees drive the FRTS-1 and FRCE-1 entries.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 14-01 ILOT NRC ESG-1, Rev. 00 (New issue for 14-01 ILOT NRC exam) | <a href="/salem-study-system/exam-pdfs/2015-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[Control Rod Drive]], [[RCS]], [[CVCS]], [[Radiation Monitoring]], [[CFCUs]], [[ECCS]], [[RHR]], [[SECs]], [[Containment Spray]], [[Containment]], [[AFW]], [[EDGs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[S2.OP-IO.ZZ-0004 — Power Operation]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]]
- Related exam: [[2015 NRC Operating Exam]]
