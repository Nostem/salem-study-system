---
title: "2019 JPM IP-j — Startup and Parallel a RDMG Set"
category: exams
status: draft
aliases:
  - 2019 JPM IP-j
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM IP-j — Startup and Parallel a RDMG Set</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">In-Plant | RO/SRO | 012 A4.07 (3.9/3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> In-Plant — 84 ft. Elevation, Unit 1 Switchgear Room<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 15 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 1 is operating at 75% power.<br>
- 11 Rod Drive MG (RDMG) set tripped 3 days ago.<br>
- Maintenance has completed repairs and is ready to start.<br><br>
<strong>Initiating Cue:</strong><br>
- Start up 11 RDMG set and parallel it to 12 RDMG set IAW S1.OP-SO.RCS-0001, section 5.4.<br>
- Maintenance personnel are standing by to take the required voltage readings.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Simulate starting and paralleling 11 RDMG set with 12 RDMG set IAW approved procedures.</span>
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
<td style="padding:6px;color:#c8cdd5;">5.4.1</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE A AND B REACTOR TRIP BREAKERS are CLOSED; Running RDMG Set GENERATOR LINE VOLTS is 260V (247V-273V) AND GENERATOR LINE AMPS is ~80 DC AMPS</td>
<td style="padding:6px;color:#9ca3af;">Locates A AND B REACTOR TRIP BREAKERS and verifies closed. Locates 12 RDMG Set GENERATOR LINE VOLT AND GENERATOR LINE AMPS meters and checks readings.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.2</td>
<td style="padding:6px;color:#c8cdd5;">ALIGN MG Set Controls for MG Set to be started IAW Attachment 1</td>
<td style="padding:6px;color:#9ca3af;">Using Attachment 1, determines 11 MG set controls are aligned: Voltmeter selector switch on A-B, Voltage adjust Vertical, Ammeter selector switch in A, Motor Breaker Control Switch target GREEN / breaker OPEN, Synchronize switch OFF, Generator Breaker Control Switch target GREEN / breaker OPEN.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">CLOSE MOTOR Breaker AND ALLOW at least 20 seconds for MG Set to reach rated speed</td>
<td style="padding:6px;color:#9ca3af;">Simulates rotating motor breaker control switch and waits at least 20 seconds before proceeding.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.4 *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS AND HOLD GEN FIELD FLASH pushbutton UNTIL Generator voltage stops rising (GENERATOR LINE VOLTS should indicate ~260V)</td>
<td style="padding:6px;color:#9ca3af;">Simulates pressing GEN FIELD FLASH pushbutton until Generator voltage stops rising.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5.A</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST VOLTAGE ADJUST full counterclockwise to LOW (~220V)</td>
<td style="padding:6px;color:#9ca3af;">Simulates adjusting VOLTAGE ADJUST full counterclockwise to LOW.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5.B</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST VOLTAGE ADJUST full clockwise to HIGH (~300V)</td>
<td style="padding:6px;color:#9ca3af;">Simulates adjusting VOLTAGE ADJUST full clockwise to HIGH.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5.C</td>
<td style="padding:6px;color:#c8cdd5;">ADJUST VOLTAGE ADJUST until GENERATOR LINE VOLTS indicates ~260V</td>
<td style="padding:6px;color:#9ca3af;">Simulates adjusting VOLTAGE ADJUST counterclockwise until GENERATOR LINE VOLTS indicates ~260V.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5.D</td>
<td style="padding:6px;color:#c8cdd5;">Direct Maintenance to OBTAIN voltage reading on Running MG Set using DMM at back of installed voltmeter</td>
<td style="padding:6px;color:#9ca3af;">Directs Maintenance to perform IV and obtain DMM voltage reading on Running MG Set. DMM reads ~130V (approximately half of installed voltmeter).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5.E</td>
<td style="padding:6px;color:#c8cdd5;">Direct Maintenance to MONITOR voltage reading on In-coming MG Set using DMM at back of installed voltmeter</td>
<td style="padding:6px;color:#9ca3af;">Directs Maintenance to perform IV and monitor DMM voltage reading on In-coming MG Set. DMM reads ~129V.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.5.F *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">ADJUST VOLTAGE ADJUST until DMM voltage is 0-2.5 volts higher than the reading obtained in Step 5.4.5.D (Running MG Set)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Simulates adjusting VOLTAGE ADJUST clockwise to raise voltage until DMM reads 0-2.5V higher than the running set (130V). Incoming MG set voltage must be adjusted ABOVE the running set voltage before paralleling.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.5.G</td>
<td style="padding:6px;color:#c8cdd5;">Direct Maintenance to REMOVE DMM AND CLOSE panel doors</td>
<td style="padding:6px;color:#9ca3af;">Directs Maintenance to remove DMM and close panel doors.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.4.6 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PLACE MG Set SYNCHRONIZE Switch to ON — OBSERVE Generator Breaker automatically closes and load divides equally (~40 DC Amps each)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">If necessary, simulates moving the Synchronize Switch from 12 MG set and inserting into 11 MG set, then places in ON. Generator breaker auto-closes and load stabilizes at ~40 amps on each generator. CAUTION: Do NOT manually close generator output breaker — could trip both MG Sets. Auto-closure could take as long as 60 seconds.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.4.7</td>
<td style="padding:6px;color:#c8cdd5;">PLACE MG Set SYNCHRONIZE Switch to OFF</td>
<td style="padding:6px;color:#9ca3af;">Simulates placing 11 MG Set SYNCHRONIZE Switch to OFF.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Steps 5.4.5.F and 5.4.6 are the discriminating steps — the applicant must adjust the incoming MG set voltage 0-2.5V HIGHER than the running set using DMM readings (CLOCKWISE to raise), then place the SYNCHRONIZE switch to ON to auto-close the generator breaker. The single synchronize handle must be moved from the 12 MG set to the 11 MG set. Manually closing the generator output breaker could trip both MG sets. This is the identical procedure section as the 2023 JPM IP-j (section 4.4 vs section 5.4 — the procedure was revised between exams but the task is the same).</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S1.OP-SO.RCS-0001 (R32) + OTSC 32A | Task: N0015010104 | K/A: 012 A4.07 — Ability to manually operate and/or monitor in the control room: M/G set breakers | Source: Bank | <a href="/salem-study-system/exam-pdfs/2019-jpm-ip-j.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[RPS/SSPS]]
- Related procedures: [[S1.OP-SO.RCS-0001 — Rod Control System Operation]]
- Related exam: [[2019 NRC Operating Exam]]
