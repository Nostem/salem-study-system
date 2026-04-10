---
title: "2022 JPM Sim-c — Isolate ECCS Accumulators in EOP-LOCA-1"
category: exams
status: draft
aliases:
  - 2022 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — Isolate ECCS Accumulators in EOP-LOCA-1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 006 A3.10 (4.0/3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The reactor was tripped when a RCS leak occurred.<br>
- The operating crew has progressed through the EOPs and is now in 2-EOP-LOCA-1, LOSS OF REACTOR OR SECONDARY COOLANT.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to isolate the SI Accumulators IAW Step 14 of 2-EOP-LOCA-1, LOSS OF REACTOR OR SECONDARY COOLANT.<br>
- Notify the CRS when Step 14 is completed.<br>
- Your evaluator will take care of all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Closes 21, 22, and 23 SJ54s. 2. Vents 24 SI Accumulator to atmospheric pressure.</span>
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
<td style="padding:6px;color:#c8cdd5;">14</td>
<td style="padding:6px;color:#c8cdd5;">Are at least two RCS T-Hots less than 405F</td>
<td style="padding:6px;color:#9ca3af;">YES. Operator verifies at least two RCS T-Hots less than 405F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Remove lockout from 21-24 SJ54 (Accumulator Outlet Valves)</td>
<td style="padding:6px;color:#9ca3af;">At 2RP4 Panel, selects VALVE OPERABLE on 21-24 SJ54 Accumulator Outlet Valves Lockout Switch.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14.1 (contd) *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21 thru 24 SJ54</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE pushbuttons for 21 thru 24 SJ54 Accumulator Outlet Valves and verifies each CLOSE bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">14.2</td>
<td style="padding:6px;color:#c8cdd5;">Are 21 thru 24 SJ54 CLOSED</td>
<td style="padding:6px;color:#9ca3af;">NO. Operator determines 24SJ54 Accumulator Outlet Valve is OPEN. May re-check lockout switch position or attempt to depress Close PB again.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14.2 (contd) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Vent unisolated accumulator: OPEN 2NT35 (N2 HDR Valve) and 24SJ93 (N2 Supply Valve)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses OPEN PB for 2NT35 (N2 HDR Valve) until OPEN bezel illuminates. Depresses OPEN PB for 24SJ93 (N2 Supply Valve) until OPEN bezel illuminates. Observes 24 Accumulator pressure lowering to ZERO.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 14.2 is the alternate path / discriminating step. After closing 21-23 SJ54, the applicant discovers that 24SJ54 fails to close (valve stuck open). Rather than continuing to attempt closure, the applicant must recognize that the accumulator cannot be isolated normally and must vent the 24 Accumulator to atmospheric pressure by opening 2NT35 (N2 Header Valve) and 24SJ93 (N2 Supply Valve), then verify accumulator pressure reaches zero.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-1 (Rev 40) | Task: N0060100101 | K/A: 006 A3.10 — Ability to monitor automatic operations of the ECCS (4.0/3.9) | Safety Fn: 3 | Source: Bank | <a href="/salem-study-system/exam-pdfs/2022-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related systems: [[ECCS]]
- Related exam: [[2022 NRC Operating Exam]]
