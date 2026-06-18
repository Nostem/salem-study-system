---
title: Condenser Air Removal
category: systems
status: draft
aliases:
  - vacuum
  - air ejectors
---

# Condenser Air Removal

## Function & Design Basis

The Condenser Air Removal and Primary System (Main Condenser Evacuation System) removes non-condensable gases from the main condensers to draw and maintain condenser vacuum, and provides vacuum to the circulating-water waterbox priming tanks (UFSAR §10.4.2). The system is shown on Plant Drawing 205208 (UFSAR §10.4.2). There are eight rotary-type vacuum pumps provided, four for each unit: three pumps per unit (12, 13 & 14 for Unit 1; 22, 24 & 25 for Unit 2) are used for condenser vacuum, and one pump per unit (11 for Unit 1; 23 for Unit 2) is used for waterbox priming tank vacuum (UFSAR §10.4.2).

Air and other noncondensable gases removed from the condensers are continuously analyzed by a radiation monitor located in the pump discharge piping prior to release into the atmosphere (UFSAR §10.4.2, §11). Nonradioactive effluent is routed to the plant vent alongside each containment dome for release at an elevated point (UFSAR §10.4.2). The postulated release of gaseous activity through the Condenser Air Removal System is tabulated in (UFSAR Table 10.4-6).

## Key Components

- **Condenser vacuum pumps:** Eight rotary-type, four per unit; three per unit (12/13/14 and 22/24/25) draw condenser vacuum and one per unit (11/23) serves the waterbox priming tank (UFSAR §10.4.2). They are of the centrifugal displacement type, employing a rotating ring of water to form a seal between the elliptically shaped casing and the curved radial-bladed rotor; centrifugal force causes the water to follow the contour of the casing, changing the volume of the air space at the stationary suction and discharge ports to pump air (UFSAR §10.4.2). Each condenser vacuum pump has an individual holding capacity of <span class="hi">15 scfm</span> of free dry air at a suction pressure of <span class="hi">1 in. Hg absolute</span> (UFSAR §10.4.2).
- **Air ejector (primary stage):** Each condenser vacuum pump suction line is valved to permit automatic changeover from a direct tie to the condenser to a tie having an air ejector, which serves as the primary stage when an absolute pressure of less than <span class="hi">5 in. Hg absolute</span> is realized; the air ejector uses atmospheric air as the motive fluid (UFSAR §10.4.2). The waterbox priming tank vacuum pump (No. 11/23) is a single-stage pump which does not require an air ejector (UFSAR §10.4.2).
- **Seal water system:** Each vacuum pump is provided with a seal water pump which circulates water to the vacuum pump from the separator tank via a seal water cooler; the cooling water for the seal water cooler is supplied by the Demineralized Water System (UFSAR §10.4.2). Seal water cooling minimizes flashing of the pump seal. The seal water heat exchanger supplied with each vacuum pump utilizes stainless steel tubes and tube sheets (UFSAR §10.4.2). Seal water makeup is provided by the Demineralized Water System by means of a float control valve (UFSAR §10.4.2).
- **Common discharge header:** Exhausted air from each vacuum pump separating tank discharges to a common header and then to atmosphere via the plant vent; the flow is measured at the common header (UFSAR §10.4.2). The common discharge header is provided with radiation monitoring instrumentation to alarm in the Control Room if radioactivity is sensed at the vacuum pump discharge (UFSAR §10.4.2).

## Automatic Features & Setpoints

Each condenser vacuum pump suction line is valved to permit automatic changeover from a direct tie to the condenser to a tie having an air ejector, which acts as the primary stage when an absolute pressure of less than <span class="hi">5 in. Hg absolute</span> is realized (UFSAR §10.4.2). Each condenser vacuum pump's hogging capacity is <span class="hi">1500 scfm</span> at <span class="hi">15 in. Hg absolute</span> (UFSAR §10.4.2).

## Interconnections & Loads

