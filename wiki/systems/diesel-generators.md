---
title: EDGs
category: systems
status: draft
aliases:
  - emergency diesel generators
  - diesel generators
  - Diesel Generators
  - diesel generator
  - EDG
---

# EDGs

## Function & Design Basis

The standby AC power source consists of <span class="hi">three automatically starting diesel generators</span> per unit. Each diesel generator set supplies power to one 4160-V vital bus in the event of a loss of offsite power, so that the three separate and independent units, each with its own fuel supply and day tank, back up the three vital load groups (UFSAR §8.3.1.5). The units are sized to handle the loads necessary for a design-basis LOCA coincident with the loss of all offsite power (UFSAR §8.3.1.5).

The nameplate continuous rating of each diesel generator is <span class="hi-exam"><span class="val-normal">2600 kW</span>, 900 rpm, 4160-V, 3 phase, 60 cycles</span> (UFSAR §8.3.1.5). The diesel generators are designed to be ready to accept load <span class="hi-exam">within <span class="val-normal">13 seconds</span> after receipt of a signal to start</span> (UFSAR §8.3.1.5); they have the capability to attain rated speed and voltage within 13 seconds and to accept load in the sequence shown in Tables 8.3-2 and 8.3-3 (UFSAR §8.3.1.5.2). Safety analyses that credit the diesel generators conservatively assume start and load delay times that bound these values as well as any value specified by Technical Specifications (UFSAR §8.3.1.5.2).

> **Two distinct start milestones (13 s vs <10 s — not a conflict):** the UFSAR design basis (§8.3.1.5, §8.3.1.5.2) is **13 seconds** to attain rated speed/voltage and be ready to accept load — this is the exam-critical figure. The separate "<10 second" value in the exam bank (2020 Q50) refers to the time for the air start motors to **crank and start the engine** (engine fires), a narrower step that precedes reaching rated speed/voltage. Both are correct for different milestones.

**Redundancy / single-failure (GDC-18):** Any two of the diesel generators and their associated vital buses can supply sufficient power for operation of the required safeguards equipment for a design-basis LOCA coincident with a loss of offsite power. Sufficient redundancy is provided in the safety features and their assignment to the vital buses so that failure to energize any one vital bus does not prevent operation of the required minimum safety equipment (UFSAR §8.3.1.5). These design provisions satisfy General Design Criterion 18 (UFSAR §8.3.1.6).

Each diesel generator unit is rated as follows (UFSAR §8.3.1.5.1):

| Time | kW | PF | KVAR | KVA |
|------|----|----|------|-----|
| ½ HR | <span class="val-trip">≤3100</span> | 0.8 | 2325 | 3875 |
| 2 HRS | ≤2860 | 0.8 | 2145 | 3575 |
| 2000 HRS | <span class="val-alarm">≤2750</span> | 0.8 | 2063 | 3438 |
| CONT | <span class="val-normal">≤2600</span> | 0.8 | 1950 | 3250 |

A detailed loading study (Calculation ES-9.002[Q]) confirms that, for the design-basis LOPA, LOCA-coincident-with-LOPA, and LOCA-coincident-with-LOPA-plus-single-failure cases, all expected loads are within the diesel generator ratings above and the auto-connected loads do not exceed the short-time (2-hour) rating defined in Reg Guide 1.9 Rev. 2 and IEEE STD 387-1977 (UFSAR §8.3.1.5.1).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q12</div>
<span class="hi-exam">EDG starting circuits are supplied from 125 VDC power.</span> On loss of the associated 125V DC bus, the EDG will NOT start automatically from SI/SEC signal or remotely from the control room. The SI signal goes to the SEC (powered by vital instrument power), which sends a start signal to the EDG start circuitry (DC powered). Without DC, the start circuit cannot function.
</div>

## Key Components

- **Diesel generator units (3 per unit):** located in the Auxiliary Building at Elevation 100 feet; isolated from each other and from other equipment by fire walls and fire doors (UFSAR §8.3.1.5). Each unit has its own lube-oil jacket cooling, ventilation, and dual air starting system; cooling water is supplied by the Service Water System (UFSAR §8.3.1.5).
- **Fuel oil day tank:** one per diesel generator, <span class="hi-exam"><span class="val-normal">550-gallon</span> capacity</span>, mounted above the unit for gravity feed of fuel at startup (UFSAR §8.3.1.5).
- **Diesel Fuel Oil Storage Tanks (DFOSTs):** two <span class="hi-exam"><span class="val-normal">30000-gallon</span></span> fuel-oil storage tanks located below the diesels at Elevation 84 feet (UFSAR §8.3.1.5).
- **Safeguards Equipment Control (SEC) System:** controls the loading of the diesel generators; control power for the controller in each train (A, B, and C) is supplied from the 115-V AC instrument bus in that train (UFSAR §8.3.1.5.1). Described in the SEC article.

In addition to the emergency diesel generators, a gas turbine generator rated at approximately 40 MW is installed at the site for peaking; it is currently interim abandoned and isolated via procedural controls, and can be paralleled with the normal plant startup or standby power source on the 13-kV ring bus (UFSAR §8.3.1.5).

## Power Supplies

EDG starting circuits and control circuitry are supplied from <span class="hi-exam">125 VDC</span> power; loss of the associated 125 VDC bus disables automatic and remote starting (see Exam — 2023 Q12, above). A DC control-voltage failure is alarmed locally and in the Control Room and includes loss of DC power to the engine control, generator field, unit trip circuit, and local alarm system (UFSAR §8.3.1.5.3).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q48</div>
EDG starting air compressor power supplies: <span class="hi-exam">both 21A and 21B starting air compressors for 2A EDG are powered from the same 2A 230V Vital Bus</span> (NOT from separate buses). Each EDG's two starting air compressors are supplied from its own associated 230V vital bus.
</div>

