---
title: DC Power
category: systems
status: draft
aliases:
  - DC power systems
  - station batteries
  - 125V DC
  - 250V DC
  - 28V DC
---

# DC Power

## Function & Design Basis

Separate 125-V and 250-V dc sources supply power for operation of switchgear, annunciators, vital instrument buses, inverters, emergency lighting, communications, and turbine generator emergency auxiliaries. <span class="hi">Three independent 125-V dc sources provide power to the engineered safety features</span> (UFSAR §8.3.2.1). Safety-related loads are identified by the symbols <span class="hi">A, B, C, D</span> on the feeders (UFSAR §8.3.2.1).

Each unit has a 125-V dc power system to provide power to safeguards loads, which also supplies power through inverters to the 115-V ac instrument buses; in addition each unit has a 250-V dc power system and a 28-V dc control system — together these constitute the station dc sources (UFSAR §8.1.2). The station dc systems provide a continuous source of power for operation of circuit breakers, valve controls, inverters, etc.; <span class="hi-exam">no initiation or control is required to connect the batteries to the dc buses</span> (UFSAR §8.3.2.1).

DC power is critical for safety functions because it provides control power independent of AC. The 28-V dc supplies power the reactor trip breaker undervoltage coils, so loss of a 28-V supply directly trips the associated reactor trip breaker (fail-safe design) (see [[TS 3/4.8 — Electrical]]). Battery OPERABILITY is verified by regular capacity testing, and surveillance requirements are set forth in the Technical Specifications (UFSAR §8.3.2.3).

## Key Components

As shown on the referenced plant drawings, <span class="hi">three 125-V batteries are provided for each unit</span> to supply an independent source of control power for each of the three 4160-V and 460-V vital buses and for the 125-V distribution cabinets; a backup source of control power for each of these buses is provided via <span class="hi-exam">manually operated breakers under administrative control</span> (UFSAR §8.3.2.1). The four No. 1 Vital Instrument Buses (1A, 1B, 1C, 1D) each receive a battery feed and a 230-V CC feed from power-supply trains A, B, C, and B respectively (UFSAR Table 8.3-1).

Two separate non-safety related 125-V dc batteries serve the <span class="hi">4160 V CW switchgear, 13 kV south bus section breakers, SCADA systems, and portions of switchgear relaying systems</span> (UFSAR §8.3.2.1). These are located in the Circulating Water Switchgear Building (UFSAR §8.1.2, §8.3.2.4).

The Station Battery System includes <span class="hi-exam">one non-vital 250-V, three vital 125-V, and two vital 28-V batteries</span>, static battery chargers for each battery, and a ground detection system and undervoltage alarm relay for each bus (UFSAR §8.3.2.2). The batteries are mounted on corrosion-resistant, seismically designed steel racks in separately ventilated and isolated areas (UFSAR §8.3.2.2).

### Battery Ratings

| Battery | Ampere-hour rating (8-hour rate) | Source |
|---------|----------------------------------|--------|
| 250-V (non-vital, one) | <span class="hi">1326 Ah</span> | UFSAR §8.3.2.2 |
| 125-V (vital, three) | <span class="hi">2320 Ah</span> | UFSAR §8.3.2.2 |
| 28-V (vital, two) | <span class="hi">800 Ah</span> | UFSAR §8.3.2.2 |
| CW Switchgear 125-V (non-vital, one per system) | <span class="hi">960 Ah</span> | UFSAR §8.3.2.4 |

The 28-V dc battery total load cycle ranges from <span class="val-normal">~120.7 to 172.8 amperes</span> over the 0-to-120-minute duty cycle, depending on battery and time interval (UFSAR Table 8.3-5).

### 125V DC System

