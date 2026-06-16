---
title: "2015 JPM Sim-g — Take Corrective Action For A Component Cooling Water System Abnormality"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — Take Corrective Action For A Component Cooling Water System Abnormality</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 008 A4.01 (3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 6 minutes<br><br>
<strong>Initial Conditions:</strong><br>
100% power, EOL.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Respond to all alarms and indications.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Trip the Reactor.<br>2. Trip 21-24 RCPs.<br>3. Isolate Letdown and swap Charging Pump suction to the RWST.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<div style="margin-bottom:10px;color:#9ca3af;font-size:11px;">The JPM may be worked through either S2.OP-AB.RCP-0001 (Reactor Coolant Pump Abnormality) or S2.OP-AB.CC-0001 (Component Cooling Abnormality); the end result is the same and the "Stopping Reactor Coolant Pumps" attachment is identical in each. The diagnostic ARP actions for OHA Window D (D20-D23) and Control Console 2CC1 are reached first.</div>

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP D20-23</td>
<td style="padding:6px;color:#c8cdd5;">Recognizes 22 CCW pump trip — OHAs D20-D23 21/22/23/24 RCP BRG CLG WTR FLO LO, RCP Thermal Barrier Return Lo Flow, 21 and 22 CCW Header Lo Pressure Console alarms.</td>
<td style="padding:6px;color:#9ca3af;">Refers to S2.OP-AR.ZZ-0004, Overhead Window D. Determines the standby CCW pump has failed to auto start; attempts to manually start it and reports it will not start.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP D20-23 3.6</td>
<td style="padding:6px;color:#c8cdd5;">IF CC Console alarms header pressure low, OR Surge Tank Level High Low, THEN INITIATE S2.OP-AB.CC-0001, Component Cooling Abnormality.</td>
<td style="padding:6px;color:#9ca3af;">Initiates S2.OP-AB.CC-0001 based on CC header Pressure low console alarms (or enters S2.OP-AB.RCP-0001 — either path is acceptable).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">Att.2 entry</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF AT ANY TIME any of the validated RCP conditions exist, THEN GO TO Attachment 2, Stopping Reactor Coolant Pumps. (21 CCW pump trips 1 minute 30 seconds after 22 CCW pump trips.)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines last remaining Component Cooling Water pump (21) has tripped — Component Cooling Water flow has been lost to ALL RCPs — and goes to Attachment 2, Stopping Reactor Coolant Pumps.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 1.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF Reactor Trip Breakers are CLOSED, THEN TRIP the Reactor.</td>
<td style="padding:6px;color:#9ca3af;">Trips the Reactor using either trip handle.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 1.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP affected RCP(s).</td>
<td style="padding:6px;color:#9ca3af;">Depresses stop PBs for 21-24 RCPs.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att.2 1.4</td>
<td style="padding:6px;color:#c8cdd5;">IF RCP shutdown was due to a TOTAL LOSS of Component Cooling Water (including loss of CCW to the CVCS Letdown Heat Exchanger), THEN simultaneously PERFORM the following — ISOLATE RCS letdown AND SWAP charging pump suction to the RWST:</td>
<td style="padding:6px;color:#9ca3af;">Determines RCP shutdown was due to a TOTAL LOSS of Component Cooling Water and simultaneously performs the following.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 1.4a *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2CV2 AND 2CV277 to isolate letdown.</td>
<td style="padding:6px;color:#9ca3af;">Depresses the close PB for 2CV2 AND 2CV277 to isolate letdown.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 1.4b *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2SJ1 AND 2SJ2 to swap charging pump suction to the RWST.</td>
<td style="padding:6px;color:#9ca3af;">Depresses the open PB for 2SJ1 AND 2SJ2 to swap charging pump suction to the RWST.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">Att.2 1.4c *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE 2CV40 AND 2CV41 to isolate the VCT.</td>
<td style="padding:6px;color:#9ca3af;">Depresses the close PB for 2CV40 AND 2CV41 to isolate the VCT.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">Att.2 GO TO</td>
<td style="padding:6px;color:#c8cdd5;">GO TO 2-EOP-TRIP-1, Reactor Trip or Safety Injection AND RETURN to this attachment, at the SM/CRS discretion.</td>
<td style="padding:6px;color:#9ca3af;">Goes to 2-EOP-TRIP-1, Reactor Trip or Safety Injection. Terminate JPM when TRIP-1 immediate actions begin to be performed.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. It begins as a single CCW pump trip (22 CCW pump) where the <strong>standby (23) CCW pump fails to auto-start and cannot be manually started</strong>, so the applicant works the alarm response / abnormal procedure with one CCW pump (21) still running and RCP bearing temperatures rising but stabilizing (~157°F, below the 175°F GO TO criterion). The discriminating escalation: <strong>the running 21 CCW pump trips 1 minute 30 seconds after the 22 CCW pump trip</strong>, producing a <strong>TOTAL LOSS of Component Cooling Water to all RCPs</strong>. The applicant must recognize the total loss and immediately go to Attachment 2, <strong>Stopping Reactor Coolant Pumps</strong>: trip the reactor, stop 21-24 RCPs, and — because letdown CCW is also lost — <strong>isolate letdown (close 2CV2/2CV277), swap charging suction to the RWST (open 2SJ1/2SJ2), and isolate the VCT (close 2CV40/2CV41)</strong>, then GO TO 2-EOP-TRIP-1. Failing to recognize the total CCW loss, or stopping RCPs without isolating letdown / swapping charging suction to the RWST, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.CC-0001 (Rev 14); S2.OP-AB.RCP-0001 (Rev 21); S2.OP-AR.ZZ-0004 (Rev 27); S2.OP-AR.ZZ-0011 (Rev 60) | Task: N1140080401 | K/A: 008 A4.01 — Ability to manually operate and/or monitor the Component Cooling Water system in the control room | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CCW]], [[RCPs]], [[CVCS]]
- Related procedures: [[AB.CC-0001 — Loss of Component Cooling Water]], [[AB.RCP-0001 — RCP Abnormality]], [[S2.OP-AR.ZZ-0004 — Alarm Response Procedure]], [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2015 NRC Operating Exam]]
