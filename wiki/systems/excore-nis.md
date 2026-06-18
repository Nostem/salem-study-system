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

## Function & Design Basis

Excore Nuclear Instrumentation provides continuous monitoring of reactor neutron flux from shutdown through full power operation using detectors located outside the reactor vessel. The Nuclear Instrumentation System (NIS) is an integral part of the Reactor Trip System (UFSAR §7.2.1.2). It uses information from three separate types of instrumentation channels to provide three discrete protection levels; each range (source, intermediate, and power) provides the overpower reactor trip protection required during operation in that range (UFSAR §7.2.1.2).

The overlap of instrument ranges provides reliable continuous protection beginning with source level through the intermediate and low power level. As reactor power increases, the overpower protection level is increased by administrative procedures after satisfactory higher-range instrumentation operation is obtained; automatic reset to more restrictive trip protection is provided when reducing power (UFSAR §7.2.1.2). Various neutron detectors with solid-state electronic circuitry monitor leakage neutron flux from a completely shutdown condition to 120 percent of full power; the power range channels are capable of recording overpower excursions up to 200 percent of full power (UFSAR §7.2.1.2).

The lowest range (source range) covers six decades of leakage neutron flux. The intermediate range covers eight decades. Detectors and instrumentation are chosen to provide overlap between the higher portion of the source range and the lower portion of the intermediate range. The power range covers approximately two decades of the total instrumentation range; this is a linear range that overlaps with the higher portion of the intermediate range (UFSAR §7.2.1.2). The Salem design uses Ion-Chamber Current Recorders <span class="hi">NR-41 through NR-44</span> to record the upper and lower neutron flux of the same detector (rather than the upper/lower flux of diagonally opposite detectors) (UFSAR §7.2.1.2).

The NIS provides Control Room indication and recording of signals proportional to reactor neutron flux during core loading, shutdown, startup and power operation, and during refueling. Startup rate indication for the source and intermediate range channels is provided at the control board. Reactor trip, rod stop, and alarm signals are transmitted to the Reactor Control and Protection System for automatic plant control (UFSAR §7.2.1.2).

## Nuclear Instrumentation Ranges

- **Source Range:** Two channels, used during shutdown and startup (covers six decades of leakage neutron flux) (UFSAR §7.2.1.2)
- **Intermediate Range:** Two channels, used during startup (covers eight decades; overlaps the higher portion of the source range) (UFSAR §7.2.1.2)
- **Power Range:** Four channels, used during power operation (linear range covering ~two decades, overlapping the higher portion of the intermediate range; provides input to OT Delta-T, OP Delta-T, high flux trips, and rod control) (UFSAR §7.2.1.2)

## Automatic Features & Setpoints

The NIS originates several Reactor Trip System functions, permissive interlocks (P-blocks), and control interlocks (C-blocks / rod stops). All nuclear flux power range currents — top detector, bottom detector, and the algebraic difference and average of the bottom and top detector currents — are indicated and/or recorded (UFSAR §7.2.1.10).

### NIS-Derived Reactor Trips

| Reactor Trip | Coincidence / Interlock | Notes | Source |
|--------------|------------------------|-------|--------|
| High neutron flux (Power Range) | 2/4; low setpoint interlocked with P-10 | High and low settings; manual block and automatic reset of the low setting by P-10 | UFSAR Table 7.2-1 |
| Intermediate range neutron flux | 1/2; manual block permitted by P-10 | Manual block and automatic reset | UFSAR Table 7.2-1 |
| Source range neutron flux | 1/2; manual block permitted by P-6, interlocked with P-10 | Manual block and automatic reset | UFSAR Table 7.2-1 |
| High flux rate trips | 2/4; no interlocks | Positive high flux rate trip provided; the Negative Flux Rate Trip was removed (setpoint disabled then circuitry physically removed) per Salem NRC License Amendment 278 (Unit 1) / 261 (Unit 2) | UFSAR Table 7.2-1 (Note 2) |

The trip setpoints are: Power Range Neutron Flux (High) ≤<span class="val-trip">109%</span> RTP and (Low) ≤<span class="val-trip">25%</span> RTP; Power Range High Positive Rate ≤<span class="val-trip">5%</span> RTP (τ ≥ 2 sec); Intermediate Range Neutron Flux ≤<span class="val-trip">25%</span> RTP; Source Range Neutron Flux ≤<span class="val-trip">10⁵ cps</span> (TS Table 2.2-1, Amendment No. 310). See [[TS 3/4.3 — Instrumentation|TS 3/4.3.1]].

