---
title: Rx Vessel & Internals
category: systems
status: draft
aliases:
  - reactor vessel
  - RPV
  - RV
  - reactor core
  - fuel assemblies
  - Reactor Core and Fuel
  - Reactor Vessel
  - Nuclear Design
  - nuclear design parameters
  - reactivity coefficients
  - fuel rods
---

# Rx Vessel & Internals

## Function

The reactor vessel contains the reactor core, core support structures, control rods, thermal shield, and other parts directly associated with the core. It provides the primary pressure boundary at the core region. (UFSAR 5.1, 5.4)

The reactor core generates thermal energy through controlled nuclear fission. It consists of 193 fuel assemblies arranged in a 17x17 rod array, cooled and moderated by light water at 2250 psia. Boron dissolved in the coolant serves as a neutron absorber for slow reactivity control. Rod Cluster Control Assemblies (RCCAs) provide fast reactivity control and shutdown capability. (UFSAR 4.1)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Design/Operating Pressure | 2485 / 2235 psig | UFSAR T5.2-3 |
| Hydrostatic Test Pressure | 3107 psig | UFSAR T5.2-3 |
| Design Temperature | 650°F | UFSAR T5.2-3 |
| Overall Height (bottom head OD to top of CRDM adapter) | 43 ft 10 in | UFSAR T5.2-3 |
| ID at Shell | 173 in | UFSAR T5.2-3 |
| ID of Flange | 172.5 in | UFSAR T5.2-3 |
| OD of Flange | 205 in | UFSAR T5.2-3 |
| Inlet Nozzle ID | 27½ in | UFSAR T5.2-3 |
| Outlet Nozzle ID | 29 in | UFSAR T5.2-3 |
| Vessel Beltline Thickness (min, base metal) | 8.5 in | UFSAR T5.2-3 |
| Lower Head Thickness (min, base metal) | 5⅜ in | UFSAR T5.2-3 |
| Closure Head Thickness | 7 in | UFSAR T5.2-3 |
| Clad Thickness (min) | 5/32 in | UFSAR T5.2-3 |
| Number of Closure Head Studs | 54 | UFSAR T5.2-3 |
| Diameter of Closure Head Studs | 7 in | UFSAR T5.2-3 |
| Minimum Insulation Thickness | 3 in | UFSAR T5.2-3 |

## Vessel Volumes

| Parameter | Value | Source |
|-----------|-------|--------|
| Total Water Volume Below Core | 1050 ft³ | UFSAR T5.2-3 |
| Water Volume in Active Core Region | 665 ft³ | UFSAR T5.2-3 |
| Total Water Volume to Top of Core | 2164 ft³ | UFSAR T5.2-3 |
| Total Water Volume to Nozzle Centerline | 2959 ft³ | UFSAR T5.2-3 |
| Total Vessel Water Volume (with core and internals) | 4945 ft³ | UFSAR T5.2-3 |

## Construction

- Cylindrical vessel with welded hemispherical bottom head
- Removable, flanged and gasketed, hemispherical upper head
- Inlet and outlet nozzles in horizontal plane just below vessel flange, above top of core
- Flow path: coolant enters inlet nozzles → flows down core barrel-vessel wall annulus → turns at bottom → flows up through core → exits outlet nozzles
- Head adaptors (tubular members) attached by partial penetration welds to closure head underside, with acme threads for CRDM assembly
- Seal arrangement: welded flexible canopy seal at upper end of head adaptors
- Bottom head contains penetration nozzles for in-core instrumentation (partial penetration welds)
- (UFSAR 5.1)

## Closure Head

- Replacement closure heads on both Unit 1 and Unit 2 (no CET column penetrations)
- Original heads had 5 CET column penetrations (cut and capped)
- Head vent tap adjacent to center penetration near top of dome
- (UFSAR 5.1)

## Vessel Surveillance Program

