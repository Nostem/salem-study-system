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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q5</div>
PZR heaters de-energize based on <span class="hi-exam">PZR low level (at <span class="val-trip">17%</span>)</span>, NOT on an SI signal. Although the SI signal causes many automatic actions, PZR heater de-energization is NOT one of them. <span class="hi-trap">Trap: candidates may confuse this with the many SI-actuated functions and incorrectly believe SI directly de-energizes the heaters.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q9</div>
PZR pressure control sequence during a rising pressure transient: spray valves begin opening at <span class="val-normal">2260 psig</span>, <span class="hi-exam">spray valves fully open at <span class="val-normal">2310 psig</span></span>. PORVs close setpoint is <span class="hi-exam"><span class="val-normal">2315 psig</span></span>. PORVs open at <span class="val-trip">2335 psig</span>. MPC at 100% output when PZR pressure reaches <span class="hi-exam">2355 psig</span>. At 2312 psig: <span class="hi-exam">spray valves fully open</span>. At 2340 psig: <span class="hi-exam">PORVs open</span>. <span class="hi-trap">Trap: 2315 psig is the PORV CLOSE setpoint (not the spray full-open setpoint). Candidates may confuse the 2315 psig value.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q55</div>
PORV open logic requires <span class="hi-exam">2 of 2 coincidence</span>: 2PR1 requires PT-455 AND PT-457 both > <span class="val-trip">2335 psig</span>; 2PR2 requires PT-456 AND PT-474 both > <span class="val-trip">2335 psig</span>. With only PT-455 (Channel I) failing high, <span class="hi-exam">NO PORVs open</span> — neither PORV has both input channels reading high. <span class="hi-trap">Trap: PORVs are NOT controlled by the Master Pressure Controller (MPC). Each PORV has a dedicated 2/2 pressure coincidence circuit independent of the MPC. A single channel failure high cannot open any PORV.</span>
</div>

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q7</div>
After a controlling PZR level channel fails LOW with a CCP in service, charging flow rises automatically (program-actual deviation). When AB.CVC-0001 directs MFC to MANUAL, actual PZR level continues rising above program. <span class="hi-exam">Returning MFC to AUTO before PZR level is restored to program will force charging flow to LOWER</span> (because actual is now above program). If charging flow lowers below ~<span class="val-alarm">60 gpm</span>, <span class="hi-exam">letdown line flashing can occur due to inadequate cooling in the regenerative heat exchanger</span> — this is the AB.CVC-0001 caution against premature MFC return-to-auto.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q82</div>
2LT-459 (Channel I PZR Level) fails HIGH while controlling: 22 Backup Heaters <span class="hi-exam">automatically energize</span> due to <span class="hi-exam">+5% PZR level deviation (LACTUAL - LREF)</span>. 21 Backup Heaters are already ON in manual. <span class="hi-trap">Trap: candidates may incorrectly think B/U heaters will de-energize because PZR pressure (2235 psig) is > 2210 psig (the pressure-based B/U heater auto-energize setpoint). The level deviation logic is a separate, independent auto-energize path for the backup heaters.</span> TS action: per LCO 3.3.1.1, 2LT-459 must be placed in the tripped condition within <span class="hi-exam">72 hours</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q36</div>
PZR Spray Valve 2PS1 fails open at 4% power during a startup: with NO operator action the <span class="hi-exam">FIRST protective action is Safety Injection on Low PZR Pressure</span>. <span class="hi-exam">Low PZR pressure reactor trip is BLOCKED below P-10</span> (and is not reinstated until &gt; P-10). <span class="hi-exam">Low PZR Pressure SI was reinstated during heatup/pressurization when RCS pressure was &gt;<span class="val-normal">1915 psig</span></span>. OT/DT trip would not occur because D/T is very small at 4% power. PZR level will not rise (the leak is depressurizing through spray) so high-level Rx trip does not actuate. <span class="hi-trap">Trap: candidates may pick low-pressure Rx trip — but it is blocked below P-10. SI on low PZR pressure is the active protective action below P-10.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
<span class="hi-exam">Controlling PZR Pressure Channel I (PT-455) fails HIGH</span> (final 2500 psig) during a 2% power ascension. Symptoms: PZR heaters de-energize, both PZR Spray valves drive fully open, OHA <span class="hi-exam">D-8 RC Press HI</span> and <span class="hi-exam">E-42 2PR1 ½ Trip</span>. RO determines actual pressure is not high (lowering due to spray + heaters off), reports spray valves open, recommends Master Pressure Controller in manual; lowers MPC demand to close sprays. Recovery sequence: select <span class="hi-exam">Channel III</span> for control, match MPC demand to current pressure, return MPC to AUTO. <span class="hi-exam">Shut 2PR6</span> and dispatch WCC to remove power from 2PR6 within one hour. Remove failed channel from service per <span class="hi-exam">S2.OP-SO.RPS-0003</span>. Tech specs: 3.3.1.1 Action 6, 3.3.2.1.b Action 19*, 3.4.5.b, 3.2.5.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q38</div>
With the controlling PZR level channel failed low (0%), <span class="hi-exam">PZR backup heaters should NOT be energized — the PZR low-level cutoff (17%) keeps them OFF</span>, and a control channel failing low also deenergizes all PZR heaters. Backup heaters normally energize at 5% above program; PZR heaters energize at 2210 psig decreasing and turn off at 2218 psig increasing. See [[CVCS]], [[AB.CVC-0001 — Loss of Charging]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q39</div>
The PZR Spray Nozzle is protected from thermal shock by <span class="hi-exam">a small continuous spray-line warming flow bypassed around the PS1 and PS3 Spray Valves</span>, set during startup to keep the spray line temperature &gt;500°F with both spray valves shut. See [[S2.OP-SO.PZR-0008 — Setting Pressurizer Spray Bypass Flow]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q40</div>
After a controlling PZR level channel fails low and the Charging Master Flow Controller (MFC) is taken to Manual (AB.CVC-0001), actual charging flow rises and PZR level exceeds program. <span class="hi-trap">Returning the MFC to auto before restoring PZR level to program forces charging flow LOW; if charging flow drops to ~60 gpm or below, inadequate regenerative-HX cooling causes letdown-line flashing.</span> See [[CVCS]], [[AB.CVC-0001 — Loss of Charging]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q81</div>
On a toxic-gas control room evacuation, local plant control (per AB.CR-0001) determines <span class="hi-exam">PZR level at the Hot Shutdown Panel 213 and controls it via local control of the CV55 CHARGING FLOW CONTROL VLV to maintain 22%-77%</span> (positive manual field control). See [[CVCS]], [[AB.CR-0001 — Control Room Evacuation]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q87</div>
On a 2PR1 PORV failing open at power: PZR pressure lowers, so the <span class="hi-exam">PZR Master Pressure Controller (MPC) output LOWERS</span> (turning on heaters and closing spray valves). Per AB.PZR-0001 the PORV is isolated by shutting its Block Valve; <span class="hi-trap">if the PORV is not restored within 72 hours, a unit shutdown is required (TS 3.4.5 action b)</span> — distinct from a leaking PORV (isolated with power maintained to the Block Valve, no shutdown). See [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[TS 3/4.4 — Reactor Coolant System]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
The controlling PZR Pressure channel (Channel I / PT455) fails low, annunciating <span class="hi-exam">OHA D-16 RC PRESS LO, E-12 PZR PRESS LO, and E-28 PZR HTR ON PRESS LOW</span>. RO takes the Master Pressure Controller to MANUAL to mitigate, then <span class="hi-exam">selects PZR Pressure Channel III for control</span> and restores the Master Controller to AUTO. Crew removes the failed channel from service and closes/de-energizes 2PR6 PORV block valve. Later a 2nd channel (PT457) fails low, causing an auto Inadvertent SI on Lo PZR pressure. See [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]].
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[CVCS]], [[RPS/SSPS]], [[Control Air]], [[460/230V AC]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[EOP-TRIP-4 — Natural Circulation]], [[AB.CA-0001 — Loss of Control Air]], [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]], [[S2.OP-SO.PZR-0008 — Setting Pressurizer Spray Bypass Flow]]
- Related exam questions: [[2016 Q7]], [[2016 Q36]], [[2018 Q1]], [[2018 Q5]], [[2018 Q8]], [[2018 Q9]], [[2018 Q10]], [[2018 Q55]], [[2018 Q82]], [[2019 Q9]], [[2019 Q10]], [[2019 Q47]], [[2019 Q50]], [[2023 Q7]], [[2023 Q14]], [[2023 Q34]], [[2023 Q87]], [[2023 Q92]], [[2022 Q9]], [[2022 Q21]], [[2022 Q37]], [[2022 Q88]], [[2020 Q7]], [[2020 Q36]], [[2020 Q57]], [[2015 Q38]], [[2015 Q39]], [[2015 Q40]], [[2015 Q81]], [[2015 Q87]]
- Related JPMs: [[2019 JPM Sim-c]], [[2022 JPM IP-i]], [[2016 JPM IP-i]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2016 Scenario 3]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2015 Scenario 2]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]]
