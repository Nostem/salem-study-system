---
title: RPS/SSPS
category: systems
status: draft
aliases:
  - I&C
  - reactor trip system
  - RTS
  - ESFAS
  - reactor protection
  - solid state protection
---

# RPS/SSPS

## Function & Design Basis

Instrumentation and Control Systems provide the reactor operator with information and control capability to operate the station safely and efficiently. Safety-related logic circuitry and actuators execute equipment actions without operator action when safety functions are involved. Salem's Protection and ESF Actuation Systems are functionally identical to those in the D.C. Cook Plant. (UFSAR 7.1)

The Reactor Trip System consists of all equipment from the sensors to the trip breakers or to the initiation circuits of engineered safety features; this entire chain is part of the protective system. The reactor trip breakers and the undervoltage attachment are safety-related. The Reactor Trip System is an aggregate lineup of the Nuclear Instrumentation System, the Process Control System, and the Solid State Protection System (SSPS), and is designed in accordance with IEEE Standard 279-1971. (UFSAR §7.2.1.1, §7.1.1.1)

The Reactor Trip System, in conjunction with inherent plant characteristics, is designed to prevent anticipated abnormal conditions from exceeding the limits established in the safety analyses. If it receives signals indicative of an approach to unsafe operating conditions, it actuates alarms, prevents control rod withdrawal, initiates load cutback, and/or opens the reactor trip breakers. (UFSAR §7.2.1.10, §7.1.2.1)

<span class="hi">Figure 7.2-1 illustrates the core limits and shows the maximum trip points used by the protection system.</span> The solid lines indicate a typical locus of departure from nucleate boiling ratio (DNBR) = <span class="val-normal">1.30</span>, and the dashed lines indicate the maximum permissible trip points for the Overtemperature Delta-T reactor trip. Actual setpoints (the safety limits are given in the Technical Specifications) are lower to allow for measurement and instrumentation errors. The Overpower Delta-T reactor trip limits the maximum core power independent of DNBR. Adequate margins exist between the maximum nominal steady-state operating point (including allowance for temperature, calorimetric, and pressure errors) and the required trip points to preclude a spurious trip during design transients. (UFSAR §7.2.1.1)

### Protection vs DNB & Power Density (K5)

<span class="hi">The Reactor Protection System protects the core against departure from nucleate boiling (DNB) and against excessive power density.</span> The plant variables affecting DNBR are: thermal power, coolant flow, coolant temperature, coolant pressure, and core power distribution. (UFSAR §7.2.3.1) Reactor trips on nuclear overpower and low reactor coolant flow provide direct, immediate protection against rapid changes in these parameters; in all cases where the calculated DNBR approaches <span class="val-normal">1.30</span>, an Overpower and/or Overtemperature Delta-T trip would also be actuated. For postulated abnormal conditions, the exact combination of conditions will not cause DNBR to go below 1.30 before a reactor trip; the simultaneous loss of power to all RCPs is the accident condition most likely to approach a DNBR of 1.30, and even then DNBR is near 1.30 for only a few seconds. (UFSAR §7.2.3.1) The Delta-T trip functions are based on the difference between measured hot-leg and cold-leg temperatures, which is proportional to core power, and are provided with a nuclear differential flux feedback to reflect axial power distribution and prevent an adverse axial distribution that could exceed allowable core conditions. (UFSAR §7.2.3.1)

## Reactor Trip Functions

| # | Trip Function | Trip Setpoint | Coincidence | Interlocks | Source |
|---|-------------|--------------|------------|------------|--------|
| 1 | Manual | N/A | 1/2 | None | UFSAR T7.2-1 |
| 2 | High Neutron Flux (Power Range — High) | ≤<span class="val-trip">109%</span> RTP | 2/4 | None | TS T2.2-1 |
| 2 | High Neutron Flux (Power Range — Low) | ≤<span class="val-trip">25%</span> RTP | 2/4 | Interlocked with P-10 | TS T2.2-1 |
| 3 | Overtemperature Delta-T | Variable (f(Tavg, P, Delta-I)) | 2/4 | None | TS T2.2-1 |
| 4 | Overpower Delta-T | Variable (f(Tavg)) | 2/4 | None | TS T2.2-1 |
| 5 | Low Pressurizer Pressure | ≥<span class="val-trip">1865 psig</span> | 2/4 | Interlocked with P-7 | TS T2.2-1 |
| 6 | High Pressurizer Pressure | ≤<span class="val-trip">2385 psig</span> | 2/4 | None | TS T2.2-1 |
| 7 | High Pressurizer Water Level | ≤<span class="val-trip">92%</span> span | 2/3 | Interlocked with P-7 | TS T2.2-1 |
| 8 | Low Reactor Coolant Flow | ≥<span class="val-trip">90%</span> design flow/loop | 2/3 per loop | Interlocked with P-7 and P-8 | TS T2.2-1 |
| 9A | RCP Undervoltage | ≥<span class="val-trip">2900 V</span> each bus | 1/2 taken twice | Interlocked with P-7 | TS T2.2-1 |
| 9B | RCP Underfrequency | ≥<span class="val-trip">56.5 Hz</span> each bus | 1/2 taken twice | Interlocked with P-7 | TS T2.2-1 |
| 9C | RCP Breaker Open | N/A | — | Interlocked with P-7 | UFSAR T7.2-1 |
| 10 | Safety Injection Signal | See SI actuation | See SI actuation | — | UFSAR T7.2-1 |
| 11 | Turbine-Generator Trip — Auto Stop Oil | ≥<span class="val-trip">45 psig</span> | 2/3 | Interlocked with P-9 | TS T2.2-1 |
| 11 | Turbine-Generator Trip — Stop Valve Closure | ≤<span class="val-trip">15%</span> off full open | — | Interlocked with P-9 | TS T2.2-1 |
| 14 | Source Range Neutron Flux | ≤<span class="val-trip">10⁵ cps</span> | 1/2 | Manual block by P-6, interlocked with P-10 | TS T2.2-1 |
| 15 | High Positive Flux Rate | ≤<span class="val-trip">5%</span> RTP (τ ≥ 2 sec) | 2/4 | None | TS T2.2-1 |
| 13 | SG Water Level — Low-Low | ≥<span class="val-trip">14.0%</span> NR span | 2/3 per SG | None | TS T2.2-1 |
| 5 | Intermediate Range Neutron Flux | ≤<span class="val-trip">25%</span> RTP | 1/2 | Interlocked with P-6 and P-10 | TS T2.2-1 |

Note: Negative Flux Rate Trip has been removed per NRC License Amendment 278-261. (UFSAR T7.2-1)

### Trip Functional Bases (K4.02)

Each reactor trip exists for a defined protective purpose (UFSAR §7.2.2.5):

