---
title: "2023 JPM IP-j — Start Up and Parallel a Rod Drive M-G Set"
category: exams
status: draft
aliases:
  - 2023 JPM IP-j
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-j — Start Up and Parallel a Rod Drive M-G Set</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 012 A4.07 (3.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — 84 ft. Elevation, Unit 1 Switchgear Room (no RCA entry required)<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Salem Unit 1 is at 75% power.<br>
- 12 Rod Drive M-G set is in service.<br>
- 11 Rod Drive M-G Set tripped 3 days ago.<br>
- Maintenance has completed repairs and is requesting 11 M-G set be placed in service.<br><br>
<strong>Initiating Cue:</strong><br>
The CRS directs you to place 11 Rod Drive M-G set in service and parallel with 12 M-G set using Section 4.4 of S1.OP-SO.RCS-0001, Rod Control System Operation.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">The task is satisfactorily met when the applicant has started and paralleled 11 Rod Drive M-G set IAW S1.OP-SO-RCS-0001 section 4.4.</span>
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
<td style="padding:6px;color:#c8cdd5;">4.4.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE A AND B REACTOR TRIP BREAKERS are CLOSED; Running M-G Set GENERATOR LINE VOLTS is 260V (247V-273V) AND GENERATOR LINE AMPS is ~80 DC AMPS</td>
<td style="padding:6px;color:#9ca3af;">Locates A AND B REACTOR TRIP BREAKERS and verifies CLOSED indication. Locates 12 Rod Drive M-G Set GENERATOR LINE VOLT AND GENERATOR LINE AMPS meters and checks readings.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.2</td>
<td style="padding:6px;color:#c8cdd5;">ALIGN MG Set Controls for MG Set to be started IAW Attachment 1</td>
<td style="padding:6px;color:#9ca3af;">Verifies: Voltmeter selector switch on A-B, Voltage adjust in Vertical, Ammeter selector switch in A, Motor Breaker Control Switch target GREEN / breaker OPEN, Synchronize switch OFF, Generator Breaker Control Switch target GREEN / breaker OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE MOTOR Breaker AND ALLOW at least 20 seconds for MG Set to reach rated speed</td>
<td style="padding:6px;color:#9ca3af;">Simulates closing 11 M-G set breaker by rotating the MOTOR Breaker switch to CLOSE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS AND HOLD GEN FIELD FLASH pushbutton UNTIL Generator voltage stops rising (~260V)</td>
<td style="padding:6px;color:#9ca3af;">Simulates pressing and holding GEN FIELD FLASH pushbutton until Generator voltage stops rising. GENERATOR LINE VOLTS should indicate ~260V.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.5.1</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST VOLTAGE ADJUST full counterclockwise to LOW</td>
<td style="padding:6px;color:#9ca3af;">Simulates adjusting VOLTAGE ADJUST full counterclockwise. GENERATOR LINE VOLTS should indicate ~220V.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.5.2</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST VOLTAGE ADJUST full clockwise to HIGH</td>
<td style="padding:6px;color:#9ca3af;">Simulates adjusting VOLTAGE ADJUST full clockwise. GENERATOR LINE VOLTS should indicate ~300V.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.5.3</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST VOLTAGE ADJUST UNTIL GENERATOR LINE VOLTS indicates ~260V</td>
<td style="padding:6px;color:#9ca3af;">Simulates adjusting VOLTAGE ADJUST counterclockwise until GENERATOR LINE VOLTS indicates ~260V.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.5.4</td>
<td style="padding:6px;color:#c8cdd5;">Direct Maintenance to obtain voltage reading on Running MG Set using DMM at back of installed voltmeter</td>
<td style="padding:6px;color:#9ca3af;">Directs Maintenance to obtain DMM voltage reading. DMM readings will be less (by ~1/2) than installed voltmeter readings.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.5.5</td>
<td style="padding:6px;color:#c8cdd5;">Direct Maintenance to monitor voltage reading on In-coming MG Set using DMM at back of installed voltmeter</td>
<td style="padding:6px;color:#9ca3af;">Directs Maintenance to monitor voltage reading on In-coming MG Set.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4.5.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ADJUST VOLTAGE ADJUST UNTIL DMM voltage is 0-2.5 volts higher than the reading obtained in Step 4.4.5.4</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates adjusting VOLTAGE ADJUST in the CLOCKWISE direction until DMM reads 0-2.5V higher than running set (130V). Must adjust incoming M-G set voltage ABOVE the running set voltage before paralleling.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.5.7</td>
<td style="padding:6px;color:#c8cdd5;">DIRECT Maintenance to REMOVE DMM AND CLOSE panel doors</td>
<td style="padding:6px;color:#9ca3af;">Directs Maintenance to remove DMM and close panel doors.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.4.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PLACE MG Set SYNCHRONIZE Switch to ON, AND OBSERVE Generator Breaker automatically closes and load divides equally (~40 DC Amps each)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">If required, simulates moving Synchronize Switch from 12 MG set and inserting into 11 MG set, then places in ON. Generator breaker auto-closes and load stabilizes at 40 amps on each generator. CAUTION: Do NOT manually close generator output breaker — could trip both M-G Sets.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.4.7</td>
<td style="padding:6px;color:#c8cdd5;">PLACE MG Set SYNCHRONIZE Switch to OFF</td>
<td style="padding:6px;color:#9ca3af;">Simulates rotating the SYNCHRONIZE Switch to the OFF position.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 4.4.5.6 and 4.4.6 are the discriminating steps — the applicant must adjust the incoming M-G set voltage 0-2.5V higher than the running set using DMM readings (CLOCKWISE to raise), then place the SYNCHRONIZE switch to ON to auto-close the generator breaker. The single synchronize handle must be moved from the 12 M-G set to the 11 M-G set. Manually closing the generator output breaker could trip both M-G sets.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-SO.RCS-0001 (R36) | Task: N0015010104 | K/A: 012 A4.07 — Ability to manually operate and/or monitor in the control room: M/G set breakers | Source: Bank | <a href="/salem-study-system/exam-pdfs/2023-jpm-ip-j.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Reactor Coolant System]], [[Instrumentation and Controls]]
- Related procedures: [[S1.OP-SO.RCS-0001 — Rod Control System Operation]]
- Related exam: [[2023 NRC Operating Exam]]
