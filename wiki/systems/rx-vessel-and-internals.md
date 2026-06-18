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
  - nuclear design parameters
  - reactivity coefficients
  - fuel rods
---

# Rx Vessel & Internals

## Function & Design Basis

The reactor vessel contains the reactor core, core support structures, control rods, thermal shield, and other parts directly associated with the core. It provides the primary pressure boundary at the core region. (UFSAR 5.1, 5.4)

The reactor core generates thermal energy through controlled nuclear fission. It consists of 193 fuel assemblies arranged in a 17x17 rod array, cooled and moderated by light water at 2250 psia. Boron dissolved in the coolant serves as a neutron absorber for slow reactivity control. Rod Cluster Control Assemblies (RCCAs) provide fast reactivity control and shutdown capability. (UFSAR 4.1)

### Reactor Vessel Internals Design Bases

The design bases for the mechanical design of the reactor vessel internals components are (UFSAR §4.2.2.1):

1. The reactor internals, in conjunction with the fuel assemblies, direct reactor coolant through the core to achieve acceptable flow distribution and to restrict bypass flow so that heat transfer performance requirements are met for all modes of operation; required cooling for the pressure vessel head is provided so that temperature differences between the vessel flange and head do not result in flange leakage during reactor operation. (UFSAR §4.2.2.1)
2. In addition to neutron shielding provided by the reactor coolant, a separate thermal shield limits the exposure of the pressure vessel to maintain the required ductility of the material for all modes of operation. (UFSAR §4.2.2.1)
3. Provisions are made for installing in-core instrumentation and vessel material test specimens required for a pressure vessel irradiation surveillance program. (UFSAR §4.2.2.1)
4. The core internals withstand mechanical loads arising from operating basis earthquake (OBE), design basis earthquake (DBE), and pipe ruptures. (UFSAR §4.2.2.1)
5. The reactor has mechanical provisions sufficient to adequately support the core and internals and to assure the core remains intact with acceptable heat transfer geometry following transients arising from abnormal operating conditions. (UFSAR §4.2.2.1)
6. Following the design basis accident (DBA), the plant can be shut down and cooled in an orderly fashion so that fuel cladding temperature is kept within specified limits — i.e., deformation of certain critical reactor internals is kept sufficiently small to allow core cooling. (UFSAR §4.2.2.1)

Functional limitations for the core structures during the DBA are given in <span class="hi">Table 4.2-1</span>. To ensure column loading of rod cluster control guide tubes, upper core plate deflection is limited to the value shown in that table. (UFSAR §4.2.2.1, UFSAR Table 4.2-1)

### Vessel Design Parameters

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

### Vessel Volumes

| Parameter | Value | Source |
|-----------|-------|--------|
| Total Water Volume Below Core | 1050 ft³ | UFSAR T5.2-3 |
| Water Volume in Active Core Region | 665 ft³ | UFSAR T5.2-3 |
| Total Water Volume to Top of Core | 2164 ft³ | UFSAR T5.2-3 |
| Total Water Volume to Nozzle Centerline | 2959 ft³ | UFSAR T5.2-3 |
| Total Vessel Water Volume (with core and internals) | 4945 ft³ | UFSAR T5.2-3 |

### Vessel Construction

- Cylindrical vessel with welded hemispherical bottom head
- Removable, flanged and gasketed, hemispherical upper head
- Inlet and outlet nozzles in horizontal plane just below vessel flange, above top of core
- Flow path: coolant enters inlet nozzles → flows down core barrel-vessel wall annulus → turns at bottom → flows up through core → exits outlet nozzles
- Head adaptors (tubular members) attached by partial penetration welds to closure head underside, with acme threads for CRDM assembly
- Seal arrangement: welded flexible canopy seal at upper end of head adaptors
- Bottom head contains penetration nozzles for in-core instrumentation (partial penetration welds)
- (UFSAR 5.1)

### Closure Head

