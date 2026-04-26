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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q47</div>
Confirms CSF/color hierarchy priority: with <span class="hi-exam">Heat Sink Red and Core Cooling Purple</span>, address <span class="hi-exam">Heat Sink first</span> because color (Red > Purple) takes precedence over CSF hierarchy position (Core Cooling > Heat Sink). Also confirms: with Red and Purple CFSTs, monitoring frequency is <span class="hi-exam">continuous</span> (not every 10-20 minutes, which is for no condition more serious than Yellow).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q46</div>
CSF Hierarchy (high to low): <span class="hi-exam">SHUTDOWN MARGIN, CORE COOLING, HEAT SINK, THERMAL SHOCK, CONTAINMENT ENVIRONMENT, COOLANT INVENTORY</span>. CFST Color Hierarchy (high to low): <span class="hi-exam">Red, Purple, Yellow, Green</span>. Color takes precedence over CSF position — a <span class="hi-exam">Red path for Heat Sink takes priority over Purple path for Shutdown Margin or Core Cooling</span>. Example: with Core Cooling Purple and Heat Sink Red → address Heat Sink FIRST. <span class="hi-trap">Trap: candidates may default to the CSF hierarchy (Shutdown Margin > Core Cooling > Heat Sink) and address Core Cooling first, but the color hierarchy overrides — Red always beats Purple regardless of CSF position.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q75</div>
Containment Environment CFST FRCE-2 (Yellow — Containment Flooding) entry: <span class="hi-exam">Containment Sump level ~78% (75% ADVERSE)</span>. Other containment environment CFSTs: FRCE-1 Red (containment pressure ~47 psig), FRCE-1 Purple (containment pressure ~15 psig with CS pump running), FRCE-3 Yellow (containment radiation ~2 R/HR). <span class="hi-trap">FRCE-2 is triggered by sump level, not pressure or radiation. Know which parameter drives each color path.</span>
</div>

## Connections

- Related EOPs: [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]], [[EOP-FRCE-3 — Response to High Containment Radiation Levels]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRHS-2 — Response to Steam Generator Overpressure]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]]
- Related systems: [[RVLIS]], [[RPS/SSPS]], [[Incores]], [[Containment]], [[Radiation Monitoring]]
- Related procedures: [[OP-AA-101-111-1003 — Use of Procedures]]
- Related exam questions: [[2018 Q47]], [[2019 Q46]], [[2019 Q75]], [[2020 Q24]], [[2020 Q26]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]]
