---
title: "2019 JPM Sim-e — Perform Retest on Main Turbine Stop Valve"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — Perform Retest on a Main Turbine Stop Valve IAW S2.OP-PT.TRB-0003</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO | 045 A4.01 (3.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is at 89% power.<br>
- Power ascension is on hold to complete Main Turbine Valve testing IAW S2.OP-PT.TRB-0003, Main Turbine Valve Stroke Testing.<br>
- A Retest on 22MS28 Main Turbine Stop Valve is required due to the valve failing to stroke during valve testing.<br>
- Maintenance repairs are complete and the valve is turned over to the operating shift for testing.<br>
- Control Rods are in Manual with rods at D-200.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Plant Operator.<br>
- The CRS has directed you to PERFORM retest on 22MS28 Main Turbine Stop Valve (TSV) IAW S2.OP-PT.TRB-0003, Main Turbine Valve Stroke Testing, section 5.4.3.<br>
- All Prerequisites and P&Ls are satisfied.<br>
- Test Preparation section 5.2 is complete.<br>
- An operator is in the field standing by the 22MS28 valve to monitor the valve stroke.<br>
- Notify the CRS the results of the valve stroke test.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Performs valve stroke steps in the correct order on Turbine Stop Valve IAW approved procedure.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.4.3</td>
<td style="padding:6px;color:#c8cdd5;">IF performing 22MS28/22MS29 testing, THEN:</td>
<td style="padding:6px;color:#9ca3af;">Reads step, confirms correct valve (22MS28) and continues on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3.A</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE TEST PERMISSIVES are green: TURBINE INLET PRESSURE OK, NO OTHER TESTS IN PROGRESS</td>
<td style="padding:6px;color:#9ca3af;">At TURBINE E-H CONTROL & STATUS monitor, STOP/GOVERNOR VALVE TESTS screen, verifies test permissives are GREEN. Navigates from Operating Screen by selecting TEST then STOP/GOV TEST.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">CAUTION</td>
<td style="padding:6px;color:#c8cdd5;">Failure of any Main Turbine Stop Valve or Governor Valve to reopen while the Main Turbine is operating, requires compliance with P&L 3.4.3</td>
<td style="padding:6px;color:#9ca3af;">Reads Caution and continues. P&L 3.4.3: Main Turbine should be operated at <=75% of turbine load with any one HP Turbine inlet valve (MS28/MS29) CLOSED; <=30% with any two CLOSED.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3.B</td>
<td style="padding:6px;color:#c8cdd5;">DIRECT Operator to monitor 22MS28 AND 22MS29 for full stroke</td>
<td style="padding:6px;color:#9ca3af;">CUE: Field Operator will monitor 22MS28 and 22MS29 for stroke.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3.C</td>
<td style="padding:6px;color:#c8cdd5;">RECORD 22MS28 AND 22MS29 positions on Attachment 1, Section 3.0, by initialing TEST POSITION 1</td>
<td style="padding:6px;color:#9ca3af;">Records 22MS28 and 22MS29 are both OPEN. (22MS29 Governor Valve considered OPEN when local position >= 17.9% / >= 2.5 inches.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.3.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">SELECT 22MS28/22MS29 START TEST on HMI screen</td>
<td style="padding:6px;color:#9ca3af;">Selects START TEST on HMI. Verifies 22MS28/22MS29 changes from NORMAL OPERATION to TEST IN PROGRESS. Contacts field operator confirming standing by to monitor.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3.E</td>
<td style="padding:6px;color:#c8cdd5;">WHEN TSV (22MS28) CLOSED indication is received, THEN RECORD positions</td>
<td style="padding:6px;color:#9ca3af;">Expects OHA G-12 TURB STM STOP VLV CLSD when 22MS28 closes. Time to close 22MS29 Governor Valve ~2 min from start. Time for full TSV stroke (closed to open) ~25 sec. TSV stays CLOSED ~10 sec then reopens.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5.4.3.E (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Field operator reports: 22MS29 is CLOSED and 22MS901 is OPEN, but missed monitoring the 22MS28 stroke</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Records 22MS29 CLOSED (Test Position 2) and 22MS901 OPEN (Test Position 1). Must recognize need to RESTROKE to verify 22MS28. (Alternate Path starts here.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">RESTROKE *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SELECT RESTROKE on HMI Test screen</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Selects RESTROKE on HMI. Records positions of 22MS28 and 22MS901 after restroke. CUE: Field operator reports 22MS28 valve stroked fully closed and open with no issues noted. 22MS901 is OPEN and 22MS29 remains CLOSED.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.3.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">SELECT 22MS28/22MS29 END TEST on HMI screen</td>
<td style="padding:6px;color:#9ca3af;">Selects END TEST on HMI screen.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3.H</td>
<td style="padding:6px;color:#c8cdd5;">WHEN 22MS28/22MS29 changes from TEST IN PROGRESS to NORMAL OPERATION, RECORD positions</td>
<td style="padding:6px;color:#9ca3af;">CUE: Field operator reports 22MS28 & 22MS29 are OPENED and 22MS901 is CLOSED. Records 22MS28 OPEN (Test Position 3), 22MS29 OPEN (Test Position 4), 22MS901 CLOSED (Test Position 2). Time to open 22MS29 ~2 min.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3.I</td>
<td style="padding:6px;color:#c8cdd5;">IF all STOP/GOVERNOR VALVE TESTS are completed, THEN SELECT CLOSE WINDOW</td>
<td style="padding:6px;color:#9ca3af;">JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">At Step 5.4.3.E, the field operator reports missing the 22MS28 stop valve stroke. The applicant must recognize that the valve stroke was not verified by local observation (required by P&L 3.6) and select RESTROKE on the HMI to re-cycle the stop valve so the field operator can properly observe and verify full stroke. Without the restroke, the test would be incomplete and 22MS28 could not be declared operable.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-PT.TRB-0003 (Rev 20) | Task: N0450130201 | K/A: 045 A4.01 — Ability to manually operate and/or monitor Main Turbine Generator | Source: New | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing]]
- Related systems: [[Main Turbine]]
- Related exam: [[2019 NRC Operating Exam]]
