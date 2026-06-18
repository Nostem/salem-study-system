---
title: "2014 JPM RO-A1-1 — Measure Leakage to the Containment Sump"
category: exams
status: draft
aliases:
  - 2014 JPM RO-A1-1
  - 2014 JPM RO-A1.1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1-1 — Measure Leakage to the Containment Sump</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.25 (RO 3.9 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at 100% power, steady state, BOL.<br>
At 0750, OHA C-2 CNTMT SUMP PMP START unexpectedly annunciates, along with OHA A-41. The Aux typewriter shows 21 containment sump pump has started. 2 minutes later, OHA C-2 clears, OHA A-41 annunciates, and the Aux typewriter shows 21 containment sump pump has stopped. The plant remains stable, no indications of a RCS leak are apparent, and no operations have been performed which would cause containment sump level to rise.<br><br>
<strong>Initiating Cue:</strong><br>
You are the RO. Calculate the Containment Sump leak rate IAW S2.OP-SO.RC-0004, Identifying and Measuring Leakage, Section 5.3. Assume any required IV's will be performed SAT if needed.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Operator calculates leakage into Containment Sump of 0.3 gpm.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:80px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.RC-4 5.3.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Each time a Containment Sump Pump starts, RECORD the following on Attachment 1, Section 2.0: Operating Containment Sump Pump Number; Time of pump start</td>
<td style="padding:6px;color:#9ca3af;">Records "21 cont sump". <span class="jpm-critical">Records time of pump start.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.RC-4 5.3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CALCULATE elapsed time in minutes between start time and previous Containment Sump Pump stop time AND RECORD on Attachment 1, Section 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Calculates elapsed time in minutes between start time and previous Containment Sump Pump stop time and records on Attachment 1, Section 2.0 by using previous stop time of 1510 yesterday, and with cue of 0750 today determines elapsed time is 1000 minutes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE no draining, sampling, or liquid additions to Containment Sump have occurred during selected time frame.</td>
<td style="padding:6px;color:#9ca3af;">Determines from initial conditions that no draining, sampling, or liquid additions to Containment Sump have occurred during selected time frame.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.RC-4 5.3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">CALCULATE Containment Sump Leak Rate using Attachment 3.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Calculates Containment Sump Leak Rate using Attachment 3 by using page 1 of 2 of Att. 3, and determines the 1000 minute line crosses the 0.3 gpm leak rate line.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.5</td>
<td style="padding:6px;color:#c8cdd5;">RECORD calculated Containment Sump leak rate on Attachment 1, Section 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Records calculated Containment Sump leak rate on Attachment 1, Section 2.0 as 0.3 gpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.6</td>
<td style="padding:6px;color:#c8cdd5;">Direct a second Operator to PERFORM Independent Verification of the calculation(s) performed in Attachment 1, Section 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Determines from initiating cue that all IV's required to be performed will be performed SAT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.7</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Containment Sump Pump stop time and date on Attachment 1, Section 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Records Containment Sump Pump stop time and date on Attachment 1, Section 2.0.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.8</td>
<td style="padding:6px;color:#c8cdd5;">IF leakage to Containment Sump exceeds 1.0 gpm AND Unit in Modes 1-4, THEN: A. INITIATE S2.OP-ST.RC-0008(Q), Reactor Coolant Water Inventory Balance. B. REFER to Technical Specification 3.4.7.2.</td>
<td style="padding:6px;color:#9ca3af;">Determines leakage to Containment Sump does not exceed 1.0 gpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.9</td>
<td style="padding:6px;color:#c8cdd5;">IF leakage to Containment Sump exceeds 0.85 gpm, THEN INITIATE Section 5.6 of this procedure.</td>
<td style="padding:6px;color:#9ca3af;">Determines leakage to Containment Sump does not exceed 0.85 gpm. Terminate JPM when procedure is returned to evaluator.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.3.4 is the discriminating step. The applicant must carry the 1510 (yesterday) previous stop time and the 0750 (today) start time into the elapsed-time calculation to obtain 1000 minutes, then use Attachment 3 (page 1 of 2) to read the 1000-minute line crossing the <strong>0.3 gpm</strong> leak-rate line. Because 0.3 gpm is below both action thresholds, the applicant must correctly determine leakage does NOT exceed 0.85 gpm (so Section 5.6 is NOT initiated) and does NOT exceed 1.0 gpm (so S2.OP-ST.RC-0008 / TS 3.4.7.2 are NOT required). Misreading the elapsed time or the chart, or unnecessarily entering the action thresholds, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.RC-0004 (Rev 15), S2.OP-AR.ZZ-0003 Overhead Annunciators Window C (Rev 17) | Task: N0020080101 | K/A: 2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables, etc. (3.9/4.2) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-ro-a1-1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Containment]]
- Related procedures: [[S2.OP-SO.RC-0004 — Identifying and Measuring Leakage]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related exam: [[2014 NRC Operating Exam]]
