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

## Connections

- Related systems: [[4KV]], [[EDGs]], [[ECCS]]
