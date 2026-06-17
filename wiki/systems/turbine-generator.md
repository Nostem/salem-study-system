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

## Function

Converts steam energy from the steam generators into electrical energy. (UFSAR 10.2)

## Design

- Tandem compound, six-flow exhaust, 1800 RPM
- Westinghouse design
- Electro-hydraulic control system
(UFSAR 10.2)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q93</div>
On a loss of circulators (e.g., 23 SPT lost), <span class="hi-exam">AB.CW-0001 directs manually establishing Low Pressure Turbine Hood Spray</span> — normally secured above 15% power, it is manually placed in service to protect the LP turbine during degraded condenser cooling. See [[Circ Water]], [[AB.CW-0001 — Circulating Water Malfunction]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q20</div>
Rising condenser backpressure reduces LP turbine efficiency, confirmed by <span class="hi-exam">lowering generator MWe output</span>. The primary operational concern is <span class="hi-exam">overpressurization and damage to the LP turbine/main condenser</span>, not condensate pump cavitation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q66</div>
Stator Water Cooling: <span class="hi-exam">Unit 2 (GE SCW) is the ONLY unit with an automatic turbine runback feature</span> — triggered by low flow, low pressure, or high temperature. If runback fails to lower amps to specified value within the time delay, a turbine trip occurs. <span class="hi-trap">Unit 1 (Westinghouse SCW): low flow inputs into a 45-second time-delayed turbine TRIP circuit — no runback feature. Unit 1 does not have a SLMS System.</span>
</div>

## Turbine Trips

| Trip | Source |
|------|--------|
| Low auto stop oil pressure | UFSAR 10.2 |
| Thrust bearing failure | UFSAR 10.2 |
| Low bearing oil pressure | UFSAR 10.2 |
| Generator protection | UFSAR 10.2 |
| Manual | UFSAR 10.2 |
| Reactor trip (P-4) | UFSAR T7.2-2 |

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q52</div>
Actions that DO occur automatically on a Unit 2 Main Turbine trip from 100% power (no operator action): <span class="hi-exam">500KV output breakers 1-9 and 9-10 open</span> (every turbine trip); <span class="hi-exam">4KV Group buses swap from the Aux Power Transformer (APT) to the Station Power Transformers</span> (off-site power) when the output breakers open; and the <span class="hi-exam">Main Generator Exciter Field Breaker opens</span>. <span class="hi-trap">Running EHC pumps do NOT auto-stop; Emergency Bearing Oil pumps do NOT start (the AUX bearing oil pump starts); 4KV VITAL buses do NOT swap (already on off-site power).</span> See [[500KV]], [[4KV]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 Sim-e</div>
A turbine Auto Stop Oil (AST) low-pressure condition trips on the channels: <span class="hi-exam">one channel reading ≤50 psig sets OHA G-4 TURB AUTO STOP OIL PRESS LO; 2 of 3 channels at low Auto Stop Oil pressure demand a Main Turbine trip</span> (OHA F-32 DEHC Trip). In this JPM the demanded turbine trip does not occur — a Turbine Stop Valve (21 MS28) remains open — so the operator must manually trip the Main Turbine from the trip handle and, because power is &lt;P-9, trip the reactor per AB.TRB-0001.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-d</div>
Main turbine reheat stop / intercept valve stroke testing per S2.OP-PT.TRB-0003 Section 5.3: each East LP valve pair (RS5/RS6) is closed for ~10 seconds then reopened, with positions verified <span class="hi-exam">LOCALLY</span> (EHC console indication alone fails the test per FSAR 10.2.2.6 periodicity). If a <span class="hi-exam">Reheat Stop Valve or Intercept Valve fails to reopen within 5 minutes while above 80% load</span>, Turbine-Generator load must be <span class="hi-exam">reduced to less than 80% at 10%/hr</span>. In this JPM 22RS5 (East Reheat Stop) fails to reopen, requiring the operator to initiate the 10%/hr load reduction within 5 minutes. See [[S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-e</div>
Main Turbine Stop Valve retest at 89% power IAW S2.OP-PT.TRB-0003. Navigate DEHC HMI to STOP/GOV TEST screen. Test permissives: <span class="hi-exam">TURBINE INLET PRESSURE OK</span> and <span class="hi-exam">NO OTHER TESTS IN PROGRESS</span> (both GREEN). P&L 3.4.3: operate at <span class="hi-exam"><=75% turbine load with any one HP inlet valve closed</span>. 22MS29 (Governor Valve) closes first (~2 min), then 22MS28 (Stop Valve) strokes closed and open (~25 sec). OHA <span class="hi-exam">G-12 TURB STM STOP VLV CLSD</span> expected during test. Alternate path: field operator misses valve stroke → select <span class="hi-exam">RESTROKE</span> on HMI to re-verify.
</div>

## Reactor Trip on Turbine Trip

- Turbine trip generates reactor trip on 2/3 low auto stop oil pressure
- Interlocked with P-9: reactor trip on turbine trip is blocked below ~50% RTP
(UFSAR T7.2-1)

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q1</div>
OHA F-36 (TURB TRIP & P-9) confirms turbine trip above P-9: either <span class="hi-exam">4/4 Turbine Stop Valves ≤ 85% open OR 2/3 Auto Stop Oil Pressures ≤ <span class="val-trip">50 psig</span></span>. On 2RP4, turbine stop valve closed lights: <span class="hi-exam">LIT solid = both SSPS trains agree valve closed; FLASHING = train disagreement</span>. Redundant trip solenoids: 20-ET, 20-AST-1, 20-AST-2. <span class="hi-trap">45 psig is the Tech Spec value for auto stop oil — the actual setpoint is ≤ 50 psig.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q80</div>
ATWS turbine trip verification (EOP-FRSM-1 Step 6): confirmed by <span class="hi-exam">ALL turbine stop valve closed bi-stables LIT on 2RP4</span>. <span class="hi-trap">Auto Stop Oil low pressure bi-stables (2/3) on 2RP4 indicate a turbine trip demand, NOT confirmation the turbine actually tripped (stop valves may not have closed).</span> If turbine trip is not confirmed, dispatch operator to locally trip at the front standard.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
An <span class="hi-exam">automatic Stator Water main turbine runback</span> initiates (terminating ~900 MWe when the initiating condition clears, DEHC reference behavior); the PO ensures positive control of the Main Turbine, and the crew enters [[AB.LOAD-0001 — Rapid Load Reduction]]. Later the <span class="hi-exam">Main Turbine is tripped on the reactor trip</span> in [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
Main turbine fails to auto trip following reactor trip (23BF19 failure). <span class="hi-exam">Pistol grip manual trip also fails</span>. RO must trip turbine using <span class="hi-exam">turbine trip bezel pushbutton</span> (CT-13). If crew isolates main turbine by actuating MSLI, this also satisfies CT#1. Safety significance: failure to trip turbine after reactor trip causes continued steam demand → excessive RCS cooldown → challenge to subcriticality (return to power) and integrity (PTS) CFSTs, or transition to EOP-LOSC-1. <span class="hi-exam">Auto SI actuates following reactor trip due to turbine failing to trip and high steam flow conditions.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Turbine trip reactor trip interlock

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q91</div>
Turbine runback from 100% power can cause control rods to insert below the Rod Insertion Limit (ROD INSERT LIMIT LO-LO alarm). <span class="hi-trap">Raising turbine power to counter the runback is NOT permitted per the alarm response procedure — the ONLY allowed action to restore rods above the RIL is performing S2.OP-SO.CVC-0008 (Rapid Boration).</span>
</div>

## Exam & Operating Coverage

### Generator Electrical Behavior / Grid

**Exam & operating coverage:**

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

### Generator Startup & Synchronizing

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-e</div>
S2.OP-SO.TRB-0001 Section 4.5 — Synchronizing the Generator: at 16% power starting up, turbine at 1800 rpm with excitation applied. Key steps: scope test (synchroscope at 12 o'clock, voltmeters upscale), verify SYNC PERM BYPASS in NORMAL. Select 1-9 Mimic Bus and SYNCH POT ON. <span class="hi-exam">INCOM KV must be 3-5 KV above RUN KV</span> (as-found both ~498-499 KV — must raise via Voltage Regulator). <span class="hi-exam">Turbine speed must produce synchroscope rotation every 25-30 sec in FAST direction</span> (raise SETTER from 1801 to 1802-1803 rpm). Close 500 KV 1-9 breaker when synchroscope <span class="hi-exam">1-2 minutes before 12 o'clock</span>. Verify 40-60 MW load pickup within 15 seconds.
</div>

### Generator Abnormal Conditions

**Exam & operating coverage:**

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
<span class="hi-exam">Aux Annunciator Point 0901, GEN RADIO FREQ HIGH</span> annunciates with elevated stator temperatures (3 sequential stator T/Cs exceed assigned limits by &lt; 10°F). Crew enters AB.GEN-0001 and performs a load reduction to lower the RF Monitor &lt; 50%. Later a Main Power Transformer Phase 1 Sudden Pressure (CRT point 529) / FP deluge actuation occurs at MPT Zone 46; the CRS determines the <span class="hi-exam">Main Generator must be removed from service</span> and directs a reactor trip with power &gt; P-9. See [[AB.GEN-0001 — Main Generator Abnormal Stator Conditions]].
</div>

## Connections

- Related EOPs: [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]]
- Related procedures: [[S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing]], [[S2.OP-SO.TRB-0001 — Turbine-Generator Startup Operations]], [[AB.GRID-0001 — Grid Disturbance]], [[S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F]], [[S1.OP-AR.ZZ-0007 — Overhead Annunciators Window G]], [[S2.OP-AR.ZZ-0008 — Overhead Annunciators Window H]]
- Related exam questions: [[2015 Q20]], [[2016 Q3]], [[2016 Q50]], [[2016 Q67]], [[2018 Q91]], [[2020 Q1]], [[2020 Q8]], [[2023 Q15]], [[2023 Q20]], [[2023 Q64]], [[2023 Q66]], [[2023 Q80]], [[2023 Q88]], [[2022 Q17]], [[2022 Q64]], [[2015 Q93]], [[2014 Q21]], [[2014 Q53]], [[2012 Q17]], [[2012 Q52]]
- Related JPMs: [[2018 JPM Sim-e]], [[2019 JPM Sim-e]], [[2015 JPM Sim-d]], [[2012 JPM Sim-e]]
- Related scenarios: [[2012 Scenario 1]], [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]], [[2015 Scenario 2]]
- Related exam: [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
