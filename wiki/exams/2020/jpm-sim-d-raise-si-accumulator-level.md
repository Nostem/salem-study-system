---
title: "2020 JPM Sim-d — Raise Level in 21 SI Accumulator"
category: exams
status: draft
aliases:
  - 2020 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Raise Level in 21 SI Accumulator</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 006 A4.07 (4.4/4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The Unit 2 is operating at 100% power with no major equipment out of service.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- RAISE level in 21 SI Accumulator Tank to at least 60% IAW Section 5.2 of S2.OP-SO.SJ-0002, Accumulator Operations, using 21 SI pump.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Raises level in 21 SI Accumulator to at least 60% or as directed IAW S2.OP-SO.SJ-0002.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.2.1</td>
<td style="padding:6px;color:#c8cdd5;">Ensure ALL RCS Cold Leg Temperatures >312°F OR Rx Vessel Head removed</td>
<td style="padding:6px;color:#9ca3af;">Determines RCS Cold Leg temperatures are >312°F and continues on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">If RCS pressure &lt;2000 psig, ENSURE CLOSED 21SJ134</td>
<td style="padding:6px;color:#9ca3af;">Determines RCS is >2000 psig; marks step as N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">START 21 Safety Injection Pump</td>
<td style="padding:6px;color:#9ca3af;">Depresses START pushbutton for 21 SI Pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2SJ53, 21 SI Pump Discharge Test Line Valve</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN pushbutton for 2SJ53.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2SJ123, Test Line to CVCS HUT</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN pushbutton for 2SJ123.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 21SJ20, Accumulator Fill valve</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN pushbutton for 21SJ20. CAUTION: Do NOT cross-tie Accumulators at any time OPERABILITY is required.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21SJ20 when desired level reached (at least 60%)</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE pushbutton for 21SJ20 when level is at least 60%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.9-11</td>
<td style="padding:6px;color:#c8cdd5;">Close 2SJ53, Close 2SJ123, Stop 21 SI Pump</td>
<td style="padding:6px;color:#9ca3af;">Restores system: closes test line valves and stops 21 SI Pump.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is a straight-path (non-alternate-path) JPM testing systematic procedure execution. Key knowledge: RCS Cold Leg temperatures must be >312°F to use 21 SI Pump for accumulator makeup (Section 5.2). If RCS pressure were &lt;2000 psig, 21SJ134 (Cold Leg Discharge) must be closed first to prevent uncontrolled injection. CAUTION: closing 21SJ134 may require entry into TSAS 3.5.2. CAUTION: do NOT cross-tie accumulators at any time OPERABILITY is required. A maximum of one SI Pump OR one Centrifugal Charging Pump shall be OPERABLE whenever the temperature of one or more RCS cold legs is less than or equal to 312°F.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.SJ-0002 (R24) | Task: N0060040101 | K/A: 006 A4.07 — Ability to manually operate and/or monitor in the control room: ECCS pumps and valves | Source: New | <a href="/salem-study-system/exam-pdfs/2020-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]]
- Related procedures: [[S2.OP-SO.SJ-0002 — Accumulator Operations]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related exam: [[2020 NRC Operating Exam]]
