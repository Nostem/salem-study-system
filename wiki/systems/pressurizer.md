---
title: Pressurizer & PRT
category: systems
status: draft
aliases:
  - PZR
  - pressurizer
  - Pressurizer
---

# Pressurizer & PRT

## Function & Design Basis

The pressurizer provides a point in the RCS where liquid and vapor are maintained in equilibrium under saturated conditions for pressure control. It accommodates positive and negative surges caused by load transients. (UFSAR 5.1, 5.5.10)

The general configuration of the pressurizer is shown on UFSAR Figure 5.1-2; design data are tabulated in UFSAR Table 5.2-4 and codes/materials in Table 5.2-9 (UFSAR §5.5.10.1). The pressurizer volume is sized so that the combined saturated water volume and steam expansion volume gives the desired pressure response to system volume changes; the water volume keeps the heaters covered during a 10 percent step load increase; the steam volume accommodates the surge from a 50 percent reduction of full load with automatic reactor control and steam dump without reaching the high-level reactor trip, and prevents water relief through the safety valves following a loss-of-load; and the design ensures the pressurizer does not empty, and the safety injection signal is not activated, following reactor trip and turbine trip (UFSAR §5.5.10.1.2).

The surge line connects the pressurizer to one reactor coolant loop hot leg and enables continuous volume/pressure adjustments between the RCS and the pressurizer. It is sized so that overpressure of the RCS does not exceed 110 percent of the design pressure with the design discharge flow from the safety valves, and the line and its thermal sleeves are designed to withstand the thermal stresses of relatively hotter or colder surge water (UFSAR §5.5.10.1.1, §5.5.10.2.1).

### Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Design/Operating Pressure | 2485 / <span class="val-normal">2235 psig</span> | UFSAR T5.2-4 |
| Hydrostatic Test Pressure (cold) | 3107 psig | UFSAR T5.2-4 |
| Design/Operating Temperature | 680 / <span class="val-normal">653°F</span> | UFSAR T5.2-4 |
| Shell ID | 84 in | UFSAR T5.2-4 |
| Water Volume (full power) | 1080 ft³ (60% of net internal volume) | UFSAR T5.2-4 |
| Steam Volume (full power) | 720 ft³ | UFSAR T5.2-4 |
| Electric Heater Capacity | 1800 kW | UFSAR T5.2-4 |
| Heatup Rate (heaters only) | ~55°F/hr | UFSAR T5.2-4 |
| Maximum Spray Rate | 800 gpm | UFSAR T5.2-4 |
| Surge Line Nozzle Diameter | 14 in | UFSAR T5.2-4 |

## Key Components

The pressurizer is a vertical, cylindrical vessel with hemispherical top and bottom heads, constructed of carbon steel with austenitic stainless steel cladding on all surfaces exposed to reactor coolant (UFSAR §5.5.10.2.2, 5.1).

- **Surge line nozzle and electric heaters** — installed in the bottom head; heaters are removable for maintenance or replacement. A thermal sleeve minimizes stresses in the surge line nozzle, and a screen at the surge line nozzle with baffles in the lower section prevents an insurge of cold water from flowing directly to the steam/water interface and assists mixing (UFSAR §5.5.10.2.2).
- **Spray nozzle, relief and safety valve connections** — located in the top head of the vessel (UFSAR §5.5.10.2.2).
- **Spray valves** — two separate, automatically controlled air-operated valves with remote manual override; a manual bypass valve in parallel with each provides a small continuous spray flow to keep pressurizer liquid homogeneous with the coolant and to prevent excessive cooling of the spray piping (UFSAR §5.5.10.2.2, §5.5.10.3.4).
- **Skirt-type support** — attached to the lower head, extends a full 360 degrees, terminating in a bolting flange; provided with ventilation holes for free convection of ambient air past the heater and connector ends for cooling (UFSAR §5.5.10.3, "Pressurizer Support").
- **Power-operated relief valves (PORVs) and code safety valves** — see Automatic Features & Setpoints and Design Features & Interlocks below (UFSAR §5.5.13).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q29</div>
<span class="hi-exam">The PZR Cold Calibrated level 0% reference is at the 108' 11" elevation in containment</span>. During refueling cavity fill, once cavity water rises above that elevation (e.g., 110') the PZR cold cal indication reads on-scale (a small positive value, ~3%), not off-scale.
</div>

## Power Supplies

