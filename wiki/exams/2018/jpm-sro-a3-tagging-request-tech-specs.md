---
title: "2018 JPM SRO-A3 — Determine Technical Specification Action"
category: exams
status: draft
aliases:
  - 2018 JPM SRO-A3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A3 — Determine Technical Specification Action</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.2.13 (4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom (Administrative)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 1 is at 100% power<br>
- No Tech Specs are currently active<br>
- 11 Charging pump 405p surveillance was just completed<br>
- Following the surveillance, excessive leakage from the pump seal was noted by the field operator<br>
- The Work Control NCO is preparing a Tagout package as part of the TAGOUT INITIATION section of OP-AA-109-115 and has requested you to review the marked up drawing for adequate blocking points<br>
- The charging pump will be removed from service IAW S1.OP-SO.CVC-0002, CHARGING PUMP OPERATION<br><br>
<strong>Initiating Cue:</strong><br>
- You are the extra SRO<br>
- REVIEW the blocking points on the supplied drawing AND DETERMINE the following using ONLY the provided drawing and procedures:<br>
&nbsp;&nbsp;1. Are the blocking points on the supplied drawing adequate to isolate the equipment to be worked?<br>
&nbsp;&nbsp;2. Justify your answer<br>
&nbsp;&nbsp;3. What are the applicable Tech Specs for the removal of the component?
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Identifies the following discrepancies from DWG 205228:<br>
&nbsp;&nbsp;a. 1CV81 is not a selected Blocking Point<br>
&nbsp;&nbsp;b. 1CV136 is not a selected Blocking Point<br>
&nbsp;&nbsp;c. 1CV356 is not a selected Blocking Point (2nd vent path)<br>
2. Identifies T/S 3.5.2 as applicable LCO.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Review provided drawing for adequate Blocking Points — identify 1CV81 missing</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">1CV81, 11 CHG PUMP DISCH VALVE, is NOT listed as a Blocking Point and position should be CLOSED (see S1.OP-SO.CVC-0002 step 4.9.4.2). Both 1CV48 and 1CV81 are required to be closed to isolate the discharge of 11 Charging pump.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identify 1CV136 missing from Blocking Points</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">1CV136, 11 CHG PUMP RECIRC STOP VALVE, is NOT listed as a Blocking Point and position should be CLOSED (see S1.OP-SO.CVC-0002 step 4.9.4.4). 1CV135 is a check valve and incorrectly used as a Blocking Point on the recirc flow line.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identify 1CV356 missing from Blocking Points</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">1CV356, CHG PUMP SUCT VENT, is NOT listed as a Blocking Point and position should be OPEN (see S1.OP-SO.CVC-0002 step 4.9.4.7). Both 1CV356 and 1CV45 need to be OPEN to properly vent and drain. OP-AA-109-115, Attachment 2, page 71: liquid systems shall have a minimum of one vent and drain tagged.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Evaluate applicable Tech Specs for removal of component</td>
<td style="padding:6px;color:#9ca3af;">Identifies T/S 3.5.2, action 'a', is applicable for removal of a charging pump (ECCS subsystem)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">RECORD discrepancies and applicable Tech Specs on Initiating Cue Sheet</td>
<td style="padding:6px;color:#9ca3af;">Operator records all discrepancies and TS 3.5.2 on the answer sheet</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 1-3 are the discriminating steps. The applicant must systematically review DWG 205228 Sheet 2 against the procedure S1.OP-SO.CVC-0002 to identify three missing blocking points. Key traps: (1) 1CV135 is a check valve — it is already listed as a blocking point on the drawing but is insufficient because check valves do not provide positive isolation; 1CV136 (the motor-operated stop valve) is the required blocking point. (2) 1CV356 is the second vent path — OP-AA-109-115 requires liquid systems to have at least one vent and drain tagged, and 1CV45 alone is insufficient without 1CV356. The applicant must also recognize that the charging pump is part of ECCS and TS 3.5.2 applies (not TS 3.1.2 for boration).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: OP-AA-109-115 (Rev. 12), S1.OP-SO.CVC-0002 (Rev. 41), DWG 205228 Sheet 2 (Rev. 85) | Task: N1220050302 | K/A: G2.2.13 — Knowledge of tagging and clearance procedures | Source: New | <a href="/salem-study-system/exam-pdfs/2018-jpm-sro-a3.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]]
- Related procedures: [[OP-AA-109-115 — Equipment Tagging]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related exam: [[2018 NRC Operating Exam]]
