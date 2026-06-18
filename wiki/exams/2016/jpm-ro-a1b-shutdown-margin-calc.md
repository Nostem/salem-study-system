---
title: "2016 JPM RO-A1-2 — Calculate Shutdown Margin"
category: exams
status: draft
aliases:
  - 2016 JPM RO-A1-2
  - 2016 JPM RO-A1.b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A1-2 — Calculate Shutdown Margin</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.43 (RO 4.1 / SRO 4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> Yes (50 minutes)<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 Reactor Power is 100%.<br>
- All Control Rod Group Demand Counters are at 227 steps.<br>
- Current boron concentration is 300 ppm.<br>
- Current core burnup is 10,000 EFPH.<br>
- Control Rod 105 was been declared INOPERABLE at 1000 today due to not moving out during a rod exercise test. You have been directed to perform a Shutdown Margin Calculation IAW SC.RE-ST.ZZ-0002 to satisfy the action requirement of TSAS 3.1.3.1 Action c.3.<br>
- Control Rod 105 has been identified as trippable and is currently at 214 steps.<br><br>
<strong>Initiating Cue:</strong><br>
The current time is 1010.<br>
This is a time critical JPM. Time will commence when you are provided with the applicable procedures.<br>
When performing calculation, the CRS directs you to use only the Tables as directed by SC.RE-ST.ZZ-0002, do not use Figures.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Perform SDM calculation and determine SDM is -2441 (+/- 5 pcm) and SAT.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:90px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.0</td>
<td style="padding:6px;color:#c8cdd5;">Reviews and signs off Precautions and Limitations Section 3.0</td>
<td style="padding:6px;color:#9ca3af;">Reviews Precautions &amp; Limitations and signs off Steps 3.1 - 3.7.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1</td>
<td style="padding:6px;color:#c8cdd5;">SELECT the applicable step below (e.g. 5.1.1.A)</td>
<td style="padding:6px;color:#9ca3af;">Determines 5.1.1.C is the correct step for the current conditions, which is to complete Attachment 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.C</td>
<td style="padding:6px;color:#c8cdd5;">IF SDM is to be verified (per T/S 4.1.1.1.1.a) with reactor critical (Mode 1 or 2) and one or more control rods are inoperable, THEN COMPLETE Attachment 3.</td>
<td style="padding:6px;color:#9ca3af;">Refers to Attachment 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att. 3 2.1</td>
<td style="padding:6px;color:#c8cdd5;">The reactor is in Mode 1 or Mode 2 with k-eff ≥ 1.0</td>
<td style="padding:6px;color:#9ca3af;">Determines Unit is in Mode 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att. 3 3.0</td>
<td style="padding:6px;color:#c8cdd5;">Precautions and Limitations: Section 3.0</td>
<td style="padding:6px;color:#9ca3af;">Reviews and signs steps 3.1-3.5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att. 3 §4.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Section 4.1 — Critical Conditions data entry</td>
<td style="padding:6px;color:#9ca3af;">4.1.1: 100% | 4.1.2: 300 ppm | 4.1.3: D @ 227 steps | 4.1.4: 10,000 EFPH | 4.1.5: 0 | 4.1.6: 1</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att. 3 §4.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Section 4.2 — Calculation of Rod Worth</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">4.2.1: -3841 | 4.2.2: -3335 | 4.2.3: 728 | 4.2.4: 0 | 4.2.5: 500 | 4.2.6: 0 | 4.2.7: -5948</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att. 3 §4.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Section 4.3 — Calculation of SDM</td>
<td style="padding:6px;color:#9ca3af;">4.3.1: -5948 | 4.3.2: 645 | 4.3.3: 120 | 4.3.4: 2742 | 4.3.5: -2441</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att. 3 §4.4</td>
<td style="padding:6px;color:#c8cdd5;">Acceptance Criteria — review required SDM in MODE 1 or 2 of -1300 pcm</td>
<td style="padding:6px;color:#9ca3af;">Reviews required SDM in MODE 1 or 2 of -1300 pcm and initials 4.4.1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att. 3 §4.4.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IS THE SDM (Item 4.3.5) EQUAL TO OR MORE NEGATIVE THAN (-)1300 PCM?</td>
<td style="padding:6px;color:#9ca3af;">Determines calculated SDM is SAT and initials SAT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Time *</span></td>
<td style="padding:6px;color:#c8cdd5;">Total time from START to STOP is 50 minutes or less.</td>
<td style="padding:6px;color:#9ca3af;">JPM completed within 50 minutes. Terminating Cue: Once operator has returned procedures to proctor, terminate JPM.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Section 4.2 (Rod Worth Calculation) is the discriminating section — the applicant must use the Curve Book S2.RE-RA.ZZ-0016 Tables (NOT Figures, per the cue) to look up rod worth values at the given critical conditions (100% power, 300 ppm boron, D bank at 227 steps, 10,000 EFPH). The number of untrippable rods is 0 (rod 105 is trippable per the conditions) and the number of inoperable rods is 1. Rod-bank-position penalty is 0 because the bank is at the ARO position (227 steps), not because of the misaligned rod's individual position (214 steps). Final SDM of -2441 pcm is more negative than -1300 pcm acceptance criteria, so SDM is SAT. Time-critical: must be completed within 50 minutes.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: SC.RE-ST.ZZ-0002 (R23), S2.RE-RA.ZZ-0016 Curve Book (R8) | Task: N1200030301 | K/A: G2.1.43 — Ability to use procedures to determine the effects on reactivity of plant changes | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-ro-a1b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related systems: [[Control Rod Drive]]
- Related exam: [[2016 NRC Operating Exam]]
