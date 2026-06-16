---
title: "2012 JPM IP-j — Start and Synchronize an Emergency Diesel Generator"
category: exams
status: draft
aliases:
  - 2012 JPM IP-j
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-j — Start and Synchronize an Emergency Diesel Generator</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 064 A2.09 (3.1/3.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (2A Diesel Generator — Generator Control Panel; 2A DG 4KV cabinet cubicle breaker 2AD1AX6D)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at 100% power, with no equipment OOS. Engineering has requested a loaded run of 2A EDG.<br><br>
<strong>Initiating Cue:</strong><br>
The Unit 2 CRS has directed you to locally start and load 2A D/G IAW S2.OP-SO.DG-0001(Q), Section 5.2 &amp; 5.4. Prerequisites, Precautions and Limitations, and Section 5.1, Diesel Generator Startup Checks have been performed.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Perform S2.OP-SO.DG-0001 Sections 5.2 and 5.4 in correct order and to completion.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps &amp; Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:70px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.1</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY NCO that 2A Diesel Generator is to be locally started.</td>
<td style="padding:6px;color:#9ca3af;">Locates nearest page. Cue: NCO acknowledges.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.2</td>
<td style="padding:6px;color:#c8cdd5;">CHECK voltage permissive indicator light 2DAE4-LT 2, EDG VOLTAGE, on Generator Control Panel is OFF.</td>
<td style="padding:6px;color:#9ca3af;">Points out voltage permissive indicator light 2DAE4-LT 2, EDG VOLTAGE. Cue: Light is off.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.3</td>
<td style="padding:6px;color:#c8cdd5;">CHECK speed permissive indicator light 2DAE4-LT 3, EDG SPEED, on Generator Control Panel is OFF.</td>
<td style="padding:6px;color:#9ca3af;">Points out speed permissive indicator light 2DAE4-LT 3, EDG SPEED. Cue: Light is off.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW in MANUAL (DROOP).</td>
<td style="padding:6px;color:#9ca3af;">Points out 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW, and simulates rotating to DROOP position. Cue: Annunciator 8-9, Generator Loading in Droop Mode annunciates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.5</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 8-9, GENERATOR LOADING IN DROOP MODE, is in alarm.</td>
<td style="padding:6px;color:#9ca3af;">Acknowledges alarm 8-9 and simulates depressing Silence PB. Cue: Alarm 8-9 has silenced.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2A-DF-SS, 2A DG STOP/START SWITCH in START.</td>
<td style="padding:6px;color:#9ca3af;">Points out 2A-DF-SS, 2A DG STOP/START SWITCH, and simulates placing in START. Cue: 2A Diesel is accelerating.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.7 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF Diesel Generator Speed is NOT 900 rpm, THEN SET speed to 900 rpm using the SPEED CONTROL SWITCH (GS).</td>
<td style="padding:6px;color:#9ca3af;">Cue when Speed indicator is checked: Speed is 880 rpm. Points out SPEED CONTROL SWITCH (GS) and simulates turning in RAISE direction. Cue: 2A Diesel Speed is 900 rpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.8</td>
<td style="padding:6px;color:#c8cdd5;">IF 2AD1AX6D, 2A Diesel Generator 125VDC breaker is closed, THEN CHECK voltage permissive light 2DAE4-LT 2 EDG VOLTAGE is ON and speed permissive light 2DAE4-LT 3 EDG SPEED is ON.</td>
<td style="padding:6px;color:#9ca3af;">Points out 2DAE4-LT 2 and 2DAE4-LT 3. Cue: Both permissive lights are on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.9</td>
<td style="padding:6px;color:#c8cdd5;">IF Field Ground Relay 64/G white indicating light is OFF AND C-6, GENERATOR FIELD GROUND, is clear, THEN RESET 64/G relay and ENSURE 64/G white light is illuminated.</td>
<td style="padding:6px;color:#9ca3af;">Points out Field Ground Relay 64/G white indicating light. Cue: 64/G white light is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.10</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A Diesel Generator K1C Field Flashing Relay Supervisory Light is OFF.</td>
<td style="padding:6px;color:#9ca3af;">Points out K1C Field Flashing Relay Supervisory Light. Cue: Light is off.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Diesel Generator Start Readings.</td>
<td style="padding:6px;color:#9ca3af;">Points out gages/switches. Cue: 2VM189 Gen Volts 4160 V (all 3 phases); 2FM186 Gen Freq 60 Hz; 2PL6429 LO Hdr Press 80 psig; 2PL6449 JW Hdr Press 45 psig; 2PL7209 Air Manifold Press 0 psig; 2TA16524 Gen Stator Temp 187°.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.13</td>
<td style="padding:6px;color:#c8cdd5;">IF Diesel Generator is to be parallel loaded, THEN INITIATE Section 5.4, Diesel Generator Parallel Loading.</td>
<td style="padding:6px;color:#9ca3af;">Cue: Diesel will be parallel loaded.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.1</td>
<td style="padding:6px;color:#c8cdd5;">IF Section 5.1 was NOT performed, THEN at 2A DG 4KV cabinet cubicle breaker 2AD1AX6D, PLACE selector switch 2A DG SYNC ENABLE in ENABLE.</td>
<td style="padding:6px;color:#9ca3af;">Verifies Section 5.1 is complete.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.2</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY NCO that 2A EDG is to be synchronized and loaded locally.</td>
<td style="padding:6px;color:#9ca3af;">Cue: NCO acknowledges 2A DG is to be synchronized and loaded locally.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW in MANUAL (DROOP).</td>
<td style="padding:6px;color:#9ca3af;">Verifies 2A-DF-GCP-1 is in MANUAL (DROOP).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ADJUST 2A EDG output voltage, as indicated on VOLTMETER-GEN (2VM189), to 50-100 Volts higher than 2A 4KV Vital Bus voltage as indicated by VOLTMETER-BUS (2VM190), using the VOLTAGE CONTROL SWITCH (VCS).</td>
<td style="padding:6px;color:#9ca3af;">When operator points out 2VM189 and 2VM190, Cue: 2VM189 reads 4150, 2VM190 reads 4150. Points out VOLTAGE CONTROL SWITCH (VCS) and simulates going to RAISE. Cue: 2VM189 reads 4210, 2VM190 reads 4150.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5–5.4.9</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE generator and bus voltage present on all 3 phases (VS-G, VS-B); PLACE VOLTMETER SWITCHES in "1-2"; ENSURE 2DAE4-LT 2 EDG Voltage and 2DAE4-LT 3 EDG Speed indication lights are ON.</td>
<td style="padding:6px;color:#9ca3af;">Points out and rotates VS-G and VS-B; places switches in 1-2; confirms permissive lights ON.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.10.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">SYNCHRONIZE 2A Diesel Generator to 2A 4KV Vital Bus: PLACE 2A-DF-SYNCH, 2A DG SYNC SWITCH (SS) to ON.</td>
<td style="padding:6px;color:#9ca3af;">Points out 2A-DF-SYNCH, 2A DG SYNC SWITCH (SS), and simulates placing in ON position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.10.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">ADJUST Diesel speed using the SPEED CONTROL SWITCH (GS) such that Synchroscope pointer rotates slowly in the FAST (clockwise) direction.</td>
<td style="padding:6px;color:#9ca3af;">When operator points out synchroscope, Cue: Scope is going in the slow direction. Points out SPEED CONTROL SWITCH (GS) and simulates going to RAISE. Cue: Synchroscope pointer rotating slowly in the FAST direction.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.C</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE the four SYNC CHECK RELAY 25 UPPER AND LOWER VOLTAGE LIMIT LEDs are ON ("Upper Voltage Limit" L OK / B OK; "Lower Voltage Limit" L OK / B OK).</td>
<td style="padding:6px;color:#9ca3af;">Points out the four LEDs. Cue as each LED is located: Light is on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.D</td>
<td style="padding:6px;color:#c8cdd5;">IF the SYNC CHK RELAY 25 ΔF OK LED is OFF, THEN ADJUST 2A Diesel Generator speed using the SPEED CONTROL SWITCH (GS) until the ΔF OK LED is ON.</td>
<td style="padding:6px;color:#9ca3af;">Points out SYNC CHK RELAY 25 ΔF OK LED. Cue: Light is on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.E</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE DG SYNC PERMISSIVE green indicating light is ON each time the synchroscope is near 12 o'clock (+/- ~3 minutes), AND is OFF in any other position.</td>
<td style="padding:6px;color:#9ca3af;">Cue: DG SYNC PERMISSIVE green light is ON near 12 o'clock and OFF in any other position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.10.F *</span></td>
<td style="padding:6px;color:#c8cdd5;">COORDINATE the following when the synchroscope is at "12 o'clock" (+zero, -2 minutes): 1. <span class="hi-exam">CLOSE 2A-DF-GCP-3 GENERATOR CIRCUIT BREAKER SWITCH (BCS).</span> 2. <span class="hi-exam">RAISE 2A Diesel Generator load to ≥ 500KW using SPEED CONTROL SWITCH (GS) to prevent tripping the Diesel Generator Breaker on reverse power.</span></td>
<td style="padding:6px;color:#9ca3af;">Points out 2A-DF-GCP-3 BCS and simulates taking to CLOSE when the synch scope is at 12 o'clock. Cue: 2A Diesel Generator Breaker has closed. Points out SPEED CONTROL SWITCH (GS), simulates going to RAISE while observing KW meter. <span class="hi-exam">Cue: Load is 500 KW.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.G</td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2A-DF-SYNCH, 2A DG SYNCH SWITCH (SS) to OFF.</td>
<td style="padding:6px;color:#9ca3af;">Points out 2A-DF-SYNCH (SS) and simulates placing in OFF position. Cue: JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is <strong>Step 5.4.10.F</strong> — closing the generator output breaker and immediately raising load. The applicant must close <strong>2A-DF-GCP-3 (BCS)</strong> only when the synchroscope is at <strong>12 o'clock (+zero, -2 minutes)</strong> — i.e., generator slightly fast and in phase — then promptly <strong>raise load to ≥ 500 KW with the SPEED CONTROL SWITCH (GS) to prevent tripping the Diesel Generator Breaker on reverse power</strong>. Closing the breaker out of phase, or failing to pick up load fast enough after closing, motors the generator and trips it on reverse power. Voltage must first be matched 50-100 V above bus (Step 5.4.4) and incoming speed set slightly fast (Step 5.4.10.B) so the synchroscope rotates slowly in the FAST direction. On a paralleled EDG, real load (KW) is controlled with the SPEED CONTROL SWITCH (GS) and voltage/KVAR with the VOLTAGE CONTROL SWITCH (VCS).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.DG-0001(Q) (Rev 37), Diesel Generator Operation, Sections 5.2 &amp; 5.4 | Task: 1130010501 | K/A: 064 A2.09 — Emergency Diesel Generator System: Ability to (a) predict the impacts of EDG malfunctions/operations and (b) use procedures to correct, control, or mitigate them — Synchronization of EDG with grid (3.1/3.3) | Source: New | <a href="/salem-study-system/exam-pdfs/2012-jpm-ip-j.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]]
- Related procedures: [[S2.OP-SO.DG-0001 — Diesel Generator Operation]]
- Related exam: [[2012 NRC Operating Exam]]
