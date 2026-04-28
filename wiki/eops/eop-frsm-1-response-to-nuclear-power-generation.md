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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q56</div>
Step 8 — Local reactor trip: when directed from the Control Room to locally trip the reactor, the NEO will open <span class="hi-exam">ALL THREE sets of breakers</span>: (1) Reactor Trip Breakers, (2) Rod Drive MG Set Motor Breakers, and (3) Rod Drive MG Set Generator Breakers. <span class="hi-trap">Any ONE set of breakers being opened will trip the reactor, but the procedure directs opening ALL three to ensure the trip is achieved. Candidates may select only a subset.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #3</div>
ATWS following two dropped rods at ~89% power. Rod speed controller fails at <span class="hi-exam">8 spm in Auto</span>; operator must recognize failure and <span class="hi-exam">insert rods in Manual at 48 spm</span>. 2CV175 Rapid Boration valve fails to open — crew establishes Rapid Boration via <span class="hi-exam">RWST flow path</span>: isolate letdown (2CV3/4/5, 2CV2, 2CV277, 2CV7), open RWST outlets (2SJ1/2SJ2), open BIT valves (2SJ4/5, 2SJ12/13), close charging discharge (2CV40/41, 2CV68/69). <span class="hi-exam">CT-52: Insert negative reactivity (rod insertion or emergency boration) prior to dispatching operators to locally trip reactor.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q56</div>
EOP-FRSM-1 Step 3: ensure <span class="hi-exam">at least two charging pumps</span> are running (not all three). Step 3.1: the crew is <span class="hi-exam">NOT required to manually actuate Safety Injection</span> after starting the required charging pumps. FRSM-1 has a provision for aligning charging pumps to take suction from the RWST, but manual SI actuation is not directed. <span class="hi-trap">Trap: candidates may assume all 3 charging pumps are required during an ATWS for maximum boron injection, or that manual SI is required since the automatic SI did not actuate.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q98</div>
ATWS at 4% power: reactor fails to trip on 21 SG LO-LO Level, all CR trip attempts fail. IAW EOP-TRIP-1, since the reactor is NOT tripped, the crew transitions to <span class="hi-exam">EOP-FRSM-1</span>. At 4% power with turbine not online, <span class="hi-exam">automatic rod insertion will NOT achieve > 48 steps/minute</span> — the EOP-TRIP-1 basis document threshold. Therefore rods must be inserted <span class="hi-exam">MANUALLY</span>. <span class="hi-trap">Trap: even though power is < 5%, the reactor trip is NOT confirmed because all trip attempts have failed — the reactor is still critical. Power range NI less than 5% alone does NOT confirm a trip.</span>
</div>

## Connections

- Related systems: [[Main Turbine]], [[RPS/SSPS]], [[RCPs]], [[AFW]], [[Steam Generator & Blowdown]], [[Control Rod Drive]], [[CVCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam questions: [[2018 Q56]], [[2018 Q98]], [[2019 Q56]], [[2020 Q100]], [[2022 Q10]], [[2022 Q73]], [[2022 Q76]], [[2023 Q80]]
- Related scenarios: [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2023 Scenario 3 — ATWS / Stuck-Open PORV]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
