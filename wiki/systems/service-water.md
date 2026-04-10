---
title: Service Water
category: systems
status: draft
aliases:
  - SW
  - service water system
---

# Service Water

## Function

Provides cooling water from the Delaware River (ultimate heat sink) to remove heat from plant systems. Safety-related, Seismic Category I. (UFSAR 9.2.1)

## Key Loads

- Containment fan coil units (CFCUs) — minimum 1300 gpm per unit during accident conditions
- Component cooling water heat exchangers
- Diesel generator jacket water coolers
- Turbine auxiliaries cooling (non-safety)
- Various other plant heat exchangers

## Key Design Points

- Ultimate heat sink: Delaware River
- Safety-related supply for post-accident cooling
- Two independent loops required for single-failure capability
- Supplies backup water source for AFW system

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q24</div>
<span class="hi-exam">Service Water from CFCUs is the ONLY source of water into containment NOT isolated by Phase A or Phase B containment isolation signals.</span> Fire Protection and Primary Water are isolated by Phase A; CCW is isolated by Phase B. Following a LOCA with both Phase A and B actuated, SW to CFCUs is the only remaining water source into containment — this is the cause of unexpected containment water level rise addressed in EOP-FRCE-2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q50</div>
CFCU SW flow orifices maintain <span class="hi-exam">constant SW flow rate through CFCUs in both high and low speed operation</span>. Because SW flow is the same regardless of CFCU speed, <span class="hi-exam">SW header pressure is also the same</span> when a CFCU switches between high and low speed. (Prior to orifice installation, low speed had higher SW flow.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
<span class="hi-exam">SW122 (SW Inlet Control Valve to CCW HX) fails OPEN on loss of instrument air</span> (fails closed on loss of 125VDC). Loss of air to SW122 → valve fails open → increased SW flow through CCW HX → lower CCW temperature → lower RHR HX outlet temperature → <span class="hi-exam">increased RCS cooldown rate</span>. Per AB.CA-0001, SW122 can be manually operated.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q16</div>
OHA B-48 (SW VLV RM FLOODED) indicates leak in <span class="hi-exam">SW valve room on 78' Mechanical Penetration Area</span>. CFCU piping passes through this room before entering containment. <span class="hi-exam">A SW leak in this room is most likely from CFCU piping.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.4 requires two independent SW loops OPERABLE in Modes 1–4
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU surveillance: SW flow minimum <span class="hi-exam">>=1465 gpm</span> required for CFCU operability. When measured SW header DP falls between Exhibit 1 values, use the <span class="hi-exam">next higher DP value</span> to determine minimum required flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q52</div>
SW122 (CC HX Inlet Valves) <span class="hi-exam">close on SEC Mode III (SI + LOOP/blackout)</span> to prevent SW pump runout with all CFCUs running and only two SW pumps available (single active failure). During <span class="hi-exam">SEC Mode I (SI only)</span>, SW122s are throttled to maintain CC HX outlet temperature — they do NOT close or fully open. <span class="hi-trap">SW122s do NOT fully open on any SEC mode. They only close on Mode III (SI + LOOP), not on SI alone.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q90</div>
Unit difference — SW pump power supplies: <span class="hi-exam">2A EDG supplies 21 AND 22 SW Pumps (both on the same bus)</span>. On Unit 1, SW pumps 15 and 16 have a different bus arrangement. If 23 SW Pump trips and the 2A 4KV Vital Bus locks out (bus differential), <span class="hi-exam">ALL Unit 2 SW pumps are lost</span> — loss of all SW flow. Per S2.OP-AB.SW-0005: <span class="hi-exam">trip the reactor and stop all RCPs</span> to limit heat input to the CCW system.
</div>

## Connections

- Related procedures: [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]]
- Related exam questions: [[2023 Q24]], [[2023 Q50]], [[2023 Q51]], [[2022 Q16]], [[2022 Q52]], [[2022 Q90]]
- Related JPMs: [[2023 JPM Sim-f]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]]
