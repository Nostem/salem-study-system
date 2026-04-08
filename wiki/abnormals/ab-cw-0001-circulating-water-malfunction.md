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

## Connections

- Related systems: [[Turbine-Generator]]
- Related EOPs: [[EOP-TRIP-1]]
- Related exam questions: [[2023 Q93]]
- Related exam: [[2023 NRC Written Exam]]
