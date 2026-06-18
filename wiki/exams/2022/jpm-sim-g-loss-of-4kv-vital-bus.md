---
title: "2022 JPM Sim-g — Respond to Loss of 2A 4KV Vital Bus"
category: exams
status: draft
aliases:
  - 2022 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — Respond to Loss of 2A 4KV Vital Bus</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO | 062 A2.04 (3.1/3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- 100% power, BOL.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Operator closes the 2CV55 and starts 21 Charging Pump. Upon receiving indications that 21 Charging Pump trips; starts 22 Charging Pump.</span>
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
<td style="padding:6px;color:#c8cdd5;">Loss of 2A 4KV Vital Bus alarms and indications</td>
<td style="padding:6px;color:#9ca3af;">Acknowledges alarms and indications of vital bus loss. Enters S2.OP-AB.4KV-0001 based on assessment of OHAs or alarm response procedures.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.1</td>
<td style="padding:6px;color:#c8cdd5;">Initiate Attachment 1, Continuous Action Summary</td>
<td style="padding:6px;color:#9ca3af;">Reviews CAS and determines no actions required at this time.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.2</td>
<td style="padding:6px;color:#c8cdd5;">Initiate Diesel Generator running checks</td>
<td style="padding:6px;color:#9ca3af;">Identifies that A EDG has started. Notifies CRS that the A EDG needs running checks completed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.3</td>
<td style="padding:6px;color:#c8cdd5;">If 23 Charging Pump was providing to Unit 1, notify Unit 1 NCO</td>
<td style="padding:6px;color:#9ca3af;">Identifies 23 CV pump was in operation to Unit 2 RCS.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Was 23 Charging Pump providing Seal Injection and Charging Flow to Unit 2</td>
<td style="padding:6px;color:#9ca3af;">Operator answers YES and continues to step 3.5.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2CV55</td>
<td style="padding:6px;color:#9ca3af;">Operator closes 2CV55. (Note: valve has a long stroke time, approximately two minutes.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">START 21 Charging Pump</td>
<td style="padding:6px;color:#9ca3af;">Starts 21 Charging Pump by depressing pushbutton. Subsequently identifies that the pump has tripped and acknowledges flashing stop pushbutton.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Is 21 Charging Pump running — NO</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator answers NO and continues to step 3.8.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.8 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">START 22 Charging Pump</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator starts 22 Charging Pump by depressing pushbutton.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 3.7/3.8 are the alternate path / discriminating steps. After the loss of the 2A 4KV Vital Bus, the 23 Charging Pump (which was providing seal injection and charging flow to Unit 2) is lost. The operator closes 2CV55 and attempts to start 21 Charging Pump, but it trips on start. The applicant must recognize that 21 Charging Pump has failed (answer step 3.7 as NO) and immediately start 22 Charging Pump per step 3.8 to restore RCP seal injection and charging flow.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.4KV-0001 (Rev 11) | Task: N1140050401 | K/A: 062 A2.04 — Ability to predict the impacts of loss of AC electrical distribution on AC electrical distribution (3.1/3.4) | Safety Fn: 6 | Source: New | <a href="/salem-study-system/exam-pdfs/2022-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[AB.4KV-0001 — Loss of 4KV Vital Bus]]
- Related systems: [[4KV]], [[CVCS]], [[EDGs]]
- Related exam: [[2022 NRC Operating Exam]]
