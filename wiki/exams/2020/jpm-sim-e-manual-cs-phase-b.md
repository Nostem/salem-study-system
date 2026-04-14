---
title: "2020 JPM Sim-e — Manual Containment Spray and Phase B"
category: exams
status: draft
aliases:
  - 2020 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — Manual Containment Spray and Phase B</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 026 A4.01 (4.5/4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- A Large Break LOCA has occurred.<br>
- The Reactor Automatically Tripped and SI was actuated.<br>
- The crew has completed Steps 1 through 10 of 2-EOP-TRIP-1, Rx Trip or Safety Injection.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to continue on with EOP-TRIP-1 starting at STEP 11.<br>
- Your evaluator will respond to any alarms not associated with your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Manually initiates Containment Spray using key switches. 2. Closes 2CC131 OR 2CC190 Phase B valves. 3. Opens 2CS16 OR 2CS17 NaOH Discharge Valves.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Has containment pressure remained less than 15 psig?</td>
<td style="padding:6px;color:#9ca3af;">NO — Containment pressure has NOT remained less than 15 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Initiate Phase B and Spray Actuation using safeguards key switches</td>
<td style="padding:6px;color:#9ca3af;">Uses both Safeguards Keys and simultaneously rotates both keys on 2CC1 to actuate Phase B and Spray Actuation on at least one Safeguards train.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">11.2</td>
<td style="padding:6px;color:#c8cdd5;">Did any available CNMT Spray pump fail to start?</td>
<td style="padding:6px;color:#9ca3af;">No — both CS pumps are running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">11.3</td>
<td style="padding:6px;color:#c8cdd5;">Initiate Loops 21-24 Main Steam Isolation; Stop 21-24 RCPs</td>
<td style="padding:6px;color:#9ca3af;">Determines MSLI previously actuated (from hi-hi containment pressure signal). Reports 21-24 RCPs are stopped.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Are valve groups in Table D in Safeguards positions?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">NO — identifies 2CC131 and 2CC190 remain OPEN (should be closed for Phase B isolation) AND 2CS16 and 2CS17 remain CLOSED (should be open for NaOH spray additive).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place valves in Safeguards position</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSED pushbutton for 2CC131 and 2CC190; verifies CLOSED bezels illuminated. Depresses OPEN pushbutton for 2CS16 and 2CS17; verifies OPEN bezels illuminated.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 11.4 is the alternate path / discriminating step. After manually actuating Phase B and Containment Spray using the safeguards key switches, the automatic CS and Phase B actuation signals failed to reposition all valves. The applicant must check Table D valve groups and identify that 2CC131 and 2CC190 (CCW containment isolation valves — Phase B) failed to close AND 2CS16 and 2CS17 (NaOH discharge valves for spray additive) failed to open. The applicant must then manually reposition these valves to their safeguards positions. Key knowledge: Phase B isolates CCW supply/return to containment; NaOH valves must open to add sodium hydroxide to the containment spray for iodine scrubbing and pH control.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-1 (R33) | Task: N1150500502 | K/A: 026 A4.01 — Ability to manually operate and/or monitor in the control room: CSS pumps and valves | Source: Modified | <a href="/salem-study-system/exam-pdfs/2020-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Containment Spray]], [[CCW]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2020 NRC Operating Exam]]
