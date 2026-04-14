---
title: "2020 JPM IP-i — Locally Control Charging Flow IAW S2.OP-AB.CR-0001"
category: exams
status: draft
aliases:
  - 2020 JPM IP-i
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-i — Locally Control Charging Flow IAW S2.OP-AB.CR-0001</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant (RCA) | RO/SRO | APE 068 AA1.22 (4.0/4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — Unit 2 RCA (Panel 216-1, Chg Pmps FL & PR Inst Pnl)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The Unit 2 Control Room has been evacuated in accordance with S2.OP-AB.CR-0001, Control Room Evacuation.<br>
- A reactor trip from 100% was initiated prior to evacuating the Control Room.<br><br>
<strong>Initiating Cue:</strong><br>
- You are directed to take local control of charging flow IAW S2.OP-AB.CR-0001, Control Room Evacuation, Attachment 5, starting at Step 8.0 (see attached page).<br>
- Steps 1.0-7.0 of Attachment 5 have been completed.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Locally controls Charging flow using hand air operator IAW S2.OP-AB.CR-0001<br>2. Correctly adjusts air operator to change charging flow to the desired flow of 70 gpm.</span>
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
<td style="padding:6px;color:#c8cdd5;">8.0</td>
<td style="padding:6px;color:#c8cdd5;">TAKE control of 2CV55, Cent Chg Pmp Flow Cont Valve</td>
<td style="padding:6px;color:#9ca3af;">Proceeds to Unit 2 Panel 216-1, Chg Pmps FL & PR Inst Pnl.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">8.1</td>
<td style="padding:6px;color:#c8cdd5;">RECORD the charging flow as indicated on 2FI-128A</td>
<td style="padding:6px;color:#9ca3af;">Records charging flow from 2FI-128A, Charging Pump Flow Indication (typically around 90 gpm).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">8.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE local E/P Bypass Line Selector Valve in Manual</td>
<td style="padding:6px;color:#9ca3af;">Locates local E/P Bypass Selector Valve and simulates rotating valve (clockwise) to MAN position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">8.3</td>
<td style="padding:6px;color:#c8cdd5;">Using the MANUAL hand air operator, ENSURE that the flow rate as noted in Step 8.1 is being maintained with 2CV55</td>
<td style="padding:6px;color:#9ca3af;">Reads flowrate from 2FI-128A (labeled 2FT-128A on panel), Charging Pump Flow Indication, to ensure flow rate is maintained with 2CV55.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">* </span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Adjust charging flow using hand air operator to 70 gpm</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates rotating hand air operator in the clockwise direction to RAISE air pressure to LOWER charging flow to 70 gpm. 2CV55 fails open on loss of air — raising air pressure closes the valve (lowers flow); decreasing air pressure opens the valve (raises flow).</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is the hand air operator adjustment — the applicant must understand that 2CV55 is a fail-open (air-to-close) valve. Rotating the hand air operator CLOCKWISE raises air pressure, which CLOSES the valve and LOWERS charging flow. If the applicant rotates counter-clockwise (lowering air pressure), flow increases instead of decreasing. The evaluator cue confirms: if rotated counter-clockwise, charging flow increases to 100 gpm.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.CR-0001 (R23) | Task: 1130070501 | K/A: APE 068 AA1.22 — Ability to operate and/or monitor the following as they apply to the Control Room Evacuation: Flow control valve for RCS charging header | Source: Modified | <a href="/salem-study-system/exam-pdfs/2020-jpm-ip-i.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Control Air]]
- Related procedures: [[AB.CR-0001 — Control Room Evacuation]]
- Related exam: [[2020 NRC Operating Exam]]
