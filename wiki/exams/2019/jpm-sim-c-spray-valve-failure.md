---
title: "2019 JPM Sim-c — Respond to Spray Valve Failing to Close"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — Respond to Spray Valve Failing to Close during RCS Depressurization</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 010 A2.02 (3.9/3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 was manually tripped at 100% power due to Steam Generator Tube Rupture (SGTR) on 22 SG.<br>
- Safety Injection (SI) was initiated successfully on both trains.<br>
- The crew is implementing 2-EOP-SGTR-1.<br>
- The crew has just completed the RCS cooldown to the target temperature and the steam dumps are in Auto in MS Mode.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to PERFORM RCS depressurization using normal spray starting at Step 19 of 2-EOP-SGTR-1.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Performs RCS depressurization IAW EOP-SGTR-1 Step 19.<br>2. Identifies one PZR Spray Valve failed to close and Stops 21 and 23 RCPs.</span>
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
<td style="padding:6px;color:#c8cdd5;">19</td>
<td style="padding:6px;color:#c8cdd5;">IS NORMAL SPRAY AVAILABLE?</td>
<td style="padding:6px;color:#9ca3af;">YES — determines from initial cue that CRS directed use of Normal Spray.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.1</td>
<td style="padding:6px;color:#c8cdd5;">WHEN ANY CONDITION IN TABLE D OCCURS, THEN CLOSE THE PZR SPRAY VALVES</td>
<td style="padding:6px;color:#9ca3af;">Reads Continuous Action Step and continues. Opens 2PS1 and 2PS3 spray valves and verifies OPEN bezels illuminate.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.2</td>
<td style="padding:6px;color:#c8cdd5;">IS PZR SPRAY REDUCING RCS PRESSURE?</td>
<td style="padding:6px;color:#9ca3af;">YES — checks RCS pressure is lowering.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.2 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">HAS ANY CONDITION IN TABLE D OCCURRED?</td>
<td style="padding:6px;color:#9ca3af;">NO — checks parameters listed in Table D and determines conditions are not met yet.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.3</td>
<td style="padding:6px;color:#c8cdd5;">CONTINUE DEPRESSURIZATION</td>
<td style="padding:6px;color:#9ca3af;">Continues depressurization. During validation, approx 5-7 minutes until Table D conditions met (RCS pressure less than ruptured SG pressure AND PZR level > 11%).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.2 (return)</td>
<td style="padding:6px;color:#c8cdd5;">HAS ANY CONDITION IN TABLE D OCCURRED?</td>
<td style="padding:6px;color:#9ca3af;">YES — CUE: PZR Level is now 79% and rising slowly. Determines a condition of Table D has occurred.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.1 (CAS)</td>
<td style="padding:6px;color:#c8cdd5;">CLOSE THE PZR SPRAY VALVES</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 2PS1 and 2PS3. Verifies 2PS1 CLOSE PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">19.1 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">2PS3 Fails to Close</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies that 2PS3 will NOT close. (Alternate Path starts here.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.4</td>
<td style="padding:6px;color:#c8cdd5;">ARE BOTH PZR SPRAY VALVES CLOSED?</td>
<td style="padding:6px;color:#9ca3af;">NO — reports that 2PS3 will NOT CLOSE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">19.4 (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">STOP 21 and 23 RCPs</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses STOP PBs for 21 and 23 RCPs and verifies STOP bezel illuminates.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.4 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">IS RCS PRESSURE DROPPING UNCONTROLLED?</td>
<td style="padding:6px;color:#9ca3af;">NO — reports that RCS pressure is rising.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">19.4 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">GO TO STEP 27</td>
<td style="padding:6px;color:#9ca3af;">JPM is complete when operator goes to Step 27.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">When the Table D depressurization criteria are met and the CAS at Step 19.1 directs closing the spray valves, the applicant must recognize that 2PS3 has failed to close. The corrective action at Step 19.4 is to stop the RCPs that supply flow to the stuck-open spray valve (21 and 23 RCPs supply flow through 2PS3) to eliminate the spray flow path and halt the uncontrolled depressurization. 2PS3 spray valve is supplied by 21 and 23 RCP discharge; stopping these pumps removes the driving head for spray flow.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-SGTR-1 (Rev 32) | Task: N1150190501 | K/A: 010 A2.02 — Ability to determine or interpret PZR pressure control malfunctions | Source: New | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related systems: [[Pressurizer Level & Press Control]], [[RCS]], [[Steam Generator & Blowdown]]
- Related exam: [[2019 NRC Operating Exam]]
