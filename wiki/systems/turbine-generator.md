---
title: Main Turbine
category: systems
status: draft
aliases:
  - turbine generator
  - turbine
  - T/G
  - main generator
---

# Main Turbine

## Function & Design Basis

The Steam and Power Conversion System is designed to convert the heat produced in the reactor to electrical energy; heat absorbed by the RCS is transferred to feedwater in the four steam generators, and the resulting steam drives the turbine generator (UFSAR §10.2.1). At 100% reactor power the Unit 2 turbine generator gross output is <span class="val-normal">1225 MWe</span> with an anticipated net output of <span class="val-normal">1213 MWe</span> (Unit 1: 1214 gross / 1195 net) (UFSAR §10.2.1). At valves-wide-open (VWO) calculated load the Unit 2 gross output is 1249 MWe, but generator output is administratively <span class="hi-exam">limited to 1232 MWe per the Artificial Island Operating Guidelines and Document A-5-500-EEE-1686</span> (UFSAR §10.2.1) — the capability/excitation curve referenced in the 2015 Q20 callout below.

The main turbine is a <span class="hi">four-casing, tandem-compound, six-flow exhaust, 1800 rpm</span> unit (UFSAR §10.2.2.1). It consists of one double-flow high-pressure (HP) element in tandem with three double-flow low-pressure (LP) elements; moisture separation and two-stage reheating are provided between the HP and LP elements by six horizontal-axis, cylindrical-shell combined moisture separator-reheater (MSR) assemblies, three on each side of the LP elements (UFSAR §10.2.2.2). The Unit 1 last-stage blades are 46 inches long; the Unit 2 last-stage blades are 47 inches long (UFSAR §10.2.2.1). Additional moisture removal is accomplished inside the turbine by blades constructed with slingers that direct moisture radially to the casing drain passages (UFSAR §10.2.2.2).

The generator is hydrogen-cooled with water-cooled stator windings, rated at <span class="val-normal">1300000 KVA at 75 psig hydrogen pressure, 0.90 PF, 0.48 SCR, 3 phase, 60 cps, 25 KV, 1800 rpm</span> (UFSAR §10.2.2.1). A brushless exciter (Unit 1) or alternator-exciter (Unit 2) is coupled to the generator (UFSAR §10.2.2.1). The voltage regulator has automatic and manual controllers; it automatically transfers to manual regulation upon an automatic-controller problem or protective-circuit initiation, and may be transferred back to automatic regulation when available (UFSAR §10.2.2.1) — the bumpless/auto-transfer behavior in K4.03/K4.23.

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q20</div>
Rising condenser backpressure reduces LP turbine efficiency, confirmed by <span class="hi-exam">lowering generator MWe output</span>. The primary operational concern is <span class="hi-exam">overpressurization and damage to the LP turbine/main condenser</span>, not condensate pump cavitation.
</div>

## Key Components

- **Turbine elements** — one double-flow HP element tandem with three double-flow LP elements on a single 1800 rpm shaft; six combined MSR assemblies (three per LP side) provide moisture separation and two-stage reheating (UFSAR §10.2.2.1, §10.2.2.2).
- **Steam admission valves** — steam enters the HP turbine through <span class="hi-exam">four stop valves and four governor control valves</span>; one stop valve and one control valve form a single assembly (UFSAR §10.2.2.2, §10.2.2.3).
- **Reheat stop & interceptor valves** — a stop valve and an intercept valve at the discharge of each MSR control steam flow to the three LP turbines; closed immediately by the emergency trip devices (UFSAR §10.2.2.2, §10.2.2.3).
- **Lubricating oil system** — the main lube oil pump (a centrifugal volute type mounted on the end of the turbine shaft) supplies all lube oil during normal operation; an <span class="hi">ac motor-driven auxiliary</span> pump supplies bearing oil on turning gear during startup/shutdown; a <span class="hi">dc motor-driven emergency</span> pump operates on loss of ac power or aux-pump failure to protect bearings during coastdown; a hydraulic lift pump supplies high-pressure oil to selected bearings during startup; the seal oil backup pump supplies the Hydrogen Seal System on loss of the seal oil pump (UFSAR §10.2.2.2).
- **Generator** — hydrogen-cooled, water-cooled stator windings; brushless exciter (Unit 1) / alternator-exciter (Unit 2) (UFSAR §10.2.2.1).
- **Hydrogen Supply System** — three banks of storage tubes (located in the yard on a concrete pad) supply hydrogen through pressure-reducing stations to a pipe-sleeve-protected header run underground into the Turbine Building, dividing to each generator through individual pressure regulators; an emergency header supplies each generator through a separate pressure-reducing station (UFSAR §10.2.6). Carbon dioxide is used as the intermediate gas when changing between hydrogen and air; gas changes are performed at standstill or on turning gear (UFSAR §10.2.6).
- **Turbine Auxiliaries Cooling (TAC) System** — a single closed loop of condensate-quality water (makeup/expansion tank, main heat exchangers, pumps) that gives its heat up to service water on the tube side, cooling the generator hydrogen coolers, stator water coolers, exciter coolers, seal oil coolers, EHC fluid coolers, gland seal steam condenser, main bus air cooler, and feedwater/drain-pump coolers (UFSAR §10.2.7).

