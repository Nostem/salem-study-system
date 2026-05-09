---
title: "2016 JPM IP-j — Perform Auxiliary Feedwater Back Leakage Test"
category: exams
status: draft
aliases:
  - 2016 JPM IP-j
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-j — Perform Auxiliary Feedwater Back Leakage Test</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 061 K1.02 (3.4/3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (11 AFW Pump area)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 1 is operating at 100% power. 11 AFW pump was secured 30 minutes ago after its normally scheduled quarterly surveillance run.<br><br>
<strong>Initiating Cue:</strong><br>
You are directed to perform S1.OP-PT.AF-0002, Auxiliary Feedwater Backleakage.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determine 11 AFW pump and piping requires venting.<br>
2. Vents 11 AFW pump and piping.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD the following on Attachment 1, Section 1.0: AFW Line Temperatures (1TA165551), Highest line temperature, Average line temperature, Temperature difference.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Provided AFW line temperatures: 11 = 104°F, 12 = 106°F, 13 = 161°F, 14 = 108°F. Records temperatures, calculates total of 479, divides by 4, determines highest line temp = 161°F and average line temp = 119.75°F. Determines Temp Diff = 161 − 119.75 = 41.25°F.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2</td>
<td style="padding:6px;color:#c8cdd5;">IF temperature in each line is &lt;120°F, AND temperature difference between highest and average line temp is ≤10°F, THEN RECORD Test Results in Attachment 1, Section 5.0.</td>
<td style="padding:6px;color:#9ca3af;">Determines highest temp is &gt;120°F (step does not apply).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">IF temperature in any line is ≥120°F AND &lt;160°F, THEN: A. RECORD AFW System piping temperatures every hour in Control Room Narrative Log. B. RECORD Test Results in Attachment 1, Section 5.0.</td>
<td style="padding:6px;color:#9ca3af;">Determines highest temp is &gt;160°F (step does not apply).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF temperature difference between highest and average line temp is &gt;10°F, THEN RECORD Test Results in Attachment 1, Section 5.0.</td>
<td style="padding:6px;color:#9ca3af;">Determines temperature difference between highest and average line temp is &gt;10°F, and records Test Results in Attachment 1, Section 5.0., as UNSAT for all three categories.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.6</td>
<td style="padding:6px;color:#c8cdd5;">IF temperature in any line is ≥160°F THEN: A. RECORD findings in Control Room Narrative Log. B. VENT Auxiliary Feedwater pumps/piping IAW Section 5.2.</td>
<td style="padding:6px;color:#9ca3af;">Determines 13 line temp (161°F) is ≥160°F; transitions to Section 5.2 to vent.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF 11 Auxiliary Feedwater Pump and piping is affected, THEN:<br>A. SLOWLY THROTTLE OPEN 11AF83, AF PUMP VENT, until a solid stream of water is observed.<br>B. CLOSE 11AF83.<br>C. SLOWLY THROTTLE OPEN 11AF114, AF PUMP DISCH VENT, until a solid stream of water is observed.<br>D. CLOSE 11AF114.</td>
<td style="padding:6px;color:#9ca3af;">Locates and opens 11AF83, AF PUMP VENT, until a solid stream of water is observed. Cue: A solid stream of water is observed. Closes 11AF83. Locates and opens 11AF114, AF PUMP DISCH VENT, until a solid stream of water is observed. Cue: A solid stream of water is observed. Closes 11AF114. Terminate JPM.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.1.1 is the discriminating step — the applicant must <strong>correctly calculate</strong> the average line temperature (sum the four line temperatures and divide by 4) and the temperature difference (highest line temp minus average), then <strong>correctly route through the IF/THEN logic</strong>. With temperatures 104/106/161/108 °F: average = 119.75 °F, highest = 161 °F, difference = 41.25 °F. Because the highest line temp (161 °F) is ≥160 °F, Step 5.1.6 applies and venting is required IAW Section 5.2. Failure to recognize that the 161 °F reading exceeds the 160 °F threshold (or miscalculating average/difference) would lead the applicant to erroneously conclude no venting is needed. <strong>Per SOER 84-3, backleakage of hot feedwater into AFW piping causes vapor (steam) binding of the motor-driven AFW pumps</strong> — this surveillance is performed 30–60 minutes after pump shutdown to detect the condition before it disables the pump.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-PT.AF-0002 (Rev. 7) | Task: N0610160204 | K/A: 061 K1.02 — Auxiliary/Emergency Feedwater System — Knowledge of the physical connections and/or cause-effect relationships between AFW and the following: Main feedwater system | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-ip-j.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[AFW]], [[Feed & Condensate]]
- Related procedures: [[S2.OP-PT.AF-0002 — AFW Backleakage Testing]]
- Related exam: [[2016 NRC Operating Exam]]
