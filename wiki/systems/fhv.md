---
title: FHV
category: systems
status: draft
aliases:
  - fuel handling ventilation
---

# FHV

## Function & Design Basis

The Fuel Handling Area Ventilation System is a once-through filtered air system that continuously ventilates the normal operating areas of the fuel handling building — fuel pools, decontamination pit, electrical equipment room and sump tunnel (UFSAR §9.4.3.2.1). The fuel handling area is a structure separate from other unit structures and is provided with its own ventilation system (UFSAR §9.4.3.2.1).

The system is designed to exhaust the spent fuel pool area at <span class="val-normal">60 air changes an hour</span> within a 10-foot height above the pool during design conditions for spent fuel storage (UFSAR §9.4.3.1). Of the system operating capacity of <span class="val-normal">20000 cfm</span>, <span class="val-normal">15000 cfm</span> is exhausted from the spent fuel pool area (10000 of which is extracted right at the pool surface) and the remaining 5000 cfm ventilates other parts of the building (UFSAR §9.4.3.1).

Because of the potential for radioactive releases from the spent fuel, defective fuel cladding or a fuel handling mishap, the building is maintained at a <span class="hi">slight negative pressure to assure inleakage of air rather than outleakage</span> (UFSAR §9.4.3.1). The total capacity of the Ventilation System, along with the area space heaters, is designed to maintain the building between <span class="val-normal">60°F and 105°F</span>; the space heaters are not safety-related, do not receive Class 1E power, and would not be available during a loss of offsite power. An evaluation of the building has justified a minimum temperature of <span class="val-normal">40°F</span> (UFSAR §9.4.3.1, §9.4.3.2.2). Relative humidity under design conditions is expected to be less than 70 percent (UFSAR §9.4.3.1).

The exhaust filter units, fans and controls — and the discharge ductwork from the fuel handling area to the plant vent — are designed to <span class="hi">Class I (seismic)</span> criteria (UFSAR §9.4.3.1). The exhaust ductwork and exhaust fan-filter units leading from the fuel handling structure to the plant vent are seismic Class I design; exposed ductwork along the walls within the structure is seismic Class II; the supply air unit, located below the fuel handling operating floor, is of non-seismic standard construction (UFSAR §9.4.3.3).

## Key Components

The Ventilation System consists of the following equipment (UFSAR §9.4.3.2.1):

- **Supply air unit:** One 100-percent capacity supply air unit with particulate filters at about 80-percent cleaning efficiency and a heating coil for winter-time tempering of the supply air (UFSAR §9.4.3.2.1). Operates at a constant volume (UFSAR §9.4.3.2.2). At Salem these are the FHB Supply Fans.
- **Exhaust Fans:** Two 50-percent capacity exhaust fans (UFSAR §9.4.3.2.1) — the 21 and 22 Fuel Handling Area Exhaust Fans.
- **Filter Units:** One 100-percent capacity HEPA filter exhaust unit (the 21 HEPA ONLY Filter Unit) and one 100-percent capacity HEPA and charcoal filter exhaust unit available for standby (the 22 HEPA PLUS CHAR Filter Unit) (UFSAR §9.4.3.2.1). The exhaust portion includes one filtration unit containing only roughing and HEPA filters, and one filtration unit containing roughing, HEPA filters, and carbon absorbers (UFSAR §9.4.3.3).
- **Controls and instrumentation; distribution ductwork; pressure relief damper** (UFSAR §9.4.3.2.1). A gravity pressure relief damper and a manual volume damper are provided in the exterior wall of the shipping bay (UFSAR §9.4.3.3).

Air is distributed with overhead ducts for supply and exhaust, as well as embedded exhaust ducts around the spent fuel pool (UFSAR §9.4.3.2.1). Two-thirds of the spent-fuel-pool exhaust takes place just inches above the pool water through numerous high velocity (<span class="val-normal">2000 fpm</span>) exhaust ports spaced around the pool periphery, which vacuum the surface of the pool and effect early capture of pool emissions (UFSAR §9.4.3.3).

