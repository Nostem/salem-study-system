---
title: "2023 JPM Sim-g — Respond to a Failed High RCS T-avg Channel IAW S2.OP-AB.ROD-0003"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — Respond to a Failed High RCS T-avg Channel IAW S2.OP-AB.ROD-0003</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A4.05 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 6 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 2 is at 100%<br>
- No major equipment is out of service and no Tech Specs are active.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- Respond to all alarms and indications.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has taken the Rod control system to manual IAW step 3.1 of S2.OP-AB.ROD-0003, restored Tavg IAW step 3.5 of S2.OP-AB.ROD-0003, stabilized PZR level and defeated the failed Tavg channel IAW step 3.10 thru 3.12 of S2.OP-AB.ROD-0003.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">N/A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Recognize unwarranted rod motion and take rods to manual</td>
<td style="padding:6px;color:#9ca3af;">Verifies no runback in progress and takes rods to manual.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">Enter S2.OP-AB.ROD-0003 and place rod bank selector switch in Manual</td>
<td style="padding:6px;color:#9ca3af;">Enters AB.ROD-0003 and places the rod control bank selector switch in Manual.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2</td>
<td style="padding:6px;color:#c8cdd5;">Did rod motion stop?</td>
<td style="padding:6px;color:#9ca3af;">YES — continues to step 3.4.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.4</td>
<td style="padding:6px;color:#c8cdd5;">Monitor Tavg for necessary adjustments</td>
<td style="padding:6px;color:#9ca3af;">Initials and monitors Tavg until the cause of the transient is known and the plant is stable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Adjust rods in manual to control Tavg within 1.5F of Tprogram</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Verifies Tavg within 1.5F and continues, or adjusts by withdrawing rods to within 1.5F of Tprogram (Attachment 1, Tavg Program vs % Reactor Power).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.6</td>
<td style="padding:6px;color:#c8cdd5;">Has a NIS channel failed high?</td>
<td style="padding:6px;color:#9ca3af;">NO — goes to step 3.8.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.8</td>
<td style="padding:6px;color:#c8cdd5;">Stop any dilution of the Reactor Coolant System</td>
<td style="padding:6px;color:#9ca3af;">Verifies makeup system out of service and states no dilution in progress.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.9</td>
<td style="padding:6px;color:#c8cdd5;">Has a Tavg channel failed high?</td>
<td style="padding:6px;color:#9ca3af;">YES — goes to step 3.10.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.10</td>
<td style="padding:6px;color:#c8cdd5;">Return PZR level to program</td>
<td style="padding:6px;color:#9ca3af;">Places Master Flow Controller (or CV55) in manual and adjusts to restore level to program band.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.11 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Select DEVIATION DEFEAT for affected loop — Reactor Coolant Differential Temperatures</td>
<td style="padding:6px;color:#9ca3af;">Selects deviation defeat on 2CC2 for channel 1 Differential Temperature.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.11 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Select DEVIATION DEFEAT for affected loop — Reactor Coolant Average Temperatures</td>
<td style="padding:6px;color:#9ca3af;">Selects deviation defeat on 2CC2 for channel 1 Average Temperature.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.12 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Select a valid channel on recorder — Reactor Coolant Differential Temperatures</td>
<td style="padding:6px;color:#9ca3af;">Selects recorder to Channel 2, 3, or 4 for Differential Temperature.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.12 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Select a valid channel on recorder — Reactor Coolant Average Temperatures</td>
<td style="padding:6px;color:#9ca3af;">Selects recorder to Channel 2, 3, or 4 for Average Temperature.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.13</td>
<td style="padding:6px;color:#c8cdd5;">When PZR level restored to program, return Charging System Master Flow Controller to AUTO</td>
<td style="padding:6px;color:#9ca3af;">Verifies level is at program and returns charging master flow controller to Auto.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.14</td>
<td style="padding:6px;color:#c8cdd5;">Are control rods above Rod Insertion Limits?</td>
<td style="padding:6px;color:#9ca3af;">Verifies rods are above insertion limits.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.16</td>
<td style="padding:6px;color:#c8cdd5;">If manual rod control is NOT required, place Rod Control System in automatic control</td>
<td style="padding:6px;color:#9ca3af;">CRS directs rods restored to auto control. Places rod control in Auto.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating area spans steps 3.5 through 3.12 — the applicant must recognize the Tavg channel failed high (Loop 21 Hot Leg RTD), take rods to manual, restore Tavg to within 1.5F of Tprogram by withdrawing rods, stabilize PZR level, defeat the deviation alarms for both Differential Temperature and Average Temperature on 2CC2, and select a valid recorder channel for both parameters.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.ROD-0003 (R23) | Task: N1150090501 | System: 012 Reactor Protection System | K/A: A4.05 — Ability to manually operate and/or monitor in the control room: Channel defeat controls | Source: New | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]]
- Related systems: [[RPS/SSPS]], [[RPS/SSPS]]
- Related exam: [[2023 NRC Operating Exam]]
