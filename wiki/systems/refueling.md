---
title: Refueling
category: systems
status: draft
aliases:
  - refueling operations
---

# Refueling

## Function

Covers refueling operations including fuel movement, cavity flooding, and mode transitions for refueling.

## Fuel Handling Crane Interlocks

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q23</div>
2R32A (Fuel Handling Crane area radiation monitor) alarm/failure to alarm setpoint: <span class="hi-exam">ONLY crane hoist-up operation is prevented</span>. Lowering is still allowed to return the assembly to the spent fuel location for increased water shielding. <span class="hi-trap">No BYP INT pushbutton exists. Crane trolley operation is NOT affected. 2R5 and 2R9 (FHB area rad monitors) swap FHB exhaust to HEPA plus Charcoal but do NOT interlock the crane.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q62</div>
Overload Cutoff prevents crane travel with loads in excess of <span class="hi-exam">2200 pounds</span> over the fuel assemblies. Slack Cable interlock only prevents downward motion of the hoist.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q82</div>
Fuel handling incident during core reload (containment): per AB.FUEL-0001, a fuel assembly in the mast tube approaching the core is placed <span class="hi-exam">into the core in its designated location or the emergency location P-10, whichever is closer</span>. <span class="hi-trap">Emergency safe locations differ by building: P-10 = containment, X-3 = Fuel Handling Building.</span>
</div>

## MODE 6 Entry Requirements

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q94</div>
Per IOP-7, before de-tensioning the first Rx Head Stud (entering MODE 6):<br>
• <span class="hi-exam">Two source range neutron detectors OPERABLE</span> (NIS source range or Gamma-Metrics) — TS 3.9.2.2<br>
• <span class="hi-exam">Unborated water source isolation valves verified secured closed</span> — TS 3.9.2.1 (completion of S2.OP-ST.ZZ-0007(Q))<br>
<span class="hi-trap">168 hours subcritical (TS 3.9.3) and continuous CR-refuel-floor communications are NOT required for de-tensioning — the former applies to irradiated fuel movement, the latter to core alterations.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q34</div>
Fuel Transfer Cart interlocks: two conditions must be met for cart movement — <span class="hi-exam">upender must be in the horizontal position AND the Fuel Transfer Tube Gate Valve must indicate open (via the open limit switch)</span>. With a failed limit switch (no open indication), the cart can be moved <span class="hi-exam">MANUALLY ONLY (not electrically)</span>. The Fuel Transfer Tube Gate Valve <span class="hi-exam">can NOT be fully closed with the cart in the Fuel Handling Building</span> — the cart must be inside containment. <span class="hi-trap">Administrative verification that the gate valve is open does NOT satisfy the electrical interlock. If the limit switch fails, the electrical interlock prevents electrical cart movement even though the valve is physically open.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q68</div>
Canal gate valve mechanical interlock: the valve can ONLY be <span class="hi-exam">FULLY closed when the fuel transfer cart is inside containment</span>. Per AB.FUEL-0001, the canal gate valve will be closed during any fuel handling incident. <span class="hi-trap">The interlock requires the cart to be inside containment — not in the Fuel Handling Building — for the valve to fully close.</span>
</div>

