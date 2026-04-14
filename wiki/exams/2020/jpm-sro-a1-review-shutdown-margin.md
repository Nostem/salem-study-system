---
title: "2020 JPM SRO-A1 — Review Completed Shutdown Margin"
category: exams
status: draft
aliases:
  - 2020 JPM SRO-A1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A1 — Review Completed Shutdown Margin</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.1.43 (4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 load reduction in preparation for Main Turbine valve testing was placed on hold at 90% Power due to two Control Rods (1D4 and 1D2) stopped moving.<br>
- Group Demand Counter for Control Bank D indicates 200 steps.<br>
- The CRS has declared both Control Rods INOPERABLE and entered TS LCO 3.1.3.1 Action c.3.<br>
- Current boron concentration is 1300 ppm.<br>
- Current core burnup is 4000 EFPH.<br>
Subsequently,<br>
- Reactor Engineering informs you that both Control Rods are UNTRIPPABLE.<br>
- The RO has completed a Shutdown Margin Calculation IAW SC.RE-ST.ZZ-0002 to satisfy the action requirement of TSAS 3.1.3.1 Action c.3.<br><br>
<strong>Initiating Cue:</strong><br>
Review the completed Shutdown Margin Calculation for completeness and accuracy.<br>
1. Identify discrepancies, if any, and how to correct them on the CUE SHEET by recording the step number in error and what the correction should be OR you can MARK UP the provided procedure by one lining the error and record the correction.<br>
2. Does the Shutdown Margin Calculation meet the surveillance requirement (Yes/No)? If no, briefly explain why?
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Candidate identifies the following errors in Attachment 3:<br>
1. Step 4.1.6 completed in error. Step 4.1.5 should be completed with a value of 2.<br>
2. Step 4.2.5 completed in error. Step 4.2.4 should be completed with a value of 4330 pcm.<br>
3. Step 4.2.7 completed in error. Trippable Rod Worth with Untrippable RCCA(s) should be used with a value of -2327.8 pcm (+/- 1 pcm).<br>
4. Step 4.3.1 should be the same value as calculated in step 4.2.7 of -2327.8 pcm.<br>
5. Step 4.3.5 SDM should be -269.5 pcm (+/- 1 pcm).<br>
6. Step 4.4.1 marked incorrectly as SAT. With SDM of -269.5 pcm this step should be marked as UNSAT.<br>
7. Step 4.4.2.A marked incorrectly as N/A, should be 315.5 pcm (+/- 1 pcm).<br>
8. Step 4.4.2.B marked incorrectly as N/A, should be 19% RTP (15-20% RTP).</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam"># of Dropped or Misaligned RCCA(s) — identifies step 4.1.6 incorrectly filled out</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Both rods are UNTRIPPABLE, not dropped/misaligned. Step 4.1.5 should be completed with a value of 2 untrippable RCCA(s).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Penalty for Dropped or Misaligned RCCA(s) — wrong penalty section used</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Step 4.2.4 "Penalty for Untrippable RCCA(s)" should be used. Calculates a value of 4330 pcm.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.2.6</td>
<td style="padding:6px;color:#c8cdd5;">Integral Rod Worth inserted at position in Item 4.1.3</td>
<td style="padding:6px;color:#9ca3af;">Control Bank D demand at 200 steps; Table 1-7 Integral Rod Worth at D-200 = 49.2 pcm. (At 225 steps this would be 0 pcm.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.2.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Choose appropriate rod worth calculation — wrong calculation selected</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">"Trippable Rod Worth" calculation was incorrectly used. Must use "Trippable Rod Worth with Untrippable RCCA(s)" = -2327.8 pcm.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.3.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Trippable Rod Worth</td>
<td style="padding:6px;color:#9ca3af;">Corrects to same value as step 4.2.7: -2327.8 pcm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.3.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">SDM calculation</td>
<td style="padding:6px;color:#9ca3af;">Calculated SDM of -2815.5 pcm is incorrect. Correct SDM = -269.5 pcm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Is the SDM equal to or more negative than (-) 1300 pcm?</td>
<td style="padding:6px;color:#9ca3af;">Incorrectly marked SAT. With SDM of -269.5 pcm, step should be marked UNSAT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.2.A</td>
<td style="padding:6px;color:#c8cdd5;">Calculate power defect required to achieve required SDM</td>
<td style="padding:6px;color:#9ca3af;">Incorrectly marked N/A. Required power defect = 315.5 pcm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.2.B</td>
<td style="padding:6px;color:#c8cdd5;">Determine Reactor Power Level from power defect and boron concentration</td>
<td style="padding:6px;color:#9ca3af;">Incorrectly marked N/A. Per Figure 17A: 19% RTP (acceptable band 15-20% RTP).</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The RO's calculation incorrectly treated the rods as dropped/misaligned rather than untrippable. The candidate must recognize that untrippable rods require a different calculation pathway (step 4.1.5 instead of 4.1.6, step 4.2.4 instead of 4.2.5, and the "Trippable Rod Worth with Untrippable RCCA(s)" formula in step 4.2.7). This cascading error changes the SDM result from SAT to UNSAT, requiring power reduction to approximately 19% RTP to restore adequate shutdown margin.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: SC.RE-ST.ZZ-0002 (R24), S2.RE-RA.ZZ-0016 (R12) | Task: N1200030301 | K/A: G2.1.43 — Ability to use procedures to determine the effects on reactivity of plant changes, such as reactor coolant system temperature, &delta;t, control rod position, and boron concentration | Source: Modified | <a href="/salem-study-system/exam-pdfs/2020-jpm-sro-a1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related exam: [[2020 NRC Operating Exam]]
