---
title: "2019 Scenario 4 — SGFP Trip / Loss of Heat Sink"
category: exams
status: draft
aliases:
  - 2019 Scenario 4
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#34d399;font-size:14px;font-weight:600;">Scenario 4 — SGFP Trip / Loss of Heat Sink</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">Simulator | 6 Events | 2 Critical Tasks</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Initial Conditions:</strong> IC-260: 88% power, MOL; 23 Charging Pump is in service. The following equipment is out of service: 21 AFW pump C/T for oil bubbler leak repair, 21 SI pump C/T for coupling inspection and alignment checks.<br><br>
<strong>Turnover:</strong> Reactor power was lowered for preparation for main turbine valve testing. Testing will commence next shift.
</div>

<div style="margin-bottom:14px;">
<strong style="color:#c8cdd5;font-size:12px;">Major Events:</strong>
<ol style="font-size:12px;color:#9ca3af;margin-top:6px;">
<li>PZR PORV 2PR2 leaks (TS exercised)</li>
<li>2N41 Power Range channel fails high (TS exercised)</li>
<li>21 SGFP trips on turbine thrust bearing oil pressure high — failure of Auto Main Turbine runback</li>
<li>Inadvertent Main Turbine trip — reactor fails to auto trip</li>
<li>Loss of 2B 4KV Vital Bus (loss of 22 AFW pump)</li>
<li>Loss of all AFW flow — Prompt SGFP Recovery in EOP-FRHS-1</li>
</ol>
</div>

<details>
<summary style="cursor:pointer;color:#34d399;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Event Sequence & Expected Responses</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">

