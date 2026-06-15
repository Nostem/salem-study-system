---
title: "2015 JPM RO-A1.b — CSD Boron Concentration and Boration for Natural Circulation Cooldown"
category: exams
status: draft
aliases:
  - 2015 JPM RO-A1.b
  - 2015 JPM RO-A1-2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1.b — Determine CSD Boron Concentration and Required Boration for Natural Circulation Cooldown</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO | G2.1.43 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
1. Unit 2 was tripped from full power when off-site power was lost. All vital busses are powered from their respective EDG. The CRS has transitioned to 2-EOP-TRIP-4 in ANTICIPATION of beginning a natural circulation cooldown.<br>
2. Core Burnup is 5000 EFPH.<br>
3. Current RCS boron concentration is 1050 ppm.<br>
4. RCS Tc's are 547&deg;F and stable.<br><br>
<strong>Initiating Cue:</strong><br>
You are the RO. Perform Step 4 to determine the required CSD Boron Concentration, then determine the boration required to achieve CSD boron concentration.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Provides the CSD boron concentration in ppm (1950-1970 ppm).<br>2. Provides the boration required in gallons to achieve CSD boron concentration (11370-11646 gallons).</span>
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
<td style="padding:6px;color:#c8cdd5;">—</td>
<td style="padding:6px;color:#c8cdd5;">Provide a copy of 2-EOP-TRIP-4, Natural Circulation Cooldown, Sheet 1. Provide clean copies of S2.RE-RA.ZZ-0016 Rev. 7 Curve Book and S2.RE-RA.ZZ-0012 Rev. 207 Figures.</td>
<td style="padding:6px;color:#9ca3af;">Reviews procedure.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">TRIP-4 Step 4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Using C<sub>B</sub> from Figure 20A of "Reactor Engineering Manual," determine required boron concentration for Cold Shutdown (All Rods In, K<sub>eff</sub>=0.95): C<sub>B</sub> PPM + 50 ppm = Req C<sub>B</sub> ppm.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Locates Figure 20A in Unit 2 Curve Book — Table A on page 111 are the data points for Figure 20A. The exact number for 5000 EFPH is 1914 ppm (allowable graph interpolation 1900-1920). Adds 50 ppm. The exact number is 1964 ppm. Allowable range is 1950-1970 ppm.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Boration *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine the boration required to achieve CSD boron concentration.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Using page 103 of S2.RE-RA.ZZ-0012, Tables, and the formula on that page, determines 11563 gallons of boron must be added. Allowable range 11370-11646 gallons (may pick number off Figure 103, Boron Addition Graph, or use the calculation provided). The temperature correction factor (Figure 105) is not required since boration occurs BEFORE cooldown (only required for temperatures below 547).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Report</td>
<td style="padding:6px;color:#c8cdd5;">Provide two numbers: (1) CSD boron concentration in ppm; (2) Boration required in gallons to achieve CSD boron concentration.</td>
<td style="padding:6px;color:#9ca3af;">When these two numbers have been given to the evaluator, state JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating element is reading the correct curve and applying the +50 ppm adder in TRIP-4 Step 4. The applicant must use the <span class="hi-exam">K<sub>eff</sub>=0.95</span> line of Figure 20A (1914 ppm at 5000 EFPH), NOT the K<sub>eff</sub>=0.99 line — using K<sub>eff</sub>=0.99 yields ~1452 ppm and an incorrect CSD concentration of 1452+50=1502 ppm. The +50 ppm conservatism must be added (omitting it gives an incorrect boron volume of 10876 gallons instead of 11563). The temperature correction factor (Figure 105) is a trap — it is NOT applied here because boration is performed before the cooldown, with Tc still at 547&deg;F.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-4 (Rev 22), S2.RE-RA.ZZ-0016 Unit 2 Curve Book (Rev 7), S2.RE-RA.ZZ-0012 Figures (Rev 207) | Task: 1150050501 | K/A: G2.1.43 — Knowledge of plant parameters / use of reference materials | Source: 2-EOP-TRIP-4 Natural Circulation Cooldown | <a href="/salem-study-system/exam-pdfs/2015-jpm-ro-a1b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[RCS]]
- Related EOPs: [[EOP-TRIP-4 — Natural Circulation]]
- Related procedures: [[S2-RE-RA.ZZ-0016 — Curve Book (Salem Unit 2 Cycle 23)]]
- Related exam: [[2015 NRC Operating Exam]]
