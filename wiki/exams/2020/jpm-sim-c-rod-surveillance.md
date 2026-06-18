---
title: "2020 JPM Sim-c — Control Rod System Surveillance"
category: exams
status: draft
aliases:
  - 2020 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — Control Rod System Surveillance</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 001 A2.11 (4.4/4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is at 100% power BOL.<br>
- No major equipment is out of service and no Tech Specs are active.<br>
- The rod control system surveillance is in progress with the only remaining rod bank to test is Control Bank D.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to complete the rod control system surveillance IAW S2.OP-ST.RCS-0001, Reactivity Control System Rod Control Assemblies.<br>
- A Maintenance Technician is stationed at the Rod Control Power Cabinets (Relay Room)<br>
- CRS directs that 15 steps of rod insertion will be performed to ensure each rod moves at least 10 steps.<br>
- Pre-Test D bank rod positions were recorded and attached with your Cue Sheet.<br>
- Notify the CRS when the testing is complete.<br>
- Your evaluator will take care of all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Correctly performs rod control surveillance using approved procedure. 2. Responds to continuous rod movement by manually tripping the reactor.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.1.10.A</td>
<td style="padding:6px;color:#c8cdd5;">Ensure Tavg within +/-1°F of Tref</td>
<td style="padding:6px;color:#9ca3af;">Checks Tavg/Tref recorder on 2RP4 and determines Tavg is within +/-1°F of Tref.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.10.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place Bank Selector Switch in CBD position</td>
<td style="padding:6px;color:#9ca3af;">Rotates selector switch clockwise to the CBD position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.10.C</td>
<td style="padding:6px;color:#c8cdd5;">Ensure GRP SELECT B lights illuminated on Power Cabinets</td>
<td style="padding:6px;color:#9ca3af;">Contacts Maintenance Technician; reports GRP SELECT B lights illuminated on Cabinets 21BD and 22BD.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.10.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">Maneuver Control Bank D at least 10 steps in one direction</td>
<td style="padding:6px;color:#9ca3af;">Inserts Control Bank D 15 steps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.10.E</td>
<td style="padding:6px;color:#c8cdd5;">Ensure each rod in CBD indicated movement of at least 10 steps</td>
<td style="padding:6px;color:#9ca3af;">Monitors rod position on P-250 and determines D bank rods all moved at least 10 steps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.10.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">Record test results as SAT</td>
<td style="padding:6px;color:#9ca3af;">Records test results as SAT using Acceptance Criteria in Attachment 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.10.G</td>
<td style="padding:6px;color:#c8cdd5;">Restore Control Bank D to pre-test position</td>
<td style="padding:6px;color:#9ca3af;">Withdraws Bank D to previous position (ARO).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.11.C *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Place Bank Selector Switch in AUTO — recognize continuous rod insertion and manually trip the reactor</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Turbine Power is >15% and rotates selector switch to AUTO position. Announces rods are stepping in with no runback in progress. Places rod bank switch to Manual — rod motion has NOT stopped. Manually trips the reactor.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.1.11.C is the alternate path / discriminating step. After completing the CBD surveillance and restoring rods, the procedure directs placing the rod bank selector switch in AUTO (since Turbine Power is >15%). An uncontrolled rod insertion malfunction activates when the switch is placed in AUTO. The applicant must recognize that rods continue inserting even after placing the switch in Manual (the malfunction inserts rods in both AUTO and MANUAL), and manually trip the reactor. The operator may reference AB.ROD-0003 (Continuous Rod Motion) to support the decision to trip.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.RCS-0001 (R23), OP-AP-300-1001 | Task: N0010070101 | K/A: 001 A2.11 — Ability to predict impacts of situations requiring a reactor trip on CRDS and use procedures to mitigate | Source: Modified | <a href="/salem-study-system/exam-pdfs/2020-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance]], [[AB.ROD-0003 — Continuous Rod Motion]], [[OP-AP-300-1001 — PWR Control Rod Movement Requirements]]
- Related exam: [[2020 NRC Operating Exam]]
