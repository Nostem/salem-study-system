---
title: "S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CBV-0002
  - S1.OP-SO.CBV-0002
  - containment pressure relief
---

# S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation

## Purpose

Provides instructions for performing containment pressure relief operations, including valve alignment, radiation monitoring, and release termination.

## Key Actions / Information

- Step 5.2.2: Record release data (start time, initial containment pressure, rad monitor readings)
- Step 5.2.3.A: Monitor 2R41D (preferred) and 2R12A radiation monitors
- Step 5.2.3.B: If containment pressure <0.5 psig, OPEN 2VC6, 2VC5, and PRESSURE RELIEF DAMPER
- Step 5.2.5: Upon high radiation alarm, manually CLOSE PRESSURE RELIEF DAMPER, 2VC6, and 2VC5

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-h</div>
Containment pressure relief with defeated auto-isolation: upon <span class="hi-exam">OHA A-6 (RMS HI RAD OR TRBL) alarm on 2R41D</span>, the automatic closure of 2VC5/2VC6 has been defeated — must <span class="hi-exam">manually close PRESSURE RELIEF DAMPER, 2VC6, and 2VC5</span> to isolate the radiological release. Acceptable via step 5.2.5 of this procedure OR via S2.OP-AB.RAD-0001 Attachment 1 Step 10.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A3</div>
With both 1R12A (Containment Noble Gas) Source Check failed AND 1R41D (Plant Vent Release Rate) failed high, ODCM Table 3.3-13 Instrument #3 <span class="hi-exam">Action 37</span> applies for Containment Pressure Relief. Release IS permitted but the SRO must verify <span class="hi-exam">P&L 2.3</span> compensatory action — Chemistry is notified to comply with the contingency actions associated with the ODCM prior to performing a Containment Pressure Relief. Action 37 requires: <span class="hi-exam">(a) at least two independent samples of the tank's contents are analyzed AND (b) at least two technically qualified members of the facility Staff independently verify the release rate calculations</span>; otherwise suspend release of radioactive effluents via this pathway. Additional compensatory actions per <span class="hi-exam">P&L 3.11</span> may be identified by the SRO.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q60</div>
When a Containment Pressure Relief is initiated (opening 1VC5/1VC6 with NORMAL containment radiation), <span class="hi-exam">1R12A (Containment Gas Effluent, sampling containment atmosphere) stays constant; 1R41B (Plant Vent Noble Gas Intermediate Range, normally no sample flow) stays constant; 1R41D (Plant Vent Noble Gas Release Rate) RISES</span> because it computes release rate from on-range monitors × plant-vent flow (and auto-terminates release on high effluent). See [[Radiation Monitoring]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q65</div>
A valid RMS-initiated Containment Ventilation Isolation (CVI) <span class="hi-exam">closes VC1, VC4, VC5, VC6 and the Pressure Relief and Vacuum Relief Dampers</span>. During a vacuum relief in progress (2VC5, 2VC6 and Vacuum Relief Damper open), a CVI <span class="hi-exam">shuts 2VC5, 2VC6 AND the Vacuum Relief Damper</span>. <span class="hi-trap">The CVI can be blocked to permit the relief only if present before commencing the relief — it is NOT blocked in the stem conditions because it occurs after the relief was started.</span>
</div>

## Connections

- Related systems: [[Containment]], [[Radiation Monitoring]]
- Related procedures: [[AB.RAD-0001 — Radiation Monitor Abnormality]]
- Related exam questions: [[2019 Q96]], [[2020 Q33]], [[2015 Q60]], [[2012 Q65]]
- Related JPMs: [[2016 JPM SRO-A3]], [[2023 JPM Sim-h]], [[2012 JPM SRO-A3]]
- Related exam: [[2016 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
