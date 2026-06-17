---
title: "EOP-LOCA-2 — Post LOCA Cooldown and Depressurization"
category: eops
status: draft
aliases:
  - EOP-LOCA-2
  - post LOCA cooldown
---

# EOP-LOCA-2 — Post LOCA Cooldown and Depressurization

## Purpose

Guides operators through cooldown and depressurization following a loss of coolant accident, including evaluation of natural circulation conditions.

## Key Actions / Information

### Step 11 — RCS Cooldown to Cold Shutdown

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q70</div>
Step 11 — T-COLD Cooldown Rate limit: maintain less than <span class="hi-exam"><span class="val-trip">100 &deg;F/HR</span></span> maximum. To use condenser steam dumps when TAVG is less than <span class="hi-exam val-trip">543 &deg;F</span> (P-12 Lo TAVG block), <span class="hi-exam">BOTH "BYPASS TAVG" BEZEL Pushbuttons (A AND B) must be depressed</span>. <span class="hi-trap">Trap: 50 &deg;F/HR is the normal cooldown limit per S2.OP-IO.ZZ-0006 (Hot Standby to Cold Shutdown) — EOP-LOCA-2 allows 100 &deg;F/HR. Also, the BYPASS TAVG blocking solenoids are in SERIES — BOTH A AND B must be depressed (not A OR B). If they were in parallel, either one alone would suffice.</span>
</div>