- Replacement closure heads on both Unit 1 and Unit 2 (no CET column penetrations)
- Original heads had 5 CET column penetrations (cut and capped)
- Head vent tap adjacent to center penetration near top of dome
- (UFSAR 5.1)

### Vessel Surveillance Program

- Surveillance capsules monitor neutron fluence and material property changes
- Capsules contain Charpy impact, tensile, and compact tension specimens
- Program complies with 10CFR50 Appendices G and H, and ASTM E185
- (UFSAR 5.4.3, 5.2.4.4)

## Key Components

### Reactor Internals — Overview

The components of the reactor internals consist of three parts (UFSAR §4.2.2.2):

1. **Lower core support structure** — including the entire core barrel and thermal shield
2. **Upper core support structure** — maintains alignment between fuel assemblies and CRDMs
3. **In-core instrumentation support structure** — provides guides for in-core instruments

The reactor internals support the core, maintain fuel alignment, limit fuel assembly movement, maintain alignment between fuel assemblies and control rod drive mechanisms, direct coolant flow past the fuel elements, direct coolant flow to the pressure vessel head, provide gamma and neutron shielding, and guide the in-core instrumentation. (UFSAR §4.2.2.2)

All major material for the reactor internals is <span class="hi">Type 304 stainless steel</span>. Parts not fabricated from Type 304 include bolts and dowel pins (Type 316 stainless steel) and the radial support clevis inserts and bolts (Inconel). The only stainless steel materials in the core support structures with yield strengths greater than 90000 pounds are the 403 series used for holddown springs. Material use is compatible with the reactor coolant per the 1971 ASME Boiler and Pressure Vessel Code, Case Number 1337. All reactor internals are removable from the vessel for inspection of the internals and of the vessel internal surface. (UFSAR §4.2.2.2)

### Lower Core Support Structure

The major containment and support member of the reactor internals is the lower core support structure (UFSAR Figure 4.2-8). It consists of the <span class="hi">core barrel, core baffle, lower core plate and support columns, thermal shield, and the core support</span> (welded to the core barrel); all major material is Type 304 stainless steel. The structure is supported at its upper flange from a ledge in the reactor vessel, and its lower end is restrained from transverse motion by a radial support system attached to the vessel wall. Within the core barrel are an axial baffle and a lower core plate, both attached to the core barrel wall, forming the enclosure periphery of the core. (UFSAR §4.2.2.2)

- **Lower core plate** — positioned at the bottom level of the core below the baffle plates; provides support and orientation for the fuel assemblies; flow distribution holes for each fuel assembly are machined through it, and two fuel assembly locating pins per assembly are inserted into it. Columns between this plate and the core support provide stiffness and transmit core load to the core support. (UFSAR §4.2.2.2)
- **Thermal shield** — one-piece; fixed to the core barrel at the top by rigid bolted connections; the bottom is connected to the core barrel by axial flexures that allow differential axial growth of the shield/core barrel while restricting radial/horizontal movement of the bottom. Rectangular specimen guides (welded to the shield) hold material samples for irradiation during operation, retained by preloaded spring devices top and bottom. (UFSAR §4.2.2.2)
- **Radial support system** — "key" and "keyway" joints to the reactor vessel wall. At six equally spaced points around the circumference, an Inconel clevis block is welded to the vessel inner diameter; an Inconel insert block with a "keyway" geometry is bolted to each clevis block, and an opposing "key" is welded to the lower core support. The internals behave as a beam fixed at the top and simply supported at the bottom; radial and axial expansion are accommodated while transverse movement of the core barrel is restricted. (UFSAR §4.2.2.2)
- **Secondary (energy-absorbing) core support** — in the event of an abnormal downward vertical displacement following a hypothetical failure of the normal core barrel supports, energy-absorbing devices mounted on a contoured base plate limit core displacement after contacting the vessel bottom head; there are four supports in each reactor. (UFSAR §4.2.2.2, UFSAR §4.2.2.4)

### Upper Core Support Assembly

