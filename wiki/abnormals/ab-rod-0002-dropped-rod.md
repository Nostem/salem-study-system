---
title: "AB.ROD-0002 — Dropped Rod"
category: abnormals
status: draft
aliases:
  - AB.ROD-0002
  - S1.OP-AB.ROD-0002
  - S2.OP-AB.ROD-0002
---

# AB.ROD-0002 — Dropped Rod

## Purpose

Provides guidance for responding to a dropped control rod, including diagnosis via NIS indications, withdrawal rate restrictions based on time elapsed, and rod recovery authorization requirements.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q19</div>
The Power Range NIS channel nearest a dropped rod will indicate <span class="hi-exam">lower</span> compared to other PR channels (local flux depression). Per step 3.36, if <span class="hi-exam">less than 4 hours</span> have elapsed since first indication of a dropped rod, no withdrawal rate, power level, or ramp rate restrictions apply during rod recovery.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A3</div>
Following dropped rod 2D4 from Control Bank Delta at 100% power: OHAs <span class="hi-exam">E-46 (LOWER SECT DEV ABV 50% PWR)</span> and <span class="hi-exam">E-38 (UPPER SECT DEV ABV 50% PWR)</span> annunciate. Must reduce power to 74% per TSAS 3.1.3.1.c.3.d. Manual QPTR surveillance (S2.OP-ST.NIS-0002) required — dropped rod causes asymmetric flux in the affected quadrant, resulting in <span class="hi-exam">QPTR exceeding 1.02</span> (TS LCO 3.2.4 NOT met).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q19</div>
Before withdrawing a dropped rod, AB.ROD-0002 directs <span class="hi-exam">resetting the group step counter to zero</span> so the step counter matches actual rod position and the rod is withdrawn to the proper height. For Control Bank D Group 1 rods, the <span class="hi-exam">P/A converter is also reset to zero</span> (performed locally at the RPI-2 cabinet) to ensure bank overlap is maintained. <span class="hi-trap">The group step counter does NOT input into the P/A converter — P/A converter input is from the Group 1 Data Logging card.</span> After P/A converter reset, <span class="hi-trap">OHAs E-8 RIL LO and E-16 RIL LO-LO WILL annunciate</span> (expected). OHA E-40 ROD BANK URGENT FAILURE will also annunciate following rod withdrawal due to Power Cabinet Regulation failure with lift coil disconnect switches in OFF.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Excore NIs]], [[Control Rod Drive]]
- Related procedures: [[AB.ROD-0001 — Immovable/Misaligned Control Rods]], [[AB.ROD-0003 — Continuous Rod Motion]], [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related exam questions: [[2020 Q19]], [[2022 Q19]]
- Related JPMs: [[2022 JPM RO-A3]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
