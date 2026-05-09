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

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q36</div>
2R9 (Fuel Storage Area Monitor) alarm response: <span class="hi-exam">BOTH Fuel Handling Area Exhaust Fans receive an auto start signal</span> (standby fan starts). <span class="hi-exam">21 HEPA ONLY Filter Unit ISOLATES</span> and <span class="hi-exam">22 HEPA PLUS CHAR filter unit automatically aligns</span> (charcoal filtration for iodine removal). After 2R9 alarm, both exhaust fans running, only the HEPA PLUS CHAR filter unit in service. <span class="hi-trap">Trap: believing both HEPA filter units remain in service — the HEPA ONLY unit isolates when the charcoal unit aligns. Also, 2R32A (Fuel Handling Crane area monitor) does NOT cause FHB ventilation to shift — only 2R5 and 2R9 cause the shift.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.9 — Refueling Operations|TS 3.9.12]]** — FHV operability requirements during irradiated fuel movement in the storage pool

## Inlet Damper Air Supply

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q80</div>
The <span class="hi-exam">FHB Supply Fan Inlet Damper is interlocked to open when its Supply Fan is started, and fails closed on loss of air</span>. Therefore, a tubing break causing total loss of air to the 21 FHB Supply Fan Inlet Damper makes the supply fan <span class="hi-exam">inoperable even though it remains running</span> — the air-driven damper has failed closed. Per LCO 3.9.12 (which requires 2 exhaust fans and 1 supply fan operable AND operating), FHV must be declared inoperable. With 2 exhaust fans still in service and no supply, <span class="hi-exam">building pressure will remain negative</span> — but operability fails on Part a (fans operable/operating) of the LCO regardless of D/P. Per LCO action: suspend all operations involving movement of fuel within the storage pool.
</div>

## Connections

- Related systems: [[Spent Fuel Pool]], [[Radiation Monitoring]], [[Control Air]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]]
- Related procedures: [[S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A]], [[S2.OP-IO.ZZ-0010 — Spent Fuel Pool Manipulations]]
- Related exam questions: [[2016 Q80]], [[2019 Q33]], [[2019 Q36]]
- Related exam: [[2016 NRC Written Exam]], [[2019 NRC Written Exam]]
