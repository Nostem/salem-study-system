---
title: CFCUs
category: systems
status: draft
aliases:
  - containment cooling
  - containment fan coolers
---

# CFCUs

## Function & Design Basis

The Containment Fan Cooling System recirculates and cools the containment atmosphere during normal operation and following a LOCA (UFSAR §6.2.2.2.1). It is designed to ensure containment pressure will not exceed its design value of <span class="val-trip">47 psig</span> at 271°F (100-percent relative humidity); although the post-LOCA core water is quickly subcooled by the SIS, the system is designed on the conservative assumption that core residual heat is released to containment as steam (UFSAR §6.2.2.2.1). As part of the Containment Ventilation System (Section 9.4), it removes normal equipment/piping heat loss during operation and, following a LOCA, removes sufficient heat to keep containment pressure below the design pressure; the fan coolers continue removing heat after the LOCA and reduce containment pressure close to atmospheric within the first 24 hours (UFSAR §6.2.2.2.1).

ESF design objectives (UFSAR §6.2.2.2.1):
- Each of the five fan-cooler units is normally capable of transferring heat at <span class="hi-exam">≥<span class="val-normal">44 x 10⁶ Btu/hr</span></span> from the containment atmosphere at post-accident peak conditions — a saturated air-stream mixture of <span class="val-normal">43.5 psig</span> and <span class="val-normal">265.9°F</span> (UFSAR §6.2.2.2.1).
- Section 15 analyses determined a minimum of <span class="hi-exam">three</span> fan-cooler units, with other containment heat sinks, are needed to maintain containment integrity, correlating to a cumulative heat transfer rate of <span class="hi-exam">≥<span class="val-normal">132 x 10⁶ Btu/hr</span></span> (UFSAR §6.2.2.2.1).
- The cooler coils discharge the resulting condensate without impairing fan-cooler air flow and without raising service-water exit temperature to boiling; entrained water droplets added by the Containment Spray System have essentially no effect on coil heat-removal capability (UFSAR §6.2.2.2.1).

Post-accident environmental design: the equipment is designed to operate at <span class="val-trip">47 psig</span> and 271°F for 3 hours, then in an air-steam atmosphere at 20 psig, 219°F for an additional 21 hours, with subsequent indefinite operation at 5 psig, 152°F (UFSAR §6.2.2.2.1). All components withstand or are protected from the d/ps which may occur during the rapid pressure rise to <span class="val-trip">47 psig in 10 seconds</span> (UFSAR §6.2.2.2.1). The RCFC (CFCU) units deliver designed cooling capacity under all normal and abnormal conditions; two-phase flow regions in the RCFC cooling coils following a LOCA/MSLB concurrent with a Loss of Offsite Power are prevented by maintaining the cooling coils water solid (Generic Letter 96-06) (UFSAR §6.2.2.2.1).

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 5 per unit | UFSAR §6.2.2.2.2 |
| Type | Direct-driven centrifugal fan with plate fintube cooling coils | UFSAR §6.2.2.2.2 |
| Normal Operation Airflow | 110000 cfm each | UFSAR §6.2.2.2.2 |
| Accident Operation Airflow | 40000 cfm each (≥39000 cfm against accident resistance) | UFSAR §6.2.2.2.2 |
| Heat Removal (accident, per unit) | ≥44 x 10⁶ Btu/hr each at 43.5 psig / 265.9°F | UFSAR §6.2.2.2.1 |
| Heat Removal (3 units, cumulative) | ≥132 x 10⁶ Btu/hr | UFSAR §6.2.2.2.1 |
| Service Water Flow (per unit, accident) | Minimum 1300 gpm | UFSAR §6.2.2.2.2 |
| Service Water Flow (per unit, normal target) | ~1900–2100 gpm (header-pressure dependent) | UFSAR §6.2.2.2.2 |
| Design SW/river inlet temperature | 90°F | UFSAR §6.2.2.2.2 |
| SW outlet temperature (design basis) | 160°F (205°F zero-fouling) | UFSAR §6.2.2.2.2 |
| Containment net free volume | 2620000 ft³ | UFSAR §6.2.2.2.2 |
| Recirculation rate (5 fans, accident) | ~4.5 containment volumes/hr | UFSAR §6.2.2.2.2 |
| Location | Operating floor, between containment wall and polar crane wall | UFSAR §6.2.2.2.2 |
| Seismic Classification | Class I | UFSAR §6.2.2.2.2 |

## Key Components

Each of the five air-handling units includes a motor, fan, motor heat exchanger, cooling coils, roughing filters, dampers, duct distribution system, instrumentation, and controls (UFSAR §6.2.2.2.2). The Containment Fan Cooling System is illustrated on Plant Drawings 205238 and 205338; components and supports meet Class I (Seismic) requirements and are isolated from fan vibration (UFSAR §6.2.2.2.2).

### Fan-Motor Units