## Automatic Features & Setpoints

### Auto-Start Signals

The diesel generators are started automatically by (UFSAR §8.3.1.5.2):

- the <span class="hi-exam">safety injection signal</span>, or
- indication of a <span class="hi-exam">loss of all offsite power to the 4160-V vital buses</span>, determined using <span class="hi-exam">2/3 logic</span> (degraded/loss-of-voltage on the vital buses).

The latter (undervoltage) signal initiates the loading sequence for each vital bus, trips the vital-bus in-feed breakers and all motor feeder breakers, closes the diesel generator breaker after the unit comes up to its speed and voltage permissive setpoints, and connects the required safeguard loads in a predetermined sequence. The loading sequence logic for each vital bus is separate and independent of that for the other buses; the loading sequences under emergency conditions are discussed in Section 7 (UFSAR §8.3.1.5.2). Group bus undervoltage protection (68 percent of nominal) automatically trips the reactor coolant and condensate pump 4-kV breakers upon sensing an undervoltage condition on its respective 4-kV group bus (UFSAR §8.3.1.2).

### Load Sequencing (Tables 8.3-2 / 8.3-3)

On an auto-start the Loading Control System automatically energizes the required loads within <span class="hi-exam">35 seconds</span> (UFSAR §8.3.1.5.2). Loads are connected in the sequence and at the time delays (seconds after sequence start) shown in UFSAR Tables 8.3-2 (Loss of Offsite Power **with** Accident) and 8.3-3 (Loss of Offsite Power only). Key Unit 2 sequence times (UFSAR Table 8.3-2, LOOP + Accident):

| Step | Load | 2A sec | 2B sec | 2C sec |
|------|------|--------|--------|--------|
| 0 | 230 V / 460 V Vital Buses | 00 | 00 | 00 |
| 1 | Safety Inj Chrg Pmp | — | 01 | 01 |
| 2 | Safety Injection Pmp | 01 | — | 05 |
| 3 | Residual Heat Removal Pmp | 05 | 05 | — |
| 4 | Containment Spray Pmp | 09-10; 30 | — | 09-10; 26 |
| 5 | Service Water Pump | 13 | 09 | 13 |
| 6 | CFCUs (Low Speed) | 22 | 18 | 22 |
| 7 | Aux Feedwater Pmp | 26 | 22 | — |
| 8 | Control Rm A/C (Chillers) | 30 | 26 | 26 |

