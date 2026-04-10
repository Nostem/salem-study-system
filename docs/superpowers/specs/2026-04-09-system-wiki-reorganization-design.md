# System Wiki Reorganization Design

**Date:** 2026-04-09
**Status:** Approved

## Goal

Reorganize all system wiki articles from the current flat structure (~27 system articles + 5 concept articles) into a standardized breakdown of ~55 articles across 6 categories: Electrical, Primary, Emergency, Control, Secondary, Auxiliary. Remove umbrella/concept articles by absorbing their content into the appropriate system articles. Create stub articles for all systems in the breakdown so they are linkable and ready for backfill.

## Key Decisions

1. **Exam callout blocks move to the most relevant article** — no duplication, except for RPS/SSPS permissives/interlocks which are duplicated to Excore NIs and Control Rod Drive for study context.
2. **Concept articles are absorbed into systems:** Nuclear Design → Rx Vessel & Internals, Thermal-Hydraulic Design → RCS, Accident Analysis → ESF & Design, Radiation Protection → Radiation Monitoring, Adverse Containment → Containment.
3. **Stubs created for all systems** with no existing content, so they are linkable from day one.
4. **Homepage index** reorganized from flat list to 6 category headers. Concepts section removed.
5. **Wikilinks updated to new canonical names** in a final cleanup pass. Legacy aliases maintained during migration for link resolution, then removed.
6. **CFCUs and Containment Spray stay separate** from the main Containment article.
7. **Phased migration** — one category at a time, one commit per phase.

## Article Mapping

### Articles Being Split

| Current Article | New Articles | What Moves |
|---|---|---|
| Instrumentation and Controls (265 lines, 20 callouts) | **RPS/SSPS** | Reactor trip functions, SSPS trains, ESF actuation signals, permissives, trip breakers, POPS, OTdT/OPdT, MFW isolation, AFW actuation. All interlocks/permissives stay as master reference. |
| | **Excore NIs** | NIS ranges + relevant permissives (duplicated from RPS) |
| | **Incores** | Stub — CETs, incore flux mapping, subcooling margin monitor |
| | **Control Rod Drive** | Rod control interlocks (duplicated from RPS), CRDM content |
| | **Radiation Monitoring** | Process radiation monitors + Radiation Protection concept content |
| Pressurizer (147 lines, 10 callouts) | **Pressurizer & PRT** | Vessel design, heaters hardware, construction, PRT, relief valves |
| | **Pressurizer Level & Press Control** | MPC, spray control, level channels, heater control groups, backup heater power supplies, PORV logic |
| AC Power (75 lines, 1 callout) | **4KV**, **13KV**, **115V AC**, **460/230V AC**, **500KV** | Distribute content by voltage level |
| Radioactive Waste Management (83 lines, 5 callouts) | **Waste Gas**, **Waste Liquid** | Split by waste type |

### Articles Being Absorbed and Deleted

| Deleted Article | Content Goes To |
|---|---|
| Main Steam and Feedwater (79 lines) | Main Steam + Feed & Condensate |
| Auxiliary Systems (118 lines) | Individual system articles |
| Electrical Power Systems (84 lines) | Voltage-level articles + SECs |
| Reactor Vessel (79 lines) | Rx Vessel & Internals |
| Reactor Core and Fuel (136 lines) | Rx Vessel & Internals |

### Concept Articles Merged Into Systems

| Concept | Merges Into |
|---|---|
| Nuclear Design (129 lines, 3 callouts) | Rx Vessel & Internals |
| Thermal-Hydraulic Design (137 lines, 2 callouts) | RCS |
| Accident Analysis (100 lines, 0 callouts) | ESF & Design |
| Radiation Protection (61 lines, 0 callouts) | Radiation Monitoring |
| Adverse Containment (37 lines, 1 callout) | Containment |

### Articles Staying Mostly As-Is (renamed/recategorized)

| Current | New Name | Category |
|---|---|---|
| Reactor Coolant System | RCS | Primary |
| Reactor Coolant Pumps | RCPs | Primary |
| Steam Generators | Steam Generator & Blowdown | Primary |
| Chemical and Volume Control System | CVCS | Primary |
| Residual Heat Removal | RHR | Emergency |
| Emergency Core Cooling Systems | ECCS | Emergency |
| Containment Systems | Containment | Emergency |
| Containment Fan Coil Units | CFCUs | Emergency |
| Containment Spray | Containment Spray | Emergency |
| Component Cooling Water | CCW | Emergency |
| Service Water | Service Water | Emergency |
| DC Power | DC Power | Electrical |
| Diesel Generators | EDGs | Electrical |
| Auxiliary Feedwater | AFW | Auxiliary |
| Main Steam | Main Steam | Secondary |
| Feedwater and Condensate | Feed & Condensate | Secondary |
| Turbine-Generator | Main Turbine | Secondary |
| AMSAC | AMSAC | Control |

