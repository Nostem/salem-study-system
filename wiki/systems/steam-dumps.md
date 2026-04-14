---
title: Steam Dumps
category: systems
status: draft
aliases:
  - condenser steam dumps
  - steam dump valves
  - steam dump
---

# Steam Dumps

## Function

The steam dump system dumps steam directly to the main condenser to prevent a reactor trip following a turbine trip or rapid load reduction. During cooldown, steam dumps operate in pressure control mode to achieve a controlled cooldown rate. (UFSAR 7.7.2.7)

## Condenser Steam Dump Valves

- Dumps steam to the condenser to prevent reactor trip on turbine trip or rapid load reduction
- Controlled by: Tavg error signal (difference between Tavg and Tref)
- Steam dump to condenser blocked by C-9 (high condenser pressure or loss of circulating water)
- Steam dump blocked below P-12 (low Tavg)
- Cooldown mode: controlled by steam pressure for controlled cooldown rate
(UFSAR 7.7.2.7)

## Power Supplies and Failure Modes

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q34</div>
Steam Dump I/P converters are powered by <span class="hi-exam">C/D 115 VAC Instrument Bus</span>. Loss of power to the I/P converters causes the Steam Dumps to <span class="hi-exam">fail CLOSED</span>. Steam Dump <span class="hi-exam">blocking solenoids are powered from 125 VDC</span> (different power source than I/P converters). <span class="hi-trap">Trap: confusing I/P converter power (115 VAC) with blocking solenoid power (125 VDC). Also, steam dumps fail closed on loss of I/P power — not as-is.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q40</div>
Each TB40 Turbine Bypass Valve is rated for <span class="hi-exam">5.33% steam flow</span>. If 23TB40 fails fully open at 60% power, reactor power rises to approximately <span class="hi-exam">65.33%</span> (power follows steam flow — turbine control valves do NOT automatically compensate). Steam Dump Train A and Train B Arming/Blocking solenoids are <span class="hi-exam">in SERIES</span>. Depressing BEZEL "OFF & RESET BYPASS TAVG" Pushbutton <span class="hi-exam">A OR B</span> removes air pressure to 23TB40, causing it to close. <span class="hi-trap">Trap: if solenoids were in parallel, BOTH A AND B would need to be depressed. Since they are in series, either one is sufficient.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q18</div>
<span class="hi-exam">MSLI signals for high steam flow with Lo-Lo Tavg CANNOT be blocked</span> — not even by manually actuating and resetting SI. If steam dump rate is too high during EOP-directed depressurization, high steam flow + P-12 (Lo-Lo Tavg) will actuate MSLI, closing all MSIVs and making steam dumps unavailable. Continue depressurization via MS10 atmospheric dump valves. High steamline differential pressure causes SI, not MSLI — different signals.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-e</div>
EOP-FRHS-1 condensate pump feed: isolate all MS lines EXCEPT the selected SG (22 or 24 preferred). Place steam dumps in Manual, adjust valve demand to 0%, then place in <span class="hi-exam">MS Pressure Control</span>. Depressurize selected SG below <span class="hi-exam">575 psig</span>. Bypass <span class="hi-exam">Tavg Low-Low</span> when reached. When condensate flow established and WR level rising, place steam dumps in auto.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q61</div>
2PT-507 (Steam Header Pressure Transmitter) fails HIGH with steam dumps in <span class="hi-exam">MS PRESS mode</span>: controller sees high pressure → steam dump valves <span class="hi-exam">fully OPEN</span>. Following a Rx Trip, all steam dumps open → high steam flows → rapidly lowering RCS temperatures. When Tavg < <span class="val-trip">543°F</span>, <span class="hi-exam">MSLI and SI actuate</span> (high steam flow coincident with Lo-Lo Tavg). Simultaneously, <span class="hi-exam">P-12 (Lo-Lo Tavg) blocks all steam dumps closed</span>. <span class="hi-trap">Steam dumps will NOT re-open to cycle and maintain temperature — P-12 block holds them closed. Group 1 cooldown valves will not re-open until the operator manually selects BYPASS TAVG on both trains on 2CC3.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q43</div>
2PT-507 (Steam Header Pressure Transmitter) fails LOW: in <span class="hi-exam">MS PRESS mode</span>, controller sees low pressure → steam dump valves <span class="hi-exam">CLOSE</span> (modulate closed thinking pressure is already low). With steam dumps closed, <span class="hi-exam">SG pressure rises</span> due to reduced heat removal from the RCS. MS10 atmospheric dump valves will open to maintain SG pressure. <span class="hi-trap">In TAVG mode, PT-507 failure has no effect on steam dump operation — TAVG mode uses Tavg error signal, not steam pressure.</span>
</div>

## Connections

- Related systems: [[Main Steam]], [[RCS]], [[115V AC]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related exam questions: [[2019 Q34]], [[2019 Q40]], [[2020 Q61]], [[2023 Q18]], [[2022 Q43]], [[2022 Q63]]
- Related JPMs: [[2023 JPM Sim-e]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
