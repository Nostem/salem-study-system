---
title: "2018 JPM Sim-c — Isolate ECCS Accumulators IAW EOP-TRIP-6"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — Isolate ECCS Accumulators IAW EOP-TRIP-6</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 006 A1.13 (3.5/3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- A reactor trip occurred when a 500 KV grid perturbation occurred, which also caused all RCPs to trip.<br>
- The operating crew has progressed through the EOPs and is now in 2-EOP-TRIP-6, NATURAL CIRCULATION RAPID COOLDOWN WITH RVLIS.<br>
- The RCPs will NOT be restarted.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to isolate the SI Accumulators IAW Step 12 of 2-EOP-TRIP-6, NATURAL CIRCULATION RAPID COOLDOWN WITH RVLIS.<br>
- Notify the CRS when Step 12 is completed.<br>
- Your evaluator will take care of all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Closes 21, 22, and 23 SJ54s. 2. Vents 24 SI Accumulator to atmospheric pressure. 3. Closes vent valves to 24 SI Accumulator when venting is complete.</span>
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
<td style="padding:6px;color:#c8cdd5;">12</td>
<td style="padding:6px;color:#c8cdd5;">Verify RCS Pressure &lt;1000 psig</td>
<td style="padding:6px;color:#9ca3af;">Operator verifies RCS pressure is &lt;1000 psig — YES.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Remove lockout from 21-24 SJ54 Accumulator Outlet Valves</td>
<td style="padding:6px;color:#9ca3af;">At 2RP4, selects VALVE OPERABLE on 21-24 SJ54 Accumulator Outlet Valves lockout switch.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Close 21 thru 24 SJ54 Accumulator Outlet Valves</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE pushbuttons for 21-24 SJ54 and verifies each CLOSE bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine 24SJ54 is NOT closed (stuck at intermediate position)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ALTERNATE PATH: Operator determines that 24SJ54, Accumulator Outlet Valve, is OPEN (observes valve stroking then stopping at intermediate position). 21, 22, and 23 SJ54s are closed.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12.2</td>
<td style="padding:6px;color:#c8cdd5;">Consult TSC for contingency actions</td>
<td style="padding:6px;color:#9ca3af;">CRS will consult with TSC if needed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Verify RCS Pressure greater than Accumulator nitrogen pressure</td>
<td style="padding:6px;color:#9ca3af;">Operator verifies RCS pressure is greater than accumulator pressure.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Open 2NT35 (N2 HDR VALVE) and 24SJ93 (N2 SUPPLY VALVE) to vent 24 Accumulator</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN PB for 2NT35 (N2 HDR VALVE) until OPEN bezel illuminates. Depresses OPEN PB for 24SJ93 (N2 SUPPLY VALVE) until OPEN bezel illuminates. Observes 24 Accumulator pressure lowering.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Close vent valves when accumulator pressure reaches zero</td>
<td style="padding:6px;color:#9ca3af;">When 24 Accumulator pressure reads ZERO: closes 2NT35 N2 HDR VALVE and 24SJ93 N2 SUPPLY VALVE (CLOSE PBs, bezels illuminated).</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is 12.1 — the applicant must recognize that 24SJ54 has failed at an intermediate position (valve strokes then stops) and cannot be isolated. The alternate path requires the applicant to transition to the venting steps: verify RCS pressure exceeds accumulator nitrogen pressure, then open 2NT35 (N2 header valve) and 24SJ93 (N2 supply valve) to vent the 24 Accumulator to atmospheric pressure, and close vent valves when venting is complete.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-6 (Rev 30) | Task: 1150070501 | K/A: 006 A1.13 — Ability to predict and/or monitor changes in parameters associated with operating the ECCS controls (3.5/3.7) | Source: Modified | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]]
- Related procedures: [[S2.OP-SO.SJ-0002 — Accumulator Operations]]
- Related EOPs: [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]]
- Related exam: [[2018 NRC Operating Exam]]