The upper core support assembly (UFSAR Figures 4.2-10 and 4.2-12) consists of the upper support assembly and the upper core plate, between which are support columns and guide tube assemblies. Support columns establish the spacing between the upper support assembly and upper core plate and transmit mechanical loadings between them. Guide tube assemblies shield and guide the control rod drive shafts and control rods; they are fastened to the upper support and guided by pins in the upper core plate. The assembly is removed as a unit during refueling and is positioned by slots in the upper core plate that engage flat-sided upper core plate alignment pins welded into the core barrel. Fuel assembly locating pins protrude from the bottom of the upper core plate to engage the fuel assemblies. The assembly is restrained from axial movement by a large circumferential spring between the upper barrel flange and the upper core support assembly, compressed when the reactor vessel head is installed. (UFSAR §4.2.2.2)

### In-Core Instrumentation Support Structure

All bottom-mounted in-core instrumentation support structures convey and support flux thimbles penetrating the vessel through the bottom (the Basic Flux-Mapping System is shown on UFSAR Figure 7.7-6). Flux thimbles enter through the bottom penetration nozzles; conduits extend from the bottom of the vessel down through the concrete shield area and up to a thimble seal line. Minimum bend radii are about 144 inches, and the trailing ends of the thimbles are extracted approximately 15 feet during refueling to avoid interference within the core. The thimbles are closed at the leading ends and serve as the pressure barrier between the reactor pressurized water and the containment atmosphere. During normal operation the retractable thimbles are stationary and move only during refueling or maintenance. (UFSAR §4.2.2.2)

The original top-entry core exit thermocouple (CET) system support structures have been removed as part of the conversion to all bottom-mounted in-core instrumentation: the five thermocouple columns on the upper support plate were removed and their reactor vessel head penetrations cut and capped, while the support bases for the columns were left on the upper support plate so as not to create flow openings across it. (UFSAR §4.2.2.2)

### Core Structure

| Parameter | Value | Source |
|-----------|-------|--------|
| Core Barrel ID/OD | 148.0 / 152.5 in | UFSAR T4.1-1 |
| Thermal Shield ID/OD | 158.5 / 164.0 in | UFSAR T4.1-1 |

### Core Parameters

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

### Reflector

| Location | Composition | Thickness | Source |
|----------|------------|-----------|--------|
| Top | Water plus steel | ~10 in | UFSAR T4.3-1 |
| Bottom | Water plus steel | ~10 in | UFSAR T4.3-1 |
| Side | Water plus steel | ~15 in | UFSAR T4.3-1 |

### Fuel Assemblies

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

#### Fuel Assembly Types

Salem cores may use any combination of: Vantage 5H, Vantage+, and Robust Fuel Assembly (RFA/RFA-2). The most significant difference is the use of ZIRLO cladding in Vantage+ and RFA designs. (UFSAR 4.1)

#### Grid Assemblies

| Fuel Type | Grids | Source |
|-----------|-------|--------|
| V5H | 2 Inconel (top/bottom) + 6 Zircaloy-4 (mid) | UFSAR T4.3-1 |
| V+ | 2 Inconel (top/bottom) + 6 ZIRLO (mid) | UFSAR T4.3-1 |
| RFA | 2 Inconel (top/bottom) + 1 Inconel (protective) + 6 ZIRLO (mid) + 3 ZIRLO (IFM) | UFSAR T4.3-1 |

### Fuel Rods

| Parameter | Value | Source |
|-----------|-------|--------|
| Number in Core | 50952 | UFSAR T4.3-1 |
| Outside Diameter | 0.374 in | UFSAR T4.3-1 |
| Diametral Gap | 0.0065 in | UFSAR T4.3-1 |
| Clad Thickness | 0.0225 in | UFSAR T4.3-1 |
| Clad Material (V5H) | Zircaloy-4 | UFSAR T4.3-1 |
| Clad Material (V+, RFA) | ZIRLO | UFSAR T4.3-1 |

### Fuel Pellets

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

