---
title: "2012 JPM RO-A1-2 — Perform a Manual AFD Calculation"
category: exams
status: draft
aliases:
  - 2012 JPM RO-A1-2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1-2 — Perform a Manual AFD Calculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO | G2.1.18 (RO 3.6 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Salem Unit 1 completed a down power to 73% power 15 minutes ago IAW TSAS 3.1.3.1.c.3.d due to a single control rod being declared inoperable. The AFD Monitor Alarm for the Auxiliary Annunciator was determined to be inoperable 10 minutes ago.<br><br>
<strong>Initiating Cue:</strong><br>
You are directed to perform S1.OP-ST.NIS-0001(Q), Power Distribution – Axial Flux Difference in response to the AFD Monitor Alarm being inoperable. Current AFD Channel Readings are: Channel I: -8.9; Channel II: -8.6; Channel III: -10.2; Channel IV: -9.3. The component Off Normal and Off Normal Tagged lists have been reviewed and no systems or support systems are affected for this procedure.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Completes applicable portion of Attachment 3 of S1.OP-ST.NIS-0001, and determines Channel III is outside the AFD Target Band.</span>
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
<td style="padding:6px;color:#c8cdd5;">2.1–2.3</td>
<td style="padding:6px;color:#c8cdd5;">N/A Sections 5.1 and 5.2; review Off Normal lists; confirm Mode 1 &gt;15% RTP.</td>
<td style="padding:6px;color:#9ca3af;">Identifies Sections 5.1/5.2 not performed; determines from ICs unit is Mode 1 &gt;15% power.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1.B</td>
<td style="padding:6px;color:#c8cdd5;">ENTER AFD Target (100% value) from S1.RE-RA.ZZ-0011 Table 3.</td>
<td style="padding:6px;color:#9ca3af;">Enters -1.5 for the 100% AFD Target.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">CALCULATE AFD Target Value: (A × B) / 100 = AFD Target (present power), where A = present power, B = 100% AFD Target.</td>
<td style="padding:6px;color:#9ca3af;">Calculates 73 × -1.5 / 100 = -1.1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">DETERMINE AFD Target Band Upper and Lower Limits: +6 + (C) = Upper; -9 + (C) = Lower.</td>
<td style="padding:6px;color:#9ca3af;">Upper Limit = +6 + (-1.1) = +4.9; Lower Limit = -9 + (-1.1) = -10.1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1.F *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">DETERMINE if any Channel is operating outside the Target Band Upper or Lower Limits (inclusive).</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Channel III (-10.2) is operating outside the Lower Target Band limit of -10.1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1.I</td>
<td style="padding:6px;color:#c8cdd5;">IF one or more AFD Channels indicate outside the Target Band, THEN continue to record data IAW Section 5.4, AFD Alarm Condition.</td>
<td style="padding:6px;color:#9ca3af;">Determines continued readings are required IAW Section 5.4. Terminate JPM when this determination is made.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is <strong>5.3.1.F</strong>. After computing the target band (Upper +4.9, Lower -10.1) the applicant must compare all four channel readings and recognize that only <strong>Channel III at -10.2 falls outside the inclusive lower limit of -10.1</strong> — a 0.1 margin that traps anyone who rounds the band or skips the power-adjusted target calculation. The other three channels (-8.9, -8.6, -9.3) are inside the band. Identifying any channel as in/out incorrectly, or failing to scale the -1.5 target to 73% power, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-ST.NIS-0001(Q) (Rev 9) Power Distribution – Axial Flux Difference; Salem Unit 1 COLR Cycle 22 (Rev 4); S1.RE-RA.ZZ-0011(Q) Tables (Rev 343) | Task: N0150010201 | K/A: 2.1.18 — Ability to make accurate, clear, and concise logs, records, status boards, and reports (3.6) | Source: New | <a href="/salem-study-system/exam-pdfs/2012-jpm-ro-a1-2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related procedures: [[S2.OP-ST.NIS-0001 — Power Distribution AFD Surveillance]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related exam: [[2012 NRC Operating Exam]]
