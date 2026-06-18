---
title: "2012 JPM Sim-a — Perform a Control Rod Operability Verification"
category: exams
status: draft
aliases:
  - 2012 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Perform a Control Rod Operability Verification</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 001 A4.03 (RO 3.7 / SRO 3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at steady state, 100% power. Power has been at 100% for 30 days.<br><br>
<strong>Initiating Cue:</strong><br>
• You are directed to perform S2.OP-ST.RCS-0001, Reactivity Control System Rod Control Assemblies.<br>
• A Maintenance Technician is stationed at the Rod Control System Power Cabinets.<br>
• Communications are established via plant page between the Control Room and Jeff Stevens, NEO, at the Rod Control System Power Cabinets.<br>
• The CRS has directed that steps 5.1.2 through 5.1.9 are to be performed in order.<br>
• The CRS directs that 15 steps of rod insertion are to be performed for each bank to ensure that each rod moves at least 10 steps.
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
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">IF this surveillance is to be performed … (entry conditions / criticality check).</td>
<td style="padding:6px;color:#9ca3af;">N/As step based on steady state 100% operation.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.A</td>
<td style="padding:6px;color:#c8cdd5;">IF the Rx is critical, THEN ENSURE Tavg is within 1 degree of Tref.</td>
<td style="padding:6px;color:#9ca3af;">Checks Tave/Tref recorder on 2RP4 and notes Tavg is within 1° of Tref.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE Bank Selector Switch in the SBA position.</td>
<td style="padding:6px;color:#9ca3af;">Rotates Bank Selector Switch fully counter-clockwise to the SBA position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.C</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE GRP. SELECT "C" lights are illuminated on Rod Control System Power Cabinets 21AC and 22AC.</td>
<td style="padding:6px;color:#9ca3af;">Contacts NEO and directs him to verify lights illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">Maneuver Shutdown Bank A at least 10 steps in any one direction.</td>
<td style="padding:6px;color:#9ca3af;">Inserts SBA at least 10 steps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.E–H</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE each rod indicated movement ≥10 steps; RECORD Test Results in Attachment 1; RESTORE SBA to pre-test condition.</td>
<td style="padding:6px;color:#9ca3af;">Verifies rod movement on P-250; initials SAT for Groups 1 and 2; withdraws SBA to ARO; re-verifies GRP SELECT "C" lights.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3.A</td>
<td style="padding:6px;color:#c8cdd5;">IF the Rx is critical, THEN ENSURE Tavg is within 1 degree of Tref.</td>
<td style="padding:6px;color:#9ca3af;">Checks Tave/Tref recorder on 2RP4 and notes Tavg is within 1° of Tref.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.3.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE Bank Selector Switch in the SBB position.</td>
<td style="padding:6px;color:#9ca3af;">Rotates Bank Selector Switch clockwise to the SBB position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3.C</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE GRP. SELECT "C" lights are illuminated on Rod Control System Power Cabinets 21BD and 22BD.</td>
<td style="padding:6px;color:#9ca3af;">Contacts NEO and directs him to verify lights illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.3.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">Maneuver Shutdown Bank B at least 10 steps in any one direction.</td>
<td style="padding:6px;color:#9ca3af;">Inserts SBB at least 10 steps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.3.E *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ENSURE each rod in Shutdown Bank B indicated rod movement of at least 10 steps. (21 SGFP trips while the operator is checking rod position after insertion.)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Responds to 21 SGFP trip by tripping the Rx IAW P&L 3.13. Movement of the Rod Bank Selector Switch to MAN or AUTO under these conditions is incorrect.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. The applicant performs a routine rod operability surveillance (S2.OP-ST.RCS-0001), inserting Shutdown Bank A then Shutdown Bank B at least 10 steps with the Bank Selector Switch in the bank-test position. The discriminating event occurs during step 5.1.3.E: while shutdown rods are <strong>partially inserted</strong> with the Bank Selector Switch in SBB, a <strong>SGFP (21 SGFP) trips</strong>. The correct action is to recognize the loss-of-heat-sink challenge with rods inserted and <strong>manually trip the reactor per P&L 3.13</strong> — NOT to continue the surveillance or place the Bank Selector Switch in MAN/AUTO (which would withdraw rods). Moving the Bank Selector Switch to MAN or AUTO, or failing to trip the Rx, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.RCS-0001 (Rev 20) | Task: N0010070101 | K/A: 001 A4.03 — Control Rod Drive System: Ability to manually operate and/or monitor in the control room (4.0/3.7) | Source: Not specified in source | <a href="/salem-study-system/exam-pdfs/2012-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance]]
- Related exam: [[2012 NRC Operating Exam]]
