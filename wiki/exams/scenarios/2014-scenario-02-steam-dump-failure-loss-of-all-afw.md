---
title: "2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW"
category: exams
status: draft
aliases:
  - 2014 Scenario 2
  - 2014 ESG-3
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 7 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> 100% power, MOL.<br><br>
<strong>Turnover:</strong> Maintain current power. Perform weekly Vacuum Pump swap IAW S2.OP-SO.AR-0001. The crew will take the turnover at 100% power, MOL, with direction to swap operating condenser vacuum pumps per Control Room logs weekly pump swap using S2.OP-SO.AR-0001, Condenser Air Removal System Operation.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Swap condenser vacuum pumps</li>
<li>Loss of condenser vacuum (recoverable — AR25 fails open on secured pump)</li>
<li>Loss of 2A 4160 V vital bus on bus differential lockout (TS)</li>
<li>Turbine inlet steam pressure transmitter PT-505 fails low (TS)</li>
<li><span class="hi">Steam dump failure with a single MSIV failing to shut</span> — reactor trip and MSLI</li>
<li><span class="hi">Failure of automatic Safety Injection</span> (steamline D/P) — manual SI required</li>
<li><span class="hi">Loss of all AFW flow</span> — FRHS-1 condensate pump recovery</li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence &amp; Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">Swap condenser vacuum pumps (weekly pump swap)</td>
<td style="padding:6px;color:#9ca3af;">PO performs the weekly condenser vacuum pump swap IAW S2.OP-SO.AR-0001, Condenser Air Removal System Operation, starting the standby pump and preparing to secure the running pump.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">Loss of condenser vacuum (recoverable) — air injection suction isolation valve AR25 on the secured pump fails open, condenser vacuum degrading</td>
<td style="padding:6px;color:#9ca3af;">During the vacuum pump swap, the air injection suction isolation valve AR25 on the pump being secured fails open, causing condenser vacuum to degrade. CRS enters S2.OP-AB.COND-0001, Loss of Condenser Vacuum. The crew attempts to re-start the affected pump (it will not start), dispatches field personnel to immediately shut the affected AR25, and starts the remaining vacuum pump, which restores vacuum.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">Loss of 2A 4160 V vital bus on bus differential lockout</td>
<td style="padding:6px;color:#9ca3af;">Once vacuum is restored, the 2A 4KV vital bus locks out on bus differential. CRS enters S2.OP-AB.4KV-0001, Loss of 2A 4160 Volt Vital Bus, performs the abnormal actions, and identifies the applicable Tech Specs for the de-energized vital bus and associated inoperable equipment.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Main Turbine inlet steam pressure transmitter PT-505 fails low (TS)</td>
<td style="padding:6px;color:#9ca3af;">PT-505 fails low. If control rods are in auto they insert at maximum rate; RO verifies no load reject in progress and places control rods in manual. CRS enters S2.OP-AB.ROD-0003, Continuous Rod Motion. If rods are already in manual, the crew diagnoses the failure from the alarms received and RP4 high steam flow bistable status. Crew addresses the failed channel per the TSAS (places PT-505 in the tripped condition within the allowed time).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Steam dump failure — 21–23 TB20 steam dumps open and cannot be shut/turned off; single MSIV fails to shut on MSLI</span></td>
<td style="padding:6px;color:#9ca3af;">The crew swaps Main Steam Dumps to MS Pressure control (if in AB.ROD-0003, or IAW SO.RPS-0006 based on TSAS 3.3.2.1). The steam dump failure causes 21–23 TB20 steam dumps to open; they cannot be shut or turned off. CRS directs a reactor trip and a Main Steam Line Isolation (MSLI) IAW the CAS of S2.OP-AB.STM-0001, Excessive Steam Flow. RO trips the reactor and performs EOP-TRIP-1 immediate actions; RO initiates MSLI on both SSPS trains, but 23 MSIV remains open (single MSIV fails to shut).</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Failure of automatic Safety Injection</span> on steamline Delta-P as 23 SG blows down <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">With 23 MSIV stuck open, 23 SG blows down and an automatic SI signal is generated on steamline Delta Pressure — but the auto SI initiation is failed. CRS directs a Safety Injection be initiated; <span class="hi-exam">RO manually actuates SI prior to completion of EOP-TRIP-1 step 5 (CT#1).</span> Crew verifies safeguards actuation and continues TRIP-1.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">Loss of all AFW — 22 AFW pump trips after AFW flow reduction, 23 AFW pump trips ~5 min later <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">Shortly after AFW flow reduction is performed following TRIP-1 immediate actions, 22 AFW pump trips; 23 AFW pump trips ~5 minutes later (21 AFW pump has no power from the lost 2A bus). PO isolates feedwater to the 23 SG. With less than 22E4 lbm/hr AFW available and no AFW pumps running, CRS transitions to EOP-FRHS-1, Response to Loss of Secondary Heat Sink, when directed in TRIP-1. Because the SGFPs are not available and all AFW pumps are failed, the crew performs a Condensate pump recovery in FRHS-1 to <span class="hi-exam">establish feed flow into a SG before RCS Bleed and Feed is required (CT#2).</span> Scenario terminates when SG WR levels are rising in FRHS-1, or when RCS Bleed and Feed is initiated.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-2):</strong> <span class="hi-exam">Manually actuate SI prior to completion of EOP-TRIP-1 step 5.</span> <em>Basis:</em> Failure to manually actuate SI under the postulated conditions constitutes misoperation or incorrect crew performance in which the crew does not prevent "degraded emergency core cooling system (ECCS)... capacity." SI can be manually actuated from the control room; failure to do so also represents a failure by the crew to effectively direct or manipulate ESF controls, to recognize a failure or an incorrect automatic actuation of an ESF system or component, and to take one or more actions that would prevent a challenge to plant safety. <span class="hi-exam">Window is event-driven — actuate before completion of EOP-TRIP-1 step 5 (not a clock-based time-critical task).</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-45):</strong> <span class="hi-exam">Establish feed flow into any SG before RCS Bleed and Feed is required.</span> <em>Basis:</em> Failure to establish the minimum required feedwater flow rate under the postulated plant conditions results in "adverse consequences or significant degradation in the mitigative capability of the plant." The minimum required feedwater flow rate can be established by performing the appropriate manual action (here, Condensate pump recovery in FRHS-1). Failure to manually establish it also represents a failure of the crew to direct/manipulate ESF controls, recognize a failure or incorrect automatic actuation, and take actions to prevent a challenge to plant safety, and is a "violation of the facility license condition." <span class="hi-exam">Window is event-driven — establish SG feed flow before RCS Bleed and Feed is required (not a clock-based time-critical task).</span></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.COND-0001 — Loss of Condenser Vacuum]] (AR25 fails open on the secured vacuum pump — shut AR25, start remaining pump, restore vacuum) → [[AB.4KV-0001 — Loss of 4KV Vital Bus]] (2A 4160 V vital bus locks out on bus differential — abnormal actions, enter TS) → [[AB.ROD-0003 — Continuous Rod Motion]] (PT-505 fails low; rods to manual, address failed channel per TSAS) → steam dumps fail open and cannot be shut, single MSIV (23) fails to shut → [[AB.STM-0001 — Excessive Steam Flow]] CAS directs reactor trip and MSLI → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — immediate actions; auto SI on steamline Delta-P FAILS as 23 SG blows down → <strong>CT#1</strong>: RO manually actuates SI before completion of TRIP-1 step 5) → loss of all AFW (22 then 23 AFW pump trip after flow reduction; 21 AFW pump has no power from the lost 2A bus), &lt; 22E4 lbm/hr available → CRS transitions out of TRIP-1 to <span class="hi-exam">EOP-FRHS-1</span> (Response to Loss of Secondary Heat Sink — SGFPs and all AFW unavailable → Condensate pump recovery → <strong>CT#2</strong>: establish SG feed flow before RCS Bleed and Feed is required) → terminate when SG WR levels rising in FRHS-1, or when RCS Bleed and Feed is initiated. [[EOP-CFST-1 — Critical Safety Function Status Trees]] Heat Sink status tree drives the FRHS-1 entry; the [[EOP-TRIP-2 — Reactor Trip Response]] path is not reached because the loss of heat sink diverts the crew from TRIP-1 directly to FRHS-1.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 13-01 NRC ESG-3, Rev. 00 (New Issue for 13-01 NRC Exam), Form ES-D-1 | <a href="/salem-study-system/exam-pdfs/2014-scenario-02.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Condenser Air Removal]], [[4KV]], [[Main Steam]], [[Steam Dumps]], [[Control Rod Drive]], [[AFW]], [[Feed & Condensate]], [[ECCS]], [[RCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.COND-0001 — Loss of Condenser Vacuum]], [[AB.4KV-0001 — Loss of 4KV Vital Bus]], [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.STM-0001 — Excessive Steam Flow]], [[S2.OP-SO.AR-0001 — Condenser Air Removal System Operation]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2014 NRC Operating Exam]]
