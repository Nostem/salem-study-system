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
<div class="callout-label">Exam — 2016 Q17</div>
On a 21 SGFP trip at 100% MOL with no Rx trip, RC LOOPS TAVG-TREF DEVIATION (Console Alarm) is an EXPECTED alarm — <span class="hi-exam">rods drive in due to the turbine runback to 65%</span> producing the deviation. The Tavg-Tref ARP directs operators to <span class="hi-exam">place rods in manual</span>, and if not successful at restoring conditions, <span class="hi-exam">go to AB.ROD-01</span>. AB.ROD-0001 is therefore the procedure that addresses Tavg-Tref deviation if manual rod control does not restore conditions, but the alarm itself is expected for this transient.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Control Rod Drive]], [[Stator Cooling Water]]
- Related procedures: [[AB.ROD-0003 — Continuous Rod Motion]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]], [[TS 3/4.2 — Power Distribution]]
- Related exam questions: [[2016 Q17]], [[2020 Q20]], [[2022 Q20]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