Twenty banks of "backup" heaters can be powered from the Vital Distribution System, providing assurance that pressure control for natural circulation can be maintained during a loss of offsite power (UFSAR §5.5.10.3.1). This Vital-bus (EDG-backed) capability is the design basis for the backup-heater emergency power transfer described in the JPMs below.

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 IP-j</div>
On a loss of power to the group buses, the PZR backup heater groups can be re-energized from their <span class="hi-exam">emergency power supply (460V Vital Bus, EDG-backed)</span> per S2.OP-SO.PZR-0010 Section 5.3. To stay within the emergency bus capacity, <span class="hi-exam">only three of the fourteen heater disconnects remain ON</span> (eleven placed OFF) when fed from the emergency supply. A Corry key interlock between the normal main breaker (2EX1EP2EPX) and the emergency feed breaker (2AX1AX14X) prevents both supplies from being aligned to the heater bus simultaneously.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-i</div>
Transfer of 22 Backup Group PZR heaters to emergency power (2A 460V Vital Bus) per S2.OP-SO.PZR-0010 Section 5.3: place <span class="hi-exam">11 of 14 disconnects in OFF</span> (only 3 remain ON to limit load within emergency bus capacity), place <span class="hi-exam">2EP PZR HTR BUS EMERGENCY FEED DISCONNECT SWITCH in ON</span> using JAM key, then insert interlock key and <span class="hi-exam">UNLOCK breaker 2AX1AX14X</span>.
</div>

## Automatic Features & Setpoints

RCS pressure is controlled by the pressurizer whenever a steam bubble is present (UFSAR §5.5.10.3.1). The RCS design/operating pressures together with the safety, power-relief, spray-valve, and protection setpoints are listed in UFSAR Table 5.2-1 (UFSAR §5.5.10.3.3, §5.2.1.2):

| Function | Setpoint | Source |
|----------|----------|--------|
| Design Pressure | 2485 psig | UFSAR T5.2-1 |
| Operating Pressure | <span class="val-normal">2235 psig</span> | UFSAR T5.2-1 |
| Code Safety Valves (set pressure) | <span class="val-trip">2485 psig</span> | UFSAR T5.2-1, §5.5.13.2 |
| Power Relief Valves (PORVs) open | <span class="val-trip">2335 psig</span> | UFSAR T5.2-1 |
| Spray Valves begin to open | 2260 psig | UFSAR T5.2-1 |
| Spray Valves full open | 2310 psig | UFSAR T5.2-1 |
| High Pressure Reactor Trip | <span class="val-trip">2385 psig</span> | UFSAR T5.2-1 |
| High Pressure Alarm | <span class="val-alarm">2385 psig</span> | UFSAR T5.2-1 |
| Low Pressure Reactor Trip | <span class="val-trip">1865 psig</span> | UFSAR T5.2-1 |
| Low Pressure Alarm | <span class="val-alarm">1865 psig</span> | UFSAR T5.2-1 |
| Backup Heaters On | 2210 psig | UFSAR T5.2-1 |
| Proportional Heaters begin to operate | 2250 psig | UFSAR T5.2-1 |
| Proportional Heaters full operation | 2220 psig | UFSAR T5.2-1 |
| Hydrostatic Test Pressure | 3107 psig | UFSAR T5.2-1 |

During an outsurge, flashing of water to steam plus automatic actuation of the heaters keeps pressure above the minimum allowable limit; during an insurge, the spray system (fed from two cold legs) condenses steam to prevent pressure from reaching the PORV setpoint, and heaters are energized on high water level to heat the sub-cooled surge water entering from the loop (UFSAR §5.5.10.2.2). The PORVs are set to open before the pressurizer safety valves; relief through the PORVs can limit pressure to levels below the safety-valve set pressure and thereby avoid challenging (opening) the safety valves (UFSAR §5.5.10.2.2, §5.5.13.1). The PORVs are operated automatically or by remote manual control and fail to the closed position on loss of air supply (UFSAR §5.5.13.1, §5.5.13.2).

The lift setting of the pressurizer code safety valves is <span class="val-trip">2485 psig ±3%</span> per LCO 3.4.3 (TS 3/4.4.3, Amend 300); each safety valve is designed to relieve 420000 lbs/hr of saturated steam at the valve setpoint, and the combined relief capacity of all three accommodates the maximum surge from a complete loss of load without crediting a direct reactor trip and without PORV or steam-dump operation (TS 3/4.4.3, Amend 282).

## Design Features & Interlocks

**Spray.** Two automatically controlled spray valves with remote manual override initiate pressurizer spray; the parallel manual throttle valves provide a small continuous bypass flow to reduce thermal stresses and shock, maintain uniform chemistry/temperature, and keep the liquid homogeneous. Low-alarmed temperature sensors in each spray line alert the operator to insufficient bypass flow, and the common spray-line piping forms a water seal that prevents steam buildup back to the control valves. The design spray rate prevents pressure from reaching the PORV operating setpoint during a 10 percent step load reduction (UFSAR §5.5.10.3.4). The spray lines and valves use the differential pressure between the surge-line (hot-leg) and spray-line (cold-leg) connections as the driving force; the cold-leg spray inlets extend into the piping as a scoop so the loop-flow velocity head adds to the spray driving force, and the arrangement allows spray to operate with one RCP not running. The spray line also assists in equalizing boron concentration between the loops and the pressurizer (UFSAR §5.5.10.3.4).

