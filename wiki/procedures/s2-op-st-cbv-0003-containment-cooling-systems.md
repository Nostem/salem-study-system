---
title: "S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance"
category: procedures
status: draft
aliases:
  - S2.OP-ST.CBV-0003
  - CFCU surveillance
---

# S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance

## Purpose

Performs periodic surveillance testing of Containment Fan Coil Units to verify SW cooling water flow meets minimum requirements for CFCU operability.

## Key Actions / Information

- P&L 3.3: CFCU SW flow rate must be >= 1465 gpm AND >= Minimum Flow Rate from Exhibit 1 to be Operable
- P&L 3.4: If measured DP is between DP values in Exhibit 1, select minimum flow for the next HIGHER DP value
- Step 5.1.2.C: Wait 25 seconds after HIGH SPEED STOP before starting LOW SPEED
- After 15 minutes, record SW flow, SW header DP, and determine test results

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU test result determination: with measured SW header DP of <span class="hi-exam">106 psi</span> (between 105 and 110 in Exhibit 1), per P&L 3.4 must use the next HIGHER DP value (<span class="hi-exam">110 psi = 1811 gpm minimum required</span>). Actual flow ~1785 gpm is less than 1811 gpm → <span class="hi-exam">test result is UNSAT / CFCU inoperable</span>.
</div>

## Connections

- Related systems: [[CFCUs]], [[Service Water]]
- Related tech specs: [[TS 3/4.6 — Containment]]
- Related JPMs: [[2023 JPM Sim-f]]
- Related exam: [[2023 NRC Operating Exam]]
