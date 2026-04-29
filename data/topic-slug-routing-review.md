# Topic Slug Routing Review

These unresolved slugs came from the previous organization system. Fill in `target_wiki` for each slug with the current wiki page it should resolve to. After review, this will become the controlled topic map used by the quiz/import pipeline.

Use current wiki slugs or paths where possible, for example `systems/4kv`, `systems/reactor-coolant-system`, `tech-specs/ts-3-4-5-eccs`, etc. If a slug should split into multiple targets, write each target and a short rule/note.

## Review format

- `legacy_slug`: old YAML metadata slug.
- `target_wiki`: **you fill this in**.
- `notes`: optional context or split rule.
- `examples`: questions currently using the slug.

## `instrumentation-and-controls`

- legacy_slug: `instrumentation-and-controls`
- target_wiki: rps-ssps
- notes: TODO
- occurrence_count: 24
- examples:
  - 2022 Q1: `q1-reactor-trip-breakers-ssps` — 2022 Q1 — Reactor Trip Breakers / SSPS Train Failure
    - wiki_path: `wiki/exams/2022/q1-reactor-trip-breakers-ssps.md`
    - yaml_topic: Reactor Trip Breakers / SSPS Train Failure
    - current_topic_slugs: `instrumentation-and-controls`
  - 2022 Q10: `q10-eop-frsm1-atws-actions` — 2022 Q10 — EOP-FRSM-1 / ATWS Actions
    - wiki_path: `wiki/exams/2022/q10-eop-frsm1-atws-actions.md`
    - yaml_topic: EOP-FRSM-1 ATWS Actions
    - current_topic_slugs: `instrumentation-and-controls`
  - 2022 Q19: `q19-dropped-rod-nis-indication` — 2022 Q19 — Dropped Rod / NIS Indication
    - wiki_path: `wiki/exams/2022/q19-dropped-rod-nis-indication.md`
    - yaml_topic: Dropped Rod / NIS Indication
    - current_topic_slugs: `instrumentation-and-controls`
  - 2022 Q20: `q20-misaligned-rod-recovery` — 2022 Q20 — Misaligned Rod Recovery
    - wiki_path: `wiki/exams/2022/q20-misaligned-rod-recovery.md`
    - yaml_topic: Misaligned Rod Recovery
    - current_topic_slugs: `instrumentation-and-controls`
  - 2023 Q1: `q01-rcs-low-flow-p7-p8-logic` — 2023 Q1 — RCS Low Flow / P-7 and P-8 Logic
    - wiki_path: `wiki/exams/2023/q01-rcs-low-flow-p7-p8-logic.md`
    - yaml_topic: RCS Low Flow / P-7 and P-8 Logic
    - current_topic_slugs: `instrumentation-and-controls, reactor-coolant-pumps`
  - 2023 Q5: `q05-pzr-pressure-channel-fails-high` — 2023 Q5 — PZR Pressure Channel Fails High / OT Delta-T Effect
    - wiki_path: `wiki/exams/2023/q05-pzr-pressure-channel-fails-high.md`
    - yaml_topic: PZR Pressure Channel Fails High / OT Delta-T Effect
    - current_topic_slugs: `pressurizer, instrumentation-and-controls`
  - 2023 Q11: `q11-loss-vital-instrument-bus-ni` — 2023 Q11 — Loss of Vital Instrument Bus / NI Channel Response
    - wiki_path: `wiki/exams/2023/q11-loss-vital-instrument-bus-ni.md`
    - yaml_topic: Loss of Vital Instrument Bus / NI Channel Response
    - current_topic_slugs: `instrumentation-and-controls, ac-power`
  - 2023 Q18: `q18-loss-secondary-heat-sink-msli` — 2023 Q18 — Loss of Secondary Heat Sink / MSLI on High Steam Flow
    - wiki_path: `wiki/exams/2023/q18-loss-secondary-heat-sink-msli.md`
    - yaml_topic: Loss of Secondary Heat Sink / MSLI on High Steam Flow
    - current_topic_slugs: `main-steam, instrumentation-and-controls`
  - 2023 Q21: `q21-containment-spray-logic-channel-removed` — 2023 Q21 — Containment Spray Logic / Channel Removed from Service
    - wiki_path: `wiki/exams/2023/q21-containment-spray-logic-channel-removed.md`
    - yaml_topic: Containment Spray Logic / Channel Removed from Service
    - current_topic_slugs: `containment-spray, instrumentation-and-controls`
  - 2023 Q34: `q34-mpc-fails-low-pzr-pressure-response` — 2023 Q34 — MPC Fails Low / PZR Pressure Response
    - wiki_path: `wiki/exams/2023/q34-mpc-fails-low-pzr-pressure-response.md`
    - yaml_topic: MPC Fails Low / PZR Pressure Response
    - current_topic_slugs: `pressurizer, instrumentation-and-controls`
  - 2023 Q35: `q35-reactor-trip-logic-7-percent-power` — 2023 Q35 — Reactor Trip Logic at 7% Power / Which Trip Active
    - wiki_path: `wiki/exams/2023/q35-reactor-trip-logic-7-percent-power.md`
    - yaml_topic: Reactor Trip Logic at 7% Power
    - current_topic_slugs: `instrumentation-and-controls`
  - 2023 Q36: `q36-rcp-underfrequency-logic` — 2023 Q36 — RCP Underfrequency Logic / 1/2 Taken Twice
    - wiki_path: `wiki/exams/2023/q36-rcp-underfrequency-logic.md`
    - yaml_topic: RCP Underfrequency Logic / 1/2 Taken Twice
    - current_topic_slugs: `instrumentation-and-controls, ac-power, reactor-coolant-pumps`
  - ... 12 more occurrences omitted from this review file.

