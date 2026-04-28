---
title: "2018 JPM Sim-f — Perform 22 CFCU Surveillance Test"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Perform 22 CFCU Surveillance Test</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 022 A1.04 (3.2/3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 16 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is at 100% power.<br>
- No major equipment out of service and no active Tech Specs are in effect.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to PERFORM a scheduled surveillance test on 22 CFCU IAW S2.OP-ST.CBV-0003, Containment Systems - Cooling Systems.<br>
- All Prerequisites are completed SAT and all required M&TE are installed in the field.<br>
- A field NEO is standing by to provide SW header differential pressure when directed.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">PERFORMS surveillance test IAW S2.OP-ST.CBV-0003 and determines 22 CFCU Test Results is UNSAT.</span>
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
<td style="padding:6px;color:#c8cdd5;">P&Ls</td>
<td style="padding:6px;color:#c8cdd5;">Review Precautions and Limitations including P&L 3.4</td>
<td style="padding:6px;color:#9ca3af;">Reads and initials all P&Ls. P&L 3.4: if measured DP is between DP values in Exhibit 1, select minimum flow for next HIGHER DP value.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Ensure CFCU being tested is in LOW SPEED IAW S2.OP-SO.CBV-0001</td>
<td style="padding:6px;color:#9ca3af;">Goes to S2.OP-SO.CBV-0001 to shift 22 CFCU from High Speed to Low Speed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Press HIGH SPEED STOP bezel for 22 CFCU</td>
<td style="padding:6px;color:#9ca3af;">Depresses HIGH SPEED STOP bezel for 22 CFCU and verifies STOP bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.B</td>
<td style="padding:6px;color:#c8cdd5;">Ensure FAN STOP bezel is illuminated</td>
<td style="padding:6px;color:#9ca3af;">Verifies HIGH SPEED STOP bezel is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">Wait 25 seconds then press FAN LOW SPEED START bezel</td>
<td style="padding:6px;color:#9ca3af;">Waits 25 seconds from when HIGH SPEED STOP was depressed. Depresses LOW SPEED START bezel for 22 CFCU and verifies START bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.D</td>
<td style="padding:6px;color:#c8cdd5;">Verify damper positions for 22 CFCU</td>
<td style="padding:6px;color:#9ca3af;">Verifies: ROUGH FLT DAMPER CLOSED bezel extinguished, HEPA INLET DAMPER OPEN bezel illuminated, HEPA OUTLET DAMPER OPEN bezel illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.F</td>
<td style="padding:6px;color:#c8cdd5;">Ensure Service Water flow >= 1465 gpm</td>
<td style="padding:6px;color:#9ca3af;">Verifies SW flow > 1465 gpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.B</td>
<td style="padding:6px;color:#c8cdd5;">Record Start Time</td>
<td style="padding:6px;color:#9ca3af;">Records START time in Attachment 2, Section 3.0.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.C</td>
<td style="padding:6px;color:#c8cdd5;">Wait 15 minutes, record Stop Time, SW flow, and SW header DP</td>
<td style="padding:6px;color:#9ca3af;">After 15 minutes elapsed, records stop time. Records Cooling Water Flow Rate (~1786 gpm). Contacts field NEO and records 21 SW Header DP of 106 psi.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Record Test Results — determine UNSAT based on P&L 3.4 and Exhibit 1</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Per P&L 3.4, measured DP of 106 psi is between 105 and 110 psi in Exhibit 1, so must use the next HIGHER DP value of 110 psi. At 110 psi, Minimum Flow Rate from Exhibit 1 = 1811 gpm. Actual flow ~1786 gpm is LESS than 1811 gpm minimum required. P&L 3.3: CFCU operable requires SW flow >= 1465 gpm AND >= Min Flow Rate from Exhibit 1. Flow meets 1465 gpm but does NOT meet 1811 gpm → Test Result is UNSAT, 22 CFCU is inoperable.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is 5.1.1.D — the applicant must correctly apply P&L 3.4 to determine which minimum flow rate to compare against. With a measured SW header DP of 106 psi (between 105 and 110 psi in Exhibit 1), P&L 3.4 requires using the next HIGHER DP value (110 psi = 1811 gpm minimum). The actual flow of ~1786 gpm is LESS than 1811 gpm, making the result UNSAT. The trap is that 1786 gpm easily exceeds the 1465 gpm minimum (P&L 3.3) and also exceeds the 105 psi minimum flow (1769 gpm) — but the correct comparison is against the 110 psi value per P&L 3.4. This is the same discriminating concept tested in 2019 and 2023 CFCU surveillance JPMs.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.CBV-0003 (Rev 19), S2.OP-SO.CBV-0001 | Task: N0220130201 | K/A: 022 A1.04 — Ability to predict and/or monitor changes in parameters associated with operating the CCS controls (3.2/3.3) | Source: Bank | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CFCUs]], [[Service Water]]
- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[S2.OP-SO.CBV-0001 — Containment Ventilation Operation]]
- Related exam: [[2018 NRC Operating Exam]]
