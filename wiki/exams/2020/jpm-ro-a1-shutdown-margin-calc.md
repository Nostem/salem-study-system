---
title: "2020 JPM RO-A1 — Calculate Shutdown Margin"
category: exams
status: draft
aliases:
  - 2020 JPM RO-A1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1 — Calculate Shutdown Margin IAW SC.RE-ST.ZZ-0002</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.43 (4.1/4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> Yes (60 minutes)<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 Reactor Power is 100%<br>
- All Control Rod Group Demand Counters are at 225 steps<br>
- Current boron concentration is 300 ppm<br>
- Current core burnup is 10000 EFPH<br>
- Control Rod 1D5 was been declared INOPERABLE at 1000 today due to not moving out during a rod exercise test<br>
- You have been directed to perform a Shutdown Margin Calculation IAW SC.RE-ST.ZZ-0002 to satisfy the action requirement of TSAS 3.1.3.1 Action c.3 for a misaligned rod<br>
- Control Rod 1D5 has been identified as trippable and is currently at 214 steps<br><br>
<strong>Initiating Cue:</strong><br>
- You have been directed to perform a Shutdown Margin Calculation IAW SC.RE-ST.ZZ-0002 Attachment 3 to satisfy the one (1) hour action requirement of TSAS 3.1.3.1 Action c.3 to verify Shutdown Margin requirements is satisfied.<br>
- When performing calculation, the CRS directs you to use only the tables as directed by SC.RE-ST.ZZ-0002, do not use Figures.<br>
- This is a Time Critical JPM.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Perform SDM calculation within 1 hour and determines SDM of -2398 (+/- 5 pcm) is satisfactory.</span>
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
<td style="padding:6px;color:#c8cdd5;">Reviews and signs off Precautions and Limitations Section 3.0</td>
<td style="padding:6px;color:#9ca3af;">Reviews Precautions & Limitations and signs off Steps 3.1-3.7.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1</td>
<td style="padding:6px;color:#c8cdd5;">SELECT the applicable step below</td>
<td style="padding:6px;color:#9ca3af;">Determines 5.1.1.C is the correct step for the current conditions, which is to complete Attachment 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Section 4.1 — Critical Conditions data entry</td>
<td style="padding:6px;color:#9ca3af;">4.1.1: 100% | 4.1.2: 300 ppm | 4.1.3: D @ 225 steps | 4.1.4: 10000 EFPH | 4.1.5: 0 | 4.1.6: 1</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Section 4.2 — Calculation of Rod Worth</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">4.2.1: -3697 | 4.2.2: -3581 | 4.2.3: 920 | 4.2.4: 0 | 4.2.5: 500 | 4.2.6: 0 | 4.2.7: -5858</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Section 4.3 — Calculation of SDM</td>
<td style="padding:6px;color:#9ca3af;">4.3.1: -5858 | 4.3.2: 636 | 4.3.3: 120 | 4.3.4: 2704 | 4.3.5: -2398</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Acceptance Criteria — IS THE SDM (Item 4.3.5) EQUAL TO OR MORE NEGATIVE THAN (-)1300 PCM?</td>
<td style="padding:6px;color:#9ca3af;">Reviews required SDM in MODE 1 or 2 of -1300 pcm and determines calculated SDM is SAT.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 4.2.6 is the discriminating step — the applicant must recognize that the rod bank penalty is determined based on the position of the rod BANK (225 steps, ARO position), NOT the position of the individual misaligned rod (214 steps). Since all rods are at ARO position, the penalty is 0 pcm. Additionally, in Step 4.1.5 the number of untrippable rods is 0 (rod 1D5 is trippable), and 4.1.6 has 1 inoperable rod.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: SC.RE-ST.ZZ-0002(Q) (R24) + S2.RE-RA.ZZ-0016(Q) (R11) | Task: N1200030301 | K/A: G2.1.43 — Ability to use procedures to determine the effects on reactivity of plant changes | Source: New | <a href="/salem-study-system/exam-pdfs/2020-jpm-ro-a1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related systems: [[Control Rod Drive]]
- Related exam: [[2020 NRC Operating Exam]]
