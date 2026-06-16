---
title: "AB.RAD-0001 — Radiation Monitor Abnormality"
category: abnormals
status: draft
aliases:
  - AB.RAD-0001
  - S1.OP-AB.RAD-0001
---

# AB.RAD-0001 — Radiation Monitor Abnormality

## Purpose

Provides operator actions for responding to area and process radiation monitor alarms and abnormalities.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q10</div>
On a Rx trip from 100% power with OHA A-6 RMS HI RAD annunciated and 2R19C (23 SG Blowdown) radiation monitor in alarm with rising counts during EOP-TRIP-2, the crew <span class="hi-exam">enters AB.RAD-0001 to verify the validity of the alarm (Step 3.2) while continuing in EOP-TRIP-2</span>. <span class="hi-trap">The R19 SGBD monitors are not accurate immediately following a unit trip — a manual SI is NOT warranted on a 2R19 alarm alone without corroborating indications.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q62</div>
If <span class="hi-exam">1R1A, Control Room Area, radiation monitor is in alarm</span>: coordinate with Unit 2 NCO to align Control Room Ventilation for ACCIDENT PRESSURIZED mode IAW S1.OP-SO.CAV-0001 and S2.OP-SO.CAV-0001. Direct Radiation Protection to survey area to determine source of activity rise. <span class="hi-trap">1R1A is an area radiation monitor — it does NOT automatically actuate CAV in AP Mode. Manual actuation from the affected unit's RP2 panel is required.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-h</div>
Containment pressure relief high radiation: Attachment 1, Step 10 directs ensuring <span class="hi-exam">2VC1, 2VC4, 2VC5, and 2VC6 are CLOSED</span>. This provides an alternate procedural path for isolating the containment pressure relief if the applicant enters AB.RAD-0001 instead of using step 5.2.5 of S2.OP-SO.CBV-0002.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q23</div>
<span class="hi-exam">2R41D (Plant Vent) in ALARM</span> automatically closes <span class="hi-exam">2WG41, 2VC1/VC4 (purge dampers), and 2VC5/VC6 (pressure relief dampers)</span>. Also aligns <span class="hi-exam">2R45 skid to accident sampling</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q51</div>
R19 SGBD radiation monitor WARNING setpoint automatic actuations: <span class="hi-exam">Unit 1 — NO automatic actuations at WARNING</span>. <span class="hi-exam">Unit 2 — automatically closes ALL GB10s, GB185s, and 2GB50</span>. At the ALARM setpoint, both units take automatic isolation actions (Unit 1: all GB4s, GB8s, GB10s, GB185s, 1GB50; Unit 2: affected SG GB4). <span class="hi-trap">WARNING vs ALARM actions differ significantly, and there is a unit difference at the WARNING level.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q23</div>
2R32A (Fuel Handling Crane area rad monitor) failure to alarm setpoint: <span class="hi-exam">ONLY crane hoist-up operation is prevented</span>. No bypass interlock pushbutton exists. <span class="hi-exam">2R5 and 2R9 cause FHB exhaust to swap to 22 HEPA plus Charcoal but have NO crane interlocks.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q33</div>
2R32A failed high: <span class="hi-exam">ONLY crane motion other than downward movement of suspended load is locked out</span>. FHB ventilation does NOT transfer to HEPA and Charcoal on 2R32A alarm — that occurs only on 2R5 and 2R9 alarm.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
2R1B Control Room Radiation Monitor Channel 1 fails high. Control room ventilation actuates in <span class="hi-exam">Accident Pressurized Mode</span> (intake dampers for 2R1B Ch. 1 and 1R1B Ch. 2 are isolated, making both channels inoperable). PO calls Unit 1 to check 1R1B Ch. 2 reading (normal). After CAV reset and dampers reopened, 1R1B Ch. 2 is operable — CRS enters <span class="hi-exam">TS 3.3.3.1.b Action 28</span> (immediately place in Accident Pressurized or Recirculation mode) for 2R1B Ch. 1 only. Then transitions to <span class="hi-exam">Action 27</span> once only one channel remains inoperable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q83</div>
AB.RAD-0001 Attachment routing: <span class="hi-exam">Attachment 1 (Process Radiation Monitors)</span> is used for process rad monitor alarms including <span class="hi-exam">R41D (Plant Vent Noble Gas Release Rate)</span>. <span class="hi-exam">Attachment 2 (Process Filter Radiation Monitors)</span> is used for filtered systems. An unplanned gaseous release from the 11 GDT alarms on R41D (because the GDT discharges to the plant vent), and the crew uses Attachment 1 (not Attachment 2) to stop the release. <span class="hi-trap">R12A-B (Cont or Vent Gas Effluent/Iodine) monitors containment vent gas, NOT the plant vent where GDTs discharge.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
OHA A-6 RMS TRBL during 35 gpm RCS leak inside containment. <span class="hi-exam">2R11A containment radiation monitor rising/in alarm</span>. CRS enters AB.RAD-0001 concurrent with AB.RC-0001. Rad Pro contacted for CFCU operation recommendation — PO places <span class="hi-exam">2 CFCUs in Low Speed and 2 in High Speed</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
21 SG tube leak at 89.4% power. Entry concurrent with AB.SG-0001. Initial cue: OHA A-6 with <span class="hi-exam">2R53A 21 Main Steamline N-16 monitor &gt;1000 gpd</span> in alarm; OHA A-6 reflash on <span class="hi-exam">2R15 Condenser Air Ejector monitor</span>; later <span class="hi-exam">2R19A in warning/alarm</span> with SGBD isolation on high radiation. CRS dispatches operator to isolate TGA and Condensate Polisher area sump pumps to limit secondary release path.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
OHA A-6 unexpected annunciation during a 20 gpm RCS leak at 100% power. <span class="hi-exam">2R11A containment radiation monitor reading rises</span> and OHA C-2 CNTMT SUMP PMP START unexpected annunciates. CRS enters AB.RAD-0001 concurrent with AB.RC-0001. Rad Pro contacted for CFCU recommendation — PO places <span class="hi-exam">2 CFCUs in Low Speed and 2 CFCUs in High Speed</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q60</div>
Plant-vent gaseous-effluent monitoring: <span class="hi-exam">1R41D (Noble Gas Release Rate) provides automatic termination of release on high gaseous effluent</span> and rises during a containment pressure relief; 1R41B is an intermediate-range monitor whose sample flow only starts as the low-range 1R41A nears its high end. See [[Radiation Monitoring]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q73</div>
Per AB.RAD-0001 Attachment 5, the <span class="hi-exam">2R9 New Fuel Storage ARM High Radiation Alarm realigns FHB ventilation through the charcoal filters and starts both FHB Exhaust fans</span> — the only listed ARM that causes a ventilation alignment change (2R32A prevents fuel-crane up-motion; 2R52 only lights an alarm; 2R44A has no auto function). See [[Radiation Monitoring]], [[FHV]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q27</div>
Per AB.RAD-0001 Attachment 5, <span class="hi-exam">EITHER R44A OR R44B (Containment High Range) reaching 1E5 R/hr automatically places the Subcooling Margin Monitor (SMM) in ADVERSE Mode</span>. <span class="hi-trap">The other area monitors in containment (R2 Containment 130', R7 In-Core Seal Table) do NOT input into the SMM.</span> See [[Radiation Monitoring]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
During the 20 gpm RCS leak inside containment (Event 3), CRS enters AB.RAD-0001 after the unexpected <span class="hi-exam">OHA A-6</span> annunciation accompanies the rising <span class="hi-exam">2R11A containment radiation monitor</span> reading. AB.RAD-0001 runs concurrent with AB.RC-0001 (Reactor Coolant System Leak) to address the rising containment activity as the leak develops. See [[Radiation Monitoring]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 IP-k</div>
During an authorized liquid radwaste release (S2.OP-SO.WL-0001 Section 5.5), a <span class="hi-exam">2R18 (Waste Disposal Liquid) monitor HIGH RADIATION alarm (~10⁵ counts, RED HI RAD light lit)</span> is a release-termination condition: the operator immediately directs the NCO to CLOSE 2WL51 (Liquid Release Stop Valve) to terminate the release and notifies the control room of the high-radiation condition. See [[Waste Liquid]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-h</div>
On a 2R18 (Liquid Waste Disposal) Hi Rad alarm during an authorized liquid release, the AB.RAD-0001 flow is: 3.1 DETERMINE affected monitor (2R18); 3.2 <span class="hi-exam">Is the alarm valid? — yes, since a liquid release just commenced, 2R18 is sampling it, and the monitor was proven operable by the Attachment 2 §2.3 source check</span>; 3.6 announce on Plant PA ("Radiation Monitor 2R18 Liquid Waste Disposal is in alarm, Auxiliary Building 84 elevation"); 3.8 notify SM/CRS to refer to the Event Classification Guide, ODCM, and Tech Specs; 3.9 INITIATE the applicable attachment. <span class="hi-exam">Attachment 1 step 5.1 — for 2R18, ENSURE 2WL51 (TO CIRC WTR DISCHARGE) is CLOSED to stop all Liquid Waste releases</span>, then terminate the release procedure in effect.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #2</div>
The 23 SG tube leak first annunciates as <span class="hi-exam">OHA A-6 RMS HI RAD OR TRBL with 2R53C in alarm and rising</span>. CRS contacts RP to perform the primary-to-secondary leak rate response and may enter AB.RAD-0001 (Abnormal Radiation) first to diagnose the affected monitor before entering [[AB.SG-0001 — Steam Generator Tube Leak]]. As the leak escalates, OHA A-6 reflashes with 2R15, 2R19C, and 2R41D alarming.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Containment]], [[Radiation Monitoring]], [[Refueling]], [[CAV]], [[Steam Generator & Blowdown]]
- Related procedures: [[S1.OP-SO.CAV-0001 — Control Room Ventilation Operation]], [[S2.OP-SO.CBV-0002 — Containment Pressure Vacuum Relief System Operation]], [[AB.SG-0001 — Steam Generator Tube Leak]], [[S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]]
- Related exam questions: [[2015 Q10]], [[2018 Q7]], [[2018 Q83]], [[2019 Q8]], [[2019 Q33]], [[2020 Q23]], [[2020 Q51]], [[2022 Q23]], [[2023 Q62]], [[2015 Q60]], [[2015 Q73]], [[2012 Q27]]
- Related JPMs: [[2023 JPM Sim-h]], [[2014 JPM IP-k]], [[2012 JPM Sim-h]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2018 Scenario 1]], [[2018 Scenario 2]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2015 Scenario 1]], [[2012 Scenario 2]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
