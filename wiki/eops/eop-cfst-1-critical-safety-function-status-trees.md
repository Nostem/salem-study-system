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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q85</div>
Containment environment CFST: <span class="hi-exam">FRCE-3 entry at R44A/B ≥ 2 R/HR</span>. At 14:00, R44A/B = 2 R/HR → entry conditions met. At 15:00, R44A/B = 100 R/HR → warning setpoint (not the entry condition). <span class="hi-trap">2 R/HR is the CFST threshold, NOT 100 R/HR. The 100 R/HR is the R44A/B WARNING setpoint which is unrelated to the CFST entry condition.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q74</div>
Containment Environment CFST — containment flooding (FRCE-2) entry thresholds: <span class="hi-exam">Normal containment: 78% sump level</span>; <span class="hi-exam">Adverse containment: 75% sump level</span>. With normal containment conditions, the crew enters EOP-FRCE-2 when sump level reaches 78%, not 75%.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q75</div>
Adverse containment radiation threshold: <span class="hi-exam">R44A/B > 1E05 R/HR</span>. At 7E2 R/HR (700 R/HR), containment is <span class="hi-exam">NORMAL</span>. <span class="hi-trap">R44A/B alarm actuation does NOT mean adverse containment. The alarm threshold is much lower than the 1E05 R/HR adverse threshold.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q80</div>
Heat Sink CFST entry criteria for FRHS-1 (Red path): <span class="hi-exam">ALL SG NR Levels < 15% AND Total Feedwater Flow < 22E04 LB/HR</span>. Both conditions must be met — low NR levels alone is not sufficient.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q83</div>
Concurrent CFST priorities: an FRTS PURPLE path (RCS Cooldown &gt; 100&deg;F/hr with T-Colds 230-280&deg;F) takes precedence over an FRSM YELLOW path. <span class="hi-exam">FRTS-1 PURPLE is higher priority than FRSM-2 YELLOW</span> in the CFST color hierarchy. With Source Range NIs not energized, the YELLOW SR/SM path for FRSM-2 is driven by IR SUR (required to be more negative than -0.2 dpm to avoid YELLOW), but FRTS PURPLE still wins.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q76</div>
SPDS use restriction: <span class="hi-exam">"SPDS is not designed to be used as a primary indication, and no actions should be based upon SPDS indications without verification of the primary indications, which are the installed Control Room 1E instruments."</span> Even when SPDS shows a Heat Sink Red Path on TRIP-1 exit, the crew does NOT immediately transition to FRHS-1; the procedure-in-effect (e.g., EOP-TRIP-2 step 3) is followed first using primary 1E indications. CFSTs become active upon exit from EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q44</div>
Table C of CFST-1 defines the CET Control Panel display modes: in <span class="hi-exam">"ALL" Mode the display progresses through the first and second highest CETs in each quadrant, then sequentially displays all CETs assigned to that channel</span>. The 700°F CET value is the Core Cooling (purple path) criterion. See [[Incores]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q83</div>
CFST RED-path prioritization: a <span class="hi-exam">loss-of-secondary-heat-sink RED path (FRHS-1) takes priority over a thermal-shock RED path (FRTS-1)</span>. See [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q84</div>
Knowing when NOT to implement a RED-priority CFST is as important as knowing when to: during FRCC-2 accumulator injection, <span class="hi-trap">a RED Thermal Shock path is NOT immediately implemented (FRTS-1) because stopping the cooldown to thermal-soak would let the core re-uncover</span>, deteriorating degraded core cooling to inadequate core cooling. See [[EOP-FRCC-2 — Response to Degraded Core Cooling]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
<span class="hi-exam">CFST monitoring commences after the transition out of EOP-TRIP-1</span> into EOP-LOCA-1 (STA reports to the control room ~10 minutes after being paged). During the LBLOCA the status trees identify both an <span class="hi-exam">FRTS RED path (imminent PTS) → EOP-FRTS-1</span> and an <span class="hi-exam">FRCE PURPLE path (excessive containment pressure) → EOP-FRCE-1</span>; each is an enter/act/return contingency that returns the crew to the procedure in effect. See [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q45</div>
Per 2-EOP-CFST-1, if the Core Exit Thermocouple Processing System is de-energized, the <span class="hi-exam">ONLY indication allowed to verify natural circulation is the Installed Control Room Class 1E readings</span>. <span class="hi-trap">Plant Computer, Subcooling Margin Monitor, and SPDS all derive their CET input from the (now de-energized) CET Processing System, and SPDS/Plant Computer are exempt from 1E requirements — so none may be used.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q99</div>
A new CFST condition that requires suspending the FRP in use is <span class="hi-exam">only a HIGHER RED or PURPLE path than the one which directed current procedure entry</span>. <span class="hi-trap">A new condition on a status tree DIFFERENT from the one that directed the current FRP does NOT always require suspending — that distractor is incorrect. (The condition that ALWAYS requires suspending any FRP is a loss of all three vital buses, which sends the crew to EOP-LOPA-1.)</span>
</div>

## Connections

- Related EOPs: [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-FRCC-2 — Response to Degraded Core Cooling]], [[EOP-FRCE-1 — Response to Excessive Containment Pressure]], [[EOP-FRCE-2 — Response to Containment Flooding]], [[EOP-FRCE-3 — Response to High Containment Radiation Levels]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRHS-2 — Response to Steam Generator Overpressure]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-FRSM-2 — Response to Loss of Core Shutdown]], [[EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related systems: [[RVLIS]], [[RPS/SSPS]], [[Incores]], [[Containment]], [[Radiation Monitoring]]
- Related procedures: [[OP-AA-101-111-1003 — Use of Procedures]]
- Related scenarios: [[2015 Scenario 1]], [[2015 Scenario 3]], [[2015 Scenario 4]]
- Related exam questions: [[2016 Q76]], [[2016 Q83]], [[2018 Q47]], [[2018 Q74]], [[2018 Q75]], [[2018 Q80]], [[2018 Q85]], [[2019 Q46]], [[2019 Q75]], [[2020 Q24]], [[2020 Q26]], [[2015 Q44]], [[2015 Q83]], [[2015 Q84]], [[2014 Q45]], [[2014 Q74]], [[2014 Q88]], [[2014 Q99]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]]
