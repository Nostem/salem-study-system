---
title: "AB.CVC-0001 — Loss of Charging"
category: abnormals
status: draft
aliases:
  - AB.CVC-0001
---

# AB.CVC-0001 — Loss of Charging

## Purpose

Referenced in 2023 NRC Operating Exam simulator scenarios. Details to be backfilled from source documents.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q6</div>
Per step 3.109, if MFC malfunction: take manual control of 2CV55 or 23 Charging Pump. <span class="hi-trap">With 23 Charging Pump in service, 2CV55 has no effect on charging flow</span> — must take manual control of <span class="hi-exam">23 Charging Pump Speed Controller</span>. 23 Charging Pump low speed stop maintains minimum <span class="hi-exam">47 gpm</span> for RCP seal injection.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-b</div>
Entered due to VCT level channel <span class="hi-exam">2LT112 failing high</span>. CRS directs manual makeup to VCT per S2.OP-SO.CVC-0006 Section 5.2 to restore VCT level to 53%. VCT level monitored via <span class="hi-exam">2LT114 on Plant Computer</span> (2LT112 unreliable due to failure).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
PZR Level Channel I fails high. Charging flow lowers automatically. RO places Master Flow Control in Manual and raises charging flow to restore PZR level to program. CRS enters AB.CVC-0001. RO selects operable <span class="hi-exam">Channel 3 for control</span> and operable Channel 2 or 3 for recorder. CRS evaluates <span class="hi-exam">TS 3.3.1.1 action 6 (72 hours to place channel in tripped condition)</span>.
</div>

## Connections

- Related systems: [[CVCS]]
- Related exam questions: [[2022 Q6]]
- Related JPMs: [[2022 JPM Sim-b]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]]
