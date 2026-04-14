---
title: 4KV
category: systems
status: draft
aliases:
  - 4KV vital buses
  - 4160V
  - vital buses
  - group buses
---

# 4KV

## Function

The 4160V AC distribution system is the backbone of plant AC power distribution. It supplies both non-safeguards Group Buses and safety-related Vital Buses, ensuring power to safeguards equipment during accident response. The Class 1E distribution system meets the intent of IEEE 308-1971. (UFSAR 8.3.1.2)

## Group Buses (Non-Safety)

- 4 sections
- Feed plant auxiliaries (non-safeguards loads)
- Powered from station power transformers (normal) or auxiliary power transformer (during operation)
- On unit trip, 4160V group buses automatically transfer from auxiliary transformer to station power transformer
(UFSAR 8.3.1.2)

## Vital Buses (Safety-Related)

- 3 sections per unit (A, B, C)
- Feed safeguards equipment (ECCS pumps, containment spray, etc.)
- Each vital bus fed from station power transformers (T13/T14 for Unit 1, T23/T24 for Unit 2)
- Two station power transformers per unit — each can supply vital buses
- In-feed breakers electrically interlocked to prevent paralleling through a vital bus
- Each vital bus backed by a dedicated diesel generator
(UFSAR 8.3.1.2)

## Safeguards Sequence

On SI signal with loss of offsite power:
1. Diesel generators auto-start
2. Vital bus loads shed
3. Diesel generators connect to vital buses
4. Safeguards loads sequenced on in prescribed order and time delays
5. Ensures diesel generators not overloaded during accident response
(UFSAR 7.3, 8.3)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q93</div>
CW bus loss scenario: when the 4KV infeed breaker to the 24 CW bus fails open, the bus auto-transfers to the 23 CW bus. However, <span class="hi-exam">all 'B' circulator breakers trip open on undervoltage during the transfer</span> and must be manually restarted. With one CW pump already C/T, this results in <span class="hi-exam">4 or more circulators out of service</span>. Per AB.CW-0001 Attachment 1, with 4+ circulators OOS at P-10 or above: <span class="hi-exam">trip the reactor and enter EOP-TRIP-1</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q47</div>
EDG paralleled to grid during surveillance: when LOOP occurs, SEC actuates in <span class="hi-exam">Mode 2 (Blackout)</span>. EDG output breaker <span class="hi-exam">opens</span>, diesel remains running, SEC opens both infeed breakers, strips all loads from the 4KV vital bus, then <span class="hi-exam">automatically recloses the output breaker</span> and re-starts loads using the SEC load sequencer. <span class="hi-trap">The output breaker does NOT remain closed during a LOOP even though the EDG was already paralleled. The SEC strips and re-sequences the bus regardless of EDG test status.</span>
</div>

## SPT Transfer Relay Behavior

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q21</div>
When 23ASD (23 SPT Supply Breaker to 2A 4KV Vital Bus) spuriously opens while <span class="hi-exam">23 SPT is at normal voltage, the 23SPT transfer relay remains energized</span>. This prevents an automatic transfer of the 2A 4KV Vital Bus to the 24 SPT. The 2A 4KV Bus de-energizes and the <span class="hi-exam">2A EDG starts and powers the bus via the 2A SEC operating in Mode II*</span>. <span class="hi-trap">Trap: auto transfer to the alternate SPT only occurs if the SPT transfer relay de-energizes (indicating SPT voltage loss). With the SPT still energized but the breaker open, the relay stays energized and blocks the transfer.</span>
</div>

## Voltage Protection

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q47</div>
Degraded voltage relays actuate at <span class="val-alarm">&lt; 95%</span> of nominal 4160V (sustained for <span class="hi-exam">&gt; 13 seconds</span>). Fast bus transfer relays actuate at <span class="hi-exam">&lt; 70%</span> of nominal. When degraded voltage is detected on a single bus (e.g., 3600V from failing SPT), and <span class="hi-exam">SI and SECs have been reset</span>, the SEC actuates in <span class="hi-exam">Mode II* (Single Bus Degraded UV)</span> — strips the bus from offsite power and loads it onto its EDG. <span class="hi-trap">Mode III and Mode IV require an active SI signal — after SI/SEC reset, SEC can only actuate in Mode I (Blackout) or Mode II* (Single Bus Degraded UV). 3600V is above the 70% fast transfer threshold (2912V) so no fast transfer occurs.</span>
</div>

