---
title: "2019 JPM Sim-g — Start and Load an EDG During Loss of All Off-Site Power"
category: exams
status: draft
aliases:
  - 2019 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — Start and Load an EDG During Loss of All Off-Site Power</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 064 A4.06 (3.9/3.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 8 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- Unit 2 experienced a Reactor Trip following a total loss of off-site power.<br>
- The crew is implementing 2-EOP-LOPA-1 with all actions completed through Step 12.<br>
- The following is a status of AC Power:<br>
&nbsp;&nbsp;- 2A EDG tripped shortly after the reactor was tripped and is being investigated by Maintenance.<br>
&nbsp;&nbsp;- 2B EDG was secured (stopped) by the crew due to the bus being locked out on Bus Differential.<br>
&nbsp;&nbsp;- 2C EDG was C/T for scheduled maintenance prior to this event.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Plant Operator.<br>
- WCC Supervisor reports that 2C EDG has been restored from maintenance and tags are fully released.<br>
- The CRS directs you to start and load 2C EDG starting at Step 13 of EOP-LOPA-1.<br>
- Your evaluator will respond to all other alarms not related to your task.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Starts 2C EDG and one SW pump for that bus, and closes 23SW20 valve.<br>2. Starts all directed C bus loads IAW Table C of EOP-LOPA-1.</span>
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
<td style="padding:6px;color:#c8cdd5;">13</td>
<td style="padding:6px;color:#c8cdd5;">CAUTION — 4KV VITAL BUS LOADING SHOULD NOT EXCEED POWER SUPPLY CAPACITY: DG 2000-HR LIMIT 2750 KW, DG 2-HR LIMIT 2860 KW, DG HALF-HR LIMIT 3100 KW</td>
<td style="padding:6px;color:#9ca3af;">Operator reviews CAUTION and continues on.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Start 2C EDG by depressing DIESEL GEN START PB</td>
<td style="padding:6px;color:#9ca3af;">Operator starts 2C EDG and verifies FREQUENCY is >= 60 Hz and VOLTS is >= 4.15 KV.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14 * (contd)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Close 2C EDG output breaker — depress MIMIC PB for 2C DG 4KV BKR 2CDD, verify MIMIC PB illuminates Yellow and BUS INTLK CLOSE SELECTION bezel illuminates Yellow, then depress 2C BREAKER CLOSE PB</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Operator must select the 2C DG output breaker via the MIMIC PB first, verify both the MIMIC PB and BUS INTLK CLOSE SELECTION bezel illuminate yellow, then close the breaker. 2C TROUBLE console alarm will be illuminated due to loss of bus voltage.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14 * (contd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Start one SW pump on 2CC1 (25 or 26 SW pump)</td>
<td style="padding:6px;color:#9ca3af;">Operator depresses START PB for either 25 or 26 SW pump and verifies associated amps are increasing.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">14 * (contd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Check loading on 2C EDG and close 23SW20</td>
<td style="padding:6px;color:#9ca3af;">Operator checks loading on 2C EDG by observing KW meter, then depresses CLOSED PB for 23SW20 on 2CC1 and verifies PB illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">15</td>
<td style="padding:6px;color:#c8cdd5;">SEND OPERATORS TO START NON OPERATING DGs AND TO MONITOR OPERATING DGs</td>
<td style="padding:6px;color:#9ca3af;">CRS will dispatch operator to monitor 2C DG, CRS directs you to continue on with the procedure.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">16</td>
<td style="padding:6px;color:#c8cdd5;">IS ANY 4 KV VITAL BUS ENERGIZED</td>
<td style="padding:6px;color:#9ca3af;">YES: Operator determines that 2C 4KV Vital bus is energized.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">17</td>
<td style="padding:6px;color:#c8cdd5;">IS SI ACTUATED / IS SI REQUIRED</td>
<td style="padding:6px;color:#9ca3af;">NO to both: Operator determines SI has not actuated and SI is not required.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">17 * (contd)</span></td>
<td style="padding:6px;color:#c8cdd5;">Start all directed C bus loads IAW Table C: 22 Charging Pump, 23 CCW Pump, #2 ECAC</td>
<td style="padding:6px;color:#9ca3af;">Operator starts the required loads by depressing the START PBs and verifying PB illuminates followed by amps increasing. Operator monitors EDG loading during starting loads.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">The discriminating step is closing the 2C EDG output breaker — the operator must first depress the MIMIC PB for 2C DG 4KV BKR 2CDD, verify both the MIMIC PB illuminates Yellow AND the BUS INTLK CLOSE SELECTION bezel illuminates Yellow, then depress 2C BREAKER CLOSE PB. The 2C TROUBLE console alarm will be illuminated (from loss of bus voltage prior to energizing), and the operator must not be distracted by it. After energizing the bus, starting a SW pump is critical for EDG cooling — the EDG has no cooling water without a SW pump running on its bus.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-LOPA-1 (R31) | Task: N0640010101 | K/A: 064 A4.06 — Ability to manually operate and/or monitor in the control room: Emergency generator breakers | Source: New | <a href="/salem-study-system/exam-pdfs/2019-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[EDGs]], [[Service Water]], [[4KV]]
- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]]
- Related exam: [[2019 NRC Operating Exam]]
