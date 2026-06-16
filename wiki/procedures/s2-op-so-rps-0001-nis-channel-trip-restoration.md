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
<div class="callout-label">Exam — 2016 Q13</div>
IR channel removal (1N35 fails high at 100% power, Unit 1, S1.OP-SO.RPS-0001 page 11): when the PO places the <span class="hi-exam">LEVEL TRIP switch in BYPASS</span> at the NI rack, <span class="hi-exam">OHA E-29 (SR &amp; IR TRIP BYP) annunciates</span> and the <span class="hi-exam">IR FLUX HI reactor trip and IR HI FLUX ROD WDRWL STOP are blocked</span> for that channel. The next procedural action is to remove instrument power fuses. <span class="hi-trap">IR removal does NOT use control power fuses or POWER MISMATCH BYPASS — those are PR removal actions.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q30</div>
After PR NI channel 2N41 bistable is tripped per S2.OP-SO.RPS-0001, the coincidence for the PR High Neutron Flux Reactor Trip changes from 2/4 to <span class="hi-exam">1 out of 3</span>. The tripped bistable counts as a permanent "tripped" input in the coincidence logic — it is NOT removed from the logic. <span class="hi-trap">Trap: candidates may think the tripped channel is removed from the logic, resulting in 2/3 coincidence. In fact, the tripped bistable satisfies one leg permanently, so only 1 of the remaining 3 functional channels needs to exceed the setpoint to complete the trip logic.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q89</div>
Loss of a single IRNI channel is excluded from LCO 3.0.3 entry (min 2 operable). <span class="hi-exam">Loss of the SECOND IRNI channel enters TS 3.0.3</span> — initiate actions within one hour to place the unit in Hot Standby within the next 6 hours. See [[Excore NIs]], [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
PR channel removal for <span class="hi-exam">Power Range NI Channel IV (2N44)</span> failed high. After pre-checks (no ESF/RPS actuation risk, 2N44 not selected on NIS Recorder 2NR45), the PO performs the five PR-channel switch manipulations: Detector Current Comparator <span class="hi-exam">UPPER</span> section to PRN44 (CHANNEL DEFEAT lamp lit, <span class="hi-exam">OHA E-38 clears</span>), Detector Current Comparator <span class="hi-exam">LOWER</span> section to PRN44 (CHANNEL DEFEAT lamp lit, <span class="hi-exam">OHA E-46 clears</span>), POWER MISMATCH BYPASS to BYPASS PR N44, ROD STOP BYPASS to BYPASS PR N44 (2RP4 OVER POWER ROD STOP MANUAL BYPASS CH II lit, <span class="hi-exam">OHA E-31 clears</span>), COMPARATOR CHANNEL DEFEAT to N44 (COMPARATOR DEFEAT lamp lit, <span class="hi-exam">OHA E-39 clears</span>). The remainder of the procedure requires I&amp;C support to complete.
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related exam questions: [[2016 Q13]], [[2019 Q30]], [[2020 Q22]], [[2015 Q89]]
- Related JPMs: [[2020 JPM Sim-f]]
- Related scenarios: [[2015 Scenario 1]]
- Related exam: [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]]
