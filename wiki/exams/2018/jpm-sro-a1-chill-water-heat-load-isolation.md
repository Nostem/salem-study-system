---
title: "2018 JPM SRO-A1 — Isolate Non-Essential Chilled Water Loads"
category: exams
status: draft
aliases:
  - 2018 JPM SRO-A1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A1 — Isolate Non-Essential Chilled Water Loads</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.1.25 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- It is July 15th time 1800 and you have just assumed the watch as the Unit 2 CRS. It was turned over that both 21 and 22 Chillers tripped at 1600 and you are currently in T/S 3.7.10 action 'b', entered at 1600.<br>
- To comply with the T/S action, the crew is implementing S2.OP-SO.CH-0001, Chilled Water System Operation, Section 4.6, Isolation of Non-Essential Heat Loads.<br>
- During preparations to align #2 ECAC cooling to Service Water IAW S2.OP-SO.CA-0001, Control Air System Operation, it was reported that the spool pieces required to align to service water cannot be located.<br>
- Unit 2 CREACS has been removed from service IAW step 4.6.2 of S2.OP-SO.CH-0001.<br>
- CW Inlet Water Temperature Readings from SC.OP-DL.ZZ-0008(Q), Circulating / Service Water Log are:<br>
&nbsp;&nbsp;2TL3756 = 83.4°F<br>
&nbsp;&nbsp;2TL3757 = 83.6°F<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Unit 2 CRS.<br>
- The Shift Manager directs you to NOT isolate the #2 ECAC and to re-perform the Non-Essential heat load determination IAW Attachment 2.<br>
- DETERMINE the total Non-Essential heat load and SELECT the required components for isolation IAW S2.OP-SO.CH-0001, Chilled Water System Operation, Attachment 2 to comply with Tech Specs.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determines the Total Heat Load Isolation value required is 902.8 kBTU/HR.<br>2. Selects the required components on Table B for isolation and ensures that the total value is greater than 902.8 kBTU/HR.</span>
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
<td style="padding:6px;color:#c8cdd5;">Att 2 1.A</td>
<td style="padding:6px;color:#c8cdd5;">RECORD inlet water temperature data for Table A from SC.OP-DL.ZZ-0008(Q)</td>
<td style="padding:6px;color:#9ca3af;">Enters temperatures from cue sheet (2TL3756 = 83.4°F, 2TL3757 = 83.6°F). Records highest temperature (83.6°F) and adds 1.5°F for instrument uncertainty = 85.1°F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att 2 1.B</td>
<td style="padding:6px;color:#c8cdd5;">RECORD number of inoperable Chiller Units</td>
<td style="padding:6px;color:#9ca3af;">Lists 2 Chillers Inoperable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.C *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD the TOTAL HEAT LOAD ISOLATION from Table A</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">From Table A, determines 902.8 kBTU/HR based on inlet water temp of 85.1°F, 2 chillers inoperable, in Maintenance Mode with Unit 2 EACS Out of Service.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1.D</td>
<td style="padding:6px;color:#c8cdd5;">IDENTIFY the components to be isolated in Table B</td>
<td style="padding:6px;color:#9ca3af;">Selects non-essential loads for isolation.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.E *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD heat load values from Table B into Isolation column for selected components</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Selects values from Table B: 21 PACU = 145.7, 22 PACU = 145.7, 23 PACU = 145.7, Secondary Lab = 192.1, Primary Lab = 165.9, Counting Room = 73.0, PASS = 38.5. Selects N/A for ECAC per SM direction.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">ADD values recorded in Isolation column and RECORD Total Isolation value</td>
<td style="padding:6px;color:#9ca3af;">Determines Total Heat Load Isolation per Table B is 906.6 kBTU/HR.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.G *</span></td>
<td style="padding:6px;color:#c8cdd5;">ENSURE Total Isolation value (Table B) is greater than or equal to Total Heat Load Isolation (Step 1.C)</td>
<td style="padding:6px;color:#9ca3af;">Determines 906.6 kBTU/HR > 902.8 kBTU/HR — isolation is adequate.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1.1</td>
<td style="padding:6px;color:#c8cdd5;">ISOLATE the selected components IAW Section 4.6 of this procedure</td>
<td style="padding:6px;color:#9ca3af;">CUE: The NCO will isolate the selected components IAW Section 4.6.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 1.C is the first discriminating element — the applicant must correctly enter Table A using 85.1°F (highest CW temp 83.6°F + 1.5°F instrument uncertainty), 2 chillers inoperable, and Maintenance Mode with EACS out of service to determine 902.8 kBTU/HR. Step 1.E is the second key decision — the applicant must select enough non-essential loads to exceed 902.8 kBTU/HR while keeping the ECAC available per SM direction. The specific combination totaling 906.6 kBTU/HR excludes the ECAC. This is the same JPM concept as the 2022 SRO-A1 (identical initial conditions, values, and procedure).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.CH-0001 (Rev 34), S2.OP-SO.CA-0001, SC.OP-DL.ZZ-0008(Q) | Task: 0980020202 | K/A: G2.1.25 — Ability to interpret reference materials, such as graphs, curves, tables, etc. | Source: New | <a href="/salem-study-system/exam-pdfs/2018-jpm-sro-a1.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Chill Water]], [[Control Air]], [[Service Water]]
- Related procedures: [[S2.OP-SO.CH-0001 — Chilled Water System Operation]]
- Related tech specs: [[TS 3/4.7 — Plant Systems]]
- Related exam: [[2018 NRC Operating Exam]]