## New Stub Articles

| Article | Category |
|---|---|
| SECs | Electrical |
| FHV | Primary |
| Refueling | Primary |
| RVLIS | Primary |
| CAV | Emergency |
| Chill Water | Emergency |
| Spent Fuel Pool | Emergency |
| SPAV | Emergency |
| Condenser Air Removal | Secondary |
| Circ Water | Secondary |
| Steam Dumps | Secondary |
| TAC | Secondary |
| TGA Ventilation | Secondary |
| MTLO | Secondary |
| ABV | Auxiliary |
| Annunciators | Auxiliary |
| Control Air | Auxiliary |
| Demin Water | Auxiliary |
| Fire Protection | Auxiliary |
| Stator Cooling Water | Auxiliary |

## Complete Filename and Alias Reference

### Electrical

| Title | Filename | Key Aliases |
|---|---|---|
| 4KV | `4kv.md` | 4KV vital buses, 4160V |
| 13KV | `13kv.md` | 13KV, 13800V |
| 115V AC | `115v-ac.md` | 115V AC instrument buses |
| 460/230V AC | `460-230v-ac.md` | 460V vital buses, 230V |
| 500KV | `500kv.md` | 500KV ring bus, switchyard |
| DC Power | `dc-power.md` | 125VDC, 250VDC, 28VDC, DC power systems, station batteries |
| EDGs | `edgs.md` | emergency diesel generators, diesel generators, EDG, Diesel Generators |
| SECs | `secs.md` | safeguards equipment controllers, safeguards equipment control |

### Primary

| Title | Filename | Key Aliases |
|---|---|---|
| CVCS | `cvcs.md` | Chemical and Volume Control System, Boration Systems, charging and letdown |
| FHV | `fhv.md` | fuel handling ventilation |
| Pressurizer & PRT | `pressurizer-and-prt.md` | PZR, pressurizer, Pressurizer |
| Pressurizer Level & Press Control | `pressurizer-level-and-press-control.md` | PZR control, pressurizer control |
| RCPs | `rcps.md` | Reactor Coolant Pumps, RCP |
| RCS | `rcs.md` | Reactor Coolant System |
| Refueling | `refueling.md` | refueling operations |
| RVLIS | `rvlis.md` | reactor vessel level indication system |
| Rx Vessel & Internals | `rx-vessel-and-internals.md` | reactor vessel, RPV, RV, reactor core, fuel assemblies, Reactor Core and Fuel, Reactor Vessel, Nuclear Design |
| Steam Generator & Blowdown | `steam-generator-and-blowdown.md` | SGs, SG, Steam Generators |

### Emergency

| Title | Filename | Key Aliases |
|---|---|---|
| CAV | `cav.md` | control area ventilation |
| CCW | `ccw.md` | Component Cooling Water |
| Chill Water | `chill-water.md` | chilled water |
| Containment | `containment.md` | Containment Systems, containment isolation |
| Containment Spray | `containment-spray.md` | containment spray system, NaOH spray |
| CFCUs | `cfcus.md` | Containment Fan Coil Units, containment cooling |
| ECCS | `eccs.md` | Emergency Core Cooling Systems, safety injection, SI |
| ESF & Design | `esf-and-design.md` | engineered safety features, Accident Analysis |
| RHR | `rhr.md` | Residual Heat Removal, shutdown cooling |
| Service Water | `service-water.md` | SW, service water system |
| Spent Fuel Pool | `spent-fuel-pool.md` | SFP |
| SPAV | `spav.md` | switchgear and penetration area ventilation |

### Control

| Title | Filename | Key Aliases |
|---|---|---|
| AMSAC | `amsac.md` | ATWS Mitigation System |
| Control Rod Drive | `control-rod-drive.md` | CRDM, rod control |
| Excore NIs | `excore-nis.md` | nuclear instruments, NIS, excore detectors |
| Incores | `incores.md` | incore flux mapping, CETs, subcooling margin monitor |
| Radiation Monitoring | `radiation-monitoring.md` | process radiation monitors, rad monitors, Radiation Protection |
| RPS/SSPS | `rps-ssps.md` | Instrumentation and Controls, I&C, reactor trip system, RTS, ESFAS, reactor protection, solid state protection |

### Secondary