- Surveillance capsules monitor neutron fluence and material property changes
- Capsules contain Charpy impact, tensile, and compact tension specimens
- Program complies with 10CFR50 Appendices G and H, and ASTM E185
- (UFSAR 5.4.3, 5.2.4.4)

## Core Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Reactor Core Heat Output | 3459 MWt | UFSAR T4.1-1 |
| Reactor Core Heat Output | 11844 x 10⁶ Btu/hr | UFSAR T4.1-1 |
| Heat Generated in Fuel | 97.4% | UFSAR T4.1-1 |
| Nominal System Pressure | 2250 psia | UFSAR T4.1-1 |
| Equivalent Core Diameter | 132.7 in | UFSAR T4.3-1 |
| Core Average Active Fuel Height | 143.7 in | UFSAR T4.3-1 |
| Height-to-Diameter Ratio | 1.09 | UFSAR T4.3-1 |
| Total Cross Section Area | 96.06 ft² | UFSAR T4.3-1 |
| H₂O/U Molecular Ratio (cold) | 2.41 | UFSAR T4.3-1 |

## Reflector

| Location | Composition | Thickness | Source |
|----------|------------|-----------|--------|
| Top | Water plus steel | ~10 in | UFSAR T4.3-1 |
| Bottom | Water plus steel | ~10 in | UFSAR T4.3-1 |
| Side | Water plus steel | ~15 in | UFSAR T4.3-1 |

## Fuel Assemblies

| Parameter | Value | Source |
|-----------|-------|--------|
| Number of Fuel Assemblies | 193 | UFSAR T4.3-1 |
| Rod Array | 17 x 17 | UFSAR T4.3-1 |
| Rods per Assembly | 264 | UFSAR T4.3-1 |
| Rod Pitch | 0.496 in | UFSAR T4.3-1 |
| Overall Dimensions | 8.426 x 8.426 in | UFSAR T4.3-1 |
| Guide Thimbles per Assembly | 24 | UFSAR T4.3-1 |
| Loading Technique | 3 Region Non-uniform | UFSAR T4.1-1 |
| Design | RCC Canless | UFSAR T4.1-1 |

### Fuel Assembly Types

Salem cores may use any combination of: Vantage 5H, Vantage+, and Robust Fuel Assembly (RFA/RFA-2). The most significant difference is the use of ZIRLO cladding in Vantage+ and RFA designs. (UFSAR 4.1)

### Grid Assemblies

| Fuel Type | Grids | Source |
|-----------|-------|--------|
| V5H | 2 Inconel (top/bottom) + 6 Zircaloy-4 (mid) | UFSAR T4.3-1 |
| V+ | 2 Inconel (top/bottom) + 6 ZIRLO (mid) | UFSAR T4.3-1 |
| RFA | 2 Inconel (top/bottom) + 1 Inconel (protective) + 6 ZIRLO (mid) + 3 ZIRLO (IFM) | UFSAR T4.3-1 |

## Fuel Rods

| Parameter | Value | Source |
|-----------|-------|--------|
| Number in Core | 50952 | UFSAR T4.3-1 |
| Outside Diameter | 0.374 in | UFSAR T4.3-1 |
| Diametral Gap | 0.0065 in | UFSAR T4.3-1 |
| Clad Thickness | 0.0225 in | UFSAR T4.3-1 |
| Clad Material (V5H) | Zircaloy-4 | UFSAR T4.3-1 |
| Clad Material (V+, RFA) | ZIRLO | UFSAR T4.3-1 |

## Fuel Pellets

| Parameter | Value | Source |
|-----------|-------|--------|
| Material | UO₂ Sintered | UFSAR T4.3-1 |
| Density | 95.5% theoretical | UFSAR T4.3-1 |
| Diameter | 0.3225 in | UFSAR T4.3-1 |
| Length (STD) | 0.530 in | UFSAR T4.3-1 |
| Length (V5H, V+, RFA solid) | 0.387 in | UFSAR T4.3-1 |
| RFA Annular Pellet ID | 0.155 in | UFSAR T4.3-1 |
| Mass of UO₂ per Foot (V5H, V+) | 0.364 lb/ft | UFSAR T4.3-1 |
| Mass of UO₂ per Foot (RFA) | 0.355 lb/ft | UFSAR T4.3-1 |

