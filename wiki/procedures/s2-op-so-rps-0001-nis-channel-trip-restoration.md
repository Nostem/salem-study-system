---
title: "S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration"
category: procedures
status: draft
aliases:
  - S2.OP-SO.RPS-0001
  - SO.RPS-0001
---

# S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration

## Purpose

Provides procedural guidance for removing NIS channels from service (tripping) and restoring them to service. Used when NIS channel malfunctions are identified per AB.NIS-0001.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q22</div>
IR channel removal from service: SO.RPS-0001 places the <span class="hi-exam">LEVEL TRIP switch in bypass</span>, which causes <span class="hi-exam">OHA E-29 (SR & IR TRIP BYP) to annunciate</span>. <span class="hi-trap">IR channels are NOT removed from service by removing control power fuses or instrument power fuses — fuse removal is used for PR channels, not IR channels.</span> There is no POWER MISMATCH BYPASS switch for IR channels (that is a PR channel feature).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-f</div>
PR channel 2N41 removal from service (Section 5.1): Steps 5.1.1-5.1.4 pre-checks (no ESF/RPS actuation risk, not selected on 2NR45, rod control in Manual, enter TS 3.3.1.1). Then at NI Rack No. 81, five switch manipulations in Steps 5.1.5.A-E: <span class="hi-exam">Detector Current Comparator Upper Section in PRN41</span> → <span class="hi-exam">Detector Current Comparator Lower Section in PRN41</span> → <span class="hi-exam">Power Mismatch Bypass in BYPASS PR N41</span> → <span class="hi-exam">Rod Stop Bypass in BYPASS PR N41</span> (OHA E-31 clears, 2RP4 bypass light illuminates) → <span class="hi-exam">Comparator Channel Defeat in N41</span> (OHA E-39 clears). RO-only JPM.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q30</div>
After PR NI channel 2N41 bistable is tripped per S2.OP-SO.RPS-0001, the coincidence for the PR High Neutron Flux Reactor Trip changes from 2/4 to <span class="hi-exam">1 out of 3</span>. The tripped bistable counts as a permanent "tripped" input in the coincidence logic — it is NOT removed from the logic. <span class="hi-trap">Trap: candidates may think the tripped channel is removed from the logic, resulting in 2/3 coincidence. In fact, the tripped bistable satisfies one leg permanently, so only 1 of the remaining 3 functional channels needs to exceed the setpoint to complete the trip logic.</span>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related exam questions: [[2019 Q30]], [[2020 Q22]]
- Related JPMs: [[2020 JPM Sim-f]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]]
