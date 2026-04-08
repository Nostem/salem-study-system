---
title: Component Cooling Water
category: systems
status: draft
aliases:
  - CCW
---

# Component Cooling Water

## Function

Closed-loop cooling water system that provides an intermediate barrier between potentially radioactive systems and the service water system. Removes heat from various plant components and transfers it to the service water system. (UFSAR 9.2.2)

## Key Loads

- Reactor coolant pump thermal barriers and motor coolers
- Residual heat removal heat exchangers (shutdown cooling)
- Letdown heat exchanger (CVCS)
- Excess letdown heat exchanger
- Spent fuel pool heat exchangers
- Sample coolers
- Reactor support and nozzle cooling

## Key Components

- **Component cooling heat exchangers:** Cooled by service water
- **Component cooling pumps:** Circulate CCW through the closed loop
- **Component cooling surge tank:** Maintains system filled, accommodates thermal expansion

## Key Design Points

- Closed loop prevents direct contact between potentially radioactive fluids and service water
- Surge tank provides indication of system leakage (radioactivity monitoring on CCW)
- Loss of CCW to RCPs requires RCP trip to protect seals and thermal barrier (UFSAR 5.5.1.3.14)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q4</div>
RCP Thermal Barrier rupture indications: <span class="hi-exam">CCW surge tank level rises</span> (RCS leaks OUT to CCW), <span class="hi-exam">R17A/B CCW radiation monitors rise</span> (detecting RCS activity in CCW), and <span class="hi-exam">CC131 (RCP Thermal Barrier Valve) closes</span> on high CCW flow to the thermal barrier. PZR level does NOT rise — RCS is leaking out, not in. Charging flow does NOT lower.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q33</div>
<span class="hi-exam">SEC Mode 3 (SI + LOOP): all CCW pumps are tripped</span> — CCW pumps are NOT sequenced onto EDGs due to loading concerns. <span class="hi-exam">SW to CCW HXs is auto-isolated to prevent SW pump runout</span> with only 3 SW pumps available on emergency power. CCW pumps are started later per EOP-APPX-1 when needed for cold leg recirculation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
<span class="hi-exam">SW122 (SW Inlet Control Valve to CCW HX) fails OPEN on loss of air</span> (fails closed on loss of 125VDC). When SW122 fails open: increased SW flow through CCW HX → CCW temperature lowers → RHR HX outlet temperature lowers → <span class="hi-exam">RCS cooldown rate rises</span>. Per AB.CA-0001, SW122 can be manually operated.
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.3 requires two independent CCW loops OPERABLE in Modes 1–4
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q59</div>
SFP Heat Exchanger tube rupture: components supplied by CCW with pressure less than CCW header pressure are sources for system-to-system out leakage. <span class="hi-exam">A tube rupture in the SFP HX results in CCW leaking OUT into the SFP system</span> — CCW Surge Tank level lowers, SFP level rises. Non-borated CCW reduces SFP boron concentration, requiring addition of borated water. SFP alarms: low level <span class="val-alarm">128' 2"</span>, high level <span class="val-alarm">129' 2"</span>.
</div>

## Connections

- Related exam questions: [[2023 Q4]], [[2023 Q33]], [[2023 Q51]], [[2023 Q59]]
- Related exam: [[2023 NRC Written Exam]]
