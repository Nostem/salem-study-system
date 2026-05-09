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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-c</div>
Same rod surveillance. Step 5.1.10.B-G: place Bank Selector in CBD, insert <span class="hi-exam">15 steps</span>, verify all rods moved at least 10 steps on P-250, record SAT, restore to ARO. At Step 5.1.11.C, place switch in AUTO (Turbine Power >15%). Uncontrolled rod insertion activates (MALF RD0045). Rods insert in <span class="hi-exam">both AUTO and MANUAL</span>. Operator <span class="hi-exam">manually trips the reactor</span>. Same discriminating step tested across 2020, 2022, and 2023 exams.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-a</div>
Rev. 22 (Section 5.1) Shutdown Bank operability verification — different alternate path from the Control Bank D variant. CRS directs Steps 5.1.2 through 5.1.9 in order, with 15 steps of rod insertion for each bank to ensure each rod moves at least 10 steps. For Shutdown Bank A (Step 5.1.3): verify Tavg ±1°F of Tref, place Bank Selector in <span class="hi-exam">SBA</span>, verify GRP. SELECT "C" lights at Power Cabinets <span class="hi-exam">21AC and 22AC</span>, insert at least 10 steps, verify on P-250, restore to ARO. For Shutdown Bank B (Step 5.1.4): same flow, SBB position, Power Cabinets <span class="hi-exam">21BD and 22BD</span>. <span class="hi-exam">Alternate path: with SBB inserted, 21 SGFP trips. P&L 3.13 governs — operator must manually trip the reactor</span>; placing the Rod Bank Selector to MAN or AUTO in this configuration is failure criteria.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Control Rod Drive]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]], [[OP-AP-300-1001 — PWR Control Rod Movement Requirements]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related JPMs: [[2023 JPM Sim-a]], [[2022 JPM Sim-a]], [[2020 JPM Sim-c]], [[2016 JPM Sim-a]]
- Related exam: [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2016 NRC Operating Exam]]
