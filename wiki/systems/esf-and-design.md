---
title: ESF & Design
category: systems
status: draft
aliases:
  - engineered safety features
  - Chapter 15
  - accident analysis
  - LOCA
  - transient analysis
---

# ESF & Design

## Function & Design Basis

Chapter 15 of the UFSAR presents the analysis of plant responses to postulated accidents and transients. The analyses demonstrate that the plant design — including the reactor trip system and engineered safeguards — meets all applicable safety criteria with adequate margin (UFSAR §15.1). Since 1970 the American Nuclear Society (ANS) classification of plant conditions has been used, dividing plant conditions into four categories in accordance with anticipated frequency of occurrence and potential radiological consequences to the public: Condition I (Normal Operation and Operational Transients), Condition II (Faults of Moderate Frequency), Condition III (Infrequent Faults), and Condition IV (Limiting Faults) (UFSAR §15.1). The basic principle applied is that the most probable occurrences should yield the least radiological risk to the public, and those extreme situations having the potential for the greatest risk should be those least likely to occur; reactor trip and engineered safeguards functioning is assumed to the extent allowed by considerations such as the single failure criterion (UFSAR §15.1).

### Event Classification

| Condition | Description | Expected Frequency | Consequence Limit | Source |
|-----------|------------|-------------------|-------------------|--------|
| I | Normal Operation and Operational Transients | Frequently occurring | No fuel damage; within normal operating limits | UFSAR §15.1 |
| II | Faults of Moderate Frequency (AOOs) | Once per year to once per plant lifetime | No fuel rod failure; RCS pressure below 110% of design | UFSAR §15.2 |
| III | Infrequent Faults | Once per plant lifetime to once per 100 plants | Small fraction of fuel failure; offsite doses within 10CFR50.67 | UFSAR §15.3 |
| IV | Limiting Faults | Not expected but postulated | Dose consequences within 10CFR50.67 limits | UFSAR §15.4 |

Condition I occurrences are accommodated with margin between any plant parameter and the value that would require automatic or manual protective action; because they occur frequently they are taken as the conservative initial conditions for the analysis of the fault conditions (UFSAR §15.1). Condition I operation is bounded by the plant operating modes and the operational transients in the table below (UFSAR §15.1).

| Mode | Reactivity Condition, K_eff | Thermal Power* | Average Coolant Temperature | Source |
|------|------|------|------|--------|
| Power Operation | ≥0.99 | ≥5% | ≥350°F | UFSAR §15.1 |
| Startup | ≥0.99 | ≤5% | ≥350°F | UFSAR §15.1 |
| Hot Standby | <0.99 | 0 | ≥350°F | UFSAR §15.1 |
| Hot Shutdown | <0.99 | 0 | 200°F < T_avg < 350°F | UFSAR §15.1 |
| Cold Shutdown | <0.99 | 0 | ≤200°F | UFSAR §15.1 |
| Refueling** | ≤0.95 | 0 | ≤140°F | UFSAR §15.1 |

\* Excluding decay heat. \*\* Vessel head closure bolts less than fully tensioned or head removed (UFSAR §15.1).

Bounding Condition I operational transients include plant heatup and cooldown up to <span class="hi">100°F/hour</span> for the RCS and <span class="hi">200°F/hour</span> for the pressurizer, step load changes up to <span class="hi">±10 percent</span>, ramp load changes up to <span class="hi">5 percent/minute</span>, and load rejection up to and including the design load rejection transient (UFSAR §15.1).

The design-basis acceptance criteria differ by condition. Condition II faults are accommodated with, at most, a reactor trip and result in no fuel rod failures and no RCS overpressure beyond 110% of design. Condition III and IV faults are limited to a small fraction (Condition III) or larger but bounded (Condition IV) fuel failure, with offsite and control-room doses held within the 10 CFR 50.67 / GDC-19 limits (UFSAR §15.1, §15.4). For the limiting-fault LOCA, the ECCS is designed to meet the acceptance criteria of 10 CFR 50.46 / Appendix K even with the most severe single active failure (UFSAR §15.4.1.3.1).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q43</div>
ECCS is the system the ESF Actuation System (ESFAS) actuates. <span class="hi-exam">10 CFR 50.46(b)</span> (copied into Salem FSAR §15.4.1.1) gives the LOCA acceptance criteria that an ESFAS failure to initiate ECCS could violate: <span class="hi-exam">peak cladding temperature &lt; 2200°F; cladding oxidation ≤ 17% of total clad thickness; hydrogen generation ≤ 1% of the hypothetical all-Zr-reacted amount; coolable geometry; long-term cooling</span>. The tested answer is that <span class="hi-exam">cladding oxidation may exceed 17%</span> of total clad thickness. <span class="hi-trap">PCT criterion is 2200°F (not 1800°F); the H2 criterion is 1% (not 10%); vessel level lowering below the top of active fuel during LBLOCA blowdown is an analyzed condition, not a 50.46 criterion that fails.</span>
</div>