- **High Neutron Flux (Power Range)** — two-out-of-four power range channels above setpoint. Two independent settings exist: the high setting provides protection during normal power operation and is always active; the low setting provides startup protection and can be manually blocked when 2/4 power range channels read above approximately 10% power (P-10), with three-out-of-four channels below 10% automatically reinstating the trip. (UFSAR §7.2.2.5)
- **High Neutron Flux (Intermediate Range)** — 1/2 intermediate range channels; startup protection, manually blockable above P-10 and automatically reinstated when 3/4 power range channels drop below P-10. Intermediate channels (including detectors) are separate from the power range channels. (UFSAR §7.2.2.5)
- **High Neutron Flux (Source Range)** — 1 of 2 source range channels; startup protection, manually blockable when one of two intermediate range channels reads above P-6, automatically reinstated below P-6, and automatically bypassed above P-10. (UFSAR §7.2.2.5)
- **Overtemperature Delta-T** — protects the core against DNB; <span class="hi-exam">the four long ion chamber units separately feed each Overtemperature Delta-T trip channel, so a single failure neither defeats the function nor causes a spurious trip</span>. Changes in f(ΔΦ) can only lead to a decrease in trip setpoint. (UFSAR §7.2.2.5)
- **High Positive Flux Rate** — trips on an abnormal rate of increase in nuclear power in 2/4 power range channels; provides protection against rod ejection accidents of low worth from mid-power and is always active. (UFSAR §7.2.2.5)
- **Low Pressurizer Pressure** — protects against excessive core steam voids and limits the range of protection required from the Overtemperature Delta-T trip; 2/4 low pressurizer pressure signals (each lead-lag compensated), blocked below P-7. (UFSAR §7.2.2.5)
- **High Pressurizer Pressure** — limits the range of Overtemperature Delta-T protection and protects against RCS overpressure; 2/4 high pressurizer pressure signals. (UFSAR §7.2.2.5)
- **High Pressurizer Water Level** — backup to the high pressurizer pressure trip; 2/3 high level signals, blocked below P-7. (UFSAR §7.2.2.5)
- **Low Reactor Coolant Flow** — protects the core from DNB following a loss of coolant flow. A loop low-flow signal is generated by 2/3 low-flow signals per loop; above P-7 low flow in any two loops trips the reactor, above P-8 low flow in any one loop trips the reactor, and all low-flow trips are blocked below P-7. (UFSAR §7.2.2.5)
- **RCP Breaker Position** — opening of two reactor coolant pump breakers above the P-7 interlock, indicative of imminent loss-of-coolant flow, results in a reactor trip. (UFSAR §7.2.2.5)
- **RCP Undervoltage / Underfrequency** — there is one undervoltage and one underfrequency sensor per bus. A 1/2-taken-twice underfrequency signal directly trips all RCPs and produces a direct reactor trip (interlocked by P-7); undervoltage trips the reactor above P-7 by 1/2-taken-twice logic. (UFSAR §7.2.2.5)
- **Reactor Trip on Turbine Trip (Anticipatory)** — 2/3 low autostop oil pressure or all-closed turbine stop valve signals; a direct reactor trip above P-9. This anticipatory trip removes sensible heat via a controlled short-term steam release to the condenser, avoiding SG safety valve actuation. <span class="hi-exam">No credit is taken for this trip in any of the safety analyses.</span> (UFSAR §7.2.2.5)
- **Low-Low SG Water Level** — prevents loss of the reactor's heat sink; 2/3 low-low level signals in any steam generator, with independent trip circuits for each SG. (UFSAR §7.2.2.5)
- **Safety Injection Signal** — a reactor trip occurs whenever the SI system is actuated. (UFSAR §7.2.2.5)

**Exam & operating coverage:**

