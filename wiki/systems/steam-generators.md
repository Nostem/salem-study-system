---
title: Steam Generator & Blowdown
category: systems
status: draft
aliases:
  - SGs
  - SG
---

# Steam Generator & Blowdown

## Function

The steam generators transfer heat from the reactor coolant (primary side) to the feedwater (secondary side) to produce steam for the turbine-generator. They are vertical shell and U-tube evaporators with integral moisture separating equipment. (UFSAR 5.1, 5.5.2)

## Key Design Parameters — Unit 1 (Model F)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 4 | UFSAR T5.2-5A |
| Model | Westinghouse Model F (replacement) | UFSAR T5.2-5A |
| Design Pressure (primary/secondary) | 2485 / 1185 psig | UFSAR T5.2-5A |
| Primary Hydrostatic Test Pressure (cold) | 3107 psig | UFSAR T5.2-5A |
| Design Temperature (primary/secondary) | 650 / 600°F | UFSAR T5.2-5A |
| Heat Transfer Surface Area | 55050 ft² | UFSAR T5.2-5A |
| Heat Transferred | 2961 x 10⁶ Btu/hr | UFSAR T5.2-5A |
| Number of U-tubes | 5626 | UFSAR T5.2-5A |
| U-tube OD | 0.688 in | UFSAR T5.2-5A |
| Tube Wall Thickness (min) | 0.041 in | UFSAR T5.2-5A |
| Tube Material | Inconel | UFSAR 5.1 |
| Overall Height | 67 ft 8 in | UFSAR T5.2-5A |
| Shell OD (upper/lower) | 176.25 / 135.42 in | UFSAR T5.2-5A |
| RC Volume (rated load) | 966.1 ft³ | UFSAR T5.2-5A |
| Steam Pressure at Full Load (High Tavg) | 869 psia | UFSAR T5.2-5A |
| Steam Pressure at Full Load (Low Tavg) | 778 psia | UFSAR T5.2-5A |
| Steam Flow at Full Load | 3.76–3.78 x 10⁶ lb/hr | UFSAR T5.2-5A |
| Maximum Moisture Carryover | 0.25 wt% | UFSAR T5.2-5A |
| Feedwater Temperature | 432.8°F | UFSAR T5.2-5A |

## Key Design Parameters — Unit 2 (AREVA NP Model 61/19T)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 4 | UFSAR T5.2-5 |
| Model | AREVA NP Model 61/19T (replacement) | UFSAR T5.2-5 |
| Design Pressure (primary/secondary) | 2485 / 1185 psig | UFSAR T5.2-5 |
| Primary Hydrostatic Test Pressure (cold) | 3107 psig | UFSAR T5.2-5 |
| Design Temperature (primary/secondary) | 650 / 600°F | UFSAR T5.2-5 |
| Heat Transfer Surface Area | 66236 ft² | UFSAR T5.2-5 |
| Heat Transferred | 2961 x 10⁶ Btu/hr | UFSAR T5.2-5 |
| Number of U-tubes | 5048 | UFSAR T5.2-5 |
| U-tube OD | 0.750 in | UFSAR T5.2-5 |
| Tube Wall Thickness (min) | 0.043 in | UFSAR T5.2-5 |
| Tube Material | Inconel 690 thermally treated | UFSAR 5.1 |
| Shell OD (upper/lower max) | 175.75 / 135.0 in | UFSAR T5.2-5 |
| RC Volume (rated load) | 1201 ft³ | UFSAR T5.2-5 |
| Steam Pressure at Full Load (High Tavg) | 900 psia | UFSAR T5.2-5 |
| Steam Pressure at Full Load (Low Tavg) | 805 psia | UFSAR T5.2-5 |
| Steam Flow at Full Load | 3.76–3.77 x 10⁶ lb/hr | UFSAR T5.2-5 |
| Maximum Moisture Carryover | < 0.1 wt% | UFSAR T5.2-5 |
| Feedwater Temperature | 432.8°F | UFSAR T5.2-5 |

## Unit Differences

| Feature | Unit 1 (Model F) | Unit 2 (Model 61/19T) |
|---------|------------------|----------------------|
| Number of U-tubes | 5626 | 5048 |
| Tube OD | 0.688 in | 0.750 in |
| Tube Material | Inconel | Inconel 690 TT |
| Heat Transfer Area | 55050 ft² | 66236 ft² |
| Steam Pressure (High Tavg) | 869 psia | 900 psia |
| Primary cladding | Austenitic SS (channel heads), Inconel (tubesheet) | Austenitic SS (Type 308L/309L) or Inconel 600 |
| Max Moisture Carryover | 0.25 wt% | < 0.1 wt% |

## Construction

