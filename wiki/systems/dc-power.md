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

## Function

Provides DC electrical power for control functions, instrumentation, diesel generator starting, reactor trip breaker operation, and emergency lighting. (UFSAR 8.3.2)

## 125V DC System

- Three 125V battery banks with associated chargers per unit
- Provides control power for: switchgear operation, diesel generator field flashing and starting, vital instrumentation, emergency lighting, PORV and block valve control
- Station batteries located in separate rooms within Seismic Category I structures
- Battery chargers maintain batteries on float charge during normal operation
(UFSAR 8.3.2.1, 8.3.2.2)

## 250V DC System

- Provides power for turbine turning gear and other large DC loads
(UFSAR 8.3.2.1)

## 28V DC System

- Three 28V battery supplies per unit
- Provides power for reactor trip breaker undervoltage coils
- Loss of 28V DC supply causes reactor trip breaker to open (fail-safe design)
(UFSAR 8.3.2.1)

## Station Battery Capacity

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q9</div>
125V DC vital batteries are rated for <span class="hi-exam">2 hours during worst-case loading (no load shed)</span> following a Loss of All AC Power. With manual load shedding per EOP-LOPA-1, battery life extends to <span class="hi-exam">4 hours</span> (SBO coping duration). Loss of All AC Power is NOT a Design Basis Accident.
</div>

| Condition | Battery Duration | Source |
|-----------|-----------------|--------|
| Worst case, no load shed | <span class="hi">2 hours</span> | VTD 314204 |
| With EOP-LOPA-1 load shedding | <span class="hi">4 hours</span> (SBO coping duration) | VTD 314204 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q22</div>
During a STATION BLACKOUT with vital batteries discharging at their MAXIMUM rate, the vital batteries will supply DC power to emergency equipment for <span class="hi-exam">AT LEAST 2 hours</span>. <span class="hi-trap">Trap: 4 hours is the SBO coping duration WITH load shedding per EOP-LOPA-1 — the 2 hour value is the minimum at maximum discharge rate without load shed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q49</div>
Battery discharge indication on 2RP9: during normal "float charge" mode, volt meters read <span class="val-normal">~134 VDC</span> and <span class="hi-exam">amp meters read 0 amps</span> (charger supplies all loads). On loss of all AC power, batteries begin discharging — indicated by <span class="hi-exam">rising amps (&gt; 0) on 2RP9 amp meters</span> (NOT by voltage rising above zero). By design, batteries are sized for <span class="hi-exam">2 hours</span> of operation after loss of AC power. <span class="hi-trap">Trap: volt meters do NOT read 0 during normal operation — they read ~134 VDC. Amp meters read 0 because the charger supplies loads. Discharge is indicated by amps rising, not volts rising. Also: 2 hours (no load shed) vs 4 hours (with EOP-LOPA-1 load shed) — do not confuse the two durations.</span>
</div>

## Ground Detection

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q46</div>
125VDC ground detection: <span class="hi-exam">resistance ≤50K ohms = ground detected; >50K ohms = normal (no ground)</span>. Per S2.OP-SO.125-0004, when a ground is detected, breakers are <span class="hi-exam">opened one at a time</span> until resistance reads >50K ohms, isolating the ground source. Breakers are NOT all opened at once.
</div>

## Bus Transfer Interlocks

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q47</div>
125VDC distribution includes a <span class="hi-exam">mechanical interlock preventing normal and backup bus paralleling</span>. The interlock requires the normal supply breaker to be OPEN before the backup (emergency) breaker can close. <span class="hi-exam">Transfer to backup DC bus is ONLY permitted during Modes 5, 6, or defueled</span> — paralleling in Modes 1-4 would make DC buses inoperable.
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
<div class="callout-label">Exam — 2020 Q13</div>
Loss of 2A 125 VDC Bus loads: <span class="hi-exam">2A EDG is NOT available for start</span> (EDG starting circuits require 125 VDC). #1 SGFP Emergency Oil Pump and Main Turbine Emergency Oil Pump are NOT powered from the 2A 125 VDC bus — they are powered from other DC voltage levels (250 VDC or 28 VDC). <span class="hi-trap">All three malfunctions listed (SGFP Emergency Oil Pump, Turbine Emergency Oil Pump, EDG start) can be caused by loss of SOME DC bus, but only the EDG start is affected by loss of the 2A 125 VDC bus specifically. Know which loads are on which DC bus voltage level.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q59</div>
Confirms 2020 Q13: with OHA B-2 "2A 125 VDC CNTRL BUS VOLT LO" and 2A Vital 125 VDC Bus at <span class="hi-exam">0 VDC on 2RP9</span>, the ONLY affected equipment from the listed malfunctions is <span class="hi-exam">2A EDG is NOT available for start</span>. #1 SGFP Emergency Oil Pump and Main Turbine Emergency Oil Pump are powered from <span class="hi-exam">250 VDC or 28 VDC</span> — NOT from the 2A 125 VDC bus. <span class="hi-trap">This topic tested on both 2019 and 2020 exams — know which loads are powered from each DC bus voltage level (125V, 250V, 28V).</span>
</div>

