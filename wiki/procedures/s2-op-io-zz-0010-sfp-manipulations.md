---
title: "S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations"
category: procedures
status: draft
aliases:
  - S2.OP-IO.ZZ-0010
  - Spent Fuel Pool Manipulations
---

# S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations

## Purpose

Provides requirements and directions for fuel handling operations, including support system status checks, FHB ventilation requirements, and SFP boron concentration limits.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q95</div>
If BLDG AIR D/P LO alarm is invalid and will not clear, <span class="hi-exam">the local indicator may be used to continuously monitor FHB D/P</span> — fuel moves may resume with continuous local monitoring. <span class="hi-trap">Fuel moves are NOT prohibited when the console alarm is inoperable, as long as compensatory monitoring is in place.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q47</div>
Unit 2 Spent Fuel Handling Crane interlock — per Technical Requirements Manual <span class="hi-exam">TR 3.9.7 (tested IAW TR 4.9.7)</span>, the <span class="hi-exam">overload cutout prevents lifting loads &gt;2200 lbs</span> (so heavy loads cannot be moved over spent fuel). Unit-specific differences: <span class="hi-trap">Unit 2 bridge over-travel proximity switches only TRANSFER the crane to slow speed — movement continues if the direction PB is held; on Unit 1 they STOP movement.</span> Rad monitors <span class="hi-exam">2R5 (FHB-SFP) and 2R9 (FHB-New Fuel Storage Area) are NOT interlocked with the crane — they are interlocked with FHB ventilation</span>. A high signal on 2R32A does NOT lockout all crane motion (downward movement remains available to lower a fuel bundle).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q80</div>
Procedure purpose: "Provide instructions to ensure all required systems AND equipment are available OR OPERABLE prior to, and during, operations involving movement of irradiated fuel within storage pool." With FHV declared inoperable (e.g., loss of air to 21 FHB Supply Fan Inlet Damper renders the supply fan inoperable), <span class="hi-exam">LCO 3.9.12.a action a directs suspending all operations involving movement of fuel within the storage pool</span> until FHV is restored to operable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q94</div>
Per Precautions and Limitations 2.2: <span class="hi-exam">a Reactor Engineer OR a qualified SRO must be assigned for Spent Fuel Pool manipulations</span>. The assigned SRO supervises from the area — <span class="hi-trap">NOT specifically from the crane trolley, NOT contingent on SFP boron concentration, NOT located in the Fuel Handling Building, and NOT optional when a Qualified Reactor Engineer is present (the requirement is RE OR SRO, satisfied by either).</span>
</div>

## Connections

- Related systems: [[FHV]], [[Spent Fuel Pool]], [[Control Air]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]]
- Related procedures: [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]]
- Related exam questions: [[2016 Q47]], [[2016 Q80]], [[2016 Q94]], [[2023 Q95]]
- Related exam: [[2016 NRC Written Exam]], [[2023 NRC Written Exam]]