| Title | Filename | Key Aliases |
|---|---|---|
| Feed & Condensate | `feed-and-condensate.md` | Feedwater and Condensate, feedwater, main feedwater, condensate |
| Main Steam | `main-steam.md` | main steam system, MSIVs, atmospheric dump valves |
| Condenser Air Removal | `condenser-air-removal.md` | vacuum, air ejectors |
| Circ Water | `circ-water.md` | circulating water |
| Main Turbine | `main-turbine.md` | Turbine-Generator, turbine, T/G, main generator |
| Steam Dumps | `steam-dumps.md` | condenser steam dumps, steam dump valves |
| TAC | `tac.md` | turbine aux cooling |
| TGA Ventilation | `tga-ventilation.md` | turbine building ventilation |
| MTLO | `mtlo.md` | main turbine lube oil |

### Auxiliary

| Title | Filename | Key Aliases |
|---|---|---|
| ABV | `abv.md` | aux building ventilation |
| AFW | `afw.md` | Auxiliary Feedwater |
| Annunciators | `annunciators.md` | OHA, overhead annunciators, auxiliary annunciators |
| Control Air | `control-air.md` | service air, station air |
| Demin Water | `demin-water.md` | demineralized water |
| Fire Protection | `fire-protection.md` | fire suppression |
| Stator Cooling Water | `stator-cooling-water.md` | SCW |
| Waste Gas | `waste-gas.md` | gaseous waste, Radioactive Waste Management *(temporary, removed in phase 7)* |
| Waste Liquid | `waste-liquid.md` | liquid waste |

## Homepage Index Layout

The Systems section in `_index.md` is replaced with 6 category subheaders. The Concepts section is removed. All other sections (Tech Specs, NRC Exams, EOPs, Abnormals, Admin, Procedures) remain unchanged.

## Migration Phases

### Phase 1: Electrical
- Split AC Power → 4KV, 13KV, 115V AC, 460/230V AC, 500KV
- Absorb Electrical Power Systems → distribute to voltage articles + SECs
- Rename Diesel Generators → EDGs
- Create SECs stub
- Delete AC Power, Electrical Power Systems
- **Created:** 6 | **Modified:** 1 | **Deleted:** 2

### Phase 2: Primary
- Split Pressurizer → Pressurizer & PRT + Pressurizer Level & Press Control
- Merge Reactor Vessel + Reactor Core and Fuel + Nuclear Design → Rx Vessel & Internals
- Merge Thermal-Hydraulic Design → RCS
- Rename Steam Generators → Steam Generator & Blowdown
- Rename CVCS, RCPs (alias updates)
- Create stubs: FHV, Refueling, RVLIS
- Delete Reactor Vessel, Reactor Core and Fuel, Nuclear Design, Thermal-Hydraulic Design
- **Created:** 5 | **Heavily modified:** 3 | **Deleted:** 4

### Phase 3: Emergency
- Merge Adverse Containment → Containment, rename Containment Systems → Containment
- Merge Accident Analysis → ESF & Design (new)
- Absorb Auxiliary Systems unique content into individual articles
- Create stubs: CAV, Chill Water, Spent Fuel Pool, SPAV
- Rename CFCUs, CCW, ECCS, RHR (alias updates)
- Delete Adverse Containment, Accident Analysis, Auxiliary Systems
- **Created:** 5 | **Modified:** 6 | **Deleted:** 3

### Phase 4: Control
- Split Instrumentation and Controls → RPS/SSPS + Excore NIs + Control Rod Drive + Radiation Monitoring + Incores
- Merge Radiation Protection → Radiation Monitoring
- Duplicate permissives → Excore NIs, rod interlocks → Control Rod Drive
- AMSAC alias update
- Delete Instrumentation and Controls, Radiation Protection
- **Created:** 4 | **Heavily modified:** 1 | **Deleted:** 2

### Phase 5: Secondary
- Absorb Main Steam and Feedwater → Main Steam + Feed & Condensate
- Rename Turbine-Generator → Main Turbine
- Extract steam dump content → Steam Dumps
- Split Radioactive Waste Management → Waste Gas + Waste Liquid
- Create stubs: Condenser Air Removal, Circ Water, TAC, TGA Ventilation, MTLO
- Delete Main Steam and Feedwater, Radioactive Waste Management
- **Created:** 8 | **Modified:** 3 | **Deleted:** 2

### Phase 6: Auxiliary
- Rename AFW (alias update)
- Create stubs: ABV, Annunciators, Control Air, Demin Water, Fire Protection, Stator Cooling Water
- **Created:** 6 | **Modified:** 1

### Phase 7: Final Cleanup
- Replace `_index.md` Systems section with categorized layout, remove Concepts section
- Update `aliases.ts` with all new canonical names
- Update all wikilinks across wiki to canonical names
- Remove legacy aliases
- Run wikilink check + build check
- **Touches:** 100+ files for link updates

## Totals

- **New files created:** ~34
- **Old files deleted:** ~13
- **7 commits**, each self-contained
