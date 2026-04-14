---
title: "2020 JPM Sim-g — RCS Cooldown Using MS10s"
category: exams
status: draft
aliases:
  - 2020 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — RCS Cooldown Using MS10s</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 039 A4.07 (2.8/2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The Unit 2 Reactor was manually tripped and Safety Injection was actuated due to a verified Steam Generator Tube Rupture on 24 Steam Generator.<br>
- All required actions in EOP-TRIP-1 are complete.<br>
- The crew is currently implementing EOP-SGTR-1, Steam Generator Tube Rupture, and all steps up to Step 9 are complete.<br>
- Steam Dump Permissive light on 2RP4 is NOT illuminated due to an instrumentation failure. Steam Dumps are NOT available.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Plant Operator.<br>
- The CRS DIRECTS you to PERFORM an RCS Cooldown starting at Step 10 of 2-EOP-SGTR-1.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Correctly implements the steps of EOP-SGTR-1 to cooldown the RCS using MS10s to the required temperature of 503°F.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Determine required RCS temperature using Table B</td>
<td style="padding:6px;color:#9ca3af;">Uses Table B; determines required RCS temperature based on current ruptured 24 SG pressure (approx. 1045 psi) is 503°F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.1</td>
<td style="padding:6px;color:#c8cdd5;">Is intact SG available for cooldown?</td>
<td style="padding:6px;color:#9ca3af;">Yes — 3 intact SGs are available for cooldown.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.2</td>
<td style="padding:6px;color:#c8cdd5;">Are condenser steam dumps available?</td>
<td style="padding:6px;color:#9ca3af;">NO — Steam Dumps are NOT available (permissive light on 2RP4 is NOT illuminated).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Dump steam at maximum rate using intact SG MS10s</td>
<td style="padding:6px;color:#9ca3af;">LOWERs setpoint on all intact SGs (21, 22, 23) until each MS10 is fully open.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10.5</td>
<td style="padding:6px;color:#c8cdd5;">Is hottest CET less than RCS cooldown temp?</td>
<td style="padding:6px;color:#9ca3af;">No — waits for CET to reach target temperature (approx. 6-8 minutes).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">10.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Stop cooldown — adjust each intact SG MS10 setpoint to match current SG pressure</td>
<td style="padding:6px;color:#9ca3af;">Adjusts each intact SG MS10 setpoint to match current SG pressure, stopping steam release.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This JPM tests the RCS cooldown pathway during an SGTR when condenser steam dumps are unavailable. The applicant must: (1) use Table B to determine the target RCS temperature based on ruptured SG pressure (1045 psi corresponds to 503°F target); (2) recognize that steam dumps are NOT available due to the instrumentation failure (permissive light not illuminated on 2RP4) and select the MS10 atmospheric relief valves as the cooldown method; (3) lower setpoints on the three intact SGs (21, 22, 23 — NOT ruptured 24 SG) to fully open the MS10s for maximum-rate cooldown; (4) stop the cooldown by matching MS10 setpoints to current SG pressures when hottest CET reaches 503°F. Key SGTR concept: cooldown to a target temperature allows subsequent RCS depressurization to equalize pressure across the ruptured tube.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-SGTR-1 (R32) | Task: N1150190501 | K/A: 039 A4.07 — Ability to manually operate and/or monitor in the control room: Steam dump valves | Source: New | <a href="/salem-study-system/exam-pdfs/2020-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Main Steam]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam: [[2020 NRC Operating Exam]]
