---
title: Control Air
category: systems
status: draft
aliases:
  - service air
  - station air
  - control air
---

# Control Air

## Function

Provides clean, dry compressed air for instrument and control valve operation throughout the plant. Includes service air and station air subsystems.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q53</div>
SAC power supplies: <span class="hi-exam">#1 SAC from 1H 4KV Group Bus, #3 SAC from 1G 4KV Group Bus (both Unit 1), #2 SAC from 2G 4KV Group Bus (Unit 2)</span>. On loss of all Unit 1 4KV Group Buses, #1 and #3 SACs are lost but <span class="hi-exam">#2 SAC auto-starts (or continues running) and one SAC is capable of supplying BOTH units' station air and control air headers at approximately 100 psig</span>. ECACs auto-start at <span class="hi-exam">85-90 psig</span> and maintain headers if ALL SACs are lost.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q77</div>
MS10 atmospheric dump valves remain operable from the control room during loss of all control air: each MS10 has a <span class="hi-exam">nitrogen bottle rack with four bottles at >=2000 psig</span> that provides backup air supply. CA330s fail CLOSED on loss of air (isolating containment air), but MS10s have <span class="hi-exam">DC battery power for control and nitrogen for the air operator</span>. Bottle rack capacity designed for <span class="hi-exam">minimum 72 hours</span> of MS10 operation. Per EOP-LOPA-1, maximum cooldown rate using MS10s is <span class="hi-exam">100F/hr</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q79</div>
On loss of instrument air, <span class="hi-exam">2MS132 (23 AFP Turbine Steam Inlet Valve) fails OPEN</span>, causing the turbine-driven AFW pump to start at power. Cold AFW injection into the SGs causes reactor power to <span class="hi-exam">exceed 3459 MWt (reactor overpower condition)</span>. Per S2.OP-IO.ZZ-0004, <span class="hi-exam">reduce turbine load</span> to lower reactor power below the administrative limit.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q88</div>
On loss of all control air with a centrifugal charging pump in service: <span class="hi-exam">CV55 fails OPEN and CV71 fails CLOSED</span>. With letdown isolated, the charging pump delivers higher flow to the RCP seals → <span class="hi-exam">PZR level RISES</span>. Per AB.CA-0001: locally adjust <span class="hi-exam">CV54 (Centrifugal Charging Pump Flow Control Valve)</span> to control charging flow, OR transfer to <span class="hi-exam">23 PDP charging pump</span> (speed controller failed at low speed stop — minimizes seal flow and extends time before PZR reaches 90%).
</div>

## Connections

- Related systems: [[CCW]], [[AFW]], [[CVCS]], [[Main Steam]]
- Related exam questions: [[2022 Q53]], [[2022 Q77]], [[2022 Q79]], [[2022 Q88]]
- Related exam: [[2022 NRC Written Exam]]