### Rod Cluster Control Assemblies (RCCAs)

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

### Burnable Absorbers

| Type | Material | Key Parameter | Source |
|------|----------|--------------|--------|
| PYREX | Borosilicate glass | 12.5 w/o B₂O₃ | UFSAR T4.3-1 |
| WABA | Al₂O₃-B₄C compound | 0.7 fraction theoretical density | UFSAR T4.3-1 |
| IFBA | ZrB₂ coating | 1.570–2.355 mg B-10/in | UFSAR T4.3-1 |

## Operation

### Internals Flow Path

The coolant flows from the vessel inlet nozzles down the annulus between the core barrel and the vessel wall and then into a plenum at the bottom of the vessel. It then reverses and flows up through the core support and through the lower core plate; flow passages in the lower core plate are sized to provide the desired inlet flow distribution to the core. After passing through the core, the coolant enters the region of the upper support structure and then flows radially to the core barrel outlet nozzles and directly through the vessel outlet nozzles. A small portion of the coolant flows between the baffle plates and the core barrel to provide additional cooling of the barrel, and a small amount of the entering flow is directed into the vessel head plenum and exits through the vessel outlet nozzles. (UFSAR §4.2.2.2)

Load paths: vertically downward loads from weight, fuel assembly preload, control rod dynamic loading, hydraulic loads, and earthquake acceleration are carried by the lower core plate into the lower core plate support flange on the core barrel shell, through the lower support columns to the core support, and thence through the core barrel shell to the core barrel flange supported by the vessel flange. Transverse loads are carried by the core barrel shell and distributed between the lower radial support to the vessel wall and the vessel flange. Vertical loads on the upper core support assembly are transmitted through the upper core plate via the support columns to the upper support assembly and into the reactor vessel head. (UFSAR §4.2.2.2)

### Design Loading Conditions

The design loading conditions that provide the basis for the design of the reactor internals are (UFSAR §4.2.2.3): fuel assembly weight; fuel assembly spring forces; internals weight; control rod scram (equivalent static load); differential pressure; spring preloads; coolant flow forces (static); temperature gradients; differences in thermal expansion; interference between components; vibration (mechanically or hydraulically induced); one or more loops out of service; all operational transients listed in UFSAR Tables 5.2-10 and 5.2-10a; pump overspeed; seismic loads (OBE and DBE); and blowdown forces (cold and hot leg break). Combined seismic and blowdown forces are included in the stress analysis assuming the maximum amplitude of each force acts concurrently. (UFSAR §4.2.2.3)

The combination of design loadings fits into the normal, upset, or faulted conditions defined in the ASME Section III Code. (UFSAR §4.2.2.4)

### Allowable Deflections

For normal operating conditions, downward vertical deflection of the lower core support plate is negligible. For the LOCA plus DBE condition, the deflection criteria of critical internal structures are the limiting values in UFSAR Table 4.2-1 (UFSAR §4.2.2.4):

| Component | Allowable Deflection (in.) | No-Loss-of-Function Deflection (in.) | Source |
|-----------|----------------------------|--------------------------------------|--------|
| Upper Barrel, radial inward | 4.1 | 8.2 | UFSAR Table 4.2-1 |
| Upper Barrel, radial outward | 0.5 | 1.0 | UFSAR Table 4.2-1 |
| Upper Package | 0.10 | 0.15 | UFSAR Table 4.2-1 |
| Rod Cluster Guide Tubes | 1.00 | 1.75 | UFSAR Table 4.2-1 |

For the core drop accident, the initial clearance between the secondary core support structures and the reactor vessel lower head in the hot condition is approximately <span class="hi">1/2 inch</span>; an additional displacement of approximately <span class="hi">3/4 inch</span> would occur due to strain of the energy-absorbing devices of the secondary core support, giving a total drop distance of about <span class="hi-exam">1 1/4 inches</span> — insufficient to permit the grips of the rod cluster control assembly to come out of the guide thimble in the fuel assemblies. The maximum deformation of the austenitic stainless secondary core support piece is limited to approximately 15 percent, after which a positive step ensures support. (UFSAR §4.2.2.4)

