---
title: "2016 JPM RO-A1-1 — Measure Leakage to the Containment Sump"
category: exams
status: draft
aliases:
  - 2016 JPM RO-A1-1
  - 2016 JPM RO-A1.a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1-1 — Measure Leakage to the Containment Sump</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.25 (3.9/4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at 100% power, steady state, SOL.<br>
At 0015, OHA C-2 CNTMT SUMP PMP START unexpectedly annunciates, along with OHA A-41. The Aux typewriter shows 21 containment sump pump has started. 2 minutes later, OHA C-2 clears, OHA A-41 annunciates, and the Aux typewriter shows 21 containment sump pump has stopped. The plant remains stable, no indications of a RCS leak are apparent, and no operations have been performed which would cause containment sump level to rise.<br><br>
<strong>Initiating Cue:</strong><br>
You are the RO. Calculate the leak rate into the Containment Sump by performing Section 5.3 of S2.OP-SO.RC-0004, Identifying and Measuring Leakage.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Calculate leakage into Containment Sump of 0.85-1.0 gpm.</span>
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
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.1</td>
<td style="padding:6px;color:#c8cdd5;">IF either Containment Sump Pump AUTO starts, THEN RECORD the following on Attachment 1, Section 2.0: Operating Containment Sump Pump Number; Time of pump start (*)</td>
<td style="padding:6px;color:#9ca3af;">Records 21 Cont Sump Pump. <span class="jpm-critical">Records time of pump start as 0015 (*)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.RC-4 5.3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CALCULATE elapsed time in minutes between start time and previous Containment Sump Pump stop time AND RECORD on Attachment 1, Section 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Calculates elapsed time in minutes between start time and previous Containment Sump Pump stop time and records on Attachment 1, Section 2.0 by using previous stop time of 1855 yesterday, and with cue of 0015 today determines elapsed time is 320 minutes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE no draining, sampling, or liquid additions to Containment Sump have occurred during selected time frame.</td>
<td style="padding:6px;color:#9ca3af;">Determines from initial conditions that no draining, sampling, or liquid additions to Containment Sump have occurred during selected time frame.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.RC-4 5.3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">CALCULATE Containment Sump Leak Rate using Attachment 3.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Calculates Containment Sump Leak Rate using Attachment 3 (page 1 of 2), and determines the 320 minute line crosses the 0.9 gpm leak rate line. Note: Due to no increment between 300 and 350 minutes, extrapolation of data may result in leak rate slightly above or below 0.9 gpm. However, the leakrate MUST be determined to be within the bounding numbers for actions required &gt;0.85 gpm (to initiate Section 5.6) and &gt;1.0 gpm (to initiate S2.OP-ST.RC-0008).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.5</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Containment Sump Pump stop time and date on Attachment 1, Section 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Records Containment Sump Pump stop time as 0017 and todays date on Attachment 1, Section 2.0.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.6</td>
<td style="padding:6px;color:#c8cdd5;">IF leakage to Containment Sump exceeds 1.0 gpm AND Unit in Modes 1-4, THEN: A. INITIATE S2.OP-ST.RC-0008(Q), Reactor Coolant Water Inventory Balance. B. REFER to Technical Specification 3.4.7.2.</td>
<td style="padding:6px;color:#9ca3af;">Determines leakage to Containment Sump does not exceed 1.0 gpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.RC-4 5.3.7</td>
<td style="padding:6px;color:#c8cdd5;">IF leakage to Containment Sump exceeds 0.85 gpm, THEN INITIATE Section 5.6 of this procedure.</td>
<td style="padding:6px;color:#9ca3af;">Determines leakage to Containment Sump does exceed 0.85 gpm, and initiates Section 5.6 of procedure. Terminate JPM when procedure is returned to evaluator.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.3.4 is the discriminating step — the applicant must use Attachment 3 to calculate that 320 minutes between sump pump cycles corresponds to approximately 0.9 gpm leak rate. The two action thresholds bracket the answer: leak rate must be determined to be &gt;0.85 gpm (which initiates Section 5.6) but ≤1.0 gpm (so Section 5.6 alone is initiated, and TS 3.4.7.2 / S2.OP-ST.RC-0008 are NOT required). The 1855 previous stop time and 0015 current start time are both given on the Aux typewriter and must be carried correctly into the elapsed-time calculation.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.RC-0004 (R16), S2.OP-AR.ZZ-0003 Window C (R19) | Task: N0020080101 | K/A: G2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-ro-a1a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Containment]]
- Related procedures: [[S2.OP-SO.RC-0004 — Identifying and Measuring Leakage]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related exam: [[2016 NRC Operating Exam]]
