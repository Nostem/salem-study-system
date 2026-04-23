---
title: "S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0011
---

# S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)

## Purpose

Provides operator response actions for miscellaneous control room alarms, including FHB building differential pressure alarms.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q95</div>
BLDG AIR D/P LO alarm response: if movement of irradiated fuel assemblies is in progress, <span class="hi-exam">first action is to suspend movement of irradiated fuel assemblies in the FHB</span>. Then validate the alarm by checking the local indicator. <span class="hi-trap">Suspending fuel moves is the FIRST action — validating the alarm comes AFTER, not before.</span> If the alarm is invalid and will not clear, the local indicator may be used to continuously monitor FHB D/P per S2.OP-IO.ZZ-0010.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-d</div>
Page 138 — RCP Standpipe Level Low alarm: causes include <span class="hi-exam">low seal flow across #2 seal or excessive #3 seal flow</span>. Key decision at Step 3.1: if standpipe low AND seal water leakoff flow alarm together → go to AB.RCP-0001. If standpipe low only → fill standpipe: open 2WR80, open affected standpipe supply valve (21WR62 for 21 RCP). When hi level alarm, close all.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q28</div>
Control Console Bezel Alarm "STANDPIPE LEVEL HI" with reduced #1 seal leak-off flow: both indications together confirm <span class="hi-exam">#2 seal failure</span>. <span class="hi-trap">STANDPIPE LEVEL LO alarm indicates a #3 seal problem — do not confuse high vs low standpipe alarm implications.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q35</div>
CCW pump status after SEC Mode III (Blackout + SI) loading: all CCW pumps are <span class="hi-exam">stripped and NOT restarted</span>. Any CCW pump selected for AUTO is <span class="hi-exam">transferred to Manual</span>. SEC Modes II, III, and VI cause AUTO-to-Manual transfer.
</div>

### Page 13 — Rod Drive Vent Fans AIR FLOW LO

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-a</div>
AIR FLOW LO alarm with SEQUENCE COMPLETE extinguished: cause is fan discharge pressure &lt; 2.0 INWC. CAUTION: operating with less than two Rod Drive Vent Fans in service could <span class="hi-exam">degrade the Rod Drive Coils</span> — operability determination required. Step 3.2: if SEQUENCE COMPLETE extinguished, <span class="hi-exam">immediately SWAP to standby Rod Drive Vent Fan</span> (STOP affected fan, START standby). Step 3.2.D: if <span class="hi-exam">NO Rod Drive Vent Fans in operation, TRIP the Reactor</span> and GO TO 2-EOP-TRIP-1. <span class="hi-trap">In the alternate path scenario, the standby fan initially starts successfully but then both remaining fans trip — step 3.2.D (previously N/A) becomes applicable and the reactor must be tripped.</span>
</div>

## Connections

- Related systems: [[RCPs]], [[CCW]], [[SECs]], [[Control Rod Drive]]
- Related procedures: [[S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations]], [[AB.RCP-0001 — RCP Abnormality]], [[S2.OP-SO.CBV-0001 — Containment Ventilation Operation]]
- Related exam questions: [[2020 Q28]], [[2020 Q35]], [[2023 Q95]]
- Related JPMs: [[2019 JPM Sim-a]], [[2022 JPM Sim-d]]
- Related exam: [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
