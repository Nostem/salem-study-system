---
title: "EOP-CFST-1 — Critical Safety Function Status Trees"
category: eops
status: draft
aliases:
  - EOP-CFST-1
  - CFST
  - critical safety function status trees
  - Critical Safety Function Status Trees
---

# EOP-CFST-1 — Critical Safety Function Status Trees

## Purpose

Provides the decision logic for monitoring Critical Safety Functions (CSFs) during emergency operations. Continuously evaluated after a reactor trip to detect degraded or lost safety functions, with color-coded paths (Red, Purple, Yellow) directing entry into the appropriate Functional Restoration Procedure (FRP).

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q24</div>
Core Cooling Red Path validation criteria (with no RCPs running): <span class="hi-exam">five (5) hottest CETs > 700°F</span> AND <span class="hi-exam">RVLIS Full Range ≤ 39%</span>. <span class="hi-trap">RVLIS Upper Range is NOT applicable for core cooling status — it only provides indication from the hot leg piping connection to the top of the reactor vessel.</span> Purple Path (degraded core cooling) uses <span class="hi-exam">RVLIS Dynamic Range ≤ 44%</span>. For CET-based Red Path (inadequate core cooling), <span class="hi-exam">five (5) CETs must be > 1200°F</span> (not three).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q26</div>
Subcooling Margin Monitor (SMM) adverse containment inputs: <span class="hi-exam">containment pressure > 4 psig</span> OR <span class="hi-exam">containment radiation (R44A/B) > 1E05 R/HR</span> — either condition alone triggers ADVERSE mode. When containment pressure lowers to < 3 psig, the SMM automatically resets from a pressure-driven adverse condition. <span class="hi-trap">The SMM does NOT automatically reset when radiation levels lower below the adverse threshold — manual action is required to reset from a radiation-driven adverse condition.</span>
</div>

## Connections

- Related EOPs: [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]], [[EOP-FRCE-3 — Response to High Containment Radiation Levels]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRHS-2 — Response to Steam Generator Overpressure]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]]
- Related systems: [[RVLIS]], [[RPS/SSPS]], [[Incores]], [[Containment]], [[Radiation Monitoring]]
- Related exam questions: [[2020 Q24]], [[2020 Q26]]
- Related exam: [[2020 NRC Written Exam]]
