---
title: ABV
category: systems
status: draft
aliases:
  - aux building ventilation
  - auxiliary building ventilation
---

# ABV

## Function & Design Basis

The Auxiliary Building Ventilation System is designed for long-term continuous operation during normal and emergency modes of plant operation to provide consistent levels of temperature, cleanliness, and negative pressure within the building, with standby equipment included to preclude the uncontrolled release of radioactivity to the environs (UFSAR §9.4.2.1). The Auxiliary Building Ventilation System operates continuously to (UFSAR §9.4.2.2.1):

1. Provide satisfactory ambient temperatures within the building.
2. Direct airflow within the building always from the clean areas to the heat producing, contaminated, or potentially contaminated areas.
3. Maintain the building at a slight negative pressure to control the release of particulate and gaseous contamination in accordance with 10CFR20 limits.
4. Purge the Containment Building at selected intervals (shutdown modes only), limited by administrative controls described in Section 9.4.4.3.1.

The system limits the average temperature of the Auxiliary Building to <span class="val-normal">110°F or less</span> and maintains the boundary at a slight negative pressure (UFSAR §9.4.2.1). It is designed to maintain a year-round range of average Auxiliary Building temperatures of <span class="val-normal">60-110°F</span>; this is the range chosen to size the ventilation equipment, not necessarily the space-temperature requirement (UFSAR §9.4.2.1). Hot-water coils in the supply air units are designed to provide <span class="val-normal">60°F</span> air to the Auxiliary Building in winter and no less than <span class="val-normal">45°F</span> air to the Containment Building (UFSAR §9.4.2.1). The design-basis outdoor temperatures are <span class="val-normal">0°F (winter)</span> and <span class="val-normal">95°F (summer)</span>, both satisfying more than 99 percent of conditions experienced at the site annually (UFSAR §9.4.2.1).

The use of the Auxiliary Building exhaust filtration (HEPA and charcoal filters) to reduce release of radioactivity after the design-basis accidents of Section 15 was eliminated; the accident dose analyses were re-done using an alternative source term per Regulatory Guide 1.183, with radioactivity released into the auxiliary building during these accidents analyzed as being released through the plant vent without filtration (UFSAR §9.4.2.1). <span class="hi">The HEPA and charcoal filters are credited to control releases to ODCM limits and are not credited in the Chapter 15 accident dose analysis</span> (UFSAR §9.4.2.3). Limitations on operability and use of the HEPA and charcoal filters ensure they reduce releases of radioactivity in normal operation in conformance with Appendix I to 10 CFR Part 50 (UFSAR §9.4.2.1).

The exhaust fan-filter units and their controls are designed to seismic Class I criteria and can be powered from the standby ac power supply during a loss of offsite power; the distribution ductwork is designed to seismic Class II criteria; room coolers are seismic Class I and powered from the Standby AC Power System (UFSAR §9.4.2.1).

A correlated Tech Spec governs operability: LCO 3.7.7 requires at least <span class="val-normal">two supply fans and three exhaust fans</span> OPERABLE to maintain the Auxiliary Building at slightly negative pressure (TS 3.7.7, Amend 252).

## Key Components

The Auxiliary Building Ventilation System is a once-through heating and ventilating system for each unit, with no connection or sharing between units except for the drumming and boiling area and the auxiliary building elevator shaft (UFSAR §9.4.2.2.1). It is comprised of supply and exhaust air systems and a network of individual room coolers (UFSAR §9.4.2.2.1):

