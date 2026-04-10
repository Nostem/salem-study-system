---
title: "2022 JPM RO-A3 — Manual QPTR Calculation IAW S2.OP-ST.NIS-0002"
category: exams
status: draft
aliases:
  - 2022 JPM RO-A3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A3 — Perform Manual QPTR Calculation Surveillance</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.2.12 (3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 was operating at 100% power when rod 2D4 dropped fully into the core. OHAs E-46, LOWER SECT DEV ABV 50% PWR, and E-38 UPPER SECT DEV ABV 50% PWR, annunciated, cleared and continue to annunciate then clear.<br>
- Operators have not yet started reducing power to 74% to comply with TSAS 3.1.3.1.c.3.d IAW S2.OP-AB.ROD-0002, Dropped Rod.<br><br>
<strong>Initiating Cue:</strong><br>
- The CRS has directed you to perform a Manual QPTR Calculation IAW S2.OP-ST.NIS-0002. Maintain all calculations at three significant digits to the right of the decimal point (Thousandths) unless otherwise directed by procedure.<br>
- All pre-requisites are completed SAT.<br>
- Notify CRS of test results after Step 5.3 is complete and compliance with Technical Specification.<br>
- NI currents are:<br><br>
<table style="font-size:12px;border-collapse:collapse;margin-left:16px;">
<tr><th style="padding:4px 12px;color:#6b7280;"></th><th style="padding:4px 12px;color:#6b7280;">Upper Detectors</th><th style="padding:4px 12px;color:#6b7280;">Lower Detectors</th></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N41</td><td style="padding:4px 12px;color:#c8cdd5;">189</td><td style="padding:4px 12px;color:#c8cdd5;">188</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N42</td><td style="padding:4px 12px;color:#c8cdd5;">206</td><td style="padding:4px 12px;color:#c8cdd5;">221</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N43</td><td style="padding:4px 12px;color:#c8cdd5;">192</td><td style="padding:4px 12px;color:#c8cdd5;">193</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N44</td><td style="padding:4px 12px;color:#c8cdd5;">135</td><td style="padding:4px 12px;color:#c8cdd5;">151</td></tr>
</table>
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Manually calculates the highest QPTR as UNSAT (highest N42T AND N42B) with a value of 1.041 and 1.032 respectively (+/- 0.002).<br>
2. Identifies Maximum Power Tilt exceeds 1.02 and identifies T/S LCO 3.2.4 is NOT met.</span>
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
<td style="padding:6px;color:#9ca3af;">Reads P&Ls prior to performing calculations</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2</td>
<td style="padding:6px;color:#c8cdd5;">Record date, time, reactor power, and reason for QPTR on Attachment 2</td>
<td style="padding:6px;color:#9ca3af;">Records current date/time, 100% reactor power, and OHA E-46 as reason</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">Record NI currents and 100% NI current values from REM on Attachment 1</td>
<td style="padding:6px;color:#9ca3af;">Records N41-44 upper and lower detector currents and 100% values from S2.RE-RA.ZZ-0011 Table 2</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Complete Attachment 1 QPTR calculations</td>
<td style="padding:6px;color:#9ca3af;">For each upper and lower detector: calculates detector ratio (current/100% value), sums ratios, divides by number of operable detectors (4) to get average, divides each ratio by average to get power tilt</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Record Power Tilt, Maximum Power Tilt, and test results on Attachment 2</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Maximum Power Tilt for N42T = 1.041 and N42B = 1.032 (+/- 0.002). Marks UNSAT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.6</td>
<td style="padding:6px;color:#c8cdd5;">Direct Independent Verification of Attachment 1 calculations</td>
<td style="padding:6px;color:#9ca3af;">CUE: IV is complete SAT</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine Maximum Power Tilt exceeds 1.02 and refer to TS 3.2.4</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines QPTR exceeds 1.02 limit and TS LCO 3.2.4 is NOT met</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Record surveillance as UNSAT, initiate NOTF</td>
<td style="padding:6px;color:#9ca3af;">Records surveillance as UNSAT. CRS initiates NOTF and notifies Reactor Engineering.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;font-size:11px;color:#9ca3af;border:1px solid #1a2035;border-radius:4px;">
<strong style="color:#c8cdd5;">Answer Key (Upper Detectors):</strong><br>
<table style="width:100%;font-size:10px;border-collapse:collapse;margin-top:4px;">
<tr style="color:#6b7280;"><th style="padding:3px;">Det</th><th style="padding:3px;">Current</th><th style="padding:3px;">100% Val</th><th style="padding:3px;">Ratio</th><th style="padding:3px;">Avg</th><th style="padding:3px;">Power Tilt</th></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N41T</td><td style="padding:3px;">189</td><td style="padding:3px;">221.1</td><td style="padding:3px;">0.855</td><td style="padding:3px;">0.864</td><td style="padding:3px;">0.990</td></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N42T</td><td style="padding:3px;">206</td><td style="padding:3px;">229.1</td><td style="padding:3px;">0.899</td><td style="padding:3px;">0.864</td><td style="padding:3px;color:#fbbf24;font-weight:700;">1.041</td></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N43T</td><td style="padding:3px;">192</td><td style="padding:3px;">218.6</td><td style="padding:3px;">0.878</td><td style="padding:3px;">0.864</td><td style="padding:3px;">1.016</td></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N44T</td><td style="padding:3px;">135</td><td style="padding:3px;">163.7</td><td style="padding:3px;">0.825</td><td style="padding:3px;">0.864</td><td style="padding:3px;">0.955</td></tr>
</table>
<strong style="color:#c8cdd5;">Answer Key (Lower Detectors):</strong><br>
<table style="width:100%;font-size:10px;border-collapse:collapse;margin-top:4px;">
<tr style="color:#6b7280;"><th style="padding:3px;">Det</th><th style="padding:3px;">Current</th><th style="padding:3px;">100% Val</th><th style="padding:3px;">Ratio</th><th style="padding:3px;">Avg</th><th style="padding:3px;">Power Tilt</th></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N41B</td><td style="padding:3px;">188</td><td style="padding:3px;">226</td><td style="padding:3px;">0.832</td><td style="padding:3px;">0.878</td><td style="padding:3px;">0.948</td></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N42B</td><td style="padding:3px;">221</td><td style="padding:3px;">243.8</td><td style="padding:3px;">0.906</td><td style="padding:3px;">0.878</td><td style="padding:3px;color:#fbbf24;font-weight:700;">1.032</td></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N43B</td><td style="padding:3px;">193</td><td style="padding:3px;">215.6</td><td style="padding:3px;">0.895</td><td style="padding:3px;">0.878</td><td style="padding:3px;">1.019</td></tr>
<tr><td style="padding:3px;color:#c8cdd5;">N44B</td><td style="padding:3px;">151</td><td style="padding:3px;">172.1</td><td style="padding:3px;">0.877</td><td style="padding:3px;">0.878</td><td style="padding:3px;">0.999</td></tr>
</table>
</div>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.1.7 is the discriminating step -- after completing the multi-step calculation, the applicant must recognize that the Maximum Power Tilt (N42T = 1.041, N42B = 1.032) exceeds the TS 3.2.4 limit of 1.02 and declare TS LCO 3.2.4 NOT met. The dropped rod (2D4) in the N42 quadrant causes asymmetric flux distribution. The applicant must mark the surveillance UNSAT and initiate corrective actions.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.NIS-0002 (Rev 15), REM Salem 2 Cycle 25 (Rev 33) | Task: N0150020201 | K/A: G2.2.12 — Knowledge of surveillance procedures | Source: Bank (Rev 06) | <a href="/salem-study-system/exam-pdfs/2022-jpm-ro-a3.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related procedures: [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]], [[AB.ROD-0002 — Dropped Rod]]
- Related exam: [[2022 NRC Operating Exam]]
