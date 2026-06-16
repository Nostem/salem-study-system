---
title: "2014 JPM IP-j — Transfer Pressurizer 22 Backup Heaters to Emergency Power Supply"
category: exams
status: draft
aliases:
  - 2014 JPM IP-j
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-j — Transfer Pressurizer 22 Backup Heaters to Emergency Power Supply</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 010 A4.02 (3.6/3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (2A 460V Vital Bus, 84' Switchgear Room; 2EP 480V PZR Heater Bus, 78' Electrical Penetration)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Due to a loss of power to the group buses it is necessary to energize the PZR Backup Heaters from their emergency power supply.<br><br>
<strong>Initiating Cue:</strong><br>
The CRS directs you to perform S2.OP-SO.PZR-0010(Q), Section 5.3, Transferring Pzr Htr 22 BU Group To The Emergency Power Supply.<br>
All prerequisites and Precautions and Limitations have been reviewed and completed.<br>
2A EDG is carrying 2A Vital Bus and is loaded to 2400 KW.<br>
You have a JAM key.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Simulate opening all but one PZR heater supply breakers.<br>2. Simulate aligning emergency power to PZR heater bus from 2A vital bus.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2AX1AX14X, 2EP PRESSURIZER HEATER BUS FEED (EMERGENCY) is OPEN (84' Swgr Rm).</td>
<td style="padding:6px;color:#9ca3af;">Locates breaker 2AX1AX14X 2EP PRESSURIZER HEATER BUS FEED (EMERGENCY) on 2A 460V Vital Bus, Elev. 84' Swgr Rm and determines current breaker position. Cue: 2AX1AX14X Breaker indicates OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.2</td>
<td style="padding:6px;color:#c8cdd5;">Request NCO to PERFORM the following: A. PLACE 22 Backup Group in MANUAL. B. PRESS the 22 BACKUP OFF pushbutton.</td>
<td style="padding:6px;color:#9ca3af;">Locates nearest means of communications and requests NCO to place 22 B/U Htrs in MANUAL and press the 22 BACKUP OFF pushbutton. Cue: NCO reports 22 B/U Htrs are in MANUAL and 22 BACKUP OFF pushbutton has been depressed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2EX1EP2EPX, 2EP 480V PRESSURIZER HEATER BUS MAIN BREAKER is OPEN (78' Electrical Penetration).</td>
<td style="padding:6px;color:#9ca3af;">Locates 2EX1EP2EPX, 2EP 480V PRESSURIZER HEATER BUS MAIN BREAKER on El. 78 Electrical Pen. Cue: 2EX1EP2EPX, 2EP 480V PRESSURIZER HEATER BUS MAIN BREAKER is open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">REMOVE interlock key from breaker 2EX1EP2EPX.</td>
<td style="padding:6px;color:#9ca3af;">Turns key and removes interlock key from breaker 2EX1EP2EPX. Note: Tab must be pushed in to rotate key to allow its removal.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PLACE any eleven of the following disconnects in OFF (only three disconnects are to remain ON)</span> AND MARK the remaining disconnects as N/A.</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator locates individual heater disconnects, places all but three breakers in OFF and notes breakers left ON as N/A in procedure.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2AX1AX14X-1, 2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH, in the ON position (Elev 78' Electrical Penetration).</td>
<td style="padding:6px;color:#9ca3af;">Operator locates 2AX1AX14X-1, 2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH, and places it in the ON position (Elev 78' Electrical Penetration).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">INSERT interlock key, AND UNLOCK breaker 2AX1AX14X.</td>
<td style="padding:6px;color:#9ca3af;">Locates Corry Key Interlock on 2AX1AX14X breaker, inserts and turns key.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.8</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY NCO that PZR Htr 22 B/U Group has been transferred to the emergency power supply (2A 460V Vital Bus).</td>
<td style="padding:6px;color:#9ca3af;">Candidate makes report to the Control Room. Repeat back notification and state: JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is <strong>Step 5.3.5</strong> — the applicant must place <strong>eleven of the fourteen</strong> PZR heater disconnects to OFF, leaving <strong>only three heater groups ON</strong>, before energizing the bus from the emergency feed. This load shed is required so the heater load stays within the capacity of the 2A 460V Vital Bus (fed from the 2A EDG, already loaded to 2400 KW); restoring all heaters would overload the emergency supply. The key-interlock sequence also enforces the transfer: the interlock key cannot be inserted into the emergency feed breaker (2AX1AX14X) until it is first removed from the de-energized main breaker (2EX1EP2EPX), preventing both supplies from being aligned to the heater bus simultaneously. Energizing the bus with too many heaters ON, or defeating the Corry key-interlock sequence, fails the task. The <span class="hi-trap">JAM key provided in the initiating cue is required to operate the disconnect switch in Step 5.3.6.</span></span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.PZR-0010 (Rev 10), Section 5.3, Transferring Pzr Htr 22 BU Group To The Emergency Power Supply | Task: 1150430501 | K/A: 010 A4.02 — Pressurizer Pressure Control System: Ability to manually operate and/or monitor heaters and heater controls in the control room and locally (3.6/3.4) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-ip-j.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[460/230V AC]]
- Related procedures: [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]]
- Related exam: [[2014 NRC Operating Exam]]
</content>
