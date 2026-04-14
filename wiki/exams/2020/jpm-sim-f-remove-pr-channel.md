---
title: "2020 JPM Sim-f — Remove Power Range Channel from Service"
category: exams
status: draft
aliases:
  - 2020 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Remove Power Range Channel from Service</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO Only | 015 A4.03 (3.8/3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The Unit 2 is operating at 100% power with no major equipment out of service.<br>
- Power Range NIS Channel 2N41 has failed high.<br>
- The crew has placed rod control in Manual and performed all the required actions in S2.OP-AB.NIS-0001, Nuclear Instrumentation System Malfunction.<br>
- The following OHA Alarms are lit:<br>
&nbsp;&nbsp;- E-15, PR HI RNG FLUX HI<br>
&nbsp;&nbsp;- E-31, PR OVRPWR ROD STOP<br>
&nbsp;&nbsp;- E-39, PR CH DEV<br>
&nbsp;&nbsp;- E-47, PR NEUT FLUX RATE HI<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Plant Operator.<br>
- REMOVE the failed 2N41 Channel from service IAW S2.OP-SO.RPS-0001, Nuclear Instrumentation Channel Trip/Restoration (see attached pages).
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Removes 2N41 Channel from service by performing Steps 5.1.5.A thru 5.1.5.E correctly IAW S2.OP-SO.RPS-0001.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">Ensure tripping bistable will NOT result in ESF or RPS actuation</td>
<td style="padding:6px;color:#9ca3af;">Checks 2RP4 panel; ensures tripping bistable will not result in Rx Trip.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2</td>
<td style="padding:6px;color:#c8cdd5;">Ensure 2N41 Channel NOT selected on NIS Recorder 2NR45</td>
<td style="padding:6px;color:#9ca3af;">Checks 2N41 recorder; ensures not selected on 2NR45.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">Ensure Rod Control is in Manual</td>
<td style="padding:6px;color:#9ca3af;">Verifies rod control is in Manual.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.4</td>
<td style="padding:6px;color:#c8cdd5;">Enter TS 3.3.1.1 for 2N41</td>
<td style="padding:6px;color:#9ca3af;">CRS will enter Tech Spec 3.3.1.1 for 2N41.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place DETECTOR CURRENT COMPARATOR, UPPER SECTION switch in PRN41</td>
<td style="padding:6px;color:#9ca3af;">At NI Rack No. 81: places switch to PRN41 position. Verifies CHANNEL DEFEAT lamp illuminates. OHA E-38 (UPPER SECT DEV ABV 50% PWR) clears.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place DETECTOR CURRENT COMPARATOR, LOWER SECTION switch in PRN41</td>
<td style="padding:6px;color:#9ca3af;">Places switch to PRN41 position. Verifies CHANNEL DEFEAT lamp illuminates. OHA E-46 (LOWER SECT DEV ABV 50% PWR) clears.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place POWER MISMATCH BYPASS switch in BYPASS PR N41</td>
<td style="padding:6px;color:#9ca3af;">Defeats input to Rod Control by placing switch in BYPASS PR N41 position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place ROD STOP BYPASS switch in BYPASS PR N41</td>
<td style="padding:6px;color:#9ca3af;">Places ROD STOP BYPASS switch to BYPASS PR N41 position. Verifies 2RP4 OVER POWER ROD STOP MANUAL BYPASS, CH I is illuminated. OHA E-31 (PR OVERPWR ROD STOP) clears.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5.E *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place COMPARATOR CHANNEL DEFEAT switch in N41</td>
<td style="padding:6px;color:#9ca3af;">Places switch in N41 position. Verifies COMPARATOR DEFEAT lamp illuminated. OHA E-39 (PR CH DEV) clears.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is a straight-path JPM testing knowledge of Power Range NIS channel removal from service. The applicant must execute five switch manipulations at NI Rack No. 81 in the correct sequence (Steps 5.1.5.A through 5.1.5.E), verifying the correct indications at each step. Key knowledge points: (1) DETECTOR CURRENT COMPARATOR switches (upper and lower) defeat the axial flux difference comparison for the channel; (2) POWER MISMATCH BYPASS defeats the input to rod control that would cause rod withdrawal on power mismatch; (3) ROD STOP BYPASS defeats the overpower rod stop; (4) COMPARATOR CHANNEL DEFEAT removes the channel from the PR channel deviation comparison. All five switches must be placed before the channel is considered removed from service. This is distinct from IR channel removal which uses the LEVEL TRIP switch.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.RPS-0001 (R6) | Task: N1140230401 | K/A: 015 A4.03 — Ability to manually operate and/or monitor in the control room: Trip bypasses | Source: New | <a href="/salem-study-system/exam-pdfs/2020-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related procedures: [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam: [[2020 NRC Operating Exam]]
