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
<div class="callout-label">JPM — 2018 Sim-b</div>
Section 5.2 — Manual Makeup Mode: entered AB.CVC-0001 due to 2LT112 failing high. With 900 ppm RCS boron and 6700 ppm BAST concentration, use <span class="hi-exam">Figure 100A</span> from S2.RE-RA.ZZ-0012 for 62 gpm PW flow — setpoint is <span class="hi-exam">~9.6 gpm (9-11 gpm acceptable)</span>. <span class="hi-trap">Figure 100C (9000 ppm boron) and Figure 105 (temperature correction, N/A at 100% power) are WRONG choices.</span> Note: <span class="hi-exam">2CV179 will initially go full open when placed in MANUAL</span> — close immediately. Adjust PW flow on FI111A to <span class="hi-exam">62 gpm (60-64 gpm acceptable)</span>. When VCT at 53%, secure and return BA pump to SLOW speed.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-b</div>
Section 5.2 — Manual Makeup Mode: with 900 ppm RCS boron and 6700 ppm BAST concentration, use <span class="hi-exam">Figure 100A</span> from S2.RE-RA.ZZ-0012 for 62 gpm PW flow — setpoint is <span class="hi-exam">~9.6 gpm (9-11 gpm acceptable)</span>. Figure 100C is wrong (9000 ppm boron). Figure 105 (temperature correction) is N/A at 100% power. Steps: press Makeup Mode Select STOP → place 2CV179 and 2CV172 in MANUAL/CLOSE → align blender outlet (2CV185 preferred) → start PW pump and BA pump MANUAL/FAST → set flows → when VCT at 53% secure all.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-b</div>
Section 5.2 — Manual Makeup Mode, reached from AB.CVC-0001 after 2LT-112 fails high. Determine the Boric Acid Flow Setpoint from <span class="hi-exam">Figure 100A</span> (900 ppm RCS / 6700 ppm BAST, 62 gpm PW flow → slightly less than 10 gpm; 9-11 gpm allowable). Critical sequence: 5.2.3 press Makeup Control Mode Select <span class="hi-exam">STOP</span> → 5.2.4 place 2CV179 (PW) in MANUAL and CLOSE → 5.2.5 place 2CV172 (BA) in MANUAL and CLOSE → 5.2.6 open a makeup flowpath (2CV185 charging-pump-suction preferred, or 2CV181) → 5.2.7 start a Primary Water Pump and a Boric Acid Pump MANUAL/FAST → 5.2.8 set BA flow on FI110A → 5.2.10 set PW flow on FI111A to <span class="hi-exam">62 gpm +/- 2</span>. When makeup complete, 5.2.12 closes 2CV179/2CV172/2CV185/2CV181, stops the PW pump, and returns the BA pump to SLOW.
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]]
- Related JPMs: [[2018 JPM Sim-b]], [[2023 JPM RO-A1.b]], [[2022 JPM Sim-b]], [[2015 JPM Sim-b]]
- Related exam: [[2018 NRC Operating Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]]