### Coincidence Logic & Permissive Interlocks

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q10</div>
PZR Pressure LOW Reactor Trip: normal coincidence is <span class="hi-exam">2/4 (PT-455, PT-456, PT-457, PT-474)</span>. With 2PT-456 failed low, the failed channel's bistable is already satisfied (reads below trip setpoint). The effective coincidence for the remaining functional channels is <span class="hi-exam">1 out of 3</span>. <span class="hi-exam">PT-1648 is for RSP indication ONLY</span> and does NOT feed the PZR Pressure LOW Reactor Trip coincidence logic. <span class="hi-trap">Trap: candidates may think PT-1648 is part of the trip logic (making it 2/5 or 1/4), or may think the failed channel is bypassed (giving 2/3 instead of 1/3). A failed-low channel SATISFIES the trip condition — it is not removed from the logic.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q11</div>
RCP Undervoltage Reactor Trip: <span class="hi-exam">4KV Group Busses H and G</span> monitored. Trip signal generated when both are less than a maximum of <span class="hi-exam"><span class="val-trip">70%</span> of normal bus voltage</span>. Coincidence: <span class="hi-exam">1/2 taken twice</span>, interlocked with P-7 (above 10% power). <span class="hi-trap">Trap: 90% is the setpoint for the RCP Low Flow Reactor Trip, not undervoltage. The monitored busses are H and G, not H and E.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q30</div>
PR High Neutron Flux trip with one channel tripped (bistable tripped per S2.OP-SO.RPS-0001): the tripped bistable <span class="hi-exam">remains in the coincidence logic as a permanently satisfied input</span>. Normal coincidence is 2/4. With one channel tripped, coincidence becomes <span class="hi-exam">1 out of 3</span> (the tripped bistable counts as one of the two required trips). <span class="hi-trap">Trap: tripping the bistable does NOT remove the channel from the logic (which would give 2/3). It satisfies one leg permanently, making the effective coincidence 1/3 for the remaining functional channels.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q4</div>
The RCS Low Flow reactor trip is <span class="hi-exam">2/4 coincidence between P-10 (10% power) and P-8 (36% power)</span> — a single loop low flow does NOT trip the reactor in that power band. There are <span class="hi-exam">3 low-pressure flow taps and 1 common high-pressure flow tap</span> per loop. See [[RCPs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q1</div>
Low RC Flow trip: <span class="hi-exam">2/3 coincidence per loop</span>. Trip setpoint ≤90% of design loop flow. <span class="hi-exam">Between P-7 (10%) and P-8 (36%): loss of flow in a single loop does NOT cause an automatic trip</span> — P-8 must be exceeded for single-loop low flow trip. However, per S2.OP-AR.ZZ-0004, degraded RCP flow requires manual trip and RCP stop because <span class="hi-exam">Tech Specs do not allow 3-loop operation in Mode 1</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q35</div>
<span class="hi-exam">PZR Pressure High trip (2/4 channels exceeding <span class="val-trip">2385 psig</span>) has NO permissive interlock</span> — it is active at ALL power levels regardless of reactor power. At 7% power (below P-7), low PZR pressure, low RCS flow, RCP undervoltage/underfrequency, and high PZR level trips are all blocked by P-7, but PZR Pressure High is not blocked and will directly cause a reactor trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q36</div>
RCP underfrequency reactor trip logic: <span class="hi-exam">1/2 on (H or E bus) AND 1/2 on (F or G bus)</span>, enabled above P-7 (10% power). Both bus groups must have underfrequency to satisfy coincidence. Individual 4KV <span class="hi-exam">RCP breakers trip on undervoltage, NOT underfrequency</span>. If only H and E buses experience low frequency but F and G are normal, the reactor trip logic is NOT satisfied and no RCPs trip (voltage adequate).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q92</div>
PZR pressure channel failure and NRC reportability: with Channel I already in tripped condition and Channel III failing LOW, a <span class="hi-exam">reactor trip and SI actuate on low PZR pressure</span> (2/4 coincidence met with 2 channels tripped). Since actual RCS pressure was NOT low, the SI is <span class="hi-exam">NOT valid and NOT reportable</span>. However, the RPS actuation IS valid and reportable under <span class="hi-exam">RAL 11.3.2 as a 4-hour report</span>. <span class="hi-trap">Trap: RAL 11.3.1 (also 4-hour) is for valid ECCS actuations -- the SI here is NOT valid. RAL 11.3.3 (8-hour) does not apply because the event is already captured under RAL 11.3.2.</span>
</div>

### Nuclear Instrumentation Trips

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q87</div>
The <span class="hi-exam">Intermediate Range High Flux reactor trip (Functional Unit 5, ≤25% RTP, 1/2 coincidence) is interlocked with P-6 and P-10 — it is BLOCKED above P-10 (10% RTP)</span>. During a power ascension at 15% power, an IR bistable illuminating (at its 25% alarm setpoint) does not generate a reactor trip because the trip output is already blocked. <span class="hi-trap">No failure of the trip block has occurred; this is not an ATWT, and power need not be lowered.</span> See [[Excore NIs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q12</div>
Below P-6 the Source Range and Intermediate Range NIs <span class="hi-exam">may not be overlapped</span>. With one SRNI failed low during a startup, reactor power indication is reduced to a single SR channel which, <span class="hi-trap">while adequate for shutdown monitoring, cannot be relied upon for a startup — a single SR channel cannot be considered reliable with no other Rx power indication to verify it against</span> (TS Bases 3.3.1.1: maintain coincidence logic, redundancy, and diverse-parameter functional capability).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q42</div>
Continuous manual rod withdrawal from ~7% power (after a rapid load reduction). Per FSAR 15.2.2.1 (uncontrolled rod withdrawal at power), the power rise is terminated by the <span class="hi-exam">High Power Reactor Trip (low range) at 25% on 2/4 PR NIs</span>, whose basis is <span class="hi-exam">protection against DNB</span>. <span class="hi-trap">The 20% rod block (1/2 IR NI) may generate but is NOT credited in the FSAR and will not act quickly enough to prevent the high-power-low-range trip; the trip basis is DNB protection, not preventing PZR Safety valve opening.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q89</div>
IRNI channel logic: a tripped IRNI channel with the other channel dropping below 7x10-11 Amps would <span class="hi-exam">automatically energize the Source Range NIs — except the P-10 interlock prevents Source Range from energizing above 10% power</span>.
</div>

### ATWT Recognition & Trip Indication

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q2</div>
Reactor trip first-out (Window F): the OHA "F" windows have dual red/white backlights. The first signal to reach the RPS is locked in RED. When a manual trip is ordered while SG NR level is dropping past the <span class="val-trip">14% Lo-Lo auto trip setpoint</span>, both a manual and an auto trip signal can be generated — the <span class="hi-exam">Sequence of Events Recorder (2CC1) must be reviewed</span> to determine first-out and whether an ATWT occurred. <span class="hi-trap">The RED box indicates the first TRIP signal, NOT the first AUTO TRIP signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q11</div>
ATWT recognition during an RCS leak at 40% power (no auto/manual trip): a manual reactor trip is required when an automatic trip setpoint is exceeded without a trip. The relevant case is <span class="hi-exam">PZR pressure lowering through the <span class="val-trip">1865 psig</span> low PZR pressure auto reactor trip setpoint</span> (option given: 1860 psig and lowering). <span class="hi-trap">A turbine trip does NOT cause a Rx trip below P-9 (49%); 17% PZR level is heater isolation, not a Rx trip; 25°F loop D/T is normal at 40% power.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q1</div>
Turbine Stop Valve status lights on 2RP4: <span class="hi-exam">LIT solid = both SSPS trains see the valve at ≤ 85% open</span>. <span class="hi-exam">FLASHING = Trains A and B disagree on valve position</span>. OHA F-36 (TURB TRIP & P-9) confirms either 4/4 Turbine Stop Valves ≤ 85% open OR <span class="hi-exam">2/3 Auto Stop Oil Pressures ≤ <span class="val-trip">50 psig</span></span>. <span class="hi-trap">Trap: 45 psig is the Tech Spec value for auto stop oil, not the actual setpoint (≤ 50 psig). A flashing light does NOT mean a valve is mid-stroke — it means train disagreement.</span>
</div>

## Key Permissive Interlocks

| Designation | Setpoint | Derivation | Function | Source |
|------------|---------|-----------|----------|--------|
| P-4 | N/A | Reactor trip | Actuates turbine trip; closes main FW valves on low Tavg | UFSAR T7.2-2 |
| P-6 | <span class="val-trip">1E-6%</span> RTP (IR) | 1/2 intermediate range above setpoint | Allows manual block of source range trip | UFSAR T7.2-2 |
| P-7 | <span class="val-trip">10%</span> RTP | 3/4 power range below P-10 AND 2/2 turbine pressure below P-13 | Blocks trips on: low flow (>1 loop), UV, UF, low PZR pressure, high PZR level | UFSAR T7.2-2 |
| P-8 | <span class="val-trip">36%</span> RTP | 3/4 power range below setpoint | Blocks trip on low flow in a single loop | UFSAR T7.2-2 |
| P-9 | <span class="val-trip">50%</span> RTP | 2/4 power range above setpoint | Prevents/defeats block of turbine trip reactor trip | UFSAR T7.2-2 |
| P-10 | <span class="val-trip">10%</span> RTP | 2/4 power range above setpoint | Allows block of power range low setpoint trip; blocks source range trip | UFSAR T7.2-2 |
| P-11 | ≥<span class="val-trip">1925 psig</span> | 2/3 PZR pressure channels | Allows manual block of SI on low PZR pressure | TS T3.3-3 |
| P-12 | <span class="val-trip">543°F</span> Tavg | 2/4 Tavg channels (increasing: 3/4) | Actuates SI/steamline isolation on high steam flow; blocks steam dump | TS T3.3-3 |
| P-13 | <span class="val-trip">600 psig</span> | 2/2 turbine steamline inlet pressure below setpoint | Input to P-7 | UFSAR T7.2-2 |
| P-14 | ≤<span class="val-trip">67%</span> NR span | 2/3 Hi-Hi SG level above setpoint (any SG) | Trips all FW pumps, isolates feedwater, trips turbine | TS T3.3-4 |

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q36</div>
At <span class="hi-exam">4% power (below P-10)</span> the <span class="hi-exam">Low Pressurizer Pressure reactor trip is BLOCKED</span> — it is "not reinstated until &gt; P-10." With a stuck-open PZR spray valve depressurizing the RCS, the FIRST protective action below P-10 is therefore <span class="hi-exam">SI on Low PZR Pressure</span> (2/3 channels &lt;<span class="val-trip">1765 psig</span>). The Low PZR Pressure SI was reinstated during heatup/pressurization when RCS pressure was &gt;<span class="val-normal">1915 psig</span> (P-11). <span class="hi-trap">Trap: candidates may pick the Low PZR Pressure Rx Trip — but it is blocked below P-10. OT/DT trip would not initiate at 4% (D/T very small). PZR level does not rise to the high-level Rx trip setpoint.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q38</div>
The <span class="hi-exam">Power Range Low Setpoint reactor trip (≤<span class="val-trip">25%</span> RTP)</span> can be manually blocked above P-10 by <span class="hi-exam">depressing the Block Power Range A and B pushbuttons at &gt;10% Rx power</span>. Depressing these pushbuttons changes the active reactor trip setpoint from the 25% low setpoint to the 109% high setpoint. <span class="hi-trap">The Reset Source Range A and B pushbuttons (when depressed below 10% power after the SR hi-flux trip was blocked) WOULD re-energize the SRNIs and lower the Rx trip setpoint to <span class="val-trip">1×10⁵ cps</span> — but the P-10 block prevents re-energization once above P-10. The PRNI Rate Mode "Reset" switch resets the High Flux Rate trip — it does NOT change the Rx power trip setpoint. The "High Flux at Shutdown" Block switches block the SR hi-flux trip — they do not affect the PR low setpoint trip.</span>
</div>

## Rod Control Interlocks (Rod Stops)

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| C-1 | 1/2 intermediate range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-2 | 1/4 power range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-3 | 2/4 OT Delta-T above setpoint | Blocks rod withdrawal; actuates turbine runback | UFSAR T7.2-2 |
| C-4 | 2/4 OP Delta-T above setpoint | Blocks rod withdrawal; starts turbine runback | UFSAR T7.2-2 |
| C-5 | 1/1 turbine pressure below setpoint | Blocks automatic rod withdrawal | UFSAR T7.2-2 |

Note: Automatic rod withdrawal is disabled at Salem. (UFSAR T7.2-2)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q44</div>
ALL outward rod motion (auto AND manual) is blocked by <span class="hi-exam">C-2: 1/4 PR NI &gt;103%</span>. <span class="hi-trap">C-11 (ARO position) blocks only AUTO outward motion — and ARO is a per-fuel-cycle number, not a physical core stop. C-3 actuates within 3% of the OT/&Delta;T Rx trip setpoint (64.7/69 = 93.8%, &gt;3% away, so not actuated). Steam line inlet pressure &lt;15% (P-2) blocks AUTO outward rod motion only — manual still works.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q56</div>
Rod Position Indication: <span class="hi-exam">Only Group 1 Demand Steps input into the Plant Computer</span>. Per S2.OP-DL.ZZ-0003, either the Group Demand Counter or Plant Computer will satisfy the TS 3.1.3.2.1 surveillance for Group 1 only.
</div>

## ESF Actuation Signals

| Signal | Designation | Actuation | Setpoints | Actions | Source |
|--------|-----------|-----------|----------|---------|--------|
| Safety Injection | "S" | Low PZR pressure (2/3), OR Hi containment pressure (2/3), OR Hi steamline DP (2/3), OR Hi steam flow (2/4) AND (Lo-Lo Tavg 2/4 OR Lo steam pressure 2/4), OR Manual (1/2) | PZR Lo: ≤<span class="val-trip">1765 psig</span>; CNMT Hi: ≥<span class="val-trip">4.0 psig</span>; Steam DP: ≥<span class="val-trip">100 psi</span>; Tavg Lo-Lo: ≤<span class="val-trip">543°F</span>; Steam Press Lo: ≤<span class="val-trip">600 psig</span> | SI, reactor trip, diesel start, Phase A isolation | TS T3.3-4 |
| Phase A Containment Isolation | "T" | Safety Injection signal | N/A (auto on SI) | Isolates all non-essential process lines | UFSAR T7.2-1 |
| Containment Spray / Phase B Isolation | "P" | 2/4 Hi-Hi containment pressure, OR 2/2 manual | CNMT Hi-Hi: ≤<span class="val-trip">15.0 psig</span> | Containment spray, steamline isolation, remaining isolation valves | TS T3.3-4 |
| Main Steamline Isolation | — | Hi steam flow (2/4) AND (Lo-Lo Tavg 2/4 OR Lo steam pressure 2/4), OR Hi-Hi containment pressure (2/4), OR manual (1/1 per line) | Same as SI steam flow setpoints; CNMT Hi-Hi: ≤<span class="val-trip">15.0 psig</span> | Closes MSIVs | TS T3.3-4 |

**Exam & operating coverage:**

### Safety Injection — Logic & Blocking

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q8</div>
SSPS safeguards reset logic (drawing 221057, grid F-2 AND box + downstream LATCH-RESET): the SI signal resets only if BOTH (1) the MANUAL SI RESET AND BLOCK pb is pushed AND the 1-2 minute time delay has timed out after the SI was generated, and (2) the LATCH-RESET button is reset. The adjacent AND box blocks a second SI <span class="hi-exam">only after the Rx has been tripped</span>. In an ATWT where the RTBs failed to open (<span class="hi-exam">Rx not tripped</span>), that block AND box has no output → the NOR box outputs a 1 → Auto SI is <span class="hi-exam">NOT blocked</span> (it can still actuate from any of the 4 auto SI signals: Hi Steamline Flow with lo steamline pressure or lo-lo Tavg, High Steamline Differential pressure, PZR low pressure, or Containment hi pressure).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q41</div>
RCS leak during heatup (1850 psig, 510°F) returning from a refueling outage. The general Auto SI Block (from ANY auto SI signal) is <span class="hi-exam">UNBLOCKED at S1.OP-IO.ZZ-0002 step 5.2.21</span>, but the <span class="hi-exam">Low PZR Pressure SI remains BLOCKED until the RCS is pressurized &gt;1915 psig (P-11) at step 5.3.23</span>. At 1850 psig the Low PZR Pressure SI is still blocked, so SI does NOT occur at the Low PZR Pressure setpoint (<span class="val-trip">≤1765 psig</span>). <span class="hi-trap">Answer-key note: the worksheet keyed B (SI at 1765 psig), but the written rationale supports the AUTO SI actually occurring on Containment High Pressure (<span class="val-trip">≥4 psig</span>, 2/3, not blockable) as the 2000 gpm leak pressurizes containment — see Q41.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q43</div>
ESFAS/SEC response to a 2/3 4KV vital-bus UV followed by SI: <span class="hi-exam">SEC Mode II Blackout (all EDGs start, blackout loads sequenced) then SEC Mode III on the SI — EDG breaker opens, loads stripped, EDG breaker recloses, safeguards loads sequenced on all buses</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q39</div>
SI signal blockability during cooldown (IOP-6): <span class="hi-exam">Low PZR Pressure SI and High Steam Flow SI can be blocked</span> when P-11 is active (< <span class="val-alarm">1915 psig</span>). However, <span class="hi-exam">Containment High Pressure SI (<span class="val-trip">4 psig</span>, 2/3 channels) CANNOT be blocked</span> — it remains active in all modes. During a Mode 3 cooldown with SI blocks in place, multiple SG depressurizations inside containment will cause Containment High Pressure SI actuation even though Low PZR Pressure SI is blocked. <span class="hi-trap">Low PZR Pressure SI logic is 2/3 channels (not 2/4) — the 2/4 logic is for the Low PZR Pressure reactor trip, not the SI signal.</span>
</div>

### Containment Spray & Phase B — Bistable Logic

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q11</div>
Containment Pressure channel removal from service changes coincidence logic differently for SI/Reactor Trip vs Containment Spray. When Channel II is removed: <span class="hi-exam">SI/Reactor Trip (on Hi CTMT Pressure) goes from 2/3 to 1/2</span>; <span class="hi-exam">Containment Spray (on Hi-Hi CTMT Pressure) goes from 2/4 to 2/3</span>. SI and Reactor Trip bistables are <span class="hi-exam">de-energize to actuate</span> — loss of power to Channel III satisfies the 1/2 logic and actuates SI + Reactor Trip. CS bistables are energize to actuate — loss of power to Channel III does NOT satisfy the 2/3 logic. <span class="hi-trap">Key distinction: SI/Rx Trip uses Channels II, III, IV only (Hi CTMT Pressure) while CS uses all four channels I-IV (Hi-Hi CTMT Pressure). Removing Channel II has different effects on each system's coincidence.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q88</div>
Containment Spray Hi-Hi Containment Pressure bistables are <span class="hi-exam">energized to actuate</span> (opposite of most ESF bistables which are de-energized to trip). Loss of a Vital Instrument Bus leaves the associated bistable de-energized → <span class="hi-exam">logic goes from 2/4 to 2/3</span> (de-energized channel cannot actuate). Per TS 3.3.2.1, the inoperable Hi-Hi Containment Pressure channel is placed in <span class="hi-exam">BYPASS (not tripped)</span> to reduce the possibility of spurious Containment Spray actuation. <span class="hi-trap">Trap: most ESF bistables are de-energized to trip and TS requires placing inoperable channels in TRIPPED condition. Containment Spray bistables are the exception — energized to actuate, so inoperable channels are BYPASSED.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q39</div>
Containment pressure channel logic: <span class="hi-exam">SI uses channels II, III, IV only (2/3 coincidence)</span>. CS/Phase B uses channels I-IV (2/4 coincidence). With Channel I properly removed from service (tripped): CS/Phase B logic reduces to <span class="hi-exam">2/3</span>; SI logic remains 2/3 (Channel I not an input). If Channel IV then fails high: SI = 1/3 tripped (NOT met). CS/Phase B = 1/3 tripped (NOT met). <span class="hi-exam">Neither SI nor Phase B actuates.</span> <span class="hi-trap">Channel I removed from service removes its input from both SI and CS/Phase B — it does NOT count as a "tripped" channel for actuation purposes.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q21</div>
Containment spray / Phase B actuation logic is normally <span class="hi-exam">2/4 Hi-Hi containment pressure</span>. When one channel is properly removed from service (bypassed), the logic reduces to <span class="hi-exam">2/3</span>. The Hi-Hi containment pressure setpoint is <span class="val-trip">15 psig</span>. CS pump discharge valves (CS2s) open on the CS actuation signal specifically, not the Phase B signal.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q41</div>
<span class="hi-exam">Containment Pressure Channel I only feeds the Containment Hi-Hi (Spray actuation) bistables — it does NOT feed the Containment Hi (SI) circuits.</span> Containment Spray bistables are energized-to-actuate; when a channel is removed from service (tripped per S2.OP-SO.RPS-0005), its Spray bistable is NOT tripped but is removed from the Spray 2/3 coincidence (preventing a single remaining channel failing high from actuating Spray). SI coincidence remains 2/3 on Channels I, II, III. With Channel I removed, a single failed-high Channel IV gives <span class="hi-exam">no actuation — only channel-related alarms</span>. See [[Containment Spray]].
</div>

### Containment Spray Reset & CVI

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q48</div>
To electrically reset an AUTOMATIC Containment Spray initiation: <span class="hi-exam">depress BOTH (train) Reset Spray Actuation PBs — at ANY containment pressure</span>. Containment Spray actuation relays have <span class="hi-exam">retentive memory</span>, so they can be reset with the actuation signal still present. <span class="hi-trap">Containment pressure is NOT required to be &lt;15 psig; Phase B reset is NOT required; Reset SI PBs are NOT required to reset Containment Spray.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q45</div>
Containment Spray pump start sequencing depends on the SSPS Containment Hi-Hi pressure signal and the SEC: if the Hi-Hi signal is absent when the SEC first tries to start the CS pumps the SEC contact re-opens; and after an SEC reset (e.g., LOSC-2 safeguards reset), <span class="hi-exam">the CS pumps will NOT respond to a Hi-Hi containment pressure until the SEC is actuated again</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q44</div>
<span class="hi-exam">Containment Spray actuation relays have RETENTIVE MEMORY</span> — relays can be manually reset with an actuation signal still present. Even with containment pressure above the CS actuation setpoint of <span class="val-trip">15 psig</span>, depressing both Reset Spray Actuation pushbuttons resets the actuation signal, and the signal does NOT reinitiate after the pushbuttons are released. <span class="hi-exam">CS pumps and CS valves CS2, CS14, CS16, CS17 do NOT reposition to normal positions on reset</span> (CS14 is normally open with power removed; the others are normally shut and open on the CS signal — they cannot be closed until the spray actuation signal is reset). <span class="hi-trap">Trap: assuming actuation reinitiates while pressure remains above 15 psig — retentive memory prevents this.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q59</div>
Manually initiating <span class="hi-exam">Phase B and Spray Actuation</span> from the Control Room Console also generates a Containment Ventilation Isolation (CVI) signal. CVI closes <span class="hi-exam">ALL purge and pressure/vacuum relief valves: VC1, VC4, VC5, and VC6</span> (per Safeguards Action Signals Logic Diagram Sheet 8, drawing 221057). <span class="hi-trap">Phase A does NOT generate CVI. CVI closes all four valves — not just VC1/VC4 (purge isolation).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q53</div>
Containment Vacuum Relief dampers (VC5 and VC6) automatically close on <span class="hi-exam">Safety Injection (SI) signal</span> or <span class="hi-exam">Containment Vent Isolation (CVI) signal</span> — NOT on Phase A alone. CVI is also generated by containment atmosphere radiation monitors (2R11A, 2R12A, 2R12B — any one in alarm). Phase A does not actuate a CVI signal.
</div>

### Main Steamline Isolation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q51</div>
An automatic Main Steamline Isolation occurs with no operator action when <span class="hi-exam">all Main Steam Dumps fail full open at 20% power</span>: the dumps pass ~52% steam flow vs the <span class="hi-exam">Hi Steam Flow setpoint of 40% (0–20% power band)</span>, and the coincident <span class="hi-exam">Lo Tavg (&lt;<span class="val-trip">543°F</span>) or Lo Steam Pressure (&lt;<span class="val-trip">600 psig</span>)</span> condition is met as Tavg rapidly lowers — generating the MSI signal before the dumps turn off at 543°F. <span class="hi-trap">A single SG NR level &gt;67% is a P-14 feedwater isolation/turbine trip, not MSI; a Phase B isolation is containment isolation, not MSI.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q27</div>
ESFAS containment-isolation actuations during a LOCA occur in setpoint order: <span class="hi-exam">Phase A isolation, Feedwater Isolation, and Containment Ventilation isolation actuate on the SI signal; Main Steamline Isolation actuates at 15 psig</span> containment pressure. As containment pressure rises from 12 to 18 psig, MSLI (15 psig) is the only new automatic action — the SI-driven isolations have already occurred. Feedwater Isolation also actuates on SG NR level &gt;67%.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q42</div>
On a LOCA driving containment pressure &gt;15 psig (Hi-Hi), <span class="hi-exam">the 24MS167 Main Steamline Isolation Valve receives a SHUT signal from the Hi-Hi containment pressure (15 psig) MSLI signal</span> — so a 24MS167 indicating OPEN means it failed to reposition. <span class="hi-trap">21SW122 (CC HX SW inlet) receives a CLOSE only on MODE III SEC initiation (SI plus Blackout) — not satisfied in MODE 2; 22CC3 (23 header X-over) has NO automatic action; 23BF22 (SG FW stop check) gets NO shut signal from the MSLI signal.</span> See [[Main Steam]], [[ESF & Design]].
</div>

### SSPS Actuation & Indication

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q42</div>
The 2B Vital Instrument Bus powers SSPS Train B; deenergizing it means <span class="hi-exam">SSPS Train B slave relays would not actuate on a Safety Injection signal</span>. SSPS Train A 45VDC power comes from A and D vital power (so Train A is unaffected); CS bistables energize-to-actuate; and there is no train-disagreement flashing because no slave relays energized.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q3</div>
Phase A (ØA) indication on 2CC1 SAFEGUARDS ACTUATION Bezels: <span class="hi-exam">Red light LIT = train actuated</span>. <span class="hi-exam">Red light OUT = train failed to actuate</span>. On 2RP4, status lights LIT = component repositioned to safeguard position. Per EOP-TRIP-1 step 12, if any safeguards valve not in required position, <span class="hi-exam">place valves in safeguards position manually</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q65</div>
SSPS Train Disagreement: <span class="hi-exam">"SI & FW ISOL" Red lamp on 2RP4 FLASHES when one Train of SI has actuated and the other has not</span> (train disagreement). Lamp is LIT solid when both trains actuate. The "SI RESET" Green bezel light on the failed train's Safeguards panel will be LIT (indicating that train did not actuate).
</div>

## Auxiliary Feedwater Actuation

| Pump | Actuation Signals | Setpoints | Source |
|------|------------------|----------|--------|
| Turbine-Driven | 2/3 Lo-Lo level in any 2 SGs; OR RCP bus undervoltage (1/2 twice); OR manual | SG Lo-Lo: ≥<span class="val-trip">14.0%</span> NR; RCP UV: ≥<span class="val-trip">70%</span> bus voltage | TS T3.3-4 |
| Motor-Driven | 2/3 Lo-Lo level in any SG; OR trip of both main FW pumps; OR safeguards sequence; OR blackout sequence; OR manual | SG Lo-Lo: ≥<span class="val-trip">14.0%</span> NR | TS T3.3-4 |

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q50</div>
An 11 SG Narrow Range level protection channel in calibration has its bistables tripped; a <span class="hi-exam">second NR level channel failing to 30% swaps the 11BF19/11BF40 feed valves to manual</span> (the SGFPs do not swap), causing an overfeed during a downpower.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q54</div>
<span class="hi-exam">MDAFW pumps auto-start when both SGFPs are tripped</span> (logic drawing 221064); the TDAFW pump does not. MDAFW pumps also auto-start on 2/3 NR level channels in one SG lowering to 14%; the TDAFW pump starts on 2/3 NR level channels in 2/4 SGs.
</div>

## Main Feedwater Isolation

Actuated by: SI signal, OR 2/3 Hi-Hi SG level (≤<span class="val-trip">67%</span> NR span), OR low auctioneered Tavg AND reactor trip. Closes main FW control valves (fast closure), bypass valves, and inlet stop valves. (UFSAR T7.2-1, TS T3.3-4)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q52</div>
The P-14 (Feedwater Isolation) signal has <span class="hi-exam">no seal-in</span> — it clears automatically when SG level lowers below setpoint. (Relatching the SGFP afterward will not auto-ramp speed to minimum if speed was &gt;160 rpm at latch.)
</div>

## Overtemperature Delta-T Trip

<span class="hi">Protects the core against DNB</span>. Continuously calculated setpoint per loop (2/4 coincidence):

Delta-T setpoint = K1 - K2*(Tavg) + K3*(P) - f(delta-phi)

Where K1 = setpoint bias, K2 = temperature effect on DNB, K3 = pressure effect on DNB, f(delta-phi) = axial flux difference penalty. Changes in f(delta-phi) can only decrease the setpoint. (UFSAR 7.2.2.5)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q37</div>
OT Delta-T operational inputs: <span class="hi-exam">Tavg, Pressurizer Pressure, and Delta-I (axial flux difference)</span>. OT Delta-T is a DNB protection trip. <span class="hi-trap">OP Delta-T does NOT use pressure or delta flux (f2(delta-I) = 0) — only Tavg and rate of change of Tavg. Candidates commonly confuse OP Delta-T inputs with OT Delta-T inputs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q5</div>
<span class="hi-exam">OT Delta-T has a PRESSURE input (+K3*P). As RCS pressure LOWERS, the OT Delta-T setpoint LOWERS (becomes more restrictive).</span> OP Delta-T does NOT have a pressure input. If PZR pressure controlling channel fails HIGH, actual pressure drops → OT Delta-T setpoint lowers → OT Delta-T trips reactor before low PZR pressure trip.
</div>

## Overpower Delta-T Trip

<span class="hi">Protects against excessive power (fuel rod rating)</span>. Continuously calculated per loop (2/4 coincidence):

Delta-T setpoint = K4 - K5*(rate of change of Tavg) + K6*(Tavg - Tavg-setpoint) - f(delta-phi)

<span class="hi-exam">OP Delta-T does NOT have a pressure input.</span> (UFSAR 7.2.2.5)

## AMSAC (ATWS Mitigation System Actuation Circuitry)

Diverse from the Reactor Protection System. Provides backup trip of turbine and actuation of AFW in the event the RPS fails to trip the reactor. Armed by P-20 (turbine steamline inlet pressure above setpoint). Actuates on low SG water level. Not safety-related but important for ATWS mitigation per 10CFR50.62. (UFSAR 7.8)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q80</div>
ATWS turbine trip verification per EOP-FRSM-1 Step 6: confirm turbine trip by checking that <span class="hi-exam">ALL turbine stop valve closed bi-stables are LIT on 2RP4</span>. <span class="hi-trap">2/3 Auto Stop Oil low pressure bi-stables LIT is a demand for a turbine trip, not confirmation that the turbine actually tripped.</span> If turbine trip is not confirmed, dispatch operator to <span class="hi-exam">locally trip the turbine at the front standard</span>.
</div>

## POPS (Pressurizer Overpressure Protection System)

Provides low-temperature overpressure protection by enabling PORVs to open at a reduced setpoint when RCS temperature is low. Prevents exceeding Appendix G pressure-temperature limits during heatup, cooldown, and cold shutdown. (UFSAR 7.6.3)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q85</div>
CFST priority for Thermal Shock (EOP-FRTS-1): a <span class="hi-exam">RED path exists when RCS T-Cold cooldown rate exceeds 100F in the last 60 minutes AND the RCS pressure/temperature point is NOT to the right of Limit A in Figure 4A</span>. With all T-Colds <230F and RCS pressure at 1100 psig (well into the unacceptable region), EOP-FRTS-1 is the highest priority FRP. <span class="hi-exam">RED Thermal Shock takes priority over PURPLE Shutdown Margin (+0.1 DPM SUR) and YELLOW Heat Sink (low SG levels).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q91</div>
TS 3.4.10.3 action "e": <span class="hi-exam">LCO 3.0.4.b is NOT applicable when entering MODE 4 from MODE 5</span> with an inoperable POPS/LTOP channel. Mode change from Mode 5 to Mode 4 <span class="hi-exam">may NOT be performed</span> until the channel is restored to OPERABLE status. Risk assessment per 3.0.4.b <span class="hi-exam">is explicitly prohibited</span> by the TS bases due to increased risk associated with entering Mode 4 with inoperable LTOP.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q34</div>
Master Pressure Controller (MPC) controls PZR spray valves and backup heaters. If MPC fails low (0% output): spray valves close, both backup heater groups energize, and RCS pressure rises. <span class="hi-exam">PORVs are interlocked directly from PZR pressure channels, NOT from MPC.</span> PORVs open independently at <span class="val-trip">2335 psig</span> regardless of MPC status. MPC failure does not prevent PORV actuation.
</div>

## Reactor Trip Breakers

Two reactor trip breakers (52/RTA and 52/RTB) in series, each with a bypass breaker (52/BYA and 52/BYB). Trip signal deenergizes undervoltage coils and actuates shunt trip. <span class="hi-exam">If a bypass breaker is closed for testing and the other train's bypass breaker is also closed, both trip breakers and bypass breakers are automatically tripped by the General Warning Alarm.</span> (UFSAR 7.2.2)

Rapid reactivity shutdown is provided by the insertion of the rod cluster control assemblies by free fall. Duplicate series-connected circuit breakers supply all power to the control rod drive mechanisms; the rods must be energized to remain withdrawn, so automatic control rod insertion occurs upon loss of power to the control rods. <span class="hi-exam">The trip breakers are opened by both the undervoltage coils and the shunt trip coils on both breakers.</span> The undervoltage coils, which are normally energized, become deenergized by any one of the several trip signals; the shunt trip coil is energized by an interposing relay installed in parallel with the undervoltage coils. (UFSAR §7.2.2.5)

Normally, reactor trip breakers 52/RTA and 52/RTB are in service and bypass breakers 52/BYA and 52/BYB are withdrawn (out of service). To test 52/RTA, bypass breaker BYA is placed in service — this closes switchgear relay 52/BYA and interrupts one of the two signals to the Train A "and box" necessary to actuate the downstream logic causing turbine trip, feedwater isolation, and safety injection block. A simulated trip signal applied to Train A only deenergizes undervoltage coil 52(UV)/RTA and the automatic shunt-trip interposing relay; the reactor is not tripped because the rods continue to receive rod-drive bus power via switchgears 52/BYA and 52/RTB. <span class="hi-exam">If a real trip signal occurs during testing of the 52/RTA breaker, Train B actuates the reactor trip and the logic following the Train B "and box."</span> (UFSAR §7.2.2.3)

## Solid State Protection System (SSPS) Logic & Testing

Both reactor trip and engineered safety features actuation functions are performed by the Solid State Protection System; non-protective control-type functions are also provided, several of which can be classified as equipment protection. <span class="hi">The two redundant reactor trip logic channels (trains) are physically separated and electrically isolated from one another</span>, and the Reactor Protection System is comprised of identifiable channels that are physically, electrically, and functionally separated and isolated. (UFSAR §7.2.2.2)

The OPERABILITY of the protective and ESF instrumentation systems and interlocks ensures that (1) the associated ESF action or reactor trip is initiated when the monitored parameter exceeds its setpoint, (2) the specified coincidence logic and sufficient redundancy is maintained to permit a channel to be out of service for testing or maintenance while maintaining reliability, and (3) sufficient system functional capability is available from diverse parameters. (UFSAR §7.2.2.3)

### Channel Bypass / Test & Calibration (A1.02, K4.01, K4.08)

The system is designed to permit any one analog channel to be maintained, tested, or calibrated during power operation without a system trip; this does not include such backup trips as manual trip and reactor coolant pump breakers (open trip). During such operation the active parts of the system continue to meet the single-failure criterion, since the channel under test is either tripped or makes use of superimposed test signals that do not negate the process signal. <span class="hi-trap">Two exceptions exist: (1) "one-out-of-two" systems are permitted to violate the single-failure criterion during channel bypass provided acceptable reliability is otherwise demonstrated and the bypass time is short; (2) Containment Spray actuation channels are tested by bypassing or negating the channel under test — acceptable because there are four channels and the two-out-of-four trip logic reduces to two-out-of-three during the test.</span> (UFSAR §7.2.1.7)

Test procedures require the bistable output relays of the channel under test to be placed in the tripped mode prior to the analog channel tests; this transfers the bistable output from the logic circuitry and connects it to a proving lamp. Upon completion, the bistable trip switches must be manually reset to operate — closing the test-panel cover will not transfer the switches from tripped to operate. (UFSAR §7.2.2.3) <span class="hi-exam">Power range channels are tested by superimposing the test signal (maintaining 2/4 logic) or by disconnecting the detector signal (reducing the trip logic to 2/3 during the surveillance)</span>; in the source and intermediate ranges, where the trip logic is one-out-of-two for each range, bypasses are provided for the testing procedure. (UFSAR §7.2.2.3) The Solid State Protection System logic is designed to be capable of testing at power. (UFSAR §7.2.2.3)

### Separation of Control & Protection (K4.09)

The Reactor Protection System uses four separate and independent channels of instrumentation to provide inputs to two separate logic systems, incorporating physical and electrical separation of the four channels from the sensing element to the logic systems; the logic systems' outputs are also separated to preserve the independence of redundant functions. Redundant instrumentation and control cables are routed through separate containment penetrations. (UFSAR §7.2.2.1) <span class="hi-exam">No analog signal required for initiation of reactor protection or ESF actuation is allowed to leave a set of protection channels; where protection signal intelligence is required for control functions, an isolation amplifier (part of the protection set) is used</span> to prevent perturbation of the protection channel input due to any disturbance of the isolated output. (UFSAR §7.2.1.4) The reactor control system uses the highest (auctioneered) of the four isolated T-avg signals, and four power-range nuclear flux channels provide auctioneered isolated outputs for automatic rod control; a channel that fails low is incapable of proper overpower protection, but 2/4 overpower trip logic ensures an overpower trip even with an independent failure in another channel. (UFSAR §7.2.3.2)

### Protection Set Identification (A4.02, K6)

Protection-rack-mounted equipment is identified by color-coded nameplates differentiating the four protection sets: <span class="hi">Protection Set I — Green; Set II — Gray; Set III — Blue; Set IV — Cocoa (all with white lettering)</span>. (UFSAR §7.2.1.5) Indication is provided in the Control Room if any part of the system has been administratively bypassed or taken out of service, and trips are indicated and identified down to the channel level. (UFSAR §7.2.1.9) Interlocks on the doors of each process-control analog rack in all four protection sets actuate a Control Room alarm if any door in any protection set is opened. (UFSAR §7.2.1.10)

## Power Supplies (K2.01, K6.12)

The primary power sources for the Reactor Protection System are described in Chapter 8; the source of electrical power for the measuring elements and the actuation circuits in the engineered safety features instrumentation is also from these buses. (UFSAR §7.2.2.4) The AC power feeds to the Solid State Logic System follow the split-bus concept of WCAP-7488-L. Salem-specific exceptions: (1) the fuse in series to the DC power supplies via a filter is not in series with the filter — the DC supplies are powered directly from the AC vital bus feeds, with the fuse in series with the input relays; (2) in Train A, vital instrument Buses I and IV (instead of I and II) power the DC supplies, while in Train B, Buses II and III (instead of III and IV) power the DC supplies; (3) in Train B, Bus II powers the slave relays (instead of Bus IV). (UFSAR §7.2.2.2)

### Manual Actuation (A4.01)

Means are provided for manual initiation of protective-system action; failure in the automatic system does not prevent manual actuation of protective functions, and manual actuation is designed to require operation of a minimum of equipment. (UFSAR §7.2.1.6) A manual trip signal is initiated by the Control Room operator depressing either one of two pushbuttons; since either button actuates both Train A and Train B logic, <span class="hi-exam">the manual trip is not testable at power</span>. (UFSAR §7.2.2.3) The manual actuating devices are independent of the automatic trip circuitry and are not subject to failures that make the automatic circuitry inoperable; actuating either of the two manual trip switches initiates a reactor trip and a turbine trip. (UFSAR §7.2.2.5)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q41</div>
<span class="hi-exam">Either Reactor Trip Handle (on 2CC2) operates BOTH the UV trip and shunt trip for BOTH the Reactor Trip breakers and the Reactor Trip Bypass breakers</span>. By contrast, an automatic reactor trip actuates the UV trip only, and manually tripping the RTBs from the control console actuates the shunt trip only.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q3</div>
RTBs fail to open on a valid RPS trip signal — operator opens the <span class="hi-exam">RDMG sets power supply breakers from 1CC3</span> to drop rods. Because the trip signal does NOT propagate through the RTB output contacts, the <span class="hi-exam">automatic Main Turbine trip from the RTBs is bypassed</span> — the crew must <span class="hi-exam">manually trip the Main Turbine</span> as a directly performed action. Once the manual turbine trip occurs, the remaining downstream automatic responses still function: main generator output breakers auto-open on turbine trip, 4KV group buses transfer automatically on low voltage, and AFW pumps auto-start on SG lo-lo level (after the turbine trip causes SG shrink). <span class="hi-trap">Trap: the RTB output is the auto turbine trip source — losing the RTB path loses the turbine trip path. Group bus transfer and AFW start are automatic and do NOT need to be directly performed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q12</div>
ATWS scenario with RTB A already open (I&C testing) and RT Bypass Breaker A racked in and closed, RPS fails to provide any output signal: the DIRECT method to trip the reactor during TRIP-1 immediate actions is to <span class="hi-exam">turn either of the Reactor Trip pistol grip handles to TRIP — this de-energizes the UV coil for Reactor Trip Breaker B</span> (RTB A is already open). <span class="hi-trap">Trap A: depressing the OPEN PB for RTB B energizes the SHUNT coil, not the UV coil.</span> <span class="hi-trap">Trap C: the RT Bypass Breakers do NOT have an OPERATE function from the control console.</span> Trap B (open PZR heater bus supply breakers on 2CC3 to deenergize the RDMG sets) is plausible but the reactor would already be tripped by the pistol-grip path before reaching that step.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q38</div>
"LOSS OF TRIPPING CAPABILITY" alarm on an RTB indicates <span class="hi-exam">loss of power to the shunt trip coil</span>. The shunt coil is <span class="hi-exam">energized to trip</span> — without power it cannot initiate a trip. The UV (undervoltage) coil is <span class="hi-exam">de-energized to trip</span> — it remains functional. <span class="hi-trap">The 2CC2 RTB pushbuttons ONLY energize the shunt trip coil — with shunt coil power lost, the 2CC2 pushbuttons cannot trip the RTB.</span> Only reactor trip signals that de-energize the UV trip coil will open the affected RTB.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q1</div>
SSPS Train A de-energizes UV coils for <span class="hi-exam">RTB 'A' and BYB 'B'</span>, energizes shunt coil for <span class="hi-exam">RTB 'A' only</span>. SSPS Train B de-energizes UV coils for <span class="hi-exam">RTB 'B' and BYB 'A'</span>, energizes shunt coil for <span class="hi-exam">RTB 'B' only</span>. <span class="hi-trap">Shunt coils also energize from: Manual SI, Pistol Grip switches, or RTB PB bezels on CC2 — these are separate from SSPS train outputs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q38</div>
When only RTB B opens (RTB A fails closed): the <span class="hi-exam">20-ET (Emergency Trip Fluid Solenoid)</span> trips the turbine by dumping EH fluid directly to the reservoir, closing all turbine steam valves. 20-AST and 20-2AST energize from RTB A — with RTB A failed closed, neither energizes. 2EH61 (Interface Valve) opens only when 20-AST or 20-2AST energizes. <span class="hi-trap">The auto turbine trip via SSPS comes from the reactor trip signal through the 20-ET solenoid on RTB B opening — NOT through the generator lockout relay or 2EH61.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q40</div>
SSPS auctioneered power supply design: 48V and 15V DC power supplies are <span class="hi-exam">redundant within each SSPS train</span>. Loss of one 48 VDC power supply to Train B <span class="hi-exam">has no adverse effect</span> on SSPS Train B function — all components will still automatically actuate when required. <span class="hi-trap">Only loss of BOTH 48V power supplies (or loss of 115 VAC to the slave relays) would prevent SSPS train actuation. A single power supply loss only eliminates redundancy.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 IP-j</div>
Control Room Evacuation (Unit 1) — locally open reactor trip breakers and control charging flow per S1.OP-AB.CR-0001 Attachment 5: proceed to <span class="hi-exam">Rod Drive MG Set Control Panel (460V Vital Bus Room, El 84)</span> and open <span class="hi-exam">Reactor Trip Breaker A and Reactor Trip Breaker B</span> (Bypass Trip Breakers typically racked out/N/A). Trip <span class="hi-exam">#13 Charging Pump breaker (1AX1AX7X)</span> at 1A 460V MCC. Open <span class="hi-exam">1CV175 Rapid Borate Stop Valve breaker (1CY2AX41)</span> at 1C West 230V Control Center. At Panel 216-1 (Charging Valve Alley): record charging flow from <span class="hi-exam">1FI-128A</span>, place E/P Bypass to Manual, and control <span class="hi-exam">1CV55 (fail-open, air-to-close)</span> — lower air pressure (counterclockwise) to OPEN valve and RAISE flow.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-j</div>
Control Room Evacuation (Unit 1) — locally open reactor trip breakers per S1.OP-AB.CR-0001 Attachment 5: proceed to <span class="hi-exam">Rod Drive MG Set Control Panel (460V Vital Bus Room - El 84 ft.)</span> and open all four breakers — <span class="hi-exam">Reactor Trip Breaker A, Reactor Trip Breaker B, Reactor Trip Bypass Breaker A, Reactor Trip Bypass Breaker B</span>. Also trip <span class="hi-exam">#13 Charging Pump breaker (1AX1AX7X)</span> and open <span class="hi-exam">1CV175 Rapid Borate Stop Valve breaker (1CY2AX4I)</span>.
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Trip setpoints, response times, channel operability
- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.1]]** — Reactor Trip System Instrumentation
- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.2]]** — ESF Actuation System Instrumentation

