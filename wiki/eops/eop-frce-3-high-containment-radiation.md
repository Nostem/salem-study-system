---
title: "EOP-FRCE-3 — Response to High Containment Radiation Levels"
category: eops
status: draft
aliases:
  - EOP-FRCE-3
  - high containment radiation
---

# EOP-FRCE-3 — Response to High Containment Radiation Levels

## Purpose

Provides operator actions for responding to high radiation levels inside containment, including reconfiguration of containment fan coil units for filtration.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q25</div>
Step 2 — place all CFCUs in LOW speed. In LOW speed, dampers realign airflow through HEPA filters (bypassing roughing filters) to reduce airborne radioactivity inside containment.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q99</div>
CFST containment environment monitoring: the <span class="hi-exam">R44A/B (high range containment radiation monitors)</span> are used in EOP-CFST-1 to determine entry into EOP-FRCE-3 when radiation exceeds <span class="hi-exam">2 R/HR</span>. FRCE-3 is a <span class="hi-exam">yellow path procedure -- entry is optional</span> (CRS may elect to GO TO). <span class="hi-trap">Trap: R10A/B are also inside containment but are NOT the monitors used in the CFSTs for this purpose. Red/orange paths require mandatory entry; yellow paths are at the CRS's discretion.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q26</div>
Adverse containment conditions exist when R44A/B containment high range monitors read <span class="hi-exam">> 1E05 R/HR</span>. This affects SMM operation — the SMM switches to ADVERSE mode. <span class="hi-trap">When radiation levels subsequently lower below the adverse threshold, the SMM does NOT automatically reset — manual action is required.</span> Containment pressure auto-resets at < 3 psig, but radiation does not.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q75</div>
Step 2 — CFCUs operated in <span class="hi-exam">LOW speed</span> during FRCE-3. At 7E2 R/HR, containment radiation is <span class="hi-exam">less than 1E05 R/HR</span>, so containment is considered <span class="hi-exam">NORMAL</span> (not ADVERSE). The adverse containment radiation threshold is <span class="val-alarm">1E05 R/HR</span>. <span class="hi-trap">Trap: R44A/B being in alarm does NOT mean containment is ADVERSE. The alarm actuates at a much lower setpoint than the 1E05 R/HR adverse threshold. Running CFCUs in HIGH speed does not better mitigate the condition — LOW speed realigns dampers through HEPA filters for filtration.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q85</div>
EOP-FRCE-3 entry conditions per EOP-CFST-1: R44A/B radiation <span class="hi-exam">≥ 2 R/HR</span>. <span class="hi-trap">100 R/HR is the R44A/B WARNING setpoint — NOT the FRCE-3 entry threshold. Entry is at ≥ 2 R/HR, which is much lower than the warning setpoint.</span> FRCE-3 is a <span class="hi-exam">YELLOW path procedure — it is NOT required to be performed</span>. Per OP-AA-101-111-1003, yellow path functional restoration procedures are at the CRS's discretion.
</div>

## Connections

- Related systems: [[CFCUs]], [[Radiation Monitoring]], [[Incores]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related exam questions: [[2018 Q75]], [[2018 Q85]], [[2023 Q25]], [[2023 Q99]], [[2020 Q26]]
- Related exam: [[2018 NRC Written Exam]], [[2023 NRC Written Exam]], [[2020 NRC Written Exam]]
