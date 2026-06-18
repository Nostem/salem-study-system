---
title: "2015 JPM Sim-c — Raise ECCS Accumulator Level and Pressure"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — Raise ECCS Accumulator Level and Pressure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 006 A4.07 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 13 minutes<br><br>
<strong>Initial Conditions:</strong><br>
1. The plant is at 100% power with all systems in their normal alignment with control systems in automatic.<br>
2. 24 Accumulator is at 58.4% level and 598.8 psig.<br>
3. The Safety Injection System is available.<br>
4. Nitrogen System is available.<br>
5. RWST Boron Concentration is 2455 ppm.<br>
6. Components Off Normal and Off Normal Tagged has been checked SAT.<br><br>
<strong>Initiating Cue:</strong><br>
Raise 24 ECCS Accumulator parameters to 60% level using 21 SI pump, and raise 24 Accumulator pressure to 625 psig using IAW S2.OP-SO.SJ-0002, Accumulator Operations.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Raise 24 Accumulator level to 60% using a SI pump, and return system to normal lineup.<br>2. Raise 24 Accumulator pressure to 625 psig after level has been raised.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">P&amp;L</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Reviews procedure and initials all Precautions and Limitations. P&amp;L 3.1: if both level and pressure need adjustment, level should be adjusted first.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Adjusts level first (Section 5.2), then pressure (Section 5.10).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE either: ALL RCS Cold Leg Temperatures &gt;312°F, OR the Reactor Vessel Head is Removed.</td>
<td style="padding:6px;color:#9ca3af;">Determines ALL RCS Cold Leg Temperatures &gt;312°F from control console indications.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">IF RCS Pressure &lt;2000 psig, THEN ENSURE CLOSED 21SJ134, COLD LEG DISCHARGE.</td>
<td style="padding:6px;color:#9ca3af;">Determines RCS pressure is &gt;2000 psig from console indication and marks step N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">START 21 Safety Injection Pump.</td>
<td style="padding:6px;color:#9ca3af;">Depresses 21 SI Pump START PB; verifies red start light illuminates, green stop light extinguishes, and pump amps indicated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2SJ53, 21 SI PUMP DISCHARGE TEST LINE VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Depresses 2SJ53 OPEN PB; verifies open light illuminates and shut light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2SJ123, TEST LINE TO CVCS HUT.</td>
<td style="padding:6px;color:#9ca3af;">Depresses and holds 2SJ123 OPEN PB until open light illuminates and shut light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN associated Accumulator fill valve: 24SJ20, 24 ACCUMULATOR FILL.</td>
<td style="padding:6px;color:#9ca3af;">Depresses 24SJ20 OPEN PB; verifies open light illuminates and shut light extinguishes. Monitors level on 2LI935D and 2LI934D. (Takes just over a minute to raise level to 60%.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When desired level is reached, CLOSE the associated Accumulator fill valve: 24SJ20.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When 24 Accumulator level indicates 60% on 2LI935D and 2LI934D, depresses 24SJ20 CLOSE PB; verifies red open light extinguished and green shut light illuminates.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.8</td>
<td style="padding:6px;color:#c8cdd5;">If required, REPEAT Steps 5.2.6 and 5.2.7 to fill additional Accumulators.</td>
<td style="padding:6px;color:#9ca3af;">Determines no other Accumulators will be filled.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2SJ53.</td>
<td style="padding:6px;color:#9ca3af;">Depresses 2SJ53 CLOSE PB; verifies red open light extinguished and green shut light illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.10 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2SJ123.</td>
<td style="padding:6px;color:#9ca3af;">Depresses 2SJ123 CLOSE PB; verifies red open light extinguished and green shut light illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.11 *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP 21 Safety Injection Pump.</td>
<td style="padding:6px;color:#9ca3af;">Depresses 21 SI Pump STOP PB; verifies green stop light illuminates and red start light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.12</td>
<td style="padding:6px;color:#c8cdd5;">IF in Modes 1, 2, or 3 AND 21SJ134 was CLOSED in Step 5.2.2, THEN OPEN 21SJ134.</td>
<td style="padding:6px;color:#9ca3af;">Determines 21SJ134 was not closed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.13</td>
<td style="padding:6px;color:#c8cdd5;">If required, BLEED off the SI Pump discharge pressure (open 2SJ123, 2SJ60, 2SJ158; when ≥30 s OR PI923/PI919 decreases to 30-50 psig, close 2SJ158, 2SJ60, 2SJ123).</td>
<td style="padding:6px;color:#9ca3af;">Determines SI pump discharge pressure is lowering. (If not lowering, performs the bleed-off lineup and restores it when directed.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.14</td>
<td style="padding:6px;color:#c8cdd5;">Direct a second Operator to PERFORM Independent Verification IAW Attachment 1, Section 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Directs a second Operator to perform IV IAW Attachment 1, Section 2.0.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.15–5.2.17</td>
<td style="padding:6px;color:#c8cdd5;">Review TSAS 3.5.2 applicability if entered; perform S2.OP-ST.SJ-0008(Q), Emergency Core Cooling – Accumulators, per Mode.</td>
<td style="padding:6px;color:#9ca3af;">Determines TSAS 3.5.2 not entered; determines Unit is in Mode 1; another NCO will perform the ST. Goes to Section 5.10 to raise pressure. (24 Accumulator pressure increased to ~603 psig during fill.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.10.1 B *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF Nitrogen System available: ENSURE CLOSED 2NT35, N2 HDR; OPEN 2NT32, N2 SUPPLY.</td>
<td style="padding:6px;color:#9ca3af;">Determines 2NT35 shut by console indication; depresses and holds 2NT32 OPEN PB and verifies open light illuminates and shut light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.10.1 C *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN associated N2 Supply valve: 24SJ93, N2 SUPPLY. (Note: pressure will rise very rapidly on 24 Accumulator.)</td>
<td style="padding:6px;color:#9ca3af;">Depresses 24SJ93 OPEN PB; verifies open light illuminates and shut light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.10.1 D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When desired Accumulator pressure is achieved, CLOSE the associated N2 Supply valve: 24SJ93.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 24 Accumulator pressure is 625 psig on 2PI936D and 2PI937D; depresses 24SJ93 CLOSE PB; verifies red open light extinguished and green shut light illuminates.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.10.1 E</td>
<td style="padding:6px;color:#c8cdd5;">IF required, REPEAT steps 5.10.1 C and 5.10.1 D to raise pressure in additional Accumulators.</td>
<td style="padding:6px;color:#9ca3af;">Determines no other accumulators pressure will be changed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.10.1 F *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2NT32.</td>
<td style="padding:6px;color:#9ca3af;">Depresses 2NT32 CLOSE PB; verifies red open light extinguished and green shut light illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.10.1 G</td>
<td style="padding:6px;color:#c8cdd5;">Direct a second Operator to PERFORM Independent Verification IAW Attachment 1, Section 10.0.</td>
<td style="padding:6px;color:#9ca3af;">Directs a second Operator to perform IV IAW Attachment 1, Section 10.0. (Cue: JPM is complete.)</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">There is no alternate-path failure; this is a "Perform" JPM where the discriminating judgment is hitting the <strong>two parameter targets in the correct order</strong>. Precaution &amp; Limitation 3.1 requires <strong>level be adjusted before pressure</strong>, so the applicant uses Section 5.2 (raise level with the 21 SI pump) first, then Section 5.10 (raise pressure with N2). The two stop points are the critical determinations: close 24SJ20 when 24 Accumulator level reaches <strong>60%</strong> on 2LI935D/2LI934D (step 5.2.7), and close 24SJ93 when pressure reaches <strong>625 psig</strong> on 2PI936D/2PI937D (step 5.10.1 D) — noting that pressure rises very rapidly on the accumulator. Overshooting either target, or raising pressure before level, fails the task. The full SI-pump fill lineup (2SJ53, 2SJ123, 24SJ20) and its restoration (2SJ53, 2SJ123, stop SI pump) are all critical.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.SJ-0002 (Rev 24) | Task: 0065010101 | K/A: 006 A4.07 — ECCS: ability to manually operate and/or monitor accumulator fill/level/pressure | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]]
- Related procedures: [[S2.OP-SO.SJ-0002 — Accumulator Operations]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related exam: [[2015 NRC Operating Exam]]
