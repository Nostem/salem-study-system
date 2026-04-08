---
title: Adverse Containment
category: concepts
status: draft
aliases:
  - adverse containment
  - adverse containment conditions
---

# Adverse Containment

## Definition
Adverse containment conditions exist when containment pressure is elevated above normal, typically >= 4 psig. This affects multiple EOP setpoints and action criteria because elevated containment pressure degrades instrument accuracy and changes thermal-hydraulic behavior.

## Impact on EOP Parameters
When adverse containment conditions exist, EOP setpoints for level instruments are adjusted upward to account for the effect of containment pressure on instrument readings:

| Parameter | Normal Containment | Adverse Containment |
|---|---|---|
| SG NR level for RCP start (EOP-FRCC-1) | >= 9% | >= 15% |

## Why It Matters
- SG narrow range level transmitters are affected by containment pressure because the reference leg is inside containment
- Higher containment pressure depresses the indicated level reading
- EOPs use higher setpoint values under adverse containment to ensure actual conditions support the intended action

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q84</div>
With containment pressure at <span class="hi-exam">5 psig</span> (adverse conditions), the required SG NR level for RCP start in EOP-FRCC-1 is <span class="hi-exam">>= 15%</span> instead of the normal 9%. <span class="hi-trap">Trap: using normal containment criteria when adverse conditions exist will overestimate the number of available RCPs.</span>
</div>

## Connections

- Related systems: [[Containment Systems]]
- Related procedures: [[EOP-FRCC-1 — Response to Inadequate Core Cooling]]
- Related exam questions: [[2023 Q84]]
- Related exam: [[2023 NRC Written Exam]]
