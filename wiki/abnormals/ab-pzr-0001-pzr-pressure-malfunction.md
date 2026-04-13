---
title: "AB.PZR-0001 — Pressurizer Pressure Control Malfunction"
category: abnormals
status: draft
aliases:
  - AB.PZR-0001
  - pressurizer pressure malfunction
---

# AB.PZR-0001 — Pressurizer Pressure Control Malfunction

## Purpose

Provides operator actions for responding to malfunctions in the pressurizer pressure control system, including instrument failures and their effects on reactor protection.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q5</div>
When a PZR pressure channel fails high, actual RCS pressure lowers. This causes the OT Delta-T setpoint to lower. The OT Delta-T trip actuates first (before the low PZR pressure trip) because the OT Delta-T setpoint is moving toward the actual Delta-T value.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q9</div>
With PZR spray valve failed open and heaters energized but unable to maintain pressure: manual reactor trip directed at <span class="hi-exam">RCS pressure 2000 psig and lowering</span>. <span class="hi-trap">Basis: prevent challenging automatic reactor trip on OT&Delta;T — not the low PZR pressure trip at 1865 psig rate-compensated.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
2PR2 PZR PORV seat leakage. Entry cue: OHA E-28 PZR HTR ON PRESS LO with rising PORV tailpipe temperature. Diagnostic method: close both block valves (2PR6, 2PR7), stabilize RCS pressure, then open each block valve individually — the one causing tailpipe temp to rise identifies the leaking PORV (<span class="hi-exam">2PR2 via 2PR7</span>). CRS enters <span class="hi-exam">TS 3.4.5 action a</span> (1 hour to close PORV block valve with power maintained) and evaluates TS 3.2.5.b if RCS pressure below <span class="hi-exam">2200 psia [2185 psig]</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q07</div>
PORV fails open, cannot close in manual: <span class="hi-exam">next required action is CLOSE the associated block valve</span>. <span class="hi-trap">Opening the control power breaker is only done if the block valve FAILS to close.</span> CAS: if RCS pressure drops to <span class="val-trip">2000 psig</span> and continues to drop, TRIP the reactor. Basis: simulator scenarios showed reactor tripped at <span class="hi-exam">1950 psig on OT&Delta;T</span>, so 2000 psig value was chosen to prevent automatic trip. <span class="hi-trap">1900 psig distractor: low pressure reactor trip setpoint is 1865 psig (rate-compensated) — 1900 psig is plausible but not the procedure value.</span>
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[RPS/SSPS]]
- Related exam questions: [[2020 Q07]], [[2022 Q9]], [[2023 Q5]]
- Related scenarios: [[2022 Scenario 4]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
