---
title: Radiation Monitoring
category: systems
status: draft
aliases:
  - process radiation monitors
  - rad monitors
  - rad protection
  - ALARA
  - shielding
  - RMS
---

# Radiation Monitoring

## Function & Design Basis

The Radiation Monitoring System (RMS) provides instrument channels, located at selected points in and around the plant, to detect, compute, and record radiation levels. When a radiation level rises above a desired setpoint, an alarm is initiated in the Control Room. The RMS operates in conjunction with regular and special radiation surveys and with chemical analyses performed by the plant staff. (UFSAR §11.4.2)

Design objectives for the RMS are to: (1) warn of any radiation hazard which might develop; (2) give early warning of a plant malfunction which might lead to a radiation hazard or plant damage; (3) provide assurance that personnel exposure does not exceed 10CFR20 limits; (4) provide assurance that atmospheric releases will not exceed the design objectives of 10CFR50; (5) record the activity present at various plant locations; (6) provide data for radiological analyses and reports; and (7) monitor process system filters for radiation buildups. (UFSAR §11.4.1)

The RMS is divided into three subsystems (UFSAR §11.4.2):

1. **Process Radiation Monitoring System** — monitors gaseous and liquid streams for increasing radiation and monitors all identified effluent paths to establish the quantity of radioactivity discharged to the environment.
2. **Process Filter Monitoring System** — monitors the buildup of radioactivity on various process filters to warn of unexpected radiation and indicate the need for changing or cleaning the filter.
3. **Area Radiation Monitoring System** — monitors radiation levels in various plant locations to warn personnel of a deteriorating radiological condition and to assess the spread of radioactivity.

The components of the RMS are designed to meet or exceed the requirements of normal and DBA conditions for temperature, humidity, pressure, and radiation as stated in the Salem Generating Station Environmental Design Criteria. The RMS signal processing equipment is centralized in six cabinets for Unit 1 and three cabinets for Unit 2. (UFSAR §11.4.2)

The Unit 1 RMS consists primarily of analog channels, with many monitors (1R1B, 1R10B, 1R20B, 1R31A, 1R34, 1R41A/B/C/D, 1R53A/B/C/D, and others) having microprocessor-based electronics. The Unit 2 RMS is primarily a microprocessor-based digital monitoring system arranged as a two-tiered structure with local field units and remote units in the Control Equipment Room. The two systems perform essentially the same functions, with some differences in sensitivities, detector types, and monitoring channels. (UFSAR §11.4.2.1.1, §11.4.2.1.2)

## Key Components

| Channel(s) | Service | Notes / Source |
|-----------|---------|----------------|
| 1-R1B / 2-R1B | Control Room area intake duct (shared, dual-channel beta scintillation) | Redundant initiation of accident-pressurized (AP) ventilation mode; safety-related (UFSAR §11.4.2.2) |
| 1-R1A / 2-R1A | Control Room area monitor | Non-safety, vital power supply; alarmed via annunciator (UFSAR §11.4.2.4) |
| 1-R11A / 2-R11A | Containment air particulate | Beta scintillation, moving filter paper; leak detection & effluent (UFSAR §11.4.2.2) |
| 1-R12A / 2-R12A | Containment / plant vent noble gas | Beta scintillator; high rad closes containment purge supply/exhaust & pressure-relief valves (UFSAR §11.4.2.2) |
| 1-R12B / 2-R12B | Containment fixed-filter iodine | Charcoal cartridge, scintillation; high rad closes purge valves (UFSAR §11.4.2.2) |
| 1-R13A,B / 2-R13A,B | Containment fan cooler radiation | Monitors SW from CFCUs (two monitors for five fan coolers) (UFSAR §11.4.2.2) |
| 1-R15 / 2-R15 | Condenser air removal gas | Gamma scintillation; indicates primary-to-secondary leak (UFSAR §11.4.2.2) |
| 1-R17A,B / 2-R17A,B | Component cooling liquid | Scintillation in inline well; high rad closes CCW surge-tank vent gas valve (UFSAR §11.4.2.2) |
| 1-R18 / 2-R18 | Waste Disposal System liquid effluent | Scintillation in fixed volume; high rad initiates automatic valve closure (UFSAR §11.4.2.2) |
| 1-R19A-D / 2-R19A-D | Steam generator blowdown liquid (four channels per unit) | Primary-to-secondary leak; high rad closes 12 (22) SG blowdown tank inlet valves & affected-SG blowdown isolation (UFSAR §11.4.2.2) |
| 1-R26 / 2-R26 | Reactor coolant process filter | Process Filter Monitoring System (UFSAR §11.4.2.3) |
| 1-R31A / 2-R31 | Letdown line (failed-fuel) | Gross gamma of letdown; detects fuel-clad failure (UFSAR §11.4.2.2) |
| 1-R36 | Evaporator/feed preheater condensate | High rad closes evaporator condensate line valves (UFSAR §11.4.2.2) |
| 2-R37 | Nonradwaste basin discharge | Offline sampler (UFSAR §11.4.2.2) |
| 1-R40 / 2-R40 | Condensate process filter | Process Filter Monitoring System (UFSAR §11.4.2.3) |
| 1-R41A/B/C/D / 2-R41A/B/C/D | Plant vent noble gas (low/intermediate/high/composite range) | High-range noble gas; composite channel computes release rate from on-range monitor × plant-vent flow (UFSAR §11.4.2.2) |
| 1-R44A,B / 2-R44A,B | Containment area high range | Special ion-chamber, post-accident; 1 R/hr to 10⁷ R/hr; safety-related, vital power (UFSAR §11.4.2.2, §11.4.2.4) |
| 1-R45 / 2-R45 | Plant vent high-range particulate & iodine sampling skids | NUREG-0737 II.F.1; sampling capability 10² µCi/cc (UFSAR §11.4.2.2) |
| 1-R46A-D / 2-R46A-D | Main steam high range | NUREG-0737 II.F.1; detection capability 10³ µCi/cc; one per main steam line (UFSAR §11.4.2.2) |
| 1-R53A-D / 2-R53A-D | Main steam line N-16 | High-temperature NaI(Tl) with Am-241 check source; trends primary-to-secondary leakage; used only in Mode 1 (UFSAR §11.4.2.2) |
| Area monitors (R2, R3, R4, R5, R6A, R7, R9, R10A,B, R20B, R23, R32A,B, R34, R51) | Area Radiation Monitoring System | GM-tube or ion-chamber; see §11.4.2.4 |

## Power Supplies

