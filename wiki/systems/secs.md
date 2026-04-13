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

## Connections

- Related systems: [[4KV]], [[EDGs]], [[ECCS]]
- Related systems: [[CCW]]
- Related exam questions: [[2020 Q35]], [[2020 Q47]], [[2023 Q37]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]]