Each vacuum pump requires <span class="hi">144 gpm</span> of seal water cooling, which is furnished by the Turbine Auxiliaries Cooling System (UFSAR §10.4.2). Seal water makeup is provided by the Demineralized Water System by means of a float control valve, and the cooling water for the seal water cooler is also supplied by the Demineralized Water System (UFSAR §10.4.2). The system maintains condenser vacuum for the main condensers and provides vacuum to the circulating-water waterbox priming tanks (UFSAR §10.4.2). The condenser air removal gas monitors are described in (UFSAR §11.2.3.1) and can be checked for proper operation by means of a check source (UFSAR §10.4.2).

## Effects of Loss / Malfunction

The sealing water temperature affects the capacity of the vacuum pump: as the temperature increases, there is a reduction in vacuum pump capacity, so it is essential that the cooler be kept clean on both the tube side and water side, with the total temperature difference kept at less than <span class="hi">15°F</span> (UFSAR §10.4.2).

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q36</div>
<span class="hi-exam">Excessively high Vacuum Pump Seal Water Temperature can cause Main Condenser vacuum to degrade</span> — as seal water temperature increases, vacuum pump performance decreases. <span class="hi-trap">Excessively LOW TAC supply temperature, excessively HIGH seal water flow, and separating tank overflow all cause seal water temperature to LOWER, which would actually IMPROVE condenser vacuum (not degrade it).</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #2</div>
During the weekly vacuum pump swap, the air injection suction isolation valve <span class="hi-exam">AR25 on the pump being secured fails open</span>, degrading condenser vacuum. The crew restores vacuum by isolating the affected AR25 and <span class="hi-exam">starting the remaining vacuum pump</span> (the affected pump will not re-start). A subsequent vital-bus loss and steam dump failure later drive a reactor trip.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
24 Vacuum pump trips and its discharge valve <span class="hi-exam">24AR25 fails to auto close</span>, leaving an open air path that prevents recovering condenser vacuum. None of the standby vacuum pumps restore vacuum; condenser backpressure slowly rises, driving the crew into AB.COND-0001 and a power reduction. Demonstrates that a failed-open AR25 (vacuum breaker / pump discharge valve) defeats vacuum recovery even with all available vacuum pumps running.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #1</div>
Event 2: <span class="hi-exam">24 Vacuum Pump trips</span> during load reduction. PO enters AB.COND-0001. PO starts all available vacuum pumps — <span class="hi-exam">22 Vacuum Pump trips after starting</span>, 25 Vacuum Pump starts but <span class="hi-exam">25AR25 (vacuum pump discharge AOV) fails to open</span>. PO manually opens 25AR25 from the control room. Condenser backpressure recovers.
</div>

## Control-Room Operation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q63</div>
When swapping condenser vacuum pumps per S2.OP-SO.AR-0001: if the <span class="hi-exam">AR25 (Air Ejector Suction Isolation Valve) remains OPEN</span> when a vacuum pump is stopped, <span class="hi-exam">condenser backpressure rises</span> (loss of condenser vacuum). Per the procedural caution, contingency plans include <span class="hi-exam">restarting the vacuum pump OR immediately manually closing the AR23/AR25 valve</span>. <span class="hi-trap">Backpressure rising = vacuum lowering. These are the same condition described differently. A rising backpressure means worsening condenser vacuum, not improving it.</span>
</div>

## Connections

- Related systems: [[Main Turbine]]
- Related procedures: [[AB.COND-0001 — Loss of Condenser Vacuum]], [[S2.OP-SO.AR-0001 — Condenser Air Removal System Operation]]
- Related exam questions: [[2018 Q36]], [[2019 Q92]], [[2020 Q63]]
- Related scenarios: [[2019 Scenario 3 — ATWS / Stuck-Open PORV]], [[2022 Scenario 1 — Load Reduction / LBLOCA]], [[2015 Scenario 3]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Operating Exam]]
