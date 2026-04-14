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
<div class="callout-label">Exam — 2019 Q30</div>
PR High Neutron Flux trip with one channel tripped (bistable tripped per S2.OP-SO.RPS-0001): the tripped bistable <span class="hi-exam">remains in the coincidence logic as a permanently satisfied input</span>. Normal coincidence is 2/4. With one channel tripped, coincidence becomes <span class="hi-exam">1 out of 3</span> (the tripped bistable counts as one of the two required trips). <span class="hi-trap">Trap: tripping the bistable does NOT remove the channel from the logic (which would give 2/3). It satisfies one leg permanently, making the effective coincidence 1/3 for the remaining functional channels.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q1</div>
Turbine Stop Valve status lights on 2RP4: <span class="hi-exam">LIT solid = both SSPS trains see the valve at ≤ 85% open</span>. <span class="hi-exam">FLASHING = Trains A and B disagree on valve position</span>. OHA F-36 (TURB TRIP & P-9) confirms either 4/4 Turbine Stop Valves ≤ 85% open OR <span class="hi-exam">2/3 Auto Stop Oil Pressures ≤ <span class="val-trip">50 psig</span></span>. <span class="hi-trap">Trap: 45 psig is the Tech Spec value for auto stop oil, not the actual setpoint (≤ 50 psig). A flashing light does NOT mean a valve is mid-stroke — it means train disagreement.</span>
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
<div class="callout-label">Exam — 2019 Q11</div>
Containment Pressure channel removal from service changes coincidence logic differently for SI/Reactor Trip vs Containment Spray. When Channel II is removed: <span class="hi-exam">SI/Reactor Trip (on Hi CTMT Pressure) goes from 2/3 to 1/2</span>; <span class="hi-exam">Containment Spray (on Hi-Hi CTMT Pressure) goes from 2/4 to 2/3</span>. SI and Reactor Trip bistables are <span class="hi-exam">de-energize to actuate</span> — loss of power to Channel III satisfies the 1/2 logic and actuates SI + Reactor Trip. CS bistables are energize to actuate — loss of power to Channel III does NOT satisfy the 2/3 logic. <span class="hi-trap">Key distinction: SI/Rx Trip uses Channels II, III, IV only (Hi CTMT Pressure) while CS uses all four channels I-IV (Hi-Hi CTMT Pressure). Removing Channel II has different effects on each system's coincidence.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q88</div>
Containment Spray Hi-Hi Containment Pressure bistables are <span class="hi-exam">energized to actuate</span> (opposite of most ESF bistables which are de-energized to trip). Loss of a Vital Instrument Bus leaves the associated bistable de-energized → <span class="hi-exam">logic goes from 2/4 to 2/3</span> (de-energized channel cannot actuate). Per TS 3.3.2.1, the inoperable Hi-Hi Containment Pressure channel is placed in <span class="hi-exam">BYPASS (not tripped)</span> to reduce the possibility of spurious Containment Spray actuation. <span class="hi-trap">Trap: most ESF bistables are de-energized to trip and TS requires placing inoperable channels in TRIPPED condition. Containment Spray bistables are the exception — energized to actuate, so inoperable channels are BYPASSED.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q53</div>
Containment Vacuum Relief dampers (VC5 and VC6) automatically close on <span class="hi-exam">Safety Injection (SI) signal</span> or <span class="hi-exam">Containment Vent Isolation (CVI) signal</span> — NOT on Phase A alone. CVI is also generated by containment atmosphere radiation monitors (2R11A, 2R12A, 2R12B — any one in alarm). Phase A does not actuate a CVI signal.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q59</div>
Manually initiating <span class="hi-exam">Phase B and Spray Actuation</span> from the Control Room Console also generates a Containment Ventilation Isolation (CVI) signal. CVI closes <span class="hi-exam">ALL purge and pressure/vacuum relief valves: VC1, VC4, VC5, and VC6</span> (per Safeguards Action Signals Logic Diagram Sheet 8, drawing 221057). <span class="hi-trap">Phase A does NOT generate CVI. CVI closes all four valves — not just VC1/VC4 (purge isolation).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q39</div>
SI signal blockability during cooldown (IOP-6): <span class="hi-exam">Low PZR Pressure SI and High Steam Flow SI can be blocked</span> when P-11 is active (< <span class="val-alarm">1915 psig</span>). However, <span class="hi-exam">Containment High Pressure SI (<span class="val-trip">4 psig</span>, 2/3 channels) CANNOT be blocked</span> — it remains active in all modes. During a Mode 3 cooldown with SI blocks in place, multiple SG depressurizations inside containment will cause Containment High Pressure SI actuation even though Low PZR Pressure SI is blocked. <span class="hi-trap">Low PZR Pressure SI logic is 2/3 channels (not 2/4) — the 2/4 logic is for the Low PZR Pressure reactor trip, not the SI signal.</span>
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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q37</div>
OT Delta-T operational inputs: <span class="hi-exam">Tavg, Pressurizer Pressure, and Delta-I (axial flux difference)</span>. OT Delta-T is a DNB protection trip. <span class="hi-trap">OP Delta-T does NOT use pressure or delta flux (f2(delta-I) = 0) — only Tavg and rate of change of Tavg. Candidates commonly confuse OP Delta-T inputs with OT Delta-T inputs.</span>
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
<div class="callout-label">Exam — 2022 Q91</div>
TS 3.4.10.3 action "e": <span class="hi-exam">LCO 3.0.4.b is NOT applicable when entering MODE 4 from MODE 5</span> with an inoperable POPS/LTOP channel. Mode change from Mode 5 to Mode 4 <span class="hi-exam">may NOT be performed</span> until the channel is restored to OPERABLE status. Risk assessment per 3.0.4.b <span class="hi-exam">is explicitly prohibited</span> by the TS bases due to increased risk associated with entering Mode 4 with inoperable LTOP.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q85</div>
CFST priority for Thermal Shock (EOP-FRTS-1): a <span class="hi-exam">RED path exists when RCS T-Cold cooldown rate exceeds 100F in the last 60 minutes AND the RCS pressure/temperature point is NOT to the right of Limit A in Figure 4A</span>. With all T-Colds <230F and RCS pressure at 1100 psig (well into the unacceptable region), EOP-FRTS-1 is the highest priority FRP. <span class="hi-exam">RED Thermal Shock takes priority over PURPLE Shutdown Margin (+0.1 DPM SUR) and YELLOW Heat Sink (low SG levels).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q34</div>
Master Pressure Controller (MPC) controls PZR spray valves and backup heaters. If MPC fails low (0% output): spray valves close, both backup heater groups energize, and RCS pressure rises. <span class="hi-exam">PORVs are interlocked directly from PZR pressure channels, NOT from MPC.</span> PORVs open independently at <span class="val-trip">2335 psig</span> regardless of MPC status. MPC failure does not prevent PORV actuation.
</div>