Individual power supplies are contained in each analog channel drawer, furnishing the positive and negative voltages for the transistor circuits, relays, and alarm lights, and providing the high voltage for the detector. (UFSAR §11.4.2.1.1)

Safety-related and special monitors are powered from vital supplies: the Control Room area monitors (2-R1A, 1-R1A) are non-safety units on a vital power supply; the Fuel Handling Building monitors (1-R5/2-R5, 1-R9/2-R9) are each on a separate vital power supply; and the Containment Area High Range monitors (1-R44A,B and 2-R44A,B) are safety-related units with a vital power supply. (UFSAR §11.4.2.4)

## Automatic Features & Setpoints

The RMS bistable circuits provide one alarm on high radiation (actuation point settable at any level over the instrument range) and one alarm on loss of signal (circuit failure). A high radiation signal actuates a light on the Control Room overhead annunciator and a yellow light on the RMS recorder panel indicating which channel; for digital channels, the Control Room alarm CRT provides discriminate channel alarms. (UFSAR §11.4.2.1.1)

Automatic protective actions initiated by process monitor high-radiation signals (UFSAR §11.4.2.2):

- **Containment ventilation isolation** — 1-R12A (noble gas) provides an alarm relay contact initiating closure of containment ventilation closure/isolation valves 1VC1, 4, 5, and 6 for Modes 1, 2, 3, 4 & 5; 1-R12B (iodine) likewise initiates closure of 1VC1, 4, 5, and 6. High radiation on the containment particulate/gas/iodine channels closes the containment purge supply and exhaust duct valves and the pressure relief line valves; for Unit 2, high radiation also closes the waste gas discharge valve.
- **CCW surge-tank vent isolation** — a high radiation level on the component cooling liquid monitors (1-R17A,B / 2-R17A,B) initiates closure of the gas valve in the component cooling surge tank vent line to prevent gaseous radiation release.
- **Liquid effluent isolation** — high radiation on the Waste Disposal System liquid effluent monitor (1-R18 / 2-R18) automatically initiates valve closure of the liquid release path.
- **Steam generator blowdown isolation** — a high radiation alarm closes the No. 12 (22) steam generator blowdown tank inlet valves and the steam generator blowdown isolation valves on the affected steam generator.
- **Condensate isolation** — a high radiation alarm on the evaporator/feed preheater condensate monitor (1-R36) automatically closes the condensate line valve for each unit's evaporator packages.
- **Fuel Handling Building ventilation** — high radiation on the Fuel Handling Building monitors (Channels 1-R5/2-R5 and 1-R9/2-R9) initiates charcoal filtration of the FHB atmosphere; for Unit 2 the high radiation alarm also automatically starts the exhaust fans, and these units actuate an emergency evacuation horn and radiation alert lights outside the building.
- **Containment high range / SMM** — the Containment Area High Range monitors (R44A/B) provide input to post-accident monitoring; their detectors are capable of indicating area radiation from 1 R/hr to 10⁷ R/hr (UFSAR §11.4.2.4).

Indication scales: process monitor channels are calibrated logarithmically from 10¹ to 10⁶ counts per minute; area and filter monitor channels are calibrated in mR/hr. (UFSAR §11.4.2.1.1)

**Exam & operating coverage:**

### Process Radiation Monitors (general)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q72</div>
EOP-LOCA-1 step 16 checks for radiation outside containment using these monitors: <span class="hi-exam">2R4 (charging pump area), 2R41D (plant vent process), 2R34 (Mechanical Penetration 100'), 1R3 (Radio Chem lab area), 1R6A (Sampling room), and 1R20B (counting room)</span>. <span class="hi-trap">2R10A (Personnel Hatch Containment 100') is used to assist in determining a LOCA is occurring INSIDE containment — not on the step 16 outside-containment list. 2R47 and 2R52 are not checked in step 16.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q10</div>
The <span class="hi-exam">R19 SGBD radiation monitors are NOT accurate immediately following a unit trip</span> — per the note under the AB.SG-0001 entry conditions, a 2R19 alarm right after a Rx trip should not be the sole basis for entering the SG tube leak procedure or for a manual SI. The proper response to OHA A-6 RMS HI RAD with 2R19C (23 SG Blowdown) in alarm is to <span class="hi-exam">enter AB.RAD-0001 to verify the alarm while continuing in EOP-TRIP-2</span>.
</div>

### Steam Generator Blowdown Radiation Monitors (R19)

