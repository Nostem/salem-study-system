---
title: Feed & Condensate
category: systems
status: draft
aliases:
  - feedwater
  - main feedwater
  - condensate
  - feedwater regulating valves
  - feedwater isolation
---

# Feed & Condensate

## Function

The feedwater system supplies heated feedwater from the condensate system to the steam generators. The condensate system collects condensed steam from the main condensers and pumps it through feedwater heaters to the feedwater pumps. (UFSAR 10.4)

## Main Feedwater

- Feedwater pumps (turbine-driven) supply feedwater through feedwater regulating valves to steam generators
- Feedwater temperature at full power: 432.8°F
- SG level controlled by feedwater regulating valves

## SG Level Control

- **Below P-7 (low power):** Single-element control (SG level only)
- **Above P-7 (at power):** Three-element control (steam flow, feed flow, SG level)
(UFSAR 7.7.2.6)

## Feedwater Isolation

Actuated by:
1. Safety Injection signal
2. 2/3 Hi-Hi SG level (P-14) — trips all FW pumps, closes FW valves, trips turbine
3. Low auctioneered Tavg AND reactor trip (P-4)

Closes main FW control valves (fast closure), bypass valves, and inlet stop valves. (UFSAR T7.2-1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q8</div>
High level in <span class="hi-exam">21A Low Pressure feedwater heater closes ONLY the associated 21CN22</span> inlet valve (not all three LP FW heater strings). With one LP FW heater string bypassed, <span class="hi-exam">cooler feedwater enters the reactor, raising actual reactor thermal power due to positive MTC effect</span>. NI power indication reads lower than actual because cooler moderator provides shielding to PR NIS. Reactor power should be determined from RCS delta-Ts, and turbine load reduced to prevent exceeding thermal power limits.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q42</div>
BF19 (MFW Regulating Valve) fails fully OPEN → SG level rises → <span class="hi-exam">SG High Level Trip (P-14) actuates at 2/3 NR levels ≥<span class="val-trip">67%</span> on any one SG</span>. P-14 trips the main turbine, which causes an auto reactor trip AND actuates <span class="hi-exam">Feedwater Isolation</span> (closes all BF13s, BF19s, BF40s, trips both SGFPs, and trips the Main Turbine). Note: FW Interlock alone only closes the BF19s and BF40s — FW Isolation is the broader actuation.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q44</div>
FW Isolation vs FW Interlock: <span class="hi-exam">SG Hi-Hi Level (P-14) triggers FW Isolation</span> — trips SGFPs AND closes BF13s, BF19s, BF40s, AND trips Main Turbine. <span class="hi-exam">FW Interlock (P-4, reactor trip + low Tavg) ONLY closes BF19s and BF40s</span> — does NOT trip SGFPs and does NOT close BF13s. <span class="hi-trap">FW Isolation is the broader actuation (trips pumps + closes all valves). FW Interlock is narrower (only closes regulating and bypass valves). Do not confuse the two.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q45</div>
SG program level above 20% power is <span class="hi-exam"><span class="val-normal">44% NR</span></span>. With SG NR level at 45% (above 44% program), BF19 (FW Bypass Regulating Valve) demand <span class="hi-exam">decreases</span> — digital FW system throttles BF19s closed to reduce feedwater flow and lower SG level to program. <span class="hi-trap">44% is the program setpoint above 20% power — do not confuse with 50% or other SG level setpoints.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q13</div>
Main feedwater line break vs steam line break: FW line break causes SG levels to <span class="hi-exam">lower FASTER</span> (direct loss of feedwater inventory). RCS cooldown is <span class="hi-exam">LESS than an equivalent steam line break</span> (loss of FW doesn't involve removal of latent heat as steam break does). FW break generates <span class="hi-exam">Low-Low SG Level reactor trip</span>; post-trip RCS Tavg rises due to decreased heat transfer in the affected SG.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q17</div>
SGFP trip at >70% power — AB.CN-0001 immediate actions: MANUAL Main Turbine load reduction to a MAXIMUM of <span class="hi-exam"><span class="val-alarm">66%</span> Turbine Power at a MAXIMUM of <span class="val-alarm">15%</span>/MIN</span>. <span class="hi-trap">50% is incorrect (each SGFP does not provide exactly 50% flow). 30%/MIN is the automatic stator cooling water loss runback rate, NOT the AB.CN-0001 manual load reduction rate.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q18</div>
SGFP Turbine Overspeed Trip: <span class="hi-exam">SGFP turbines have an overspeed trip at <span class="val-trip">6080 rpm</span></span>. SGFP design capacity is <span class="val-normal">5500 rpm</span>. <span class="hi-trap">Do not confuse with Main Turbine overspeed trips: 108% = <span class="val-trip">1944 rpm</span> or 110% = <span class="val-trip">1980 rpm</span>. The SGFP turbine operates at much higher RPM than the Main Turbine.</span>
</div>

## Condenser and Condensate

- Main condensers receive exhaust steam from turbine and steam dump
- Condensate pumps deliver condensate through feedwater heaters to feedwater pumps
- Condenser serves as heat sink for steam dump during load rejection
(UFSAR 10.4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q93</div>
Condensate pump trip at 100% power: <span class="hi-exam">2CN47 (23/24/25 Heater String Bypass valve) controls automatically to maintain SGFP suction pressure > <span class="val-normal">265 psig</span></span>. Per AB.CN-0001, open <span class="hi-exam">21-23 CN108 (Polisher Bypass Valves) if SGFP suction pressure < <span class="val-alarm">320 psig</span></span>. Power reduction per Attachment 2 to a maximum of <span class="hi-exam">85%</span>. <span class="hi-trap">265 psig is the CN47 auto-control setpoint, NOT the CN108 opening threshold. 75% is the IOP-4 third condensate pump start power level, NOT the AB.CN-0001 load reduction limit.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.1.3 (Auxiliary Feed Storage Tank), TS 3.7.13 (FW Isolation Valves)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q60</div>
CW waterbox tube leak alarms: a gross tube leak is confirmed by <span class="hi-exam">Dissolved Oxygen Hi, Condensate Pump Disch Sodium Hi, and Hotwell Outlet Conductivity Hi</span>. <span class="hi-trap">Hydrazine Lo is NOT expected from a CW tube leak</span> — river water intrusion does not impact hydrazine concentration.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q64</div>
SGFP trip response: DEHC automatically initiates turbine runback at <span class="val-trip">200% per minute</span> to 66% power. <span class="hi-exam">2CN47 (23/24/25 Heater String Bypass valve) immediately opens</span> and the polisher is bypassed. <span class="hi-trap">Manual runback from the DEHC panel uses 15% per minute rate. On a condensate pump trip, 2CN47 only opens if SGFP suction pressure drops below <span class="val-alarm">320 psig</span>; on a SGFP trip, 2CN47 opens regardless of suction pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q74</div>
Condensate depression: the temperature difference between the condenser saturation temperature and the actual condensate temperature. <span class="hi-exam">Decreasing condensate depression (e.g., 5°F to 2°F) raises thermal efficiency</span> (hotter feedwater means SGs add less sensible heat) but moves the condensate pumps <span class="hi-exam">closer to cavitation</span> (less subcooling = less NPSH at pump suction).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-e</div>
EOP-FRHS-1 condensate pump feed: establish condensate flow to selected SG by opening <span class="hi-exam">BF40 (Main Feed Bypass Valve, locally)</span>, <span class="hi-exam">BF13 (Feed Water Isolation Valve)</span>, <span class="hi-exam">21 and 22 CN48 (Feed Pump Bypass Valves)</span>, and closing <span class="hi-exam">21 and 22 CN32 (Feed Pump Suction Valves)</span>. Verify condensate flow established with WR level rising.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-e</div>
Loss of SGFP at >70% power: auto turbine runback <span class="hi-exam">fails</span>. Per AB.CN-0001 Step 2.3.1.B: manually initiate load reduction at DEHC panel — toggle <span class="hi-exam">%/HR to %/MIN</span>, set ramp rate to <span class="hi-exam">15%/min</span>, setter to <span class="hi-exam">66%</span>. Also: rods fail to insert in AUTO during downpower — take rods to MANUAL and insert at 48 steps/min to control Tavg.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q58</div>
Ovation (ADFCS) steam pressure channel failure: Ovation uses <span class="hi-exam">one pressure channel from each SG (4 total) into a Medium Signal Select (MSS) algorithm</span>. If one SG steam pressure channel fails HIGH, the <span class="hi-exam">associated MS10 (atmospheric dump) loop switches to MANUAL</span> control (OHAs G-7 ADFCS Alternate Action and G-15 ADFCS TRBL). The MSS algorithm selects a good input for the remaining MS10 loops — <span class="hi-exam">other MS10s remain in AUTO</span>. <span class="hi-trap">A single pressure channel failure does NOT open the MS10 or cause ALL MS10s to swap to manual.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #3</div>
Condensate recovery in EOP-FRHS-1 after loss of all AFW. Both SGFPs tripped due to auto SI following main turbine failure to trip. Crew resets SI/Phase A/Phase B, opens <span class="hi-exam">CA330s</span>. Selects one SG for depressurization to < <span class="hi-exam">575 psig</span> using MS10. Dispatches operator to open <span class="hi-exam">BF40 or BF19</span> (120 ft TGA). Opens <span class="hi-exam">BF13</span>, opens <span class="hi-exam">CN48 (SGFP bypass valves)</span>, closes <span class="hi-exam">CN32 (SGFP suction valves)</span>. Condensate flow established when SG pressure is around 600 psi. Validation note: approximately 10 minutes to depressurize via MS10, condensate flow visible at 5-6% WR rising.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q60</div>
ADFCS (Ovation) SG NR Level Quality Alarm response: with <span class="hi-exam">two inputs in Quality Alarm (BAD) for one SG</span> (e.g., Channel I failed HIGH and Channel II failed LOW), the system initiates <span class="hi-exam">OHA G-7 (ADFCS ALTERNATE ACTION) and transfers BOTH BF19 and BF40 for that SG to MANUAL</span>. <span class="hi-trap">Only one channel failure = single Quality Alarm — no ADFCS Alternate Action. With TWO bad channels on the same SG, the ADFCS cannot determine a valid level and transfers BF19 and BF40 to MANUAL. SGFPs do NOT shift to MANUAL (that was the previous digital feed system design). Other SGs' controllers remain in AUTO.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q45</div>
BF19 (Main FW Regulating Valves) on loss of all station air: <span class="hi-exam">BF19s start to close at <span class="val-alarm">80 psig</span> control air header pressure</span>. BF19s receive air from Unit 1 via redundant Lunkenheimer air panels, but on total loss of ALL station air, no backup supply is available. <span class="hi-trap">ECACs cannot supply BF19 CA headers due to a check valve isolating the turbine building headers.</span> Per AB.CA-0001 CAS: if both CA headers < 80 psig or BF19s closing with inability to control SG level → trip the reactor.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q44</div>
On trip of both SGFPs, only the <span class="hi-exam">MDAFW pumps auto-start</span>. The TDAFW pump does NOT auto-start on SGFP trip — it requires <span class="hi-exam">2/3 Lo-Lo level in 2/4 SGs (14% NR)</span>, RCP bus undervoltage, or manual start. Per S2.OP-SO.CN-0002, a removed-from-service SGFP is placed in the tripped condition, satisfying half of the "trip of both SGFPs" auto-start logic.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #4</div>
21 SGFP trips on high thrust bearing oil pressure at 2% power. CRS enters AB.CN-0001. PO reports first-out annunciator: thrust bearing oil pressure high trip locked in and will not clear. RO reduces reactor power to <4% by inserting control rods. AFW auto-start fails — crew manually starts motor-driven AFW pumps.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #5</div>
<span class="hi-exam">23BF19 feedwater reg valve fails closed</span> (ramped over 1 minute) at 85% power. OHA alarms: G-15 ADFCS TRBL, G-23 21/22 SGFP SPEED DEVIATION, 23 SG Program Setpoint Deviation. Manual control attempts unsuccessful. Both SGFPs trip on SI actuation following reactor trip — <span class="hi-exam">SGFPs NOT available during EOP-FRHS-1</span>. Condensate recovery path: open selected SG BF40 or BF19 locally (120 ft elevation TGA), open BF13, open <span class="hi-exam">21 and 22 CN48 (SGFP bypass valves)</span>, close <span class="hi-exam">21 and 22 CN32 (SGFP suction valves)</span>. Feed flow established when SG pressure depressurized to <575 psig.
</div>

## Connections

- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]]
- Related procedures: [[AB.CA-0001 — Loss of Control Air]], [[AB.CN-0001 — Condensate System Abnormality]]
- Related exam questions: [[2019 Q17]], [[2019 Q18]], [[2020 Q44]], [[2020 Q45]], [[2020 Q55]], [[2020 Q60]], [[2020 Q93]], [[2020 Q95]], [[2023 Q8]], [[2023 Q42]], [[2023 Q60]], [[2023 Q64]], [[2023 Q74]], [[2022 Q13]], [[2022 Q44]], [[2022 Q45]], [[2022 Q58]], [[2022 Q65]]
- Related JPMs: [[2023 JPM Sim-e]], [[2022 JPM Sim-e]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]], [[2020 Scenario 4 — SGTR / PORV Failure]], [[2020 Scenario 5 — Loss of Heat Sink / Condensate Recovery]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
