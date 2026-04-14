---
title: "2020 JPM Sim-a — Failed Open PZR Spray Valve"
category: exams
status: draft
aliases:
  - 2020 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Failed Open PZR Spray Valve</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 010 A4.01 (3.7/3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The Unit 2 is operating at 100% power with no major equipment out of service.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- Respond to all indications and alarms.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Stops the RCS pressure decrease by closing 2PS1, or Trips the Reactor and stops 21 and 23 RCPs, before an Automatic SI occurs.</span>
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
<td style="padding:6px;color:#c8cdd5;">Observe</td>
<td style="padding:6px;color:#c8cdd5;">Recognize PZR Pressure Channel 1 failed high</td>
<td style="padding:6px;color:#9ca3af;">Scans control board; recognizes PZR Pressure Channel 1 is failed high. OHA D-8 (RC PRESS HI), OHA E-42 (2PR1 1/2 TRIP) annunciate.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">MPC *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place Master Pressure Controller in MANUAL</td>
<td style="padding:6px;color:#9ca3af;">Depresses the MANUAL pushbutton for the Master Pressure Controller (MPC).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">MPC *</span></td>
<td style="padding:6px;color:#c8cdd5;">LOWER demand on MPC to close spray valves</td>
<td style="padding:6px;color:#9ca3af;">Depresses the PRESS INC pushbutton on the MPC to lower the demand.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Alt *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Recognize 2PS1 is fully OPEN after MPC demand is zeroed</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">With MPC demand at zero, operator reports 2PS1 remains fully OPEN. Alternate Path starts here.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.18 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place 2PS1 in MANUAL and CLOSE</td>
<td style="padding:6px;color:#9ca3af;">Depresses MANUAL pushbutton for 2PS1, then depresses the CLOSE pushbutton. 2PS1 valve demand lowers and open light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.19 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPERATE Spray Valves to control pressure per Attachment 2</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 2PS1; recognizes 2PS1 demand is lowering and open light extinguished. Reports 2PS1 is CLOSED and RCS pressure is stable or rising.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The alternate path / discriminating step occurs when the operator lowers MPC demand to close both spray valves but 2PS1 remains fully open. The applicant must recognize the stuck-open spray valve, place 2PS1 in manual, and close it directly. If the operator enters AB.PZR-0001 first rather than taking immediate action, the procedure leads through Steps 3.3 (identify failed channel), 3.5 (MPC to Manual), 3.6 (adjust MPC), then to 3.17/3.18/3.19 for the failed spray valve. Both paths are acceptable. Alternate task standard: if RCS pressure drops to 2000 psig and continues to drop, trip the reactor and stop 21 and 23 RCPs (spray is fed from Loops 1 and 3 cold legs).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.PZR-0001 (R18) | Task: 1140240401 | K/A: 010 A4.01 — Ability to predict impacts of PZR spray valve malfunction and use procedures to mitigate | Source: Modified | <a href="/salem-study-system/exam-pdfs/2020-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2020 NRC Operating Exam]]
