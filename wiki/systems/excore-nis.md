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

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q43</div>
After a trip, IRNI current normally continues to lower until off-scale, and <span class="hi-exam">Source Range channels automatically energize when IRNI current lowers to ~7.0 E-11 Amps</span>. An IRNI reading HIGHER than expected together with an abnormally low SUR indicates an <span class="hi-trap">OVER-compensated</span> instrument. Per EOP-TRIP-2 step 38, Source Range channels are manually energized only if both IRNIs are not &lt;7E-11 A AND under-compensation is preventing proper operation. See [[EOP-TRIP-2 — Reactor Trip Response]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-f</div>
Energizing the Source Range NIS after a trip (EOP-TRIP-2 Step 22): both IR channels must be <span class="hi-exam">&lt;7E-11 Amps</span> to permit the source-range energize permissive. An <span class="hi-exam">undercompensated IR channel (e.g. 2N36) reads erroneously high (&gt;7E-11 Amps) and will not drop below permissive</span> — diagnosed by elapsed time since trip, a SUR of 0 on the affected channel with power above minimum display, and the NR-45 trend showing IR CH II leveling off. The operator then <span class="hi-exam">manually energizes BOTH Source Range channels (RESET SOURCE RANGE A and RESET SOURCE RANGE B)</span>.
</div>

## Key NIS Permissive Interlocks

These permissives are derived from NIS channels. The master reference for all permissive interlocks is [[RPS/SSPS]].

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| P-6 | 1/2 intermediate range above setpoint | Allows manual block of source range trip | UFSAR T7.2-2 |
| P-8 | 3/4 power range below setpoint | Blocks trip on low flow in a single loop | UFSAR T7.2-2 |
| P-10 | 2/4 power range above setpoint | Allows block of power range low setpoint trip; blocks source range trip | UFSAR T7.2-2 |

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q87</div>
The <span class="hi-exam">Intermediate Range bistable alarm setpoint is 25%</span>. During a power ascension at 15% power (prior to rolling the Main Turbine), an IR bistable illuminating is <span class="hi-exam">NOT expected at that power level</span> — and while the bistable WILL light at 25%, its <span class="hi-exam">output is already blocked because the IR Hi Flux trip was blocked above P-10</span>. So the power ascension may continue while investigating the cause; no failure of the trip block has occurred and power need not be lowered.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q12</div>
With one Source Range NI (Channel I / 2N31) failed low during a startup, power must be maintained &lt;P-6 because below P-6 the <span class="hi-exam">SR and IR NIs may not be overlapped</span> — reducing reactor power indication to a single SR channel. <span class="hi-trap">A single SR channel cannot be considered reliable with no other Rx power indication to verify it against</span> (adequate for shutdown monitoring, not for a startup). Basis: TS Bases 3.3.1.1 — maintain coincidence logic, sufficient redundancy, and diverse-parameter functional capability.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q83</div>
With Source Range NIs not energized and IR SUR present, the Subcriticality CFST YELLOW path uses the IR-SUR criterion: <span class="hi-exam">IR SUR is required to be more negative than -0.2 dpm</span> (otherwise a YELLOW path exists for FRSM-2). At 0.0 DPM IR SUR with SRNIs deenergized, FRSM-2 YELLOW exists — but FRTS-1 PURPLE (when concurrent) takes precedence.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q57</div>
P-10 permissive and IR high flux trip: when <span class="hi-exam">at least 3/4 PR NIS channels are less than the P-10 setpoint (~9%)</span>, P-10 automatically unblocks the <span class="hi-exam">1/2 IR high flux trip (25%)</span> and the 2/4 PR high flux low setpoint trip (25%). With one IR channel failed HIGH (e.g. 2N35), the reactor will <span class="hi-exam">automatically trip when power decreases below P-10</span> during a planned shutdown. <span class="hi-trap">P-10 clears on 3/4 PR channels below setpoint, NOT 2/4. Do not confuse the P-10 block logic (2/4 above) with the unblock logic (3/4 below).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q11</div>
Loss of a vital instrument bus (e.g. 1B) causes associated NI channels to <span class="hi-exam">fail low</span> (SR, IR, and PR monitors lose power). The bi-stables trip to SSPS. Above <span class="hi-exam">P-6 (approximately 1E-10 amps / ~1% power)</span> the SR trip is blocked. Below <span class="hi-exam">P-10 (10% power)</span> the IR high flux trip is active with <span class="hi-exam">1/2 coincidence</span>. At 8% power (above P-6, below P-10): SR trip blocked, PR needs 2/4 (only 1 channel affected), but the IR trip actuates on 1/2 IR bi-stables tripped — reactor trips.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q72</div>
Subcritical rod withdrawal response: after a short rod withdrawal with the reactor still subcritical, <span class="hi-exam">SR counts rapidly increase then stabilize at a new higher value</span> (subcritical multiplication reaches new equilibrium at higher keff). <span class="hi-exam">Startup rate (SUR) rapidly increases then gradually decreases to zero</span>. SUR returns to zero because the reactor is still subcritical — a sustained positive SUR only exists at criticality. <span class="hi-trap">SR counts do NOT return to the previous value (they stabilize higher) and SUR does NOT remain at a positive value (it decays to zero).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q82</div>
P-6 permissive and IR NIS overlap: when P-6 is LIT, IR channels should indicate approximately <span class="hi-exam">1E-5% power</span>. If an IR channel reads 1E-8% power with P-6 LIT, that channel is not indicating the expected SR/IR overlap and is INOPERABLE. Per TS 3.3.1.1 bases, the <span class="hi-exam">24-hour action time</span> for one inoperable IR channel accounts for the <span class="hi-exam">low probability of failure of the operable IR channel</span> during this period. <span class="hi-trap">Trap: the bases cite low probability of channel failure, NOT low probability of reactivity events.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-g</div>
During a reactor startup (S2.OP-IO.ZZ-0003), once SR/IR overlap of <span class="hi-exam">≥1 decade</span> is observed and P-6 energizes (½ IR channels at <span class="hi-exam">10⁻¹⁰ amps</span>, 2RP4), the operator blocks the Source Range High Flux Trip with both BLOCK SOURCE RANGE A and B pushbuttons. <span class="hi-exam">Alternate path: BLOCK SOURCE RANGE B does NOT illuminate (Channel B fails to block), so the operator must insert Control Bank D to drive SUR zero/negative before the reactor auto-trips on High Source Range Flux at 1E5 cpm.</span> A successful block illuminates the TRIP BLOCKED blue light on 2RP4 and brings up OHA E-5 SR DET VOLT TRBL.
</div>

## PR Channel Trip and Coincidence

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q13</div>
1D 115V Vital Instrument Bus powers Power Range NIS Channel IV (PRNI CH IV). With Unit 1 in MODE 2 at 4% power, a loss of 1D VIB illuminates (one minute later, no operator action) the <span class="hi-exam">Yellow High Flux PRNI CH IV lamp on Reactor Status Panel 1RP4 for BOTH the High Power and Low Power High Flux trips</span>. <span class="hi-trap">No reactor trip results — the High Flux trip is 2/4 coincidence, so loss of one channel gives no trip demand.</span> <span class="hi-trap">The Over Power Rod Stop Manual Bypass for CH IV is NOT automatic (must be manually aligned).</span> See [[AB.115-0004 — Loss of 1D 115V Vital Instrument Bus]], [[115V AC]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q42</div>
The Power Range NIs provide the <span class="hi-exam">High Power Reactor Trip (low range) at 25% on 2/4 PR NIs</span> that terminates an uncontrolled rod withdrawal at low power (FSAR 15.2.2.1), with the basis of DNB protection.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q44</div>
<span class="hi-exam">1/4 PR NI &gt;103% = C-2</span>, which blocks ALL outward rod motion (auto and manual). This is the overpower rod stop interlock derived directly from the Power Range NIs. <span class="hi-trap">A single PRNI failing high (e.g., 2N43) drives rods IN in auto and trips the Overpower Rod Stop, but a single channel &gt;103% satisfies the 1/4 C-2 logic that blocks outward motion.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q38</div>
Block Power Range trip controls during a startup power ascension: <span class="hi-exam">depressing the Block Power Range A and B pushbuttons at &gt;10% power blocks the Power Range Low Setpoint (25%) reactor trip</span>, leaving the 109% high setpoint trip active. <span class="hi-trap">PRNI Rate Mode "Reset" switch resets the High Flux Rate trip — it does NOT change the Rx power trip setpoint. The "High Flux at Shutdown" Block switches block the SR hi-flux trip — they do not affect the PR low setpoint trip. The Reset Source Range A and B pushbuttons would re-energize SRNIs and lower the Rx trip setpoint to <span class="val-trip">1×10⁵ cps</span> if performed below 10% — but the P-10 block prevents re-energization once above P-10.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q30</div>
When a Power Range NI channel (e.g., 2N41) fails high: <span class="hi-exam">AB.NIS-0001 REQUIRES placing the Rod Bank Selector Switch in MAN</span> prior to placing the channel in tripped condition. After 2N41 bistable is tripped per S2.OP-SO.RPS-0001, the coincidence for the PR High Neutron Flux Reactor Trip changes from 2/4 to <span class="hi-exam">1 out of 3</span> (the tripped bistable counts as a permanent "tripped" input — it is NOT removed from the logic). <span class="hi-trap">Trap: candidates may think tripping the bistable removes the channel from the trip logic (reducing to 2/3). In fact, the tripped bistable satisfies one leg of the coincidence, so only 1 more of the remaining 3 channels needs to trip = 1 out of 3.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-a</div>
A dropped rod is diagnosed in part from the NIS response: <span class="hi-exam">depressed power/flux in the region of the dropped rod(s)</span> on the excore detectors, together with rod bottom lights and lowering Tavg/Terr. A <strong>second</strong> dropped rod (the alternate-path failure in this JPM) is recognized the same way and requires a manual reactor trip per AB.ROD-0002 step 2.1. See [[Control Rod Drive]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-f</div>
PR channel 2N41 removal from service (S2.OP-SO.RPS-0001): at NI Rack No. 81, five switch manipulations in Steps 5.1.5.A-E — <span class="hi-exam">DETECTOR CURRENT COMPARATOR upper</span> → <span class="hi-exam">DETECTOR CURRENT COMPARATOR lower</span> → <span class="hi-exam">POWER MISMATCH BYPASS</span> (defeats input to rod control) → <span class="hi-exam">ROD STOP BYPASS</span> (OHA E-31 clears, 2RP4 MANUAL BYPASS CH I lights) → <span class="hi-exam">COMPARATOR CHANNEL DEFEAT</span> (OHA E-39 clears). Distinct from IR channel removal which uses LEVEL TRIP switch. RO-only JPM.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
<span class="hi-exam">Power Range NI Channel IV (2N44) fails high</span> during a power ascension (Event 2). With rod control in auto the high indicated power drives rods to step IN at 72 spm; <span class="hi-exam">outward rod movement is blocked by the Overpower Rod Stop until the channel is defeated</span>. Channel removal per S2.OP-SO.RPS-0001 manipulates the Detector Current Comparator (upper/lower → PRN44), Power Mismatch Bypass, Rod Stop Bypass, and Comparator Channel Defeat, clearing OHAs <span class="hi-exam">E-38, E-46, E-31, and E-39</span>. TSAS 3.3.1.1 Actions 2 and 6 apply; QPTR is performed and a flux map requested. See [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]].
</div>

## Tech Spec LCOs

- **[[TS 3.3 — Instrumentation|TS 3.3.1]]** — Reactor Trip System Instrumentation (NIS channels)

**Exam & operating coverage:**

### IR Channel Operability / TS 3.3.1.1

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q89</div>
With one IRNI channel removed from service (TSAS 3.3.1.1) and the <span class="hi-exam">second IRNI channel oscillating erratically at power</span>, enter AB.NIS-0001 and remove the second channel — loss of the second IRNI enters TS 3.0.3 (Hot Standby within 6 hours). Loss of a single IRNI is excluded from LCO 3.0.3.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q22</div>
IR channel removal from service per S2.OP-SO.RPS-0001: the procedure places the <span class="hi-exam">LEVEL TRIP switch in bypass</span>, which causes <span class="hi-exam">OHA E-29 (SR & IR TRIP BYP) to annunciate</span>. <span class="hi-trap">IR channels are NOT removed by pulling control power fuses or instrument power fuses — fuse removal is used for PR channels only. There is no POWER MISMATCH BYPASS switch for IR channels (PR channel feature only).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q82</div>
TS 3.3.1.1 Action 3 for one IR NIS channel inoperable above P-6: <span class="hi-exam">reduce RTP below P-6 OR raise RTP above P-10 within 24 hours</span>. P-6 setpoint is <span class="hi-exam">1E-5% RTP</span>. At 1E-4% power, the reactor IS above P-6 and the LCO applies. <span class="hi-trap">Reactor power at 1E-4% is above P-6 (1E-5%) — do not incorrectly assess that power is below P-6.</span>
</div>

### Power Distribution Surveillance / TS 3.2

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 RO-A1-2</div>
Perform a Manual AFD Calculation (S1.OP-ST.NIS-0001, Attachment 3) after the AFD Monitor Alarm is inoperable at 73% power. Scale the 100% AFD Target of <span class="hi-exam">-1.5</span> to present power: 73 × -1.5 / 100 = <span class="hi-exam">-1.1</span>. Target band = Upper +6 + (-1.1) = <span class="hi-exam">+4.9</span>; Lower -9 + (-1.1) = <span class="hi-exam">-10.1</span> (limits inclusive). The discriminating recognition: only <span class="hi-exam">Channel III (-10.2) is outside the lower limit of -10.1</span> (Channels I -8.9, II -8.6, IV -9.3 are inside) → continue data recording IAW Section 5.4.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 RO-A1-2 / SRO-A1-2</div>
Manual QPTR from the four Power Range NI Upper/Lower detector currents (N41-N44), comparing to the REM 100% current values: detector ratio → sum → average over 4 operable detectors → power tilt. With dropped rod 204 the Maximum Power Tilt stays <span class="hi-exam">&lt; 1.02</span>, so the surveillance is <span class="hi-exam">SAT</span> and TS 3.2.4 is not entered. RO-A1-2 performs the calculation; SRO-A1-2 independently reviews it for completeness and accuracy.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 RO-A1</div>
Manual AFD calculation (S2.OP-ST.NIS-0001 Section 5.3) when AFD Monitor alarm is inoperable: at 73% power, AFD Target from REM Table 3 = -1.5, calculated AFD Target = <span class="hi-exam">(73/100) x (-1.5) = -1.1</span> (rounded per P&L 3.2). Lower Limit = -9.0 + (-1.1) = <span class="hi-exam">-10.1</span>. Channels III (-10.3) and IV (-10.5) outside the lower target band.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 RO-A3</div>
Manual QPTR calculation (S2.OP-ST.NIS-0002) with dropped rod 204: N42 quadrant shows highest power tilt — N42T = <span class="hi-exam">1.025</span>, N42B = <span class="hi-exam">1.023</span>. Exceeds <span class="hi-exam">TS 3.2.4 QPTR limit of 1.02</span>. Alternate path JPM.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A3</div>
Manual QPTR calculation (S2.OP-ST.NIS-0002): for each Power Range detector (N41-N44), upper and lower: divide measured current by REM 100% current value to get detector ratio. Sum ratios, divide by <span class="hi-exam">4 operable detectors</span> to get average. Divide each ratio by average = power tilt. A dropped rod (2D4) causes asymmetric flux in N42 quadrant: <span class="hi-exam">N42T = 1.041, N42B = 1.032</span>, both exceeding TS 3.2.4 limit of <span class="hi-exam">1.02</span> → surveillance UNSAT.
</div>

### Refueling / TS 3.9

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q67</div>
For Mode 6 Core Alterations, <span class="hi-exam">LCO 3.9.2 requires 2 Source Range NIs operable</span>; one inoperable Source Range NI prevents commencing core alterations. See [[Refueling]], [[TS 3.9 — Refueling Operations]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q78</div>
TS 3.9.2.2 (refueling source range neutron flux monitors): per TS bases, <span class="hi-exam">any combination of NIS source range monitors AND/OR Gamma-Metrics post-accident neutron flux monitors may be used to satisfy the LCO</span>. Two of the four total monitors are required OPERABLE. If one SR channel becomes inoperable (e.g. loss of 2A vital instrument bus), <span class="hi-exam">restoring ONE Gamma-Metrics channel to OPERABLE satisfies the requirement</span> and core alterations may recommence.
</div>

## Source Range Audible Count Rate

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q31</div>
During an automatic RCS makeup in Mode 3 with 2CV179 (PRIMARY WATER FLOW) failed closed, only boric acid flows through the blender → <span class="hi-exam">RCS boron concentration rises → negative reactivity → Source Range NI Audible Count Rate indication lowers</span>. <span class="hi-trap">If CV179 had failed OPEN, primary water would dilute the RCS → boron concentration lowers → positive reactivity → SR audible count rate would rise.</span>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Incores]], [[Control Rod Drive]], [[115V AC]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-ST.NIS-0001 — Power Distribution AFD Surveillance]], [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[AB.115-0004 — Loss of 1D 115V Vital Instrument Bus]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related tech specs: [[TS 3.3 — Instrumentation]]
- Related JPMs: [[2014 JPM RO-A1-2]], [[2014 JPM SRO-A1-2]], [[2014 JPM Sim-g]], [[2012 JPM RO-A1-2]]
- Related exam questions: [[2014 Q12]], [[2014 Q17]], [[2014 Q42]], [[2014 Q44]], [[2012 Q13]], [[2012 Q43]], [[2012 Q87]]
- Related exams: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
  - [[2015 Q67]] — Mode 6 Core Alterations require 2 Source Range NIs operable (LCO 3.9.2); one inoperable SR NI prevents core alterations
  - [[2015 Q89]] — second IRNI channel fails erratically: enter AB.NIS-0001 / TS 3.0.3 (Hot Standby within 6 hours); single-IRNI loss excluded from LCO 3.0.3
  - [[2016 Q38]] — Block Power Range A and B pushbuttons at 12% blocks the 25% PR low setpoint Rx trip
  - [[2016 Q78]] — ATWS at 4% Mode 2: Rx trip NOT confirmed by NI power <5% alone; trip confirmation requires negative SUR and power lowering
  - [[2018 Q31]] — SR audible count rate lowers during auto makeup with CV179 failed closed
  - [[2019 Q30]] — PR NI 2N41 fails high / rods to MAN per AB.NIS / tripped bistable = 1/3 coincidence
  - [[2020 Q22]] — IR channel removal from service / LEVEL TRIP switch bypass / OHA E-29
  - [[2023 Q72]] — Subcritical SR counts stabilize higher / SUR decays to zero after rod withdrawal
  - [[2023 Q11 — Loss of Vital Instrument Bus / NI Channel Response|2023 Q11]] — Vital instrument bus loss / NI channels fail low / IR trip logic
  - [[2023 Q82]] — IR NIS P-6 permissive / TS 3.3.1.1 bases for 24-hour action time
  - [[2022 Q57]] — IR NIS fails high / P-10 unblocks 1/2 IR trip on 3/4 PR below setpoint
  - [[2022 Q78]] — Gamma-Metrics substitution for SR channel per TS 3.9.2.2 bases
  - [[2022 Q82]] — One IR channel inoperable above P-6 / TS 3.3.1.1 Action 3
  - [[2016 Q69]] — Mode 2 entry recorded when Control Bank A withdrawal imminent (S2.OP-IO.ZZ-0003)
  - [[2016 Q70]] — AFD penalty minutes / 50–90% power / power must reduce &lt;50% within 30 min after 60 penalty min
  - [[2016 Q83]] — SR NIs not energized + IR SUR -0.2 dpm criterion for FRSM-2 YELLOW (overridden by FRTS-1 PURPLE)
  - [[2014 Q17]] — each 115VAC VIB loss deenergizes its channel PRNI High-Power bistable (a rod-withdrawal block); 2A loss drives rods in (PT-505), 2D loss freezes rods "as is" (power reduction via boration)
  - [[2012 Q87]] — IR bistable 25% alarm setpoint illuminates during ascension but is not expected at 15%; output already blocked (IR Hi Flux trip blocked above P-10), power ascension continues
- Related JPMs: [[2018 JPM RO-A1]], [[2018 JPM RO-A3]], [[2022 JPM RO-A3]], [[2020 JPM Sim-f]], [[2015 JPM Sim-a]], [[2015 JPM Sim-f]], [[2014 JPM RO-A1-2]], [[2014 JPM SRO-A1-2]]
- Related scenarios: [[2015 Scenario 1]]
