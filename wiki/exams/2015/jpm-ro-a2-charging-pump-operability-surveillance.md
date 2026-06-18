---
title: "2015 JPM RO-A2 — Perform a Centrifugal Charging Pump Operability Surveillance"
category: exams
status: draft
aliases:
  - 2015 JPM RO-A2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A2 — Perform a Centrifugal Charging Pump Operability Surveillance</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.2.37 (SRO 4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Operators have just performed the normal 92 day surveillance for 11 Charging Pump IAW S1.OP-ST.CVC-0003, Inservice Testing &ndash; 11 Charging Pump.<br><br>
<strong>Initiating Cue:</strong><br>
Review the surveillance for completeness and accuracy. Perform step 5.3 Acceptance Criteria and determine if it is satisfactory. Note any discrepancies and/or actions required on Attachment 5 of procedure.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determine Bearing Vibration position P1H is incorrectly listed as being in "Alert Range SAT" when it is actually in "Required Action Range UNSAT".<br>2. Determine the 1SW185 stroke time is incorrectly listed as being in the "Required Evaluation Range SAT" when it is actually in the "Acceptable Range SAT".<br>3. Determines Surveillance performance is UNSAT IAW Acceptance Criteria 5.3.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.3.1</td>
<td style="padding:6px;color:#c8cdd5;">This surveillance is satisfactory when Attachment 3 is completed with equipment listed meeting the Technical Specification Acceptance Criteria (ASME) stated in the attachment. OR</td>
<td style="padding:6px;color:#9ca3af;">Reviews satisfactory acceptance criteria branch.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">This surveillance is unsatisfactory. A. INITIATE NOTF(s) to correct unsatisfactory condition(s). B. RECORD NOTF number(s), and reason for unsatisfactory completion on Attachment 5 in the Comments Section.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Reviews Attachment 3 and determines Pump Inboard Vibration Position P1H value of 0.710 in/sec is incorrectly initialed in the Alert Range SAT column, by checking S1.RA-ST.CVC-0003, page 5, and determining that if the value is &gt;0.70 it is in the Required Action Range UNSAT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.2 (cont) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Review 1SW185 Stroke Time against acceptance criteria.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Reviews Attachment 3 and determines 1SW185 Stroke Time test of 5.25 seconds is incorrectly initialed in the Required Evaluation Range SAT, by checking S1.RA-ST.CVC-0003, page 7, and determining that if the value is between 1.8-5.4 seconds it is in the Acceptable Range (seconds).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.2 (cont)</td>
<td style="padding:6px;color:#c8cdd5;">Determine whether the 1SW185 re-test stroke time was required.</td>
<td style="padding:6px;color:#9ca3af;">Determines that the re-test stroke time of 1SW185 was not required to be performed. Note: The re-test is to be performed immediately if time falls in the Required Evaluation Range SAT (Section 5.4.2.K.1). The re-test was documented on attachment 5 and as additional stroke time on Attachment 3 Section 4.0.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.2 (cont) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine overall surveillance result.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines that the surveillance is UNSAT based on the Pump Inboard Vibration Position P1H value.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">—</td>
<td style="padding:6px;color:#c8cdd5;">Terminate the JPM when the tear off sheet and procedure are returned.</td>
<td style="padding:6px;color:#9ca3af;">Tear off sheet and procedure returned.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is a surveillance-review JPM with no plant manipulation — the discriminating step is recognizing the <span class="hi-exam">Pump Inboard Bearing Vibration Position P1H value of 0.710 in/sec</span>. The applicant must check S1.RA-ST.CVC-0003 page 5 and recognize that &gt;0.70 in/sec falls in the Required Action Range (UNSAT), even though the data sheet was incorrectly initialed in the Alert Range SAT column — so the overall surveillance is UNSAT and a NOTF is required. The 1SW185 stroke time of 5.25 sec is a secondary trap: it was mis-recorded as "Required Evaluation Range SAT," but 1.8–5.4 sec is actually the Acceptable Range, which means the immediate re-test it triggered was not actually required. The pump operability determination hinges on the bearing vibration, not the valve stroke time.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-ST.CVC-0003 (Rev 25), S1.RA-ST.CVC-0003 (Rev 13) | Task: N0040370201 | K/A: G2.2.37 — Ability to determine operability and/or availability of safety related equipment | Source: S1.OP-ST.CVC-0003 Inservice Testing 11 Charging Pump | <a href="/salem-study-system/exam-pdfs/2015-jpm-ro-a2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[S1.OP-ST.CVC-0003 — Inservice Testing, 11 Charging Pump]], [[S2.OP-SO.CVC-0002 — Charging Pump Operation]]
- Related exam: [[2015 NRC Operating Exam]]
