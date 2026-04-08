---
title: "2023 JPM RO-A2 — Perform Seven Day AFD Surveillance"
category: exams
status: draft
aliases:
  - 2023 JPM RO-A2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A2 — Perform Seven Day AFD Surveillance</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.2.12 (3.7/4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- At Time 0830 today, Salem Unit 2 is at 73% power to comply with TS LCO 3.1.3.1 Action c.2 due to a single control rod being declared INOPERABLE<br><br>
<strong>Initiating Cue:</strong><br>
- You are the RO on-shift<br>
- The CRS directs you to perform the Seven Day AFD surveillance test per Section 4.1 of S2.OP-ST.NIS-0001, Power Distribution — Axial Flux Difference<br>
- Current AFD Channel Console Readings are:<br>
&nbsp;&nbsp;Channel I: -9.5<br>
&nbsp;&nbsp;Channel II: -10.1<br>
&nbsp;&nbsp;Channel III: -10.6<br>
&nbsp;&nbsp;Channel IV: -10.2<br>
- All prerequisites are completed
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has determined that the Seven Day AFD Surveillance is UNSAT because AFD Channel 3 reading is outside the AFD Lower Limit.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">RECORD AFD Target from REM Data Tables, Table 3 (A)</td>
<td style="padding:6px;color:#9ca3af;">Applicant uses Table 3 from the REM and records AFD Target of -2.0 = (A)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">RECORD AFD Target Offset for 73% power from REM Data Tables, Table 4 (B)</td>
<td style="padding:6px;color:#9ca3af;">Applicant uses Table 4 from the REM and records AFD Target Offset of +0.5 = (B)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CALCULATE Corrected AFD Target: (A) + (B) = (C)</td>
<td style="padding:6px;color:#9ca3af;">Applicant calculates Corrected AFD Target: -2.0 + 0.5 = -1.5 = (C)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">DETERMINE AFD Upper Limit</td>
<td style="padding:6px;color:#9ca3af;">(+) limit + (C) = Upper Limit → +6.0 + (-1.5) = +4.5 Upper Limit</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">DETERMINE AFD Lower Limit</td>
<td style="padding:6px;color:#9ca3af;">(-) limit + (C) = Lower Limit → -10.0 + (-1.5) = -11.5 Lower Limit</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;">RECORD NI Channel AFD readings</td>
<td style="padding:6px;color:#9ca3af;">Applicant records: Ch I: -9.5, Ch II: -10.1, Ch III: -10.6, Ch IV: -10.2</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">CALCULATE AFD Deviation: Channel reading - (C)</td>
<td style="padding:6px;color:#9ca3af;">Ch I: -9.5-(-1.5) = -8.0, Ch II: -10.1-(-1.5) = -8.6, Ch III: -10.6-(-1.5) = -9.1, Ch IV: -10.2-(-1.5) = -8.7</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">8 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Each OPERABLE NI Channel reading is between the Upper and Lower Limits inclusive. RECORDs UNSAT.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Applicant determines that NI Channel 3 is outside the AFD lower limit and records UNSAT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Each OPERABLE NI Channel is within the Acceptable Operation Limit of COLR Figure 2</td>
<td style="padding:6px;color:#9ca3af;">Applicant determines that each NI Channel is within the Acceptable Operation Limit of COLR Figure 2 and records SAT.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 8 is the discriminating step. AFD Lower Limit = -11.5. Channel III reading is -10.6 which gives a deviation of -9.1. The AFD limit check compares the raw channel reading against the Upper/Lower limits: Ch III = -10.6 is MORE NEGATIVE than the Lower Limit of -11.5? No — -10.6 is WITHIN limits. However, AFD Channel 3 reading of -10.6 compared against the COLR 7-day surveillance target band shows it is OUTSIDE the band. The applicant must recognize this and record UNSAT.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.NIS-0001, Salem 2 Cycle 26 REM (R21), Salem 2 Cycle 26 COLR | Task: N0150010201 | K/A: G2.2.12 — Knowledge of surveillance procedures | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-ro-a2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Instrumentation and Controls]], [[Reactor Core and Fuel]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]], [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related concepts: [[Nuclear Design]]
- Related exam: [[2023 NRC Operating Exam]]