Four power-range nuclear flux channels are provided for overpower protection. Isolated outputs from all four channels are auctioneered for automatic rod control; if any channel fails so as to produce a low output, that channel is incapable of proper overpower protection, but the 2/4 overpower trip logic ensures an overpower trip if needed even with an independent failure in another channel (UFSAR §7.2.3.2). The Control System responds only to rapid changes in indicated nuclear flux; slow changes or drifts are compensated by the temperature control signals (UFSAR §7.2.3.2).

The ΔT trip functions are provided with a nuclear differential-flux feedback (upper minus lower ion chamber signal) to reflect axial power distribution. When the difference between the upper and lower ion chamber signals exceeds the desired range, automatic feedback signals reduce the overpower/overtemperature ΔT trip setpoints, which in turn block rod withdrawal and reduce load to maintain operating margins (UFSAR §7.2.3.1, Figure 7.2-3).

### Permissive Interlocks (P-blocks)

These permissives are derived from NIS channels. The master reference for all permissive interlocks is [[RPS/SSPS]].

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| P-6 | 1/2 intermediate range above setpoint | Allows manual block of source range reactor trip (2/2 IR above setpoint defeats the block) | UFSAR Table 7.2-2 |
| P-8 | 3/4 power range below setpoint | Blocks reactor trip on low flow in a single loop | UFSAR Table 7.2-2 |
| P-10 | 2/4 power range above setpoint | Allows manual block of the power range low setpoint trip, the intermediate range trip, and the IR rod stops (C-1); blocks source range reactor trip (backup for P-6). On 3/4 PR below setpoint these blocks are defeated; also input to P-7 | UFSAR Table 7.2-2 |

P-7 (3/4 PR below setpoint from P-10, with 2/2 turbine steamline inlet pressure below setpoint from P-13) blocks reactor trips on low flow, RCP breakers open in more than one loop, undervoltage, underfrequency, pressurizer low pressure, and pressurizer high level (UFSAR Table 7.2-2). P-8 acts essentially as a high neutron flux reactor trip when operating with one loop not in service (UFSAR §7.2.3.2).

### Rod Motion Inhibits / Rod Stops (C-blocks)

Rod stops prevent abnormal power conditions resulting from excessive control rod withdrawal due to a Control System malfunction or operator violation of administrative procedures (UFSAR §7.7.2.3.1). At Salem, Automatic Rod Withdrawal is disabled and only Automatic Rod Insertion is available, so the listed C-1/C-2/C-3/C-4 blocks act on manual withdrawal (and the disabled automatic withdrawal) (UFSAR §7.7.2.1, Table 7.2-2).

