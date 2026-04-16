---
title: "AB.CC-0001 — Loss of Component Cooling Water"
category: abnormals
status: draft
aliases:
  - AB.CC-0001
  - S2.OP-AB.CC-0001
  - S2.OP-AB.CC-0001 — Component Cooling Abnormality
  - loss of CCW
---

# AB.CC-0001 — Loss of Component Cooling Water

## Purpose

Provides operator actions for responding to a loss of Component Cooling Water, including identification of thermal barrier rupture and RCP protection.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q4</div>
Thermal barrier rupture indications: R17 A/B CCW radiation monitors in warning, CCW surge tank level rising, CC131 thermal barrier valve closes on high CCW flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q5</div>
<span class="hi-exam">1CC190 is on the COMMON CCW return line</span> — isolates ALL RCP thermal barriers. <span class="hi-trap">Individual RCP isolation is via CC130 valves, not 1CC190.</span> RCPs may continue running if charging flow is maintained.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q8</div>
Attachment 1 — RCP motor bearing temperature limit <span class="hi-exam">175°F</span> for reactor trip and stopping affected RCP. AB.RCP-0001 Attachment 1 also uses motor bearing temp > <span class="hi-exam">175°F</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q59</div>
Per S1.OP-AB.CC-0001, components supplied by CCW with pressure less than CCW header pressure are sources for system-to-system out leakage (e.g., Spent Fuel Pool Heat Exchanger). <span class="hi-exam">A tube rupture in the SFP HX results in CCW leaking OUT into the SFP system</span>, causing CCW Surge Tank level to lower and SFP level to rise. The non-borated CCW water will reduce SFP boron concentration, requiring addition of borated water.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q35</div>
Attachment 1: CCW surge tank level at <span class="hi-exam">5%</span> requires <span class="hi-exam">reactor trip, tripping ALL RCPs, isolating letdown, and swapping charging suction to RWST</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q34</div>
Thermal barrier HX leak alarm pattern: CC HDR ACTIVITY HI + SURGE TANK LEVEL HI-LO + <span class="hi-exam">DISCHARGE FLOW LO = unique signature of 2CC131 automatic closure</span>. The DISCHARGE FLOW HI alarm fires first (RCS in-leakage increases CCW flow), auto-closes 2CC131, then DISCHARGE FLOW LO follows. The Hi alarm was acknowledged and is presently clear. <span class="hi-trap">Letdown HX leak would show activity and level alarms but NOT the Discharge Flow Lo pattern — no auto-isolation valve on the letdown HX CCW line.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q78</div>
Per Attachment 1, three RCP protection time limits on loss of CCW:<br>
1. Motor bearing temperature reaches <span class="hi-exam"><span class="val-trip">175°F</span> → stop RCPs</span> (calculate from initial temp + rate of rise)<br>
2. CCW Surge Tank Level cannot be maintained > <span class="val-trip">38%</span> → immediately stop RCPs<br>
3. <span class="hi-exam">5 minutes after "RCP BRG CLG WTR FLO LO" alarms (OHAs D-20 through D-23) → stop RCPs</span><br>
<span class="hi-trap">Trap: the 175°F limit is the EARLIEST action if bearing temp is rising fast. In the exam scenario: 140°F at T+0 rising at 5°F/min → 175°F at T+7 min. The low flow alarms at T+5 add another 5 min = T+10 min. The surge tank criterion (38%) was already recovered. So 175°F limit (1007) is the controlling action.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q8</div>
Per Step 3.8 NOTE: <span class="hi-exam">"Allowing CCW Surge Tank to overflow will contaminate the in-service Waste Holdup Tank and the 22 ABV Exhaust Filter Unit."</span> 2CC149 (Surge Tank Vent Valve) <span class="hi-exam">automatically closes on 2R17A/B high radiation alarm</span>. <span class="hi-trap">CCW Surge Tank overflow contaminates two components — the Waste Holdup Tank AND the 22 ABV Exhaust Filter Unit. Missing the exhaust filter unit is a common error.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q87</div>
CCW pump trips in MODE 5 (RCS at Water Elevation 103.5 feet): when 22 and 23 CCW Pumps trip causing CC Header Low Pressure alarms, the abnormal procedures network requires <span class="hi-exam">concurrent performance of AB.CC-0001 AND AB.RHR-0001</span> (not AB.RHR-0002). <span class="hi-trap">Trap: AB.RHR-0002 (Loss of RHR at Reduced Inventory) would apply only if RCS Water Elevation is 101 feet or less. At 103.5 feet the plant is NOT at reduced inventory, so AB.RHR-0001 applies.</span>
</div>

## Connections

- Related systems: [[CCW]], [[RCPs]], [[RHR]]
- Related abnormals: [[AB.RHR-0001 — Loss of RHR]]
- Related exam questions: [[2019 Q8]], [[2019 Q87]], [[2020 Q34]], [[2020 Q78]], [[2022 Q5]], [[2022 Q8]], [[2022 Q35]], [[2023 Q4]], [[2023 Q59]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]]
