---
title: "2022 JPM Sim-e — Loss of SGFP Immediate Actions"
category: exams
status: draft
aliases:
  - 2022 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — Loss of SGFP Immediate Actions</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 059 A4.14 (3.1/3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 power ascension is in progress to 90% at 10% per hour.<br>
- S2.OP-SO.TRB-0001 Attachment 5 is in progress up to step 4.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Initiates a manual Main Turbine load reduction at 15%/min to 66% and inserts control rods in MANUAL due to failure of the rods to insert in AUTO.</span>
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
<td style="padding:6px;color:#c8cdd5;">2.3</td>
<td style="padding:6px;color:#c8cdd5;">Recognize loss of SGFP with Turbine Power >70%</td>
<td style="padding:6px;color:#9ca3af;">Acknowledges alarms and indications of SGFP trip. Performs immediate actions of S2.OP-AB.CN-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2.3.1.A</td>
<td style="padding:6px;color:#c8cdd5;">Verify Automatic Turbine Runback has or is occurring</td>
<td style="padding:6px;color:#9ca3af;">Identifies that an AUTO Main Turbine runback has NOT occurred (SGFP RUNBACK OPERATE light NOT lit, generator load NOT trending to ~775 MW).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.3.1.B *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Initiate manual Main Turbine load reduction to &lt;66% at 15%/min</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies ramp rates are NOT preset for SGFP runback (as-found: 90% at 10%/hr). Depresses MIN/HR toggle to select %/MIN. Adjusts ramp rate to 15. Adjusts SETTER to 66. Selects GO.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2.3.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Control Tavg — recognize rods fail to insert in AUTO, place in MANUAL, insert rods</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Ensures Rod Bank Selector Switch in AUTO. As RCS heats up during downpower, identifies rods not inserting when demanded (Terr). Places Rod Bank Selector Switch to MANUAL and inserts rods.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This JPM has two discriminating elements. First (Step 2.3.1.B): the automatic turbine runback fails, so the applicant must recognize the runback has not initiated and manually set up the DEHC panel for a 15%/min load reduction to 66% — this requires toggling from %/hr to %/min units. Second (Step 2.3.2): during the load reduction, Tavg rises above Tref because rods fail to insert in AUTO. The applicant must recognize the Terr divergence, take rods to MANUAL, and manually insert rods at 48 steps/min to restore Tavg to Tref.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.CN-0001 (Rev 31), S2.OP-SO.TRB-0001 | Task: N1140100401 | K/A: 059 A4.14 — Ability to manually operate and/or monitor in the control room: Main Feedwater (3.1/3.3) | Safety Fn: 4-Sec | Source: Modified | <a href="/salem-study-system/exam-pdfs/2022-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[AB.CN-0001 — Condensate System Abnormality]]
- Related systems: [[Feed & Condensate]], [[Control Rod Drive]]
- Related exam: [[2022 NRC Operating Exam]]