| Rod Stop | Actuation Signal | Motion Blocked | Source |
|----------|-----------------|----------------|--------|
| Nuclear Overpower (C-1 / C-2) | 1/4 high power range nuclear flux (C-2) or 1/2 high intermediate range nuclear flux (C-1) | Automatic and manual withdrawal | UFSAR Table 7.7-1, Table 7.2-2 |
| High ΔT (C-3 / C-4) | 2/4 overpower ΔT or 2/4 overtemperature ΔT | Automatic and manual withdrawal (accompanied by turbine load reference reduction) | UFSAR Table 7.7-1, Table 7.2-2 |
| Low Power | Low turbine steamline inlet pressure | Automatic withdrawal | UFSAR Table 7.7-1 |

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q43</div>
After a trip, IRNI current normally continues to lower until off-scale, and <span class="hi-exam">Source Range channels automatically energize when IRNI current lowers to ~7.0 E-11 Amps</span>. An IRNI reading HIGHER than expected together with an abnormally low SUR indicates an <span class="hi-trap">OVER-compensated</span> instrument. Per EOP-TRIP-2 step 38, Source Range channels are manually energized only if both IRNIs are not &lt;7E-11 A AND under-compensation is preventing proper operation. See [[EOP-TRIP-2 — Reactor Trip Response]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-f</div>
Energizing the Source Range NIS after a trip (EOP-TRIP-2 Step 22): both IR channels must be <span class="hi-exam">&lt;7E-11 Amps</span> to permit the source-range energize permissive. An <span class="hi-exam">undercompensated IR channel (e.g. 2N36) reads erroneously high (&gt;7E-11 Amps) and will not drop below permissive</span> — diagnosed by elapsed time since trip, a SUR of 0 on the affected channel with power above minimum display, and the NR-45 trend showing IR CH II leveling off. The operator then <span class="hi-exam">manually energizes BOTH Source Range channels (RESET SOURCE RANGE A and RESET SOURCE RANGE B)</span>.
</div>

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
<div class="callout-label">Exam — 2023 Q82</div>
P-6 permissive and IR NIS overlap: when P-6 is LIT, IR channels should indicate approximately <span class="hi-exam">1E-5% power</span>. If an IR channel reads 1E-8% power with P-6 LIT, that channel is not indicating the expected SR/IR overlap and is INOPERABLE. Per TS 3.3.1.1 bases, the <span class="hi-exam">24-hour action time</span> for one inoperable IR channel accounts for the <span class="hi-exam">low probability of failure of the operable IR channel</span> during this period. <span class="hi-trap">Trap: the bases cite low probability of channel failure, NOT low probability of reactivity events.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-g</div>
During a reactor startup (S2.OP-IO.ZZ-0003), once SR/IR overlap of <span class="hi-exam">≥1 decade</span> is observed and P-6 energizes (½ IR channels at <span class="hi-exam">10⁻¹⁰ amps</span>, 2RP4), the operator blocks the Source Range High Flux Trip with both BLOCK SOURCE RANGE A and B pushbuttons. <span class="hi-exam">Alternate path: BLOCK SOURCE RANGE B does NOT illuminate (Channel B fails to block), so the operator must insert Control Bank D to drive SUR zero/negative before the reactor auto-trips on High Source Range Flux at 1E5 cpm.</span> A successful block illuminates the TRIP BLOCKED blue light on 2RP4 and brings up OHA E-5 SR DET VOLT TRBL.
</div>

### Power Range Channel Trip and Coincidence

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
<div class="callout-label">JPM — 2020 Sim-f</div>
PR channel 2N41 removal from service (S2.OP-SO.RPS-0001): at NI Rack No. 81, five switch manipulations in Steps 5.1.5.A-E — <span class="hi-exam">DETECTOR CURRENT COMPARATOR upper</span> → <span class="hi-exam">DETECTOR CURRENT COMPARATOR lower</span> → <span class="hi-exam">POWER MISMATCH BYPASS</span> (defeats input to rod control) → <span class="hi-exam">ROD STOP BYPASS</span> (OHA E-31 clears, 2RP4 MANUAL BYPASS CH I lights) → <span class="hi-exam">COMPARATOR CHANNEL DEFEAT</span> (OHA E-39 clears). Distinct from IR channel removal which uses LEVEL TRIP switch. RO-only JPM.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
<span class="hi-exam">Power Range NI Channel IV (2N44) fails high</span> during a power ascension (Event 2). With rod control in auto the high indicated power drives rods to step IN at 72 spm; <span class="hi-exam">outward rod movement is blocked by the Overpower Rod Stop until the channel is defeated</span>. Channel removal per S2.OP-SO.RPS-0001 manipulates the Detector Current Comparator (upper/lower → PRN44), Power Mismatch Bypass, Rod Stop Bypass, and Comparator Channel Defeat, clearing OHAs <span class="hi-exam">E-38, E-46, E-31, and E-39</span>. TSAS 3.3.1.1 Actions 2 and 6 apply; QPTR is performed and a flux map requested. See [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]].
</div>

## Design Features & Interlocks

The Reactor Trip System uses four separate and independent channels of instrumentation feeding two separate logic systems, with physical and electrical separation of the four channels from sensing element to logic systems (UFSAR §7.2.2.1). Protection racks are color-coded by protection set: Set I — Green, Set II — Gray, Set III — Blue, Set IV — Cocoa, all with white lettering (UFSAR §7.2.1.5). For multiple trip settings used to monitor nuclear flux, the Protective System provides positive assurance that a more restrictive trip setting is used when required for a given mode or set of operating conditions, and the devices that prevent improper use of a less-restrictive setting are part of the Protective System (UFSAR §7.2.1.10).

Self-powered and ion-chamber detector characteristics: the power range uses long ion chambers; the upper/lower (ΦU, ΦL) out-of-core ion chamber flux signals provide the axial-flux-difference input to the ΔT trips (UFSAR Table 7.2-3, §7.2.3.1). Source range channels are de-energized (powered off) at high power; the source-range high-flux trip is blocked by P-6 (with P-10 as backup), and the source range channels are re-energized below P-10 when the operator performs the RESET SOURCE RANGE action (UFSAR Table 7.2-2; see Exam — 2016 Q38).

## Interconnections & Loads

