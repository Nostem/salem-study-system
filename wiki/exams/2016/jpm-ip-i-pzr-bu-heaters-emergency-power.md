---
title: "2016 JPM IP-i — Transfer Pressurizer 22 Backup Heaters to Emergency Power Supply"
category: exams
status: draft
aliases:
  - 2016 JPM IP-i
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-i — Transfer Pressurizer 22 Backup Heaters to Emergency Power Supply</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 010 A4.02 (3.6/3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (84' Switchgear Room and 78' Electrical Penetration)<br>
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
<span style="color:#c8cdd5;">1. Simulate opening all but three PZR heater disconnects.<br>
2. Simulate aligning emergency power to PZR heater bus from 2A vital bus.</span>
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
<td style="padding:6px;color:#c8cdd5;">ENSURE 2AX1AX14X, 2EP PRESSURIZER HEATER BUS FEED (EMERGENCY) is OPEN (84' Swgr Rm).</td>
<td style="padding:6px;color:#9ca3af;">Locates breaker 2AX1AX14X 2EP PRESSURIZER HEATER BUS FEED (EMERGENCY) on 2A 460V Vital Bus, Elev. 84' Swgr Rm and determines current breaker position. Cue: 2AX1AX14X Breaker indicates OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.3.2</td>
<td style="padding:6px;color:#c8cdd5;">Request NCO to PERFORM the following:<br>A. PLACE 22 Backup Group in MANUAL.<br>B. PRESS the 22 BACKUP OFF pushbutton.</td>
<td style="padding:6px;color:#9ca3af;">Locates nearest means of communications and requests NCO to place 22 B/U Htrs in MANUAL and press the 22 BACKUP OFF pushbutton. Cue: NCO reports 22 B/U Htrs are in MANUAL and 22 BACKUP OFF pushbutton has been depressed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2EX1EP2EPX, 2EP 480V PRESSURIZER HEATER BUS MAIN BREAKER is OPEN (78' Electrical Penetration).</td>
<td style="padding:6px;color:#9ca3af;">Locates 2EX1EP2EPX, 2EP 480V PRESSURIZER HEATER BUS MAIN BREAKER on El. 78 Electrical Pen. Cue: 2EX1EP2EPX, 2EP 480V PRESSURIZER HEATER BUS MAIN BREAKER is OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">REMOVE interlock key from breaker 2EX1EP2EPX.</td>
<td style="padding:6px;color:#9ca3af;">Describes turning key and removing interlock key from breaker 2EX1EP2EPX. Note: Tab must be pushed in to rotate key to allow its removal.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PLACE any eleven of the following disconnects in OFF (only three disconnects are to remain ON) AND MARK the remaining disconnects as N/A.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator locates individual heater disconnects, places all but three disconnects in OFF and notes disconnects left ON as N/A in procedure.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.3.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE, 2AX1AX14X-1, 2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH, in the ON position (Elev 78' Electrical Penetration).</td>
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
<span style="color:#c8cdd5;">Step 5.3.5 is the discriminating step — the applicant must recognize that <strong>only 3 of the 14 PZR heater disconnects may remain ON</strong>, with 11 placed in OFF. This load reduction prevents overloading the 2A 460V Vital Bus when the heater bus is fed from emergency (DG-backed) power. The Corry Key Interlock between 2AX1AX14X and 2EX1EP2EPX prevents both breakers from being closed simultaneously, ensuring the heater bus can be powered from only one source at a time. The transfer sequence requires opening the normal source breaker first (2EX1EP2EPX), removing its interlock key, configuring the disconnects to limit load, placing the emergency disconnect switch in ON, then inserting the interlock key into 2AX1AX14X to enable closure from emergency power.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.PZR-0010 (Rev. 10) | Task: 1150430501 | K/A: 010 A4.02 — Pressurizer Pressure Control System — Ability to manually operate and/or monitor: heaters and heater controls in the control room and locally | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-ip-i.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[Pressurizer Level & Press Control]], [[460/230V AC]], [[EDGs]]
- Related procedures: [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]]
- Related exam: [[2016 NRC Operating Exam]]
