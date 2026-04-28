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
<div class="callout-label">JPM — 2018 Sim-f</div>
22 CFCU surveillance: identical discriminating concept to 2019 and 2023. SW flow ~<span class="hi-exam">1786 gpm</span>, SW header DP <span class="hi-exam">106 psi</span>. Per P&L 3.4: 106 psi is between 105 and 110 → use next HIGHER value <span class="hi-exam">110 psi = 1811 gpm minimum</span>. Actual 1786 < 1811 → <span class="hi-exam">UNSAT, 22 CFCU inoperable</span>. Note: 22SW223 valve malfunction causes flow to settle at ~1786 gpm — chosen to trap applicants who use 105 psi (1769 gpm minimum), which would incorrectly pass.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU test result determination: with measured SW header DP of <span class="hi-exam">106 psi</span> (between 105 and 110 in Exhibit 1), per P&L 3.4 must use the next HIGHER DP value (<span class="hi-exam">110 psi = 1811 gpm minimum required</span>). Actual flow ~1785 gpm is less than 1811 gpm → <span class="hi-exam">test result is UNSAT / CFCU inoperable</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-f</div>
22 CFCU surveillance: shift CFCU from high speed to low speed via S2.OP-SO.CBV-0001 (HIGH SPEED STOP → wait <span class="hi-exam">25 seconds</span> → LOW SPEED START). Verify damper positions (ROUGH FLT DAMPER CLOSED, HEPA INLET/OUTLET OPEN). Verify SW flow >= <span class="hi-exam">1465 gpm</span>. After 15 minutes, record SW flow (~<span class="hi-exam">1787 gpm</span>) and SW header DP (<span class="hi-exam">106 psi</span>). Per P&L 3.4, measured DP of 106 psi rounds up to <span class="hi-exam">110 psid = 1811 gpm minimum required</span>. Actual flow 1787 gpm < 1811 gpm → <span class="hi-exam">test result UNSAT, 22 CFCU inoperable</span>. P&L 3.3: CFCU operable requires SW flow >= 1465 gpm AND >= minimum flow from Exhibit 1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q41</div>
CFCU SW flow and <span class="hi-exam">SW223 mechanical stop</span> limitations during surveillance testing.
</div>

## Connections

- Related systems: [[CFCUs]], [[Service Water]]
- Related tech specs: [[TS 3/4.6 — Containment]]
- Related exam questions: [[2022 Q41]]
- Related JPMs: [[2018 JPM Sim-f]], [[2019 JPM Sim-f]], [[2023 JPM Sim-f]]
- Related exam: [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]]
