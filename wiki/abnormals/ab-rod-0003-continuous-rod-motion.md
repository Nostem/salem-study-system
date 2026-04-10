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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-a</div>
During rod surveillance (S2.OP-ST.RCS-0001), after placing rod bank selector switch in AUTO at step 4.1.11.3, uncontrolled rod insertion occurs (rods insert in <span class="hi-exam">both AUTO and MANUAL</span>). Applicant must recognize rods continue inserting after placing switch in Manual and <span class="hi-exam">manually trip the reactor</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Event 3: <span class="hi-exam">24 Loop Cold Leg RTD fails high</span> causing continuous rod insertion. RO verifies no turbine runback in progress and places rods in Manual. CRS enters AB.ROD-0003. RO places MFC in Manual, reports various 2CC2 console alarms (RC Loop Tavg Deviation, Tavg-Tref Deviation, RC Tavg Hi or Lo-Lo, RC Loops DT Dev). CRS directs RO to adjust rods to maintain Tavg within <span class="hi-exam">1.5 deg of T program</span>, stop dilution, and return PZR level to program. RO defeats 24 loop RC DT and Average Temperature on 2CC2, selects alternate channel. After restoring rods and placing in Auto, CRS enters <span class="hi-exam">TS 3.3.1.1 Action 6</span> and <span class="hi-exam">TS 3.3.2.1.b Action 19</span> (place channel in tripped condition within 72 hours). CRS initiates S2.OP-SO.RPS-0002.
</div>

## Connections

- Related systems: [[RPS/SSPS]]
- Related procedures: [[S2.OP-ST.RCS-0001 — Rod Control Assemblies Surveillance]]
- Related JPMs: [[2023 JPM Sim-a]], [[2023 JPM Sim-g]], [[2022 JPM Sim-a]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]]
- Related exam: [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]]
