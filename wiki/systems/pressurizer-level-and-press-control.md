---
title: Pressurizer Level & Press Control
category: systems
status: draft
aliases:
  - PZR control
  - pressurizer control
---

# Pressurizer Level & Press Control

## Pressure Control

- **Pressure increase:** Spray valves open, condensing steam in the pressurizer steam space
  - Spray valves begin to open at <span class="val-normal">2260 psig</span>
  - Spray valves full open at <span class="val-normal">2310 psig</span>
- **Pressure decrease:** Heaters energize, generating steam
  - Proportional heaters begin at <span class="val-normal">2250 psig</span>
  - Proportional heaters full at <span class="val-normal">2220 psig</span>
  - Backup heaters on at <span class="val-normal">2210 psig</span>
- **Overpressure protection:**
  - PORVs lift at <span class="val-trip">2335 psig</span> (reset 2315 psig)
  - Safety valves lift at <span class="val-trip">2485 psig</span>
- (UFSAR T5.2-1)

## Pressurizer Heater Power Supplies

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q7</div>
PZR Backup Heater Group power supplies:<br>
- <span class="hi-exam">Group 1 (21): Normal — 2G 4KV Group Bus. Emergency backup — 2C 460V Vital Bus.</span><br>
- <span class="hi-exam">Group 2 (22): Normal — 2E 4KV Group Bus. Emergency backup — 2A 460V Vital Bus.</span><br>
Transfer to emergency backup source is MANUAL (not automatic). EOP-LOSC-2 step 26 directs restoring normal power or transferring to emergency backup.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q14</div>
Following a reactor trip + SI with instrument air to containment isolated, PORVs cycle on accumulators. When air is restored (<span class="hi-exam">accumulators automatically isolate and realign to normal containment control air when pressure is restored — above 90 psig normal supply vs. below 85 psig accumulator</span>). No manual action is required for accumulator realignment. <span class="hi-exam">Pressurizer spray valves reopen when air is restored</span> because the Master Pressure Controller (MPC) will have demand to open spray valves post-trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q34</div>
MPC fails low (0% output): <span class="hi-exam">spray valves close</span> (controlled by MPC) and <span class="hi-exam">backup heaters energize</span> → RCS pressure rises → PORVs open at <span class="val-trip">2335 psig</span>. <span class="hi-trap">PORVs are interlocked directly from PZR pressure, NOT from MPC output</span> — MPC failure does not prevent PORV actuation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q87</div>
EOP-TRIP-4 CAS: if PZR level cannot be maintained <span class="hi-exam">> 4%</span> (with 2CV55 and 2CV71 fully open and level still lowering), <span class="hi-exam">actuate SI and return to EOP-TRIP-1</span>. <span class="hi-trap">PZR heaters will NOT energize with level < 17% — operating heaters to maintain saturated conditions is not possible when level is at 10% and lowering.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q92</div>
PZR pressure channel failure reportability: with one PZR pressure channel already tripped and a second failing LOW, the <span class="hi-exam">2/4 low PZR pressure trip coincidence is met</span> causing a reactor trip and SI. The SI is NOT valid (pressure was not actually low) and NOT reportable under RAL 11.3.1. The <span class="hi-exam">RPS actuation is reportable under RAL 11.3.2 as a 4-hour report</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q9</div>
AB.PZR-0001 directs <span class="hi-exam">manual reactor trip when RCS pressure reaches <span class="val-trip">2000 psig</span> and lowering</span> (spray valve failed open scenario). Reason: prevent challenging the <span class="hi-exam">automatic reactor trip on OT Delta-T</span>. <span class="hi-trap">Not low PZR pressure — the auto trip on low PZR pressure is <span class="val-trip">1865 psig</span> (rate-compensated), which is well below 2000 psig. OT Delta-T trips first as pressure lowers because the OT Delta-T setpoint has a +K3*P pressure input.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q21</div>
PZR reference leg leak causes indicated level to read <span class="hi-exam">HIGHER</span> (lower reference leg head → lower DP across transmitter → controller interprets as higher level). Master Flow Controller responds by <span class="hi-exam">lowering charging flow</span>, so <span class="hi-trap">actual PZR level LOWERS while indication rises — a divergence between actual and indicated level</span>.
</div>

## Connections

- Related systems: [[Pressurizer & PRT]], [[CVCS]], [[Instrumentation and Controls]]
- Related procedures: [[AB.PZR-0001 — Pressurizer Pressure Control Malfunction]], [[EOP-TRIP-4 — Natural Circulation]]
- Related exam questions: [[2023 Q7]], [[2023 Q14]], [[2023 Q34]], [[2023 Q87]], [[2023 Q92]], [[2022 Q9]], [[2022 Q21]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Written Exam]]
