---
title: "S2.OP-SO.CVC-0006 — Boron Concentration Control"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CVC-0006
  - Boron Concentration Control
---

# S2.OP-SO.CVC-0006 — Boron Concentration Control

## Purpose

Provides direction for boration and dilution operations, including RWST makeup calculations using boric acid flow setpoints from REM figures and tank capacity curves.

## Key Actions / Information

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 RO-A1.b</div>
Section 5.8.3 — RWST Makeup: determine boric acid flowrate from S2.RE-RA.ZZ-0012 figures based on RWST and BAST boron concentrations, then calculate time to raise RWST level to TS minimum using tank capacity curves and total makeup flow (boric acid + primary water).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-b</div>
Section 5.2 — Manual Makeup Mode: with 900 ppm RCS boron and 6700 ppm BAST concentration, use <span class="hi-exam">Figure 100A</span> from S2.RE-RA.ZZ-0012 for 62 gpm PW flow — setpoint is <span class="hi-exam">~9.6 gpm (9-11 gpm acceptable)</span>. Figure 100C is wrong (9000 ppm boron). Figure 105 (temperature correction) is N/A at 100% power. Steps: press Makeup Mode Select STOP → place 2CV179 and 2CV172 in MANUAL/CLOSE → align blender outlet (2CV185 preferred) → start PW pump and BA pump MANUAL/FAST → set flows → when VCT at 53% secure all.
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]]
- Related JPMs: [[2023 JPM RO-A1.b]], [[2022 JPM Sim-b]]
- Related exam: [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]]
