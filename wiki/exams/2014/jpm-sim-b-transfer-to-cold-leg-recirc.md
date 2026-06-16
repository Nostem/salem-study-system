---
title: "2014 JPM Sim-b — Perform Actions For A Transfer To Cold Leg Recirculation"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Perform Actions For A Transfer To Cold Leg Recirculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | E011 EA1.11 (4.2/4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 12 minutes<br><br>
<strong>Initial Conditions:</strong><br>
• A LBLOCA has occurred on 22 RC Loop.<br>
• All Vital Buses are energized from off-site power.<br>
• Operators are performing actions in 2-EOP-LOCA-1, Loss of Reactor Coolant.<br>
• 22 SW pump is CIT.<br>
• 26 SW pump tripped 2 minutes ago.<br>
• RWST lo level alarm has just annunciated.<br><br>
<strong>Initiating Cue:</strong><br>
You are the RO. Perform 2-EOP-LOCA-3, Transfer to Cold Leg Recirculation, beginning with Step 1.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Transfer to CL recirc with single train operation.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:60px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Is "Cont Sump Ch A(B) Level &gt;62%" lit?</td>
<td style="padding:6px;color:#9ca3af;">Checks Cont Sump Ch A(B) Level &gt;62% lights and answers YES.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Depress "SUMP AUTO ARMED" pushbuttons on 21 and 22 SJ44 bezels.</td>
<td style="padding:6px;color:#9ca3af;">Depresses "SUMP AUTO ARMED" pushbuttons on 21 and 22 SJ44 bezels.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Remove lockouts for the following: 2SJ67 (SI Pumps Miniflow), 2SJ68 (SI Pumps Miniflow), 2SJ69 (Common Suction).</td>
<td style="padding:6px;color:#9ca3af;">Rotates lockout switches on 2RP4 to the VALVE OPERABLE position for 2SJ67, 2SJ68, 2SJ69.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Are 21 and 22 SJ44 (Sump Valves) open?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Sump Valve 21 SJ44 is open and Sump Valve 22 SJ44 is shut.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Stop 22 RHR pump.</td>
<td style="padding:6px;color:#9ca3af;">Depresses stop PB for 22 RHR pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Close 2SJ69 (Common Suction).</td>
<td style="padding:6px;color:#9ca3af;">Depresses close PB for 2SJ69 (Common Suction) and verifies green close light illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5.3</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When 22SJ44 opens, Then start 22 RHR pump. (Note: 22SJ44 will not open.)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Does not start 22 RHR pump.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;">Stop 22 CS pump. (Note: pump does not stop — may dispatch operator to locally open the breaker.)</td>
<td style="padding:6px;color:#9ca3af;">Depresses stop PB for 22 CS pump and determines pump does not stop.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">8 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Stop 21 CS pump.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses stop PB for 21 CS pump and determines pump has stopped.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Close 21 and 22RH19 (RHR HX Disch x-conn valves).</td>
<td style="padding:6px;color:#9ca3af;">Depresses close PB for 21 and 22RH19 and verifies shut lights illuminate. Stops 23 charging pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10</td>
<td style="padding:6px;color:#c8cdd5;">Select appropriate flowpath transition step from Table B.</td>
<td style="padding:6px;color:#9ca3af;">Selects flowpath transition step 11 with all vital buses energized. Goes to Step 11.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">11.1</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Are at least three SW pumps running? (Note: 24/25 SW pumps will not start.)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines only 2 SW pumps are running.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Stop 2 CFCUs.</td>
<td style="padding:6px;color:#9ca3af;">Depresses stop PBs for 2 running CFCUs and verifies they stop. Goes to Step 11B.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11B *</span></td>
<td style="padding:6px;color:#c8cdd5;">Stop the following pumps: 22 SI pump, 21 Charging pump, 22 AFW pump. (Note: if SG lo lvl is present 22 AFW pp will not stop.)</td>
<td style="padding:6px;color:#9ca3af;">Depresses stop PBs for 22 SI pump, 21 Charging pump, 22 AFW pump and verifies they stop.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">11B</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is 22 CCW HX in service?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 22 CCW HX is not available, nor being returned to service, based on high temperature on 2CC2 (Temp is ~196°F).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">11B</td>
<td style="padding:6px;color:#c8cdd5;">Open 21CC16 (CC Supply to RHR HX Valve). Start 21 RHR pump. Stop 22 RHR pump.</td>
<td style="padding:6px;color:#9ca3af;">Determines 21CC16 is open, 21 RHR pump in service, 22 RHR pump stopped.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11B *</span></td>
<td style="padding:6px;color:#c8cdd5;">Close 22CC16 (CC Supply to RHR HX Valve).</td>
<td style="padding:6px;color:#9ca3af;">Depresses 22CC16 close PB and verifies it shuts. Closes 2SJ68 and 2SJ67 (SI Pumps Miniflow Valves). Determines 2RH1 and 2RH2 (Common Suction Valves) are shut.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">120</td>
<td style="padding:6px;color:#c8cdd5;">Open 21SJ45 (RHR Discharge to SI pump valve).</td>
<td style="padding:6px;color:#9ca3af;">Depresses open PB for 21SJ45 and verifies it opens. Terminate JPM.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. The applicant begins LOCA-3 expecting a normal two-train transfer, but step 5 reveals that <strong>22 SJ44 (the B-train Sump Valve) fails to open</strong> while 21 SJ44 opens. The discriminating diagnosis is recognizing the failed B-train sump valve (step 5.3: "22SJ44 will not open" → do NOT start 22 RHR pump) and executing the procedure's <strong>single-train</strong> recirculation branch instead. The path is further constrained by support-system losses: only <strong>2 of the required 3 SW pumps</strong> are running (step 11.1), forcing the applicant to stop 2 CFCUs and shed loads (step 11B) and route RHR HX cooling through 21CC16 while isolating 22CC16 (22 CCW HX unavailable at ~196°F). Failing to recognize the failed sump valve and continuing the two-train alignment — or failing to stop the running CS pump and shed loads under degraded SW — fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-3 (Rev 29) | Task: 1150030501 | K/A: E011 EA1.11 — Large Break LOCA: Ability to operate and/or monitor cold leg recirculation as it applies to the LBLOCA (4.2/4.2) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[RHR]]
- Related EOPs: [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam: [[2014 NRC Operating Exam]]
