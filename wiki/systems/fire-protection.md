---
title: Fire Protection
category: systems
status: draft
aliases:
  - fire suppression
---

# Fire Protection

## Function & Design Basis

The Salem Generating Station Fire Protection Program is established to prevent significant fires, to ensure the capability to shut down the reactors and maintain them in a safe shutdown condition, and to minimize radioactive releases to the environment in the event of a significant fire (UFSAR §9.5.1.1). It implements a defense-in-depth philosophy by (1) preventing fires from starting, (2) rapidly detecting, controlling, and promptly extinguishing fires that occur, and (3) protecting structures, systems, and components important to safety so that a fire not promptly extinguished will not prevent safe shutdown of the plant (UFSAR §9.5.1.1).

The program consists of design features, equipment, personnel, and procedures, and is documented through a program description (basis and NRC commitments, compared to Appendix A of BTP APCSB 9.5-1), an Appendix R post-fire safe-shutdown report, a cable-routing report, and a Fire Hazards Analysis defining fire-area boundaries per BTP-APCSB 9.5-1 Appendix A (UFSAR §9.5.1.1).

Fire protection system requirements were **removed from the Salem Technical Specifications** after the FSAR was updated to incorporate the Fire Protection Program, as specified in Generic Letters 86-10 and 88-12; the former Limiting Conditions for Operation and Surveillance Requirements were incorporated into Administrative and Surveillance Procedures (UFSAR §9.5.1.1.4). (There is therefore no fire-protection LCO in the current Tech Specs.)

The fire detection and alarm systems are designed and installed as a "Class B" supervised signaling system; the system is **not safety related** (UFSAR §9.5.1.6.1). The largest single fire-protection system demand is <span class="val-normal">1544 gpm at 74 psig</span> for a main power transformer (UFSAR §9.5.1.7.1).

## Key Components

- **Fresh water storage tanks:** Two independent fresh water storage tanks, each with a capacity of <span class="val-normal">350000 gallons</span> — <span class="val-normal">300000 gallons reserved for fire protection</span> and 50000 gallons available for domestic service (UFSAR §9.5.1.7.1). Each tank can supply the greatest system demand plus an additional 500 gpm for hose streams for a minimum of 2 hours, representing 100 percent redundant capacity (UFSAR §9.5.1.7.1).
- **Diesel-driven fire pumps:** Two redundant diesel-driven fire pumps, each rated <span class="val-normal">2500 gpm at 135 psig</span> (UFSAR §9.5.1.7.1). Each pump has its own driver with independent power supplies and controls on a structural steel base, controlled by a combined manual and automatic panel (UFSAR §9.5.1.7.1). The two fire pumps and their fuel-oil day tanks are located in one room (the Fire Pump House), which is protected by a wet-pipe sprinkler system; each pump is mounted on a 12-inch-high concrete pedestal — alternative provisions the NRC accepted in lieu of locating the pumps in separate fire areas (UFSAR §9.5.1.7.1).
- **Pressure-maintenance (jockey) pump:** Supplies water to make up for minor system leaks and avoids frequent fire-pump starts from minor system fluctuations (UFSAR §9.5.1.7.1).
- **Yard fire main and indoor header:** A separate discharge header from each fire pump connects to an underground yard fire-main loop encircling the station; fire hydrants, each with two 2-1/2 inch hose connectors, tie into the loop (UFSAR §9.5.1.7.1). A looped indoor header supplied from the underground loop feeds deluge water-spray systems, sprinkler systems, and standpipes throughout the Auxiliary Building, Containment, Turbine-Generator area, Service Building, Administration Building, and main transformer area; the piping is sectionalized by valves so selected lengths can be isolated (UFSAR §9.5.1.7.2).
- **Standpipes and hose stations:** All standpipes are 2-1/2 inch diameter; the individual branch supply to each hose reel is 1-1/2 inch; hose stations carry 1-1/2 inch fire hose with an adjustable fog nozzle (UFSAR §9.5.1.7.3). Hose stations are not provided in the Service Water Pump House (access is from outside; a yard hydrant serves it) (UFSAR §9.5.1.7.3).
- **Portable fire extinguishers:** Provided at specific locations throughout the station; selection and spacing based on NFPA 10 (UFSAR §9.5.1.7.4).

## Power Supplies

