---
title: "2016 Scenario 3 — PZR Pressure Channel Fails High / Dropped Rod / 21 SG Steam Leak → Rupture in Containment / All MSIVs Fail / CS Pumps Fail to Auto-Start"
category: exams
status: draft
aliases:
  - 2016 Scenario 3
  - 2016 ESG-3
  - 15-01 NRC ESG-3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — PZR Pressure Channel Fails High / Dropped Rod / 21 SG Steam Leak → Rupture in Containment / All MSIVs Fail / CS Pumps Fail to Auto-Start</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in MODE 1 at 1x10<sup>-8</sup> Amps during a plant startup, BOL. Control Bank D at 130 steps withdrawn; core burnup 500 EFPH. 21 SGFP is in service and 22 SGFP is O/S (steam supply valves shut). Steam dumps are in MS Pressure Control — Auto at 1000 psig. 25 CFCU is CIT for breaker replacement. 23 charging pump is CIT for emergent maintenance (expected return in 2 hours); 21 charging pump in service. Most-limiting LCO: 3.6.2.3 for 25 CFCU action a expires in 165 hours. S2.OP-IO.ZZ-0003, Hot Standby to Minimum Load, complete up to Section 4.3, Power Operation. Unit 1 and Hope Creek at 100% power. No discharges in progress.<br><br>
