---
title: "2012 Scenario 2 — SGTR / Loss of Offsite Power / SGTR without PZR Pressure Control"
category: exams
status: draft
aliases:
  - 2012 Scenario 2
  - 2012 ESG-2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 2 — SGTR / Loss of Offsite Power / SGTR without PZR Pressure Control</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 6 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> 75% power, MOL. Power was reduced 30 minutes ago due to a short duration oscillation on 21 SGFP speed. PZR PORV 2PR1 was declared inoperable 3 hours ago due to control circuit problems, and its motor operated block valve 2PR6 is shut and power is removed from its breaker to comply with TSAS 3.4.5 action b.<br><br>
<strong>Turnover:</strong> Maintain current power. (Crew takes the watch at 75% power, MOL; power was reduced 30 minutes ago as a precaution due to a short duration speed oscillation on 21 SGFP — both SGFPs remain in service. PZR PORV 2PR1 is inoperable and its block valve 2PR6 is shut and deenergized to comply with TSAS 3.4.5 action b.)
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>22 RC Loop Tavg channel fails high (TS)</li>
<li>500 gpd steam generator tube leak (SGTL) on 23 SG (TS)</li>
<li>Power reduction to &lt;50% (CAS Action Level 3)</li>
<li><span class="hi">Steam Generator Tube Rupture (SGTR) on 23 SG — reactor trip and Safety Injection; 22 AFW pump pressure-override fails (no flow to 21/22 SGs)</span></li>
<li><span class="hi">Loss of offsite power during the SGTR RCS cooldown — restart safeguards loads, re-establish cooldown via the SG atmospheric reliefs</span></li>
<li><span class="hi">Only available PZR PORV 2PR2 fails to open — SGTR without RCS pressure control; both SI pumps unavailable</span></li>
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
<td style="padding:6px;color:#c8cdd5;">22 RC Loop Tavg channel fails high — control rods insert at 72 spm</td>
<td style="padding:6px;color:#9ca3af;">RO reports control rods inserting at 72 spm, verifies no runback in progress, and places control rods in manual. CRS enters S2.OP-AB.ROD-0003, Continuous Rod Motion. RO adjusts rods in manual to control Tavg within 1.5° of program, confirms 22 loop Tavg failed high with no dilution in progress, and restores PZR level using charging. CRS removes the failed channel from service and identifies the applicable Tech Specs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">500 gpd steam generator tube leak on 23 SG — OHA A-6 RMS HI RAD OR TRBL, 2R53C in alarm and rising</td>
<td style="padding:6px;color:#9ca3af;">RO announces OHA A-6 and reports 2R53C in alarm. CRS contacts Radiation Protection to perform the primary-to-secondary leak rate response and enters S2.OP-AB.SG-0001, Steam Generator Tube Leak (or S2.OP-AB.RAD-0001 first). PO trends 2R19C and 2R53C; Chemistry samples 23 SG to confirm and quantify the leak. PO identifies 23 as the affected SG and isolates SG blowdown / MS sampling to the Waste System. CRS dispatches an operator to shut 23MS45 and enters TSAS 3.7.1.3 for 23 AFW pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">CAS Action Level 3 reached — power reduction to &lt;50% required within 1 hour</td>
<td style="padding:6px;color:#9ca3af;">CRS determines CAS Action Level 3 is present per Step 6.2.A (leak rate ≥ 75 gpd AND rate of change ≥ 30 gpd/hr), requiring power &lt;50% within 1 hour and shutdown to Mode 3 within the next 2 hours; CRS enters TSAS 3.4.7.2.c (leak &gt; 150 gpd). RO calculates the boron addition for the power reduction. CRS enters S2.OP-AB.LOAD-0001, Rapid Load Reduction; RO borates and uses manual rod control while PO reduces Main Turbine load.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Steam Generator Tube Rupture on 23 SG — rising leak rate; reactor trip and Safety Injection per CAS</span> <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">After the power reduction is initiated the affected tube ruptures; OHA A-6 reflashes as 2R15, 2R19C, and 2R41D alarm. CRS determines the CAS for rising SG NR level is met and directs a reactor trip and SI. RO trips the reactor, confirms the trip, initiates SI, and performs the <span class="hi-exam">EOP-TRIP-1 immediate actions</span>. 22 AFW pump pressure-override protection fails (cannot be defeated) so 22 AFW pump supplies no flow to 21/22 SGs; the crew throttles AFW &lt;22E4 lbm/hr after level recovers and <span class="hi-exam">isolates AFW to the ruptured 23 SG by closing 23AF11 and 23AF21 (CT#1 — within 10 min of TRIP-1 entry)</span>. RO shuts 23BF19 and 23BF13 on the safeguards valve alignment; CRS determines no MSLI required, identifies 23 SG as ruptured on NR level, and transitions to <span class="hi-exam">EOP-SGTR-1</span>.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">SGTR isolation and cooldown in SGTR-1, then <span class="hi-exam">loss of offsite power when the hottest CET reaches 510°F</span> <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">In SGTR-1 the crew isolates 23 SG (shut 23MS167; ensure 23MS7, 23MS18, 23GB4 shut), secures 23 AFW pump and resets 23MS52, stops both RHR pumps, and commences the RCS cooldown using the intact-SG steam dumps in MS Pressure Control to a target temperature of 503°F. When the hottest CET reaches 510°F a loss of offsite power occurs; CRS recognizes the LOOP, returns to the Table C actions to restart safeguards loads (resets SECs, starts safeguards equipment), and re-establishes the cooldown using the 21/22/24 MS10 atmospheric reliefs fully open. RO shuts charging pump miniflows at 1500 psig. PO stabilizes the hottest CET &lt;503°F and maintains 23 SG &gt;375 psig — <span class="hi-exam">RCS temperature held to maintain minimum subcooling and avoid a Red/Purple subcriticality or integrity challenge (CT#2)</span>.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Only available PZR PORV 2PR2 fails to open — SGTR without RCS pressure control; both SI pumps unavailable</span></td>
<td style="padding:6px;color:#9ca3af;">At target temperature the crew attempts the RCS depressurization with the only available PORV (2PR1 unavailable; RCPs lost on the LOOP). 2PR2 will not open, so CRS answers NO to "is a PORV available" and, with no SI pumps running (21 SI pump will not start and 22 SI pump trips if started), transitions to <span class="hi-exam">EOP-SGTR-5</span>, SGTR without Pressurizer Pressure Control. PO maintains AFW flow 9–33% with any SG NR level &gt;9%; RO verifies PZR level &gt;11%, RCS subcooling &gt;0°, and RVLIS &gt;57% Full Range, then stops all but 21 or 22 charging pump. Scenario terminates after the reduction to a single charging pump.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (E-3-A):</strong> <span class="hi-exam">Isolate AFW to the ruptured SG within 10 minutes of entry into TRIP-1 and subsequently close 23MS167, 23MS18, 23MS7 and 23GB4 in SGTR-1.</span> <em>Basis:</em> Failure to isolate the ruptured SG causes a loss of differential pressure between the ruptured SG and the intact SGs. Upon a loss of differential pressure, the crew must transition to a contingency procedure that constitutes an incorrect performance that necessitates the crew taking compensating actions which complicates the event mitigation strategy. <span class="hi-exam">Time-critical — AFW isolation to the ruptured 23 SG within 10 minutes of TRIP-1 entry; SG isolation valves (23MS167/23MS18/23MS7/23GB4) shut in SGTR-1.</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (E-3-B):</strong> <span class="hi-exam">Establish/Maintain RCS temperature so a transition from SGTR-1 does not occur because Tave is too high to maintain minimum subcooling, OR below the RCS temperature that causes an extreme challenge (Red) or severe (Purple) challenge to the subcriticality and/or the integrity CSF.</span> <em>Basis:</em> Failure to establish and maintain the correct RCS temperature during a SGTR leads to a transition from E-3 to a contingency procedure, which constitutes an incorrect performance that necessitates the crew taking compensating actions which complicates the event mitigation strategy. <span class="hi-exam">Window is event-driven — maintain RCS temperature throughout the SGTR-1 cooldown (including across the loss of offsite power); not a clock-based time-critical task.</span></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.ROD-0003 — Continuous Rod Motion]] (22 loop Tavg fails high; rods to manual, remove failed channel, enter TS) → [[AB.SG-0001 — Steam Generator Tube Leak]] (500 gpd SGTL on 23 SG — quantify leak, minimize secondary contamination; CAS Action Level 3 ⇒ power &lt;50% in 1 hr, TSAS 3.4.7.2.c) → [[AB.LOAD-0001 — Rapid Load Reduction]] (boration + manual rods + Main Turbine load reduction) → tube ruptures, rising SG NR level meets CAS ⇒ reactor trip and SI → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — immediate actions; 22 AFW pump pressure-override fails, no flow to 21/22 SGs → <strong>CT#1</strong>: isolate AFW to ruptured 23 SG within 10 min via 23AF11/23AF21; 23 SG identified ruptured on NR level, no MSLI) → <span class="hi-exam">EOP-SGTR-1</span> (Steam Generator Tube Rupture — isolate 23 SG, secure 23 AFW pump, stop RHR pumps, RCS cooldown to 503°F target on intact-SG steam dumps → <strong>CT#2</strong>: maintain RCS temperature for minimum subcooling and to avoid Red/Purple CSF challenge) → loss of offsite power at hottest CET 510°F ⇒ return to SGTR-1 Table C (restart safeguards loads, reset SECs) and re-establish cooldown on the 21/22/24 MS10 atmospheric reliefs → at target temperature the only available PORV 2PR2 fails to open and both SI pumps are unavailable ⇒ <span class="hi-exam">EOP-SGTR-5</span> (SGTR without Pressurizer Pressure Control — maintain AFW, verify PZR level/subcooling/RVLIS, reduce to a single charging pump) → terminate. The STA monitors [[EOP-CFST-1 — Critical Safety Function Status Trees]] from the transition out of TRIP-1; CT#2 is framed against the Subcriticality and Core/RCS Integrity status trees (avoid Red/Purple challenge).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 11-01 NRC ESG-2, Rev. 02 (New Issue for 2010 LORT Annual Exam; modified to ILOT format), Form ES-D-1 | <a href="/salem-study-system/exam-pdfs/2012-scenario-02.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCS]], [[Pressurizer & PRT]], [[AFW]], [[Main Steam]], [[Steam Dumps]], [[Radiation Monitoring]], [[Control Rod Drive]], [[CVCS]], [[ECCS]], [[SECs]], [[4KV]], [[EDGs]], [[RHR]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-SGTR-5 — SGTR without Pressurizer Pressure Control]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[AB.LOAD-0001 — Rapid Load Reduction]], [[AB.RAD-0001 — Radiation Monitor Abnormality]]
- Related exam: [[2012 NRC Operating Exam]]
