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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A1-2</div>
SRO determines which scheduled shift activities may proceed during ongoing irradiated fuel movement in the SFP. Key references that drive the determination:<br>
- <span class="hi-exam">P&L 3.4 + page 17:</span> Operable SFP pumps only need ONE backed by an operable EDG.<br>
- <span class="hi-exam">P&L 3.7 + page 17:</span> Only ONE FHB exhaust fan required to be backed by an operable EDG.<br>
- <span class="hi-exam">Page 18:</span> Two SW pumps required operable, one of which is EDG-backed; remaining SW pumps from B/C vital with their EDGs operable provide redundancy.<br>
- <span class="hi-exam">Page 19:</span> FHB Truck Bay Door is required to be CLOSED during irradiated fuel movement.<br>
The blocking constraint that defeats new fuel delivery: <span class="hi-trap">opening the FHB Truck Bay Door for new fuel receipt would breach FHB ventilation boundary required for the SFP fuel-movement dose analysis.</span> 22 SW pump packing, 2A EDG tagout, and 21 Chiller oil change all PASS the equipment-availability test (TSAS 3.7.4 / 3.8.1.2 / 3.7.10 respectively).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q49</div>
During SFP Manipulations, a loss of SFP cooling (both SFP pumps unavailable, SFP heating up) leads to <span class="hi-exam">spent-fuel off-gassing and increased FHB charcoal filter radiation</span> as SFP temperature rises toward 150°F. See [[Spent Fuel Pool]], [[AB.SF-0001 — Loss of Spent Fuel Pool Cooling]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q68</div>
P&amp;L 2.2: spent fuel manipulations require assigning <span class="hi-exam">Reactor Services, a qualified SRO, or a Reactor Engineer</span> to supervise. A Qualified Reactor Engineer satisfies this — <span class="hi-exam">fuel movement can occur without a licensed SRO present</span>. See [[Spent Fuel Pool]].
</div>

## Connections

- Related systems: [[FHV]], [[Spent Fuel Pool]], [[Control Air]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]], [[TS 3/4.7 — Plant Systems]], [[TS 3/4.8 — Electrical]]
- Related procedures: [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]]
- Related exam questions: [[2016 Q47]], [[2016 Q80]], [[2016 Q94]], [[2023 Q95]], [[2015 Q49]], [[2015 Q68]]
- Related JPMs: [[2016 JPM SRO-A1-2]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2015 NRC Written Exam]]
