---
title: Containment
category: systems
status: draft
aliases:
  - containment isolation
  - adverse containment
  - adverse containment conditions
---

# Containment

## Function

The containment systems ensure that fission product releases are limited following a LOCA or other design basis accident. The containment structure forms a virtually leak-tight barrier. Heat removal systems (spray and fan coolers) reduce containment pressure and temperature. The containment isolation system provides double barriers on all penetrating lines. (UFSAR 6.1, 6.2)

## Containment Structure

| Parameter | Value | Source |
|-----------|-------|--------|
| Type | Steel-lined reinforced concrete | UFSAR 6.2.1.1 |
| <span class="hi">Design Pressure</span> | <span class="hi">47 psig</span> | UFSAR 6.2.1.1 |
| Maximum Allowable Leakage Rate | 0.1% of free volume per day at design pressure | UFSAR 6.2.1.1 |
| Liner | Steel | UFSAR 6.2.1.1 |
| Seismic Design | Class I | UFSAR 3.8 |

Designed to withstand complete blowdown of reactor coolant through any rupture of the RCS up to and including circumferential severance of an RCS pipe. (UFSAR 6.2.1.1)

## Containment Spray System

### Function
Reduces containment pressure and removes iodine from the containment atmosphere by spraying chemically treated (NaOH) water. (UFSAR 6.2.2.1)

### Spray Nozzles
- Hollow-cone pressure nozzle design, no internal parts subject to clogging
- 3/8-inch diameter orifice, stainless steel
- Sauter mean drop size < 1000 microns at design conditions
- Four 360-degree ring headers at two elevations
- Screened through 1/12-inch (2.1 mm) holes during recirculation
(UFSAR 6.2.2.1)

### Operation

**Injection Phase:**
- Containment spray pumps take suction from RWST
- NaOH from spray additive tank mixed with spray flow
- Spray actuated on High-High containment pressure signal

**Recirculation Phase:**
- Spray pumps realigned to containment sump via RHR heat exchangers
- Cooled recirculated water sprayed into containment
(UFSAR 6.2.2.1)

## Containment Fan Coil Units (CFCUs)

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 5 per unit | UFSAR 6.2.2.2.2 |
| Type | Centrifugal fan with plate fintube cooling coils | UFSAR 6.2.2.2.2 |
| Normal Operation Airflow | 110000 cfm each | UFSAR 6.2.2.2.2 |
| Accident Operation Airflow | 40000 cfm each | UFSAR 6.2.2.2.2 |
| Heat Removal (accident, per unit) | ≥44 x 10⁶ Btu/hr each | UFSAR 6.2.2.2.2 |
| Heat Removal (3 units, cumulative) | 132 x 10⁶ Btu/hr | UFSAR 6.2.2.2.2 |
| Service Water Flow (per unit, accident) | Minimum 1300 gpm | UFSAR 6.2.2.2.2 |
| Location | Operating floor, between containment wall and polar crane wall | UFSAR 6.2.2.2.2 |
| Seismic Classification | Class I | UFSAR 6.2.2.2.2 |

Each unit includes: motor, fan, motor heat exchanger, cooling coils, roughing filters, dampers, duct distribution system, instrumentation, and controls. Cooled by service water. (UFSAR 6.2.2.2.2)

## Containment Internal Pressure Limits

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q54</div>
<span class="hi-exam">TS 3.6.1.4 requires containment internal pressure between -1.5 and +0.3 psig during Modes 1-4.</span> The upper limit (+0.3 psig) ensures peak pressure does not exceed the <span class="val-trip">47 psig</span> design pressure during a DBA (LOCA or steam line break). The lower limit (-1.5 psig) ensures the design negative pressure differential of <span class="val-trip">3.5 psig</span> is not exceeded. If outside limits, must restore within <span class="val-trip">1 hour</span>.
</div>

