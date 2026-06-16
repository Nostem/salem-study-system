---
title: "AB.ROD-0001 — Immovable/Misaligned Control Rods"
category: abnormals
status: draft
aliases:
  - AB.ROD-0001
  - S1.OP-AB.ROD-0001
  - S2.OP-AB.ROD-0001
---

# AB.ROD-0001 — Immovable/Misaligned Control Rods

## Purpose

Provides guidance for responding to immovable or misaligned control rods, including rod deviation alarms, diagnosis, load reduction requirements, and recovery procedures.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q20</div>
Misaligned rod recovery procedure: <span class="hi-exam">Lift Coil Disconnect Switches for all rods in the affected bank are placed in OFF (disconnected)</span>, EXCEPT for the misaligned rod which remains ON (connected). The Rod Bank Selector Switch is placed to the position matching the affected bank — for a control rod in D bank, use <span class="hi-exam">CBD (Control Bank D)</span>, not SBD (Shutdown Bank D).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q20</div>
AB.ROD-0001 directs <span class="hi-exam">placing the unit in Hot Standby if more than one rod is stuck/misaligned</span>. <span class="hi-trap">If only ONE rod is misaligned, the action is to reduce power to < 75% RTP (per TS 3.1.3.1 action c.3.d)</span> — do not confuse with the > 1 rod action. Also note: AB.ROD-0001 directs reviewing QPTR. If QPTR TS limits exceeded, <span class="hi-trap">TS 3.2.4 requires reducing power to < 50% if QPTR is not returned to within limits after 24 hours</span> — this is a separate QPTR-based action, not the rod misalignment action.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q1</div>
At step 3.37, AB.ROD-0001 directs <span class="hi-exam">placing the unit in Hot Standby when more than one rod is immovable/misaligned</span>. This derives from <span class="hi-exam">TS 3.1.3.1 action b</span> (with more than one rod inoperable/misaligned by more than 18 steps and &lt;85% power, be in Hot Standby within 6 hours). <span class="hi-trap">The "reduce power to &lt;75%" action applies to a SINGLE inoperable rod, not to more than one.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
During a downpower (vacuum problem), a single Control Bank D rod (rod 202) <span class="hi-exam">fails to insert</span> as expected. When verified not moving, CRS enters AB.ROD-0001; RO places the Rod Bank Selector Switch in <span class="hi-exam">manual</span> and continues the downpower using <span class="hi-exam">boration only</span> (raise boration rate / lower turbine load-reduction rate to hold Tavg within ±1.5°F of program). Rx Engineering confirms the misalignment via BEACON; CRS enters <span class="hi-exam">LCO 3.1.3.1</span> for one misaligned rod, and if power had been stopped &gt;75% RTP, reduces power to &lt;75% RTP per TS 3.1.3.1 Action c.3.d.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q77</div>
A dropped rod that is NOT fully inserted (indicating >10 steps withdrawn on both IRPI and Plant Computer) is recovered under AB.ROD-0001, not AB.ROD-0002. AB.ROD-0002 step 3.23 directs <span class="hi-exam">GO TO AB.ROD-0001</span> in this case because the <span class="hi-exam">Group Step Counter manipulations for maintaining proper rod group stepping logic are significantly different</span> for a partially inserted vs a fully inserted rod.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Control Rod Drive]], [[Stator Cooling Water]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]], [[AB.ROD-0002 — Dropped Rod]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]], [[TS 3/4.2 — Power Distribution]]
- Related exam questions: [[2014 Q1]], [[2020 Q20]], [[2022 Q20]], [[2014 Q77]]
- Related scenarios: [[2015 Scenario 3]]
- Related exam: [[2014 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2015 NRC Operating Exam]]
