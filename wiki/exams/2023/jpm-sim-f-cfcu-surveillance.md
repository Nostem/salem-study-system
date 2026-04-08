---
title: "2023 JPM Sim-f — Perform 22 CFCU Surveillance Test IAW S2.OP-ST.CBV-0003"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Perform 22 CFCU Surveillance Test IAW S2.OP-ST.CBV-0003</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A1.04 (3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is at 100% power.<br>
- No major equipment out of service and no active Tech Specs are in effect.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to PERFORM a scheduled surveillance test on 22 CFCU IAW S2.OP-ST.CBV-0003, Containment Systems - Cooling Systems.<br>
- All Prerequisites are completed SAT and all required M&TE are installed in the field.<br>
- A field NEO is standing by to provide SW header differential pressure when directed.<br>
- Notify CRS of test results.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">This task is satisfactorily met when the applicant has placed the CFCU in the required test condition IAW step 4.1.2 of S2.OP-SO.CBV-0001, obtained the required test data, and determines 22 CFCU Test Result is UNSAT due to flow obtained being below the minimum flow for current delta P IAW S2.OP-ST.CBV-0003.</span>
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
<td style="padding:6px;color:#c8cdd5;">3.0</td>
<td style="padding:6px;color:#c8cdd5;">P&L 3.4: If measured DP value is between DP values in Exhibit 1, select minimum flow for next higher DP value</td>
<td style="padding:6px;color:#9ca3af;">Reads and initials all P&Ls. Understanding P&L 3.4 is important to properly determining which DP value to choose.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.A</td>
<td style="padding:6px;color:#c8cdd5;">Ensure CFCU being tested is in LOW SPEED IAW S2.OP-SO.CBV-0001</td>
<td style="padding:6px;color:#9ca3af;">Goes to S2.OP-SO.CBV-0001 to place CFCU in low speed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Press FAN HIGH SPEED STOP bezel for 22 CFCU</td>
<td style="padding:6px;color:#9ca3af;">Depresses HIGH SPEED STOP bezel for 22 CFCU and verifies STOP bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">Ensure FAN STOP bezel is illuminated</td>
<td style="padding:6px;color:#9ca3af;">Verifies HIGH SPEED STOP bezel is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">When 25 seconds have elapsed, press FAN LOW SPEED START bezel</td>
<td style="padding:6px;color:#9ca3af;">Waits 25 seconds from when HIGH SPEED STOP was depressed. Depresses LOW SPEED START bezel for 22 CFCU and verifies START bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.D</td>
<td style="padding:6px;color:#c8cdd5;">Ensure dampers are in indicated positions</td>
<td style="padding:6px;color:#9ca3af;">Verifies: ROUGH FLT DAMPER CLOSED bezel extinguished; HEPA INLET DAMPER OPEN bezel illuminated; HEPA OUTLET DAMPER OPEN bezel illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.E</td>
<td style="padding:6px;color:#c8cdd5;">If SW flow < 1465 gpm, stop CFCU</td>
<td style="padding:6px;color:#9ca3af;">Determines SW flow > 1465 gpm, marks step N/A and continues.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.F</td>
<td style="padding:6px;color:#c8cdd5;">Ensure SW flow >= 1465 gpm</td>
<td style="padding:6px;color:#9ca3af;">Verifies SW flow > 1465 gpm. Returns to S2.OP-ST.CBV-0003.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.B</td>
<td style="padding:6px;color:#c8cdd5;">Record Start Time</td>
<td style="padding:6px;color:#9ca3af;">Records START time in applicable Attachment, Section 3.0.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.1.11.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">When at least 15 minutes elapsed, record stop time, SW flow, SW header DP, and determine Test Results</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Records STOP time. Records SW flow on 22 CFCU (~1785 gpm). Contacts field NEO and records 21 SW Header DP of 106 psi. Determines 22 CFCU is UNSAT/Inoperable because Cooling Water Flow Rate (1785 gpm) is less than the Minimum Flow Rate (1811 gpm) required in Exhibit 1 at SW DP of 110 psi (per P&L 3.4, must use next higher DP value).</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 4.1.11.3 is the discriminating step — the applicant must correctly apply P&L 3.4: with a measured SW header DP of 106 psi (between 105 and 110), they must select the minimum flow for the next HIGHER DP value (110 psi = 1811 gpm required). Since actual flow is ~1785 gpm, which is less than 1811 gpm, the test result is UNSAT. P&L 3.3 also requires CFCU SW flow rate >= 1465 gpm AND >= Min Flow Rate in Exhibit 1 to be Operable.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.CBV-0003 (R20), S2.OP-SO.CBV-0001 | Task: N0220130201 | System: 022 Containment Cooling System | K/A: A1.04 — Ability to predict and/or monitor changes in parameters associated with operation of the Containment Cooling System: Cooling water flow | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[S2.OP-SO.CBV-0001 — Containment Ventilation Operation]]
- Related systems: [[Containment Fan Coil Units]], [[Service Water]]
- Related exam: [[2023 NRC Operating Exam]]
