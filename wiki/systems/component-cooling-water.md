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
<div class="callout-label">Exam — 2018 Q7</div>
<span class="hi-exam">2CC149 (CCW Surge Tank Vent Valve) automatically CLOSES on high radiation alarm from 2R17A/B</span> (Component Cooling Process Monitors). 2CC149 is normally OPEN. Per AB.CC-0001 Step 3.8 NOTE: <span class="hi-exam">allowing CCW Surge Tank to overflow will contaminate the in-service Waste Holdup Tank AND the 22 ABV Exhaust Filter Unit</span>. <span class="hi-trap">Trap: the 22 ABV Exhaust Filter Unit contamination is easily missed — the overflow affects two components, not just the Waste Holdup Tank.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q8</div>
Confirms 2018 Q7: <span class="hi-exam">2CC149 auto-closes on 2R17A/B high radiation alarm</span>. CCW Surge Tank overflow contaminates both the in-service Waste Holdup Tank and the 22 ABV Exhaust Filter Unit.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q38</div>
2CC149 (CCW Surge Tank Vent Valve) is <span class="hi-exam">normally OPEN and fails SHUT on a total loss of air (and on loss of control power)</span>. It auto-shuts on high radiation from 2R17A and is automatic (AU) in <span class="hi-exam">ALL Modes of operation</span>. <span class="hi-trap">It does not fail open.</span>
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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q54</div>
CCW leak location via chemistry: per AB.CC-0001, any inleakage dilutes CCW chromates. The discriminator for <span class="hi-exam">Service Water inleakage is rising chloride concentration</span>. Rising chlorides + lowering chromates + rising surge tank level = <span class="hi-exam">CC Heat Exchanger leak</span> (the interface between CCW and SW). Other CCW inleakage sources (Seal Water HX, Letdown HX, Charging Pump) also dilute chromates but do NOT increase chlorides because they do not interface with SW.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-h</div>
Start a CCW pump IAW EOP-APPX-1 during large break LOCA with loss of offsite power. <span class="hi-exam">2B 4KV Vital Bus de-energized</span> (Bus Differential, Diesel running). No CCW pumps running (SEC Mode 3). Step 3 strategy selection: de-energized bus = B → CCW pumps available = 21 or 23 → <span class="hi-exam">Strategy C → GO TO Step 6</span>. <span class="hi-exam">21 CCW pump fails to start</span> (override): take RNO, reset CS, restart 21 CS pump, proceed to Step 6h. Successfully <span class="hi-exam">start 23 CCW pump on 2C bus</span>. Requires SEC Block, Emergency Loading Reset, stopping CS pump to make room on SEC-loaded bus, then restarting CS after CCW starts.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q10</div>
On an SI signal, <span class="hi-exam">2CC215 and 2CC113 (Excess Letdown HX CCW isolation valves) receive a Phase A close signal</span> — they are Containment Phase A isolation valves. The purpose of closing Phase A isolation valves is to <span class="hi-exam">ensure all non-essential containment penetrations are isolated</span> on an SI signal. <span class="hi-trap">RCP CCW continues to be supplied until a Phase B signal at <span class="val-trip">15 psig</span> in containment — Phase A does NOT isolate ALL CCW supply/return from containment.</span> <span class="hi-trap">21 and 22CC16 (RHR HX CCW isolation valves) do NOT receive an automatic open signal on SI — they only open when the ARM PB is depressed AND RWST level reaches 15.2 ft. RHR pumps are cooled by either flow through the pump from RWST (LBLOCA) or recirc flow (SBLOCA until pp is S/D), not by automatic CC16 alignment.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q6</div>
On an SI from a LOCA, the automatic CCW response is that <span class="hi-exam">2CC215 and 2CC113 (Excess Letdown HX CCW isolation valves) receive a close signal as Containment Phase A isolation valves</span> — to ensure all non-essential containment penetrations are isolated. <span class="hi-trap">ALL CCW supply/return is NOT isolated on SI — RCP CCW continues until the Phase B signal at 15 psig.</span> <span class="hi-trap">The RHR HX CCW isolation valves (CC16s) do NOT receive an automatic open signal on SI — they open only when the ARM PB is depressed AND RWST level is 15.2 ft (manual ECCS realignment to CLR).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q5</div>
With NO CCW pumps running during EOP-LOCA-3 cold leg recirculation transfer, <span class="hi-exam">single-train recirculation</span> is the directed flowpath (LOCA-3 step 11.2 → step 124). CCW is required for ECCS pump cooling — losing CCW restricts recirculation to one train. <span class="hi-trap">There is no provision in LOCA-3 to transition to APPX-1 (CCW Restoration) or LOCA-5 (Loss of Emergency Coolant Recirculation) for a no-CCW condition during the recirc transfer.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q35</div>
Normal CCW system alignment: <span class="hi-exam">2 CCW pumps running in MANUAL, and one CCW pump in AUTO and stopped</span>. The pump selected to AUTO will <span class="hi-exam">auto-start when either 21 or 22 CCW header pressure lowers to <span class="val-alarm">70 psig</span></span>. <span class="hi-trap">There is NO interlock based on CCW pump 4KV breaker positions (other systems do have a breaker anticipatory function — CCW does not). On a CCW pump trip, AB.CC-0001 could be entered but no actions are required other than ensuring the backup pump started.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
On total Loss of All SW, AB.SW-0005 Step 3.9 directs <span class="hi-exam">place CCW pumps in MANUAL and reduce operating CCW pumps to one</span>. Rationale: with no SW available to cool the CCW heat exchangers, CCW heat removal capability is gone. Tripping the reactor and stopping all RCPs reduces heat input to CCW; reducing to a single running CCW pump minimizes heat addition from the running pumps themselves and allows heat-up of the limited CCW inventory to be tracked. <span class="hi-exam">2CC131 (RCP THERMAL BARRIER) is placed in MANUAL</span> as part of this sequence.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q37</div>
The Excess Letdown HX CC isolation valves <span class="hi-exam">2CC113 (outlet) and 2CC215 (inlet) fail closed on loss of air or power</span>. A 2CC215 air-supply break (air vented) shuts the valve, stopping CC cooling flow to the Excess Letdown HX, so <span class="hi-exam">excess letdown temperature and pressure both rise</span>; operators secure excess letdown to prevent lifting the seal return relief. See [[CVCS]], [[Control Air]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q86</div>
On a rising CC Surge Tank level with the WHUT being processed by Portable Liquid Radwaste: <span class="hi-trap">the 2CC149 CC SURGE TANK VENT VLV auto-closes on HIGH RADIATION (not high pressure)</span>; if level keeps rising, overflow goes to the Waste Holdup System and contaminates the WHUT with chromates. Per AB.CC-0001 / ARP, <span class="hi-exam">WHUT processing is stopped and the Surge Tank is locally drained (to a 55-gallon drum)</span> to keep level &lt;100%. See [[Waste Liquid]], [[AB.CC-0001 — Loss of Component Cooling Water]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-g</div>
Loss of CCW alternate path: 22 CCW pump trips, the standby (23) CCW pump <span class="hi-exam">fails to auto-start and cannot be manually started</span>, then 21 CCW pump trips <span class="hi-exam">1 minute 30 seconds later</span> — a <span class="hi-exam">TOTAL LOSS of Component Cooling Water to all RCPs</span>. OHA D20-D23 (21/22/23/24 RCP BRG CLG WTR FLO LO) directs GO TO AB.RCP-0001 if RCP Motor Bearing Temperature reaches <span class="val-trip">175°F</span> or CCW flow cannot be established within 5 minutes with temps trending up (bearing temps peak near ~157°F here). On total loss, AB.CC-0001 / AB.RCP-0001 "Stopping Reactor Coolant Pumps" directs: trip the reactor, stop 21-24 RCPs, and — because letdown CCW is lost — <span class="hi-exam">close 2CV2 AND 2CV277 (isolate letdown), open 2SJ1 AND 2SJ2 (swap charging suction to RWST), close 2CV40 AND 2CV41 (isolate VCT)</span>, then GO TO EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q5</div>
An RCP thermal barrier rupture causes RCS to in-leak into the CCW thermal barrier path — seen as a momentary RCP Thermal Barrier DISCHARGE FLOW HI alarm (2CC131 auto shuts on high flow) and rising activity on the <span class="hi-exam">CCW surge tank rad monitors 2R17A/2R17B</span>. <span class="hi-trap">The CC surge tank level RISES (RCS in-leakage), not lowers.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q9</div>
Locating a CCW leak (AB.CC-0001 Attachment 4): if surge tank level keeps lowering with <span class="hi-exam">EITHER CC header in service</span>, the leak is on the <span class="hi-exam">Non-Safeguards header (fed from both CC headers)</span>. The leaking component is the <span class="hi-exam">Spent Fuel Pool HX</span> (SFP cooling pressure &lt; CCW pressure, so leakage is out of CCW). <span class="hi-trap">The Boric Acid Evaporator Distillate Cooler HX is on the non-safeguards header but not normally in service; the 22 CCW HX and 23 Charging pump seal HX are on the safeguards header.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q30</div>
CCW pump bus power supplies: <span class="hi-exam">23 CCW pump is powered from the 2C 4KV vital bus</span>. With 21 CCW pump out of service, a 2C bus lockout removes CCW flow to the RCP bearings, annunciating OHA D20-23 (RCP BRG CLG WTR FLO LO) — requires entry into [[AB.RCP-0001 — RCP Abnormality]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q31</div>
The CCW supply to the RCPs is a single line feeding both <span class="hi-exam">bearing cooling and thermal-barrier cooling</span>. The thermal-barrier CCW has a separate return line isolated by <span class="hi-exam">2CC190 (RCP THERM BAR CC OUTLET V, inside containment)</span> and <span class="hi-exam">2CC131 (outside containment)</span>. Thermal-barrier CCW only cools reactor coolant rising through the thermal barrier upon a loss of seal injection. <span class="hi-trap">With normal seal injection, 2CC190 failing shut does NOT affect RCP temperatures.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q37</div>
TSAS 3.7.3 requires <span class="hi-exam">2 independent loops of CCW</span>; per the bases, having 2 operable loops requires <span class="hi-exam">ALL 3 CCW pumps operable</span> (plus HXs, valves, etc.). The <span class="hi-exam">23 CCW pump is a BLACKOUT load, NOT an ACCIDENT load</span>. On a 2C bus undervoltage / SEC Mode II, 23 CCW does not start; the SEC also <span class="hi-exam">locks out the AUTO/MAN function of the CCW pump start circuitry</span>, so 23 CCW being in MANUAL has no effect. All 3 pumps remain operable → TSAS 3.7.3 is NOT entered.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q93</div>
Distractor trap: a single <span class="hi-exam">21 CCW pump trip does NOT make both loops of CCW inoperable</span>, so entering TS 3.0.3 "because all redundant equipment in the CCW system is not available" is wrong. (The tested action was the concurrent tripped EDG fuel oil transfer pump → TS 3.8.1.1.b.2; see [[Diesel Generators]] and [[TS 3/4.8 — Electrical]].)
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #1</div>
23 CCW pump trips and the standby CCW pump <span class="hi-exam">fails to auto-start</span>. The crew <span class="hi-exam">manually starts 22 CCW pump</span> to restore system pressure, clearing all CCW and RCP system alarms, validates that alarms received were consistent with low CCW system pressure, and verifies RCP CCW-cooled parameters. CRS enters the appropriate Tech Spec. See [[2014 Scenario 1]], [[AB.CC-0001 — Loss of Component Cooling Water]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-h</div>
Starting a CCW pump after a LOCA + LOOP (all vital buses on EDGs, no CCW running) IAW EOP-APPX-1. Before starting a CCW pump, the SEC fans and CCW-cooled loads must be aligned to the pump's load capacity: <span class="hi-exam">BLOCK and RESET the associated SECs (2B/2C for 22 CCW pump; 2A/2B for 21 CCW pump)</span>, swap switchgear room supply fans, and shed CFCUs / Aux Bldg exhaust fans at CC1. <span class="hi-exam">Alternate path: the 22 CCW pump fails to start, so the RNO restarts a CFCU and transfers to Step 5 to start the 21 CCW pump.</span> Placing 21 and 22 CCW Heat Exchangers in service (Step 6) requires <span class="hi-exam">at least 3 SW pumps running</span>.
</div>

## Connections

- Related exam questions: [[2014 Q5]], [[2014 Q9]], [[2014 Q30]], [[2014 Q31]], [[2014 Q37]], [[2015 Q16]], [[2016 Q5]], [[2016 Q10]], [[2016 Q27]], [[2016 Q35]], [[2018 Q7]], [[2018 Q54]], [[2019 Q5]], [[2019 Q8]], [[2019 Q55]], [[2020 Q34]], [[2020 Q35]], [[2020 Q55]], [[2020 Q76]], [[2020 Q78]], [[2023 Q4]], [[2023 Q33]], [[2023 Q51]], [[2023 Q59]], [[2022 Q5]], [[2022 Q8]], [[2022 Q35]], [[2022 Q36]], [[2015 Q37]], [[2015 Q86]], [[2014 Q16]], [[2014 Q83]], [[2014 Q93]], [[2012 Q12]], [[2012 Q26]], [[2012 Q38]]
- Related JPMs: [[2016 JPM Sim-e]], [[2018 JPM Sim-h]], [[2019 JPM Sim-h]], [[2015 JPM Sim-g]], [[2014 JPM Sim-h]]
- Related scenarios: [[2018 Scenario 1]], [[2015 Scenario 4]], [[2014 Scenario 1]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]]