A high radiation alarm signal closes the No. 12 (22) steam generator blowdown tank inlet valves and the steam generator blowdown isolation valves on the affected steam generator. (UFSAR §11.4.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q71</div>
On a 2R19A (SG Blowdown Rad Monitor) Hi Rad <span class="hi-exam">ALARM</span>, <span class="hi-exam">ONLY the affected 21GB4 (SG B/D Outlet Isolation Valve) shuts automatically</span> — to minimize the spread of contamination from an SGTR on 21 SG to secondary systems. <span class="hi-trap">All four 21-24GB4s do NOT shut; ALL GB10s, GB185s, and 2GB50 shut on the Hi Rad WARNING (a different setpoint). Each SG has its own blowdown line, so cross-contamination/backfeeding through the blowdown lines is not possible.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q61 (Deleted)</div>
For a 22 SG tube leak: <span class="hi-exam">2R19B (22 SG Blowdown) and 2R15 (Condenser Air Ejector) respond first, then 2R41D (Plant Vent Release Rate)</span> as activity reaches the plant vent. <span class="hi-trap">The 2R46A (22 Main Steam Line) monitor watches high-level post-accident noble-gas releases via the atmospheric steam relief/safety valves — it does NOT change from a tube leak.</span> (Question marked Deleted on the worksheet; keyed answer B.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q23</div>
R19 SGBD radiation monitor WARNING setpoint — unit difference confirmed: <span class="hi-exam">Unit 1 has NO automatic functions when R19 goes into WARNING</span> (automatic functions only occur when the monitor goes into ALARM). <span class="hi-exam">Unit 2 has automatic functions on R19 WARNING</span> — GB185 (Blowdown Discharge to Condenser) valves automatically close. <span class="hi-trap">Trap: do not confuse WARNING vs ALARM actions, and remember the unit difference at the WARNING level. Unit 1 warning is early warning only; Unit 2 warning closes blowdown valves.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q51</div>
R19 SGBD radiation monitor WARNING setpoint: <span class="hi-exam">Unit 1 — NO automatic actuations (warning is early warning only). Unit 2 — automatically closes ALL GB10s, GB185s, and 2GB50.</span> <span class="hi-trap">Trap: R19 WARNING and ALARM actions differ. The ALARM setpoint on Unit 1 closes ALL GB4s, GB8s, GB10s, GB185s, and 1GB50. On Unit 2, ALARM isolates blowdown from the affected SGs by closing the associated GB4. Do not confuse warning vs alarm actions, and remember the unit difference at the warning level.</span>
</div>

## Design Features & Interlocks

Each integrated RMS channel includes a level amplifier/discriminator, a log level amplifier (converting total pulse rate to a logarithmic analog signal), individual power supplies, test-calibration circuitry, a radiation level meter (logarithmic 10¹ to 10⁶ cpm for process monitors; mR/hr for area and filter monitors), indicating lights, two bistable circuits (high-radiation alarm and loss-of-signal alarm), and a check source. (UFSAR §11.4.2.1.1)

**Check source** — a remotely-operated long half-life radiation check source is furnished in each channel, with energy emissions similar to the radiation energies being monitored. The source strength is sufficient to cause a visible increase in the meter indication. If insufficient count rate is achieved (check source count rate compared against a setpoint), a norm-failure alarm is provided. During checksource operation on the R1B channels, indication is frozen for both channels. (UFSAR §11.4.2.1.1)

**Containment monitor (R11/R12A/R12B) common elements** — the containment radiation monitors share a flow control assembly with a pump unit (pump, flowmeter, flow control valve, low/high flow alarm assembly), selector valves to direct the sample or block flow for maintenance/purging, and a temperature sensor that automatically closes the inlet motor-operated valve on a high temperature condition. Containment isolation valves are provided for the sample piping; loss of both the regular and backup flow paths actuates a 1R11/12 loss-of-flow-path alarm. The containment particulate and gaseous monitors (1-R11A, 1-R12A, 2-R11A, 2-R12A) are also used as part of the Reactor Coolant Leak Detection System. (UFSAR §11.4.2.2)

**Letdown line (failed-fuel) monitor desensitizing** — the Unit 1 ion-chamber detector measures up to 10² R/hr (saturation); the Unit 2 gamma scintillator measures up to 1 × 10⁹ cpm. Provision is made for desensitizing each system by two or more decades to compensate for permanent activity buildup from long-term normal operation, accomplished by inserting the detector into a lead shield (Unit 1) or a lead spacer (Unit 2). (UFSAR §11.4.2.2)

**Process filter monitors** — area-type monitors are provided on liquid (process) filters to indicate when they should be replaced; a high radiation alarm is initiated in the Control Room with a local indicator and alarm light at the filter. Unit 1 process filter monitors are GM tubes with a range of 10⁻¹–10⁴ mR/hr; Unit 2 process filter monitors are ion chambers or GM detectors with a range of 10⁻¹–10⁶ mR/hr. They perform no control function. Monitored filters include reactor coolant filters (1-R26/2-R26) and condensate filters (1-R40/2-R40), plus seal water injection, seal water, liquid waste, spent fuel pool, spent fuel pool skimmer, refueling water purification, and ion exchange filters. (UFSAR §11.4.2.3)

**Post-accident high-range monitors** — the Plant Vent High Range Noble Gas Monitors (1-R41B-D / 2-R41B-D) comply with NUREG-0737 II.F.1 and the intent of Reg. Guide 1.97 (type C & E, Category 2), with a sampling capability of 10⁵ µCi/cc for noble gases; the composite channel (R41D) computes effluent release rate from the on-range monitor (R41A, B, or C) and the plant vent flow rate. The Main Steam High Range Monitors (R46A-D) comply with NUREG-0737 II.F.1 and the intent of Reg. Guide 1.97, with a detection capability of 10³ µCi/cc. These monitors are safety grade and qualified for the post-accident environment. (UFSAR §11.4.2.2)

**Main Steam Line N-16 monitors (R53A/B/C/D)** — each of four channels continuously monitors N-16 gamma radiation from one main steam line using a high-temperature NaI(Tl) gamma scintillator with an integral Am-241 check source, located upstream of the mixing bottle and as close to the main steam line as practical. The high energy window is sensitive only to N-16; because N-16 is present only during power operation, this monitor is used only during Mode 1. (UFSAR §11.4.2.2)

**Exam & operating coverage:**

### Containment High Range Monitors (R44A/B)

Both units have containment monitors capable of indicating area radiation from 1 R/hr to 10⁷ R/hr; the Containment Area High Range channels (1-R44A,B and 2-R44A,B) use a special ion chamber detector for extended-range capability in a post-accident environment and are safety-related units on a vital power supply. (UFSAR §11.4.2.4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q27</div>
Confirms the SMM ADVERSE Mode logic: <span class="hi-exam">EITHER R44A OR R44B reaching 1E5 R/hr automatically shifts either channel of the Subcooling Margin Monitor to ADVERSE Mode</span> — only one of the two Containment High Range monitors is required. <span class="hi-trap">Other in-containment area monitors (R2 Containment 130', R7 In-Core Seal Table) do NOT input into the SMM.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q85</div>
With a SAE already declared during a LBLOCA, <span class="hi-exam">containment radiation exceeding 2000 R/hr adds 2 points from the containment barrier — escalating the classification to a General Emergency</span>. The more-severe classification is what drives a subsequent NRC notification (required within 60 minutes, not 15).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q26</div>
R44A/B containment high range monitors provide input to the Subcooling Margin Monitor for adverse containment determination. <span class="hi-exam">R44A/B > 1E05 R/HR triggers adverse containment conditions for the SMM.</span> Note: <span class="hi-trap">>1E06 R/HR is the integrated dose value used in procedures — the SMM adverse threshold is >1E05 R/HR.</span> R44A/B are also used in EOP-CFST-1 to determine entry into EOP-FRCE-3 when radiation exceeds 2 R/HR.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q83</div>
Fission Product Barrier Table (EP-SA-325-123) and R44A/B containment high range radiation monitors: with <span class="hi-exam">R44A and R44B both reading >2000 R/hr</span> following a LBLOCA, the barrier assessment yields: <span class="hi-exam">FB2.L (fuel barrier loss, 5 pts) + RB1.L or RB2.L (RCS barrier loss, 5 pts) + CB2.P (containment barrier potential loss, 2 pts) = 12 points → General Emergency</span>. Classification: <span class="hi-exam">GE with Loss of 2 barriers and Potential Loss of the 3rd barrier</span>. <span class="hi-trap">This is NOT a loss of all 3 barriers — containment is a POTENTIAL loss (lowering pressure indicates containment is functioning).</span>
</div>

### Process Radiation Monitor Source Checks

A remotely-operated long half-life check source is furnished in each channel; the source strength is sufficient to cause a visible increase in the meter indication, and a norm-failure alarm is provided if insufficient count rate is achieved. (UFSAR §11.4.2.1.1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q49</div>
SGBD radiation monitor (<span class="hi-exam">1R19A</span>) check source test: when the check source pushbutton is pressed, counts rise then <span class="hi-exam">return to the original reading</span> (not held high while button is pressed). During the check source, <span class="hi-exam">interlocks are NOT expected to actuate</span>. (Ref: S1.OP-ST.RM-0001)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q60</div>
Process radiation monitor Source Check duration: <span class="hi-exam">activate the source check for 30 seconds or less to prevent the solenoids from overheating</span>. Both the system operating procedure (S1.OP-SO.RM-0001) and the surveillance procedure (S1.OP-ST.RM-0001) contain this 30-second precaution. <span class="hi-trap">Traps: terminating "just until indication of rising level is detected" prolongs source life but is NOT the procedural rationale; alarm action functions are NOT automatically blocked on every monitor during a source check, but the cited reason for the 30-second limit is solenoid overheating; source check is not intended to raise rad levels outside the monitor.</span>
</div>

## Interconnections & Loads

Process monitors are placed on every identified effluent and process path so that leakage from one system into another is detected. The RMS interconnects with, and monitors leakage from or releases through, the following systems (UFSAR §11.4.2.2):

- **Liquid Radwaste System** — 1-R18 / 2-R18 monitors all Waste Disposal System liquid releases and initiates automatic valve closure on high radiation. See [[Waste Liquid]].
- **Waste Gas System** — gaseous releases (e.g., Gas Decay Tank discharges) reach the plant vent and are monitored by the plant vent noble gas channels (R41A-D); for Unit 2 a high containment gas radiation also closes the waste gas discharge valve. See [[Waste Gas]].
- **Steam Generator Blowdown** — 1-R19A-D / 2-R19A-D monitor SG blowdown liquid for primary-to-secondary leakage; in Unit 1 the monitors are in the Sampling Room (cooled blowdown sample) and in Unit 2 an offline sampling system is used. See [[Steam Generator & Blowdown]].
- **Component Cooling Water** — 1-R17A,B / 2-R17A,B continuously monitor CCW for RCS/component leakage into the cooling water via an inline scintillation well; high radiation closes the CCW surge tank vent gas valve.
- **Chemical & Volume Control (letdown)** — the letdown line monitors (1-R31A / 2-R31) detect fuel-clad failure by gamma emission of fission products in the continuously flowing letdown sample.
- **Service Water** — the Containment Fan Cooler radiation monitors (1-R13A,B / 2-R13A,B) monitor the service water used as the CFCU cooling medium for contamination from a cooling-coil leak (two monitors for five fan coolers).
- **Plant Vent System** — the plant vent is continuously monitored for gross radioactivity by the noble gas channels and the high-range particulate/iodine sampling skids (R45). See [[Containment]].

**Exam & operating coverage:**

### Letdown Line Failed-Fuel Monitor (R31)

The Letdown Monitoring System for each unit consists of a single channel monitoring total gross activity of the letdown line concentration to detect failure of the cladding of one or more fuel elements by the gamma emission of fission products released into the reactor coolant. (UFSAR §11.4.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q19</div>
<span class="hi-exam">2R31 is the Letdown Line-Failed Fuel Process Rad Monitor</span> (RMS channel monitoring CVCS letdown for fuel-clad failure). A rising 2R31 trend indicates increasing RCS activity, but the monitor itself <span class="hi-trap">cannot distinguish a crud burst from failed fuel by its rate of rise</span> — there is no procedural guidance to judge the source by how fast the indication rises. Per AB.RC-0002, the cause is determined by having a <span class="hi-exam">Shift Chemistry Technician perform an isotopic (radiological) analysis of the RCS</span>: a crud burst shows different radionuclide concentrations than failed fuel. <span class="hi-trap">Maximizing letdown flow expedites cleanup of valid activity (not source determination); Radiation Protection surveys are for personnel protection/reposting (not source determination).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q98</div>
On a 2R31 (Letdown Line Monitor) WARNING and entry into AB.RC-0002: the CRS <span class="hi-exam">directs a Radiation Protection Technician to take surveys to determine if radiation levels have changed access requirements</span> (so personnel are promptly notified). Chemistry sampling — not RP surveys — confirms the 2R31 rise; the hourly isotopic analysis is for gamma to determine DEI for trending.
</div>

### Plant Vent Effluent Monitor (R41)

The plant vent noble gas channels comprise low range (R41A), intermediate range (R41B), high range (R41C), and composite (R41D); the composite channel displays the effluent release rate based on low-, intermediate-, or high-range noble gas concentrations and the plant vent flow rate. (UFSAR §11.4.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q70</div>
The <span class="hi-exam">R41 plant-vent monitors in the control room have a trend function</span> (display historical data on 2RP1) that can confirm whether a gaseous release is actually in progress versus a tank-pressure instrument failure. If a release IS in progress through the plant vent, it is being monitored — so the release is <span class="hi-exam">unapproved, not unmonitored</span>. <span class="hi-trap">Area Monitors do NOT have local trend functions; only R4 and R34 are trended (on the P-250 computer) in the control room.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q60</div>
When a Containment Pressure Relief is initiated with NORMAL containment radiation: <span class="hi-exam">1R12A (Containment Gas Effluent) stays constant (already sampling containment), 1R41B (Plant Vent Noble Gas Intermediate Range) stays constant (no sample flow until 1R41A nears full scale), and 1R41D (Plant Vent Noble Gas Release Rate) RISES</span> (computes release rate from on-range monitors × plant-vent flow; also auto-terminates release on high effluent).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q83</div>
Gas Decay Tank (GDT) release path: <span class="hi-exam">11 GDT discharges to the plant vent</span>. An unplanned gaseous radioactive release from the 11 GDT will alarm on <span class="hi-exam">1R41D (Plant Vent Noble Gas Release Rate)</span> — NOT on 1R12A-B (Cont or Vent Gas Effluent/Iodine). Crew performs AB.RAD-0001 <span class="hi-exam">Attachment 1 (Process Radiation Monitors)</span> to stop the release. <span class="hi-trap">Trap: R12A-B IS a gaseous process radiation monitor, but it monitors containment vent gas, not the plant vent. Also, Attachment 2 (Process Filter Radiation Monitors) applies to filtered systems — the GDT release path to the plant vent is unfiltered.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q25</div>
2R41 has 4 channels (A, B, C, D). <span class="hi-exam">2R41 Channel D is the ONLY control room indication that reads out in µCi/sec</span> and can be used to determine if a radiological release is in progress for notification to State and Local Agencies. <span class="hi-trap">Channels A, B, and C do not read out in µCi/sec — only Channel D provides release rate information.</span>
</div>

### Main Steamline Monitors (R46, R53)

The Main Steam Line N-16 monitors (R53A/B/C/D) continuously trend primary-to-secondary leakage and are used only during Mode 1 (N-16 is present only during power operation); the Main Steam High Range monitors (R46A-D) are post-accident, high-range channels (10³ µCi/cc detection capability). (UFSAR §11.4.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q14</div>
First indication of a Steam Generator tube leak at 100% power: <span class="hi-exam">R53 Main Steamline N-16 monitors</span> — these are <span class="hi-exam">N-16 (nitrogen-16) monitors</span> on the Main Steamlines and are very sensitive, indicating prior to the others. <span class="hi-trap">Trap A: R15 Condenser Air Ejector samples the Main Condenser, so steam must travel past R53 first.</span> <span class="hi-trap">Trap B: R19 SG Blowdown provides indication only after blowdown flow lag time.</span> <span class="hi-trap">Trap C: R46 Main Steamline monitors are HIGH RANGE — while they can detect low levels of radiation, they would NOT provide an alarm to alert the crew at low SGTL levels.</span> Ranking by SGTL response time: <span class="hi-exam">R53 → R46 → R19 → R15</span>.
</div>

### Liquid Effluent Radiation Monitor (R18)

The Waste Disposal System liquid effluent monitor (1-R18 / 2-R18) continuously monitors all Waste Disposal System liquid releases; automatic valve closure action is initiated by the monitor after a high radiation level is indicated and alarmed in the Control Room. A scintillation counter in a fixed-volume assembly monitors the effluent as it is discharged. (UFSAR §11.4.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q60</div>
On a CVCS Monitor Tank release routed through the cross-connect line, the high-radiation auto-isolation comes from the initiating unit's <span class="hi-exam">R18 monitor closing 2WL51</span>. <span class="hi-trap">The cross-connect does NOT put flow through the opposite unit's R18 monitor; 1WL51 stays out of the flowpath.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q59</div>
2R18 (Liquid Radwaste process radiation monitor) ALARM setpoint per S2.IC-CC.RM-0028 is <span class="hi-exam">6.82E5 cps</span>. Above the setpoint, <span class="hi-exam">2R18 automatically shuts 2WL51 (Liquid Release Stop Valve)</span>. If the auto-close fails (e.g., 2WL51 still indicates OPEN with 2R18 in alarm at 10E6 cps), <span class="hi-exam">the NCO shuts 2WL51 remotely from the control room</span> per S2.OP-SO.WL-0001 Step 5.5.9 — there is no procedural provision to close 2WL51 locally.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q90</div>
2R18 (Radioactive Liquid Effluent Monitor) response to detector failure: <span class="hi-exam">R18 failing LOW will NOT cause 2WL51 (Liquid Release Stop Valve) to automatically close</span> — only a HIGH alarm closes WL51. Per S2.OP-SO.WL-0001, if 2R18 is inoperable, <span class="hi-exam">2FR1064 (Radwaste Overboard Discharge Flow Recorder) must be OPERABLE AND two independent samples, independent release calculations, and independent discharge valve lineups must be performed</span>. <span class="hi-trap">Trap: ODCM 3.3.3.8 allows flow rate estimation if 2FR1064 is inoperable, but the release procedure prevents BOTH R18 and FR1064 from being inoperable simultaneously.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-h</div>
Direct demonstration of the 2R18 / 2WL51 failed-auto-shut response. During an authorized liquid release, <span class="hi-exam">2R18 reads high radiation (~1×10⁵ cps) and 2WL51 fails to automatically shut</span>. The operator recognizes OHA A-6 RMS HI RAD OR TRBL / CRT point 725 (2R18 in alarm), observes 2WL51 still OPEN, and <span class="hi-exam">manually shuts 2WL51 remotely</span> (S2.OP-SO.WL-0001 Step 5.5.9), then enters AB.RAD-0001 to confirm the affected/valid monitor and ensure the release is terminated.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 IP-k</div>
During liquid radwaste release (S2.OP-SO.WL-0001 Sec 5.5), <span class="hi-exam">2R18 reads 105 cpm with High Radiation light illuminated</span> at 104 panel during Step 5.5.8 data collection. Step 5.5.9: 2R18 Monitor ALARMS → direct NCO to <span class="hi-exam">CLOSE 2WL51 (LIQUID RELEASE STOP VALVE)</span> to terminate the release.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-k</div>
During liquid radwaste release (S2.OP-SO.WL-0001 Sec 5.5), <span class="hi-exam">2R18 radiation monitor</span> provides overwatch. At Step 5.5.8, operator reads 2R18 on 104 panel: <span class="hi-exam">105 CPM with High Radiation light illuminated</span>. Step 5.5.9: if 2R18 ALARMS, immediately direct NCO to <span class="hi-exam">CLOSE 2WL51 (LIQUID RELEASE STOP VALVE)</span> to terminate the release.
</div>

## Control-Room Operation

The output from each detector is transmitted via cables to the RMS cabinets, where the radiation level is indicated on a meter in the Control Room and pre-selected channels are recorded on a multipoint recorder; for area monitors the radiation level is also indicated locally at the detector. High radiation level alarms are annunciated on the Control Room overhead annunciator and further identified at the RMS cabinets. (UFSAR §11.4.2.1.1)

Unit 1 digital area channels (1R2, 1R3, 1R4, 1R5, 1R6A, 1R7, 1R9, 1R10A, 1R40) provide digital indication at the local and remote monitors; the local monitors provide Normal, Fail, and Alert indications and initiate a buzzer and beacon light on high alarm, while the remote monitors in the Control Equipment Room provide analog outputs to the plant computer (P250), indicators and high-radiation indication on Panel 1RP1, a High/Trouble alarm on the Overhead Annunciator, and interlock contacts when required. (UFSAR §11.4.2.4)

For Unit 1, the containment-monitor flow control panel in the Control Room radiation monitoring racks permits remote operation of the flow control assembly (selecting either the containment or a local "clean" sample); for Unit 2 these controls are located on 2RP1 in the Control Room. (UFSAR §11.4.2.2)

**Exam & operating coverage:**

### Control Room Area Intake Monitors (R1A/R1B)

The Control Room Intake Air Radiation Monitoring System is a shared, safety-related channel; the R1B monitors (dual-channel processors with beta scintillation detectors in each of the Unit 1 and Unit 2 Control Room intake ducts) provide redundant initiation signals to place the ventilation system into its accident-pressurized mode and continuously indicate, record, and annunciate in the Control Room. (UFSAR §11.4.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q62</div>
1R1A (Control Room Area) radiation monitor in alarm: <span class="hi-trap">does NOT automatically actuate CAV in AP Mode</span>. Requires manual actuation — press ACCIDENT PRESSURIZED pushbutton at 1RP2 to actuate BOTH units' CAV into AP Mode. Emergency intake dampers open on the unaffected unit.
</div>

## Effects of Loss / Malfunction

A bistable circuit on each channel alarms on loss of signal (circuit failure), providing the operator a distinct indication of a failed monitor versus a high-radiation condition. (UFSAR §11.4.2.1.1) The behavior of specific monitors on failure (high or low) is exam-critical and is captured in the callouts below.

**Exam & operating coverage:**

### Fuel Handling Building Radiation Monitors

The Fuel Handling Building monitors (Channels 1-R5/2-R5 and 1-R9/2-R9) continuously monitor the fuel storage areas; a high radiation alarm from either unit initiates charcoal filtration of the FHB atmosphere (and, for Unit 2, automatically starts the exhaust fans). The Fuel Handling Accident in the FHB was analyzed without credit for filtration by the FHB Ventilation System. These units actuate an emergency evacuation horn and radiation alert lights outside the building. The Fuel Handling and Cask Handling Crane monitors (1-R32A,B / 2-R32A,B) are not connected to the central RMS and initiate a flashing beacon and alarm bell on the cranes. (UFSAR §11.4.2.4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q67</div>
Containment Radiation Monitors (e.g., 2R12A) are <span class="hi-exam">NOT required to be operable for Mode 6, Fuel Movement, or Core Alterations</span> per Tech Specs — a failure causing a Containment Ventilation Isolation does not by itself require suspending fuel movement. The condition that DOES require suspension: aligning Control Area Ventilation to <span class="hi-exam">FIRE OUTSIDE CONTROL AREA (Recirculation Mode)</span>, which prohibits Core Alterations and movement of irradiated fuel (T/S Bases 3/4.7.6, SO.CAV P&amp;L 3.6.3).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q49</div>
A loss of SFP cooling that lets SFP temperature climb toward 150°F drives <span class="hi-exam">spent-fuel off-gassing, raising radiation at the FHB charcoal filter</span>. The 2R32 Fuel Handling Crane Area Monitor does not preclude lowering a fuel bundle. See [[Spent Fuel Pool]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q68</div>
<span class="hi-exam">Containment Radiation Monitors (e.g., 2R12A) are NOT required to be operable for Mode 6 or Fuel Movement or Core Alts per Tech Specs.</span> A failure of 2R12A causing a Containment Ventilation Isolation signal does NOT by itself require suspension of fuel movement. <span class="hi-trap">Trap: a CVI signal looks like an emergency response, but the rad monitor is not Tech-Spec required for refueling, so its failure has no LCO impact on fuel movement.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q33</div>
Confirms 2R32A behavior: with 2R32A failed high, <span class="hi-exam">ONLY crane motion other than downward movement of suspended load is locked out</span>. FHB ventilation transfer to HEPA and Charcoal does NOT occur on 2R32A — <span class="hi-exam">FHB ventilation auto-shifts only on 2R5 and 2R9 alarms</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q23</div>
2R32A (Fuel Handling Crane area radiation monitor): when the monitor <span class="hi-exam">fails to its alarm setpoint, ONLY crane hoist-up operation is prevented</span>. Lowering the hoist is still allowed (conservative — allows the assembly to be lowered back for increased water shielding). <span class="hi-trap">There is no BYP INT pushbutton to defeat this interlock, and crane trolley operation is NOT affected.</span> Note: <span class="hi-exam">2R5 and 2R9 (FHB area rad monitors) cause FHB exhaust to shift to 22 HEPA plus Charcoal but have NO interlocks with the fuel handling crane</span>.
</div>

### Fuel Storage Area Monitor (2R9)

The Fuel Storage Area channels (1-R9 / 2-R9) continuously monitor the fuel storage areas; a high radiation alarm from either unit automatically starts the exhaust fans (Unit 2) and initiates charcoal filtration of the FHB atmosphere. (UFSAR §11.4.2.4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q73</div>
Area Radiation Monitors with automatic ventilation actions: <span class="hi-exam">2R9 (New Fuel Storage) on its High Radiation Alarm realigns FHB ventilation through the charcoal filters and starts both FHB Exhaust fans</span>. Distractors: 2R32A (Fuel Handling Crane) only prevents fuel-crane motion except downward; 2R52 (Liquid PASS Room) only lights an alarm outside the PASS room; 2R44A (Containment High Range) has no automatic function.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q88</div>
2R5 setpoints (FHB radiation monitor — Spent Fuel Pool area): <span class="hi-exam">alarm <span class="val-alarm">11 mR/hr</span>, warning <span class="val-alarm">7 mR/hr</span></span>. On a dropped fuel assembly with 2R5 stabilized at 25 mR/hr (above alarm), FHB ventilation <span class="hi-exam">automatically swaps to the Charcoal Filter and starts BOTH FHB Exhaust Fans</span> (normal lineup is single Supply Fan + both Exhaust Fans). <span class="hi-trap">2R5 does NOT lock out crane motion — only the 2R32A monitor on the crane itself causes the &quot;all crane motion except downward&quot; lockout.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q36</div>
2R9 (Fuel Storage Area Monitor) alarm response: <span class="hi-exam">BOTH Fuel Handling Area Exhaust Fans receive an auto start signal</span> (standby fan starts). <span class="hi-exam">21 HEPA ONLY Filter Unit ISOLATES</span> and <span class="hi-exam">22 HEPA PLUS CHAR filter unit automatically aligns</span>. After 2R9 alarm, both exhaust fans are running but only the charcoal filter unit is in service. <span class="hi-trap">Trap: 2R9 does NOT keep both HEPA units in service — the HEPA ONLY unit isolates and the HEPA PLUS CHAR unit takes over.</span>
</div>

## Shielding Design

- Primary shielding: biological shield around the reactor vessel (concrete)
- Secondary shielding: containment structure, auxiliary building walls
- Designed to limit dose rates in normally occupied areas to levels consistent with 10CFR20 occupational limits
- Shielding design considers both normal operation and post-accident conditions
(UFSAR 12.1)

## Ventilation for Contamination Control

- Plant ventilation systems maintain appropriate pressure differentials to direct airflow from areas of lower contamination to areas of higher contamination
- HEPA filters and charcoal adsorbers on exhaust systems remove airborne contamination
- Containment purge system used to reduce airborne activity levels before personnel entry
(UFSAR 12.2)

## Radiation Protection Program

- Dosimetry: personnel monitoring for external and internal exposure
- Radiation surveys and monitoring
- Contamination control and decontamination
- Respiratory protection program
- Radioactive material control and accountability
- Training for all personnel with access to radiation areas
(UFSAR 12.3)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q62</div>
Point-source inverse-square scaling: <span class="hi-exam">DR1 = DR2 × (d2² / d1²)</span>. A process monitor reading 2 R/hr at 10 ft from a dropped source gives <span class="hi-exam">2 R/hr × (10²/1²) = 200 R/hr</span> at 1 ft.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A4</div>
Dose and stay time calculation for containment entry (RP-AA-300): from survey map, identify gamma and neutron dose rates at work location. Calculate stay time = (dose limit / dose rate) x 60 min/hr. Compare all limiting factors: <span class="hi-exam">gamma stay time, neutron stay time, and heat stress stay time</span>. The lowest value is the controlling factor. At 22 CFCU area (130' CTMT): neutron = 40 mrem/hr → <span class="hi-exam">12 min stay time (most limiting)</span>, gamma = 5 mrem/hr → 24 min, heat stress = 15 min.
</div>

## ALARA Program

- Design features to minimize exposure: remote operation, shielding, ventilation, decontamination capability
- Administrative controls: radiation work permits, dose goals, pre-job ALARA reviews
- Dose tracking and trending
(UFSAR 12.4)

## Key Regulatory Limits (10CFR20)

| Parameter | Limit | Source |
|-----------|-------|--------|
| Total Effective Dose Equivalent (TEDE) | 5000 mrem/year | 10CFR20.1201 |
| Lens of Eye Dose | 15000 mrem/year | 10CFR20.1201 |
| Shallow Dose Equivalent (skin/extremity) | 50000 mrem/year | 10CFR20.1201 |
| Declared Pregnant Worker | 500 mrem/gestation | 10CFR20.1208 |
| General Public (fence line) | 100 mrem/year | 10CFR20.1301 |

## Sampling & Inservice Tests

Samples are taken as required by the plant Technical Specifications. The plant vent is continuously monitored for gross radioactivity; a fixed paper particulate filter followed by a charcoal cartridge is installed and changed weekly, then analyzed by gamma spectroscopy within 48 hours from change-out. Gas decay tank releases and containment purges are analyzed isotopically on a batch basis. A supplemental Plant Vent Sampling System (west side of the Fuel Handling Building) is provided so that sampling can continue during a radiological emergency that might render the normal plant-vent sampling station uninhabitable. (UFSAR §11.4.3)

Radiation monitors are initially calibrated to standards traceable to the National Bureau of Standards ("primary calibration"). Area monitors undergo a range calibration by exposing detectors to at least three radiation intensities from a Co-60 or Cs-137 source (the Containment High Range Area Monitors are calibrated with at least one intensity). Liquid and gas process monitors undergo "wet" isotopic calibrations with isotopes of an average energy comparable to those expected to be monitored. Beyond the initial primary calibration, detectors undergo point-source secondary/transfer calibrations in a fixture of repeatable geometry, and the check sources provided with each detector are used to indicate functional operability. Tests, functional checks, and calibrations are performed periodically per Technical Specification requirements and operating procedures. (UFSAR §11.4.4)

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.3]]** — Monitoring Instrumentation (radiation monitors)
- **[[TS 3/4.11 — Radioactive Effluents]]** — Effluent monitoring and release limits

## Connections

- Related systems: [[RPS/SSPS]], [[CAV]], [[Containment]], [[Waste Gas]], [[Waste Liquid]], [[Steam Generator & Blowdown]]
- Related procedures: [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[AB.RC-0002 — High Activity in the RCS]], [[S2.OP-SO.RM-0001 — Radiation Monitoring System Operation]], [[S1.OP-SO.RM-0001 — Radiation Monitoring System Operation]], [[S1.OP-ST.RM-0001 — Radiation Monitors Check Source]], [[NC.EP-EP.ZZ-0304 — OSC Radiation Protection Response]], [[RP-AA-300 — Radiological Survey Program]], [[S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[S2.IC-CC.RM-0028 — 2R18 Liquid Waste Disposal Process Radiation Monitor]], [[S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exams: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
  - [[2015 Q10]] — R19 SGBD monitors not accurate immediately post-trip / enter AB.RAD-0001 to verify, not manual SI
  - [[2015 Q19]] — 2R31 Letdown Line Failed-Fuel monitor / crud burst vs failed fuel determined by Shift Chemistry isotopic RCS analysis (AB.RC-0002)
  - [[2015 Q49]] — loss of SFP cooling: rising radiation at FHB charcoal filter from spent-fuel off-gassing as SFP temp approaches 150°F
  - [[2015 Q60]] — containment pressure relief: 1R41D (release rate) rises; 1R12A and 1R41B constant with normal containment radiation
  - [[2015 Q73]] — 2R9 (New Fuel Storage) ARM High Rad Alarm realigns FHB ventilation through charcoal filters and starts both FHB Exhaust fans
  - [[2015 Q98]] — 2R31 WARNING / AB.RC-0002: direct RP Tech surveys to determine if access requirements changed (prompt personnel notification)
  - [[2016 Q14]] — R53 Main Steamline N-16 monitor / FIRST indication of SGTL at 100% power
  - [[2019 Q8]] — 2R17A/B high alarm auto-closes 2CC149 (CCW Surge Tank Vent Valve)
  - [[2019 Q25]] — 2R41 Channel D reads in µCi/sec for release determination
  - [[2019 Q33]] — 2R32A fails high: only crane motion other than downward movement locked out / FHB vent does NOT shift
  - [[2019 Q36]] — 2R9 alarm: both FHB exhaust fans start, HEPA ONLY isolates, HEPA PLUS CHAR aligns
  - [[2020 Q23]] — 2R32A fuel handling crane interlock / hoist-up only / R5 & R9 do NOT interlock crane
  - [[2018 Q23]] — R19 SGBD WARNING unit difference: Unit 1 no auto actions on warning, Unit 2 closes GB185s on warning
  - [[2018 Q46]] — 2R1B-2 control room intake rad monitor: AP Mode on ALARM (not WARNING), only opposite unit EACS opens
  - [[2020 Q51]] — R19 SGBD warning setpoint unit difference: Unit 1 no auto action, Unit 2 closes GB10s/GB185s/GB50
  - [[2023 Q49 — SGBD Radiation Monitor Check Source|2023 Q49]] — SGBD rad monitor check source response and interlocks
  - [[2023 Q62]] — Area Rad Monitor 1R1A / manual CAV AP mode from 1RP2
  - [[2022 Q62]] — Fuel Handling Crane interlocks (2R32A vs 2R9 rad monitors)
  - [[2022 Q83]] — LBLOCA R44A/B >2000 R/hr / GE classification / Fission Product Barrier Table
  - [[2020 Q26]] — R44A/B >1E05 R/HR / SMM adverse containment / manual reset for radiation
  - [[2019 Q43]] — 21 CVCS MT release via SW to CW / 2FR1064 inoperable requires stopping release
  - [[2020 Q90]] — 2R18 fails LOW → WL51 does NOT close / FR1064 must remain OPERABLE per release procedure
  - [[2018 Q83]] — 11 GDT discharges to plant vent → R41D alarm / AB.RAD-0001 Attachment 1 (Process) not Attachment 2 (Filter)
  - [[2018 Q85]] — R44A/B ≥ 2 R/HR = FRCE-3 entry (yellow path, not required) / 100 R/HR is warning setpoint
  - [[2018 Q89]] — R12A failure during containment vacuum relief / TS 3.3.3.1 Table 3.3-6 / R41 alternate for purge & P/V relief
  - [[2016 Q59]] — 21 CVCS MT release / 2R18 ALARM setpoint 6.82E5 cps auto-shuts 2WL51 / NCO shuts remotely if auto-close fails
  - [[2016 Q60]] — Process radiation monitor source check ≤ 30 seconds / prevents solenoid overheating
  - [[2016 Q68]] — Containment Rad Monitors (2R12A) NOT required operable for Mode 6 / Fuel Movement / Core Alts
  - [[2016 Q88]] — 2R5 alarm 11 mR/hr / dropped fuel: auto swap FHB vent to charcoal + start both Exhaust Fans / 2R5 does NOT lock out crane
  - [[2014 Q5]] — RCP thermal barrier rupture: rising activity on 2R17A/2R17B CCW surge tank rad monitors (expected); CC surge tank level lowering is the unexpected indication
  - [[2014 Q13]] — fuel handling incident: evacuate FHB at 1 R/hr per AB.FUEL-0001 CAS 1.0; 2R32A crane lockout and HEPA+Charcoal realignment are not the evacuation criterion
  - [[2014 Q14]] — 2R19A SG Blowdown Rad Monitor at ALARM (not Warning) auto-closes 21GB4 to isolate blowdown to condenser; each SG has its own blowdown line (no backfeeding)
  - [[2014 Q20]] — failed fuel with excess letdown in service (2CV18 shut): 2R4 (Charging Pump Room Area) responds first since excess letdown returns to charging pump suction; bypasses 2R31, no 2R26 demin flow, no 2R19 with no pri-sec leak
  - [[2014 Q60]] — CVCS Monitor Tank cross-connect release: initiating unit's R18 monitor auto-closes 2WL51; cross-connect bypasses opposite unit's R18 (1WL51 not in flowpath)
  - [[2014 Q61]] — 22 SG tube leak: 2R19B/2R15 respond first, then 2R41D; 2R46A (22 Main Steam Line) does NOT change (post-accident noble-gas monitor) — question marked Deleted, keyed B
  - [[2014 Q62]] — point-source inverse-square: 2 R/hr at 10 ft → 200 R/hr at 1 ft via DR1 = DR2 × (d2²/d1²)
  - [[2012 Q16]] — substantial fuel rod leak at 100% power: 2R31 (Letdown Line) responds FIRST and most significantly; 2R53A-D N16 MS Line only with primary-to-secondary leakage; 2R34 charging area diluted by VCT; 2R2 area monitor slow
  - [[2012 Q19]] — during LOCA-2 the 2R53A-D (N16 MS Line) monitors give no useful indication after Rx shutdown (SGBD alignment is an SGTR-1 action, not LOCA-2)
  - [[2012 Q27]] — EITHER R44A OR R44B (Containment High Range) at 1E5 R/hr shifts the SMM to ADVERSE Mode; R2 (Containment 130') and R7 (In-Core Seal Table) do NOT input to the SMM
  - [[2012 Q61]] — 21 CVCS MT release: 2R18 ALARM setpoint 6.82E5 cps auto-shuts 2WL51 (S2.IC-CC.RM-0028); 2R18 red 104-panel alarm with 2WL51 OPEN means the auto-close failed → NCO shuts 2WL51 remotely (no local-close provision, no time delay)
  - [[2012 Q65]] — valid RMS-initiated CVI during containment vacuum relief shuts 2VC5, 2VC6 AND the Vacuum Relief Damper; CVI can be blocked only if present before commencing the relief (not blocked in the stem conditions)
  - [[2012 Q67]] — 2R12A Containment Rad Monitor NOT required operable for Mode 6/Fuel Movement; FIRE OUTSIDE CONTROL AREA (Recirculation Mode) is the condition requiring suspension of fuel movement
  - [[2012 Q70]] — isolated GDT pressure lowering: R41 plant-vent monitor trend on 2RP1 confirms a release (Area Monitors have no local trend); release would be unapproved, not unmonitored
  - [[2012 Q71]] — 2R19A Hi Rad ALARM auto-shuts ONLY the affected 21GB4; all GB10s/GB185s/2GB50 shut on WARNING; each SG has its own blowdown line (no backfeeding)
  - [[2012 Q72]] — EOP-LOCA-1 step 16 checks 2R4/2R41D/2R34/1R3/1R6A/1R20B for a LOCA outside containment; 2R34 (Mechanical Penetration 100') is the answer, 2R10A is for LOCA inside containment
  - [[2012 Q85]] — containment radiation >2000 R/hr adds 2 pts (containment barrier) escalating a SAE to a General Emergency → subsequent NRC notification within 60 min
  - [[2012 Q90]] — dropped fuel assembly with 2R5 (FHB area) stabilizing at 25 mR/hr (alarm 11 mR/hr, warning 7 mR/hr): auto swaps FHB ventilation to the Charcoal Filter and starts BOTH FHB Exhaust Fans; 2R5 does NOT lock out crane motion (only 2R32A on the crane does); bank parent of 2016 Q88
- Related JPMs: [[2016 JPM SRO-A3]], [[2018 JPM IP-k]], [[2022 JPM RO-A4]], [[2022 JPM IP-k]], [[2014 JPM IP-k]], [[2012 JPM Sim-h]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2015 Scenario 1]], [[2015 Scenario 4]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]], [[2012 Scenario 2]]
