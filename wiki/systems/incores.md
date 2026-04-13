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

### Adverse Containment Mode

The SMM switches to ADVERSE mode when containment conditions are degraded. Either condition alone triggers adverse mode:
- Containment pressure > <span class="val-alarm">4 psig</span>
- Containment radiation (R44A/B) > <span class="val-alarm">1E05 R/HR</span>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q26</div>
SMM adverse containment logic: <span class="hi-exam">either containment pressure > 4 psig OR R44A/B > 1E05 R/HR triggers ADVERSE mode</span> (only one condition required). When containment pressure lowers to < 3 psig, the SMM automatically resets from a pressure-driven adverse signal. <span class="hi-trap">However, the SMM does NOT automatically reset when radiation levels lower below adverse threshold — manual action is required to reset from a radiation-driven adverse condition.</span> Common trap: >1E06 R/HR is the integrated dose number used in procedures, NOT the adverse containment threshold (which is >1E05 R/HR).
</div>

## Connections

- Related systems: [[Excore NIs]], [[RCS]], [[RPS/SSPS]], [[Containment]], [[Radiation Monitoring]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related exam questions: [[2023 Q57]], [[2020 Q26]]
- Related exams: [[2023 NRC Written Exam]], [[2020 NRC Written Exam]]
  - [[2023 Q57]] — In-Core Temperature Monitoring CET / reference junction compensation / 2300°F limit
  - [[2020 Q26]] — SMM adverse containment mode / R44A/B > 1E05 R/HR / manual reset required for radiation
