---
title: "2012 JPM Sim-c — TCAF Pressurizer Pressure Malfunction (Failed Open PZR Spray Valve)"
category: exams
status: draft
aliases:
  - 2012 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — TCAF Pressurizer Pressure Malfunction (Failed Open PZR Spray Valve)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 010 A4.01 (RO 3.8 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 4 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Reactor power is stable at 4.0% power. The power ascension is on hold temporarily.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Trip Rx.<br>2. Stops 21 and 23 RCP.<br>3. Stops 22 OR 24 RCP.</span>
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
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;">Recognize lowering PZR Pressure / alarm / change in 2PS1 position; acknowledge OHA E-28 PZR HTR ON PRESS LO. Enter S2.OP-AB.PZR-0001 directly or via the OHA E-28 ARP.</td>
<td style="padding:6px;color:#9ca3af;">Recognizes lowering PZR pressure and/or 22 PZR backup heaters energized; enters S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">INITIATE Attachment 1 Continuous Action Summary.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1 Continuous Action Summary. (CAS directs trip of the Rx if RCS pressure lowers to 2000 psig and continues to drop.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2 / 3.3 / 3.11</td>
<td style="padding:6px;color:#c8cdd5;">Is POPS in service? Is the controlling PZR Pressure Control Channel (I or III) failed? Is the Master Pressure Controller failed?</td>
<td style="padding:6px;color:#9ca3af;">Determines POPS not in service; controlling channel not failed; Master Pressure Controller not failed; goes to Step 3.17.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">3.17</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is a Spray Valve(s) failed? (Refer to Attachment 2 for guidance)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines 2PS1 is failed open.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.18 / 3.19</td>
<td style="padding:6px;color:#c8cdd5;">PLACE the Spray Valve(s) in MANUAL; OPERATE the Spray Valves to control pressure consistent with Attachment 2.</td>
<td style="padding:6px;color:#9ca3af;">Places 2PS1 in MANUAL; depresses CLOSE PB for 2PS1 and recognizes that 2PS1 remains open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.20 / 3.21</td>
<td style="padding:6px;color:#c8cdd5;">PLACE all Pressurizer heaters in MANUAL and ON. Has pressure control been regained?</td>
<td style="padding:6px;color:#9ca3af;">Places all PZR heaters in MANUAL and ON; determines pressure control has not been regained since 2PS1 remains open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.22 / 3.23</td>
<td style="padding:6px;color:#c8cdd5;">Is RCS pressure dropping rapidly? Are Reactor Trip Breakers CLOSED?</td>
<td style="padding:6px;color:#9ca3af;">Determines RCS pressure is dropping rapidly; determines Reactor Trip Breakers are closed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.24.A *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">TRIP the Reactor.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Initiates a Reactor Trip using either MANUAL TRIP handle.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.24.B</td>
<td style="padding:6px;color:#c8cdd5;">Is Reactor Trip Confirmed?</td>
<td style="padding:6px;color:#9ca3af;">Determines Reactor Trip is confirmed after identifying PRNI reading &lt; 5% and IR NI indication dropping.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.24.C *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">STOP 21 AND 23 RCPs.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses STOP PBs for 21 and 23 RCP and verifies start lights extinguish and stop lights illuminate.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.24.D *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF Pressurizer Pressure continues to drop, THEN STOP all but one RCP.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines Pressurizer Pressure continues to drop and depresses STOP PB on 22 OR 24 RCP, leaving one RCP running.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.24.E</td>
<td style="padding:6px;color:#c8cdd5;">GO TO 2-EOP-TRIP-1, Reactor Trip or Safety Injection, AND CONTINUE with this procedure.</td>
<td style="padding:6px;color:#9ca3af;">Begins performing Immediate Actions of 2-EOP-TRIP-1, Reactor Trip or Safety Injection. JPM complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">A Pressurizer Spray Valve (<strong>2PS1</strong>) fails open, depressurizing the RCS. The applicant works the AB.PZR-0001 diagnostic logic — POPS not in service, pressure channel not failed, master controller not failed — and at step 3.17 must <strong>identify 2PS1 as the failed-open spray valve</strong>. Placing 2PS1 in MANUAL and depressing CLOSE does <strong>not</strong> reseat it, so pressure control is not regained. The discriminating sequence is recognizing that pressure cannot be restored and RCS pressure is dropping rapidly, then <strong>tripping the reactor</strong> (critical step 3.24.A), <strong>stopping 21 and 23 RCPs</strong> (3.24.C — the pumps whose spray supply feeds the open valve), and <strong>stopping a second pump (22 OR 24 RCP)</strong> while pressure continues to drop (3.24.D). Stopping the wrong RCPs, or failing to trip, fails the task. Note the validated time between 2PS1 failing open and RCS pressure reaching 2000 psig is approximately 4 minutes 15 seconds.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.PZR-0001 (Rev 18) | Task: 1140240401 | K/A: 010 A4.01 — Pressurizer Pressure Control System: Ability to manually operate and/or monitor in the control room (3.7/3.5) | Source: Not specified in source | <a href="/salem-study-system/exam-pdfs/2012-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[Reactor Coolant Pumps]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2012 NRC Operating Exam]]
