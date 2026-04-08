---
title: "AB.NIS-0001 — Nuclear Instrumentation System Malfunction"
category: abnormals
status: draft
aliases:
  - AB.NIS-0001
  - NIS malfunction
---

# AB.NIS-0001 — Nuclear Instrumentation System Malfunction

## Purpose
Provides operator actions for responding to malfunctions of the Nuclear Instrumentation System (NIS), including source range (SR), intermediate range (IR), and power range (PR) channels.

## Entry Conditions
- NIS channel failure, erratic indication, or unexpected channel behavior
- Loss of one or more NIS channels

## Key Actions
- Identify the failed NIS channel and its impact on reactor protection
- Verify automatic compensatory actions (e.g., automatic SR block/unblock at P-6)
- Enter applicable TS action statements for inoperable channels
- Coordinate with I&C for troubleshooting and repair

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q82</div>
When P-6 is LIT, IR NIS channels should indicate approximately <span class="hi-exam">1E-5% power</span> (the SR/IR overlap region). If an IR channel reads 1E-8% power when P-6 is LIT, that channel is inoperable. Per TS 3.3.1.1 bases, the <span class="hi-exam">24-hour action time</span> for one inoperable IR channel takes into account the redundant capability afforded by the operable IR channel and its <span class="hi-exam">low probability of failure during this period</span>. <span class="hi-trap">Trap: the bases cite low probability of failure of the operable channel, NOT low probability of reactivity events.</span>
</div>

## Connections

- Related systems: [[Instrumentation and Controls]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam questions: [[2023 Q82]]
- Related exam: [[2023 NRC Written Exam]]
