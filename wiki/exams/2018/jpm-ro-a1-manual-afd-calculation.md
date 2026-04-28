---
title: "2018 JPM RO-A1 — Perform a Manual AFD Calculation"
category: exams
status: draft
aliases:
  - 2018 JPM RO-A1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1 — Perform a Manual AFD Calculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.25 (3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 2 completed a down power to 73% power today at 0830 IAW TSAS 3.1.3.1.c.3.d due to a single control rod being declared inoperable.<br>
- The AFD Monitor Alarm for the Auxiliary Annunciator was determined to be inoperable at 0840.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to perform a manual AFD calculation IAW Section 5.3 of S2.OP-ST.NIS-0001 (Q), Power Distribution — Axial Flux Difference.<br>
- Current AFD Channel Console Readings are:<br>
&nbsp;&nbsp;Channel I: -9.8<br>
&nbsp;&nbsp;Channel II: -9.7<br>
&nbsp;&nbsp;Channel III: -10.3<br>
&nbsp;&nbsp;Channel IV: -10.5<br>
- All prerequisites are completed SAT.<br>
- NOTIFY the CRS of the results of the surveillance after completing Step 5.3.1.F.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Completes applicable portion of Attachment 3 of S2.OP-ST.NIS-0001, and determines Channel III and IV are operating outside the AFD Target Band.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.3.1</td>
<td style="padding:6px;color:#c8cdd5;">IF AFD Monitor (XA-8740) OR Monitor Alarm (Auxiliary Annunciator) is inoperable, THEN COMPLETE Attachment 3</td>
<td style="padding:6px;color:#9ca3af;">Operator uses Attachment 3 to determine AFD.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1.A</td>
<td style="padding:6px;color:#c8cdd5;">ENTER present Reactor Power</td>
<td style="padding:6px;color:#9ca3af;">Operator enters 73% power.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1.B</td>
<td style="padding:6px;color:#c8cdd5;">ENTER AFD Target from S2.RE-RA.ZZ-0011, Tables, Table 3</td>
<td style="padding:6px;color:#9ca3af;">Operator enters (-1.5) for AFD Target using the Salem 2 Cycle 23 REM, Table 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">CALCULATE the AFD Target value IAW (Present Power / 100) x (AFD Target)</td>
<td style="padding:6px;color:#9ca3af;">Calculates AFD Target for present power level: (73/100) x (-1.5) = -1.095. IAW P&L 3.2, round to first decimal place = -1.1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">DETERMINE Upper and Lower Limits using Target Band values from REM Table 3</td>
<td style="padding:6px;color:#9ca3af;">Upper Limit: +6.0 + (-1.1) = +4.9. Lower Limit: -9.0 + (-1.1) = -10.1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.1.E</td>
<td style="padding:6px;color:#c8cdd5;">ENTER AFD Channel Readings</td>
<td style="padding:6px;color:#9ca3af;">Enters AFD values from initial conditions on Attachment 3: Ch I: -9.8, Ch II: -9.7, Ch III: -10.3, Ch IV: -10.5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1.F *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">DETERMINE channels within/outside AFD Target Band and notify CRS</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Channels III (-10.3) and IV (-10.5) are operating outside the Lower Target Band limit of -10.1. Notifies CRS of results.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.3.1.F is the discriminating step. After calculating the AFD Target (-1.1) and determining the Lower Limit (-10.1), the applicant must compare each channel reading against the limits. Channels I (-9.8) and II (-9.7) are within the band. Channels III (-10.3) and IV (-10.5) are MORE NEGATIVE than the Lower Limit of -10.1, placing them outside the target band. With two AFD channels outside the target band, TS action is required to reduce reactor power.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.NIS-0001 (Rev 13), Salem 2 Cycle 23 REM (Rev 17), Salem Unit 2 COLR Cycle 23 (Rev 7) | Task: N0150010201 | K/A: G2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables, etc. | Source: New | <a href="/salem-study-system/exam-pdfs/2018-jpm-ro-a1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related procedures: [[S2.OP-ST.NIS-0001 — Power Distribution AFD Surveillance]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]], [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related exam: [[2018 NRC Operating Exam]]
