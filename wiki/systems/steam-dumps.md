---
title: Steam Dumps
category: systems
status: draft
aliases:
  - condenser steam dumps
  - steam dump valves
  - steam dump
---

# Steam Dumps

## Function

The steam dump system dumps steam directly to the main condenser to prevent a reactor trip following a turbine trip or rapid load reduction. During cooldown, steam dumps operate in pressure control mode to achieve a controlled cooldown rate. (UFSAR 7.7.2.7)

## Condenser Steam Dump Valves

- Dumps steam to the condenser to prevent reactor trip on turbine trip or rapid load reduction
- Controlled by: Tavg error signal (difference between Tavg and Tref)
- Steam dump to condenser blocked by C-9 (high condenser pressure or loss of circulating water)
- Steam dump blocked below P-12 (low Tavg)
- Cooldown mode: controlled by steam pressure for controlled cooldown rate
(UFSAR 7.7.2.7)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q18</div>
<span class="hi-exam">MSLI signals for high steam flow with Lo-Lo Tavg CANNOT be blocked</span> — not even by manually actuating and resetting SI. If steam dump rate is too high during EOP-directed depressurization, high steam flow + P-12 (Lo-Lo Tavg) will actuate MSLI, closing all MSIVs and making steam dumps unavailable. Continue depressurization via MS10 atmospheric dump valves. High steamline differential pressure causes SI, not MSLI — different signals.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-e</div>
EOP-FRHS-1 condensate pump feed: isolate all MS lines EXCEPT the selected SG (22 or 24 preferred). Place steam dumps in Manual, adjust valve demand to 0%, then place in <span class="hi-exam">MS Pressure Control</span>. Depressurize selected SG below <span class="hi-exam">575 psig</span>. Bypass <span class="hi-exam">Tavg Low-Low</span> when reached. When condensate flow established and WR level rising, place steam dumps in auto.
</div>

## Connections

- Related systems: [[Main Steam]], [[RCS]]
- Related EOPs: [[EOP-TRIP-1 — Standard Post Trip Actions]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related exam questions: [[2023 Q18]]
- Related JPMs: [[2023 JPM Sim-e]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
