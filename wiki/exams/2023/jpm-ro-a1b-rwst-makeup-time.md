---
title: "2023 JPM RO-A1.b — Determine Time to Makeup to Unit 2 RWST"
category: exams
status: draft
aliases:
  - 2023 JPM RO-A1.b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1.b — Determine Time to Makeup to Unit 2 RWST</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.23 (4.3/4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 2 is at 100% power<br>
- You are the RO on-shift<br>
- Make-up to the RWST is required to restore level to the Tech Spec minimum<br>
- Current RWST level is 40.0 feet<br>
- Current RWST boron concentration is 2360 ppm<br>
- Current BAST boron concentration is 6900 ppm<br>
- Section 5.8.3 of S2.OP-SO.CVC-0006, Boron Concentration Control, will be used to make-up to the RWST<br><br>
<strong>Initiating Cue:</strong><br>
The CRS directs you to perform the following:<br>
1. DETERMINE the boric acid flowrate to make-up to the RWST<br>
2. DETERMINE the time to raise the RWST to the Tech Spec minimum level
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has determined a boric acid flowrate of 26 gpm and will take 59.2 minutes to raise the RWST level to the Tech Spec minimum level.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Determine boric acid flowrate</td>
<td style="padding:6px;color:#9ca3af;">Per step 5.8.3.A, obtain boric flow setpoint from S2.RE-RA.ZZ-0012, Figures 100B or 100D. Determines a boric acid flowrate of 26 gpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Determine RWST Tech Spec minimum level</td>
<td style="padding:6px;color:#9ca3af;">Per TS 3.5.4, determines the RWST minimum level is 40.5 feet (363280 gallons).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines the amount of make-up (in gallons) required to raise RWST level from 40.0 feet to Tech Spec minimum level (40.5 feet)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Using Tank Curves for Unit 2 RWST: 40.0 feet = 360000 gallons, 40.5 feet = 364500 gallons. 364500 - 360000 = 4500 gallons.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine the amount of time to raise RWST level to the Tech Spec minimum level</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines it will take 59.2 minutes: (4500 gallons / 76 gpm = 59.2 minutes). 76 gpm = 26 gpm boric acid + 50 gpm primary water.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The calculation chain: (1) look up boric acid flow from REM figures based on RWST and BAST boron concentrations → 26 gpm, (2) find TS minimum RWST level → 40.5 feet, (3) convert feet to gallons using tank curves → 4500 gallons needed, (4) total makeup flow = boric acid + primary water (26 + 50 = 76 gpm), (5) time = 4500/76 = 59.2 minutes.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.CVC-0006, S2.RE-RA.ZZ-0012, S2.OP-TM.ZZ-0002 | Task: N0040170101 | K/A: G2.1.23 — Ability to perform general and/or normal operating procedures during any plant condition | Source: New | <a href="/salem-study-system/exam-pdfs/2023-jpm-ro-a1b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[CVCS]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related procedures: [[S2.OP-SO.CVC-0006 — Boron Concentration Control]]
- Related exam: [[2023 NRC Operating Exam]]
