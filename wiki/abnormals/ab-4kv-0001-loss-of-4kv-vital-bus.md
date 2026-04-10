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

## Connections

- Related systems: [[4KV]], [[CVCS]], [[EDGs]]
- Related JPMs: [[2022 JPM Sim-g]]
- Related exam: [[2022 NRC Operating Exam]]
