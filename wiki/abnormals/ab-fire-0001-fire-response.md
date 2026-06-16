---
title: "AB.FIRE-0001 — Control Room Fire Response"
category: abnormals
status: draft
aliases:
  - AB.FIRE-0001
  - S2.OP-AB.FIRE-0001
  - Fire Response
---

# AB.FIRE-0001 — Control Room Fire Response

## Purpose

Provides operator actions for responding to fire alarms and confirmed fires, including fires detected inside containment.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q63</div>
For a fire detected inside containment (OHA A-7, FIRE PROT FIRE): <span class="hi-exam">2FP147, Fire Protection Containment Isolation Valve, must be manually opened from the 2RP5 panel</span> when fire indication for both Zones 59 and 74 is received. The 2FP147 does NOT automatically open on a fire signal. <span class="hi-trap">The 2FP147 WILL automatically close on a Phase A containment isolation signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q75</div>
Containment fire response sequence: after recognizing fire in containment based on 2RP5 indications (Zone 59 and Zone 74 lit), crew trips Reactor, Turbine, and all RCPs, then enters EOP-TRIP-1 while continuing with AB.FIRE-0001. The <span class="hi-exam">NEXT required action is to OPEN the 2FP147 from the control room</span>. <span class="hi-trap">Trap: the deluge valves in containment are automatic and do NOT require manual operation by an NEO. PORV BLOCK valve EMER CLOSE is the action for a relay room fire, not a containment fire. Fire pumps will NOT have started yet because 2FP147 does not receive an automatic open signal — pumps start only after 2FP147 is opened.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q99</div>
Attachment 1, Step 3 Caution: If the Fire Department requests off-site firefighting assistance, permission must be obtained from the <span class="hi-exam">EDO/Shift Manager (SM)</span> prior to calling for off-site assistance. <span class="hi-trap">The CRS performs the procedure but does NOT have authority to authorize off-site fire assistance — only the Shift Manager can authorize this.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-h</div>
Fire alarm code #91 on 2RP5 = <span class="hi-exam">Aux. Bldg., Relay & Battery Rooms, 100 ft. elevation</span>. Relay Room is serviced by CAACS → select <span class="hi-exam">FIRE INSIDE CONTROL AREA</span> at 2RP2, direct Unit 1 to do same. Relay Room fire requires PORV isolation: place <span class="hi-exam">2PR1 and 2PR2 in MANUAL/CLOSE</span>, close <span class="hi-exam">2PR6 and 2PR7 (block valves)</span>, dispatch operator for EMERG CLOSE per Attachment 15.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q83</div>
Relay Room fire: the Relay Room is part of the <span class="hi-exam">Control Room Area (cooled by normal Control Room Area Air Conditioning)</span>, so the correct selection at 2RP2 is <span class="hi-exam">"FIRE INSIDE CONTROL AREA"</span>. A Relay Room fire requires dispatching an operator to align PORV Block Valve circuits to <span class="hi-exam">EMERG CLOSE per Attachment 15</span> because <span class="hi-exam">spurious opening of a PORV / Block valve is a concern</span> with a Relay Room fire. <span class="hi-trap">Trap: the Relay Room is INSIDE the Control Room Area despite being in the Aux. Bldg. — candidates may incorrectly select "FIRE OUTSIDE".</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-8</div>
Spurious <span class="hi-exam">OHA A-7 FIRE PROT FIRE</span> (Zone 33 TURB BLDG WEST EL 100) generated 60 s after the loss of 2E 4KV Group Bus electrical fault. PO dispatches an operator to investigate and contacts Fire Protection. NEO and Fire Protection both report <span class="hi-exam">no fire — only a strong acrid smell near the E Group Bus cubicles</span>. The crew continues with EOP-TRIP-1 / EOP-TRIP-2 — the fire alarm is determined to be a downstream symptom of the bus fault, not an actual fire requiring suppression actions.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q17</div>
Assessing affected Fire Zone(s) on 2RP5 (OHA A-7 FIRE PROT FIRE): the correct action is to <span class="hi-exam">open 2FP147 Fire Protection Containment Isolation when BOTH zone 59 and 74 alarms are received</span> (line normally isolated; pressurized only with both alarms). <span class="hi-trap">Distractor traps: a row "Fire" light can illuminate from a manual fire pull box — indication only, no fire-protection water flow; for a Relay Room fire (outside the CR but on the same AC system) Fire Outside Control Area is NOT selected; Halon supplied to the relay rooms does not indicate that EDG supply ventilation has stopped.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q75</div>
<span class="hi-trap">Trap: AB.FIRE-0001 (Control Room Fire Response) does NOT direct placing the EDG FIRE EMERGENCY BYPASS keylock switches in BYPASS</span> — that action is in [[AB.CR-0002 — Control Room Evacuation Due to Fire]], Attachment 4 (pages 15, 19, 22). The bypass switches remove SEC control from the EDG and are only operated after a fire-driven control-room evacuation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q92</div>
A valid deluge actuation (e.g., welding in the Turbine Building) annunciating <span class="hi-exam">OHA A-7 FIRE PROT FIRE</span> and <span class="hi-exam">OHA A-15 FIRE PUMP 1/2 RUN</span> directs entry into AB.FIRE-0001, which checks whether the Control Room is affected and then directs placing CR ventilation in the appropriate fire alignment. <span class="hi-trap">Trap: AB.FP-0001 (Fire Protection System Malfunction) is NOT entered for a valid deluge actuation — there is no malfunction indication, so the unit startup does not have to be stopped.</span> See [[AB.FP-0001 — Fire Protection System Malfunction]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q99</div>
CAS Attachment 1, Fire Dept. Support, Caution prior to Step 3.0: "In the event of a radiological emergency, the Nuclear Fire Protection Supervisor should obtain permission from the <span class="hi-exam">EDO/SM</span> prior to calling for off-site assistance." <span class="hi-trap">Security (CAS 2.0) is only notified when off-site assistance is requested, the Nuclear Fire Protection Supervisor leads the fire brigade and requests assistance through the EDO/SM (but does not authorize it), and the RAC handles the radiological aspect — none of them authorize the off-site request.</span>
</div>

## Connections

- Related systems: [[Containment]], [[Fire Protection]], [[EDGs]], [[Pressurizer Level & Press Control]], [[CAV]]
- Related procedures: [[AB.CR-0002 — Control Room Evacuation Due to Fire]], [[AB.FP-0001 — Fire Protection System Malfunction]]
- Related exam questions: [[2015 Q17]], [[2020 Q75]], [[2020 Q83]], [[2022 Q99]], [[2023 Q63]], [[2012 Q75]], [[2012 Q92]], [[2012 Q99]]
- Related JPMs: [[2022 JPM Sim-h]]
- Related scenarios: [[2017 Scenario 8]]
- Related exam: [[2015 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2017 NRC Operating Exam]]
