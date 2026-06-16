---
title: "AB.LOOP-0003 — Partial Loss of Offsite Power"
category: abnormals
status: draft
aliases:
  - AB.LOOP-0003
  - partial loss of offsite power
---

# AB.LOOP-0003 — Partial Loss of Offsite Power

## Purpose

Provides operator actions for responding to a partial loss of offsite power, where one or more (but not all) offsite power sources are lost. Includes guidance for evaluating remaining sources, re-energizing lost buses, and cross-tie operations.

## Key Actions / Information

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
Loss of #4 SPT de-energizes 500 KV Bus Section 1 and 23 CW Bus. All Vital Buses remain energized from 24 SPT (single offsite source). Attachment 4 provides steps to <span class="hi-exam">re-energize 23 CW Bus from Bus Section 24 via cross-tie breaker 2CW2BD</span>. Verify Bus Section 24 voltage is within 4.22-4.36 KV before closing cross-tie. CRS enters TS 3.8.1.1 Action C for one offsite source and one EDG inoperable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q81</div>
A breaker fault on the 2-6 500 KV breaker that fails to trip causes the <span class="hi-exam">5-6, 2-8, and 2-10 500 KV breakers to open, losing 500 KV bus section 2</span> — a PARTIAL loss of offsite power (enter AB.LOOP-0003, not AB.LOOP-0001). <span class="hi-exam">RCPs are NOT lost</span> because the Group Buses remain powered from generator output through the Aux Power Transformer (vs the station power transformer), so <span class="hi-exam">no reactor trip is demanded</span>. The loss of 3 circulators when the 13 KV ring bus south Section A loses power leads to entering AB.CW-0001 and opening the Turbine Hood Spray Bypass valves (11-13MC62s) on affected condensers; <span class="hi-trap">a power reduction is NOT required because at least one circulator remains running on each waterbox.</span> (Scoring note: official key accepted both C and D.)
</div>

## Connections

- Related systems: [[500KV]], [[4KV]], [[EDGs]], [[Circ Water]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOPA-1 — Loss of All AC Power]]
- Related procedures: [[AB.LOOP-0001 — Loss of All Offsite Power]], [[AB.CW-0001 — Circulating Water Malfunction]]
- Related exam questions: [[2014 Q81]]
- Related scenarios: [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exam: [[2020 NRC Operating Exam]], [[2014 NRC Written Exam]]
