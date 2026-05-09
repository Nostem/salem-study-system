---
title: "EOP-FRHS-3 — Response to Steam Generator High Level"
category: eops
status: draft
aliases:
  - EOP-FRHS-3
  - FRHS-3
  - response to sg high level
---

# EOP-FRHS-3 — Response to Steam Generator High Level

## Purpose

Functional Restoration Procedure (Yellow Path) for responding to Steam Generator High Level conditions. Entered at the CRS's discretion based on Heat Sink CSF Yellow path indication. Includes a check for SGTR which, if present, kicks the procedure back to the SGTR series in effect.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q79</div>
FRHS-3 is a <span class="hi-exam">Yellow Path FRP</span> — entry is at CRS discretion. <span class="hi-exam">Step 10.7 checks for SGTR</span>; if SGTR is present, the procedure returns to the SGTR series in effect (e.g., SGTR-1). FRHS-3 establishes <span class="hi-exam">SGBD to lower affected SG level</span>, but only after the SGTR check. <span class="hi-trap">FRHS-3 does NOT take action to minimize spread of secondary contamination — that is addressed in the SGTR series.</span> <span class="hi-trap">FRHS-3 only sets affected SG MS10 to <span class="hi-exam">1045 psig</span> (not manual shut), and that setpoint would already have been established during AB.SG-0001 or EOP-SGTR-1.</span> When a ruptured SG goes water solid before SI termination during SGTR-1, the correct action is to <span class="hi-exam">continue in SGTR-1, terminate SI, and establish normal charging/letdown</span> — NOT enter FRHS-3.
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[Main Steam]], [[Steam Dumps]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRHS-2 — Response to Steam Generator Overpressure]]
- Related abnormals: [[AB.SG-0001 — Steam Generator Tube Leak]]
- Related exam questions: [[2016 Q79]]
- Related exam: [[2016 NRC Written Exam]]
