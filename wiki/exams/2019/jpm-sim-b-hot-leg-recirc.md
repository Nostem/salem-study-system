---
title: "2019 JPM Sim-b — Transfer To Hot Leg Recirculation"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Transfer To Hot Leg Recirculation IAW EOP-LOCA-4</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 006 A4.05 (3.9/3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 experienced a Large Break LOCA.<br>
- The crews have completed actions to transfer to Cold Leg Recirculation IAW EOP-LOCA-3 and have transitioned back to EOP-LOCA-1.<br>
- 22 SI pump tripped during LOCA-3 and is being investigated.<br>
- 21 RHR pump and 21SJ45 were C/T for scheduled maintenance prior to the event.<br>
- The crew has just reached the 4.5 hour wait time at Step 26 of EOP-LOCA-1.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to continue with EOP-LOCA-1 starting at Step 27.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Align RCS for Hot Leg Recirculation IAW 2-EOP-LOCA-4 Steps 3 thru 4.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">27 *</span></td>
<td style="padding:6px;color:#c8cdd5;">DEPRESS "CLOSE" PUSHBUTTON FOR 21 AND 22 SJ40 (Hot Leg Discharge Valves)</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 21 and 22 SJ40 on 2CC1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">27.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">REMOVE LOCKOUTS FOR 21 AND 22 SJ40 (Hot Leg Discharge Valves)</td>
<td style="padding:6px;color:#9ca3af;">Places 21 and 22 SJ40 Lockout CMC switches to "Valve Operable" and verifies Valve Operable backlight illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">27.1 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">ARE "VALVE OPERABLE" BACKLIGHTS LIT FOR 21SJ40 AND 22SJ40?</td>
<td style="padding:6px;color:#9ca3af;">YES — verifies Valve Operable backlights are lit on 2RP4 for both 21 and 22 SJ40.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">28</td>
<td style="padding:6px;color:#c8cdd5;">WAIT UNTIL 6.5 HOURS HAVE ELAPSED SINCE SI ACTUATION</td>
<td style="padding:6px;color:#9ca3af;">CUE: 6.5 hours has elapsed since SI actuation. CRS directs transfer to Hot Leg Recirculation by performing EOP-LOCA-4.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">LOCA-4 Step 1</td>
<td style="padding:6px;color:#c8cdd5;">ARE BOTH RHR PUMPS RUNNING?</td>
<td style="padding:6px;color:#9ca3af;">Determines that ONLY 22 RHR Pump is running (21 RHR pump is C/T). Goes to Step 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">IS 22 RHR Pump Running?</td>
<td style="padding:6px;color:#9ca3af;">YES — determines that 22 RHR Pump is running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 22CS36 (RHR SUPPLY TO CS VALVE)</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 22CS36 and verifies CLOSE PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IS 21SJ45 (RHR DISCHARGE TO SI PUMPS VALVE) OPEN?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">NO — determines 21SJ45 is CLOSED due to 21 RHR pump maintenance. (Alternate Path #1)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4 (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 22SJ49 (COLD LEG ISOLATION VALVE)</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN PB for 22SJ49 and verifies OPEN PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4.1</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IS 22 SI Pump Running?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">NO — determines 22 SI pump is NOT running (tripped during LOCA-3). Goes to step 6.1. (Alternate Path #2)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP 21 SI Pump</td>
<td style="padding:6px;color:#9ca3af;">Depresses 21 SI Pump STOP PB on 2CC1 and verifies STOP PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6.1 (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21SJ134 (Cold Leg Discharge Valve)</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 21SJ134 on 2CC1 and verifies CLOSE PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6.1 (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 21SJ40 (Hot Leg Discharge Valve)</td>
<td style="padding:6px;color:#9ca3af;">Opens 21SJ40 by inserting key and rotating; verifies OPEN PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6.1 (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;">START 21 SI Pump</td>
<td style="padding:6px;color:#9ca3af;">Depresses START PB for 21 SI Pump and verifies START PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">End</td>
<td style="padding:6px;color:#c8cdd5;">Return to Procedure in Effect</td>
<td style="padding:6px;color:#9ca3af;">JPM is complete when operator returns to procedure in effect.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This JPM has two alternate path decision points. First, at Step 4 (cont'd), the applicant must recognize that 21SJ45 is CLOSED for 21 RHR pump maintenance, so the RHR-to-SI pump cross-connect path is unavailable. Second, at Step 4.1, the applicant must recognize that 22 SI pump is NOT running (tripped during LOCA-3) and navigate to Step 6.1, which uses 21 SI pump for Hot Leg injection: STOP 21 SI Pump, CLOSE 21SJ134 (cold leg discharge), OPEN 21SJ40 (hot leg discharge, key-locked), START 21 SI Pump.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-4 (Rev 30), 2-EOP-LOCA-1 (Rev 31) | Task: N1150110501 | K/A: 006 A4.05 — Ability to manually operate and/or monitor ECCS | Source: New | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-LOCA-4 — Transfer to Hot Leg Recirculation]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]]
- Related systems: [[ECCS]], [[RHR]], [[Containment Spray]]
- Related exam: [[2019 NRC Operating Exam]]
