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

## Connections

- Related systems: [[Rx Vessel & Internals]], [[FHV]], [[Radiation Monitoring]]
- Related procedures: [[AB.FUEL-0001 — Fuel Handling Incident]], [[AB.FUEL-0002 — Loss of Refueling Cavity or SFP Level]], [[S2.OP-IO.ZZ-0007 — Cold Shutdown to Refueling]]
- Related tech specs: [[TS 3/4.9 — Refueling Operations]]
- Related exam questions: [[2018 Q34]], [[2019 Q33]], [[2019 Q68]], [[2020 Q23]], [[2020 Q82]], [[2020 Q94]], [[2022 Q62]]
- Related exam: [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
