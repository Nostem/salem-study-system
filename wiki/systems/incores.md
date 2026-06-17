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

## Function

Incore instrumentation systems provide core temperature and flux measurements for post-accident monitoring and core power distribution mapping. Includes Core Exit Thermocouples (CETs), the incore flux mapping system, and the Subcooling Margin Monitor. (UFSAR 7.6, 7.7)

## Core Exit Thermocouples (CETs)

CETs measure coolant temperature at the exit of fuel assemblies. Used for:
- Post-accident core cooling assessment (inadequate core cooling monitoring)
- Input to the Subcooling Margin Monitor
- Core power distribution verification

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

Moveable incore detectors are inserted into thimble tubes to map the core power distribution. Used for:
- Verification of power distribution limits (FQ, F-delta-H)
- Calibration of excore nuclear instruments

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
