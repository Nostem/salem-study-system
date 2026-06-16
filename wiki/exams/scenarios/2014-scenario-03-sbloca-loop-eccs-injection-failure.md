---
title: "2014 Scenario 3 — SBLOCA / LOOP / Failure of High-Head ECCS Injection"
category: exams
status: draft
aliases:
  - 2014 Scenario 3
  - 2014 ESG-4
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 3 — SBLOCA / LOOP / Failure of High-Head ECCS Injection</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 8 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> 4% power, BOL. Unit is returning from forced outage to repair all 4 RCP diffuser vanes bolting issue. 24 SW pump is C/T for strainer repair.<br><br>
<strong>Turnover:</strong> Raise power to 18% @10% per hour. The crew will take the turnover at 4% power, BOL, with direction to raise power to 18%. 24 SW pump is C/T for strainer repair. 21 SGFP is in service, 22 SGFP is latched at idle speed.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>Raise power</li>
<li>#2 SW Bay leak (TS)</li>
<li>RCS leak — 25 gpm (TS)</li>
<li>Centrifugal charging pump failure during swap from PDP (TS)</li>
<li><span class="hi">SBLOCA</span></li>
<li><span class="hi">LOOP coincident with SI initiation</span></li>
<li><span class="hi">2C SEC fails to initiate</span></li>
<li><span class="hi">High-head ECCS fails to inject</span> (one charging pump failed from Event 4, the other fails to start)</li>
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
<td style="padding:6px;color:#c8cdd5;">Raise power (power ascension to 18%)</td>
<td style="padding:6px;color:#9ca3af;">CRS briefs the crew on the power ascension. PO slowly adjusts the Main Steam dumps to raise reactor power per Steam Dump Operation (S2.OP-SO.MS-0002), either by adjusting the auto setpoint or placing dumps in manual for finer control; there is no limit on power ascension rate below 50% power. RO slowly withdraws control rods. Crew announces when Rx power reaches 5% and notes Mode 1 entry; CRS updates work control to Mode 1. PO ensures 21–24 MS10s are in auto, set at 1015–1020 psig.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">#2 SW Bay leak — unexpected SW system alarms, lowering SW header pressure</td>
<td style="padding:6px;color:#9ca3af;">RO announces unexpected SW system alarms; CRS places power ascension on hold. A standby SW pump starts (auto or manually) to restore header pressure. CRS enters S2.OP-AB.SW-0001, Loss of SW Header Pressure, then transitions to S2.OP-AB.SW-0003, Service Water Bay Leak, and initiates the CAS. Crew splits SW Bays (opens nuclear header cross-over MOVs 21SW23/22SW23, shuts SW bay cross-connect valves 21SW17/22SW17), isolates 2 Bay (shuts 21SW22 and 21SW20), and de-energizes the affected SW pumps. With 24 SW pump C/T and the 2 Bay disabled, CRS enters <span class="hi-exam">Tech Spec 3.0.3</span> based on having no operable SW loops. (Entry conditions are also met for S2.OP-AB.ZZ-0002, Flooding, due to flooding in 2 Bay.)</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">RCS leak — 25 gpm; charging flow rising, PZR level lowering slowly, rising 2R11A containment radiation, OHA C-2 CNTMT SUMP PMP START</td>
<td style="padding:6px;color:#9ca3af;">RO reports rising charging flow and slowly lowering PZR level, a rising 2R11A containment radiation monitor reading, and unexpected OHA C-2 CNTMT SUMP PMP START. CRS enters S2.OP-AB.RC-0001, Reactor Coolant System Leak, and implements the CAS. RO maximizes PDP flow, ensures charging master controller in auto, throttles 2CV55, and adjusts RCP seal injection to 6–12 gpm per pump. PO swaps to the 45 gpm letdown orifice (letdown isolates if PZR level lowers to 17%). CRS initiates S2.OP-ST.RC-0008, RCS Water Inventory Balance, to quantify the leak, and enters TSAS 3.4.7.2.b (action b) for the unidentified RCS leak and 3.5.2.a (action a) for ECCS.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;">Centrifugal charging pump trip during swap from PDP — selected CCP trips shortly after starting</td>
<td style="padding:6px;color:#9ca3af;">While swapping from the PDP to a centrifugal charging pump to keep up with the RCS leak, RO starts 21 or 22 charging pump and reports it has tripped after starting. CRS directs RO to start the remaining centrifugal charging pump; RO starts the remaining available CCP. RO then takes 23 charging pump (PDP) speed controller to manual, lowers it to minimum while adjusting 2CV55, and stops 23 charging pump. PZR level can be maintained stable or rising. <em>Note: one CCP is now failed; this failure carries into Event 8.</em></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">SBLOCA</span> — RCS leak worsens beyond charging makeup capacity</td>
<td style="padding:6px;color:#9ca3af;">The RCS leak worsens into a small-break LOCA. CRS directs a reactor trip and Safety Injection. RO trips the reactor and confirms the Rx trip, then begins EOP-TRIP-1 immediate actions.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">LOOP coincident with SI initiation</span> — failure of auto SI on the first train; loss of all 500 KV offsite power</td>
<td style="padding:6px;color:#9ca3af;">RO initiates SI; the first train attempted (Train B) does not initiate SI, so RO initiates SI on Train A and reports SI initiated on both trains. As SI is initiated, all offsite power is lost — control room normal lighting goes out and the crew diagnoses the LOOP. RO continues TRIP-1 immediate actions: reports Main Turbine tripped, reports 2A and 2B EDGs started and supplying their respective vital buses (2A/2B SECs load in Mode III — SI plus Blackout), and reports SI manually initiated. CRS and RO verify immediate actions complete.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">7</td>
<td style="padding:6px;color:#c8cdd5;">2C SEC fails to initiate — 2C vital bus de-energized after LOOP <span class="hi-exam">(CT#1)</span></td>
<td style="padding:6px;color:#9ca3af;">2C SEC fails to initiate, leaving the 2C vital bus de-energized. PO confirms no conditions should prevent 2C EDG from starting; CRS directs PO to start 2C EDG and shut its output breaker. Because the 2C SEC did not initiate (no breaker trip signals were sent), equipment running on the 2C bus before the LOOP will restart when the EDG breaker is shut, so the crew opens C-bus equipment breakers first to avoid stalling the 2C EDG. PO starts 2C EDG and shuts the 2C EDG output breaker to energize the 2C vital bus. <span class="hi-exam">The crew starts at least one SW pump on the 2C bus (CT#1).</span> PO throttles AFW flow and reports all SG NR levels &gt; 9%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">8</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">High-head ECCS fails to inject</span> — no charging pump injecting (one CCP failed in Event 4; the other does not auto-start on SEC) <span class="hi-exam">(CT#2)</span></td>
<td style="padding:6px;color:#9ca3af;">PO reports SEC loading status for the energized vital buses. With one CCP already failed (Event 4) and the other failing to auto-start on the SEC, no high-head charging pump is injecting. The crew blocks and resets the affected SEC and <span class="hi-exam">manually starts a charging pump to establish high-head ECCS injection (CT#2).</span> RO shuts charging pump mini-flow valve 2CV139 (reports 2CV140 has no power) once RCS pressure lowers below 1500 psig with BIT flow established, confirms adverse-containment values are used at 4 psig, and reports ECCS injection status for current RCS pressure. CRS performs Rx trip stabilization in TRIP-1, then transitions to EOP-LOCA-1 to reset SI and re-establish control of plant equipment. The scenario terminates after the transition to LOCA-1 is made, when the TRIP-3 transition point is reached.</td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-25):</strong> <span class="hi-exam">Start at least one SW pump prior to end of scenario.</span> <em>Basis:</em> Failure to manually start the SW pump under the postulated plant conditions means that the EDGs are running without SW cooling. Running the EDGs without SW cooling leads to a high temperature condition that can result in EDG failure due to damage caused by engine overheating. Under the postulated plant conditions, all running EDGs are affected by the loss of all SW cooling. Thus, failure to perform the critical task constitutes misoperation or incorrect crew performance in which the crew does not prevent "degraded ... emergency power capacity." <span class="hi-exam">Window is event-driven — start a SW pump (on the 2C bus) before the end of the scenario (not a clock-based time-critical task).</span></span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-7):</strong> <span class="hi-exam">Establish flow from at least one high-head SI pump prior to transition out of TRIP-1.</span> <em>Basis:</em> Failure to manually start at least one high-head SI pump under the postulated conditions constitutes misoperation or incorrect crew performance in which the crew does not prevent "degraded emergency core cooling system (ECCS) ... capacity." In this case, at least one high-head SI pump can be manually started from the control room. Therefore, failure to manually start a high-head SI pump also represents a failure by the crew to effectively direct or manipulate engineered safety feature (ESF) controls that would prevent a significant reduction of safety margin, and to recognize a failure or an incorrect automatic actuation of an ESF system or component. <span class="hi-exam">Window is event-driven — establish high-head SI flow before transition out of EOP-TRIP-1 (not a clock-based time-critical task).</span></span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">[[AB.SW-0001 — Loss of SW Header Pressure]] → [[AB.SW-0003 — Service Water Bay Leak]] (#2 SW Bay leak — split bays, isolate 2 Bay; with 24 SW pump C/T, no operable SW loops → enter TS 3.0.3) → [[AB.RC-0001 — Reactor Coolant System Leak]] (25 gpm RCS leak — maximize charging, swap PDP to CCP, quantify leak, enter TSAS 3.4.7.2.b and 3.5.2.a; selected CCP trips, start the other CCP) → RCS leak worsens to SBLOCA → CRS directs reactor trip and SI → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — immediate actions; first-train auto SI fails, RO initiates SI on the other train; LOOP occurs coincident with SI, 2A/2B EDGs supply their buses, 2A/2B SECs load in Mode III) → 2C SEC fails to initiate, 2C vital bus de-energized → PO manually starts 2C EDG and shuts its output breaker to energize the 2C bus → <strong>CT#1</strong>: start at least one SW pump (on the 2C bus) so the running EDGs have SW cooling → high-head ECCS fails to inject (one CCP failed earlier, the other fails to auto-start on SEC) → block/reset the affected SEC and manually start a charging pump → <strong>CT#2</strong>: establish high-head SI flow before transition out of TRIP-1 → CRS completes Rx trip stabilization in TRIP-1 → transition to <span class="hi-exam">EOP-LOCA-1</span> (Loss of Reactor or Secondary Coolant — reset SI, re-establish equipment control) → terminate after the transition to LOCA-1, when the [[EOP-TRIP-3 — SI Termination]] transition point is reached. [[EOP-CFST-1 — Critical Safety Function Status Trees]] become active on transition out of TRIP-1; no front-line CSF (FRP) entry is required in this scenario.</span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: 13-01 NRC ESG-4, Rev. 00 (New Issue for 13-01 NRC Exam), Form ES-D-1 | <a href="/salem-study-system/exam-pdfs/2014-scenario-03.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[RCS]], [[CVCS]], [[ECCS]], [[EDGs]], [[SECs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-TRIP-3 — SI Termination]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.SW-0003 — Service Water Bay Leak]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam: [[2014 NRC Operating Exam]]
