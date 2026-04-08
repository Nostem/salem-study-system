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

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.4 requires two independent SW loops OPERABLE in Modes 1–4
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours

## Connections

- Related exam questions: [[2023 Q24]], [[2023 Q50]], [[2023 Q51]]
- Related exam: [[2023 NRC Written Exam]]
