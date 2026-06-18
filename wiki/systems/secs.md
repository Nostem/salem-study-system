---
title: SECs
category: systems
status: draft
aliases:
  - safeguards equipment controllers
  - safeguards equipment control
---

# SECs

## Function & Design Basis

Safeguards Equipment Controllers (SECs) automatically initiate and sequence safeguards loads onto the vital buses following a Safety Injection signal, a blackout (loss of offsite power), or both. SECs ensure the emergency diesel generators are not overloaded during accident response by sequencing loads on in a prescribed order with time delays. The UFSAR describes this function under "Engineered Safety Features Control" — the equipment required to keep the plant in a safe condition during safety injection, blackout, or both can be powered by three standby AC power systems per unit, and each unit has a separate and independent electrical system to provide power for Engineered Safeguards Systems (UFSAR §7.3.1.1.10).

Each diesel generator is provided with an independent loading Control System which initiates the startup and/or loading of the diesel generators during four plant conditions: (1) safety injection only; (2) loss of all outside power (blackout); (3) safety injection coincident with loss of all outside power; and (4) safety injection coincident with undervoltage on the one 4 kV vital bus (UFSAR §7.3.1.1.10). The safeguards equipment required during an accident and blackout is automatically sequenced to start by the Safeguards Equipment Control (SEC) System (UFSAR §7.3.1.1.10.3).

The Control System design meets the following criteria for all automatic startup/loading modes (UFSAR §7.3.1.1.10):

1. <span class="hi-exam">Each vital bus control is independent of the other two.</span>
2. <span class="hi-exam">Manual control of equipment is locked out until the automatic load sequencing is complete.</span>
3. <span class="hi-exam">Safeguard actuation signals cannot be interrupted by any automatic device.</span>
4. Manual initiation of the loading sequence is available to the operator.
5. Off-normal diesel conditions are alarmed in the Control Room.
6. <span class="hi-exam">Safety injection conditions take precedence over all other operating modes.</span>
7. If a diesel is operating in TEST mode at the occurrence of a blackout or safety injection, the <span class="hi-exam">diesel output breaker is automatically tripped open</span>, then the diesel is reloaded according to prevailing conditions.
8. <span class="hi-exam">No sequential loading can occur until the diesel generator ACB is closed onto the bus.</span>
9. Inadvertent tripping of the diesel generator output breaker is precluded by locking out the shutdown relay when a safeguard initiation signal is present.

## Key Components

- **Safeguards Equipment Controllers (SECs):** one independent controller per 4 kV vital bus (A, B, C), each powered from its respective Vital Instrument Bus (VIB) and controlling the equipment powered from the respective 4 kV and 460 V buses (see Exam — 2016 Q39). Each vital bus control is independent of the other two (UFSAR §7.3.1.1.10).
- **Emergency diesel generators:** three standby AC power systems per unit; each diesel has an independent loading Control System (UFSAR §7.3.1.1.10) (see Related systems below).
- **Undervoltage relays:** a 70% undervoltage signal from each vital bus is combined in a two-out-of-three logic matrix per bus to develop the blackout loading signal (UFSAR §7.3.1.1.10.2). The TS loss-of-voltage trip setpoint is ≥<span class="val-trip">65%</span> of bus voltage (Allowable Value ≥70%) (TS Table 3.3-4, Amendment No. 310).
- **Degraded-voltage relays:** the safeguards controllers also receive 95.1% (94.6% by Technical Specifications — the difference is relay calibration range) undervoltage signals from their respective vital buses through a <span class="hi-exam">13-second time delay relay</span> in a two-out-of-three logic (UFSAR §7.3.1.1.10.5). TS Sustained Degraded Voltage setpoint ≥<span class="val-trip">94%</span> of bus voltage for ≤15 sec (Allowable Value ≥94.6% for <13 sec) (TS Table 3.3-4, Amendment No. 310).
- **Motor and valve control:** for starting pump and fan motors the control relays energize the closing coil on the breaker or motor starter; when circuit breakers are used the close/trip coils are supplied from a 125 V DC battery bus (UFSAR §7.3.2.2).
- **Manual control interface:** manual control of ESF equipment from the main control console uses a 28 V DC logic interface system, powered by two 28 V batteries; all automatic operation of the ESF equipment requires no action in the 28 V circuitry (UFSAR §7.3.2.3).

