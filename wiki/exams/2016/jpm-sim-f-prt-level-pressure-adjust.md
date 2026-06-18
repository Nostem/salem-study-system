---
title: "2016 JPM Sim-f — Adjust PRT Level and Pressure"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Adjust PRT Level and Pressure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 007 A4.04 (RO 3.2 / SRO 3.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is at 100% power.<br>
2PR1 is leaking and 2PR6 is shut with power applied. Operators have been attempting to determine the leak rate through 2PR1.<br>
Console alarm PRT Level Hi-Lo is in alarm (lo) with PRT level at 56.2%.<br><br>
<strong>Initiating Cue:</strong><br>
You are directed to raise PRT level to 60% IAW S2.OP-SO.PZR-0003, Pressurizer Relief Tank Operation, Section 5.1.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Raise PRT level to &gt; 60% while maintaining PRT pressure ≤10 psig.</span>
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
<td style="padding:6px;color:#c8cdd5;">P&amp;L Review</td>
<td style="padding:6px;color:#c8cdd5;">Provide marked-up paper copy of S2.OP-SO.PZR-0003.</td>
<td style="padding:6px;color:#9ca3af;">Reviews Precautions and Limitations.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1</td>
<td style="padding:6px;color:#c8cdd5;">IF PRT level is low, THEN PERFORM the following: (Note: Step for reducing PRT pressure may be performed prior to raising level since pressure is close to maximum allowed.)</td>
<td style="padding:6px;color:#9ca3af;">Reads step.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF required, THEN START 21 or 22 Primary Water Pump.</td>
<td style="padding:6px;color:#9ca3af;">Depresses start pushbutton for 22 Primary Water Pump (aligned for manual start), OR places 21 Primary Water Pump in manual and depresses start pushbutton.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2WR80, CONT PRI WATER STOP.</td>
<td style="padding:6px;color:#9ca3af;">Depresses open pushbutton for 2WR80 CONT PRI WATER STOP and verifies open light lit.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2WR82, PRT WATER SUPPLY.</td>
<td style="padding:6px;color:#9ca3af;">Depresses open pushbutton for 2WR82, PRT WATER SUPPLY and verifies open light lit.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF PRT pressure approaches 10 psig, THEN OPEN 2PR15, VENT, as necessary, to maintain PRT pressure at &gt;3 psig and ≤10 psig.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses open pushbutton for 2PR15, VENT prior to PRT pressure rising above 10.0 psig, and depresses close pushbutton prior to PRT pressure lowering below 3.1 psig. Note: IF PRT Hi Pressure alarm is received, it prevents the 2PR15 from opening, and pressure cannot be reduced.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.E.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">When PRT level is between 59% and 86%: CLOSE 2WR80, CONT PRI WATER STOP.</td>
<td style="padding:6px;color:#9ca3af;">When PRT level rises to 60%, closes 2WR80, CONT PRI WATER STOP.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.E.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2WR82, PRT WATER SUPPLY.</td>
<td style="padding:6px;color:#9ca3af;">Closes 2WR82, PRT WATER SUPPLY.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.1.1.E.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2PR15, VENT is closed.</td>
<td style="padding:6px;color:#9ca3af;">Ensures 2PR15, VENT is closed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.E.4</td>
<td style="padding:6px;color:#c8cdd5;">IF Primary Water Pump is in service IAW Step 5.1.1.A, AND is NOT required to be in service for any other reason, THEN STOP running Primary Water Pump.</td>
<td style="padding:6px;color:#9ca3af;">Depresses stop pushbutton for running Primary Water Pump. IF 21 Primary Water pump was used to fill PRT, places 21 or 22 Primary Water pump in auto.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.1.1.F</td>
<td style="padding:6px;color:#c8cdd5;">DIRECT a second Operator to perform an Independent Verification of component position in Attachment 1, Section 1.0.</td>
<td style="padding:6px;color:#9ca3af;">After operator reads Step 5.1.1.F, state JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.1.1.D is the discriminating step. Initial PRT pressure (9.8 psig) is already close to the 10 psig limit, and adding primary water makeup will compress the existing N₂ blanket and drive pressure higher. The applicant must <strong>anticipate the pressure rise and operate 2PR15 (PRT VENT)</strong> to keep PRT pressure within the &gt;3 psig and ≤10 psig band while still raising level. The procedure note explicitly permits performing the pressure reduction step PRIOR to raising level if pressure is already high. <strong>Trap:</strong> if the PRT Hi Pressure alarm comes in, it locks out 2PR15 from opening — the applicant cannot then vent the tank. The lower bound (3 psig) prevents drawing in oxygen by maintaining a positive nitrogen overpressure on the tank.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.PZR-0003 (Rev. 15) | Task: N0100110101 / N0450040101 | K/A: 007 A4.04 — PRT — Ability to manually operate and/or monitor: PRT level | Source: Modified | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]]
- Related procedures: [[S2.OP-SO.PZR-0003 — PRT Operation]]
- Related exam: [[2016 NRC Operating Exam]]
