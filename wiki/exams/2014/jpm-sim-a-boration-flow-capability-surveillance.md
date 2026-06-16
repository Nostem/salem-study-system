---
title: "2014 JPM Sim-a — Perform a Boration Flow Capability to the RCS Surveillance Test"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-a
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-a — Perform a Boration Flow Capability to the RCS Surveillance Test</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 004 A4.18 (4.3/4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is in MODE 3 @ NOP, NOT<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Perform S2.OP-ST.CVC-0011, Boration Flow Rate Test
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Complete S2.OP-ST.CVC-0011 and determine 2CV172 test is SAT and 2CV175 test is UNSAT.</span>
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
<td style="padding:6px;color:#c8cdd5;">2.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE one of the following: The Reactor is in Modes 3-6, or Defueled. OR The procedure may be performed for Refueling Outages in Modes 1 and 2 provided the rapid boration is started immediately prior to the Reactor Trip.</td>
<td style="padding:6px;color:#9ca3af;">Determines the Reactor is in Mode 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2.4</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE the Charging System is in service IAW S2.OP-SO.CVC-0001(Q), Charging, Letdown, and Seal Injection.</td>
<td style="padding:6px;color:#9ca3af;">Determines Charging System is in service.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.4</td>
<td style="padding:6px;color:#c8cdd5;">The ≥36 gpm Boric Acid Flow value specified throughout this procedure satisfies the 33 gpm requirement of Technical Specification 4.1.2.2.d plus 3 gpm for instrument uncertainty associated with instrument loops 2FT110 and 2FT113 IAW PR#971016106.</td>
<td style="padding:6px;color:#9ca3af;">Reads and initials step.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">SELECT MAKEUP CONTROL MODE SELECT, STOP.</td>
<td style="padding:6px;color:#9ca3af;">Selects MAKEUP CONTROL MODE SELECT, STOP.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">SELECT 2CV172, BA FLOW CONTROL TO BLENDER, MANUAL.</td>
<td style="padding:6px;color:#9ca3af;">Selects 2CV172, BA FLOW CONTROL TO BLENDER, MANUAL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2CV172.</td>
<td style="padding:6px;color:#9ca3af;">Determines 2CV172 is open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">On the in service Boric Acid Pump: A. SELECT MANUAL. B. SELECT FAST START. (*B is critical)</td>
<td style="padding:6px;color:#9ca3af;">On the in service Boric Acid Pump selects MANUAL, then FAST START.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">SELECT 2CV185, MAKEUP FLOWPATH, MANUAL.</td>
<td style="padding:6px;color:#9ca3af;">Selects 2CV185, MAKEUP FLOWPATH, MANUAL.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2CV185.</td>
<td style="padding:6px;color:#9ca3af;">Opens 2CV185.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.7 / 5.1.8</td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21CV160, RECIRC VALVE. CLOSE 22CV160, RECIRC VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Closes 21CV160 and 22CV160, RECIRC VALVEs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD test results in Attachment 1, Section 2.0.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Initials SAT after verifying 2FI110A indicates ≥ 36 gpm.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.11 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2CV185.</td>
<td style="padding:6px;color:#9ca3af;">Closes 2CV185.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.13 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE the following valves in AUTO: 2CV185, 2CV172.</td>
<td style="padding:6px;color:#9ca3af;">Places 2CV185 and 2CV172 in AUTO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">On the in service Boric Acid Pump: SELECT MANUAL, then SELECT FAST START.</td>
<td style="padding:6px;color:#9ca3af;">On the in service Boric Acid Pump selects MANUAL, then FAST START.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2CV175, RAPID BORATE STOP VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Opens 2CV175, RAPID BORATE STOP VALVE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD test results in Attachment 1, Section 3.0.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Initial UNSAT for 2FI113A flow.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">On the in service Boric Acid Pump, SELECT SLOW START.</td>
<td style="padding:6px;color:#9ca3af;">Selects SLOW START on in service Boric Acid Pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2CV175, RAPID BORATE STOP VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Closes 2CV175, RAPID BORATE STOP VALVE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.8</td>
<td style="padding:6px;color:#c8cdd5;">PRESS the following RECIRC VLV OPEN (INC FLOW) pushbuttons until the valves are sufficiently OPEN to support BAST level control: 21CV160, 22CV160 RECIRC VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Throttles open 21CV160 and 22CV160, RECIRC VALVEs. Terminate JPM when 21 and 22CV160 have been throttled open.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is a two-part surveillance. Section 5.1 verifies the <strong>normal makeup flowpath</strong> (through 2CV172/2CV185); the applicant records test results at step 5.1.9 and must verify 2FI110A indicates <strong>≥ 36 gpm</strong> to initial the test <strong>SAT</strong>. Section 5.2 then verifies the <strong>rapid borate flowpath</strong> (through 2CV175); at step 5.2.5 the applicant reads 2FI113A and the discriminating action is recognizing that the rapid borate flow does <strong>NOT</strong> meet acceptance criteria and must be initialed <strong>UNSAT</strong>. The ≥36 gpm value (33 gpm per TS 4.1.2.2.d plus 3 gpm instrument uncertainty) is the pass/fail boundary. Recording 2CV175/2FI113A as SAT — or failing to recognize the degraded rapid borate flow — fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.CVC-0011 (Rev 7) | Task: N0040430201 | K/A: 004 A4.18 — CVCS: Ability to manually operate and/or monitor in the control room (4.3/4.4) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-a.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[S2.OP-ST.CVC-0011 — Boration Flow Rate Test]]
- Related tech specs: [[TS 3/4.1.2 — Boration Systems]]
- Related exam: [[2014 NRC Operating Exam]]
