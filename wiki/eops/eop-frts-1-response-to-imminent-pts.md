---
title: "EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock"
category: eops
status: draft
aliases:
  - EOP-FRTS-1
  - 2-EOP-FRTS-1
  - FRTS-1
---

# EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock

## Purpose

Entered when the Thermal Shock Critical Safety Function Status Tree indicates an imminent Pressurized Thermal Shock (PTS) condition. Directs mitigating actions to reduce the likelihood of brittle fracture of the reactor vessel.

## Entry Conditions

RED path on the Thermal Shock CFST: RCS T-Cold cooldown rate exceeds 100 degrees F in the last 60 minutes AND RCS pressure/temperature points are not to the right of Limit A in Figure 4A.

## Key Mitigating Actions

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q32</div>
FRTS-1 bases: <span class="hi-exam">ECCS flow may have contributed to the RCS cooldown or may prevent a subsequent reduction in RCS pressure</span> — therefore SI termination is directed. <span class="hi-exam">An RCP restart is attempted to mix the cold incoming ECCS water and the warm reactor coolant water</span>, thereby decreasing the likelihood of a PTS condition. <span class="hi-trap">SI termination is NOT because a soak requires it — some SBLOCA conditions prevent SI termination. RCP restart is NOT for normal spray use or boron equalization — it is specifically for thermal mixing.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q85</div>
RED Path in Thermal Shock Status Tree: all RCS T-Cold cooldown rates not less than 100 degrees F in the last 60 minutes AND RCS pressure/temperature points not to the right of Limit A in Figure 4A (e.g., T-Colds < 230 degrees F at 1100 psig). This RED path takes priority over YELLOW path (Heat Sink) and PURPLE path (Shutdown Margin).
</div>

## Connections

- Related systems: [[ECCS]], [[RCS]], [[RCPs]]
- Related exam questions: [[2020 Q32]], [[2022 Q85]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
