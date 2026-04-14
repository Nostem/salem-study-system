---
title: "AB.CW-0001 — Circulating Water Malfunction"
category: abnormals
status: draft
aliases:
  - AB.CW-0001
  - S2.OP-AB.CW-0001
  - circulating water malfunction
---

# AB.CW-0001 — Circulating Water Malfunction

## Purpose

Provides operator actions for responding to circulating water system malfunctions including loss of circulators, CW bus failures, and condenser vacuum degradation.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q37</div>
CAS guidance: with <span class="hi-exam">4 or more circulators out of service AND Reactor Power >= P-10 (10%)</span>, crew is required to <span class="hi-exam">TRIP the Reactor</span>. At 25% power with intake structure damage taking 4 circulators out of service, reactor trip is required — not rapid load reduction, controlled shutdown, or turbine trip. <span class="hi-trap">CAS also contains guidance for Rapid Power Reduction (to stabilize backpressure), Turbine Trip (backpressure outside limits with power < P-9/49%), and Immediate Controlled Turbine Shutdown (Attachment 7) — but 4+ circulators OOS above P-10 = reactor trip.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q93</div>
Per Attachment 1: with <span class="hi-exam">4 or more circulators out of service</span> and power greater than or equal to <span class="hi-exam">P-10 (10%)</span>, <span class="hi-exam">trip the reactor and enter EOP-TRIP-1</span>. When the 24 CW bus loses its infeed breaker, the bus auto-transfers to the 23 CW bus, but all 'B' circulator breakers <span class="hi-exam">trip open on undervoltage and must be manually restarted</span>. With 21A CW Pump already CIT, this results in 4+ circulators out of service. <span class="hi-trap">The CW bus auto-transfer does NOT maintain power to the 'B' circulators -- they trip on undervoltage during the transfer and require manual restart.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
High DP across 23A CW Traveling Screen. Entry cue: OHA K-1 (21-23 A CW SCRNWSH TRBL). 23A traveling screen running in Fast Speed with heavy grass/debris. Attachment 1 step 9 provides CW pump trip criteria based on screen DP: <span class="hi-exam">stop CW pump when DP > 6 feet, emergency trip when DP > 8 feet</span>. PO stops or emergency trips 23A CW pump.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
Loss of #4 SPT causes 23 CW Bus de-energization — 21A-23A CW pumps trip. Condenser DTs exceed <span class="hi-exam">27 F</span>, requiring turbine load reduction to less than 80%. CRS dispatches field operators to open 21-23MC62 (Turb Hood Spray Bypass Valves). CRS directs monitoring condensate pump suction piping for signs of flashing (temperature &lt;120 F). 23 CW Bus can be re-energized from Bus Section 24 via AB.LOOP-0003 Attachment 4.
</div>

## Connections

- Related systems: [[Main Turbine]], [[Circ Water]]
- Related EOPs: [[EOP-TRIP-1]]
- Related exam questions: [[2019 Q37]], [[2023 Q93]]
- Related scenarios: [[2022 Scenario 4]], [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exam: [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
