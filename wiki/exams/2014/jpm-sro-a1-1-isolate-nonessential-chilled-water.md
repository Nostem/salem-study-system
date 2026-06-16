---
title: "2014 JPM SRO-A1-1 — Identify and Isolate Non-Essential Chilled Water Loads"
category: exams
status: draft
aliases:
  - 2014 JPM SRO-A1-1
  - 2014 JPM SRO-A1.1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A1-1 — Identify and Isolate Non-Essential Chilled Water Loads</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | 2.1.25 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
1. Salem Unit 2 is at 100% power during a summer heat wave.<br>
2. At 1300, 22 Chiller trips on freeze protection followed shortly by 21 chiller, and neither can be reset.<br>
3. Technical Specification LCO 3.7.10.a Action b.1. is in effect and non-essential heat loads need to be removed from the chilled water system.<br>
4. Inlet Water Temperature Readings from SC.OP-DL.ZZ-0008(Q), Circulating / Service Water Log at 0800:<br>
&nbsp;&nbsp;2TL3756 = 73.4°F<br>
&nbsp;&nbsp;2TL3757 = 73.5°F<br>
5. The past 2 days of Inlet Water Temperature Readings were:<br>
&nbsp;&nbsp;Yesterday: 0800 = 73.4 / 73.4, 2000 = 74.2 / 74.2<br>
&nbsp;&nbsp;2 days ago: 0800 = 73.3 / 73.3, 2000 = 74.1 / 74.1<br>
6. Outside air temperature has risen from 81°F to 99°F during this watch.<br><br>
<strong>Initiating Cue:</strong><br>
Identify non-essential heat loads to be removed from service in order to comply with TS 3.7.10.a Action b.1.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Identify combination of heat loads which will remove at least 999.1 kBTU/hr from chilled water system.</span>
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
<td style="padding:6px;color:#c8cdd5;">SO.CH-1 5.6.2</td>
<td style="padding:6px;color:#c8cdd5;">IF two Chillers are inoperable, THEN SELECT components for isolation IAW Attachment 2.</td>
<td style="padding:6px;color:#9ca3af;">Refers to Attachment 2 of S2.OP-SO.CH-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 2 1.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">RECORD Inlet Water Temperature from SC.OP-DL.ZZ-0008(Q); RECORD the highest temperature AND ADD 1.5°F for instrument uncertainty.</td>
<td style="padding:6px;color:#9ca3af;">Enters temperatures from cue sheet. Adds 1.5°F to highest temp (73.5) and enters 75.0°F. Lists 2 chillers out of service.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 2 2.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD the TOTAL HEAT LOAD ISOLATION from Table A.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Per the Att 2 NOTE, because outside air temperature has risen since the 0800 reading and the 75°F value is right at the limit to go up one category, determines heat loads for inlet temp &gt; 75°F should be used. Enters 999.1 kBTU/hr.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att 2 3.1</td>
<td style="padding:6px;color:#c8cdd5;">RECORD the value from the HEAT LOAD column into the Isolation column for the components selected for isolation.</td>
<td style="padding:6px;color:#9ca3af;">Records values from HEAT LOAD column into Isolation column in Table B for selected components. Any combination may be selected as long as the total selected is > 999.1 kBTU/hr.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 2 4.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ADD the values recorded in the Isolation column AND RECORD the Total Isolation value in Table B.</td>
<td style="padding:6px;color:#9ca3af;">Adds values in ISOLATION column. Verifies total is greater than 999.1 kBTU/hr.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att 2 5.0</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE that the Total Isolation value recorded in Table B is ≥ the Total Heat Load Isolation recorded in Step 2.0.</td>
<td style="padding:6px;color:#9ca3af;">Verifies Total Isolation value recorded in Table B is ≥ the Total Heat Load Isolation recorded in Step 2.0. Terminate JPM when procedure is returned to evaluator.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 2.0 is the discriminating step and turns on conservative decision making. The highest inlet water temperature (73.5°F) + 1.5°F instrument uncertainty = <strong>75.0°F</strong>, which sits exactly at the boundary between Table A categories. Because outside air temperature rose from 81°F to 99°F between the 0800 reading and now (1300), the applicant must recognize that inlet water temperature is anticipated to exceed 75°F and therefore select the next-higher inlet-temperature category (&gt; 75°F), yielding a Total Heat Load Isolation of <strong>999.1 kBTU/hr</strong>. The applicant then selects any combination of non-essential loads in Table B whose total exceeds 999.1 kBTU/hr. Reading the 75°F category instead of the &gt; 75°F category (i.e., failing to act conservatively on the rising temperature trend) under-isolates and fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.CH-0001 (Rev 30), SC.OP-DL.ZZ-0008(Q) Circulating / Service Water Log | Task: 0980020202 | K/A: 2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables, etc. (4.2) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sro-a1-1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Chill Water]], [[Service Water]]
- Related procedures: [[S2.OP-SO.CH-0001 — Chilled Water System Operation]]
- Related tech specs: [[TS 3/4.7 — Plant Systems]]
- Related exam: [[2014 NRC Operating Exam]]
