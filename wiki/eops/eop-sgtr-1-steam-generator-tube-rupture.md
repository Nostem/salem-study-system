---
title: "EOP-SGTR-1 — Steam Generator Tube Rupture"
category: eops
status: draft
aliases:
  - EOP-SGTR-1
  - SGTR-1
---

# EOP-SGTR-1 — Steam Generator Tube Rupture

## Purpose

Provides guidance for mitigation of a steam generator tube rupture event, including identification of the ruptured SG, isolation, cooldown, and depressurization to terminate primary-to-secondary leakage.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q11</div>
Step 38.1 monitors for natural circulation flow. RCS T-Cold in unaffected loops should be approximately <span class="hi-exam">548 °F</span> (saturation temperature at MS10 setpoint of 1015 psig / 1030 psia). Affected SG MS10 set to 1045 psig (1060 psia) per step 3. With a LOOP, steam dumps are unavailable (circulators tripped = blocking signal) — use <span class="hi-exam">atmospheric relief valves (MS10s)</span> on intact SGs to raise steam flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q25</div>
EOP-TRIP-7 Rediagnosis transitions to EOP-SGTR-1 when symptoms include <span class="hi-exam">rising SG level and SG high radiation</span> (2R19A in alarm) — distinguishing a tube rupture from a LOCA or faulted SG.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
Entered from EOP-TRIP-1 when <span class="hi-exam">23 SG NR level rising in an uncontrolled manner</span> following a 650 gpm tube rupture. Key actions in SGTR-1: identify 23 SG as ruptured, set <span class="hi-exam">23MS10 to 1045 psig</span>, isolate ruptured SG (close 23AF21, 23AF11, 23MS167, 23MS18, 23MS7, 23GB4, dispatch operator to close 23MS45, close 2SS333). Determine RCS target temperature using <span class="hi-exam">Table B: SG pressure > 1000 psig = 503 F CETs</span>. Cooldown using steam dumps on intact SGs at maximum rate — bypass Tavg Lo-Lo pushbuttons. After reaching target temp, stop cooldown by placing MS Pressure Control in Auto. Reset SI, Phase A, Phase B. Depressurize using PZR spray valves per Table D criteria. When 2PS3 fails to close, stop 21 and 23 RCPs to eliminate spray flow path, continue at step 19.
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCS]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-7 — Rediagnosis]]
- Related exam questions: [[2022 Q11]], [[2022 Q25]]
- Related scenarios: [[2022 Scenario 4]]
- Related exam: [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
