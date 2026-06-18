---
title: "2015 JPM Sim-b — Respond to Loss of VCT Level Instrument / Manual Makeup to VCT"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-b
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-b — Respond to Loss of VCT Level Instrument / Manual Makeup to VCT</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 022 AA1.01 (RO 3.8 / SRO 3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
100% power, MOL. RCS boron concentration is 900 ppm.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Reactor Operator. Respond to all indications and alarms.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Initiate manual makeup to VCT, and terminate makeup when directed.</span>
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
<td style="padding:6px;color:#c8cdd5;">Entry</td>
<td style="padding:6px;color:#c8cdd5;">Announces Control Console alarm VCT Level Hi-Lo as unexpected, identifies LT-112 has failed high, and refers to S2.OP-AR.ZZ-0012 ARP for console alarm.</td>
<td style="padding:6px;color:#9ca3af;">Refers to S2.OP-AR.ZZ-0012. (Operator may enter S2.OP-AB.CVC-0001, Loss of Charging, directly.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 2.1 Hi</td>
<td style="padding:6px;color:#c8cdd5;">If 2CV35 is in auto, high level removes normal level control AND shifts 2CV35 fully to HUT.</td>
<td style="padding:6px;color:#9ca3af;">Notes 2CV35 3-way valve automatically shifted to FLOW TO HUT position in response to the high level.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.1</td>
<td style="padding:6px;color:#c8cdd5;">MONITOR VCT level on LI-112.</td>
<td style="padding:6px;color:#9ca3af;">Monitors VCT level on LI-112.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">ARP 3.3 / 3.4</td>
<td style="padding:6px;color:#c8cdd5;">IF level is high, THEN ENSURE 2CV35 directed to HUT. IF failure of a VCT level channel has occurred, THEN INITIATE S2.OP-AB.CVC-0001, Loss of Charging.</td>
<td style="padding:6px;color:#9ca3af;">Determines actual level is not high (channel failed high but level is not high). Determines failure of VCT level channel LT-112 has occurred, and initiates S2.OP-AB.CVC-0001, Loss of Charging.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CVC 3.1 / 3.2 / 3.16 / 3.54</td>
<td style="padding:6px;color:#c8cdd5;">Initiate Attachment 1 Continuous Action Summary; verify a Charging Pump running; check for charging pump cavitation; check for failed Pressurizer level channel.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Attachment 1; determines 23 Charging Pump is running (→ 3.16); determines no charging pump cavitation (→ 3.54); determines no PZR level channel failed (→ 3.62/3.63).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">AB.CVC 3.63</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Has a VCT level instrument (2LT-112 or 2LT-114) failed high (refer to Exhibit 2)?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Determines VCT level instrument 2LT-112 has failed high.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">AB.CVC 3.64 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">TAKE MANUAL control of 2CV35, VCT 3 WAY INLET V, and position it to the VCT.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">If not previously performed, takes manual control of 2CV35, VCT 3 WAY INLET V, and positions it to the VCT.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">AB.CVC 3.65 / 3.66</td>
<td style="padding:6px;color:#c8cdd5;">IF letdown is isolated, THEN RESTORE Letdown. IF required to restore VCT level, THEN INITIATE manual makeup to VCT IAW S2.OP-SO.CVC-0006(Q), Boron Concentration Control.</td>
<td style="padding:6px;color:#9ca3af;">Determines letdown is not isolated. Checks VCT level. CRS directs raising VCT level by 10% from current level. Identifies Section 5.2 Manual Makeup Mode of S2.OP-SO.CVC-0006 will be used.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.CVC-6 5.2.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">DETERMINE Boric Acid Flow Setpoint from S2.RE-RA.ZZ-0012, Figure(s) 100A, 100C, and 105 as applicable, OR as calculated and verified by the CRS/STA, AND RECORD Boric Acid Flow Setpoint.</td>
<td style="padding:6px;color:#9ca3af;">Uses Figure 100A (62 gpm Primary Water Flow, BAST normal ppm). Setpoint is slightly less than 10 gpm; allowable 9-11 gpm. (100C is for 9000 ppm; Figure 105 correction for RCS &lt;547°F is N/A at 100% power.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">IF required, THEN RESET COUNT A on the Makeup Flow Registers to zero IAW Exhibit 1.</td>
<td style="padding:6px;color:#9ca3af;">Resets COUNT A for Boric Acid and Primary Water flow IAW Exhibit 1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS Makeup Control Mode Select STOP pushbutton.</td>
<td style="padding:6px;color:#9ca3af;">Presses Makeup Control Mode Select STOP pushbutton.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2CV179, PRIMARY WATER FLOW, in MANUAL, AND CLOSE 2CV179.</td>
<td style="padding:6px;color:#9ca3af;">Places 2CV179 in MANUAL; closes or verifies closed 2CV179.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2CV172, BORIC ACID FLOW, in MANUAL, AND CLOSE 2CV172.</td>
<td style="padding:6px;color:#9ca3af;">Places 2CV172 in MANUAL; closes or verifies closed 2CV172.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ALIGN outlet of Boric Acid Blender: A. OPEN 2CV185, MAKEUP FLOWPATH; OR B. OPEN 2CV181, MAKEUP FLOWPATH.</td>
<td style="padding:6px;color:#9ca3af;">For one selected flowpath, depresses OPEN until OPEN bezel illuminated. (2CV185 charging-pump-suction path preferred but not required; opening either is acceptable.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PERFORM as required: START a Primary Water Pump; PLACE a Boric Acid Pump in MANUAL/FAST START.</td>
<td style="padding:6px;color:#9ca3af;">Depresses START PB on a PW Pump; for the selected Boric Acid Pump, depresses MANUAL and FAST START pushbuttons.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.8 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ADJUST 2CV172 flow (FI110A) to the value recorded in step 5.2.1.</td>
<td style="padding:6px;color:#9ca3af;">Using INC/DEC pushbuttons, adjusts Boric Acid Flow on FI110A to the recorded value.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.10 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Manually ADJUST 2CV179 Setpoint to 62 gpm (or as calculated) to obtain required flow on FI111A.</td>
<td style="padding:6px;color:#9ca3af;">Using 2CV179 INC/DEC PBs, adjusts PW Flow to 62 GPM +/- 2 GPM on FI111A (61-63 gpm acceptable).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE required Boric Acid AND Primary Water Flow are being maintained OR ADJUST 2CV172 and 2CV179.</td>
<td style="padding:6px;color:#9ca3af;">Monitors and adjusts as required. (Cue: VCT level has risen the required 10% via LT-114 on Plant Computer.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.12 A *</span></td>
<td style="padding:6px;color:#c8cdd5;">When makeup is completed, CLOSE 2CV179, 2CV172, 2CV185, 2CV181.</td>
<td style="padding:6px;color:#9ca3af;">Depresses CLOSE pushbuttons for 2CV179 and 2CV172, and whichever of 2CV185/2CV181 was opened in 5.2.6.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.12 B–D</td>
<td style="padding:6px;color:#c8cdd5;">STOP Primary Water Pump; PLACE Boric Acid Pump in SLOW Speed; PLACE system in Automatic Makeup Mode IAW Section 5.1.</td>
<td style="padding:6px;color:#9ca3af;">Stops the PW Pump; places the selected Boric Acid Pump in SLOW. JPM terminates once the selected Boric Acid Pump is in SLOW speed.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. VCT level transmitter <strong>2LT-112 fails high</strong>, which automatically shifts the 2CV35 3-way valve to FLOW TO HUT (diverting letdown) even though <strong>actual VCT level is not high</strong>. The discriminating diagnosis is recognizing that a <strong>level channel has failed</strong> (not an actual high level) — AB.CVC step 3.63 confirms 2LT-112 failed high — and then taking <strong>manual control of 2CV35 and positioning it to the VCT</strong> (critical step 3.64) to restore inventory to the VCT instead of the HUT. From there the applicant must initiate a <strong>manual makeup</strong> via S2.OP-SO.CVC-0006 Section 5.2 (Manual Makeup Mode): STOP the makeup mode, place 2CV179/2CV172 in manual and closed, open a makeup flowpath (2CV185/2CV181), start a Primary Water Pump and a Boric Acid Pump (FAST), and adjust to the boric-acid setpoint and 62 gpm PW flow. Treating the alarm as a real high level and leaving 2CV35 to HUT — or failing to take manual makeup — fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-AR.ZZ-0012 (Rev 37), S2.OP-AB.CVC-0001 (Rev 9), S2.OP-SO.CVC-0006 (Rev 23), S2.RE-RA.ZZ-0012 (Rev 207) | Task: 0040130101 | K/A: APE 022 AA1.01 — Loss of RCS Inventory: ability to operate/monitor VCT level and makeup | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-b.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[S2.OP-AR.ZZ-0012 — Console Alarm Response]], [[S2.OP-SO.CVC-0006 — Boron Concentration Control]]
- Related exam: [[2015 NRC Operating Exam]]
