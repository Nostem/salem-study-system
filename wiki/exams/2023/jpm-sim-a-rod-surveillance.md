---
title: "2023 JPM Sim-a — Perform Control Rod System Surveillance Test"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Perform Control Rod System Surveillance Test</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A4.16 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is at 100% power BOL.<br>
- No major equipment is out of service and no Tech Specs are active.<br>
- The rod control system surveillance is in progress.<br>
- All sections are complete, except for exercising Control Bank D.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to complete the rod control system surveillance IAW S2.OP-ST.RCS-0001, Reactivity Control System Rod Control Assemblies.<br>
- A Maintenance Technician is stationed at the Rod Control Power Cabinets (Relay Room)<br>
- CRS directs that 15 steps of rod insertion will be performed to ensure each rod moves at least 10 steps.<br>
- Notify the CRS when the testing is complete.<br>
- Your evaluator will take care of all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has exercised Control Bank D at least 10 steps, and upon completion of the test, recognizes unexpected continuous rod movement and manually trips the reactor.</span>
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
<td style="padding:6px;color:#c8cdd5;">4.1.10.1</td>
<td style="padding:6px;color:#c8cdd5;">Ensure Tavg is within +/-1F of Tref</td>
<td style="padding:6px;color:#9ca3af;">Checks Tavg/Tref recorder on 2RP4 and determines Tavg is within +/-1F of Tref.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1.10.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place Bank Selector Switch in CBD position</td>
<td style="padding:6px;color:#9ca3af;">Rotates selector switch clockwise to the CBD position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.1.10.3</td>
<td style="padding:6px;color:#c8cdd5;">Ensure GRP SELECT B lights illuminated</td>
<td style="padding:6px;color:#9ca3af;">Contacts Maintenance Technician at Power Cabinets.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.1.10.4</td>
<td style="padding:6px;color:#c8cdd5;">Insert Control Bank D 1 step</td>
<td style="padding:6px;color:#9ca3af;">Operator inserts one step.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.1.10.5</td>
<td style="padding:6px;color:#c8cdd5;">Withdraw Control Bank D 1 step</td>
<td style="padding:6px;color:#9ca3af;">Operator withdraws one step. (Steps 4-5 repeated three times.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1.10.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Maneuver Control Bank D at least 10 steps in one direction</td>
<td style="padding:6px;color:#9ca3af;">Inserts Control Bank D 15 +/- 1 steps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.1.10.7</td>
<td style="padding:6px;color:#c8cdd5;">Ensure each rod in CBD indicated movement of at least 10 steps</td>
<td style="padding:6px;color:#9ca3af;">Monitors rod position on plant computer and determines D bank rods all moved at least 10 steps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1.10.8 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Record test results as SAT</td>
<td style="padding:6px;color:#9ca3af;">Records test results as SAT using Acceptance Criteria in Attachment 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1.10.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Restore Control Bank D to pre-test position</td>
<td style="padding:6px;color:#9ca3af;">Withdraws Bank D to previous position (ARO).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1.11.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Place Bank Selector Switch in AUTO — recognize unexpected continuous rod insertion and manually trip the reactor</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Turbine Power is >15% and rotates selector switch to AUTO position. Announces rods are stepping in with no runback in progress. Places rod bank switch to Manual — rod motion has NOT stopped. Recognizes rod insertion is continuing and manually trips the reactor.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 4.1.11.3 is the alternate path / discriminating step — after placing the rod bank selector switch in AUTO, an uncontrolled rod insertion malfunction activates. The applicant must recognize that rods continue inserting even after placing the switch in Manual, and manually trip the reactor.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.RCS-0001 (R27), OP-AP-300-1001 | Task: N1140340401 | K/A: A4.16 — Ability to manually operate and/or monitor in the control room: Rod speed and direction | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance]], [[AB.ROD-0003 — Continuous Rod Motion]]
- Related systems: [[Instrumentation and Controls]]
- Related exam: [[2023 NRC Operating Exam]]
