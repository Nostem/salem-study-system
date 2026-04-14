---
title: "EOP-FRSM-1 — Response to Nuclear Power Generation"
category: eops
status: draft
aliases:
  - EOP-FRSM-1
  - ATWS response
  - response to nuclear power generation
---

# EOP-FRSM-1 — Response to Nuclear Power Generation

## Purpose

Functional Restoration Procedure for responding to an ATWS (Anticipated Transient Without Scram) condition where the reactor has failed to trip and nuclear power generation continues. Entered from the Critical Safety Function Status Trees when subcriticality is not achieved.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q10</div>
Step 1 (Immediate Actions) reactor trip sequence: 1) Reactor Trip Switches, 2) Trip Breaker Bezel, 3) Insert control rods at maximum rate using MANUAL and AUTO rod control, 4) Open breakers <span class="hi-exam">2E6D and 2G6D</span> (Rod Drive M-G Set), 5) Send operators to locally open reactor trip breakers. <span class="hi-trap">Tripping Main Turbine comes AFTER all step 1 attempts — it is NOT part of the immediate reactor trip sequence.</span> Emergency boration is <span class="hi-exam">step 4</span> of the procedure.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q80</div>
Step 6 checks turbine trip status by verifying <span class="hi-exam">ALL turbine stop valve closed bi-stables are LIT on 2RP4</span>. This confirms the turbine is tripped (stop valves closed). <span class="hi-trap">2/3 Auto Stop Oil low pressure bi-stables LIT is a demand for a turbine trip, NOT confirmation of a turbine trip.</span> If the turbine trip is NOT confirmed at Step 6, the CRS directs dispatching an operator to <span class="hi-exam">locally trip the turbine at the front standard</span> (not stopping EHC pumps from the control room).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q76</div>
Caution C1-1: RCPs should NOT be tripped with reactor power <span class="hi-exam">greater than 5%</span>. During an ATWS, RCP operation could temporarily cool the core under voided RCS conditions. Even if RCP trip criteria are met (e.g., motor flange vibration > 5 mils), do NOT trip the RCP while power is > 5%. <span class="hi-trap">Manually tripping an RCP during some ATWS events could result in reduced heat removal and a challenge to fuel integrity.</span>
</div>

## Connections

- Related systems: [[Main Turbine]], [[RPS/SSPS]], [[RCPs]], [[AFW]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam questions: [[2022 Q10]], [[2022 Q73]], [[2022 Q76]], [[2023 Q80]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