## Key Design Points

- DC power is critical for safety functions — provides control power independent of AC
- 125V batteries sized for station blackout coping duration (4 hours with load shedding)
- Battery OPERABILITY verified by regular capacity testing
- Loss of a 28V supply directly trips the associated reactor trip breaker

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.2.1 requires three 125V battery banks and three 28V supplies OPERABLE
- 1 battery bank inoperable: 2 hours to restore
- 1 charger inoperable: 24 hours (with spare charger)
- 1 of 3 28V supplies inoperable: 48 hours

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q90</div>
LCO 3.8.2.3 battery cell parameters: with 3 connected cells at Float Voltage of <span class="hi-exam">0 Volts, battery does NOT meet Category B and C limits</span>. <span class="hi-exam">Required Actions C (24 hrs to restore), D (2 hrs to restore), and F (6 hrs to Hot Standby if D not met) all apply simultaneously</span>. D and F are most limiting: 2 hours to restore + 6 hours to Hot Standby = <span class="hi-exam">8 hours maximum from time of discovery</span>. <span class="hi-trap">Trap: Action C allows 24 hours for Category B/C limit restoration, but Action D (connected cells at 0V) is more limiting at only 2 hours. Candidates who use 24 hours get the wrong answer by one full day.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q20</div>
250 VDC system loads: the <span class="hi-exam">Main Turbine Emergency Oil Pump is powered from the 250 VDC Battery and Charger System</span>. The following are powered from the <span class="hi-exam">125 VDC</span> system (NOT 250 VDC): Field Excitation Circuitry for the EDGs, Vital Instrument Bus Inverters, and Emergency Lighting Inverters. <span class="hi-trap">Know which loads are on each DC voltage level (28V, 125V, 250V). The 250V system primarily powers large DC motors like the turbine turning gear and the Main Turbine Emergency Oil Pump.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 IP-i</div>
Station Blackout 125VDC Load Shed per EOP-LOPA-1 Checkoff Sheet 3 (COS 3-1 thru 3-3). Operator must locate DC distribution panels across two elevations and open ONLY the specific breakers listed. <span class="hi-exam">64 ft elevation</span>: 2A 125VDC Bus, 2ADC 125VDC Distribution Panel, 2B 125VDC Bus, 2DDC and 2CDC 125VDC Distribution Panels. <span class="hi-exam">100 ft elevation switchgear room</span>: 2AADC, 2BBDC, 2CCDC 125VDC Distribution Panels. Field labeling discrepancies: <span class="hi-exam">2ADC3AX29</span> labeled "Source #1 125 VDC to AVR Excitation Cab" (procedure calls it "2 Generator Exciter Voltage Regulator"); <span class="hi-exam">2DDC2AX28</span> labeled "21SJ162, 2SJ166, 22SJ162, 22SJ166, 2SJ158" (procedure calls it "Safety Injection Test Line Valves").
</div>

## Connections

- Related tech specs: [[TS 3/4.8 — Electrical]]
- Related exam questions: [[2018 Q20]], [[2019 Q22]], [[2019 Q23]], [[2019 Q59]], [[2019 Q90]], [[2020 Q13]], [[2020 Q49]], [[2023 Q9]], [[2023 Q46]], [[2023 Q47]], [[2022 Q15]], [[2022 Q48]], [[2022 Q49]]
- Related JPMs: [[2018 JPM IP-i]]
- Related exam: [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]]