## Power Supplies

The supply air equipment is served by the <span class="hi">Normal AC Power System only</span>, whereas the exhaust air equipment can be energized from the <span class="hi">Standby AC Power System in the event of a loss of offsite power</span> (UFSAR §9.4.3.1). The space heaters are not safety-related and do not receive Class 1E power (UFSAR §9.4.3.1).

## Automatic Features & Setpoints

Normally the supply air unit, both exhaust fans and the HEPA exhaust filter unit operate continuously. Exhaust air is varied through inlet guide vanes on each exhaust fan, which are controlled by a differential pressure controller to maintain a negative pressure of approximately <span class="val-normal">0.125 inch water gage</span> in the building (UFSAR §9.4.3.2.2).

If the inside building temperature decreases to the minimum <span class="val-normal">60°F</span>, the heating coil and controls at the supply air unit are energized and, together with the area space heaters, maintain the building at or greater than 60°F even if the supply air inlet temperature decreases to the minimum outside 0°F temperature (UFSAR §9.4.3.2.2).

In the event that a local radiation monitor detects excessive radioactivity in the building and alarms in the Control Room, the operator can divert the building effluent from the HEPA exhaust unit to the standby HEPA and charcoal exhaust unit. Also during the event, <span class="hi-exam">an automatic initiation of the exhaust fans will take place for Unit 2</span> (UFSAR §9.4.3.2.2). All exhaust effluent is diverted to the standby HEPA and charcoal exhaust unit in the event that radioactivity levels within the building become excessive (UFSAR §9.4.3.2.1).

Additional Control Room alarms signal adverse operating conditions: low or high supply air temperature, low air flow from the supply or exhaust fans, clogged HEPA filters, and insufficient negative pressure in the building (UFSAR §9.4.3.2.2).

