---
title: EDGs
category: systems
status: draft
aliases:
  - emergency diesel generators
  - diesel generators
  - diesel generator
  - EDG
---

# EDGs

## Function

Provide standby AC power to vital buses on loss of offsite power or upon receipt of a safety injection signal. Three separate and independent diesel generators per unit, each with a separate fuel supply and day tank. (UFSAR 8.3.1.5)

## Auto-Start Signals

- Safety Injection signal
- Loss of voltage on vital buses
- Degraded voltage on vital buses
(UFSAR 8.3.1.5)

## Key Design Points

- Each vital 4160V bus has a dedicated diesel generator
- 10-second start to rated speed and voltage
- Safeguards loads sequenced onto DGs after start to prevent overloading
- 7-day fuel oil supply required for OPERABILITY
- Each DG independent with separate fuel supply, starting air, and cooling

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q12</div>
<span class="hi-exam">EDG starting circuits are supplied from 125 VDC power.</span> On loss of the associated 125V DC bus, the EDG will NOT start automatically from SI/SEC signal or remotely from the control room. The SI signal goes to the SEC (powered by vital instrument power), which sends a start signal to the EDG start circuitry (DC powered). Without DC, the start circuit cannot function.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q48</div>
EDG starting air compressor power supplies: <span class="hi-exam">both 21A and 21B starting air compressors for 2A EDG are powered from the same 2A 230V Vital Bus</span> (NOT from separate buses). Each EDG's two starting air compressors are supplied from its own associated 230V vital bus.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q50</div>
EDG minimum load after paralleling: <span class="hi-exam">≥500 KW</span> must be loaded immediately after closing the output breaker to prevent <span class="hi-exam">tripping the output breaker on reverse power</span>. Separate concern: gradual loading prevents <span class="hi-exam">excessive accumulation of oil in the exhaust system</span> (exhaust fire risk from sudden high loading after low-load operation). <span class="hi-trap">250 KW is NOT the minimum — it is 500 KW. The reason for minimum load is reverse power trip protection, NOT exhaust fire prevention (which is a separate P&L for gradual loading).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q11</div>
EDG loading ratings: <span class="hi-exam">2000 hr rating = <span class="val-alarm">2750 KW</span></span>, 2 hr rating = 2860 KW, 30 min rating = 3100 KW, Continuous rating = 2600 KW. Per S2.OP-SO.PZR-0010, PZR backup heaters add approximately <span class="hi-exam">210 KW</span> to bus load. Before adding PZR heater load, current EDG loading must be adjusted to no greater than <span class="hi-exam">2750 - 210 = 2540 KW</span>. <span class="hi-trap">Trap: candidates confuse the four EDG loading limits. The 2000 hr limit (2750 KW) is the relevant one for sustained post-LOOP operation, not the 30-min (3100 KW), 2-hr (2860 KW), or Continuous (2600 KW) rating.</span>
</div>

## EDG Room Ventilation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q24</div>
During EDG operation, the Diesel Area Ventilation will ensure the EDG Room does not exceed a MAXIMUM of <span class="hi-exam"><span class="val-alarm">120 °F</span></span>. <span class="hi-trap">Trap: 90 °F is a plausible distractor but is NOT the correct limit. The actual ventilation design limit is 120 °F.</span>
</div>

## EDG Controls When Paralleled

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q48</div>
When the EDG is paralleled to the grid for surveillance testing: <span class="hi-exam">Voltage Control Switch adjusts KVAR (reactive) load</span> — Raise increases KVAR OUT. <span class="hi-exam">Speed Control Switch adjusts KW (real) load.</span> <span class="hi-trap">Common confusion: speed control adjusts frequency/real power, NOT reactive power. Voltage control adjusts reactive power, NOT voltage (when paralleled to the grid, generator voltage is locked to grid voltage).</span>
</div>

## Starting Air System

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q50</div>
Each EDG has <span class="hi-exam">4 air start motors total</span>, supplied by <span class="hi-exam">2 starting air receivers</span>. Each receiver supplies <span class="hi-exam">2 air start motors (one train)</span>. Each receiver is capable of <span class="hi-exam">3 cold starts</span>. Two air start motors start the diesel in <span class="hi-exam">&lt; 10 seconds</span>. Just one air start motor can start the diesel within <span class="hi-exam">14 seconds</span>. Rated speed is <span class="hi-exam">900 RPM</span>. With one air receiver isolated, the remaining receiver and its 2 motors <span class="hi-exam">will start the EDG and achieve rated speed in &le; 13 seconds</span>. <span class="hi-trap">Each receiver supplies only 2 of the 4 air start motors — NOT all four. Loss of one receiver does not prevent EDG start.</span>
</div>

## Diesel Generator Trip Functions

DGs have protective trips that are bypassed during emergency start (SI or loss of voltage) to ensure the DG remains running when needed. Only certain trips remain active during emergency operation. (UFSAR 8.3.1.5.2)

## Safeguards Loading Sequence

