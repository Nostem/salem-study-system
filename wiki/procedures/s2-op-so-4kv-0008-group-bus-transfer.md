---
title: "S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer"
category: procedures
status: draft
aliases:
  - S2.OP-SO.4KV-0008
  - group bus transfer
---

# S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer

## Purpose

Provides instructions for transferring 4KV Group Buses between Station Power Transformers (SPT) and Auxiliary Power Transformers (APT). Used during power ascension and normal operations.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-h</div>
Transfer 4KV Group Buses from SPT to APT: verify APT voltage <span class="hi-exam">4.22 - 4.36KV</span> on 2CC3. P&L 3.3: <span class="hi-exam">OHA J-39 (GROUP BUS XFER FAIL) will illuminate then clear on bus transfer</span> (expected response). J-39 ARP is applicable when the alarm does NOT clear following bus transfer. For each bus: press Mimic Bus GROUP BUS INFEED breaker pushbutton → verify MIMIC BUS INTLK CLOSE SELECTION illuminates → press CLOSE pushbutton → verify supply breaker OPEN, feed breaker CLOSED, bus voltage 4.22-4.36KV. If 2G bus fails to transfer: <span class="hi-exam">24 RCP trips (powered from 2G bus)</span>. OHA J-38 and D-31 ARPs both direct: IF ANY RCP Trips, THEN TRIP Reactor and GO TO EOP-TRIP-1.
</div>

## Connections

- Related systems: [[4KV]]
- Related JPMs: [[2020 JPM Sim-h]]
- Related exam: [[2020 NRC Operating Exam]]