The fire pumps are **diesel-driven**, each with its own driver and independent power supplies and controls (UFSAR §9.5.1.7.1). Detector and alarm circuits are Class B supervised signaling circuits; the overhead annunciator in each Control Room indicates alarm and trouble signals as well as **loss of DC power** to the detection system (UFSAR §9.5.1.6.1).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q65</div>
Both fire pumps running (OHA A-15 FIRE PMP 1/2 RUN, OHA A-23 FIRE PUMP 1/2 TRBL) with <span class="hi-exam">no fire system actuations and header pressure stable at 135 psig</span>: cause is <span class="hi-exam">loss of normal AC power to BOTH fire pump battery chargers</span>. The independent battery auto-starts both fire pumps. <span class="hi-trap">Jockey pump trip is NOT an auto-start signal for the fire pumps. A momentary (1 sec) pressure drop to 70 psig would not start BOTH pumps because the #2 fire pump start includes a time delay. A major pipe rupture would cause header pressure to remain low, not stable at 135 psig.</span>
</div>

## Automatic Features & Setpoints

The fire pumps start automatically on falling system pressure in a staged sequence. The jockey pump normally maintains header pressure; should the jockey pump be unable to maintain pressure and system pressure falls, the **first fire pump automatically starts** and continues to run until manually shut off at its control cabinet in the Fire Pump House. Should the first fire pump fail to start, or if there is a large demand and pressure continues to fall, the **second fire pump automatically starts**; it likewise runs until manually shut off at its control cabinet (UFSAR §9.5.1.7.1). The UFSAR does not list the numeric auto-start pressure setpoints for the two pumps; the exam-bank setpoints below are the operating values.

Each fire pump is equipped with operating alarms that appear on the fire-pump Control Cabinet; any one of these alarms also sounds the trouble alarm on the Unit 1 Control Room overhead annunciator (UFSAR §9.5.1.7.1).

The jockey pump normally maintains header pressure between <span class="val-normal">110-120 psig</span>.

**Automatic Start Signals (operating values):**
- Fire Pump #1: Low header pressure <span class="val-alarm">&lt;85 psig</span>
- Fire Pump #2: Low header pressure <span class="val-alarm">&lt;75 psig</span> with time delay
- Both: <span class="hi-exam">Loss of normal AC power to fire pump battery chargers</span> — independent battery auto-starts both fire pumps

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q38</div>
Fire Pump auto-start and shutdown: with Fire Water Header pressure dropping to a minimum of 80 psig, <span class="hi-exam">ONLY Fire Pump #1 is running</span> (starts at <span class="val-alarm">&lt;85 psig</span>; Fire Pump #2 starts at <span class="val-alarm">&lt;75 psig</span> with time delay — header never reached 75 psig). After firefighting, running Fire Pumps can be shutdown <span class="hi-exam">LOCALLY ONLY</span>. <span class="hi-trap">Trap: fire pumps can be STARTED locally or remotely, but can only be SHUTDOWN locally. Also, both pumps do not start at the same threshold — #2 has a lower setpoint and time delay.</span>
</div>

### Water Spray / Deluge Actuation

Water spray (open-head deluge) systems are automatically released by water (hydraulic), air (pneumatic), or electrical mechanisms (UFSAR §9.5.1.7.2). Pneumatic air-pilot-line water spray systems protect the **generator main transformer banks, auxiliary power transformers, station power transformers, the reactor coolant pump lube-oil lift pump and discharge lines, and turbine/inboard-generator bearing housings** (UFSAR §9.5.1.7.2). Water-release (hydraulic) systems protect the turbine lube-oil tanks, reservoir, coolers and conditioner, the seal-oil unit, the feedwater-pump-turbine lube-oil coolers/tank, and the station air compressors (UFSAR §9.5.1.7.2). Electrical-release systems (continuous-strip thermal detectors) protect the charcoal filter banks (Control Room emergency A/C, Auxiliary Building emergency exhaust filter, containment pressure-vacuum relief, iodine removal, and Fuel Handling Building ventilation) and (thermal detectors) the Diesel Fuel Oil Storage Tank Rooms (UFSAR §9.5.1.7.2). All water-based systems are provided with Control Room alarms indicating system operation (UFSAR §9.5.1.7.2).

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
A <span class="hi-exam">Main Power Transformer (MPT) Phase 1 Sudden Pressure alarm (CRT point 529)</span> with FP <span class="hi-exam">deluge actuation at MPT Zone 46</span> occurs; OHA A-15 FIRE PUMP 1/2 RUN annunciates when either Diesel Drive Fire Pump starts. Field operator reports water spraying over MPT Phase 1 with heavy arcing/sparking. The CRS removes the Main Generator from service and trips the reactor (power &gt; P-9).
</div>

## Design Features & Interlocks

