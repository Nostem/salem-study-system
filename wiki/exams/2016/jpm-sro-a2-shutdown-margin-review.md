---
title: "2016 JPM SRO-A2 — Review Shutdown Margin Calculation"
category: exams
status: draft
aliases:
  - 2016 JPM SRO-A2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A2 — Review Shutdown Margin Calculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.2.12 (RO 3.7 / SRO 4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> Yes (30 minutes)<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 Reactor Power is 100%.<br>
- All Control Rod Group Demand Counters are at 227 steps.<br>
- Current boron concentration is 300 ppm.<br>
- Current core burnup is 10,000 EFPH.<br>
- Control Rod 105 was declared INOPERABLE at 1000 today due to not moving out during a rod exercise test. A Shutdown Margin Calculation has been performed IAW SC.RE-ST.ZZ-0002, Shutdown Margin Calculation, to satisfy the action requirement of TSAS 3.1.3.1 Action c.3.<br>
- Control Rod 105 has been identified as trippable and is currently at 214 steps.<br>
- The current time is 1030.<br><br>
<strong>Initiating Cue:</strong><br>
1. Review the attached SDM calculation procedure SC.RE-ST.ZZ-0002 for completeness and accuracy.<br>
2. Note any discrepancies found by the review on Attachment 7.<br>
3. Determine if SDM is SAT.<br><br>
This is a time critical JPM. Time will start when procedures are given to you. Time will stop when procedures are returned to proctor.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determines the incorrect value for Control Bank Worth and Shutdown Bank Worth have been used.<br>
2. Determines SDM with correct values used is SAT.<br>
3. Completes review within 30 minutes.</span>
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
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Provide the marked up copy of SC.RE-ST.ZZ-0002 and copy of S2.RE-RA.ZZ-0016, Curve Book.</td>
<td style="padding:6px;color:#9ca3af;">Ensures Sections 3 and 4 are completed. Time Start.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Review Section 5 to ensure the correct Attachment was performed.</td>
<td style="padding:6px;color:#9ca3af;">Reviews Section 5 and determines the correct Attachment (3) was performed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Review the completed Shutdown Margin Calculation.</span></td>
<td style="padding:6px;color:#c8cdd5;">Reviews SDM and determines:<br>
1. <span class="hi-exam">An incorrect value for Total Control Bank Worth (Step 4.2.1) has been used (0 EFPH value vs current 10,000 EFPH value).</span><br>
2. <span class="hi-exam">An incorrect value for Total Shutdown Bank Worth (Step 4.2.2) has been used (0 EFPH value vs current 10,000 EFPH value).</span><br>
3. Determines Trippable Rod Worth is incorrect based on incorrect steps 4.2.1 and 4.2.2.<br>
4. Determines Ten Percent Rod Worth Penalty (step 4.3.2) is incorrect based on incorrect steps 4.2.1 and 4.2.2.<br>
5. Determines SDM is incorrect based on incorrect steps 4.2.1 and 4.2.2 and 4.3.2.<br><br>
Correct Values are:<br>
4.2.1: -3841 | 4.3.1: -5948<br>
4.2.2: -3335 | 4.3.2: 645<br>
4.2.3: 728 | 4.3.4: 2742<br>
4.2.4: 0 | 4.3.5: -2441<br>
4.2.5: 500<br>
4.2.6: 0<br>
4.2.7: -5948</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Acceptance Criteria.</td>
<td style="padding:6px;color:#9ca3af;">Determines Acceptance Criteria are still met with correct values used. Turns in procedures within 30 minutes of start time. Total time to complete JPM MUST be 30 minutes or less.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is Step 3 — the SRO must catch that the calculator used the <strong>0 EFPH</strong> rod-worth values from the Curve Book Tables instead of the <strong>10,000 EFPH</strong> values applicable to current core burnup. This propagates as four downstream errors (Trippable Rod Worth, Ten Percent Rod Worth Penalty, and SDM). Even with the correct values used, the recomputed SDM of -2441 pcm is more negative than the -1300 pcm acceptance criteria, so the SDM is still SAT — the SRO must report the discrepancies but conclude the calculation supports continued operation. Note: time-critical action limit (30 minutes) parallels the TSAS 3.1.3.1 Action c.3 commitment time. This SRO review JPM is paired with 2016 RO-A1-2 (the corresponding RO calculation JPM).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: SC.RE-ST.ZZ-0002 (Rev. 23), S2.RE-RA.ZZ-0016 Curve Book (Rev. 8), TSAS 3.1.3.1 | Task: 1200030301 | K/A: G2.2.12 — Knowledge of surveillance procedures | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-sro-a2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation]]
- Related tech specs: [[TS 3.1.3 — Movable Control Assemblies]]
- Related exam: [[2016 NRC Operating Exam]]