The five containment cooling fans are centrifugal, non-overloading, direct-drive type, each providing a minimum flow of <span class="val-normal">39000 cfm</span> against the system resistance existing during accident conditions (0.172 lb/ft³ density, 47 psig, 271°F) (UFSAR §6.2.2.2.2). The two-speed motors are totally enclosed, fan cooled (TEFC), <span class="hi-exam">300 hp (high speed)</span>, induction type, 3 phase, 60 cycle, 1200 RPM, 460 volt; at low speed the motor delivers <span class="hi-exam">100 hp</span> (UFSAR §6.2.2.2.2). Insulation is Class F (NEMA total temperature 155°C) Westinghouse Thermalastic; motor insulation hot-spot temperature is not expected to exceed 113°C at accident conditions (271°F, 100 hp) (UFSAR §6.2.2.2.2). The motors are loaded to approximately 275 hp during normal heat-removal service (UFSAR §6.2.2.2.3). Overload protection is provided at the switchgear by overcurrent trip devices in the motor feeder breakers; the breakers can be operated from the Control Room and reclosed from the Control Room following a motor overload trip (UFSAR §6.2.2.2.2). Bearing temperatures would be 125°C to 140°C under accident conditions; the motor heat exchanger uses a conservative 0.002 fouling factor (UFSAR §6.2.2.2.2).

### Motor Heat Exchanger

Fan cooler motors are cooled by an air-to-water heat exchanger connected to the motor to form an entirely enclosed cooling system; air movement is through the heat exchanger and returned to the motor (UFSAR §6.2.2.2.2). Two vent valves permit containment ambient air to enter the cooling compartment on increasing containment pressure so the motor bearings are not subjected to an excessive d/p; cooling water is supplied by the Service Water System (UFSAR §6.2.2.2.2).

### Cooling Coils

Coils are fabricated of AL-6X tubing; heat-removal capability is at least <span class="val-normal">44 x 10⁶ Btu/hr</span> per fan-cooler unit at peak saturation conditions (265.9°F, 43.5 psig) (UFSAR §6.2.2.2.2). The design internal pressure of each coil is 200 psig. Each recirculating unit consists of 12 coil units mounted in two banks of 6 coils high, located one behind the other for horizontal series air flow, with horizontal tubes and vertical fans (UFSAR §6.2.2.2.2).

### Roughing & HEPA Filters

Roughing filters remove the larger suspended dust/dirt during normal power operation, normal reactor shutdown, and loss of offsite power, preventing buildup on the cooling coils; they are arranged in two banks of structural steel frame and removable fiberglass-media cells, each capable of removing 90 percent of visible dust particles, with 70 percent NBS-rated media efficiency (UFSAR §6.2.2.2.2). The HEPA filters (in each cooler) remove particulate from the containment atmosphere; arranged in a structural steel frame and individually removable, the fiberglass media with asbestos separators collects 99 percent of particles 0.3 micron and larger from a saturated (100-percent RH) 271°F atmosphere processed at 250–300 fpm, meeting MIL-F-51079 and MIL-STD-282 (UFSAR §6.2.2.2.2).

### Moisture Separator

A moisture separator in each fan cooler removes the larger droplets of suspended moisture from the containment atmosphere during a LOCA, preventing water deluge over the HEPA filter face; each element removes 95 percent of water droplets 10 microns and larger (UFSAR §6.2.2.2.2). Coils are provided with drain pans and drain piping to prevent flooding during accident conditions; condensate is drained to the containment sump (UFSAR §6.2.2.2.2).

### Ducting & Dampers

Ducts are welded and flanged construction, galvanized sheet metal, designed to Class I seismic criteria and to withstand the sudden release of RCS and chemical-reaction energy without damper failure (dampers open at slight overpressure of 3.0 psi) (UFSAR §6.2.2.2.2). All air-control dampers integral to the fan coolers are Class I seismic. The backdraft damper at each fan-cooler discharge is a normally closed counter-weighted device that opens automatically when the fan operates and withstands an approximate <span class="val-trip">7-psi air pressure surge over a 10-second period</span> (UFSAR §6.2.2.2.2). Two-position shut-off dampers divert flow through the HEPA filters and moisture separators during a LOCA or through the roughing filters during normal operation: the <span class="hi-exam">roughing-filter dampers are normally open and fail closed; the HEPA-filter dampers are normally closed and fail open</span>, and both revert to their fail positions after a safety injection signal (UFSAR §6.2.2.2.2). Each two-position damper has redundant pneumatic operators providing 150 percent of design operating torque and withstands a 3-psi surge over 10 seconds. Pressure-relief dampers in the filter enclosures are normally closed counter-weighted devices that open progressively as the d/p exceeds 0.25 psi and, during a LOCA, limit the d/p to 3 psi to maintain fan-cooler structural integrity (UFSAR §6.2.2.2.2).

## Power Supplies

