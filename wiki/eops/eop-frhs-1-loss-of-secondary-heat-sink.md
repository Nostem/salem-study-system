---
title: "EOP-FRHS-1 — Response to Loss of Secondary Heat Sink"
category: eops
status: draft
aliases:
  - EOP-FRHS-1
  - loss of secondary heat sink
---

# EOP-FRHS-1 — Response to Loss of Secondary Heat Sink

## Purpose

Provides operator actions for responding to a loss of secondary heat sink, including controlled depressurization of the secondary side.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q18</div>
If the depressurization rate is set too high, high steam flow coincident with Lo-Lo Tavg (P-12) actuates Main Steam Line Isolation (MSLI), which cannot be blocked. All MSIVs close and steam dumps become unavailable. Depressurization must continue via MS10 atmospheric dump valves.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-d</div>
Steps 11-14 Bleed and Feed: actuate both trains SI → verify charging and SI pump flow → open all PZR PORVs. If <span class="hi-exam">2PR2 fails to open (Step 14)</span>, open <span class="hi-exam">reactor head vent valves 2RC40-2RC43</span> (key-locked on 2RP2 backpanel) as alternate bleed path.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-e</div>
Steps 7.2-7.5 condensate pump feed: select one SG (22 or 24 preferred — <span class="hi-exam">21 and 23 steamed LAST to preserve TD AFW pump steam supply</span>). Isolate all MS lines except selected SG. Depressurize below <span class="hi-exam">575 psig</span> using steam dumps. Bypass <span class="hi-exam">Tavg Low-Low</span> when reached. Establish condensate flow, verify WR level rising, then place steam dumps in auto.
</div>

## Connections

- Related systems: [[Main Steam]], [[Auxiliary Feedwater]], [[Reactor Coolant System]], [[Feedwater and Condensate]]
- Related exam questions: [[2023 Q18]]
- Related JPMs: [[2023 JPM Sim-d]], [[2023 JPM Sim-e]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
