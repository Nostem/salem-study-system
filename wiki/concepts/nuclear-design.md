---
title: Nuclear Design
category: concepts
status: draft
aliases:
  - nuclear design parameters
  - reactivity coefficients
---

# Nuclear Design

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

## Tech Spec LCOs

- **TS 3/4.1.1** — Shutdown Margin
- **TS 3/4.1.2** — Boration Systems ([[Chemical and Volume Control System]])
- **TS 3/4.1.3** — Movable Control Assemblies
- **TS 3/4.2.1** — Axial Flux Difference
- **TS 3/4.2.2** — Heat Flux Hot Channel Factor (FQ)
- **TS 3/4.2.3** — Nuclear Enthalpy Rise Hot Channel Factor (F-delta-H)

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

## Connections

- Related systems: [[Reactor Core and Fuel]], [[Chemical and Volume Control System]]
- Related exam questions: [[2023 Q70]], [[2023 Q71]], [[2023 Q75]]
- Related exam: [[2023 NRC Written Exam]]
