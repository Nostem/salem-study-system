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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q81</div>
Step 6: Heat sink is established if feed flow is verified to at least one SG by either <span class="hi-exam">CETs lowering OR WR level rising in one SG</span>. NR level in at least one SG does NOT need to be > 9% to declare heat sink established — maintain flow to restore NR level to > 9% (15% adverse) and <span class="hi-exam">return to procedure in effect</span> (e.g., EOP-TRIP-2). <span class="hi-trap">Do not confuse: the 9% NR level is the MAINTAIN target, not the criterion for heat sink established or for returning to the base procedure.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Loss of all AFW flow during EOP-TRIP-1 (22 AFP trips on overcurrent, 23 AFP trips on overspeed, 21 AFP C/T). CFST Heat Sink Red Path triggers transition to EOP-FRHS-1. Both SGFPs tripped due to auto SI actuation following main turbine failure to trip. Condensate recovery: crew resets SI/Phase A/Phase B, opens <span class="hi-exam">CA330s</span>, selects one SG for depressurization to < <span class="hi-exam">575 psig</span> using MS10 atmospheric dump valve. Dispatches operator to open BF40 or BF19 at 120 ft TGA, opens BF13 and <span class="hi-exam">CN48 SGFP bypass valves</span>, closes <span class="hi-exam">CN32 SGFP suction valves</span>. <span class="hi-exam">CT#2 (CT-43): Establish feed flow to one SG before bleed and feed is required</span> — verified by SG WR level rising or CETs lowering.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q10</div>
Secondary heat sink restoration with CETs lowering and SG WR levels at 7%: feed flow to <span class="hi-exam">ONE SG between <span class="val-normal">1E04 and 5E04 lbm/hr</span> (25-100 gpm plant-specific equivalent)</span> to prevent <span class="hi-exam">thermal shocking SG tubes</span>. Per bases: "With stable or decreasing RCS temperatures, the feedwater flow rate is limited to minimize the potential impact of excessive thermal stresses since a direct measure of the steam generator temperature is not available." <span class="hi-trap">If CETs are still RISING, the procedure requires feeding at maximum/desired rate (not limited). The flow limitation only applies when CETs are stable or lowering. The concern is SG tube thermal stress, NOT reactor vessel thermal shock.</span> Remaining dry SGs may have their levels recovered at the direction of TSC.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q18</div>
Step 3: "IS RCS PRESSURE GREATER THAN ANY INTACT OR RUPTURED SG PRESSURE?" — If <span class="hi-exam">NO, return to procedure in effect</span>. Per bases: for larger LOCA break sizes, the RCS depressurizes below intact SG pressures; SGs no longer function as a heat sink; core decay heat is removed by the <span class="hi-exam">RCS break flow</span>. Secondary heat sink is not required. <span class="hi-trap">Step 3.1 (place RHR in service if T-Hots < 350F) is only performed if Step 3 answer is YES, not NO.</span> <span class="hi-trap">Bleed and Feed is also not required — the LOCA itself provides the heat removal mechanism.</span>
</div>

## Connections

- Related systems: [[Main Steam]], [[AFW]], [[RCS]], [[RHR]], [[Feed & Condensate]]
- Related EOPs: [[EOP-TRIP-2 — Reactor Trip Response]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam questions: [[2020 Q10]], [[2020 Q18]], [[2020 Q100]], [[2022 Q81]], [[2023 Q18]]
- Related JPMs: [[2023 JPM Sim-d]], [[2023 JPM Sim-e]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]]
