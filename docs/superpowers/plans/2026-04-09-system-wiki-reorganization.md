# System Wiki Reorganization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize ~32 system/concept wiki articles into ~55 articles across 6 categories (Electrical, Primary, Emergency, Control, Secondary, Auxiliary), creating stubs for all systems and updating all wikilinks to canonical names.

**Architecture:** Phased migration — one category per commit. Each phase creates new articles, moves content from old articles, adds legacy aliases for link resolution, and deletes absorbed articles. A final cleanup pass updates all wikilinks to canonical names and removes legacy aliases.

**Tech Stack:** Markdown files, YAML frontmatter, Python scripts for bulk link updates, existing wikilink checker (`scripts/check-wikilinks.py`), Astro site build.

**Spec:** `docs/superpowers/specs/2026-04-09-system-wiki-reorganization-design.md`

---

### Task 1: Phase 1 — Electrical

**Files:**
- Create: `wiki/systems/4kv.md`
- Create: `wiki/systems/13kv.md`
- Create: `wiki/systems/115v-ac.md`
- Create: `wiki/systems/460-230v-ac.md`
- Create: `wiki/systems/500kv.md`
- Create: `wiki/systems/secs.md`
- Modify: `wiki/systems/diesel-generators.md` (rename to EDGs, update aliases)
- Modify: `wiki/systems/dc-power.md` (add legacy alias "DC power systems")
- Delete: `wiki/systems/ac-power.md`
- Delete: `wiki/systems/electrical-power-systems.md`

- [ ] **Step 1: Read source articles fully**

Read `wiki/systems/ac-power.md` and `wiki/systems/electrical-power-systems.md` completely. Identify every section and which new article it belongs to:

- **500KV:** Offsite Power sections from both articles (500kV transmission, station power transformers, auxiliary power transformer, auto-transfer on trip)
- **4KV:** Group buses and Vital buses sections from both. The 2023 Q93 callout-exam about CW bus transfer stays here (it's about 4KV bus behavior). Safeguards Sequence from Electrical Power Systems goes here too.
- **460/230V AC:** 460V/230V Systems sections from both (unit substations, MOVs, heaters, PZR heater buses)
- **115V AC:** 115V AC Instrumentation Power section from AC Power (inverters, regulated AC supply backup)
- **13KV:** Stub — no existing content at this voltage level. The 13-4 kV transformers are mentioned in 500KV context but the 13KV distribution itself has no article content.
- **SECs:** Stub — safeguards equipment controllers. The Safeguards Sequence info from Electrical Power Systems provides some seed content.
- **EDGs:** Diesel Generators article stays as-is, just rename title and update aliases.

Also note: Electrical Power Systems has a DC Power section and a JPM callout about SBO Diesel Control Air. The DC content is already in `dc-power.md`. The JPM callout should move to the EDGs article (it's about SBO diesel backup).

- [ ] **Step 2: Create 500KV article**

Create `wiki/systems/500kv.md` with:
- Frontmatter: title "500KV", category systems, status draft, aliases: [500KV ring bus, switchyard, offsite power, AC Power, AC power systems]
- The "AC Power" and "AC power systems" aliases capture legacy links during migration
- Content: Offsite Power sections merged from both source articles (500kV transmission circuits, station power transformers, auxiliary power transformer, auto-transfer on unit trip)
- Tech Spec LCOs: TS 3.8.1.1 offsite circuit requirements (from AC Power)
- Connections: link to [[4KV]], [[EDGs]], [[TS 3/4.8 — Electrical]]

- [ ] **Step 3: Create 4KV article**

Create `wiki/systems/4kv.md` with:
- Frontmatter: title "4KV", category systems, status draft, aliases: [4KV vital buses, 4160V, vital buses, group buses]
- Content: Group Buses and Vital Buses sections from AC Power. Safeguards Sequence section from Electrical Power Systems. The 2023 Q93 callout-exam block about CW bus transfer.
- Tech Spec LCOs: TS 3.8.3.1 vital bus operability
- Connections: link to [[500KV]], [[460/230V AC]], [[EDGs]], [[SECs]], [[TS 3/4.8 — Electrical]]
- Related exam questions: [[2023 Q88]], [[2023 Q93]]

- [ ] **Step 4: Create 460/230V AC article**

Create `wiki/systems/460-230v-ac.md` with:
- Frontmatter: title "460/230V AC", category systems, status draft, aliases: [460V vital buses, 230V]
- Content: 460V/230V sections from both source articles (unit substations, MOVs, heaters, PZR heater buses backed by EDGs)
- Connections: link to [[4KV]], [[Pressurizer & PRT]]

- [ ] **Step 5: Create 115V AC article**

Create `wiki/systems/115v-ac.md` with:
- Frontmatter: title "115V AC", category systems, status draft, aliases: [115V AC instrument buses]
- Content: 115V AC Instrumentation Power section from AC Power (inverters, regulated AC supply)
- Connections: link to [[RPS/SSPS]]

- [ ] **Step 6: Create 13KV stub**

Create `wiki/systems/13kv.md` with:
- Frontmatter: title "13KV", category systems, status draft, aliases: [13KV, 13800V]
- Stub content: Function section noting 13KV distribution from station power transformers. "Content to be added during UFSAR ingestion."
- Connections: link to [[500KV]], [[4KV]]

- [ ] **Step 7: Create SECs stub**

Create `wiki/systems/secs.md` with:
- Frontmatter: title "SECs", category systems, status draft, aliases: [safeguards equipment controllers, safeguards equipment control]
- Seed content from Electrical Power Systems Safeguards Sequence section (auto-start, load shed, sequencing). Note the detailed SEC mode info already in ECCS exam callouts (2022 Q14 documents Mode 2 Blackout behavior).
- Connections: link to [[4KV]], [[EDGs]], [[ECCS]]

- [ ] **Step 8: Rename Diesel Generators → EDGs**

Edit `wiki/systems/diesel-generators.md`:
- Update frontmatter: title "EDGs", add aliases: [emergency diesel generators, diesel generators, diesel generator, EDG, Diesel Generators]
- Update `# Diesel Generators` heading → `# EDGs`
- Move the SBO Diesel Control Air JPM callout from Electrical Power Systems to this article
- Add to Connections: the SBO procedure link from Electrical Power Systems

- [ ] **Step 9: Delete source articles**

Delete `wiki/systems/ac-power.md` and `wiki/systems/electrical-power-systems.md` using `git rm`.

- [ ] **Step 10: Verify and commit**

Run `python3 scripts/check-wikilinks.py` — confirm no NEW broken links from this phase (pre-existing broken links are OK).
Run `cd site && npm run build` — confirm clean build.

```bash
git add wiki/systems/
git commit -m "refactor: Phase 1 — reorganize Electrical system articles

- Split AC Power into 4KV, 13KV, 115V AC, 460/230V AC, 500KV
- Absorb Electrical Power Systems into voltage articles + SECs
- Rename Diesel Generators → EDGs
- Create SECs stub
- Delete AC Power, Electrical Power Systems

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Phase 2 — Primary

**Files:**
- Create: `wiki/systems/pressurizer-level-and-press-control.md`
- Create: `wiki/systems/rx-vessel-and-internals.md`
- Create: `wiki/systems/fhv.md`
- Create: `wiki/systems/refueling.md`
- Create: `wiki/systems/rvlis.md`
- Modify: `wiki/systems/pressurizer.md` (rename to Pressurizer & PRT, trim control content)
- Modify: `wiki/systems/reactor-coolant-system.md` (rename to RCS, absorb Thermal-Hydraulic Design)
- Modify: `wiki/systems/steam-generators.md` (rename to Steam Generator & Blowdown)
- Modify: `wiki/systems/chemical-and-volume-control-system.md` (rename to CVCS)
- Modify: `wiki/systems/reactor-coolant-pumps.md` (rename to RCPs)
- Delete: `wiki/systems/reactor-vessel.md`
- Delete: `wiki/systems/reactor-core-and-fuel.md`
- Delete: `wiki/concepts/nuclear-design.md`
- Delete: `wiki/concepts/thermal-hydraulic-design.md`

- [ ] **Step 1: Read all source articles**

Read fully: `pressurizer.md`, `reactor-vessel.md`, `reactor-core-and-fuel.md`, `reactor-coolant-system.md`, `steam-generators.md`, `chemical-and-volume-control-system.md`, `reactor-coolant-pumps.md`, `concepts/nuclear-design.md`, `concepts/thermal-hydraulic-design.md`.

Identify content splits:
- **Pressurizer & PRT:** Function, Key Design Parameters, Construction, PRT section, relief valve hardware. Exam callouts: Q32 (PRT drain path), Q34 (MPC fails low — actually this is control logic, goes to PZR L&P Control), Q76 (vapor space leak — this is about RCS behavior, stays here for the physical PZR context)
- **Pressurizer Level & Press Control:** Pressure Control section, Heater Power Supplies section. Exam callouts: Q7 (backup heater group power supplies), Q14 (heater group logic — wait, check if this is hardware or control), Q87 (EOP-TRIP-4 CAS PZR level), Q92 (pressure channel failure), Q2 2022 (safety valve tailpipe temp — physical, stays in PZR & PRT), Q9 2022 (spray valve failure/manual trip at 2000 psig — this is control response), Q21 2022 (reference leg leak effect on indicated level — this is control instrumentation)
- **Rx Vessel & Internals:** Merge Reactor Vessel + Reactor Core and Fuel + Nuclear Design. All content from these three articles combined.
- **RCS:** Existing content + Thermal-Hydraulic Design content merged in.

- [ ] **Step 2: Split Pressurizer → Pressurizer & PRT + Pressurizer Level & Press Control**

Edit `wiki/systems/pressurizer.md`:
- Update frontmatter: title "Pressurizer & PRT", aliases add [PZR, pressurizer, Pressurizer]
- Keep: Function, Key Design Parameters, Construction, PRT section, relief valve hardware descriptions
- Keep exam callouts about physical hardware: Q32 (PRT drain), Q76 (vapor space leak), Q2 2022 (safety valve tailpipe temp)
- Remove: Pressure Control section, Heater Power Supplies section, and their associated exam callouts — these move to the new article
- Update heading: `# Pressurizer & PRT`
- Update Connections to link to [[Pressurizer Level & Press Control]]

Create `wiki/systems/pressurizer-level-and-press-control.md`:
- Frontmatter: title "Pressurizer Level & Press Control", category systems, status draft, aliases: [PZR control, pressurizer control]
- Content: Pressure Control section, Pressurizer Heater Power Supplies section from old Pressurizer article
- Move exam callouts: Q7 2023 (backup heater power supplies), Q34 2023 (MPC fails low), Q87 2023 (EOP-TRIP-4 CAS PZR level), Q92 2023 (pressure channel failure), Q9 2022 (spray valve failure/manual trip), Q21 2022 (reference leg leak)
- Connections: link to [[Pressurizer & PRT]], [[CVCS]], [[RPS/SSPS]]

- [ ] **Step 3: Create Rx Vessel & Internals**

Create `wiki/systems/rx-vessel-and-internals.md`:
- Frontmatter: title "Rx Vessel & Internals", category systems, status draft, aliases: [reactor vessel, RPV, RV, reactor core, fuel assemblies, Reactor Core and Fuel, Reactor Vessel, Nuclear Design, nuclear design parameters, reactivity coefficients, fuel rods]
- Merge ALL content from: `reactor-vessel.md`, `reactor-core-and-fuel.md`, `concepts/nuclear-design.md`
- Organize sections logically: Reactor Vessel (from reactor-vessel.md), Core and Fuel Assemblies (from reactor-core-and-fuel.md), Nuclear Design (from nuclear-design.md with reactivity coefficients, control rod worths, boron concentrations, etc.)
- Move all exam callouts from all three source articles
- Connections: combine all connections from the three sources, link to [[RCS]], [[CVCS]], [[Control Rod Drive]]

- [ ] **Step 4: Merge Thermal-Hydraulic Design into RCS**

Edit `wiki/systems/reactor-coolant-system.md`:
- Update frontmatter: title "RCS", aliases add [Reactor Coolant System, Thermal-Hydraulic Design, thermal hydraulic design, T-H design, DNB, DNBR]
- Update heading: `# RCS`
- Append content from `concepts/thermal-hydraulic-design.md` as a new `## Thermal-Hydraulic Design` section (core thermal parameters, coolant flow, DNB/DNBR, etc.)
- Move all exam callouts from thermal-hydraulic-design.md
- Update Connections

- [ ] **Step 5: Rename Steam Generators, CVCS, RCPs**

Edit `wiki/systems/steam-generators.md`:
- Update frontmatter: title "Steam Generator & Blowdown", aliases add [SGs, SG, Steam Generators]
- Update heading: `# Steam Generator & Blowdown`

Edit `wiki/systems/chemical-and-volume-control-system.md`:
- Update frontmatter: title "CVCS", aliases add [Chemical and Volume Control System, Boration Systems, charging and letdown]
- Update heading: `# CVCS`

Edit `wiki/systems/reactor-coolant-pumps.md`:
- Update frontmatter: title "RCPs", aliases add [Reactor Coolant Pumps, RCP]
- Update heading: `# RCPs`

- [ ] **Step 6: Create stubs — FHV, Refueling, RVLIS**

Create `wiki/systems/fhv.md`:
- Frontmatter: title "FHV", category systems, status draft, aliases: [fuel handling ventilation]
- Stub with Function section: "Provides ventilation and filtration for the fuel handling building during fuel movement and storage operations."
- Connections: link to [[Spent Fuel Pool]]

Create `wiki/systems/refueling.md`:
- Frontmatter: title "Refueling", category systems, status draft, aliases: [refueling operations]
- Stub with Function section: "Covers refueling operations including fuel movement, cavity flooding, and mode transitions for refueling."
- Connections: link to [[Rx Vessel & Internals]], [[FHV]]

Create `wiki/systems/rvlis.md`:
- Frontmatter: title "RVLIS", category systems, status draft, aliases: [reactor vessel level indication system]
- Stub with Function section: "Reactor Vessel Level Indication System provides indication of reactor vessel water level during post-accident conditions."
- Connections: link to [[RCS]], [[ECCS]]

- [ ] **Step 7: Delete absorbed articles**

```bash
git rm wiki/systems/reactor-vessel.md
git rm wiki/systems/reactor-core-and-fuel.md
git rm wiki/concepts/nuclear-design.md
git rm wiki/concepts/thermal-hydraulic-design.md
```

- [ ] **Step 8: Verify and commit**

Run `python3 scripts/check-wikilinks.py` — confirm no NEW broken links.
Run `cd site && npm run build` — confirm clean build.

```bash
git add wiki/systems/ wiki/concepts/
git commit -m "refactor: Phase 2 — reorganize Primary system articles

- Split Pressurizer → Pressurizer & PRT + Pressurizer Level & Press Control
- Merge Reactor Vessel + Reactor Core and Fuel + Nuclear Design → Rx Vessel & Internals
- Merge Thermal-Hydraulic Design → RCS
- Rename Steam Generators, CVCS, RCPs
- Create stubs: FHV, Refueling, RVLIS
- Delete 4 absorbed articles

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Phase 3 — Emergency

**Files:**
- Create: `wiki/systems/cav.md`
- Create: `wiki/systems/chill-water.md`
- Create: `wiki/systems/spent-fuel-pool.md`
- Create: `wiki/systems/spav.md`
- Create: `wiki/systems/esf-and-design.md`
- Modify: `wiki/systems/containment-systems.md` (rename to Containment, absorb Adverse Containment)
- Modify: `wiki/systems/containment-fan-coil-units.md` (rename to CFCUs)
- Modify: `wiki/systems/component-cooling-water.md` (rename to CCW)
- Modify: `wiki/systems/emergency-core-cooling-systems.md` (rename to ECCS)
- Modify: `wiki/systems/residual-heat-removal.md` (rename to RHR)
- Modify: `wiki/systems/containment-spray.md` (alias update)
- Modify: `wiki/systems/service-water.md` (alias update)
- Delete: `wiki/concepts/adverse-containment.md`
- Delete: `wiki/concepts/accident-analysis.md`
- Delete: `wiki/systems/auxiliary-systems.md`

- [ ] **Step 1: Read source articles**

Read: `containment-systems.md`, `concepts/adverse-containment.md`, `concepts/accident-analysis.md`, `auxiliary-systems.md`, and skim the Emergency articles being renamed.

- [ ] **Step 2: Merge Adverse Containment into Containment**

Edit `wiki/systems/containment-systems.md`:
- Update frontmatter: title "Containment", aliases add [Containment Systems, containment isolation, adverse containment, adverse containment conditions, Adverse Containment]
- Update heading: `# Containment`
- Append Adverse Containment content as `## Adverse Containment Conditions` section
- Move the Q84 2023 callout-exam from adverse-containment.md
- Update Connections

- [ ] **Step 3: Create ESF & Design**

Create `wiki/systems/esf-and-design.md`:
- Frontmatter: title "ESF & Design", category systems, status draft, aliases: [engineered safety features, Accident Analysis, Chapter 15, accident analysis, LOCA, transient analysis]
- Content: ALL content from `concepts/accident-analysis.md` (event classification, Condition I-IV events, ATWS, key analysis assumptions, dose limits)
- Add existing Engineered Safety Features Summary section from Containment Systems (if it's a general ESF overview rather than containment-specific)
- Connections: link to [[ECCS]], [[RCS]], [[RPS/SSPS]], [[Containment]], [[AFW]]

- [ ] **Step 4: Absorb Auxiliary Systems**

Read `wiki/systems/auxiliary-systems.md`. Check each section for unique content not already in standalone articles. Distribute any unique content to the appropriate article (CCW, SW, CVCS, AFW, etc.). Most content should already exist in the standalone articles — only move what's genuinely new.

- [ ] **Step 5: Rename Emergency articles**

Edit `wiki/systems/containment-fan-coil-units.md`:
- title → "CFCUs", aliases add [Containment Fan Coil Units, containment cooling, containment fan coolers]
- heading → `# CFCUs`

Edit `wiki/systems/component-cooling-water.md`:
- title → "CCW", aliases add [Component Cooling Water]
- heading → `# CCW`

Edit `wiki/systems/emergency-core-cooling-systems.md`:
- title → "ECCS", aliases add [Emergency Core Cooling Systems, safety injection, SI]
- heading → `# ECCS`

Edit `wiki/systems/residual-heat-removal.md`:
- title → "RHR", aliases add [Residual Heat Removal, shutdown cooling]
- heading → `# RHR`

Update Service Water and Containment Spray aliases if needed.

- [ ] **Step 6: Create stubs — CAV, Chill Water, Spent Fuel Pool, SPAV**

Create `wiki/systems/cav.md`:
- title "CAV", aliases: [control area ventilation]
- Stub: "Provides ventilation, heating, cooling, and filtration for the control room and adjacent areas. Includes normal and emergency (accident pressurized) modes."
- Connections: [[RPS/SSPS]], [[Radiation Monitoring]]

Create `wiki/systems/chill-water.md`:
- title "Chill Water", aliases: [chilled water]
- Stub: "Provides chilled water for HVAC cooling throughout the plant."

Create `wiki/systems/spent-fuel-pool.md`:
- title "Spent Fuel Pool", aliases: [SFP]
- Stub: "Provides storage and cooling for spent fuel assemblies. Includes SFP cooling and cleanup system."
- Connections: [[FHV]], [[Refueling]]

Create `wiki/systems/spav.md`:
- title "SPAV", aliases: [switchgear and penetration area ventilation]
- Stub: "Provides ventilation for switchgear rooms and mechanical penetration areas."

- [ ] **Step 7: Delete absorbed articles**

```bash
git rm wiki/concepts/adverse-containment.md
git rm wiki/concepts/accident-analysis.md
git rm wiki/systems/auxiliary-systems.md
```

- [ ] **Step 8: Verify and commit**

Run wikilink check and build check.

```bash
git add wiki/systems/ wiki/concepts/
git commit -m "refactor: Phase 3 — reorganize Emergency system articles

- Merge Adverse Containment into Containment
- Create ESF & Design from Accident Analysis concept
- Absorb Auxiliary Systems into individual articles
- Rename CFCUs, CCW, ECCS, RHR
- Create stubs: CAV, Chill Water, Spent Fuel Pool, SPAV
- Delete 3 absorbed articles

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Phase 4 — Control

**Files:**
- Create: `wiki/systems/rps-ssps.md` (or rename instrumentation-and-controls.md)
- Create: `wiki/systems/excore-nis.md`
- Create: `wiki/systems/control-rod-drive.md`
- Create: `wiki/systems/radiation-monitoring.md`
- Create: `wiki/systems/incores.md`
- Modify: `wiki/systems/amsac.md` (alias update)
- Delete: `wiki/systems/instrumentation-and-controls.md` (after content distributed)
- Delete: `wiki/concepts/radiation-protection.md`

- [ ] **Step 1: Read source articles**

Read fully: `wiki/systems/instrumentation-and-controls.md` (265 lines — the largest article), `wiki/concepts/radiation-protection.md`, `wiki/systems/amsac.md`.

Map each section to its target article:
- **RPS/SSPS:** Function, Reactor Trip Functions table, Key Permissive Interlocks (P-4 through P-14), Rod Control Interlocks (C-1 through C-5), ESF Actuation Signals, AFW Actuation, MFW Isolation, OTdT, OPdT, POPS, Reactor Trip Breakers, Tech Spec LCOs
- **Excore NIs:** Nuclear Instrumentation Ranges section + copy of relevant permissives (P-6, P-8, P-10 especially)
- **Control Rod Drive:** Copy of Rod Control Interlocks (C-1 through C-5) + any CRDM content
- **Radiation Monitoring:** Process Radiation Monitors section + ALL content from Radiation Protection concept
- **Incores:** Stub — CETs, incore flux mapping, subcooling margin monitor

Map each of the 20 exam callouts to the most relevant new article.

- [ ] **Step 2: Create RPS/SSPS from I&C**

The simplest approach: rename `instrumentation-and-controls.md` to `rps-ssps.md` (or create new and delete old).
- Frontmatter: title "RPS/SSPS", aliases: [Instrumentation and Controls, I&C, reactor trip system, RTS, ESFAS, reactor protection, solid state protection]
- Keep ALL content that belongs to RPS/SSPS (the bulk of the article)
- Remove: Nuclear Instrumentation Ranges section (→ Excore NIs), Process Radiation Monitors section (→ Radiation Monitoring)
- Keep: ALL permissive interlocks and rod control interlocks (master reference)
- heading → `# RPS/SSPS`
- Move exam callouts that are specifically about NIS or rad monitors to their new articles. Keep everything else.
- Update Connections: remove links to concepts (Nuclear Design, Reactivity and Reactor Control — these are gone), add links to [[Excore NIs]], [[Control Rod Drive]], [[Radiation Monitoring]], [[Incores]]

- [ ] **Step 3: Create Excore NIs**

Create `wiki/systems/excore-nis.md`:
- Frontmatter: title "Excore NIs", category systems, status draft, aliases: [nuclear instruments, NIS, excore detectors]
- Content: Nuclear Instrumentation Ranges section from I&C (Source Range, Intermediate Range, Power Range channels)
- Duplicate relevant permissives: P-6 (blocks SR trips above P-6), P-8 (single loop loss of flow trip), P-10 (blocks low power trips)
- Move exam callouts about NIS: 2023 Q72 (subcritical SR counts), 2023 Q82 (IR NIS P-6 permissive), 2022 Q19 (dropped rod NIS indication — although this might fit better in Control Rod Drive; place it where the NIS indication behavior is the key tested fact)
- Connections: [[RPS/SSPS]], [[Incores]], [[Control Rod Drive]]

- [ ] **Step 4: Create Control Rod Drive**

Create `wiki/systems/control-rod-drive.md`:
- Frontmatter: title "Control Rod Drive", category systems, status draft, aliases: [CRDM, rod control]
- Content: Duplicate Rod Control Interlocks (C-1 through C-5) from RPS/SSPS
- Any CRDM hardware content that exists (check if I&C or other articles mention CRDM mechanisms)
- Move exam callouts about rod control: 2022 Q20 (misaligned rod recovery, lift coil disconnects)
- Connections: [[RPS/SSPS]], [[Rx Vessel & Internals]], [[AB.ROD-0001 — Immovable/Misaligned Control Rods]], [[AB.ROD-0002 — Dropped Rod]]

- [ ] **Step 5: Create Radiation Monitoring**

Create `wiki/systems/radiation-monitoring.md`:
- Frontmatter: title "Radiation Monitoring", category systems, status draft, aliases: [process radiation monitors, rad monitors, Radiation Protection, rad protection, ALARA, shielding]
- Content: Process Radiation Monitors section from I&C + ALL content from `concepts/radiation-protection.md`
- Move exam callouts about rad monitors: 2023 Q62 (area rad monitor 1R1A, CAV AP mode)
- Connections: [[RPS/SSPS]], [[CAV]], [[Containment]]

- [ ] **Step 6: Create Incores stub**

Create `wiki/systems/incores.md`:
- Frontmatter: title "Incores", category systems, status draft, aliases: [incore flux mapping, CETs, subcooling margin monitor]
- Stub: Function section covering CETs, incore thermocouple system, subcooling margin monitor, incore flux mapping system
- Any CET-related content from existing articles (check 2023 Q57 callout about CET reference junction)
- Connections: [[Excore NIs]], [[RCS]], [[RPS/SSPS]]

- [ ] **Step 7: Update AMSAC aliases**

Edit `wiki/systems/amsac.md`: ensure aliases include [ATWS Mitigation System, ATWS mitigation, AMSAC]. No content changes needed.

- [ ] **Step 8: Delete source articles**

```bash
git rm wiki/systems/instrumentation-and-controls.md  # if created new file instead of renaming
git rm wiki/concepts/radiation-protection.md
```

- [ ] **Step 9: Verify and commit**

Run wikilink check and build check.

```bash
git add wiki/systems/ wiki/concepts/
git commit -m "refactor: Phase 4 — reorganize Control system articles

- Split I&C → RPS/SSPS + Excore NIs + Control Rod Drive + Radiation Monitoring + Incores
- Merge Radiation Protection concept → Radiation Monitoring
- Duplicate permissives to Excore NIs, rod interlocks to Control Rod Drive
- Delete I&C and Radiation Protection

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: Phase 5 — Secondary

**Files:**
- Create: `wiki/systems/steam-dumps.md`
- Create: `wiki/systems/waste-gas.md`
- Create: `wiki/systems/waste-liquid.md`
- Create: `wiki/systems/condenser-air-removal.md`
- Create: `wiki/systems/circ-water.md`
- Create: `wiki/systems/tac.md`
- Create: `wiki/systems/tga-ventilation.md`
- Create: `wiki/systems/mtlo.md`
- Modify: `wiki/systems/main-steam.md` (extract steam dumps, absorb Main Steam and Feedwater unique content)
- Modify: `wiki/systems/feedwater-and-condensate.md` (rename to Feed & Condensate, absorb unique content)
- Modify: `wiki/systems/turbine-generator.md` (rename to Main Turbine)
- Delete: `wiki/systems/main-steam-and-feedwater.md`
- Delete: `wiki/systems/radioactive-waste-management.md`

- [ ] **Step 1: Read source articles**

Read: `main-steam.md`, `main-steam-and-feedwater.md`, `feedwater-and-condensate.md`, `turbine-generator.md`, `radioactive-waste-management.md`.

Identify:
- Steam dump content in Main Steam → extract to Steam Dumps article
- Unique content in Main Steam and Feedwater not already in standalone articles → distribute
- Radioactive Waste Management split: which callouts go to Waste Gas vs Waste Liquid

- [ ] **Step 2: Extract Steam Dumps from Main Steam**

Edit `wiki/systems/main-steam.md`:
- Remove steam dump valve content (condenser steam dumps only; keep atmospheric dumps/MS10s)
- Add any unique Main Steam content from Main Steam and Feedwater article
- Update aliases if needed

Create `wiki/systems/steam-dumps.md`:
- Frontmatter: title "Steam Dumps", category systems, status draft, aliases: [condenser steam dumps, steam dump valves, steam dump]
- Content: Steam dump section extracted from Main Steam
- Connections: [[Main Steam]], [[RCS]]

- [ ] **Step 3: Split Radioactive Waste Management**

Create `wiki/systems/waste-gas.md`:
- Frontmatter: title "Waste Gas", category systems, status draft, aliases: [gaseous waste, Radioactive Waste Management, rad waste]
- Content: Gaseous waste sections from radioactive-waste-management.md
- Move relevant exam callouts (2022 Q23 about 2R41D/plant vent/WG41 is waste gas related)
- Connections: [[Radiation Monitoring]], [[Containment]]

Create `wiki/systems/waste-liquid.md`:
- Frontmatter: title "Waste Liquid", category systems, status draft, aliases: [liquid waste]
- Content: Liquid waste sections from radioactive-waste-management.md
- Move relevant exam callouts about liquid waste processing
- Connections: [[Radiation Monitoring]], [[CVCS]]

- [ ] **Step 4: Rename Feed & Condensate and Main Turbine**

Edit `wiki/systems/feedwater-and-condensate.md`:
- title → "Feed & Condensate", aliases add [Feedwater and Condensate, feedwater, main feedwater, condensate]
- heading → `# Feed & Condensate`
- Add any unique feedwater content from Main Steam and Feedwater article

Edit `wiki/systems/turbine-generator.md`:
- title → "Main Turbine", aliases add [Turbine-Generator, turbine, T/G, main generator]
- heading → `# Main Turbine`

- [ ] **Step 5: Create stubs — Condenser Air Removal, Circ Water, TAC, TGA Ventilation, MTLO**

Create each with standard stub format:

`wiki/systems/condenser-air-removal.md`: title "Condenser Air Removal", aliases [vacuum, air ejectors]
`wiki/systems/circ-water.md`: title "Circ Water", aliases [circulating water]
`wiki/systems/tac.md`: title "TAC", aliases [turbine aux cooling]
`wiki/systems/tga-ventilation.md`: title "TGA Ventilation", aliases [turbine building ventilation]
`wiki/systems/mtlo.md`: title "MTLO", aliases [main turbine lube oil]

Each with a brief Function stub and Connections to related systems.

- [ ] **Step 6: Delete absorbed articles**

```bash
git rm wiki/systems/main-steam-and-feedwater.md
git rm wiki/systems/radioactive-waste-management.md
```

- [ ] **Step 7: Verify and commit**

Run wikilink check and build check.

```bash
git add wiki/systems/
git commit -m "refactor: Phase 5 — reorganize Secondary system articles

- Extract Steam Dumps from Main Steam
- Split Radioactive Waste Management → Waste Gas + Waste Liquid
- Rename Feed & Condensate, Main Turbine
- Absorb Main Steam and Feedwater
- Create stubs: Condenser Air Removal, Circ Water, TAC, TGA Ventilation, MTLO
- Delete 2 absorbed articles

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: Phase 6 — Auxiliary

**Files:**
- Create: `wiki/systems/abv.md`
- Create: `wiki/systems/annunciators.md`
- Create: `wiki/systems/control-air.md`
- Create: `wiki/systems/demin-water.md`
- Create: `wiki/systems/fire-protection.md`
- Create: `wiki/systems/stator-cooling-water.md`
- Modify: `wiki/systems/auxiliary-feedwater.md` (rename to AFW)

- [ ] **Step 1: Rename AFW**

Edit `wiki/systems/auxiliary-feedwater.md`:
- title → "AFW", aliases add [Auxiliary Feedwater, auxiliary feedwater system]
- heading → `# AFW`

- [ ] **Step 2: Create stubs**

Create each with standard stub format (frontmatter + Function section + Connections):

`wiki/systems/abv.md`: title "ABV", aliases [aux building ventilation]
`wiki/systems/annunciators.md`: title "Annunciators", aliases [OHA, overhead annunciators, auxiliary annunciators]
`wiki/systems/control-air.md`: title "Control Air", aliases [service air, station air]
`wiki/systems/demin-water.md`: title "Demin Water", aliases [demineralized water]
`wiki/systems/fire-protection.md`: title "Fire Protection", aliases [fire suppression]
`wiki/systems/stator-cooling-water.md`: title "Stator Cooling Water", aliases [SCW]

- [ ] **Step 3: Verify and commit**

Run wikilink check and build check.

```bash
git add wiki/systems/
git commit -m "refactor: Phase 6 — create Auxiliary system articles

- Rename AFW
- Create stubs: ABV, Annunciators, Control Air, Demin Water, Fire Protection, Stator Cooling Water

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: Phase 7 — Final Cleanup

**Files:**
- Modify: `wiki/_index.md` (replace Systems/Concepts sections with categorized layout)
- Modify: `site/src/utils/aliases.ts` (update with new canonical names)
- Modify: ALL wiki files with wikilinks pointing to old article names (~100+ files)

- [ ] **Step 1: Replace _index.md Systems and Concepts sections**

Edit `wiki/_index.md`:
- Remove the entire `## Systems` section (flat list)
- Remove the entire `## Concepts` section
- Insert the new categorized Systems section with 6 subheaders (Electrical, Primary, Emergency, Control, Secondary, Auxiliary) and all ~55 article links as specified in the design spec

- [ ] **Step 2: Update aliases.ts**

Edit `site/src/utils/aliases.ts`:
- Update all entity aliases to point to new canonical titles
- Example changes:
  - `'CVCS': 'Chemical and Volume Control System'` → `'CVCS': 'CVCS'` (remove, or keep pointing to the alias which resolves)
  - `'RHR': 'Residual Heat Removal'` → `'RHR': 'RHR'` (simplify)
  - Add new entries for systems that gained new canonical names
- Remove any aliases that now point to deleted articles

- [ ] **Step 3: Bulk update wikilinks across all wiki files**

Write and run a Python script to find-and-replace all old-style wikilinks with new canonical names across the entire wiki. The script should:

1. Build a mapping of old name → new name:
   ```
   "Instrumentation and Controls" → "RPS/SSPS"
   "Pressurizer" → "Pressurizer & PRT"
   "Reactor Coolant System" → "RCS"
   "Reactor Coolant Pumps" → "RCPs"
   "Chemical and Volume Control System" → "CVCS"
   "Emergency Core Cooling Systems" → "ECCS"
   "Residual Heat Removal" → "RHR"
   "Containment Systems" → "Containment"
   "Containment Fan Coil Units" → "CFCUs"
   "Component Cooling Water" → "CCW"
   "Diesel Generators" → "EDGs"
   "Steam Generators" → "Steam Generator & Blowdown"
   "Reactor Core and Fuel" → "Rx Vessel & Internals"
   "Reactor Vessel" → "Rx Vessel & Internals"
   "Nuclear Design" → "Rx Vessel & Internals"
   "Thermal-Hydraulic Design" → "RCS"
   "Accident Analysis" → "ESF & Design"
   "Radiation Protection" → "Radiation Monitoring"
   "Adverse Containment" → "Containment"
   "AC Power" → "500KV"  (or context-dependent)
   "Feedwater and Condensate" → "Feed & Condensate"
   "Turbine-Generator" → "Main Turbine"
   "Auxiliary Feedwater" → "AFW"
   "Radioactive Waste Management" → "Waste Gas"
   ```

2. Scan all `.md` files in `wiki/` for `[[old name]]` patterns
3. Replace with `[[new name]]`
4. Handle display-text links: `[[old name|display text]]` → `[[new name|display text]]`
5. Print a summary of changes per file

- [ ] **Step 4: Remove legacy aliases from article frontmatter**

After all links are updated, remove the temporary legacy aliases from each article's frontmatter. For example, remove "Instrumentation and Controls" from RPS/SSPS aliases, remove "Pressurizer" from Pressurizer & PRT aliases, etc.

Keep aliases that are genuine alternate names (like "PZR" for Pressurizer & PRT, "SI" for ECCS).

- [ ] **Step 5: Verify**

Run `python3 scripts/check-wikilinks.py` — this is the critical check. All 2022/2023 exam question connections, all procedure articles, all EOP articles must resolve.

Run `cd site && npm run build` — clean build.

Spot-check a few high-traffic articles (RPS/SSPS, ECCS, Pressurizer & PRT) to confirm their Connections sections look right.

- [ ] **Step 6: Commit and push**

```bash
git add wiki/ site/src/utils/aliases.ts
git commit -m "refactor: Phase 7 — final cleanup, update all wikilinks to canonical names

- Replace _index.md with categorized Systems layout (6 categories)
- Remove Concepts section
- Update all wikilinks across wiki to new canonical names
- Remove legacy aliases from article frontmatter
- Update aliases.ts

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"

git push
```
