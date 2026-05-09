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

### Step 19 — Immediate Actions for RTB Failure

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q49</div>
EOP-TRIP-1 Immediate Actions when RTBs fail to open (after Trip Switches AND Bezels actuated): <span class="hi-exam">NEXT action is open Breakers E 6D and G 6D</span> (MG set supply breakers), <span class="hi-exam">THEN actuate the TURBINE TRIP Switch</span>. <span class="hi-trap">Trap: Rod Insertion and Main Steam Isolation are also part of immediate actions but come AFTER opening MG set breakers and turbine trip. The sequence is: Trip Switches → Bezels → MG set breakers → Turbine Trip → Rod Insertion → MSLI.</span>
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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q32</div>
SBLOCA in EOP-TRIP-1: with RCS pressure at 1600 psig and one SI pump (11 SI) failed, starting that pump <span class="hi-exam">does NOT increase total ECCS injection flow</span> — RCS pressure (1600 psig) exceeds the <span class="hi-exam">SI pump shutoff head of <span class="val-trip">1520 psid</span></span>, so the pump cannot deliver against the RCS. Total ECCS flow remains at the existing 400 gpm (charging pump contribution).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q39</div>
SEC loading verification step in EOP-TRIP-1 (2-EOP-TRIP-1 p.1, rev 30): the PO verifies SEC loading after SI. With <span class="hi-exam">SEC BLOCK switches on 2RP1 inoperable</span>, equipment that did not auto-start cannot be started normally because the SEC inhibit cannot be removed. Workaround: <span class="hi-exam">deenergize the corresponding 115V Vital Instrument Bus (VIB)</span> that powers the train SEC — this clears the SEC inhibit and allows the affected pump/compressor to be started. To start 21 Charging Pump (B), 21 SI Pump (A), and #2 ECAC (C), all three VIBs (<span class="hi-exam">2AVIB24, 2BVIB27, 2CVIB9</span>) must be deenergized.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q98</div>
ATWS at 4% power (reactor fails to trip on 21 SG LO-LO Level): IAW EOP-TRIP-1, the crew will <span class="hi-exam">MANUALLY insert control rods</span> because at 4% power (turbine not online), automatic rod insertion will NOT exceed <span class="hi-exam">48 steps/minute</span> — the threshold in the basis document for allowing automatic insertion. Since the reactor is NOT tripped (all CR attempts failed), the crew will <span class="hi-exam">go to EOP-FRSM-1 (Response to Nuclear Power Generation)</span>. <span class="hi-trap">Trap: reactor power being less than 5% does NOT mean the reactor trip is confirmed — the TRIP-1 Step 2 criteria (power range NI <5%, IR dropping, IR startup rate negative) must ALL be met AT THE TIME the step is read by the NSS.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
EOP-TRIP-1 entered after reactor trip from 22 RCP seal failure (seal leakoff >6 gpm). No SI required initially — crew transitions to EOP-TRIP-2. After 24 SG tube rupture develops, crew manually initiates SI and <span class="hi-exam">re-enters EOP-TRIP-1</span>. During re-entry, <span class="hi-exam">24BF13 (FW isolation valve) failed to close</span> on SI/Phase A — PO manually closes from console. Then transitions to EOP-SGTR-1 when 24 SG NR level rising uncontrolled.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
EOP-TRIP-1 entered after LBLOCA during orderly unit shutdown. <span class="hi-exam">Both trains of SI fail to auto-actuate</span>; one keyswitch also fails to manually actuate. RO must use the other train keyswitch to initiate SI on both trains <span class="hi-exam">(CT#1: CT-2)</span>. During TRIP-1, <span class="hi-exam">2B SEC fails to actuate</span> — crew blocks, resets, and manually starts safeguards loads using Table A. Containment pressure >15 psig triggers Phase B and Spray actuation. Transitions to EOP-LOCA-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q65</div>
For a single faulted (unisolable) SG event with successful MSLI, the flow path after EOP-TRIP-1 is to <span class="hi-exam">EOP-LOSC-1</span>. <span class="hi-exam">SI is NOT reset in TRIP-1</span> — SI reset (and the subsequent Phase A reset) is part of LOSC-1 actions. SS94 (SG B/D Sample Valves) cannot be reopened in TRIP-1 because Phase A is still actuated; the reset sequence is performed in LOSC-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q74</div>
When an AOP (e.g., S2.OP-AB.STM-0001) calls for a reactor trip during AOP performance, the AOP is exited and EOP-TRIP-1 is entered (per OP-AA-101-111-1003 Step 4.4.1). After EOP-TRIP-1 actions are completed, <span class="hi-exam">the AOP entry conditions must be re-evaluated</span> — if still met, the <span class="hi-exam">AOP is re-entered from the beginning</span>, not from where it was left.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-d</div>
TRIP-1 was performed with a transition to FRHS-1, Loss of Secondary Heat Sink, made at <span class="hi-exam">Step 20.1</span> (procedure-directed transition from TRIP-1 to FRHS-1, before CFST monitoring at Step 30). Pre-trip event: MSLB at mixing bottle, auto SI, Main Turbine manually tripped, MSLI failed, all AFW lost.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
EOP-TRIP-1 entered after manual reactor trip and SI on uncontrolled rise in 21 SG NR/WR level (21 SGTR escalating from a tube leak). Key TRIP-1 verifications: 21 and 22CA330s shut, containment pressure remains &lt;15 psig, no high steam flow, all 4KV vital buses energized, RCS temp stable at/trending to <span class="hi-exam">547&deg;F</span>, RCS pressure &gt;1350 psig with seal injection to all RCPs, RTBs both open, PZR PORVs shut with Block valves open. PO maintains AFW flow ≥<span class="hi-exam">22E4 lbm/hr</span> until at least one SG NR level &gt;9%, then maintains 19-33%. PO reports NR or WR level rising in 21 SG → CRS transitions to EOP-SGTR-1. Note 21 AFW pump trips after SI; PO redistributes AFW from 22 (21/22 SGs) and 23 (all SGs) AFW pumps as needed. The CT to isolate 21 SG (CT-18) begins after the SGTR-1 transition.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
EOP-TRIP-1 entered after a manual reactor trip on a 21 SG steam leak in containment escalating to rupture. Auto MSLI fails on all 4 MSIVs (RP0279A/B), and auto SI fails (RP0274A/B); RO <span class="hi-exam">manually initiates SI</span>. With ALL SGs faulted, AFW flow is NOT isolated to any SG; PO maintains AFW flow ≥<span class="hi-exam">22E4 lbm/hr</span> until at least one SG NR level is &gt;15% (adverse), then 19-33%. <span class="hi-exam">21 AFW pump trips ~5 minutes after Rx trip</span>. Containment pressure rises &gt;15 psig; both Containment Spray pumps fail to auto-start on hi-hi pressure → <span class="hi-exam">CT#1 (CT-3): RO blocks 2A and 2C SECs, PO resets 2A and 2C SECs, RO manually starts 21 and 22 CS pumps</span> before a containment CSF red path challenge develops. CRS dispatches operators to place valves from Table D (locally close MSIVs) in safeguards position. PO reports all SG pressures dropping in uncontrolled manner / completely depressurized → CRS transitions to EOP-LOSC-1 (CFSTs in effect on transition out of TRIP-1; STA reports to control room 10 min after summon to monitor CFSTs).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
EOP-TRIP-1 entered as the immediate-action procedure when CRS directs reactor trip during a power reduction with rising main turbine bearing vibrations approaching trip criteria. <span class="hi-exam">Reactor will NOT trip — ATWT</span>. RO performs all CR trip attempts (Rx Trip Handles, RTBs, RDMG set breakers) — all fail. RO trips Main Turbine and ensures rod insertion (auto or manual). RO reports immediate actions complete. CRS confirms reactor will NOT trip and transitions to <span class="hi-exam">EOP-FRSM-1 (Response to Nuclear Power Generation)</span>. After EOP-FRSM-1 is completed (rods fully in / RTBs locally opened / SDM verified), the crew returns to procedure in effect (EOP-TRIP-1 past Immediate Actions or transition to EOP-TRIP-2).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
Two passes through EOP-TRIP-1. First entry: Rx trip on RCS Low Flow following loss of 2E 4KV Group Bus (loss of 22 RCP) — SI not actuated/required, so transition to EOP-TRIP-2. Second entry: re-entered when 21 SG tube leak escalates to rupture (~400 gpm). RO initiates SI on Train B and reports <span class="hi-exam">Train B SI did NOT initiate</span> (malfunction enabled because Train B initiated first); RO successfully initiates Train A SI. Immediate actions verified, all 4KV vital buses energized, SECs functional except <span class="hi-exam">2CV4 misaligned</span> (the failed letdown CIV from earlier event). RO closes charging mini flow valves with RCS &lt;1500 psig and BIT flow established, stops RCPs at 1350 psig with charging &ge;100 gpm via BIT. PO reports no faulted SGs; CRS transitions to <span class="hi-exam">EOP-SGTR-1</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
EOP-TRIP-1 entered after manual reactor trip and SI when a 150 gpm SBLOCA prevents PZR level from being maintained &gt;17%. <span class="hi-exam">CT#1 (CT-4) — establish at least 22E4 lbm/hr AFW flow before transition to FRHS-1 is required:</span> 21 and 22 AFW pumps fail to start because <span class="hi-exam">SEC loading is not complete on 2A and 2B vital buses</span>; 23 AFW pump starts but provides no flow. Crew blocks 2A/2B SECs and attempts reset — <span class="hi-exam">2A SEC will not reset</span>. CRS dispatches operator to deenergize 2A SEC; once deenergized, RO manually starts 22 AFW pump (and 21 AFW pump). <span class="hi-exam">CT#2 (CT-6) — establish flow from at least one charging/SI pump prior to transition out of TRIP-1:</span> safeguard valve verification reveals <span class="hi-exam">2SJ12 and 2SJ13 BIT isolation valves did not open</span>; RO manually opens 2SJ12 and 2SJ13 to establish BIT flow before transitioning out of TRIP-1. Other key TRIP-1 verifications: 21 and 22CA330s shut, containment pressure remains &lt;15 psig, no high steam flow, all 4KV vital buses energized, CAV in AP mode, RCS pressure &gt;1350 psig with seal injection to all RCPs, charging flow &ge;100 gpm on SI charging flow meter. Radiation monitor channels in Table F: 2 or more channels rising or in warning/alarm — CRS transitions to EOP-LOCA-1.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[ECCS]], [[Containment Spray]], [[Main Turbine]], [[CCW]]
- Related procedures: [[S2.OP-AR.ZZ-0004 — Alarm Response Procedure]], [[AB.CR-0001 — Control Room Evacuation]], [[EOP-TRIP-4 — Natural Circulation]], [[AB.CW-0001]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related EOPs: [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-APPX-1 — Component Cooling Water Restoration]]
- Related exam questions: [[2016 Q32]], [[2016 Q39]], [[2016 Q65]], [[2016 Q74]], [[2016 Q76]], [[2016 Q78]], [[2016 Q90]], [[2018 Q49]], [[2018 Q68]], [[2018 Q98]], [[2019 Q48]], [[2019 Q49]], [[2020 Q1]], [[2020 Q16]], [[2020 Q18]], [[2020 Q55]], [[2020 Q56]], [[2020 Q75]], [[2020 Q76]], [[2020 Q100]], [[2022 Q3]], [[2022 Q42]], [[2023 Q1]], [[2023 Q21]], [[2023 Q83]], [[2023 Q87]], [[2023 Q88]], [[2023 Q93]]
- Related JPMs: [[2018 JPM Sim-g]], [[2018 JPM Sim-h]], [[2022 JPM Sim-f]], [[2020 JPM Sim-e]], [[2016 JPM Sim-d]], [[2016 JPM Sim-e]], [[2016 JPM Sim-h]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2017 Scenario 7]], [[2017 Scenario 8]], [[2018 Scenario 1]], [[2018 Scenario 2]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2022 Scenario 4]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]]
- Related exam: [[2016 NRC Written Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2016 NRC Operating Exam]]
