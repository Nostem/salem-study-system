---
title: Pressurizer Level & Press Control
category: systems
status: draft
aliases:
  - PZR control
  - pressurizer control
---

# Pressurizer Level & Press Control

## Pressure Control

- **Pressure increase:** Spray valves open, condensing steam in the pressurizer steam space
  - Spray valves begin to open at <span class="val-normal">2260 psig</span>
  - Spray valves full open at <span class="val-normal">2310 psig</span>
- **Pressure decrease:** Heaters energize, generating steam
  - Proportional heaters begin at <span class="val-normal">2250 psig</span>
  - Proportional heaters full at <span class="val-normal">2220 psig</span>
  - Backup heaters on at <span class="val-normal">2210 psig</span>
- **Overpressure protection:**
  - PORVs lift at <span class="val-trip">2335 psig</span> (reset 2315 psig)
  - Safety valves lift at <span class="val-trip">2485 psig</span>
- (UFSAR T5.2-1)

## Pressurizer Heater Power Supplies

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q7</div>
PZR Backup Heater Group power supplies:<br>
- <span class="hi-exam">Group 1 (21): Normal — 2G 4KV Group Bus. Emergency backup — 2C 460V Vital Bus.</span><br>
- <span class="hi-exam">Group 2 (22): Normal — 2E 4KV Group Bus. Emergency backup — 2A 460V Vital Bus.</span><br>
Transfer to emergency backup source is MANUAL (not automatic). EOP-LOSC-2 step 26 directs restoring normal power or transferring to emergency backup.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q14</div>
Following a reactor trip + SI with instrument air to containment isolated, PORVs cycle on accumulators. When air is restored (<span class="hi-exam">accumulators automatically isolate and realign to normal containment control air when pressure is restored — above 90 psig normal supply vs. below 85 psig accumulator</span>). No manual action is required for accumulator realignment. <span class="hi-exam">Pressurizer spray valves reopen when air is restored</span> because the Master Pressure Controller (MPC) will have demand to open spray valves post-trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q34</div>
MPC fails low (0% output): <span class="hi-exam">spray valves close</span> (controlled by MPC) and <span class="hi-exam">backup heaters energize</span> → RCS pressure rises → PORVs open at <span class="val-trip">2335 psig</span>. <span class="hi-trap">PORVs are interlocked directly from PZR pressure, NOT from MPC output</span> — MPC failure does not prevent PORV actuation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS: if PZR level cannot be maintained <span class="hi-exam">> 4%</span> (with 2CV55 and 2CV71 fully open and level still lowering), <span class="hi-exam">actuate SI and return to EOP-TRIP-1</span>. <span class="hi-trap">PZR heaters will NOT energize with level < 17% — operating heaters to maintain saturated conditions is not possible when level is at 10% and lowering.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q92</div>
PZR pressure channel failure reportability: with one PZR pressure channel already tripped and a second failing LOW, the <span class="hi-exam">2/4 low PZR pressure trip coincidence is met</span> causing a reactor trip and SI. The SI is NOT valid (pressure was not actually low) and NOT reportable under RAL 11.3.1. The <span class="hi-exam">RPS actuation is reportable under RAL 11.3.2 as a 4-hour report</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q37</div>
PZR pressure channel fails HIGH: MPC output rises to 100% (spray valves open, heaters de-energize). To restore RCS pressure, operator must <span class="hi-exam">manually LOWER MPC demand</span> (close spray valves, energize heaters). TS 3.2.5 DNB Parameters: minimum DNBR limit is RCS pressure ≥ 2200 psia = <span class="hi-exam"><span class="val-trip">≥2185 psig</span></span>. <span class="hi-trap">2200 psia ≠ 2200 psig. The TS limit is 2200 psia which equals 2185 psig (subtract ~15 psi for atmospheric).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q9</div>
AB.PZR-0001 directs <span class="hi-exam">manual reactor trip when RCS pressure reaches <span class="val-trip">2000 psig</span> and lowering</span> (spray valve failed open scenario). Reason: prevent challenging the <span class="hi-exam">automatic reactor trip on OT Delta-T</span>. <span class="hi-trap">Not low PZR pressure — the auto trip on low PZR pressure is <span class="val-trip">1865 psig</span> (rate-compensated), which is well below 2000 psig. OT Delta-T trips first as pressure lowers because the OT Delta-T setpoint has a +K3*P pressure input.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q7</div>
Confirms 2022 Q9: AB.PZR-0001 PORV failed open sequence: 1) attempt to close PORV in manual, 2) <span class="hi-exam">close the associated block valve</span>, 3) if block valve fails to close THEN open control power breaker. CAS: trip reactor at <span class="val-trip">2000 psig</span> and lowering. Procedure bases: simulator showed auto trip at <span class="hi-exam">1950 psig on OT&Delta;T</span> — this is why 2000 psig was chosen.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q21</div>
PZR reference leg leak causes indicated level to read <span class="hi-exam">HIGHER</span> (lower reference leg head → lower DP across transmitter → controller interprets as higher level). Master Flow Controller responds by <span class="hi-exam">lowering charging flow</span>, so <span class="hi-trap">actual PZR level LOWERS while indication rises — a divergence between actual and indicated level</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q88</div>
Loss of all control air impact on PZR level: with a centrifugal charging pump in service, <span class="hi-exam">CV55 fails OPEN and CV71 fails CLOSED</span>. With letdown isolated (no letdown path), higher charging flow to RCP seals causes <span class="hi-exam">PZR level to RISE</span>. Per AB.CA-0001: locally adjust CV54 (Centrifugal Charging Pump Flow Control Valve) OR <span class="hi-exam">transfer to 23 PDP charging pump</span> (speed controller fails at low speed stop → minimizes RCP seal flow → extends time before PZR reaches 90%).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-i</div>
During LOOP, PZR backup heaters are transferred to emergency power per S2.OP-SO.PZR-0010 Section 5.3. Transfer is <span class="hi-exam">MANUAL (not automatic)</span>. Group 22 transfers to <span class="hi-exam">2A 460V Vital Bus</span>. Only <span class="hi-exam">3 of 14 heater disconnects remain ON</span> to limit load within the emergency bus capacity.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q50</div>
PZR Safety Valve seat leakage response: PZR level lowers below program level → <span class="hi-exam">master flow controller automatically RAISES charging flow</span>. <span class="hi-trap">Trap: PZR safety valves are located on top of the PZR, so candidates may think level rises. In reality, steam leaking out reduces steam space pressure AND inventory → level drops.</span> As RCS pressure lowers from the leak, the <span class="hi-exam">OT&Delta;T reactor trip setpoint automatically lowers (K3 pressure coefficient)</span> and trips the reactor before the fixed low PZR pressure setpoint of <span class="val-trip">1865 psig</span> is reached. <span class="hi-trap">OP&Delta;T setpoint varies with AFD, NOT pressure — do not confuse OT&Delta;T (pressure-dependent) with OP&Delta;T (AFD-dependent).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q9</div>
2LT-459 (Channel I PZR Level) variable leg leak: the variable leg is the <span class="hi-exam">low side of the D/P cell</span> and is connected to the pressurizer liquid space. A leak causes D/P to increase → <span class="hi-exam">indicated PZR level goes off scale LOW</span>. Actual PZR level and pressure also lower (inventory loss). PZR B/U heaters <span class="hi-exam">will NOT energize</span> because indicated level is below the <span class="val-trip">17% low level B/U heater cutoff setpoint</span>. <span class="hi-trap">Common misconception: D/P = 0 psid = hi pressurizer level (maximum indicated level), not D/P = maximum = hi level. A variable leg leak INCREASES D/P, indicating LOW.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q57</div>
PZR Level Channel I (controlling channel) fails HIGH: charging flow reduces to minimum (controller sees high level, reduces charging). Actual PZR level drops slowly. At <span class="hi-exam">17% actual level</span>, the alarm channel (Channel II) triggers <span class="hi-exam">letdown isolation and PZR heaters off</span>. With minimum charging and no letdown, level eventually rises and a <span class="hi-exam">Rx Trip on high PZR level occurs at 92% (2/3 channels II &amp; III)</span>. <span class="hi-trap">Key distinction: controlling channel fails HIGH = sequential events (charging min → level drops → letdown isolates → level eventually rises → trip). Controlling channel fails LOW = charging rises immediately AND letdown isolates immediately — NOT in the sequential order.</span> Auctioneered Tavg failed high only shifts program level to ~59%.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q36</div>
PORV channel assignments: <span class="hi-exam">2PR1 is controlled by Channel I (2PT-455). 2PR2 is controlled by Channels II & IV.</span> If Channel I fails LOW, <span class="hi-exam">2PR1 AUTO operation is blocked</span> (failed channel prevents PORV from seeing actual high pressure). 2PR2 remains functional on Channels II & IV and will <span class="hi-exam">open as pressure rises to the open setpoint</span>. <span class="hi-trap">PZR spray valves only function in AUTO via the controlling channel — if the controlling channel fails low, spray valves will NOT open to control pressure rise.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-c</div>
EOP-SGTR-1 Step 19 RCS depressurization using normal spray. Open <span class="hi-exam">2PS1 and 2PS3</span> spray valves. When Table D conditions met (RCS pressure < ruptured SG pressure AND PZR level > 11%), Step 19.1 CAS directs closing spray valves. <span class="hi-exam">2PS3 fails to close</span> — alternate path. Corrective action: <span class="hi-exam">STOP 21 and 23 RCPs</span> to eliminate spray flow path. 2PS3 spray valve is supplied by 21 and 23 RCP discharge; stopping these pumps removes the driving head for spray.
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[CVCS]], [[RPS/SSPS]], [[Control Air]], [[460/230V AC]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[EOP-TRIP-4 — Natural Circulation]], [[AB.CA-0001 — Loss of Control Air]], [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]]
- Related exam questions: [[2019 Q9]], [[2019 Q10]], [[2019 Q47]], [[2019 Q50]], [[2023 Q7]], [[2023 Q14]], [[2023 Q34]], [[2023 Q87]], [[2023 Q92]], [[2022 Q9]], [[2022 Q21]], [[2022 Q37]], [[2022 Q88]], [[2020 Q7]], [[2020 Q36]], [[2020 Q57]]
- Related JPMs: [[2019 JPM Sim-c]], [[2022 JPM IP-i]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]]
