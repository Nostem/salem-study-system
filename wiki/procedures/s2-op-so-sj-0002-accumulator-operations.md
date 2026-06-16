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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-c</div>
EOP-TRIP-6 Step 12 SI Accumulator isolation: at <span class="hi-exam">RCS pressure &lt;1000 psig</span>, REMOVE LOCKOUT FROM 21-24 SJ54 (ACCUMULATOR OUTLET VALVES) at 2RP4 — selects VALVE OPERABLE on each lockout switch. Depress CLOSE PB on 21-24 SJ54. <span class="hi-exam">Alternate path: 24 SJ54 fails to close (CLOSE PB OFF override at intermediate position). Vent 24 Accumulator: maintain RCS pressure &gt; accumulator nitrogen pressure, open 2NT35 (N2 HDR VALVE), open 24 SJ93 (N2 SUPPLY VALVE). When 24 Accumulator pressure reaches ZERO, close 2NT35 and 24 SJ93</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-c</div>
Raise accumulator level (Section 5.2) and pressure (Section 5.10). <span class="hi-exam">P&amp;L 3.1: if both level and pressure need adjustment, level is adjusted first.</span> Step 5.2.2 N/As CLOSE 21SJ134 because <span class="hi-exam">RCS pressure is &gt;2000 psig</span> (only required if &lt;2000 psig). Level lineup with 21 SI pump: START 21 SI pump → OPEN 2SJ53 → OPEN 2SJ123 → OPEN 24SJ20, then CLOSE 24SJ20 at the <span class="hi-exam">60% level</span> target on 2LI935D/2LI934D and restore (CLOSE 2SJ53, CLOSE 2SJ123, STOP 21 SI pump). Pressure (Section 5.10): OPEN 2NT32 (N2 SUPPLY) → OPEN 24SJ93 (N2 SUPPLY) — <span class="hi-exam">pressure rises very rapidly</span> — CLOSE 24SJ93 at the <span class="hi-exam">625 psig</span> target on 2PI936D/2PI937D, then CLOSE 2NT32. Independent Verification per Attachment 1 Sections 2.0 and 10.0.
</div>

## Connections

- Related systems: [[ECCS]]
- Related tech specs: [[TS 3/4.5 — ECCS]]
- Related EOPs: [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]]
- Related JPMs: [[2018 JPM Sim-c]], [[2020 JPM Sim-d]], [[2016 JPM Sim-c]], [[2015 JPM Sim-c]]
- Related exam: [[2018 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Operating Exam]]