- Three 125V battery banks with associated chargers per unit
- Provides control power for: switchgear operation, diesel generator field flashing and starting, vital instrumentation, emergency lighting, PORV and block valve control
- Station batteries located in separate rooms within Seismic Category I structures
- Battery chargers maintain batteries on float charge during normal operation
(UFSAR 8.3.2.1, 8.3.2.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q58</div>
Unit 1 Vital 125 VDC loads include: the <span class="hi-exam">1D Vital Instrument Bus Inverter (from 1B 125 VDC bus)</span>; <span class="hi-exam">1H 4KV Group Bus control power (1A 125 VDC regular, 1B 125 VDC emergency)</span>; and the <span class="hi-exam">Gland Sealing Steam Annunciator Panel (from the 1ADC Distribution Cabinet)</span>. <span class="hi-trap">The Supervisory Control and Data Acquisition (SCADA) System is powered from the Circ Water 125 VDC system — NOT the vital 125 VDC system.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q59</div>
Confirms 2020 Q13: with OHA B-2 "2A 125 VDC CNTRL BUS VOLT LO" and 2A Vital 125 VDC Bus at <span class="hi-exam">0 VDC on 2RP9</span>, the ONLY affected equipment from the listed malfunctions is <span class="hi-exam">2A EDG is NOT available for start</span>. #1 SGFP Emergency Oil Pump and Main Turbine Emergency Oil Pump are powered from <span class="hi-exam">250 VDC or 28 VDC</span> — NOT from the 2A 125 VDC bus. <span class="hi-trap">This topic tested on both 2019 and 2020 exams — know which loads are powered from each DC bus voltage level (125V, 250V, 28V).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q13</div>
Loss of 2A 125 VDC Bus loads: <span class="hi-exam">2A EDG is NOT available for start</span> (EDG starting circuits require 125 VDC). #1 SGFP Emergency Oil Pump and Main Turbine Emergency Oil Pump are NOT powered from the 2A 125 VDC bus — they are powered from other DC voltage levels (250 VDC or 28 VDC). <span class="hi-trap">All three malfunctions listed (SGFP Emergency Oil Pump, Turbine Emergency Oil Pump, EDG start) can be caused by loss of SOME DC bus, but only the EDG start is affected by loss of the 2A 125 VDC bus specifically. Know which loads are on which DC bus voltage level.</span>
</div>

### 250V DC System

- Provides power for turbine turning gear and other large DC loads
(UFSAR 8.3.2.1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q20</div>
250 VDC system loads: the <span class="hi-exam">Main Turbine Emergency Oil Pump is powered from the 250 VDC Battery and Charger System</span>. The following are powered from the <span class="hi-exam">125 VDC</span> system (NOT 250 VDC): Field Excitation Circuitry for the EDGs, Vital Instrument Bus Inverters, and Emergency Lighting Inverters. <span class="hi-trap">Know which loads are on each DC voltage level (28V, 125V, 250V). The 250V system primarily powers large DC motors like the turbine turning gear and the Main Turbine Emergency Oil Pump.</span>
</div>

### 28V DC System

- Three 28V battery supplies per unit
- Provides power for reactor trip breaker undervoltage coils
- Loss of 28V DC supply causes reactor trip breaker to open (fail-safe design)
(UFSAR 8.3.2.1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q56</div>
Purpose of the 28 VDC Control Power System is to provide DC electrical power under normal, transient, and accident conditions to: <span class="hi-exam">(a) Switchgear, (b) Main Control Room Control Console Bezel controls, (c) Annunciators, (d) Vital Instrument Buses, (e) Non safety-related equipment, (f) Status panel RP4 in the main control room</span>. Loss of the 1A 28 VDC bus therefore <span class="hi-exam">de-energizes 1RP4 status panel — all indication on 1RP4 is lost</span>. <span class="hi-trap">Traps: 13 AFW pump auto-start on MS132 fail-open is a 125 VDC (not 28 VDC) control-power loss effect; OHA G-6 11 SGFP TRBL alarm panel functions are powered from 115 VAC; control room emergency lighting is supplied from 125 VDC — none are effects of losing the 28 VDC bus.</span>
</div>

### CW Switchgear Batteries

Each CW Switchgear Battery System includes one 125-V battery, two static battery chargers, ground detection and metering cabinet, located in the Circulating Water Switchgear Building (UFSAR §8.3.2.4). The battery is connected to its associated 125-V distribution panel through protective fuses and a manual transfer switch; <span class="hi-exam">the manual transfer switch allows either 125-V distribution panel to be switched to the other battery if its own battery is out of service</span> (UFSAR §8.3.2.4). On loss of AC power to the battery chargers and the P250 computer inverter, the battery can supply the <span class="hi">full P250 inverter load of 15KVA for up to 2 hours and the remaining DC loads for up to 4 hours</span> (UFSAR §8.3.2.4). (Unit 2 only, the Unit 1 Plant Computer Inverter is abandoned and all loads are moved to the SPDS Inverter.) (UFSAR §8.3.2.4)

## Operation

During normal operation, the dc load is fed from the battery chargers with the batteries floating on the system; upon loss of dc power from a battery charger, the dc load is drawn from the batteries (UFSAR §8.3.2.2). Each charger maintains a floating charge on its associated battery and is capable of supplying the required equalizing charge when necessary (UFSAR §8.3.2.2). Protection against overcharging is provided within the charger itself, which is a <span class="hi">constant voltage-current limited device</span> (UFSAR §8.3.2.3).

Two chargers, each capable of <span class="hi">100-percent normal load</span>, are provided for each 28-V and 125-V dc battery; the 28-V and 125-V chargers are fed from the vital ac buses, and each 28-V and 125-V battery is fed from two separate vital buses (UFSAR §8.3.2.3). <span class="hi-exam">One charger is under administrative control to assure that the 230-V ac buses will not become interconnected</span> (UFSAR §8.3.2.3). One 250-V dc charger is provided due to the nature of the 250-V dc loads, with a provision to tie in the other unit's 250-V charger if needed (UFSAR §8.3.2.3). Each 125-VDC battery is connected to its associated switchgear through a disconnect switch and protective fuses; the 250-V and 28-VDC batteries are connected to their associated switchgear through protective fuses (UFSAR §8.3.2.2).

### Station Battery Capacity

The batteries are sized for <span class="val-normal">2 hours of operation after a loss of ac power</span>, based upon the required operation of the dc emergency equipment (UFSAR §8.3.2.2). If all offsite power is lost, the battery chargers are energized from the emergency diesel generators and resume their function automatically (UFSAR §8.3.2.2).

| Condition | Battery Duration | Source |
|-----------|-----------------|--------|
| Worst case, no load shed | <span class="hi">2 hours</span> | UFSAR §8.3.2.2; VTD 314204 |
| With EOP-LOPA-1 load shedding | <span class="hi">4 hours</span> (SBO coping duration) | VTD 314204 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q13</div>
During a station blackout, <span class="hi-exam">115VB inverter power remains available from the inverters for at least 2 hours following a LOPA</span> — so console valve-position indication (e.g., 21RH18 and 2RH20 RHR HX valves) stays accurate even after control air bleeds away and the valves fail as-is.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q56</div>
On a total loss of all AC power, the station vital <span class="hi-exam">125 VDC batteries are designed (FSAR 8.3.3.2) to supply vital station loads for a minimum of 2 hours</span>, based on the required operation of the DC emergency equipment.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q22</div>
During a STATION BLACKOUT with vital batteries discharging at their MAXIMUM rate, the vital batteries will supply DC power to emergency equipment for <span class="hi-exam">AT LEAST 2 hours</span>. <span class="hi-trap">Trap: 4 hours is the SBO coping duration WITH load shedding per EOP-LOPA-1 — the 2 hour value is the minimum at maximum discharge rate without load shed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q49</div>
Battery discharge indication on 2RP9: during normal "float charge" mode, volt meters read <span class="val-normal">~134 VDC</span> and <span class="hi-exam">amp meters read 0 amps</span> (charger supplies all loads). On loss of all AC power, batteries begin discharging — indicated by <span class="hi-exam">rising amps (&gt; 0) on 2RP9 amp meters</span> (NOT by voltage rising above zero). By design, batteries are sized for <span class="hi-exam">2 hours</span> of operation after loss of AC power. <span class="hi-trap">Trap: volt meters do NOT read 0 during normal operation — they read ~134 VDC. Amp meters read 0 because the charger supplies loads. Discharge is indicated by amps rising, not volts rising. Also: 2 hours (no load shed) vs 4 hours (with EOP-LOPA-1 load shed) — do not confuse the two durations.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q9</div>
125V DC vital batteries are rated for <span class="hi-exam">2 hours during worst-case loading (no load shed)</span> following a Loss of All AC Power. With manual load shedding per EOP-LOPA-1, battery life extends to <span class="hi-exam">4 hours</span> (SBO coping duration). Loss of All AC Power is NOT a Design Basis Accident.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 IP-i</div>
Station Blackout 125VDC Load Shed per EOP-LOPA-1 Checkoff Sheet 3 (COS 3-1 thru 3-3). Operator must locate DC distribution panels across two elevations and open ONLY the specific breakers listed. <span class="hi-exam">64 ft elevation</span>: 2A 125VDC Bus, 2ADC 125VDC Distribution Panel, 2B 125VDC Bus, 2DDC and 2CDC 125VDC Distribution Panels. <span class="hi-exam">100 ft elevation switchgear room</span>: 2AADC, 2BBDC, 2CCDC 125VDC Distribution Panels. Field labeling discrepancies: <span class="hi-exam">2ADC3AX29</span> labeled "Source #1 125 VDC to AVR Excitation Cab" (procedure calls it "2 Generator Exciter Voltage Regulator"); <span class="hi-exam">2DDC2AX28</span> labeled "21SJ162, 2SJ166, 22SJ162, 22SJ166, 2SJ158" (procedure calls it "Safety Injection Test Line Valves").
</div>

### Station Battery Monitoring

Each of the 6 batteries per unit is continuously monitored in the Control Room for voltage and discharge current (UFSAR §8.3.2.3). Monitoring and alarm devices include: a <span class="hi">Battery Voltmeter</span> (dc bus voltage, continuous Control Room readout); a <span class="hi">Battery Load Ammeter</span> (discharge current); <span class="hi">Ground Detectors</span> (leakage from positive and negative buses to station ground, with a local ground detection circuit adjacent to each charger for test purposes); an <span class="hi">Undervoltage Alarm</span> that alarms in the Control Room when bus voltage drops below a preset value; a <span class="hi">Charger Voltmeter</span> (charger output voltage at the charger cabinet); a <span class="hi">Charger Alarm</span> on loss of ac input to the chargers; a <span class="hi">DC Distribution Cabinet Undervoltage Alarm</span> on each 28-V and 125-V distribution cabinet; and a <span class="hi">Blown Fuse Alarm</span> on each battery fuse (UFSAR §8.3.2.3). Each 28-VDC charger is equipped with an ac failure relay, and loss of ac input and/or dc output is annunciated in the Control Room; each Unit 2 125-VDC charger is equipped with a summary trouble alarm indicating <span class="hi-exam">AC Power Failure, High Voltage Shutdown, No Charge, and High/Low Voltage</span>; the 250-VDC chargers also have an overvoltage alarm in the Control Room (UFSAR §8.3.2.2, §8.3.2.3). Alarms from both Unit 1 and Unit 2 battery chargers are printed in the Control Room (UFSAR §8.3.2.2).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q46</div>
125VDC ground detection: <span class="hi-exam">resistance ≤50K ohms = ground detected; >50K ohms = normal (no ground)</span>. Per S2.OP-SO.125-0004, when a ground is detected, breakers are <span class="hi-exam">opened one at a time</span> until resistance reads >50K ohms, isolating the ground source. Breakers are NOT all opened at once.
</div>

### Bus Transfer & Charger Interlocks

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q15</div>
Per S2.OP-AR.ZZ-0002 (Overhead Annunciators Window B), the required response to <span class="hi-exam">OHA B-10, 2B 125VDC CNTRL BUS VOLT LO</span> is to <span class="hi-exam">place the 2B2 Battery Charger in service</span>. The 2B1 battery charger is normally in service; the 2B2 (backup) charger is NOT normally in service and its use is <span class="hi-exam">limited to 7 days per Tech Specs</span>. There is <span class="hi-exam">no automatic swap</span> between chargers. <span class="hi-trap">Trap: transferring 125 VDC bus loads to their alternate source is done ONLY if the backup (2B2) charger cannot be placed in service — it is not the first action. There is also no auto-energization of 2B2 to "ensure" it has started.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q57</div>
4KV Group bus breaker control power is supplied from the DC system. <span class="hi-trap">If a 4KV group bus loses its 125 VDC control power, a running RCP breaker continues to run but will NOT trip when required</span> — 4KV breakers cannot be tripped remotely without 125VDC to energize the trip coil, and the alternate DC supply does NOT auto-transfer (it is transferred manually). See [[4KV]], [[RCPs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q15</div>
Normal 125VDC bus with charger supplying: <span class="hi-exam">~<span class="val-normal">134 VDC</span>, 0 amps on 2RP9</span> (battery floating). Battery supplying: lower voltage, amps > 0. OHA B-2 (125VDC CNTRL BUS VOLT LO) alarms at <span class="val-alarm">≤128 VDC</span>. To remain at power: <span class="hi-exam">manually align standby (2A2 125 VDC) battery charger</span>. <span class="hi-trap">DC bus cross-tie only permitted in Modes 5, 6, or Defueled.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q48</div>
Loss of 2C 125 VDC: all breakers powered by 2C DC <span class="hi-exam">remain AS-IS</span> (no automatic trips or closures — DC control power is required to operate breaker trip and close coils). EDG <span class="hi-exam">will NOT start</span> (DC starting circuits de-energized). Fast bus transfer to alternate SPT <span class="hi-exam">prevented</span> (interlock requires other SPT infeed breaker open, but 24CSD cannot open without DC). <span class="hi-trap">Breakers do not trip open on loss of DC — they remain in their last position. This is opposite of 28VDC RTB behavior (RTBs trip open on loss of 28VDC).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q49</div>
125 VDC battery charger transfer: standby charger (2A2) located in <span class="hi-exam">84 ft Switchgear Room</span> (same as normal charger). Transfer sequence requires <span class="hi-exam">no-parallel</span> — must de-energize normal charger (2A1) output FIRST, then energize standby charger (2A2). <span class="hi-trap">A and B 125VDC batteries are in the 100 ft Relay Room, but chargers are in the 84 ft Switchgear Room — do not confuse locations. Paralleling chargers is prohibited in Modes 1-4 to prevent cross-connecting 230 VAC Vital buses.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q47</div>
125VDC distribution includes a <span class="hi-exam">mechanical interlock preventing normal and backup bus paralleling</span>. The interlock requires the normal supply breaker to be OPEN before the backup (emergency) breaker can close. <span class="hi-exam">Transfer to backup DC bus is ONLY permitted during Modes 5, 6, or defueled</span> — paralleling in Modes 1-4 would make DC buses inoperable.
</div>

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.2.1 requires three 125V battery banks and three 28V supplies OPERABLE
- 1 battery bank inoperable: 2 hours to restore
- 1 charger inoperable: 24 hours (with spare charger)
- 1 of 3 28V supplies inoperable: 48 hours

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q58</div>
In Modes 1-4, the condition that ALWAYS requires entering TSAS 3.8.2.3 (125-Volt DC Distribution-Operating) for fewer than the three required 125 VDC Bus Trains OPERABLE is <span class="hi-exam">placing ANY of the backup 125 VDC battery chargers in service</span> (per LCO 3.8.2.3). <span class="hi-trap">During normal operation the battery charger supplies system loads (not the battery), so battery current of 0 amps is expected and is NOT an entry condition. Loss of power to a backup charger does not cause entry. The 90°F battery room temperature is below the electrolyte max temps (110°F and 120°F for the two battery types).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q90</div>
LCO 3.8.2.3 battery cell parameters: with 3 connected cells at Float Voltage of <span class="hi-exam">0 Volts, battery does NOT meet Category B and C limits</span>. <span class="hi-exam">Required Actions C (24 hrs to restore), D (2 hrs to restore), and F (6 hrs to Hot Standby if D not met) all apply simultaneously</span>. D and F are most limiting: 2 hours to restore + 6 hours to Hot Standby = <span class="hi-exam">8 hours maximum from time of discovery</span>. <span class="hi-trap">Trap: Action C allows 24 hours for Category B/C limit restoration, but Action D (connected cells at 0V) is more limiting at only 2 hours. Candidates who use 24 hours get the wrong answer by one full day.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #3</div>
Shortly after watch turnover the <span class="hi-exam">2A1 125VDC Battery Charger trips</span> (OHA A-41 AUX ALM SYS PRINTER and OHA B-2 2A 125VDC CNTRL BUS VOLT LO; low bus voltage alarm setpoint &lt;128 VDC, reading 127 VDC). CRS dispatches an operator, contacts WCC/Maintenance, and enters <span class="hi-exam">TSAS 3.8.2.3 action b</span> — the 2A2 (backup) 125VDC Battery Charger must be placed in service within 2 hours if 2A1 cannot be restored to operable status.
</div>

## Connections

- Related systems: [[115V AC]], [[RHR]], [[Control Air]], [[EDGs]]
- Related procedures: [[S2.OP-SO.115-0012 — 2B Vital Instrument Bus UPS System Operation]]
- Related EOPs: [[EOP-LOPA-1 — Loss of All AC Power]]
- Related tech specs: [[TS 3/4.8 — Electrical]]
- Related exam questions: [[2015 Q13]], [[2015 Q14]], [[2015 Q15]], [[2016 Q56]], [[2018 Q20]], [[2019 Q22]], [[2019 Q23]], [[2019 Q59]], [[2019 Q90]], [[2020 Q13]], [[2020 Q49]], [[2023 Q9]], [[2023 Q46]], [[2023 Q47]], [[2022 Q15]], [[2022 Q48]], [[2022 Q49]], [[2015 Q56]], [[2015 Q57]], [[2014 Q18]], [[2014 Q58]], [[2012 Q11]], [[2012 Q58]]
- Related JPMs: [[2018 JPM IP-i]]
- Related scenarios: [[2012 Scenario 3]]
- Related exam: [[2015 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
