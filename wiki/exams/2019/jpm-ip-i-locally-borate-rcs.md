---
title: "2019 JPM IP-i — Locally Borate the RCS"
category: exams
status: draft
aliases:
  - 2019 JPM IP-i
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-i — Locally Borate the RCS</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant (RCA) | RO/SRO | 004 A4.18 (4.3/4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — Unit 1 RCA, El 122 ft (near Boric Acid Storage Tanks) and Panel 216-1<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 1 control room was evacuated due to a security event.<br>
- The immediate actions of 1-EOP-TRIP-1 were completed.<br>
- 3 control rods remain withdrawn following the Rx trip.<br>
- CRS is performing actions of S1.OP-AB.CR-0001, Control Room Evacuation.<br>
- Attachment 5, Steps 1 thru 9 of S1.OP-AB.CR-0001 are complete with 1CV55 maintaining Charging flow at 90 gpm and RCP seal injection flows being maintained at 6 gpm to each seal.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- Perform Emergency Boration for the stuck control rods IAW Attachment 5, Step 10, of S1.OP-AB.CR-0001.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Perform steps to close 11 and 12 CV160 recirc valves.<br>2. Simulate locally opening 1CV175 Rapid Boration valve.<br>3. Simulate adjusting charging flow to >= 99 gpm.</span>
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
<td style="padding:6px;color:#c8cdd5;">10.1</td>
<td style="padding:6px;color:#c8cdd5;">PROCEED to Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1A, El 122 ft, near the Boric Acid Storage Tanks</td>
<td style="padding:6px;color:#9ca3af;">Locates Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE the Air Supply Isolation Valve, 11CV160 A/S, AIR SUPPLY FOR 11CV160</td>
<td style="padding:6px;color:#9ca3af;">Locates and simulates closing the Supply Isolation Valve, 11CV160 A/S.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN draincock for control air regulator for 11CV160</td>
<td style="padding:6px;color:#9ca3af;">Simulates opening draincock for 11CV160 control air regulator.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.4</td>
<td style="padding:6px;color:#c8cdd5;">PROCEED to Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1B, El 122 ft, near the Boric Acid Storage Tanks</td>
<td style="padding:6px;color:#9ca3af;">Locates Unit 1 Cont Air Redundant Air Supply Wall Mntd Pnl 701-1B.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE the Air Supply Isolation Valve, 12CV160 A/S, AIR SUPPLY FOR 12CV160</td>
<td style="padding:6px;color:#9ca3af;">Locates and simulates closing the Supply Isolation Valve, 12CV160 A/S.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN draincock for control air regulator for 12CV160</td>
<td style="padding:6px;color:#9ca3af;">Simulates opening draincock for 12CV160 control air regulator.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">OPEN 1CV175, Rapid Borate Stop Valve — disengage clutch and rotate handwheel counterclockwise</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Locates 1CV175 (Rapid Borate Stop Valve) and simulates opening by disengaging clutch and rotating handwheel counterclockwise. This establishes boric acid flow path to charging pump suction.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.8 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PROCEED to 1CV55 and ADJUST flow for 75 gpm above existing total flow for all RCP seal flows — charging flow to >= 99 gpm (75 gpm + 24 gpm for seals)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">At Panel 216-1, operator adjusts the MANUAL hand sender in the direction to lower the air signal to open 1CV55 and raise charging to desired flow. 1CV55 is air-to-close — lowering air signal opens valve and raises flow. Target: 75 gpm boration + 24 gpm seal injection = 99 gpm total.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 10.2/10.3 and 10.5/10.6 are critical — the applicant must close BOTH 11CV160 and 12CV160 air supply isolation valves AND open BOTH draincocks to bleed the control air from the recirc valve diaphragms. This causes both CV160 recirc valves to close (fail closed on loss of air), eliminating the recirculation path back to the boric acid storage tanks and forcing all boric acid through the charging pump suction. Step 10.7 (opening 1CV175) establishes the rapid boration flow path. Step 10.8 requires the applicant to calculate the correct charging flow: 75 gpm boration + 24 gpm for four RCP seals (6 gpm each) = 99 gpm, then adjust the hand sender at Panel 216-1 to raise flow (lower air signal to open 1CV55).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-AB.CR-0001 (R18) Attachment 5 | Task: N1130140504 | K/A: 004 A4.18 — Ability to manually operate and/or monitor in the control room: Boric acid flow control (locally) | Source: Modified | <a href="/salem-study-system/exam-pdfs/2019-jpm-ip-i.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Control Air]]
- Related procedures: [[AB.CR-0001 — Control Room Evacuation]]
- Related exam: [[2019 NRC Operating Exam]]
