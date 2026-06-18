---
title: Incores
category: systems
status: draft
aliases:
  - incore flux mapping
  - CETs
  - subcooling margin monitor
---

# Incores

## Function & Design Basis

Incore instrumentation systems provide core temperature and flux measurements for post-accident monitoring and core power distribution mapping. Includes Core Exit Thermocouples (CETs), the incore flux mapping system, and the Subcooling Margin Monitor. (UFSAR 7.6, 7.7)

The In-Core Instrumentation System consists of <span class="hi-exam">58 flux thimbles</span> that run the length of selected fuel assemblies to permit measurement of the neutron flux distribution within the reactor core, and <span class="hi-exam">58 thermocouples located at the top of the flux thimbles</span> to measure coolant outlet temperature (UFSAR §7.7.3.6). The 58 locations are designated as Flux Thimble and Thermocouple locations; the minimum number of flux thimbles and thermocouples in use, as well as the minimum number per quadrant, is controlled by the Technical Specifications (UFSAR §7.7.3.6, Note 1). The high pressure seals for the thermocouples and flux thimbles are shown on UFSAR Figure 7.7-4.

The data obtained from the in-core temperature and flux distribution instrumentation, in conjunction with previously determined analytical information, can be used to determine the fission power distribution in the core at any time throughout core life; this method is more accurate than calculational techniques alone (UFSAR §7.7.3.6). The in-core instrumentation provides information used to calculate the coolant enthalpy distribution, the fuel burnup distribution, and to estimate the coolant flow distribution. Both radial and azimuthal symmetry of power distributions may be evaluated by comparing the detector and thermocouple information from one quadrant with similar data obtained from the other three quadrants (UFSAR §7.7.3.6).

## Core Exit Thermocouples (CETs)

CETs measure coolant temperature at the exit of fuel assemblies. Used for:
- Post-accident core cooling assessment (inadequate core cooling monitoring)
- Input to the Subcooling Margin Monitor
- Core power distribution verification

