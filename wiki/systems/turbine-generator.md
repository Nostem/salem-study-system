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

## Turbine Trips

| Trip | Source |
|------|--------|
| Low auto stop oil pressure | UFSAR 10.2 |
| Thrust bearing failure | UFSAR 10.2 |
| Low bearing oil pressure | UFSAR 10.2 |
| Generator protection | UFSAR 10.2 |
| Manual | UFSAR 10.2 |
| Reactor trip (P-4) | UFSAR T7.2-2 |

## Reactor Trip on Turbine Trip

- Turbine trip generates reactor trip on 2/3 low auto stop oil pressure
- Interlocked with P-9: reactor trip on turbine trip is blocked below ~50% RTP
(UFSAR T7.2-1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q1</div>
OHA F-36 (TURB TRIP & P-9) confirms turbine trip above P-9: either <span class="hi-exam">4/4 Turbine Stop Valves ≤ 85% open OR 2/3 Auto Stop Oil Pressures ≤ <span class="val-trip">50 psig</span></span>. On 2RP4, turbine stop valve closed lights: <span class="hi-exam">LIT solid = both SSPS trains agree valve closed; FLASHING = train disagreement</span>. Redundant trip solenoids: 20-ET, 20-AST-1, 20-AST-2. <span class="hi-trap">45 psig is the Tech Spec value for auto stop oil — the actual setpoint is ≤ 50 psig.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q15</div>
Grid disturbance — loss of a Salem unit causes <span class="hi-exam">500KV switchyard voltage to lower</span>. As grid voltage drops, remaining generating units share reactive load: <span class="hi-exam">Unit 2 MVARs rise</span> to compensate for the lost reactive support from the tripped unit. (Ref: S2.OP-AB.GRID-0001)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q20</div>
Rising condenser backpressure reduces LP turbine efficiency, confirmed by <span class="hi-exam">lowering generator MWe output</span>. The primary operational concern is <span class="hi-exam">overpressurization and damage to the LP turbine/main condenser</span>, not condensate pump cavitation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q17</div>
When one unit trips, reactive load (MVARs) is shared among remaining generators on the grid — the operating unit picks up <span class="hi-exam">LESS than the full amount</span> (grid absorbs the rest). The voltage regulator senses terminal voltage drop from increased MVAR loading and <span class="hi-exam">increases generator field current to restore terminal voltage to setpoint</span>.
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Turbine trip reactor trip interlock

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q66</div>
Stator Water Cooling: <span class="hi-exam">Unit 2 (GE SCW) is the ONLY unit with an automatic turbine runback feature</span> — triggered by low flow, low pressure, or high temperature. If runback fails to lower amps to specified value within the time delay, a turbine trip occurs. <span class="hi-trap">Unit 1 (Westinghouse SCW): low flow inputs into a 45-second time-delayed turbine TRIP circuit — no runback feature. Unit 1 does not have a SLMS System.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q80</div>
ATWS turbine trip verification (EOP-FRSM-1 Step 6): confirmed by <span class="hi-exam">ALL turbine stop valve closed bi-stables LIT on 2RP4</span>. <span class="hi-trap">Auto Stop Oil low pressure bi-stables (2/3) on 2RP4 indicate a turbine trip demand, NOT confirmation the turbine actually tripped (stop valves may not have closed).</span> If turbine trip is not confirmed, dispatch operator to locally trip at the front standard.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
Main turbine fails to auto trip following reactor trip (23BF19 failure). <span class="hi-exam">Pistol grip manual trip also fails</span>. RO must trip turbine using <span class="hi-exam">turbine trip bezel pushbutton</span> (CT-13). If crew isolates main turbine by actuating MSLI, this also satisfies CT#1. Safety significance: failure to trip turbine after reactor trip causes continued steam demand → excessive RCS cooldown → challenge to subcriticality (return to power) and integrity (PTS) CFSTs, or transition to EOP-LOSC-1. <span class="hi-exam">Auto SI actuates following reactor trip due to turbine failing to trip and high steam flow conditions.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-e</div>
Main Turbine Stop Valve retest at 89% power IAW S2.OP-PT.TRB-0003. Navigate DEHC HMI to STOP/GOV TEST screen. Test permissives: <span class="hi-exam">TURBINE INLET PRESSURE OK</span> and <span class="hi-exam">NO OTHER TESTS IN PROGRESS</span> (both GREEN). P&L 3.4.3: operate at <span class="hi-exam"><=75% turbine load with any one HP inlet valve closed</span>. 22MS29 (Governor Valve) closes first (~2 min), then 22MS28 (Stop Valve) strokes closed and open (~25 sec). OHA <span class="hi-exam">G-12 TURB STM STOP VLV CLSD</span> expected during test. Alternate path: field operator misses valve stroke → select <span class="hi-exam">RESTROKE</span> on HMI to re-verify.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-e</div>
S2.OP-SO.TRB-0001 Section 4.5 — Synchronizing the Generator: at 16% power starting up, turbine at 1800 rpm with excitation applied. Key steps: scope test (synchroscope at 12 o'clock, voltmeters upscale), verify SYNC PERM BYPASS in NORMAL. Select 1-9 Mimic Bus and SYNCH POT ON. <span class="hi-exam">INCOM KV must be 3-5 KV above RUN KV</span> (as-found both ~498-499 KV — must raise via Voltage Regulator). <span class="hi-exam">Turbine speed must produce synchroscope rotation every 25-30 sec in FAST direction</span> (raise SETTER from 1801 to 1802-1803 rpm). Close 500 KV 1-9 breaker when synchroscope <span class="hi-exam">1-2 minutes before 12 o'clock</span>. Verify 40-60 MW load pickup within 15 seconds.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q91</div>
Turbine runback from 100% power can cause control rods to insert below the Rod Insertion Limit (ROD INSERT LIMIT LO-LO alarm). <span class="hi-trap">Raising turbine power to counter the runback is NOT permitted per the alarm response procedure — the ONLY allowed action to restore rods above the RIL is performing S2.OP-SO.CVC-0008 (Rapid Boration).</span>
</div>

## Connections

- Related EOPs: [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOSC-1 — Loss of Secondary Coolant]]
- Related procedures: [[S2.OP-PT.TRB-0003 — Main Turbine Valve Stroke Testing]], [[S2.OP-SO.TRB-0001 — Turbine-Generator Startup Operations]]
- Related exam questions: [[2018 Q91]], [[2020 Q1]], [[2020 Q8]], [[2023 Q15]], [[2023 Q20]], [[2023 Q64]], [[2023 Q66]], [[2023 Q80]], [[2023 Q88]], [[2022 Q17]], [[2022 Q64]]
- Related JPMs: [[2018 JPM Sim-e]], [[2019 JPM Sim-e]]
- Related scenarios: [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]]
- Related exam: [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