**Auxiliary spray.** A flow path from the CVCS to the pressurizer spray line provides auxiliary spray to the vapor space during cooldown when the RCPs are not operating; the thermal sleeve and spray piping are designed for the thermal stresses of the cold spray water (UFSAR §5.5.10.3.4). Auxiliary spray valve 1CV75/2CV75 is a normally closed valve that fails closed on loss of air or power; the redundant Seismic Category I Overpressure Protection System valves can alternatively depressurize the RCS by venting the pressurizer to the relief tank (UFSAR §5.5.7.3.4, "Depressurization").

**PORV overpressure / water-solid operation.** The Salem PORVs, PORV block valves, and associated downstream piping have been evaluated for operation under water-solid conditions and found adequate; the PORVs can be relied upon to prevent challenges to the code safety valves when the pressurizer is water-solid, with administrative controls on the block valves to prevent their closure when water-solid (UFSAR §5.5.13.3). Westinghouse generic study concluded that the PORVs are adequately reliable so as not to require automatic block-valve closure; accordingly automatic isolation of the PORVs is not provided (UFSAR §5.5.13.3).

**Low-temperature overpressure protection (LTOP / POPS).** The OPERABILITY of two POPS valves, or an RCS vent of >3.14 in², protects the RCS from pressure transients exceeding Appendix G limits when any cold leg is at or below the POPS enable temperature; either POPS valve has adequate relieving capability for the bounding transients (start of an idle RCP with SG secondary water ≤50°F above RCS cold-leg temperature, or start of an SI pump into a water-solid RCS) (TS 3/4.4.10.3, Amend 328).

**Pressurizer P/T limits.** Pressurizer heatup is limited to 100°F/hr, cooldown to 200°F/hr, and spray ΔT to 320°F to ensure compatibility with the ASME fatigue analysis (TS 3/4.4.10.2, Amend 328). The maximum RCS heating and cooling rate is 100°F per hour (UFSAR §5.2.4.3.1, §5.2.1.5.1; pressurizer cooldown 200°F/hr per UFSAR T5.2-10).

### Tailpipe Temperature & Throttling Physics

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q39</div>
A stuck-open PZR safety (PR3) is a <span class="hi-exam">constant-enthalpy (throttling) process</span>, so the tailpipe fluid is saturated at PRT pressure. With PRT pressure <span class="val-normal">5 psig (= 20 psia)</span>, the steam-table saturation temperature is <span class="hi-exam">227.918°F ≈ 228°F</span> — the expected tailpipe temperature. <span class="hi-trap">Using 5 psia instead of 20 psia (mistaking psig for psia) gives the 162°F distractor.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q10</div>
PORV leak-by is a <span class="hi-exam">constant enthalpy (throttling) expansion</span> process. At PZR pressure 415 psig (430 psia) with PRT pressure 0 psig, h<sub>g</sub> &asymp; 1205 BTU/lbm. Following the constant enthalpy line on a Mollier diagram from 415 psig to 0 psig yields tailpipe temperature of approximately <span class="hi-exam">330&deg;F</span>. <span class="hi-trap">212&deg;F is the boiling point at 0 psig and 450&deg;F is for ~515 psig — both are plausible distractors but do not account for the throttling process.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q2</div>
PORV discharge temperature is determined by a <span class="hi-exam">constant enthalpy (throttling) process</span> from RCS pressure to PRT pressure (Mollier Diagram). Key relationships: <span class="hi-exam">lowering PRT pressure → lower discharge temperature; raising PRT pressure → higher discharge temperature</span>. Changes in RCS pressure or PORV leak rate do NOT directly lower the indicated discharge temperature. A leaking PRT rupture disk lowers PRT pressure, thereby lowering discharge temperature.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q2</div>
PZR safety valve leak is a <span class="hi-exam">throttling/constant enthalpy process</span>. Tailpipe temperature determined by following the enthalpy line on a Mollier diagram to PRT pressure. At RCS <span class="val-normal">1900 psig</span> (1915 psia, hg ~1140 BTU/lb), throttling to PRT <span class="val-normal">35 psig</span> (50 psia) yields tailpipe temperature of approximately <span class="hi-exam">282°F</span>.
</div>

### PORV Identification & Block Valve Isolation

