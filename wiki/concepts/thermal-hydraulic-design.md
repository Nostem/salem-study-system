---
title: Thermal-Hydraulic Design
category: concepts
status: draft
aliases:
  - thermal hydraulic design
  - T-H design
  - DNB
  - DNBR
---

# Thermal-Hydraulic Design

## Function

The thermal-hydraulic design ensures adequate heat transfer between the fuel cladding and reactor coolant so the core thermal output is not limited by fuel temperature or DNB considerations. The design takes into account local variations in fuel rod dimensions, power generation, flow distribution, and mixing. (UFSAR 4.4)

## Core Thermal Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Reactor Core Heat Output | 3459 MWt | UFSAR T4.4-1 |
| Reactor Core Heat Output, Unit 1 | 11806 x 10⁶ Btu/hr | UFSAR T4.4-1 |
| Reactor Core Heat Output, Unit 2 | 11844 x 10⁶ Btu/hr | UFSAR T4.4-1 |
| Heat Generated in Fuel | 97.4% | UFSAR T4.4-1 |
| Nominal System Pressure | 2250 psia | UFSAR T4.4-1 |
| Minimum Steady State Pressure (STDP) | 2218 psia | UFSAR T4.4-1 |

## Coolant Flow

| Parameter | Value | Source |
|-----------|-------|--------|
| Total Thermal Design Flow Rate | 125.3 x 10⁶ lb/hr | UFSAR T4.4-1 |
| Effective Flow Rate (Unit 1) | 116.3 x 10⁶ lb/hr | UFSAR T4.4-1 |
| Effective Flow Rate (Unit 2) | 115.7 x 10⁶ lb/hr | UFSAR T4.4-1 |
| Effective Flow Area (V5H, V+) | 51.3 ft² | UFSAR T4.4-1 |
| Effective Flow Area (RFA) | 51.1 ft² | UFSAR T4.4-1 |
| Average Velocity Along Fuel Rods (V5H, V+) | 14.1 ft/sec | UFSAR T4.4-1 |
| Average Velocity Along Fuel Rods (RFA) | 14.2 ft/sec | UFSAR T4.4-1 |
| Average Mass Velocity (V5H, V+) | 2.27 x 10⁶ lb/hr-ft² | UFSAR T4.4-1 |
| Average Mass Velocity (RFA) | 2.28 x 10⁶ lb/hr-ft² | UFSAR T4.4-1 |

## Coolant Temperatures

| Parameter | Value | Source |
|-----------|-------|--------|
| Nominal Inlet Temperature | 542.7°F | UFSAR T4.4-1 |
| Average Rise in Vessel | 70.4°F | UFSAR T4.4-1 |
| Average Rise in Core | 75.2°F | UFSAR T4.4-1 |
| Average in Core (Unit 1) | 582.4°F | UFSAR T4.4-1 |
| Average in Core (Unit 2) | 582.6°F | UFSAR T4.4-1 |
| Average in Vessel | 577.9°F | UFSAR T4.4-1 |

## Heat Transfer

| Parameter | Value | Source |
|-----------|-------|--------|
| Active Heat Transfer Surface Area | 59700 ft² | UFSAR T4.4-1 |
| Average Heat Flux | 192470 Btu/hr-ft² | UFSAR T4.4-1 |
| Maximum Heat Flux (normal operation) | 461930 Btu/hr-ft² | UFSAR T4.4-1 |
| Average Thermal Output | 5.52 kW/ft | UFSAR T4.4-1 |
| Maximum Thermal Output (normal operation) | 13.3 kW/ft | UFSAR T4.4-1 |
| Peak Linear Power (protection setpoints) | ≤22.4 kW/ft | UFSAR T4.4-1 |
| Peak Fuel Center Temp (max overpower trip) | <4700°F | UFSAR T4.4-1 |
| Heat Flux Hot Channel Factor (FQ) | 2.40 | UFSAR T4.4-1 |
| Fuel Clad Outer Surface Temp (hot spot, steady state) | ~660°F | UFSAR 4.4.2.2.5 |

## Core Pressure Drop

| Configuration | Pressure Drop (psi) | Source |
|--------------|-------------------|--------|
| Full core V5H, V+ | 22.2 | UFSAR T4.4-1 |
| Full core RFA with DFBN | 24.7 | UFSAR T4.4-1 |
| Full core RFA with SDFBN | 24.5 | UFSAR T4.4-1 |

