---
title: "AB.CVC-0001 — Loss of Charging"
category: abnormals
status: draft
aliases:
  - AB.CVC-0001
---

# AB.CVC-0001 — Loss of Charging

## Purpose

Referenced in 2023 NRC Operating Exam simulator scenarios. Details to be backfilled from source documents.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q6</div>
Per step 3.109, if MFC malfunction: take manual control of 2CV55 or 23 Charging Pump. <span class="hi-trap">With 23 Charging Pump in service, 2CV55 has no effect on charging flow</span> — must take manual control of <span class="hi-exam">23 Charging Pump Speed Controller</span>. 23 Charging Pump low speed stop maintains minimum <span class="hi-exam">47 gpm</span> for RCP seal injection.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-b</div>
Entered due to VCT level channel <span class="hi-exam">2LT112 failing high</span>. CRS directs manual makeup to VCT per S2.OP-SO.CVC-0006 Section 5.2 to restore VCT level to 53%. VCT level monitored via <span class="hi-exam">2LT114 on Plant Computer</span> (2LT112 unreliable due to failure).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
PZR Level Channel I fails high. Charging flow lowers automatically. RO places Master Flow Control in Manual and raises charging flow to restore PZR level to program. CRS enters AB.CVC-0001. RO selects operable <span class="hi-exam">Channel 3 for control</span> and operable Channel 2 or 3 for recorder. CRS evaluates <span class="hi-exam">TS 3.3.1.1 action 6 (72 hours to place channel in tripped condition)</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q91</div>
With <span class="hi-exam">no Unit 2 Charging Pumps available</span> (22 CV Pump lost on 2C bus fault, 23 CV Pump tagged, 21 CV Pump tripped on overcurrent), step 3.50 directs: <span class="hi-exam">"COORDINATE with Unit 1 to place 13 Charging Pump in service using U/1 RWST."</span> <span class="hi-trap">Trap: the procedure does NOT direct tripping the reactor and initiating SI (that action is for PZR level uncontrolled). A bus differential fault prevents 2C EDG from re-energizing the bus, so 22 CV Pump cannot be recovered via AB.4KV-0003.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q77</div>
Loss of one charging pump (21 CHP trips, 23 CHP started): <span class="hi-exam">TS 3.1.2.2 (Boration Flow Paths) still met — two boration flow paths remain</span>. <span class="hi-exam">TS 3.1.2.4 (Charging Pumps) still met — 23 Charging Pump counts for reactivity addition capability</span> (two pumps still operable: 22 and 23). <span class="hi-exam">TS 3.5.2 (ECCS) is the only applicable entry — one ECCS subsystem inoperable</span> (21 CHP is the high-head ECCS component for that train). 72 hours to restore, then Hot Shutdown within 12 hours (total 84 hours to MODE 4). <span class="hi-trap">The 23 Charging Pump (positive displacement) counts toward the reactivity TS (3.1.2.4) but is NOT an ECCS high-head pump.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
PZR Level Channel 1 fails low — letdown isolates. RO takes manual control of charging flow, selects operable channel, energizes PZR heaters. Restores letdown: opens 2CV7, 2CV18 in Manual, opens 2CV2 and 2CV277 in Auto, ensures charging flow ~85-90 gpm.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
VCT level channel 2LT-114 fails high — 2CV35 diverts to CVCS HUT, VCT level lowers. RO takes manual control of 2CV35 and positions to VCT. CRS directs maintaining VCT level by cycling 2CV35 or initiating manual makeup IAW S2.OP-SO.CVC-0006.
</div>

## Connections

- Related systems: [[CVCS]]
- Related exam questions: [[2020 Q77]], [[2020 Q91]], [[2022 Q6]]
- Related JPMs: [[2022 JPM Sim-b]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Operating Exam]]
