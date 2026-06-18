---
title: "S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing"
category: procedures
status: draft
aliases:
  - S2.OP-PT.TRB-0003
---

# S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing

## Purpose

Provides direction for performing periodic stroke testing of main turbine valves, including governor valves (MS28), stop valves (MS29), reheat stop valves, and intercept valves.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q64</div>
P&L step 3.12.3: If any HP turbine inlet valve (Governor MS28 or Stop MS29) closes and does not reopen, <span class="hi-exam">reduce turbine load to 75% within one hour</span>. P&L step 3.12.6: If a Reheat Stop Valve or Intercept Valve closes, <span class="hi-exam">do not operate above 80% load; do not exceed 5 minutes with any valve closed before beginning to reduce load at 10%/hr</span>. Continue load reduction until either the valve is open or less than 80% load is achieved. <span class="hi-trap">Governor/Stop valves have different requirements (75% in 1 hour) than Reheat/Intercept valves (80%, begin reducing at 10%/hr within 5 minutes).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-d</div>
Section 5.3 Reheat / Intercept valve stroke testing (East LP pairs RS5/RS6) at 89% power. Valve positions must be verified <span class="hi-exam">LOCALLY</span> — using EHC console indication alone fails the test (FSAR 10.2.2.6 periodicity). At the TURBINE E-H CONTROL &amp; STATUS monitor, EAST LP VALVE TESTS screen, confirm TEST PERMISSIVE NO OTHER TESTS IN PROGRESS green, direct a local operator to monitor, SELECT START TEST, and record positions at TEST POSITION 1/2/3. <span class="hi-exam">Alternate path: 22RS5 (East Reheat Stop) fails to reopen</span> after the close (22RS6 reopens). CAUTION / P&amp;L: when a Reheat Stop Valve or Intercept Valve fails to reopen within <span class="hi-exam">5 minutes while above 80% load, reduce Turbine-Generator load to less than 80% at 10%/hr</span> — the operator must initiate the 10%/hr load reduction within 5 minutes of 22RS5 going shut. Step 5.2.3 directs troubleshooting of the failed valve.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-e</div>
Section 5.4.3 Retest on 22MS28 Main Turbine Stop Valve at 89% power. Navigate DEHC HMI to Test Screen (TEST → STOP/GOV TEST). Verify test permissives GREEN: TURBINE INLET PRESSURE OK, NO OTHER TESTS IN PROGRESS. P&L 3.4.3: operate at <span class="hi-exam"><=75% turbine load with any one HP inlet valve closed</span>. Record initial positions, SELECT START TEST on HMI. <span class="hi-exam">Field operator misses monitoring 22MS28 stroke</span> (alternate path) — must SELECT <span class="hi-exam">RESTROKE</span> on HMI to re-verify valve operation. After successful restroke, SELECT END TEST. Record final positions when TEST IN PROGRESS changes to NORMAL OPERATION. OHA G-12 TURB STM STOP VLV CLSD expected during test.
</div>

## Connections

- Related systems: [[Main Turbine]]
- Related exam questions: [[2022 Q64]]
- Related JPMs: [[2019 JPM Sim-e]], [[2015 JPM Sim-d]]
- Related exam: [[2019 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2015 NRC Operating Exam]]
