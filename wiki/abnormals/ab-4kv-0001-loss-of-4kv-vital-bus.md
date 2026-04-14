---
title: "AB.4KV-0001 — Loss of 4KV Vital Bus"
category: abnormals
status: draft
aliases:
  - AB.4KV-0001
  - S2.OP-AB.4KV-0001
  - loss of 4KV vital bus
---

# AB.4KV-0001 — Loss of 4KV Vital Bus

## Purpose

Provides operator actions for response to a loss of a 4KV vital bus (2A or 2B). Entry conditions include loss of voltage on any 4KV vital bus.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-g</div>
Loss of 2A 4KV Vital Bus response: A EDG auto-starts and re-energizes the bus. For charging restoration: determine if <span class="hi-exam">23 Charging Pump was providing to Unit 2 (YES) → CLOSE 2CV55 → START 21 Charging Pump</span>. If 21 Charging Pump trips on start (alternate path), <span class="hi-exam">START 22 Charging Pump</span>. Note: 2CV55 has a long stroke time (~2 minutes).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q53</div>
Unit 1 — 1A 4KV Bus Differential with #3 SW Bay C/Ted: per step 3.33, <span class="hi-exam">15 and 16 SW Pumps are powered from 1A Bus</span> but are already isolated for #3 SW Bay outage. The 1A Bus Differential has <span class="hi-exam">no additional impact on service water system</span>. 13 SW Pump trip (separate event) causes SW header pressure drop → <span class="hi-exam">12 SW Pump auto-starts (C Bus)</span>. Correct procedure entry: AB.4KV-0001. <span class="hi-trap">Do not confuse with a Loss of All Service Water (AB.SW-0005) — the 1A bus loss does not affect currently-operating SW pumps.</span>
</div>

## Connections

- Related systems: [[4KV]], [[CVCS]], [[EDGs]], [[Service Water]]
- Related exam questions: [[2020 Q53]]
- Related JPMs: [[2022 JPM Sim-g]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Operating Exam]]