## `ac-power`

- legacy_slug: `ac-power`
- target_wiki: TODO
- notes: manually route ac power to most applicable elecetrical wiki. any main turbine generator questions can be routed to main turbine. 
- occurrence_count: 9
- examples:
  - 2022 Q17: `q17-mvar-loading-voltage-regulator` — 2022 Q17 — MVAR Loading / Voltage Regulator
    - wiki_path: `wiki/exams/2022/q17-mvar-loading-voltage-regulator.md`
    - yaml_topic: MVAR Loading / Voltage Regulator
    - current_topic_slugs: `turbine-generator, ac-power`
  - 2023 Q7: `q07-pzr-backup-heater-power-supplies` — 2023 Q7 — PZR Backup Heater Power Supplies
    - wiki_path: `wiki/exams/2023/q07-pzr-backup-heater-power-supplies.md`
    - yaml_topic: PZR Backup Heater Power Supplies
    - current_topic_slugs: `pressurizer, ac-power`
  - 2023 Q11: `q11-loss-vital-instrument-bus-ni` — 2023 Q11 — Loss of Vital Instrument Bus / NI Channel Response
    - wiki_path: `wiki/exams/2023/q11-loss-vital-instrument-bus-ni.md`
    - yaml_topic: Loss of Vital Instrument Bus / NI Channel Response
    - current_topic_slugs: `instrumentation-and-controls, ac-power`
  - 2023 Q15: `q15-grid-disturbance-unit-trip-mvars` — 2023 Q15 — Grid Disturbance / Unit Trip Effects on MVARs
    - wiki_path: `wiki/exams/2023/q15-grid-disturbance-unit-trip-mvars.md`
    - yaml_topic: Grid Disturbance / Unit Trip Effects on MVARs
    - current_topic_slugs: `ac-power, turbine-generator`
  - 2023 Q36: `q36-rcp-underfrequency-logic` — 2023 Q36 — RCP Underfrequency Logic / 1/2 Taken Twice
    - wiki_path: `wiki/exams/2023/q36-rcp-underfrequency-logic.md`
    - yaml_topic: RCP Underfrequency Logic / 1/2 Taken Twice
    - current_topic_slugs: `instrumentation-and-controls, ac-power, reactor-coolant-pumps`
  - 2023 Q39: `q39-cfcu-power-supplies-4kv-bus-loss` — 2023 Q39 — CFCU Power Supplies / 4KV Vital Bus Loss
    - wiki_path: `wiki/exams/2023/q39-cfcu-power-supplies-4kv-bus-loss.md`
    - yaml_topic: CFCU Power Supplies / 4KV Vital Bus Loss
    - current_topic_slugs: `containment-fan-coil-units, ac-power`
  - 2023 Q40: `q40-containment-spray-pump-sequencing` — 2023 Q40 — Containment Spray Pump Sequencing / SEC Not Reset
    - wiki_path: `wiki/exams/2023/q40-containment-spray-pump-sequencing.md`
    - yaml_topic: Containment Spray Pump Sequencing / SEC Not Reset
    - current_topic_slugs: `containment-spray, ac-power, instrumentation-and-controls`
  - 2023 Q45: `q45-loss-2a-460v-bus-charging-pump` — 2023 Q45 — Loss of 2A 460V Bus / Charging Pump
    - wiki_path: `wiki/exams/2023/q45-loss-2a-460v-bus-charging-pump.md`
    - yaml_topic: Loss of 2A 460V Bus / Charging Pump Impact
    - current_topic_slugs: `ac-power, chemical-and-volume-control-system, pressurizer, dc-power`
  - 2023 Q48: `q48-edg-starting-air-compressor-power` — 2023 Q48 — EDG Starting Air Compressor Power Supplies
    - wiki_path: `wiki/exams/2023/q48-edg-starting-air-compressor-power.md`
    - yaml_topic: EDG Starting Air Compressor Power Supply
    - current_topic_slugs: `diesel-generators, ac-power`

