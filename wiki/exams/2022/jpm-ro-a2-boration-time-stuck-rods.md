---
title: "2022 JPM RO-A2 — Boration Time for Stuck Rods IAW EOP-TRIP-2"
category: exams
status: draft
aliases:
  - 2022 JPM RO-A2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A2 — Determine Boration Time for 3 Stuck Rods and Final BAST Level</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.20 (4.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 experienced an automatic Reactor Trip from an inadvertent Main Turbine Trip.<br>
- SI is not required and the crew is implementing 2-EOP-TRIP-2, Reactor Trip Response.<br>
- Three Control Rods from Control Bank Delta have failed to FULLY insert.<br>
- Current BAST levels:<br>
&nbsp;&nbsp;- 21 BAST level: 94%<br>
&nbsp;&nbsp;- 22 BAST level: 76%<br><br>
<strong>Initiating Cue:</strong><br>
- You are the extra NCO.<br>
- The CRS has directed you to determine the amount of time Rapid Boration is required IAW 2-EOP-TRIP-2 Step 4 for the Three Control rods that have failed to insert on Control Bank Delta.<br>
1. How many total minutes of Rapid Boration is required?<br>
2. What will be the final BAST levels?<br>
&nbsp;&nbsp;- Assume the Rapid Boration flowrate remains at 40 GPM for the entire duration required in question 1, and Both BASTs lower equal amounts.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. CALCULATES the total boration time for 3 stuck control rods to be 105 minutes.<br>
2. Calculates total amount of gallons injected to be 4200 gallons and final BAST levels are at 21: 67% +/- 2% and 22: 49% +/- 2%.</span>
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
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine boration time for 3 stuck rods using EOP-TRIP-2 Step 4</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">35 MIN x 3 rods = 105 minutes total Rapid Boration</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Determine total volume of boric acid injected</td>
<td style="padding:6px;color:#9ca3af;">105 MIN x 40 GPM = 4200 gallons total. Each BAST lowers by 4200/2 = 2100 gallons.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine 21 BAST final level using S2.OP-TM.ZZ-0002 tank curve (Figure 2)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Start = 94% = 7400 gal. Used = 2100 gal. Remaining = 5300 gal. From tank curve: 5300 gal = 67% (+/- 2%)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine 22 BAST final level using S2.OP-TM.ZZ-0002 tank curve (Figure 2)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Start = 76% = 6000 gal. Used = 2100 gal. Remaining = 3900 gal. From tank curve: 3900 gal = 49% (+/- 2%)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 1 is the primary discriminating step -- the applicant must correctly use EOP-TRIP-2 Step 4 to determine 35 minutes per stuck rod. The applicant must then correctly convert BAST levels from percent to gallons using the S2.OP-TM.ZZ-0002 tank capacity curve (Figure 2), subtract the volume used, and convert back to percent. The +/- 2% acceptance band accounts for readability errors when using the tank curve (each conversion from %→gallons or gallons→% has a +/- 1% readability error).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-2 (Rev 41), S2.OP-TM.ZZ-0002 (Rev 8) | Task: N1150030501 | K/A: G2.1.20 — Ability to interpret and execute procedure steps | Source: New | <a href="/salem-study-system/exam-pdfs/2022-jpm-ro-a2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related procedures: [[S2.OP-TM.ZZ-0002 — Tank Capacity Data]]
- Related exam: [[2022 NRC Operating Exam]]
