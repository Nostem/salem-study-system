---
title: "S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste"
category: procedures
status: draft
aliases:
  - S2.OP-SO.WL-0001
---

# S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste

## Purpose

Provides direction for release of radioactive liquid waste from Unit 2 CVCS Monitor Tanks.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q72</div>
Direct release of 21 CVCS Monitor Tank to Circulating Water System per S2.OP-SO.WL-0001(Q): requires <span class="hi-exam">rotation of a potentially contaminated spectacle flange outside the RCA</span>, necessitating Radiation Protection support. Other evolutions (hydrogen recombiner, gas decay tank release, containment pressure relief) are controlled from the control room area and do NOT require RP support.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q68</div>
<span class="hi-exam">Loss of discharge flow (2FR1064 failing low) does NOT automatically close the 2WL51 overboard valve.</span> Loss of flow is not a design feature associated with the 2R18 process radiation monitor. Per ODCM Action 29 for an inoperable liquid radwaste effluent line flow recorder, <span class="hi-exam">the release may continue provided effluent flow is estimated once per 4 hours</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-k</div>
Section 5.5 — Release of 21 CVCS MT via SW to CW: flow control uses <span class="hi-exam">2WR59 (MT PMPS OB STOP VALVE, Gas Stripper Feed Pump Room, 64 ft. El.)</span> and <span class="hi-exam">21WR53 (MT RECIRC V, CVCS MT Room, 64 ft. El., ~7 ft. above floor)</span>. Caution: completely closing 21WR53 will NOT provide sufficient recirculation to protect the pump should 2WL51 isolate on high rad alarm. Step 5.5.8 records: <span class="hi-exam">2LIS-180 (tank level), tank volume from S2.OP-TM.ZZ-0002, dilution flow rate, 2FR1064 discharge flow, and 2R18 monitor reading</span>. Step 5.5.9: if 2R18 ALARMS, direct NCO to CLOSE 2WL51.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q90</div>
If 2R18 is inoperable (e.g., detector fails LOW), per steps 2.3, 3.4, and 3.5: <span class="hi-exam">2FR1064 must remain OPERABLE</span> — the release procedure prevents both R18 and FR1064 from being inoperable simultaneously. To continue the release with R18 inoperable: verify FR1064 OPERABLE <span class="hi-exam">AND</span> perform two independent samples, independent release calculations, and independent discharge valve lineups. <span class="hi-trap">Trap: ODCM 3.3.3.8 action b allows flow rate estimation if FR1064 alone is inoperable, but the release procedure is more restrictive — if R18 is inoperable, FR1064 MUST be operable.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q43</div>
21 CVCS MT release path is <span class="hi-exam">via SW to CW</span> (not SW only). Per Step 5.5.8, <span class="hi-exam">2FR1064 (RADWASTE OVERBOARD DISCH FLOW RECORDER) is required to be OPERABLE during the release</span>. If 2FR1064 becomes inoperable, the crew <span class="hi-exam">IS required to stop the release</span>. <span class="hi-trap">Trap: the candidate could confuse the 2FR1064 requirement with the 2R18 requirement — both instruments are required, but the actions differ. Loss of 2FR1064 requires stopping the release.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q99</div>
If 2R18 (Waste Disposal Liquid Rad Monitor) is inoperable (e.g., failed source check), the CRS <span class="hi-exam">CAN approve the release permit</span> provided <span class="hi-exam">a second sample was drawn, analyzed, and calculations were second verified prior to the release</span>. <span class="hi-trap">Trap: continuous effluent sampling during discharge is NOT the compensatory action — the second sample verification happens PRIOR to the release. Also, 2R18 does NOT have to be repaired before the release can proceed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q59</div>
2R18 ALARM setpoint per S2.IC-CC.RM-0028 is <span class="hi-exam">6.82E5 cps</span>, which automatically shuts <span class="hi-exam">2WL51 (Liquid Release Stop Valve)</span>. With a 2R18 reading of 10E6 cps (above setpoint) and 2WL51 indicating OPEN, the valve should have automatically shut. <span class="hi-exam">Per S2.OP-SO.WL-0001 Step 5.5.9, if 2R18 alarms the NEO informs the NCO to shut 2WL51 — the NCO closes the valve remotely from the control room. There is no provision in the procedure for closing the valve locally.</span> <span class="hi-trap">Trap: Closing 2WL51 locally (NEO action) is NOT authorized by the procedure; blocking the R-18 input on 2RP1 to continue the release is also NOT authorized — the alarm setpoint indicates a real high-rad condition.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 IP-k</div>
Release of 21 CVCS MT via SW to CW (Section 5.5): with <span class="hi-exam">Maximum Release Rate 45 gpm</span> (high curie content). Step 5.5.4: OPEN <span class="hi-exam">2WR59 (MT PMPS OB STOP VALVE)</span> in Gas Stripper Feed Pump Room. Step 5.5.6: THROTTLE <span class="hi-exam">21WR53 (MT RECIRC STOP VALVE)</span> to adjust discharge flow — closing 21WR53 diverts more flow to overboard path (raises discharge flow). Caution: completely closing 21WR53 provides insufficient recirculation if 2WL51 isolates on high rad. Step 5.5.8: initial data includes tank volume from S2.OP-TM.ZZ-0002 (<span class="hi-exam">19500 gal at 90%</span>), dilution flow = <span class="hi-exam">200000 gpm</span> (2 CW circulators). Step 5.5.9: <span class="hi-exam">2R18 alarms at 105 cpm → CLOSE 2WL51</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 IP-k</div>
Alternate-path Section 5.5 release of 21 CVCS MT via SW to CW (Rev 25; <span class="hi-exam">Maximum Release Rate 150 gpm</span>, 21 CVCS tank initial level 19600 gal): Step 5.5.2 direct NCO to OPEN 2WL51; Step 5.5.4 throttle open <span class="hi-exam">2WR59 (MT PMPS OB STOP VALVE)</span> toward the max rate; Step 5.5.6 — when the max rate can NOT be obtained, throttle CLOSED <span class="hi-exam">21WR53 (MT RECIRC V)</span> to raise discharge flow (reaches 55 gpm). Step 5.5.8 records dilution flow 200000 gpm and 2LIS-180 = 90%. <span class="hi-exam">Step 5.5.9 — during the release the 2R18 monitor ALARMS (~10⁵ counts, RED HI RAD light lit), so the operator must direct the NCO to CLOSE 2WL51 and terminate the release</span>, then notify the control room of the high-radiation condition.
</div>

## Connections

- Related systems: [[Waste Liquid]], [[Radiation Monitoring]]
- Related procedures: [[AB.RAD-0001 — Radiation Monitor Abnormality]], [[S2.IC-CC.RM-0028 — 2R18 Liquid Waste Disposal Process Radiation Monitor]]
- Related exam questions: [[2016 Q59]], [[2018 Q99]], [[2019 Q43]], [[2020 Q72]], [[2020 Q90]], [[2023 Q68]], [[2012 Q61]]
- Related JPMs: [[2018 JPM IP-k]], [[2022 JPM IP-k]], [[2014 JPM IP-k]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]]
