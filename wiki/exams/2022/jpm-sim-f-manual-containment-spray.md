---
title: "2022 JPM Sim-f — Manually Actuate Containment Spray"
category: exams
status: draft
aliases:
  - 2022 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Manually Actuate Containment Spray</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 026 A2.03 (4.4/4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- A Large Break LOCA has occurred.<br>
- The Reactor Automatically Tripped and SI was actuated.<br>
- The crew has completed Steps 1 through 8 of 2-EOP-TRIP-1, Rx Trip or Safety Injection.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to continue on with EOP-TRIP-1 starting at STEP 9.<br>
- Your evaluator will respond to any alarms not associated with your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Manually initiates Containment Spray and Phase B isolation. 2. Closes 2CC131 OR 2CC190 Phase B valves. 3. Opens 2CS16 OR 2CS17 NaOH Discharge Valves.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">9.a *</span></td>
<td style="padding:6px;color:#c8cdd5;">Has containment pressure remained less than 15 psig</td>
<td style="padding:6px;color:#9ca3af;">NO. Operator determines containment pressure has NOT remained less than 15 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">9.b *</span></td>
<td style="padding:6px;color:#c8cdd5;">Initiate Phase B and Spray Actuation</td>
<td style="padding:6px;color:#9ca3af;">Uses both Safeguards keys and simultaneously rotates both keys on 2CC1 to actuate Phase B and Spray Actuation on at least one Safeguards train.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">9.c</td>
<td style="padding:6px;color:#c8cdd5;">Did any available CNMT Spray pump fail to start</td>
<td style="padding:6px;color:#9ca3af;">No. Operator determines that both CS pumps are running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">9.d</td>
<td style="padding:6px;color:#c8cdd5;">Are valve groups in Table B in Safeguards positions</td>
<td style="padding:6px;color:#9ca3af;">NO. Operator identifies that 2CC131 and 2CC190 remain OPEN AND 2CS16 and 2CS17 remain CLOSED.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">9.e *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Place valves in Safeguards position: CLOSE 2CC131 or 2CC190 and OPEN 2CS16 or 2CS17</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses CLOSED pushbutton for 2CC131 OR 2CC190 and verifies CLOSED bezel illuminates. Depresses OPEN pushbutton for 2CS16 OR 2CS17 and verifies OPEN bezel illuminates. (Closing both 2CC131 and 2CC190 and opening both 2CS16 and 2CS17 is acceptable.)</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 9.e is the alternate path / discriminating step. After manually actuating Phase B and Containment Spray using the safeguards key switches, the applicant must verify that Table B valve groups are in their safeguards positions. Both 2CC131 and 2CC190 (Phase B valves) failed to auto-close, and both 2CS16 and 2CS17 (NaOH discharge valves) failed to auto-open on the CS signal. The applicant must recognize the mispositioned valves and manually reposition them — close at least one Phase B valve and open at least one NaOH discharge valve.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-1 (Rev 41) | Task: N1150500502 | K/A: 026 A2.03 — Ability to predict the impacts of containment spray system operation on CSS (4.4/4.4) | Safety Fn: 5 | Source: Modified | <a href="/salem-study-system/exam-pdfs/2022-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related systems: [[Containment Spray]]
- Related exam: [[2022 NRC Operating Exam]]
