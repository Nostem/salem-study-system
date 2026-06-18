---
title: "AB.LOAD-0001 — Rapid Load Reduction"
category: abnormals
status: draft
aliases:
  - AB.LOAD-0001
  - rapid load reduction
---

# AB.LOAD-0001 — Rapid Load Reduction

## Purpose
Provides operator actions for performing a rapid load reduction when directed by other abnormal procedures or when plant/grid conditions require a fast but controlled power decrease.

## Entry Conditions
- Directed by other abnormal procedures (e.g., AB.GRID-0001 during solar magnetic disturbance)
- Plant or grid conditions requiring rapid power reduction

## Key Actions
- Perform load reduction at the rate specified by the directing procedure
- Coordinate turbine load reduction with reactor power reduction
- Monitor critical plant parameters during the transient

**Exam & operating coverage:**

### Reactivity control & boration-rate determination

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q40</div>
A 100% → 20% rapid down power at 1% per minute IAW AB.LOAD-0001 causes an RCS outsurge as Tavg lowers; with charging master flow failed as-is, <span class="hi-exam">PZR program level at 20% power (Tavg 551.6°F) is ~28%</span>. See [[Pressurizer Level & Press Control]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q42</div>
After an AB.LOAD-0001 rapid power reduction overshoots (power down to ~7%, Tavg dropped to 545°F), an operator restoring Tavg by continuous manual rod withdrawal will (per FSAR 15.2.2.1) be terminated by the <span class="hi-exam">High Power Reactor Trip (low range), 25% on 2/4 PR NIs — basis DNB protection</span>. <span class="hi-trap">The 20% rod block on 1/2 IR NI is NOT credited in the FSAR and will not act quickly enough to prevent the trip.</span>
</div>

### Turbine load-reduction mechanics & rod control

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q76</div>
Rod control is <span class="hi-exam">normally placed in manual upon reaching 20% power in AB.LOAD-0001</span>. If rods are left in automatic, Permissive P-2 (&lt;15% turbine load) prevents automatic rod withdrawal, so any automatic rod withdrawal below P-2 is unexpected and is addressed with the abnormal rod-withdrawal procedure (AB.ROD-0003), <span class="hi-trap">not by lowering or tripping the Main Turbine per AB.LOAD-0001 — turbine actions do not address the rod failure</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q88</div>
During a Solar Magnetic Disturbance (SMD) > K-5 intensity with excess MVAR condition, AB.GRID-0001 Attachment 2 directs a load reduction to <span class="hi-exam"><= 77.6% (942 MWe)</span> at <span class="hi-exam">15% per min</span> using AB.LOAD-0001. <span class="hi-trap">Trap: both AB.GRID-0001 AND AB.LOAD-0001 are required — AB.GRID-0001 alone is insufficient.</span>
</div>

### Scenario coverage — SG tube leak driver

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #2</div>
Entered to perform the <span class="hi-exam">power reduction to &lt;50% within 1 hour</span> required by AB.SG-0001 CAS Action Level 3 for the 23 SG tube leak. RO calculates the required boron addition and uses <span class="hi-exam">boration with manual rod control while the PO reduces Main Turbine load</span>. The affected tube ruptures after the reduction is initiated, escalating to a reactor trip and SI.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #4</div>
After a 90 gpd SGTL meets AB.SG-0001 Action Level 3 (power must be <span class="hi-exam">&lt;50% within 1 hour</span>), the crew enters AB.LOAD-0001 to perform the rapid down-power. RO calculates the required boron addition; CRS orders a rate that ensures power &lt;50% within the hour; RO <span class="hi-exam">initiates RCS boration</span> and announces expected/actual rod movement. The down-power is interrupted when the affected SG tube ruptures.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
AB.LOAD-0001 entered to perform a controlled <span class="hi-exam">5%/min load reduction to 85%</span> with 2 Condensate pumps and 3 Heater Drain pumps in service after 23 Condensate pump trip (per AB.CN-0001 Attachment 4). RO calculates boron addition and rate for the power reduction; RO initiates boration; PO initiates turbine load reduction at the CRS-specified rate. During the downpower a Charging Master Flow Controller failure occurs, then a 21 SG tube leak develops — leading sequentially to AB.CVC-0001, AB.SG-0001, and ultimately a manual reactor trip and SI on tube rupture.
</div>

### Scenario coverage — RCS leak / LOCA driver

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
AB.LOAD-0001 entered (or AB.RC-0001 power reduction performed) following confirmed 20 gpm RCS leak exceeding TS 3.4.7.2 limits at 100% power. Operations Director directs <span class="hi-exam">30% per hour load reduction to 20%</span> in preparation for taking Unit 2 offline to investigate and repair the RCS leak. RO initiates boration; PO initiates turbine load reduction at the CRS-specified rate. <span class="hi-trap">During the controlled downpower the RCS leak escalates from 20 gpm to 150 gpm — PZR level cannot be maintained &gt;17%; CAS action requires manual reactor trip and SI before reaching FRHS-1 entry conditions.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
AB.LOAD-0001 entered for orderly unit shutdown after 35 gpm RCS leak exceeds TS limits. RO develops reactivity plan for shutdown and initiates boration. PO initiates turbine load reduction to <span class="hi-exam">20%</span> at CRS-specified rate. During load reduction, RCS leak worsens to LBLOCA.
</div>

### Scenario coverage — turbine & equipment failure driver

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
Entered for the <span class="hi-exam">automatic Stator Water main turbine runback</span>. When auto rod speed fails to minimum, the RO <span class="hi-exam">takes manual rod control</span>; if OHA E-16 ROD INSERT LMT LO-LO annunciates, the crew <span class="hi-exam">emergency-borates via [[S2.OP-SO.CVC-0008 — Rapid Boration]] until rods are at least 2 steps above the RIL</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Entered from AB.GEN-0001 to lower the Main Generator <span class="hi-exam">Radio Frequency Monitor &lt; 50%</span> (elevated stator temperatures, Point 0901 GEN RADIO FREQ HIGH). RO calculates and commences RCS boration; PO initiates turbine load reduction to the target load at the CRS-specified rate; RO maintains Tavg on program with rods/boration and energizes PZR heaters. During the downpower an MPT Sudden Pressure / FP deluge actuation forces a reactor trip. See [[AB.GEN-0001 — Main Generator Abnormal Stator Conditions]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
Entered from AB.TL-0001 (Loss of Main Turbine Lube Oil) after auto-start of ABOP and HP Seal Oil Backup pump requires a turbine shutdown. CRS directs power reduction at <span class="hi-exam">&lt;5%/min</span>. RO calculates boron addition required and maintains Tavg/Tref mismatch at minimum. PO monitors SGFP suction pressure (&gt;300 psig) and condensate pump suction temps. During the load reduction, main turbine bearing vibrations rise toward trip criteria — CRS may raise the power reduction rate based on rising vibrations. CRS ultimately directs reactor trip when conditions deteriorate (Rx power &gt;P-9 / 49%).
</div>

### Scenario coverage — condenser & circulating water driver

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #3</div>
Entered from AB.COND-0001 during loss of condenser vacuum (Event 4). CRS directs load reduction to stabilize backpressure. RO calculates required boron addition, CRS verifies, RO commences boration. PO initiates load reduction using turbine load control at CRS-specified rate.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
Entered for turbine load reduction to less than 80% power due to condenser DTs exceeding <span class="hi-exam">27 F</span> following loss of 21A-23A CW pumps. RO initiates boration IAW S2.OP-SO.CVC-0006. PO initiates turbine load reduction IAW S2.OP-SO.TRB-0001.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
Entered for load reduction to <span class="hi-exam">85%</span> following 23 Condensate Pump trip. RO initiates boration IAW S2.OP-SO.CVC-0006. PO initiates load reduction using turbine load control IAW S2.OP-SO.TRB-0001. RO maintains Tavg on program IAW Attachment 3. RO energizes all PZR heaters.
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]], [[Circ Water]], [[Control Rod Drive]], [[RPS/SSPS]], [[Pressurizer Level & Press Control]]
- Related procedures: [[AB.GRID-0001 — Grid Disturbance]], [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.COND-0001 — Loss of Condenser Vacuum]]
- Related exam questions: [[2023 Q88]], [[2014 Q42]], [[2012 Q40]], [[2012 Q81]], [[2012 Q76]]
- Related scenarios: [[2012 Scenario 1]], [[2012 Scenario 2]], [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2017 Scenario 7]], [[2018 Scenario 2]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2015 Scenario 2]], [[2015 Scenario 3]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]], [[2012 Scenario 3]]
- Related exam: [[2016 NRC Operating Exam]], [[2017 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