### Key Analysis Assumptions

The licensed core thermal power is <span class="hi">3459 MWt</span> per unit; post-accident dose analyses generally assume the more conservative <span class="hi">3632 MWt</span> (105% of 3459 MWt) (UFSAR §15.1.2.1). Events not analyzed with the Revised Thermal Design Procedure (RTDP) add maximum steady-state errors to rated values: <span class="hi">±2 percent</span> calorimetric error on core power, <span class="hi">±5°F</span> on average RCS temperature, and <span class="hi">±50 psi</span> on pressurizer pressure (UFSAR §15.1.2.2). The non-RTDP analyses were explicitly performed assuming an NSSS power of <span class="hi">3423 MWt</span> (core power <span class="hi">3411 MWt</span>) with ±2% calorimetric uncertainty, equivalent to ±0.6% uncertainty at an NSSS power of 3471 MWt (core power 3459 MWt) (UFSAR §15.1.2.2).

- **Initial conditions:** Nominal values with uncertainties applied per RTDP or the steady-state-error method above; initial core power, RCS temperature and pressurizer pressure are selected to minimize initial DNBR unless otherwise stated (UFSAR §15.1.2.2).
- **Reactor trip:** The coil release of the rods is conservatively assumed to be <span class="hi">0.15 second</span>; limiting trip setpoints and channel-error time delays are from Table 15.1-3, and the overtemperature ΔT setpoints were calculated assuming approximately <span class="hi">15 percent</span> margin in the critical heat flux calculation (UFSAR §15.1.3).
- **Rod insertion:** RCCA insertion time from beginning of motion to dashpot entry (≈85% of travel) is conservatively assumed to be <span class="hi">2.7 seconds</span>, and a total negative reactivity insertion following trip of <span class="hi">4 percent Δk</span> is assumed (most reactive rod stuck out), using the bottom-skewed reactivity-versus-time curve (UFSAR §15.1.3, §15.1.5).
- **Single failure:** The most limiting single active (or passive) failure is assumed in each analysis (UFSAR §15.1).
- **Loss of offsite power:** Assumed concurrent with the LOCA and other events where limiting (e.g., a 32-second maximum SI delay is assumed for the large-break LOCA to account for diesel-generator startup and bus loading) (UFSAR §15.4.1.4).
- **Decay heat:** ANS-1979 residual decay heat model; the fission-product decay contribution uses Shure's curve increased by <span class="hi">20 percent</span> for conservatism, and the U-238 capture-product (U-239/Np-239) contribution is increased by 10 percent (UFSAR §15.1.8.1, §15.1.8.2).
- **Computer codes:** Transient analyses use the Westinghouse code suite, principally FACTRAN (fuel-rod transient temperature), LOFTRAN (system transient), PHOENIX-P/ANC/TWINKLE/PARAGON (nuclear), and THINC (DNB), with SATAN-VI/WREFLOOD/BASH/LOCBART/COCO for the large-break LOCA (UFSAR §15.1.9, §15.4.1.3.2).

## Key Components

The Chapter 15 accident categories — the analyzed events that the ESF and protection systems are designed against — are organized below by ANS condition, following the §15.2–15.4 structure (UFSAR §15.1.6).

### Condition II Events (Faults of Moderate Frequency)

| Event | Key Protection | Source |
|-------|---------------|--------|
| Uncontrolled RCCA Bank Withdrawal from Subcritical | Power range high flux trip (low setpoint), OT Delta-T | UFSAR §15.2.1 |
| Uncontrolled RCCA Bank Withdrawal at Power | OT Delta-T, OP Delta-T, high flux trip | UFSAR §15.2.2 |
| RCCA Misalignment (dropped rod) | Automatic rod control response, power range negative flux rate (removed) | UFSAR §15.2.3 |
| Uncontrolled Boron Dilution | Source range flux doubling (shutdown), OT Delta-T (at power) | UFSAR §15.2.4 |
| Partial Loss of Forced Reactor Coolant Flow | Low flow trip (2/3 per loop) | UFSAR §15.2.5 |
| Startup of Inactive RCS Loop | Administrative prohibition in Modes 1-2 | UFSAR §15.2.6 |
| Loss of External Electrical Load | High PZR pressure trip, steam dump | UFSAR §15.2.7 |
| Loss of Normal Feedwater | Lo-Lo SG level trip, AFW actuation | UFSAR §15.2.8 |
| Loss of Offsite Power | RCP coastdown, AFW on UV signal, diesel generators | UFSAR §15.2.9 |
| Excessive Heat Removal (FW malfunction) | High flux trip, OT Delta-T | UFSAR §15.2.10 |
| Excessive Load Increase | Self-limiting with negative MTC; rod control response | UFSAR §15.2.11 |
| Accidental Depressurization of the RCS | OT Delta-T reactor trip | UFSAR §15.2.12 |
| Accidental Depressurization of Main Steam System | SI on low steamline pressure | UFSAR §15.2.13 |
| Spurious Operation of SIS at Power | PZR level/pressure control; operator action (PORV opened before water-solid) | UFSAR §15.2.14 |

