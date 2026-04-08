---
title: Instrumentation and Controls
category: systems
status: draft
aliases:
  - I&C
  - reactor trip system
  - RTS
  - ESFAS
---

# Instrumentation and Controls

## Function

Instrumentation and Control Systems provide the reactor operator with information and control capability to operate the station safely and efficiently. Safety-related logic circuitry and actuators execute equipment actions without operator action when safety functions are involved. Salem's Protection and ESF Actuation Systems are functionally identical to those in the D.C. Cook Plant. (UFSAR 7.1)

## Reactor Trip Functions

| # | Trip Function | Coincidence | Interlocks | Source |
|---|-------------|------------|------------|--------|
| 1 | Manual | 1/2 | None | UFSAR T7.2-1 |
| 2 | High Neutron Flux (Power Range) | 2/4 | Low setpoint interlocked with P-10 | UFSAR T7.2-1 |
| 3 | Overtemperature Delta-T | 2/4 | None | UFSAR T7.2-1 |
| 4 | Overpower Delta-T | 2/4 | None | UFSAR T7.2-1 |
| 5 | Low Pressurizer Pressure | 2/4 | Interlocked with P-7 | UFSAR T7.2-1 |
| 6 | High Pressurizer Pressure | 2/4 | None | UFSAR T7.2-1 |
| 7 | High Pressurizer Water Level | 2/3 | Interlocked with P-7 | UFSAR T7.2-1 |
| 8 | Low Reactor Coolant Flow | 2/3 per loop | Interlocked with P-7 and P-8 | UFSAR T7.2-1 |
| 9A | RCP Undervoltage | 1/2 taken twice | Interlocked with P-7 | UFSAR T7.2-1 |
| 9B | RCP Underfrequency | 1/2 taken twice | Interlocked with P-7 | UFSAR T7.2-1 |
| 9C | RCP Breaker Open | — | Interlocked with P-7 | UFSAR T7.2-1 |
| 10 | Safety Injection Signal | See SI actuation | — | UFSAR T7.2-1 |
| 11 | Turbine-Generator Trip | 2/3 low auto stop oil pressure | Interlocked with P-9 | UFSAR T7.2-1 |
| 14 | Source Range Neutron Flux | 1/2 | Manual block by P-6, interlocked with P-10 | UFSAR T7.2-1 |
| 15 | High Positive Flux Rate | 2/4 | None | UFSAR T7.2-1 |

Note: Negative Flux Rate Trip has been removed per NRC License Amendment 278-261. (UFSAR T7.2-1)

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

## Key Permissive Interlocks

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| P-4 | Reactor trip | Actuates turbine trip; closes main FW valves on low Tavg | UFSAR T7.2-2 |
| P-6 | 1/2 intermediate range above setpoint | Allows manual block of source range trip | UFSAR T7.2-2 |
| P-7 | 3/4 power range below setpoint (P-10) AND 2/2 turbine pressure below setpoint (P-13) | Blocks trips on: low flow (>1 loop), UV, UF, low PZR pressure, high PZR level | UFSAR T7.2-2 |
| P-8 | 3/4 power range below setpoint | Blocks trip on low flow in a single loop | UFSAR T7.2-2 |
| P-9 | 2/4 power range above setpoint | Prevents/defeats block of turbine trip reactor trip (≥50% rated thermal power) | UFSAR T7.2-2 |
| P-10 | 2/4 power range above setpoint | Allows block of power range low setpoint trip; blocks source range trip | UFSAR T7.2-2 |
| P-11 | 2/3 PZR pressure below setpoint | Allows manual block of SI on low PZR pressure | UFSAR T7.2-2 |
| P-12 | 2/4 Tavg below setpoint | Actuates SI/steamline isolation on high steam flow; blocks steam dump | UFSAR T7.2-2 |
| P-13 | 2/2 turbine steamline inlet pressure below setpoint | Input to P-7 | UFSAR T7.2-2 |
| P-14 | 2/3 Hi-Hi SG level above setpoint (any SG) | Trips all FW pumps, isolates feedwater, trips turbine | UFSAR T7.2-2 |

## Rod Control Interlocks (Rod Stops)

| Designation | Derivation | Function | Source |
|------------|-----------|----------|--------|
| C-1 | 1/2 intermediate range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-2 | 1/4 power range above setpoint | Blocks auto and manual rod withdrawal | UFSAR T7.2-2 |
| C-3 | 2/4 OT Delta-T above setpoint | Blocks rod withdrawal; actuates turbine runback | UFSAR T7.2-2 |
| C-4 | 2/4 OP Delta-T above setpoint | Blocks rod withdrawal; starts turbine runback | UFSAR T7.2-2 |
| C-5 | 1/1 turbine pressure below setpoint | Blocks automatic rod withdrawal | UFSAR T7.2-2 |

