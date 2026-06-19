---
title: MTLO
category: systems
status: draft
aliases:
  - main turbine lube oil
---

# MTLO

## Function & Design Basis

The Main Turbine Lube Oil system is the conventional oil system that lubricates and cools the main turbine generator bearings (UFSAR §10.2.2.1). A diagram of the Lubricating Oil System is shown on Plant Drawing 205218 (UFSAR §10.2.2.1). Adequate bearing oil supply is a turbine-protection design basis: <span class="hi-exam">low bearing oil pressure</span> is one of the independent protective devices that trips all turbine valves (UFSAR §10.2.2.4), and the dc emergency lube oil pump exists specifically to protect the bearings during coastdown on a loss of ac power (UFSAR §10.2.2.1).

## Key Components

- **Main lubricating oil pump** — a centrifugal volute type mounted on the end of the turbine shaft; supplies all of the lubricating oil requirements for the Lubrication System during normal operation (UFSAR §10.2.2.1). Because it is shaft-driven, it delivers oil only at sufficient turbine speed, so the motor-driven pumps cover startup, shutdown, and coastdown.
- **AC motor-driven auxiliary lubricating oil pump** — an ac motor-driven auxiliary centrifugal lubricating oil pump that supplies bearing oil when operating the unit on turning gear during startup and shutdown (UFSAR §10.2.2.1).
- **DC motor-driven emergency lubricating oil pump** — operates in the event of loss of ac power or failure of the ac motor-driven pump, to protect the turbine generator bearings during coastdown (UFSAR §10.2.2.1).
- **Hydraulic lift pump** — supplies a small quantity of high pressure oil to selected turbine bearings during startup (UFSAR §10.2.2.1).
- **Seal oil backup pump** — provides oil to the Hydrogen Seal System upon loss of the seal oil pump in the Hydrogen Seal System (UFSAR §10.2.2.1).
- **Oil reservoir, makeup tank, storage tanks, and purifier** — part of the oil in the reservoir is continuously bypassed to an oil purification system; lubricating oil is received in the makeup tank and is pumped by the positive displacement pump to either the lubricating oil storage tanks, reservoir, or lubricating oil purifier (UFSAR §10.2.2.1).

**Exam & operating coverage:**

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
MTLO leak inserted during a 76%→89% power ascension. Lube oil header pressure drops to the <span class="hi-exam">12 psig auto-start setpoint</span> for ABOP and HP Seal Oil Backup pump; auto-starts restore header pressure (rising or stable). Crew enters AB.TL-0001. CAS check: <span class="hi-exam">auto-start of ABOP or HP Seal Oil BU pump requires a turbine shutdown be performed</span>. NEO dispatched to verify reservoir level (normal and stable). Crew transitions to AB.LOAD-0001 for power reduction at &lt;5%/min. During the load reduction, main turbine bearing vibrations rise toward trip criteria (9 mils) — eventually requiring reactor trip when conditions deteriorate.
</div>

## Operation

During normal operation the shaft-mounted main lubricating oil pump supplies all bearing lube oil (UFSAR §10.2.2.1). When the unit is on turning gear during startup and shutdown — before the shaft turns fast enough for the main pump — the ac motor-driven auxiliary lubricating oil pump supplies bearing oil, and the hydraulic lift pump supplies high pressure oil to selected bearings during startup (UFSAR §10.2.2.1). On a loss of ac power or failure of the ac auxiliary pump, the dc motor-driven emergency lubricating oil pump operates to protect the bearings during coastdown (UFSAR §10.2.2.1).

Bearing lube oil pressure is a protected parameter: <span class="val-trip">low bearing oil pressure</span> is one of the turbine protective devices that, when initiated, causes tripping of all turbine valves, independent of the electronic controller (UFSAR §10.2.2.4). Bearing lube oil and hydraulic oil pressure, and bearing temperatures, are continuously monitored and/or alarmed turbine generator instrumentation parameters (UFSAR §10.2.2.5).

## Connections

- Related systems: [[Main Turbine]]
- Related procedures: [[AB.TL-0001 — Loss of Main Turbine Lube Oil]]
- Related scenarios: [[2017 Scenario 7]]
- Related exam: [[2017 NRC Operating Exam]]
