---
title: "S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0002
  - Alarm B-2
---

# S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B

## Purpose

Provides alarm response procedures for Unit 2 Overhead Annunciator Window B alarms, including DC bus voltage, service water header pressures, and other B-panel alarms.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q13</div>
OHA B-2, "2A 125 VDC CNTRL BUS VOLT LO": On loss of <span class="hi-exam">2A Vital 125 VDC Bus</span> (0 VDC on 2RP9), the only affected equipment from the listed malfunctions is <span class="hi-exam">2A EDG is NOT available for start</span>. #1 SGFP Emergency Oil Pump and Main Turbine Emergency Oil Pump are powered from other DC bus segments (250 VDC or 28 VDC), not the 2A 125 VDC bus.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q15</div>
OHA B-10, "2B 125VDC CNTRL BUS VOLT LO": with the 2B Vital Bus de-energized (2B Diesel Generator failed to start) following a unit trip, the required action is to <span class="hi-exam">place the 2B2 Battery Charger in service</span>. The 2B1 charger is normally in service; 2B2 (backup) use is <span class="hi-exam">limited to 7 days per Tech Specs</span>; there is <span class="hi-exam">no automatic swap</span>. <span class="hi-trap">Trap: transferring 2B 125 VDC loads to their alternate source is done only if the 2B2 charger cannot be placed in service.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q61</div>
OHA B-13 (21 SW HDR PRESS LO) and B-14 (22 SW HDR PRESS LO) — per S2.OP-AR.ZZ-0002 pages 28-29: <span class="hi-exam">alarm setpoint <span class="val-alarm">99.5 psig</span></span>; the <span class="hi-exam">standby SW pump auto-starts at <span class="val-alarm">95.5 psig</span></span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
<span class="hi-exam">OHA B-13 / B-14 (low SW header pressures)</span> are the diagnostic alarms for a Loss of All SW. The ARP for B-13/B-14: (3.1) Verify header low pressure using OHAs 2PA5373 on 2CC1; (3.2) IF low pressure exists due to known system configuration, THEN go to S2.OP-SO.SW-0001 to adjust system pressure; (3.3) <span class="hi-exam">IF a valid low pressure condition exists, THEN go to S2.OP-AB.SW-0001, Loss of Service Water Header Pressure</span>. From AB.SW-0001 Step 3.8, with no SW header outage, the procedure routes to AB.SW-0005 for the loss-of-all-SW critical actions.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q80</div>
OHA Window B SW alarms: <span class="hi-exam">B-13/B-14/B-15 (SW header pressure low) followed by B-48 (SW VLV RM FLOODED)</span> indicate a SW leak; the B-48 flooding alarm localizes it to a single CFCU supply line (78' Mech Pen Area), mitigated per AB.SW-0001. See [[Service Water]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q18</div>
<span class="hi-exam">OHA B-18 (2C 125VDC CNTRL BUS VOLT LO)</span>: the 125VDC bus control band per the NCO logs is <span class="val-normal">125-139.8V</span>. A reading of 126V with no current on 2RP9 is within the normal band, so the ARP directs having maintenance <span class="hi-exam">adjust the charger float voltage</span> (action IS required per the ARP — not merely continued monitoring). <span class="hi-trap">No ground is indicated, so S2.OP-SO.125-0004 (Ground Detection) is not entered; 126V is above the TS minimum, so swapping to the standby charger is not required.</span>
</div>

## Connections

- Related systems: [[DC Power]], [[EDGs]], [[Service Water]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[S1.OP-SO.115-0013 — 1C Vital Instrument Bus UPS System Operation]]
- Related exam questions: [[2015 Q15]], [[2016 Q61]], [[2020 Q13]], [[2015 Q80]], [[2014 Q18]], [[2012 Q46]], [[2012 Q57]], [[2012 Q62]]
- Related JPMs: [[2016 JPM Sim-e]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
