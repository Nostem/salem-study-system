---
title: "EOP-TRIP-1 — Reactor Trip or Safety Injection"
category: eops
status: draft
aliases:
  - EOP-TRIP-1
  - reactor trip or safety injection
---

# EOP-TRIP-1 — Reactor Trip or Safety Injection

## Purpose

Entry procedure for reactor trip or safety injection events. Provides immediate operator actions and diagnostic steps following a reactor trip, including verification of safeguard valve alignment and containment spray actuation status.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q49</div>
EOP-TRIP-1 Step 1 Immediate Actions — manual reactor trip sequence (performed from memory, in order): <span class="hi-exam">FIRST actuate the Reactor Trip Switches (Pistol Grips)</span>, then the Trip Breaker BEZELS. If both fail, <span class="hi-exam">open Breakers E 6D and G 6D</span> (MG set supply breakers). <span class="hi-trap">Trap: the Pistol Grips are FIRST, not the Bezels. The Bezels are the second option. Step 2.2 (Rod Insertion) is a subsequent immediate action, not the next step after trip failure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q1</div>
Referenced for entry on manual reactor trip. Step 12 covers Safeguard Valve Alignment.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q21</div>
Used to assess containment spray actuation status.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q83</div>
Per AB.CR-0001, <span class="hi-exam">EOPs (including EOP-TRIP-1) are NOT applicable</span> during Control Room Evacuation — they should be used for information only or as directed by the TSC.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS directs <span class="hi-exam">actuate SI and return to EOP-TRIP-1</span> when PZR level cannot be maintained > 4% or subcooling reaches 0 degrees F. This is the correct transition — TRIP-4 does NOT direct entry into EOP-LOCA-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q93</div>
Entry from CW malfunction: per AB.CW-0001, with <span class="hi-exam">4 or more circulators out of service at &ge;P-10 power</span>, trip the reactor and enter EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q55</div>
Safeguard valve verification — Phase A isolation: <span class="hi-exam">CC113 and CC215 (Excess Letdown Component Cooling Valves) receive a Phase A signal to close</span>. When verifying safeguards positions: CV2/CV277 (Letdown) do NOT close on Phase A (low PZR level only); CC131/CC190 (RCP Thermal Barrier) close on Phase B, not Phase A; BF13s close on Feedwater Isolation Signal, not Phase A.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q3</div>
Step 12, Safeguard Valve Alignment: check <span class="hi-exam">2CC1 SAFEGUARDS ACTUATION Bezels — Red light LIT = train actuated, OUT = failed</span>. On 2RP4, lights OUT = component failed to reposition. If any safeguards valve not in required position, <span class="hi-exam">place valves in safeguards position manually</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q42</div>
CS pump manual start requires <span class="hi-exam">SECs to be blocked/reset first</span>. The SEC load sequencer overrides manual keyswitch control.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-f</div>
Step 9 — CNMT Spray/Phase B actuation during LBLOCA: containment pressure NOT < <span class="hi-exam">15 psig</span> → manually initiate Phase B and Spray using safeguards key switches on 2CC1. Alternate path: Phase B valves (<span class="hi-exam">2CC131, 2CC190</span>) fail to auto-close and NaOH valves (<span class="hi-exam">2CS16, 2CS17</span>) fail to auto-open on CS signal. Per Step 9.e, manually reposition valves to safeguards positions.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Manual reactor trip from AB.RCP-0001 (23 RCP motor bearing temp > <span class="hi-exam">175 degF</span>). During TRIP-1 immediate actions, main turbine fails to auto trip AND fails to manually trip (pistol grip and console pushbutton). MSLI fails to auto actuate. <span class="hi-exam">CT#1 (CT-12): RO manually initiates MSLI using Fast Close pushbuttons on 2CC2</span> before Red path to subcriticality or integrity CFST. Auto SI actuates (trips both SGFPs). 23 AFP fails to auto start — PO manually starts. Subsequently 22 AFP trips on overcurrent, 23 AFP trips on overspeed → loss of all AFW → CFST Heat Sink Red Path → transition to EOP-FRHS-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q100</div>
<span class="hi-exam">Step 20 of EOP-TRIP-1 specifically directs implementation of EOP-FRHS-1</span> when aux feed flow cannot be established. This is a procedure-directed transition that occurs BEFORE CFST monitoring begins at Step 30. <span class="hi-trap">Trap: do not wait for CFST monitoring (Step 30) to transition to FRHS-1 — EOP-TRIP-1 has a specific earlier step (Step 20) that directs the transition when all AFW is lost. Similarly, EOP-FRSM-1 has a specific transition before Step 30.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
LBLOCA with <span class="hi-exam">auto SI failure on both trains</span> (CT#1, CT-2): crew must manually actuate SI on at least one train before transition out of TRIP-1. Also, <span class="hi-exam">22 RHR pump fails to start on SEC signal</span> (CT#2, CT-5) — PO blocks and resets 2B SEC, RO manually starts 22 RHR. CAS actions: stop RCPs at &lt;<span class="val-trip">1350 psig</span>, close charging mini-flows at &lt;<span class="val-trip">1500 psig</span>. Transition to EOP-LOCA-1 based on containment pressure &gt;4 psig.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
Entered following manual reactor trip and SI on 23 SG tube rupture (650 gpm exceeding makeup). During TRIP-1 immediate actions: PO throttles AFW to no less than <span class="hi-exam">22E4 lbm/hr</span>. PO identifies <span class="hi-exam">21 CFCU failed to start on SEC — blocks 2A SEC, resets, manually starts 21 CFCU in LOW speed</span>. Feed side of ruptured SG isolated during TRIP-1 (23AF21, 23AF11 closed). Transition to SGTR-1 when 23 SG NR level rising uncontrolled. Note: 2PR7 PORV block valve already closed from earlier PORV leakage event — only 2PR6 block valve open.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
Entered on LOOP with automatic reactor trip. Immediate actions completed — all 4KV Vital Buses found de-energized. Crew transitions to <span class="hi-exam">EOP-LOPA-1</span> based on all three vital buses de-energized.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #2</div>
Entered following manual Rx trip on RCS leak. <span class="hi-exam">Auto SI fails on both trains — RO manually actuates SI (CT-2)</span>. 22 RHR pump fails to start on SEC signal (21 RHR C/T) — PO blocks and resets 2B SEC, <span class="hi-exam">RO manually starts 22 RHR pump (CT-5)</span>. CAS actions: stop RCPs at &lt;<span class="val-trip">1350 psig</span>, close charging mini-flows at &lt;<span class="val-trip">1500 psig</span>. Containment pressure &gt;15 psig — Phase B and Spray auto-initiate, MSLI auto-initiates. Transition to EOP-LOCA-1 based on containment pressure &gt;4 psig.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
ATWS — reactor fails to auto trip on 21 SG LVL LO-LO. <span class="hi-exam">RO trips reactor by opening both M-G set breakers 2E6D and 2G6D (CT-1)</span>. Auto SI actuates on containment pressure high. 21 SG faulted (large oscillating feed flow, no steam flow). RO manually initiates MSLI. <span class="hi-exam">21BF13 fails to close — PO manually closes</span>. Both RTBs fail to open — CRS directs WCC to locally open. Transition to EOP-LOSC-1 on 21 SG depressurizing in uncontrolled manner.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q76</div>
Step 17, CCW Pump Operation Evaluation: during MODE III (LBLOCA + LOOP), <span class="hi-exam">directs implementation of EOP-APPX-1 to start one CCW pump</span>. Also directs S2.OP-SO.CC-0002(Q) for CCW HX operation, but that transition is only valid if ≥2 CCW pumps are in service and HXs are not in Auto. <span class="hi-trap">During MODE III SEC loading, no CCW pumps are running — so EOP-APPX-1 is the correct implementation, not SO.CC-0001 or SO.CC-0002.</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[ECCS]], [[Containment Spray]], [[Main Turbine]], [[CCW]]
- Related procedures: [[S2.OP-AR.ZZ-0004 — Alarm Response Procedure]], [[AB.CR-0001 — Control Room Evacuation]], [[EOP-TRIP-4 — Natural Circulation]], [[AB.CW-0001]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related EOPs: [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-APPX-1 — Component Cooling Water Restoration]]
- Related exam questions: [[2019 Q48]], [[2019 Q49]], [[2020 Q1]], [[2020 Q16]], [[2020 Q18]], [[2020 Q55]], [[2020 Q56]], [[2020 Q75]], [[2020 Q76]], [[2020 Q100]], [[2022 Q3]], [[2022 Q42]], [[2023 Q1]], [[2023 Q21]], [[2023 Q83]], [[2023 Q87]], [[2023 Q88]], [[2023 Q93]]
- Related JPMs: [[2022 JPM Sim-f]], [[2020 JPM Sim-e]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2022 Scenario 4]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
