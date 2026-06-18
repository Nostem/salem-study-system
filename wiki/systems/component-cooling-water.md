---
title: CCW
category: systems
status: draft
---

# CCW

## Function & Design Basis

73 active system K/As (catalog system 008). The Component Cooling System (CCS/CCW) is an independent, closed-loop intermediate cooling system — one provided for each unit (UFSAR §9.2.2). It is designed to remove residual and sensible heat from the Reactor Coolant System (RCS) via the Residual Heat Removal (RHR) System during plant shutdown, cool the spent fuel pool water and the letdown flow to the CVCS during power operation, and provide cooling to dissipate waste heat from various primary plant components (UFSAR §9.2.2.1). The system design is based on a maximum service water supply temperature of <span class="hi">90°F</span> (UFSAR §9.2.2.1).

Because heat is transferred from the component cooling water to the service water, CCW serves as an intermediate system between the RCS and the SWS, ensuring any leakage of radioactive fluid from the components being cooled is contained within the plant (UFSAR §9.2.2.3). The surge tank accommodates expansion, contraction, and in-leakage of water and ensures a continuous component cooling water supply until a leaking cooling line can be isolated (UFSAR §9.2.2.3).

The CCW System is classified as an Engineered Safeguards System, since it is required for post-accident decay heat removal (UFSAR §9.2.2.3). It is designed to meet the single active or passive failure criteria: two mechanical safety trains are provided, each capable of satisfying the system safety function when operated independently, and any single active or passive failure in the system will not prevent the system from performing its design function (UFSAR §9.2.2.1, §9.2.2.3). Active system components vital to the cooling function are redundant (UFSAR §9.2.2.1).

Water chemistry control is accomplished by chemical additions to the surge tank and by addition of demineralized water to the system through two lines connected to the suction header of the pumps; component cooling water contains a corrosion inhibitor to protect the carbon steel (UFSAR §9.2.2.2, §9.2.2.3).

## Key Components

- **Component cooling heat exchangers:** Two per unit. Unit 1 has one tube-and-shell-type and one plate-type; Unit 2 has two tube-and-shell-type heat exchangers (UFSAR §9.2.2.4.1, Table 9.2-4). Service water circulates through the cold side while component cooling water circulates through the hot side. Each is designed to remove one-half of the heat load occurring 20 hours after plant shutdown, and one-half of the maximum heat removal load when the RHR System is first placed in operation during cooldown; one exchanger provides 100 percent standby capacity at full power (UFSAR §9.2.2.4.1). Shell-and-tube type design heat transfer is <span class="hi">44.2 x 10⁶ Btu/hr</span> with a shell-side design inlet/outlet temperature of <span class="hi">113.0°F</span>/<span class="hi">100.0°F</span> (CCW side) and a tube-side (SW side) inlet/outlet of <span class="hi">90°F</span>/<span class="hi">99.3°F</span>; SW-side tube material is titanium (UFSAR Table 9.2-4).
- **Component cooling pumps:** Three per unit, horizontal centrifugal, of standard commercial construction; motors receive power from the 4160 V vital buses (UFSAR §9.2.2.4.2). Rated capacity (design point) <span class="val-normal">4600 gpm</span> at <span class="hi">200 ft H₂O</span> rated head; design pressure <span class="hi">150 psig</span>, design temperature <span class="hi">200°F</span>, available NPSH <span class="hi">25 ft</span>; material carbon steel (UFSAR Table 9.2-4).
- **Component cooling surge tank:** One per unit, horizontal with an internal baffle (divider plate) creating two separate surge volumes; total volume <span class="hi">2000 gal</span>, normal water volume <span class="hi">1000 gal</span>, internal design pressure <span class="hi">100 psig</span> (UFSAR §9.2.2.4.3, Table 9.2-4). Connected to the suction side of the pumps; makeup water is supplied to the loop near the surge tank (UFSAR §9.2.2.3). The two-section arrangement provides redundancy for a passive failure during recirculation following a LOCA (UFSAR §9.2.2.4.3). Located on elevation 120 ft in the Auxiliary Building (UFSAR §9.2.2.3).
- **Valves:** Self-actuated spring-loaded relief valves are provided for lines and components that could be pressurized to their design pressure by improper operation or malfunction; special leakage-prevention features are not provided since CCW is not normally radioactive (UFSAR §9.2.2.4.4).
- **Piping:** Carbon steel (or substitutable chrome alloy material) with welded joints and connections except where component removal for maintenance is required; carbon steel is acceptable because the coolant contains a corrosion inhibitor (UFSAR §9.2.2.4.5).

Pumps and heat exchangers are installed in two separate rooms on elevation 84 ft in the Auxiliary Building (UFSAR §9.2.2.3).

## Power Supplies