- Reactor coolant flows through inverted U-tubes, entering and leaving through nozzles in the hemispherical bottom head
- Bottom head divided into inlet and outlet chambers by vertical partition plate
- Manways provided for access to both sides of divided head
- Steam generated on shell side flows upward through moisture separators to outlet nozzle at top
- Units are primarily carbon steel
- (UFSAR 5.1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q2</div>
Natural circulation verification: <span class="hi-exam">RCS subcooling >0°F</span> (T-sat at RCS pressure minus highest CET), <span class="hi-exam">SG pressures stable or lowering</span>, T-hots stable or dropping, CETs lowering, <span class="hi-exam">T-colds at saturation temperature for SG pressure</span>. RCS T-cold matching SG saturation temp confirms heat transfer from primary to secondary through SG tubes is established.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q42</div>
SG high level trip (P-14): <span class="hi-exam">2/3 NR levels ≥67% on any SG</span> → main turbine trip → reactor trip. FW Isolation closes BF13, BF19, BF40 and trips SGFPs. If BF19 fails open, SG level continues to rise until trip on high level.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q11</div>
Natural circulation monitoring (EOP-SGTR-1 step 38.1): RCS T-Cold in unaffected loops should be approximately <span class="hi-exam"><span class="val-normal">548°F</span> (saturation at MS10 setpoint <span class="val-normal">1015 psig</span> / 1030 psia)</span>. Affected SG MS10 set to <span class="val-normal">1045 psig</span> (1060 psia) → Tsat ~<span class="val-normal">552°F</span>. <span class="hi-exam">With LOOP, steam dumps unavailable — use atmospheric relief valves (MS10s) on intact SGs.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.5]]** — Steam Generators (tube integrity, inspection requirements)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q81</div>
SG tube leak action levels per AB.SG-0001 Attachment 1: with leak rate <span class="hi-exam">>= 75 gpd AND rate of change >= 30 gpd/hr</span>, Action Level 3 requires <span class="hi-exam">reduce power to <= 50% in 1 hour and MODE 3 in the following 2 hours</span>. <span class="hi-trap">Trap: a 125 gpd leak rate trending at 30 gpd/hr meets the rate-of-change criterion for Action Level 3, not the 150 gpd absolute threshold (which requires MODE 3 in 6 hours).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q85</div>
Security-redacted question testing SRO knowledge of EOP-FRHS-2, Response to Steam Generator Overpressure, in conjunction with security event procedures (K/A W/E13 G2.4.28). Reference: 2-EOP-FRHS-2 (R41).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A4</div>
ICMF peer check during SGTR: a release IS in progress because the <span class="hi-exam">TD AFW pump takes steam from 21 and 23 SGs</span> — with 23 SG ruptured and <span class="hi-exam">23MS45 not closed</span>, primary-to-secondary leakage exits through the TD AFW pump steam supply. No radiation monitor monitors this release path = <span class="hi-exam">unmonitored release in progress</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q81</div>
EOP-FRHS-1 heat sink established criteria (Step 6): heat sink is established when <span class="hi-exam">NR level in at least one SG is >9% (15% adverse)</span> OR <span class="hi-exam">feed flow is verified to at least one SG by CETs lowering or WR level rising</span>. If WR level is rising in one SG (even with all NR levels offscale low), heat sink IS established and transition back to the procedure in effect (e.g. EOP-TRIP-2) IS allowed. <span class="hi-trap">NR level does not need to reach 9% before returning — WR level rising is sufficient to confirm feed flow and allow exit from FRHS-1.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
23 SG tube leak (25-30 gpm) progressing to design basis 650 gpm tube rupture. Diagnostic indications: RMS alarms <span class="hi-exam">2R15, 2R19C (23 SG B/D), 2R53C (MS Line)</span>, PZR level lowering. Transfer to centrifugal charging pump stabilizes PZR level at 35 gpm. At 650 gpm, leak exceeds makeup capability — trip reactor and actuate SI. SGTR-1 isolation: close <span class="hi-exam">23AF21, 23AF11</span> (feed), <span class="hi-exam">23MS167, 23MS18, 23MS7, 23GB4</span> (steam), trip 23 AFW pump, dispatch to close <span class="hi-exam">23MS45</span>, close <span class="hi-exam">2SS333</span>. Set 23MS10 to 1045 psig. Target cooldown temp from Table B: SG press > 1000 psig = <span class="hi-exam">503 F CETs</span>.
</div>

## Connections

- Related EOPs: [[EOP-SGTR-1]], [[EOP-FRHS-2 — Response to Steam Generator Overpressure]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related procedures: [[AB.SG-0001 — Steam Generator Tube Leak]], [[EP-SA-325 — Emergency Plan Implementing Procedures]]
- Related exam questions: [[2023 Q2]], [[2023 Q42]], [[2023 Q81]], [[2023 Q85]], [[2022 Q11]], [[2022 Q65]], [[2022 Q81]]
- Related JPMs: [[2023 JPM SRO-A4]]
- Related scenarios: [[2022 Scenario 4]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
