---
title: "AB.ROD-0003 — Continuous Rod Motion"
category: abnormals
status: draft
aliases:
  - AB.ROD-0003
  - S2.OP-AB.ROD-0003
  - continuous rod motion
---

# AB.ROD-0003 — Continuous Rod Motion

## Purpose

Provides operator actions for responding to uncontrolled or continuous rod motion, including rod control system failures, failed Tavg channels, and failed NIS channels.

## Key Actions / Information

- Step 3.1: Place rod bank selector switch in Manual
- Step 3.2: Verify rod motion stops (if not, trip the reactor)
- Step 3.5: Adjust rods in manual to control Tavg within 1.5F of Tprogram
- Step 3.9: Determine if a Tavg channel failed high or low
- Step 3.10: Return PZR level to program (take Master Flow Controller to manual)
- Steps 3.11-3.12: Defeat deviation alarms and select valid recorder channels

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-g</div>
Failed high Tavg channel response: recognize unwarranted rod insertion (rods stepping in with no runback), take rods to manual. Restore Tavg within <span class="hi-exam">1.5F of Tprogram</span> by withdrawing rods. Stabilize PZR level by placing Master Flow Controller in manual. Defeat <span class="hi-exam">BOTH Differential Temperature AND Average Temperature</span> deviation alarms on 2CC2 for the affected loop, then select a valid recorder channel (Channel 2, 3, or 4) for both parameters.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-a</div>
During rod surveillance (S2.OP-ST.RCS-0001), after returning the rod bank selector switch to AUTO, if unexpected <span class="hi-exam">continuous rod insertion</span> occurs with no runback in progress — place switch in Manual. If rod motion does NOT stop, <span class="hi-exam">manually trip the reactor</span>.
</div>

## Connections

- Related systems: [[Instrumentation and Controls]]
- Related procedures: [[S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance]]
- Related JPMs: [[2023 JPM Sim-a]], [[2023 JPM Sim-g]]
- Related exam: [[2023 NRC Operating Exam]]
