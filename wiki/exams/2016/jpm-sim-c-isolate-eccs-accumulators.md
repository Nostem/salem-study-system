---
title: "2016 JPM Sim-c — Isolate the ECCS Accumulators IAW TRIP-6"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — Isolate the ECCS Accumulators IAW TRIP-6</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | WE09 EA1.01 (3.5/3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
A reactor trip occurred when a 500KV grid perturbation occurred, which also caused all RCPs to trip. The operating crew has progressed through the EOP's and is now in 2-EOP-TRIP-6, NATURAL CIRCULATION RAPID COOLDOWN WITH RVLIS. The RCPs will NOT be restarted.<br><br>
<strong>Initiating Cue:</strong><br>
Begin performing 2-EOP-TRIP-6, NATURAL CIRCULATION RAPID COOLDOWN WITH RVLIS at step 12.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Shut 21, 22, and 23 SJ54's. 2. Vent 24 Accumulator to atmospheric pressure.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:60px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12</td>
<td style="padding:6px;color:#c8cdd5;">IS RCS PRESSURE &lt;1000 PSIG.</td>
<td style="padding:6px;color:#9ca3af;">Verifies RCS pressure &lt;1000 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12.1</td>
<td style="padding:6px;color:#c8cdd5;">REMOVE LOCKOUT FROM 21-24 SJ54 (ACCUMULATOR OUTLET VALVES).</td>
<td style="padding:6px;color:#9ca3af;">At 2RP4 Panel, selects VALVE OPERABLE on 21-24 SJ54 ACCUMULATOR OUTLET VALVES LOCKOUT switches.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21-24 SJ54.</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB on 21-24 SJ54, noting that 21, 22, and 23 SJ54 begin to stroke closed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">12.1</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ARE 21-24 SJ54 CLOSED.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 24 SJ54 is OPEN. Alternate path actions start here.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12.2</td>
<td style="padding:6px;color:#c8cdd5;">VENT ANY AFFECTED ACCUMULATORS: MAINTAIN RCS PRESSURE GREATER THAN ACCUMULATOR NITROGEN PRESSURE.</td>
<td style="padding:6px;color:#9ca3af;">Verifies RCS Pressure &gt; 24 Accumulator Pressure.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2NT35 (N2 HDR VALVE).</td>
<td style="padding:6px;color:#9ca3af;">Opens 2NT35 (N2 HDR VALVE).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN AFFECTED SJ93 (N2 SUPPLY VALVE).</td>
<td style="padding:6px;color:#9ca3af;">Opens 24 SJ93 (N2 SUPPLY VALVE) and observes 24 Accumulator pressure lowering.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">WHEN ACCUMULATOR VENTING IS COMPLETE THEN CLOSE: 2NT35; 21 THRU 24 SJ93.</td>
<td style="padding:6px;color:#9ca3af;">Cue: 24 Accumulator has been completely vented and 24 Accumulator pressure is now reading ZERO. Closes 2NT35 N2 HDR VALVE. Closes 24 SJ93 N2 SUPPLY VALVE. Cue: JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 12.1 (verification) is the discriminating step / alternate path. After depressing CLOSE on all four SJ54's, the applicant must recognize that <strong>24 SJ54 has failed to close</strong> (failed in the OPEN position because the close PB was overridden OFF in the simulator setup). The alternate path requires venting the 24 Accumulator to atmospheric pressure: verify RCS pressure exceeds 24 Accumulator nitrogen pressure to prevent backflow, then open <strong>2NT35 (N2 Header Valve)</strong> and <strong>24 SJ93 (24 Accumulator N2 Supply Valve)</strong> as the affected accumulator vent path. When 24 Accumulator pressure reaches zero, both vent valves must be closed to terminate the vent.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-6 (Rev. 30) | Task: 1150070501 | K/A: E09 EA1.1 — Functional Recovery / SI Termination — Ability to operate and/or monitor: SI valves and pumps | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]]
- Related procedures: [[S2.OP-SO.SJ-0002 — Accumulator Operations]]
- Related EOPs: [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]]
- Related exam: [[2016 NRC Operating Exam]]