### Design Criteria Basis

For normal operating conditions, Section III of the ASME Nuclear Power Plant Components Code is the basis for evaluating acceptability of calculated stresses (both static and alternating stress intensities). Allowable stresses in Section III are based on unirradiated material properties; because irradiation increases the strength of the Type 304 stainless steel used for the internals (while decreasing elongation), use of the Section III allowable stresses is considered appropriate and conservative for irradiated internal structures. The allowable stress limits during the DBA for the core support structures are based on the January 1971 draft of the ASME Code for Core Support Structures, Subsection NG, and the Criteria for Faulted Conditions. (UFSAR §4.2.2.5)

### Core Average Linear Power and Hot Channel Factors

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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q75</div>
Axial peaking factor increase: with the core axial power distribution already peaked below the midplane, <span class="hi-exam">reducing RCS boron concentration (diluting) increases the maximum axial peaking factor</span>. Dilution inserts positive reactivity, raising Tavg and hot leg temperature — hotter water in upper core regions is less dense (less moderation), shifting flux further toward the already flux-dense bottom half. <span class="hi-trap">Withdrawing control rods 4 steps reduces peaking (less flux depression). A dropped rod at the core edge affects radial peaking, not axial. A turbine load reduction lowers delta-T, pushing flux upward, also reducing axial peaking.</span>
</div>

### Reactivity Coefficients

| Parameter | Value | Source |
|-----------|-------|--------|
| Moderator Temperature Coefficient (operating) | 0 to -44 pcm/°F | UFSAR T4.3-2 |
| Boron Coefficient | -16 to -6 pcm/ppm | UFSAR T4.3-2 |
| Rodded Moderator Density Coefficient (operating) | ≤ +0.52 x 10⁵ pcm/gm/cc | UFSAR T4.3-2 |
| Doppler Coefficient | See UFSAR Figures 4.3-17/18 | UFSAR T4.3-2 |
| Moderator Void Coefficient (BOL, low temp) | 50 pcm/% void | UFSAR 4.3.2.3 |
| Moderator Void Coefficient (EOL, operating temp) | -250 pcm/% void | UFSAR 4.3.2.3 |

Note: 1 pcm = 10⁻⁵ delta-rho. The MTC becomes more negative with fuel burnup as boron concentration decreases. The power coefficient (combined moderator + Doppler) also becomes more negative with burnup. (UFSAR 4.3.2.3)

### Delayed Neutron Fraction

| Parameter | BOL | EOL | Source |
|-----------|-----|-----|--------|
| Beta-effective | 0.0075 | 0.0044 | UFSAR T4.3-2 |

### Control Rod Worths

| Parameter | Value | Source |
|-----------|-------|--------|
| Maximum Bank Worth | <2000 pcm | UFSAR T4.3-2 |
| Total Rod Worth (53 RCCAs, all in) BOL | 8.595 %delta-rho | UFSAR T4.3-3 |
| Total Rod Worth (53 RCCAs, all in) EOL | 8.00 %delta-rho | UFSAR T4.3-3 |
| N-1 Rod Worth (highest worth stuck out) BOL | 6.85 %delta-rho | UFSAR T4.3-3 |
| N-1 Rod Worth (highest worth stuck out) EOL | 6.30 %delta-rho | UFSAR T4.3-3 |
| Available with 10% uncertainty (N-1 - 10%) BOL | 6.17 %delta-rho | UFSAR T4.3-3 |
| Available with 10% uncertainty (N-1 - 10%) EOL | 5.67 %delta-rho | UFSAR T4.3-3 |

### Reactivity Requirements (Control Rod Rack-up)

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

### Boron Concentrations