Power is supplied to each of the three component cooling pumps from separate 4160 V vital buses, normally supplied from separate diesel generators in the event of loss of offsite power (UFSAR §9.2.2.5.1). Upon power failure coincident with a LOCA, the component cooling pumps are manually loaded onto the vital buses; during a LOCA not coincident with loss of offsite power, the diesels start but are not loaded and power to the component cooling water pumps is not interrupted (UFSAR §9.2.2.5.1). The containment-isolation motor-operated valves are 230 V ac and are separated among the three vital 230 V ac buses; the CVCS seal-leakoff CV104 valves are 125 V dc solenoid-operated (UFSAR §9.2.2.8.5).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q30</div>
CCW pump bus power supplies: <span class="hi-exam">23 CCW pump is powered from the 2C 4KV vital bus</span>. With 21 CCW pump out of service, a 2C bus lockout removes CCW flow to the RCP bearings, annunciating OHA D20-23 (RCP BRG CLG WTR FLO LO) — requires entry into [[AB.RCP-0001 — RCP Abnormality]].
</div>

## Automatic Features & Setpoints

The portion of CCW inside containment can be isolated following a LOCA (UFSAR §9.2.2.7). The lines to and from the excess letdown heat exchanger are isolated on Phase A isolation, and the lines to and from the reactor coolant pumps are isolated on Phase B (UFSAR §9.2.2.7). One-half of the component cooling (containment isolation) valves close on a containment isolation (Phase B) signal from protection Train A and the other half on the same signal from Train B; the CVCS valves close on Phase A signals from their respective protection trains, and a design basis LOCA results in closure of all valves to comply with containment isolation criteria (UFSAR §9.2.2.8.5).

Radiation monitors on the component cooling heat exchanger discharge lines actuate alarms and automatically close the surge tank vent valve when the radiation level reaches a preset level above normal background (UFSAR §9.2.2.3, §9.2.2.4.3). Normally the surge tank is open to atmosphere, but if high radiation is detected in the recirculating system the vent line is automatically closed (UFSAR §9.2.2.4.3).

The reactor coolant pump bearing temperature alarm is set at <span class="val-alarm">175°F</span>; the operator immediately executes the trip procedure upon receipt of this alarm (UFSAR §9.2.2.8.1). Bearing testing established a maximum test temperature of <span class="hi">185°F</span> (also the suggested alarm setpoint), with a suggested trip temperature of <span class="hi">195°F</span> (UFSAR §9.2.2.8.1). The rupture of a large pipe or other high-flow-demand event is indicated to the operator by decreasing pump header pressure shown on the main control panel, and low pump header pressure is alarmed to the control room (UFSAR §9.2.1.2 SWS discussion applies analogously; CCW header pressure indication per UFSAR §9.2.2.3).