## Conditions Requiring Suspension of Fuel Movement

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q68</div>
Per SO.CAV P&L 3.6.3 and TS Bases 3/4.7.6: <span class="hi-exam">when CAV is aligned to FIRE OUTSIDE CONTROL AREA (Recirculation Mode), Core Alterations and movement of irradiated fuel are NOT permitted</span> — pressing the Fire Outside Control Room (FOCR) pushbutton on Unit 2 CAV requires immediate suspension of fuel movement. <span class="hi-trap">Conditions that do NOT require suspension: (1) Rx Cavity boron of <span class="val-normal">2499 ppm</span> is OK because the COLR limit is <span class="hi-exam">2139 ppm</span>; (2) BOTH 100' elevation containment airlock doors open is OK — they are only required to be CAPABLE of being shut (S2.OP-ST.CAN-0007 p8); (3) Containment Radiation Monitor 2R12A failure causing CVI is OK because Containment Radiation monitors are NOT required to be operable for Mode 6 / Fuel Movement / Core Alts per Tech Specs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q29</div>
Filling the refueling cavity from the RWST (S2.OP-SO.SF-0003): the cavity at <span class="hi-exam">110' holds ~112000 gallons</span>; the RWST normal pre-refuel minimum is <span class="hi-exam">40.5' (364500 gal)</span>, draining to ~253000 gal ≈ 27.5'. See [[S2.OP-SO.SF-0003 — Filling the Refueling Cavity]], [[S2.OP-SO.SF-0004 — Draining the Refueling Cavity]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q67</div>
In Mode 6, <span class="hi-exam">commencing Core Alterations requires 2 Source Range NIs operable (LCO 3.9.2)</span> — one inoperable SR NI prevents core alterations. (Other LCOs are less restrictive: only 80 hours subcriticality required Oct 15–May 15 per 3.9.3.a; one airlock door per airlock need only be capable of being closed per 3.9.4.b; only one RHR loop need be in service per 3.9.8.1.) See [[Excore NIs]], [[TS 3/4.9 — Refueling Operations]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q95</div>
Prerequisites BEFORE Rx Vessel Head detensioning (S2.OP-IO.ZZ-0007): <span class="hi-exam">the RCS drained to &lt;104' elevation, and Unit CRS AND SM approval</span>. <span class="hi-trap">168-hour subcriticality (Oct 15–May 15) and direct/continuous control-room↔refuel-floor communication are CORE ALTERATION requirements (TSAS 3.9.3) — detensioning the head is NOT a core alteration.</span> See [[S2.OP-IO.ZZ-0007 — Cold Shutdown to Refueling]], [[TS 3/4.9 — Refueling Operations]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q96</div>
During fuel movement into the reactor, <span class="hi-exam">a loss of Control Air to containment precludes core alterations — the manipulator crane is air-powered for gripping</span>. SRNIs must both be operable (VISUAL, with ONE AUDIBLE); only one RHR loop need be in operation in Mode 6. See [[Control Air]], [[S2.OP-SO.SF-0009 — Refueling Operations]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 SRO-A1-2</div>
Direct Actions for Spent Fuel Movement (S2.OP-IO.ZZ-0010): of the scheduled work, only the <span class="hi-exam">New Fuel delivery requires suspending fuel movement</span> because it requires opening the Truck Bay door to the Fuel Handling Building (IOP-10 p.17 requires it closed during fuel movement — a ventilation boundary). The 22 SW pump, 2A EDG surveillance, and 21 Chiller oil change do NOT require suspension (TSAS 3.8.1.2 requires only one EDG; single SW pump out does not enter TS; TSAS 3.7.10 allows chiller removal with a 14-day window).
</div>

## Connections

- Related systems: [[Rx Vessel & Internals]], [[FHV]], [[Radiation Monitoring]]
- Related procedures: [[AB.FUEL-0001 — Fuel Handling Incident]], [[AB.FUEL-0002 — Loss of Refueling Cavity or SFP Level]], [[S2.OP-IO.ZZ-0007 — Cold Shutdown to Refueling]], [[S2.OP-ST.CAN-0007 — Refueling Operations Containment Closure]], [[S1.OP-SO.CAV-0001 — Control Room Ventilation Operation]], [[S2.OP-SO.SF-0003 — Filling the Refueling Cavity]], [[S2.OP-SO.SF-0004 — Draining the Refueling Cavity]], [[S2.OP-SO.SF-0009 — Refueling Operations]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]], [[TS 3/4.7 — Plant Systems]]
- Related exam questions: [[2016 Q47]], [[2016 Q68]], [[2016 Q88]], [[2018 Q34]], [[2019 Q33]], [[2019 Q68]], [[2020 Q23]], [[2020 Q82]], [[2020 Q94]], [[2022 Q62]], [[2015 Q29]], [[2015 Q67]], [[2015 Q95]], [[2015 Q96]], [[2014 Q80]], [[2012 Q90]], [[2012 Q95]], [[2012 Q98]]
- Related JPMs: [[2012 JPM SRO-A1-2]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