(UFSAR Table 8.3-2). The component cooling pumps, containment fan cooler units, reciprocating charging pump, and other non-essential equipment are manually energized only after prior reduction of diesel load by manual shutdown of equipment not required for long-term operation; prior to closing the vital-bus breaker supplying the pressurizer backup heaters, the operator verifies the additional load will not exceed the 2000-hour rating (2750 kW) of the diesel generator (UFSAR Tables 8.3-2, 8.3-3).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q43</div>
On a 2/3 4KV vital-bus UV, all EDGs start and (SEC Mode II) sequence blackout loads. When an SI then occurs, <span class="hi-exam">SEC Mode III opens any running EDG output breaker, strips loads, recloses the EDG breaker, then sequences safeguards loads</span>. See [[SECs]], [[4KV]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q55</div>
EDG loading after SI/SEC reset on a single SPT degradation: with all SECs already reset and EDGs running unloaded, a single bus sustained degraded voltage (e.g., <span class="val-alarm">3600V</span> on 24 SPT, &lt;95% relay setpoint) actuates that bus's SEC in Mode II*. The <span class="hi-exam">EDG output breaker closes onto the stripped 4KV vital bus and the SEC sequences BLACKOUT loads</span> — not Accident loads (Mode III requires an active SI signal, which has been reset).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q22</div>
Following a Reactor Trip + SI coincident with LOOP at Unit 2 with <span class="hi-exam">EDG 2B unable to start</span>: 2A and 2C Vital Buses are powered from EDG 2A and EDG 2C. 15 minutes later, ECCS loads have been sequenced onto the running EDGs. <span class="hi-exam">22 RHR Pump (2B bus) is stopped; 22 SI Pump (2C bus) is running.</span> <span class="hi-trap">Pump number does NOT always match bus letter — 22 RHR is on B bus, 22 SI is on C bus.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q60</div>
EDG paralleled to grid during surveillance (ST.DG-0003) + LOOP: <span class="hi-exam">2C EDG Output Breaker will OPEN then reclose</span>. Even though 2C EDG was already running and loaded, when the LOOP causes 2A and 2B buses to sense Instantaneous UV, all three SECs enter Mode II (Blackout Only). Mode II strips all loads and opens the EDG output breaker before reclosing it and sequencing blackout loads. <span class="hi-trap">Trap: the breaker does NOT remain closed — Mode II requires a full strip-and-reload cycle even for the already-running EDG.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-g</div>
Start and load 2C EDG during LOPA per EOP-LOPA-1: all three EDGs initially unavailable (2A tripped, 2B bus locked out on Bus Differential, 2C was C/T). After 2C EDG restored from maintenance: start EDG, verify <span class="hi-exam">FREQUENCY >= 60 Hz and VOLTS >= 4.15 KV</span>, close output breaker via MIMIC PB sequence (select 2C DG 4KV BKR 2CDD → verify Yellow → close breaker). <span class="hi-exam">2C TROUBLE console alarm will be illuminated</span> due to loss of bus voltage — this is expected and should not delay breaker closure. Must start one SW pump (25 or 26) for EDG cooling and close <span class="hi-exam">23SW20</span> before loading C bus loads.
</div>

### EDG Lube Oil Setpoints

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q79</div>
EDG Engine Lube Oil Header Low Pressure: <span class="hi-exam">alarm at <span class="val-alarm">60 psig</span>, trip at <span class="val-trip">40 psig</span></span>. Per S2.OP-AR.DG-0001, the EDG trips when lube oil header pressure FIRST lowers below 40 psig. <span class="hi-trap">Trap: the alarm actuates at 60 psig — 20 psi above the trip setpoint. The trip is at 40, not 60.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q83</div>
EDG Lube Oil Hi Temp: local alarm at <span class="val-alarm">190 &deg;F</span>, EDG <span class="hi-exam">trips at <span class="val-trip">205 &deg;F</span></span>. Per 2B DG Alarm Response Manual, the EDG tripped when Lube Oil Temperature FIRST exceeded 205 &deg;F. <span class="hi-trap">Trap: 190 &deg;F is the alarm setpoint, not the trip setpoint. The trip occurs at 205 &deg;F.</span>
</div>

### Fuel Oil Day Tank — Transfer Pumps

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q59</div>
DFOST design-basis capacity (Salem FSAR Section 9.5.4): "The <span class="hi-exam">combined volume of both 30000 gallon fuel oil storage tanks</span> contains sufficient fuel oil at the Technical Specification minimum volume to supply <span class="hi-exam">two diesel generators</span>, operating at the most limiting accident mitigation profile for LOCA with loss of offsite power, for approximately <span class="hi-exam">4.5 days</span>." <span class="hi-trap">It is the COMBINED volume of BOTH tanks (not EACH tank) supplying TWO EDGs (not three).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q58</div>
The Diesel Fuel Oil Storage Tanks are <span class="hi-exam">normally isolated from each other on the outlet side (2DF35 X-CONN VALVE closed); each DFOST is supplied by its own transfer pump</span>. With 21 DFOST emptied, the 21 (Regular) transfer pump still gets a start signal at 33" but has no fuel; as Day Tank level lowers further the <span class="hi-exam">22 (Backup) pump starts at 27" and supplies from 22 DFOST</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q57</div>
EDG Fuel Oil Day Tank transfer pump operation: <span class="hi-exam">REGULAR pump start setpoint = 33"</span>, <span class="hi-exam">BACKUP pump start setpoint = 27"</span>. Once started by low level, <span class="hi-exam">both pumps continue to run until the FULL level (43") is reached</span> — the BACKUP does NOT turn off when level recovers above the normal start setpoint (33"). The Backup pump turns off at the same level as the Regular pump. With level recovering through 35" after both started, <span class="hi-exam">both REGULAR and BACKUP transfer pumps are still running</span>. <span class="hi-trap">Trap: candidates assume the Backup secures when normal level is restored — it does not. The exact backup-stop setpoint is not required knowledge, only that it is substantially higher than the Regular start setpoint and equal to the Regular stop level (44").</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q93</div>
A tripped 21 Diesel Fuel Oil Transfer Pump breaker requires entering <span class="hi-exam">TS 3.8.1.1.b.2 (EDG Fuel Oil, Modes 1-4) because BOTH Fuel Oil Transfer pumps are required to be OPERABLE</span>. The controlling Tech Spec bases is the <span class="hi-exam">electric power sources bases — OPERABILITY of the AC electrical power sources ensures sufficient power for the safe shutdown of the plant and for the mitigation and control of accident conditions.</span> <span class="hi-trap">Trap: pairing the correct TS with the LCO 3.0.3 "timely unit shutdown" bases is wrong; and a single tripped CCW pump does NOT make both loops of CCW inoperable, so a TS 3.0.3 / CCW basis is also wrong.</span> See [[TS 3/4.8 — Electrical]].
</div>

## Design Features & Interlocks

### Trip Functions

Following an automatic start (by loss of normal auxiliary power or by an accident signal), the following automatic protective devices are in service during emergency startup and operation of the diesel generator (UFSAR §8.3.1.5.2):

1. Shut down the diesel generator **and** trip the diesel generator breaker due to:
   - Mechanical: <span class="hi-exam">engine overspeed</span>; <span class="hi-exam">lube oil pressure low</span>.
   - Electrical: generator differential current relays.
2. Trip the diesel generator breaker only due to: 4 kV bus differential (electrical).

Following a **manual** start, the protective devices in service are broader (UFSAR §8.3.1.5.2):

1. Shut down the diesel generator and trip its 4-kV circuit breaker due to — Mechanical: engine overspeed, lube oil pressure low, <span class="hi-exam">jacket water temperature high</span>, <span class="hi-exam">lube oil temperature high</span>, engine overcrank; Electrical: generator differential current relays, loss of generator excitation, diesel generator breaker failure protection.
2. Trip the diesel generator breaker only due to — Electrical: <span class="hi-exam">overcurrent relay</span>, <span class="hi-exam">reverse power relay</span>.
3. Prevent the Diesel Generator Circuit Breaker from closing only due to — the <span class="hi-exam">syncrocloser check relay</span>, which provides a permissive to allow the operator to synchronize the diesel generator with its vital bus. The permissive is enabled during a specific closing phase-angle range, slip limit (ΔF limit), and voltage range, and is blocked when out of these ranges and when the breaker control switch at the Diesel Generator Control Panel is intentionally held closed prior to achieving synchronization.