All fuel rods are pressurized with helium during fabrication to reduce stresses/strains and increase fatigue life. RFA fuel rods use annular pellets at the top and bottom 6 inches for lower rod internal pressures. ZIRLO fuel rods may be oxide coated at the lower end for fretting protection. (UFSAR 4.1)

## Rod Cluster Control Assemblies (RCCAs)

| Parameter | Value | Source |
|-----------|-------|--------|
| Neutron Absorber | Ag-In-Cd (80-15-5%) | UFSAR T4.3-1 |
| Absorber Diameter | 0.381 in | UFSAR T4.3-1 |
| Absorber Density | 0.367 lb/in | UFSAR T4.3-1 |
| Cladding Material | Type 316L SS, Ionnitride surface | UFSAR T4.3-1 |
| Clad Thickness | 0.0185 in | UFSAR T4.3-1 |
| Number of Full-Length Clusters | 53 | UFSAR T4.3-1 |
| Absorber Rods per Cluster | 24 | UFSAR T4.3-1 |
| Full Length Assembly Weight (dry) | 149 lb | UFSAR T4.3-1 |

Each RCCA consists of individual absorber rods fastened to a common spider assembly. The control rod drive mechanisms are magnetic latch type — upon loss of power to the coils, the RCCA releases and falls by gravity to shut down the reactor. (UFSAR 4.1)

## Burnable Absorbers

| Type | Material | Key Parameter | Source |
|------|----------|--------------|--------|
| PYREX | Borosilicate glass | 12.5 w/o B₂O₃ | UFSAR T4.3-1 |
| WABA | Al₂O₃-B₄C compound | 0.7 fraction theoretical density | UFSAR T4.3-1 |
| IFBA | ZrB₂ coating | 1.570–2.355 mg B-10/in | UFSAR T4.3-1 |

## Core Structure

| Parameter | Value | Source |
|-----------|-------|--------|
| Core Barrel ID/OD | 148.0 / 152.5 in | UFSAR T4.1-1 |
| Thermal Shield ID/OD | 158.5 / 164.0 in | UFSAR T4.1-1 |

## Reactor Internals

Three main components:
1. **Lower core support structure** — includes entire core barrel and thermal shield
2. **Upper core support structure** — maintains alignment between fuel assemblies and CRDMs
3. **In-core instrumentation support structure** — provides guides for in-core instruments

Functions: support core, maintain fuel alignment, limit fuel assembly movement, direct coolant flow, provide gamma/neutron shielding, guide in-core instrumentation. (UFSAR 4.1)

## Core Average Linear Power and Hot Channel Factors

| Parameter | Value | Source |
|-----------|-------|--------|
| Core Average Linear Power | 5.52 kW/ft | UFSAR T4.3-2 |
| Total Heat Flux Hot Channel Factor (FQ) | 2.40 | UFSAR T4.3-2 |
| Nuclear Enthalpy Rise Hot Channel Factor (F-delta-H, RFA) | 1.65 | UFSAR T4.3-2 |
| Nuclear Enthalpy Rise Hot Channel Factor (F-delta-H, V5H) | 1.57 | UFSAR T4.3-2 |
| Maximum Heat Flux (normal operation) | 461930 Btu/hr-ft² | UFSAR T4.4-1 |
| Maximum Thermal Output (normal operation) | 13.3 kW/ft | UFSAR T4.4-1 |
| Peak Linear Power for Protection Setpoints | ≤22.4 kW/ft | UFSAR T4.1-1 |
| Peak Fuel Center Temp at Max Overpower Trip | <4700°F | UFSAR T4.1-1 |

## Reactivity Coefficients

