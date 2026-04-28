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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q79</div>
EOP-SGTR-1 CAS (Continuous Action Step): <span class="hi-exam">If SI has been terminated and RCS subcooling reaches 0°F → start ECCS pumps as necessary to restore subcooling and GO TO EOP-SGTR-3</span> (SGTR with LOCA – Subcooled Recovery). This CAS monitors throughout the procedure. <span class="hi-trap">SGTR-3 (Subcooled Recovery) is the correct transition — NOT SGTR-4 (Saturated Recovery). SGTR-2 (Post SGTR Cooldown) is only for normal recovery when subcooling is maintained. The key discriminator is: SI has been TERMINATED + subcooling lost = SGTR-3.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
Entered from EOP-TRIP-1 when <span class="hi-exam">21 SG NR level rising in an uncontrolled manner</span> following 650 gpm tube rupture. Isolate 21 SG: close 21AF21 and 21AF11 (feed — CT-18 Part 1, within 10 min), close <span class="hi-exam">21MS167</span> (steam — CT-18 Part 2), set 21MS10 to 1045 psig. Dispatch to close 21MS45 and 2SS321. Trip 23 AFW pump (lower to min speed first). Target cooldown temp from Table B: <span class="hi-exam">SG press >1000 psig = 503 F CETs</span>. Cooldown using steam dumps on intact SGs — bypass Tavg Lo-Lo pushbuttons. Stop cooldown placing MS Pressure Control in Auto (CT-19 Part 2). Normal spray NOT available (23 RCP stopped) — depressurize using <span class="hi-exam">PZR PORVs</span> IAW Table E. PORV fails to close → close block valve (CT-10).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-g</div>
EOP-SGTR-1 Step 10 RCS cooldown with steam dumps unavailable (permissive light NOT illuminated on 2RP4). Table B determines target temp from ruptured SG pressure: <span class="hi-exam">1045 psi → 503°F</span>. Condenser steam dumps unavailable → <span class="hi-exam">cooldown using MS10s on intact SGs (21, 22, 23)</span>. Lower MS10 setpoints to fully open for max-rate cooldown. When hottest CET reaches 503°F, stop cooldown by matching MS10 setpoints to current SG pressures. Do NOT dump steam from ruptured 24 SG.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-c</div>
Step 19 RCS depressurization using normal spray during SGTR on 22 SG. Open spray valves <span class="hi-exam">2PS1 and 2PS3</span>. Monitor depressurization against Table D criteria (RCS pressure < ruptured SG pressure AND PZR level > 11%). When Table D conditions met (CUE: PZR level 79% and rising), close spray valves per CAS at Step 19.1. <span class="hi-exam">2PS3 fails to close</span> (alternate path). Step 19.4: spray valve not closed → <span class="hi-exam">STOP 21 and 23 RCPs</span> to eliminate spray flow path through 2PS3. RCS pressure stops dropping (rising after RCP stop). Proceed to Step 27.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
EOP-SGTR-1 entered from EOP-TRIP-1 after 24 SG tube rupture (650 gpm). Isolation of 24 SG: <span class="hi-exam">24MS10 set to 1045 psig and closed, 24MS167, 24MS18, 24MS7, 24GB4 closed</span>. Feed isolation: <span class="hi-exam">24AF21 and 24AF11 closed</span>. Dispatch to close 24SG (2SS339) and shift gland sealing steam to alternate IAW S2.OP-SO.GS-0001. RCS cooldown target from Table B: SG press >1000 psig = <span class="hi-exam">503 F CETs</span>. PO initiates cooldown using steam dumps at 25% demand in MS Pressure Control or intact MS10s. <span class="hi-exam">CT#2 (CT-19): crew must stop cooldown when hottest CETs < target temp</span> to prevent transition out of SGTR-1. Note: 2PR6 power removed earlier (PZR pressure channel failure) — CRS may direct restoring power for subsequent RCS depressurization.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q57</div>
SI termination during SGTR-1: the reason ECCS flow is terminated is to <span class="hi-exam">prevent overfill of the ruptured SG</span> (not the pressurizer). CAS for reestablishing ECCS flow: <span class="hi-exam">PZR level cannot be maintained &ge; 11% OR Subcooling &le; 0&deg;F</span>. The logic is <span class="hi-exam">OR</span> — either condition triggers ECCS restart. <span class="hi-trap">Trap: candidates may confuse overfill concern (it is the SG, not the PZR) or incorrectly believe ONLY PZR level (without the subcooling criterion) triggers ECCS restart.</span>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RCS]], [[Pressurizer & PRT]], [[Main Steam]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-TRIP-7 — Rediagnosis]], [[EOP-SGTR-3 — SGTR with LOCA Subcooled Recovery]]
- Related exam questions: [[2018 Q57]], [[2020 Q79]], [[2022 Q11]], [[2022 Q25]]
- Related JPMs: [[2019 JPM SRO-A5]], [[2019 JPM Sim-c]], [[2020 JPM Sim-g]]
- Related scenarios: [[2018 Scenario 1]], [[2022 Scenario 4]], [[2020 Scenario 4 — SGTR / PORV Failure]]
- Related exam: [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
