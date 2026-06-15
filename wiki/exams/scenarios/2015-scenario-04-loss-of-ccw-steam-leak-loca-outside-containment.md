---
title: "2015 Scenario 4 — Loss of CCW / Steam Leak Outside Containment / LOCA Outside Containment"
category: exams
status: draft
aliases:
  - 2015 Scenario 4
  - 2015 ESG-4
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 4 — Loss of CCW / Steam Leak Outside Containment / LOCA Outside Containment</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 6 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> Salem Unit 2 in Mode 1 at 100% power, EOL. 1220 MWe. Personnel are in containment investigating a reduced Containment Sump Pump run interval. Unit 1 and Hope Creek at 100% power. No penalty minutes in the last 24 hrs. No primary, secondary, or radwaste evolutions in progress. No Circulating Water / Service Water abnormalities.<br><br>
<strong>Turnover:</strong> The crew will take the watch with Unit 2 at 100% power, EOL. Personnel are in containment to investigate a reduced containment sump pump run interval.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>100' elevation containment airlock exterior door fails to close</li>
<li><span class="hi">22 Component Cooling Water pump trips</span> — 23 CCW pump fails to auto-start</li>
<li><span class="hi">Steam leak outside containment</span> → power reduction → manual reactor trip with MSLI</li>
<li><span class="hi">2 stuck rods post-trip</span> — emergency boration</li>
<li><span class="hi">LOCA outside containment</span> on 22 RHR pump piping (check valve failures) → inadvertent SI</li>
<li><span class="hi">Isolate LOCA outside containment</span> in 22 RHR loop</li>
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
<td style="padding:6px;color:#c8cdd5;">100' elevation containment airlock exterior door fails to close — OHA C-46 PERSONNEL ACCESS DOOR OPEN</td>
<td style="padding:6px;color:#9ca3af;">RO announces OHA C-46 PERSONNEL ACCESS DOOR OPEN. The containment crew (investigating the reduced containment sump pump run interval) reports the leakage source was a leaking CFCU SW drain valve, which has been tightened and capped to isolate the leak, but the 100' airlock exterior door will not fully close (remains ~2 inches open). CRS contacts Maintenance and enters TSAS 3.6.1.1.b and 3.6.1.3.a. A Maintenance Supervisor later reports a small flashlight was blocking the door path, no damage to door or seal, and closes the airlock door. RO reports OHA C-46 has cleared.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">22 CCW pump trips with failure of 23 CCW pump to auto-start — lowering CCW system pressure / CCW alarms</td>
<td style="padding:6px;color:#9ca3af;">Crew responds to lowering CCW system pressure. CRS directs RO/PO to validate the received alarms against ARP guidance; crew manually starts 23 CCW pump to restore system pressure (all CCW alarms clear upon restoration). RO verifies RCP CCW-cooled parameters trending to normal. CRS may refer to S2.OP-AB.CC-0001, Component Cooling System Abnormality, and S2.OP-AB.RCP-0001, Reactor Coolant Pump Abnormality, to verify entry is not required. CRS enters TSAS 3.7.3 based on not having 2 operable CCW loops.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Steam leak outside containment</span> (23 West MSR) — power reduction, then manual reactor trip with MSLI</td>
<td style="padding:6px;color:#9ca3af;">RO reports no indication of an RCS leak. CRS enters S2.OP-AB.STM-0001, Excessive Steam Flow, and directs the AB.STM CAS. CRS directs the PO to lower turbine load (and thereby reactor power) ≤ 100% at a CRS-directed rate; RO initiates boration to maintain Tavg on program. PO reports no MSIV (MS10) or Main Steam Dump malfunction. A small steam leak is reported from the top of the 23 West Moisture Separator Reheater. As the steam leak worsens, CRS briefs and directs the crew to trip the reactor and isolate the steam leak: RO trips the reactor and initiates MSLI; PO confirms steam flows have lowered and MSLI isolated the steam-leak source. RO performs Immediate Actions of EOP-TRIP-1: confirms Rx trip, trips the Main Turbine, reports at least one 4KV vital bus energized, reports SI not initiated and verifies SI not required. CRS/RO verify immediate actions and that SI is not required; CRS transitions to EOP-TRIP-2, Reactor Trip Response.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">2 control rods fail to fully insert post-trip</span> — emergency boration <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">In EOP-TRIP-2: PO reports total AFW flow > 22E4 lbm/hr, stops both SGFPs, and maintains 22E4 lbm/hr total AFW flow until at least one SG NR level is > 9%, then maintains SG NR levels 9-33%. RO reports RCPs in service, Tavg trending to 547°F, and both Rx RTBs open; PO ensures 21-24BF19 and 21-24BF40 shut and shuts 21-24BF22. RO reports 2 control rods have failed to fully insert and <span class="hi-exam">initiates Rapid Boration (CT#1)</span> — starts a BAT, opens 2CV175, shuts 21 and 22 CV160s, and controls charging flow to maintain > 87 gpm. CRS determines 70 minutes of boration flow is required for the 2 stuck-out rods and assigns a crew member to track the 70 minutes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">LOCA outside containment</span> on 22 RHR pump piping (check valve failures) — 24 ECCS Accumulator lo level/pressure, RHR sump pump runs, inadvertent SI</td>
<td style="padding:6px;color:#9ca3af;">After RCS boration is established, RO reports 24 ECCS Accumulator Low Level alarm followed shortly by the Low Pressure alarm. RO checks containment conditions and reports them stable; RO reports PZR level lowering and the RHR sump pump starts. RO raises charging flow to stabilize PZR level but reports PZR level cannot be maintained stable even with elevated charging flow. CRS directs RO to initiate SI based on the EOP-TRIP-2 Continuous Action Summary. RO attempts a manual SI and reports SI will not initiate from Train B; RO initiates SI successfully from Train A. CRS transitions to EOP-TRIP-1; CRS/RO verify TRIP-1 immediate actions complete. RO announces OHA C-34, 22 RHR SUMP OVRFLO. Crew verifies safeguards: PO reports SEC loading and all available equipment started; RO shuts 21 and 22CA330 (reported not shut), reports containment pressure remained < 15 psia, no high steam flow on 2RP4, and all 4KV vital buses energized; RO runs two Switchgear Supply fans and one Switchgear Exhaust fan. RO reports radiation monitor 2R41D in alarm. After verifying LOCA-3 transition criteria are NOT met (LOCA is outside containment — no in-containment rad-monitor LOCA indication, containment pressure < 4 psi, sump level < 46%), CRS diagnoses a LOCA outside containment in the 22 RHR pump room from the alarms and plant conditions.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;">Isolate LOCA outside containment in 22 RHR loop <span class="hi-exam">(CT#2)</span> → transition to LOCA-1</td>
<td style="padding:6px;color:#9ca3af;">CRS transitions to EOP-LOCA-6, LOCA Outside Containment. RO resets SI and Phase A isolation, reports Phase B not actuated, and opens 21 and 22CA330; PO resets all SECs and 230V control centers. RO reports 2RH1 and 2RH2 shut. To isolate the 22 RHR-loop leakage path <span class="hi-exam">(CT#2)</span>, RO shuts 21RH19 and 22RH19, reports 2RH26 shut with RCS pressure not rising, verifies 21RH29/22RH29 in auto; PO removes the lockout from 21SJ49 and 22SJ49, and RO cycles 21SJ49 (shut then open) and shuts 22SJ49. CRS transitions to EOP-LOCA-1, Loss of Reactor Coolant. Scenario terminates when the transition to LOCA-1 is announced.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (TRIP-2) (FSAR 4.2.3.2.1):</strong> Initiate Rapid Boration for two or more control rods not fully inserted following a Reactor Trip prior to exiting TRIP-2. <em>Basis:</em> Core Shutdown Margin (SDM) is only assured with a maximum of one control rod not fully inserted. With two or more control rods not inserted, the shutdown reactivity margin must be made up through emergency boration to account for the reactivity of the stuck rods. <span class="hi-exam">Not time-critical</span> — must be performed prior to exiting EOP-TRIP-2.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-32):</strong> Isolate LOCA outside containment before transition out of LOCA-6. <em>Basis:</em> Failure to isolate a LOCA outside containment (that can be isolated) degrades containment integrity beyond the level of degradation irreparably introduced by the postulated conditions. It also constitutes misoperation or incorrect crew performance that fails to prevent "degradation of any barrier to fission product release" and eventually leads to "...degraded emergency core cooling (ECCS)...capacity." <span class="hi-exam">Not time-critical</span> — must be performed before transition out of EOP-LOCA-6.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">100' containment airlock door fails to close (TSAS 3.6.1.1.b / 3.6.1.3.a — Maintenance clears the obstruction) → 22 CCW pump trips, 23 CCW pump fails to auto-start → manually start 23 CCW pump, restore CCW pressure; [[AB.CC-0001 — Loss of Component Cooling Water]] / [[AB.RCP-0001 — RCP Abnormality]] referenced to verify entry not required (TSAS 3.7.3) → [[AB.STM-0001 — Excessive Steam Flow]] (steam leak outside containment at 23 West MSR — AB.STM CAS, power reduction on boration) → steam leak worsens → manual reactor trip + MSLI to isolate the leak → <span class="hi-exam">EOP-TRIP-1</span> (immediate actions; SI not initiated/not required) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response; restore AFW, secure SGFPs; <strong>2 rods fail to fully insert → Rapid Boration = CT#1</strong>) → LOCA outside containment on 22 RHR piping (24 ECCS Accumulator lo level/pressure, RHR sump pump runs, PZR level cannot be held) → manual <span class="hi-exam">Inadvertent SI</span> per TRIP-2 CAS (SI fails from Train B; succeeds from Train A) → return to <span class="hi-exam">EOP-TRIP-1</span> → verify LOCA-3 transition criteria NOT met (leak is outside containment) and 2R41D rad monitor in alarm → <span class="hi-exam">EOP-LOCA-6</span> (LOCA Outside Containment; <strong>isolate the 22 RHR-loop leakage path = CT#2</strong>) → <span class="hi-exam">EOP-LOCA-1</span> (Loss of Reactor Coolant) → terminate. [[EOP-CFST-1 — Critical Safety Function Status Trees]] are monitored by the STA throughout; no CFST RED/ORANGE path entry is required.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 14-01 NRC ESG-4, Rev. 00 (New Issue for 14-01 NRC Exam) | <a href="/salem-study-system/exam-pdfs/2015-scenario-04.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CCW]], [[RCPs]], [[RCS]], [[ECCS]], [[RHR]], [[Main Steam]], [[Control Rod Drive]], [[CVCS]], [[AFW]], [[Containment]], [[Radiation Monitoring]], [[Pressurizer & PRT]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.CC-0001 — Loss of Component Cooling Water]], [[AB.RCP-0001 — RCP Abnormality]], [[AB.STM-0001 — Excessive Steam Flow]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2015 NRC Operating Exam]]