### Step 19 — RCP Status / Step 19.1 RNO

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q19</div>
During performance of LOCA-2, the alarm that requires the associated response is the <span class="hi-exam">RWST Lo Level console alarm at 15.2 feet → transfer RCS to Cold Leg Recirculation</span> (a CAS action in LOCA-2). <span class="hi-trap">Distractor traps: the PZR Low Level alarm comes in at 5% below program (~22% at low Tavg during a SBLOCA), not at a fixed 17%; the 2R53A-D N16 Main Steam Line monitors provide no useful indication after the reactor is shut down (aligning SGBD is an SGTR-1 action, not LOCA-2); and opening 21AF21 has no effect when 22 AFW pump has no power.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q22</div>
The depressurization phase of LOCA-2 exists to <span class="hi-exam">refill the pressurizer</span>. If the PZR is already filled (level &gt;25%) the procedure goes directly to the <span class="hi-exam">SI flow reduction process — stop all but one RCP and begin stopping ECCS pumps</span>. With all RCPs running there are no voids to collapse, and there is no CAS transition to TRIP-3 under these conditions. <span class="hi-trap">Do not stop ALL RCPs, energize all PZR heaters to collapse (non-existent) voids, or recommence depressurization once PZR level is already &gt;25%.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q91</div>
EOP-LOCA-2 (Post LOCA Cooldown/Depressurization) <span class="hi-exam">terminates Containment Spray</span> at Step 18 (the transition from LOCA-1 if RCS pressure &gt;420 psig and the TRIP-3 criteria are not met). See [[Containment Spray]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q76</div>
PZR vapor space SBLOCA procedure path: EOP-LOCA-1 SI termination criteria met (subcooling, PZR level rising, RCS pressure stable) → transition to <span class="hi-exam">EOP-TRIP-3 (SI Termination)</span> → reduce ECCS flow → RCS pressure lowers with unisolable leak → EOP-TRIP-3 transitions to <span class="hi-exam">EOP-LOCA-2</span>. The path is LOCA-1 → TRIP-3 → LOCA-2, not directly from LOCA-1 to LOCA-2.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
Entered from EOP-TRIP-3 CAS when PZR level cannot be maintained &gt;11% during SI termination. <span class="hi-exam">Discriminating event:</span> in TRIP-3, opening 2CV68 and 2CV69 (charging discharge valves) reveals a previously isolated SBLOCA — leak escalates from ~150 gpm to ~2000 gpm equivalent. <span class="hi-exam">RO opens BIT isolation valves 2SJ4, 2SJ5, 2SJ12, 2SJ13 and shuts normal charging line isolation valves 2CV68 and 2CV69</span> per CAS direction; CRS transitions to EOP-LOCA-2 to commence the post-LOCA cooldown and depressurization sequence with continued ECCS injection.
</div>

### Step 29 — Natural Circulation Monitoring

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q50</div>
EOP-LOCA-2 Step 29 natural circulation evaluation requires ALL of the following:<br>
&bull; <span class="hi-exam">RCS Subcooling based on CETs > 0&deg;F</span><br>
&bull; <span class="hi-exam">SG Pressure stable or lowering</span><br>
&bull; <span class="hi-exam">RCS T<sub>HOT</sub> stable or lowering</span><br>
&bull; <span class="hi-exam">CETs stable or lowering</span><br>
&bull; <span class="hi-exam">SG pressure at saturation pressure for RCS T<sub>COLD</sub></span><br>
Example: CETs 600&deg;F, RCS 1645 psig (T<sub>SAT</sub> = 609&deg;F → subcooling = 9&deg;F), T<sub>COLD</sub> 509&deg;F (P<sub>SAT</sub> = 725 psig matches SG pressure) → natural circulation IS established. If NOT established, <span class="hi-exam">raise steam dumping rate</span> (increases SG heat removal → promotes natural circulation flow). <span class="hi-trap">Trap: lowering steam dumping rate raises SG pressure, which REDUCES the temperature differential and works AGAINST natural circulation.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q2</div>
Step 19.1 evaluates natural circulation conditions: subcooling >0 degrees F, SG pressures stable, T-Hots dropping, CETs lowering, T-Colds at SG saturation temperature.
</div>

### CAS — ECCS Pump Restart Criteria

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q73</div>
EOP-LOCA-2 CAS ECCS restart criteria (after SI/Charging Pump reductions): the crew must restart ECCS Pumps when <span class="hi-exam">EITHER RCS Subcooling reaches 0&deg;F OR PZR Level cannot be maintained greater than 11%</span>. These are OR conditions — <span class="hi-trap">either condition alone triggers ECCS pump restart, not BOTH required simultaneously</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q27</div>
During ECCS pump reduction for vital bus redundancy: <span class="hi-exam">22 SI Pump stopped</span> because it shares <span class="hi-exam">2C 4KV bus with the 22 Charging Pump</span> (must maintain charging for RCS makeup/boration). <span class="hi-exam">21 SI Pump stays running</span> (separate 2A bus).
</div>

### Step 22 — Charging Pump Reduction Decision Logic

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q76</div>
EOP-LOCA-2 POST Step 22 Charging Pump Reduction with 2 SI Pumps running, 1 RCP running, and NORMAL containment conditions (pressure < 4.0 psig): required subcooling from Table C is <span class="hi-exam">38&deg;F</span>. If subcooling requirement met AND PZR level > <span class="hi-exam">25% (33% adverse)</span>, the next action is to <span class="hi-exam">stop a Charging Pump</span>. Step 22.2 checks if at least two T-Hots are less than <span class="hi-exam">365&deg;F</span> — this step is only reached if subcooling is NOT met. <span class="hi-trap">Trap: four different paths through Step 22 depending on subcooling status, T-Hot status, and PZR level status. Must evaluate in order: 22.1 → 22.4 (if subcooling met), or 22.1 → 22.2 → 22.3/22.4 (if subcooling not met).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q3</div>
EOP-LOCA-2 Step 21 "Charging Pump Reduction": subcooling requirements from Table C depend on <span class="hi-exam">number of SI pumps running, RCP status, and containment conditions (normal vs adverse)</span>. With only 1 SI pump running (2A 4KV bus faulted), all RCPs stopped, and containment pressure at 4.3 psig (<span class="hi-exam">adverse conditions</span>), the required subcooling is <span class="hi-exam">141°F</span>. To use steam tables: convert <span class="hi-exam">1035 psig to 1049.7 psia</span>, look up T-Sat = 550.56°F, then max CET = 550.56 - 141 = <span class="hi-exam">409°F</span>. <span class="hi-trap">Common error: using psig directly in steam tables instead of converting to psia (add 14.7). Using 1035 psia gives T-Sat of 548.83°F and an incorrect answer of 407°F.</span>
</div>

### Step 31 — RCS Depressurization Subcooling Strategy

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q21</div>
Step 31 strategy: during the post-LOCA depressurization (SI pumps stopped, normal charging aligned, depressurizing with normal spray), RCS subcooling is <span class="hi-exam">minimized to reduce RCS break flow</span>, because only the <span class="hi-exam">minimal makeup provided by the charging pumps</span> is available. <span class="hi-trap">Traps: maximizing subcooling is NOT to keep RCPs running (RCP operation is not required for this event) and NOT to prevent a core-cooling CSF challenge (core cooling is not challenged on loss of subcooling at these temperatures/pressures). PZR heater operation may be needed to slow the rise in PZR level, but that is not the reason for minimizing subcooling.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q27</div>
Step 14 NOTE — voiding identification during depressurization: without RCPs running, the upper head remains relatively hot compared with the active regions of the RCS. Steam formation during depressurization in the upper head <span class="hi-exam">displaces water into the Pressurizer, causing rapidly increasing Pressurizer level</span>. <span class="hi-trap">Rising PZR level (not lowering SI flow, rising RCS pressure, or lowering subcooling) is the procedural indication for voiding per EOP-LOCA-2.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-c</div>
Step 20 RCS depressurization: with no RCPs running, normal spray is unavailable. Attempt PORV (2PR2) — if it fails to open, RCS pressure NOT dropping → use <span class="hi-exam">Auxiliary Spray: OPEN 2CV75, CLOSE 2CV77 and 2CV79</span>. Stop depressurization when <span class="hi-exam">PZR level >77% (74% adverse) or RCS subcooling <10F</span>. Restore aux spray to normal: close 2CV75, reopen 2CV77 or 2CV79.
</div>

### Step 35 — Accumulator Isolation

## Connections

- Related systems: [[RCS]], [[ECCS]], [[CVCS]], [[Pressurizer & PRT]], [[RCPs]], [[Main Steam]], [[Radiation Monitoring]], [[AFW]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-3 — SI Termination]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam questions: [[2015 Q21]], [[2018 Q50]], [[2018 Q70]], [[2019 Q73]], [[2019 Q76]], [[2020 Q3]], [[2020 Q27]], [[2022 Q27]], [[2023 Q2]], [[2023 Q76]], [[2015 Q91]], [[2014 Q22]], [[2012 Q19]]
- Related JPMs: [[2023 JPM Sim-c]]
- Related scenarios: [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2012 NRC Written Exam]]
