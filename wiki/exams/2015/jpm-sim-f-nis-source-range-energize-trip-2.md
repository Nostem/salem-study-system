---
title: "2015 JPM Sim-f — Take Corrective Action For A Nuclear Instrumentation System Malfunction (Energize Source Range NIS IAW TRIP-2)"
category: exams
status: draft
aliases:
  - 2015 JPM Sim-f
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">JPM Sim-f — Take Corrective Action For A Nuclear Instrumentation System Malfunction (Energize Source Range NIS IAW TRIP-2 w/one under compensated IR channel)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | RO/SRO | EPE 007 EA1.05 (4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Location:</strong> Simulator<br>
<strong>Time-Critical:</strong> No<br>
<strong>Alternate Path:</strong> Yes<br>
<strong>Estimated Time:</strong> 5 minutes<br><br>
<strong>Initial Conditions:</strong><br>
A MANUAL reactor trip was initiated 15 minutes ago when both SGFP's tripped automatically.<br>
Operators performed the immediate actions of EOP-TRIP-1, Reactor Trip or Safety Injection, then transitioned to 2-EOP-TRIP-2, Reactor Trip Response. Operators have performed TRIP-2 up to Step 19, Steam Dump Mode Shift.<br><br>
<strong>Initiating Cue:</strong><br>
You are the board operator. Starting at Step 19, perform 2-EOP-TRIP-2 Reactor Trip Response.
</div>

<div style="padding:10px 14px;background:#052e16;border-left:3px solid #34d399;border-radius:0 4px 4px 0;margin-bottom:14px;font-size:13px;">
<strong style="color:#34d399;">Task Standard:</strong><br>
<span style="color:#c8cdd5;">1. Transfers Main Steam Dumps to MS Pressure Control - Auto.<br>2. Energizes BOTH SRNI Channels.</span>
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
<td style="padding:6px;color:#c8cdd5;">19</td>
<td style="padding:6px;color:#c8cdd5;">Are Condenser Steam Dumps Available?</td>
<td style="padding:6px;color:#9ca3af;">Checks Condenser Steam Dumps and reports they are available based on circulators in service and condenser vacuum established.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">19 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place Steam Dumps in "Manual".</td>
<td style="padding:6px;color:#9ca3af;">Depresses Steam Dumps Manual PB on control console and verifies Manual light illuminates and Auto light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">19 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Align Steam Dump Valve demand "Press %" and "Tavg %".</td>
<td style="padding:6px;color:#9ca3af;">Uses Increase Demand (Open Vlv) PB to align Steam Dump Valve demand "Press %" and "Tavg %".</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">19 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place Steam Dumps in "MS Pressure Control".</td>
<td style="padding:6px;color:#9ca3af;">Depresses "MS Pressure Control" PB on control console and verifies light illuminates and Tavg Control light extinguishes.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">19 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Place Steam Dumps in "Auto".</td>
<td style="padding:6px;color:#9ca3af;">Depresses Steam Dumps Auto PB on control console and verifies Auto light illuminates and Manual light extinguishes. (Cue: CRS directs you to leave Steam Dumps at current pressure setpoint.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">20</td>
<td style="padding:6px;color:#c8cdd5;">Is any RCP running.</td>
<td style="padding:6px;color:#9ca3af;">Checks RCP status and determines all RCP's are running.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">22</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Are both IR Channels less than 7E-11 Amps. Is undercompensation preventing proper IR operation?</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Checks IRNI Channel 1 and Channel II indication and determines 2N36 reads &gt;7E-11 Amps. Determines undercompensation of channel 2N36 is preventing proper IR operation by: elapsed time since trip; SUR 0 on affected channel with power above minimum display; NR-45 trend IR CH II leveling off.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">22.1</td>
<td style="padding:6px;color:#c8cdd5;">Energize Source Range Channels.</td>
<td style="padding:6px;color:#9ca3af;">—</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">22.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Energize Source Range Channel I.</td>
<td style="padding:6px;color:#9ca3af;">Energizes Source Range Channel I by depressing RESET SOURCE RANGE A.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;"><span class="jpm-critical">22.1 *</span></td>
<td style="padding:6px;color:#c8cdd5;">Energize Source Range Channel II.</td>
<td style="padding:6px;color:#9ca3af;">Energizes Source Range Channel II by depressing RESET SOURCE RANGE B.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">22.2</td>
<td style="padding:6px;color:#c8cdd5;">Transfer NR-45 (Nuclear Power Recorder) to Source Range Channels.</td>
<td style="padding:6px;color:#9ca3af;">Transfers NR-45 to Source Range Channels by selecting Source Range Channel I on Pen 1 or 2, and selecting Source Range Channel II on the other Pen.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">22.3</td>
<td style="padding:6px;color:#c8cdd5;">Adjust Audio Count Rate Circuit Scale.</td>
<td style="padding:6px;color:#9ca3af;">Adjusts Audio Count Rate Circuit Scale. Terminate JPM after audio count rate scale adjustment has been verified in the control room.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Key Decision Point:</strong><br>
<span style="color:#c8cdd5;">This is an <strong>Alternate Path</strong> JPM. The applicant begins at TRIP-2 Step 19 and shifts the Steam Dumps to MS Pressure Control - Auto (four critical actions). The discriminating diagnosis is at <strong>Step 22</strong>: intermediate range channel <strong>2N36 (IR CH II)</strong> reads <strong>&gt;7E-11 Amps</strong> and will not drop below the source-range energize permissive because the channel is <strong>undercompensated</strong> (the simulator inserts compensating-voltage-low on 2N36). The applicant must recognize this is an instrument problem — not actual neutron level — by the elapsed time since trip, a SUR of 0 on the affected channel with power above minimum display, and the NR-45 trend showing IR CH II leveling off. Recognizing the undercompensation, the applicant proceeds into Step 22.1 to <strong>manually energize BOTH Source Range NIS channels</strong> (RESET SOURCE RANGE A and RESET SOURCE RANGE B). Failing to diagnose the undercompensated channel and waiting for the IR to drop below permissive — or energizing only one SR channel — fails the task.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Ref: 2-EOP-TRIP-2 (Rev 28) | Task: N1140230401 | K/A: EPE 007 EA1.05 — Ability to operate and/or monitor the Nuclear Instrumentation System as it applies to reactor trip / response | Source: New | <a href="/salem-study-system/exam-pdfs/2015-jpm-sim-f.pdf" target="_blank" style="color:#60a5fa;">View JPM PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[Steam Dumps]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exam: [[2015 NRC Operating Exam]]