## `radioactive-waste-management`

- legacy_slug: `radioactive-waste-management`
- target_wiki: TODO
- notes: 2022 q23 - abv and waste gas, 2023 q61 - waste liquid, 2023 q68 - waste liquid, 2023 q90 - containment, 2023 q98 - waste liquid
- occurrence_count: 5
- examples:
  - 2022 Q23: `q23-plant-vent-rad-monitor-response` — 2022 Q23 — Plant Vent Rad Monitor Response
    - wiki_path: `wiki/exams/2022/q23-plant-vent-rad-monitor-response.md`
    - yaml_topic: Plant Vent Rad Monitor Response
    - current_topic_slugs: `radioactive-waste-management`
  - 2023 Q61: `q61-liquid-radwaste-release` — 2023 Q61 — Liquid Radwaste Release / CW Circulators
    - wiki_path: `wiki/exams/2023/q61-liquid-radwaste-release.md`
    - yaml_topic: Liquid Radwaste Release / CW Circulator Trip
    - current_topic_slugs: `radioactive-waste-management`
  - 2023 Q68: `q68-radwaste-flow-recorder-odcm` — 2023 Q68 — Liquid Radwaste / ODCM / 2FR1064 Flow Recorder
    - wiki_path: `wiki/exams/2023/q68-radwaste-flow-recorder-odcm.md`
    - yaml_topic: Radwaste Flow Recorder / ODCM Requirements
    - current_topic_slugs: `radioactive-waste-management`
  - 2023 Q90: `q90-containment-pressure-relief-r12a-odcm` — 2023 Q90 — Containment Pressure Relief / R12A Failure ODCM
    - wiki_path: `wiki/exams/2023/q90-containment-pressure-relief-r12a-odcm.md`
    - yaml_topic: Containment Pressure Relief / R12A Failure ODCM
    - current_topic_slugs: `radioactive-waste-management`
  - 2023 Q98: `q98-cvcs-monitor-tank-release-2r18-inoperable` — 2023 Q98 — CVCS Monitor Tank Release / 2R18 Inoperable
    - wiki_path: `wiki/exams/2023/q98-cvcs-monitor-tank-release-2r18-inoperable.md`
    - yaml_topic: CVCS Monitor Tank Release / 2R18 Inoperable
    - current_topic_slugs: `radioactive-waste-management`

## `feed-and-condensate`

- legacy_slug: `feed-and-condensate`
- target_wiki: feed & condensate
- notes: its possible the & symbol gave the parser some trouble
- occurrence_count: 3
- examples:
  - 2022 Q44: `q44-feedwater-regulating-valves` — 2022 Q44 — Feedwater Isolation on SG Hi-Hi Level
    - wiki_path: `wiki/exams/2022/q44-feedwater-regulating-valves.md`
    - yaml_topic: Feedwater Regulating Valves
    - current_topic_slugs: `feed-and-condensate`
  - 2022 Q45: `q45-feedwater-isolation` — 2022 Q45 — SG Program Level and BF19 Response
    - wiki_path: `wiki/exams/2022/q45-feedwater-isolation.md`
    - yaml_topic: Feedwater Isolation
    - current_topic_slugs: `feed-and-condensate`
  - 2022 Q65: `q65-condensate-pump-trip-response` — 2022 Q65 — Condensate Pump Trip Response
    - wiki_path: `wiki/exams/2022/q65-condensate-pump-trip-response.md`
    - yaml_topic: Condensate Pump Trip Response
    - current_topic_slugs: `feed-and-condensate`

## `reactor-core-and-fuel`

- legacy_slug: `reactor-core-and-fuel`
- target_wiki: rx vessel & internals
- notes: TODO
- occurrence_count: 3
- examples:
  - 2023 Q8: `q08-fw-heater-high-level-reactor-power` — 2023 Q8 — FW Heater High Level / Effect on Reactor Power
    - wiki_path: `wiki/exams/2023/q08-fw-heater-high-level-reactor-power.md`
    - yaml_topic: FW Heater High Level / Effect on Reactor Power
    - current_topic_slugs: `feedwater-and-condensate, reactor-core-and-fuel`
  - 2023 Q55: `q55-urgent-failure-rod-control-gripper-coils` — 2023 Q55 — Urgent Failure / Rod Control Gripper Coils
    - wiki_path: `wiki/exams/2023/q55-urgent-failure-rod-control-gripper-coils.md`
    - yaml_topic: Urgent Failure / Rod Control Gripper Coils
    - current_topic_slugs: `instrumentation-and-controls, reactor-core-and-fuel`
  - 2023 Q75: `q75-axial-peaking-factor-boron-dilution` — 2023 Q75 — Axial Peaking Factor and Boron Dilution
    - wiki_path: `wiki/exams/2023/q75-axial-peaking-factor-boron-dilution.md`
    - yaml_topic: Axial Peaking Factor and Boron Dilution
    - current_topic_slugs: `reactor-core-and-fuel`