## Automatic Features & Setpoints

In addition to the protective trips (below), the turbine system has automatic load-control features (UFSAR §10.2.2.4):

- **Automatic load runback** is initiated by an approach to an <span class="hi-exam">overpower or overtemperature ΔT</span> condition (preventing a high-power condition that might lead to an OP-ΔT / OT-ΔT trip), by a main feedwater pump trip when turbine power is greater than <span class="hi-exam">69%</span>, and (Unit 2 only) by the generator stator water turbine runback scheme (UFSAR §10.2.2.4).
- **Unit 2 stator-water runback logic** is initiated by 2-out-of-3 logic for low water pressure, 2-out-of-3 for outlet water temperature, 2-out-of-3 for low stator winding water flow, or 2-out-of-3 for low bushing water flow, with the No. 2 voltage regulator in the automatic permissive for runback. Stator current must be <span class="hi-exam">less than 79% of rated load at the 2-minute mark and less than 23% of rated load at the 3.5-minute mark</span> or a main turbine trip is initiated, preventing generator-winding damage (UFSAR §10.2.2.4).
- The **extraction nonreturn valves** are closed through an air pilot valve actuated by the loss of autostop oil pressure when the turbine generator is tripped (UFSAR §10.2.2.4).
- An **electrical reverse-power device** interlocked with the turbine trip signal ensures the turbine is tripped before the generator circuit breakers open, providing the <span class="hi-exam">30-second delay between turbine trip and generator trip</span> upon detection of a motoring condition (UFSAR §10.2.2.4).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q66</div>
Stator Water Cooling: <span class="hi-exam">Unit 2 (GE SCW) is the ONLY unit with an automatic turbine runback feature</span> — triggered by low flow, low pressure, or high temperature. If runback fails to lower amps to specified value within the time delay, a turbine trip occurs. <span class="hi-trap">Unit 1 (Westinghouse SCW): low flow inputs into a 45-second time-delayed turbine TRIP circuit — no runback feature. Unit 1 does not have a SLMS System.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q91</div>
Turbine runback from 100% power can cause control rods to insert below the Rod Insertion Limit (ROD INSERT LIMIT LO-LO alarm). <span class="hi-trap">Raising turbine power to counter the runback is NOT permitted per the alarm response procedure — the ONLY allowed action to restore rods above the RIL is performing S2.OP-SO.CVC-0008 (Rapid Boration).</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
An <span class="hi-exam">automatic Stator Water main turbine runback</span> initiates (terminating ~900 MWe when the initiating condition clears, DEHC reference behavior); the PO ensures positive control of the Main Turbine, and the crew enters [[AB.LOAD-0001 — Rapid Load Reduction]]. Later the <span class="hi-exam">Main Turbine is tripped on the reactor trip</span> in [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

## Turbine Trips & Overspeed Protection

The following protective devices are independent of the electronic controller and, when initiated, cause tripping of all turbine valves (UFSAR §10.2.2.4):

| Trip | Source |
|------|--------|
| Mechanical overspeed trip | UFSAR §10.2.2.4 |
| Low bearing oil pressure trip | UFSAR §10.2.2.4 |
| Low vacuum trip | UFSAR §10.2.2.4 |
| Thrust bearing trip | UFSAR §10.2.2.4 |
| Electrical solenoid trip — reactor trip; generator electrical trips; manual trip from Control Room; loss of EHC control voltage; EHC overspeed setpoint (108% or 110%); loss of EHC speed signals; fail-to-accelerate signals; EHC power up; Load Drop Anticipator (LDA) | UFSAR §10.2.2.4 |
| Manual trip lever located at the turbine | UFSAR §10.2.2.4 |
| Loss of primary/secondary 24 V dc power | UFSAR §10.2.2.4 |
| High-high steam generator water level or safety injection | UFSAR §10.2.2.4 |

The **Overspeed Protection Controller (OPC)** is itself a turbine trip; its solenoids are actuated by the <span class="val-trip">EHC overspeed setpoint (108%)</span> and by the Load Drop Anticipator (LDA) (UFSAR §10.2.2.4). The **mechanical overspeed trip** mechanism consists of an eccentric weight on the end of the turbine shaft, balanced by a spring until speed reaches <span class="val-trip">approximately 108 percent of rated speed</span>; centrifugal force then overcomes the spring, the weight flies out and strikes a trigger that actuates the overspeed trip valve, releasing the protection-system fluid (autostop oil) to drain. The resulting decrease in autostop pressure causes the governor emergency trip valve to dump the hydraulic fluid to drain, closing the turbine stop and control valves and the reheat stop and interceptor valves (UFSAR §10.2.2.4). The autostop dump valve is also tripped when any one of the listed protective devices actuates (UFSAR §10.2.2.4). Detailed turbine-overspeed-protection requirements were relocated to the Salem Generating Station Technical Requirements Manual (SGS-TRM) Section TR3/4.3.4 (UFSAR §10.2.2.6).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q52</div>
Actions that DO occur automatically on a Unit 2 Main Turbine trip from 100% power (no operator action): <span class="hi-exam">500KV output breakers 1-9 and 9-10 open</span> (every turbine trip); <span class="hi-exam">4KV Group buses swap from the Aux Power Transformer (APT) to the Station Power Transformers</span> (off-site power) when the output breakers open; and the <span class="hi-exam">Main Generator Exciter Field Breaker opens</span>. <span class="hi-trap">Running EHC pumps do NOT auto-stop; Emergency Bearing Oil pumps do NOT start (the AUX bearing oil pump starts); 4KV VITAL buses do NOT swap (already on off-site power).</span> See [[500KV]], [[4KV]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-e</div>
A turbine Auto Stop Oil (AST) low-pressure condition trips on the channels: <span class="hi-exam">one channel reading ≤50 psig sets OHA G-4 TURB AUTO STOP OIL PRESS LO; 2 of 3 channels at low Auto Stop Oil pressure demand a Main Turbine trip</span> (OHA F-32 DEHC Trip). In this JPM the demanded turbine trip does not occur — a Turbine Stop Valve (21 MS28) remains open — so the operator must manually trip the Main Turbine from the trip handle and, because power is &lt;P-9, trip the reactor per AB.TRB-0001.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q1</div>
OHA F-36 (TURB TRIP & P-9) confirms turbine trip above P-9: either <span class="hi-exam">4/4 Turbine Stop Valves ≤ 85% open OR 2/3 Auto Stop Oil Pressures ≤ <span class="val-trip">50 psig</span></span>. On 2RP4, turbine stop valve closed lights: <span class="hi-exam">LIT solid = both SSPS trains agree valve closed; FLASHING = train disagreement</span>. Redundant trip solenoids: 20-ET, 20-AST-1, 20-AST-2. <span class="hi-trap">45 psig is the Tech Spec value for auto stop oil — the actual setpoint is ≤ 50 psig.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q80</div>
ATWS turbine trip verification (EOP-FRSM-1 Step 6): confirmed by <span class="hi-exam">ALL turbine stop valve closed bi-stables LIT on 2RP4</span>. <span class="hi-trap">Auto Stop Oil low pressure bi-stables (2/3) on 2RP4 indicate a turbine trip demand, NOT confirmation the turbine actually tripped (stop valves may not have closed).</span> If turbine trip is not confirmed, dispatch operator to locally trip at the front standard.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q93</div>
On a loss of circulators (e.g., 23 SPT lost), <span class="hi-exam">AB.CW-0001 directs manually establishing Low Pressure Turbine Hood Spray</span> — normally secured above 15% power, it is manually placed in service to protect the LP turbine during degraded condenser cooling. See [[Circ Water]], [[AB.CW-0001 — Circulating Water Malfunction]].
</div>

## Reactor Trip on Turbine Trip

A trip of the turbine generator, when unit load is greater than a preset limit, initiates a reactor trip to prevent excessive reactor coolant temperature and pressure (UFSAR §10.2.2.4). The reactor trip on turbine trip is interlocked with P-9 and is blocked below ~50% RTP (UFSAR T7.2-1).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q53</div>
Following a Main Turbine trip from 90% power (which initiates a Rx trip &gt;P-9), once new steady state is reached <span class="hi-exam">Main Condenser Hotwell levels rise</span> — the BF19s and 40's shut on FW interlock so there is no "goes out" from the hotwells, but they keep receiving "goes in" from the Steam Dump system, while the SGs are fed from the AFW pumps. <span class="hi-trap">Turbine Aux Cooling (TAC) D/P and supply temperature are held at setpoint by automatic valves and do not change; TGA SW header pressure is regulated by ST1 to a downstream <span class="val-normal">80 psig</span> and stays stable.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q3</div>
Automatic main turbine trip on reactor trip is generated from the <span class="hi-exam">output of the Reactor Trip Breakers (RTBs)</span>. When the RTBs <span class="hi-exam">fail to open</span> and the operator alternatively trips the reactor by opening RDMG sets power supply breakers from 1CC3, the Main Turbine does NOT receive an automatic trip signal — the crew <span class="hi-exam">MUST directly perform a manual turbine trip</span>. Once the manual turbine trip occurs, the main generator output breakers will <span class="hi-exam">automatically open</span> on the turbine trip (no direct crew action required). <span class="hi-trap">Trap: tripping rods via the RDMG path bypasses the RTB-driven auto turbine trip — turbine trip becomes a directly required operator action even though it is normally automatic on a reactor trip.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q50</div>
Main Generator trip from a ground fault at <span class="hi-exam">46% power</span> causes an automatic Main Turbine trip via Generator Protection. Because <span class="hi-exam">46% &lt; P-9 (≈49% Rx power)</span>, the <span class="hi-exam">Reactor Trip on Turbine Trip is BLOCKED</span> — no Rx trip occurs. With no operator action, rods insert in AUTO and steam dumps open in Load Reject (Tavg) mode; Tave stabilizes at ~<span class="val-normal">551°F</span> (Load Reject Tref + 5°F dead band; MT Steamline inlet pressure = 0 with turbine tripped). <span class="hi-trap">Do NOT enter EOP-TRIP-1/2/3 — there is no reactor trip below P-9.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
Main turbine fails to auto trip following reactor trip (23BF19 failure). <span class="hi-exam">Pistol grip manual trip also fails</span>. RO must trip turbine using <span class="hi-exam">turbine trip bezel pushbutton</span> (CT-13). If crew isolates main turbine by actuating MSLI, this also satisfies CT#1. Safety significance: failure to trip turbine after reactor trip causes continued steam demand → excessive RCS cooldown → challenge to subcriticality (return to power) and integrity (PTS) CFSTs, or transition to EOP-LOSC-1. <span class="hi-exam">Auto SI actuates following reactor trip due to turbine failing to trip and high steam flow conditions.</span>
</div>

## Design Features & Interlocks

The turbine is equipped with an Electro-Hydraulic Control (EHC) System to control turbine valve movement; it regulates turbine speed prior to synchronizing the generator and controls unit output when the generator is connected to the grid, by regulating the flow of steam through the turbine (UFSAR §10.2.2.3). A hydraulic actuator drives each stop valve fully open or fully closed (its prime function being to shut off steam flow); the stop valves are closed immediately by the trip devices, which are independent of the controller (UFSAR §10.2.2.3). The turbine control valves are positioned by a servo-actuator that responds to the controller signal — positioning the control valves for wide-range speed control during startup and for load control after synchronizing (UFSAR §10.2.2.3). The reheat stop valves and reheat interceptor valves control steam flow to the LP sections and are closed immediately by the emergency trip devices (UFSAR §10.2.2.3). Tripping the turbine automatically shuts the reheat stop valves and main control valves (K4.02; UFSAR §10.2.2.3, §10.2.2.4).

Turbine supervisory instrumentation continuously monitors generator load, shaft vibration at bearings, shaft eccentricity, shell expansion, differential expansion between turbine shell and rotor, turbine speed, casing/bearing temperatures, hydrogen gas and stator cooling water temperatures, generator frequency, exhaust hood temperature, condenser vacuum, stator winding temperatures, hydrogen pressure and purity, and bearing lube oil and hydraulic oil pressure (UFSAR §10.2.2.5). Abnormal readings prompt investigation (including nondestructive testing) and may require shutting the unit down (UFSAR §10.2.5.1).

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-d</div>
Main turbine reheat stop / intercept valve stroke testing per S2.OP-PT.TRB-0003 Section 5.3: each East LP valve pair (RS5/RS6) is closed for ~10 seconds then reopened, with positions verified <span class="hi-exam">LOCALLY</span> (EHC console indication alone fails the test per FSAR 10.2.2.6 periodicity). If a <span class="hi-exam">Reheat Stop Valve or Intercept Valve fails to reopen within 5 minutes while above 80% load</span>, Turbine-Generator load must be <span class="hi-exam">reduced to less than 80% at 10%/hr</span>. In this JPM 22RS5 (East Reheat Stop) fails to reopen, requiring the operator to initiate the 10%/hr load reduction within 5 minutes. See [[S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-e</div>
Main Turbine Stop Valve retest at 89% power IAW S2.OP-PT.TRB-0003. Navigate DEHC HMI to STOP/GOV TEST screen. Test permissives: <span class="hi-exam">TURBINE INLET PRESSURE OK</span> and <span class="hi-exam">NO OTHER TESTS IN PROGRESS</span> (both GREEN). P&L 3.4.3: operate at <span class="hi-exam"><=75% turbine load with any one HP inlet valve closed</span>. 22MS29 (Governor Valve) closes first (~2 min), then 22MS28 (Stop Valve) strokes closed and open (~25 sec). OHA <span class="hi-exam">G-12 TURB STM STOP VLV CLSD</span> expected during test. Alternate path: field operator misses valve stroke → select <span class="hi-exam">RESTROKE</span> on HMI to re-verify.
</div>

## Interconnections & Loads

The Turbine Auxiliaries Cooling (TAC) System, a single closed loop of condensate-quality water (makeup/expansion tank, main heat exchangers, and pumps), gives its heat up to service water on the tube side and cools the turbine generator auxiliary components: generator hydrogen coolers, stator water coolers, exciter coolers, seal oil coolers, EHC fluid coolers, gland seal steam condenser, main bus air cooler, feedwater sample coolers, and the bleed-steam / heater-drain / condensate pump coolers (UFSAR §10.2.7). The TAC makeup source is the main condensate cycle (UFSAR §10.2.7).

When the turbine trips, station power is automatically switched from the unit auxiliary (aux power) transformer to the offsite (station power) source, and air is removed to the extraction-steam nonreturn valves to close them (K4.37; UFSAR §10.2.2.4) — see the automatic-action breakdown in the 2012 Q52 callout above.

## Control-Room Operation

**Exam & operating coverage:**

### Generator Startup & Synchronizing

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-e</div>
S2.OP-SO.TRB-0001 Section 4.5 — Synchronizing the Generator: at 16% power starting up, turbine at 1800 rpm with excitation applied. Key steps: scope test (synchroscope at 12 o'clock, voltmeters upscale), verify SYNC PERM BYPASS in NORMAL. Select 1-9 Mimic Bus and SYNCH POT ON. <span class="hi-exam">INCOM KV must be 3-5 KV above RUN KV</span> (as-found both ~498-499 KV — must raise via Voltage Regulator). <span class="hi-exam">Turbine speed must produce synchroscope rotation every 25-30 sec in FAST direction</span> (raise SETTER from 1801 to 1802-1803 rpm). Close 500 KV 1-9 breaker when synchroscope <span class="hi-exam">1-2 minutes before 12 o'clock</span>. Verify 40-60 MW load pickup within 15 seconds.
</div>

### Generator Electrical Behavior / Grid

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q20</div>
The allowable Main Generator operating point (MWe vs. MVAR) is bounded by the <span class="hi-exam">generator capability curve</span> in A-5-500-EEE-1686 (Artificial Island Operating Guide). The <span class="hi-exam">Power System Stabilizer (PSS)</span> status affects the allowable excitation limit: with the <span class="hi-exam">PSS out of service on both units, the more restrictive red dashed line</span> applies (a PSS in service permits the higher solid-line limit). Curve selection also depends on the grid lineup (Unit 1 offline, Hope Creek 5-6 breaker out of service → curve 2S2H-5-6). <span class="hi-trap">Main Generator gas (H2) pressure of 75 psig does NOT itself set the MVAR limit here — the limiting factor is the capability curve / excitation limit, read with the PSS-out (red dashed) line.</span> See [[AB.GRID-0001 — Grid Disturbance]] and [[500KV]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q17</div>
When one unit trips, reactive load (MVARs) is shared among remaining generators on the grid — the operating unit picks up <span class="hi-exam">LESS than the full amount</span> (grid absorbs the rest). The voltage regulator senses terminal voltage drop from increased MVAR loading and <span class="hi-exam">increases generator field current to restore terminal voltage to setpoint</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q15</div>
Grid disturbance — loss of a Salem unit causes <span class="hi-exam">500KV switchyard voltage to lower</span>. As grid voltage drops, remaining generating units share reactive load: <span class="hi-exam">Unit 2 MVARs rise</span> to compensate for the lost reactive support from the tripped unit. (Ref: S2.OP-AB.GRID-0001)
</div>

### Generator Abnormal Conditions

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
<span class="hi-exam">Aux Annunciator Point 0901, GEN RADIO FREQ HIGH</span> annunciates with elevated stator temperatures (3 sequential stator T/Cs exceed assigned limits by &lt; 10°F). Crew enters AB.GEN-0001 and performs a load reduction to lower the RF Monitor &lt; 50%. Later a Main Power Transformer Phase 1 Sudden Pressure (CRT point 529) / FP deluge actuation occurs at MPT Zone 46; the CRS determines the <span class="hi-exam">Main Generator must be removed from service</span> and directs a reactor trip with power &gt; P-9. See [[AB.GEN-0001 — Main Generator Abnormal Stator Conditions]].
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Turbine trip reactor-trip interlock: Low Auto Stop Oil ≥<span class="val-trip">45 psig</span> and Stop Valve Closure ≤<span class="val-trip">15%</span> off full open (TS Table 2.2-1, Amendment No. 310)

**Exam & operating coverage:**

## Connections

- Related EOPs: [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]]
- Related procedures: [[S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing]], [[S2.OP-SO.TRB-0001 — Turbine-Generator Startup Operations]], [[AB.GRID-0001 — Grid Disturbance]], [[S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F]], [[S1.OP-AR.ZZ-0007 — Overhead Annunciators Window G]], [[S2.OP-AR.ZZ-0008 — Overhead Annunciators Window H]]
- Related exam questions: [[2015 Q20]], [[2016 Q3]], [[2016 Q50]], [[2016 Q67]], [[2018 Q91]], [[2020 Q1]], [[2020 Q8]], [[2023 Q15]], [[2023 Q20]], [[2023 Q64]], [[2023 Q66]], [[2023 Q80]], [[2023 Q88]], [[2022 Q17]], [[2022 Q64]], [[2015 Q93]], [[2014 Q21]], [[2014 Q53]], [[2012 Q17]], [[2012 Q52]]
- Related JPMs: [[2018 JPM Sim-e]], [[2019 JPM Sim-e]], [[2015 JPM Sim-d]], [[2012 JPM Sim-e]]
- Related scenarios: [[2012 Scenario 1]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]], [[2015 Scenario 2]]
- Related exam: [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
