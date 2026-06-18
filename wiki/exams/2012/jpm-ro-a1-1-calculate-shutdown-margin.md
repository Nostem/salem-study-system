---
title: "2012 JPM RO-A1-1 — Calculate Shutdown Margin"
category: exams
status: draft
aliases:
  - 2012 JPM RO-A1-1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1-1 — Calculate Shutdown Margin</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO | G2.1.25 (RO 3.9 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> Yes (40 minutes)<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 1 Reactor Power is 75%. Control Bank D is at 170 steps.<br>
Current boron concentration is 100 ppm.<br>
Current core burnup is 11890 EFPH.<br><br>
<strong>Initiating Cue:</strong><br>
Control Rod 1 D5 has been declared INOPERABLE at 1000 today due to not moving during a rod exercise test. You have been directed to perform a Shutdown Margin Calculation IAW SC.RE-ST.ZZ-0002 to satisfy the action requirement of TSAS 3.1.3.1 Action c.3. The current time is 1020. This is a time critical JPM. Time will commence when you are provided with the applicable procedures.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Perform SDM calculation and determine SDM is SAT, and within a band of -2513 to -2646 pcm.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.0</td>
<td style="padding:6px;color:#c8cdd5;">Review Precautions &amp; Limitations (Section 3.0) of SC.RE-ST.ZZ-0002.</td>
<td style="padding:6px;color:#9ca3af;">Operator reviews P&amp;Ls and signs off Steps 3.1–3.11.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.C</td>
<td style="padding:6px;color:#c8cdd5;">SELECT the applicable step: SDM verified with reactor critical (Mode 1 or 2) and one or more control rods inoperable, THEN COMPLETE Attachment 3.</td>
<td style="padding:6px;color:#9ca3af;">Operator determines 5.1.1.C is correct for current conditions and refers to Attachment 3 (Unit is in Mode 1).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att. 3 Sec. 4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Enter data points and perform the SDM calculations using Tables and the Curve Book, adjusting for 75% power.</span></td>
<td style="padding:6px;color:#9ca3af;"><span class="hi-exam">Inputs: 75% power, 100 ppm, Bank D @ 170 steps, 11890 EFPH, 1 inoperable rod. Computes total available rod worth less stuck-rod / uncertainty terms to a final SDM (Item 4.3.4) in the band -2513.7 to -2645.2 pcm (≈ -2597.8 pcm).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IS the SDM (Item 4.3.4) EQUAL TO OR MORE NEGATIVE THAN (-)1300 PCM?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator compares the calculated SDM against the Mode 1/2 acceptance criterion of -1300 pcm, determines SDM is SAT, and initials SAT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Time</td>
<td style="padding:6px;color:#c8cdd5;">Total time from START to STOP is 40 minutes or less.</td>
<td style="padding:6px;color:#9ca3af;">Time-critical completion within the 40-minute window. Terminate JPM when procedures returned to proctor.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is <strong>4.4.2</strong> — comparing the calculated SDM against the acceptance criterion of <strong>-1300 pcm</strong> and concluding SAT. Because Control Rod 1 D5 is inoperable with the reactor critical (Mode 1), the correct path is <strong>5.1.1.C → Attachment 3</strong>, which accounts for the stuck/inoperable rod worth. The acceptable answer band (-2513.7 to -2645.2 pcm) reflects the spread allowed by using the Curve Book graphs versus tabular values. Selecting the wrong attachment, omitting the inoperable-rod adjustment, or finishing after the 40-minute time-critical window fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: SC.RE-ST.ZZ-0002(Q) (Rev 20) Shutdown Margin Calculation; S1.RE-RA.ZZ-0016(Q) (Rev 4) Curve Book | Task: N1200030301 | K/A: 2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables, etc. (3.9) | Source: New | <a href="/salem-study-system/exam-pdfs/2012-jpm-ro-a1-1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation]]
- Related tech specs: [[TS 3/4.1.1 — Boration Control]], [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related exam: [[2012 NRC Operating Exam]]
