---
title: CFCUs
category: systems
status: draft
aliases:
  - containment cooling
  - containment fan coolers
---

# CFCUs

## Function

Recirculate and cool the containment atmosphere during normal operation and following a LOCA. (UFSAR 6.2.2.2)

## Key Design Parameters

| Parameter | Value | Source |
|-----------|-------|--------|
| Number | 5 per unit | UFSAR 6.2.2.2.2 |
| Type | Centrifugal fan with plate fintube cooling coils | UFSAR 6.2.2.2.2 |
| Normal Operation Airflow | 110000 cfm each | UFSAR 6.2.2.2.2 |
| Accident Operation Airflow | 40000 cfm each | UFSAR 6.2.2.2.2 |
| Heat Removal (accident, per unit) | ≥44 x 10⁶ Btu/hr each | UFSAR 6.2.2.2.2 |
| Heat Removal (3 units, cumulative) | 132 x 10⁶ Btu/hr | UFSAR 6.2.2.2.2 |
| Service Water Flow (per unit, accident) | Minimum 1300 gpm | UFSAR 6.2.2.2.2 |
| Location | Operating floor, between containment wall and polar crane wall | UFSAR 6.2.2.2.2 |
| Seismic Classification | Class I | UFSAR 6.2.2.2.2 |

## Components

Each fan-cooler unit includes: motor, fan, motor heat exchanger, cooling coils, roughing filters, dampers, duct distribution system, instrumentation, and controls. Cooled by service water. (UFSAR 6.2.2.2.2)

## Key Design Points

