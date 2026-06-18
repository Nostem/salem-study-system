---
title: "2014 JPM RO-A1-2 — Perform a QPTR"
category: exams
status: draft
aliases:
  - 2014 JPM RO-A1-2
  - 2014 JPM RO-A1.2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1-2 — Perform a QPTR</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.43 (RO 4.1 / SRO 4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 1 was operating at 100% power when rod 204 dropped fully into the core. OHA E-46, LOWER SECT DEV ABV 50% PWR annunciated and remains locked in.<br>
Operators have not yet started reducing power to 74% to comply with TSAS 3.1.3.1.c.3.d IAW S1.OP-AB.ROD-002, Dropped Rod.<br><br>
<strong>Initiating Cue:</strong><br>
The CRS has directed you to perform a QPTR using Manual Calculation IAW S1.OP-ST.NIS-0002.<br>
NI currents are:<br>

<table style="font-size:12px;border-collapse:collapse;margin-left:16px;">
<tr><th style="padding:4px 12px;color:#6b7280;"></th><th style="padding:4px 12px;color:#6b7280;">Upper Detectors</th><th style="padding:4px 12px;color:#6b7280;">Lower Detectors</th></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N41</td><td style="padding:4px 12px;color:#c8cdd5;">190</td><td style="padding:4px 12px;color:#c8cdd5;">200</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N42</td><td style="padding:4px 12px;color:#c8cdd5;">200</td><td style="padding:4px 12px;color:#c8cdd5;">215</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N43</td><td style="padding:4px 12px;color:#c8cdd5;">180</td><td style="padding:4px 12px;color:#c8cdd5;">175</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">N44</td><td style="padding:4px 12px;color:#c8cdd5;">200</td><td style="padding:4px 12px;color:#c8cdd5;">205</td></tr>
</table>
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Perform the QPTR and calculate the highest QPTR as SAT.</span>
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
<td style="padding:6px;color:#c8cdd5;">2.1</td>
<td style="padding:6px;color:#c8cdd5;">IDENTIFY sections of this procedure that are NOT to be performed with "N/A".</td>
<td style="padding:6px;color:#9ca3af;">N/A's Section 5.2, Attachment 1 Section 3.0, and Attachment 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.0</td>
<td style="padding:6px;color:#c8cdd5;">PRECAUTIONS AND LIMITATIONS</td>
<td style="padding:6px;color:#9ca3af;">Reads and initials PRECAUTIONS AND LIMITATIONS 3.1-3.5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">IF one PR channel is inoperable, AND RTP is > 75%, THEN ...</td>
<td style="padding:6px;color:#9ca3af;">Determines all PR channels are operable and step is N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Date, Time, Reactor Power, and Reason for performing QPTR Calculation on Attachment 2.</td>
<td style="padding:6px;color:#9ca3af;">Records current date, current time, 100% reactor power and checks OHA E-46 as reason for performance in Attachment 2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">RECORD on Attachment 1: NI Channels N-41, N-42, N-43, N-44 Upper and Lower Detector current readings, and Respective 100% NI Current Values from S1.RE-RA.ZZ-0011, Table 2.</td>
<td style="padding:6px;color:#9ca3af;">Records N41-44 Upper and Lower Detector current readings (from initial conditions) and 100% NI Current Values from S1.RE-RA.ZZ-0011, TABLES on Attachment 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">COMPLETE Attachment 1 calculations.</td>
<td style="padding:6px;color:#9ca3af;">Calculates Detector Ratio for each top and bottom detector; adds detector ratios to get Sum; divides Sum by number of operable detectors (4) to get Average Detector Ratios; divides each detector ratio by the average ratio to get the power tilt for each detector.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD on Attachment 2: Power Tilt for each detector; Maximum Power Tilt and applicable detector identification; Test Results by initialing SAT or UNSAT column IAW stated Acceptance Criteria.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Maximum Power Tilt for Top and Bottom will be &lt; 1.02 and marked SAT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.6</td>
<td style="padding:6px;color:#c8cdd5;">DIRECT a second Operator to perform Independent Verification of calculations in Attachment 1, Sections 1.0, 2.0 and 3.0 as applicable.</td>
<td style="padding:6px;color:#9ca3af;">CUE: IV is complete SAT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.7</td>
<td style="padding:6px;color:#c8cdd5;">IF the Maximum Power Tilt for any detector exceeds 1.02, THEN REFER to T/S 3.2.4 for corrective actions.</td>
<td style="padding:6px;color:#9ca3af;">Determines no tilt exceeds 1.02.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1</td>
<td style="padding:6px;color:#c8cdd5;">This surveillance is satisfactory when Attachment 2 or 3 is completed with the Test Data meeting the Acceptance Criteria stated.</td>
<td style="padding:6px;color:#9ca3af;">Determines surveillance is SAT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.1</td>
<td style="padding:6px;color:#c8cdd5;">COMPLETE Attachment 4, Sections 1.0 and 2.0, AND FORWARD completed procedure to SM/CRS for review.</td>
<td style="padding:6px;color:#9ca3af;">JPM is terminated when candidate returns all JPM paperwork to evaluator.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.1.5 is the discriminating step. After completing the multi-step ratio calculation on Attachment 1 (detector ratio → sum → average over 4 operable detectors → individual power tilt), the applicant must determine that the Maximum Power Tilt for every top and bottom detector remains <strong>&lt; 1.02</strong> and mark the surveillance <strong>SAT</strong>. Even though a dropped rod (204) is in the core, with these NI currents no tilt exceeds the 1.02 limit, so step 5.1.7 (refer to T/S 3.2.4) is NOT entered. The trap is assuming a dropped rod automatically yields an UNSAT/over-1.02 result — the calculation must drive the determination.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-ST.NIS-0002 (Rev 15), S1.RE-RA.ZZ-0011 (Rev 383), Tech Spec 3.2.4 | Task: N0150020201 | K/A: 2.1.43 — Ability to use procedures to determine the effects on reactivity of plant changes (4.1) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-ro-a1-2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related procedures: [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]], [[S2.RE-RA.ZZ-0011 — Tables]], [[AB.ROD-0002 — Dropped Rod]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related exam: [[2014 NRC Operating Exam]]
