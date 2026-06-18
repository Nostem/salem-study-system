---
title: "2016 JPM RO-A3 — Perform Stay Time Calculation for Emergency Condition"
category: exams
status: draft
aliases:
  - 2016 JPM RO-A3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A3 — Perform Stay Time Calculation for Emergency Condition</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.3.4 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
1. Unit 1 experienced Rx trip with a small RCS leak from 100% power.<br>
2. The Rx failed to automatically trip on a valid trip demand, and was tripped successfully with the Rx trip handle.<br>
3. Salem is currently in an Alert.<br>
4. Your TEDE dose for the year is 1925 mrem.<br><br>
<strong>Initiating Cue:</strong><br>
You have been directed to perform a detailed inspection of 22 RHR pump room prior to starting the pump. You will NOT be going into the 22 RHR HX area. Your job is estimated to take 2 hours to complete.<br><br>
Using the correct survey map, and conservatively using the HIGHEST dose rate anywhere in the pump room for your ENTIRE exposure, determine:<br>
1. Can you complete the job without exceeding your current dose authorization<br>
2. What would be your new TEDE dose for the year after performing the job (or as much as possible) WITHOUT exceeding your current dose authorization?
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Determines: (1) YES job can be performed; (2) Calculates new TEDE dose of 2005 mrem.</span>
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
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Selects the Survey Map "S2 AUX 045' 22 RHR ROOMS" Map# 21045Z2. Determines dose limit is automatically raised to 4500 mrem upon the declaration of an ALERT or higher Emergency.</td>
<td style="padding:6px;color:#9ca3af;">Refers to NC.EP-EP.ZZ-0304 OSC Radiation Protection Response Section 5.0 Note for guidance on the automatic increase in allowed dose to 4500 mrem.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Determine highest dose rate in room.</td>
<td style="padding:6px;color:#9ca3af;">Per the survey map, squares are dose rates in mrem/hr, and circles are smear locations. The highest square is located under the words "22RH37" on the map and indicates 40 mrem/hr. Note: The square with "250" inside it is in the RHR HX room, and is not in the area which the operator will go.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Calculate TEDE dose for year</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Subtracts year to date TEDE dose from Emergency Dose limit of 4,500 mrem, and gets 2575 mrem. Determines 2 hours of work will result in 80 mrem dose, and new TEDE dose is 2005 mrem, which does NOT exceed 4,500 mrem authorized in an Emergency.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Terminating cue</td>
<td style="padding:6px;color:#9ca3af;">Terminate JPM when candidate has returned paperwork.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#1a1400;border-left:3px solid #fbbf24;border-radius:0 4px 4px 0;">
<strong style="color:#fbbf24;">Emergency Exposure Limits (NC.EP-EP.ZZ-0304):</strong><br>
<span style="color:#c8cdd5;">Upon declaration of an ALERT or higher Emergency, the administrative dose control limit is automatically raised from the normal 2000 mrem TEDE/year to <strong>4500 mrem TEDE</strong> for the year. The applicant must NOT use the normal 2000 mrem ADCL when an Alert is in effect.</span>
</div>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 3 is the discriminating step. The applicant must (a) recognize that the Alert raises the ADCL to 4500 mrem (not the routine 2000 mrem), (b) read the survey map correctly and use 40 mrem/hr — the highest dose rate in the 22 RHR pump room — while EXCLUDING the 250 mrem/hr square that is in the RHR HX room (outside the work area), and (c) calculate dose = 40 mrem/hr × 2 hr = 80 mrem and new TEDE = 1925 + 80 = 2005 mrem, which is well under the 4500 mrem emergency limit, so the job CAN be completed. Trap: applicants who default to 2000 mrem ADCL would conclude the job cannot be performed because 1925 + 80 = 2005 mrem &gt; 2000 mrem.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: RP-AA-203 (R6), NC.EP-EP.ZZ-0304 (R16), Radiological Survey Map "S2 AUX 045' 22 RHR ROOMS" Map# 21045Z2 | Task: N1200100104 | K/A: G2.3.4 — Knowledge of radiation exposure limits under normal or emergency conditions | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-ro-a3.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[NC.EP-EP.ZZ-0304 — OSC Radiation Protection Response]], [[RP-AA-203 — Exposure Control and Authorization]]
- Related systems: [[RHR]], [[Radiation Monitoring]]
- Related exam: [[2016 NRC Operating Exam]]