## Operation

The four operating modes below are the UFSAR Engineered Safety Features Control modes (UFSAR §7.3.1.1.10.1 through §7.3.1.1.10.5). The wiki's existing exam/operating callouts use SEC "Mode" numbering (Mode I/1 = SI only, Mode II/2 = blackout only, Mode III/3 = SI + blackout, Mode II* = single bus degraded UV); these map onto the UFSAR-described modes.

### Mode 1 — Safety Injection Only

A safety injection signal initiates: (1) start the diesel generator units; (2) lock out manual control of equipment circuit breakers until the loads are connected; (3) connect all required accident loads (UFSAR §7.3.1.1.10.1). Because outside power is available in this mode, equipment not affected by the accident remains in service and required safeguards equipment is loaded immediately — except for the fan cooler units, which are started for low-speed operation as soon as they have coasted down from normal high-speed operation (<span class="hi">approximately 15 to 20 seconds</span>) (UFSAR §7.3.1.1.10.1). The diesel generators are started so as to be available if subsequently required, but are <span class="hi-exam">not automatically connected to the vital buses</span>; the operator may shut down the diesels once operation of the required equipment has been verified (UFSAR §7.3.1.1.10.1).

### Mode 2 — Blackout Only

A 70% undervoltage signal from each vital bus is combined in a two-out-of-three logic matrix per bus to develop a blackout loading signal for that bus. The blackout signal and associated Control System then, on each bus: (1) trip all 4160 V and selected 460 V vital bus breakers; (2) start the diesel generator; (3) lock out manual control of bus loads until diesel generator loading is complete; (4) connect the diesel generator to its bus; and (5) sequence the required blackout loads, provided an accident has not occurred and the diesel generator is ready to accept load (UFSAR §7.3.1.1.10.2). Manual control of individual breakers is prevented until automatic loading completes; after a time delay the operator can manually reset the loading sequence signal and restore manual control (UFSAR §7.3.1.1.10.2).

### Mode 3 — Safety Injection Plus Blackout

This mode differs from safety injection only in that circuit breakers of safety equipment cannot be closed until the diesel is ready to accept loads; these breakers are then closed sequentially. The logic recognizes the mode by the coincidence of safety injection and blackout signals, which trips selected 460 V and all 4 kV vital bus breakers (UFSAR §7.3.1.1.10.3). Manual control of individual loads is prevented by a time delay until diesel generator loading is complete, at which time the loading sequence control can be reset and manual control restored (UFSAR §7.3.1.1.10.3).

Starting of the containment spray pumps requires a high-high containment pressure signal in addition to the SEC actuation signal. The CS pumps normally start approximately 20 seconds following an accident; if the pumps do not start at the required sequence time, the SEC actuation signal is delayed until the end of the loading sequence to prevent the spray pumps from starting when other equipment is required to start (UFSAR §7.3.1.1.10.3).

### Mode 4 — Safety Injection Plus One 4 kV Vital Bus Undervoltage

The bus undervoltage signal is derived from the same group of relays used for the blackout signal logic matrices. If an accident occurs in coincidence with a single bus undervoltage condition, the controller: (1) starts the diesel on the affected bus; (2) trips all vital bus equipment breakers; (3) sequences the accident loads when the diesel is ready for loading; and (4) locks out manual control of breakers on the affected bus until diesel generator loading is complete (UFSAR §7.3.1.1.10.4).

### Sustained Degraded Vital Bus Voltage (Degraded Grid)

On a sustained degraded-voltage condition the affected vital bus is separated from the offsite source and loaded onto its associated emergency diesel generator; the <span class="hi-exam">loading sequence is identical to that of the blackout sequence</span> (UFSAR §7.3.1.1.10.5). See **Mode II\*** callouts below.

**Exam & operating coverage:**

