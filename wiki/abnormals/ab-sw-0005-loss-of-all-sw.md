---
title: "AB.SW-0005 — Loss of All Service Water"
category: abnormals
status: draft
aliases:
  - AB.SW-0005
  - S2.OP-AB.SW-0005
  - loss of all service water
---

# AB.SW-0005 — Loss of All Service Water

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides immediate actions for responding to a complete loss of all service water flow, including reactor trip and RCP trip actions.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q90</div>
On loss of all SW flow, immediately <span class="hi-exam">trip the reactor and stop all RCPs</span> to limit heat input to the CCW system. <span class="hi-trap">Unit difference: on Unit 2, the 2A 4KV vital bus (which powers 21 and 22 SW Pumps) is different from Unit 1 power supply alignment. A 2A 4KV bus lockout loses both 21 and 22 SW Pumps — 22 SW Pump will NOT auto-start because it lost its power source.</span> With 23 SW Pump already tripped, all SW flow capability is lost.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q53</div>
AB.SW-0005 entry criteria: requires actual loss of ALL service water flow. <span class="hi-exam">A 1A 4KV Bus Differential on Unit 1 with #3 SW Bay already C/Ted does NOT cause a loss of all SW</span> because 15 and 16 SW Pumps (powered from 1A Bus) were already isolated for the bay outage. The 12 SW Pump auto-starts on C Bus to maintain flow. Correct procedure entry: AB.4KV-0001. <span class="hi-trap">Distractor: RCPs are stopped to limit heat input to the CCW system (not the RCS) in AB.SW-0005.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q92</div>
AB.SW-0005 directs the crew to <span class="hi-exam">Trip the Rx, confirm the trip, and stop RCPs to limit heat input to the CCW system</span>. <span class="hi-trap">The MT-trip-on-low-power action is wrong because tripping the MT when power is &lt;49% will not trip the Rx.</span> Charging-pump swap (place 23 Charging in service / remove 22 Charging) is an AB.SW-0005 action — NOT AB.SW-0001.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
Initiating Cue: 100% power, 21 charging pump in service, 23 charging pump aligned for Normal IAW SO.CVC-0002 §4.1, #2 SW Bay isolated for leak, all #4 Bay pumps running. RT-1 trips 24/25/26 SW pumps simultaneously — total loss of all SW. <span class="hi-exam">Required AB.SW-0005 critical actions: (1) Trip the Rx and confirm Rx trip; (2) Stop all RCPs; (3) Isolate letdown by closing 2CV3/2CV4/2CV5 (the orifice isolation valves); (4) Place 23 Charging Pump in service per Step 3.6 (set Speed Demand to 10–12% before start, increase to ~20% to couple, then stop 21 and 22 Centrifugal Charging Pumps); (5) Place 2CC131 (RCP THERMAL BARRIER) in MANUAL; (6) Reduce operating CCW pumps to one</span>. <span class="hi-trap">The reactor trip and RCP stop are taken to limit heat input to the CCW system because there is no SW available to cool CCW. The applicant may enter AB.SW-0005 directly OR enter AB.SW-0001 first via the OHA B-13/B-14 ARP path which terminates back at AB.SW-0005 Step 3.8.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q82</div>
With #4 SW Bay already isolated for a 25SW3 leak and only 21 and 23 SW pumps running, a 2A EDG output-breaker trip (Bus Differential) followed by the 23 SW pump tripping on overcurrent at runout leaves no SW pumps running — a loss of ALL service water. The CRS <span class="hi-exam">enters AB.SW-0005: trip the Rx, confirm the trip, and stop RCPs to limit heat input to the CCW system and preserve the RCP seal packages</span>. <span class="hi-trap">AB.SW-0001 (Loss of SW Header Pressure) does not perform these actions, and entering AB.TRB-0001 after AB.SW-0005 is wrong because the Rx is already tripped in AB.SW-0005. AB.SW-0005 must be entered BEFORE exiting the TRIP series — not after exiting TRIP-2.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q78</div>
AB.SW-0005 (Loss of All Service Water) has a CAS: <span class="hi-exam">if RHR is in service, GO TO AB.RHR-1 or AB.RHR-2 depending on RPV level</span>. With RPV level &lt;97.5' (Mode 5), the FIRST action in AB.RHR-0002 is to STOP the in-service RHR pump. See [[RHR]], [[AB.RHR-0002 — Loss of RHR at Reduced Inventory]].
</div>

## Connections

- Related systems: [[Service Water]], [[EDGs]], [[4KV]], [[CCW]], [[CVCS]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[S2.OP-SO.CVC-0002 — Charging Pump Operation]]
- Related exam questions: [[2016 Q92]], [[2020 Q53]], [[2022 Q90]], [[2015 Q78]], [[2012 Q82]]
- Related JPMs: [[2016 JPM Sim-e]]
- Related exam: [[2016 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Written Exam]]