| Parameter | Value | Source |
|-----------|-------|--------|
| Moderator Temperature Coefficient (operating) | 0 to -44 pcm/°F | UFSAR T4.3-2 |
| Boron Coefficient | -16 to -6 pcm/ppm | UFSAR T4.3-2 |
| Rodded Moderator Density Coefficient (operating) | ≤ +0.52 x 10⁵ pcm/gm/cc | UFSAR T4.3-2 |
| Doppler Coefficient | See UFSAR Figures 4.3-17/18 | UFSAR T4.3-2 |
| Moderator Void Coefficient (BOL, low temp) | 50 pcm/% void | UFSAR 4.3.2.3 |
| Moderator Void Coefficient (EOL, operating temp) | -250 pcm/% void | UFSAR 4.3.2.3 |

Note: 1 pcm = 10⁻⁵ delta-rho. The MTC becomes more negative with fuel burnup as boron concentration decreases. The power coefficient (combined moderator + Doppler) also becomes more negative with burnup. (UFSAR 4.3.2.3)

## Delayed Neutron Fraction

| Parameter | BOL | EOL | Source |
|-----------|-----|-----|--------|
| Beta-effective | 0.0075 | 0.0044 | UFSAR T4.3-2 |

## Control Rod Worths

| Parameter | Value | Source |
|-----------|-------|--------|
| Maximum Bank Worth | <2000 pcm | UFSAR T4.3-2 |
| Total Rod Worth (53 RCCAs, all in) BOL | 8.595 %delta-rho | UFSAR T4.3-3 |
| Total Rod Worth (53 RCCAs, all in) EOL | 8.00 %delta-rho | UFSAR T4.3-3 |
| N-1 Rod Worth (highest worth stuck out) BOL | 6.85 %delta-rho | UFSAR T4.3-3 |
| N-1 Rod Worth (highest worth stuck out) EOL | 6.30 %delta-rho | UFSAR T4.3-3 |
| Available with 10% uncertainty (N-1 - 10%) BOL | 6.17 %delta-rho | UFSAR T4.3-3 |
| Available with 10% uncertainty (N-1 - 10%) EOL | 5.67 %delta-rho | UFSAR T4.3-3 |

## Reactivity Requirements (Control Rod Rack-up)

| Reactivity Effect | BOL (%delta-rho) | EOL (%delta-rho) | Source |
|-------------------|-------------------|-------------------|--------|
| Fuel Temperature (Doppler) | 1.32 | 1.30 | UFSAR T4.3-3 |
| Moderator Temperature | 0.11 | 1.25 | UFSAR T4.3-3 |
| Void | 0.01 | 0.05 | UFSAR T4.3-3 |
| Redistribution | 0.50 | 0.85 | UFSAR T4.3-3 |
| Rod Insertion Allowance | 0.50 | 0.50 | UFSAR T4.3-3 |
| Rod Misalignment Relaxation | 0.12 | 0.12 | UFSAR T4.3-3 |
| **Total Control Required** | **2.56** | **4.07** | UFSAR T4.3-3 |
| **Shutdown Margin Available** | **3.61** | **1.60** | UFSAR T4.3-3 |

Design basis minimum shutdown margin: **1.3 %delta-rho**. The largest control requirement is at EOL when the MTC is most negative. (UFSAR T4.3-3)

## Boron Concentrations

| Condition | Boron (ppm) | Source |
|-----------|------------|--------|
| Refueling (ARI, k<0.95) | ≥2050 | UFSAR T4.3-2 |
| HZP, ARO (k=1.0) | 1700–1950 | UFSAR T4.3-2 |
| HFP, ARO, 0 MWD/MTU, No Xenon | 1400–1700 | UFSAR T4.3-2 |
| HFP, ARO, 150 MWD/MTU, Eq Xenon | 1000–1250 | UFSAR T4.3-2 |
| HFP, ARO, 1000 MWD/MTU, Eq Xenon | 1000–1250 | UFSAR T4.3-2 |

