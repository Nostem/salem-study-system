---
title: SECs
category: systems
status: draft
aliases:
  - safeguards equipment controllers
  - safeguards equipment control
---

# SECs

## Function

Safeguards Equipment Controllers (SECs) automatically initiate and sequence safeguards loads onto vital buses following a Safety Injection signal or loss of offsite power. SECs ensure diesel generators are not overloaded during accident response by sequencing loads on in a prescribed order with time delays. (UFSAR 7.3, 8.3)

## Safeguards Sequence

On SI signal with loss of offsite power:
1. Diesel generators auto-start
2. Vital bus loads shed
3. Diesel generators connect to vital buses
4. Safeguards loads sequenced on in prescribed order and time delays
5. Ensures diesel generators not overloaded during accident response
(UFSAR 7.3, 8.3)

## SEC Operating Modes

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q37</div>
After SI and SEC reset, a subsequent LOOP causes EDGs to auto-start on blackout signal. <span class="hi-exam">SECs operate in Mode 2 (blackout only) — only charging pumps are auto-started.</span> SI pumps, RHR pumps, and CFCUs must be <span class="hi-exam">manually started</span> since SI/SECs were reset prior to the LOOP. EDG auto-start on loss of voltage is independent of SI status.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q47</div>
SEC operating modes after SI/SEC reset: with SI and SECs reset, a subsequent degraded voltage condition causes the SEC to actuate in <span class="hi-exam">Mode II* (Single Bus Degraded UV)</span> — NOT Mode III or IV (which require an active SI signal). The SEC strips the affected bus from offsite power and loads it onto its EDG. <span class="hi-trap">Key distinction: Mode I = Blackout (complete loss of voltage, all buses), Mode II* = Single Bus Degraded UV (degraded voltage on one bus, SI reset), Mode III = SI Only, Mode IV = SI + Degraded UV. After SI reset, only Modes I and II* are available.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q35</div>
SEC Mode III (Blackout + SI) CCW pump behavior: <span class="hi-exam">CCW pumps are stripped and NOT reloaded onto EDGs</span>. Additionally, <span class="hi-exam">any CCW pump selected for AUTO is transferred to Manual</span>. This AUTO-to-Manual transfer occurs in SEC Modes II, III, and VI. <span class="hi-trap">Trap: Mode II (Blackout only) restarts CCW pumps and also forces AUTO to Manual. Mode I (SI only) does NOT force AUTO to Manual — only Modes II, III, and VI do. Mode III does NOT restart CCW pumps but DOES force AUTO to Manual.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q5</div>
Following a Reactor Trip and Safety Injection coincident with a LOOP, SECs operate in <span class="hi-exam">Mode III (SI + Blackout)</span>. After SEC Mode III loading completes, <span class="hi-exam">CCW Pumps will be STOPPED</span> — CCW pumps are NOT automatically started as part of SEC Mode III loading. <span class="hi-trap">SEC Mode II is Blackout only (no SI signal). Mode II DOES restart CCW pumps. The presence of the SI signal is what makes this Mode III, not Mode II.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q16</div>
SEC Mode 1 (SI only, no LOOP) AFW pump behavior: the SEC sends automatic start signals to <span class="hi-exam">ONLY the motor-driven AFW pumps (21 and 22)</span>. The turbine-driven AFW pump (23) does NOT receive an SEC start signal. <span class="hi-exam">SEC start signals override LOCAL MANUAL controller alignment</span> — even with all AFW pump controllers in LOCAL MANUAL, 21 and 22 AFW pumps will auto-start on SEC Mode 1 actuation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q19</div>
SEC Mode 2 (blackout only) includes MDAFW pump start: when 2B 4KV Vital Bus de-energizes and 2B SEC actuates in Mode 2, the SEC load sequencer restores power and starts <span class="hi-exam">22 AFW Pump (powered from 2B bus)</span>. <span class="hi-exam">SEC Mode 2 starts AFW pumps on the associated bus</span>. The SG Lo-Lo level MDAFW start (2/3 on 1/4 SGs <14%) was NOT met in this scenario — the SEC Mode 2 start was the sole reason 22 AFW started.
</div>

## 1RP4 Panel Relationship

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q23</div>
<span class="hi-exam">1RP4 is the main control room panel that gives visual status of all safety related equipment including the SECs. Since 1RP4 is NOT safety related, the interface between the SECs and 1RP4 is isolated.</span> Loss of ALL AC and DC power to 1RP4 does NOT affect SEC operation. When a Reactor Trip and Safety Injection occurs, the <span class="hi-exam">SECs will automatically actuate in Mode 1</span> regardless of 1RP4 status. <span class="hi-trap">Trap: loss of power to a control bezel (e.g., AFW Control Bezel) prevents automatic and manual operation of components via that bezel. This logic does NOT apply to 1RP4 because it is an indication-only panel — SECs operate independently.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q52</div>
After SEC and SI reset during EOP-LOCA-3, a subsequent blackout on a 4KV vital bus: <span class="hi-exam">SEC performs blackout loading ONLY — ECCS pumps and safeguards equipment are NOT automatically started</span>. Must be <span class="hi-exam">manually operated</span> because blackout loading starts different equipment than safeguards loading. Also: after resetting all SECs, the <span class="hi-exam">230V control centers must be MANUALLY reset</span> by the crew (20-minute auto-removal notwithstanding). <span class="hi-trap">Trap: LBLOCA is in progress but SI is reset — the SEC has no SI signal, so it performs blackout loading (Mode 2), not SI + blackout loading (Mode III).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q60</div>
LOOP in MODE 4 with 2C EDG paralleled to the grid for surveillance: 2A and 2B 4KV Vital Buses sense Instantaneous UV → <span class="hi-exam">ALL three SECs (2A, 2B, 2C) enter Mode II (Blackout Only)</span> because 2/3 Vital Buses sense Instantaneous UV. SEC Mode II causes the 2C EDG Output Breaker to <span class="hi-exam">OPEN then reclose</span> (even though 2C EDG was already running and loaded). <span class="hi-exam">RHR pumps are NOT automatically loaded in SEC Mode II</span> — they are only sequenced in Mode I (SI only) and Mode III (SI + Blackout). 21 RHR Pump (on 2A bus) will be <span class="hi-exam">stopped</span> after SEC 2A completes Mode II sequencing. <span class="hi-trap">Trap: candidates may assume the running EDG output breaker remains closed, or that RHR pumps restart after SEC sequencing completes.</span>
</div>

## Connections

- Related systems: [[4KV]], [[EDGs]], [[ECCS]], [[CCW]], [[DC Power]], [[460/230V AC]], [[RHR]]
- Related exam questions: [[2018 Q22]], [[2018 Q27]], [[2018 Q60]], [[2019 Q5]], [[2019 Q16]], [[2019 Q19]], [[2019 Q21]], [[2019 Q23]], [[2019 Q52]], [[2020 Q35]], [[2020 Q47]], [[2023 Q37]]
- Related scenarios: [[2019 Scenario 1 — Power Ascension / LOCA Outside Containment]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]]
