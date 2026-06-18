---
title: "2015 JPM SRO-A2 — Determine Component Operability From Inservice Test Results"
category: exams
status: draft
aliases:
  - 2015 JPM SRO-A2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A2 — Determine Component Operability From Inservice Test Results</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.2.37 (SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
With Unit 1 operating at 100% power with no inoperable equipment, operators have just performed the normal 92 day surveillance for 11 Charging Pump IAW S1.OP-ST.CVC-0003, Inservice Testing &ndash; 11 Charging Pump. Data collection was completed at 1100 today.<br><br>
<strong>Initiating Cue:</strong><br>
Perform Step 5.4.2, Completion and Review. Note any discrepancies and/or actions required on Attachment 5 of procedure.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determine Bearing Vibration position P1H is incorrectly listed as being in "Alert Range SAT" when it is actually in "Required Action UNSAT".<br>2. Determine the 1SW185 stroke time is incorrectly listed as being in the "Required Evaluation Range SAT" when it is actually in the "Acceptable Range SAT".<br>3. Declares 11 CVCS pump inoperable.</span>
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
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.2.A *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">REVIEW this procedure with Attachments 1-5 for completeness and accuracy</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Attachment 3 Pump Inboard Vibration Position P1H value of 0.710 in/sec is incorrectly initialed in the Alert Range SAT column, by checking S1.RA-ST.CVC-0003, page 5, and determining that if the value is &gt;0.70 it is in the Required Action Range UNSAT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.2.A (cont) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Review 1SW185 stroke time against acceptance criteria</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Reviews Attachment 3 and determines 1SW185 Stroke Time test of 5.25 seconds is incorrectly initialed in the Required Evaluation Range SAT, by checking S1.RA-ST.CVC-0003, page 7, and determining that if the value is between 1.8-5.4 seconds it is in the Acceptable Range (seconds).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.2.A (cont)</td>
<td style="padding:6px;color:#c8cdd5;">Determine whether the 1SW185 re-test stroke time was required</td>
<td style="padding:6px;color:#9ca3af;">Determines that the re-test stroke time of 1SW185 was not required to be performed. Note: The re-test is to be performed immediately if time falls in the Required Evaluation Range SAT (Section 5.4.2.K.1).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.2.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF ANY pump Technical Specification Acceptance Criteria (ASME) parameter is UNSAT, in the REQUIRED ACTION RANGE, THEN: DECLARE pump inoperable; EVALUATE Technical Specification for system operability</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Pump Inboard Vibration Position P1H value of 0.710 in/sec is in the Required Action Range UNSAT. Declares 11 Charging pump inoperable. Enters LCO 3.5.2.a action a.</span> Determines a notification should be initiated and number recorded on Att. 5; IST Program Engineer should be notified.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.2.J *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF 1SW185 stroke time is within the ACCEPTABLE RANGE, THEN DECLARE 1SW185 OPERABLE</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 1SW185 stroke time of 5.25 is within the ACCEPTABLE RANGE, and declares 1SW185 OPERABLE by initialing step.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.2.K / 5.4.2.L</td>
<td style="padding:6px;color:#c8cdd5;">IF 1SW185 stroke time is within REQUIRED EVALUATION RANGE / REQUIRED ACTION RANGE, THEN</td>
<td style="padding:6px;color:#9ca3af;">Determines 1SW185 stroke time was INCORRECTLY initialed as being in the REQUIRED EVALUATION RANGE, and marks step N/A; determines it is NOT in the REQUIRED ACTION RANGE, and marks step N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.2.N</td>
<td style="padding:6px;color:#c8cdd5;">COMPLETE Attachment 5, Section 3.0</td>
<td style="padding:6px;color:#9ca3af;">Records all deficiencies, including corrective actions, in the COMMENTS Section. TS compliance, procedure compliance, and Acceptance Criteria are evaluated.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.4.2.A is the discriminating step — the SRO must catch <strong>two mis-initialed entries</strong> on the completed surveillance. (1) The P1H Pump Inboard Vibration value of <strong>0.710 in/sec</strong> was initialed as "Alert Range SAT," but because it is &gt; 0.70 in/sec it is actually in the <strong>Required Action Range UNSAT</strong> (verified against S1.RA-ST.CVC-0003 page 5). (2) The <strong>1SW185</strong> stroke time of <strong>5.25 seconds</strong> was initialed as "Required Evaluation Range SAT," but because it falls in the 1.8&ndash;5.4 second band it is actually in the <strong>Acceptable Range</strong> (page 7) — so no re-test was required. Catching the P1H error drives the operability conclusion: per Step 5.4.2.D the SRO declares <strong>11 Charging Pump inoperable</strong> and enters <strong>LCO 3.5.2 Action a</strong>. The 1SW185 error is the "distractor" — the candidate must NOT carry it into a Required Evaluation Range re-test or an inoperability call.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-ST.CVC-0003 (Rev 25), S1.RA-ST.CVC-0003 (Rev 13), Salem Tech Specs | Task: N1230300302 | K/A: 2.2.37 — Ability to determine operability and/or availability of safety related equipment | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sro-a2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[S1.OP-ST.CVC-0003 — Inservice Testing, 11 Charging Pump]], [[S2.OP-SO.CVC-0002 — Charging Pump Operation]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related exam: [[2015 NRC Operating Exam]]
