---
title: "S2.OP-SO.CAN-0001 — Hydrogen Recombiner Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CAN-0001
  - hydrogen recombiner operation
---

# S2.OP-SO.CAN-0001 — Hydrogen Recombiner Operation

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for operating the Hydrogen Recombiner System, including power setting calculations and startup of recombiners when directed by EOP-LOCA-1.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q49</div>
Same recombiner power-supply fact tested in 2014: with a LOCA + LOOP and the <span class="hi-exam">1A 4KV Vital Bus locked out on bus differential, the 1A 460V Vital Bus is de-energized → 11 Recombiner unavailable; only 12 can be started</span> when directed by procedure (1B 4KV / 1B 460V remain energized).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q48</div>
H2 Recombiners are placed in service with containment H2 between 2-4%. <span class="hi-exam">A higher containment pressure (constant power) makes the recombiner LESS effective; Attachment 2 (Recombiner Power Correction Factor Curve) yields a higher correction factor, so the power setpoint must be RAISED</span> per Step 5.1.9.C. See [[Containment]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q45</div>
Hydrogen Recombiner power supplies (Unit 1): <span class="hi-exam">11 Hydrogen Recombiner powered from 1A 460V Vital Bus; 12 Hydrogen Recombiner powered from 1B 460V Vital Bus</span> (each fed from its respective 4KV Vital Bus). With 1A 4KV Vital Bus locked out on bus differential, 1A 460V is de-energized — <span class="hi-exam">only 12 Recombiner is available</span> when directed by procedure.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q77</div>
Confirms EOP-LOCA-1 requirement: start <span class="hi-exam">ONLY one</span> hydrogen recombiner when containment H2 > 0.5%. Two recombiners exist, but EOP-LOCA-1 limits to one below 4%.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q32</div>
21 Hydrogen Recombiner Reference Power: <span class="hi-exam">43.68 KW</span>. 22 Hydrogen Recombiner Reference Power: <span class="hi-exam">42.63 KW</span>. With CURRENT containment pressure 4.0 psig and PRIOR-to-LOCA temperature 90°F, Cp = 1.21. Power setting = 43.68 x 1.21 = 52.85, rounded to <span class="hi-exam">54 KW</span>. <span class="hi-trap">Common errors: using CURRENT temperature (120°F) instead of PRIOR-to-LOCA temperature for Cp lookup; using wrong recombiner's reference power (42.63 vs 43.68).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q91</div>
SRO question confirms: per EOP-LOCA-1 Step 24, when H2 concentration is <span class="hi-exam">0.7% (greater than 0.5%)</span>, crew starts <span class="hi-exam">ONLY ONE hydrogen recombiner</span> by performing SO.CAN-0001 CONCURRENTLY with EOP-LOCA-1. The procedure is performed concurrently — not as a standalone evolution.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q92</div>
Per EOP-LOCA-1 Step 24, when hydrogen concentration is <span class="hi-exam">between 0.5% and 4.0%, only one hydrogen recombiner is started</span>. <span class="hi-trap">The normal operating procedure (SO.CAN-0001) starts two recombiners when concentration is 2.0% and rising. The EOP-LOCA-1 guidance differs — it limits to only ONE recombiner below 4%. ≥ 4.0% requires consulting the TSC for additional recovery actions.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q60</div>
Hydrogen recombiner power setting calculation: <span class="hi-exam">Power Setting = Cp (pressure correction factor) x Reference Power</span>. Use the <span class="hi-exam">CURRENT containment pressure</span> and the <span class="hi-exam">PRIOR-to-LOCA containment temperature</span> to select Cp from Attachment 2. Round up to the <span class="hi-exam">next higher setting readable on the meter</span>.
</div>

## Connections

- Related systems: [[Containment]], [[460/230V AC]], [[4KV]]
- Related EOPs: [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam questions: [[2016 Q45]], [[2018 Q77]], [[2019 Q32]], [[2019 Q91]], [[2022 Q60]], [[2020 Q92]], [[2015 Q48]], [[2014 Q49]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2022 NRC Written Exam]], [[2020 NRC Written Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]]
