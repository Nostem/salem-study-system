---
title: "S2.OP-SO.CVC-0002 — Charging Pump Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CVC-0002
  - charging pump operation
---

# S2.OP-SO.CVC-0002 — Charging Pump Operation

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

System operating procedure for placing centrifugal and positive displacement charging pumps in service, swapping pumps, and securing pumps under normal and abnormal conditions.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
Section 4.1 governs the <span class="hi-exam">Normal alignment of 23 Charging Pump</span> for standby readiness. AB.SW-0005 swap procedure (when AB.SW-0005 directs placing 23 Charging in service): (1) Verify all 21–24 RCP Seal Inlet Temperatures &lt;225°F; (2) Ensure 23 Charging Pump is aligned for Normal Operation IAW S2.OP-SO.CVC-0002 Section 4.1; (3) Place 23 Charging Pump in MANUAL; (4) Place Charging Master Flow Controller in MANUAL; (5) <span class="hi-exam">Set 23 Charging Pump Speed Demand to 10–12% BEFORE starting</span>; (6) Start 23 Charging Pump and immediately increase Speed Demand to ~20% to <span class="hi-exam">couple the pump</span>; (7) Adjust Speed Demand for desired flow; (8) Ensure Seal Injection Flow 6–12 gpm to each RCP, not to exceed 40 gpm total; (9) Stop 21 and 22 Centrifugal Charging Pumps. <span class="hi-trap">The 10–12% start sequence is unique to the positive-displacement 23 Charging Pump — the centrifugal pumps do not require this couple-up procedure.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 RO-A2</div>
Charging pump operability is dispositioned from the 92-day IST (S1.OP-ST.CVC-0003). The pass/fail parameter in this JPM is <span class="hi-exam">Pump Inboard Bearing Vibration Position P1H</span>: a value <span class="hi-exam">&gt;0.70 in/sec is in the Required Action Range (UNSAT)</span> per S1.RA-ST.CVC-0003. A P1H of <span class="val-trip">0.710 in/sec</span> renders the pump surveillance UNSAT regardless of how the data sheet was initialed.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q40</div>
The Charging System <span class="hi-exam">Master Flow Controller controls PDP charging pump speed (and flow) when the PD pump is in service, and controls charging FCV CV-55 when a centrifugal pump is in service</span>. Normal MFC demand is ~40%; a failure to 20% halves charging flow (normal charging ~90 gpm), producing SEAL WATER FLOW LO on all 4 RCPs.
</div>

## Connections

- Related systems: [[CVCS]]
- Related procedures: [[AB.SW-0005 — Loss of All Service Water]], [[S1.OP-ST.CVC-0003 — Inservice Testing, 11 Charging Pump]]
- Related JPMs: [[2016 JPM Sim-e]], [[2015 JPM RO-A2]]
- Related exam questions: [[2014 Q40]]
- Related exam: [[2014 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Operating Exam]]