Elimination of trips could cause damage to the diesel generators if a trip condition were to occur (UFSAR §8.3.1.5.2). The bypass of the emergency-start trips (so the DG remains running when needed) is described in the preserved callout below.

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q75</div>
The EDG <span class="hi-exam">FIRE EMERGENCY BYPASS keylock switches remove SEC (Sequencer) control from the EDG</span>. They are directed to be placed in BYPASS only by <span class="hi-exam">AB.CR-0002 (Control Room Evacuation Due to Fire), Attachment 4, pages 15, 19, 22</span> — operated when the control room has been evacuated due to a fire and SEC operation may be aberrant. <span class="hi-trap">AB.FIRE-0001, AB.FIRE-0002, and AB.CR-0001 do NOT contain this step.</span>
</div>

### Starting Air System

Each diesel generator unit has a dual air starting system (UFSAR §8.3.1.5). Air receiver No. 1 and No. 2 low-pressure conditions are alarmed locally (UFSAR §8.3.1.5.3). Sizing and start-attempt counts are detailed in the preserved callouts below.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q58</div>
Salem FSAR section 9.5.6: <span class="hi-exam">"Each receiver is sized to hold sufficient air for three cold diesel starts"</span>. Each EDG has 2 receivers (6 total starts). With one air receiver C/T (1 receiver available = 3 starts) and one starting air compressor C/T plus the operable compressor's power source isolated by LOOP (no recharge available), <span class="hi-exam">after the first start attempt has been used, the minimum number of remaining start attempts is 2</span>. <span class="hi-trap">Trap: 4 or 5 would assume both receivers were available; 3 would forget that one start has already been used by the initial trip.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q50</div>
Each EDG has <span class="hi-exam">4 air start motors total</span>, supplied by <span class="hi-exam">2 starting air receivers</span>. Each receiver supplies <span class="hi-exam">2 air start motors (one train)</span>. Each receiver is capable of <span class="hi-exam">3 cold starts</span>. Two air start motors start the diesel in <span class="hi-exam">&lt; 10 seconds</span>. Just one air start motor can start the diesel within <span class="hi-exam">14 seconds</span>. Rated speed is <span class="hi-exam">900 RPM</span>. With one air receiver isolated, the remaining receiver and its 2 motors <span class="hi-exam">will start the EDG and achieve rated speed in &le; 13 seconds</span>. <span class="hi-trap">Each receiver supplies only 2 of the 4 air start motors — NOT all four. Loss of one receiver does not prevent EDG start.</span>
</div>

### Fire Protection

The diesel generators are located in the Auxiliary Building at Elevation 100 feet, isolated from each other and from other equipment by fire walls and fire doors; a Manual Fire Protection System is installed for the protection of the CO2 diesel generator equipment, with separate detectors in each compartment so that only the area containing the fire is blanketed (UFSAR §8.3.1.5).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q64</div>
EDG room fire protection: each EDG room is protected by a <span class="hi-exam">CO2 fire suppression system</span>. Originally automatic, this system was permanently changed to <span class="hi-exam">MANUAL activation</span> under Salem DCP 80115237. On a fire detected in the EDG room, the operator <span class="hi-exam">exits the EDG room to the vestibule area and manually activates CO2</span>; there is a <span class="hi-exam">13 second delay</span> after activation before the system dumps. <span class="hi-trap">Trap: EDG rooms use CO2, NOT Halon. The 13-second delay is post-activation (allows personnel to clear the area), not pre-automatic discharge.</span>
</div>

## Interconnections & Loads

The Diesel Generator Support Systems are described in the following UFSAR sections (UFSAR §8.3.1.5.4):

- **Fuel Storage and Transfer System** — Section 9.5.4
- **Jacket Water Cooling System** — Section 9.5.5
- **Starting Air System** — Section 9.5.6
- **Lube Oil System** — Section 9.5.7

Cooling water for each diesel generator is supplied by the Service Water System (UFSAR §8.3.1.5). EDG room ventilation maintains the diesel area within its design temperature limit during operation (see the 2019 Q24 callout below). Loss-of-DC-power and DC control-voltage-failure conditions are alarmed locally and in the Control Room (UFSAR §8.3.1.5.3). Fire protection of the EDG compartments is provided by the Manual CO2 system.

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q92</div>
2A 4KV Vital Bus Differential effects on EDG output breaker and station-power infeed: <span class="hi-exam">a Bus Differential signal opens the EDG output breaker AND prevents the vital-bus station-power infeed breakers from closing</span>. With 4 SW Bay isolated (24/25/26 SW pumps unavailable) and 21/23 SW pumps powered from AA/BB/CC vital buses, the 23 SW pump trip plus the 2A 4KV bus de-energization results in <span class="hi-exam">no SW pumps running — total loss of all SW</span>. <span class="hi-trap">22 SW pump cannot auto-start on low SW header pressure because its bus has no power.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q24</div>
During EDG operation, the Diesel Area Ventilation will ensure the EDG Room does not exceed a MAXIMUM of <span class="hi-exam"><span class="val-alarm">120 °F</span></span>. <span class="hi-trap">Trap: 90 °F is a plausible distractor but is NOT the correct limit. The actual ventilation design limit is 120 °F.</span>
</div>

## Effects of Loss / Malfunction

A loss of starting air, fuel oil supply, EDG room ventilation, DC power, or AC distribution can render a diesel generator inoperable or prevent its start; the local and Control Room alarms (DG Trouble common alarm and DG Urgent Trouble single alarm) annunciate the underlying conditions — jacket water temperature high, lube oil temperature high, engine lube oil header pressure low, air receiver pressure low, pre-lube pump failure, generator ground fault, and turbo air receivers low pressure (UFSAR §8.3.1.5.3). The station blackout / loss-of-all-AC scenarios and individual malfunction responses are captured in the preserved callouts below.

