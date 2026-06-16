---
title: "2012 JPM Sim-h — Authorized Release of Radioactive Liquid Waste (2WL51 Fails to Auto-Shut)"
category: exams
status: draft
aliases:
  - 2012 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — Authorized Release of Radioactive Liquid Waste (2WL51 Fails to Auto-Shut)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 068 A4.03 (3.9/3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at 100% power.<br>
An authorized radioactive liquid release from 21 CVCS Monitor Tank through 21 CCHX to Unit 1 Circ Water is being aligned in the field. The RWO performing the release is currently beginning Step 5.5, Release of 21 CVCS MT via SW System to CW System.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Unit 2 Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Operator opens 2WL51 to commence the Liquid Release.<br>2. Operator shuts 2WL51 after receipt of Hi Radiation Alarm on 2R18.</span>
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
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.5.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Direct Unit 2 NCO to OPEN 2WL51, LIQUID RELEASE STOP VALVE. (Cue: This is the RWO. Open 2WL51, Liquid Release Stop Valve IAW step 5.5.2 of S2.OP-SO.WL-0001.)</td>
<td style="padding:6px;color:#9ca3af;">Depresses open pushbutton for 2WL51 LIQUID RELEASE STOP VALVE and verifies red open light illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.5.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">On receipt of Hi Radiation on 2R18 (OHA A-6, RMS HI RAD OR TRBL / CRT point 725), shut 2WL51 after observing it remained open (failed to auto-shut).</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Announces OHA A-6 RMS HI RAD OR TRBL as unexpected; refers to S2.OP-AR.ZZ-0001 (Window A) / CRT point 725 (2R18 in alarm); after observing 2WL51 open, shuts 2WL51 using Step 5.5.9 of S2.OP-SO.WL-0001 or S2.OP-AR.ZZ-0001 for guidance.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.18</td>
<td style="padding:6px;color:#c8cdd5;">IF 2R18 indicates Hi Radiation or trouble, THEN GO TO S2.OP-AB.RAD-0001, Abnormal Radiation.</td>
<td style="padding:6px;color:#9ca3af;">Checks CRT and reports CRT point 725, RMS Hi Rad or Trbl-Liq Waste Disposal CH 2R18 in alarm. Enters S2.OP-AB.RAD-0001, Abnormal Radiation.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.RAD 3.1</td>
<td style="padding:6px;color:#c8cdd5;">DETERMINE affected Radiation Monitor.</td>
<td style="padding:6px;color:#9ca3af;">Verifies 2R18 is the affected rad monitor.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.RAD 3.2</td>
<td style="padding:6px;color:#c8cdd5;">Is the alarm, warning, or rising indication valid? (EVALUATE chemistry sampling, rising activity on related monitors, maintenance activities, resin transfers, monitor fault, release from Salem or Hope Creek.)</td>
<td style="padding:6px;color:#9ca3af;">Determines alarm must be considered valid since a radioactive liquid release has just commenced, 2R18 is sampling that release, and the monitor was proven operable by the Attachment 2 Section 2.3 source check on 2R18.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.RAD 3.6</td>
<td style="padding:6px;color:#c8cdd5;">Announce on Plant PA: affected Radiation Monitor number and name; location of monitor area with elevated indication.</td>
<td style="padding:6px;color:#9ca3af;">Announces "Radiation Monitor 2R18 Liquid Waste Disposal is in alarm, Auxiliary Building 84 elevation."</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.RAD 3.7 / 3.8 / 3.9</td>
<td style="padding:6px;color:#c8cdd5;">IF a release to the environment is in progress, DIRECT SRPT for release rate (SSCL Page 2); NOTIFY SM/CRS to refer to Event Classification Guide, ODCM, and Tech Specs; INITIATE applicable attachment.</td>
<td style="padding:6px;color:#9ca3af;">Directs SRPT (if 2WL51 not yet shut); directs SM/CRS to refer to ECG, ODCM, and TS; initiates Attachment 1 of S2.OP-AB.RAD-0001.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.RAD Att.1 5.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF 2R18, Liquid Waste Disposal, is the affected monitor, THEN ENSURE 2WL51, TO CIRC WTR DISCHARGE, is CLOSED to stop all Liquid Waste releases.</td>
<td style="padding:6px;color:#9ca3af;">Shuts (or checks shut) 2WL51, TO CIRC WTR DISCHARGE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.RAD Att.1 5.2</td>
<td style="padding:6px;color:#c8cdd5;">TERMINATE Liquid Waste Release procedure in effect.</td>
<td style="padding:6px;color:#9ca3af;">Contacts RWO and directs them to terminate the release procedure in effect. (JPM terminates once 2WL51 is shut, its status communicated to the RWO, and procedure direction for shutting 2WL51 identified.)</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The operator first commences the authorized liquid release by <strong>opening 2WL51, LIQUID RELEASE STOP VALVE</strong> (step 5.5.2). The alternate-path trigger is that <strong>2R18 (Liquid Waste Disposal process monitor) reads high radiation (~1×10⁵ cps) and 2WL51 fails to automatically shut</strong> on the Hi Rad signal. The discriminating action is recognizing the unexpected OHA A-6 RMS HI RAD OR TRBL / CRT point 725 alarm, observing that <strong>2WL51 remained open</strong>, and <strong>manually shutting 2WL51</strong> to stop the release (per S2.OP-SO.WL-0001 step 5.5.9 and confirmed in AB.RAD-0001 Attachment 1 step 5.1). The operator must justify the shut action by procedure, communicate 2WL51 status to the RWO, and direct termination of the release. Failing to recognize the failed auto-shut and manually close 2WL51 — allowing the high-activity release to continue to Circ Water — fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.WL-0001 (Rev 25) / S2.OP-AB.RAD-0001 (Rev 29) / S2.OP-AR.ZZ-0001 | Task: N0685140104 | K/A: 068 A4.03 — Liquid Radwaste System: Ability to manually operate and/or monitor in the control room (3.9/3.8) | Source: Not specified in source | <a href="/salem-study-system/exam-pdfs/2012-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Waste Liquid]], [[Radiation Monitoring]]
- Related procedures: [[S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste]], [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A]]
- Related exam: [[2012 NRC Operating Exam]]
