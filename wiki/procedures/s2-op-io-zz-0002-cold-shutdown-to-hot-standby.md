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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q86</div>
IOP-2 <span class="hi-exam">P&amp;L 3.8</span> states that performance of S2.OP-ST.RC-0008(Q), RCS Water Inventory Balance, required by T/S 4.4.7.2.1.d, is <span class="hi-exam">NOT required to enter Mode 4</span> — the surveillance is not required to be completed until <span class="hi-exam">12 hours after establishment of steady state operation</span>. So with the balance overdue (>72 hr) the crew may continue to Mode 4 without performing it; the provisions of Tech Spec 4.0.4 are not applicable, and 4.0.3 does not apply (it covers missed/overdue surveillances). <span class="hi">P&amp;L 3.15: a routine balance to satisfy 4.4.7.2.1.d is normally performed over a 2-hour duration; P&amp;L 3.16: for other reasons the interval is at SM/CRS discretion.</span>
</div>

## Connections

- Related systems: [[RHR]], [[RCS]], [[RPS/SSPS]]
- Related procedures: [[S2.OP-ST.RC-0008 — RCS Water Inventory Balance]]
- Related tech specs: [[TS 3/4.4 — Reactor Coolant System]]
- Related exam questions: [[2022 Q07]], [[2014 Q41]], [[2014 Q86]]
- Related exam: [[2022 NRC Written Exam]], [[2014 NRC Written Exam]]