## Reactor Trip Breakers

Two reactor trip breakers (52/RTA and 52/RTB) in series, each with a bypass breaker (52/BYA and 52/BYB). Trip signal deenergizes undervoltage coils and actuates shunt trip. <span class="hi-exam">If a bypass breaker is closed for testing and the other train's bypass breaker is also closed, both trip breakers and bypass breakers are automatically tripped by the General Warning Alarm.</span> (UFSAR 7.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q38</div>
"LOSS OF TRIPPING CAPABILITY" alarm on an RTB indicates <span class="hi-exam">loss of power to the shunt trip coil</span>. The shunt coil is <span class="hi-exam">energized to trip</span> — without power it cannot initiate a trip. The UV (undervoltage) coil is <span class="hi-exam">de-energized to trip</span> — it remains functional. <span class="hi-trap">The 2CC2 RTB pushbuttons ONLY energize the shunt trip coil — with shunt coil power lost, the 2CC2 pushbuttons cannot trip the RTB.</span> Only reactor trip signals that de-energize the UV trip coil will open the affected RTB.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q38</div>
When only RTB B opens (RTB A fails closed): the <span class="hi-exam">20-ET (Emergency Trip Fluid Solenoid)</span> trips the turbine by dumping EH fluid directly to the reservoir, closing all turbine steam valves. 20-AST and 20-2AST energize from RTB A — with RTB A failed closed, neither energizes. 2EH61 (Interface Valve) opens only when 20-AST or 20-2AST energizes. <span class="hi-trap">The auto turbine trip via SSPS comes from the reactor trip signal through the 20-ET solenoid on RTB B opening — NOT through the generator lockout relay or 2EH61.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q39</div>
Containment pressure channel logic: <span class="hi-exam">SI uses channels II, III, IV only (2/3 coincidence)</span>. CS/Phase B uses channels I-IV (2/4 coincidence). With Channel I properly removed from service (tripped): CS/Phase B logic reduces to <span class="hi-exam">2/3</span>; SI logic remains 2/3 (Channel I not an input). If Channel IV then fails high: SI = 1/3 tripped (NOT met). CS/Phase B = 1/3 tripped (NOT met). <span class="hi-exam">Neither SI nor Phase B actuates.</span> <span class="hi-trap">Channel I removed from service removes its input from both SI and CS/Phase B — it does NOT count as a "tripped" channel for actuation purposes.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q40</div>
SSPS auctioneered power supply design: 48V and 15V DC power supplies are <span class="hi-exam">redundant within each SSPS train</span>. Loss of one 48 VDC power supply to Train B <span class="hi-exam">has no adverse effect</span> on SSPS Train B function — all components will still automatically actuate when required. <span class="hi-trap">Only loss of BOTH 48V power supplies (or loss of 115 VAC to the slave relays) would prevent SSPS train actuation. A single power supply loss only eliminates redundancy.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q1</div>
SSPS Train A de-energizes UV coils for <span class="hi-exam">RTB 'A' and BYB 'B'</span>, energizes shunt coil for <span class="hi-exam">RTB 'A' only</span>. SSPS Train B de-energizes UV coils for <span class="hi-exam">RTB 'B' and BYB 'A'</span>, energizes shunt coil for <span class="hi-exam">RTB 'B' only</span>. <span class="hi-trap">Shunt coils also energize from: Manual SI, Pistol Grip switches, or RTB PB bezels on CC2 — these are separate from SSPS train outputs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q3</div>
Phase A (ØA) indication on 2CC1 SAFEGUARDS ACTUATION Bezels: <span class="hi-exam">Red light LIT = train actuated</span>. <span class="hi-exam">Red light OUT = train failed to actuate</span>. On 2RP4, status lights LIT = component repositioned to safeguard position. Per EOP-TRIP-1 step 12, if any safeguards valve not in required position, <span class="hi-exam">place valves in safeguards position manually</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q65</div>
SSPS Train Disagreement: <span class="hi-exam">"SI & FW ISOL" Red lamp on 2RP4 FLASHES when one Train of SI has actuated and the other has not</span> (train disagreement). Lamp is LIT solid when both trains actuate. The "SI RESET" Green bezel light on the failed train's Safeguards panel will be LIT (indicating that train did not actuate).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q56</div>
Rod Position Indication: <span class="hi-exam">Only Group 1 Demand Steps input into the Plant Computer</span>. Per S2.OP-DL.ZZ-0003, either the Group Demand Counter or Plant Computer will satisfy the TS 3.1.3.2.1 surveillance for Group 1 only.
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

- Related systems: [[Excore NIs]], [[Control Rod Drive]], [[Radiation Monitoring]], [[Incores]], [[AMSAC]]
- Related concepts: [[Rx Vessel & Internals]]
- Related procedures: [[AB.NIS-0001 — Nuclear Instrumentation System Malfunction]], [[AB.ROD-0003 — Continuous Rod Motion]], [[S1.OP-SO.RCS-0001 — Rod Control System Operation]], [[AB.CR-0001 — Control Room Evacuation]]
- Related JPMs: [[2023 JPM Sim-a]], [[2023 JPM Sim-g]], [[2023 JPM IP-j]], [[2022 JPM IP-j]]
- Related exams: [[2019 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]]
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