The 6-inch pipes connecting the pressurizer nozzles to their respective code safety valves are shaped as a loop seal; condensate from normal heat losses drains back to the pressurizer liquid space through the normally open safety-valve drain lines, and if pressure exceeds the safety-valve set pressure the seal water discharges during the accumulation period (UFSAR §5.5.13.2). Remotely operated stop valves isolate the PORVs if excessive leakage occurs (UFSAR §5.5.13.2). Each Salem unit's pressurizer spray, safety, and relief valves are identified in UFSAR §5.5.12 (e.g., Unit 2: spray valves 2PS1/2PS3, PORV stops 2PR6/2PR7).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q36</div>
For a 1PR1 PORV that opens and cannot be shut, the PRT pressurizes until the <span class="hi-exam">PRT rupture disk ruptures at <span class="val-trip">100 psig</span></span> if the 1PR6 block valve is not shut. <span class="hi-trap"><span class="val-alarm">10 psig</span> is the PRT HIGH-PRESSURE ALARM setpoint, NOT the rupture-disk setpoint.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q36</div>
A <span class="hi-exam">PZR Safety Valve failing open pressurizes the PRT until its rupture disk ruptures</span>, continuously venting saturated steam to containment (rising containment humidity/pressure). See [[Containment]], [[RCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q11</div>
PZR PORV and Safety discharge piping (drawing 203301): both PZR PORVs and the 3 PZR Safeties discharge into a <span class="hi-exam">single combined line going to the PRT</span>. Tailpipe temperature monitoring: <span class="hi-exam">each Safety has its own individual temperature sensor</span>, but the <span class="hi-exam">2 PORVs share ONE sensor on the common discharge line</span> — so PORV-to-PORV identification cannot be made from temperature alone. AB.PZR-0001 diagnostic method when both PORV Stops are closed and one PORV Stop (<span class="hi-exam">2PR8</span>) is re-opened: rising tailpipe temperature identifies the leaking PORV.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q25</div>
Each PZR PORV has <span class="hi-exam">2 accumulators sized for 100 opening/closing cycles (50 per accumulator)</span>. With both CA330 (Containment Supply Inlet Valves) closed (e.g., on loss of control air), the PORVs <span class="hi-exam">CAN still be operated</span> using their accumulators. <span class="hi-trap">Trap: loss of containment air supply does NOT prevent PORV operation — the accumulators provide a self-contained air supply independent of the plant air headers.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-c</div>
Leaking-PORV identification by sequential unisolation. AB.PZR-0001 directs <span class="hi-exam">CLOSE both 2PR6 and 2PR7, Pressurizer Relief Stop Valves</span> (step 3.47) to stop the leak and stabilize pressure. After pressure stabilizes, <span class="hi-exam">OPEN 2PR6</span> (tailpipe temperature does NOT rise → 2PR1 intact), then <span class="hi-exam">OPEN 2PR7</span> (tailpipe temperature RISES → identifies <span class="hi-exam">2PR2 as the leaking PORV</span>), then <span class="hi-exam">CLOSE 2PR7</span> (step 3.55) to isolate it. Initial diagnosis cue is PORV tailpipe temperature rising from normal to ~227°F with rising charging flow.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
<span class="hi-exam">2PR2 PZR PORV develops a leak (~30 gpm)</span> during a power ascension. Crew identifies via lowering PZR pressure / rising PORV tailpipe temp / rising charging flow / lower spray valve demand / PRT indications. Diagnostic isolation: close <span class="hi-exam">both PORV stop valves (2PR6 and 2PR7)</span>, then open 2PR6 (tailpipe temps still lowering) → open 2PR7 (tailpipe temps rising) → confirms 2PR2 leaking. Close 2PR7 to isolate. CRS enters TSAS 3.4.5 action a (1-hour LCO).
</div>

### EOP Depressurization with PORVs

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-d</div>
FRHS-1 Step 24 RCS bleed path: <span class="hi-exam">OPEN BOTH PZR PORV STOP VALVES (2PR6, 2PR7), then OPEN BOTH PZR PORVs (2PR1, 2PR2) in Manual</span>. Alternate path: 2PR2 fails to open in Manual → open <span class="hi-exam">2RC40 thru 2RC43 (Reactor Head Vents)</span> at 2RP3 backpanel using four key-locked switches. Reactor Head Vents are NOT part of the standard FRHS-1 bleed path — they are an authorized alternate when one PORV fails to open.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-c</div>
EOP-LOCA-2 Step 20 depressurization via Auxiliary Spray: open <span class="hi-exam">2CV75 (RCS Aux Spray Valve)</span>, close 2CV77/2CV79 (charging to loops). Stop when <span class="hi-exam">PZR level >77% (74% adverse) or subcooling <10F</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-d</div>
EOP-FRHS-1 Bleed and Feed: if PORV 2PR2 fails to open, open <span class="hi-exam">reactor head vent valves 2RC40 through 2RC43</span> (key-locked on 2RP2 backpanel) as alternate bleed path. 2PR1 must already be open for the "bleed" portion.
</div>

### SGTR Depressurization & PORV Failures

**Exam & operating coverage:**

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #2</div>
SGTR <span class="hi-exam">without pressurizer pressure control</span>: PZR PORV 2PR1 is inoperable with its block valve <span class="hi-exam">2PR6 shut and deenergized per TSAS 3.4.5.b</span>, and the RCPs (normal spray) are lost on the preceding loss of offsite power. At the SGTR-1 RCS depressurization step the only available PORV (2PR2) <span class="hi-exam">fails to open</span>, leaving no depressurization path, so the CRS transitions to [[EOP-SGTR-5 — SGTR without Pressurizer Pressure Control]]. The crew maintains PZR level &gt;11% with RCS subcooling &gt;0°.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
With Channels I and III PZR pressure failed low there is <span class="hi-exam">no automatic control for PZR pressure</span> (no demand for spray flow) — RO manually controls RCS pressure during SI termination. RCS pressure is controlled by <span class="hi-exam">PZR PORV 2PR2 cycling in auto</span> after the trip. The 2PR1 PORV block valve is closed and de-energized for the inoperable failed channel.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
EOP-SGTR-1 RCS depressurization path. Initially RO uses normal PZR spray (both <span class="hi-exam">2PS1 and 2PS2 spray valves</span> full open) to lower RCS pressure. <span class="hi-exam">23 RCP trip</span> mid-depressurization causes spray to lose effectiveness — RO shuts both PZR Spray valves and reviews depressurization criteria. Crew uses PZR PORVs: <span class="hi-exam">2PR1 fails to position 0-100% (will not open)</span>; RO opens <span class="hi-exam">2PR2</span> instead. After depressurization complete <span class="hi-exam">2PR2 fails to shut</span>; CRS directs closure of 2PR7 PZR PORV Block Valve, which fails 90% open (open limit extinguishes but closed limit does not illuminate). Loss of RCS inventory through stuck-open PORV path drives transition to EOP-SGTR-3, SGTR with LOCA — Subcooled Recovery.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
RCS depressurization in EOP-SGTR-1 — 21 RCP electrical trip during PZR spray attempt eliminates spray flow path; crew shuts both spray valves and uses <span class="hi-exam">2PR2 PZR PORV</span> to depressurize RCS toward Table E termination criteria (2PR6 was shut with power removed pre-scenario after a 2PR1 control circuit problem). When termination criteria met, <span class="hi-exam">2PR2 fails to close after demand</span> — RO closes the PORV Block valve, RCS pressure rising. (Note: do NOT restore power to 2PR6 — breaker went trip free when shut.)
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
During SGTR-1 depressurization, normal PZR spray is NOT available (23 RCP stopped). RCS depressurization uses <span class="hi-exam">PZR PORVs</span> IAW Table E criteria. After depressurization termination criteria met, RO attempts to close PORV — <span class="hi-exam">PORV fails to close (stuck open)</span>. Recovery: close associated PZR PORV block valve (CT-10). Creates a small-break LOCA in addition to tube rupture if not promptly isolated.
</div>

## Interconnections & Loads

The PORVs provide the means for pressurizer venting; a procedure for this application is included within the Station Emergency Instructions for "natural circulation," and the vent paths have been evaluated to not result in inadvertent opening or failure to close after initial opening (UFSAR §5.5.10.2.2). When the pressurizer is water-solid (near the end of the second phase of cooldown and during initial heatup), RCS pressure is controlled by operation of a charging pump with letdown via the RHR shutdown path (UFSAR §5.5.10.3.1). Pressurizer pressure, level, and temperature instrumentation is detailed in UFSAR Section 7 (UFSAR §5.5.10.3, "Pressurizer Instrumentation").

### Pressurizer Relief Tank

The PRT condenses and cools the discharge from the pressurizer safety and relief valves; discharges from specific relief valves inside containment are also piped to it. The tank normally contains water in a predominantly nitrogen atmosphere, with provision to periodically analyze the gas for hydrogen or oxygen concentration. By means of its connection to the Waste Processing System, the PRT provides a means for removing noncondensable gases from the RCS that might collect in the pressurizer vessel (UFSAR §5.5.11.2). The PRT design is based on condensing and cooling a discharge of pressurizer steam equal to 110 percent of the volume above the full-power pressurizer water-level setpoint; it is not designed to accept a continuous discharge from the pressurizer (UFSAR §5.5.11.1).

Steam is discharged through a sparger pipe under the water level, condensing and mixing it with water near ambient temperature; the PRT has pressure, temperature, and level indications and alarms in the control room (UFSAR §5.5.11.2). The water volume absorbs the heat of the assumed discharge, rising from an initial 120°F to a final 200°F; if temperature rises above 120°F during operation, the tank is cooled by spraying in cool water and draining the warm mixture to the Waste Disposal System. The spray rate cools the tank from 200°F to 120°F in approximately 1 hour, and the nitrogen gas volume limits the maximum pressure following a design discharge to 50 psig (UFSAR §5.5.11.3). The rupture discs have relief capacity at least equal to the combined capacity of the pressurizer safety valves; the maximum rupture-disc burst point is twice the calculated pressure from the maximum design safety-valve discharge, and the tank and disc holders are designed for full vacuum to prevent collapse if the contents cool without nitrogen being added. The PRT rupture disc is the vent path for both the reactor vessel head and the pressurizer vent (UFSAR §5.5.11.3).

| Parameter | Value | Source |
|-----------|-------|--------|
| Design Pressure | 100 psig | UFSAR T5.2-4 |
| Rupture Disc Release Pressure | 100 psig | UFSAR T5.2-4 |
| Design Temperature | 340°F | UFSAR T5.2-4 |
| Normal Water Temperature | Containment ambient (120°F max) | UFSAR T5.2-4 |
| Total Volume | 1800 ft³ | UFSAR T5.2-4 |
| Total Rupture Disc Relief Capacity | 1.60 x 10⁶ lb/hr | UFSAR T5.2-4 |
| Max pressure after design discharge | 50 psig | UFSAR §5.5.11.3 |

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q37</div>
PRT response while drawing a PZR bubble after a vacuum refill (S2.OP-SO.RC-0002): operators perform a <span class="hi-exam">10-15 minute vent of the PZR while drawing the bubble (Step 5.3.28), with PZR level 40-60% (Step 5.3.5)</span>. There is minimal liquid carryover, but venting air/non-condensables by opening the PZR PORVs <span class="hi-exam">slowly raises PRT pressure</span>. <span class="hi-trap">The PORVs are controlled in MANUAL (they do NOT cycle automatically). RCP bumps are performed BEFORE a vacuum is used; PORVs are in auto during bumps but are opened after the RCP is secured for venting.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q34</div>
Confirms PRT vent valve interlock setpoints: <span class="hi-exam">2PR15 (PRT Vent Valve) is interlocked to receive a SHUT signal at <span class="val-alarm">10 psig</span> in PRT</span>. The <span class="hi-exam">PRT Rupture Diaphragm actuates at <span class="val-trip">100 psig</span></span> in the PRT. <span class="hi-trap">Trap: 100 psig is the rupture diaphragm setpoint, NOT the 2PR15 interlock setpoint. 2PR15 receives a SHUT (not OPEN) signal at 10 psig.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q6</div>
PRT cooling: accomplished by a <span class="hi-exam">manual-only feed and bleed</span> process — feed via <span class="hi-exam">2WR82</span> (Primary Water supply) and bleed via <span class="hi-exam">2PR14</span> (PRT drain). There is <span class="hi-exam">NO automatic PRT cooling function</span>. During PRT cooling, the PRT drains directly to the <span class="hi-exam">RCDT pump suction header</span> (NOT the RCDT tank itself). <span class="hi-trap">Trap: many other plant processes have automatic functions, but PRT cooling is entirely manual. Also, the drain path is to the RCDT pump suction header — a distinction from draining into the RCDT tank.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q6</div>
<span class="hi-exam">Reactor head vents drain to the PRT</span> and will cause PRT temperature to rise when the reactor is at power. Reactor Flange Leakoff is directed to the RCDT, NOT the PRT. Per S2.OP-SO.PZR-0003 Section 5.3 ("Reducing PRT Temperature by Feed and Bleed"), the liquid in the PRT will be pumped to the <span class="hi-exam">HUT (Hold-Up Tank) using an RCDT Pump</span>. <span class="hi-trap">The PRT drain is physically connected to the RCDT via piping with a check valve, but the PRT liquid is pumped to the HUT, not kept in the RCDT.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q34</div>
PRT has a <span class="hi-exam">rupture disc (NOT a relief valve)</span> rated at <span class="val-trip">100 psig</span>. 2PR15 (PRT Vent to RCDT) <span class="hi-exam">cannot be opened if PRT pressure ≥ <span class="val-alarm">10 psig</span></span> — interlock prevents opening. Per S2.OP-SO.PZR-0003, if PRT pressure ≥ 10 psig: drain PRT first via 2PR14 to lower level and pressure, then open 2PR15 to vent PRT to 3 psig. <span class="hi-trap">2PR15 is NOT available for venting when PRT pressure is above 10 psig — must drain first to clear the interlock.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q32</div>
PRT drain path per S2.OP-SO.PZR-0003: open <span class="hi-exam">2PR14 to drain PRT to RCDT</span>, which automatically opens 2WL12 and starts the RCDT pump (defeats low level cutoff). RCDT pump discharge destinations: <span class="hi-exam">RWST, CVCS Hold-Up Tanks, or Waste Hold-Up Tanks</span>. PRT does NOT gravity drain — the RCDT pump is required.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-f</div>
Same Section 5.1 fill evolution (2PR1 leaking, PRT level 55.9%, PRT pressure 9.8 psig, PRT Level Hi-Lo alarm in): raise PRT level to 60%. <span class="hi-exam">Task standard: raise PRT level to &gt;57% while maintaining PRT pressure &gt;3 and ≤10 psig.</span> Because pressure starts near the 10 psig maximum, the operator may perform the 2PR15 vent step before raising level, then throttle 2PR15 as level rises.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-f</div>
PRT level adjust at 100% power with <span class="hi-exam">2PR1 leaking, 2PR6 shut with power applied, PRT level at 56.2%, PRT pressure 9.8 psig</span>. Per S2.OP-SO.PZR-0003 §5.1: start primary water pump (21 or 22), open 2WR80 (CONT PRI WATER STOP) and 2WR82 (PRT WATER SUPPLY) to fill, and operate 2PR15 (VENT) as needed to keep PRT pressure <span class="hi-exam">&gt;3 psig and ≤10 psig</span> while raising level. <span class="hi-trap">PRT Hi Pressure alarm locks out 2PR15 — pressure cannot be reduced via vent path once that alarm comes in. The 3 psig lower bound preserves a positive nitrogen overpressure to prevent oxygen ingress.</span>
</div>

## Effects of Loss / Malfunction

A loss of pressurizer pressure control, spray-valve failures, and heater failures challenge automatic RCS pressure control; the operator responses below are reconstructed from exam and JPM materials.

### PZR Saturation & Vapor Space

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q3</div>
PZR vapor space accident (one PZR safety valve fails full open): after the Rx trip, <span class="hi-exam">PZR level lowers initially, then rises rapidly until the PZR becomes water solid</span> as the RPV begins to void. <span class="hi-trap">This distinguishes a vapor space accident (pressure and level lower, then level rises as the vessel voids) from a LOCA (loses both pressure and level).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q79</div>
For RCP restart during SGTR recovery (RVLIS upper range &lt;100%), <span class="hi-exam">PZR level and saturated conditions in the PZR are required (in addition to RCS subcooling)</span> before a RCP is started. See [[RCPs]], [[RVLIS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q8</div>
PZR saturation determination using steam tables: at PZR Pressure 2005 psig (<span class="hi-exam">2020 psia</span>), saturation temperature is <span class="hi-exam">637&deg;F</span>. With PZR liquid temperature at 635&deg;F, the PZR is <span class="hi-exam">subcooled (NOT water saturated)</span>. Per 1-EOP-TRIP-6, the reason for establishing and maintaining saturation conditions in the PZR before RCP restart is to <span class="hi-exam">limit the PZR pressure DECREASE upon RCP restart</span>. <span class="hi-trap">Trap: steam tables are listed in psia, not psig — must add ~15 psi to convert. Also: the concern is pressure DECREASE (not increase) — pressure decrease occurs because cold water from the loop enters the PZR surge line when forced circulation is established.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
PZR vapor space leak (SBLOCA): at RCS pressure <span class="hi-exam">1450 psig</span> stable with subcooling 10°F and PZR level 30% rising, both <span class="hi-exam">charging and SI pumps are injecting</span>. SI termination criteria in EOP-LOCA-1 are met — transition to EOP-TRIP-3, not directly to EOP-LOCA-2. Ultimately: LOCA-1 → TRIP-3 → LOCA-2.
</div>

### Spray Valve Failures & Pressure Control

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q51</div>
On a turbine-trip-induced reactor trip with the Steam Dumps failing to ARM, RCS pressure rises but <span class="hi-exam">PZR spray valves open rapidly and fully to keep RCS pressure below ~2335 psig</span> — so the PORVs do not open (and the PZR Safeties, sized to relieve a loss of load with the Rx still at power, do not lift). See [[Steam Dumps]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q7</div>
Per LCO 3.4.10.2, maximum allowable PZR heatup rate is <span class="hi-exam"><span class="val-trip">100&deg;F/hr</span></span>. Maximum PZR cooldown rate is <span class="hi-exam">200&deg;F/hr</span> (common distractor — heatup and cooldown limits are different). Per S2.OP-SO.RC-0002 Section 5.4, during PZR degassing via 2PR1 (PZR PORV), maintain <span class="hi-exam">PRT pressure less than <span class="val-alarm">10 psig</span></span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-c</div>
At 4% power, PZR Spray Valve <span class="hi-exam">2PS1 fails open</span>, depressurizing the RCS. Per AB.PZR-0001 the operator places 2PS1 in MANUAL and depresses CLOSE, but <span class="hi-exam">2PS1 remains open</span> so pressure control cannot be regained. With RCS pressure dropping rapidly the operator <span class="hi-exam">trips the reactor</span>, then <span class="hi-exam">stops 21 and 23 RCPs</span> (whose Loop 1/3 cold-leg flow feeds the open spray path), and <span class="hi-exam">stops a second RCP (22 OR 24)</span> while pressure continues to drop, leaving one RCP running, then enters EOP-TRIP-1.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-a</div>
PZR pressure channel 1 fails high causing both spray valves to open fully and rapid RCS pressure decrease. Operator places MPC in manual and lowers demand. <span class="hi-exam">Alternate path: 2PS1 spray valve fails to close</span> when MPC demand is zeroed. Operator places <span class="hi-exam">2PS1 in MANUAL and closes</span>. If 2PS1 cannot be closed, CAS at <span class="val-trip">2000 psig</span> directs reactor trip and stopping <span class="hi-exam">21 and 23 RCPs</span> (spray is fed from Loops 1 and 3 cold legs).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
During startup at 3% power, controlling PZR Pressure Channel I fails high — de-energizes PZR heaters and <span class="hi-exam">fully opens both spray valves</span>. RO places Master Pressure Controller (MPC) in manual, lowers demand to close spray valves, selects <span class="hi-exam">Channel III</span> for control. RO closes <span class="hi-exam">2PR6</span> and places 2PR1 in Manual, WCC removes control power from 2PR6. Channel removed from service IAW S2.OP-SO.RPS-0003. Tech Specs entered: 3.3.1.1 Action 6, 3.3.2.1.b Action 19, <span class="hi-exam">3.4.5 Action b (1 hr LCO)</span>, 3.2.5 DNB (2 hr LCO).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
PZR spray valve 2PS3 fails to close during SGTR-1 RCS depressurization. Both spray valves opened for depressurization per Table D criteria. When termination criteria met, RO closes both valves — <span class="hi-exam">2PS3 fails to close</span>. Recovery: <span class="hi-exam">stop 21 and 23 RCPs</span> to eliminate spray flow path (spray valves are in the RCP seal injection lines from the cold legs of loops 1 and 3). Also: earlier in scenario, 2PR2 PORV seat leakage diagnosed via tailpipe temperature and isolated by closing block valve <span class="hi-exam">2PR7</span>.
</div>

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.4]]** — Pressurizer (level and heater requirements)
- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.5]]** — PORVs and Block Valves

## Connections

- Related systems: [[Pressurizer Level & Press Control]]
- Related procedures: [[EOP-TRIP-4 — Natural Circulation]], [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]], [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[S2.OP-SO.PZR-0003 — PRT Operation]], [[S2.OP-SO.RC-0002 — Vacuum Refill of the RCS]]
- Related EOPs: [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam questions: [[2014 Q3]], [[2014 Q36]], [[2014 Q39]], [[2016 Q11]], [[2016 Q21]], [[2016 Q23]], [[2016 Q34]], [[2016 Q36]], [[2018 Q6]], [[2018 Q8]], [[2018 Q9]], [[2018 Q25]], [[2018 Q64]], [[2018 Q65]], [[2019 Q6]], [[2019 Q7]], [[2019 Q9]], [[2019 Q10]], [[2020 Q2]], [[2020 Q5]], [[2020 Q7]], [[2020 Q33]], [[2020 Q36]], [[2023 Q32]], [[2023 Q76]], [[2022 Q2]], [[2022 Q34]], [[2015 Q29]], [[2015 Q36]], [[2015 Q79]], [[2014 Q22]], [[2014 Q23]], [[2014 Q87]], [[2012 Q7]], [[2012 Q18]], [[2012 Q19]], [[2012 Q23]], [[2012 Q37]], [[2012 Q51]]
- Related JPMs: [[2014 JPM Sim-c]], [[2014 JPM IP-j]], [[2018 JPM SRO-A2]], [[2023 JPM Sim-c]], [[2023 JPM Sim-d]], [[2022 JPM IP-i]], [[2020 JPM Sim-a]], [[2016 JPM Sim-d]], [[2016 JPM Sim-f]], [[2016 JPM IP-i]], [[2012 JPM Sim-c]], [[2012 JPM Sim-f]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2017 Scenario 7]], [[2017 Scenario 8]], [[2018 Scenario 1]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 4]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2015 Scenario 2]], [[2015 Scenario 3]], [[2015 Scenario 4]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]], [[2012 Scenario 2]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
