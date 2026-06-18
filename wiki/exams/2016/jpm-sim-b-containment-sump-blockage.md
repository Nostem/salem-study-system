---
title: "2016 JPM Sim-b — Perform Actions for Containment Sump Blockage"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Perform Actions for Containment Sump Blockage</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | G2.4.4 (RO 4.5 / SRO 4.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- A LBLOCA has occurred.<br>
- The crew has responded by performing TRIP-1 and LOCA-1.<br>
- The crew is performing LOCA-3 with all AC buses energized from off-site power, and is waiting at step 21 for RWST lo-lo level alarm.<br>
- All ECCS pumps are operating except 22 CS pump which was stopped at step 8.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Continue performing LOCA-3.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Secure all ECCS pumps. 2. Reestablish recirculation flow with ONE RHR pump and ONE charging OR SI pump.</span>
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
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">Diagnosis</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determine ECCS pumps are exhibiting signs of cavitation and recognize entry into APPX-7 is warranted from Continuous Action Summary.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines BOTH RHR pumps exhibit signs of cavitation, as well as ALL ECCS pumps being supplied from RHR pumps. Implements 2-EOP-APPX-7. (Operator may go to EOP-LOCA-5, but Step 1 of LOCA-5 directs performance of APPX-7.)</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">APPX-7 Caution</td>
<td style="padding:6px;color:#c8cdd5;">Any pump receiving suction from an RHR pump should be stopped before stopping the RHR pump. If any Charging Pump, SI Pump, or Containment Spray Pump loses suction or shows indication of cavitation, the pump should be stopped.</td>
<td style="padding:6px;color:#9ca3af;">Stopping RHR pumps WITHOUT first stopping any SI or Charging pumps receiving suction from RHR pump discharge is failure criteria.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1 (CAS)</td>
<td style="padding:6px;color:#c8cdd5;">MONITOR RHR Pump suction conditions: CHECK NO indications of cavitation (Pump Amps, Flow, Discharge Pressure stable and normal; no oscillations).</td>
<td style="padding:6px;color:#9ca3af;">Determines BOTH RHR pumps exhibit signs of cavitation, as well as ALL ECCS pumps being supplied from RHR pumps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1.a RNO 1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 21 RH29 AND 22 RH29 in AUTO.</td>
<td style="padding:6px;color:#9ca3af;">Places 21 RH29 and 22 RH29 in AUTO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.a RNO 2 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">STOP ANY Charging Pump or SI Pump taking suction from affected RHR Pump(s).</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Stops 21 and 22 Charging pumps and 21 and 22 SI pumps.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1.a RNO 3</td>
<td style="padding:6px;color:#c8cdd5;">IF indications of cavitation continue, THEN CLOSE 21 CS36 AND 22 CS36, RHR TO CS VALVE.</td>
<td style="padding:6px;color:#9ca3af;">Determines pump cavitation is continuing, verifies 21 CS36 and 22 CS36 are shut.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1.a RNO 4</td>
<td style="padding:6px;color:#c8cdd5;">IF indications of cavitation continue AND radiological conditions permit, THEN send operator to release tags and restore CA to RH18(s); CLOSE affected RH18(s).</td>
<td style="padding:6px;color:#9ca3af;">Cue: Radiation Protection has determined both RHR pump rooms to be unavailable for access due to high radiation levels.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.a RNO 5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF indications of cavitation continue, THEN REMOVE LOCKOUT(s) AND CLOSE affected SJ49(s), RHR TO COLD LEG.</td>
<td style="padding:6px;color:#9ca3af;">Determines RHR pump cavitation is continuing, removes lockouts from 21 SJ49 and 22 SJ49 and shuts 21 SJ49 and 22 SJ49.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">1.a RNO 6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF indications of cavitation continue, THEN STOP affected RHR Pump(s).</td>
<td style="padding:6px;color:#9ca3af;">Determines indications of cavitation continue, and stops 21 and 22 RHR pump. (Simulator removes SJ44 failures via ET-1 and ET-3 when RHR pumps stop.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">CHECK ALL AVAILABLE CFCUs running in Low Speed.</td>
<td style="padding:6px;color:#9ca3af;">Determines all CFCUs are running in Low Speed.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.a *</span></td>
<td style="padding:6px;color:#c8cdd5;">SECURE Containment Spray flow path: STOP ALL Containment Spray Pumps. CHECK 21 CS36 AND 22 CS36 CLOSED.</td>
<td style="padding:6px;color:#9ca3af;">Stops 21 CS pump. Determines 21 CS36 and 22 CS36 are shut.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4 (CAS)</td>
<td style="padding:6px;color:#c8cdd5;">CHECK RWST level >1.2 feet.</td>
<td style="padding:6px;color:#9ca3af;">Determines RWST level is >1.2 feet.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;">ATTEMPT to establish RHR Pump suction: CHECK 21 SJ44 AND 22 SJ44 OPEN. CHECK AT LEAST ONE RHR Pump running with suction aligned to Containment Sump.</td>
<td style="padding:6px;color:#9ca3af;">Determines 21 SJ44 AND 22 SJ44 are open. Determines NEITHER RHR Pump is running with suction aligned to Containment Sump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.b RNO 1-2</td>
<td style="padding:6px;color:#c8cdd5;">REMOVE LOCKOUT(s) AND CLOSE affected SJ49(s) RHR DISCH TO COLD LEG. ENSURE 21 RH29 AND 22 RH29 in AUTO.</td>
<td style="padding:6px;color:#9ca3af;">Determines 21 SJ49 and 22 SJ49 previously shut. Determines 21 RH29 and 22 RH29 are in AUTO.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.b RNO 3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">START ONE RHR Pump.</td>
<td style="padding:6px;color:#9ca3af;">Starts 21 OR 22 RHR pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.b RNO 4-5</td>
<td style="padding:6px;color:#c8cdd5;">IF indications of cavitation occur, THEN STOP the running RHR pump AND START the other RHR pump. IF NO RHR Pumps can be run without cavitation, THEN STOP any running RHR Pumps AND GO TO Step 8.</td>
<td style="padding:6px;color:#9ca3af;">Determines cavitation is NOT occurring on the running RHR pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.c-e</td>
<td style="padding:6px;color:#c8cdd5;">CHECK 21 RH29 AND 22 RH29 in AUTO. REMOVE LOCKOUT(s) AND CLOSE affected SJ49(s). CHECK ONLY ONE RHR Pump running with suction from Containment Sump.</td>
<td style="padding:6px;color:#9ca3af;">Determines 21 RH29 and 22 RH29 are in AUTO. Determines BOTH SJ49's are shut. Determines only one RHR pump is running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">6.a</td>
<td style="padding:6px;color:#c8cdd5;">CHECK Charging Pump and SI Pump suction aligned to running RHR pump (2 SJ67 and 2 SJ68 SHUT, 22 SJ45 OPEN, 21 SJ45 OPEN, 21/22 SJ113 OPEN, 2 SJ1 and 2 SJ2 OPEN, 2 SJ30 SHUT).</td>
<td style="padding:6px;color:#9ca3af;">Checks suction lineup as listed; determines NO Charging or SI pumps are running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6.b RNO *</span></td>
<td style="padding:6px;color:#c8cdd5;">START OR STOP, Charging and SI Pumps, as required, to obtain ONLY ONE pump running in recirculation alignment.</td>
<td style="padding:6px;color:#9ca3af;">Starts ONLY ONE Charging or SI pump. (Note: intent of Step 6 is to start only a single pump — preferable to start a Charging pump but SAT performance does not require it; one of the four available charging or SI pumps is acceptable.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">6.c-d</td>
<td style="padding:6px;color:#c8cdd5;">CHECK Charging Pump or SI Pump running in recirculation alignment. GO TO Step 9.</td>
<td style="padding:6px;color:#9ca3af;">Determines Charging or SI pump is running in recirculation alignment. Terminate JPM when operator goes to Step 9.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating action is recognizing that <strong>both RHR pumps are cavitating</strong> (with all downstream ECCS pumps showing the same disturbance) and entering <strong>EOP-APPX-7</strong> from the LOCA-3 Continuous Action Summary — NOT EOP-LOCA-5. APPX-7 is for sump blockage causing pump cavitation; LOCA-5 is for mechanical/electrical loss of recirculation. The pump-stopping order is also pass/fail: per the APPX-7 Caution, downstream Charging/SI pumps must be stopped <strong>before</strong> the RHR pump supplying their suction. Stopping RHR pumps first is failure criteria. After clearing both RHR pumps and re-establishing suction, the crew restarts ONE RHR pump and ONE Charging or SI pump (NOT a two-train alignment) to provide recirculation flow.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOCA-1 (Rev. 30), 2-EOP-LOCA-3 (Rev. 30), 2-EOP-APPX-7 (Rev. 0), OP-AA-101-111-1003 (Rev. 6) | Task: N1150900501 | K/A: G2.4.4 — Ability to recognize abnormal indications for system operating parameters that are entry-level conditions for emergency and abnormal operating procedures | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ECCS]], [[RHR]], [[Containment Spray]], [[CFCUs]]
- Related procedures: [[OP-AA-101-111-1003 — Use of Procedures]]
- Related EOPs: [[EOP-APPX-7 — Containment Sump Blockage]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]]
- Related exam: [[2016 NRC Operating Exam]]
