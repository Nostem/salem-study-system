---
title: Excore NIs
category: systems
status: draft
aliases:
  - nuclear instruments
  - NIS
  - excore detectors
---

# Excore NIs

## Function

Excore Nuclear Instrumentation provides continuous monitoring of reactor neutron flux from shutdown through full power operation using detectors located outside the reactor vessel. Three overlapping ranges ensure complete coverage: Source Range (shutdown/startup), Intermediate Range (startup), and Power Range (power operation). (UFSAR 7.2.1.2)

## Nuclear Instrumentation Ranges

- **Source Range:** Two channels, used during shutdown and startup
- **Intermediate Range:** Two channels, used during startup
- **Power Range:** Four channels, used during power operation (provides input to OT Delta-T, OP Delta-T, high flux trips, and rod control)
(UFSAR 7.2.1.2)

## Key NIS Permissive Interlocks

These permissives are derived from NIS channels. The master reference for all permissive interlocks is [[RPS/SSPS]].

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| P-6 | 1/2 intermediate range above setpoint | Allows manual block of source range trip | UFSAR T7.2-2 |
| P-8 | 3/4 power range below setpoint | Blocks trip on low flow in a single loop | UFSAR T7.2-2 |
| P-10 | 2/4 power range above setpoint | Allows block of power range low setpoint trip; blocks source range trip | UFSAR T7.2-2 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q72</div>
Subcritical rod withdrawal response: after a short rod withdrawal with the reactor still subcritical, <span class="hi-exam">SR counts rapidly increase then stabilize at a new higher value</span> (subcritical multiplication reaches new equilibrium at higher keff). <span class="hi-exam">Startup rate (SUR) rapidly increases then gradually decreases to zero</span>. SUR returns to zero because the reactor is still subcritical — a sustained positive SUR only exists at criticality. <span class="hi-trap">SR counts do NOT return to the previous value (they stabilize higher) and SUR does NOT remain at a positive value (it decays to zero).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q11</div>
Loss of a vital instrument bus (e.g. 1B) causes associated NI channels to <span class="hi-exam">fail low</span> (SR, IR, and PR monitors lose power). The bi-stables trip to SSPS. Above <span class="hi-exam">P-6 (approximately 1E-10 amps / ~1% power)</span> the SR trip is blocked. Below <span class="hi-exam">P-10 (10% power)</span> the IR high flux trip is active with <span class="hi-exam">1/2 coincidence</span>. At 8% power (above P-6, below P-10): SR trip blocked, PR needs 2/4 (only 1 channel affected), but the IR trip actuates on 1/2 IR bi-stables tripped — reactor trips.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q82</div>
P-6 permissive and IR NIS overlap: when P-6 is LIT, IR channels should indicate approximately <span class="hi-exam">1E-5% power</span>. If an IR channel reads 1E-8% power with P-6 LIT, that channel is not indicating the expected SR/IR overlap and is INOPERABLE. Per TS 3.3.1.1 bases, the <span class="hi-exam">24-hour action time</span> for one inoperable IR channel accounts for the <span class="hi-exam">low probability of failure of the operable IR channel</span> during this period. <span class="hi-trap">Trap: the bases cite low probability of channel failure, NOT low probability of reactivity events.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.1]]** — Reactor Trip System Instrumentation (NIS channels)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q57</div>
P-10 permissive and IR high flux trip: when <span class="hi-exam">at least 3/4 PR NIS channels are less than the P-10 setpoint (~9%)</span>, P-10 automatically unblocks the <span class="hi-exam">1/2 IR high flux trip (25%)</span> and the 2/4 PR high flux low setpoint trip (25%). With one IR channel failed HIGH (e.g. 2N35), the reactor will <span class="hi-exam">automatically trip when power decreases below P-10</span> during a planned shutdown. <span class="hi-trap">P-10 clears on 3/4 PR channels below setpoint, NOT 2/4. Do not confuse the P-10 block logic (2/4 above) with the unblock logic (3/4 below).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q78</div>
TS 3.9.2.2 (refueling source range neutron flux monitors): per TS bases, <span class="hi-exam">any combination of NIS source range monitors AND/OR Gamma-Metrics post-accident neutron flux monitors may be used to satisfy the LCO</span>. Two of the four total monitors are required OPERABLE. If one SR channel becomes inoperable (e.g. loss of 2A vital instrument bus), <span class="hi-exam">restoring ONE Gamma-Metrics channel to OPERABLE satisfies the requirement</span> and core alterations may recommence.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q82</div>
TS 3.3.1.1 Action 3 for one IR NIS channel inoperable above P-6: <span class="hi-exam">reduce RTP below P-6 OR raise RTP above P-10 within 24 hours</span>. P-6 setpoint is <span class="hi-exam">1E-5% RTP</span>. At 1E-4% power, the reactor IS above P-6 and the LCO applies. <span class="hi-trap">Reactor power at 1E-4% is above P-6 (1E-5%) — do not incorrectly assess that power is below P-6.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A3</div>
Manual QPTR calculation (S2.OP-ST.NIS-0002): for each Power Range detector (N41-N44), upper and lower: divide measured current by REM 100% current value to get detector ratio. Sum ratios, divide by <span class="hi-exam">4 operable detectors</span> to get average. Divide each ratio by average = power tilt. A dropped rod (2D4) causes asymmetric flux in N42 quadrant: <span class="hi-exam">N42T = 1.041, N42B = 1.032</span>, both exceeding TS 3.2.4 limit of <span class="hi-exam">1.02</span> → surveillance UNSAT.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Incores]], [[Control Rod Drive]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]]
- Related exams: [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
  - [[2023 Q72]] — Subcritical SR counts stabilize higher / SUR decays to zero after rod withdrawal
  - [[2023 Q11 — Loss of Vital Instrument Bus / NI Channel Response|2023 Q11]] — Vital instrument bus loss / NI channels fail low / IR trip logic
  - [[2023 Q82]] — IR NIS P-6 permissive / TS 3.3.1.1 bases for 24-hour action time
  - [[2022 Q57]] — IR NIS fails high / P-10 unblocks 1/2 IR trip on 3/4 PR below setpoint
  - [[2022 Q78]] — Gamma-Metrics substitution for SR channel per TS 3.9.2.2 bases
  - [[2022 Q82]] — One IR channel inoperable above P-6 / TS 3.3.1.1 Action 3
- Related JPMs: [[2022 JPM RO-A3]]
