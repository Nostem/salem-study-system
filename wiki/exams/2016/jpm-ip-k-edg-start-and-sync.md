---
title: "2016 JPM IP-k — Start and Synchronize an Emergency Diesel Generator"
category: exams
status: draft
aliases:
  - 2016 JPM IP-k
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-k — Start and Synchronize an Emergency Diesel Generator</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 064 A2.09 (RO 0 / SRO 0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant (2A EDG Generator Control Panel)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 20 minutes<br><br>
<strong>Initial Conditions:</strong><br>
Unit 2 is operating at 100% power, with no equipment OOS. Engineering has requested a loaded run of 2A EDG.<br><br>
<strong>Initiating Cue:</strong><br>
The Unit 2 CRS has directed you to locally start and parallel load 2A D/G IAW S2.OP-SO.DG-0001(Q), Section 5.2 &amp; 5.4.<br>
Prerequisites, Precautions and Limitations, and Section 5.1, Diesel Generator Startup Checks have been performed.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Perform S2.OP-SO.DG-0001 Sections 5.2 and 5.4 in correct order and to completion.</span>
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
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">IF 2A 4KV Vital Bus is currently energized (Diesel Generator is to be parallel loaded), THEN: A. PLACE 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW in MANUAL (DROOP). B. ENSURE B-9, GENERATOR LOADING IN DROOP MODE, is in alarm.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Points out 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW, and simulates rotating to DROOP position. Cue: Annunciator B-9, Generator loading in Droop Mode annunciates.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.5 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2A-DF-SS, 2A DG STOP/START SWITCH in START.</td>
<td style="padding:6px;color:#9ca3af;">Points out 2A-DF-SS, 2A DG STOP/START SWITCH, and simulates placing in START. Cue: 2A Diesel is accelerating.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.2.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF Diesel Generator Speed is NOT 900 rpm, THEN SET speed to 900 rpm using the SPEED CONTROL SWITCH (GS).</td>
<td style="padding:6px;color:#9ca3af;">Cue when Speed indicator is checked: Speed is 880 rpm. Points out SPEED CONTROL SWITCH (GS) and simulates turning in RAISE direction. Cue: 2A Diesel Speed is 900 rpm.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.7</td>
<td style="padding:6px;color:#c8cdd5;">IF 2AD1AX6D, 2A Diesel Generator 125VDC breaker is closed, THEN: CHECK voltage permissive 2DAE4-LT2 is ON; CHECK speed permissive 2DAE4-LT3 is ON.</td>
<td style="padding:6px;color:#9ca3af;">Points out both lights. Cues: 2DAE4-LT 2 EDG VOLTAGE light is on; 2DAE4-LT 3 EDG SPEED light is on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.8</td>
<td style="padding:6px;color:#c8cdd5;">IF Field Ground Relay 64/G white indicating light is OFF AND C-6, GENERATOR FIELD GROUND, is clear, THEN: A. RESET 64/G relay; B. ENSURE 64/G white indicating light is illuminated.</td>
<td style="padding:6px;color:#9ca3af;">Points out 64/G relay light. Cue: Field Ground Relay 64/G white indicating light is illuminated.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.9</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A Diesel Generator K1C Field Flashing Relay Supervisory Light is OFF.</td>
<td style="padding:6px;color:#9ca3af;">Cue: K1C Field Flashing Relay Supervisory Light is off.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.10</td>
<td style="padding:6px;color:#c8cdd5;">RECORD Diesel Generator Start Readings: 2VM189 Gen Volts; 2FM186 Gen Frequency; 2PL6429 LO Hdr Press; 2PL6449 JW Hdr Press; 2PL7209 Air Manifold Press; 2TA16524 Gen Stator Temp.</td>
<td style="padding:6px;color:#9ca3af;">Cues — 2VM189: 4160 V on all 3 phases; 2FM186: 60 Hz; 2PL6429: 80 psig; 2PL6449: 45 psig; 2PL7209: 0 psig; 2TA16524: 187 °F.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.11</td>
<td style="padding:6px;color:#c8cdd5;">IF 2A Diesel Generator is to be operated unloaded for an extended period of time (&gt;30 minutes), THEN INITIATE Section 5.7, Diesel Generator Running Checks.</td>
<td style="padding:6px;color:#9ca3af;">Determines from initiating cue that 2A EDG is to be parallel loaded (step does not apply).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.2.12</td>
<td style="padding:6px;color:#c8cdd5;">IF Diesel Generator is to be parallel loaded, THEN INITIATE Section 5.4, Diesel Generator Parallel Loading.</td>
<td style="padding:6px;color:#9ca3af;">Initiates Section 5.4, Diesel Generator Parallel Loading.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.1</td>
<td style="padding:6px;color:#c8cdd5;">IF Section 5.1 Diesel Generator Startup Checks was NOT performed, THEN at 2A DG 4KV cabinet cubicle breaker 2AD1AX6D, PLACE selector switch 2A DG SYNC ENABLE in ENABLE.</td>
<td style="padding:6px;color:#9ca3af;">Verifies Section 5.1 is complete (step does not apply).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.2</td>
<td style="padding:6px;color:#c8cdd5;">NOTIFY NCO that 2A EDG is to be synchronized and loaded locally.</td>
<td style="padding:6px;color:#9ca3af;">Cue: NCO acknowledges 2A DG is to be synchronized and loaded locally.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW, in MANUAL (DROOP).</td>
<td style="padding:6px;color:#9ca3af;">Verifies 2A-DF-GCP-1, 2A DIESEL GEN LOADING SW, is in MANUAL (DROOP).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">ADJUST 2A EDG output voltage, as indicated on VOLTMETER-GEN (2VM189) to 50–100 Volts higher than that of 2A 4KV Vital Bus voltage, as indicated by VOLTMETER-BUS (2VM190), using the VOLTAGE CONTROL SWITCH (VCS).</td>
<td style="padding:6px;color:#9ca3af;">Cue: 2VM189 reads 4150, 2VM190 reads 4150. Points out VOLTAGE CONTROL SWITCH (VCS) and simulates going to RAISE. Cue: 2VM189 reads 4210, 2VM190 reads 4150.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE generator terminal voltage is present on all 3 phases by rotating VOLTMETER SWITCH - GEN (VS-G) through each position AND OBSERVING voltmeter 2VM189.</td>
<td style="padding:6px;color:#9ca3af;">Simulates rotating VS-G. Cue: Voltage is present on all three phases.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.6</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2A 4KV Vital Bus voltage is present on all 3 phases by rotating VOLTMETER SWITCH - BUS (VS-B) through each position AND OBSERVING voltmeter 2VM190.</td>
<td style="padding:6px;color:#9ca3af;">Simulates rotating VS-B. Cue: Voltage is present on all three phases.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.7</td>
<td style="padding:6px;color:#c8cdd5;">PLACE the following switches in "1-2": VOLTMETER SWITCH - GEN (VS-G); VOLTMETER SWITCH - BUS (VS-B).</td>
<td style="padding:6px;color:#9ca3af;">Cue: Switches are in 1-2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.8</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2DAE4-LT 2, EDG Voltage indication light is ON.</td>
<td style="padding:6px;color:#9ca3af;">Cue: 2DAE4-LT 2, EDG Voltage indication light is on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.9</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE 2DAE4-LT 3, EDG Speed indication light is ON.</td>
<td style="padding:6px;color:#9ca3af;">Cue: 2DAE4-LT 3, EDG Speed indication light is on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.10.A *</span></td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2A-DF-SYNCH, 2A DG SYNC SWITCH (SS) to ON.</td>
<td style="padding:6px;color:#9ca3af;">Points out 2A-DF-SYNCH, 2A DG SYNC SWITCH (SS), and simulates placing in ON position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.10.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">ADJUST Diesel speed using the SPEED CONTROL SWITCH (GS) such that Synchroscope pointer rotates slowly in the FAST (clockwise) direction.</td>
<td style="padding:6px;color:#9ca3af;">Cue: Scope is going in the slow direction. Points out SPEED CONTROL SWITCH (GS) and simulates going to RAISE. Cue: Synchroscope pointer rotating slowly in the FAST direction.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.C</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE the four SYNC CHECK RELAY 25 UPPER AND LOWER VOLTAGE LIMIT LEDS are ON: "Upper Voltage Limit" L OK / B OK; "Lower Voltage Limit" L OK / B OK.</td>
<td style="padding:6px;color:#9ca3af;">Cue (each LED): Light is on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.D</td>
<td style="padding:6px;color:#c8cdd5;">IF the SYNC CHK RELAY 25 ΔF OK LED is OFF, THEN ADJUST 2A Diesel Generator speed using the SPEED CONTROL SWITCH (GS) until the ΔF OK LED is ON.</td>
<td style="padding:6px;color:#9ca3af;">Cue: Light is on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.E</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE DG SYNC PERMISSIVE green indicating light is ON each time the synchroscope indicator is near 12 o'clock position (+/− approximately 3 minutes), AND is OFF in any other position of the synchroscope.</td>
<td style="padding:6px;color:#9ca3af;">Cue: DG SYNC PERMISSIVE green indicating light is ON near 12 o'clock and OFF elsewhere.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.10.F *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">COORDINATE the following when the synchroscope is at "12 o'clock" (+zero, −2 minutes):<br>1. CLOSE 2A-DF-GCP-3 GENERATOR CIRCUIT BREAKER SWITCH (BCS).<br>2. RAISE 2A Diesel Generator load to ≥ 500 KW using SPEED CONTROL SWITCH (GS) to prevent tripping the Diesel Generator Breaker on reverse power.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Points out 2A-DF-GCP-3 GENERATOR CIRCUIT BREAKER SWITCH (BCS) and simulates taking to CLOSE when synchroscope is at 12 o'clock. Cue: 2A Diesel Generator Breaker has closed. Points out SPEED CONTROL SWITCH (GS), simulates going to RAISE while observing KW meter. Cue: Load is 500 KW.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.10.G</td>
<td style="padding:6px;color:#c8cdd5;">PLACE 2A-DF-SYNCH, 2A DG SYNCH SWITCH (SS) to OFF.</td>
<td style="padding:6px;color:#9ca3af;">Simulates placing 2A-DF-SYNCH SWITCH in OFF position. Cue: JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.4.10.F is the discriminating step — the applicant must <strong>coordinate two simultaneous actions</strong> at the precise instant the synchroscope reaches 12 o'clock (+0 / −2 minutes): (1) close the generator circuit breaker via 2A-DF-GCP-3 (BCS), and (2) immediately raise generator load to ≥<span class="hi-exam">500 KW</span> using the SPEED CONTROL SWITCH (GS) to prevent the breaker from tripping on reverse power. Failing to raise load promptly after closing the breaker is the most common failure mode — the generator becomes a motor (drawing real power from the grid), and the reverse power relay opens the output breaker. Step 5.2.4 is a secondary discrimination point: with 2A Vital Bus already energized (parallel loading), the applicant must place the LOADING SW in DROOP <strong>before</strong> starting the diesel — droop mode allows the generator to share load with the grid without hunting for frequency control. The 50–100 V higher generator-voltage offset in Step 5.4.4 sets the generator slightly higher than bus voltage so that on closure, reactive flow is OUT of the generator, not into it.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.DG-0001 (Rev. 39) | Task: 1130010501 | K/A: 064 A2.09 — Emergency Diesel Generator System — Ability to (a) predict the impacts of the following malfunctions or operations on the EDG; and (b) based on those predictions, use procedures to correct, control, or mitigate the consequences of those malfunctions or operations: Synchronization of EDG with grid | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-ip-k.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]], [[4KV]]
- Related procedures: [[S2.OP-SO.DG-0001 — Diesel Generator Operation]]
- Related exam: [[2016 NRC Operating Exam]]
