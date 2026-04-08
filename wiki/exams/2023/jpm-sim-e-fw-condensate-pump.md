---
title: "2023 JPM Sim-e — Establish FW Flow IAW EOP-FRHS-1 Using a Condensate Pump"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — Establish FW Flow IAW EOP-FRHS-1 Using a Condensate Pump</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A4.02 (3.6/3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 2 is in Mode 3.<br>
- No SGFPs or AFW pumps are available.<br>
- Actions are being implemented IAW 2-EOP-FRHS-1.<br>
- The crew has completed actions through step 7.1<br><br>
<strong>Initiating Cue:</strong><br>
- CRS directs you to continue performing actions of 2-EOP-FRHS-1 at Note 7-2
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has selected and depressurized a steam generator using the steam dumps IAW step 7.3 and 7.4 of 2-EOP-FRHS-1, established flow with a condensate pump and places steam dumps in auto to stabilize pressure less than 575 psig, IAW continuous action step 7.2 of 2-EOP-FRHS-1.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:50px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">N7-2</td>
<td style="padding:6px;color:#c8cdd5;">NOTE: 21 and 23 SGs should be steamed LAST to maximize availability of a steam supply for 23 AFW pump</td>
<td style="padding:6px;color:#9ca3af;">Candidate should pick 22 or 24 to depressurize.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">N7-3</td>
<td style="padding:6px;color:#c8cdd5;">NOTE: The following steps may result in a Low Steamline Diff Press SI</td>
<td style="padding:6px;color:#9ca3af;">Acknowledges note.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.2</td>
<td style="padding:6px;color:#c8cdd5;">CAS: When selected SG pressure <575 psig and WR level rising, stabilize selected SG pressure <575 psig</td>
<td style="padding:6px;color:#9ca3af;">Reads Continuous Action Step.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.2 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">SELECT only one SG for depressurization to less than 575 psig</td>
<td style="padding:6px;color:#9ca3af;">Chooses 22 or 24 SG.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.3</td>
<td style="padding:6px;color:#c8cdd5;">Are condenser steam dumps available?</td>
<td style="padding:6px;color:#9ca3af;">YES path.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.3 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Actuate main steam isolation for all loops EXCEPT selected SG</td>
<td style="padding:6px;color:#9ca3af;">Actuates MSLI for 21 and 23 (and 22 or 24) MS Lines, keeping only the selected SG un-isolated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.3 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Place steam dumps in Manual</td>
<td style="padding:6px;color:#9ca3af;">Places steam dumps in Manual.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.3 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Adjust steam pressure valve demand to 0%</td>
<td style="padding:6px;color:#9ca3af;">Adjusts valve demand to 0%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.3 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Place steam dumps in MS Press Control</td>
<td style="padding:6px;color:#9ca3af;">Places steam dumps in MS Pressure Control at 0% valve demand.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When RCS Tavg Low-Low is reached, depress BYPASS Tavg pushbutton</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Bypasses Tavg Low-Low when required.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.4 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Adjust steam pressure valve demand to establish max rate</td>
<td style="padding:6px;color:#9ca3af;">Adjusts to at least 25%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.4 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Send operator to open selected BF40 Main Feed Bypass Valve</td>
<td style="padding:6px;color:#9ca3af;">Dispatches operator to open BF40.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.4 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN selected BF13 Feed Water Isolation Valve</td>
<td style="padding:6px;color:#9ca3af;">Opens BF13 Feed Water Isolation Valve.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.4 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Is selected BF13 OPEN?</td>
<td style="padding:6px;color:#9ca3af;">YES — may dispatch operator if needed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.4 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Release selected BF22 Feed Line Stop Check Valve</td>
<td style="padding:6px;color:#9ca3af;">Verifies open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.4 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Open 21 and 22 CN48 Feed Pump Bypass Valves</td>
<td style="padding:6px;color:#9ca3af;">Opens valves.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7.4 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Close 21 and 22 CN32 Feed Pump Suction Valves</td>
<td style="padding:6px;color:#9ca3af;">Performs this task.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">7.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Is condensate flow established to any SG?</td>
<td style="padding:6px;color:#9ca3af;">When YES and WR level is rising, places steam dumps in auto.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 7.4 is the discriminating area — the applicant must bypass Tavg Low-Low when reached, then perform a multi-step sequence to establish condensate flow: isolate all MS lines except the selected SG, depressurize below 575 psig using steam dumps, dispatch an operator for the BF40, open the BF13 isolation valve, open CN48 bypass valves, close CN32 suction valves, and verify condensate flow is established with WR level rising before placing steam dumps in auto.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-FRHS-1 (R42) | Task: N1150290501 | System: 041 Steam Dump/Turbine Bypass Control | K/A: A4.02 — Ability to manually operate and/or monitor in the control room: Steam dump cooldown valves | Source: New | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related systems: [[Main Steam]], [[Feedwater and Condensate]]
- Related exam: [[2023 NRC Operating Exam]]
