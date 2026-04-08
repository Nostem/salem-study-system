---
title: "2023 JPM Sim-c — Depressurize RCS Using Aux Spray IAW EOP-LOCA-2"
category: exams
status: draft
aliases:
  - 2023 JPM Sim-c
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-c — Depressurize RCS Using Aux Spray IAW EOP-LOCA-2</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | A4.05 (3.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The reactor was tripped when a RCS leak occurred.<br>
- All RCPs have been stopped<br>
- 2PR1 is inoperable with 2PR6 isolated with power removed<br>
- The operating crew has progressed through the EOPs and is now in 2-EOP-LOCA-2, POST LOCA COOLDOWN AND DEPRESSURIZATION<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to depressurize the RCS to minimize subcooling IAW Step 20 of 2-EOP-LOCA-2, POST LOCA COOLDOWN AND DEPRESSURIZATION<br>
- Notify the CRS when Step 20 is completed.<br>
- Your evaluator will take care of all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has depressurized RCS using Auxiliary spray IAW step 20 of 2-EOP-LOCA-2.</span>
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
<td style="padding:6px;color:#c8cdd5;">C20-1</td>
<td style="padding:6px;color:#c8cdd5;">CAUTION: Accumulators should be isolated prior to depressurizing RCS to less than 700 psig if SI has been terminated</td>
<td style="padding:6px;color:#9ca3af;">Verifies 21-24SJ54s closed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">N20-1</td>
<td style="padding:6px;color:#c8cdd5;">NOTE: Upper head region may void during RCS depressurization if RCPs not running</td>
<td style="padding:6px;color:#9ca3af;">Acknowledges the Note.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">20</td>
<td style="padding:6px;color:#c8cdd5;">Is normal PZR spray available?</td>
<td style="padding:6px;color:#9ca3af;">NO — with no RCPs running, normal spray is not available.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">20 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Is at least one PZR PORV available?</td>
<td style="padding:6px;color:#9ca3af;">YES.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">20 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Depressurize RCS using one PZR PORV</td>
<td style="padding:6px;color:#9ca3af;">Opens 2PR2 to attempt to depressurize RCS but it will not open. 2PR1 remains isolated and unavailable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">20 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is RCS pressure dropping?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">NO — observes valve not repositioning. (Alternate path begins here.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">20 * (cont'd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Depressurize RCS using Aux Spray</td>
<td style="padding:6px;color:#9ca3af;">Opens 2CV75 (RCS Aux Spray Valve). Closes 2CV77 (Charging to Loop 23) and 2CV79 (Charging to Loop 24). Monitors RCS pressure and verifies pressure is lowering.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">20 (cont'd)</td>
<td style="padding:6px;color:#c8cdd5;">Operate PZR heaters as necessary to maintain PZR liquid saturated</td>
<td style="padding:6px;color:#9ca3af;">Checks PZR temperature and determines if pressurizer heaters are required to be energized.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">20.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">When PZR level >77% (74% adverse) or RCS subcooling <10F, stop RCS depressurization</td>
<td style="padding:6px;color:#9ca3af;">Realigns aux spray to normal: closes 2CV75 and opens 2CV77 or 2CV79. (RCS subcooling is cued as 9F and lowering.)</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The alternate path begins when 2PR2 (PORV) fails to open — the applicant must recognize that RCS pressure is NOT dropping, then transition to the Aux Spray depressurization method by opening 2CV75 and closing 2CV77/2CV79. The applicant must also recognize the subcooling limit of <10F (cued at 9F and lowering) requires stopping the depressurization and restoring normal charging alignment.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-2 (R41) | Task: N1150090501 | System: 010 PZR Pressure Control System | K/A: A4.05 — Ability to manually operate and/or monitor in the control room: PZR Auxiliary Spray Valves | Source: New | <a href="/salem-study-system/exam-pdfs/2023-jpm-sim-c.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]]
- Related systems: [[Pressurizer Pressure Control System]], [[Chemical and Volume Control System]]
- Related exam: [[2023 NRC Operating Exam]]