## `auxiliary-systems`

- legacy_slug: `auxiliary-systems`
- target_wiki: TODO
- notes: 2023 q14 - control air, 2023 q52 - control air
- occurrence_count: 2
- examples:
  - 2023 Q14: `q14-control-air-porv-accumulators-spray` — 2023 Q14 — Control Air / PORV Accumulators and Spray Valves
    - wiki_path: `wiki/exams/2023/q14-control-air-porv-accumulators-spray.md`
    - yaml_topic: Control Air / PORV Accumulators and Spray Valves
    - current_topic_slugs: `pressurizer, auxiliary-systems`
  - 2023 Q52: `q52-phase-a-ca330-instrument-air-containment` — 2023 Q52 — Phase A / CA330 Instrument Air to Containment
    - wiki_path: `wiki/exams/2023/q52-phase-a-ca330-instrument-air-containment.md`
    - yaml_topic: Phase A / CA330 Instrument Air Containment Isolation
    - current_topic_slugs: `containment-systems, auxiliary-systems`

## `electrical-power-systems`

- legacy_slug: `electrical-power-systems`
- target_wiki: TODO
- notes: 2023 q88 - 500kv, 2023 q93 - 4kv, also add circ water topic slug to q93
- occurrence_count: 2
- examples:
  - 2023 Q88: `q88-grid-disturbance-solar-magnetic` — 2023 Q88 — Grid Disturbance / Solar Magnetic Disturbance
    - wiki_path: `wiki/exams/2023/q88-grid-disturbance-solar-magnetic.md`
    - yaml_topic: Grid Disturbance / Solar Magnetic Disturbance
    - current_topic_slugs: `electrical-power-systems`
  - 2023 Q93: `q93-cw-bus-loss-circulator-trip` — 2023 Q93 — CW Bus Loss / Circulator Trip
    - wiki_path: `wiki/exams/2023/q93-cw-bus-loss-circulator-trip.md`
    - yaml_topic: CW Bus Loss / Circulator Trip
    - current_topic_slugs: `electrical-power-systems`

## `pressurizer-and-prt`

- legacy_slug: `pressurizer-and-prt`
- target_wiki: pressurizer & prt
- notes: TODO
- occurrence_count: 1
- examples:
  - 2022 Q34: `q34-prt-rupture-disc` — 2022 Q34 — PRT Rupture Disc / High Pressure Response
    - wiki_path: `wiki/exams/2022/q34-prt-rupture-disc.md`
    - yaml_topic: PRT Rupture Disc
    - current_topic_slugs: `pressurizer-and-prt`

## `radiation-protection`

- legacy_slug: `radiation-protection`
- target_wiki: radiation monitoring
- notes: TODO
- occurrence_count: 1
- examples:
  - 2022 Q22: `q22-fuel-handling-incident-alarms` — 2022 Q22 — Fuel Handling Incident Alarms
    - wiki_path: `wiki/exams/2022/q22-fuel-handling-incident-alarms.md`
    - yaml_topic: Fuel Handling Incident Alarms
    - current_topic_slugs: `radiation-protection`

## `steam-generator-and-blowdown`

- legacy_slug: `steam-generator-and-blowdown`
- target_wiki: steam generator & blowdown
- notes: TODO
- occurrence_count: 1
- examples:
  - 2022 Q26: `q26-eop-frhs2-afw-isolation` — 2022 Q26 — EOP-FRHS-2 AFW Isolation
    - wiki_path: `wiki/exams/2022/q26-eop-frhs2-afw-isolation.md`
    - yaml_topic: EOP-FRHS-2 AFW Isolation
    - current_topic_slugs: `afw, steam-generator-and-blowdown`

## `ts-3-4-1-reactivity-control`

- legacy_slug: `ts-3-4-1-reactivity-control`
- target_wiki: ts-3-4-1-3
- notes: TODO
- occurrence_count: 1
- examples:
  - 2023 Q56: `q56-rod-position-indication` — 2023 Q56 — Rod Position Indication / Group Demand Step Counter
    - wiki_path: `wiki/exams/2023/q56-rod-position-indication.md`
    - yaml_topic: Rod Position Indication / Group Demand Step Counter
    - current_topic_slugs: `instrumentation-and-controls, ts-3-4-1-reactivity-control`
