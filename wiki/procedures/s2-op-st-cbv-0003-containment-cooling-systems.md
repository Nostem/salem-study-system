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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q41</div>
CFCU SW flow and <span class="hi-exam">SW223 mechanical stop</span> limitations during surveillance testing.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-f</div>
25 CFCU monthly run surveillance. Start the CFCU in LOW SPEED (S2.OP-SO.CBV-0001), verify SW flow <span class="hi-exam">≥1465 gpm</span> (Step 5.1.3.E/F), record start time, and after at least 15 minutes record stop time, cooling water flow rate, and 22 SW header DP (Step 5.1.1.C). Reported 22 SW header DP = <span class="hi-exam">91 psid → rounded up to 95 psid</span> per P&L 3.4 to read the Exhibit 1 minimum CFCU flow. Result: SW flow ≥1465 gpm is <span class="hi-exam">SAT</span> while the cooling water flow rate is <span class="hi-exam">UNSAT</span> against the Exhibit 1 minimum at 95 psid.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A1-1</div>
21 CFCU surveillance review: P&L 3.4 rounding direction trap from the SRO review perspective. Recorded DP 87 psid is between Exhibit 1 increments — operator who performed the surveillance rounded DOWN to <span class="hi-exam">1592 gpm</span> minimum (incorrect). Correct application of <span class="hi-exam">P&L 3.4 rounds UP to the next HIGHER DP value, yielding 1638 gpm minimum required</span>. Actual SW flow 1625 gpm &lt; 1638 gpm → <span class="hi-exam">surveillance is UNSAT, 21 CFCU INOPERABLE</span>. Same Exhibit 1 / P&L 3.4 trap as 2018, 2019, and 2023 Sim-f, tested here as an SRO review of completed paperwork rather than the RO performance.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-f</div>
22 CFCU surveillance: identical discriminating concept to 2019 and 2023. SW flow ~<span class="hi-exam">1786 gpm</span>, SW header DP <span class="hi-exam">106 psi</span>. Per P&L 3.4: 106 psi is between 105 and 110 → use next HIGHER value <span class="hi-exam">110 psi = 1811 gpm minimum</span>. Actual 1786 < 1811 → <span class="hi-exam">UNSAT, 22 CFCU inoperable</span>. Note: 22SW223 valve malfunction causes flow to settle at ~1786 gpm — chosen to trap applicants who use 105 psi (1769 gpm minimum), which would incorrectly pass.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-f</div>
22 CFCU surveillance: shift CFCU from high speed to low speed via S2.OP-SO.CBV-0001 (HIGH SPEED STOP → wait <span class="hi-exam">25 seconds</span> → LOW SPEED START). Verify damper positions (ROUGH FLT DAMPER CLOSED, HEPA INLET/OUTLET OPEN). Verify SW flow >= <span class="hi-exam">1465 gpm</span>. After 15 minutes, record SW flow (~<span class="hi-exam">1787 gpm</span>) and SW header DP (<span class="hi-exam">106 psi</span>). Per P&L 3.4, measured DP of 106 psi rounds up to <span class="hi-exam">110 psid = 1811 gpm minimum required</span>. Actual flow 1787 gpm < 1811 gpm → <span class="hi-exam">test result UNSAT, 22 CFCU inoperable</span>. P&L 3.3: CFCU operable requires SW flow >= 1465 gpm AND >= minimum flow from Exhibit 1.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU test result determination: with measured SW header DP of <span class="hi-exam">106 psi</span> (between 105 and 110 in Exhibit 1), per P&L 3.4 must use the next HIGHER DP value (<span class="hi-exam">110 psi = 1811 gpm minimum required</span>). Actual flow ~1785 gpm is less than 1811 gpm → <span class="hi-exam">test result is UNSAT / CFCU inoperable</span>.
</div>

## Connections

- Related systems: [[CFCUs]], [[Service Water]]
- Related tech specs: [[TS 3.6 — Containment]]
- Related exam questions: [[2022 Q41]]
- Related JPMs: [[2016 JPM SRO-A1-1]], [[2018 JPM Sim-f]], [[2019 JPM Sim-f]], [[2023 JPM Sim-f]], [[2014 JPM Sim-f]], [[2012 JPM SRO-A1-1]]
- Related exam: [[2016 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Operating Exam]]