- **Supply Air System** — two <span class="val-normal">100-percent capacity</span> fan-filter units, hot-water heating coils, controls, instrumentation, and distribution ductwork (UFSAR §9.4.2.2.1). Supply air taken from outdoors is delivered primarily to the clean aisles and walkways, with some air supplied directly to the Residual Heat Removal (RHR) pump pits at the base of the building (UFSAR §9.4.2.2.1).
- **Exhaust Air System** — three <span class="val-normal">50-percent capacity</span> fans, three HEPA filter units, one standby charcoal filter unit, controls, instrumentation, and distribution ductwork (UFSAR §9.4.2.2.1). Exhaust air is extracted from each room and compartment and delivered to the unit vent alongside the Containment Building; the unit vent effluent is continuously monitored for radioactivity (UFSAR §9.4.2.2.1). One branch of exhaust ductwork is used exclusively for the rooms with the highest potential for radioactivity during a LOCA — RHR, Safety Injection, and Charging Pump Rooms; main pipe chase; Spent Resin Rooms; and the containment piping penetration area (UFSAR §9.4.2.2.1).
- **Charcoal filter unit** — a <span class="val-normal">24000 cfm</span> capacity charcoal filter is part of the Exhaust Air System to maintain ODCM limits and remains in standby during normal system operation; it can be lined up to remove gaseous iodine from the exhaust effluent during gaseous effluent releases (UFSAR §9.4.2.1). HEPA filters remove at least 99 percent of all particles 0.3 micron and larger in size (UFSAR §9.4.2.3).
- **Room coolers** — packaged fan-cooler units supplied with service water and mounted locally near vital pumping equipment: residual heat removal, safety injection, component cooling, auxiliary feedwater, charging, and containment spray pumps (UFSAR §9.4.2.2.1). Each is a single-capacity unit; the total capacity of the room cooler(s) in a given area, with the exhaust air flow rate, limits the area temperature to design values even if all pumping equipment in the area runs continuously (UFSAR §9.4.2.3).
- **Charcoal filter outlet damper** — two operating sections, each with an operator; blades are designed to go full open if control air or electric control power is lost. Manual control-air bypass valves are available near the damper operator if the single solenoid valve for the two sections fails mechanically, and each section can be manually positioned locally (UFSAR §9.4.2.2.2).
- **Post-accident Sampling Room** — located in the Unit 2 Auxiliary Building, served by the Unit 2 Auxiliary Building Ventilation System with a local booster fan provided for exhausting air from the room (UFSAR §9.4.2.2.1).

The Auxiliary Building Ventilation System is shown on Plant Drawings 205237 and 205337 (UFSAR §9.4.2.2.1).

## Operation

The starting, stopping, and mode of operation of the system are manually controlled from the Control Room; the exception is the pump room coolers, which auto-start on rising temperatures in their respective pump rooms while in auto position (UFSAR §9.4.2.2.1). After being placed in operation, the system automatically maintains building temperature and pressure within limits, and performance is monitored from the Control Room (UFSAR §9.4.2.2.1). A temperature switch provides two-position modulation of fan capacity from 2/3 airflow capacity to full capacity as average building temperature varies from 60°F in winter to 110°F in summer; simultaneously a differential pressure controller modulates exhaust fan capacity between 2/3 and full to maintain slight negative pressure (UFSAR §9.4.2.2.2).

**Modes of operation** (UFSAR §9.4.2.1):

- **NORMAL VENTILATION** — any two of the three exhaust fans and either of the two supply fans. During cooler seasons, with the heating coils absent, it is acceptable to secure both supply fans and reduce to one operating exhaust fan; a single exhaust fan has sufficient capacity to maintain negative pressure within the boundary (UFSAR §9.4.2.1).
- **EMERGENCY VENTILATION** — any two of the three exhaust fans and either of the two supply fans. During a Safety Injection (SI), all three exhaust fans and one of the supply fans will start; if access/egress becomes difficult, one exhaust fan should be secured. <span class="hi-exam">The accident analysis does not credit HEPA or Carbon filtration</span> (UFSAR §9.4.2.1).
- **REACTOR SHUTDOWN WITH CONTAINMENT PURGE (Modes 5 & 6)** — HEPA UNIT 13 (23) CONTAINMENT PURGE EXHAUST in service with HEPA UNIT 11 (21) ECCS and HEPA UNIT 12 (22) NORMAL; OR HEPA UNIT 12 (22) CONTAINMENT PURGE EXHAUST in service with HEPA UNIT 11 (21) ECCS and HEPA UNIT 13 (23) NORMAL; AND both supply fans (UFSAR §9.4.2.1).

