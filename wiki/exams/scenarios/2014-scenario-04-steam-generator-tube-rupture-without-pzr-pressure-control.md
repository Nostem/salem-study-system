---
title: "2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control"
category: exams
status: draft
aliases:
  - 2014 Scenario 4
  - 2014 ESG-5
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> 75% power MOL. Power was reduced 30 minutes ago due to 21 SGFP Governor problems. PZR PORV 2PR1 was declared inoperable 3 hours ago due to intermittent control circuit anomalies, and the PORV Block valve 2PR6 was shut and deenergized to comply with TSAS 3.4.5 action b.<br><br>
<strong>Turnover:</strong> Maintain current power.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Charging Master Flow Controller fails low</li>
<li>Non-controlling PZR level Channel III fails low (TS)</li>
<li>90 gpd steam generator tube leak on 23 SG (TS)</li>
<li>Down power (rapid load reduction to &lt;50%)</li>
<li><span class="hi">23 SG tube rupture</span> — reactor trip and Safety Injection</li>
<li>22 AFW pump pressure override failure — isolate AFW to ruptured 23 SG</li>
<li><span class="hi">23 RCP trip during cooldown</span> — loss of normal spray; SI pumps unavailable</li>
<li><span class="hi">PZR PORV 2PR2 fails shut</span> — SGTR depressurization unavailable, transition to SGTR-5</li>
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
<td style="padding:6px;color:#c8cdd5;">Charging Master Flow Controller (MFC) auto setpoint fails low — output ramps from current position to 0% demand over ~5 minutes; charging flow lowering with PZR level</td>
<td style="padding:6px;color:#9ca3af;">RO diagnoses the MFC output lowering and takes the Master Flow Controller to manual; the controller output stabilizes but cannot be raised. RO then places 23 charging pump speed controller in manual and raises charging flow to restore PZR level to program. CRS enters S2.OP-AB.CVC-0001, Loss of Charging, based on the reduction in charging flow, and directs the CAS. CRS determines the MFC will not be returned to auto and assigns responsibility/band for manual PZR level control.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Non-controlling PZR level Channel III fails low (silent failure — no audible alarm and no letdown isolation, since control/alarm functions come off the selected channels LC460D and LC459F)</td>
<td style="padding:6px;color:#9ca3af;">RO reports PZR level Channel III failed low and confirms operable channels are selected for control, alarm, and recorder. CRS directs removal of PZR level Channel III from service and enters TSAS 3.3.1.1 action 6 for the failed channel.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">90 gpd steam generator tube leak on 23 SG — OHA A-6 RMS HI RAD or TRBL; 2R53C, then 2R19C/2R15 radiation rising</td>
<td style="padding:6px;color:#9ca3af;">RO announces the unexpected rad-monitor alarm; crew identifies 23 SG as the affected generator. CRS enters S2.OP-AB.SG-0001, Steam Generator Tube Leak (directly, or via S2.OP-AB.RAD-0001), and directs the CAS to quantify the leak and minimize spread of contamination (raise 23 MS10 setpoint, close 23GB4/23MS7/23MS18, re-align SG blowdown and MS sampling to the Waste System). Crew identifies the leak meets CAS Action Level 3 (leak rate &ge; 75 gpd AND rate of change &ge; 30 gpd/hr), requiring power &lt;50% within 1 hour, and enters TSAS 3.4.7.2.c; Tech Spec 3.4.7.2 applies once the leak exceeds 150 gpd.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Down power — rapid load reduction to satisfy the AB.SG Action Level 3 requirement</td>
<td style="padding:6px;color:#9ca3af;">RO calculates the boron addition required for the power reduction to 50%. CRS orders a power reduction at a rate that ensures power is &lt;50% within one hour and enters S2.OP-AB.LOAD-0001, Rapid Load Reduction. RO initiates RCS boration at the directed rate and announces expected/actual rod movement.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23 SG tube rupture</span> — leak rate rises sharply, 23 SG NR level rising</td>
<td style="padding:6px;color:#9ca3af;">Once the power reduction is underway, the 23 SG tube ruptures. RO reports indications of the worsening tube leak; CRS determines CAS actions for rising SG NR level (CAS 1.0) are met and <span class="hi-exam">directs a reactor trip and Safety Injection.</span> RO trips the reactor, confirms the trip, and initiates SI, then performs the EOP-TRIP-1 immediate actions (verify Rx tripped/confirmed, back up Main Turbine trip, verify offsite power to at least one vital bus, verify SI initiation).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;">22 AFW pump pressure override circuit failure — 22 AFW pump runs but supplies no flow; unmonitored release through 23 AFW pump TDAFW steam discharge while 23MS45 open <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">PO reports 22 AFW pump is running but not supplying flow despite adequate discharge pressure; depressing the Pressure Override Defeat has no effect. PO throttles AFW and <span class="hi-exam">isolates AFW flow to the ruptured 23 SG (closes 23AF11 and 23AF21)</span> while maintaining total AFW flow &gt;22E4 lbm/hr. CRS dispatches an operator to shut 23MS45 to terminate the radioactive release through the 23 AFW pump turbine discharge and enters TSAS 3.7.1.3 for 23 AFW pump. Crew completes TRIP-1 diagnostics, confirms 23 SG ruptured on NR level, and CRS transitions to EOP-SGTR-1; with 23MS45 shut the crew secures and re-stages 23 AFW pump as needed, isolating the ruptured SG from the intact SGs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">23 RCP trips during the RCS cooldown</span> (when hottest CET reaches ~510°F) — loss of normal pressurizer spray; SI pumps unavailable <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">During the SGTR-1 cooldown to the target temperature (~503°F), 23 RCP trips, causing a loss of normal spray. RO reports the 23 RCP trip and shuts charging pump mini-flows when RCS pressure lowers to 1500 psig. PO commences/continues the RCS cooldown using Steam Dumps in MS Pressure Control–Manual and <span class="hi-exam">stabilizes the hottest CET below the 503°F target (CT#2)</span>, maintaining 23 SG pressure stable/rising at least 250 psia above intact SG pressure. 21 SI pump will not start and 22 SI pump trips if started — no SI pumps are available.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PZR PORV 2PR2 fails to open</span> — RCS depressurization for the SGTR is unavailable (2PR1 inoperable, 2PR6 C/T, normal spray lost from 23 RCP trip)</td>
<td style="padding:6px;color:#9ca3af;">At the SGTR-1 RCS depressurization step, the crew attempts to depressurize with the only available PORV (2PR2) because normal spray is lost and PZR PORV 2PR1 is unavailable. RO reports 2PR2 will not open. With no PORV available to depressurize and no SI pumps running, <span class="hi-exam">CRS transitions to EOP-SGTR-5, SGTR without Pressurizer Pressure Control.</span> The scenario terminates after the transition to SGTR-5 is announced.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-18):</strong> <span class="hi-exam">Isolate AFW to the ruptured SG within 10 minutes of entry into TRIP-1, and subsequently close 23MS167, 23MS18, 23MS7 and 23GB4 before a transition to SGTR-3 is required.</span> <em>Basis:</em> Failure to isolate the ruptured SG causes a loss of differential pressure between the ruptured SG and the intact SGs. The fact that the crew allows the differential pressure to dissipate and, as a result, are then forced to transition to a contingency ERG constitutes an incorrect performance that "necessitates the crew taking compensating action that would complicate the event mitigation strategy." <span class="hi-exam">Time-critical: isolate AFW to the ruptured SG within 10 minutes of TRIP-1 entry</span> (the subsequent valve closures must be completed before a transition to SGTR-3 would otherwise be required).</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-19):</strong> <span class="hi-exam">Establish/maintain an RCS temperature so that a transition from E-3 (SGTR-1) does not occur because the RCS temperature is either too high to maintain minimum required subcooling, OR below the RCS temperature that causes a RED path or a PURPLE challenge to the subcriticality and/or integrity CSF.</span> <em>Basis:</em> Failure to establish and maintain the correct RCS temperature during a SGTR leads to a transition from E-3 to a contingency ERG. This failure constitutes an incorrect performance that "necessitates the crew taking compensating action that would complicate the event mitigation strategy." <span class="hi-exam">Window is event-driven — maintain RCS temperature within the band (here, hottest CET below the ~503°F target while staying above the subcriticality/integrity RED/PURPLE thresholds), not a clock-based time-critical task.</span></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.CVC-0001 — Loss of Charging]] (Charging Master Flow Controller fails low — manual MFC/charging pump control, restore PZR level, enter TSAS 3.3.1.1 action 6 for the failed PZR level Channel III) → [[AB.SG-0001 — Steam Generator Tube Leak]] (90 gpd SGTL on 23 SG — quantify leak, minimize contamination spread; CAS Action Level 3 requires power &lt;50% within 1 hour, enter TSAS 3.4.7.2.c) → [[AB.LOAD-0001 — Rapid Load Reduction]] (rapid down-power via boration/rod insertion to satisfy Action Level 3) → 23 SG tube ruptures, CAS 1.0 met → CRS directs reactor trip and Safety Injection → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — immediate actions; 22 AFW pump pressure override fails so it supplies no flow → <strong>CT#1</strong>: isolate AFW to ruptured 23 SG within 10 minutes, shut 23MS45 to terminate the TDAFW-discharge release) → 23 SG confirmed ruptured on NR level → transition to <span class="hi-exam">EOP-SGTR-1</span> (Steam Generator Tube Rupture — isolate ruptured SG, cool down to target temperature) → during the cooldown 23 RCP trips (loss of normal spray) and no SI pumps are available → <strong>CT#2</strong>: maintain RCS temperature in the required band (hottest CET below ~503°F) so a transition from SGTR-1 is not forced → at the RCS depressurization step, PZR PORV 2PR2 fails to open (2PR1 inoperable, 2PR6 C/T, normal spray lost) so depressurization is unavailable → CRS transitions to <span class="hi-exam">EOP-SGTR-5</span> (SGTR without Pressurizer Pressure Control) → terminate after the SGTR-5 transition is announced. The [[EOP-CFST-1 — Critical Safety Function Status Trees]] are monitored throughout the EOP flow; CT#2 is framed around preventing a RED/PURPLE subcriticality or RCS integrity CSF challenge, but no front-line FRP is entered in this scenario.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 13-01 NRC ESG-5, Rev. 00 (New Issue for 13-01 NRC Exam), Form ES-D-1 | <a href="/salem-study-system/exam-pdfs/2014-scenario-04.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Pressurizer & PRT]], [[Steam Generator & Blowdown]], [[Main Steam]], [[AFW]], [[RCPs]], [[ECCS]], [[Radiation Monitoring]], [[RCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-SGTR-5 — SGTR without Pressurizer Pressure Control]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2014 NRC Operating Exam]]
