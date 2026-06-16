---
title: "2012 Scenario 1 — Inadvertent SI / LBLOCA / ECCS & Containment Spray Actuation Failures"
category: exams
status: draft
aliases:
  - 2012 Scenario 1
  - 2012 ESG-1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 1 — Inadvertent SI / LBLOCA / ECCS &amp; Containment Spray Actuation Failures</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 4 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> 100% power, EOL. PZR Pressure channel II is O/S for calibration. 2PR7 is shut with power removed to comply with TSAS 3.4.5.b. All bistables associated with PZR Pressure Channel II are tripped IAW S2.IC-CC.RCP-0018, 2PT-456 Pressurizer Pressure Protection Channel II.<br><br>
<strong>Turnover:</strong> Maintain current power. Perform IST Room Cooler Valves Modes 1-6 IAW S2.OP-ST.SW-0014 (RHR pump room coolers). The crew takes the turnover at 100% power, EOL, with I&amp;C performing a channel calibration of PZR Pressure Channel II; orders for the shift are to complete the IST of the RHR pump room cooler valves and maintain 100% power.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>RHR pump room cooler valve surveillance — Unsat stroke time (TS)</li>
<li>21 SG NR level Channel II fails high (TS)</li>
<li>Automatic Stator Water main turbine runback with subsequent auto rod control failure</li>
<li>21 MS10 atmospheric steam dump fails ~33% open in auto</li>
<li><span class="hi">Inadvertent (false) Safety Injection signal — reactor trips; 2C 4KV vital bus de-energizes on UV and loads onto its EDG</span></li>
<li><span class="hi">Large Break LOCA — low-head ECCS (RHR) pumps fail to auto start</span></li>
<li><span class="hi">Containment Spray fails to auto actuate on Phase B</span></li>
<li><span class="hi">Transfer to cold leg recirculation; 22 charging pump cavitation</span></li>
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
<td style="padding:6px;color:#c8cdd5;">RHR pump room cooler valve surveillance with Unsat result (21SW153 stroke time)</td>
<td style="padding:6px;color:#9ca3af;">CRS directs PO to commence IST of the 21 RHR pump room cooler IAW S2.OP-ST.SW-0014. The 21SW153 room cooler SW valve stroke time falls in the Required Evaluation Range (5.2 s); on a retest it falls in the Required Action Range (5.7 s). CRS declares 21SW153 inoperable. Per S2.OP-SO.SW-0005, the RHR pump must be declared inoperable when its room cooler is inoperable, so CRS declares 21 RHR pump inoperable and enters TSAS 3.5.2 for less than two full ECCS trains.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">21 SG NR level Channel II fails high</td>
<td style="padding:6px;color:#9ca3af;">After completing the surveillance, 21 SG NR level Channel II fails high. The crew verifies no ADFCS (feedwater control) malfunction is in progress and the CRS enters the appropriate Tech Spec (TSAS 3.3.1.1 Action 6 and 3.3.2.1 Action b.19).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Automatic Stator Water main turbine runback — OHA H-38 GEN STAT RUNBACK, H-45 GEN STAT CLG SYS TRBL; auto rod control fails</td>
<td style="padding:6px;color:#9ca3af;">A Stator Water main turbine runback initiates (terminates ~900 MWe when the initiating condition clears). Control rod speed fails to minimum, so the RO takes manual rod control and inserts rods to maintain Tavg-Tref within band and control AFD. PO starts the standby Stator Cooling Water pump IAW the ARP and ensures positive control of the Main Turbine. If OHA E-16 ROD INSERT LMT LO-LO annunciates, the crew initiates Emergency Boration IAW S2.OP-SO.CVC-0008 (continuing until rods are at least 2 steps above the RIL). CRS enters S2.OP-AB.LOAD-0001, Rapid Load Reduction.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">21 MS10 atmospheric steam dump fails ~33% open in auto</td>
<td style="padding:6px;color:#9ca3af;">Once the plant is stabilized, 21 MS10 fails ~33% open in auto. The PO either places 21 MS10 in manual and shuts the valve, or raises the steam pressure setpoint so the valve responds and shuts. CRS enters S2.OP-AB.STM-0001, Excessive Steam Flow.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Inadvertent (false) Safety Injection signal — reactor automatically trips; 2C 4KV vital bus de-energizes on UV</span></td>
<td style="padding:6px;color:#9ca3af;">A false SI signal is generated and the reactor automatically trips. RO performs <span class="hi-exam">EOP-TRIP-1 immediate actions from memory</span>: verifies reactor tripped and trip confirmed, trips the Main Turbine, verifies at least one 4KV vital bus energized, reports SI actuated and backs up SI. The 2C 4KV vital bus de-energizes on undervoltage following the trip and the SEC loads 2C bus onto its EDG; 21 CCW pump trips and 23 CCW pump control transfers to manual. RO reports 22 charging pump and both RHR pumps failed to start. Crew blocks all SECs on 2RP1 and resets emergency loading.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Large Break LOCA — low-head ECCS (RHR) pumps fail to auto start</span> <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">A LBLOCA occurs ~5 minutes after the reactor trip. The low-head ECCS pumps failed to auto actuate, so the RO <span class="hi-exam">manually starts 22 charging pump and 21 and 22 RHR pumps (CT#1 — at least one RHR pump before transitioning out of TRIP-1)</span>. PO reports all AFW pumps running and throttles AFW to maintain 22E4 lbm/hr (or 9% NR level) in at least one SG. The crew identifies a LBLOCA from control board indications. (22 charging pump must be running for low-head ECCS injection; 21 charging pump trips 15 minutes after the reactor trip.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Containment Spray fails to auto actuate on Phase B</span> <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">RO reports control console indication of Containment Spray and Phase B actuation, but no Containment Spray system components have actuated. CRS returns to Step 11 and directs the RO to manually <span class="hi-exam">initiate Phase B and Spray actuation, realign the spray valves, and start 21 and 22 Containment Spray pumps (CT#2 — before exiting TRIP-1)</span>; RO also initiates MSLI and stops 21-24 RCPs, and ensures Table D valve groups in safeguards position. Crew performs ECCS flow evaluation confirming all ECCS pumps injecting as expected for a LBLOCA. CRS transitions to <span class="hi-exam">EOP-LOCA-1</span> on containment radiation. STA monitors CFSTs and identifies a PURPLE path on the Thermal Shock and Containment Environment status trees; CRS transitions to FRTS-1 (RCS cooldown rate / Table A) then FRCE-1 (PURPLE Containment Environment if containment pressure remains &gt; 15 psig), then returns to LOCA-1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Transfer to cold leg recirculation</span> <span class="hi-exam">(CT#3)</span>; 22 charging pump cavitation <span class="hi-exam">(CT#4)</span></td>
<td style="padding:6px;color:#9ca3af;">The crew transitions to <span class="hi-exam">EOP-LOCA-3, Transfer to Cold Leg Recirculation</span>, when RWST level reaches 15.2 ft, with all 4KV vital busses energized (2C from its EDG). At the RWST Lo level alarm the crew arms the containment sump auto PBs (21/22SJ44), removes RHR suction lockouts (2SJ67/2SJ68), verifies both RHR pumps running, <span class="hi-exam">shuts 2SJ69 within 3.7 min, stops a Containment Spray pump within 5.5 min, and completes switchover (ECCS in recirc) within 11.2 min of the RWST Lo level alarm (CT#3, time-critical)</span>. During the transfer, 22 charging pump cavitates when 2SJ1 and 2SJ2 are shut; <span class="hi-exam">the RO recognizes cavitation (amperage, discharge/BIT flow, discharge pressure oscillations) and trips/secures 22 charging pump before pump or system piping damage (CT#4)</span>. If not secured, the pump fails and a LOCA outside containment results. Scenario terminates when 22 charging pump is secured (by operator action, or when it trips ~7 minutes after cavitation begins).</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (E-O-H):</strong> <span class="hi-exam">Manually start at least one RHR pump prior to transition out of EOP-TRIP-1.</span> <em>Basis:</em> Failure to manually start at least one low-head ECCS pump under the postulated conditions constitutes "mis-operation or incorrect crew performance which leads to degraded ... capacity." This is a critical task because of the LBLOCA which occurs and low-head ECCS is required. <span class="hi-exam">Window is event-driven — start a RHR pump before transitioning out of TRIP-1.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (E-O-E):</strong> <span class="hi-exam">Manually actuate at least the minimum required complement of containment cooling equipment before exiting TRIP-1.</span> <em>Basis:</em> Failure to manually actuate the minimum required complement of containment cooling equipment under the postulated conditions constitutes a "demonstrated inability by the crew to recognize a failure/incorrect auto actuation of an ESF system or component." Failure to manually actuate containment spray represents a "demonstrated inability of the crew to effectively direct/manipulate ESF controls that would lead to a violation of the facility license condition." <span class="hi-exam">Window is event-driven — actuate before exiting TRIP-1.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#3 (ES-1.3-A):</strong> <span class="hi-exam">Transfer to Cold Leg Recirculation such that at least one train of ECCS is in operation in the recirculation mode</span> within the following time frames, measured from the RWST Lo level alarm: <span class="hi-exam">close 2SJ69 within 3.7 minutes; stop one Containment Spray pump within 5.5 minutes; complete switchover (including restarting ECCS pumps if stopped on RWST Lo-Lo level) within 11.2 minutes</span>. <em>Basis:</em> Failure to establish cold leg recirculation within the time frame specified in the FSAR is a "demonstrated inability of the crew to effectively direct/manipulate ESF controls that would lead to a violation of the facility license condition." <span class="hi-exam">Time-critical — three time windows referenced to the RWST Lo level alarm.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#4:</strong> <span class="hi-exam">Trip the cavitating Charging Pump prior to pump/system piping damage.</span> <em>Basis:</em> Failure to trip a cavitating charging pump during the transfer to cold leg recirculation when indications of cavitation are present leads to the possibility of system damage and the advent of a loss of coolant outside the containment building. <span class="hi-exam">Window is event-driven — secure 22 charging pump before pump/piping damage (it trips ~7 minutes after cavitation begins if not secured).</span></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.LOAD-0001 — Rapid Load Reduction]] (Stator Water main turbine runback; auto rod control fails — rods to manual, emergency borate via [[S2.OP-SO.CVC-0008 — Rapid Boration]] if RIL Lo-Lo) → [[AB.STM-0001 — Excessive Steam Flow]] (21 MS10 fails ~33% open — take manual control and shut) → false SI signal, reactor auto-trips → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — immediate actions from memory; 2C 4KV vital bus loads to EDG; low-head ECCS fails to auto start → <strong>CT#1</strong>: manually start ≥ 1 RHR pump; Containment Spray fails to auto actuate → <strong>CT#2</strong>: manually initiate Phase B/Spray and start 21/22 CS pumps before exiting TRIP-1; initiate MSLI, stop RCPs) → LBLOCA confirmed, containment radiation → <span class="hi-exam">EOP-LOCA-1</span> (Loss of Reactor or Secondary Coolant) → CFST PURPLE paths: <span class="hi-exam">EOP-FRTS-1</span> (Imminent PTS — RCS cooldown rate / Table A) and <span class="hi-exam">EOP-FRCE-1</span> (Excessive Containment Pressure — Containment Environment PURPLE, &gt; 15 psig; verify CFCUs, RCPs stopped, both CS pumps running, isolations, MSLI) → return to <span class="hi-exam">EOP-LOCA-1</span> → RWST 15.2 ft → <span class="hi-exam">EOP-LOCA-3</span> (Transfer to Cold Leg Recirculation — <strong>CT#3</strong> time-critical switchover windows from RWST Lo alarm: 2SJ69 ≤ 3.7 min, stop a CS pump ≤ 5.5 min, switchover ≤ 11.2 min) → 22 charging pump cavitation during transfer → <strong>CT#4</strong>: trip 22 charging pump before pump/piping damage → terminate. [[EOP-CFST-1 — Critical Safety Function Status Trees]] drive the FRTS-1 and FRCE-1 entries; the STA monitors the status trees once active upon transition out of TRIP-1.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 11-01 NRC ESG-1, Rev. 01 (New issue for 09-01 NRC Exam, modified to SBT format), Form ES-D-1 | <a href="/salem-study-system/exam-pdfs/2012-scenario-01.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[RHR]], [[Containment Spray]], [[CVCS]], [[SECs]], [[4KV]], [[EDGs]], [[CCW]], [[RCS]], [[Main Steam]], [[Main Turbine]], [[Stator Cooling Water]], [[Service Water]], [[Containment]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.STM-0001 — Excessive Steam Flow]], [[S2.OP-SO.CVC-0008 — Rapid Boration]], [[S2.OP-SO.SW-0005 — Service Water System Operation]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2012 NRC Operating Exam]]
