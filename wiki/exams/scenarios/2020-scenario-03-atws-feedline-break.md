---
title: "2020 Scenario 3 — ATWS / Feedwater Line Break"
category: exams
status: draft
aliases:
  - 2020 Scenario 3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — ATWS / Feedwater Line Break</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-203: 100% power, MOL; 21 SW Pump is C/T for pump repack.<br><br>
<strong>Turnover:</strong> Maintain current power level.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li><span class="hi">VCT Level channel fails high (2LT-114)</span></li>
<li>21 SW Accumulator Tank Pressure Low</li>
<li><span class="hi">23 SW Pump trips and 26 SW Pump fails to auto start</span></li>
<li><span class="hi">23 Condensate Pump trips</span></li>
<li><span class="hi-exam">21 Feedwater Line break inside containment</span></li>
<li><span class="hi-exam">ATWS</span></li>
<li><span class="hi-exam">21BF13 fails to close on SI signal</span></li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Event Sequence & Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">VCT Level channel 2LT-114 fails high</td>
<td style="padding:6px;color:#9ca3af;">Crew recognizes VCT level lowering or 2CV35 diverting to CVCS HUT. CRS enters AB.CVC-0001, Loss of Charging. RO reports 2LT-114 has failed high on P-250 computer. RO takes manual control of 2CV35 and positions to VCT. CRS directs RO to maintain VCT level by cycling 2CV35 or initiating manual makeup IAW S2.OP-SO.CVC-0006.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">21 SW Accumulator Tank low pressure</td>
<td style="padding:6px;color:#9ca3af;">Crew reports OHA B-47, 21 SW Accumulator Tank Trouble. Dispatches field operator — reports pressure at 137 psig and slowly lowering, hissing sound from flanged connection near 21SW542 nitrogen fill line. Crew declares 21 SW Accumulator inoperable (band is 138-157 psig). PO stops 21 and 22 CFCUs and isolates from field by closing 21/22 SW76 and 21/22 SW54. CRS enters TS 3.6.1.1 (1 hour) and TS 3.6.2.3 (14 days) for two CFCUs inoperable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">23 SW Pump trips, 26 SW Pump fails to auto start</td>
<td style="padding:6px;color:#9ca3af;">RO reports OHA B-13/B-14/B-15 for SW header pressure low. RO reports 23 SW Pump tripped, 26 SW Pump in Auto failed to start. RO starts 26 SW pump manually. CRS enters AB.SW-0001. PO reports no indication of SW Bay leak, SW header alarms cleared. CRS enters TS 3.7.4 (72 hours) — 21 and 23 SW Pumps inoperable in one bay, only one operable SW loop.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">23 Condensate Pump trips</td>
<td style="padding:6px;color:#9ca3af;">PO reports 23 Condensate Pump tripped. CRS enters AB.CN-0001. PO reports SGFP suction pressure less than 320 psig. PO opens 21-23 CN108s (Polisher Bypass valves). CRS evaluates Att 2, Section 4.0 — determines load reduction to 85% at 5%/min required. CRS briefs load reduction and reactivity plan. RO initiates boration IAW S2.OP-SO.CVC-0006. PO initiates load reduction IAW S2.OP-SO.TRB-0001. CRS enters AB.LOAD-0001, Rapid Load Reduction.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21 SG Feedwater Line break inside containment — ATWS</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports demand for First-Out OHA F-3, 21 SG LVL LO-LO but reactor fails to auto trip. RO trips reactor by opening both M-G set breakers (2E6D and 2G6D) [CT#1]. RO performs TRIP-1 immediate actions. RO reports large oscillating feed flow on 21 SG with no steam flow; other SGs indicating ~11% steam flow. RO manually initiates MSLI. Auto SI actuates on containment pressure high. RO identifies 21 SG as faulted. PO closes 21AF21 and 21AF11 to isolate faulted SG [CT#2 Part 1].</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">21BF13 fails to close — safeguards valve alignment</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports 21BF13 and 21BF19 are open. PO manually closes 21BF13 (isolates main feed flow to 21 SG into containment). PO attempts to close 21BF19 via SLIMMs — unsuccessful. CRS dispatches operator to close 21BF19 from field. RO reports both RTBs are NOT open — CRS directs WCC to locally open both RTBs. Crew transitions to EOP-LOSC-1.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">Faulted SG isolation and SI Termination</td>
<td style="padding:6px;color:#9ca3af;">PO verifies closed: 21BF13, 21BF40, 21MS7, 21MS10, 21MS18, 21MS167, and 21GB4 [CT#2 Part 2]. PO trips and stops 23 AFW pump. CRS dispatches operator to close 21MS45. RO resets Phase A, SG sample isolation. CRS transitions to EOP-TRIP-3. RO resets SI, Phase A, Phase B. Stops all but one charging pump, stops SI pumps, stops RHR pumps. Restores normal charging alignment and normal letdown — opens 2CV2 and 2CV277, opens 2CV7, places letdown orifice in service, adjusts 2CV18 to maintain 300 psig.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-1):</strong> Manually initiate reactor trip before transition to EOP-FRSM-1 is required. Safety significance: with the auto reactor trip and manual trip pushbuttons failed, the crew must trip the reactor by opening both rod drive M-G set breakers (2E6D and 2G6D). Failure to trip the reactor during an ATWS with a feedwater line break results in continued nuclear power generation with degrading secondary heat sink, potentially challenging core cooling and RCS integrity.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-17):</strong> Isolate feed and steam flow to faulted 21 SG before transition out of EOP-LOSC-1. This CT is comprised of two parts: (1) Isolate feed flow by closing 21AF21 and 21AF11, and (2) Isolate steam and remaining feed flow by closing/verifying closed 21BF13, 21BF40, 21MS7, 21MS10, 21MS18, 21MS167, and 21GB4. Safety significance: the feedwater line break inside containment is feeding uncontrolled mass and energy release. Failure to isolate results in continued containment pressurization, RWST depletion from containment spray, and potential loss of containment integrity.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">S2.OP-AB.CVC-0001 (VCT level fail) → S2.OP-AB.SW-0001 (SW pump trip) → S2.OP-AB.CN-0001 (condensate pump trip) → S2.OP-AB.LOAD-0001 (load reduction) → <span class="hi-exam">EOP-TRIP-1</span> (ATWS — manual trip via M-G set breakers, faulted SG identification, MSLI) → <span class="hi-exam">EOP-LOSC-1</span> (faulted SG isolation — 21 SG depressurized in uncontrolled manner) → <span class="hi-exam">EOP-TRIP-3</span> (SI termination — RCS pressure stable/rising, PZR level adequate) → Scenario terminated after normal letdown restored</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 19-01 NRC ESG-3 | <a href="/salem-study-system/exam-pdfs/2020-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Service Water]], [[CFCUs]], [[Feed & Condensate]], [[AFW]], [[Steam Generator & Blowdown]], [[RPS/SSPS]], [[Containment]], [[ECCS]], [[Main Steam]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-TRIP-3 — SI Termination]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.CN-0001 — Condensate System Abnormality]], [[AB.LOAD-0001 — Rapid Load Reduction]]
- Related exam: [[2020 NRC Operating Exam]]
