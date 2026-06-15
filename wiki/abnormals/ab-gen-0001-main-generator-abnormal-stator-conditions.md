---
title: "AB.GEN-0001 — Main Generator Abnormal Stator Conditions"
category: abnormals
status: draft
aliases:
  - AB.GEN-0001
  - S2.OP-AB.GEN-0001
  - Main Generator Stator Abnormality
---

# AB.GEN-0001 — Main Generator Abnormal Stator Conditions

## Purpose
Provides operator actions for response to abnormal Main Generator stator conditions, including elevated stator temperatures and high Generator Radio Frequency (RF) Monitor indication, which can indicate stator winding insulation degradation / partial discharge activity.

## Entry Conditions
- Aux Annunciator Point 0901, GEN RADIO FREQ HIGH
- Stator thermocouple (T/C) or RTD temperatures exceeding assigned limits
- Other indications of Main Generator stator abnormality

## Key Actions
- Initiate Attachment 1 CAS (Continuous Action Summary)
- Check Stator T/C and RTD temperatures on SPDS; evaluate against assigned temperature limits (e.g., the step 3.2 condition of 3 sequential stator T/Cs exceeding assigned temperature limits by < 10°F)
- Evaluate local Radio Frequency Monitor reading and trend
- If required to lower the RF Monitor < 50% or to mitigate elevated stator temperatures, direct a load reduction (using AB.LOAD-0001 or S2.OP-IO.ZZ-0004)
- Reference S2.OP-PT.GEN-0003, Main Generator Stator Temperatures, for diagnostic data

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Entered on <span class="hi-exam">Aux Annunciator Point 0901, GEN RADIO FREQ HIGH</span>. Crew checks Stator T/C and RTD temperatures on SPDS and identifies the step 3.2 condition: <span class="hi-exam">3 sequential stator T/Cs exceed assigned temperature limits by &lt; 10°F</span>. Local RF Monitor reads just above 50% and is slowly rising. CRS determines a <span class="hi-exam">load reduction is necessary to lower the Radio Frequency Monitor to &lt; 50%</span> and enters AB.LOAD-0001, Rapid Load Reduction. During the downpower a Main Power Transformer Phase 1 Sudden Pressure / Fire Protection deluge actuation occurs, leading the CRS to order a reactor trip with power &gt; P-9.
</div>

## Connections

- Related systems: [[Main Turbine]], [[Stator Cooling Water]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]], [[S2.OP-IO.ZZ-0004 — Power Operation]]
- Related scenarios: [[2015 Scenario 2 — MPT Fire / Inadvertent SI / SGTR]]
- Related exam: [[2015 NRC Operating Exam]]
