---
title: "AB.CA-0001 — Loss of Control Air"
category: abnormals
status: draft
aliases:
  - AB.CA-0001
  - S2.OP-AB.CA-0001
  - Loss of Control Air
---

# AB.CA-0001 — Loss of Control Air

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for responding to a loss of control/instrument air on Salem Unit 2, including identification of affected equipment and manual operation of air-operated valves.

## Key Information

### Attachment 2 — Auxiliary Feedwater System Valve Failure Positions

| Valve | Fails | Description | Manual Op |
|-------|-------|-------------|-----------|
| 21-24AF11 | FO | 23AFP Disch to 21-24SG | Yes |
| 21-24AF21 | FO | AFP to 21-24SG | Yes |
| 21-23AF52 | FC | AFP Suct XConn | Yes |
| 21-22AF40 | FO | 21-22AF Pump Recirc | Yes |
| 2MS53 | FHSS | 23AFP Turbine Governor | Yes |
| 2MS132 | FO | 23AFP Turbine Steam Inlet | - |
| 2DR6 | FO | Supply to AFW | Yes |

### Other Key Valve Failure Positions

| Valve | Fails | Description | Manual Op |
|-------|-------|-------------|-----------|
| 21/22SW122 | FO | SW Inlet Control Valve to CCW HX | Yes |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q43</div>
2MS132 (23 AFW Turbine Steam Inlet Valve) <span class="hi-exam">fails OPEN on loss of air</span>. This causes 23 AFW pump to start and inject cold feedwater into all SGs, raising reactor power above 100% RTP. Operator should reduce power per S2.OP-IO.ZZ-0004.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q44</div>
2DR6 (AFW Tank Makeup valve) <span class="hi-exam">fails OPEN on loss of air</span>. This causes AFWST level to rise and potentially overflow. Per Attachment 2, 2DR6 can be manually operated from the field to control tank level.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
21SW122 (SW Inlet Control Valve to CCW HX) <span class="hi-exam">fails OPEN on loss of air</span> (fails CLOSED on loss of 125VDC). When open, SW flow rises through CCW HX, lowering CCW temperature, which lowers RHR HX outlet temperature and raises cooldown rate. Can be manually operated per Attachment 2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q13</div>
The RHR HX flow control valve (21RH18) and HX bypass valve (2RH20) both <span class="hi-exam">fail AS IS on loss of control air</span> — both are supplied air exclusively from the <span class="hi-exam">"A" air header (fed by the Unit 2 ECAC)</span>. During a station blackout (LOOP with all Unit 2 EDGs and ECAC failed), control air on the "A" header bleeds away and the valves remain at their last position. <span class="hi-trap">Console valve-position indication stays accurate because 115VB inverter power is available for at least 2 hours following a LOPA.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q15</div>
ECAC starting criteria and CAS: if <span class="hi-exam">2B CA Header is &le; 88 psig</span>, notify Unit 1 NCO to start <span class="hi-exam">#1 ECAC</span> (#1 ECAC senses CA Header B). CAS: if <span class="hi-exam">BOTH CA headers lower to &lt; 80 psig, Trip the Reactor</span>. <span class="hi-trap">#2 ECAC senses CA Header A (not B). #1 ECAC senses CA Header B (not A). The ECAC number does NOT match the header letter. The CAS requires BOTH headers &lt; 80 psig, not EITHER.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q45</div>
BF19 (Main Feedwater Regulating Valves) on loss of all station air: <span class="hi-exam">BF19s start to close at <span class="val-alarm">80 psig</span> control air header pressure</span> (per AB.CA-0001 bases). CAS directs: monitor BF19s for closure and inability to control SG level, or less than <span class="val-trip">80 psig</span> control air header pressure → trip the reactor. <span class="hi-trap">85 psig is the ECAC auto-start setpoint, not the BF19 closure pressure.</span> BF19s receive air from Unit 1 via Lunkenheimer panels, but on total loss of all station air compressors, no Unit 1 CA available. <span class="hi-trap">ECACs cannot supply BF19 CA headers — a check valve isolates the turbine building headers from the ECAC supply.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q88</div>
On loss of all control air with letdown isolated: <span class="hi-exam">1CV55 fails OPEN and 1CV71 fails CLOSED</span>, resulting in higher charging flow and pressure to RCP seals, causing <span class="hi-exam">PZR level to RISE</span>. Two preferred actions: (1) locally control charging flow by adjusting <span class="hi-exam">1CV54, CENT CHG PUMP FLOW CONT VLV</span>, or (2) transfer to <span class="hi-exam">13 PDP</span> whose speed controller fails at the low speed stop, minimizing seal flow. <span class="hi-trap">PZR level rises (not lowers) because charging flow increases with letdown isolated and CV55 failed open.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q61</div>
ECAC manual start criteria per Step 3.10: start 2 ECAC when <span class="hi-exam">2A Control Air Header &le; <span class="val-alarm">88 psig</span></span>. With headers trending down (99→88→79→72 psig on 2A, 103→93→85→79 psig on 2B), earliest ECAC start is when 2A first hits 88 psig. CAS reactor trip criteria: <span class="hi-exam">BOTH 2A and 2B Control Air Headers indicate &lt; <span class="val-trip">80 psig</span></span> — earliest trip is when 2B (the last header to drop) falls below 80 psig. <span class="hi-trap">Trap: 100 psig is the threshold for starting the remaining Station Air Compressor (Step 3.7), not the ECAC. Also, the reactor trip requires BOTH headers below 80 psig — not just ONE header.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q61</div>
ECAC manual start criteria: crews will MANUALLY start the 1 ECAC and 2 ECAC when the 1A/1B/2A/2B Control Air Headers lower to a MAXIMUM of <span class="hi-exam val-alarm">88 psig</span>. <span class="hi-trap">100 psig is the threshold at which the remaining Station Air Compressor is started — not the ECAC manual start threshold.</span> Ensuring proper operation of the BF19s (Main Feedwater Control Valves) is <span class="hi-exam">NOT</span> a reason for starting the ECACs — <span class="hi-trap">check valves in the CA system prevent the ECACs from supplying the BF19s</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q93</div>
AB.CA-0001 CAS reactor trip criteria (SRO question): when <span class="hi-exam">BOTH Control Air Headers indicate less than <span class="val-trip">80 psig</span></span> (1A at 79 psig, 1B at 77 psig), the crew's next action is to <span class="hi-exam">TRIP the Reactor</span> and perform EOP-TRIP-1 CONCURRENTLY with <span class="hi-exam">AB.CA-0001 Attachment 12 (LOCAL CONTROL OF SG PRESSURE AND LEVEL)</span>. <span class="hi-trap">Trap: Attachment 5 (Excess Flow Check Valves) only applies when at least one header is GREATER than 80 psig (Step 3.17). Attachment 6 (Abnormal Cooling Water Lineups) is not required unless cooling water to air compressors was lost. A controlled shutdown per IO.ZZ-0004 is NOT appropriate when BOTH headers are below 80 psig.</span>
</div>

