---
title: "2023 JPM Sim-b — Transfer To Hot Leg Recirculation"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Transfer To Hot Leg Recirculation</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A4.05 (4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 6 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- You are the incoming crew.<br>
- Unit 2 experienced a Large Break LOCA.<br>
- The previous crew completed the actions to transfer to Cold Leg Recirculation IAW EOP-LOCA-3 and have transitioned back to EOP-LOCA-1.<br>
- 22 SI pump tripped following completion of LOCA-3 and is being investigated.<br>
- 21 RHR pump is C/T for scheduled maintenance prior to the event.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS has directed you to IMPLEMENT 2-EOP-LOCA-4, TRANSFER TO HOT LEG RECIRCULATION.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has aligned the plant for Hot Leg Recirculation IAW Steps 4 and 8 of 2-EOP-LOCA-4.</span>
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
<td style="padding:6px;color:#c8cdd5;">1.0</td>
<td style="padding:6px;color:#c8cdd5;">Are BOTH RHR Pumps Running?</td>
<td style="padding:6px;color:#9ca3af;">Determines that ONLY 22 RHR Pump is running (21 RHR pump is C/T). Goes to Step 4.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.0</td>
<td style="padding:6px;color:#c8cdd5;">Is 22 RHR Pump Running?</td>
<td style="padding:6px;color:#9ca3af;">YES — determines that 22 RHR Pump is running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.0 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 22CS36 (RHR Supply to CS Valve)</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 22CS36 and verifies CLOSE PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.0 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Is 21SJ45 (RHR Discharge to SI Pumps) OPEN?</td>
<td style="padding:6px;color:#9ca3af;">Verifies 21SJ45 closed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.0 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 22SJ49 (Cold Leg Isolation Valve)</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN PB for 22SJ49 and verifies OPEN PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5.0</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is 22 SI Pump Running?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">NO — verifies 22 SI pump tripped. Goes to Step 8. (Alternate path begins here.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">8.0 *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP 21 SI Pump</td>
<td style="padding:6px;color:#9ca3af;">Depresses 21 SI Pump STOP PB on 2CC1 and verifies STOP PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">8.0 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21SJ134 (Cold Leg Discharge Valve)</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE PB for 21SJ134 on 2CC1 and verifies CLOSE PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">8.0 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 21SJ40 (Hot Leg Discharge Valve)</td>
<td style="padding:6px;color:#9ca3af;">Opens 21SJ40 by inserting key and rotating; verifies OPEN PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">8.0 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">START 21 SI Pump</td>
<td style="padding:6px;color:#9ca3af;">Depresses START PB for 21 SI Pump and verifies START PB illuminates.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.0 is the alternate path entry — the applicant must recognize that 22 SI pump is NOT running (tripped following LOCA-3 completion) and proceed to Step 8, which realigns 21 SI pump from cold leg to hot leg injection by stopping the pump, closing the cold leg discharge valve, opening the hot leg discharge valve, and restarting the pump.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-4 (R41) | Task: 1150110501 | K/A: A4.05 — Ability to manually operate and/or monitor in the control room: Transfer of ECCS flowpaths | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-LOCA-4 — Transfer to Hot Leg Recirculation]]
- Related systems: [[ECCS]], [[RHR]]
- Related exam: [[2023 NRC Operating Exam]]