- 5 units installed, 3 required OPERABLE by Tech Specs
- 3 units provide sufficient post-LOCA heat removal capacity
- Normal operation: recirculate and cool containment atmosphere
- Accident operation: reduced airflow but higher heat removal due to elevated containment temperature

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q52</div>
CFCU service water header supply: with 21SW22 (Nuclear Header Inlet Valve) closed to isolate a leak, <span class="hi-exam">23 CFCU can be supplied from EITHER 21 or 22 SW Header based on check valve locations</span>. The remaining CFCUs (21, 22, 24, 25) are supplied from only one header. Result with 21 Nuclear Header isolated: <span class="hi-exam">only 3 CFCUs available via 22 SW Header</span> (plus 23 CFCU from cross-connect). <span class="hi-trap">Not all 5 CFCUs have dual-header supply capability — only 23 CFCU has check valve placement allowing cross-header feed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q25</div>
<span class="hi-exam">In LOW speed, CFCU dampers realign flow through HEPA filters (bypassing roughing filters) to reduce radioactivity inside containment.</span> In HIGH speed (normal), flow goes through roughing filters. EOP-FRCE-3 directs placing all CFCUs in LOW speed for containment atmosphere cleanup.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q13</div>
<span class="hi-exam">R13 radiation monitors monitor CFCU service water DISCHARGE for radioactivity from containment into the SW system. CFCU SW flow discharges into the OPPOSITE unit's Circulating Water system.</span> Loss of the opposite unit's CW flow prevents monitoring of this effluent pathway.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q24</div>
<span class="hi-exam">Service water to CFCUs is NOT isolated by Phase A or Phase B containment isolation signals.</span> Following a LOCA with both Phase A and B actuated, SW from CFCUs is the only source of water into containment that remains unisolated (Fire Protection isolated on Phase A, CCW on Phase B, Primary Water on Phase A).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q27</div>
Confirms SEC Mode 1 CFCU behavior: with 21-24 CFCUs running in high speed and 25 CFCU stopped at time of RT/SI, <span class="hi-exam">at 10 minutes post-event ALL five CFCUs (including previously-stopped 25 CFCU) are running in LOW speed</span>. SEC Mode 1 stops the running CFCUs, then starts ALL five in low speed. <span class="hi-trap">Trap: the SEC does not skip stopped CFCUs — it starts ALL five. Standby/stopped CFCUs receive the same low-speed start command as previously-running ones.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q38</div>
<span class="hi-exam">SEC Mode 1 (SI only): running CFCUs are tripped, then all five auto-start in LOW speed after a 20-second delay</span> (coastdown period before restart). To restore manual HIGH speed control: must reset <span class="hi-exam">BOTH trains of SI AND all SECs</span>. Resetting SI alone is NOT sufficient. EOP-TRIP-3 step 1 accomplishes this.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q13</div>
Unit 1 CFCU power distribution: with <span class="hi-exam">1A 4KV Vital Bus de-energized, ONLY 11 CFCU is stopped</span>. Confirms that <span class="hi-exam">11 CFCU is powered from the A bus</span> (consistent with Unit 2 pattern: 21 CFCU on A bus). 5 CFCUs powered from 3 vital buses — knowing the bus-to-CFCU mapping is critical for determining available cooling capacity following bus losses.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q39</div>
CFCU power distribution from 4KV Vital Buses: <span class="hi-exam">21 CFCU (A bus), 22 CFCU (B bus), 23 CFCU (B bus, CIT), 24 CFCU (B bus), 25 CFCU (C bus)</span>. Loss of 2B 4KV Vital Bus = 22 and 24 CFCUs unavailable. Only 21 (A bus) and 25 (C bus) remain available. Note: 23 CFCU is <span class="hi">normally on C bus</span> but was CIT (Connected In Test) to B bus in the 2023 Q39 scenario. Per 2020 Q9, normal alignment has 23 on C bus.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q41</div>
CFCU SW flow via 2SW223: mechanical stop limits valve travel to <span class="hi-exam">~50%</span>. SW223 opens to the mechanical stop when the CFCU is in service and closes when the CFCU is out of service. <span class="hi-exam">SW flow is the same in both HIGH and LOW speed fan operation</span> — the SW223 valve position does not change with fan speed. <span class="hi-trap">SW flow does NOT increase in LOW speed (accident) mode. The fixed-resistance flow scheme (inlet/outlet orifices + mechanical stop) ensures constant SW flow regardless of fan speed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q9</div>
MSLB + LOOP with 2C 4KV Vital Bus lost (OHA J-3, 2C 4KV VTL BUS DIFF PROT): <span class="hi-exam">23 and 25 CFCUs unavailable (both normally on C bus)</span>. 21 CFCU failed independently (OHA C-5 indicates 21SW223 outlet flow control valve closed; BEZEL 1-2 low air flow — even with SW58/SW72 open, CFCU is inoperable). Only <span class="hi-exam">22 &amp; 24 CFCUs (B bus) and 21 CS Pump (A bus) available</span>. Containment cooling design bases require <span class="hi-exam">3 CFCUs and 1 CS pump — with only 2 CFCUs, design bases NOT met</span>. <span class="hi-trap">22 CS Pump is on C bus (unavailable), NOT B bus. Both CS pumps are NOT available — only 21 CS Pump (A bus) is running.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.6 — Containment]]** — TS 3.6.2.3 requires at least 3 CFCUs OPERABLE
- 1 inoperable (of required 3): 7 days to restore
- 2 inoperable: 72 hours to restore

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU surveillance (S2.OP-ST.CBV-0003): if measured SW header DP is between Exhibit 1 values, per P&L 3.4 select minimum flow for the <span class="hi-exam">next HIGHER DP value</span>. At 106 psi DP (between 105 and 110), required minimum is <span class="hi-exam">1811 gpm (at 110 psi)</span>. Actual ~1785 gpm = <span class="hi-exam">UNSAT / inoperable</span>. Also: CFCU SW flow must be <span class="hi-exam">>=1465 gpm</span> in all cases (P&L 3.3).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q55</div>
SEC Mode 1 (SI only, no LOOP) CFCU response: <span class="hi-exam">SEC trips ALL high-speed 460V breakers (including standby CFCUs), then after a 20-second time delay, starts ALL five CFCUs in low speed</span>. The SEC does NOT use load sequencers in Mode 1. A CFCU in standby receives the same treatment — high-speed breaker trips, then <span class="hi-exam">low-speed breaker closes after 20 seconds</span>. <span class="hi-trap">There is NO immediate start for standby CFCUs — ALL CFCUs (running and standby) start in low speed after the same 20-second delay.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A4</div>
Containment entry for 22 CFCU tagging (Mode 1, 100% power): at the 22 CFCU area on 130' elevation, survey map shows <span class="hi-exam">gamma dose rate = 5 mrem/hr, neutron dose rate = 40 mrem/hr</span>. With RP-imposed limits of 0.002 REM gamma / 0.008 REM neutron, the <span class="hi-exam">neutron dose is the most limiting factor at 12 minutes</span> (shorter than gamma 24 min and heat stress 15 min).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
21 CFCU fails to start in LOW speed on SEC signal following reactor trip/SI for SGTR. <span class="hi-exam">21 CFCU is powered from 2A 4KV bus</span>. Recovery: PO blocks 2A SEC, PO resets 2A SEC, RO manually starts 21 CFCU in LOW speed. This demonstrates the SEC block/reset/manual start sequence tested across multiple 2022 scenarios.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q17</div>
During a DBA LBLOCA with 2B EDG tripped (LOOP conditions), <span class="hi-exam">22 and 24 CFCUs are NOT available</span> — they are powered from the 2B 4KV Vital Bus. The LOCA-5 mitigation strategy to "Run All CFCUs in High Speed" is therefore <span class="hi-trap">not implementable</span> under these conditions.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 RO-A3</div>
SW leak isolation using P&ID 205342: leak on drain valve 21SW268 downstream of <span class="hi-exam">21SW76 (21 CFCU SW Outlet Valve)</span> in SW Valve Room, Auxiliary Building. Requires closing valves on multiple P&ID sheets including cross-connected header valves <span class="hi-exam">22SW76 and 22SW646</span>. Demonstrates P&ID reading skill for SW piping through CFCU cooling coil path.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q89</div>
CFCU service water isolation per AB.SW-0001 Attachment 5: <span class="hi-exam">close SW72 (Outlet Water Valve) FIRST, then SW58 (Inlet Water Valve)</span>. Basis: <span class="hi-exam">minimize the possibility of water hammer following restoration</span>. After the MOVs are closed, field manual isolation valves (SW54 CFCU SW Inlet and SW76 CFCU SW Outlet on 78' elevation) are closed to fully isolate.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q40</div>
Factors affecting CFCU heat removal and containment temperature:<br>
- <span class="hi-exam">LOW speed = <span class="val-normal">47000 cfm</span> vs HIGH speed = <span class="val-normal">110000 cfm</span></span> — lower airflow reduces heat transfer across cooling coils → containment temp RISES.<br>
- <span class="hi-exam">Increase in SW temperature</span> → reduced delta-T across cooling coils → heat transfer decreases → containment temp RISES.<br>
- <span class="hi-trap">Starting additional SW pumps INCREASES SW header pressure and flow across the orifice → INCREASES heat transfer → containment temp LOWERS (not rises).</span><br>
- <span class="hi-trap">Erosion of the flow orifice upstream of SW223 INCREASES SW flow → INCREASES heat transfer → containment temp LOWERS (not rises).</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
21 SW Accumulator Tank pressure drops below operable band (<span class="hi-exam">138-157 psig</span>) — 21 and 22 CFCUs declared inoperable. PO stops 21 and 22 CFCUs and isolates from field by closing 21/22 SW76 and 21/22 SW54. CRS enters <span class="hi-exam">TS 3.6.1.1 (1 hour)</span> for containment integrity and <span class="hi-exam">TS 3.6.2.3 (14 days)</span> for two CFCUs inoperable.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
25 CFCU trips in low speed on overcurrent protection (low speed breaker open, overcurrent flag up at 84 ft switchgear room). CRS directs starting 23 CFCU in high speed. TS entries: <span class="hi-exam">TS 3.6.2.3 Action a (14 days)</span> and <span class="hi-exam">TS 3.6.1.1 (1 hour containment integrity until control power removed)</span>. CRS directs WCC to open control power for 25 CFCU high and low speed breakers to satisfy containment integrity requirements.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-f</div>
22 CFCU surveillance test IAW S2.OP-ST.CBV-0003. Shift from high speed to low speed using S2.OP-SO.CBV-0001 (HIGH SPEED STOP → wait <span class="hi-exam">25 seconds</span> → LOW SPEED START). After 15 minutes, record SW flow (~<span class="hi-exam">1787 gpm</span>) and SW header DP (<span class="hi-exam">106 psi</span>). Per P&L 3.4, measured DP of 106 psi rounds up to next higher value (<span class="hi-exam">110 psid = 1811 gpm minimum</span>). Actual flow less than minimum → <span class="hi-exam">test result UNSAT, 22 CFCU inoperable</span>. P&L 3.3: both >= 1465 gpm AND >= Exhibit 1 minimum required for operability.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q12</div>
Minimum containment cooling configurations that maintain Containment Pressure, Temperature and Humidity within design limits with a DBA: <span class="hi-exam">2 CS Pumps, OR 1 CS Pump + 3 CFCUs, OR 5 CFCUs</span>. <span class="hi-trap">Trap: 1 CS Pump alone or 1 CS Pump + 2 CFCUs are NOT sufficient for DBA containment cooling. Only 5 CFCUs (without any CS Pump) is sufficient.</span>
</div>

## Connections

- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[RP-AA-300 — Radiological Survey Program]]
- Related exam questions: [[2018 Q12]], [[2018 Q24]], [[2018 Q27]], [[2018 Q74]], [[2018 Q75]], [[2019 Q13]], [[2019 Q15]], [[2020 Q9]], [[2020 Q17]], [[2020 Q40]], [[2020 Q52]], [[2020 Q89]], [[2023 Q13]], [[2023 Q24]], [[2023 Q25]], [[2023 Q38]], [[2023 Q39]], [[2022 Q41]], [[2022 Q55]]
- Related JPMs: [[2019 JPM Sim-f]], [[2023 JPM Sim-f]], [[2022 JPM RO-A4]], [[2022 JPM SRO-A4]], [[2020 JPM RO-A3]]
- Related scenarios: [[2022 Scenario 4]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