The NIS feeds the Reactor Protection System / Solid State Protection System logic (NIS-derived reactor trips and the P-6 / P-8 / P-10 permissives) and the Reactor Control / rod control system (auctioneered isolated power range outputs for automatic rod control and the C-1 through C-4 rod stops). See [[RPS/SSPS]] and [[Control Rod Drive]] (UFSAR §7.2.3.2, Tables 7.2-1, 7.2-2, 7.7-1). Excore power range upper/lower detector currents also provide axial power distribution information to the Power Distribution Monitoring System (PDMS) and are cross-calibrated against incore data (UFSAR §7.7.3.6.2; TS Bases B 3/4 3-4, Amendment No. 282). See [[Incores]].

The excore power range detectors are cross-calibrated against the movable miniature incore neutron flux detectors. Provision is made to separately route each incore detector into a common flux thimble to permit cross calibration of the detectors, and both radial and azimuthal symmetry of power distributions are evaluated by comparing detector and thermocouple information across quadrants (UFSAR §7.7.3.6.2, §7.7.3.6). See [[Incores]].

## Control-Room Operation

The Protective System provides the operator with complete information on system status; trips are indicated and identified down to the channel level, and indication is provided in the Control Room when any part of the system has been administratively bypassed or taken out of service (UFSAR §7.2.1.9). Note that there is no audible or visual alarm associated with opening the Reactor Nuclear Instrumentation System panel doors (improper opening is prevented by administrative control); the interlocked-door alarm applies to the process control analog racks, not the NIS panel (UFSAR §7.2.1.10). NIS alarms annunciate in the overhead annunciator under Display E, which groups the NUCLEAR INSTRUMENTATION SYSTEM (with CVCS, Pressurizer, and Rod Control) (UFSAR Table 7.7-2).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q72</div>
Subcritical rod withdrawal response: after a short rod withdrawal with the reactor still subcritical, <span class="hi-exam">SR counts rapidly increase then stabilize at a new higher value</span> (subcritical multiplication reaches new equilibrium at higher keff). <span class="hi-exam">Startup rate (SUR) rapidly increases then gradually decreases to zero</span>. SUR returns to zero because the reactor is still subcritical — a sustained positive SUR only exists at criticality. <span class="hi-trap">SR counts do NOT return to the previous value (they stabilize higher) and SUR does NOT remain at a positive value (it decays to zero).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-a</div>
A dropped rod is diagnosed in part from the NIS response: <span class="hi-exam">depressed power/flux in the region of the dropped rod(s)</span> on the excore detectors, together with rod bottom lights and lowering Tavg/Terr. A <strong>second</strong> dropped rod (the alternate-path failure in this JPM) is recognized the same way and requires a manual reactor trip per AB.ROD-0002 step 2.1. See [[Control Rod Drive]].
</div>

### Source Range Audible Count Rate

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q31</div>
During an automatic RCS makeup in Mode 3 with 2CV179 (PRIMARY WATER FLOW) failed closed, only boric acid flows through the blender → <span class="hi-exam">RCS boron concentration rises → negative reactivity → Source Range NI Audible Count Rate indication lowers</span>. <span class="hi-trap">If CV179 had failed OPEN, primary water would dilute the RCS → boron concentration lowers → positive reactivity → SR audible count rate would rise.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.1]]** — Reactor Trip System Instrumentation (NIS channels)

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
For Mode 6 Core Alterations, <span class="hi-exam">LCO 3.9.2 requires 2 Source Range NIs operable</span>; one inoperable Source Range NI prevents commencing core alterations. See [[Refueling]], [[TS 3/4.9 — Refueling Operations]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q78</div>
TS 3.9.2.2 (refueling source range neutron flux monitors): per TS bases, <span class="hi-exam">any combination of NIS source range monitors AND/OR Gamma-Metrics post-accident neutron flux monitors may be used to satisfy the LCO</span>. Two of the four total monitors are required OPERABLE. If one SR channel becomes inoperable (e.g. loss of 2A vital instrument bus), <span class="hi-exam">restoring ONE Gamma-Metrics channel to OPERABLE satisfies the requirement</span> and core alterations may recommence.
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Incores]], [[Control Rod Drive]], [[115V AC]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[S2.OP-ST.NIS-0001 — Power Distribution AFD Surveillance]], [[S2.OP-ST.NIS-0002 — Power Distribution QPTR Surveillance]], [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[AB.115-0004 — Loss of 1D 115V Vital Instrument Bus]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
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