On SI signal with loss of offsite power:
1. DGs auto-start
2. Vital bus loads shed
3. DGs connect to vital buses
4. Safeguards loads sequenced on in prescribed order and time delays
(UFSAR 7.3, 8.3)

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.1.1 requires 3 DGs OPERABLE in Modes 1–4
- 1 DG inoperable: 72 hours; demonstrate OPERABILITY of remaining DGs within 24 hours
- 1 DG AND 1 offsite circuit inoperable: 12 hours

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q89</div>
Common mode failure surveillance scheduling: per S2.OP-ST.DG-0001/2/3 P&L 2.1.6, <span class="hi-exam">only one DG per unit may be synchronized to the grid at a time</span> (Reg Guide 1.108, Section C.2.b). Most expeditious method for 5 remaining EDGs: <span class="hi-exam">run one EDG at a time on both units simultaneously</span> (e.g., 1B and 2B at the same time). <span class="hi-trap">Trap: running all EDGs on one unit simultaneously violates the P&L — you cannot run 1B and 1C simultaneously even though it would be faster.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-i</div>
SBO Diesel Control Air Compressor: backup control air source when all ECACs are unavailable during LOOP. Located in SBO Compressor Building (outside RCA, requires L-3 key). Discharge valves <span class="hi-exam">1CA1913, 1CA1886, and 2CA584</span> pressurize Control Air and Aux Building headers.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q89</div>
EDG common mode failure TS 3.8.1.1 actions: when a failure cause (e.g. K1C relay) is identified that could affect operable EDGs with the same components, the SRO must apply <span class="hi-exam">action b.3 (perform operability run on remaining EDGs within 24 hours)</span> AND <span class="hi-exam">action b.4 (restore inoperable EDG within 72 hours)</span>. A common mode failure does NOT automatically make all EDGs inoperable — the remaining EDGs are presumed operable until demonstrated otherwise. <span class="hi-trap">TS 3.0.3 does NOT apply because action "e" exists for two or more diesels inoperable. Do not declare all EDGs inoperable based solely on a common mode concern.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A5</div>
Loss of ALL AC power to Unit 2 — General Emergency classification: <span class="hi-exam">2A EDG tripped on overspeed (bent fuel rack linkage, 5 hrs to repair), 2B 4KV Vital Bus damaged (ground fault), 2C EDG engine failure (piston failure)</span>. Combined with loss of both offsite sources (23 SPT in maintenance, 24 SPT internal fault), this constitutes <span class="hi-exam">EAL SG1.1 — Loss of AC Power at GE level</span>. AC power cannot be restored within the EAL timeframe.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
2A EDG running unloaded for maintenance run (initial condition). 2A EDG emergency trips during scenario. CRS evaluates <span class="hi-exam">TS 3.8.1.1 action b.1 (1 hour line surveillance)</span> and <span class="hi-exam">action b.4 (72 hours to restore EDG to Operable status)</span>. No impact to plant operations.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
2C EDG C/T for governor oil replacement and fuel rack lube (initial condition, 68 hours remaining in TSAS). Following LOOP: <span class="hi-exam">2A 4KV Vital Bus lost on Bus Differential protection, 2B EDG trips on overspeed (bent fuel rack linkage)</span>. All three 4KV Vital Buses de-energized — station blackout. Crew must identify 2C EDG as the only recovery path, have maintenance return it from C/T, start 2C EDG, close output breaker to energize 2C 4KV Vital Bus <span class="hi-exam">(CT-24)</span>, then immediately start one SW pump for EDG cooling <span class="hi-exam">(CT-25)</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A3</div>
EDG operability with degraded SW: 1A EDG fails surveillance and declared INOPERABLE with 13 SW Pump C/T. Candidate must determine <span class="hi-exam">TWO SW Loops remain OPERABLE</span> (meets one pump per bus AND two pumps per bay requirements). Therefore <span class="hi-exam">TS 3.8.1.1 Action b.2 does NOT apply</span> — only b.1 (1 hr), b.3 (24 hrs), b.4 (72 hrs). This is <span class="hi-exam">Special Case D / Case #1 from S1.OP-SO.DG-0005 Exhibit 1</span>.
</div>

## Connections

- Related exam questions: [[2019 Q12]], [[2019 Q21]], [[2019 Q24]], [[2020 Q11]], [[2020 Q13]], [[2020 Q17]], [[2020 Q47]], [[2020 Q48]], [[2020 Q50]], [[2020 Q52]], [[2020 Q53]], [[2023 Q12]], [[2023 Q48]], [[2023 Q89]], [[2022 Q50]], [[2022 Q89]]
- Related procedures: [[S2.OP-ST.DG-0001 — Emergency Diesel Generator Surveillance Test]], [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]], [[AB.LOOP-0001 — Loss of All Offsite Power]], [[EP-SA-325 — Emergency Plan Implementing Procedures]], [[S1.OP-SO.DG-0005 — EDG Operability Determination]]
- Related JPMs: [[2020 JPM IP-j]], [[2020 JPM SRO-A3]], [[2023 JPM IP-i]], [[2022 JPM SRO-A5]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exams: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
