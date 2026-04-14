---
title: "2020 JPM Sim-b — Loss of Both RHR Pumps in Mode 5"
category: exams
status: draft
aliases:
  - 2020 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Loss of Both RHR Pumps in Mode 5</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 005 A2.03 (2.9/3.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 25 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 is in Mode 5 following a 30 day refueling outage.<br>
- The RCS is depressurized AND vented using 2PS59 as the approved vent path.<br>
- The Containment Equipment Hatch is CLOSED.<br>
- The crew is performing S2.OP-IO.ZZ-0002, Cold Shutdown to Hot Standby.<br>
- PZR level is 30%<br>
- 21 Charging Pump in service<br>
- 21 and 22 SI Pumps are C/T<br>
- 22 Charging Pump is C/T<br>
- RHR Letdown Booster Pump in service with 2CV8 throttled<br>
- RCS temperature is 149°F at the RHR Inlet.<br>
- 22 RHR Pump is aligned for Shutdown Cooling<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The in-service RHR pump (21 RHR Pump) providing shutdown cooling has just tripped due to an electrical fault on the motor.<br>
- INITIATE S2.OP-AB.RHR-0001, Loss of RHR.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Initiates COLD LEG Injection by transferring Charging Pump suction to RWST, opening BIT Isolation valves and closing Charging discharge valve IAW S2.OP-AB.RHR-0001, Attachment 8.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Determine RCS NOT aligned for reduced inventory (&lt;101 ft)</td>
<td style="padding:6px;color:#9ca3af;">No. 0% PZR level cold cal corresponds to 108.92 ft elevation when RCS is filled and vented.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.5</td>
<td style="padding:6px;color:#c8cdd5;">Loss of RHR due to mechanical/electrical failure?</td>
<td style="padding:6px;color:#9ca3af;">Yes — GO TO Step 3.50.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.50-3.51</td>
<td style="padding:6px;color:#c8cdd5;">Heat sink available? RHR Loop available?</td>
<td style="padding:6px;color:#9ca3af;">Yes — CCW to RHR and SW to CCW available. 22 RHR aligned for shutdown cooling.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.52</td>
<td style="padding:6px;color:#c8cdd5;">Start alternate RHR loop — perform Attachment 3</td>
<td style="padding:6px;color:#9ca3af;">Closes 21RH18, closes 21CC16, opens 22CC16, starts 22 RHR Pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">Alt</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">22 RHR Pump trips shortly after starting — both RHR pumps now lost</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Alternate path starts here. Operator re-enters procedure or returns to Step 3.52. Both RHR Pumps unavailable.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.9</td>
<td style="padding:6px;color:#c8cdd5;">Stop RHR Letdown Booster Pump, isolate RHR Letdown to CVCS</td>
<td style="padding:6px;color:#9ca3af;">Depresses STOP PB for L/D Booster Pump. Depresses CLOSED PB for 2CV8.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.32</td>
<td style="padding:6px;color:#c8cdd5;">Initiate Attachment 8, Cold Leg Injection</td>
<td style="padding:6px;color:#9ca3af;">Core exit TCs &lt;200°F — selects Attachment 8, Cold Leg Injection (preferred method if RCS &lt;200°F).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 8, 1.A.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN RWST outlet to Charging Pumps (2SJ1 or 2SJ2)</td>
<td style="padding:6px;color:#9ca3af;">Depresses OPEN pushbutton for 2SJ1 or 2SJ2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 8, 1.A.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE VCT outlet to Charging Pumps (2CV40 or 2CV41)</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSED pushbutton for 2CV40 or 2CV41.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att 8, 1.A.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN BIT Inlet/Outlet valves, CLOSE Charging Discharge Isolation</td>
<td style="padding:6px;color:#9ca3af;">21 Charging Pump already running. Opens 2SJ4 or 2SJ5 (BIT Inlet) AND 2SJ12 or 2SJ13 (BIT Outlet). CLOSES 2CV68 or 2CV69 (Charging Discharge Isolation).</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The alternate path / discriminating step is when 22 RHR Pump trips shortly after starting, leaving both RHR Pumps unavailable. The applicant must recognize no RHR cooling is available and navigate through AB.RHR-0001 to select the correct alternate decay heat removal method — Attachment 8, Cold Leg Injection — based on core exit TCs being less than 200°F. The cold leg injection flow path uses the charging pump aligned to the RWST through the BIT and into the cold legs, providing borated injection to the RCS. Key valve lineup: RWST outlet to charging (2SJ1/2SJ2), close VCT outlet (2CV40/2CV41), open BIT valves (2SJ4/2SJ5, 2SJ12/2SJ13), close charging discharge (2CV68/2CV69).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.RHR-0001 (R21) | Task: 1140730402 | K/A: 005 A2.03 — Ability to predict impacts of RHR pump/motor malfunction and use procedures to mitigate | Source: Modified | <a href="/salem-study-system/exam-pdfs/2020-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]], [[CVCS]]
- Related procedures: [[AB.RHR-0001 — Loss of RHR]], [[S2.OP-IO.ZZ-0002 — Cold Shutdown to Hot Standby]]
- Related exam: [[2020 NRC Operating Exam]]
