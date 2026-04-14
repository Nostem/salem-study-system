---
title: "AB.RHR-0001 — Loss of RHR"
category: abnormals
status: draft
aliases:
  - AB.RHR-0001
  - loss of RHR
---

# AB.RHR-0001 — Loss of RHR

## Purpose
Provides guidance for response to a loss of Residual Heat Removal while in shutdown cooling.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q79</div>
Per OP-SA-108-106-1001 (Equipment Control and Large Motor Starting Criteria) step 4.2.2: during an <span class="hi-exam">emergency condition</span> (as determined by SM/CRS), if a breaker fails to close, the <span class="hi-exam">Shift Manager</span> can authorize <span class="hi-exam">one attempt at reclosure without an investigation</span> if that piece of equipment is essential for maintaining plant stability. No STA concurrence or Plant Manager authorization is required. This applies to 4KV breakers for safety-related pumps such as RHR pumps.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q6</div>
<span class="hi-trap">AB.RHR-0001 in Mode 4 directs per CAS to AB.LOCA-0001 (Shutdown LOCA)</span> for an uncontrolled reduction in PZR level. AB.RHR-0001 actions (isolate letdown, start SI and charging pumps, maintain PZR level 5-50%) apply to Modes 5 or 6 affecting RHR — NOT Mode 4.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 Sim-b</div>
Mode 5 with RCS depressurized/vented: 21 RHR Pump trips on electrical fault, <span class="hi-exam">22 RHR Pump trips shortly after starting (alternate path)</span>. Procedure path: 3.3 No (not reduced inventory) → 3.5 Yes (mechanical/electrical failure) → 3.50 Yes (heat sink available) → 3.51 Yes → 3.52 Attachment 3 (22 RHR trips) → re-enter → 3.7-3.25 (no RHR running) → 3.30-3.32 → <span class="hi-exam">Attachment 8, Cold Leg Injection</span> (core exit TCs &lt;200°F). Key valve lineup: <span class="hi-exam">open 2SJ1/2SJ2 (RWST to charging), close 2CV40/2CV41 (VCT to charging), open 2SJ4/2SJ5 and 2SJ12/2SJ13 (BIT), close 2CV68/2CV69 (charging discharge)</span>. Also isolates: stop RHR L/D Booster Pump, close 2CV8.
</div>

## Connections

- Related systems: [[RHR]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]]
- Related exam questions: [[2020 Q6]], [[2023 Q79]]
- Related JPMs: [[2020 JPM Sim-b]]
- Related exam: [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]]
