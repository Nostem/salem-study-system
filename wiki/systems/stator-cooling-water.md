---
title: Stator Cooling Water
category: systems
status: draft
aliases:
  - SCW
---

# Stator Cooling Water

## Function & Design Basis

The main generator stator windings are water-cooled; the generator is hydrogen cooled with water-cooled stator windings (UFSAR §10.2.2.1). The generator is rated at 1300000 KVA at <span class="val-normal">75 psig hydrogen pressure</span>, 0.90 PF, 0.48 SCR, 3 phase, 60 cps, 25 KV, and 1800 rpm (UFSAR §10.2.2.1). The stator-winding cooling water provides the heat-removal path that protects the generator winding from overheating during operation.

The UFSAR does not contain a dedicated stator water cooling subsection; the system is described only as it appears within the §10.2 Turbine Generator writeup (winding cooling medium, runback protection, instrumentation, and the auxiliary cooling source). Deeper system detail (pump count and ratings, flow rates, conductivity/purity limits, setpoint values) is not in §10.2 and is recorded as gaps.

## Key Components

- **Water-cooled stator windings** — the generator stator windings are cooled by water rather than hydrogen, with hydrogen cooling the remainder of the generator (UFSAR §10.2.2.1).
- **Generator stator water coolers** — heat exchangers that reject the stator cooling water heat; cooled by the Turbine Auxiliaries Cooling System (UFSAR §10.2.7).
- **Turbine Auxiliaries Cooling System** — a single closed loop using condensate-quality water as coolant, with a makeup and expansion tank, main heat exchangers, and pumps; the pumps circulate coolant through the shell side of the main heat exchangers where heat is given up to service water on the tube side. Among the components it cools are the generator stator water coolers and the generator hydrogen coolers (UFSAR §10.2.7).

## Operation

The generator stator cooling water temperatures are continuously monitored and/or alarmed, along with hydrogen gas temperatures, stator winding temperatures, and hydrogen pressure and purity (UFSAR §10.2.2.5).

For Unit 2, a stator-water condition can drive an <span class="hi-exam">automatic turbine load runback</span> via the generator stator water turbine runback scheme (UFSAR §10.2.2.4 item 7). The runback is initiated by 2-out-of-3 logic for low water pressure, 2-out-of-3 logic for outlet water temperature, 2-out-of-3 logic for low stator winding water flow, or 2-out-of-3 logic for low bushing water flow, when the No. 2 voltage regulator is in the automatic permissive-for-runback condition (UFSAR §10.2.2.4). Stator current is monitored during this runback: stator current must be less than <span class="val-trip">79% of rated load at the 2 minute mark</span> and less than <span class="val-trip">23% of rated load at the 3.5 minute mark</span>, or a main turbine trip will be initiated to prevent damage to the generator winding (UFSAR §10.2.2.4).

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q20</div>
A stator water cooling system issue can cause an <span class="hi-exam">automatic turbine runback</span>. During the resulting load reduction, control rods may become misaligned if they stop responding to automatic rod control.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
<span class="hi-exam">Stator Water cooling system trouble (OHA H-45, GEN STAT CLG SYS TRBL)</span> drives an <span class="hi-exam">automatic main turbine runback (OHA H-38, GEN STAT RUNBACK)</span>. The PO starts the standby Stator Cooling Water pump IAW the ARP; the crew enters [[AB.LOAD-0001 — Rapid Load Reduction]] for the load reduction.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Main Generator stator abnormality: <span class="hi-exam">3 sequential stator T/Cs exceed assigned temperature limits by &lt; 10°F</span> with a rising Generator Radio Frequency Monitor (Point 0901 GEN RADIO FREQ HIGH). CRS enters AB.GEN-0001 and directs a load reduction to lower the RF Monitor &lt; 50%. See [[AB.GEN-0001 — Main Generator Abnormal Stator Conditions]].
</div>

## Connections

- Related systems: [[500KV]], [[Main Turbine]]
- Related exam questions: [[2020 Q20]]
- Related scenarios: [[2012 Scenario 1]], [[2015 Scenario 2]]
- Related exam: [[2012 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2015 NRC Operating Exam]]
