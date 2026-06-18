---
title: "2012 JPM Sim-b — Perform Forward Flow IST of ECCS Accumulator Check Valves"
category: exams
status: draft
aliases:
  - 2012 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Perform Forward Flow IST of ECCS Accumulator Check Valves</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 006 A4.02 (RO 4.2 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is in MODE 6 with the Rx vessel head removed.<br>
The control room is preparing to perform ECCS Accumulator Check Valve testing.<br>
A second control room operator is available.<br>
A NEO is stationed in the field for any operations required.<br>
Reactor cavity level is 126'.<br>
Refueling Transfer Tube Gate Valve is shut.<br><br>
<strong>Initiating Cue:</strong><br>
Perform forward flow testing of 21-24 ECCS Accumulators Check Valves IAW S2.OP-ST.SJ-0006. This is the normally scheduled surveillance.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Perform forward flow test of 21 ECCS Accumulator and determine it is SAT.<br>2. Perform forward flow test of 22 ECCS Accumulator and determine it is UNSAT.</span>
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
<td style="padding:6px;color:#c8cdd5;">3.0 / 5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">Review Precautions and Limitations. RECORD 21 Accumulator Initial Data in Attachment 2, Section 1.0.</td>
<td style="padding:6px;color:#9ca3af;">Reviews P&Ls. Records 21 Accumulator Initial Data as 69.2 psig and 96.6 %.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2AY2EP2D, 21SJ54 ACCUMULATOR OUTLET VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Contacts NEO and directs them to shut 2AY2EP2D, 21SJ54.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.3</td>
<td style="padding:6px;color:#c8cdd5;">At Panel 2RP4, ENSURE 21SJ54 in the VALVE OPERABLE position.</td>
<td style="padding:6px;color:#9ca3af;">At Panel 2RP4, checks 21SJ54 is in the VALVE OPERABLE position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Simultaneously OPEN 21SJ54, 21 ACCUM OUT AND START the Stopwatch.</td>
<td style="padding:6px;color:#9ca3af;">Simultaneously depresses the open PB for 21SJ54 and starts stopwatch.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">When 21 Accumulator pressure is observed to be 35 psig, simultaneously STOP the Stopwatch AND CLOSE 21SJ54.</td>
<td style="padding:6px;color:#9ca3af;">Simultaneously depresses the 21SJ54 close PB and stops the stopwatch when 21 Accumulator pressure indicates 35 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.4.C / 5.1.4.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD Stopwatch Reading (A); CALCULATE Accumulator Blowdown Time (C) by subtracting Disk Movement Time (B) from Reading (A); IV; then RECORD 21SJ55 and 21SJ56 OPEN "Test Results" using the Acceptance Criteria in Att. 2, Section 2.0.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Calculates Blowdown Time (C) = Stopwatch Reading (A) − Disk Movement Time (1.15 seconds); directs IV; initials the <strong>SAT</strong> column per Acceptance Criteria.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.5 / 5.1.6 / 5.1.7</td>
<td style="padding:6px;color:#c8cdd5;">Post-Maintenance Operability testing (N/A); OPEN 2AY2EP2D, 21SJ54; Restoration IV.</td>
<td style="padding:6px;color:#9ca3af;">Determines Post-Maintenance Operability testing is N/A; directs NEO to open 2AY2EP2D; directs Restoration IV.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.1</td>
<td style="padding:6px;color:#c8cdd5;">RECORD 22 Accumulator Initial Data in Attachment 3, Section 1.0.</td>
<td style="padding:6px;color:#9ca3af;">Records 22 Accumulator Initial Data as 67.4 psig and 97.6 %.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2BY2EP2D, 22SJ54 ACCUMULATOR OUTLET VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Contacts NEO and directs them to shut 2BY2EP2D, 22SJ54.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Simultaneously OPEN 22SJ54, 22 ACCUM OUT AND START the Stopwatch.</td>
<td style="padding:6px;color:#9ca3af;">Simultaneously depresses the open PB for 22SJ54 and starts stopwatch.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">When 22 Accumulator pressure is observed to be 35 psig, simultaneously STOP the Stopwatch AND CLOSE 22SJ54.</td>
<td style="padding:6px;color:#9ca3af;">Simultaneously depresses the 22SJ54 close PB and stops the stopwatch when 22 Accumulator pressure indicates 35 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4.C / 5.2.4.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD Stopwatch Reading (A); CALCULATE Accumulator Blowdown Time (C) by subtracting Disk Movement Time (B) from Reading (A); IV; then RECORD 22SJ55 and 22SJ56 OPEN "Test Results" using the Acceptance Criteria in Att. 3, Section 2.0.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Calculates Blowdown Time (C) = Reading (A) − Disk Movement Time (1.15 seconds); directs IV; initials the <strong>UNSAT</strong> column based on blowdown time &gt;27.79 seconds.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.5 / 5.2.6 / 5.2.7</td>
<td style="padding:6px;color:#c8cdd5;">Post-Maintenance Operability testing (N/A); OPEN 2BY2EP2D, 22SJ54; Restoration IV.</td>
<td style="padding:6px;color:#9ca3af;">Determines Post-Maintenance Operability testing is N/A; directs NEO to open 2BY2EP2D; directs Restoration IV. JPM complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. Both accumulator check-valve forward-flow tests are timed identically: close the accumulator outlet (SJ54) valve, then open it and time the blowdown from start until accumulator pressure reaches <strong>35 psig</strong>, then compute Blowdown Time (C) = Stopwatch Reading (A) − Disk Movement Time (1.15 s). The discriminating action is the <strong>acceptance-criteria determination</strong>: the 21 Accumulator blowdown time falls within limits (<strong>SAT</strong>), but the 22 Accumulator blowdown time is <strong>&gt;27.79 seconds</strong> — outside the Attachment 3 Section 2.0 acceptance criteria — so the applicant must correctly initial the <strong>UNSAT</strong> column for 22SJ55/22SJ56. Accepting the 22 Accumulator as SAT, or misapplying the blowdown-time acceptance criteria, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.SJ-0006 (Rev 13) | Task: N0060160201 | K/A: 006 A4.02 — Emergency Core Cooling System: Ability to manually operate and/or monitor in the control room (4.0/3.8) | Source: Not specified in source | <a href="/salem-study-system/exam-pdfs/2012-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]]
- Related procedures: [[S2.OP-ST.SJ-0006 — Inservice Testing Safety Injection Valves Mode 6]], [[S2.OP-SO.SJ-0002 — Accumulator Operations]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related exam: [[2012 NRC Operating Exam]]