| Condition | Boron (ppm) | Source |
|-----------|------------|--------|
| Refueling (ARI, k<0.95) | ≥2050 | UFSAR T4.3-2 |
| HZP, ARO (k=1.0) | 1700–1950 | UFSAR T4.3-2 |
| HFP, ARO, 0 MWD/MTU, No Xenon | 1400–1700 | UFSAR T4.3-2 |
| HFP, ARO, 150 MWD/MTU, Eq Xenon | 1000–1250 | UFSAR T4.3-2 |
| HFP, ARO, 1000 MWD/MTU, Eq Xenon | 1000–1250 | UFSAR T4.3-2 |

Note: Values are typical reload values. Current cycle values are in the appropriate NDR or COLR. (UFSAR T4.3-2)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q71</div>
Boron mixing during natural circulation vs forced circulation: <span class="hi-exam">more time is required</span> to achieve complete mixing in the RCS during natural circulation (lower flow rate without RCPs). However, once mixing is complete, a 1 ppm increase in boron concentration produces the <span class="hi-exam">same change in reactivity</span> regardless of whether the RCS is in forced or natural circulation. The reactivity effect of boron depends on concentration, not flow rate.
</div>

### Maximum Core Reactivity

Maximum core reactivity (cold, zero power, BOC): **1.200 keff** (typical reload). (UFSAR T4.3-1)

### Reactivity Control Methods

1. **Chemical poison (boron):** Dissolved in coolant, controlled by CVCS. Compensates for slow reactivity changes including fuel burnup, xenon/samarium transients, and moderator temperature changes.
2. **Rod Cluster Control Assemblies:** 53 full-length clusters of Ag-In-Cd rods. Provide fast reactivity control and shutdown capability. Magnetic latch CRDMs release on loss of power.
3. **Burnable absorbers:** PYREX, WABA, or IFBA rods placed in guide thimble positions to hold down excess BOL reactivity without increasing soluble boron beyond limits.
(UFSAR 4.3.2.5)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q70</div>
Xenon-135 following a reactor trip from 100% power: Xe-135 concentration peaks at approximately <span class="hi-exam">4700 pcm</span> at about <span class="hi-exam">8-9 hours</span> after the trip. After the peak, Xe-135 concentration decreases due to decay of I-135 and Xe-135. <span class="hi-exam">Decreasing Xe-135 inserts positive reactivity</span> (Xe-135 is a fission product poison). At 12 hours post-trip with reactor at 5% power, Xe-135 is lowering — operator must add <span class="hi-exam">negative reactivity</span> to maintain power and T-avg stable.
</div>

### Key Exam Concepts

- The core is designed so that the highest worth stuck RCCA still allows adequate shutdown margin (≥1.3 %delta-rho)
- MTC is required to be negative at power (TS limit) — verified by physics testing
- FQ and F-delta-H limits are given in the COLR, not fixed in Tech Specs
- The power coefficient becomes more negative with burnup (larger power defect at EOL)

## Tech Spec LCOs

- **[[TS 3/4.4 — Reactor Coolant System|TS 3/4.4.9]]** — RCS Specific Activity
- Pressure-temperature limits governed by Appendix G analysis
- **TS 3/4.1** — [[TS 3/4.1.1 — Boration Control]] (shutdown margin, rod operability, rod insertion limits)
- **TS 3/4.2** — [[TS 3/4.2 — Power Distribution]] (FQ, F-delta-H, axial flux difference)
- **TS 3/4.1.1** — Shutdown Margin
- **TS 3/4.1.2** — Boration Systems ([[CVCS]])
- **TS 3/4.1.3** — Movable Control Assemblies
- **TS 3/4.2.1** — Axial Flux Difference
- **TS 3/4.2.2** — Heat Flux Hot Channel Factor (FQ)
- **TS 3/4.2.3** — Nuclear Enthalpy Rise Hot Channel Factor (F-delta-H)

## Connections

- Related concepts: [[Rx Vessel & Internals]]
- Related exam questions: [[2023 Q70]], [[2023 Q71]], [[2023 Q75]]
- Related exam: [[2023 NRC Written Exam]]