For the spurious SIS actuation, the analysis shows the pressurizer becomes water-solid at <span class="hi">578.5 seconds</span> and the PORV must be open by <span class="hi">615.8 seconds</span> to prevent water relief through the pressurizer safety valves, with manual termination completed by <span class="hi">≤2700 seconds</span> (UFSAR Table 15.2-1). For Condition II events DNBR does not decrease below its initial value where so noted, and where it does the minimum DNBR remains above the safety-analysis limit (UFSAR Table 15.2-1).

### Condition III Events (Infrequent Faults)

| Event | Key Protection | Source |
|-------|---------------|--------|
| Loss of Reactor Coolant (Small Break LOCA) | SI on low PZR pressure or high containment pressure | UFSAR §15.3.1 |
| Minor Secondary System Pipe Break | SI, steamline isolation | UFSAR §15.3.2 |
| Inadvertent Loading of a Fuel Assembly into an Improper Position | In-core monitoring, startup physics testing | UFSAR §15.3.3 |
| Complete Loss of Forced Reactor Coolant Flow | Low flow trip, RCP flywheel coastdown | UFSAR §15.3.4 |
| Single RCCA Withdrawal at Full Power | OT Delta-T, OP Delta-T | UFSAR §15.3.5 |
| Accidental Release of Waste Gases | VCT / gas decay tank rupture analysis | UFSAR §15.3.6 |

### Condition IV Events (Limiting Faults)

| Event | Key Protection | Source |
|-------|---------------|--------|
| Major Rupture of RCS (Large Break LOCA) | SI signal, ECCS injection (accumulators, SI pumps, RHR pumps) | UFSAR §15.4.1 |
| Major Secondary System Pipe Break (Steamline Break) | SI on steamline signals, MSIV closure, AFW | UFSAR §15.4.2 |
| Major Rupture of a Main Feedwater Line | Lo-Lo SG level trip, SI, AFW | UFSAR §15.4.3 |
| Steam Generator Tube Rupture (SGTR) | SI on low PZR pressure, operator identification and isolation | UFSAR §15.4.4 |
| Single RCP Locked Rotor / Shaft Break | Low flow trip, RCP breaker trip | UFSAR §15.4.5 |
| Fuel Handling Accident | Fuel building ventilation, HEPA/charcoal filters | UFSAR §15.4.6 |
| Rupture of a CRDM Housing (Rod Ejection) | High flux trip (high and low setpoints), OT Delta-T | UFSAR §15.4.7 |
| Containment Pressure Analysis (LOCA / MSLB) | Containment spray, fan coolers, containment isolation | UFSAR §15.4.8 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q42</div>
ESFAS valve auto-actions on a LOCA driving containment pressure &gt;15 psig (MODE 2 startup): <span class="hi-exam">24MS167 (Main Steamline Isolation Valve) receives a SHUT signal from the Hi-Hi containment pressure (15 psig) MSLI signal</span> — indicating OPEN means it failed to reposition. <span class="hi-trap">21SW122 (CC HX SW inlet) closes only on a MODE III SEC initiation (SI plus Blackout); 22CC3 (21-23 header X-over) has NO automatic action; 23BF22 (SG FW stop check) receives NO shut from the MSLI signal.</span> See [[Main Steam]], [[RPS/SSPS]].
</div>

## Operation

The analysis approach for each fault establishes a conservative set of initial conditions, credits only safety-grade trip and ESF functions (with the most limiting single failure), and demonstrates that the applicable acceptance criterion is met with margin (UFSAR §15.1, §15.4). The key results below show the analyzed events remain within their criteria.

### Large Break LOCA (§15.4.1)

