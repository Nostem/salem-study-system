---
title: "EOP-TRIP-4 — Natural Circulation"
category: eops
status: draft
aliases:
  - EOP-TRIP-4
  - natural circulation
---

# EOP-TRIP-4 — Natural Circulation

## Purpose
Provides guidance for plant cooldown using natural circulation when forced RCS flow is unavailable.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q26</div>
<span class="hi-exam">RCP restart priority order: 23, 21+22 or 21+24, 21</span> (to provide normal PZR spray). Single pump operation preferred in the loop providing best spray. Primary reason for starting RCPs: <span class="hi-exam">forced convection permits faster cooldown with less potential for upper head voiding.</span> Note N1-1 allows two RCPs for better spray if 23 unavailable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q71</div>
Borating during natural circulation cooldown to Cold Shutdown: <span class="hi-exam">more time is required for complete boron mixing</span> due to significantly lower RCS flow rate without RCPs. Once mixing is complete, the reactivity effect per ppm boron change is <span class="hi-exam">equal to</span> what it would be during forced circulation. The key distinction is mixing time, not reactivity worth.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS (foldout page): if subcooling is <span class="hi-exam">0 degrees F OR PZR level cannot be maintained > 4%</span>, then <span class="hi-exam">actuate SI and go to EOP-TRIP-1</span>. With 2CV55 and 2CV71 fully open and PZR level at 10% and lowering, PZR level cannot be maintained — actuate SI. <span class="hi-trap">Trap: PZR heaters will NOT energize with level < 17%; aligning charging to RWST/BIT and going to EOP-LOCA-1 is plausible but TRIP-4 does not direct entry into LOCA-1.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q85</div>
EOP-TRIP-4 rapid cooldown transition: if <span class="hi-exam">RVLIS is available</span>, crew transitions to <span class="hi-exam">EOP-TRIP-6 (NATURAL CIRCULATION RAPID COOLDOWN WITH RVLIS)</span> when required RCS cooldown rate exceeds <span class="hi-exam">25 &deg;F/hr</span>. Key RVLIS power supply detail: <span class="hi-exam">Loop 22 THOT provides input to Train A RVLIS. 2B Vital Instrument Bus powers RVLIS Train A Microprocessor Panel.</span> Loss of 2B VIB makes Train A RVLIS inoperable, but <span class="hi-exam">Train B is unaffected</span> — therefore RVLIS is still available and TRIP-6 (with RVLIS) applies. <span class="hi-trap">Trap: Loop 22 THOT failed low does NOT affect Train B RVLIS, and 2B VIB loss affects only Train A RVLIS microprocessor — not Train B. Both failures affect the same train.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 RO-A1.b</div>
TRIP-4 Step 4 determines the Cold Shutdown boron concentration and the boration required before a natural-circulation cooldown. Read the <span class="hi-exam">K<sub>eff</sub>=0.95 (All Rods In)</span> line of Figure 20A (Reactor Engineering Manual / Unit 2 Curve Book) at the current Core Burnup — 1914 ppm at 5000 EFPH — then <span class="hi-exam">add 50 ppm</span> → required CSD concentration 1964 ppm (1950-1970 ppm). Boration needed to go from 1050 ppm to CSD is <span class="hi-exam">11563 gallons</span> (11370-11646 gal). <span class="hi-trap">Use the K<sub>eff</sub>=0.95 line, not 0.99 (which gives ~1452 ppm); the +50 ppm adder is required; Figure 105 temperature correction is N/A because boration precedes the cooldown.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-e</div>
TRIP-4 natural-circulation cooldown sequence (alternate path). Step 9.1: raise C/D rate to <span class="hi-exam">20-25°F/hr</span> with the intact-SG MS10 atmospheric reliefs while minimizing SG ΔP, holding SG NR level <span class="hi-exam">9-33%</span> via 21-24AF21. Step 10: wait until all RCS Thots <span class="hi-exam">&lt;543°F</span>. Step 11: BLOCK HI STEAM LINE FLOW SI both trains. Step 12: restore letdown and raise charging to <span class="hi-exam">≥87 gpm</span>, maintaining letdown pressure 300 psig (letdown relief lifts at 600 psig); placing CV18 in AUTO shuts the orifice valve. Step 13.1: depressurize with <span class="hi-exam">ONE PZR PORV (2PR1 or 2PR2) to 1865 psig</span>. <span class="hi-exam">Discriminator: the PORV fails to re-close and its block valve also fails to close — manually initiate Safety Injection before loss of RCS subcooling (~3 min after the PORV opens), since automatic SI is failed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q85</div>
TRIP-5/TRIP-6 (Natural Circulation Rapid Cooldown) each have a Step 1 caution: <span class="hi-exam">TRIP-4 steps 3-17 must be completed before entering TRIP-5 or TRIP-6</span> — ensuring adequate SDM and upper-head cooling, SI signals blocked, and initial cooldown/depressurization performed. See [[RCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q88</div>
Natural Circulation Cooldown from NOP/NOT: <span class="hi-exam">continue RCS depressurization in TRIP-4 until &lt;1000 psig, then close 21-24 SJ54 (Accumulator Isolation Valves) at step 25</span> to prevent injecting accumulator contents into the RCS. Key CAS thresholds tested: the <span class="hi-exam">8-hour upper-head soak is required only if RCS pressure is &lt;1250 psig AND fewer than 2 CRDM vent fans are running</span> (with both CRDM vent fans running and 1245 psig, no soak yet). The CAS directs initiating SI only if subcooling cannot be maintained &gt;9°F (using CFST Table A; with CETs 445°F it is ~107°F here), and PZR level is maintained &gt;11% — so neither "initiate SI / go to TRIP-1" nor "start ECCS pumps to raise PZR level" applies.
</div>

## Connections
- Related systems: [[RCS]], [[RCPs]], [[Pressurizer & PRT]], [[ECCS]], [[CVCS]], [[RVLIS]], [[115V AC]]
- Related EOPs: [[EOP-TRIP-5 — Natural Circulation Cooldown With RVLIS]], [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related procedures: [[S2-RE-RA.ZZ-0016 — Curve Book (Salem Unit 2 Cycle 23)]], [[S2.OP-IO.ZZ-0006 — Hot Standby to Cold Shutdown]]
- Related exam questions: [[2019 Q85]], [[2023 Q26]], [[2023 Q71]], [[2023 Q87]], [[2015 Q85]], [[2014 Q88]]
- Related JPMs: [[2015 JPM RO-A1-2]], [[2014 JPM Sim-e]]
- Related exam: [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]]
