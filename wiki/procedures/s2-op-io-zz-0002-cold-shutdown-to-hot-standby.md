---
title: "S2.OP-IO.ZZ-0002 — Cold Shutdown to Hot Standby"
category: procedures
status: draft
aliases:
  - S2.OP-IO.ZZ-0002
  - S1.OP-IO.ZZ-0002
---

# S2.OP-IO.ZZ-0002 — Cold Shutdown to Hot Standby

## Purpose

Provides guidance for transitioning the plant from Cold Shutdown (Mode 5) to Hot Standby (Mode 3), including RCS heat up, pressurization, and system alignments.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q07</div>
During RCS heat up, 2RH1 and 2RH2 (RHR Suction Isolation Valves) must be <span class="hi-exam">manually closed</span> to prevent exceeding the design pressure of the RHR suction piping (<span class="val-trip">450 psig</span>). These valves do NOT auto-close on high RCS pressure — they are only interlocked to <span class="hi-exam">prevent opening</span> until PT-403 and PT-405 are less than 375 psig.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q41</div>
SI block sequence during the return-to-service heatup: the general Auto SI Block (from ANY auto SI signal) is <span class="hi-exam">UNBLOCKED at step 5.2.21</span>, but the <span class="hi-exam">Low PZR Pressure SI remains BLOCKED until the RCS is pressurized &gt;1915 psig (P-11) at step 5.3.23</span>. At 1850 psig the Low PZR Pressure SI is still blocked, so an RCS leak does NOT auto-SI on Low PZR Pressure — the unblockable Containment High Pressure SI (≥4 psig) is what actuates.
</div>

## Connections

- Related systems: [[RHR]], [[RCS]], [[RPS/SSPS]]
- Related exam questions: [[2022 Q07]], [[2014 Q41]]
- Related exam: [[2022 NRC Written Exam]], [[2014 NRC Written Exam]]
