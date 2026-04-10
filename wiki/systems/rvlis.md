---
title: RVLIS
category: systems
status: draft
aliases:
  - reactor vessel level indication system
---

# RVLIS

## Function

Reactor Vessel Level Indication System provides indication of reactor vessel water level during post-accident conditions.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q84</div>
RVLIS Train B requires <span class="hi-exam">2PT-405 (Wide Range RCS Pressure)</span> as an input. If 2PT-405 fails AND Train A is out of service for maintenance, <span class="hi-exam">both trains of RVLIS are unavailable</span> → enter EOP-TRIP-6 (Natural Circulation Cooldown without RVLIS) instead of EOP-TRIP-5 (with RVLIS). In EOP-TRIP-6, maximum RCS cooldown rate is <span class="hi-exam">50F/hr when T-Hots >500F</span>, increasing to <span class="hi-exam">100F/hr when T-Hots <450F</span>. <span class="hi-trap">100F/hr is only allowed below 450F T-Hot — at 540F T-Hot, the maximum is 50F/hr.</span>
</div>

## Connections

- Related systems: [[RCS]], [[ECCS]]
- Related exam questions: [[2022 Q84]]
- Related exam: [[2022 NRC Written Exam]]