The CETs are <span class="hi-exam">chromel-alumel thermocouples</span> routed through the annular area between the inside and outside tubes of the flux thimble; they terminate at the top of the flux thimble, which is at the top of core (UFSAR §7.7.3.6.1). Each of the 58 flux thimbles has a <span class="hi-exam">back-up thermocouple</span> to provide greater system availability. The thermocouples are integral with the flux thimbles; if both thermocouples fail, they can be replaced by replacing the flux thimbles (UFSAR §7.7.3.6.1). Thermocouple readings are monitored by the <span class="hi-exam">core exit thermocouple processor, SPDS, and the computer</span>; the core exit thermocouple system, including the processor, meets R.G. 1.97 requirements (UFSAR §7.7.3.6.1).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q44</div>
<span class="hi-exam">5 or more Core Exit Thermocouples (CETs) &gt; 1200°F indicates a superheat condition</span> — most liquid inventory has been removed from the RCS and core decay heat is superheating steam in the core. This is the Core Cooling CSF <span class="hi-exam">RED path</span> → entry to EOP-FRCC-1. <span class="hi-trap">At least 5 CETs must be &gt;700°F for superheat at the core exit; below 700°F a Core Cooling PURPLE path is entered only if RVLIS Full Range &lt;39%. CETs at 650°F with RVLIS Full Range 74% is a YELLOW path, not PURPLE.</span> See [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[RVLIS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q45</div>
CETs are the primary RCS temperature indication; the CET Processing System digitizes the input and feeds the <span class="hi-exam">Subcooling Margin Monitor, SPDS, and the eP-250 Plant Computer</span>. If the (2-train) CET Processing System is de-energized, those downstream indications all lose CET input. Per 2-EOP-CFST-1, the ONLY indication then allowed to verify natural circulation is the <span class="hi-exam">Installed Control Room Class 1E readings</span>. <span class="hi-trap">Plant Computer, Subcooling Margin Monitor, and SPDS all derive from the de-energized CET Processing System (and SPDS/Plant Computer are exempt from 1E requirements).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q44</div>
At the CET Control Panel, the <span class="hi-exam">"ALL" Mode displays the two highest-reading Train A CETs in each quadrant, then sequentially displays all Train A CETs</span> (Table C of EOP-CFST-1). The 700°F threshold is the CFST-1 Core Cooling purple-path criterion, not a CET display mode. See [[EOP-CFST-1 — Critical Safety Function Status Trees]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q57</div>
In-Core Temperature Monitoring (CET) System: reference junction box is located outside containment. Ambient temperature changes are compensated by a <span class="hi-exam">temperature compensator circuit</span> — CET readings are NOT affected by reference junction box temperature changes. In-Core system design upper range is <span class="hi-exam">2300°F</span>.
</div>

## Incore Flux Mapping System

Miniature neutron flux detectors, remotely positioned in the core, provide remote readout for flux mapping (UFSAR §7.7.3.6.2). The basic system for inserting these detectors is shown on UFSAR Figures 7.7-4 and 7.7-6. Used for:
- Verification of power distribution limits (FQ, F-delta-H)
- Calibration of excore nuclear instruments

Retractable thimbles, into which the miniature detectors are driven, are pushed into the reactor core through conduits that extend from the bottom of the reactor vessel down through the concrete shield area to a thimble seal table (UFSAR §7.7.3.6.2). The thimbles are closed at the leading ends, are dry inside, and serve as the pressure barrier between the reactor water pressure and the atmosphere; mechanical seals between the retractable thimbles and the conduits are provided at the seal line. The thimbles are a <span class="hi-exam">tube within a tube</span>; the space between the inner and outer tube routes the thermocouple wires. Normally only the outside of the outer tube is exposed to reactor pressure, but on a failure of the outer tube the <span class="hi-exam">inner tube can withstand full reactor pressure</span> (UFSAR §7.7.3.6.2). During reactor operation the retractable thimbles are stationary; they are <span class="hi-exam">extracted downward from the core during refueling</span> to avoid interference within the core (UFSAR §7.7.3.6.2).

The drive system consists of six combinations of drive assemblies, five-path rotary transfer devices, and ten-path rotary transfer devices (UFSAR Figure 7.7-6). The drive system pushes hollow helical-wrap drive cables into the core; miniature detectors are attached to the leading ends of the cables, with small diameter sheathed coaxial cables threaded through the hollow centers back to the ends of the drive cables (UFSAR §7.7.3.6.2). The Control and Readout System rapidly traverses the miniature detectors to and from the core while plotting thermal neutron flux versus detector position. One five-path group path selector routes the detector into one of the flux thimble groups or to storage, and a ten-path rotary transfer assembly routes a detector into any one of up to ten selectable thimbles (UFSAR §7.7.3.6.2). Each detector provides axial flux distribution data along the center of a fuel assembly; various radial positions of detectors are then compared to obtain a flux map for a region of the core (UFSAR §7.7.3.6.2).

The thimbles are distributed nearly uniformly over the core, with about the same number of thimbles in each quadrant (UFSAR §7.7.3.6.2). NRC-approved methods for Westinghouse plants using the movable in-core fission chamber detector system statistically support a 4% nuclear enthalpy rise hot channel factor (F-delta-H) uncertainty; a 5% measurement uncertainty and a 3% manufacturing tolerance are approved for the local nuclear heat flux hot channel factor (FQ). Therefore the measured F-delta-H is increased by 4% for possible instrument error, while the measured FQ is increased by 8.15% (1.05 x 1.03) to allow for possible instrument error and manufacturing tolerances (UFSAR §7.7.3.6.2). This unit has the capability for using fixed in-core detectors, if required (UFSAR §7.7.3.6.2).

## Design Features & Interlocks

Manually-operated isolation valves on each thimble allow free passage of the detector and drive cable when open; when closed, these valves prevent steam leakage from the core in case of a thimble rupture (UFSAR §7.7.3.6.2). Provision is made to separately route each detector into a <span class="hi-exam">common flux thimble to permit cross calibration of the detectors</span> (UFSAR §7.7.3.6.2). Limit switches in each tubing run provide signals to the path display to indicate the active detector path during the flux mapping operation. In Unit 1 each gear box drives an encoder for position indication; in Unit 2 the system includes equipment to provide position indication for each detector (UFSAR §7.7.3.6.2).

## Subcooling Margin Monitor

Calculates RCS subcooling margin from CET temperatures and RCS pressure. Used in EOPs to assess core cooling adequacy.

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q58</div>
Subcooling Margin Monitor (CETPS) inputs: <span class="hi-exam">representative CET temperature, RCS wide range pressure, containment pressure, and containment radiation level</span>. <span class="hi-trap">PZR pressure is NOT used — PZR pressure instrumentation is narrow range (reading no lower than <span class="val-alarm">1700 psig</span>). RCS hot leg temperatures are NOT used — representative CET temperature is the correct temperature input.</span>
</div>

### Adverse Containment Mode

The SMM switches to ADVERSE mode when containment conditions are degraded. Either condition alone triggers adverse mode:
- Containment pressure > <span class="val-alarm">4 psig</span>
- Containment radiation (R44A/B) > <span class="val-alarm">1E05 R/HR</span>

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q26</div>
SMM adverse containment logic: <span class="hi-exam">either containment pressure > 4 psig OR R44A/B > 1E05 R/HR triggers ADVERSE mode</span> (only one condition required). When containment pressure lowers to < 3 psig, the SMM automatically resets from a pressure-driven adverse signal. <span class="hi-trap">However, the SMM does NOT automatically reset when radiation levels lower below adverse threshold — manual action is required to reset from a radiation-driven adverse condition.</span> Common trap: >1E06 R/HR is the integrated dose number used in procedures, NOT the adverse containment threshold (which is >1E05 R/HR).
</div>

## Exam & Operating Coverage

### Nuclear Instrument Compensating Voltage

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q94</div>
IR NI compensating-voltage faults: <span class="hi-exam">UNDER-compensation causes a HIGHER-than-expected reading; OVER-compensation causes a LOWER-than-expected reading.</span> With a startup at SR ~30,000 counts there should already be one decade of SR/IR overlap, so both IR NIs (N35/N36) <span class="hi-exam">should be reading ~1x10-10A</span> — both flashing at 1x10-11A (low) after both detectors were just replaced means both IR NIs should be declared <span class="hi-exam">INOPERABLE</span>. <span class="hi-trap">Trap: do not call this overcompensation and try to block the SR Hi Flux trip via P-6 — P-6 cannot be blocked unless power is above the P-6 interlock; with both NIs reading low, P-6 is not satisfied.</span> See [[TS 3/4.3 — Instrumentation]].
</div>

## Connections

- Related systems: [[Excore NIs]], [[RCS]], [[RPS/SSPS]], [[Containment]], [[Radiation Monitoring]], [[RVLIS]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]], [[TS 3/4.0 — Applicability]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]]
- Related exam questions: [[2020 Q26]], [[2020 Q58]], [[2023 Q57]], [[2015 Q44]], [[2014 Q45]], [[2014 Q94]], [[2012 Q44]]
- Related exams: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
  - [[2023 Q57]] — In-Core Temperature Monitoring CET / reference junction compensation / 2300°F limit
  - [[2020 Q26]] — SMM adverse containment mode / R44A/B > 1E05 R/HR / manual reset required for radiation
  - [[2020 Q58]] — Subcooling Margin Monitor inputs (CET temp, RCS WR pressure, not PZR pressure)
