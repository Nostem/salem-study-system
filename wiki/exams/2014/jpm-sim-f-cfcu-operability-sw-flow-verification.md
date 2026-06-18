---
title: "2014 JPM Sim-f — Perform a CFCU Operability and Service Water Flow Verification"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Perform a CFCU Operability and Service Water Flow Verification</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 022 A4.01 (RO 3.7 / SRO 3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 12 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Rx power is 100% steady state, BOL.<br><br>
<strong>Initiating Cue:</strong><br>
You have been directed to perform S2.OP-ST.CBV-0003, Containment Systems-Cooling Systems surveillance for 25 CFCU for monthly run. 25 CFCU is filled and vented. Component Off Normal Report has been reviewed with no abnormalities noted. Calibration data for required instruments has been obtained and recorded in appropriate Attachments. The differential pressure gauge for 22 SW header has been installed.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Perform S2.OP-ST.CBV-0003 for 25 CFCU and evaluate minimum SW flow as SAT, and Minimum Cooling Water Flow for SW D/P as UNSAT.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:80px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ST.CBV-3 5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">PERFORM test on each CFCU required to be tested. ENSURE the CFCU to be tested is in LOW SPEED IAW S2.OP-SO.CBV-0001.</td>
<td style="padding:6px;color:#9ca3af;">Reviews P&Ls and Prerequisites of S2.OP-SO.CBV-0001; marks Sections 5.2-5.6 N/A; reviews Components Off Normal (complete and SAT).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.CBV-1 5.1.3.A/B</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE CFCU is filled and vented IAW S2.OP-SO.CBV-0003(Q). ENSURE Service Water is available.</td>
<td style="padding:6px;color:#9ca3af;">Ensures 25 CFCU is filled and vented (per Initiating Cue); ensures SW available by checking SW pumps in service and adequate SW header pressure.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.CBV-1 5.1.3.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS FAN LOW SPEED START bezel.</td>
<td style="padding:6px;color:#9ca3af;">Presses FAN LOW SPEED START bezel for 25 CFCU.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.CBV-1 5.1.3.D</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE following dampers are in indicated positions: ROUGH FLTR DAMPER CLOSED; HEPA INLET DAMPER OPEN; HEPA OUTLET DAMPER OPEN.</td>
<td style="padding:6px;color:#9ca3af;">Ensures damper alignment is correct for 25 CFCU (ROUGH FLTR DAMPER CLOSED, HEPA INLET DAMPER OPEN, HEPA OUTLET DAMPER OPEN).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.CBV-1 5.1.3.E/F</td>
<td style="padding:6px;color:#c8cdd5;">IF Service Water flow is &lt;1465 gpm, THEN STOP the CFCU and REFER to S2.OP-SO.SW-0005 Service Water System Operability Guidelines. ENSURE Service Water flow ≥1465 gpm.</td>
<td style="padding:6px;color:#9ca3af;">Verifies SW flow &gt;1465 gpm to 25 CFCU. (If operator notices SW flow of 1675 differs from the other running CFCUs and would stop the test, the CRS directs continuation.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ST.CBV-3 5.1.1.B</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Start Time in the applicable Attachment(s), Section 3.0, for the CFCU being tested.</td>
<td style="padding:6px;color:#9ca3af;">Records start time of 25 CFCU in Attachment 5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">ST.CBV-3 5.1.1.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">When at least 15 minutes have elapsed, RECORD: Stop Time; Cooling Water Flow Rate (gpm); 22 SW HDR ΔP (testing 24 OR 25 CFCU).</td>
<td style="padding:6px;color:#9ca3af;">Records 25 CFCU stop time, SW flow rate, and 22 SW header ΔP. Marks steps for 21-23 CFCU N/A. (22 SW header ΔP reported as 91 psid.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">ST.CBV-3 5.1.1.C *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RECORD Test results by initialing the SAT or UNSAT column IAW the Acceptance Criteria stated in the attachment.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Using Exhibit 1, determines minimum CFCU flowrate for 25 CFCU at 91 psid (required to be rounded up to 95 psid IAW P&L 3.4). Operator initials &gt;1465 gpm as SAT, and Cooling Water Flow Rate as UNSAT. Terminate the JPM once the Att. 5 data in Section 3.0 is marked SAT/UNSAT.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is a two-part acceptance evaluation on 25 CFCU. The first criterion is <strong>minimum Service Water flow ≥1465 gpm</strong> — with SW flow indicating ~1675 gpm, the applicant initials it <strong>SAT</strong>. The discriminating action is the second criterion: <strong>minimum cooling water flow vs. SW header ΔP</strong>. The applicant must use the reported <strong>22 SW header ΔP of 91 psid</strong>, recognize that P&L 3.4 requires rounding <strong>up to 95 psid</strong>, and read the corresponding minimum CFCU flow from Exhibit 1. Because the measured cooling water flow does <strong>NOT</strong> meet the Exhibit-1 minimum at 95 psid, the applicant must initial that result <strong>UNSAT</strong>. Failing to round the ΔP up to 95 psid (using 91 psid would yield a lower, easier-to-meet minimum), or initialing the cooling water flow as SAT, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-ST.CBV-0003 (Rev 17), S2.OP-SO.CBV-0001 (Rev 32) | Task: 220130201 | K/A: 022 A4.01 — Containment Cooling System: Ability to manually operate and/or monitor in the control room (3.6/3.6) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CFCUs]], [[Service Water]]
- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[S2.OP-SO.CBV-0001 — Containment Ventilation Operation]]
- Related exam: [[2014 NRC Operating Exam]]