| Parameter | Value | Source |
|-----------|-------|--------|
| Upper Pressure Limit | <span class="val-alarm">+0.3 psig</span> | TS 3.6.1.4 |
| Lower Pressure Limit | <span class="val-alarm">-1.5 psig</span> | TS 3.6.1.4 |
| Design Pressure | <span class="val-trip">47 psig</span> | UFSAR 6.2.1.1 |
| Design Negative Differential | <span class="val-trip">3.5 psig</span> | TS 3.6.1.4 Bases |
| Restoration Time | <span class="val-trip">1 hour</span> | TS 3.6.1.4 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q33</div>
PRT rupture disk relief to containment raises containment pressure and temperature. After one hour at 0.1 psig/5 min rise: 0 + 1.2 = <span class="hi-exam">1.2 psig exceeds the +0.3 psig upper limit</span> (LCO 3.6.1.4). At 1 &deg;F/5 min rise: 99 + 12 = <span class="hi-exam">111 &deg;F does NOT exceed the 120 &deg;F limit</span> (LCO 3.6.1.5). <span class="hi-trap">Trap: the -1.5 psig is the NEGATIVE pressure limit, not a general magnitude — the positive limit is only 0.3 psig. Also: containment air temperature limit is 120 &deg;F, not 110 &deg;F.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q39</div>
Containment High Pressure SI actuation: <span class="hi-exam"><span class="val-trip">4 psig</span> on 2/3 containment pressure channels</span>. This signal <span class="hi-exam">CANNOT be blocked</span> — unlike Low PZR Pressure SI and High Steam Flow SI which can be blocked via P-11 during cooldown per IOP-6. During a Mode 3 cooldown with SI blocks in place, rapid depressurization of all SGs inside containment will raise containment pressure above 4 psig and actuate SI.
</div>

## Containment Isolation System

### Design Basis
Provides double barriers for each line penetrating containment. Automatic isolation on containment isolation signals. (UFSAR 6.2.4)

### Isolation Signals
- **Phase A** — initiated by SI signal. Closes majority of automatic containment isolation valves.
- **Phase B** — initiated by High-High containment pressure (Containment Spray actuation). Closes remaining isolation valves.
(UFSAR 6.3.2, 6.2.4)

## Containment Atmosphere Iodine Removal

- Chemically treated spray (NaOH solution) removes elemental iodine vapor by washing action
- Recirculation through HEPA filter units removes particulates
- Sump pH maintained 7.0–10.0 to minimize iodine re-evolution and chloride stress corrosion cracking
(UFSAR 6.2.3)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q52</div>
<span class="hi-exam">CA330 Instrument Air Containment Isolation valves close on Phase A signal ONLY — NOT on SI or Phase B.</span> 21 CA330 supplies the 2A control air header; 22 CA330 supplies the 2B control air header. <span class="hi-exam">BOTH CA330s must be closed</span> to fully isolate instrument air to containment (each is in a separate air supply line with its own check valve). Backup air receivers inside containment provide PORV air supply during EOP actions.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q59</div>
Containment Iodine Removal Units (IRUs): should only be placed in service when <span class="hi-exam">directed by Radiation Protection</span> (or at the discretion of SM/CRS for testing). IRUs can <span class="hi-exam">ONLY be operated from the main control room</span> — NOT from the Hot Shutdown Panel. <span class="hi-trap">IRUs are NOT directed by EOPs — they are placed in service at Radiation Protection's request when iodine is present in containment.</span>
</div>

## Combustible Gas Control

- Hydrogen generated post-LOCA from: zirconium-water reaction, corrosion of aluminum/zinc, radiolysis
- Hydrogen monitoring provided in containment
- Hydrogen purge capability
(UFSAR 6.2.5)

## Engineered Safety Features Summary

