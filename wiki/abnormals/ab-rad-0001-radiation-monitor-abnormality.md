---
title: "AB.RAD-0001 — Radiation Monitor Abnormality"
category: abnormals
status: draft
aliases:
  - AB.RAD-0001
  - S1.OP-AB.RAD-0001
---

# AB.RAD-0001 — Radiation Monitor Abnormality

## Purpose

Provides operator actions for responding to area and process radiation monitor alarms and abnormalities.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q62</div>
If <span class="hi-exam">1R1A, Control Room Area, radiation monitor is in alarm</span>: coordinate with Unit 2 NCO to align Control Room Ventilation for ACCIDENT PRESSURIZED mode IAW S1.OP-SO.CAV-0001 and S2.OP-SO.CAV-0001. Direct Radiation Protection to survey area to determine source of activity rise. <span class="hi-trap">1R1A is an area radiation monitor — it does NOT automatically actuate CAV in AP Mode. Manual actuation from the affected unit's RP2 panel is required.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-h</div>
Containment pressure relief high radiation: Attachment 1, Step 10 directs ensuring <span class="hi-exam">2VC1, 2VC4, 2VC5, and 2VC6 are CLOSED</span>. This provides an alternate procedural path for isolating the containment pressure relief if the applicant enters AB.RAD-0001 instead of using step 5.2.5 of S2.OP-SO.CBV-0002.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q23</div>
<span class="hi-exam">2R41D (Plant Vent) in ALARM</span> automatically closes <span class="hi-exam">2WG41, 2VC1/VC4 (purge dampers), and 2VC5/VC6 (pressure relief dampers)</span>. Also aligns <span class="hi-exam">2R45 skid to accident sampling</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q51</div>
R19 SGBD radiation monitor WARNING setpoint automatic actuations: <span class="hi-exam">Unit 1 — NO automatic actuations at WARNING</span>. <span class="hi-exam">Unit 2 — automatically closes ALL GB10s, GB185s, and 2GB50</span>. At the ALARM setpoint, both units take automatic isolation actions (Unit 1: all GB4s, GB8s, GB10s, GB185s, 1GB50; Unit 2: affected SG GB4). <span class="hi-trap">WARNING vs ALARM actions differ significantly, and there is a unit difference at the WARNING level.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q23</div>
2R32A (Fuel Handling Crane area rad monitor) failure to alarm setpoint: <span class="hi-exam">ONLY crane hoist-up operation is prevented</span>. No bypass interlock pushbutton exists. <span class="hi-exam">2R5 and 2R9 cause FHB exhaust to swap to 22 HEPA plus Charcoal but have NO crane interlocks.</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Containment]], [[Radiation Monitoring]], [[Refueling]]
- Related procedures: [[S1.OP-SO.CAV-0001 — Control Room Ventilation Operation]], [[S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation]]
- Related exam questions: [[2020 Q23]], [[2020 Q51]], [[2022 Q23]], [[2023 Q62]]
- Related JPMs: [[2023 JPM Sim-h]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
