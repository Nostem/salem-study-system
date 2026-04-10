---
title: "2022 JPM IP-i — Transfer PZR Backup Heater to Emergency Power Supply"
category: exams
status: draft
aliases:
  - 2022 JPM IP-i
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-i — Transfer PZR Backup Heater to Emergency Power Supply</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 010 A4.03 (3.6/3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — 78 ft. and 84 ft. Electrical Penetration / Switchgear Room<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- A Loss of Offsite Power has occurred on Units 1 and 2.<br>
- The Unit 2 CRS has initiated S2.OP-AB.LOOP-0001, Loss of Offsite Power.<br><br>
<strong>Initiating Cue:</strong><br>
You have been directed to TRANSFER the 22 Backup Group Pressurizer Heaters to the Emergency Power Supply IAW Section 5.3 of S2.OP-SO.PZR-0010, Pressurizer Backup Heaters Power Supply Transfer.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Transfers the 22 Backup Group Pressurizer heaters to the Emergency Power source by placing 11 of 14 disconnects in OFF, placing the 2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH in ON, and using the interlock key to unlock breaker 2AX1AX14X.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.3.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2AX1AX14X, 2EP PRESSURIZER HEATER BUS FEED (EMERGENCY) is OPEN (84 ft. Swgr Rm)</td>
<td style="padding:6px;color:#9ca3af;">Verifies breaker is OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Request NCO to PLACE 22 Backup Group in MANUAL and PRESS 22 BACKUP OFF pushbutton</td>
<td style="padding:6px;color:#9ca3af;">Directs NCO to place 22 B/U Group in Manual and PRESS 22 B/U OFF pushbutton.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2EX1EP2EPX, 2EP 480V PRESSURIZER HEATER BUS MAIN BREAKER is OPEN (78 ft. Electrical Penetration)</td>
<td style="padding:6px;color:#9ca3af;">Verifies breaker is OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">REMOVE interlock key from breaker 2EX1EP2EPX</td>
<td style="padding:6px;color:#9ca3af;">Operator simulates removing interlock key from breaker.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PLACE any eleven (11) of the following disconnects in OFF (only three disconnects are to remain ON): 2EX1EP1X through 2EX1EP14X, PZR HTR B/U GRP 22</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator selects three (3) disconnects to remain ON and PLACES eleven (11) disconnects to OFF position. This limits the heater load to stay within the 460V Vital Bus capacity.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PLACE 2AX1AX14X-1, 2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH in the ON position (Elev. 78 ft. Electrical Penetration) using JAM Key to unlock</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates using JAM Key to unlock disconnect AND then placing the disconnect switch to the ON position.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">INSERT interlock key AND UNLOCK breaker 2AX1AX14X</td>
<td style="padding:6px;color:#9ca3af;">Operator simulates inserting key into breaker and then rotating to unlock the breaker.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.8</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY NCO that PZR Htr 22 B/U Group has been transferred to the emergency power supply (2A 460V Vital Bus)</td>
<td style="padding:6px;color:#9ca3af;">NCO is notified that 22 B/U Group is transferred to the emergency power supply.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 5.3.5 and 5.3.6 are the discriminating steps. The applicant must correctly place 11 of the 14 heater disconnects in OFF (leaving only 3 ON to limit load within the 460V Vital Bus capacity), then use the JAM key to unlock the 2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH and place it in ON. The sequential interlock key transfer from the main breaker (2EX1EP2EPX) to the emergency feed breaker (2AX1AX14X) ensures proper electrical isolation during the transfer.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.PZR-0010 (R32) | Task: 1130040501 | K/A: 010 A4.03 — Ability to manually operate and/or monitor in the control room: Pressurizer heaters | Source: New | <a href="/salem-study-system/exam-pdfs/2022-jpm-ip-i.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[Pressurizer Level & Press Control]], [[460/230V AC]]
- Related procedures: [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]], [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related exam: [[2022 NRC Operating Exam]]
