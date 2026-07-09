---
title: "2012 JPM SRO-A1-2 — Direct Actions for Spent Fuel Movement"
category: exams
status: draft
aliases:
  - 2012 JPM SRO-A1-2
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM SRO-A1-2 — Direct Actions for Spent Fuel Movement</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Admin | SRO | G2.1.42 (SRO 3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Classroom<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Salem Unit 2 is operating at 99% power, coasting down into a refueling outage which will start in 2 weeks.<br>
Irradiated fuel movement is in progress in the Spent Fuel Pool IAW S2.OP-IO.ZZ-0010, Spent Fuel Pool Manipulations, and will continue without interruption for the next 8 hours, at which time it will terminate.<br>
The unit has no active Tech Spec LCOs.<br>
The current time is 0800.<br><br>
<strong>Initiating Cue:</strong><br>
You have been directed to review the upcoming Unit 2 work for the shift and determine which activities would require suspension of fuel movement before that activity could be performed. Work scheduled for today and expected duration: 0900 – 22 SW pump packing replacement (48 hours); 1000 – 2A EDG Monthly surveillance run (2 hours); 1300 – 21 Chiller compressor oil change (8 hours); 1400 – Delivery of New Fuel into the Fuel Handling Building for upcoming refueling outage (6 hours).
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Determination that 22 SW pump work, 2A EDG surveillance, and 21 Chiller work do NOT require suspension of fuel movement.<br>2. Determination that New Fuel delivery DOES require suspension of fuel movement.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:120px;">Activity</th>
<th style="padding:6px;text-align:left;">Critical Determination</th>
<th style="padding:6px;text-align:left;">Basis</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">22 SW pump *</span></td>
<td style="padding:6px;color:#c8cdd5;">Does NOT require suspension of fuel movement.</td>
<td style="padding:6px;color:#9ca3af;">Two SW pumps required operable, one EDG-backed (IOP-10 p.16). Of the 5 remaining SW pumps, 4 are powered from B and C vital and their EDGs remain operable. SW Tech Specs not entered for a single SW pump inoperable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">2A EDG *</span></td>
<td style="padding:6px;color:#c8cdd5;">Does NOT require suspension of fuel movement.</td>
<td style="padding:6px;color:#9ca3af;">TSAS 3.8.1.2 applies during Modes 5/6 and during irradiated fuel movement and requires only ONE EDG. Only one FHB exhaust fan and one SFP pump need be backed by an operable EDG (IOP-10 p.15).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">21 Chiller *</span></td>
<td style="padding:6px;color:#c8cdd5;">Does NOT require suspension of fuel movement.</td>
<td style="padding:6px;color:#9ca3af;">TSAS 3.7.10 (3 chillers required) allows a chiller to be taken out if irradiated fuel movement is already ongoing and gives 14 days to restore it; 3.0.4 does NOT apply. Step 3.10 of IOP-10 refers to TSAS 3.7.10.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">New Fuel delivery *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">DOES require suspension of fuel movement.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">New Fuel delivery requires the Truck Bay door to the Fuel Handling Building to be opened; IOP-10 (p.17 of 33) requires the Truck Bay door remain closed during fuel movement, so fuel movement must be suspended.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating determination is that only the <strong>New Fuel delivery requires suspending fuel movement</strong> — because it requires opening the <strong>Truck Bay door</strong> to the Fuel Handling Building, and IOP-10 mandates that door stay closed during fuel movement (FHB ventilation boundary integrity). The other three activities are traps that look impactful but are bounded by Tech Specs while fuel movement is in progress: only ONE EDG is required (TSAS 3.8.1.2), a single SW pump out does not enter SW Tech Specs, and a chiller may be removed with a 14-day restoration window (TSAS 3.7.10, with 3.0.4 not applicable). The candidate must distinguish the ventilation-boundary breach from the equipment-redundancy cases.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-IO.ZZ-0010 (Rev 31) Spent Fuel Pool Manipulations; S2.OP-SO.SW-0005 (Rev 41); S1.OP-SO.DG-0005 (Rev 6); Salem Tech Specs (TSAS 3.8.1.2, 3.7.10) | Task: N1120760102 | K/A: 2.1.42 — Knowledge of plant administrative procedures for performing controlled evolutions (3.4) | Source: New | <a href="/salem-study-system/exam-pdfs/2012-jpm-sro-a1-2.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Spent Fuel Pool]], [[Refueling]]
- Related procedures: [[S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations]], [[S2.OP-SO.SW-0005 — Service Water System Operation]], [[S1.OP-SO.DG-0005 — EDG Operability Determination]]
- Related tech specs: [[TS 3.7 — Plant Systems]], [[TS 3.8 — Electrical]], [[TS 3.9 — Refueling Operations]]
- Related exam: [[2012 NRC Operating Exam]]