### Load Sequencing and Component Behavior

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q45</div>
The SEC sequences Containment Spray pump starts: if the SSPS Containment Hi-Hi signal is absent when the SEC first tries to start the CS pumps, the SEC contact re-opens; after the SEC completes loading, the CS pump start contact re-closes. <span class="hi-trap">Once the SEC is reset, the CS pumps will NOT respond to a Hi-Hi containment pressure until the SEC is again actuated.</span> See [[Containment Spray]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q69</div>
On a SEC initiation (SI), an AUTO-selected SW pump on a deenergized vital bus <span class="hi-trap">will NOT start — it is locked out by the SEC initiation and has no power</span>. See [[Service Water]], [[4KV]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q19</div>
On a LOOP with NO SI signal, the SECs <span class="hi-exam">strip the 4KV vital bus breakers BEFORE sequencing on BLACKOUT loads</span>. Both SI pumps would only be loaded onto the buses if there were an <span class="hi-exam">accident signal coupled with the Blackout signal</span> (SEC Mode III). With LOOP only, blackout loading runs charging pumps but neither SI pump starts — including any SI pump that was running for IST prior to the LOOP (it strips with the bus). Salem Unit 1 mapping: <span class="hi-exam">11/12 SI pumps are powered from 1A/1C 4KV Vital Buses</span> (not 1B).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q45</div>
A SEC <span class="hi-exam">cannot start any loads until its bus has power</span>. After a LBLOCA + LOOP with the 2C 4KV vital bus locked out on bus differential (de-energized), resetting the 2C SEC restores nothing — so it is NOT the first action to restore the minimum CFCU complement. See [[Containment Spray]], [[CFCUs]].
</div>

### SEC Reset Procedures

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q18</div>
Per EOP-LOPA-1: prior to energizing a deenergized 4KV Vital bus with an EDG, the crew must <span class="hi-exam">deenergize ALL SECs and depress the Stop PBs for SEC actuated components</span>. The Bases give two reasons: <span class="hi-exam">prevent overloading the bus</span> when power is restored, and <span class="hi-exam">prevent SI-actuated valve realignment</span> that would occur if an SI signal is sensed after power restoration.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q52</div>
After SEC and SI reset during EOP-LOCA-3, a subsequent blackout on a 4KV vital bus: <span class="hi-exam">SEC performs blackout loading ONLY — ECCS pumps and safeguards equipment are NOT automatically started</span>. Must be <span class="hi-exam">manually operated</span> because blackout loading starts different equipment than safeguards loading. Also: after resetting all SECs, the <span class="hi-exam">230V control centers must be MANUALLY reset</span> by the crew (20-minute auto-removal notwithstanding). <span class="hi-trap">Trap: LBLOCA is in progress but SI is reset — the SEC has no SI signal, so it performs blackout loading (Mode 2), not SI + blackout loading (Mode III).</span>
</div>

### SEC Failure Recovery

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q43</div>
SEC vs CS valves: <span class="hi-exam">the SEC controller operates the CS pumps at 2 different points in the sequence UNTIL the SEC is reset. The SEC ONLY controls the CS pumps, not the CS valves.</span> CS valves realign on the Hi-Hi containment pressure signal whenever it is received, but <span class="hi-exam">once the SEC is reset, it will NOT start the CS pumps</span> on a subsequent Hi-Hi signal — sequencer is no longer active. CS pumps must be manually started after SEC reset.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
On the false-SI reactor trip the <span class="hi-exam">2C 4KV vital bus de-energizes on UV and the SEC loads the 2C bus onto its EDG</span>. The <span class="hi-exam">22 charging pump and both RHR pumps fail to start on the SEC</span>. The crew <span class="hi-exam">blocks all SECs on 2RP1 and resets emergency loading</span> so the affected safeguards equipment can be manually started during [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
On the LOOP, 2A and 2B SECs load in <span class="hi-exam">Mode III (SI plus Blackout)</span> but the <span class="hi-exam">2C SEC fails to initiate</span>, leaving the 2C vital bus de-energized. Because a failed SEC sends no breaker trip signals, the crew must open the 2C-bus equipment breakers before shutting the 2C EDG output breaker (otherwise previously-running C-bus loads restart and can stall the EDG). The crew also blocks/resets the affected SEC to manually start the charging pump for high-head ECCS injection (CT#2). See [[2014 Scenario 3]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
During the LBLOCA, <span class="hi-exam">21 and 22 RHR pumps fail to start on the SEC (Sequencer) signal</span>. Crew recovery (CT#1): RO blocks <span class="hi-exam">2A and 2B SECs</span>, PO resets 2A and 2B SECs, RO manually starts 21 and 22 RHR pumps. Later the <span class="hi-exam">2C 4KV vital bus experiences UV and its EOG loads in Blackout Mode</span>; the crew performs Table B actions for the 2C SEC (verify loading complete, reset 2C SEC, start safeguards loads).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #1</div>
After a manual reactor trip and SI for SBLOCA, <span class="hi-exam">SEC loading does not complete on 2A and 2B vital buses</span> — 21 and 22 AFW pumps fail to auto-start (per SEC sequencer). Crew recovery: <span class="hi-exam">block 2A and 2B SECs, then attempt reset</span>. <span class="hi-trap">2A SEC will not reset</span> — CRS dispatches operator to <span class="hi-exam">deenergize 2A SEC</span>. Once 2A SEC is deenergized, RO can manually start 22 AFW pump (and 21 AFW pump), satisfying CT#1 (establish at least 22E4 lbm/hr AFW flow before transition to FRHS-1). 2C SEC is later reset normally during EOP-LOCA-1.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #3</div>
After a containment-pressure hi-hi (Phase B / Spray) signal during a 21 SG steam leak in containment, <span class="hi-exam">both Containment Spray pumps fail to auto-start on the SEC</span> (RP318L1 — 21 CS pump fail-to-start on SEC; RP318L2 — 22 CS pump fail-to-start on SEC). Crew recovery for <span class="hi-exam">CT#1 (CT-3)</span>: RO blocks <span class="hi-exam">2A and 2C SECs</span>, PO resets <span class="hi-exam">2A and 2C SECs</span>, then RO manually starts 21 and 22 CS pumps before a containment CSF red-path challenge develops. (CS pumps map to 2A/2C vital buses — see Q39 mapping.)
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
2B SEC fails to actuate on SI signal after LBLOCA. RO reports available equipment on 2B bus failed to start. Recovery: <span class="hi-exam">Block 2B SEC, reset 2B SEC, manually start safeguards loads for 2B bus using EOP-TRIP-1 Table A</span>. Also: 2SW26 NOT in required position — PO manually closes. After SI/Phase A/Phase B reset, <span class="hi-exam">2A and 2C SECs reset normally; 2B SEC is de-energized</span>.
</div>

### Mode II (Blackout Only)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q43</div>
A 2/3 4KV vital-bus undervoltage drives <span class="hi-exam">all 3 4KV vital buses into SEC Mode II (Blackout)</span> — all EDGs start and blackout loads sequence onto all buses. A subsequent SI initiates <span class="hi-exam">SEC Mode III, which opens any running EDG output breaker, strips energized loads, recloses the EDG breaker, then sequences only SAFEGUARDS loads onto all buses</span>. See [[EDGs]], [[4KV]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q61</div>
A single 4KV vital-bus UV causes only that bus to load in blackout sequencing (not all three buses). <span class="hi-trap">A running EDG in parallel does not change this — the loss of one A vital bus does not cause a full MODE II/Blackout on all buses</span>; the primary SW pump loads only on the affected bus. See [[Service Water]], [[4KV]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q19</div>
SEC Mode 2 (blackout only) includes MDAFW pump start: when 2B 4KV Vital Bus de-energizes and 2B SEC actuates in Mode 2, the SEC load sequencer restores power and starts <span class="hi-exam">22 AFW Pump (powered from 2B bus)</span>. <span class="hi-exam">SEC Mode 2 starts AFW pumps on the associated bus</span>. The SG Lo-Lo level MDAFW start (2/3 on 1/4 SGs <14%) was NOT met in this scenario — the SEC Mode 2 start was the sole reason 22 AFW started.
</div>

### Mode I (SI Only) Equipment Sequencing

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q16</div>
SEC Mode 1 (SI only, no LOOP) AFW pump behavior: the SEC sends automatic start signals to <span class="hi-exam">ONLY the motor-driven AFW pumps (21 and 22)</span>. The turbine-driven AFW pump (23) does NOT receive an SEC start signal. <span class="hi-exam">SEC start signals override LOCAL MANUAL controller alignment</span> — even with all AFW pump controllers in LOCAL MANUAL, 21 and 22 AFW pumps will auto-start on SEC Mode 1 actuation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q41</div>
SEC MODE 1 (SI with vital power) CFCU sequencing: <span class="hi-exam">All running CFCUs (max 4 in High Speed by procedure) are stopped, then ALL 5 CFCUs start in LOW speed</span>. Swap to low speed = stop signal, then time delay for motor coastdown, then low-speed start signal. The 5th (non-running) CFCU also receives the low-speed start signal.
</div>

### Mode III (SI + Blackout)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q5</div>
Following a Reactor Trip and Safety Injection coincident with a LOOP, SECs operate in <span class="hi-exam">Mode III (SI + Blackout)</span>. After SEC Mode III loading completes, <span class="hi-exam">CCW Pumps will be STOPPED</span> — CCW pumps are NOT automatically started as part of SEC Mode III loading. <span class="hi-trap">SEC Mode II is Blackout only (no SI signal). Mode II DOES restart CCW pumps. The presence of the SI signal is what makes this Mode III, not Mode II.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q35</div>
SEC Mode III (Blackout + SI) CCW pump behavior: <span class="hi-exam">CCW pumps are stripped and NOT reloaded onto EDGs</span>. Additionally, <span class="hi-exam">any CCW pump selected for AUTO is transferred to Manual</span>. This AUTO-to-Manual transfer occurs in SEC Modes II, III, and VI. <span class="hi-trap">Trap: Mode II (Blackout only) restarts CCW pumps and also forces AUTO to Manual. Mode I (SI only) does NOT force AUTO to Manual — only Modes II, III, and VI do. Mode III does NOT restart CCW pumps but DOES force AUTO to Manual.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q63</div>
On a LOOP + SI with the 2B EDG output breaker failing to close, the loss of B 4KV/460V power means 22 and 24 CFCUs <span class="hi-trap">do NOT start in slow speed (loss of 460V power)</span>, while the SEC-driven MODE 3 logic still <span class="hi-exam">closes 21/22SW122 (CC HX SW inlet) and opens the CFCU 223 SW outlet valves</span>. 2SW26 cannot close (loss of power) and stays OPEN.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q60</div>
LOOP in MODE 4 with 2C EDG paralleled to the grid for surveillance: 2A and 2B 4KV Vital Buses sense Instantaneous UV → <span class="hi-exam">ALL three SECs (2A, 2B, 2C) enter Mode II (Blackout Only)</span> because 2/3 Vital Buses sense Instantaneous UV. SEC Mode II causes the 2C EDG Output Breaker to <span class="hi-exam">OPEN then reclose</span> (even though 2C EDG was already running and loaded). <span class="hi-exam">RHR pumps are NOT automatically loaded in SEC Mode II</span> — they are only sequenced in Mode I (SI only) and Mode III (SI + Blackout). 21 RHR Pump (on 2A bus) will be <span class="hi-exam">stopped</span> after SEC 2A completes Mode II sequencing. <span class="hi-trap">Trap: candidates may assume the running EDG output breaker remains closed, or that RHR pumps restart after SEC sequencing completes.</span>
</div>

### Mode II* (Single Bus Degraded UV) and Post-Reset Modes

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q57</div>
A "B" SEC loading the 2B 4KV bus in <span class="hi-exam">Mode II*</span> auto-starts 22 AFP (Rx power rises) and 22 CC pump (powered off 2B vital), isolates SGBD on the auto AFW pump start, and closes 2SW26 (MTLO cooler cooling water lowers to none → MTLO outlet temp rises). <span class="hi-trap">22SW122 does not close on blackout.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q55</div>
SEC Mode II* (Single Bus Degraded UV) actuation after SI/SEC reset: with all SECs reset and EDGs running unloaded, a single SPT secondary voltage drop to <span class="val-alarm">3600V</span> on one bus is <span class="hi-exam">below the degraded voltage 95% relay setpoint</span> but <span class="hi-exam">not below 70% (2912V)</span> — the fast transfer relay does NOT energize. The sustained degraded voltage relay generates a UV signal, and the affected bus's <span class="hi-exam">SEC strips the 4KV vital bus from offsite power and loads the bus onto its EDG</span> in Mode II* (Single Bus UV / Blackout loading). <span class="hi-trap">Mode III (SI + Blackout) cannot actuate because SI was previously RESET. Bus does NOT remain loaded onto the failing SPT — degraded voltage relay actuation initiates the SEC strip/reload. Bus does NOT fast-transfer to the alternate SPT because 3600V is &gt;70%.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q47</div>
SEC operating modes after SI/SEC reset: with SI and SECs reset, a subsequent degraded voltage condition causes the SEC to actuate in <span class="hi-exam">Mode II* (Single Bus Degraded UV)</span> — NOT Mode III or IV (which require an active SI signal). The SEC strips the affected bus from offsite power and loads it onto its EDG. <span class="hi-trap">Key distinction: Mode I = Blackout (complete loss of voltage, all buses), Mode II* = Single Bus Degraded UV (degraded voltage on one bus, SI reset), Mode III = SI Only, Mode IV = SI + Degraded UV. After SI reset, only Modes I and II* are available.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q37</div>
After SI and SEC reset, a subsequent LOOP causes EDGs to auto-start on blackout signal. <span class="hi-exam">SECs operate in Mode 2 (blackout only) — only charging pumps are auto-started.</span> SI pumps, RHR pumps, and CFCUs must be <span class="hi-exam">manually started</span> since SI/SECs were reset prior to the LOOP. EDG auto-start on loss of voltage is independent of SI status.
</div>

### SEC VIB and Bus Mapping

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q39</div>
SEC vital instrument bus mapping: <span class="hi-exam">A, B, C SECs are powered from their respective Vital Instrument Buses (VIB)</span> and control the equipment powered from the respective 4KV and 460V buses. Salem Unit 2 equipment mapping: <span class="hi-exam">21 Charging Pump = B vital bus (2BVIB27); 21 Safety Injection Pump = A vital bus (2AVIB24); #2 Emergency Air Compressor (ECAC) = C vital bus (2CVIB9)</span>. With SEC BLOCK switches on 2RP1 inoperable, the only way to start equipment that the SEC has not commanded to run is to deenergize the corresponding VIB — which removes the SEC inhibit. To start all three pieces of equipment requires deenergizing <span class="hi-exam">2AVIB24, 2BVIB27, AND 2CVIB9</span>. <span class="hi-trap">Trap: any answer with only two of the three buses misses one piece of equipment. Each pump/compressor is on a different vital bus, so all three VIBs must be deenergized.</span>
</div>

### 1RP4 Panel Relationship

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q23</div>
<span class="hi-exam">1RP4 is the main control room panel that gives visual status of all safety related equipment including the SECs. Since 1RP4 is NOT safety related, the interface between the SECs and 1RP4 is isolated.</span> Loss of ALL AC and DC power to 1RP4 does NOT affect SEC operation. When a Reactor Trip and Safety Injection occurs, the <span class="hi-exam">SECs will automatically actuate in Mode 1</span> regardless of 1RP4 status. <span class="hi-trap">Trap: loss of power to a control bezel (e.g., AFW Control Bezel) prevents automatic and manual operation of components via that bezel. This logic does NOT apply to 1RP4 because it is an indication-only panel — SECs operate independently.</span>
</div>

## Connections

- Related systems: [[4KV]], [[EDGs]], [[ECCS]], [[CCW]], [[DC Power]], [[460/230V AC]], [[RHR]], [[AFW]], [[Containment Spray]]
- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]], [[S1.OP-ST.SJ-0001 — 11 Safety Injection Pump Inservice Testing]]
- Related exam questions: [[2015 Q16]], [[2016 Q18]], [[2016 Q19]], [[2016 Q39]], [[2016 Q41]], [[2016 Q43]], [[2016 Q55]], [[2018 Q22]], [[2018 Q27]], [[2018 Q60]], [[2019 Q5]], [[2019 Q16]], [[2019 Q19]], [[2019 Q21]], [[2019 Q23]], [[2019 Q52]], [[2020 Q35]], [[2020 Q47]], [[2023 Q37]], [[2015 Q43]], [[2015 Q45]], [[2015 Q61]], [[2015 Q69]], [[2014 Q57]], [[2014 Q63]], [[2012 Q11]], [[2012 Q12]], [[2012 Q45]]
- Related scenarios: [[2012 Scenario 1]], [[2012 Scenario 2]], [[2016 Scenario 1 — PZR Level Channel Failure / RCS Leak / SBLOCA / SBLOCA Escalation]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2016 Scenario 3]], [[2018 Scenario 2]], [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]], [[2015 Scenario 1]], [[2015 Scenario 3]], [[2014 Scenario 1]], [[2014 Scenario 3]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