Note: Automatic rod withdrawal is disabled at Salem. (UFSAR T7.2-2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q55</div>
<span class="hi-exam">Urgent Failure alarm prevents ALL rod motion in both Manual and Automatic.</span> When Urgent Failure is present, rods are held in position by the <span class="hi-exam">stationary gripper coil energized at a reduced current</span>. The moveable gripper coil is de-energized. Rods cannot be inserted even in Manual. (Ref: S2.OP-AR.ZZ-0012)
</div>

## ESF Actuation Signals

| Signal | Designation | Actuation | Actions | Source |
|--------|-----------|-----------|---------|--------|
| Safety Injection | "S" | Low PZR pressure (2/3), OR Hi containment pressure (2/3), OR Hi steamline differential pressure (2/3), OR Hi steam flow (2/4 lines) AND (Lo-Lo Tavg 2/4 OR Lo steam line pressure 2/4), OR Manual (1/2) | Actuates SI, reactor trip, diesel start, Phase A containment isolation | UFSAR T7.2-1 |
| Phase A Containment Isolation | "T" | Safety Injection signal | Isolates all non-essential process lines | UFSAR T7.2-1 |
| Containment Spray / Phase B Isolation | "P" | 2/4 Hi-Hi containment pressure, OR 2/2 manual | Actuates containment spray, steamline isolation, remaining isolation valves | UFSAR T7.2-1 |
| Main Steamline Isolation | — | Hi steam flow (2/4) AND (Lo-Lo Tavg 2/4 OR Lo steam pressure 2/4), OR Hi-Hi containment pressure (2/4), OR manual (1/1 per line) | Closes MSIVs | UFSAR T7.2-1 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q21</div>
Containment spray / Phase B actuation logic is normally <span class="hi-exam">2/4 Hi-Hi containment pressure</span>. When one channel is properly removed from service (bypassed), the logic reduces to <span class="hi-exam">2/3</span>. The Hi-Hi containment pressure setpoint is <span class="val-trip">15 psig</span>. CS pump discharge valves (CS2s) open on the CS actuation signal specifically, not the Phase B signal.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q53</div>
Containment Vacuum Relief dampers (VC5 and VC6) automatically close on <span class="hi-exam">Safety Injection (SI) signal</span> or <span class="hi-exam">Containment Vent Isolation (CVI) signal</span> — NOT on Phase A alone. CVI is also generated by containment atmosphere radiation monitors (2R11A, 2R12A, 2R12B — any one in alarm). Phase A does not actuate a CVI signal.
</div>

## Auxiliary Feedwater Actuation

| Pump | Actuation Signals | Source |
|------|------------------|--------|
| Turbine-Driven | 2/3 Lo-Lo level in any 2 SGs; OR RCP bus undervoltage (1/2 twice); OR manual | UFSAR T7.2-1 |
| Motor-Driven | 2/3 Lo-Lo level in any SG; OR trip of both main FW pumps; OR safeguards sequence; OR blackout sequence; OR manual | UFSAR T7.2-1 |

## Main Feedwater Isolation

Actuated by: SI signal, OR 2/3 Hi-Hi SG level, OR low auctioneered Tavg AND reactor trip. Closes main FW control valves (fast closure), bypass valves, and inlet stop valves. (UFSAR T7.2-1)

## Overtemperature Delta-T Trip

<span class="hi">Protects the core against DNB</span>. Continuously calculated setpoint per loop (2/4 coincidence):

Delta-T setpoint = K1 - K2*(Tavg) + K3*(P) - f(delta-phi)

Where K1 = setpoint bias, K2 = temperature effect on DNB, K3 = pressure effect on DNB, f(delta-phi) = axial flux difference penalty. Changes in f(delta-phi) can only decrease the setpoint. (UFSAR 7.2.2.5)

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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q80</div>
ATWS turbine trip verification per EOP-FRSM-1 Step 6: confirm turbine trip by checking that <span class="hi-exam">ALL turbine stop valve closed bi-stables are LIT on 2RP4</span>. <span class="hi-trap">2/3 Auto Stop Oil low pressure bi-stables LIT is a demand for a turbine trip, not confirmation that the turbine actually tripped.</span> If turbine trip is not confirmed, dispatch operator to <span class="hi-exam">locally trip the turbine at the front standard</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q92</div>
PZR pressure channel failure and NRC reportability: with Channel I already in tripped condition and Channel III failing LOW, a <span class="hi-exam">reactor trip and SI actuate on low PZR pressure</span> (2/4 coincidence met with 2 channels tripped). Since actual RCS pressure was NOT low, the SI is <span class="hi-exam">NOT valid and NOT reportable</span>. However, the RPS actuation IS valid and reportable under <span class="hi-exam">RAL 11.3.2 as a 4-hour report</span>. <span class="hi-trap">Trap: RAL 11.3.1 (also 4-hour) is for valid ECCS actuations -- the SI here is NOT valid. RAL 11.3.3 (8-hour) does not apply because the event is already captured under RAL 11.3.2.</span>
</div>

## POPS (Pressurizer Overpressure Protection System)

Provides low-temperature overpressure protection by enabling PORVs to open at a reduced setpoint when RCS temperature is low. Prevents exceeding Appendix G pressure-temperature limits during heatup, cooldown, and cold shutdown. (UFSAR 7.6.3)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q34</div>
Master Pressure Controller (MPC) controls PZR spray valves and backup heaters. If MPC fails low (0% output): spray valves close, both backup heater groups energize, and RCS pressure rises. <span class="hi-exam">PORVs are interlocked directly from PZR pressure channels, NOT from MPC.</span> PORVs open independently at <span class="val-trip">2335 psig</span> regardless of MPC status. MPC failure does not prevent PORV actuation.
</div>

## Reactor Trip Breakers

Two reactor trip breakers (52/RTA and 52/RTB) in series, each with a bypass breaker (52/BYA and 52/BYB). Trip signal deenergizes undervoltage coils and actuates shunt trip. <span class="hi-exam">If a bypass breaker is closed for testing and the other train's bypass breaker is also closed, both trip breakers and bypass breakers are automatically tripped by the General Warning Alarm.</span> (UFSAR 7.2.2)

## Nuclear Instrumentation Ranges

- **Source Range:** Two channels, used during shutdown and startup
- **Intermediate Range:** Two channels, used during startup
- **Power Range:** Four channels, used during power operation (provides input to OT Delta-T, OP Delta-T, high flux trips, and rod control)
(UFSAR 7.2.1.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q72</div>
Subcritical rod withdrawal response: after a short rod withdrawal with the reactor still subcritical, <span class="hi-exam">SR counts rapidly increase then stabilize at a new higher value</span> (subcritical multiplication reaches new equilibrium at higher keff). <span class="hi-exam">Startup rate (SUR) rapidly increases then gradually decreases to zero</span>. SUR returns to zero because the reactor is still subcritical — a sustained positive SUR only exists at criticality. <span class="hi-trap">SR counts do NOT return to the previous value (they stabilize higher) and SUR does NOT remain at a positive value (it decays to zero).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q11</div>
Loss of a vital instrument bus (e.g. 1B) causes associated NI channels to <span class="hi-exam">fail low</span> (SR, IR, and PR monitors lose power). The bi-stables trip to SSPS. Above <span class="hi-exam">P-6 (approximately 1E-10 amps / ~1% power)</span> the SR trip is blocked. Below <span class="hi-exam">P-10 (10% power)</span> the IR high flux trip is active with <span class="hi-exam">1/2 coincidence</span>. At 8% power (above P-6, below P-10): SR trip blocked, PR needs 2/4 (only 1 channel affected), but the IR trip actuates on 1/2 IR bi-stables tripped — reactor trips.
</div>

## Process Radiation Monitors

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q49</div>
SGBD radiation monitor (<span class="hi-exam">1R19A</span>) check source test: when the check source pushbutton is pressed, counts rise then <span class="hi-exam">return to the original reading</span> (not held high while button is pressed). During the check source, <span class="hi-exam">interlocks are NOT expected to actuate</span>. (Ref: S1.OP-ST.RM-0001)
</div>

## Tech Spec LCOs

- **[[TS 3/4.3 — Instrumentation]]** — Trip setpoints, response times, channel operability
- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.1]]** — Reactor Trip System Instrumentation
- **[[TS 3/4.3 — Instrumentation|TS 3/4.3.2]]** — ESF Actuation System Instrumentation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q56</div>
Rod Position Indication: <span class="hi-exam">Only Group 1 Demand Steps input into the Plant Computer</span>. Per S2.OP-DL.ZZ-0003, either the Group Demand Counter or Plant Computer will satisfy the TS 3.1.3.2.1 surveillance for Group 1 only.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q57</div>
In-Core Temperature Monitoring (CET) System: reference junction box is located outside containment. Ambient temperature changes are compensated by a <span class="hi-exam">temperature compensator circuit</span> — CET readings are NOT affected by reference junction box temperature changes. In-Core system design upper range is <span class="hi-exam">2300°F</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q62</div>
1R1A (Control Room Area) radiation monitor in alarm: <span class="hi-trap">does NOT automatically actuate CAV in AP Mode</span>. Requires manual actuation — press ACCIDENT PRESSURIZED pushbutton at 1RP2 to actuate BOTH units' CAV into AP Mode. Emergency intake dampers open on the unaffected unit.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q65</div>
SSPS Train Disagreement: <span class="hi-exam">"SI & FW ISOL" Red lamp on 2RP4 FLASHES when one Train of SI has actuated and the other has not</span> (train disagreement). Lamp is LIT solid when both trains actuate. The "SI RESET" Green bezel light on the failed train's Safeguards panel will be LIT (indicating that train did not actuate).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q82</div>
P-6 permissive and IR NIS overlap: when P-6 is LIT, IR channels should indicate approximately <span class="hi-exam">1E-5% power</span>. If an IR channel reads 1E-8% power with P-6 LIT, that channel is not indicating the expected SR/IR overlap and is INOPERABLE. Per TS 3.3.1.1 bases, the <span class="hi-exam">24-hour action time</span> for one inoperable IR channel accounts for the <span class="hi-exam">low probability of failure of the operable IR channel</span> during this period. <span class="hi-trap">Trap: the bases cite low probability of channel failure, NOT low probability of reactivity events.</span>
</div>