### PZR Level and RCS Cooldown Requirement

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q80</div>
Per S2.OP-AB.CA-0001: any time Pressurizer Level approaches a MINIMUM of <span class="hi-exam"><span class="val-alarm">90%</span></span>, the crew is required to commence an <span class="hi-exam">RCS Cooldown to 350 &deg;F using guidance contained in S2.OP-AB.CA-0001 itself</span> (NOT S2.OP-IO.ZZ-0006). <span class="hi-trap">Trap: 70% is the PZR LEVEL HI Bezel Alarm, not the cooldown trigger. The cooldown threshold is 90%. Also, the cooldown is directed by AB.CA-0001, not the IOP for Hot Standby to Cold Shutdown.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q93</div>
Number 1 ECAC provides air to 1B and 2B CA Headers ONLY due to <span class="hi-exam">check valves between Unit 1 Control Air and Station Air</span>. Per S1.OP-AB.CA-0001, Attachment 12 ("Local Control Of SG Pressure and Level") is directed when <span class="hi-exam">BOTH 1A and 1B Control Air Headers indicate less than <span class="val-trip">80 psig</span></span>. <span class="hi-trap">Trap: the criterion is BOTH headers, not EITHER header, below 80 psig.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q90</div>
BF19 (SG FW CONT V) valve failure position on loss of control air: <span class="hi-exam">BF19s fail CLOSED</span>. SG levels are expected to <span class="hi-exam">LOWER</span> until local control of BF19s can be established. If the crew manually trips the reactor because SG levels cannot be maintained, the crew performs <span class="hi-exam">2-EOP-TRIP-1 AND S2.OP-AB.CA-0001 concurrently</span> (CAS directs concurrent performance). <span class="hi-trap">Trap: some ABs (e.g., AB.COND-0001) direct performing EOP-TRIP-1 ONLY after a reactor trip. AB.CA-0001 specifically directs concurrent performance — do not assume all ABs have the same CAS.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q34</div>
RHR HX valve failure modes on loss of air: <span class="hi-exam">21RH18 (RHR HX Outlet FCV) and 2RH20 (RHR HX Bypass) are fail-as-is valves</span>. An air line break to 21RH18 during stable shutdown cooling has <span class="hi-exam">NO effect on the RHR system</span> — the valve holds its position. <span class="hi-trap">It does not fail open (no cooldown) and does not fail shut.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q90</div>
Total loss of Control Air at 7% power during normal power ascension (after manual reactor trip): per AB.CA-0001, at 7% Main Feed has already been established and AFW secured per the IOP. The rapid loss of CA causes <span class="hi-exam">BF19s/40s to fail SHUT</span> (loss of feed flow from the operating SGFP) and <span class="hi-exam">2MS132 (23 AFW Turbine Steam Inlet Valve) to fail OPEN</span>, starting the <span class="hi-exam">23 AFW (TDAFW) pump operating at maximum speed</span>. AB.CA-0001 directs a Field Operator to <span class="hi-exam">locally establish manual speed control of the 23 AFW pump to prevent 23 AFW pump runout and SG overfill</span>. The Feedwater Interlock actuates with the reactor tripped and Tavg low setpoint reached. <span class="hi-trap">MDAFW pump distractors are plausible if the candidate doesn't know at what power the IOP directs swapping AFW to Main Feed (so &quot;MDAFW pumps previously in service&quot; is wrong at 7% post-power-ascension). Pressure Override does not preclude using 21/22 AFW pumps as feed supply — they are simply not the active path here.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-h</div>
<strong>Total Loss of Control Air progression and alternate path:</strong> Initial conditions — 100% power, WG release in progress from 21 GDT, #3 SAC C/T. Cascade: #2 SAC trips → 2 ECAC auto-starts (loads at 85 psig); #1 SAC then trips and locks out; #1 ECAC has tripped (per cue when contacted). With only 2 ECAC available, 2B Control Air Header drops below 80 psig (the alternate-path entry per <span class="hi-exam">Step 3.19</span>). <span class="hi-exam">Critical alternate-path actions: (1) Step 3.58 — close 2CV3, 2CV4, 2CV5, 2CV2, 2CV277, 2CV7 to isolate letdown; (2) Step 3.57 — terminate any liquid/gaseous release by closing 2WL51 and 2WG41 (GDT TO PLANT VENT); (3) CAS Step 6.0 — when BF19s close on loss of CA and SG levels cannot be maintained, manually trip the reactor BEFORE the auto-trip on lo-lo SG NR level, then perform EOP-TRIP-1 immediate actions concurrently with AB.CA-0001</span>. Approximate event timeline from RT-1: <span class="hi-trap">1:00 — 1 SAC auto starts; 1:30 — 1 SAC trips; 3:50 — 2 ECAC begins loading; 4:10 — 2B Control Air header reaches 80 psig (SA low pressure alarm); 4:25 — CA low pressure alarm; 6:30 — 21–24BF19 Feed Reg Valves begin closing; 7:10 — G-15 OHA ADFCS TRBL.</span> Notes: All 3 SAC supply breakers open is an auto-start signal for both ECACs but only the Unit 2 ECAC will auto-start (Unit 1 will not). 2A control air header is supplied from #2 ECAC; 2B from #1 ECAC. Next-to-load SAC requires Station Air pressure 5 psig below the 105 psig follow setpoint for ~5 seconds.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q19</div>
On Console Alarm CONTROL AIR PRESSURE LO with only the "A" header degraded (A at 78 psig and dropping slowly, B at 93 psig and steady, Station Air 110 psig steady), the ARP directs the operators to <span class="hi-exam">go to S2.OP-AB.CA-0001 and verify the redundant air panels have swapped to the "B" control air header</span> (the swap is verified after the NOTE at step 55 or 63). <span class="hi-trap">A reactor trip is NOT required — the stem does not indicate a loss of Control Air on both headers; there is also no direction to lower power and start AFW pumps.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q64</div>
With the operating SAC tripped (none restartable) and the Unit 2 ECAC tripped immediately after starting, both units lose Control Air. The AB.CA-0001 CAS action directs: <span class="hi-exam">if BOTH CA header pressures are &lt;<span class="val-trip">80 psig</span>, then trip the Rx</span> — applied to BOTH units. With all station air lost, the <span class="hi-exam">BF19s (Feed Reg Valves) go shut</span> as their air runs out; <span class="hi-trap">the FRVs are NOT supplied backup air from the ECACs (a check valve prevents control air from reaching the BF19s, and per p.38 of AB.CA only Station Air supplies the BF19s). Unit 1 ECAC feeds the 1B and 2B headers; Unit 2 ECAC feeds the 1A and 2A header.</span> Result: BOTH reactors are tripped based on impending BF19 closures.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q14</div>
On a total loss of Control Air with no air source recoverable, AB.CA-0001 directs that <span class="hi-exam">all Radwaste releases in progress are terminated</span> — this ensures that during a gradual depressurization of the Control Air system a release is not in progress when the dilution medium flowrate may be changing (per the bases document, page 8 of 12). Two other actions tested as distractors: an operator is dispatched to <span class="hi-exam">manually control 23 AFW pump speed</span> (running at the high speed stop) because the 21-24AF11 valves <span class="hi-exam">fail OPEN</span>, making pump runout a concern with higher steam supply pressure present (page 3 of 12); and the reactor is tripped only when <span class="hi-trap">BOTH</span> Control Air header pressures are below <span class="val-trip">60 psig</span> (not &lt;80 psig on EITHER header).
</div>

## Connections

- Related systems: [[AFW]], [[Service Water]], [[CCW]], [[RHR]], [[Containment]], [[CVCS]], [[Pressurizer & PRT]], [[Feed & Condensate]], [[Control Air]], [[Waste Gas]], [[Steam Generator & Blowdown]], [[EDGs]], [[DC Power]]
- Related procedures: [[S2.OP-IO.ZZ-0004 — Power Operation]], [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]], [[SC.OP-SO.SA-0001 — Station Air System Operation]]
- Related exam questions: [[2015 Q13]], [[2016 Q90]], [[2018 Q26]], [[2018 Q61]], [[2018 Q90]], [[2018 Q93]], [[2019 Q61]], [[2019 Q80]], [[2019 Q93]], [[2020 Q15]], [[2020 Q45]], [[2022 Q88]], [[2023 Q43]], [[2023 Q44]], [[2023 Q51]], [[2014 Q19]], [[2014 Q64]], [[2012 Q14]], [[2012 Q34]]
- Related JPMs: [[2016 JPM Sim-h]], [[2020 JPM IP-j]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOPA-1 — Loss of All AC Power]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
