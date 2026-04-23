---
title: "2019 JPM Sim-f — Perform 22 CFCU Surveillance Test"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Perform 22 CFCU Surveillance Test IAW S2.OP-ST.CBV-0003</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 022 A1.04 (3.2/3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
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
<td style="padding:6px;color:#c8cdd5;">3.0</td>
<td style="padding:6px;color:#c8cdd5;">PRECAUTIONS AND LIMITATIONS</td>
<td style="padding:6px;color:#9ca3af;">Reads and initials all P&Ls.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">P&L 3.4</td>
<td style="padding:6px;color:#c8cdd5;">After recording DP reading, select corresponding minimum flow value from Exhibit 1. IF measured DP is between DP values in Exhibit 1, THEN select minimum flow for next higher DP value</td>
<td style="padding:6px;color:#9ca3af;">Reads and understands P&L 3.4 (e.g., if measured DP is 101 psid, use minimum flow required at 105 psid).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ENSURE CFCU being tested is in LOW SPEED IAW S2.OP-SO.CBV-0001</td>
<td style="padding:6px;color:#9ca3af;">Goes to S2.OP-SO.CBV-0001, Containment Ventilation Operation, to place CFCU in LOW SPEED.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS FAN HIGH SPEED STOP bezel</td>
<td style="padding:6px;color:#9ca3af;">Depresses HIGH SPEED STOP bezel for 22 CFCU and verifies STOP bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">NOTE</td>
<td style="padding:6px;color:#c8cdd5;">Steps 5.1.2B and 5.1.2C should be coordinated for 25 second delay prior to energizing slow speed windings</td>
<td style="padding:6px;color:#9ca3af;">Reads Note and continues on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.B</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE FAN STOP bezel is illuminated</td>
<td style="padding:6px;color:#9ca3af;">Verifies HIGH SPEED STOP bezel is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.2.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">When 25 seconds have elapsed from pressing HIGH SPEED STOP, PRESS FAN LOW SPEED START bezel</td>
<td style="padding:6px;color:#9ca3af;">Waits 25 seconds from when HIGH SPEED STOP bezel was depressed. Depresses LOW SPEED START bezel for 22 CFCU and verifies START bezel illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.D</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE following dampers are in indicated positions</td>
<td style="padding:6px;color:#9ca3af;">Verifies for 22 CFCU: ROUGH FLT DAMPER CLOSED bezel extinguished, HEPA INLET DAMPER OPEN bezel illuminated, HEPA OUTLET DAMPER OPEN bezel illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.E</td>
<td style="padding:6px;color:#c8cdd5;">IF Service Water flow is less than 1465 gpm, THEN STOP the CFCU</td>
<td style="padding:6px;color:#9ca3af;">Determines SW flow is > 1465 gpm and marks step N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.2.F</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE Service Water flow >= 1465 gpm</td>
<td style="padding:6px;color:#9ca3af;">Verifies SW flow > 1465 gpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.B</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Start Time</td>
<td style="padding:6px;color:#9ca3af;">Returns to S2.OP-ST.CBV-0003. Records START time.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">WHEN at least 15 minutes has elapsed, RECORD: Stop Time, SW flow, SW header DP</td>
<td style="padding:6px;color:#9ca3af;">CUE: 15 minutes have elapsed. Records STOP time. Records SW flow on 22 CFCU (1787 +/- 5 gpm). Contacts field NEO and records SW header DP of 106 psi.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.C (cont'd) *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine Test Results: SAT or UNSAT</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Records Test Results as UNSAT. 22 CFCU is Inoperable based on Cooling Water Flow Rate (~1787 gpm) being less than the Minimum Flow Rate (1811 gpm) required in Exhibit 1 by selecting a SW DP of 110 psi (per P&L 3.4, measured DP of 106 psi rounds up to 110 psid).</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">At Step 5.1.1.C, the applicant must correctly apply P&L 3.4 to determine the test result. The measured SW header DP is 106 psi, which falls between 105 and 110 psid in Exhibit 1. Per P&L 3.4, the applicant must use the next HIGHER DP value (110 psid), which requires a minimum flow rate of 1811 gpm. Since the actual CFCU flow is approximately 1787 gpm (less than 1811 gpm required), the test result is UNSAT and 22 CFCU is inoperable. A common error would be selecting 105 psid (minimum flow 1769 gpm), which would incorrectly yield a SAT result.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.CBV-0003 (Rev 20) | Task: N0220130201 | K/A: 022 A1.04 — Ability to predict and/or monitor changes in parameters associated with CFCU operation | Source: Bank | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[S2.OP-SO.CBV-0001 — Containment Ventilation Operation]]
- Related systems: [[CFCUs]], [[Service Water]]
- Related exam: [[2019 NRC Operating Exam]]