**Plant construction features.** Fire areas separate redundant trains of safe-shutdown equipment, isolate safety-related systems from fire hazards in non-safety areas, separate Unit 1 from Unit 2, and limit fire spread by compartmentalization (UFSAR §9.5.1.2.1). Fire-barrier penetrations for pipe, conduit, and cable trays are sealed to a fire-resistance rating equal to the barrier or evaluated per Generic Letter 86-10 (UFSAR §9.5.1.2.2). Fire doors in fire-area boundaries carry the UL label (except untestable oversize doors); unlocked boundary doors have a time-delay open alarm or are routinely inspected (UFSAR §9.5.1.2.3). Both 1-1/2 hour and 3 hour rated fire dampers are installed where HVAC ducts pass through fire-area boundaries (UFSAR §9.5.1.2.4). Cable wraps qualified as 1-hour electrical raceway fire-barrier systems enclose redundant cabling (UFSAR §9.5.1.2.5).

**Reactor Coolant Pump oil protection.** The RCP bearing lube-oil lift pumps are protected with fixed water fire-suppression systems discharging to four RCP oil drain tanks designed to act as oil-skimming tanks, retaining oil and draining water to the Containment Sumps (UFSAR §9.5.1.2.7). A separate RCP Lube Oil Collection System of collection pans and drainage piping collects lube oil from pressurized and unpressurized leakage points to vented closed containers fitted with a flame arrester (UFSAR §9.5.1.2.7). Inside Containment, radiant energy shields are placed between divisions at electrical penetration areas so a fire in one division's cabling will not damage another division's cables (UFSAR §9.5.1.2.8). Cables used at Salem are flame-retardant per IEEE 383 or the UL single-conductor test (UFSAR §9.5.1.2.9).

**Combustible and ignition-source control.** Bulk flammable liquids are not stored at Salem; combustible liquids in buildings with safety-related equipment are limited to the Diesel Generator Fuel Oil Storage Tanks and Day Tanks (UFSAR §9.5.1.1.2). Each Diesel Generator Day Tank is in a concrete enclosure protected by a manual CO₂ flooding system, vented outside through flame arresters; each Fuel Oil Storage Tank is in a separate fire-barrier-enclosed room within an enclosure sized to hold the entire tank volume (UFSAR §9.5.1.1.2). Hot-work permits, fire watches, and a smoking prohibition in vital areas control ignition sources (UFSAR §9.5.1.1.3).

**Suppression-agent types.** Three water-based suppression types are used — wet-pipe sprinklers, dry-pipe (pre-action) sprinklers, and water-spray systems (UFSAR §9.5.1.7.2). Two closed-head dry-pipe pre-action systems (one electrically and one pneumatically actuated for redundancy) protect the Auxiliary Feedwater Pumps on Elevation 84'; three pre-action systems protect the 460V Switchgear Room, Lower Electrical Penetration Area, and 4160V Switchgear Room, all electrically actuated on fire/smoke detection with concurrent loss of supervisory air (UFSAR §9.5.1.7.2). Other (non-water) suppression: a **manually operated foam system** protects the above-ground Bulk Fuel Oil Storage Tank ~400 ft south of the Turbine-Generator Building (UFSAR §9.5.1.7.4); **low-pressure CO₂** systems protect the Diesel-Generator Rooms, associated control rooms, day tanks, fuel-oil storage tanks and pumps, with each CO₂ tank holding enough for at least two full discharges into the largest protected area, plus a separate refrigerated-tank CO₂ system for each Generator Exciter Enclosure (UFSAR §9.5.1.7.4); and **Halon 1301** systems protect the Relay Rooms (each Relay Room has an independent system capable of total discharge of main or reserve charge within ~10 seconds) and the Dimension 2000 Telephone building (UFSAR §9.5.1.7.4).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q64</div>
EDG room fire suppression: each EDG is protected by a <span class="hi-exam">CO2 fire suppression system</span> (NOT Halon). This system was originally automatic but was <span class="hi-exam">permanently changed to MANUAL activation under Salem DCP 80115237</span>. On a fire detected in the EDG room, the fire alarm alerts the operator, who exits the EDG room/control room and <span class="hi-exam">manually activates CO2 from the vestibule area</span>. After activation, there is a <span class="hi-exam">13 second delay</span> before the system dumps. <span class="hi-trap">Trap: the system is NOT automatic — Halon is used in OTHER vital areas at Salem, not the EDG rooms. The 13-second delay applies AFTER manual activation, not before automatic discharge.</span>
</div>

## Interconnections & Loads

The fire-protection water source is the two fresh water storage tanks supplying the diesel-driven fire pumps and yard/indoor mains (UFSAR §9.5.1.7.1). Beyond fire suppression, fresh water / fire-protection storage tank water can be aligned to the Auxiliary Feedwater system through a normally disconnected spool piece (see Exam — 2015 Q63 below). The CO₂ and Halon suppression systems protect the EDG rooms and Relay Rooms respectively, tying fire protection to the electrical and emergency-power systems (UFSAR §9.5.1.7.4).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q63</div>
Beyond supplying fire-protection water, <span class="hi-exam">Fresh Water / Fire Protection Storage Tank water can be aligned to the Auxiliary Feedwater (AFW) system through a normally disconnected spool piece</span>. See [[AFW]].
</div>

