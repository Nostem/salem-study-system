---
title: "2020 JPM SRO-A3 — Determine Component Operability and TS Actions"
category: exams
status: draft
aliases:
  - 2020 JPM SRO-A3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A3 — Determine Component Operability and TS Actions</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.2.37 (4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem 1 is at 100% power.<br>
- 13 SW Pump is C/T for motor replacement. Tagged at 0300 hours today.<br>
- 1A EDG fails its Surveillance Test and was declared INOPERABLE today at 1200 hours.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Unit 1 CRS.<br>
What Technical Specification Action statement(s) are applicable and why?
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Determines T/S 3.8.1.1 actions b.1 (1 hour), b.3 (24 hours), b.4 (72 hours) is applicable. The candidate provides correct supporting information to T/S action and IAW attached answer key.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Part 1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">What Technical Specification Action statement(s) are applicable and why?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">TS 3.8.1.1 Action b.1 (1 hour) — perform operability verification of offsite sources.<br>TS 3.8.1.1 Action b.3 (24 hours) — demonstrate OPERABILITY of remaining EDGs.<br>TS 3.8.1.1 Action b.4 (72 hours) — restore 1A EDG to OPERABLE status.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#1a1400;border-left:3px solid #fbbf24;border-radius:0 4px 4px 0;">
<strong style="color:#fbbf24;">SW Operability Analysis (Key to Correct Answer):</strong><br>
<span style="color:#c8cdd5;">
With 13 SW Pump C/T, TWO SW Loops remain OPERABLE because:<br>
- One OPERABLE SW pump powered from A vital bus: YES (15 & 16 SW Pumps)<br>
- One OPERABLE SW pump powered from B vital bus: YES (14 SW Pump)<br>
- One OPERABLE SW pump powered from C vital bus: YES (11 & 12 SW Pumps)<br>
- Two OPERABLE SW pumps per Bay: YES (#1 Bay = 11 & 12; #3 Bay = 15 & 16)<br><br>
Since TWO SW Loops remain OPERABLE, TS 3.7.4.1 is NOT applicable, and therefore TS 3.8.1.1 Action b.2 (verify redundant required features OPERABLE within 4 hours) is NOT required. This is Special Case D (Service Water) / Case #1 from S1.OP-SO.DG-0005, Exhibit 1.
</span>
</div>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The candidate must recognize that 13 SW Pump being C/T does NOT make a SW loop inoperable. Per S1.OP-SO.SW-0005, two independent operable SW loops require one pump per vital bus and two pumps per bay. With 13 SW Pump C/T, all four criteria are still met. Therefore TS 3.8.1.1 Action b.2 (4-hour required feature verification) does NOT apply — only the standard single-EDG-inoperable actions (b.1, b.3, b.4) are entered.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-SO.DG-0005 (R10), S1.OP-SO.SW-0005 (R47), Salem Unit 1 Tech Specs 3.8.1.1 | Task: 112670302 | K/A: G2.2.37 — Ability to determine operability and/or availability of safety-related equipment | Source: Modified | <a href="/salem-study-system/exam-pdfs/2020-jpm-sro-a3.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]], [[Service Water]]
- Related procedures: [[S1.OP-SO.DG-0005 — EDG Operability Determination]]
- Related tech specs: [[TS 3/4.8 — Electrical]], [[TS 3/4.7 — Plant Systems]]
- Related exam: [[2020 NRC Operating Exam]]
