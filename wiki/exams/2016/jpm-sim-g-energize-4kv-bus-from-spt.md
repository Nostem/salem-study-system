---
title: "2016 JPM Sim-g — Energize 2A 4KV Vital Bus from 24 Station Power Transformer"
category: exams
status: draft
aliases:
  - 2016 JPM Sim-g
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-g — Perform Actions for a Loss of All AC Power (Energize a 4KV Vital Bus from a Station Power Transformer)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 055 EA1.07 (RO 4.1 / SRO 4.1)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> No<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
1. Unit 2 is recovering from a loss of all AC Power.<br>
2. The crew is performing step 16 of 2-EOP-LOPA-1.<br>
3. 23 AFW pump is supplying all required AFW flow.<br>
4. 2A EDG was started first and is providing power to 2A Vital Bus.<br>
5. 2B EDG was just started and is powering 2B 4KV vital bus.<br>
6. 2C 4KV Vital Bus remains deenergized and unavailable.<br>
7. 24 Station Power Transformer (SPT) has just been energized.<br>
8. With 24 SPT now available, the CRS has directed that S2.OP-SO.DG-0001 Section 5.8 and S2.OP-SO.4KV-0001 Section 5.3.6 be utilized to swap 2A Vital Bus from 2A EDG to 24 SPT.<br><br>
<strong>Initiating Cue:</strong><br>
You are the Control Board Operator. Complete Section 5.8 of S2.OP-SO.DG-0001, and then utilize Section 5.3.6 of S2.OP-SO.4KV-0001 to restore power to 2A Vital Bus from 24 SPT. Prerequisites and Precautions and Limitations have been reviewed and signed.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">Energize 2A 4KV vital bus using 24 SPT.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:80px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.DG-1 5.8.1</td>
<td style="padding:6px;color:#c8cdd5;">IF 2A EDG is paralleled on 2A 4KV Vital Bus...</td>
<td style="padding:6px;color:#9ca3af;">Determines 2A Diesel Generator is not paralleled on 2A 4KV Vital Bus.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.DG-1 5.8.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">IF 2A Vital Bus is isolated and energized from 2A EDG, THEN: PLACE redundant equipment in service as necessary to support deenergizing 2A Vital Bus; STOP all 2A Vital Bus loads using Attachment 1.</td>
<td style="padding:6px;color:#9ca3af;">Places redundant equipment in service as needed (e.g., 22 CCW pump). Note: 1 SW pump with the TGA isolated is sufficient for maintaining SW header pressure. Stops the following equipment (if running): 21 CCW pump, 21 SW pump, 21 CFCU, 21 Aux Building Exhaust Fan, 21 SWGR Room Supply Fan, 21 SWGR Room Exhaust Fan, 21 BAT pump, 21 FHB Exhaust Fan, 21 AFW pump, 21 SI / 21 CS pumps.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.DG-1 5.8.3 *</span></td>
<td style="padding:6px;color:#c8cdd5;">OPEN 2A DIESEL GENERATOR BREAKER by performing one of: OPEN 2AD1AX6D, 2A DG BREAKER (64' Swgr Rm); or PRESS 2A BREAKER OPEN pushbutton (2CC3); or PLACE 2A-DF-GCP-3, GENERATOR CIRCUIT (BCS), to TRIP (2A DIG Control Panel).</td>
<td style="padding:6px;color:#9ca3af;">Opens 2A DIESEL GENERATOR BREAKER by directing opening of 2AD1AX6D OR pressing 2A BREAKER OPEN pushbutton on 2CC3 OR directing placement of 2A-DF-GCP-3 to TRIP.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.DG-1 5.8.4</td>
<td style="padding:6px;color:#c8cdd5;">ALLOW Diesel to run unloaded for ≥ 3 minutes prior to stopping the EDG.</td>
<td style="padding:6px;color:#9ca3af;">Cue: 2A EDG will be shutdown by local operator.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.DG-1 5.8.5</td>
<td style="padding:6px;color:#c8cdd5;">If diesel unloading...</td>
<td style="padding:6px;color:#9ca3af;">Determines step is N/A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.4KV-1 5.3.6</td>
<td style="padding:6px;color:#c8cdd5;">IF 2A 4KV Vital Bus is to be energized from 24 SPT, THEN:</td>
<td style="padding:6px;color:#9ca3af;">Reads step.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.4KV-1 5.3.6.A</td>
<td style="padding:6px;color:#c8cdd5;">Direct NEO to RACK UP 2AD1AX24ASD, 24 STATION POWER TRANSFORMER INFEED BREAKER (64' Swgr Rm).</td>
<td style="padding:6px;color:#9ca3af;">Contacts NEO and directs them to rack up 2AD1AX24ASD.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.4KV-1 5.3.6.B *</span></td>
<td style="padding:6px;color:#c8cdd5;">PRESS Mimic Bus 2A VITAL INFEED 24ASD pushbutton AND ENSURE Console Bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION illuminates.</td>
<td style="padding:6px;color:#9ca3af;">Depresses Mimic Bus 2A VITAL INFEED 24ASD pushbutton AND determines the Console Bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION illuminates.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">SO.4KV-1 5.3.6.C.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PRESS AND HOLD control console 24ASD CLOSE pushbutton; RELEASE pushbutton when 24ASD indicates CLOSED.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Presses and Holds control console 24ASD CLOSE pushbutton, then releases pushbutton when 24ASD indicates closed.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">SO.4KV-1 5.3.6.C.3</td>
<td style="padding:6px;color:#c8cdd5;">ENSURE the following: a. Console bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION is extinguished. b. 2A 4KV Vital Bus voltage is 4.275–4.336KV (normal) OR 4.330–4.417KV (single source of off-site power). c. OHA J-17, 2A 4KV VTL BUS UNDRVOLT, is clear.</td>
<td style="padding:6px;color:#9ca3af;">Checks Console bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION is extinguished. Determines 2A Vital Bus voltage is 4.275–4.385KV (single source of off-site power). Determines OHA J-17 is clear. Terminate JPM.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 5.3.6.C is the discriminating step — the <strong>Mimic Bus protocol</strong> for closing a 4KV vital bus breaker after a SPT swap. Closing the bus tie requires a <strong>two-step interlock sequence</strong>: (1) Press the Mimic Bus 2A VITAL INFEED 24ASD pushbutton to ARM the close interlock and verify the Console Bezel 24ASD MIMIC BUS INTLK CLOSE SELECTION illuminates; (2) <strong>Press AND HOLD</strong> the control console 24ASD CLOSE pushbutton until 24ASD indicates CLOSED. Verifying the bezel light is ON before pressing CLOSE confirms the interlock has authorized the close. Verifying the bezel extinguishes after the close confirms the breaker properly seated. Bus voltage band depends on whether a single off-site source feeds the unit (4.330–4.417KV) or both sources are available (4.275–4.336KV); during recovery from LOPA, single-source band applies.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: S2.OP-SO.DG-0001 (Rev. 39) / S2.OP-SO.4KV-0001 (Rev. 32) | Task: 1150140501 | K/A: EPE 055 EA1.07 — Loss of Vital AC Inst Bus — Ability to operate and/or monitor: 4KV vital bus reenergization from a station power transformer | Source: New | <a href="/salem-study-system/exam-pdfs/2016-jpm-sim-g.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[4KV]], [[EDGs]]
- Related procedures: [[S2.OP-SO.DG-0001 — Diesel Generator Operation]], [[S2.OP-SO.4KV-0001 — 4KV Vital Bus Operation]]
- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]]
- Related exam: [[2016 NRC Operating Exam]]
