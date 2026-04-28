---
title: "S2.OP-ST.NIS-0001 — Power Distribution AFD Surveillance"
category: procedures
status: draft
aliases:
  - S2.OP-ST.NIS-0001
  - AFD surveillance
  - axial flux difference surveillance
---

# S2.OP-ST.NIS-0001 — Power Distribution AFD Surveillance

> DRAFT — Reconstructed from exam materials

## Purpose

Surveillance procedure for monitoring Axial Flux Difference (AFD) on Salem Unit 2 per TS 3.2.1 requirements. Covers both the 7-day AFD surveillance (Section 4.1) and the manual AFD calculation when the AFD Monitor alarm is inoperable (Section 5.3).

## Key Actions / Information

**Section 5.3 — Manual AFD Calculation (when AFD Monitor is inoperable):**

Per Section 5.3 and Attachment 3 (AFD Data Log Sheet):
- Step 5.3.1.A: ENTER present Reactor Power
- Step 5.3.1.B: ENTER AFD Target from REM Table 3
- Step 5.3.1.C: CALCULATE AFD Target for present power level = (Present Power / 100) x AFD Target; round to first decimal place per P&L 3.2
- Step 5.3.1.D: DETERMINE Upper and Lower Limits by adding the AFD Target value to the Target Band limits from REM Table 3 (NOTE: use the more restrictive of COLR or REM limits)
- Step 5.3.1.E: ENTER AFD Channel Readings (Channels I-IV)
- Step 5.3.1.F: DETERMINE if channels are within the Target Band and notify CRS of results

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 RO-A2</div>
Seven Day AFD surveillance (Section 4.1) at 73% power: AFD Target = -2.0, Target Offset = +0.5, Corrected AFD Target = -1.5. Upper Limit = +6.0 + (-1.5) = +4.5. Lower Limit = -10.0 + (-1.5) = -11.5. Channel III reading of -10.6 found <span class="hi-exam">outside the AFD lower limit — surveillance UNSAT</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 RO-A1</div>
Manual AFD calculation (Section 5.3) at 73% power with AFD Monitor alarm inoperable: AFD Target from REM Table 3 = -1.5. Calculated AFD Target = (73/100) x (-1.5) = <span class="hi-exam">-1.095, rounded to -1.1</span> per P&L 3.2. Upper Limit = +6.0 + (-1.1) = <span class="hi-exam">+4.9</span>. Lower Limit = -9.0 + (-1.1) = <span class="hi-exam">-10.1</span>. Channels III (-10.3) and IV (-10.5) are <span class="hi-exam">outside the AFD Lower Limit of -10.1</span>. With two channels outside the target band, TS action is required.
</div>

## Connections

- Related systems: [[Excore NIs]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]], [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related JPMs: [[2023 JPM RO-A2]], [[2018 JPM RO-A1]]
- Related exam: [[2023 NRC Operating Exam]], [[2018 NRC Operating Exam]]