The two-speed fan-cooler motors are 460-volt induction motors fed through motor feeder breakers at the switchgear, where overcurrent trip devices provide overload protection; the breakers are operable and reclosable from the Control Room (UFSAR §6.2.2.2.2). The five CFCUs per unit are distributed across the three 4KV Vital Buses, which feed the 460V motor breakers; the bus-to-CFCU mapping below is the load distribution tested repeatedly on the exam.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q45</div>
CFCU power supplies are <span class="hi-exam">A, B, C, B, C for 21-25 CFCUs</span>. After a LBLOCA + LOOP with the 2C 4KV vital bus locked out (bus differential) and 2B SEC failed to actuate, only the A-bus CFCU (21) runs. The <span class="hi-exam">minimum complement for containment integrity with one ECCS train running is 1 CS pump and 3 CFCUs</span>, so the FIRST action that restores the 3 CFCUs is depressing the START PB for 22 AND 24 CFCUs. See [[Containment Spray]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q34</div>
A loss of the 1A 4KV vital bus removes the <span class="hi-exam">11 CFCU</span> (along with 11 RHR, 11 CS, and 13 Charging). For a small (1") RCS break, containment pressure does not rise to the CS requirement, so the loss of 11 CFCU does not change the containment pressure response.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q13</div>
Unit 1 CFCU power distribution: with <span class="hi-exam">1A 4KV Vital Bus de-energized, ONLY 11 CFCU is stopped</span>. Confirms that <span class="hi-exam">11 CFCU is powered from the A bus</span> (consistent with Unit 2 pattern: 21 CFCU on A bus). 5 CFCUs powered from 3 vital buses — knowing the bus-to-CFCU mapping is critical for determining available cooling capacity following bus losses.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q9</div>
MSLB + LOOP with 2C 4KV Vital Bus lost (OHA J-3, 2C 4KV VTL BUS DIFF PROT): <span class="hi-exam">23 and 25 CFCUs unavailable (both normally on C bus)</span>. 21 CFCU failed independently (OHA C-5 indicates 21SW223 outlet flow control valve closed; BEZEL 1-2 low air flow — even with SW58/SW72 open, CFCU is inoperable). Only <span class="hi-exam">22 &amp; 24 CFCUs (B bus) and 21 CS Pump (A bus) available</span>. Containment cooling design bases require <span class="hi-exam">3 CFCUs and 1 CS pump — with only 2 CFCUs, design bases NOT met</span>. <span class="hi-trap">22 CS Pump is on C bus (unavailable), NOT B bus. Both CS pumps are NOT available — only 21 CS Pump (A bus) is running.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q17</div>
During a DBA LBLOCA with 2B EDG tripped (LOOP conditions), <span class="hi-exam">22 and 24 CFCUs are NOT available</span> — they are powered from the 2B 4KV Vital Bus. The LOCA-5 mitigation strategy to "Run All CFCUs in High Speed" is therefore <span class="hi-trap">not implementable</span> under these conditions.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q39</div>
CFCU power distribution from 4KV Vital Buses: <span class="hi-exam">21 CFCU (A bus), 22 CFCU (B bus), 23 CFCU (B bus, CIT), 24 CFCU (B bus), 25 CFCU (C bus)</span>. Loss of 2B 4KV Vital Bus = 22 and 24 CFCUs unavailable. Only 21 (A bus) and 25 (C bus) remain available. Note: 23 CFCU is <span class="hi">normally on C bus</span> but was CIT (Connected In Test) to B bus in the 2023 Q39 scenario. Per 2020 Q9, normal alignment has 23 on C bus.
</div>

## Automatic Features & Setpoints

The Fan Cooling System is actuated in the post-accident (low-speed) mode by a safety injection signal; the accident analysis assumes the CFCU initiating SI signal was containment high pressure because it is the limiting time-delay case (UFSAR §6.2.2.2.2). Either all five fans or a minimum of three fans are started by the safeguards equipment controller (SEC), depending on the availability of emergency power (UFSAR §6.2.2.2.2). The water valves and air dampers are actuated to the accident position by closure of the fan low-speed breaker (UFSAR §6.2.2.2.3). The tight-closing dampers that isolate the post-accident filter section are tripped to the accident position upon either manual or automatic actuation of the respective fan; four-way solenoid valves control instrument air to the damper cylinders, and on a loss of either control air or control power the dampers fail to the accident (open) position (UFSAR §6.2.2.2.2). A flow switch at each fan indicates whether air is circulating in the intended normal or post-accident flowpath, with indication and alarms in the Control Room (UFSAR §6.2.2.2.2). Section 15 accident analysis also assumes a 10-percent heat-transfer degradation for the first two minutes of diesel-powered fan-cooler operation, accounting for nitrogen released from solution in the service-water accumulators (Generic Letter 96-06) (UFSAR §6.2.2.2.2).

### SEC Response & Speed Control

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q35</div>
On a Safety Injection the CFCUs shift to <span class="hi-exam">slow speed</span>, which causes <span class="hi-exam">OHA C-12 (22 CFCU AIRFLO TRBL)</span> to annunciate — this alarm is EXPECTED during the LOCA/SI response (it indicates the CFCU is running in slow speed, not a fault).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q41</div>
SEC MODE 1 (SI with vital power) CFCU response: <span class="hi-exam">by procedure, a maximum of 4 CFCUs can be running in High Speed</span>. On MODE 1 SEC initiation, <span class="hi-exam">ALL CFCUs running in high speed will be stopped, then ALL CFCUs (including the 5th non-running CFCU) will start in LOW speed</span>. CFCUs swapping to low speed receive a stop signal, then a time delay to allow motor to coast down, before the Low speed start signal occurs. <span class="hi-trap">Distractors "only running CFCUs swap speed" miss that the 5th non-running CFCU also receives the low-speed start signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q27</div>
Confirms SEC Mode 1 CFCU behavior: with 21-24 CFCUs running in high speed and 25 CFCU stopped at time of RT/SI, <span class="hi-exam">at 10 minutes post-event ALL five CFCUs (including previously-stopped 25 CFCU) are running in LOW speed</span>. SEC Mode 1 stops the running CFCUs, then starts ALL five in low speed. <span class="hi-trap">Trap: the SEC does not skip stopped CFCUs — it starts ALL five. Standby/stopped CFCUs receive the same low-speed start command as previously-running ones.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q55</div>
SEC Mode 1 (SI only, no LOOP) CFCU response: <span class="hi-exam">SEC trips ALL high-speed 460V breakers (including standby CFCUs), then after a 20-second time delay, starts ALL five CFCUs in low speed</span>. The SEC does NOT use load sequencers in Mode 1. A CFCU in standby receives the same treatment — high-speed breaker trips, then <span class="hi-exam">low-speed breaker closes after 20 seconds</span>. <span class="hi-trap">There is NO immediate start for standby CFCUs — ALL CFCUs (running and standby) start in low speed after the same 20-second delay.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q25</div>
<span class="hi-exam">In LOW speed, CFCU dampers realign flow through HEPA filters (bypassing roughing filters) to reduce radioactivity inside containment.</span> In HIGH speed (normal), flow goes through roughing filters. EOP-FRCE-3 directs placing all CFCUs in LOW speed for containment atmosphere cleanup.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q38</div>
<span class="hi-exam">SEC Mode 1 (SI only): running CFCUs are tripped, then all five auto-start in LOW speed after a 20-second delay</span> (coastdown period before restart). To restore manual HIGH speed control: must reset <span class="hi-exam">BOTH trains of SI AND all SECs</span>. Resetting SI alone is NOT sufficient. EOP-TRIP-3 step 1 accomplishes this.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-b</div>
APPX-7 Step 2 verification: <span class="hi-exam">CHECK ALL AVAILABLE CFCUs running in Low Speed</span>. Confirms post-LOCA Containment Heat Removal CFCU alignment is intact prior to securing the CS flow path and re-attempting RHR sump suction.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
21 CFCU fails to start in LOW speed on SEC signal following reactor trip/SI for SGTR. <span class="hi-exam">21 CFCU is powered from 2A 4KV bus</span>. Recovery: PO blocks 2A SEC, PO resets 2A SEC, RO manually starts 21 CFCU in LOW speed. This demonstrates the SEC block/reset/manual start sequence tested across multiple 2022 scenarios.
</div>

### Service Water Flow Control Valve (SW223)

With the CFCU fixed-resistance control scheme, restricting orifices together with the flow control valve are sized/set to establish a target flow of approximately <span class="val-normal">1900 to 2100 gpm</span> for each CFCU, dependent on service-water header pressure; this is significantly higher than the nominal flow required to keep containment ambient temperature ≤ the Tech Spec value of 120°F (UFSAR §6.2.2.2.2). During normal operation the flow control valve opens to its open-limit stop position (approximately 50 percent open) (UFSAR §6.2.2.2.2). During a safety injection the flow control valve also opens to its open-limit stop to provide minimum flow of <span class="val-normal">1300 gpm</span> to each CFCU, and closes when the fan-cooler unit is not in use (UFSAR §6.2.2.2.2). The associated solenoid valve is de-energized to apply control-air header pressure to the valve operator (closing the valve) whenever the RCFC fans are not running or DC power is lost; it is energized to apply the pneumatic control signal to the flow control valve operator when the RCFC fan operates in high or low speed (UFSAR §6.2.2.2.2).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q46</div>
The <span class="hi-exam">CFCU Airflow Trouble alarm WILL be in alarm following an accident</span> — it occurs when the damper alignment is not correct for HIGH speed while the CFCU runs in LO speed (the post-accident lineup). In contrast, the <span class="hi-trap">"24 CFCU WTRFLO TRBL" (OHA C-29) is NOT expected with the CFCU running — it indicates a CFCU SW valve alignment problem.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q46</div>
CFCU SW flow control valve <span class="hi-exam">SW223 has a position limiter (~50% travel)</span> and opens to that mechanical stop on a start signal from EITHER low or high speed. Therefore <span class="hi-exam">steady-state SW flow is the SAME for low and high speed operation</span> — it does NOT rise or lower when transferring speed (the CFCU is normally stopped ~30 seconds during the transfer). <span class="hi-trap">Distractor "rise or lower based on initial SW header pressure" assumes header pressure changes — it does not in a steady-state-to-steady-state comparison.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q63</div>
On a LOOP + SI (MODE 3) with the 2B EDG output breaker failing to close, the <span class="hi-exam">CFCU 223 (CV FANS SW OUTLET) valves OPEN on the MODE 3 signal</span>, but <span class="hi-trap">22 and 24 CFCUs do NOT start in slow speed because of the loss of 460V power</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q42</div>
CFCU SW flow control valve <span class="hi-exam">SW223 has a position limiter, typically 50% travel</span>. SW223 opens on a start signal from either low speed or high speed. <span class="hi-exam">With the mechanical stop employed, steady-state SW flow is the same for high speed or low speed operation</span>. The CFCU is normally stopped for ~30 seconds when transferring speed (no flow during transient). <span class="hi-trap">Distractor "rise or lower based on initial SW header pressure" is plausible if SW header pressure is assumed to change, but in steady-state-to-steady-state comparisons it does not.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q41</div>
CFCU SW flow via 2SW223: mechanical stop limits valve travel to <span class="hi-exam">~50%</span>. SW223 opens to the mechanical stop when the CFCU is in service and closes when the CFCU is out of service. <span class="hi-exam">SW flow is the same in both HIGH and LOW speed fan operation</span> — the SW223 valve position does not change with fan speed. <span class="hi-trap">SW flow does NOT increase in LOW speed (accident) mode. The fixed-resistance flow scheme (inlet/outlet orifices + mechanical stop) ensures constant SW flow regardless of fan speed.</span>
</div>

## Design Features & Interlocks

Air leaving the fan cooler under accident conditions enters the cooling coils at approximately 271°F with a density of 0.172 pounds per cubic foot; most water vapor condenses on the coil, and the leaving air is saturated at a temperature slightly below 271°F (UFSAR §6.2.2.2.2). With a flow rate of <span class="val-normal">39000 cfm</span> from each of 5 fans under accident conditions and a containment net free volume of <span class="val-normal">2620000 ft³</span>, the recirculation rate with five fans operating is approximately 4.5 containment volumes per hour (UFSAR §6.2.2.2.2). The cooling-coil moisture from the air-steam mixture is the principal heat-removal mechanism; the coil fins operate as wetted surfaces, so entrained water droplets from the Containment Spray System have essentially no effect on coil heat removal (UFSAR §6.2.2.2.1). During normal operation, the flow sequence is inlet dampers, roughing filters, cooling coils, fan, discharge header; during post-accident operation, air is drawn through a moisture separator, the HEPA filter section, and the cooling coils, then discharged to the duct header (UFSAR §6.2.2.2.2).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q12</div>
Minimum containment cooling configurations that maintain Containment Pressure, Temperature and Humidity within design limits with a DBA: <span class="hi-exam">2 CS Pumps, OR 1 CS Pump + 3 CFCUs, OR 5 CFCUs</span>. <span class="hi-trap">Trap: 1 CS Pump alone or 1 CS Pump + 2 CFCUs are NOT sufficient for DBA containment cooling. Only 5 CFCUs (without any CS Pump) is sufficient.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q91</div>
Both EOP-TRIP-3 (SI Termination) and EOP-LOCA-2 terminate Containment Spray. <span class="hi-trap">Neither EOP addresses CS Spray Additive Tank isolation or CFCU speed — CFCU operation is governed by the SOP once the EOP network is exited to the IOP.</span> See [[Containment Spray]].
</div>

## Interconnections & Loads

The Containment Fan Cooling System is dependent on the Service Water System for cooling water to the coils and motor heat exchangers; six service water pumps are provided, only two of which are required during the post-accident period (UFSAR §6.2.2.2.3). Cooling-water requirements for all five fan-cooler units during a LOCA and recovery are supplied by the SWS; the design-basis river/service-water inlet temperature is 90°F, with a normal service-water temperature rise of approximately 8°F through the coolers and a maximum rise of approximately 70°F for less than one hour during an accident before decreasing (UFSAR §6.2.2.2.2). Service water discharge from the cooling coils is subsequently mixed with the circulating water, where radiation monitors <span class="hi-exam">R13A and R13B</span> sample the effluent prior to discharge to the river; an alarm annunciates in the Control Room on detection of high radioactivity in an effluent line (UFSAR §6.2.2.2.2). Flow and temperature indication for service water to and from each fan-cooler unit is provided outside containment, with abnormal-flow alarms for in-service units in the Control Room (UFSAR §6.2.2.2.2).

### SW Supply & Isolation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q47</div>
SW supply mapping: <span class="hi-exam">21 and 22 CFCUs from 21 nuc header; 24 and 25 CFCUs from 22 nuc header; 23 CFCU from BOTH headers via a check-valve arrangement</span>. With 22SW20 (Nuclear Header Supply) stuck shut isolating the 21 nuc header, <span class="hi-exam">2 CFCUs (21 and 22) lose all cooling water</span>. Restore by <span class="hi-exam">opening 21SW23 and 22SW23 (Nuclear Header X-over valves)</span>, which are downstream of 22SW20/24SW20 and cross-feed both nuc headers. <span class="hi-trap">The SW17 SW-Bay/Discharge Header x-connects are normally open and even if closed cannot restore flow past the shut 22SW20; 23 CFCU is NOT lost (dual-header check-valve supply).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q80</div>
A SW leak on <span class="hi-exam">CFCU supply piping in the 78' Mechanical Penetration Area</span> produces the SW header-pressure alarm cascade plus B-48 SW VLV RM FLOODED; AB.SW-0001 directs isolating the single affected CFCU (identifiable from the control room). See [[Service Water]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q52</div>
CFCU service water header supply: with 21SW22 (Nuclear Header Inlet Valve) closed to isolate a leak, <span class="hi-exam">23 CFCU can be supplied from EITHER 21 or 22 SW Header based on check valve locations</span>. The remaining CFCUs (21, 22, 24, 25) are supplied from only one header. Result with 21 Nuclear Header isolated: <span class="hi-exam">only 3 CFCUs available via 22 SW Header</span> (plus 23 CFCU from cross-connect). <span class="hi-trap">Not all 5 CFCUs have dual-header supply capability — only 23 CFCU has check valve placement allowing cross-header feed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q89</div>
CFCU service water isolation per AB.SW-0001 Attachment 5: <span class="hi-exam">close SW72 (Outlet Water Valve) FIRST, then SW58 (Inlet Water Valve)</span>. Basis: <span class="hi-exam">minimize the possibility of water hammer following restoration</span>. After the MOVs are closed, field manual isolation valves (SW54 CFCU SW Inlet and SW76 CFCU SW Outlet on 78' elevation) are closed to fully isolate.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 RO-A3</div>
SW leak isolation using P&ID 205342: leak on drain valve 21SW268 downstream of <span class="hi-exam">21SW76 (21 CFCU SW Outlet Valve)</span> in SW Valve Room, Auxiliary Building. Requires closing valves on multiple P&ID sheets including cross-connected header valves <span class="hi-exam">22SW76 and 22SW646</span>. Demonstrates P&ID reading skill for SW piping through CFCU cooling coil path.
</div>

### Containment Isolation

Service water to the fan coolers is not isolated by the containment isolation signals; the SW system containment penetrations and closed systems are designed with pressure-relief capability (or shown not susceptible to large internal pressure increases) so that the boundary is protected from thermally induced overpressures (UFSAR §6.2.2.2.2).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q13</div>
<span class="hi-exam">R13 radiation monitors monitor CFCU service water DISCHARGE for radioactivity from containment into the SW system. CFCU SW flow discharges into the OPPOSITE unit's Circulating Water system.</span> Loss of the opposite unit's CW flow prevents monitoring of this effluent pathway.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q24</div>
<span class="hi-exam">Service water to CFCUs is NOT isolated by Phase A or Phase B containment isolation signals.</span> Following a LOCA with both Phase A and B actuated, SW from CFCUs is the only source of water into containment that remains unisolated (Fire Protection isolated on Phase A, CCW on Phase B, Primary Water on Phase A).
</div>

## Effects of Loss / Malfunction

A single-active-failure analysis for all active components shows that the failure of any single active component will not prevent fulfilling the design function (summarized in UFSAR Table 6.2-7); this is consistent with the Section 15 LOCA analysis (UFSAR §6.2.2.2.3). Assuming a single active failure of a CFCU high-speed breaker to open following an SEC MODE I or III accident signal, the service-water outlet temperature could reach 209°F (versus the 160°F design-basis / 205°F zero-fouling values) (UFSAR §6.2.2.2.2). The fan cooler units are located on the operating floor adjacent to the containment wall, with the distribution header below the operating floor between the polar crane wall and the containment wall, providing missile protection for all components; post-accident control and instrumentation devices are located to minimize loss due to missile damage (UFSAR §6.2.2.2.3).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q40</div>
Factors affecting CFCU heat removal and containment temperature:<br>
- <span class="hi-exam">LOW speed = <span class="val-normal">47000 cfm</span> vs HIGH speed = <span class="val-normal">110000 cfm</span></span> — lower airflow reduces heat transfer across cooling coils → containment temp RISES.<br>
- <span class="hi-exam">Increase in SW temperature</span> → reduced delta-T across cooling coils → heat transfer decreases → containment temp RISES.<br>
- <span class="hi-trap">Starting additional SW pumps INCREASES SW header pressure and flow across the orifice → INCREASES heat transfer → containment temp LOWERS (not rises).</span><br>
- <span class="hi-trap">Erosion of the flow orifice upstream of SW223 INCREASES SW flow → INCREASES heat transfer → containment temp LOWERS (not rises).</span>
</div>

## Control-Room Operation

Indication and alarms for the fan-cooler air-flow switches, abnormal SW-flow alarms for in-service units, and SW flow/temperature for each unit are provided in the Control Room (UFSAR §6.2.2.2.2). The motor feeder breakers are operable from the Control Room and can be reclosed from the Control Room following a motor overload trip (UFSAR §6.2.2.2.2). Each fan cooler can be tested for operability and functional performance periodically and after component maintenance; four of the fan-cooler units are in use during normal operation and the fan not in use can be started from the Control Room to verify readiness (UFSAR §6.2.2.2.4). The dampers directing flow through the post-accident filter section can be tested with the fan running on low speed (UFSAR §6.2.2.2.4).

### Containment Heat Removal & Isolation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q90</div>
Per SO.SW-5 Attachment 2: <span class="hi-exam">in Modes 1-3, isolating CFCU #23 from either SW supply header (closing manual cross-connect 21SW52 or 22SW52) makes that CFCU inoperable — TS 3.6.2.3 action</span>. With 21 CFCU also C/T, two CFCUs (21 and 23 ONLY; not 22) are inoperable; <span class="hi-exam">BOTH must be restored within 7 days of the FIRST CFCU being declared inoperable</span>. See [[Service Water]], [[TS 3/4.6 — Containment]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
21 SW Accumulator Tank pressure drops below operable band (<span class="hi-exam">138-157 psig</span>) — 21 and 22 CFCUs declared inoperable. PO stops 21 and 22 CFCUs and isolates from field by closing 21/22 SW76 and 21/22 SW54. CRS enters <span class="hi-exam">TS 3.6.1.1 (1 hour)</span> for containment integrity and <span class="hi-exam">TS 3.6.2.3 (14 days)</span> for two CFCUs inoperable.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
25 CFCU trips in low speed on overcurrent protection (low speed breaker open, overcurrent flag up at 84 ft switchgear room). CRS directs starting 23 CFCU in high speed. TS entries: <span class="hi-exam">TS 3.6.2.3 Action a (14 days)</span> and <span class="hi-exam">TS 3.6.1.1 (1 hour containment integrity until control power removed)</span>. CRS directs WCC to open control power for 25 CFCU high and low speed breakers to satisfy containment integrity requirements.
</div>

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — TS 3.6.2.3 requires at least 3 CFCUs OPERABLE
- 1 inoperable (of required 3): 7 days to restore
- 2 inoperable: 72 hours to restore

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q65</div>
CFCU operability (TS 4.6.2.3.a) includes <span class="hi-exam">SW Accumulator level, pressure, and temperature</span>. Because Containment Integrity (TS 3.6.1.1) surveillance 4.6.1.1.d invokes 4.6.2.3.a, a SW Accumulator nitrogen cover-gas pressure below minimum fails Containment Integrity. See [[Containment]], [[TS 3/4.6 — Containment]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 SRO-A1-1</div>
Review a completed S2.OP-ST.CBV-0003 surveillance to determine 21 CFCU operability after corrective maintenance. The discriminating catch: the recorded Minimum Flow Rate for 91 psid (<span class="hi-exam">1638 gpm</span>) is wrong — the performer rounded down instead of up per P&amp;L 3.4; the correct minimum is <span class="hi-exam">1683 gpm</span>. With the corrected minimum, the actual Cooling Water Flow of <span class="hi-exam">1675 gpm is below 1683</span>, so the surveillance is <span class="hi-exam">UNSAT</span> (21 CFCU NOT operable), not SAT.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-f</div>
25 CFCU operability + SW flow verification IAW S2.OP-ST.CBV-0003 (start CFCU in LOW SPEED via S2.OP-SO.CBV-0001). Two-part acceptance: minimum SW flow must be <span class="hi-exam">≥1465 gpm</span> (measured ~1675 gpm = SAT); separately, minimum cooling water flow is read from Exhibit 1 against SW header DP. Reported 22 SW header DP = <span class="hi-exam">91 psid</span>, which per P&L 3.4 rounds <span class="hi-exam">up to 95 psid</span>; measured cooling water flow does not meet the Exhibit-1 minimum at 95 psid → <span class="hi-exam">Cooling Water Flow Rate UNSAT</span> while SW flow is SAT. Damper alignment for low speed: ROUGH FLTR DAMPER CLOSED, HEPA INLET/OUTLET OPEN.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A1-1</div>
21 CFCU operability surveillance review (S2.OP-ST.CBV-0003): SRO must catch reviewer's misapplication of P&L 3.4. Recorded DP <span class="hi-exam">87 psid</span> falls between Exhibit 1 increments — surveillance was incorrectly recorded with minimum flow rounded DOWN to <span class="hi-exam">1592 gpm</span>. Correct minimum (round UP to next higher DP) is <span class="hi-exam">1638 gpm</span>. Actual SW flow 1625 gpm &lt; 1638 → <span class="hi-exam">surveillance UNSAT, 21 CFCU INOPERABLE</span>. Compares against the running-RO version (2018/2019/2023 Sim-f) where the same trap appears at 106 psid DP.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-f</div>
22 CFCU surveillance test (S2.OP-ST.CBV-0003): shift from high speed to low speed via S2.OP-SO.CBV-0001 (HIGH SPEED STOP → wait <span class="hi-exam">25 seconds</span> → LOW SPEED START). Verify damper positions (ROUGH FLT DAMPER CLOSED, HEPA INLET/OUTLET OPEN). Verify SW flow >= <span class="hi-exam">1465 gpm</span>. After 15 minutes, record SW flow (~<span class="hi-exam">1786 gpm</span>) and SW header DP (<span class="hi-exam">106 psi</span>). Per P&L 3.4, measured DP of 106 psi rounds up to <span class="hi-exam">110 psid = 1811 gpm minimum required</span>. Actual flow 1786 gpm < 1811 gpm → <span class="hi-exam">test result UNSAT, 22 CFCU inoperable</span>. Same discriminating concept as 2019 and 2023 CFCU JPMs.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 SRO-A5</div>
Emergency classification with degraded CFCUs: 21 CFCU C/T for cooler leak, 22 and 23 CFCUs failed to start in LOW SPEED — <span class="hi-exam">only 24 CFCU running</span>. Combined with containment pressure 35 psi and one CS pump in service → meets <span class="hi-exam">CB8.P (containment barrier potential loss, 2 pts)</span>: containment pressure > 15 psig AND one CS train in service AND < 3 CFCUs running in low speed.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-f</div>
22 CFCU surveillance test IAW S2.OP-ST.CBV-0003. Shift from high speed to low speed using S2.OP-SO.CBV-0001 (HIGH SPEED STOP → wait <span class="hi-exam">25 seconds</span> → LOW SPEED START). After 15 minutes, record SW flow (~<span class="hi-exam">1787 gpm</span>) and SW header DP (<span class="hi-exam">106 psi</span>). Per P&L 3.4, measured DP of 106 psi rounds up to next higher value (<span class="hi-exam">110 psid = 1811 gpm minimum</span>). Actual flow less than minimum → <span class="hi-exam">test result UNSAT, 22 CFCU inoperable</span>. P&L 3.3: both >= 1465 gpm AND >= Exhibit 1 minimum required for operability.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A4</div>
Containment entry for 22 CFCU tagging (Mode 1, 100% power): at the 22 CFCU area on 130' elevation, survey map shows <span class="hi-exam">gamma dose rate = 5 mrem/hr, neutron dose rate = 40 mrem/hr</span>. With RP-imposed limits of 0.002 REM gamma / 0.008 REM neutron, the <span class="hi-exam">neutron dose is the most limiting factor at 12 minutes</span> (shorter than gamma 24 min and heat stress 15 min).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU surveillance (S2.OP-ST.CBV-0003): if measured SW header DP is between Exhibit 1 values, per P&L 3.4 select minimum flow for the <span class="hi-exam">next HIGHER DP value</span>. At 106 psi DP (between 105 and 110), required minimum is <span class="hi-exam">1811 gpm (at 110 psi)</span>. Actual ~1785 gpm = <span class="hi-exam">UNSAT / inoperable</span>. Also: CFCU SW flow must be <span class="hi-exam">>=1465 gpm</span> in all cases (P&L 3.3).
</div>

## Connections

- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[RP-AA-300 — Radiological Survey Program]]
- Related EOPs: [[EOP-APPX-7 — Containment Sump Blockage]]
- Related exam questions: [[2014 Q34]], [[2014 Q35]], [[2015 Q16]], [[2016 Q41]], [[2016 Q42]], [[2018 Q12]], [[2018 Q24]], [[2018 Q27]], [[2018 Q74]], [[2018 Q75]], [[2019 Q13]], [[2019 Q15]], [[2020 Q9]], [[2020 Q17]], [[2020 Q40]], [[2020 Q52]], [[2020 Q89]], [[2023 Q13]], [[2023 Q24]], [[2023 Q25]], [[2023 Q38]], [[2023 Q39]], [[2022 Q41]], [[2022 Q55]], [[2015 Q65]], [[2015 Q80]], [[2015 Q90]], [[2015 Q91]], [[2014 Q46]], [[2014 Q47]], [[2014 Q63]], [[2012 Q26]], [[2012 Q45]], [[2012 Q46]]
- Related JPMs: [[2016 JPM SRO-A1-1]], [[2018 JPM SRO-A5]], [[2018 JPM Sim-f]], [[2019 JPM Sim-f]], [[2023 JPM Sim-f]], [[2022 JPM RO-A4]], [[2022 JPM SRO-A4]], [[2020 JPM RO-A3]], [[2016 JPM Sim-b]], [[2014 JPM Sim-f]], [[2012 JPM SRO-A1-1]]
- Related scenarios: [[2018 Scenario 2]], [[2022 Scenario 4]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2015 Scenario 1]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