## Connections

- Related concepts: [[Nuclear Design]], [[Reactivity and Reactor Control]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]]
- Related exams: [[2023 NRC Written Exam]]
  - [[2023 Q1]] — Low RC flow 2/3 coincidence / P-7 vs P-8 permissive logic
  - [[2023 Q5]] — OT Delta-T pressure input / OP Delta-T has no pressure input
  - [[2023 Q11 — Loss of Vital Instrument Bus / NI Channel Response|2023 Q11]] — Vital instrument bus loss / NI channels fail low / IR trip logic
  - [[2023 Q21 — Containment Spray Logic / Channel Removed from Service|2023 Q21]] — Containment spray 2/4 logic reduces to 2/3 with channel bypassed
  - [[2023 Q34 — MPC Fails Low / PZR Pressure Response|2023 Q34]] — MPC fails low / PORVs interlock from PZR pressure not MPC
  - [[2023 Q35 — Reactor Trip Logic at 7% Power / Which Trip Active|2023 Q35]] — PZR pressure high trip active at all power levels (no permissive)
  - [[2023 Q36 — RCP Underfrequency Logic / 1/2 Taken Twice|2023 Q36]] — RCP underfrequency 1/2 taken twice logic / individual breakers trip on UV not UF
  - [[2023 Q49 — SGBD Radiation Monitor Check Source|2023 Q49]] — SGBD rad monitor check source response and interlocks
  - [[2023 Q53 — Containment Vacuum Relief Isolation Signals|2023 Q53]] — Vacuum relief isolates on SI or CVI, not Phase A
  - [[2023 Q55 — Urgent Failure / Rod Control Gripper Coils|2023 Q55]] — Urgent Failure prevents all rod motion / stationary gripper coil holds rods
  - [[2023 Q56]] — Rod Position Indication / Group Demand Step Counter / Plant Computer Group 1 only
  - [[2023 Q57]] — In-Core Temperature Monitoring CET / reference junction compensation / 2300°F limit
  - [[2023 Q62]] — Area Rad Monitor 1R1A / manual CAV AP mode from 1RP2
  - [[2023 Q65]] — SSPS train disagreement / SI & FW ISOL lamp flashing / SI RESET green light
  - [[2023 Q72]] — Subcritical SR counts stabilize higher / SUR decays to zero after rod withdrawal
  - [[2023 Q80]] — ATWS FRSM-1 turbine trip verification via stop valve bi-stables on 2RP4
  - [[2023 Q82]] — IR NIS P-6 permissive / TS 3.3.1.1 bases for 24-hour action time
  - [[2023 Q92]] — PZR pressure channel failure / spurious trip+SI / RAL 11.3.2 reportability