Based on best estimate flow of 93300 gpm/loop (DFBN) or 94800 gpm/loop (SDFBN). (UFSAR T4.4-1)

## Departure from Nucleate Boiling (DNB)

### DNBR Design Limits

| Fuel Type | Cell Type | DNBR Design Limit | Correlation | Source |
|-----------|-----------|-------------------|-------------|--------|
| V5H, V+ | Typical | 1.24 (RTDP) | WRB-1 | UFSAR T4.4-1 |
| V5H, V+ | Thimble | 1.24 (RTDP) | WRB-1 | UFSAR T4.4-1 |
| RFA | Typical | 1.24 (RTDP) | WRB-2 | UFSAR T4.4-1 |
| RFA | Thimble | 1.22 (RTDP) | WRB-2 | UFSAR T4.4-1 |

DNBR correlation limit: **1.17** for both WRB-1 and WRB-2. (UFSAR T4.4-1)

### DNBR at Normal Conditions

| Fuel Type | Cell Type | DNBR | Source |
|-----------|-----------|------|--------|
| V5H, V+ | Typical | 2.44 | UFSAR T4.4-1 |
| V5H, V+ | Thimble | 2.32 | UFSAR T4.4-1 |
| RFA | Typical | 2.64 | UFSAR T4.4-1 |
| RFA | Thimble | 2.62 | UFSAR T4.4-1 |

### Design Basis

The design basis for DNB is that there is at least a 95% probability at the 95% confidence level that the limiting fuel rod in the core does not experience DNB during Condition I and II events. This is met by ensuring the minimum DNBR remains above the design limit DNBR. (UFSAR 4.4.1.1)

**RTDP (Revised Thermal Design Procedure):** Plant operating parameter uncertainties (pressure, temperature, power, flow) are statistically combined into the DNBR design limit, allowing safety analyses to use nominal values. (UFSAR 4.4.1.1)

**STDP (Standard Thermal Design Procedure):** Used when RTDP is not applicable. Minimum steady state pressure of 2218 psia is assumed. (UFSAR T4.4-1)

## Key Exam Concepts

- DNB = transition from nucleate boiling to film boiling on fuel rod surface; results in rapid temperature increase
- DNBR = ratio of heat flux required to cause DNB to actual local heat flux; must stay above design limit
- The fuel design basis is that centerline fuel melt does not occur during normal operation or AOOs
- Core average void fraction is less than 0.5% (due to local/statistical boiling only)
- RFA fuel has higher DNBR margins than V5H fuel (better mixing from IFM grids)

## Tech Spec LCOs

- **TS 3/4.2.1** — Axial Flux Difference (delta-I)
- **TS 3/4.2.2** — Heat Flux Hot Channel Factor (FQ)
- **TS 3/4.2.3** — Nuclear Enthalpy Rise Hot Channel Factor (F-delta-H)
- **TS 3/4.2.5** — DNB Parameters (pressurizer pressure, RCS Tavg, RCS flow)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q73</div>
Steam table subcooling calculation: at <span class="hi-exam">1805 psig (1820 psia), RCS Tsat = 623°F</span>. For 100°F subcooling margin, cold leg temperature must be ≤523°F. Since SGs are saturated and negligible delta-T exists across SG tubes, SG temperature must also be ~523°F. <span class="hi-exam">Saturation pressure at 523°F is approximately 820 psia (805 psig)</span>. <span class="hi-trap">Common trap: failing to convert psia to psig (off by ~15 psi).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q74</div>
Condensate depression effects: decreasing condensate depression (from 5°F to 2°F) means the condensate is <span class="hi-exam">closer to saturation temperature</span>. This produces <span class="hi-exam">less NPSH at the condensate pump suction (closer to cavitation)</span> because there is less subcooling to prevent flashing. However, because the feedwater is hotter, the SGs must add <span class="hi-exam">less sensible heat to reach saturation — improving steam cycle thermal efficiency</span>. <span class="hi-trap">Trap: lower condensate depression means higher efficiency but worse pump cavitation margin — effects go in opposite directions.</span>
</div>

## Connections

- Related systems: [[Reactor Core and Fuel]], [[Reactor Coolant System]]
- Related exam questions: [[2023 Q73]], [[2023 Q74]]
- Related exam: [[2023 NRC Written Exam]]
