---
title: "2014 JPM Sim-h — Perform Actions for CCW Restoration (23 CCW pump)"
category: exams
status: draft
aliases:
  - 2014 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — Perform Actions for CCW Restoration (23 CCW pump)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | 008 A4.01 (RO 3.7 / SRO 3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
The Unit 2 reactor was manually tripped and a SI initiated based on indications of a large LOCA. 2-EOP-TRIP-1 is in effect. When the Main Generator breakers opened, all off site power was lost. All vital buses are being powered from their respective EDGs. NO CCW pumps are running.<br><br>
<strong>Initiating Cue:</strong><br>
You have been directed to start ONE CCW pump IAW 2-EOP-APPX-1.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Start 21 CCW pump IAW APPX-1.</span>
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
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">CHECK 4 KV vital bus status: CHECK AT LEAST ONE vital bus ENERGIZED by station power transformers.</td>
<td style="padding:6px;color:#9ca3af;">Checks 4KV vital busses and determines no vital bus is being supplied from station power transformer; goes to Step 2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">CHECK ECCS pump (CVC, SI, or RHR) and AFW pump status. CHECK one CCW pump running.</td>
<td style="padding:6px;color:#9ca3af;">Determines all ECCS and motor driven AFW pumps running on energized vital buses; determines NO CCW pumps running; uses RNO and goes to Step 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">SELECT CCW pump start strategy: IF ALL 4 KV vital buses energized, THEN GO TO Step 4.</td>
<td style="padding:6px;color:#9ca3af;">Determines ALL 4 KV vital buses energized, and GOES TO Step 4.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4.a</td>
<td style="padding:6px;color:#c8cdd5;">CHECK 22 CCW pump AVAILABLE.</td>
<td style="padding:6px;color:#9ca3af;">Determines 22 CCW pump is AVAILABLE.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.b *</span></td>
<td style="padding:6px;color:#c8cdd5;">BLOCK 2B and 2C SECs.</td>
<td style="padding:6px;color:#9ca3af;">Blocks 2B and 2C SECs on 2RP1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.c *</span></td>
<td style="padding:6px;color:#c8cdd5;">RESET 2B and 2C SEC's.</td>
<td style="padding:6px;color:#9ca3af;">Resets 2B and 2C SEC's on 2CC3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.d.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">At RP2: STOP 22 Switchgear Room Supply Fan.</td>
<td style="padding:6px;color:#9ca3af;">Stops 22 Switchgear Room Supply Fan at RP2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.d.2 *</span></td>
<td style="padding:6px;color:#c8cdd5;">At RP2: START 23 Switchgear Room Supply Fan.</td>
<td style="padding:6px;color:#9ca3af;">Starts 23 Switchgear Room Supply Fan at RP2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.e *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP the following equipment at CC1: 22 CFCU; 24 CFCU; 22 Aux Bldg Exhaust Fan.</td>
<td style="padding:6px;color:#9ca3af;">Stops 22 CFCU, 24 CFCU, and 22 Aux Bldg Exhaust Fan at CC1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.f *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">START 22 CCW Pump.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Depresses start PB for 22 CCW Pump and recognizes it did not start.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">4.f RNO *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">1) START 22 OR 24 CFCU. 2) GO TO Step 5.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Starts 22 or 24 CFCU; goes to Step 5.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.a *</span></td>
<td style="padding:6px;color:#c8cdd5;">START 21 CCW Pump as follows: BLOCK 2A AND 2B SECs.</td>
<td style="padding:6px;color:#9ca3af;">Blocks 2A SEC and verifies 2B SEC previously blocked.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.b *</span></td>
<td style="padding:6px;color:#c8cdd5;">RESET 2A AND 2B SECs.</td>
<td style="padding:6px;color:#9ca3af;">Resets 2A SEC and verifies 2B SEC previously reset.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">5.c</td>
<td style="padding:6px;color:#c8cdd5;">SEND an operator to 100ft elev chiller area to lock out 21 Chiller by placing the keyswitch in OFF (LOCKOUT) position.</td>
<td style="padding:6px;color:#9ca3af;">Sends an operator to 100 ft elev chiller area to lock out 21 Chiller by placing the keyswitch in OFF (LOCKOUT) position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.d *</span></td>
<td style="padding:6px;color:#c8cdd5;">PERFORM the following at RP2: 1) STOP 21 Switchgear Room Supply Fan. 2) START 22 Switchgear Room Supply Fan.</td>
<td style="padding:6px;color:#9ca3af;">At RP2, stops 21 Switchgear Room Supply Fan and starts 22 Switchgear Room Supply Fan.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.e *</span></td>
<td style="padding:6px;color:#c8cdd5;">STOP the following equipment at CC1: 21 CFCU; 21 Aux Bldg Exhaust Fan.</td>
<td style="padding:6px;color:#9ca3af;">At CC1, stops 21 CFCU and 21 Aux Bldg Exhaust Fan.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.f *</span></td>
<td style="padding:6px;color:#c8cdd5;">START the following equipment at CC1: 22 OR 24 CFCU; 22 FHB Exhaust Fan.</td>
<td style="padding:6px;color:#9ca3af;">At CC1 starts 22 or 24 CFCU and starts 22 FHB Exhaust Fan.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">5.g *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">START 21 CCW Pump.</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Starts 21 CCW pump.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">6.a</td>
<td style="padding:6px;color:#c8cdd5;">PLACE 21 AND 22 CCW Heat Exchangers in service: CHECK AT LEAST THREE SW pumps running.</td>
<td style="padding:6px;color:#9ca3af;">Determines 3 SW pumps are running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">6.b</td>
<td style="padding:6px;color:#c8cdd5;">SEND an operator to 84 ft elev Aux Bldg to place 21 AND 22 CCW Heat Exchangers in service IAW S2.OP-SO.CC-0002(Q), "21 & 22 Component Cooling Heat Exchanger Operation."</td>
<td style="padding:6px;color:#9ca3af;">Sends an operator to 84 ft elev Aux Bldg to place 21 AND 22 CCW Heat Exchangers in service.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">6.c</td>
<td style="padding:6px;color:#c8cdd5;">RETURN TO procedure in effect.</td>
<td style="padding:6px;color:#9ca3af;">Returns to procedure in effect. Terminating Cue: When operator announces returning to procedure in effect, state JPM is complete.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>alternate-path</strong> JPM. Per EOP-APPX-1, with all 4KV vital buses energized the procedure first directs starting the <strong>22 CCW pump</strong> (Step 4): block/reset 2B and 2C SECs, swap switchgear room supply fans, and shed CCW-cooled loads at CC1 to stay within the pump's load capacity. The discriminating event is at Step 4.f — the applicant presses the <strong>22 CCW pump start PB and it fails to start</strong>. The applicant must recognize the failure, take the <strong>RNO</strong> (restart a CFCU and GO TO Step 5), and then execute Step 5 to start the <strong>21 CCW pump</strong> on its own electrical/load alignment (block/reset 2A and 2B SECs, lock out 21 Chiller, swap fans, shed/restore CC1 loads). The task standard is satisfied only when <strong>21 CCW pump is started</strong>. Continuing to attempt the 22 CCW pump, or failing to transition to the Step 5 alignment, fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-APPX-1 (Rev 24) | Task: N1150420501 | K/A: 008 A4.01 — Component Cooling Water System: Ability to manually operate and/or monitor in the control room (3.3/3.1) | Source: New | <a href="/salem-study-system/exam-pdfs/2014-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CCW]]
- Related EOPs: [[EOP-APPX-1 — Component Cooling Water Restoration]]
- Related procedures: [[AB.CC-0001 — Loss of Component Cooling Water]]
- Related exam: [[2014 NRC Operating Exam]]
