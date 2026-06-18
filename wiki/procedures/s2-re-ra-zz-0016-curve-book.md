---
title: "S2-RE-RA.ZZ-0016 — Curve Book (Salem Unit 2 Cycle 23)"
category: procedures
status: draft
aliases:
  - S2-RE-RA.ZZ-0016
  - curve book
---

# S2-RE-RA.ZZ-0016 — Curve Book (Salem Unit 2 Cycle 23)

## Purpose

Contains the reactor engineering curves and tables for Salem Unit 2 Cycle 23, including power defect curves (Figure 17A / Table 2-1), integral rod worth curves (Figure 2C), and other core physics reference data used for reactivity management.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q9</div>
The curve book is the reactivity-management reference for boron worth as a function of core life. <span class="hi-exam">Differential boron worth rises over core life</span>, so a rapid boration inserts more negative reactivity at EOL than at BOL — the basis for the boration effectiveness during an ATWS evaluated in 2015 Q9.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q94</div>
Curve Book Table 1-8 (rod worth): 77 steps = 1079.4 pcm, 122 steps = 877.0 pcm. A predicted-critical-rod-height vs ECC <span class="hi-exam">difference &lt;300 pcm at the eightfold position requires no action — the startup continues</span>. See [[Control Rod Drive]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q41</div>
For a power reduction from 100% to 80% at 8000 EFPH and 900 ppm boron, the power defect adds <span class="hi-exam">(+) 396 pcm</span> of reactivity to the core (IAW Figure 17A or Table 2-1). Using <span class="hi-exam">Figure 2C (Integral Rod Worth)</span>, the remaining reactivity offset not compensated by boration is absorbed by Control Bank D rod insertion. Example: (-) 216 pcm compensated by boration, leaving (-) 180 pcm for Control Bank D to absorb by inserting from <span class="hi-exam">228 steps to approximately 186 steps</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 RO-A1.b</div>
<span class="hi-exam">Figure 20A (Table A, page 111)</span> of the Unit 2 Curve Book gives the All-Rods-In Cold Shutdown boron concentration vs. Core Burnup. For TRIP-4 Step 4 at 5000 EFPH, the <span class="hi-exam">K<sub>eff</sub>=0.95</span> line reads 1914 ppm (1900-1920 graph band); adding the +50 ppm conservatism gives the required CSD concentration of 1964 ppm. <span class="hi-trap">The K<sub>eff</sub>=0.99 line on the same figure is the trap (≈1452 ppm).</span>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[AMSAC]]
- Related EOPs: [[EOP-TRIP-4 — Natural Circulation]]
- Related exam questions: [[2015 Q9]], [[2018 Q41]], [[2015 Q94]]
- Related JPMs: [[2015 JPM RO-A1-2]]
- Related exam: [[2015 NRC Written Exam]], [[2018 NRC Written Exam]], [[2015 NRC Operating Exam]]
