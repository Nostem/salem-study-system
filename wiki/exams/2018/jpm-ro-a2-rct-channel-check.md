---
title: "2018 JPM RO-A2 — Channel Check of Reactor Coolant Temperatures"
category: exams
status: draft
aliases:
  - 2018 JPM RO-A2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM RO-A2 — Channel Check of Reactor Coolant Temperatures</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | RO/SRO | G2.1.18 (3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 2 is at 100% reactor power.<br>
- Control room log readings IAW S2.OP-DL.ZZ-0003, Control Room Log (Modes 1-4), is in progress.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- PERFORM the 1830 log readings using the control room log sheet provided.<br>
- 2CC1 Console Readings for OTDT Setpoint are:<br>

<table style="font-size:12px;border-collapse:collapse;margin-left:16px;">
<tr><th style="padding:4px 12px;color:#6b7280;">RC Loop</th><th style="padding:4px 12px;color:#6b7280;">OTDT (deg F)</th></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">21 (TI411C)</td><td style="padding:4px 12px;color:#c8cdd5;">74</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">22 (TI421C)</td><td style="padding:4px 12px;color:#c8cdd5;">78</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">23 (TI431C)</td><td style="padding:4px 12px;color:#c8cdd5;">75</td></tr>
<tr><td style="padding:4px 12px;color:#c8cdd5;">24 (TI441C)</td><td style="padding:4px 12px;color:#c8cdd5;">72</td></tr>
</table>
<br>
- NOTIFY the CRS when log readings are complete.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Completes the 1830 log readings for 21 thru 24 OTDT Setpoints and Tavg Channel Checks.<br>2. Determines 24 Loop OTDT Setpoint is UNSAT.</span>
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
<td style="padding:6px;color:#c8cdd5;">CUE</td>
<td style="padding:6px;color:#c8cdd5;">RC Loop Average Temperature Channel Check</td>
<td style="padding:6px;color:#9ca3af;">Tavg temps provided on log sheet: Loop 21 = 573.2 F, Loop 22 = 575.2 F, Loop 23 = 574.5 F, Loop 24 = 574.8 F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Tavg *</span></td>
<td style="padding:6px;color:#c8cdd5;">21-24 AVE TEMP CHANNEL CHECK — IF all 4 loop average temperatures are within 3 degrees F, THEN RECORD "SAT"</td>
<td style="padding:6px;color:#9ca3af;">Operator determines all Tavg temps within 3 degrees F (max spread: 575.2 - 573.2 = 2.0 F) and records "SAT". S/R 4.3.2.1.1 applicable in Modes 1, 2, and 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">OTDT 21 *</span></td>
<td style="padding:6px;color:#c8cdd5;">RECORD console OTDT indication for Loop 21. Must be within REM OTDT Setpoint Band.</td>
<td style="padding:6px;color:#9ca3af;">Records OTDT setpoint on log sheet. Evaluates using REM FIGURE 5A and determines 21 Loop OTDT setpoint is within the OTDT setpoint band.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">OTDT 22 *</span></td>
<td style="padding:6px;color:#c8cdd5;">RECORD console OTDT indication for Loop 22. Must be within REM OTDT Setpoint Band.</td>
<td style="padding:6px;color:#9ca3af;">Records OTDT setpoint on log sheet. Evaluates using REM FIGURE 5B and determines 22 Loop OTDT setpoint is within the OTDT setpoint band.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">OTDT 23 *</span></td>
<td style="padding:6px;color:#c8cdd5;">RECORD console OTDT indication for Loop 23. Must be within REM OTDT Setpoint Band.</td>
<td style="padding:6px;color:#9ca3af;">Records OTDT setpoint on log sheet. Evaluates using REM FIGURE 5C and determines 23 Loop OTDT setpoint is within the OTDT setpoint band.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">OTDT 24 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD console OTDT indication for Loop 24. Must be within REM OTDT Setpoint Band.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Records OTDT setpoint on log sheet. Evaluates using REM FIGURE 5D and determines 24 Loop OTDT setpoint is NOT within the OTDT setpoint band. Informs CRS that Loop 24 OTDT setpoint is outside the REM setpoint band.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The OTDT 24 step is the discriminating step. All four loops' OTDT console readings must be compared against the REM Reactor Engineering Manual FIGURE 5 (A-D) setpoint bands. Loops 21, 22, and 23 are within their respective bands. Loop 24 OTDT setpoint of 72 deg F is outside the REM FIGURE 5D setpoint band — the applicant must recognize this, record it as UNSAT (or red-circle it), and notify the CRS. The Tavg Channel Check is SAT (all within 3 deg F), but the OTDT check fails on Loop 24.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-DL.ZZ-0003 (Rev 109), Salem 2 Cycle 23 REM (Rev 17) | Task: S302000115 | K/A: G2.1.18 — Ability to make accurate, clear, and concise logs, records, status boards, and reports | Source: New | <a href="/salem-study-system/exam-pdfs/2018-jpm-ro-a2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]]
- Related procedures: [[S2.OP-DL.ZZ-0003 — Control Room Logs]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]], [[TS 3/4.4 — Reactor Coolant System]]
- Related exam: [[2018 NRC Operating Exam]]
