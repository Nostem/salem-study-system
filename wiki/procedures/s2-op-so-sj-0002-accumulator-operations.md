---
title: "S2.OP-SO.SJ-0002 — Accumulator Operations"
category: procedures
status: draft
aliases:
  - S2.OP-SO.SJ-0002
  - accumulator operations
---

# S2.OP-SO.SJ-0002 — Accumulator Operations

## Purpose

Provides instructions for SI Accumulator operations including makeup, draining, venting, and pressurizing accumulators. Section 5.2 covers accumulator makeup using 21 Safety Injection Pump with RCS temperature >312°F or Reactor Vessel Head removed.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-d</div>
Accumulator makeup using 21 SI Pump (Section 5.2): prerequisite is <span class="hi-exam">ALL RCS Cold Leg Temperatures >312°F</span> OR Rx Vessel Head removed. CAUTION: closing 21SJ134 may require entry into TSAS 3.5.2. CAUTION: maximum of one SI Pump OR one Centrifugal Charging Pump shall be OPERABLE whenever temperature of one or more RCS cold legs is ≤312°F. Valve lineup: START 21 SI Pump → OPEN <span class="hi-exam">2SJ53 (21 SI Pump Discharge Test Line)</span> → OPEN <span class="hi-exam">2SJ123 (Test Line to CVCS HUT)</span> → OPEN <span class="hi-exam">21SJ20 (Accumulator Fill)</span>. When target level reached, CLOSE 21SJ20 → CLOSE 2SJ53 → CLOSE 2SJ123 → STOP 21 SI Pump. CAUTION: do NOT cross-tie accumulators at any time OPERABILITY is required.
</div>

## Connections

- Related systems: [[ECCS]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related JPMs: [[2020 JPM Sim-d]]
- Related exam: [[2020 NRC Operating Exam]]
