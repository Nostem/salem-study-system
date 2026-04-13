---
title: "EOP-LOCA-2 — Post LOCA Cooldown and Depressurization"
category: eops
status: draft
aliases:
  - EOP-LOCA-2
  - post LOCA cooldown
---

# EOP-LOCA-2 — Post LOCA Cooldown and Depressurization

## Purpose

Guides operators through cooldown and depressurization following a loss of coolant accident, including evaluation of natural circulation conditions.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q2</div>
Step 19.1 evaluates natural circulation conditions: subcooling >0 degrees F, SG pressures stable, T-Hots dropping, CETs lowering, T-Colds at SG saturation temperature.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
PZR vapor space SBLOCA procedure path: EOP-LOCA-1 SI termination criteria met (subcooling, PZR level rising, RCS pressure stable) → transition to <span class="hi-exam">EOP-TRIP-3 (SI Termination)</span> → reduce ECCS flow → RCS pressure lowers with unisolable leak → EOP-TRIP-3 transitions to <span class="hi-exam">EOP-LOCA-2</span>. The path is LOCA-1 → TRIP-3 → LOCA-2, not directly from LOCA-1 to LOCA-2.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-c</div>
Step 20 RCS depressurization: with no RCPs running, normal spray is unavailable. Attempt PORV (2PR2) — if it fails to open, RCS pressure NOT dropping → use <span class="hi-exam">Auxiliary Spray: OPEN 2CV75, CLOSE 2CV77 and 2CV79</span>. Stop depressurization when <span class="hi-exam">PZR level >77% (74% adverse) or RCS subcooling <10F</span>. Restore aux spray to normal: close 2CV75, reopen 2CV77 or 2CV79.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q03</div>
EOP-LOCA-2 Step 21 "Charging Pump Reduction": subcooling requirements from Table C depend on <span class="hi-exam">number of SI pumps running, RCP status, and containment conditions (normal vs adverse)</span>. With only 1 SI pump running (2A 4KV bus faulted), all RCPs stopped, and containment pressure at 4.3 psig (<span class="hi-exam">adverse conditions</span>), the required subcooling is <span class="hi-exam">141°F</span>. To use steam tables: convert <span class="hi-exam">1035 psig to 1049.7 psia</span>, look up T-Sat = 550.56°F, then max CET = 550.56 - 141 = <span class="hi-exam">409°F</span>. <span class="hi-trap">Common error: using psig directly in steam tables instead of converting to psia (add 14.7). Using 1035 psia gives T-Sat of 548.83°F and an incorrect answer of 407°F.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q27</div>
During ECCS pump reduction for vital bus redundancy: <span class="hi-exam">22 SI Pump stopped</span> because it shares <span class="hi-exam">2C 4KV bus with the 22 Charging Pump</span> (must maintain charging for RCS makeup/boration). <span class="hi-exam">21 SI Pump stays running</span> (separate 2A bus).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q27</div>
Step 14 NOTE — voiding identification during depressurization: without RCPs running, the upper head remains relatively hot compared with the active regions of the RCS. Steam formation during depressurization in the upper head <span class="hi-exam">displaces water into the Pressurizer, causing rapidly increasing Pressurizer level</span>. <span class="hi-trap">Rising PZR level (not lowering SI flow, rising RCS pressure, or lowering subcooling) is the procedural indication for voiding per EOP-LOCA-2.</span>
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]], [[CVCS]], [[Pressurizer & PRT]]
- Related exam questions: [[2020 Q03]], [[2020 Q27]], [[2022 Q27]], [[2023 Q2]], [[2023 Q76]]
- Related JPMs: [[2023 JPM Sim-c]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