<strong>Turnover:</strong> The crew takes the watch with the unit stable at 1x10<sup>-8</sup> Amps during a plant startup, BOL. 21 SGFP is in service and 22 SGFP is O/S. Steam dumps are in MS Pressure Control — Auto at 1000 psig. 25 CFCU is CIT for maintenance. 23 charging pump is CIT for emergent maintenance. The crew will be instructed to raise power to 2%.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Power ascension to 2% using Main Steam Dumps and control rods (RO adjusts rods to maintain Tave on program; raises steam dump demand).</li>
<li><span class="hi">Controlling PZR Pressure instrument (Channel I, PT-455) fails high</span> (final value 2500 psig) — PZR heaters de-energized and both PZR Spray valves drive fully open; crew enters AB.PZR-0001, places Master Pressure Controller in manual, lowers demand to close sprays, swaps to Channel III for control, shuts 2PR6, removes Channel I from service per S2.OP-SO.RPS-0003; CRS enters TSAS 3.3.1.1 Action 6, 3.3.2.1.b Action 19*, 3.4.5.b, and 3.2.5.</li>
<li><span class="hi">Dropped control rod</span> — Shutdown Bank rod 1S A3 drops fully into the core; crew enters AB.ROD-0002, identifies Rx is subcritical as a result of the dropped rod, and inserts all control and shutdown rods in manual.</li>
<li><span class="hi">21 SG steam leak in containment</span> — OHA C-38 CFCU LK DET HI followed by C-30 CFCU LK DET HI-HI; rising containment pressure, lowering Tavg, rising steam flows on all loops, steam dump demand lowering; crew enters AB.STM-0001, Excessive Steam Flow.</li>
<li><span class="hi">21 SG steam leak escalates to rupture; manual reactor trip and SI</span> — leak ramps to 100% over 5 minutes after Rx trip; CRS directs trip; auto and manual MSLI fail to actuate any MSIV (RP0279A/B), auto SI fails to actuate (RP0274A/B); RO manually initiates SI; crew transitions through TRIP-1 immediate actions.</li>
<li><span class="hi">21 AFW pump trips during TRIP-1 (5 min after Rx trip) and Containment Spray pumps fail to auto-start on hi-hi pressure</span> (CT#1) — RO blocks 2A and 2C SECs, PO resets 2A and 2C SECs, RO manually starts 21 and 22 CS pumps before a containment CSF red path challenge develops.</li>
<li><span class="hi">EOP-LOSC-1 → EOP-LOSC-2 with all SGs faulted; RCS cooldown rate &gt;100°F/hr requires AFW throttling (CT#2)</span> — PO reduces AFW flow to each SG to no less than 1.0E4 lbm/hr to minimize cooldown; STA reports RED path on Heat Sink, CRS transitions briefly to FRHS-1, verifies operator action was the cause and returns to procedure in effect; SI/Phase A/Phase B reset; CS pumps stopped when containment &lt;13 psig; local operators successfully shut 23MS167, pressure rise in 23 SG drives transition back to LOSC-1; scenario terminates after the transition to LOSC-1 is announced.</li>
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
<td style="padding:6px;color:#c8cdd5;">Power ascension to 2%</td>
<td style="padding:6px;color:#9ca3af;">CRS directs power ascension using Main Steam Dumps and control rods. PO raises steam dump demand. RO adjusts control rods to maintain Tave on program. RO announces when POAH is observed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Controlling PZR Pressure instrument (Channel I, PT-455) fails HIGH</td>
<td style="padding:6px;color:#9ca3af;">RO announces unexpected OHA D-8 RC Press HI and E-42 2PR1 ½ Trip. RO determines actual pressure is not high and reports spray valves open; recommends placing Master Pressure Controller in manual. CRS directs RO to place Master Pressure Controller in manual. RO takes manual control of Master Pressure Controller and lowers demand (increase pressure) to close sprays. CRS enters S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction, directs initiation of AB.PZR CAS and gives band for control of PZR pressure. RO identifies PZR Press Channel I failed high, selects Channel III for control, matches Master Pressure Controller demand to current pressure and returns Master Pressure Controller to AUTO. RO shuts 2PR6 (PORV Stop Valve). CRS directs WCC to remove power from 2PR6 within one hour of the PZR Pressure Channel I instrument failure IAW Tech Specs. CRS directs PO to initiate removing failed channel from service and contact I&amp;C for support IAW S2.OP-SO.RPS-0003. PO checks that tripping associated bistables will not result in an ESF or RPS actuation; verifies that Channel III is selected for Master Pressure Control; selects PZR Pressure recorder to a channel other than I. CRS enters TSAS 3.3.1.1 Action 6, 3.3.2.1.b Action 19*, 3.4.5.b, and 3.2.5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Dropped control rod (Shutdown Bank rod 1S A3)</td>
<td style="padding:6px;color:#9ca3af;">RO reports unexpected OHA E-48 ROD BOTTOM and reports Shutdown Bank rod 1S A3 rod bottom light is illuminated. CRS enters S2.OP-AB.ROD-0002, Dropped Rod. RO reports control rods are in manual. PO reports Main Turbine is S/D. RO reports the reactor is subcritical as a result of the dropped rod. CRS directs RO to insert all control and shutdown bank rods. RO initiates insertion of control rods in manual.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SG steam leak in containment</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO announces OHA C-38 CFCU LK DET HI as unexpected, and shortly after, OHA C-30 CFCU LK DET HI-HI as well. PO refers to ARP for OHA C-38 and C-30. PO reports indications of a steam leak inside containment including: containment pressure rising; Tavg slowly lowering; rising steam flows on all loops; steam dump demand lowering. CRS enters S2.OP-AB.STM-0001, Excessive Steam Flow, directs monitoring of AB.STM CAS, and notifies Emergency Services of the steam leak. PO reports that the Main Turbine is not latched. PO reports no indication of MS10 or steam dump valves malfunction. RO reports no indication of a SG Safety Valve partially open or leaking. RO reports Rx power and RCS temperature are NOT stable. CRS directs the RO to trip the Rx (a MSLI is required to attempt to isolate the steam leak in containment — the CRS can use the CAS of AB.STM for direction, or will use Step 11 in TRIP-1 when containment pressure exceeds 15 psig).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SG steam leak escalates to rupture; all MSIVs fail to shut; manual SI required</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO trips the Rx and confirms the Rx trip. If using AB.STM CAS, RO attempts a MSLI and reports it did not actuate; RO reports the steam leak is NOT isolated. RO continues Immediate Actions of TRIP-1: reports the Main Turbine is tripped; reports all 4KV vital buses are energized; reports a demand for Safety Injection is present and Safety Injection has NOT actuated (auto SI fails); RO manually initiates Safety Injection. With all SGs faulted, AFW flow should not be isolated to any SG. PO reports SEC loading is not complete; all available equipment started; 21 and 22 AFW pumps are running; receives permission to throttle total AFW flow to no less than 22E4 lbm/hr. PO reports valve groups in Table B are in Safeguards position. RO reports 21 and 22CA330 are shut.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 AFW pump trip; Containment Spray pumps fail to auto-start (CT#1)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports when 21 AFW pump trips and adjusts AFW flow if required. RO reports containment pressure has not remained less than 15 psig. RO initiates Phase B and Spray actuation. RO reports neither Containment Spray pump has started. RO blocks 2A and 2C SECs. PO resets 2A and 2C SECs. RO starts 21 and 22 CS pumps. <strong>CT#1 (CT-3):</strong> Manually start at least one Containment Spray pump before a red path challenge develops on the containment CSF. RO reports MSLI has failed to close any MSIV. RO stops all RCPs. CRS dispatches operators to place valves from Table D (locally close MSIVs) in safeguards position if not previously performed. PO reports all 4KV vital buses are energized. RO reports control room ventilation is in Accident Pressurized mode. RO reports 2 switchgear supply and 1 exhaust fan are running, 2 CCW pumps running, ECCS flow as expected for current RCS pressure. PO maintains total AFW flow greater than 22E4 lbm/hr until at least one SG NR level is &gt;15% (adverse), then maintains SG NR level 19-33%. RO reports no RCPs are running, RCS Tcolds are dropping; PO reports no dumping steam; RO reports MSLI failed to isolate any MSIV; both RTBs are open; both PZR PORVs are closed; 2PR6 is shut and 2PR7 is open. CRS dispatches operator to restore power to 2PR6 if deenergized. RO maintains seal injection flow to all RCPs. PO reports all SG pressures are dropping in an uncontrolled manner or completely depressurized with MSLI failure. CRS transitions to EOP-LOSC-1, Loss of Secondary Coolant. (CFSTs are in effect when transition out of TRIP-1 occurs; STA reports to control room 10 minutes after being summoned via page to monitor CFSTs.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">All SGs faulted → EOP-LOSC-2; RCS cooldown rate &gt;100°F/hr (CT#2); local MSIV success → return to LOSC-1</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports MSLI failed to shut any MSIV, all MS7 and MS18 valves are shut, and action has been directed to locally shut MSIVs. PO reports all SG pressures are dropping in an uncontrolled manner. CRS transitions to EOP-LOSC-2, Multiple Steam Generator Depressurization. PO reports all valves in Table A are shut except for all MSIVs. CRS dispatches operators, if not previously performed, to locally shut valves in Table A one loop at a time. CRS determines 23 AFW pump in service and either stops 23 AFW pump or leaves it in service (may be left in service if necessary to maintain minimum AFW flow to keep SG tubes wet). If required, PO lowers 23 AFW pump speed to minimum, trips then stops 23 AFW pump; CRS dispatches operator to shut 21 and 23MS45 steam supplies to 23 AFW pump. RO reports RCS cooldown rate is &gt;100°F/hr. PO reduces AFW flow to each SG to no less than 1.0E4 lbm/hr. <strong>CT#2 (CT-33):</strong> Control the AFW rate to not less than 1E4 lbm/hr to minimize the cooldown rate. When STA reports RED path on Heat Sink, CRS transitions to FRHS-1, verifies operator action was cause of RED path, and returns to procedure in effect. RO reports RCS Thots are dropping; RCS pressure trend; cooldown is in progress or RCPs are secured; both PZR PORVs are closed; 2PR6 is shut, and 2PR7 is open. RO resets SI, Phase A, and Phase B; opens 21 and 22CA330. PO reports all SECs are reset; all 230V Control Centers reset. RO resets SGBD Sample Isolation Bypass and opens 21-24SS94s; CRS directs Chemistry to sample SGs for activity and boron. PO reports no indication of any SGTR. RO reports RHR pumps running with suction from RWST and no discharge flow; RCS pressure stable or rising and stops both RHR pumps. RO reports both CS pumps are running; reports containment pressure. If/when containment pressure is &lt;13 psig, RO resets Spray actuation, stops both CS pumps, and shuts 21 and 22CS2 CS pump discharge valves. RO reports RWST lo level alarm has not actuated. RO reports RCS Thots status; if &lt;375°F, PO removes lockouts for 21-24SJ54s and RO shuts 21-24SJ54s. RO reports subcooling is &gt;0°F, RCS pressure is stable or rising and: realigns charging pump through normal charging line and adjusts 2CV55 to maintain PZR level &gt;33%. Local operators successfully shut 23MS167. PO reports indication of 23MS167 being shut. CRS determines pressure rise in 23 SG requires transition to LOSC-1 and transitions to LOSC-1. Scenario terminates when the transition to LOSC-1 is announced.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-3):</strong> Manually actuate at least one Containment Spray pump before an extreme challenge develops to the containment CSF. <em>Basis:</em> Failure to manually actuate the minimum required complement of containment cooling equipment under the postulated conditions demonstrates the inability of the crew to "recognize a failure or an incorrect automatic actuation of an ESF system or component." <em>Measurable performance standard:</em> after both Containment Spray pumps fail to auto-start on the hi-hi containment pressure signal, RO blocks 2A and 2C SECs, PO resets 2A and 2C SECs, and RO manually starts at least one of 21 or 22 CS pump before a red path challenge develops on the containment CSF.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-33):</strong> Control the AFW rate to not less than 1E4 lbm/hr to minimize the cooldown rate. <em>Basis:</em> Failure to control the AFW flow rate to the SGs leads to an unnecessary and avoidable severe challenge to the integrity CSF. Failure to perform the critical task increases the challenges to the subcriticality and the containment CSFs beyond those irreparably introduced by the postulated plant conditions. Thus, failure to perform the critical task constitutes a demonstrated inability by the crew to "take one or more actions that would prevent a challenge to plant safety." It also fails to prevent "a significant reduction of safety margin beyond that irreparably introduced by the scenario." <em>Measurable performance standard:</em> with all SGs faulted and RCS cooldown rate &gt;100°F/hr, PO reduces AFW flow to each SG to no less than 1.0E4 lbm/hr to minimize the cooldown rate.</span><br><br>
<span style="color:#c8cdd5;font-size:11px;color:#6b7280;"><em>CT numbers in parentheses are the corresponding Westinghouse ERG Rev. 2-based Critical Task procedure WCAP-17711-NP.</em></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-IO.ZZ-0003 power ascension → S2.OP-AB.PZR-0001 (PT-455 Channel I fails high; manual control, swap to Channel III, 2PR6 shut, channel removed per S2.OP-SO.RPS-0003; TSAS 3.3.1.1 Action 6, 3.3.2.1.b Action 19*, 3.4.5.b, 3.2.5) → S2.OP-AB.ROD-0002 (Shutdown Bank rod 1S A3 dropped → Rx subcritical → manual rod insertion of all control and shutdown rods) → S2.OP-AB.STM-0001 (containment leak detector hi/hi-hi; rising containment pressure, rising steam flows, steam dump demand lowering) → manual Rx trip → <span class="hi-exam">EOP-TRIP-1</span> (auto/manual MSLI fails on all 4 MSIVs, auto SI fails — RO manually initiates SI; 21 AFW pump trips after 5 min; both CS pumps fail to auto-start on hi-hi containment pressure → CT#1 RO blocks 2A/2C SECs and manually starts 21 and 22 CS pumps before red-path challenge; CFSTs in effect on transition out of TRIP-1) → <span class="hi-exam">EOP-LOSC-1</span> (Loss of Secondary Coolant — all SGs faulted) → <span class="hi-exam">EOP-LOSC-2</span> (Multiple Steam Generator Depressurization — RCS cooldown rate &gt;100°F/hr → CT#2 PO reduces AFW flow to each SG to no less than 1.0E4 lbm/hr; STA RED path on Heat Sink → brief transition to <span class="hi-exam">EOP-FRHS-1</span> verifies operator action caused the RED path and returns to procedure in effect) → local operators shut 23MS167; pressure rise in 23 SG → CRS transitions back to <span class="hi-exam">EOP-LOSC-1</span> → scenario terminates when transition to LOSC-1 is announced.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 15-01 NRC ESG-3 (Rev 00, 8-11-16) | <a href="/salem-study-system/exam-pdfs/2016-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>

</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[Pressurizer & PRT]], [[Control Rod Drive]], [[RCS]], [[RCPs]], [[ECCS]], [[AFW]], [[SECs]], [[Steam Generator & Blowdown]], [[Main Steam]], [[Steam Dumps]], [[Containment Spray]], [[Containment]], [[CFCUs]], [[RPS/SSPS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.ROD-0002 — Dropped Rod]], [[AB.STM-0001 — Excessive Steam Flow]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]], [[TS 3/4.4 — Reactor Coolant System]], [[TS 3/4.2 — Power Distribution]], [[TS 3/4.6 — Containment]]
- Related exam: [[2016 NRC Operating Exam]]
