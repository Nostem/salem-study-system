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

**Exam & operating coverage:**

### Thermal barrier & RCP protection

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q34</div>
Thermal barrier HX leak alarm pattern: CC HDR ACTIVITY HI + SURGE TANK LEVEL HI-LO + <span class="hi-exam">DISCHARGE FLOW LO = unique signature of 2CC131 automatic closure</span>. The DISCHARGE FLOW HI alarm fires first (RCS in-leakage increases CCW flow), auto-closes 2CC131, then DISCHARGE FLOW LO follows. The Hi alarm was acknowledged and is presently clear. <span class="hi-trap">Letdown HX leak would show activity and level alarms but NOT the Discharge Flow Lo pattern — no auto-isolation valve on the letdown HX CCW line.</span>
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
<div class="callout-label">Exam — 2023 Q4</div>
Thermal barrier rupture indications: R17 A/B CCW radiation monitors in warning, CCW surge tank level rising, CC131 thermal barrier valve closes on high CCW flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q95</div>
Per S2.OP-AB.CC-0001 CAS items, the <span class="hi-exam">5-minute timer applies to the RCP BRG CLG WTR FLO LO alarm</span>: if the alarm is still valid after 5 minutes, perform Attachment 2 (Stopping Reactor Coolant Pumps). <span class="hi-trap">Trap: the 2-minute CAS timer applies only when RCP Seal Injection Flow AND RCP Thermal Barrier Component Cooling flow are lost concurrently — not for the BRG CLG WTR FLO LO alarm alone.</span> Per Attachment 2: if <span class="hi-exam">Reactor Trip Breakers are CLOSED, the crew MUST manually TRIP the Reactor prior to stopping the affected RCPs</span> — even if the plant is in MODE 3 with all rods fully inserted. <span class="hi-trap">Trap: candidates may think a manual trip is unnecessary because rods are already in, but the procedure requires it whenever RTBs are closed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q78</div>
Per Attachment 1, three RCP protection time limits on loss of CCW:<br>
1. Motor bearing temperature reaches <span class="hi-exam"><span class="val-trip">175°F</span> → stop RCPs</span> (calculate from initial temp + rate of rise)<br>
2. CCW Surge Tank Level cannot be maintained > <span class="val-trip">38%</span> → immediately stop RCPs<br>
3. <span class="hi-exam">5 minutes after "RCP BRG CLG WTR FLO LO" alarms (OHAs D-20 through D-23) → stop RCPs</span><br>
<span class="hi-trap">Trap: the 175°F limit is the EARLIEST action if bearing temp is rising fast. In the exam scenario: 140°F at T+0 rising at 5°F/min → 175°F at T+7 min. The low flow alarms at T+5 add another 5 min = T+10 min. The surge tank criterion (38%) was already recovered. So 175°F limit (1007) is the controlling action.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-g</div>
Alternate path (loss of all CCW): 22 CCW pump trips, the standby (23) CCW pump <span class="hi-exam">fails to auto-start and cannot be manually started</span>, then 21 CCW pump trips <span class="hi-exam">1 minute 30 seconds later</span> — a TOTAL LOSS of CCW to all RCPs. AB.CC-0001 (Step 3.40/3.41) directs starting available CC pumps to clear the 21/22 CC HDR PRESSURE LO alarms; with none available, the validated RCP conditions exist and the crew goes to Attachment 2, Stopping Reactor Coolant Pumps: <span class="hi-exam">IF RTBs CLOSED, TRIP the Reactor; STOP affected RCP(s)</span>; and because letdown CCW is lost, <span class="hi-exam">CLOSE 2CV2 AND 2CV277 (isolate letdown), OPEN 2SJ1 AND 2SJ2 (swap charging suction to RWST), CLOSE 2CV40 AND 2CV41 (isolate VCT)</span>, then GO TO EOP-TRIP-1. The "Stopping Reactor Coolant Pumps" attachment is identical to the one in AB.RCP-0001. See [[CCW]], [[AB.RCP-0001 — RCP Abnormality]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 Sim-h</div>
Alternate path JPM: CCW leak inside containment progresses beyond makeup capability. Operator enters AB.CC-0001, opens <span class="hi-exam">2DR107 for CCW Surge Tank makeup</span>, progresses through leak isolation steps (close <span class="hi-exam">2CC113 Exc LHX Outlet</span>). At step 3.24, when CCW Surge Tank level cannot be maintained >5%: transition to <span class="hi-exam">Attachment 2 — Stop RCPs and Isolate CCW to CNTMT</span>. Attachment 2 actions: trip reactor, stop ALL RCPs, close <span class="hi-exam">2CC131 (RCP Therm Bar), 2CC136 (RCP CLG OIL CLR Outlet), 2CC190</span> containment isolation valves, then GO TO EOP-TRIP-1.
</div>

### CCW surge tank & vent valve

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q38</div>
2CC149 (CCW Surge Tank Vent Valve) is <span class="hi-exam">normally OPEN and fails SHUT on a total loss of air</span> (and on loss of control power); it auto-shuts on high radiation from 2R17A and is automatic in all Modes. <span class="hi-trap">It does not fail open.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q86</div>
On a rising CC Surge Tank level: <span class="hi-exam">stop WHUT processing and direct a NEO to locally drain the Surge Tank (to a 55-gallon drum) to keep level &lt;100%</span> (overflow would contaminate the Waste Holdup System with chromates). The 2CC149 Vent Valve auto-closes on HIGH RADIATION, not high pressure. See [[CCW]], [[Waste Liquid]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q7</div>
Per Step 3.8 NOTE: <span class="hi-exam">"Allowing CCW Surge Tank to overflow will contaminate the in-service Waste Holdup Tank and the 22 ABV Exhaust Filter Unit."</span> 2CC149 (Surge Tank Vent Valve) <span class="hi-exam">automatically closes on 2R17A/B high radiation alarm</span>. 2CC149 is normally OPEN. <span class="hi-trap">CCW Surge Tank overflow contaminates two components — the Waste Holdup Tank AND the 22 ABV Exhaust Filter Unit. Missing the exhaust filter unit is a common error.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q8</div>
Confirms 2018 Q7: 2CC149 auto-closes on 2R17A/B high radiation alarm. Surge Tank overflow contaminates both the Waste Holdup Tank and the 22 ABV Exhaust Filter Unit.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q35</div>
Attachment 1: CCW surge tank level at <span class="hi-exam">5%</span> requires <span class="hi-exam">reactor trip, tripping ALL RCPs, isolating letdown, and swapping charging suction to RWST</span>.
</div>

### CCW leak diagnosis & isolation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q9</div>
Locating a CCW leak with ATTACHMENT 4 (Leak Isolation Method): if surge tank level continues to lower with <span class="hi-exam">EITHER CC header in service</span>, the leak must be on the <span class="hi-exam">Non-Safeguards header (supplied from both CC headers)</span>. Of components fed from both headers, the leaking component is the <span class="hi-exam">Spent Fuel Pool HX</span> — SFP cooling pressure is &lt; CCW pressure, so the leak is out of CCW into SFP cooling. <span class="hi-trap">The Boric Acid Evaporator Distillate Cooler HX is also on the non-safeguards header but is not normally in service; the 22 CCW HX and 23 Charging pump seal HX are on the safeguards header.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q54</div>
CCW leak location diagnosis using chemistry: per AB.CC-0001, <span class="hi-exam">"Any inleakage will dilute CC System Chromates and SW inleakage will increase Chloride concentration."</span> Key discriminator: <span class="hi-exam">rising chloride = Service Water inleakage → leak is in the CC Heat Exchanger</span> (where SW and CCW interface). All CCW inleakage sources cause surge tank level to rise and chromate to lower, but only the CC HX is cooled by SW. <span class="hi-trap">Trap: Seal Water HX, Letdown HX, and Charging Pump also interface with CCW, but none use SW — they would cause chromate dilution without chloride increase.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q59</div>
Per S1.OP-AB.CC-0001, components supplied by CCW with pressure less than CCW header pressure are sources for system-to-system out leakage (e.g., Spent Fuel Pool Heat Exchanger). <span class="hi-exam">A tube rupture in the SFP HX results in CCW leaking OUT into the SFP system</span>, causing CCW Surge Tank level to lower and SFP level to rise. The non-borated CCW water will reduce SFP boron concentration, requiring addition of borated water.
</div>

### CCW pump loss & restoration

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q35</div>
On a single CCW pump trip with the standby pump in AUTO and stopped, the standby pump will <span class="hi-exam">auto-start when 21 or 22 CCW header pressure lowers to <span class="val-alarm">70 psig</span></span>. AB.CC-0001 may be entered, but <span class="hi-exam">no AB.CC-0001 actions are required other than ensuring the backup pump started</span> — the system response is automatic.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q87</div>
CCW pump trips in MODE 5 (RCS at Water Elevation 103.5 feet): when 22 and 23 CCW Pumps trip causing CC Header Low Pressure alarms, the abnormal procedures network requires <span class="hi-exam">concurrent performance of AB.CC-0001 AND AB.RHR-0001</span> (not AB.RHR-0002). <span class="hi-trap">Trap: AB.RHR-0002 (Loss of RHR at Reduced Inventory) would apply only if RCS Water Elevation is 101 feet or less. At 103.5 feet the plant is NOT at reduced inventory, so AB.RHR-0001 applies.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-h</div>
Contrast with the loss-of-CCW response: when CCW is lost during a LOCA/LOOP and must be restored, EOP-APPX-1 (not AB.CC-0001) is the controlling procedure — it aligns SEC fans and sheds CCW-cooled loads (CFCUs, Aux Bldg/FHB exhaust fans) to fit a CCW pump within its EDG/SEC load margin. <span class="hi-exam">22 CCW pump fails to start, so the operator transfers to the 21 CCW pump alignment and starts 21 CCW</span>, then places both CCW HXs in service with ≥3 SW pumps running. See [[EOP-APPX-1 — Component Cooling Water Restoration]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #1</div>
23 CCW pump trips and the standby CCW pump <span class="hi-exam">fails to auto-start</span>. The crew <span class="hi-exam">manually starts 22 CCW pump</span> to restore system pressure, clearing all CCW and RCP system alarms, then validates that the alarms received were consistent with low CCW system pressure and verifies RCP CCW-cooled parameters. CRS enters the appropriate Tech Spec. See [[2014 Scenario 1]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #4</div>
22 CCW pump trips and the standby (23) CCW pump <span class="hi-exam">fails to auto-start</span>. The crew validates the CCW low-pressure alarms against ARP guidance and <span class="hi-exam">manually starts 23 CCW pump</span> to restore system pressure — all CCW alarms clear on restoration. AB.CC-0001 (and [[AB.RCP-0001 — RCP Abnormality]]) are referenced to verify entry is NOT required once RCP CCW-cooled parameters trend back to normal. CRS enters TSAS 3.7.3 for not having 2 operable CCW loops. See [[2015 Scenario 4]].
</div>

## Connections

- Related systems: [[CCW]], [[RCPs]], [[RHR]], [[Service Water]], [[Spent Fuel Pool]]
- Related abnormals: [[AB.RHR-0001 — Loss of RHR]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-APPX-1 — Component Cooling Water Restoration]]
- Related scenarios: [[2015 Scenario 4]], [[2014 Scenario 1]]
- Related exam questions: [[2014 Q9]], [[2016 Q35]], [[2018 Q7]], [[2018 Q54]], [[2018 Q95]], [[2019 Q8]], [[2019 Q87]], [[2020 Q34]], [[2020 Q78]], [[2022 Q5]], [[2022 Q8]], [[2022 Q35]], [[2023 Q4]], [[2023 Q59]], [[2015 Q86]], [[2012 Q38]]
- Related JPMs: [[2019 JPM Sim-h]], [[2015 JPM Sim-g]], [[2014 JPM Sim-h]]
- Related exam: [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]]