**LOCA response** — In the event of a LOCA, the ventilation equipment continues to operate in its normal mode (UFSAR §9.4.2.2.2). One supply air unit provides two-position modulation of filtered air; one supply fan is enabled and one can be blocked for auto-start on receipt of a SEC (LOCA) signal, with the blocked fan's outside-air inlet damper maintained open (UFSAR §9.4.2.2.2). Two of the three HEPA filter units and exhaust fans operate while fan inlet guide vanes continuously modulate flow in response to building negative pressure (UFSAR §9.4.2.2.2). The following occur automatically: room coolers start and run continuously at full capacity in response to above-normal ambient temperatures as the RHR, containment spray, charging, safety injection, component cooling, and auxiliary feedwater pumps start — however, when vital power is supplied by diesel generators, the room coolers for the RHR, charging, and containment spray pumps may be delayed up to <span class="val-normal">20 minutes</span>; and containment purging is terminated (UFSAR §9.4.2.2.2). If excessive radiation is indicated in the Auxiliary Building, the charcoal filter can be aligned to the ECCS flowpath through either 11 (21) HEPA or 12 (22) HEPA units as required (UFSAR §9.4.2.3).

**Operator responses to alarms** (operator action required if trouble/failure alarms sound in the Control Room) (UFSAR §9.4.2.2.2):

1. The standby supply air unit can be energized if the operating unit signals low air flow, high or low supply air temperature, or a break in the hot-water heating coil.
2. The standby HEPA filter exhaust unit can be placed in service if either operating unit experiences high differential pressure.
3. The standby exhaust fan can be energized if either operating fan experiences an operational problem.
4. Loss-of-power fail-safe damper positions ensure one HEPA filter exhaust unit and the charcoal filter unit remain available for the ECCS equipment areas; the remainder of the Auxiliary Building is exhausted through the HEPA filter unit to the unit vent without passing through the charcoal filter.

**Design evaluation** — The system can maintain design conditions with one of the two 100-percent supply air units, two of the three 50-percent exhaust fans, and two of the three HEPA exhaust units operating, with the charcoal filter exhaust unit normally in standby (UFSAR §9.4.2.3). Exhaust fans take suction from a common plenum at the outlet of the HEPA and charcoal filter units, permitting changes in exhaust filter operating mode without affecting fan operation (UFSAR §9.4.2.3). On room-cooler single failures: if the Safety Injection Pump Room cooler fails concurrent with operation of both SI pumps, room temperature may exceed <span class="val-alarm">120°F</span> and equipment there will operate at temperatures to <span class="val-trip">146°F</span>; if the 12 (22) CCW Room Cooler fails concurrent with operation of both CCW pumps in the room, the 12 (22) CCW Heat Exchanger and Pump Room may exceed <span class="val-alarm">120°F</span> and equipment will operate at temperatures to <span class="val-trip">132°F</span> (UFSAR §9.4.2.3). When a pump-room temperature exceeds its specified upper limit, an alarm sounds in the Control Room (UFSAR §9.4.2.3). Auxiliary Building exhaust air filtration system testing is contained in the Salem Technical Requirements Manual (UFSAR §9.4.2.4).

**Exam & operating coverage:**

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
21 ABV Exhaust Fan stops (breaker 2AX1AX12X tripped open) — <span class="hi-exam">unexpected AIR FLOW LO alarm</span>. Per OP-SA-108-106-1001 the breaker trip cause must be investigated before reclosure (the tripped fan will not restart). Crew places the alternate <span class="hi-exam">23 ABV Exhaust Fan</span> in service IAW S2.OP-SO.ABV-0001 and CRS enters <span class="hi-exam">LCO 3.7.7 (14 day action time)</span> for less than the full complement of Aux Building Ventilation fans.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
22 ABV Exhaust Fan discharge damper (2ABV14) fails closed causing <span class="hi-exam">low air flow console alarm</span>. Breaker verified closed — damper is the failure. CRS determines exhaust flow cannot be restored, directs starting standby <span class="hi-exam">23 ABV Exhaust Fan</span> IAW S2.OP-SO.ABV-0001. Exhaust filter lineup verified: 21 HEPA (EMERG) and 23 HEPA (NORMAL) in proper lineup. CRS enters <span class="hi-exam">TS 3.7.7 Action a (14 day LCO)</span>.
</div>

## Connections

- Related scenarios: [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]], [[2015 Scenario 2]]
- Related exam: [[2020 NRC Operating Exam]], [[2015 NRC Operating Exam]]
