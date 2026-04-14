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
<div class="callout-label">Exam -- 2023 Q93</div>
Per Attachment 1: with <span class="hi-exam">4 or more circulators out of service</span> and power greater than or equal to <span class="hi-exam">P-10 (10%)</span>, <span class="hi-exam">trip the reactor and enter EOP-TRIP-1</span>. When the 24 CW bus loses its infeed breaker, the bus auto-transfers to the 23 CW bus, but all 'B' circulator breakers <span class="hi-exam">trip open on undervoltage and must be manually restarted</span>. With 21A CW Pump already CIT, this results in 4+ circulators out of service. <span class="hi-trap">The CW bus auto-transfer does NOT maintain power to the 'B' circulators -- they trip on undervoltage during the transfer and require manual restart.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q64</div>
Step 3.10: with loss of circulators causing condensate pump issues (oscillating amps from low hotwell level), <span class="hi-exam">initiate a load reduction to ≤ <span class="val-alarm">83%</span> Reactor Power, IAW S2.OP-AB.LOAD-0001, to prevent flashing in Condensate System</span>. <span class="hi-trap">AB.CN-0001 directs a max of 85% for condensate abnormalities, but AB.CW-0001 directs the more restrictive 83% limit. The liquid waste release from 21 CVCS Monitor Tank via 21 CCW HX goes to Unit 1 CW (11A&B) pump discharge, NOT Unit 2 — so loss of Unit 2 circulators does not require release termination.</span>
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
- Related exam questions: [[2020 Q64]], [[2023 Q93]]
- Related scenarios: [[2022 Scenario 4]], [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
