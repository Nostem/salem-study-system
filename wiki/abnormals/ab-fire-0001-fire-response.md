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

## Connections

- Related systems: [[Containment]], [[Fire Protection]], [[EDGs]], [[Pressurizer Level & Press Control]], [[CAV]]
- Related exam questions: [[2020 Q75]], [[2020 Q83]], [[2022 Q99]], [[2023 Q63]]
- Related JPMs: [[2022 JPM Sim-h]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
