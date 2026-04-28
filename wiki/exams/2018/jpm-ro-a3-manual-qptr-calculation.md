---
title: "2018 JPM RO-A3 — Perform a Manual QPTR Calculation"
category: exams
status: draft
aliases:
  - 2018 JPM RO-A3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A3 — Perform a Manual QPTR Calculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.43 (4.1) | Alternate Path</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 was operating at 100% power when rod 204 dropped fully into the core.<br>
- OHAs E-46, LOWER SECT DEV ABV 50% PWR, and E-38 UPPER SECT DEV ABV 50% PWR, are both illuminated.<br>
- The crew has entered S2.OP-AB.ROD-0002, Dropped Rod, and is making preparations to perform a load reduction to &lt; 75% Rated Thermal Power to comply with Tech Spec 3.1.3.1, Action c.3.d.<br><br>
<strong>Initiating Cue:</strong><br>
- The CRS has directed you to PERFORM a Manual QPTR Calculation IAW S2.OP-ST.NIS-0002, Power Distribution — Quadrant Power Tilt Ratio.<br>
- The Lower and Upper NI Detector current readings are:<br>

<table style="font-size:12px;border-collapse:collapse;margin-left:16px;">
<tr><th style="padding:4px 12px;color:#6b7280;"></th><th style="padding:4px 12px;color:#6b7280;">Upper Detectors</th><th style="padding:4px 12px;color:#6b7280;">Lower Detectors</th></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N41</td><td style="padding:4px 12px;color:#c8cdd5;">184</td><td style="padding:4px 12px;color:#c8cdd5;">181</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N42</td><td style="padding:4px 12px;color:#c8cdd5;">192</td><td style="padding:4px 12px;color:#c8cdd5;">198</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N43</td><td style="padding:4px 12px;color:#c8cdd5;">182</td><td style="padding:4px 12px;color:#c8cdd5;">174</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N44</td><td style="padding:4px 12px;color:#c8cdd5;">139</td><td style="padding:4px 12px;color:#c8cdd5;">142</td></tr>
</table>
<br>
- NOTIFY the CRS with the results of the surveillance.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Perform the QPTR and calculates the highest QPTR as UNSAT (highest N42T AND N42B) with a value of 1.025 and 1.023 respectively (acceptable range +/- 0.002).<br>2. Identifies Maximum Power Tilt exceeds 1.02 and enters T/S 3.2.4.</span>
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
<td style="padding:6px;color:#c8cdd5;">3.0</td>
<td style="padding:6px;color:#c8cdd5;">Read Precautions and Limitations 3.1-3.5</td>
<td style="padding:6px;color:#9ca3af;">Operator reads and initials Precautions and Limitations.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">IF one PR channel is inoperable, AND RTP is > 75%, THEN ...</td>
<td style="padding:6px;color:#9ca3af;">Determines all PR channels are operable; step is N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2</td>
<td style="padding:6px;color:#c8cdd5;">RECORD date, time, reactor power, and reason for performing QPTR on Attachment 2</td>
<td style="padding:6px;color:#9ca3af;">Records current date, time, 100% reactor power, and checks OHA E-46 as reason for performance in Attachment 2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">RECORD NI Channels N-41 through N-44 Upper and Lower Detector currents and 100% NI Current Values from S2.RE-RA.ZZ-0011, Table 2</td>
<td style="padding:6px;color:#9ca3af;">Records N41-44 upper and lower detector currents from initial conditions and 100% NI current values from REM Table 2 on Attachment 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Complete Attachment 1 QPTR calculations</td>
<td style="padding:6px;color:#9ca3af;">Calculates Detector Ratio for each top and bottom detector. Adds detector ratios to get Sum. Divides Sum by number of operable detectors (4) to get Average Detector Ratios. Divides each detector ratio by average to get Power Tilt for each detector.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD Power Tilt on Attachment 2 for each detector. Maximum Power Tilt and applicable detector identification. Test Results SAT or UNSAT.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Maximum Power Tilt for N42T = 1.025 and N42B = 1.023 (+/- 0.002). Marks UNSAT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.6</td>
<td style="padding:6px;color:#c8cdd5;">DIRECT a second Operator to perform Independent Verification of calculations in Attachment 1</td>
<td style="padding:6px;color:#9ca3af;">CUE: IV is complete SAT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF Maximum Power Tilt for any detector exceeds 1.02, THEN REFER to T/S 3.2.4 for corrective actions</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines maximum power tilt exceeds 1.02 and determines entry into Tech Spec 3.2.4 IS required.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1-5.3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Surveillance is UNSAT. RECORD NOTF number(s) AND the reason for unsatisfactory completion.</td>
<td style="padding:6px;color:#9ca3af;">Determines surveillance is UNSAT. CRS will initiate the NOTF and notify Reactor Engineering.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 5.1.5 and 5.1.7 are the discriminating steps. After performing the multi-step calculation, the applicant must determine that the Maximum Power Tilt (N42T = 1.025, N42B = 1.023) exceeds the TS 3.2.4 limit of 1.02. The dropped rod (204) causes asymmetric flux distribution in the N42 quadrant. The applicant must mark the surveillance UNSAT and identify entry into TS 3.2.4 for corrective actions. This is an alternate path JPM because the expectation is a SAT surveillance, but the plant data drives an UNSAT result.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.NIS-0002 (Rev 14), S2.RE-RA.ZZ-0011 Salem 2 Cycle 23 REM (Rev 17), Tech Spec 3.2.4 (QPTR) | Task: N0150020201 | K/A: G2.1.43 — Ability to use procedures to determine the effects on reactivity of plant changes | Source: New | <a href="/salem-study-system/exam-pdfs/2018-jpm-ro-a3.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related procedures: [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]], [[AB.ROD-0002 — Dropped Rod]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]], [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related exam: [[2018 NRC Operating Exam]]
