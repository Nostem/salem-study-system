---
title: EDGs
category: systems
status: draft
aliases:
  - emergency diesel generators
  - diesel generators
  - diesel generator
  - EDG
  - Diesel Generators
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

## Diesel Generator Trip Functions

DGs have protective trips that are bypassed during emergency start (SI or loss of voltage) to ensure the DG remains running when needed. Only certain trips remain active during emergency operation. (UFSAR 8.3.1.5.2)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q37</div>
After SI and SEC reset, a subsequent LOOP causes EDGs to auto-start on blackout signal. <span class="hi-exam">SECs operate in Mode 2 (blackout only) — only charging pumps are auto-started.</span> SI pumps, RHR pumps, and CFCUs must be <span class="hi-exam">manually started</span> since SI/SECs were reset prior to the LOOP. EDG auto-start on loss of voltage is independent of SI status.
</div>

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

## Connections

- Related exam questions: [[2023 Q12]], [[2023 Q37]], [[2023 Q48]], [[2023 Q89]]
- Related exam: [[2023 NRC Written Exam]]
- Related procedures: [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]], [[AB.LOOP-0001 — Loss of All Offsite Power]]
- Related JPMs: [[2023 JPM IP-i]]
- Related operating exam: [[2023 NRC Operating Exam]]