## Effects of Loss / Malfunction

The staged fire-pump auto-start logic provides redundancy against a single pump failure: if the first (lead) fire pump fails to start, falling header pressure automatically starts the second fire pump (UFSAR §9.5.1.7.1). Loss of DC power to the detection system annunciates on the Control Room overhead annunciator (UFSAR §9.5.1.6.1). Because fire-protection requirements were moved from Tech Specs into Administrative and Surveillance Procedures, system out-of-service handling is governed by those procedures rather than a TS LCO (UFSAR §9.5.1.1.4).

## Control-Room Operation

Detection annunciation is displayed on the **Fire Protection System Panel in each Control Room**; the overhead annunciator indicates alarm, trouble, and loss-of-DC-power signals (UFSAR §9.5.1.6.1). The majority of detectors are ionization-chamber smoke detectors; the system also uses rate-of-rise, fixed-temperature heat, photoelectric, and rate-compensated detectors, placed per NFPA 72E guidance (UFSAR §9.5.1.6.1). The fire pumps can be started locally or remotely but **can only be stopped at the fire-pump controller with the manual switch** in the Fire Pump House (UFSAR §9.5.1.7.1; see Exam — 2019 Q38 above).

### Fire Detection & Alarm Response

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q64</div>
Early-warning Smoke/Fire Detectors provide the Control Room with early fire indication but <span class="hi-exam">do NOT cause a suppression system to actuate</span>. When a zone detector actuates: the <span class="hi-exam">zone indicating lamp and the group "FIRE" lamp illuminate on the 2RP5 Fire Protection Panel</span>, OHA A-7 (FIRE PROT FIRE) annunciates, and the coded fire alarm broadcasts over the station PA. <span class="hi-exam">The alarm stays illuminated until the zone is manually reset from the fire protection panels in the Relay Room</span> (not the Control Room).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-h</div>
Fire alarm response: coded fire alarm #91 on 2RP5 = <span class="hi-exam">Aux. Bldg., Relay & Battery Rooms, 100 ft. elevation</span>. OHA A-7 (FIRE PROT TRBL) and A-8 (CO2/HALON DISCH) alarm. Relay Room fire requires: page announcement, <span class="hi-exam">FIRE INSIDE CONTROL AREA</span> mode on 2RP2, direct Unit 1 to select same, isolate PORVs (2PR1/2PR2 to MANUAL/CLOSE, close 2PR6/2PR7 block valves), dispatch operator for EMERG CLOSE per Att. 15.
</div>

### Containment Fire Response

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q17</div>
Assessing affected Fire Zone(s) on 2RP5 after OHA A-7 FIRE PROT FIRE: <span class="hi-exam">if fire indication for BOTH zones 59 and 74 is received, open 2FP147 Fire Protection Containment Isolation</span> to provide normally isolated fire protection water to containment — the line is normally isolated and is pressurized when both the zone 59 and 74 alarms are received. <span class="hi-trap">Traps: an illuminated row "Fire" light can come from a manual fire pull box (indication only, no water flow); for a Relay Room fire (outside the CR but on the same AC system) Fire Outside Control Area is NOT selected; Halon supplied to the relay rooms does not indicate stopping EDG supply ventilation.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q75</div>
Containment fire response: <span class="hi-exam">2FP147 (Fire Protection Containment Isolation Valve) must be manually opened from the control room</span> after tripping the Reactor, Turbine, and all RCPs. 2FP147 does NOT receive an automatic open signal. Fire pumps will start once 2FP147 is opened. Containment deluge valves are automatic. <span class="hi-trap">PORV BLOCK valve EMER CLOSE is the action for a relay room fire, not a containment fire.</span>
</div>

## Connections

- Related systems: [[AFW]], [[EDGs]]
- Related procedures: [[AB.FIRE-0001 — Control Room Fire Response]], [[AB.FP-0001 — Fire Protection System Malfunction]], [[S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A]], [[S2.OP-SO.AF-0001 — Auxiliary Feedwater System Operation]]
- Related exam questions: [[2015 Q17]], [[2016 Q64]], [[2019 Q38]], [[2020 Q65]], [[2020 Q75]], [[2015 Q63]], [[2012 Q26]], [[2012 Q64]], [[2012 Q92]], [[2012 Q99]]
- Related JPMs: [[2022 JPM Sim-h]]
- Related scenarios: [[2015 Scenario 2]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]]
