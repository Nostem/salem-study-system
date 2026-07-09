---
title: "2016 JPM Sim-a — Perform a Control Rod Operability Verification"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Perform a Control Rod Operability Verification</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 001 A4.03 (RO 3.7 / SRO 3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at steady state, 100% power. Power has been at 100% for 30 days.<br><br>
<strong>Initiating Cue:</strong><br>
- You are directed to perform S2.OP-ST.RCS-0001, Reactivity Control System Rod Control Assemblies.<br>
- A Maintenance Technician is stationed at the Rod Control System Power Cabinets.<br>
- Communications are established via plant page between the Control Room and Jeff Stevens, NEO, at the Rod Control System Power Cabinets.<br>
- The CRS has directed that steps 5.1.2 through 5.1.9 are to be performed in order.<br>
- The CRS directs that 15 steps of rod insertion are to be performed for each bank to ensure that each rod moves at least 10 steps.<br>
- Initial Control Rod Positions are provided for SDA, SDB, SDC, SDD (per JPM PDF).
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Operator trips the Rx when Shutdown Bank B is inserted in the core and a SGFP trips.</span>
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
<td style="padding:6px;color:#c8cdd5;">P&L</td>
<td style="padding:6px;color:#c8cdd5;">Review prerequisites and Precautions and Limitations of S2.OP-ST.RCS-0001 (Rev. 22). Review OP-AP-300-1001, PWR Control Rod Movement Requirements.</td>
<td style="padding:6px;color:#9ca3af;">Reviews prerequisites with Sections 2.1-2.8 filled out. Reviews and signs Precautions and Limitations.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">IF this surveillance is to be performed....</td>
<td style="padding:6px;color:#9ca3af;">Determines step is N/A based on steady state 100% operation.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2</td>
<td style="padding:6px;color:#c8cdd5;">PERFORM Attachment 2, Rod Control System Voltage Checks. PLACE Rod Bank Selector Switch to "MANUAL". Direct Maintenance to COMPLETE Attachment 2.</td>
<td style="padding:6px;color:#9ca3af;">Places Rod Bank Selector Switch to manual. Directs Maintenance to complete Attachment 2 Rod Control System Voltage Checks.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">PERFORM Shutdown Bank A testing: Verify Tavg within ±1°F of Tref. <span class="jpm-critical">PLACE Bank Selector Switch in the "SBA" position (*)</span>. Verify GRP. SELECT "C" lights illuminated on 21AC and 22AC. <span class="jpm-critical">MANEUVER Shutdown Bank A at least 10 steps in any one direction (*)</span>. Verify rod movement. Record SAT in Attachment 1. <span class="jpm-critical">RESTORE Shutdown Bank A to pre-test condition (*)</span>.</td>
<td style="padding:6px;color:#9ca3af;">Per OP-AP-300-1001 peer check, operator states initial SBA position, target rod position, and direction. Inserts SBA at least 10 steps to target. Verifies rod movement on P-250. Initials SAT for Groups 1 and 2 on Att 1. Restores SBA ARO via continuous withdrawal.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PERFORM Shutdown Bank B testing</span>: Verify Tavg within ±1°F of Tref. PLACE Bank Selector Switch in the "SBB" position. Verify GRP. SELECT "C" lights illuminated on 21BD and 22BD. <span class="hi-exam">MANEUVER Shutdown Bank B at least 10 steps in any one direction</span>. Verify rod movement. (RT-1 trips 21 SGFP while operator is checking rod position after insertion.)</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Rotates Bank Selector to SBB. Inserts SBB at least 10 steps to target position. While verifying rod position, 21 SGFP trips. Operator responds to 21 SGFP trip by tripping the Rx IAW P&L 3.13. (Alternate Path.) Movement of Rod Bank Selector Switch to MAN or AUTO under these conditions is incorrect.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.1.4 is the discriminating step / alternate path. With Shutdown Bank B inserted at least 10 steps below ARO, a 21 SGFP trip is inserted. Per S2.OP-ST.RCS-0001 P&L 3.13, with a Shutdown Bank not at its fully withdrawn position the operator must <strong>manually trip the reactor</strong> on a Reactor Trip required event — moving the Rod Bank Selector Switch to MAN or AUTO in an attempt to withdraw rods is the wrong action. The applicant must recognize that the SGFP trip is an off-normal event during a surveillance with an inserted shutdown bank, and the correct response is an immediate manual reactor trip.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.RCS-0001 (Rev. 22), OP-AP-300-1001 | Task: N0010070101 | K/A: 001 A4.03 — Ability to manually operate and/or monitor in the control room (Rod Control) | Source: Bank | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[Feed & Condensate]]
- Related procedures: [[S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance]], [[OP-AP-300-1001 — PWR Control Rod Movement Requirements]]
- Related tech specs: [[TS 3.1.3 — Movable Control Assemblies]]
- Related exam: [[2016 NRC Operating Exam]]
