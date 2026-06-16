---
title: "AB.CN-0001 — Condensate System Abnormality"
category: abnormals
status: draft
aliases:
  - AB.CN-0001
  - S2.OP-AB.CN-0001
---

# AB.CN-0001 — Condensate System Abnormality

## Purpose

Provides operator actions for responding to condensate system abnormalities, including SGFP trips and condensate pump trips.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q17</div>
SGFP trip at 100% power — immediate actions per AB.CN-0001: <span class="hi-exam">initiate a MANUAL Main Turbine load reduction to a MAXIMUM of <span class="val-alarm">66%</span> Turbine Power at a rate less than or equal to a MAXIMUM of <span class="val-alarm">15%</span>/MIN</span>. <span class="hi-trap">50% is NOT the correct target (each SGFP does not provide exactly 50% flow). 30%/MIN is the stator cooling water loss automatic turbine runback rate, NOT the AB.CN-0001 manual load reduction rate.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q64</div>
On a SGFP trip: <span class="hi-exam">DEHC will automatically initiate a turbine runback at <span class="val-trip">200%</span> per minute to 66% power</span>. The 2CN47 (23/24/25 Heater String Bypass valve) will immediately open and the polisher will be bypassed. <span class="hi-trap">Manual turbine runback from the DEHC panel uses a different rate of 15% per minute. On a condensate pump trip, the 2CN47 only opens if SGFP suction pressure lowers to less than <span class="val-alarm">320 psig</span>; on a SGFP trip, the 2CN47 opens regardless of suction pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q45</div>
SG level vs BF19 response during condensate/feedwater abnormalities.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q65</div>
On a condensate pump trip with only one pump running, <span class="hi-exam">SGFP suction pressure lowers first</span> (before SG NR levels). The immediate required action is to <span class="hi-exam">open 21-23 CN108s (Polisher Bypass Valves)</span> to restore SGFP suction pressure and prevent loss of the feedpumps. <span class="hi-trap">Reducing load is also required (to 30% max), but bypassing the polishers takes priority over load reduction. The CN108s do NOT open automatically on a condensate pump trip. The load reduction rate is 5%/min (not 15%/min, which is the SGFP trip runback rate).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-e</div>
Loss of SGFP at >70% power (Step 2.3): auto turbine runback <span class="hi-exam">fails</span>. Operator must verify auto runback NOT occurring (SGFP RUNBACK OPERATE red light NOT lit), then manually initiate load reduction at DEHC panel: toggle from <span class="hi-exam">%/HR to %/MIN</span>, set ramp rate to <span class="hi-exam">15%/min</span>, setter to <span class="hi-exam">66%</span>, select GO. Also: rods fail to insert in AUTO during downpower — take rods to MANUAL and insert.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
21CN22 LP FWH inlet valve fails closed. OHA G-22 FW HTR IN VLV TRIP & LVL HI. CRS enters AB.CN-0001. CRS reviews Attachment 2 for load limitations — load reduction required to <span class="hi-exam">1098 MWe</span> (about 2-3% downpower). If SGFP suction pressure < <span class="hi-exam">320 psig</span>, PO takes CAS actions to open 21-23 CN108s (polisher bypass).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q93</div>
On a condensate pump trip at 100% power: per AB.CN-0001, <span class="hi-exam">open 21-23CN108 (Polisher Bypass Valves) if SGFP suction pressure is less than <span class="val-alarm">320 psig</span></span>. Per Attachment 2, <span class="hi-exam">reduce Reactor Power to a maximum of <span class="val-alarm">85%</span></span>. <span class="hi-trap">265 psig is the CN47 automatic control setpoint (maintains minimum SGFP suction pressure), NOT the procedural threshold for opening CN108s. 75% is the power level for starting the third condensate pump per IOP-4, not the load reduction limit.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
21 SGFP trips on high thrust bearing oil pressure at 2% power (first-out annunciator: thrust bearing oil pressure high, locked in, will not clear). CRS enters AB.CN-0001 — immediate actions not met. RO reduces reactor power to <4% by inserting control rods. AFW pumps fail to auto-start on low SG levels — crew manually starts 21 and 22 motor-driven AFW pumps.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
23 Condensate Pump trips. SGFP suction pressure less than <span class="hi-exam">320 psig</span> — PO opens 21-23 CN108s (Polisher Bypass Valves). CRS evaluates Att 2, Section 4.0 — determines <span class="hi-exam">load reduction to 85% at <=5%/min</span> required. Crew enters AB.LOAD-0001 for load reduction.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q57</div>
SGFP trip below P-10 (10% power) response: with reactor power at 8% (below P-10) and 11 SGFP tripped, per AB.CN-0001 Steps 3.2, 3.3, 3.14, 3.15, 3.16 and 3.17: <span class="hi-exam">REDUCE Reactor Power to less than 4%, then START 11 and 12 AFW Pumps</span>. <span class="hi-trap">Trap: a reactor trip is NOT required at 8% power with one SGFP trip — multiple CAS criteria exist for reactor trip but this scenario does not meet them. Also: starting 12 SGFP (instead of AFW) is incorrect — the procedure directs AFW pumps when power is below P-10.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2019 #4</div>
21 SGFP trips on turbine thrust bearing oil pressure high at ~88% power (Event 3). Main Turbine auto runback <span class="hi-exam">fails to actuate</span>. CRS directs immediate actions of AB.CN-0001. PO depresses <span class="hi-exam">GO PB on Digital EHC</span> to manually initiate turbine runback. RO initiates boration and inserts rods to restore Tavg to Tref. PO depresses 21 SGFP TURBINE TRIP bezel pushbutton and verifies AFP AUTO ARMED bezel lit. Crew stabilizes unit at ~66% with SG NR levels >44%.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q58</div>
SGFP trip at 90% power with ramp rates NOT preset: IAW AB.CN-0001 IMMEDIATE ACTIONS 2.3.1, <span class="hi-exam">"IF RAMP RATES are not preset for SGFP runback, THEN: ADJUST RAMP RATES for less than or equal to <span class="val-alarm">15%/MIN</span>."</span> This is the manual load reduction rate. <span class="hi-trap">Trap: plausible distractors are 20, 10, and 5 %/MIN — all close to the actual 15%/MIN procedural limit. Do not confuse with the 200%/MIN automatic DEHC runback rate (tested in 2023 Q64).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q78</div>
Condensate pump trip with polishing in service and SGFP suction pressure at 310 psig lowering: per Steps 3.20-3.22, the crew will <span class="hi-exam">FIRST open 21/22/23CN108 (Bypass Polisher Valves)</span> to restore SGFP suction pressure. 2CN47 (23/24/25 Heater Strings Bypass) is opened AFTER the CN108s. <span class="hi-trap">Trap: opening 2CN47 first is plausible because both actions address low SGFP suction pressure, but the procedure sequence requires CN108s before CN47.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q17</div>
After 21 SGFP trip at 100% MOL with no operator action and no Rx trip: the <span class="hi-exam">condensate polisher trouble alarm (OHA G-44, COND POL TRBL) is EXPECTED — it locks in due to the CN108s AND the CN109 being open at the same time</span>. AB.CN-0001 covers this expected polisher trouble condition. <span class="hi-trap">UNEXPECTED in this transient is RC PRESS DEVIATION hi (Console Alarm) — the +75 psig deviation setpoint corresponds to spray valves full open, but spray valves should be shut after the load-rejection insurge and large inward rod motion. RC LOOPS TAVG-TREF DEVIATION (rods driving in due to turbine runback to 65%) and OHA G-3 EHC SYS TRBL (Loss of Feed pump Runback alarm into EHC Control and Status computer) are also expected alarms.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2016 #2</div>
23 Condensate pump trip at 89.4% power, BOL. CRS enters AB.CN-0001. PO bypasses condensate polisher by opening <span class="hi-exam">21 thru 23 CN108</span> if SGFP suction pressure is &lt;<span class="hi-exam">320 psig</span>. CRS directs <span class="hi-exam">2CN47</span> opened if suction pressure remains &lt;320 psig; PO isolates letdown by closing 21-24BG4 and 21-24GB185 once 2CN47 is open. CRS directs power reduction to <span class="hi-exam">85% at ~5%/min</span> with 2 Condensate pumps and 3 Heater Drain pumps in service IAW Attachment 4, and enters AB.LOAD-0001 to perform the load reduction.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q89</div>
21 Condensate pump trip at 84% power with all CPs in service, NO HDPs running, polisher in service: <span class="hi-exam">Hotwell (21A Condenser) level RISES</span> with the cond pump O/S because condensing is still occurring with the pump not running. Per AB.CN-0001 Att 2 with 2 CPs running and no HDP, <span class="hi-exam">power reduction to <span class="val-alarm">65% or less</span> is required</span>. The <span class="hi-exam">21-23 CN108s (Polisher Bypass Valves) do NOT auto-open on low suction pressure — they are directed to be opened</span> when SGFP suction pressure lowers &lt;<span class="val-alarm">320 psig</span>, which it WILL based on initial power level and pump configuration. <span class="hi-trap">2CN47 (23/24/25 Heater Strings Bypass) only auto-opens on a SGFP trip, NOT on a Cond pump trip; in AB.CN, the CN47 is directed to open AFTER the CN108s, the opening of which is expected to restore suction pressure above the point that would require CN47 opening. The 30%-or-less power reduction in distractor B/D is wrong — 65% is the AB.CN-0001 Att 2 limit for this configuration.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q2</div>
A SGFP trip with 22 SG NR level lowering through 16% prompts the CRS to <span class="hi-exam">direct a manual reactor trip IAW AB.CN-0001</span>. If the manual trip order and execution take long enough for SG NR level to reach the <span class="val-trip">14% Lo-Lo auto trip setpoint</span>, both a manual and an auto trip signal may be generated — requiring SER review (Window F) to establish first-out and whether an ATWT occurred.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q54</div>
With all Condensate and Heater Drain Tank pumps in service at 85% power and the polisher in service, an 11 Condensate Pump trip causes <span class="hi-exam">SGFP suction pressure to lower</span> from the loss of condensate flow. <span class="hi-trap">The 11-13CN108 Polisher Bypass valves open on a SGFP trip — NOT on a condensate pump trip. The 1CN47 (13/14/15 Heater Strings Bypass) auto-opens at <span class="val-alarm">265 psig</span>, which is not reached. Per Q=m▲T, the reduced feed flow would cause feed temperature entering the SGs to RISE initially, not lower.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q81</div>
At 45% power, a 12 SG NR Channel IV fail-high with Channel I already out of service produces a 2/3 P-14 on 12 SG (NR &gt;67%), which <span class="hi-exam">trips the Main Turbine, trips both Main Feed pumps, and shuts the BF13s, BF19s, and BF40s (FW Isolation)</span>. The CRS enters AB.CN-0001, which <span class="hi-exam">directs a reactor trip when power is &gt;P-10 (10%) and a loss of both SGFPs has occurred</span>. <span class="hi-trap">The reactor does NOT auto-trip on the Main Turbine trip because power is &lt;P-9 (49%). AB.TRB-0001 (Turbine Trip &lt;P-9) does not direct a Rx trip on a loss of both SGFPs — it only directs lowering power &lt;5%, which would instead force an automatic Rx trip on Lo-Lo SG NR level.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q10</div>
On a 21 SGFP trip (polisher in service, full flow, no Rx trip), the UNEXPECTED alarm 2 minutes later is the <span class="hi-exam">Console Alarm RC PRESS DEVIATION HI</span> — its setpoint (<span class="hi-exam">+75 psig deviation</span>) corresponds to PZR spray valves full open, but the spray valves should be SHUT after the insurge from the load rejection and the large inward rod motion. <span class="hi-trap">OHA G-3 EHC SYS TRBL IS expected (G-3 takes input from the EHC Control and Status computer, which has a Loss of Feed Pump Runback alarm in).</span> <span class="hi-trap">OHA G-44 COND POL TRBL IS expected (CN108s auto-open on a SGFP trip while CN109 is open with the polisher in service).</span> <span class="hi-trap">Console Alarm RC LOOPS TAVG-TREF DEVIATION IS expected as rods drive in due to the turbine runback to 65%.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #3</div>
With condenser vacuum degraded (loss of 2CW 4KV bus section 23) and a power reduction underway, <span class="hi-exam">21 condensate pump trips</span>. The remaining condensate pump cannot supply the only operating SGFP (22), so as 22 SGFP speed rises its suction pressure falls rapidly to the SGFP trip setpoint. CRS enters AB.CN-0001; PO reports <span class="hi-exam">SGFP Condensate Suction Pressure Lo console alarm at 275 psig</span> and rising SGFP speed. The SGFP <span class="hi-exam">trips on low suction (&lt;215 psig sustained 10 s, or 190 psig with no delay), which auto-starts both MDAFW pumps</span>. With no SGFPs running and Rx power &gt;10%, the crew manually trips the reactor.
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[Main Turbine]], [[AFW]], [[Pressurizer Level & Press Control]], [[Control Rod Drive]], [[Annunciators]]
- Related procedures: [[HU-AA-101 — Human Performance Tools and Verification Practices]], [[S1.OP-AR.ZZ-0007]]
- Related exam questions: [[2014 Q2]], [[2014 Q54]], [[2016 Q17]], [[2016 Q89]], [[2018 Q58]], [[2018 Q78]], [[2019 Q17]], [[2019 Q57]], [[2020 Q93]], [[2022 Q45]], [[2022 Q65]], [[2023 Q64]], [[2012 Q10]], [[2012 Q81]]
- Related JPMs: [[2022 JPM Sim-e]]
- Related scenarios: [[2016 Scenario 2 — 2C EDG Pre-Lube Failure / Condensate Pump Trip / 21 SGTL → SGTR / Stuck-Open PORV]], [[2019 Scenario 4 — SGFP Trip / Loss of Heat Sink]], [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2015 Scenario 3]], [[2012 Scenario 3]]
- Related exam: [[2014 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
