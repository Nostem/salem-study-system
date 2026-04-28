---
title: "2018 JPM Sim-h — Start a CCW Pump IAW EOP-APPX-1"
category: exams
status: draft
aliases:
  - 2018 JPM Sim-h
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-h — Start a CCW Pump IAW EOP-APPX-1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Sim | RO/SRO | 008 A2.01 (3.3/3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 10 minutes<br><br>
<strong>Initial Conditions:</strong><br>
- The Unit 2 reactor was manually tripped and a SI initiated based on indications of a large break LOCA.<br>
- A loss of off-site power occurred when the Main Generator breakers opened.<br>
- 2B 4KV Vital Bus is de-energized due to Bus Differential with its Diesel running.<br>
- 2-EOP-TRIP-1 is in progress.<br>
- NO CCW pumps are running (SEC Mode 3).<br>
- 21 and 22 CCW pumps were in service prior to the trip and 23 CCW pump was in Auto.<br><br>
<strong>Initiating Cue:</strong><br>
- You are the Reactor Operator.<br>
- The CRS directs you to START ONE CCW pump IAW 2-EOP-APPX-1.<br>
- Notify the CRS when one CCW pump is running.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">STARTS 23 CCW pump IAW EOP-APPX-1.</span>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Critical Steps & Key Actions</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:50px;">Step</th>
<th style="padding:6px;text-align:left;">Critical Element</th>
<th style="padding:6px;text-align:left;">Standard</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">CHECK 4KV vital bus status: CHECK AT LEAST ONE vital bus ENERGIZED by station power transformers</td>
<td style="padding:6px;color:#9ca3af;">Determines that NONE of the 4KV vital buses are energized from the station power transformers. 2A and 2C are energized from EDGs, and 2B is de-energized. RNO: GOES TO Step 2.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2a</td>
<td style="padding:6px;color:#c8cdd5;">CHECK all ECCS pumps AND motor-driven AFW pumps running on energized vital buses</td>
<td style="padding:6px;color:#9ca3af;">Checks running pumps; determines all ECCS pumps AND motor-driven AFW pumps running on energized vital buses (A and C).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2b</td>
<td style="padding:6px;color:#c8cdd5;">CHECK one CCW pump running</td>
<td style="padding:6px;color:#9ca3af;">Checks CCW pump status; determines NO CCW pumps are running. RNO: GOES TO Step 3.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">3 *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SELECT CCW pump start strategy (choose a, b, c, or d)</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Selects strategy 'C' based on: de-energized 4KV Vital Bus = B; CCW Pumps available = 21 or 23. GO TO Step 6.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6e *</span></td>
<td style="padding:6px;color:#c8cdd5;">Attempt to start 21 CCW pump (first available)</td>
<td style="padding:6px;color:#9ca3af;">Determines 21 CCW pump was in service prior to Rx trip. Rotates 2A SEC Block Switch to BLOCK and releases. Depresses Emergency Loading Reset for 2A SEC on 2CC3. Stops 21 CS pump. Depresses 21 CCW START PB — 21 CCW pump does NOT start.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6e RNO *</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 CCW fails to start — RESET CS, restart 21 CS pump, GO TO Step 6h</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Recognizes 21 CCW did not start. Per RNO: RESET Containment Spray, START 21 CS pump as necessary, GO TO Step 6h to attempt 23 CCW.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">6h *</span></td>
<td style="padding:6px;color:#c8cdd5;">Start 23 CCW pump</td>
<td style="padding:6px;color:#9ca3af;">Rotates 2C SEC Block Switch to BLOCK and releases. Depresses Emergency Loading Reset PBs for 2A and 2C SEC on 2CC3. Stops 22 CS pump. Depresses 23 CCW START PB; verifies START bezel illuminates. Resets Spray Actuation (Train A and B). Closes 22CS2. GOES TO Step 8.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">Step 3 is the discriminating step. The applicant must correctly determine which CCW pump start strategy to use from the four options (a, b, c, d) in EOP-APPX-1. With 2B 4KV Vital Bus de-energized and both 21 and 23 CCW pumps available, the correct selection is strategy 'C'. The alternate path element occurs at Step 6e: the first CCW pump attempted (21 CCW on the 2A bus) fails to start due to an override (21 CC PUMP-START is overridden OFF). The applicant must recognize the failure, take the RNO path (reset CS, restart 21 CS pump), and proceed to Step 6h to successfully start 23 CCW pump on the 2C bus. The sequence requires stopping a Containment Spray pump to make room for the CCW pump on the SEC-loaded bus, and the applicant must remember to restart CS and reset spray actuation after loading the CCW pump.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-APPX-1 (R25) | Task: N1150420501 | K/A: 008 A2.01 — Ability to (a) predict the impacts of CCW system malfunctions and (b) based on those predictions, use procedures to correct, control, or mitigate the consequences | Source: Bank | <a href="/salem-study-system/exam-pdfs/2018-jpm-sim-h.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CCW]], [[4KV]], [[ECCS]]
- Related procedures: [[S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer]]
- Related EOPs: [[EOP-APPX-1 — Component Cooling Water Restoration]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam: [[2018 NRC Operating Exam]]
