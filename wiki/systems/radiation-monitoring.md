---
title: Radiation Monitoring
category: systems
status: draft
aliases:
  - process radiation monitors
  - rad monitors
  - rad protection
  - ALARA
  - shielding
---

# Radiation Monitoring

## Function

Radiation monitoring systems detect and measure radiation levels throughout the plant for personnel protection, effluent control, and post-accident monitoring. Process radiation monitors provide automatic actuation of safety functions (e.g., containment vent isolation) and alarms. The radiation protection program ensures that occupational radiation exposures are maintained as low as reasonably achievable (ALARA) and within 10CFR20 limits. (UFSAR 7.6, UFSAR 12)

## Process Radiation Monitors

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q49</div>
SGBD radiation monitor (<span class="hi-exam">1R19A</span>) check source test: when the check source pushbutton is pressed, counts rise then <span class="hi-exam">return to the original reading</span> (not held high while button is pressed). During the check source, <span class="hi-exam">interlocks are NOT expected to actuate</span>. (Ref: S1.OP-ST.RM-0001)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q62</div>
1R1A (Control Room Area) radiation monitor in alarm: <span class="hi-trap">does NOT automatically actuate CAV in AP Mode</span>. Requires manual actuation — press ACCIDENT PRESSURIZED pushbutton at 1RP2 to actuate BOTH units' CAV into AP Mode. Emergency intake dampers open on the unaffected unit.
</div>

## Shielding Design

- Primary shielding: biological shield around the reactor vessel (concrete)
- Secondary shielding: containment structure, auxiliary building walls
- Designed to limit dose rates in normally occupied areas to levels consistent with 10CFR20 occupational limits
- Shielding design considers both normal operation and post-accident conditions
(UFSAR 12.1)

## Ventilation for Contamination Control

- Plant ventilation systems maintain appropriate pressure differentials to direct airflow from areas of lower contamination to areas of higher contamination
- HEPA filters and charcoal adsorbers on exhaust systems remove airborne contamination
- Containment purge system used to reduce airborne activity levels before personnel entry
(UFSAR 12.2)

## Radiation Protection Program

- Dosimetry: personnel monitoring for external and internal exposure
- Radiation surveys and monitoring
- Contamination control and decontamination
- Respiratory protection program
- Radioactive material control and accountability
- Training for all personnel with access to radiation areas
(UFSAR 12.3)

## ALARA Program

- Design features to minimize exposure: remote operation, shielding, ventilation, decontamination capability
- Administrative controls: radiation work permits, dose goals, pre-job ALARA reviews
- Dose tracking and trending
(UFSAR 12.4)

## Key Regulatory Limits (10CFR20)

| Parameter | Limit | Source |
|-----------|-------|--------|
| Total Effective Dose Equivalent (TEDE) | 5000 mrem/year | 10CFR20.1201 |
| Lens of Eye Dose | 15000 mrem/year | 10CFR20.1201 |
| Shallow Dose Equivalent (skin/extremity) | 50000 mrem/year | 10CFR20.1201 |
| Declared Pregnant Worker | 500 mrem/gestation | 10CFR20.1208 |
| General Public (fence line) | 100 mrem/year | 10CFR20.1301 |

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.3]]** — Monitoring Instrumentation (radiation monitors)
- **[[TS 3/4.11 — Radioactive Effluents]]** — Effluent monitoring and release limits

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q83</div>
Fission Product Barrier Table (EP-SA-325-123) and R44A/B containment high range radiation monitors: with <span class="hi-exam">R44A and R44B both reading >2000 R/hr</span> following a LBLOCA, the barrier assessment yields: <span class="hi-exam">FB2.L (fuel barrier loss, 5 pts) + RB1.L or RB2.L (RCS barrier loss, 5 pts) + CB2.P (containment barrier potential loss, 2 pts) = 12 points → General Emergency</span>. Classification: <span class="hi-exam">GE with Loss of 2 barriers and Potential Loss of the 3rd barrier</span>. <span class="hi-trap">This is NOT a loss of all 3 barriers — containment is a POTENTIAL loss (lowering pressure indicates containment is functioning).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A4</div>
Dose and stay time calculation for containment entry (RP-AA-300): from survey map, identify gamma and neutron dose rates at work location. Calculate stay time = (dose limit / dose rate) x 60 min/hr. Compare all limiting factors: <span class="hi-exam">gamma stay time, neutron stay time, and heat stress stay time</span>. The lowest value is the controlling factor. At 22 CFCU area (130' CTMT): neutron = 40 mrem/hr → <span class="hi-exam">12 min stay time (most limiting)</span>, gamma = 5 mrem/hr → 24 min, heat stress = 15 min.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-k</div>
During liquid radwaste release (S2.OP-SO.WL-0001 Sec 5.5), <span class="hi-exam">2R18 radiation monitor</span> provides overwatch. At Step 5.5.8, operator reads 2R18 on 104 panel: <span class="hi-exam">105 CPM with High Radiation light illuminated</span>. Step 5.5.9: if 2R18 ALARMS, immediately direct NCO to <span class="hi-exam">CLOSE 2WL51 (LIQUID RELEASE STOP VALVE)</span> to terminate the release.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[CAV]], [[Containment]], [[Waste Gas]], [[Waste Liquid]]
- Related procedures: [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[S2.OP-SO.RM-0001 — Radiation Monitoring System Operation]], [[S1.OP-ST.RM-0001 — Radiation Monitors Check Source]], [[NC.EP-EP.ZZ-0304 — OSC Radiation Protection Response]], [[RP-AA-300 — Radiological Survey Program]], [[S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste]]
- Related exams: [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
  - [[2023 Q49 — SGBD Radiation Monitor Check Source|2023 Q49]] — SGBD rad monitor check source response and interlocks
  - [[2023 Q62]] — Area Rad Monitor 1R1A / manual CAV AP mode from 1RP2
  - [[2022 Q62]] — Fuel Handling Crane interlocks (2R32A vs 2R9 rad monitors)
  - [[2022 Q83]] — LBLOCA R44A/B >2000 R/hr / GE classification / Fission Product Barrier Table
- Related JPMs: [[2022 JPM RO-A4]], [[2022 JPM IP-k]]
