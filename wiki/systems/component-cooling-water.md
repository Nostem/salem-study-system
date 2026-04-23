---
title: CCW
category: systems
status: draft
---

# CCW

## Function

Closed-loop cooling water system that provides an intermediate barrier between potentially radioactive systems and the service water system. Removes heat from various plant components and transfers it to the service water system. (UFSAR 9.2.2)

## Key Loads

- Reactor coolant pump thermal barriers and motor coolers
- Residual heat removal heat exchangers (shutdown cooling)
- Letdown heat exchanger (CVCS)
- Excess letdown heat exchanger
- Spent fuel pool heat exchangers
- Sample coolers
- Reactor support and nozzle cooling

## Key Components

- **Component cooling heat exchangers:** Cooled by service water
- **Component cooling pumps:** Circulate CCW through the closed loop
- **Component cooling surge tank:** Maintains system filled, accommodates thermal expansion

## Key Design Points

- Closed loop prevents direct contact between potentially radioactive fluids and service water
- Surge tank provides indication of system leakage (radioactivity monitoring on CCW)
- Loss of CCW to RCPs requires RCP trip to protect seals and thermal barrier (UFSAR 5.5.1.3.14)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q55</div>
CCW containment isolation signals: <span class="hi-exam">CC131 and CC190 (RCP Thermal Barrier CCW Isolation Valves) receive a Phase B signal to close, NOT Phase A</span>. <span class="hi-exam">CC113 and CC215 (Excess Letdown CCW Valves) receive a Phase A signal to close</span>. <span class="hi-trap">The thermal barrier CCW isolation (CC131/CC190) is Phase B, while excess letdown CCW isolation (CC113/CC215) is Phase A — do not confuse the isolation signal levels for these two different CCW flow paths through containment.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q5</div>
<span class="hi-exam">1CC190 (CCW Thermal Barrier Isolation Valve) is on the COMMON CCW return line</span> — closing it isolates thermal barrier return from <span class="hi-exam">ALL RCPs</span> (not just one). <span class="hi-trap">Individual RCP isolation valves are the CC130s (one per RCP).</span> RCPs may continue operating as long as charging flow is maintained for seal injection.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q8</div>
Per AB.CC-0001 Attachment 1, RCP motor bearing temperature limit requiring <span class="hi-exam">reactor trip and stopping the affected RCP is <span class="val-trip">175°F</span></span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q35</div>
Per AB.CC-0001 Attachment 1: CCW surge tank level low at <span class="hi-exam"><span class="val-trip">5%</span></span> requires <span class="hi-exam">reactor trip AND tripping all RCPs</span>. Per Attachment 2: also <span class="hi-exam">isolate letdown and swap charging pump suction to RWST</span>, then go to EOP-TRIP-1. <span class="hi-trap">17% is the low VCT level action — not the CCW surge tank trip limit. CCW surge tank trip level is 5%.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q36</div>
Two sources of <span class="hi-exam">RCS inleakage to CCW</span>: (1) <span class="hi-exam">Seal Water HX</span> and (2) <span class="hi-exam">RCP Thermal Barrier HX</span>. These are the only two CCW-cooled components where RCS pressure exceeds CCW pressure, allowing primary-to-CCW leakage. <span class="hi-trap">CCW HX leak = Service Water into CCW (not RCS). SFP HX leak = CCW out-leakage into SFP (CCW pressure > SFP). Regen HX is NOT cooled by CCW.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q4</div>
RCP Thermal Barrier rupture indications: <span class="hi-exam">CCW surge tank level rises</span> (RCS leaks OUT to CCW), <span class="hi-exam">R17A/B CCW radiation monitors rise</span> (detecting RCS activity in CCW), and <span class="hi-exam">CC131 (RCP Thermal Barrier Valve) closes</span> on high CCW flow to the thermal barrier. PZR level does NOT rise — RCS is leaking out, not in. Charging flow does NOT lower.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q34</div>
Thermal barrier HX leak diagnostic: the <span class="hi-exam">"Discharge Flow Lo" alarm on 2CC1 is the unique indicator of automatic 2CC131 (RCP Thermal Barrier Valve) closure</span>. CC HDR ACTIVITY HI + SURGE TANK LEVEL HI-LO + DISCHARGE FLOW LO = thermal barrier HX leak. The Discharge Flow Hi alarm fires first (high CCW flow from RCS in-leakage) triggering auto-closure of 2CC131, then DISCHARGE FLOW LO follows. <span class="hi-trap">Letdown HX and RHR HX are also high-pressure CCW in-leakage sources, but they would NOT cause the "Discharge Flow Lo" alarm. RHR HX is not in service at 100% power. Seal Water HX is NOT a high-pressure source — #1 seal leakoff pressure is below CCW pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q33</div>
<span class="hi-exam">SEC Mode 3 (SI + LOOP): all CCW pumps are tripped</span> — CCW pumps are NOT sequenced onto EDGs due to loading concerns. <span class="hi-exam">SW to CCW HXs is auto-isolated to prevent SW pump runout</span> with only 3 SW pumps available on emergency power. CCW pumps are started later per EOP-APPX-1 when needed for cold leg recirculation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
<span class="hi-exam">SW122 (SW Inlet Control Valve to CCW HX) fails OPEN on loss of air</span> (fails closed on loss of 125VDC). When SW122 fails open: increased SW flow through CCW HX → CCW temperature lowers → RHR HX outlet temperature lowers → <span class="hi-exam">RCS cooldown rate rises</span>. Per AB.CA-0001, SW122 can be manually operated.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q35</div>
SEC Mode III (Blackout + SI): CCW pumps are <span class="hi-exam">stripped and NOT reloaded</span>. Additionally, <span class="hi-exam">a pump selected for AUTO is transferred to Manual</span> during Modes II, III, and VI. After successful SEC loading: all CCW pumps stopped, all in Manual. <span class="hi-trap">Trap: Mode II (Blackout only) DOES restart CCW pumps. Mode I (SI only) retains AUTO selection. Only Modes II, III, and VI force AUTO to Manual.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q76</div>
Following MODE III (LBLOCA + LOOP), CCW restoration per EOP-APPX-1: <span class="hi-exam">the CCW pump to start is chosen based on which EDG has adequate margin from out-of-service equipment</span>. With 21 AFW Pump out of service, <span class="hi-exam">2A EDG has margin → start 21 CCW Pump</span>. With 22 CFCU out of service, 2B EDG does NOT have adequate margin for 22 CCW Pump. <span class="hi-exam">Both CCW HXs are placed in service</span> because at least three SW pumps are running.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q78</div>
Per AB.CC-0001 Attachment 1, three time-critical actions for RCP protection on loss of CCW:<br>
1. <span class="hi-exam">Motor bearing temperature reaches <span class="val-trip">175°F</span> → stop RCPs</span><br>
2. CCW Surge Tank Level cannot be maintained > <span class="val-trip">38%</span> → immediately stop RCPs<br>
3. <span class="hi-exam">5 minutes after "RCP BRG CLG WTR FLO LO" alarm (OHAs D-20 through D-23) → stop RCPs</span><br>
<span class="hi-trap">Trap: 2 minutes was previously the time to stop RCPs if BOTH seal injection and thermal barrier flow were lost concurrently — does not apply if only CCW is lost (seal injection still available from charging).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q5</div>
SEC Mode III (SI + LOOP): <span class="hi-exam">CCW pumps are NOT automatically reloaded</span> by the SECs. After SEC Mode III loading completes, CCW pumps remain stopped. CCW cools ECCS components (RHR Pumps, RHR HX, SI Pumps), but this is not sufficient to cause the SECs to auto-start CCW due to EDG loading limitations.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q55</div>
CC131 (RCP Thermal Barrier Valve) auto-closure setpoints: <span class="hi-exam">CC131 automatically CLOSES when CCW flow from the RCP Thermal Barrier reaches <span class="val-trip">175 gpm</span></span>. The lo flow alarm setpoint of CC131 is <span class="val-alarm">145 gpm</span> (fires after CC131 closes and flow drops below 145 gpm). Per AB.RCP-0001 CAS: with only thermal barrier CCW flow lost and RCP injection flow normal, <span class="hi-exam">the crew is NOT required to secure ALL RCPs within 2 minutes</span>. <span class="hi-trap">Trap: 145 gpm is the CC131 lo flow alarm setpoint, NOT the auto-closure setpoint. Auto-closure is at 175 gpm (hi flow). The 2-minute RCP trip criterion requires BOTH seal injection AND thermal barrier CCW lost concurrently.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q8</div>
<span class="hi-exam">2CC149 (CCW Surge Tank Vent Valve) automatically CLOSES on high radiation alarm from 2R17A/B</span> (Component Cooling Process Monitors). 2CC149 is normally OPEN. Per AB.CC-0001 Step 3.8 NOTE: <span class="hi-exam">allowing CCW Surge Tank to overflow will contaminate the in-service Waste Holdup Tank AND the 22 ABV Exhaust Filter Unit</span>. <span class="hi-trap">Trap: the 22 ABV Exhaust Filter Unit contamination is easily missed — the overflow affects two components, not just the Waste Holdup Tank.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.3 requires two independent CCW loops OPERABLE in Modes 1–4
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q59</div>
SFP Heat Exchanger tube rupture: components supplied by CCW with pressure less than CCW header pressure are sources for system-to-system out leakage. <span class="hi-exam">A tube rupture in the SFP HX results in CCW leaking OUT into the SFP system</span> — CCW Surge Tank level lowers, SFP level rises. Non-borated CCW reduces SFP boron concentration, requiring addition of borated water. SFP alarms: low level <span class="val-alarm">128' 2"</span>, high level <span class="val-alarm">129' 2"</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-h</div>
CCW leak inside containment per S2.OP-AB.CC-0001 (alternate path JPM): initial CCW leak causes <span class="hi-exam">OHA C-2 CNTMT SUMP PMP START</span> and <span class="hi-exam">CCW Surge Tank Level Hi-Lo</span> console alarm. Operator initiates makeup via <span class="hi-exam">2DR107</span>. After isolating Excess Letdown HX valves (2CV132, 2CC215, 2CC113), leak worsens beyond makeup capacity — Attachment 2 directs <span class="hi-exam">reactor trip, stop ALL RCPs, and close CCW containment isolation valves</span> (2CC131, 2CC136, 2CC190). <span class="hi-exam">Step 3.24 is the decision point: Surge Tank level cannot be maintained >5% with makeup in progress.</span>
</div>

## Connections

- Related exam questions: [[2019 Q5]], [[2019 Q8]], [[2019 Q55]], [[2020 Q34]], [[2020 Q35]], [[2020 Q55]], [[2020 Q76]], [[2020 Q78]], [[2023 Q4]], [[2023 Q33]], [[2023 Q51]], [[2023 Q59]], [[2022 Q5]], [[2022 Q8]], [[2022 Q35]], [[2022 Q36]]
- Related JPMs: [[2019 JPM Sim-h]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2019 NRC Operating Exam]]