## 1A 4KV Bus Loads

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q53</div>
Unit 1 — 1A 4KV Vital Bus powers <span class="hi-exam">15 and 16 SW Pumps</span> (associated with #3 SW Bay). A 1A Bus Differential with #3 SW Bay already C/Ted has <span class="hi-exam">no additional impact on SW operation</span> because 15 and 16 SW Pumps are already isolated. <span class="hi-exam">12 SW Pump (C Bus) auto-starts on low SW header pressure</span> when 13 SW Pump trips, maintaining SW flow. Correct procedure entry: AB.4KV-0001, Loss of 1A 4KV Vital Bus. <span class="hi-trap">Unit difference: on Unit 2, the 2A bus powers 21 and 22 SW pumps (not associated with a single bay) — a 2A bus loss impacts operating SW pumps directly.</span>
</div>

## 2B 4KV Bus Loads

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q12</div>
Key loads on the 2B 4KV Vital Bus include: <span class="hi-exam">22 RHR Pump</span>. During a Reactor Trip + SI coincident with LOOP with EDG 2C unavailable, 2A and 2B buses are powered from EDG 2A and EDG 2B. <span class="hi-exam">22 RHR Pump (2B bus) is running; 22 SI Pump (2C bus) is stopped</span> because EDG 2C cannot be started. <span class="hi-trap">Common confusion: 22 RHR is on the B bus (not C), and 22 SI is on the C bus (not B). Pump number does NOT always match bus letter.</span>
</div>

## 2C 4KV Bus Loads

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q29</div>
Key loads on the 2C 4KV Vital Bus include: <span class="hi-exam">22 Charging Pump, 22 SI Pump, 22 Containment Spray Pump</span>. On loss of 2C bus (bus differential), these loads are lost. Charging pump availability: <span class="hi-exam">21 CV Pump (2B bus) and 23 CV Pump (2A 460V bus) remain available</span>. <span class="hi-trap">23 CV Pump is powered from the 2A 460V bus, NOT from a 4KV bus — it remains available on loss of any 4KV bus.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.8 — Electrical]]** — TS 3.8.3.1 requires vital buses energized and OPERABLE

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-g</div>
Loss of 2A 4KV Vital Bus response per AB.4KV-0001: A EDG auto-starts. 23 Charging Pump was providing seal injection/charging to Unit 2 (lost on bus loss). Close <span class="hi-exam">2CV55</span>, then start <span class="hi-exam">21 Charging Pump</span>. Alternate path: 21 Charging Pump <span class="hi-exam">trips on start</span> → start <span class="hi-exam">22 Charging Pump</span> to restore RCP seal injection and charging flow. Note: 2CV55 has ~2 minute stroke time.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q9</div>
MSLB + LOOP with 2C 4KV Vital Bus lost (OHA J-3, 2C 4KV VTL BUS DIFF PROT): confirms 2C bus loads lost include <span class="hi-exam">22 CS Pump, 23 CFCU, and 25 CFCU</span>. Only <span class="hi-exam">21 CS Pump (A bus)</span> and <span class="hi-exam">22 &amp; 24 CFCUs (B bus)</span> remain for containment cooling — <span class="hi-exam">design bases NOT met</span> (requires 3 CFCUs + 1 CS pump).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-h</div>
4KV Group Bus transfer from SPT to APT (S2.OP-SO.4KV-0008): verify APT voltage <span class="hi-exam">4.22 - 4.36KV</span>. P&L 3.3: OHA J-39 (GROUP BUS XFER FAIL) illuminates then clears during normal transfer. <span class="hi-exam">Alternate path: 2G Group Bus fails to transfer</span>, de-energizing bus and tripping <span class="hi-exam">24 RCP</span>. OHA alarms: J-8 (2G 4KV GRP BUS DIFF/OVRLD), J-38 (4KV GRP BUS UNDRVOLT), J-39, D-31 (24 RCP BKR OPEN/FLO LO). ARP for J-38 or D-31: IF ANY RCP trips → <span class="hi-exam">TRIP Reactor → GO TO EOP-TRIP-1</span>.
</div>

## Connections

- Related systems: [[500KV]], [[460/230V AC]], [[EDGs]], [[SECs]], [[TS 3/4.8 — Electrical]]
- Related procedures: [[AB.CW-0001 — Circulating Water Malfunction]], [[AB.4KV-0001 — Loss of 4KV Vital Bus]], [[AB.4KV-0003 — Loss of 2C 4KV Bus]], [[S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer]]
- Related exam questions: [[2019 Q12]], [[2019 Q13]], [[2019 Q19]], [[2019 Q21]], [[2020 Q9]], [[2020 Q29]], [[2020 Q47]], [[2020 Q48]], [[2020 Q53]], [[2023 Q88]], [[2023 Q93]], [[2022 Q47]]
- Related JPMs: [[2022 JPM Sim-g]], [[2020 JPM Sim-h]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