| ESF System | Function | Source |
|-----------|----------|--------|
| Containment Structure | Leak-tight barrier for fission products | UFSAR 6.1 |
| [[ECCS]] | Borated water injection for core cooling | UFSAR 6.3 |
| Containment Spray | Pressure reduction + iodine removal | UFSAR 6.2.2.1 |
| [[CFCUs]] | Atmosphere recirculation and cooling | UFSAR 6.2.2.2 |
| Containment Isolation | Double barriers on penetrations | UFSAR 6.2.4 |

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — Containment integrity, leakage
- **[[TS 3/4.6 — Containment|TS 3/4.6.1]]** — Containment Integrity
- **[[TS 3/4.6 — Containment|TS 3/4.6.2]]** — Depressurization and Cooling Systems (spray, fan coolers)
- **[[TS 3/4.6 — Containment|TS 3/4.6.3]]** — Containment Isolation Valves
- **[[TS 3/4.6 — Containment|TS 3/4.6.4]]** — Combustible Gas Control
- **[[TS 3/4.6 — Containment|TS 3/4.6.5]]** — Containment Structural Integrity

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q58</div>
Hydrogen Recombiner System: per EOP-LOCA-1 step 17, <span class="hi-exam">only one hydrogen recombiner is allowed in service</span> when containment hydrogen concentration is between >0.5% and <4%. Operation of both hydrogen recombiners is not permitted. The purpose is to reduce hydrogen concentration to prevent formation of a flammable mixture that could ignite and cause a pressure excursion challenging containment integrity.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q60</div>
Hydrogen recombiner power setting calculation (per S2.OP-SO.CAN-0001): <span class="hi-exam">Power Setting = Cp (pressure correction factor) x Reference Power</span>. Use the <span class="hi-exam">CURRENT containment pressure</span> and the <span class="hi-exam">PRIOR-to-LOCA containment temperature</span> to select Cp from Attachment 2. Round up to the <span class="hi-exam">next higher setting readable on the meter</span>. Example: 22 Hydrogen Recombiner at 5 psig and 90F pre-LOCA: Cp=1.24, Ref Power=42.63 KW → 52.86 KW → rounded to <span class="hi-exam">54 KW</span>. <span class="hi-trap">Use pre-LOCA temperature (not current), and current pressure (not peak) for Cp selection.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q63</div>
Fire Protection Containment Isolation (2FP147): on a valid fire detected inside containment (Zones 59 and 74 on 2RP5), <span class="hi-trap">2FP147 must be manually opened from the 2RP5 panel — it does NOT automatically open</span>. However, <span class="hi-exam">2FP147 WILL automatically close on a Phase A containment isolation signal</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q95</div>
FHB BLDG AIR D/P LO alarm during fuel moves: per S2.OP-AR.ZZ-0011, the <span class="hi-exam">FIRST action is to suspend movement of irradiated fuel assemblies</span>, THEN validate the alarm using the local indicator. If the alarm is invalid and will not clear, per S2.OP-IO.ZZ-0010, the <span class="hi-exam">local indicator MAY be used to continuously monitor FHB D/P</span> as a compensatory measure -- fuel moves may resume with continuous local monitoring. <span class="hi-trap">Trap: validating the alarm is performed AFTER suspending fuel moves, not before.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q100</div>
Fire protection: with both Salem fire pumps inoperable, per AB.FP-0001: <span class="hi-exam">open backup fire suppression water supply cross-tie valves from Hope Creek</span>. If cross-tie cannot be established within <span class="hi-exam">24 hours</span>, unit must be in <span class="hi-exam">Hot Standby within 6 hours</span>, then Hot Shutdown within the following 6 hours, then Cold Shutdown within the subsequent 24 hours.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A2</div>
IST containment ventilation valve surveillance review: <span class="hi-exam">2VC13 in REQUIRED ACTION RANGE</span> — declare inoperable, enter TS LCO 3.6.3 (4 hours to restore/isolate or begin shutdown). <span class="hi-exam">2VC12 in REQUIRED EVALUATION RANGE</span> — immediately retest or declare inoperable.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-h</div>
Containment pressure relief: upon <span class="hi-exam">OHA A-6 (RMS HI RAD OR TRBL) alarm on 2R41D</span> with automatic isolation defeated, must <span class="hi-exam">manually close PRESSURE RELIEF DAMPER, 2VC6, and 2VC5</span> to isolate the radiological release.
</div>