<table style="width:100%;font-size:11px;border-collapse:collapse;margin-bottom:12px;">
<tr style="border-bottom:1px solid #1a2035;color:#6b7280;">
<th style="padding:6px;text-align:left;width:30px;">#</th>
<th style="padding:6px;text-align:left;">Event</th>
<th style="padding:6px;text-align:left;">Expected Crew Response</th>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">1</td>
<td style="padding:6px;color:#c8cdd5;">PZR PORV 2PR2 leak</td>
<td style="padding:6px;color:#9ca3af;">RO reports lowering PZR pressure, or PORV tailpipe temp has risen, or charging flow rising, or lower spray valve demand, or PRT indications of a 2PR2 leak. CRS enters S2.OP-AB.PZR-0001, Pressurizer Pressure Malfunction. CRS directs initiation of Attachment 1 CAS. RO reports POPS not in service, PZR Pressure Control channel has NOT failed, Master Pressure Controller has NOT failed, PORV is NOT failed. RO opens 2PR6 — reports tailpipe temps lowering or stable. RO opens 2PR7 — reports tailpipe temp rising. RO closes 2PR7 — reports lowering PORV tailpipe temperature (2PR2 isolated). CRS enters TSAS 3.4.5 Action a (1 hour LCO). IF RCS pressure <2185 psig THEN TSAS 3.2.5.b (2 hour LCO) is applicable.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">2</td>
<td style="padding:6px;color:#c8cdd5;">2N41 Power Range channel fails high</td>
<td style="padding:6px;color:#9ca3af;">RO reports rods stepping in and no runback in progress. RO places rod control in Manual. CRS enters S2.OP-AB.NIS-0001, NIS Malfunction. RO reports rod control is in Manual. RO reports 2N41 channel is failed high with OHA alarms E-15 PR HI RNG FLUX HI, E-31 PR OVRPWR ROD STOP, E-39 PR CH DEV, and E-47 PR NEUT FLUX RATE HI. CRS directs PO to remove PR channel from service IAW S2.OP-SO.RPS-0001. PO places DETECTOR CURRENT COMPARATOR switches in PRN41 position (upper and lower), places POWER MISMATCH BYPASS switch to BYPASS PR N41, places ROD STOP BYPASS switch to BYPASS PR N41, places COMPARATOR CHANNEL DEFEAT switch to N41. CRS enters TSAS 3.3.1.1 Actions 2 and 6 (6 hour LCO). RO withdraws rods to the ARO position.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;">
<td style="padding:6px;color:#c8cdd5;">3</td>
<td style="padding:6px;color:#c8cdd5;">21 SGFP trip — failure of Auto Main Turbine runback</td>
<td style="padding:6px;color:#9ca3af;">PO reports unexpected console alarm TURB THRUST BEARING OIL PRESSURE HI for 21 SGFP. Crew dispatches NEO to investigate. PO reports 21 SGFP tripped and the Main Turbine auto runback has not occurred. CRS directs operators to perform immediate actions of S2.OP-AB.CN-0001. PO depresses GO PB on Digital EHC and reports turbine load reduction in progress. RO ensures control rods insert or inserts rods in Manual to restore Tavg to Tref. CRS directs PO to initiate Attachment 1 CAS. RO reports power >P-10. RO initiates RCS boration. PO ensures 22 SGFP speed rises. PO ensures 21-23 CN108s are open. PO depresses 21 SGFP TURBINE TRIP bezel pushbutton and verifies AFP AUTO ARMED bezel lit. Crew identifies AFD outside normal band. Crew monitors and maintains AFD within limits. Crew stabilizes the unit and SG NR levels restore to >44%.</td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">4</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Main Turbine trip — reactor fails to auto trip</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">RO reports valid demand for Rx trip has occurred with No AUTO Rx trip. RO manually trips the reactor using one of the reactor trip pistol grip switches. (Critical Task #1) RO reports reactor is tripped and performs immediate actions of EOP-TRIP-1: confirms Rx trip, reports Main Turbine is tripped, reports all 4KV vital buses energized, reports SI has not been initiated with no demand on 2RP4 or First Out OHA. CRS transitions to EOP-TRIP-2.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">5</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">Loss of 2B 4KV Vital Bus — loss of all AFW</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">PO reports 22 AFW pump did not start due to loss of power and 23 AFW pump did not Auto start. PO manually starts 23 AFW pump — pump starts but trips moments later on overspeed. PO reports NO AFW pumps are running and total AFW flow is NOT >22E4 lbm/hr. (21 AFW pump is C/T, 22 AFW pump lost with 2B 4KV bus, 23 AFW pump tripped on overspeed.) PO reports all BF19s and BF40s are closed. PO reports Tavg <554 F and resets FW interlock. PO stops 22 SGFP. RO reports all rods inserted, PZR level >17%. Crew reports valid RED path on Heat Sink when SG NR levels <9% with <22E4 lbm/hr AFW flow.</span></td>
</tr>
<tr style="border-bottom:1px solid #0d1220;background:rgba(251, 191, 36, 0.06);">
<td style="padding:6px;color:#c8cdd5;">6</td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">EOP-FRHS-1 — Prompt SGFP Recovery</span></td>
<td style="padding:6px;color:#c8cdd5;"><span class="hi-exam">CRS transitions to EOP-FRHS-1, Loss of Secondary Heat Sink. PO reports it was not operator action which caused total AFW flow to lower. RO reports RCS pressure >all SGs and RCS Thots >350 F. CRS reads Bleed and Feed transition criteria. PO closes 21-24GB4 and 21-24SS94 valves. CRS dispatches operators to investigate AFW pump failures. RO stops all RCPs. PO reports condensate system is in operation — 22 SGFP is available. PO sets all BF19 and BF40 demands to zero. RO resets FW interlock. PO starts 22 SGFP IAW S2.OP-SO.CN-0007, Prompt Recovery From SGFP Trip. PO verifies prerequisites — dispatches operator to check for alarms locally. PO determines reset from Ovation Controller Station on 2RP7 is NOT required. PO reports all SGFP trip signals clear, suction pressure >350, SPEED CONTROLLERs in MANUAL at 0%. PO selects 22 SGFP SPEED SETTER on MASTER SGFP SPEED CONTROLLER, opens 22TD24, verifies 22CN36 is open, confirms casing DT <40 F. PO depresses MODULATE RECIRC VALVE pushbutton — 22BF32 RECIRC is open. PO depresses TURBINE LATCH pushbutton — 22 SGFP is latched. PO places 22 SGFP SPEED CONTROLLER in AUTO, adjusts speed setpoint to 1100 rpm. PO slowly adjusts to 3960-3980 rpm, verifies differential pressure >50 psid. PO places BF19 or BF40 controllers to MANUAL at 0% demand, then adjusts demand to feed SGs. PO reports indications of main feed flow AND SG WR levels rising. (Critical Task #2) CRS returns to EOP-TRIP-2.</span></td>
</tr>
</table>

<div style="margin-top:12px;padding:10px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;">
<strong style="color:#22c55e;">Critical Tasks:</strong><br>
<span style="color:#c8cdd5;"><strong>CT#1 (CT-1):</strong> Trip the reactor prior to a transition to FRSM-1 being required. Safety significance: failure to manually trip the reactor when automatic trip has failed results in the reactor remaining at power with no forced cooling from the Main Turbine — constitutes failure to prevent a challenge to plant safety. Cues: valid reactor trip demand (Main Turbine trip) with reactor failing to auto trip. Measurable criteria: reactor trip breakers open and reactor confirmed shutdown before conditions require entry into EOP-FRSM-1.</span><br><br>
<span style="color:#c8cdd5;"><strong>CT#2 (CT-43):</strong> Establish main feedwater or condensate flow to SG(s) before Bleed and Feed is required. Safety significance: failure to restore feedwater results in a total loss of secondary heat sink requiring bleed and feed (opening PZR PORVs and initiating high-head SI for core heat removal via primary system). This significantly degrades the RCS fission product barrier and reduces safety margin. Cues: total loss of AFW flow with no pumps available, CFST RED path on Heat Sink, SG NR levels <9%, 22 SGFP available for prompt recovery. Measurable criteria: main feed flow established and SG Wide Range level rising in at least one SG before bleed and feed criteria are met.</span>
</div>

<div style="margin-top:12px;padding:10px;border-left:3px solid #60a5fa;background:rgba(96, 165, 250, 0.06);border-radius:0 4px 4px 0;">
<strong style="color:#60a5fa;">EOP Pathway:</strong><br>
<span style="color:#c8cdd5;">AB.PZR-0001 (PORV leak, isolate 2PR2) → AB.NIS-0001 (2N41 fails high, remove from service) → AB.CN-0001 (21 SGFP trip, manual turbine runback, load reduction to ~66%) → Main Turbine inadvertent trip, auto Rx trip fails → manual Rx trip → <span class="hi-exam">EOP-TRIP-1</span> (Reactor Trip or Safety Injection — no SI required) → <span class="hi-exam">EOP-TRIP-2</span> (Reactor Trip Response) → loss of 2B 4KV vital bus, loss of all AFW → CFST RED path Heat Sink → <span class="hi-exam">EOP-FRHS-1</span> (Response to Loss of Secondary Heat Sink — Prompt SGFP Recovery using 22 SGFP, feed SGs before bleed and feed) → return to <span class="hi-exam">EOP-TRIP-2</span></span>
</div>

<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">
Source: Modified / ESG-5 | 17-01 NRC-4 | <a href="/salem-study-system/exam-pdfs/2019-scenario-04.pdf" target="_blank" style="color:#60a5fa;">View Scenario PDF</a>
</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[Pressurizer & PRT]], [[Excore NIs]], [[Feed & Condensate]], [[AFW]], [[4KV]], [[RPS/SSPS]], [[Main Turbine]], [[Control Rod Drive]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[AB.CN-0001 — Condensate System Abnormality]], [[AB.4KV-0002 — Loss of 2B 4KV Vital Bus]]
- Related exam: [[2019 NRC Operating Exam]]