### Automatic Realignment on High Area Radiation

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q73</div>
On a <span class="hi-exam">2R9 (New Fuel Storage) Area Radiation Monitor High Radiation Alarm, FHB ventilation realigns through the charcoal filters and both FHB Exhaust fans start</span>. See [[Radiation Monitoring]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q88</div>
2R5 (FHB SFP-area radiation monitor) alarm response: 2R5 alarm setpoint <span class="val-alarm">11 mR/hr</span> (warning <span class="val-alarm">7 mR/hr</span>) <span class="hi-exam">automatically swaps FHB exhaust ventilation to the Charcoal Filter and starts BOTH FHB Exhaust Fans</span>. Normal FHB lineup: single Supply Fan running, BOTH Exhaust Fans running. Per AB.FUEL-0001, the FHB Watertight Door is kept closed except for normal personnel passage during a fuel handling incident.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q36</div>
2R9 (Fuel Storage Area Monitor) alarm response: <span class="hi-exam">BOTH Fuel Handling Area Exhaust Fans receive an auto start signal</span> (standby fan starts). <span class="hi-exam">21 HEPA ONLY Filter Unit ISOLATES</span> and <span class="hi-exam">22 HEPA PLUS CHAR filter unit automatically aligns</span> (charcoal filtration for iodine removal). After 2R9 alarm, both exhaust fans running, only the HEPA PLUS CHAR filter unit in service. <span class="hi-trap">Trap: believing both HEPA filter units remain in service — the HEPA ONLY unit isolates when the charcoal unit aligns. Also, 2R32A (Fuel Handling Crane area monitor) does NOT cause FHB ventilation to shift — only 2R5 and 2R9 cause the shift.</span>
</div>

## Design Features & Interlocks

### Supply Fan Inlet Damper Interlock

The FHB supply fan inlet damper is air-operated and interlocked to its supply fan. Supply air may also enter through the pressure relief intake dampers at the truck bay when the supply fan is shutdown and only one exhaust fan is running (UFSAR §9.4.3.2.1).

### Filtration & Charcoal Filter Train Design

Efficient filtration of the supply air minimizes the inventory of airborne particulates within the building, reducing the rate of dirt buildup on the HEPA filter exhaust units and extending their useful life; the supply air filters can be replaced easily and safely, whereas the HEPA exhaust filters are potentially radioactive (UFSAR §9.4.3.3). The exhaust effluent path through the HEPA and charcoal filters is <span class="hi">not credited in the Fuel Handling Accident in the Fuel Handling Building</span> (UFSAR §9.4.3.2.1); the Fuel Handling Accident was analyzed without credit for filtration by the Fuel Handling Building Ventilation System (UFSAR §9.4.3.3). The charcoal filter train is normally at standby and is inspected and tested periodically for availability, especially prior to refueling (UFSAR §9.4.3.3).

### FHB Ventilation Boundary Integrity

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A1-2</div>
SRO must recognize that <span class="hi-exam">FHB Truck Bay Door is required to be CLOSED during irradiated fuel movement</span> (per S2.OP-IO.ZZ-0010 page 19). Opening the Truck Bay Door for new fuel receipt while irradiated fuel movement is in progress would breach the FHB ventilation boundary that the dose analysis credits — new fuel deliveries must wait until fuel movement terminates.
</div>

## Interconnections & Loads

Supply air enters the building at the cask storage area, flows through the building to the spent fuel pool area, and is exhausted to the unit vent where the total plant effluent is continually monitored for radioactivity (UFSAR §9.4.3.2.1). The system confines the heat, humidity and potential radioactivity in the building to the spent fuel pool area; seventy-five percent of the building exhaust occurs in that area (UFSAR §9.4.3.3). Local radiation monitors that detect excessive building radioactivity (the Radiation Monitoring System) provide the alarm and the divert/auto-start signals to the system (UFSAR §9.4.3.2.2) — see [[Radiation Monitoring]] and [[Spent Fuel Pool]].

## Effects of Loss / Malfunction

On a seismic disturbance or a fuel handling accident that causes the failure of non-Class I equipment, the primary function of the Ventilation System is still maintained: the seismic Class I portion of the exhaust system will continue to operate, creating a negative pressure within the structure, and pass the exhaust through HEPA and charcoal filters; radioactivity would be contained within the building (UFSAR §9.4.3.3).

### Loss of Air to Supply Fan Inlet Damper

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q80</div>
The <span class="hi-exam">FHB Supply Fan Inlet Damper is interlocked to open when its Supply Fan is started, and fails closed on loss of air</span>. Therefore, a tubing break causing total loss of air to the 21 FHB Supply Fan Inlet Damper makes the supply fan <span class="hi-exam">inoperable even though it remains running</span> — the air-driven damper has failed closed. Per LCO 3.9.12 (which requires 2 exhaust fans and 1 supply fan operable AND operating), FHV must be declared inoperable. With 2 exhaust fans still in service and no supply, <span class="hi-exam">building pressure will remain negative</span> — but operability fails on Part a (fans operable/operating) of the LCO regardless of D/P. Per LCO action: suspend all operations involving movement of fuel within the storage pool.
</div>

## Tech Spec LCOs

- **[[TS 3/4.9 — Refueling Operations|TS 3.9.12]]** — Fuel Handling Ventilation System OPERABLE with two exhaust fans and one supply fan operable and operating AND capable of maintaining slightly negative pressure in the FHB; applicable during movement of irradiated fuel within the storage pool; with FHV inoperable, immediately suspend all operations involving movement of fuel within the storage pool (TS 3/4.9.12). LCO 3.0.3 not applicable (TS 3/4.9.12).

## Connections

- Related systems: [[Spent Fuel Pool]], [[Radiation Monitoring]], [[Control Air]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]]
- Related procedures: [[S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A]], [[S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations]], [[AB.FUEL-0001 — Fuel Handling Incident]]
- Related exam questions: [[2016 Q80]], [[2016 Q88]], [[2019 Q33]], [[2019 Q36]], [[2015 Q73]], [[2012 Q90]]
- Related JPMs: [[2016 JPM SRO-A1-2]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2015 NRC Written Exam]], [[2012 NRC Written Exam]]