## Connections

- Related systems: [[Excore NIs]], [[Control Rod Drive]], [[Radiation Monitoring]], [[Incores]], [[AMSAC]], [[RCPs]], [[ECCS]]
- Related concepts: [[Rx Vessel & Internals]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[AB.ROD-0003 — Continuous Rod Motion]], [[S1.OP-SO.RCS-0001 — Rod Control System Operation]], [[AB.CR-0001 — Control Room Evacuation]], [[AB.RC-0001 — Reactor Coolant System Leak]], [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]]
- Related exam questions: [[2014 Q2]], [[2014 Q10]], [[2014 Q11]], [[2014 Q12]], [[2014 Q41]], [[2014 Q42]], [[2014 Q44]], [[2014 Q48]], [[2014 Q51]], [[2012 Q4]], [[2012 Q8]], [[2012 Q41]], [[2012 Q42]], [[2012 Q81]], [[2012 Q87]]
- Related JPMs: [[2018 JPM IP-j]], [[2023 JPM Sim-a]], [[2023 JPM Sim-g]], [[2023 JPM IP-j]], [[2022 JPM IP-j]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2018 Scenario 1]], [[2018 Scenario 2]]
- Related exams: [[2014 NRC Written Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2015 NRC Written Exam]], [[2012 NRC Written Exam]]
  - [[2015 Q27]] — LOCA containment-isolation actuation order: Phase A / FW Iso / Cont Vent Iso on SI; MSLI at 15 psig is the only new action between 12 and 18 psig
  - [[2015 Q41]] — Reactor Trip Handles on 2CC2 operate BOTH UV and shunt trips for BOTH RTBs and RTBBs
  - [[2015 Q42]] — 2B Vital Instrument Bus deenergized: SSPS Train B slave relays would not actuate on SI (Train A 45VDC fed from A+D)
  - [[2015 Q43]] — 2/3 4KV vital-bus UV then SI: SEC Mode II Blackout then SEC Mode III safeguards sequencing
  - [[2015 Q45]] — CS pump start: after SEC reset (LOSC-2 safeguards reset) CS pumps will NOT respond to Hi-Hi until SEC re-actuated
  - [[2015 Q50]] — second 11 SG NR level channel fails to 30%: 11BF19/11BF40 (only) swap to manual, overfeed during downpower
  - [[2015 Q52]] — P-14 (Feedwater Isolation) has no seal-in; clears when SG level drops below setpoint
  - [[2015 Q54]] — MDAFW pumps auto-start on both-SGFPs-tripped (not TDAFW); AFW start NR level channel logic
  - [[2015 Q89]] — IRNI channel oscillating at power; P-10 interlock prevents Source Range NIs energizing >10% power
  - [[2016 Q3]] — RTBs fail to open / RDMG breakers manually opened from 1CC3 / manual turbine trip required
  - [[2016 Q12]] — ATWS with RPS output failure / pistol grip de-energizes UV coil for RTB B (direct trip path)
  - [[2016 Q36]] — 2PS1 spray valve fails open at 4% / Low PZR Pressure Rx trip blocked below P-10 / SI on Low PZR Pressure is FIRST protective action
  - [[2016 Q38]] — Block Power Range A and B pushbuttons at 12% blocks the 25% PR low setpoint Rx trip / Reset Source Range pushbuttons prevented by P-10 block
  - [[2018 Q1]] — RCP shaft shear at 25% power: below P-8, single-loop low flow trip blocked
  - [[2018 Q10]] — PZR Pressure Channel fails low: 2/4 becomes 1/3 coincidence; PT-1648 is RSP only
  - [[2018 Q49]] — TRIP-1 immediate actions when RTBs fail: Trip Switches → Bezels → MG set breakers (E 6D, G 6D) → Turbine Trip
  - [[2019 Q30]] — PR NI tripped bistable: 2/4 becomes 1/3 coincidence (not 2/3)
  - [[2020 Q1]] — 2RP4 turbine stop valve status lights flashing = SSPS train disagreement
  - [[2020 Q7]] — PORV failed open: manual trip at 2000 psig to prevent auto trip on OT Delta-T (trips at ~1950 psig) / low PZR pressure trip at 1865 psig
  - [[2020 Q37]] — OT Delta-T inputs: Tavg, PZR Pressure, Delta-I / OP Delta-T has no pressure or delta flux input
  - [[2020 Q38]] — Loss of Tripping Capability alarm = loss of shunt coil power / UV coil still functional
  - [[2020 Q39]] — Containment High Pressure SI (2/3, 4 psig) cannot be blocked / Low PZR Pressure SI blocked via P-11
  - [[2020 Q59]] — Phase B/Spray Actuation generates CVI (VC1, 4, 5, 6); Phase A does NOT
  - [[2020 Q88]] — CS Hi-Hi bistables energized to actuate; loss of VIB → 2/4 becomes 2/3; TS requires BYPASS not trip
  - [[2023 Q1]] — Low RC flow 2/3 coincidence / P-7 vs P-8 permissive logic
  - [[2023 Q5]] — OT Delta-T pressure input / OP Delta-T has no pressure input
  - [[2023 Q21 — Containment Spray Logic / Channel Removed from Service|2023 Q21]] — Containment spray 2/4 logic reduces to 2/3 with channel bypassed
  - [[2023 Q34 — MPC Fails Low / PZR Pressure Response|2023 Q34]] — MPC fails low / PORVs interlock from PZR pressure not MPC
  - [[2023 Q35 — Reactor Trip Logic at 7% Power / Which Trip Active|2023 Q35]] — PZR pressure high trip active at all power levels (no permissive)
  - [[2023 Q36 — RCP Underfrequency Logic / 1/2 Taken Twice|2023 Q36]] — RCP underfrequency 1/2 taken twice logic / individual breakers trip on UV not UF
  - [[2023 Q53 — Containment Vacuum Relief Isolation Signals|2023 Q53]] — Vacuum relief isolates on SI or CVI, not Phase A
  - [[2023 Q56]] — Rod Position Indication / Group Demand Step Counter / Plant Computer Group 1 only
  - [[2023 Q65]] — SSPS train disagreement / SI & FW ISOL lamp flashing / SI RESET green light
  - [[2023 Q80]] — ATWS FRSM-1 turbine trip verification via stop valve bi-stables on 2RP4
  - [[2023 Q92]] — PZR pressure channel failure / spurious trip+SI / RAL 11.3.2 reportability
  - [[2022 Q1]] — SSPS Train A/B UV coil and shunt coil assignments to RTBs/BYBs
  - [[2022 Q3]] — Phase A (ØA) safeguards actuation indication on 2CC1/2RP4
  - [[2022 Q38]] — RTB B opens / RTB A fails closed / 20-ET trips turbine
  - [[2022 Q39]] — Containment pressure channel logic / SI vs Phase B coincidence
  - [[2022 Q40]] — SSPS auctioneered 48VDC power supply / single loss no impact
  - [[2022 Q63]] — Steam dump P-12 (Lo-Lo Tavg) / Bypass Tavg requires both Train A AND B
  - [[2022 Q85]] — CFST Thermal Shock RED path priority over PURPLE SM and YELLOW HS
  - [[2022 Q91]] — TS 3.4.10.3 POPS / Mode 5 to Mode 4 entry prohibited with inoperable LTOP
  - [[2019 Q11]] — Containment Pressure channel loss: SI/Rx Trip 2/3→1/2 (deenergize to actuate) vs CS 2/4→2/3 (energize to actuate)
  - [[2019 Q49]] — EOP-TRIP-1 Step 1 manual trip sequence: Pistol Grips FIRST, then Bezels, then open E 6D and G 6D breakers
  - [[2019 Q50]] — OT Delta-T variable setpoint lowers as RCS pressure lowers (K3 pressure input); OP Delta-T varies with AFD not pressure
  - [[2018 Q11]] — RCP Undervoltage trip: 4KV Group Busses H and G at <70% normal voltage / 1/2 taken twice / interlocked with P-7
  - [[2016 Q44]] — CS actuation relays have retentive memory; reset valid above 15 psig setpoint; CS pumps/valves do NOT reposition on reset
  - [[2016 Q51]] — Trip-of-both-SGFPs MDAFW auto-start is INHIBITED when SGFP trip is caused by FW Isolation
  - [[2016 Q52]] — Feedwater Interlock (auctioneered hi Tave &lt;554°F + Rx trip) prevents over-cooling on uncomplicated Rx trip
  - [[2016 Q65]] — SS94 (SG B/D Sample Valves) cannot be reopened until Phase A isolation is RESET
  - [[2016 Q77]] — Mode 3 with rod control de-energized (3/4 RTB+RTBBs open, even with RDMG operating + 1 RTB shut) → LCO 3.4.1.2 only requires 2 loops operable; single RCP trip = no action
  - [[2016 Q78]] — ATWS at 4% Mode 2: Rx trip NOT confirmed by power <5% alone; FRP (FRSM-1) applicable in Modes 1-3
