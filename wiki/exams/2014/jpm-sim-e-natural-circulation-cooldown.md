---
title: "2014 JPM Sim-e — Implement Actions Required for a Natural Circulation Cooldown"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-e
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-e — Implement Actions Required for a Natural Circulation Cooldown</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | WE09 EA1.01 (3.5/3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 30 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 tripped from 100% power when a loss of all off-site power occurred. All vital buses loaded in MODE 2 SEC operation. Operators performed TRIP-1 and TRIP-2, then transitioned to TRIP-4 to perform a Natural Circulation Cooldown. Operators are performing Step 9 to establish a 20-25°F/hr cooldown rate using 21-24MS10s. Current RCS Tc C/D rate is 5°F/hr. Letdown was unable to be placed in service when directed in TRIP-2. Control Console bezels have been swapped out, and Letdown may be placed in service when directed by procedure.<br><br>
<strong>Initiating Cue:</strong><br>
You are directed to raise the C/D rate to 20-25°F/hr using 21-24MS10 as directed at step 9.1 of TRIP-4, then continue with remainder of TRIP-4.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Raise C/D rate to 20-25°F per hour.<br>2. Depressurize the RCS by opening ONE PORV.<br>3. Initiate Safety Injection after PORV fails to close prior to the loss of RCS subcooling (~3 minutes after PORV is opened, based on CT Book, Appendix 8.2, page 2, italicized text).</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">9.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CONTROL STEAM FLOW TO MINIMIZE SG DELTA-P — DUMP STEAM USING INTACT SG MS10S (RELIEF VALVES). MAINTAIN SG NR LEVEL BETWEEN 9-33%.</td>
<td style="padding:6px;color:#9ca3af;">Adjusts 21-24MS10s to raise cooldown rate while minimizing SG Delta-P. Maintains SG NR level between 9-33% by adjusting 21-24AF21 valves.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">10</td>
<td style="padding:6px;color:#c8cdd5;">WAIT UNTIL ALL RCS THOTS ARE LESS THAN 543°F.</td>
<td style="padding:6px;color:#9ca3af;">Monitors RCS Thots while raising cooldown rate; reports current Tc cooldown rate to CRS when directed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">11 *</span></td>
<td style="padding:6px;color:#c8cdd5;">BLOCK HI STEAM LINE FLOW SI.</td>
<td style="padding:6px;color:#9ca3af;">Blocks HI STEAM LINE FLOW SI on both trains.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12</td>
<td style="padding:6px;color:#c8cdd5;">OPEN CV2 AND CV277 (LETDOWN CONTROL VALVES) AND PLACE IN "AUTO". OPEN CV7 (LETDOWN CONTROL VALVE).</td>
<td style="padding:6px;color:#9ca3af;">Ensures open CV2 and CV277 and selects AUTO for each valve; opens CV7.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12 (cont)</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST CV55 (CHARGING FLOW CONTROL VALVE) TO RAISE CHARGING FLOW TO AT LEAST 87 GPM.</td>
<td style="padding:6px;color:#9ca3af;">Adjusts CV55 to obtain no less than 87 gpm on the charging flow indicator.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">12 (cont)</td>
<td style="padding:6px;color:#c8cdd5;">PERFORM SIMULTANEOUSLY: OPEN ONLY ONE ORIFICE ISOLATION VALVE; ADJUST CV18 (LETDOWN PRESSURE CONTROL VALVE) TO MAINTAIN LETDOWN PRESSURE AT 300 PSIG.</td>
<td style="padding:6px;color:#9ca3af;">Opens only one Letdown Orifice Isolation Valve and adjusts CV18 to control letdown pressure such that the letdown line relief valve does not lift (600 psig).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">12 (cont) *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE THE FOLLOWING IN AUTO: CV18, MASTER FLOW CONTROLLER, CV55. (*CV18 in AUTO is critical)</td>
<td style="padding:6px;color:#9ca3af;">Places CV18, Master Flow Controller, and CV55 in AUTO. (When 2CV18 is placed in AUTO it will shut along with any open orifice valve, and all orifice valves are prevented from opening.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">13</td>
<td style="padding:6px;color:#c8cdd5;">IS LETDOWN IN SERVICE.</td>
<td style="padding:6px;color:#9ca3af;">Answers NO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">13.1</td>
<td style="padding:6px;color:#c8cdd5;">CAUTION: PZR PORV CYCLING SHOULD BE MINIMIZED.</td>
<td style="padding:6px;color:#9ca3af;">Reads statement.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">13.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">USE ONLY ONE PZR PORV TO LOWER RCS PRESSURE TO 1865 PSIG.</td>
<td style="padding:6px;color:#9ca3af;">Opens only 2PR1 OR 2PR2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">13.1 (cont)</td>
<td style="padding:6px;color:#c8cdd5;">WAIT UNTIL RCS PRESSURE LESS THAN 1865.</td>
<td style="padding:6px;color:#9ca3af;">Monitors RCS pressure.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">13.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">CLOSE BOTH PZR PORV's.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Attempts to shut the open PORV and determines it will not shut. Attempts to shut associated PORV Block valve and determines it will not shut. Initiates Safety Injection based upon impending CAS action of loss of subcooling or automatic safety injection nearing/reaching setpoint. (Auto SI actuation is failed in sim setup.) Terminate JPM when SI has been initiated.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>alternate-path</strong> JPM. The early steps are the routine TRIP-4 natural-circulation cooldown: raise C/D rate to <strong>20-25°F/hr</strong> with the MS10 atmospheric reliefs (minimizing SG ΔP), block HI STEAM LINE FLOW SI once Thots are below <strong>543°F</strong>, restore letdown, and raise charging to <strong>≥87 gpm</strong>. The discriminating event occurs at the depressurization: the applicant opens <strong>one PZR PORV</strong> (2PR1 or 2PR2) to lower RCS pressure to <strong>1865 psig</strong>, but the <strong>PORV fails to re-close AND its block valve also fails to close</strong> (both overridden in sim setup). The applicant must recognize the unisolable depressurization and <strong>manually initiate Safety Injection</strong> before losing RCS subcooling (~3 minutes after the PORV is opened) — the automatic SI is failed, so manual actuation is the only protection. Failing to recognize the stuck-open PORV or failing to manually initiate SI before loss of subcooling fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-4 (Rev 23) | Task: N1150530502 | K/A: EPE E09 EA1.1 — Natural Circulation Operations: Ability to operate and/or monitor as they apply to a Natural Circulation Cooldown (3.5/3.5) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-e.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[CVCS]]
- Related EOPs: [[EOP-TRIP-4 — Natural Circulation]]
- Related exam: [[2014 NRC Operating Exam]]
