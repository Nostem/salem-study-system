---
title: "S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance"
category: procedures
status: draft
aliases:
  - S2.OP-ST.RCS-0001
  - rod control surveillance
  - rod surveillance
---

# S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance

## Purpose

Performs quarterly surveillance test of control rod assemblies to verify each rod moves at least 10 steps, verifying rod control system operability per TS 3/4.1.3.

## Key Actions / Information

- Step 4.1.10.1: Ensure Tavg within +/-1F of Tref before beginning
- Step 4.1.10.2: Place Bank Selector Switch in CBD position
- Step 4.1.10.6: Maneuver Control Bank D at least 10 steps in one direction (typically insert 15 steps)
- Step 4.1.10.8: Record test results using Acceptance Criteria in Attachment 1
- Step 4.1.10.9: Restore Control Bank D to pre-test position (ARO)
- Step 4.1.11.3: Place Bank Selector Switch in AUTO and verify normal rod control

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-a</div>
After completing the surveillance and placing the rod bank selector switch in AUTO, an <span class="hi-exam">uncontrolled rod insertion malfunction</span> activates. Rods step in with no runback. Place switch in Manual — if rod motion does NOT stop, <span class="hi-exam">manually trip the reactor</span>. Verify turbine power >15% before returning to AUTO.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-a</div>
Same rod surveillance procedure. At step 4.1.11.3, uncontrolled rod insertion in <span class="hi-exam">both AUTO and MANUAL</span> (MALF RD0045). After placing switch in Manual and rods NOT stopping, <span class="hi-exam">manually trip the reactor</span>. Operator may reference AB.ROD-0003 for Rx trip direction.
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related JPMs: [[2023 JPM Sim-a]], [[2022 JPM Sim-a]]
- Related exam: [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]]
