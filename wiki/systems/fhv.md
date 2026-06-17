---
title: FHV
category: systems
status: draft
aliases:
  - fuel handling ventilation
---

# FHV

## Function

Provides ventilation and filtration for the fuel handling building during fuel movement and storage operations.

## Key Components

- **Exhaust Fans:** 21 and 22 Fuel Handling Area Exhaust Fans (one normally in service, one in standby)
- **Filter Units:** 21 HEPA ONLY Filter Unit and 22 HEPA PLUS CHAR (charcoal) Filter Unit

## Automatic Response to High Radiation

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

## Tech Spec LCOs

- **[[TS 3/4.9 — Refueling Operations|TS 3.9.12]]** — FHV operability requirements during irradiated fuel movement in the storage pool

## Inlet Damper Air Supply

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q80</div>
The <span class="hi-exam">FHB Supply Fan Inlet Damper is interlocked to open when its Supply Fan is started, and fails closed on loss of air</span>. Therefore, a tubing break causing total loss of air to the 21 FHB Supply Fan Inlet Damper makes the supply fan <span class="hi-exam">inoperable even though it remains running</span> — the air-driven damper has failed closed. Per LCO 3.9.12 (which requires 2 exhaust fans and 1 supply fan operable AND operating), FHV must be declared inoperable. With 2 exhaust fans still in service and no supply, <span class="hi-exam">building pressure will remain negative</span> — but operability fails on Part a (fans operable/operating) of the LCO regardless of D/P. Per LCO action: suspend all operations involving movement of fuel within the storage pool.
</div>

## FHB Truck Bay Door During Fuel Movement

**Exam & operating coverage:**

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A1-2</div>
SRO must recognize that <span class="hi-exam">FHB Truck Bay Door is required to be CLOSED during irradiated fuel movement</span> (per S2.OP-IO.ZZ-0010 page 19). Opening the Truck Bay Door for new fuel receipt while irradiated fuel movement is in progress would breach the FHB ventilation boundary that the dose analysis credits — new fuel deliveries must wait until fuel movement terminates.
</div>

## Connections

- Related systems: [[Spent Fuel Pool]], [[Radiation Monitoring]], [[Control Air]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]]
- Related procedures: [[S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A]], [[S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations]], [[AB.FUEL-0001 — Fuel Handling Incident]]
- Related exam questions: [[2016 Q80]], [[2016 Q88]], [[2019 Q33]], [[2019 Q36]], [[2015 Q73]], [[2012 Q90]]
- Related JPMs: [[2016 JPM SRO-A1-2]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2015 NRC Written Exam]], [[2012 NRC Written Exam]]