## Fire Protection

- Fire detection and alarm system throughout the plant
- Water supply (fire water pumps, sprinklers, standpipes)
- CO₂, Halon, and dry chemical suppression in specific areas
- Safe shutdown capability analysis per 10CFR50 Appendix R
- RCP oil collection system prevents fire spread from oil leaks
(UFSAR 9.5.1)

## Adverse Containment Conditions

### Definition
Adverse containment conditions exist when containment pressure is elevated above normal, typically >= 4 psig. This affects multiple EOP setpoints and action criteria because elevated containment pressure degrades instrument accuracy and changes thermal-hydraulic behavior.

### Adverse Containment Triggers for SMM

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q26</div>
Adverse containment conditions for the Subcooling Margin Monitor (SMM) are triggered by <span class="hi-exam">EITHER containment pressure > 4 psig OR containment radiation (R44A/B) > 1E05 R/HR</span> — only one condition is required. Pressure-driven adverse signal auto-resets when pressure drops below 3 psig. <span class="hi-trap">Radiation-driven adverse signal does NOT auto-reset — requires manual action even after radiation levels drop below the adverse threshold.</span>
</div>

### Impact on EOP Parameters
When adverse containment conditions exist, EOP setpoints for level instruments are adjusted upward to account for the effect of containment pressure on instrument readings:

| Parameter | Normal Containment | Adverse Containment |
|---|---|---|
| SG NR level for RCP start (EOP-FRCC-1) | >= 9% | >= 15% |

### Why It Matters
- SG narrow range level transmitters are affected by containment pressure because the reference leg is inside containment
- Higher containment pressure depresses the indicated level reading
- EOPs use higher setpoint values under adverse containment to ensure actual conditions support the intended action

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q84</div>
With containment pressure at <span class="hi-exam">5 psig</span> (adverse conditions), the required SG NR level for RCP start in EOP-FRCC-1 is <span class="hi-exam">>= 15%</span> instead of the normal 9%. <span class="hi-trap">Trap: using normal containment criteria when adverse conditions exist will overestimate the number of available RCPs.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A1</div>
EOP-FRCI-3 Attachment 1 hydrogen vent time calculation uses containment free volume at STP: <span class="hi-exam">V = 2.62E06 x Tfact</span> where Tfact = 492/Tabs. At 140F containment temp: Tabs = 600R, Tfact = 0.82, V = 2148400 ft3. Maximum allowable hydrogen concentration is <span class="hi-exam">3.0%</span> — vent volume limited to (3.0% - current H2%) x V / 100%.
</div>

## Connections

- Related tech specs: [[TS 3/4.6 — Containment]]
- Related EOPs: [[EOP-LOCA Series]], [[Critical Safety Function Status Trees]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-FRCI-3 — Response to Void in Reactor Vessel]]
- Related procedures: [[S2.OP-ST.CBV-0001 — Inservice Testing Containment Ventilation Valves]], [[S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation]]
- Related exam questions: [[2020 Q26]], [[2020 Q33]], [[2020 Q39]], [[2020 Q40]], [[2023 Q52]], [[2023 Q54]], [[2023 Q58]], [[2023 Q63]], [[2023 Q84]], [[2023 Q90]], [[2023 Q95]], [[2023 Q100]], [[2022 Q59]], [[2022 Q60]]
- Related JPMs: [[2023 JPM SRO-A2]], [[2023 JPM Sim-h]], [[2022 JPM RO-A1]], [[2022 JPM SRO-A3]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]]