**Exam & operating coverage:**

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #1</div>
A large air leak on the 2C EDG starting air supply line lowers Air Start Tank pressure with both air start compressors running (OHA J-20, 2C DG URGENT). The CRS determines <span class="hi-exam">2C EDG is inoperable based on lower-than-required Air Start Tank pressure</span> and enters the appropriate Tech Spec. See [[2014 Scenario 1]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
On the false-SI reactor trip the <span class="hi-exam">2C 4KV vital bus de-energizes on undervoltage and the 2C EDG carries the 2C bus</span> via its SEC. The 2C EDG continues to power the 2C bus through the LBLOCA response, including the transfer to cold leg recirculation in [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
On a LOOP with 2A/2B EDGs running and the <span class="hi-exam">2C SEC failed to initiate</span>, the crew manually starts 2C EDG and shuts its output breaker to energize the 2C vital bus. Because the 2C SEC sent no breaker trip signals, equipment that was running on the 2C bus before the LOOP will restart when the EDG breaker is shut, so the crew <span class="hi-exam">opens the C-bus equipment breakers first to avoid stalling the 2C EDG</span>. CT#1 requires starting at least one SW pump so the running EDGs have cooling. See [[2014 Scenario 3]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
2C EDG C/T for governor oil replacement and fuel rack lube (initial condition, 68 hours remaining in TSAS). Following LOOP: <span class="hi-exam">2A 4KV Vital Bus lost on Bus Differential protection, 2B EDG trips on overspeed (bent fuel rack linkage)</span>. All three 4KV Vital Buses de-energized — station blackout. Crew must identify 2C EDG as the only recovery path, have maintenance return it from C/T, start 2C EDG, close output breaker to energize 2C 4KV Vital Bus <span class="hi-exam">(CT-24)</span>, then immediately start one SW pump for EDG cooling <span class="hi-exam">(CT-25)</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A5</div>
Loss of ALL AC power to Unit 2 — General Emergency classification: <span class="hi-exam">2A EDG tripped on overspeed (bent fuel rack linkage, 5 hrs to repair), 2B 4KV Vital Bus damaged (ground fault), 2C EDG engine failure (piston failure)</span>. Combined with loss of both offsite sources (23 SPT in maintenance, 24 SPT internal fault), this constitutes <span class="hi-exam">EAL SG1.1 — Loss of AC Power at GE level</span>. AC power cannot be restored within the EAL timeframe.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-i</div>
SBO Diesel Control Air Compressor: backup control air source when all ECACs are unavailable during LOOP. Located in SBO Compressor Building (outside RCA, requires L-3 key). Discharge valves <span class="hi-exam">1CA1913, 1CA1886, and 2CA584</span> pressurize Control Air and Aux Building headers.
</div>

## Control-Room Operation

Manual diesel generator control is provided at the local diesel generator control panels and in the Control Room (UFSAR §8.3.1.5.2). Local controls include the diesel generator "START-STOP" selector switch, "EMERGENCY STOP" pushbutton, key-operated "LOCK-OUT" switch, "AUTO-MANUAL" mode selector, breaker "TRIP–CLOSE" selector, generator voltage "RAISE–LOWER" switch, speed "RAISE–LOWER" switch, regulator "MANUAL–AUTO" switch, unit trip relay "RESET", fuel transfer pump "OFF–AUTO–RUN" and "REGULAR–BACKUP" selector switches, starting air compressor "OFF–AUTO–RUN" selector switch, and turbo air compressor "OFF–AUTO–RUN" selector switch. In the Control Room: diesel generator "START-STOP" pushbuttons and "CLOSE–TRIP" pushbuttons (UFSAR §8.3.1.5.2). Local instrumentation to facilitate control includes a generator ammeter, wattmeter, voltmeter, frequency meter, varmeter, field ammeter/voltmeter, synchroscope, synchronizing lights, synchroscope switch, 4-kV bus voltmeter, running-time meter, and RPM meter; Control Room indications are diesel generator voltage, frequency, watts, and amps (UFSAR §8.3.1.5.3).

**Exam & operating coverage:**

### Loading Limits

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q59</div>
With the 2B EDG <span class="hi-exam">paralleled</span> to the 2B 4KV vital bus during a surveillance run, placing the 2B-DF-GCP-1 Diesel Gen Loading Switch in <span class="hi-exam">AUTO (ISOCR)</span> makes the generator attempt to pick up large +/- VAR loading (it is trying to control grid voltage). <span class="hi-trap">There is no SPT-to-EDG control interlock — the EDG will TRIP on either reverse power or output breaker over-current; it does NOT speed up.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q55</div>
EDG load limitations (per the DG surveillance P&amp;L): <span class="hi-exam">2600 KW continuous; 2600–2750 KW for 2000 hours; 2750–2860 KW for 30 minutes; 2860–3100 KW for 2 hours</span>. Operating at 2610 KW (in the 2000-hour band) for 21 more hours exceeds no limit. See [[S2.OP-ST.DG-0003 — 2C Diesel Generator Surveillance Test]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q42</div>
Per S2.OP-ST.DG-0001, to prevent tripping the Diesel Generator Breaker on reverse power, generator load must be IMMEDIATELY raised to greater than a minimum of <span class="hi-exam"><span class="val-alarm">500 KW</span></span> after the breaker is closed. EDG Continuous Load Rating is <span class="hi-exam"><span class="val-normal">2600 KW</span></span>. <span class="hi-trap">Trap: 2750 KW is the 2000-hour rating (2681 KW Local), NOT the Continuous rating. 200 KW is the minimum load when UNLOADING the EDG (to prevent reverse power trip before opening the breaker) — a different value from the 500 KW minimum when LOADING.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q11</div>
EDG loading ratings: <span class="hi-exam">2000 hr rating = <span class="val-alarm">2750 KW</span></span>, 2 hr rating = 2860 KW, 30 min rating = 3100 KW, Continuous rating = 2600 KW. Per S2.OP-SO.PZR-0010, PZR backup heaters add approximately <span class="hi-exam">210 KW</span> to bus load. Before adding PZR heater load, current EDG loading must be adjusted to no greater than <span class="hi-exam">2750 - 210 = 2540 KW</span>. <span class="hi-trap">Trap: candidates confuse the four EDG loading limits. The 2000 hr limit (2750 KW) is the relevant one for sustained post-LOOP operation, not the 30-min (3100 KW), 2-hr (2860 KW), or Continuous (2600 KW) rating.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q50</div>
EDG minimum load after paralleling: <span class="hi-exam">≥500 KW</span> must be loaded immediately after closing the output breaker to prevent <span class="hi-exam">tripping the output breaker on reverse power</span>. Separate concern: gradual loading prevents <span class="hi-exam">excessive accumulation of oil in the exhaust system</span> (exhaust fire risk from sudden high loading after low-load operation). <span class="hi-trap">250 KW is NOT the minimum — it is 500 KW. The reason for minimum load is reverse power trip protection, NOT exhaust fire prevention (which is a separate P&L for gradual loading).</span>
</div>

### Synchronizing and Paralleling

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q48</div>
When the EDG is paralleled to the grid for surveillance testing: <span class="hi-exam">Voltage Control Switch adjusts KVAR (reactive) load</span> — Raise increases KVAR OUT. <span class="hi-exam">Speed Control Switch adjusts KW (real) load.</span> <span class="hi-trap">Common confusion: speed control adjusts frequency/real power, NOT reactive power. Voltage control adjusts reactive power, NOT voltage (when paralleled to the grid, generator voltage is locked to grid voltage).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 IP-j</div>
Same local start &amp; parallel-load evolution per S2.OP-SO.DG-0001(Q) §5.2 + §5.4 (2A EDG). The discriminating action is closing the output breaker 2A-DF-GCP-3 (BCS) only with the synchroscope at <span class="hi-exam">12 o'clock (+zero, −2 minutes)</span> and immediately raising load to <span class="hi-exam">≥ 500 KW with the SPEED CONTROL SWITCH (GS) to prevent a reverse-power trip</span>. Incoming generator must be set slightly fast (synchroscope rotating SLOWLY in the FAST/clockwise direction) and voltage matched 50–100 V above bus (2VM189 vs 2VM190). Critical steps for this JPM: <span class="hi-exam">5.2.4, 5.2.6, 5.2.7, 5.4.4, 5.4.10.A, 5.4.10.B, 5.4.10.F</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 IP-k</div>
<strong>Local start and parallel loading per S2.OP-SO.DG-0001 §5.2 + §5.4.</strong> Pre-start checks: 2DAE4-LT 2 (EDG VOLTAGE) and 2DAE4-LT 3 (EDG SPEED) permissive lights are OFF. With 2A 4KV Vital Bus energized (parallel mode), <span class="hi-exam">2A-DF-GCP-1, 2A DIESEL GEN LOADING SW must be placed in MANUAL (DROOP) before start</span> — annunciator B-9 GENERATOR LOADING IN DROOP MODE confirms. Start with 2A-DF-SS, 2A DG STOP/START SWITCH in START. Set speed to <span class="hi-exam">900 rpm</span> using SPEED CONTROL SWITCH (GS) if not already there. Normal start readings: gen volts <span class="hi-exam">4160 V</span> on all 3 phases, frequency 60 Hz, LO Hdr 80 psig, JW Hdr 45 psig, Air Manifold 0 psig, Stator 187 °F. Synchronize: adjust gen voltage to <span class="hi-exam">50–100 V higher than bus</span> via VOLTAGE CONTROL SWITCH (VCS); place 2A-DF-SYNCH (SS) ON; adjust speed so synchroscope rotates <span class="hi-exam">SLOWLY in the FAST (clockwise) direction</span>; verify SYNC CHK RELAY 25 Upper/Lower L OK and B OK LEDs and ΔF OK LED are ON; verify DG SYNC PERMISSIVE green light ON near 12 o'clock (±~3 minutes). At <span class="hi-exam">12 o'clock (+0/−2 min)</span>: simultaneously close 2A-DF-GCP-3 GENERATOR CIRCUIT BREAKER SWITCH (BCS) and immediately raise load to <span class="hi-exam">≥ 500 KW via SPEED CONTROL SWITCH (GS) to prevent reverse-power trip</span>. Place 2A-DF-SYNCH (SS) to OFF. Critical steps: 5.2.4, 5.2.5, 5.2.6, 5.4.4, 5.4.10.A, 5.4.10.B, 5.4.10.F.
</div>

### Unloading, Swapping, and Load Management

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 IP-i</div>
Unloading a paralleled EDG (2C, S2.OP-SO.DG-0003 Section 5.8): lower real load (KW) with the <span class="hi-exam">SPEED CONTROL SWITCH (GS)</span> and reactive load (KVAR) with the <span class="hi-exam">VOLTAGE CONTROL SWITCH (VCS)</span>, alternately going to LOWER. Place the generator circuit breaker switch to TRIP <span class="hi-exam">as soon as load is reduced to 200 KW</span> (KVAR 50-100 KVAR OUT) — bringing real load &lt;200 KW before opening the breaker avoids motoring/reverse power. Output breaker can be opened at 2CD1AX6D (64' Swgr Rm), the 2CC3 BREAKER OPEN pushbutton, or by placing 2C-DF-GCP-3 (BCS) to TRIP. Stop the diesel via 2C-DF-SS (STOP/START SWITCH) after ≥3 min unloaded, then return 2C-DF-GCP-1 (LOADING SW) to AUTO (ISOCR).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 IP-i</div>
PZR Backup Heater Group transfer to emergency power adds heater load to a vital bus already supplied by the EDG. Initial conditions: <span class="hi-exam">2A EDG carrying 2A Vital Bus loaded to 2400 KW</span>. To stay within EDG/vital bus capacity, only <span class="hi-exam">3 of 14 PZR heater disconnects</span> are placed ON before the emergency feed is energized. Per S2.OP-SO.PZR-0010 P&L: PZR heaters add ~210 KW (full bank); limiting to 3 disconnects keeps the added load proportionally lower so the EDG stays within 2000 hr rating (2750 KW).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-g</div>
<strong>EDG-to-SPT swap during LOPA recovery (EOP-LOPA-1 Step 16):</strong> when off-site power has been restored after a loss of all AC power, S2.OP-SO.DG-0001 §5.8 directs swapping each running EDG-fed vital bus back to a Station Power Transformer source. Steps: confirm 2A EDG is NOT paralleled on 2A 4KV Vital Bus; place redundant equipment in service to support deenergizing 2A Vital Bus (e.g., 22 CCW pump); stop all 2A Vital Bus loads via Attachment 1; <span class="hi-exam">open 2A DIESEL GENERATOR BREAKER by one of three methods (open 2AD1AX6D locally, press 2A BREAKER OPEN PB on 2CC3, or place 2A-DF-GCP-3 to TRIP)</span>; <span class="hi-exam">allow Diesel to run unloaded for ≥ 3 minutes prior to stopping the EDG</span> (cooldown).
</div>

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.1.1 requires 3 DGs OPERABLE in Modes 1–4; TS 3.8.1.2 requires 2 DGs OPERABLE in Modes 5–6
- 1 DG inoperable: 72 hours; demonstrate OPERABILITY of remaining DGs within 24 hours
- 1 DG AND 1 offsite circuit inoperable: 12 hours

**Exam & operating coverage:**

### LCO 3.8.1.1 Requirements and Surveillance

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q92</div>
EDG TS surveillances: SR 4.8.1.2 specifies that certain surveillances are NOT required to maintain EDG operability (to avoid paralleling the EDG with offsite power or de-energizing an ESF bus during the test). <span class="hi-exam">A missed 18-month Hot Restart surveillance does NOT make 2A EDG inoperable; the test must be completed prior to entering Mode 4</span>. See [[TS 3/4.8 — Electrical]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q91</div>
EDG monthly surveillance — applying SR 4.0.2's 25% extension to the 31-day periodicity yields <span class="hi-exam">31 + 7.75 = 38.75 days</span> before the surveillance is required. With the 2A EDG monthly SR last performed 33 days ago, the EDG remains <span class="hi-exam">OPERABLE</span> (the 25% extension has not been exceeded). <span class="hi-trap">SR 4.0.3's 24-hour delay is from time of discovery and is not yet applicable while the SR 4.0.2 extension still covers the periodicity.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q21</div>
<span class="hi-exam">LCO 3.8.1.2 (ELECTRICAL POWER SYSTEMS - SHUTDOWN) requires a minimum of TWO separate and independent diesel generators to be OPERABLE</span> (Modes 5 and 6). <span class="hi-trap">Trap: LCO 3.8.1.1 (Operating) requires THREE — do not confuse the Operating (3) vs Shutdown (2) EDG requirements.</span> If ALL REQUIRED EDGs are inoperable in shutdown, the crew is <span class="hi-exam">required to IMMEDIATELY suspend all operations involving positive reactivity changes</span>. REQUIRED ACTION A has an option to only declare affected required features inoperable, but REQUIRED ACTION B requires immediate suspension of positive reactivity changes.
</div>

### Common Mode Failure Actions

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q89</div>
EDG common mode failure TS 3.8.1.1 actions: when a failure cause (e.g. K1C relay) is identified that could affect operable EDGs with the same components, the SRO must apply <span class="hi-exam">action b.3 (perform operability run on remaining EDGs within 24 hours)</span> AND <span class="hi-exam">action b.4 (restore inoperable EDG within 72 hours)</span>. A common mode failure does NOT automatically make all EDGs inoperable — the remaining EDGs are presumed operable until demonstrated otherwise. <span class="hi-trap">TS 3.0.3 does NOT apply because action "e" exists for two or more diesels inoperable. Do not declare all EDGs inoperable based solely on a common mode concern.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q89</div>
Common mode failure surveillance scheduling: per S2.OP-ST.DG-0001/2/3 P&L 2.1.6, <span class="hi-exam">only one DG per unit may be synchronized to the grid at a time</span> (Reg Guide 1.108, Section C.2.b). Most expeditious method for 5 remaining EDGs: <span class="hi-exam">run one EDG at a time on both units simultaneously</span> (e.g., 1B and 2B at the same time). <span class="hi-trap">Trap: running all EDGs on one unit simultaneously violates the P&L — you cannot run 1B and 1C simultaneously even though it would be faster.</span>
</div>

### EDG Inoperable with Redundant Component

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 SRO-A3</div>
EDG CIT with redundant component failure: 1B EDG CIT for maintenance (TS 3.8.1.1 action b entered, 60 hours remaining). 12 Charging pump trips at 0700 — S1.OP-SO.DG-0005 identifies 12 Charging pump as a <span class="hi-exam">redundant required feature of the 1B EDG</span>. Two LCOs apply: <span class="hi-exam">TS 3.8.1.1 action b.2 (4 hours)</span> for EDG + redundant component inoperable, AND <span class="hi-exam">TS 3.5.2.a action a (72 hours)</span> for inoperable ECCS subsystem. At 1100 hours (4 hours elapsed), neither restored — shutdown per TS 3.0.3: <span class="hi-exam">Mode 3 by 1700, Mode 5 by 2300 next day</span>. <span class="hi-trap">TS 3.0.3 shutdown timing is NOT appropriate here because specific action b.2 exists — but the result is the same 6-hour and 30-hour shutdown sequence.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A3</div>
EDG operability with degraded SW: 1A EDG fails surveillance and declared INOPERABLE with 13 SW Pump C/T. Candidate must determine <span class="hi-exam">TWO SW Loops remain OPERABLE</span> (meets one pump per bus AND two pumps per bay requirements). Therefore <span class="hi-exam">TS 3.8.1.1 Action b.2 does NOT apply</span> — only b.1 (1 hr), b.3 (24 hrs), b.4 (72 hrs). This is <span class="hi-exam">Special Case D / Case #1 from S1.OP-SO.DG-0005 Exhibit 1</span>.
</div>

### Inoperable EDG Scenarios

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
2C EDG <span class="hi-exam">Pre-Lube pump failure</span> as initial event (TS event). Initial condition: 2C EDG Jacket Water heater is failed and CIT (abnormal plant configuration) carried over from prior shift. Entry cue: OHA J-20, 2C DG URGENT TRBL. Investigation: 2C EDG Alarm Window A-7 PRE-LUBE PUMP FAILURE in alarm; Pre-lube pump NOT running with breaker shut. CRS uses S2.OP-SO.DG-0003, 2C Diesel Generator Operation, and recognizes 2C EDG is now <span class="hi-exam">inoperable with both Jacket Water Heater AND Pre-lube pump inoperable</span>; enters <span class="hi-exam">LCO 3.8.1.1.b action b</span>. Determines that <span class="hi-exam">S2.OP-ST.500-0001, Electrical Power Systems AC Sources Alignment, must be performed within one hour</span> (action b.1) to demonstrate the operability of the independent AC Sources.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
2A EDG running unloaded for maintenance run (initial condition). 2A EDG emergency trips during scenario. CRS evaluates <span class="hi-exam">TS 3.8.1.1 action b.1 (1 hour line surveillance)</span> and <span class="hi-exam">action b.4 (72 hours to restore EDG to Operable status)</span>. No impact to plant operations.
</div>

## Connections

- Related systems: [[Fire Protection]]
- Related tech specs: [[TS 3/4.8 — Electrical]], [[TS 3/4.0 — Applicability]]
- Related exam questions: [[2015 Q13]], [[2016 Q55]], [[2016 Q57]], [[2016 Q58]], [[2016 Q64]], [[2016 Q91]], [[2016 Q92]], [[2018 Q21]], [[2018 Q22]], [[2018 Q42]], [[2018 Q60]], [[2019 Q12]], [[2019 Q21]], [[2019 Q24]], [[2019 Q79]], [[2019 Q83]], [[2020 Q11]], [[2020 Q13]], [[2020 Q17]], [[2020 Q47]], [[2020 Q48]], [[2020 Q50]], [[2020 Q52]], [[2020 Q53]], [[2023 Q12]], [[2023 Q48]], [[2023 Q89]], [[2022 Q50]], [[2022 Q89]], [[2015 Q43]], [[2015 Q55]], [[2015 Q58]], [[2015 Q92]], [[2014 Q59]], [[2014 Q83]], [[2014 Q93]], [[2012 Q11]], [[2012 Q12]], [[2012 Q59]], [[2012 Q62]], [[2012 Q75]], [[2012 Q82]], [[2012 Q97]]
- Related procedures: [[S2.OP-ST.DG-0001 — Emergency Diesel Generator Surveillance Test]], [[S2.OP-ST.DG-0002 — 2B Diesel Generator Surveillance Test]], [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]], [[AB.LOOP-0001 — Loss of All Offsite Power]], [[EP-SA-325 — Emergency Plan Implementing Procedures]], [[S1.OP-SO.DG-0005 — EDG Operability Determination]], [[S2.OP-SO.DG-0001 — Diesel Generator Operation]], [[AB.CA-0001 — Loss of Control Air]], [[S2.OP-ST.DG-0003 — 2C Diesel Generator Surveillance Test]], [[S2.OP-ST.DG-0014 — 2C Diesel Generator Endurance Run]], [[S2.OP-SO.DG-0003 — 2C Diesel Generator Operation]], [[S2.OP-AR.DG-0003 — 2C Diesel Generator Alarm Response]]
- Related JPMs: [[2016 JPM SRO-A1-2]], [[2016 JPM Sim-g]], [[2016 JPM IP-i]], [[2016 JPM IP-k]], [[2019 JPM SRO-A3]], [[2019 JPM Sim-g]], [[2020 JPM IP-j]], [[2020 JPM SRO-A3]], [[2023 JPM IP-i]], [[2022 JPM SRO-A5]], [[2014 JPM IP-i]], [[2012 JPM IP-j]], [[2012 JPM IP-k]]
- Related scenarios: [[2012 Scenario 1]], [[2012 Scenario 2]], [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2018 Scenario 2]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2015 Scenario 1]], [[2015 Scenario 3]], [[2014 Scenario 1]], [[2014 Scenario 3]]
- Related exams: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
