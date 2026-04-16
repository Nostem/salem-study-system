---
title: "AB.COND-0001 — Loss of Condenser Vacuum"
category: abnormals
status: draft
aliases:
  - AB.COND-0001
  - loss of condenser vacuum
  - S2.OP-AB.COND-0001
---

# AB.COND-0001 — Loss of Condenser Vacuum

## Purpose

Provides guidance for responding to a loss of condenser vacuum, including actions to identify the cause, start available vacuum pumps, and stabilize condenser backpressure before plant protective actions (turbine trip) are required.

## Entry Conditions

- Condenser backpressure rising unexpectedly
- Loss of one or more vacuum pumps
- OHA alarms indicating condenser vacuum degradation

## Key Actions

- Initiate Attachment 1 CAS (Continuous Action Summary)
- Dispatch operator to perform Attachment 2, Loss of Vacuum Local Checks
- Start all available vacuum pumps
- Manually open vacuum pump discharge air-operated valves (e.g., 25AR25) if they fail to open automatically
- Monitor condenser backpressure for recovery
- If backpressure continues to rise, evaluate need for load reduction or reactor trip per CAS criteria

## Exam History

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Event 2: <span class="hi-exam">24 Vacuum Pump trips</span>. PO enters AB.COND-0001. PO initiates Att 1 CAS, dispatches operator for Att 2 local checks. PO starts all available vacuum pumps — 22 Vacuum Pump trips after starting, 25 Vacuum Pump starts but <span class="hi-exam">25AR25 fails to open</span> and must be manually opened. Backpressure stabilizes.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #2</div>
Event 3: 24 Vacuum Pump trips. PO enters AB.COND-0001. Dispatches operator for Att 2 local checks — reports no abnormal conditions except breaker tripped open. PO starts all available vacuum pumps. <span class="hi-exam">22 Vacuum Pump trips after start; 25AR25 fails to open on 25 Vacuum Pump start</span> — PO manually opens 25AR25. Backpressure improves.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q92</div>
AB.COND-0001 CAS actions based on reactor power relative to P-9: at <span class="hi-exam">45% power (below P-9)</span>, when condenser backpressure exceeds the limit of Attachment 4, the crew will <span class="hi-exam">trip the TURBINE</span> (not the Reactor). After the turbine trip, crew will perform <span class="hi-exam">AB.COND-0001 concurrently with AB.TRB-0001 (Turbine Trip Below P-9)</span>. <span class="hi-trap">Trap: if power had been above P-9, the crew would trip the Reactor (and transition to EOP-TRIP-1 without performing AB.COND-0001 concurrently). Below P-9, it is a turbine trip only, and the AB procedures are performed concurrently.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q70</div>
CAS reactor trip criteria: if the turbine load reduction rate needs to increase to a MINIMUM of <span class="hi-exam val-trip">5 % / min</span> to stabilize condenser backpressure, the crew is REQUIRED to TRIP the Reactor. <span class="hi-trap">All distractors (15, 10, 7.5 %/min) are plausible because load reductions up to 15%/min are within the capability of rod control and steam dumps — but the CAS-directed trip threshold is specifically 5%/min.</span>
</div>

## Connections

- Related systems: [[Condenser Air Removal]], [[Main Turbine]]
- Related procedures: [[AB.TRB-0001 — Main Turbine Abnormality]]
- Related exam questions: [[2019 Q70]], [[2019 Q92]]
- Related scenarios: [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2020 Scenario 2 — Load Reduction / LBLOCA / Loss of Emergency Recirculation]]
- Related exam: [[2019 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
