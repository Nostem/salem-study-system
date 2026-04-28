---
title: "EOP-FRHS-2 — Response to Steam Generator Overpressure"
category: eops
status: draft
aliases:
  - EOP-FRHS-2
  - SG overpressure
---

# EOP-FRHS-2 — Response to Steam Generator Overpressure

## Purpose
Provides operator actions to respond to steam generator overpressure conditions. This is a Critical Safety Function Restoration Procedure (CSFRP) for Heat Sink — Orange path.

## Entry Conditions
- Entered from EOP-CFST-1 when Heat Sink CSF status tree indicates an overpressure condition on one or more steam generators

## Key Actions
- Verify affected SG isolation
- Check affected SG level
- Assess affected SG steam release
- Attempt to depressurize affected SG using available means (MS10 relief valves, BF&O bypass, etc.)
- If depressurization unsuccessful, transition to EOP-FRHS-3

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q85</div>
This question was security-redacted. It tested SRO knowledge of actions during a SG overpressure event in conjunction with security procedures (K/A W/E13 G2.4.28). Reference: 2-EOP-FRHS-2 (R41).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q26</div>
AFW should remain <span class="hi-exam">isolated to affected SG(s) until a steam release path is established</span>. AFW is a high pressure system which may cause further overpressure in a SG with no steam release path.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q72</div>
Step 5 — permitted steam release paths include <span class="hi-exam">13 AFW Pump</span> (turbine-driven AFW). If MS18 (MS Warmup) and MS10 (Atmospheric Relief Valves) cannot be opened, the 13 AFW Pump is a valid release path because the affected SG is a source of steam for the turbine-driven pump. Step 9 — if unable to release steam from the affected SG, maintain <span class="hi-exam">RCS T-HOTs less than 540 &deg;F</span> using the UNAFFECTED SGs. <span class="hi-trap">Trap: establishing cool AFW flow to the affected SG does NOT reduce SG pressure — it adds inventory. The 13 AFW Pump works as a release path because it consumes steam from the affected SG.</span>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[AFW]], [[Main Steam]]
- Related exam questions: [[2018 Q72]], [[2022 Q26]], [[2023 Q85]]
- Related exam: [[2018 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
