---
title: "2022 JPM Sim-d — Respond to RCP Standpipe Low Level Alarm"
category: exams
status: draft
aliases:
  - 2022 JPM Sim-d
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-d — Respond to RCP Standpipe Low Level Alarm</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 003 A1.10 (2.5/2.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 6 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is at 100% power.<br>
- No major equipment is out of service and no Tech Specs are active.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- Respond to all alarms and indications.<br>
- Your evaluator will respond to all alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Upon receipt of a RCP standpipe low level alarm, the operator aligns valves to fill the standpipe with primary water, and terminates the fill when the high level alarm is received.</span>
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
<td style="padding:6px;color:#c8cdd5;">CUE</td>
<td style="padding:6px;color:#c8cdd5;">21 RCP standpipe low console alarm illuminates</td>
<td style="padding:6px;color:#9ca3af;">Operator reports standpipe level low console alarm for 21 RCP.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1.0</td>
<td style="padding:6px;color:#c8cdd5;">Review CAUSES per S2.OP-AR.ZZ-0011</td>
<td style="padding:6px;color:#9ca3af;">Reads likely causes: low seal flow across #2 seal, excessive flow through #3 seal.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine if standpipe low level AND seal water leakoff flow alarm occur together</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines no seal leakoff flow alarm is concurrent with standpipe level low — marks step N/A (does NOT go to AB.RCP-0001).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2.A</td>
<td style="padding:6px;color:#c8cdd5;">If required, START 21 or 22 Primary Water Pump</td>
<td style="padding:6px;color:#9ca3af;">Selects one Primary Water pump in Manual and depresses START PB. (Conditional — fill can be done without starting PW pump, but fill takes longer.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2WR80, PW TO CONTMT STOP V</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN PB for 2WR80 on 2CC2 console (PRT bezels) and verifies OPEN PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.2.D *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 21WR62, Standpipe Supply Valve for 21 RCP</td>
<td style="padding:6px;color:#9ca3af;">Depresses the OPEN PB for 21WR62 on 21 RCP bezel and verifies OPEN PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.3.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">When hi level alarm received: STOP the Primary Water Pump</td>
<td style="padding:6px;color:#9ca3af;">Depresses STOP PB for running Primary Water pump (if previously started) and verifies STOP PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.3.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2WR80, PW TO CONTMT STOP V</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSED PB for 2WR80 and verifies CLOSED PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.3.C *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 21WR62, Standpipe Supply Valve</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSED PB for 21WR62 and verifies CLOSED PB illuminates.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 3.1 is the discriminating step. The applicant must evaluate whether the standpipe low level alarm is accompanied by a concurrent seal water leakoff flow alarm. If BOTH alarms are present, the applicant must transition to AB.RCP-0001 (RCP Abnormality) indicating a potential seal problem. In this JPM, only the standpipe low level alarm is present (caused by #3 seal leak), so the correct action is to continue with the standpipe fill procedure rather than entering the AB.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AR.ZZ-0011 (Rev 63) | Task: N0020160101 | K/A: 003 A1.10 — Ability to predict and/or monitor changes in parameters associated with operating the RCPS controls: Standpipe level (2.5/2.7) | Safety Fn: 4-Pri | Source: Bank | <a href="/salem-study-system/exam-pdfs/2022-jpm-sim-d.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]], [[AB.RCP-0001 — RCP Abnormality]]
- Related systems: [[RCPs]]
- Related exam: [[2022 NRC Operating Exam]]
