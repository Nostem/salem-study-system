---
title: "AB.TL-0001 — Loss of Main Turbine Lube Oil"
category: abnormals
status: draft
aliases:
  - AB.TL-0001
  - S2.OP-AB.TL-0001
  - Loss of Main Turbine Lube Oil
---

# AB.TL-0001 — Loss of Main Turbine Lube Oil

## Purpose

Provides guidance for responding to a loss or reduction in main turbine lube oil (MTLO), including diagnosis of the affected system, assessment of bearing oil pressure and reservoir level, and determination of whether a power reduction or turbine shutdown is required.

## Key Actions / Information

- The Auxiliary Bearing Oil Pump (ABOP) and HP Seal Oil Backup pump auto-start at low lube oil header pressure (start setpoint approximately 12 psig). When either auto-start occurs, a turbine shutdown is required.
- Crew enters the Caution and Action Statements (CAS) on entry; key checks include whether bearing oil pressure has dropped below 12 psig, whether ABOP/HP Seal Oil BU pump has auto-started, and whether MTLO reservoir level is stable.
- The CRS initiates a power reduction at <5%/min (per AB.LOAD-0001, Rapid Load Reduction) to remove the main turbine from service.
- Continuing rises in main turbine bearing vibration during the power reduction may force the crew to trip the reactor on the turbine vibration problem if Rx power is >P-9 (49%).

**Exam & operating coverage:**

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2017 ESG-7</div>
MTLO leak causes auto-start of ABOP and HP Seal Oil Backup pump (lube oil header pressure recovers). CRS enters AB.TL-0001, recognizes the auto-start of ABOP requires a <span class="hi-exam">turbine shutdown</span>, dispatches an NEO to verify reservoir level is normal/stable, then transitions to <span class="hi-exam">AB.LOAD-0001 Rapid Load Reduction at <5%/min</span>. During the power reduction, main turbine bearing vibrations rise and the CRS directs a reactor trip and 2-EOP-TRIP-1 immediate actions when vibrations approach trip criteria (9 mils).
</div>

## Connections

- Related systems: [[MTLO]], [[Main Turbine]]
- Related procedures: [[AB.LOAD-0001 — Rapid Load Reduction]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related scenarios: [[2017 Scenario 7]]
- Related exam: [[2017 NRC Operating Exam]]
