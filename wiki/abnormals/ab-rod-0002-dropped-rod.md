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

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #3</div>
Two dropped control rods at ~89% power during load reduction (Event 5). Reactor trip demand present but auto trip fails — <span class="hi-exam">ATWT</span>. Manual Rx trip handles also fail. Rod speed controller fails at <span class="hi-exam">8 spm in Auto</span>. Crew recognizes and <span class="hi-exam">inserts rods in Manual at 48 spm</span>. This event leads directly into EOP-FRSM-1 for ATWS response.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q30</div>
Dropped rod recovery per AB.ROD-0002: with ROD BANK SELECTOR SWITCH in CBA (Control Bank A), the dropped rod will be withdrawn at <span class="hi-exam">48 steps per minute</span> in small increments per reactor Engineering guidance. <span class="hi-trap">Trap: 72 SPM is AUTO maximum speed, 64 SPM is Shutdown Bank speed (SBA/SBB/SBC/SBD), 8 SPM is AUTO minimum speed. Control Bank positions (CBA/CBB/CBC/CBD) = 48 SPM.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
<span class="hi-exam">Shutdown Bank rod 1S A3 drops fully into the core</span> during a low-power startup (1x10<sup>-8</sup> Amps, Control Bank D at 130 steps). Cue: OHA <span class="hi-exam">E-48 ROD BOTTOM</span> with rod-bottom light illuminated for SB rod 1S A3. Crew enters AB.ROD-0002, confirms rods in manual and Main Turbine S/D. RO reports the <span class="hi-exam">reactor is subcritical</span> as a result of the dropped rod. CRS directs RO to insert all control and shutdown bank rods; RO initiates rod insertion in manual.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q76</div>
With the Rx exactly critical during low-power physics testing, a dropped Shutdown Bank A rod is handled by <span class="hi-exam">directing the RO to fully insert all Control Bank and Shutdown Bank rods</span> — a dropped-rod recovery would constitute an approach to criticality and is only performed IAW the startup procedure. See [[Control Rod Drive]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-a</div>
Step 2.1: <span class="hi-exam">IF more than one rod is verified tripped, THEN manually TRIP the reactor AND GO TO 2-EOP-TRIP-1</span>. Step 3.1 (critical): <span class="hi-exam">PLACE Rod Bank Selector Switch in MAN</span> — Note warns auto outward rod movement occurs at T+1:30 if rods are not placed in manual. The procedure then maintains Tave within 1.5° of program (step 3.3), checks for subcriticality (3.4) and power &gt;50% RTP (3.10), rules out an IRPI malfunction (3.12/3.13), and initiates a power reduction to &lt;75% RTP (3.15) with Reactor Engineering recovery (3.16). In the alternate-path JPM a second rod drops after step 3.10, requiring the step 2.1 manual reactor trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q77</div>
AB.ROD-0002 <span class="hi-exam">step 3.23</span> asks whether the affected (dropped) rod is fully inserted. <span class="hi-exam">On Unit 2 a rod is considered fully inserted if it indicates ≤10 steps withdrawn</span> (per Nuclear Fuels Engineering Letter NFE 96-098, April 13 1989, cited in OP-AA-101-111-1003). If neither rod position indication (IRPI or Plant Computer) is ≤10 steps (e.g., both read 18 steps), step 3.23 directs <span class="hi-exam">GO TO AB.ROD-0001</span> — because the Group Step Counter manipulations for maintaining proper rod group stepping logic differ significantly for a partially inserted vs a fully inserted rod. <span class="hi">The OHA E-48 ROD BOTTOM alarm comes in at 20 steps withdrawn with Group Demand >35 steps.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 RO-A1-2 / SRO-A1-2</div>
A dropped rod (rod 204, OHA E-46 LOWER SECT DEV ABV 50% PWR locked in) entered into AB.ROD-0002 is the initial condition for the 2014 manual QPTR JPMs. Before reducing power to &lt; 75% RTP per TS 3.1.3.1 Action c.3.d, the crew runs a QPTR surveillance. Here the resulting Maximum Power Tilt stays <span class="hi-exam">&lt; 1.02</span> (surveillance SAT) — a dropped rod does not automatically yield QPTR &gt; 1.02.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Excore NIs]], [[Control Rod Drive]]
- Related procedures: [[AB.ROD-0001 — Immovable/Misaligned Control Rods]], [[AB.ROD-0003 — Continuous Rod Motion]], [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]], [[OP-AA-101-111-1003 — Use of Procedures]]
- Related tech specs: [[TS 3/4.2 — Power Distribution]]
- Related exam questions: [[2018 Q30]], [[2020 Q19]], [[2022 Q19]], [[2015 Q76]], [[2014 Q77]]
- Related JPMs: [[2018 JPM RO-A3]], [[2022 JPM RO-A3]], [[2015 JPM Sim-a]], [[2014 JPM RO-A1-2]], [[2014 JPM SRO-A1-2]]
- Related scenarios: [[2016 Scenario 3]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]]
- Related exam: [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]]