### Containment Isolation Valves (CC113, CC215, CC131, CC190)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q6</div>
On an SI from a LOCA, the automatic CCW response is that <span class="hi-exam">2CC215 and 2CC113 (Excess Letdown HX CCW isolation valves) receive a close signal as Containment Phase A isolation valves</span> — to ensure all non-essential containment penetrations are isolated. <span class="hi-trap">ALL CCW supply/return is NOT isolated on SI — RCP CCW continues until the Phase B signal at 15 psig.</span> <span class="hi-trap">The RHR HX CCW isolation valves (CC16s) do NOT receive an automatic open signal on SI — they open only when the ARM PB is depressed AND RWST level is 15.2 ft (manual ECCS realignment to CLR).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q37</div>
The Excess Letdown HX CC isolation valves <span class="hi-exam">2CC113 (outlet) and 2CC215 (inlet) fail closed on loss of air or power</span>. A 2CC215 air-supply break (air vented) shuts the valve, stopping CC cooling flow to the Excess Letdown HX, so <span class="hi-exam">excess letdown temperature and pressure both rise</span>; operators secure excess letdown to prevent lifting the seal return relief. See [[CVCS]], [[Control Air]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q10</div>
On an SI signal, <span class="hi-exam">2CC215 and 2CC113 (Excess Letdown HX CCW isolation valves) receive a Phase A close signal</span> — they are Containment Phase A isolation valves. The purpose of closing Phase A isolation valves is to <span class="hi-exam">ensure all non-essential containment penetrations are isolated</span> on an SI signal. <span class="hi-trap">RCP CCW continues to be supplied until a Phase B signal at <span class="val-trip">15 psig</span> in containment — Phase A does NOT isolate ALL CCW supply/return from containment.</span> <span class="hi-trap">21 and 22CC16 (RHR HX CCW isolation valves) do NOT receive an automatic open signal on SI — they only open when the ARM PB is depressed AND RWST level reaches 15.2 ft. RHR pumps are cooled by either flow through the pump from RWST (LBLOCA) or recirc flow (SBLOCA until pp is S/D), not by automatic CC16 alignment.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q55</div>
CCW containment isolation signals: <span class="hi-exam">CC131 and CC190 (RCP Thermal Barrier CCW Isolation Valves) receive a Phase B signal to close, NOT Phase A</span>. <span class="hi-exam">CC113 and CC215 (Excess Letdown CCW Valves) receive a Phase A signal to close</span>. <span class="hi-trap">The thermal barrier CCW isolation (CC131/CC190) is Phase B, while excess letdown CCW isolation (CC113/CC215) is Phase A — do not confuse the isolation signal levels for these two different CCW flow paths through containment.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q5</div>
<span class="hi-exam">1CC190 (CCW Thermal Barrier Isolation Valve) is on the COMMON CCW return line</span> — closing it isolates thermal barrier return from <span class="hi-exam">ALL RCPs</span> (not just one). <span class="hi-trap">Individual RCP isolation valves are the CC130s (one per RCP).</span> RCPs may continue operating as long as charging flow is maintained for seal injection.
</div>

### Surge Tank & Vent Valve (2CC149)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q38</div>
2CC149 (CCW Surge Tank Vent Valve) is <span class="hi-exam">normally OPEN and fails SHUT on a total loss of air (and on loss of control power)</span>. It auto-shuts on high radiation from 2R17A and is automatic (AU) in <span class="hi-exam">ALL Modes of operation</span>. <span class="hi-trap">It does not fail open.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q86</div>
On a rising CC Surge Tank level with the WHUT being processed by Portable Liquid Radwaste: <span class="hi-trap">the 2CC149 CC SURGE TANK VENT VLV auto-closes on HIGH RADIATION (not high pressure)</span>; if level keeps rising, overflow goes to the Waste Holdup System and contaminates the WHUT with chromates. Per AB.CC-0001 / ARP, <span class="hi-exam">WHUT processing is stopped and the Surge Tank is locally drained (to a 55-gallon drum)</span> to keep level &lt;100%. See [[Waste Liquid]], [[AB.CC-0001 — Loss of Component Cooling Water]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q7</div>
<span class="hi-exam">2CC149 (CCW Surge Tank Vent Valve) automatically CLOSES on high radiation alarm from 2R17A/B</span> (Component Cooling Process Monitors). 2CC149 is normally OPEN. Per AB.CC-0001 Step 3.8 NOTE: <span class="hi-exam">allowing CCW Surge Tank to overflow will contaminate the in-service Waste Holdup Tank AND the 22 ABV Exhaust Filter Unit</span>. <span class="hi-trap">Trap: the 22 ABV Exhaust Filter Unit contamination is easily missed — the overflow affects two components, not just the Waste Holdup Tank.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q8</div>
Confirms 2018 Q7: <span class="hi-exam">2CC149 auto-closes on 2R17A/B high radiation alarm</span>. CCW Surge Tank overflow contaminates both the in-service Waste Holdup Tank and the 22 ABV Exhaust Filter Unit.
</div>

### Thermal Barrier Valve (CC131) & SW Inlet Control

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q55</div>
CC131 (RCP Thermal Barrier Valve) auto-closure setpoints: <span class="hi-exam">CC131 automatically CLOSES when CCW flow from the RCP Thermal Barrier reaches <span class="val-trip">175 gpm</span></span>. The lo flow alarm setpoint of CC131 is <span class="val-alarm">145 gpm</span> (fires after CC131 closes and flow drops below 145 gpm). Per AB.RCP-0001 CAS: with only thermal barrier CCW flow lost and RCP injection flow normal, <span class="hi-exam">the crew is NOT required to secure ALL RCPs within 2 minutes</span>. <span class="hi-trap">Trap: 145 gpm is the CC131 lo flow alarm setpoint, NOT the auto-closure setpoint. Auto-closure is at 175 gpm (hi flow). The 2-minute RCP trip criterion requires BOTH seal injection AND thermal barrier CCW lost concurrently.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
<span class="hi-exam">SW122 (SW Inlet Control Valve to CCW HX) fails OPEN on loss of air</span> (fails closed on loss of 125VDC). When SW122 fails open: increased SW flow through CCW HX → CCW temperature lowers → RHR HX outlet temperature lowers → <span class="hi-exam">RCS cooldown rate rises</span>. Per AB.CA-0001, SW122 can be manually operated.
</div>

## Design Features & Interlocks

Component cooling water is normally available to all components served by the system, even though one or more components may be isolated (UFSAR §9.2.2.3). All components served are arranged in three main headers with parallel flow circuits from each header: two isolable headers supply cooling water to essential safety equipment, and one header supplies cooling water to the other plant auxiliaries (UFSAR §9.2.2.3). With this arrangement, long-term cooling of the Engineered Safety Features under accident conditions is assured considering an active component failure or excessive leakage in one header (UFSAR §9.2.2.3). Motor-operated valves are used to provide the residual heat exchangers with cooling water should it become necessary to place them in service under LOCA conditions (UFSAR §9.2.2.3). The mechanical safety trains are normally cross-connected, with safety-related heat loads split between the two trains; redundant remote motor-operated valves, operated from the control room, allow the operator to establish two independent safety trains when necessary (UFSAR §9.2.2.3).

**Surge tank design and chemistry homogenizing:** The surge tank has a flanged opening at the top for additions of chemical corrosion inhibitor; a recirculation line from the pump discharge is provided to homogenize this chemical with the rest of the system (UFSAR §9.2.2.4.3). The tank is connected to the system by two lines, both equipped with locked-open valves (UFSAR §9.2.2.4.3). The internal baffle divider provides two separate surge volumes for passive-failure redundancy during recirculation following a LOCA (UFSAR §9.2.2.4.3).

**Leakage / contamination provisions:** Welded construction is used wherever possible. Component cooling water could become contaminated with radioactive water due to (1) a leak in any heat exchanger tube in the CVCS, Sampling System, RHR System, or Spent Fuel Pool Cooling System, or a cooling coil for the thermal barrier cooler on an RCP, or (2) a leak in the residual heat exchangers following an accident; tube or coil leaks in components being cooled are detected by radiation monitors on the component cooling heat exchanger outlet headers (UFSAR §9.2.2.6). The relief valves on the cooling water lines downstream of the sample, letdown, excess letdown, seal water, spent fuel pool, and residual heat exchangers are sized to relieve the volumetric expansion if the exchanger shell side is isolated and high-temperature coolant flows through the tube side; set pressure equals the design pressure of the shell side (UFSAR §9.2.2.6). The relief valve on the surge tank is sized to relieve the maximum flow of water entering the surge tank following a rupture of an RCP thermal barrier cooling coil, with discharge directed to the waste holdup tank (UFSAR §9.2.2.6).

### RCP Protection on Loss of CCW

Component cooling water is provided to the RCP thermal barrier heat exchanger and to the upper and lower motor bearing oil coolers; seal injection flow is supplied to the pumps from the CVCS (UFSAR §9.2.2.8.1). Should a loss of CCW to the thermal barrier heat exchanger occur, seal injection flow is sufficient to prevent damage to the seals; conversely, if loss of seal injection occurs, the thermal barrier heat exchanger cools the reactor coolant before it enters the radial bearing and shaft seal area (UFSAR §9.2.2.8.1). The RCPs have been qualified by testing for 10-minute operation without component cooling water with no resultant damage — a bearing metal temperature of <span class="hi">185°F</span> was reached in approximately 10 minutes in two motor tests at hot (2230 psia, 552°F) conditions (UFSAR §9.2.2.8.1). Operating procedures direct that upon a valid low component cooling flow alarm to a single RCP, the operator trips that RCP within <span class="hi-exam">5 minutes</span> if flow cannot be restored; upon a valid low flow alarm to more than one RCP, the operator trips the reactor and affected RCPs within <span class="hi-exam">5 minutes</span> if flow cannot be restored — this action is performed prior to the motor bearing reaching its design operating temperature (UFSAR §9.2.2.8.2).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q8</div>
Per AB.CC-0001 Attachment 1, RCP motor bearing temperature limit requiring <span class="hi-exam">reactor trip and stopping the affected RCP is <span class="val-trip">175°F</span></span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q35</div>
Per AB.CC-0001 Attachment 1: CCW surge tank level low at <span class="hi-exam"><span class="val-trip">5%</span></span> requires <span class="hi-exam">reactor trip AND tripping all RCPs</span>. Per Attachment 2: also <span class="hi-exam">isolate letdown and swap charging pump suction to RWST</span>, then go to EOP-TRIP-1. <span class="hi-trap">17% is the low VCT level action — not the CCW surge tank trip limit. CCW surge tank trip level is 5%.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q78</div>
Per AB.CC-0001 Attachment 1, three time-critical actions for RCP protection on loss of CCW:<br>
1. <span class="hi-exam">Motor bearing temperature reaches <span class="val-trip">175°F</span> → stop RCPs</span><br>
2. CCW Surge Tank Level cannot be maintained > <span class="val-trip">38%</span> → immediately stop RCPs<br>
3. <span class="hi-exam">5 minutes after "RCP BRG CLG WTR FLO LO" alarm (OHAs D-20 through D-23) → stop RCPs</span><br>
<span class="hi-trap">Trap: 2 minutes was previously the time to stop RCPs if BOTH seal injection and thermal barrier flow were lost concurrently — does not apply if only CCW is lost (seal injection still available from charging).</span>
</div>

## Interconnections & Loads

Component cooling water for the component cooling heat exchangers is supplied from the SWS, insuring a continuous source of cooling under all conditions (UFSAR §9.2.2.3). The service water flow through each component cooling heat exchanger is normally controlled by a cascade control system that simultaneously throttles both the inlet and outlet control valves with a common control air signal; the valves are throttled to maintain CCW outlet temperature as the primary parameter, with flow limited to a nominal operating value of <span class="val-normal">10000 gpm</span> as the secondary parameter (UFSAR §9.2.1.2). In certain post-accident alignments the original design HX flow of 10000 gpm may not be attainable for both heat exchangers; the currently evaluated design (minimum required) flow is <span class="hi">8000 gpm</span> with 90°F water for one CCHX in service (UFSAR §9.2.1.2, Table 9.2-1 note 2, Table 9.2-4 note 1).

Component cooling is provided for the following heat sources (UFSAR §9.2.2.3): (1) residual heat exchangers; (2) reactor coolant pump motor bearing oil coolers and thermal barriers; (3) letdown heat exchanger; (4) excess letdown heat exchanger; (5) seal water heat exchanger; (6) spent fuel pool heat exchanger; (7) sample heat exchangers (Unit 1 CCW serves the sample heat exchangers for both units); (8) boric acid evaporator condenser and condensate cooler; (9) cooling for residual heat removal, safety injection, and charging pumps; and (10) Waste Disposal System components.

Component-by-component design flow rates per loop are tabulated in UFSAR Table 9.2-3. Normal total per-loop CCW flow is <span class="hi">8437 gpm</span>; under the LOCA recirculation phase the per-loop totals are <span class="hi">4034 gpm</span> (loop A) and <span class="hi">4134 gpm</span> (loop B) (UFSAR Table 9.2-3). Selected normal flows: RCPs <span class="hi">760 gpm (min)</span>, residual heat removal pumps <span class="hi">20 gpm</span>, safety injection pumps <span class="hi">20 gpm</span>, letdown heat exchanger <span class="hi">1000 gpm</span>, spent fuel pool heat exchanger <span class="hi">3000 gpm</span>, seal water heat exchanger <span class="hi">210 gpm</span> (UFSAR Table 9.2-3). In the LOCA recirculation phase, residual heat exchangers require <span class="hi">4000 gpm</span> per loop (UFSAR Table 9.2-3). At the reactor coolant pump, component cooling water removes heat from both the motor bearing oil and the thermal barrier (UFSAR §9.2.2.3, Figure 9.2-5).

## Effects of Loss / Malfunction

A loss of component cooling water to the RCP motor bearing oil coolers results in an increase in oil temperature and a corresponding rise in motor bearing metal temperature; the RCPs incur no damage as a result of a CCW flow interruption of 10 minutes (UFSAR §9.2.2.8.1). Westinghouse contends that a single or multiple pump seizure as a result of loss of CCW to the RCPs is not a credible event, and an audit of the redundant electrical supplies confirmed there are no credible single electrical failures capable of causing total loss of cooling water to any RCP (UFSAR §9.2.2.8.3, §9.2.2.8.5). The malfunction analysis of pumps, heat exchangers, and valves is presented in UFSAR Table 9.2-5; pump-casing and heat-exchanger tube/shell ruptures are not considered credible because of the low operating pressures, and a single pump failure to start leaves one operating pump that supplies sufficient flow for any condition with redundancy (UFSAR §9.2.2.9, Table 9.2-5).

The CV104 seal-leakoff valves are designed to fail open on loss of control power or air, and each valve control circuit is in a separate control grouping ensuring physical separation; an individual valve "hot-short" could cause loss of seal water flow to only one pump and could not cause coincident loss of component cooling flow (UFSAR §9.2.2.8.5).

### Thermal Barrier & CCW Leak Diagnostics

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q5</div>
An RCP thermal barrier rupture causes RCS to in-leak into the CCW thermal barrier path — seen as a momentary RCP Thermal Barrier DISCHARGE FLOW HI alarm (2CC131 auto shuts on high flow) and rising activity on the <span class="hi-exam">CCW surge tank rad monitors 2R17A/2R17B</span>. <span class="hi-trap">The CC surge tank level RISES (RCS in-leakage), not lowers.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q9</div>
Locating a CCW leak (AB.CC-0001 Attachment 4): if surge tank level keeps lowering with <span class="hi-exam">EITHER CC header in service</span>, the leak is on the <span class="hi-exam">Non-Safeguards header (fed from both CC headers)</span>. The leaking component is the <span class="hi-exam">Spent Fuel Pool HX</span> (SFP cooling pressure &lt; CCW pressure, so leakage is out of CCW). <span class="hi-trap">The Boric Acid Evaporator Distillate Cooler HX is on the non-safeguards header but not normally in service; the 22 CCW HX and 23 Charging pump seal HX are on the safeguards header.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q54</div>
CCW leak location via chemistry: per AB.CC-0001, any inleakage dilutes CCW chromates. The discriminator for <span class="hi-exam">Service Water inleakage is rising chloride concentration</span>. Rising chlorides + lowering chromates + rising surge tank level = <span class="hi-exam">CC Heat Exchanger leak</span> (the interface between CCW and SW). Other CCW inleakage sources (Seal Water HX, Letdown HX, Charging Pump) also dilute chromates but do NOT increase chlorides because they do not interface with SW.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q34</div>
Thermal barrier HX leak diagnostic: the <span class="hi-exam">"Discharge Flow Lo" alarm on 2CC1 is the unique indicator of automatic 2CC131 (RCP Thermal Barrier Valve) closure</span>. CC HDR ACTIVITY HI + SURGE TANK LEVEL HI-LO + DISCHARGE FLOW LO = thermal barrier HX leak. The Discharge Flow Hi alarm fires first (high CCW flow from RCS in-leakage) triggering auto-closure of 2CC131, then DISCHARGE FLOW LO follows. <span class="hi-trap">Letdown HX and RHR HX are also high-pressure CCW in-leakage sources, but they would NOT cause the "Discharge Flow Lo" alarm. RHR HX is not in service at 100% power. Seal Water HX is NOT a high-pressure source — #1 seal leakoff pressure is below CCW pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q36</div>
Two sources of <span class="hi-exam">RCS inleakage to CCW</span>: (1) <span class="hi-exam">Seal Water HX</span> and (2) <span class="hi-exam">RCP Thermal Barrier HX</span>. These are the only two CCW-cooled components where RCS pressure exceeds CCW pressure, allowing primary-to-CCW leakage. <span class="hi-trap">CCW HX leak = Service Water into CCW (not RCS). SFP HX leak = CCW out-leakage into SFP (CCW pressure > SFP). Regen HX is NOT cooled by CCW.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q4</div>
RCP Thermal Barrier rupture indications: <span class="hi-exam">CCW surge tank level rises</span> (RCS leaks OUT to CCW), <span class="hi-exam">R17A/B CCW radiation monitors rise</span> (detecting RCS activity in CCW), and <span class="hi-exam">CC131 (RCP Thermal Barrier Valve) closes</span> on high CCW flow to the thermal barrier. PZR level does NOT rise — RCS is leaking out, not in. Charging flow does NOT lower.
</div>

### SEC / LOOP — CCW Behavior & Restoration

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q5</div>
SEC Mode III (SI + LOOP): <span class="hi-exam">CCW pumps are NOT automatically reloaded</span> by the SECs. After SEC Mode III loading completes, CCW pumps remain stopped. CCW cools ECCS components (RHR Pumps, RHR HX, SI Pumps), but this is not sufficient to cause the SECs to auto-start CCW due to EDG loading limitations.
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
<div class="callout-label">Exam — 2023 Q33</div>
<span class="hi-exam">SEC Mode 3 (SI + LOOP): all CCW pumps are tripped</span> — CCW pumps are NOT sequenced onto EDGs due to loading concerns. <span class="hi-exam">SW to CCW HXs is auto-isolated to prevent SW pump runout</span> with only 3 SW pumps available on emergency power. CCW pumps are started later per EOP-APPX-1 when needed for cold leg recirculation.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-h</div>
Starting a CCW pump after a LOCA + LOOP (all vital buses on EDGs, no CCW running) IAW EOP-APPX-1. Before starting a CCW pump, the SEC fans and CCW-cooled loads must be aligned to the pump's load capacity: <span class="hi-exam">BLOCK and RESET the associated SECs (2B/2C for 22 CCW pump; 2A/2B for 21 CCW pump)</span>, swap switchgear room supply fans, and shed CFCUs / Aux Bldg exhaust fans at CC1. <span class="hi-exam">Alternate path: the 22 CCW pump fails to start, so the RNO restarts a CFCU and transfers to Step 5 to start the 21 CCW pump.</span> Placing 21 and 22 CCW Heat Exchangers in service (Step 6) requires <span class="hi-exam">at least 3 SW pumps running</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-h</div>
Start a CCW pump IAW EOP-APPX-1 during large break LOCA with loss of offsite power. <span class="hi-exam">2B 4KV Vital Bus de-energized</span> (Bus Differential, Diesel running). No CCW pumps running (SEC Mode 3). Step 3 strategy selection: de-energized bus = B → CCW pumps available = 21 or 23 → <span class="hi-exam">Strategy C → GO TO Step 6</span>. <span class="hi-exam">21 CCW pump fails to start</span> (override): take RNO, reset CS, restart 21 CS pump, proceed to Step 6h. Successfully <span class="hi-exam">start 23 CCW pump on 2C bus</span>. Requires SEC Block, Emergency Loading Reset, stopping CS pump to make room on SEC-loaded bus, then restarting CS after CCW starts.
</div>

### Loss of CCW Scenarios

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-g</div>
Loss of CCW alternate path: 22 CCW pump trips, the standby (23) CCW pump <span class="hi-exam">fails to auto-start and cannot be manually started</span>, then 21 CCW pump trips <span class="hi-exam">1 minute 30 seconds later</span> — a <span class="hi-exam">TOTAL LOSS of Component Cooling Water to all RCPs</span>. OHA D20-D23 (21/22/23/24 RCP BRG CLG WTR FLO LO) directs GO TO AB.RCP-0001 if RCP Motor Bearing Temperature reaches <span class="val-trip">175°F</span> or CCW flow cannot be established within 5 minutes with temps trending up (bearing temps peak near ~157°F here). On total loss, AB.CC-0001 / AB.RCP-0001 "Stopping Reactor Coolant Pumps" directs: trip the reactor, stop 21-24 RCPs, and — because letdown CCW is lost — <span class="hi-exam">close 2CV2 AND 2CV277 (isolate letdown), open 2SJ1 AND 2SJ2 (swap charging suction to RWST), close 2CV40 AND 2CV41 (isolate VCT)</span>, then GO TO EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q5</div>
With NO CCW pumps running during EOP-LOCA-3 cold leg recirculation transfer, <span class="hi-exam">single-train recirculation</span> is the directed flowpath (LOCA-3 step 11.2 → step 124). CCW is required for ECCS pump cooling — losing CCW restricts recirculation to one train. <span class="hi-trap">There is no provision in LOCA-3 to transition to APPX-1 (CCW Restoration) or LOCA-5 (Loss of Emergency Coolant Recirculation) for a no-CCW condition during the recirc transfer.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
On total Loss of All SW, AB.SW-0005 Step 3.9 directs <span class="hi-exam">place CCW pumps in MANUAL and reduce operating CCW pumps to one</span>. Rationale: with no SW available to cool the CCW heat exchangers, CCW heat removal capability is gone. Tripping the reactor and stopping all RCPs reduces heat input to CCW; reducing to a single running CCW pump minimizes heat addition from the running pumps themselves and allows heat-up of the limited CCW inventory to be tracked. <span class="hi-exam">2CC131 (RCP THERMAL BARRIER) is placed in MANUAL</span> as part of this sequence.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-h</div>
CCW leak inside containment per S2.OP-AB.CC-0001 (alternate path JPM): initial CCW leak causes <span class="hi-exam">OHA C-2 CNTMT SUMP PMP START</span> and <span class="hi-exam">CCW Surge Tank Level Hi-Lo</span> console alarm. Operator initiates makeup via <span class="hi-exam">2DR107</span>. After isolating Excess Letdown HX valves (2CV132, 2CC215, 2CC113), leak worsens beyond makeup capacity — Attachment 2 directs <span class="hi-exam">reactor trip, stop ALL RCPs, and close CCW containment isolation valves</span> (2CC131, 2CC136, 2CC190). <span class="hi-exam">Step 3.24 is the decision point: Surge Tank level cannot be maintained >5% with makeup in progress.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
On the false-SI reactor trip the <span class="hi-exam">21 CCW pump trips and 23 CCW pump control transfers to manual</span>, leaving <span class="hi-exam">only the 22 CCW pump running</span> post-trip. With the 2C 4KV vital bus on its EDG, [[EOP-TRIP-1 — Reactor Trip or Safety Injection]] gives <span class="hi-exam">no direction to start a second CCW pump</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #1</div>
23 CCW pump trips and the standby CCW pump <span class="hi-exam">fails to auto-start</span>. The crew <span class="hi-exam">manually starts 22 CCW pump</span> to restore system pressure, clearing all CCW and RCP system alarms, validates that alarms received were consistent with low CCW system pressure, and verifies RCP CCW-cooled parameters. CRS enters the appropriate Tech Spec. See [[2014 Scenario 1]], [[AB.CC-0001 — Loss of Component Cooling Water]].
</div>

## Control-Room Operation

During normal full-power operation, one or two component cooling pumps and one component cooling heat exchanger accommodate the heat removal loads; the standby pump and standby heat exchanger provide backup (UFSAR §9.2.2.3). During plant cooldown all three pumps are operated, each circulating one-third of the total component cooling flow, and both heat exchangers are required for removing residual and sensible heat (UFSAR §9.2.2.3, §9.2.2.4.2). In the event of a LOCA, one pump and one heat exchanger are capable of fulfilling system requirements (UFSAR §9.2.2.3). The Component Cooling System instrumentation provides the required signals for safe, reliable, and efficient operation and control of the system; all alarms are located in the Control Room (UFSAR §9.2.2.7). Following an accident, the Control Room operator evaluates the status of available equipment and, if necessary, manually realigns the system to assure heat removal requirements are satisfied (UFSAR §9.2.2.3).

The operation of the system is monitored with the following instrumentation (UFSAR §9.2.2.3): (1) temperature detectors in the inlet and outlet lines for each component cooling heat exchanger; (2) pressure detectors on the pump discharge headers; (3) a temperature indicator in the outlet line from each heat exchanger; (4) a radiation monitor in each component cooling heat exchanger discharge line; and (5) a level indicator and alarm on each side of the surge tank. The service water flow through each CCHX cascade control system has its indicating valve control mounted on an instrument panel in the Auxiliary Building near the heat exchanger; a flow transmitter alarms a service water high flow condition on the overhead annunciator in the Control Room (UFSAR §9.2.1.2).

### CCW Pumps & System Alignment

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-d</div>
Each RHR heat exchanger is cooled by CCW through its own HX outlet valve (<span class="hi-exam">21CC16</span> for the 21 RHR HX, <span class="hi-exam">22CC16</span> for the 22 RHR HX). When restoring shutdown cooling on the alternate (22) RHR loop per AB.RHR-0001 Attachment 2, the operator <span class="hi-exam">closes 21CC16 and opens 22CC16</span> to line up CCW to the 22 RHR HX before starting the 22 RHR pump.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q42</div>
<span class="hi-exam">22CC3 (the 21-23 header cross-over valve) is a normally open valve with NO automatic action</span> on SI, Phase B, or containment Hi-Hi — so 22CC3 indicating OPEN after a LOCA is NOT a failed-to-reposition condition. (Plausible distractor because other CCW valves DO reposition on SI/Phase B, and the SJ113 valves — which also carry "X-Over" designators — reposition on RWST lo-lo level.) See [[RPS/SSPS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q31</div>
The CCW supply to the RCPs is a single line feeding both <span class="hi-exam">bearing cooling and thermal-barrier cooling</span>. The thermal-barrier CCW has a separate return line isolated by <span class="hi-exam">2CC190 (RCP THERM BAR CC OUTLET V, inside containment)</span> and <span class="hi-exam">2CC131 (outside containment)</span>. Thermal-barrier CCW only cools reactor coolant rising through the thermal barrier upon a loss of seal injection. <span class="hi-trap">With normal seal injection, 2CC190 failing shut does NOT affect RCP temperatures.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q35</div>
Normal CCW system alignment: <span class="hi-exam">2 CCW pumps running in MANUAL, and one CCW pump in AUTO and stopped</span>. The pump selected to AUTO will <span class="hi-exam">auto-start when either 21 or 22 CCW header pressure lowers to <span class="val-alarm">70 psig</span></span>. <span class="hi-trap">There is NO interlock based on CCW pump 4KV breaker positions (other systems do have a breaker anticipatory function — CCW does not). On a CCW pump trip, AB.CC-0001 could be entered but no actions are required other than ensuring the backup pump started.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.3 requires two independent CCW loops OPERABLE in Modes 1–4 (TS 3/4.7.3)
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours (TS 3/4.7.3)
- An OPERABLE CCW loop consists of one mechanical train and one CCW pump; the system has two safeguards mechanical trains supplied by three pumps powered from separate vital buses (TS 3/4.7.3 Bases)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q37</div>
TSAS 3.7.3 requires <span class="hi-exam">2 independent loops of CCW</span>; per the bases, having 2 operable loops requires <span class="hi-exam">ALL 3 CCW pumps operable</span> (plus HXs, valves, etc.). The <span class="hi-exam">23 CCW pump is a BLACKOUT load, NOT an ACCIDENT load</span>. On a 2C bus undervoltage / SEC Mode II, 23 CCW does not start; the SEC also <span class="hi-exam">locks out the AUTO/MAN function of the CCW pump start circuitry</span>, so 23 CCW being in MANUAL has no effect. All 3 pumps remain operable → TSAS 3.7.3 is NOT entered.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q93</div>
Distractor trap: a single <span class="hi-exam">21 CCW pump trip does NOT make both loops of CCW inoperable</span>, so entering TS 3.0.3 "because all redundant equipment in the CCW system is not available" is wrong. (The tested action was the concurrent tripped EDG fuel oil transfer pump → TS 3.8.1.1.b.2; see [[Diesel Generators]] and [[TS 3/4.8 — Electrical]].)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q59</div>
SFP Heat Exchanger tube rupture: components supplied by CCW with pressure less than CCW header pressure are sources for system-to-system out leakage. <span class="hi-exam">A tube rupture in the SFP HX results in CCW leaking OUT into the SFP system</span> — CCW Surge Tank level lowers, SFP level rises. Non-borated CCW reduces SFP boron concentration, requiring addition of borated water. SFP alarms: low level <span class="val-alarm">128' 2"</span>, high level <span class="val-alarm">129' 2"</span>.
</div>

## Connections

- Related exam questions: [[2014 Q5]], [[2014 Q9]], [[2014 Q30]], [[2014 Q31]], [[2014 Q37]], [[2015 Q16]], [[2016 Q5]], [[2016 Q10]], [[2016 Q27]], [[2016 Q35]], [[2018 Q7]], [[2018 Q54]], [[2019 Q5]], [[2019 Q8]], [[2019 Q55]], [[2020 Q34]], [[2020 Q35]], [[2020 Q55]], [[2020 Q76]], [[2020 Q78]], [[2023 Q4]], [[2023 Q33]], [[2023 Q51]], [[2023 Q59]], [[2022 Q5]], [[2022 Q8]], [[2022 Q35]], [[2022 Q36]], [[2015 Q37]], [[2015 Q86]], [[2014 Q16]], [[2014 Q83]], [[2014 Q93]], [[2012 Q12]], [[2012 Q26]], [[2012 Q38]], [[2012 Q42]], [[2012 Q82]]
- Related JPMs: [[2016 JPM Sim-e]], [[2018 JPM Sim-h]], [[2019 JPM Sim-h]], [[2015 JPM Sim-g]], [[2014 JPM Sim-h]], [[2012 JPM Sim-d]]
- Related scenarios: [[2012 Scenario 1]], [[2018 Scenario 1]], [[2015 Scenario 4]], [[2014 Scenario 1]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