Note: Values are typical reload values. Current cycle values are in the appropriate NDR or COLR. (UFSAR T4.3-2)

## Maximum Core Reactivity

Maximum core reactivity (cold, zero power, BOC): **1.200 keff** (typical reload). (UFSAR T4.3-1)

## Reactivity Control Methods

1. **Chemical poison (boron):** Dissolved in coolant, controlled by CVCS. Compensates for slow reactivity changes including fuel burnup, xenon/samarium transients, and moderator temperature changes.
2. **Rod Cluster Control Assemblies:** 53 full-length clusters of Ag-In-Cd rods. Provide fast reactivity control and shutdown capability. Magnetic latch CRDMs release on loss of power.
3. **Burnable absorbers:** PYREX, WABA, or IFBA rods placed in guide thimble positions to hold down excess BOL reactivity without increasing soluble boron beyond limits.
(UFSAR 4.3.2.5)

## Key Exam Concepts

- The core is designed so that the highest worth stuck RCCA still allows adequate shutdown margin (≥1.3 %delta-rho)
- MTC is required to be negative at power (TS limit) — verified by physics testing
- FQ and F-delta-H limits are given in the COLR, not fixed in Tech Specs
- The power coefficient becomes more negative with burnup (larger power defect at EOL)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q71</div>
Boron mixing during natural circulation vs forced circulation: <span class="hi-exam">more time is required</span> to achieve complete mixing in the RCS during natural circulation (lower flow rate without RCPs). However, once mixing is complete, a 1 ppm increase in boron concentration produces the <span class="hi-exam">same change in reactivity</span> regardless of whether the RCS is in forced or natural circulation. The reactivity effect of boron depends on concentration, not flow rate.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q70</div>
Xenon-135 following a reactor trip from 100% power: Xe-135 concentration peaks at approximately <span class="hi-exam">4700 pcm</span> at about <span class="hi-exam">8-9 hours</span> after the trip. After the peak, Xe-135 concentration decreases due to decay of I-135 and Xe-135. <span class="hi-exam">Decreasing Xe-135 inserts positive reactivity</span> (Xe-135 is a fission product poison). At 12 hours post-trip with reactor at 5% power, Xe-135 is lowering — operator must add <span class="hi-exam">negative reactivity</span> to maintain power and T-avg stable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q75</div>
Axial peaking factor increase: with the core axial power distribution already peaked below the midplane, <span class="hi-exam">reducing RCS boron concentration (diluting) increases the maximum axial peaking factor</span>. Dilution inserts positive reactivity, raising Tavg and hot leg temperature — hotter water in upper core regions is less dense (less moderation), shifting flux further toward the already flux-dense bottom half. <span class="hi-trap">Withdrawing control rods 4 steps reduces peaking (less flux depression). A dropped rod at the core edge affects radial peaking, not axial. A turbine load reduction lowers delta-T, pushing flux upward, also reducing axial peaking.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.9]]** — RCS Specific Activity
- Pressure-temperature limits governed by Appendix G analysis
- **TS 3/4.1** — [[TS 3/4.1 — Reactivity Control]] (shutdown margin, rod operability, rod insertion limits)
- **TS 3/4.2** — [[TS 3/4.2 — Power Distribution]] (FQ, F-delta-H, axial flux difference)
- **TS 3/4.1.1** — Shutdown Margin
- **TS 3/4.1.2** — Boration Systems ([[CVCS]])
- **TS 3/4.1.3** — Movable Control Assemblies
- **TS 3/4.2.1** — Axial Flux Difference
- **TS 3/4.2.2** — Heat Flux Hot Channel Factor (FQ)
- **TS 3/4.2.3** — Nuclear Enthalpy Rise Hot Channel Factor (F-delta-H)

## Connections

- Related concepts: [[Reactivity and Reactor Control]]
- Related exam questions: [[2023 Q70]], [[2023 Q71]], [[2023 Q75]]
- Related exam: [[2023 NRC Written Exam]]