The large-break LOCA was analyzed with the 1981 Evaluation Model using BASH methodology (SATAN-VI, WREFLOOD, BASH, LOCBART, COCO codes) at 102 percent of 3411 MWt, satisfying 10 CFR 50 Appendix K (UFSAR §15.4.1.3.2, §15.4.1.4). The limiting break is the double-ended cold leg guillotine (DECLG) with a Moody discharge coefficient <span class="hi">C_D = 0.4</span> and minimum safeguards SI (UFSAR §15.4.1.5). Results for the limiting case are a peak cladding temperature of <span class="val-trip">2020°F</span> (well below the 2200°F limit), a maximum local Zr/H₂O reaction of <span class="hi">6.3 percent</span> (below the 17% limit), and a total Zr/H₂O reaction of <span class="hi">&lt;1.0 percent</span> (below the 1% limit) — all within the 10 CFR 50.46 acceptance criteria (UFSAR Table 15.4-2). The resulting LOCA offsite/control-room doses are <span class="hi">4.33 rem TEDE</span> (Control Room), <span class="hi">6.86 rem TEDE</span> (EAB), and <span class="hi">1.4 rem TEDE</span> (LPZ), versus allowables of 5.0 / 25 / 25 rem TEDE (UFSAR Table 15.4-5C).

### Single RCP Locked Rotor / Shaft Break (§15.4.5)

The limiting locked-rotor/shaft-break transient (four loops operating initially) yields a maximum RCS pressure of <span class="val-trip">2627 psia</span>, a maximum clad average temperature at the core hot spot of <span class="hi">2031°F</span>, an amount of Zr-H₂O at the core hot spot of <span class="hi">0.76 percent by weight</span>, and a maximum number of fuel rods-in-DNB of <span class="hi">&lt;5 percent</span> of the most limiting fuel assembly (UFSAR Table 15.4-6). Doses are 0.08 / 0.22 / 0.02 rem TEDE (Unit 1, CR/EAB/LPZ) versus allowables of 5.0 / 2.5 / 2.5 rem (UFSAR Table 15.4-6B).

### Secondary Breaks, SGTR, and Rod Ejection Doses (§15.4.2–15.4.7)

The main steam pipe rupture, steam generator tube rupture, and rod ejection dose consequences are all within their 10 CFR 50.67 limits. For the SGTR, the limiting Unit 1 concurrent-iodine-spike case is 0.40 / 2.16 / 0.21 rem TEDE (CR/EAB/LPZ) against allowables of 5.0 / 2.5 / 2.5 rem (UFSAR Table 15.4-7C). The main steamline break concurrent-spike case is 1.58 / 0.72 / 0.15 rem TEDE (Unit 1) against the same allowables (UFSAR Table 15.4-7A). The rod ejection dose is 0.84 / 0.47 / 0.13 rem TEDE (Unit 1) against allowables of 5.0 / 6.3 / 6.3 rem (UFSAR Table 15.4-12B).

### Containment Pressure Analysis (§15.4.8)

The containment integrity analyses for the LOCA and main steamline break demonstrate the peak containment pressure stays below the containment design pressure of <span class="hi">47 psig</span>; the containment free volume is <span class="hi">2620000 ft³</span> and the analyses assume a service water temperature of 93°F (UFSAR §15.4.8.2.2). Mitigation is provided by containment spray, the containment fan cooler units, and containment isolation (UFSAR §15.4.8).

## ATWS (Anticipated Transients Without Scram)

Analysis per 10CFR50.62 demonstrates that AMSAC (backup turbine trip and AFW actuation) prevents unacceptable consequences if the RPS fails to trip the reactor. Key mitigation: diverse AMSAC system trips turbine and starts AFW on low SG level independent of the RPS (UFSAR §15.5).

## Dose Consequence Limits

| Criterion | Limit | Source |
|-----------|-------|--------|
| Exclusion area boundary (2 hr) | 25 rem TEDE | 10CFR50.67 |
| Low population zone (duration) | 25 rem TEDE | 10CFR50.67 |
| Control room (30 days) | 5 rem TEDE | 10CFR50.67 / GDC-19 |

## Tech Spec LCOs

Accident analyses provide the bases for many Tech Spec limits including:
- Trip setpoints and response times ([[TS 3/4.3 — Instrumentation]])
- Shutdown margin requirements ([[TS 3/4.1.1 — Boration Control]])
- Power distribution limits ([[TS 3/4.2 — Power Distribution]])
- ECCS operability ([[TS 3/4.5 — ECCS]])
- Containment integrity ([[TS 3/4.6 — Containment]])

## Connections

- Related systems: [[ECCS]], [[RCS]], [[RPS/SSPS]], [[Containment]], [[AFW]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA Series]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]], [[Critical Safety Function Status Trees]]
- Related exam questions: [[2014 Q43]], [[2012 Q42]]
- Related exam: [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
