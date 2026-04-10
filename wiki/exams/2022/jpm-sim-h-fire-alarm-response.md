---
title: "2022 JPM Sim-h — Respond to Fire Alarm"
category: exams
status: draft
aliases:
  - 2022 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — Respond to Fire Alarm</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 086 A4.02 (3.5/3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- 100% power.<br>
- All systems are in Automatic and normal alignment.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- Respond to all alarms and indications.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Upon fire alarm in control room, the operator makes page announcement for fire location, places Control Room Ventilation in FIRE INSIDE MODE, places the 2PR1 and 2PR2 in Manual and Closed, Closes 2PR6 and 2PR7, and dispatches operator to place the PZR PORV valves in EMERG CLOSE.</span>
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
<td style="padding:6px;color:#c8cdd5;">Fire alarm actuates: OHA A-7 FIRE PROT TRBL, A-8 FIRE PROT CO2/HALON DISCH, coded fire alarm #91 on 2RP5</td>
<td style="padding:6px;color:#9ca3af;">Audible coded fire alarm heard in control room (stops after ~30 seconds). Operator responds to 2RP5 coded alarm to identify fire location.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Scan 2RP5 to determine Fire Zone, Area, and Elevation</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Identifies fire alarm on 2RP5 is for Relay Room, 100 ft. elevation (code 91 — Aux. Bldg., Relay & Battery Rooms).</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.3</td>
<td style="padding:6px;color:#c8cdd5;">Notify Emergency Services, dispatch Fire Brigade Liaison, notify RP and SM</td>
<td style="padding:6px;color:#9ca3af;">All notifications made. Fire Brigade Liaison dispatched to scene.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3.4</td>
<td style="padding:6px;color:#c8cdd5;">If alarm is valid, go to S2.OP-AB.FIRE-0001</td>
<td style="padding:6px;color:#9ca3af;">Goes to S2.OP-AB.FIRE-0001. Records fire information: Unit 2, Auxiliary Bldg., 100 ft. elevation, Relay Room, Zone 91, Fire Suppression activated: YES.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB 3.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Make station page announcement for fire location</td>
<td style="padding:6px;color:#9ca3af;">Completes page announcement: "Attention all personnel — a fire is reported in Unit 2 Relay Room 100 ft. elevation. All personnel please evacuate the area."</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB 3.8</td>
<td style="padding:6px;color:#c8cdd5;">Is the fire in an area serviced by CAACS or Chiller Room</td>
<td style="padding:6px;color:#9ca3af;">YES — the Relay Room is in the area serviced by CAACS.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB 3.9 *</span></td>
<td style="padding:6px;color:#c8cdd5;">At 2RP2, select FIRE INSIDE CONTROL AREA</td>
<td style="padding:6px;color:#9ca3af;">At 2RP2 panel, depresses the pushbutton for FIRE INSIDE CONTROL AREA.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB 3.10 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Direct Unit 1 NCO to select FIRE INSIDE CONTROL AREA</td>
<td style="padding:6px;color:#9ca3af;">Directs Unit 1 NCO to select FIRE INSIDE CONTROL AREA.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB 3.19.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">Select MANUAL and CLOSE on PORVs 2PR1 and 2PR2</td>
<td style="padding:6px;color:#9ca3af;">Depresses MANUAL pushbutton for 2PR1 and 2PR2 on 2CC2 console. (Note: 2PR1 and 2PR2 are normally closed during power operation.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB 3.19.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE PORV Block Valves 2PR6 and 2PR7</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE pushbutton for 2PR6 and 2PR7 (STOP VALVES) on 2CC2 console.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB 3.20 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Dispatch operator to align PORV block valve circuits to EMERG CLOSE per Attachment 15</td>
<td style="padding:6px;color:#9ca3af;">Dispatches operator to perform step 3.20.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 3.1 (from the ARP) is the discriminating step. The applicant must correctly identify the fire location from the 2RP5 coded fire alarm (code 91 = Aux. Bldg., Relay & Battery Rooms, 100 ft. elevation). This identification drives the entire procedure path — because the fire is in the Relay Room (an area serviced by CAACS), the operator must place ventilation in FIRE INSIDE mode and isolate the PORVs (since the Relay Room contains PORV control circuitry). If the fire location is incorrectly identified, the wrong fire response actions will be performed.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AB.FIRE-0001 (Rev 12), S2.OP-AR.ZZ-0001 (Rev 59) | Task: N0220080101 | K/A: 086 A4.02 — Ability to manually operate and/or monitor in the control room: Fire detection panels (3.5/3.5) | Safety Fn: 8 | Source: New | <a href="/salem-study-system/exam-pdfs/2022-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related procedures: [[AB.FIRE-0001 — Control Room Fire Response]], [[S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A]]
- Related systems: [[Fire Protection]], [[Pressurizer Level & Press Control]], [[CAV]]
- Related exam: [[2022 NRC Operating Exam]]
