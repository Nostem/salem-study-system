---
title: Spent Fuel Pool
category: systems
status: draft
aliases:
  - SFP
---

# Spent Fuel Pool

## Function

Provides storage and cooling for spent fuel assemblies. Includes SFP cooling and cleanup system.

## Spent Fuel Pool Cooling System

Removes decay heat from spent fuel stored in the spent fuel pool. Maintains pool water temperature and clarity. Two cooling trains per unit with heat exchangers cooled by CCW. (UFSAR 9.1.3)

## Anti-Siphon Design Features

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q62</div>
The SFP is designed to prevent fuel from becoming uncovered due to loss of system integrity: <span class="hi-exam">SFP cooling pump suction is approximately 4 feet below the pool surface</span> (inlet located above the top of fuel). The <span class="hi-exam">SFP pump return line discharges approximately 6 feet above the top of the fuel assemblies</span>. A <span class="hi-exam">1/2 inch anti-siphon hole located below the pool surface on the discharge (return) pipe</span> prevents draining due to return line failure. <span class="hi-trap">The anti-siphon hole is on the return (discharge) line, NOT on the suction pipe. There are no drain lines in the spent fuel pit. There are no check valves on the pump discharge or low-level cut-off switches.</span>
</div>

## SFP Routine Makeup Water Sources

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q33</div>
Per S2.OP-SO.SF-0001, the following water sources are allowed for <span class="hi-exam">ROUTINE makeup</span> to the Spent Fuel Pool: <span class="hi-exam">1) Demineralized Water System, 2) Primary Water Storage Tank, 3) CVCS Holdup Tanks, 4) Refueling Water Storage Tank</span>. <span class="hi-trap">The Fresh Water and Fire Protection Water Storage Tank is NOT an allowed ROUTINE makeup source.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q46</div>
Confirms the preferred-order list in <span class="hi-exam">Prerequisite 2.3</span> of S2.OP-SO.SF-0001 — the <span class="hi-exam">RWST is LAST (least preferred)</span> in the makeup-water priority. Used when responding to OHA C-35 SFP LVL LO caused by normal evaporation.
</div>

## Spent Fuel Handling Crane Interlocks (Unit 2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q47</div>
Unit 2 Spent Fuel Handling Crane interlocks (per S2.OP-IO.ZZ-0010 and TR 3.9.7 / 4.9.7): <span class="hi-exam">overload cutout prevents lifting loads &gt;<span class="val-trip">2200 lbs</span></span> over the spent fuel pool. <span class="hi-trap">Unit difference: Unit 2 bridge over-travel proximity switches only transfer crane to SLOW (not stop) — Unit 1 stops crane movement</span>. Rad monitors <span class="hi-exam">2R5 (FHB-SFP) and 2R9 (FHB-New Fuel Storage Area) interlock FHB ventilation — NOT the crane</span>. 2R32A (Fuel Handling Crane) does NOT lockout all crane motion — downward movement remains available to lower the fuel bundle.
</div>

## SFP Alarms and Level Setpoints

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q92</div>
SFP Low Level alarm setpoint: <span class="hi-exam val-alarm">128 feet, 0 inches</span>. Per S2.OP-AB.SF-0001, when the pool is boiling (212 &deg;F) and level is at the Low Level alarm, the crew must initiate makeup until the <span class="hi-exam">HI LEVEL ALARM actuates</span> — not just until the LOW LEVEL ALARM clears (which occurs at <span class="hi-exam">128 feet, 2 inches</span>). Both <span class="hi-exam">S2.OP-SO.SF-0006 (Emergency Fill) and S2.OP-SO.SF-0001 (Fill and Transfer)</span> are acceptable procedures for restoring level.
</div>

## FHV Operability During Fuel Movement

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q80</div>
TS 3.9.12 requires the Fuel Handling Ventilation System OPERABLE (2 exhaust fans + 1 supply fan operable AND operating; capable of slightly negative FHB pressure) during movement of irradiated fuel within the storage pool. Loss of air to the 21 FHB Supply Fan Inlet Damper makes the supply fan <span class="hi-exam">inoperable even though it remains running</span> (damper interlocked open with fan; fails closed on loss of air). Required action: <span class="hi-exam">suspend all operations involving movement of fuel within the storage pool</span> until FHV is restored to operable.
</div>

## Dropped Fuel Assembly Response

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q88</div>
Dropped fuel assembly in Unit 2 SFP with gas bubbles observed and 2R5 stabilized at 25 mR/hr: <span class="hi-exam">2R5 (FHB area radiation monitor) alarm setpoint <span class="val-alarm">11 mR/hr</span> (warning <span class="val-alarm">7 mR/hr</span>) automatically swaps FHB ventilation to the Charcoal Filter and starts BOTH FHB Exhaust Fans</span>. Normal FHB lineup is single Supply Fan running and BOTH Exhaust Fans running. Per S2.OP-AB.FUEL-0001, FHB Watertight Door is kept closed except for normal personnel passage. <span class="hi-trap">2R5 does NOT lock out crane motion — only 2R32A (on the crane itself) interlocks crane motion. The FHB Evacuation alarm actuates but only non-essential personnel are evacuated; required actions must be performed prior to ALL personnel evacuation.</span>
</div>

## SRO/RE Supervision of SFP Manipulations

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q94</div>
Per S2.OP-IO.ZZ-0010 Precautions and Limitations 2.2: <span class="hi-exam">a Reactor Engineer OR a qualified SRO must be assigned for Spent Fuel Pool manipulations</span>. Supervision is from the area, not a specific location — <span class="hi-trap">the SRO is NOT required to monitor directly from the crane trolley; the SRO is NOT required to be located in the Fuel Handling Building (any SRO assignment is acceptable as long as supervision is provided); SFP boron concentration is irrelevant to who must supervise; an SRO is NOT required to observe if a Qualified Reactor Engineer is present (RE OR SRO).</span>
</div>

## Mode 6 Entry During Refueling

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q95</div>
Per S2.OP-IO.ZZ-0009 (Defueled to Refueling) Step 5.1.6: <span class="hi-exam">Mode 6 is entered when the first fuel assembly is lowered into the reactor vessel</span>. <span class="hi-trap">Trap distractors: Mode 6 is NOT entered when fuel movement is "imminent" (the word "imminent" applies to IOP-3 / MODE 2 entry when Control Bank A withdrawal is imminent), NOT when an assembly is moved over the vessel, and NOT when the SM signs Attachment 1 authorizing entry.</span>
</div>

## Connections

- Related systems: [[FHV]], [[Refueling]], [[CCW]], [[CVCS]], [[Demin Water]], [[Radiation Monitoring]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]]
- Related procedures: [[S2.OP-SO.SF-0001 — Fill and Transfer of Spent Fuel Pool]], [[S1.OP-SO.SF-0001 — Fill and Transfer of Spent Fuel Pool]], [[AB.SF-0001 — Loss of Spent Fuel Pool Cooling]], [[S2.OP-SO.SF-0006 — Spent Fuel Pool Emergency Fill]], [[S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations]], [[S2.OP-IO.ZZ-0009 — Defueled to Refueling]], [[AB.FUEL-0001 — Fuel Handling Incident]]
- Related exam questions: [[2016 Q46]], [[2016 Q47]], [[2016 Q80]], [[2016 Q88]], [[2016 Q94]], [[2016 Q95]], [[2018 Q33]], [[2018 Q92]], [[2020 Q62]], [[2022 Q61]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
