---
title: "SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation"
category: procedures
status: draft
aliases:
  - SC.RE-ST.ZZ-0002
  - Shutdown Margin Calculation
  - SDM calculation
---

# SC.RE-ST.ZZ-0002 — Shutdown Margin Calculation

## Purpose

Surveillance procedure for calculating Shutdown Margin (SDM) to satisfy TS 3/4.1.3 requirements. Used whenever control rod position or operability changes require verification of adequate shutdown margin.

## Key Calculation Steps

| Step | Parameter | Notes |
|------|-----------|-------|
| 4.1.3 | Control Bank D position | Demand counter reading in steps |
| 4.1.5 | # of Untrippable RCCA(s) | Used when rods declared UNTRIPPABLE |
| 4.1.6 | # of Dropped or Misaligned RCCA(s) | Used when rods are dropped/misaligned — NOT for untrippable rods |
| 4.2.4 | Penalty for Untrippable RCCA(s) | pcm penalty for untrippable rods |
| 4.2.5 | Penalty for Dropped or Misaligned RCCA(s) | pcm penalty for dropped/misaligned rods |
| 4.2.6 | Integral Rod Worth at position | From Curve Book Table 1-7 |
| 4.2.7 | Choose rod worth calculation | "Trippable Rod Worth" vs. "Trippable Rod Worth with Untrippable RCCA(s)" |
| 4.3.1 | Trippable Rod Worth | Carried forward from 4.2.7 |
| 4.3.5 | SDM result | Final calculated shutdown margin (pcm) |
| 4.4.1 | SDM SAT/UNSAT determination | SAT if SDM more negative than -1300 pcm |
| 4.4.2.A | Power defect for required SDM | Only if SDM is UNSAT |
| 4.4.2.B | Required reactor power level | From Figure 17A / Table 2-1, using power defect and boron concentration |

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A1</div>
SRO review of completed SDM calculation with <span class="hi-exam">two untrippable rods (1D4 and 1D2)</span>. The RO's calculation contained cascading errors from treating rods as dropped/misaligned instead of untrippable: used step <span class="hi-exam">4.1.6 instead of 4.1.5</span>, step <span class="hi-exam">4.2.5 instead of 4.2.4 (penalty = 4330 pcm)</span>, and the wrong rod worth formula in step <span class="hi-exam">4.2.7 ("Trippable Rod Worth with Untrippable RCCA(s)" = -2327.8 pcm)</span>. Correct SDM = <span class="hi-exam">-269.5 pcm (UNSAT)</span>, requiring power reduction to approximately <span class="hi-exam">19% RTP</span>.
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related JPMs: [[2020 JPM SRO-A1]]
- Related exam: [[2020 NRC Operating Exam]]
