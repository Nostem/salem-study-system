---
title: Service Water
category: systems
status: draft
aliases:
  - SW
  - service water system
---

# Service Water

## Function

Provides cooling water from the Delaware River (ultimate heat sink) to remove heat from plant systems. Safety-related, Seismic Category I. (UFSAR 9.2.1)

## Key Loads

- Containment fan coil units (CFCUs) — minimum 1300 gpm per unit during accident conditions
- Component cooling water heat exchangers
- Diesel generator jacket water coolers
- Turbine auxiliaries cooling (non-safety)
- Various other plant heat exchangers

## Key Design Points

- Ultimate heat sink: Delaware River
- Safety-related supply for post-accident cooling
- Two independent loops required for single-failure capability
- Supplies backup water source for AFW system

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q24</div>
<span class="hi-exam">Service Water from CFCUs is the ONLY source of water into containment NOT isolated by Phase A or Phase B containment isolation signals.</span> Fire Protection and Primary Water are isolated by Phase A; CCW is isolated by Phase B. Following a LOCA with both Phase A and B actuated, SW to CFCUs is the only remaining water source into containment — this is the cause of unexpected containment water level rise addressed in EOP-FRCE-2.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q50</div>
CFCU SW flow orifices maintain <span class="hi-exam">constant SW flow rate through CFCUs in both high and low speed operation</span>. Because SW flow is the same regardless of CFCU speed, <span class="hi-exam">SW header pressure is also the same</span> when a CFCU switches between high and low speed. (Prior to orifice installation, low speed had higher SW flow.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q42</div>
CFCU SW flow control valve <span class="hi-exam">SW223 has a position limiter (typically 50% travel)</span> — opens to the mechanical stop on a start signal from either Low or High speed. With the mechanical stop employed, <span class="hi-exam">steady-state SW flow is identical for High and Low speed CFCU operation</span>. Note: the CFCU is normally stopped for ~30 seconds during the speed transfer (no flow during transient). Reference: S2.OP-ST.SW-0010 IST CFCU SW Valves.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
<span class="hi-exam">SW122 (SW Inlet Control Valve to CCW HX) fails OPEN on loss of instrument air</span> (fails closed on loss of 125VDC). Loss of air to SW122 → valve fails open → increased SW flow through CCW HX → lower CCW temperature → lower RHR HX outlet temperature → <span class="hi-exam">increased RCS cooldown rate</span>. Per AB.CA-0001, SW122 can be manually operated.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q26</div>
21SW122 (21 CC Hx Control Valve) fail positions: <span class="hi-exam">ONLY a loss of control air causes 21SW122 to go FULLY OPEN</span>. SEC Mode III Operation and loss of 125 VDC power both cause 21SW122 to go fully CLOSED. <span class="hi-trap">All three conditions (loss of air, SEC Mode III, loss of DC) cause 21SW122 to move to a full-travel position, but only loss of air goes OPEN — the other two go CLOSED. Candidates must distinguish the fail-open (air) from fail-closed (DC/SEC) modes.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q16</div>
OHA B-48 (SW VLV RM FLOODED) indicates leak in <span class="hi-exam">SW valve room on 78' Mechanical Penetration Area</span>. CFCU piping passes through this room before entering containment. <span class="hi-exam">A SW leak in this room is most likely from CFCU piping.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q53</div>
Unit 1 SW pump power supplies: <span class="hi-exam">15 and 16 SW Pumps are powered from the 1A 4KV Vital Bus</span>. <span class="hi-exam">12 SW Pump is on the C Bus with AUTO-start capability on low SW header pressure</span>. A 1A 4KV Bus Differential with #3 SW Bay already C/Ted (15 and 16 SW Pumps already isolated) has <span class="hi-exam">no additional impact on SW system operation</span> — the correct procedure entry is AB.4KV-0001, not AB.SW-0005 or AB.SW-0004. <span class="hi-trap">Unit difference: on Unit 2, 21 and 22 SW Pumps are BOTH on the 2A 4KV bus — a 2A bus loss would lose BOTH pumps. On Unit 1, 15 and 16 SW Pumps are on 1A bus but are associated with #3 SW Bay.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q24</div>
SW nuclear header leak isolation per AB.SW-0001 Attachment 4: when leak is <span class="hi-exam">downstream of 21SW22 (NUCLEAR HEADER)</span>, the crew will <span class="hi-exam">CLOSE 21SW22 and ENSURE CLOSE 21SW23 and 22SW23 (TIE VALVES)</span> (Step 2.0). After isolation, <span class="hi-exam">SW cooling is NOT available to 21CFCU and 22CFCU</span>. <span class="hi-trap">Trap: if the leak is UPSTREAM of 21SW22, the procedure directs OPEN the tie valves (Step 3.0) to maintain cross-header supply. Downstream = close ties; Upstream = open ties.</span> Only <span class="hi-exam">23 CFCU can be cooled by both SW headers</span> — 21 and 22 CFCUs are not cross-connected.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q52</div>
SW Nuclear Header isolation with 21SW22 closed: <span class="hi-exam">EDG supply valves (21SW21 & 22SW21) are UPSTREAM of Nuclear Header Inlet Valves (21SW22 & 22SW22)</span> — closing 21SW22 does NOT isolate EDG SW supplies. All 3 EDGs remain supplied by both 21 and 22 SW Headers. For CFCUs: <span class="hi-exam">23 CFCU can be supplied from EITHER 21 or 22 SW Header (check valve locations)</span>, but the remaining CFCUs on the 21 Nuclear Header are isolated. Result: <span class="hi-exam">all 3 EDGs on both headers, only 3 CFCUs on 22 SW Header</span> (22, 24, 25 CFCUs + 23 CFCU via cross-connect). <span class="hi-trap">Not all 5 CFCUs can be supplied by either header — only 23 CFCU has the check valve arrangement allowing cross-header supply.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q14</div>
SW Bay leak with degraded pump availability: OHA B-29, "21-23 SW PUMP SMP AREA LVL HI" indicates <span class="hi-exam">leaking #2 SW Bay requiring isolation</span>. AB.SW-0001 (Loss of SW Header Pressure) immediately transitions to <span class="hi-exam">AB.SW-0003 (Service Water Bay Leak)</span> for bay isolation. An OPERABLE SW loop requires <span class="hi-exam">two SW pumps powered from separate buses</span>. Per S2.OP-SO.SW-0005 P&L 3.2: when a SW Bay is removed from service in Modes 1-4 and the "B" bus SW pump in the operable bay is unavailable (23 or 24 SWP), <span class="hi-exam">LCO 3.0.3 is applicable</span>. <span class="hi-trap">With #2 Bay isolated AND 24 SWP C/Ted, both SW loops are inoperable. TS 3.7.4 (one loop inoperable, 72 hrs) does NOT apply — TS 3.0.3 applies because no operable loops remain.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 RO-A3</div>
SW leak isolation using P&ID 205342: leak on 2 inch drain valve <span class="hi-exam">21SW268</span> (21 NUC HDR FROM FCV DRAIN) downstream of 21SW76 (21 CFCU SW Outlet Valve) in SW Valve Room, Auxiliary Building. Minimum nine valves to isolate: <span class="hi-exam">21SW472, 21SW355, 21SW50 (sheet 3), 21SW414 (sheet 5), 21SW78, 22SW76, 21SW76, 21SW646, 22SW646 (sheet 6)</span>. Must trace all flow paths on multiple P&ID sheets including cross-connected headers.
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.4 requires two independent SW loops OPERABLE in Modes 1–4
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU surveillance: SW flow minimum <span class="hi-exam">>=1465 gpm</span> required for CFCU operability. When measured SW header DP falls between Exhibit 1 values, use the <span class="hi-exam">next higher DP value</span> to determine minimum required flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q52</div>
SW122 (CC HX Inlet Valves) <span class="hi-exam">close on SEC Mode III (SI + LOOP/blackout)</span> to prevent SW pump runout with all CFCUs running and only two SW pumps available (single active failure). During <span class="hi-exam">SEC Mode I (SI only)</span>, SW122s are throttled to maintain CC HX outlet temperature — they do NOT close or fully open. <span class="hi-trap">SW122s do NOT fully open on any SEC mode. They only close on Mode III (SI + LOOP), not on SI alone.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q16</div>
Confirms the 21/22SW122 (CC HX SW Inlet Valves) actuation: normally open, they operate in conjunction with the CCW HX SW outlet valves <span class="hi-exam">SW127</span>, and <span class="hi-exam">close on a SI signal coincident with a LOOP (SEC Mode III)</span> — NOT on SI alone — to prevent SW pump runout with all CFCUs in service and only two SW pumps available (EDG/SEC single failure). The SW122s <span class="hi-exam">must stroke closed in less than 30 seconds to ensure the CFCUs are operational within 60 seconds</span> following Mode III initiation (Tech. Spec. 3/4.3.2 Table 3.3-5).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q90</div>
Unit difference — SW pump power supplies: <span class="hi-exam">2A EDG supplies 21 AND 22 SW Pumps (both on the same bus)</span>. On Unit 1, SW pumps 15 and 16 have a different bus arrangement. If 23 SW Pump trips and the 2A 4KV Vital Bus locks out (bus differential), <span class="hi-exam">ALL Unit 2 SW pumps are lost</span> — loss of all SW flow. Per S2.OP-AB.SW-0005: <span class="hi-exam">trip the reactor and stop all RCPs</span> to limit heat input to the CCW system.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
During LOPA-1, <span class="hi-exam">2A EDG running with no SW pumps must be stopped to prevent overheating</span>. After 2C EDG is returned from maintenance and energizes 2C 4KV Vital Bus, crew must immediately start 25 or 26 SW pump for EDG cooling <span class="hi-exam">(CT-25)</span>.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
21 SW Pump C/T for pump repack (initial condition). 21 SW Accumulator Tank pressure drops to <span class="hi-exam">137 psig</span> (operable band is <span class="hi-exam">138-157 psig</span>) — declared inoperable, 21 and 22 CFCUs stopped and isolated. 23 SW Pump trips and 26 SW Pump fails to auto start on low pressure — RO manually starts 26 SW Pump. CRS enters <span class="hi-exam">TS 3.7.4 (72 hours)</span> for 21 and 23 SW Pumps inoperable in one bay (only one operable SW loop).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
#2 SW Bay leak during startup. OHA B-29 (22-23 SW PMP SUMP AREA LVL HI), B-13 (21 SW HDR PRESS LO). <span class="hi-exam">25 SW Pump auto starts</span> on low header pressure. Crew splits headers: open <span class="hi-exam">21SW23 and 22SW23</span> (nuclear header crossover MOVs), close <span class="hi-exam">21SW17 and 22SW17</span> (cross-connects). Leak isolated in #2 Bay by closing <span class="hi-exam">21SW22 and 21SW20</span>. Start Bay 4 pumps (24, 25, 26), stop #2 Bay pumps. SW available to DGs through <span class="hi-exam">22SW21</span> and Turbine Area through <span class="hi-exam">23SW20</span>. CRS enters <span class="hi-exam">TS 3.7.4 (72 hr LCO)</span> for one operable SW loop. PO removes one CCHX from service per AB.SW-0003 CAS item 4.0.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A3</div>
Unit 1 SW loop operability with 13 SW Pump C/T and 1A EDG inoperable: per <span class="hi-exam">S1.OP-SO.SW-0005</span>, two independent operable SW loops require one pump per vital bus and two pumps per bay. With 13 SW Pump C/T: <span class="hi-exam">A bus (15 & 16 Pumps) — YES, B bus (14 Pump) — YES, C bus (11 & 12 Pumps) — YES, #1 Bay (11 & 12) — YES, #3 Bay (15 & 16) — YES</span>. Two SW loops remain operable, so <span class="hi-exam">TS 3.8.1.1 Action b.2 does NOT apply</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q61</div>
SW Nuclear Header low pressure setpoints: <span class="hi-exam">OHA B-13 (21 SW HDR PRESS LO) and B-14 (22 SW HDR PRESS LO) annunciate at <span class="val-alarm">99.5 psig</span></span>, and the <span class="hi-exam">standby SW pump auto-starts at <span class="val-alarm">95.5 psig</span></span>. Reference: S2.OP-AR.ZZ-0002 (Overhead Annunciator Window B), pages 28-29. <span class="hi-trap">Trap: 105.0 psig is not the alarm setpoint — the alarm is 99.5 psig. Auto-start is below the alarm setpoint, not at the same value.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q60</div>
SW Nuclear Header leak location: with low SW pressure to loads on the <span class="hi-exam">21 SW Nuclear Header</span> (21 CC Pump, 21 CS Pump, 21 CFCU, etc.), the leak is <span class="hi-exam">downstream of 21SW22 (NUCLEAR HEADER inlet valve)</span>. Key one-line relationships: <span class="hi-exam">2SW26 (TURB AREA SW MOV) is on the turbine area header (non-nuclear)</span>; 22SW22 is the 22 Nuclear Header inlet; 21SW23/22SW23 are Nuclear Header Tie Valves (connecting the two headers). <span class="hi-trap">Trap: the question requires correlating the affected loads to the correct nuclear header — all affected loads are served by the 21 header, so the leak must be downstream of 21SW22 (not 22SW22 or between the tie valves).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q92</div>
SW pump bus alignment: <span class="hi-exam">21, 22, 23 SW pumps are powered from AA, BB, CC vital buses</span>. With 4 SW Bay isolated, <span class="hi-exam">24, 25, 26 SW pumps are unavailable</span>. If a 4KV vital-bus differential opens the EDG output breaker AND prevents station-power infeed-breaker reclosure, the de-energized vital bus eliminates pump power — <span class="hi-exam">total loss of all SW capability</span>, since the standby 22 SW pump cannot auto-start without power. <span class="hi-trap">The SW-load reduction action on Attachment 2 belongs to AB.SW-0001 (loss of header pressure), NOT AB.SW-0005. The action to swap charging pumps (place 23 in service / remove 22 from service) is in AB.SW-0005, NOT AB.SW-0001.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
Total loss of all SW from <span class="hi-exam">simultaneous trip of all four #4 Service Water Bay pumps (24/25/26 SW pumps)</span> with #2 SW Bay already isolated for an unrelated leak. Loss of all SW eliminates cooling for CCW heat exchangers, which removes the heat sink for RCP thermal barriers, RCP seals via charging, and other CCW-cooled loads. AB.SW-0005 directs <span class="hi-exam">trip the reactor and stop all RCPs</span> as the immediate actions to limit heat input to the now-uncooled CCW system, then swap to 23 Charging Pump (positive displacement) and reduce CCW pumps to one to minimize CCW heating.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A1-1</div>
Chilled-water inlet water temperature for the non-essential heat-load isolation calculation (S2.OP-SO.CH-0001 Att 2) is read from the <span class="hi-exam">Circulating / Service Water Log (SC.OP-DL.ZZ-0008(Q))</span> — service water inlet temperature determines which Table A category (and required isolation kBTU/hr) applies when both chillers are inoperable.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-f</div>
SW flow to a CFCU during the 25 CFCU operability surveillance (S2.OP-ST.CBV-0003): per S2.OP-SO.CBV-0001 Step 5.1.3.E, <span class="hi-exam">if SW flow is &lt;1465 gpm the CFCU must be stopped</span> and S2.OP-SO.SW-0005 Operability Guidelines referenced; the step ensures SW flow <span class="hi-exam">≥1465 gpm</span>. Acceptance evaluation also uses 22 SW header DP (reported <span class="hi-exam">91 psid → rounded up to 95 psid</span> per P&L 3.4) read against Exhibit 1 to determine the minimum cooling water flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q61</div>
SW pump power supplies (Unit 1): <span class="hi-exam">the A bus powers 15 and 16 SW pumps; normally one SW pump is in AUTO (the rest manual) at power</span>. On a single 1A bus UV / Bus Differential lockout, 16 SW pump is lost, header pressure drops, and the AUTO pump (11) starts — so 11 and 13 run (13 was already in service). <span class="hi-trap">Unit 1 SW pump power supplies are reversed from Unit 2 (Unit 2: 21/22 on A bus, 25/26 on C bus).</span> See [[4KV]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q69</div>
<span class="hi-exam">Unit 1 SW pumps are powered C,C,B,A,A vs Unit 2 A,A,B,B,C,C</span> (reversed). With the 1A bus deenergized, 15 and 16 SW pumps lose power and the AUTO pump (15) will not start (locked out by SEC initiation); the B-bus lead pump (14) and an A-fed pump run (11 and 14). See [[4KV]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q71</div>
Tracking an inoperable SW pump per OP-SA-108-115-1001 (Operability Assessment) requires updating the TS Action Statement Status Board, the TS Action Statement Log, and the Control Room Narrative Log — but <span class="hi-trap">the Operational Status Board is NOT required</span> (it is used during emergencies and is located in the control room area). See [[OP-SA-108-115-1001 — Operability Assessment and Equipment Control Program]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q78</div>
A complete loss of SW in Mode 5 with RHR in service: AB.SW-0005 has a CAS that <span class="hi-exam">directs going to AB.RHR-1 or AB.RHR-2 depending on RPV level</span> — the FIRST action then is to stop the in-service RHR pump (RPV &lt;97.5'). See [[RHR]], [[AB.SW-0005 — Loss of All Service Water]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q80</div>
A sequential SW header-pressure alarm cascade (OHA B-13/B-14/B-15) plus <span class="hi-exam">B-48 SW VLV RM FLOODED localizes the leak to a single CFCU supply line in the 78' Mechanical Penetration Area</span>, addressed by AB.SW-0001 by isolating that single (control-room-identifiable) CFCU. See [[CFCUs]], [[AB.SW-0001 — Loss of SW Header Pressure]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q90</div>
<span class="hi-exam">Closing a CFCU manual SW cross-connect supply valve (21SW52 / 22SW52) isolates CFCU #23 from a SW supply header → CFCU #23 inoperable (SO.SW-5 Att 2, TS 3.6.2.3)</span>. Knowledge of where the SW isolation valve is located determines that 22 CFCU is NOT also affected. See [[CFCUs]], [[S2.OP-SO.SW-0005 — Service Water System Operation]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
25 SW pump discharge strainer develops high D/P (OHA B-16, 24-26 SW STRAIN TRBL; SW header pressures lowering). Field finds the strainer in auto with backwash red light on and flow through 25SW24, but the <span class="hi-exam">strainer shaft NOT turning</span> with the strainer motor running, D/P ~10.5 psid. CRS collects Trip/High D/P Observations IAW [[S1.OP-SO.SW-0001]] Attachment 2, determines manual backwash cannot be performed (strainer not turning), and declares 25 SW pump inoperable based on <span class="hi-exam">D/P &gt;10 psid</span> across the strainer (IAW S2.OP-AR.ZZ-0002, OHA Window B). With 26 SW pump already CIT, CRS enters <span class="hi-exam">LCO 3.7.4</span> — no operable SW pump powered from "C" vital bus leaves only ONE SW loop operable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q47</div>
SW nuclear-header supply to the CFCUs: 21/22 CFCUs from 21 nuc header, 24/25 from 22 nuc header, 23 from BOTH (check-valve arrangement). <span class="hi-exam">22SW20 (Nuclear Header Supply) stuck shut isolates the 21 nuc header → 21 and 22 CFCUs lose all SW (2 CFCUs)</span>. Restore by opening <span class="hi-exam">21SW23 / 22SW23 (Nuclear Header X-over valves)</span>, located downstream of 22SW20/24SW20. <span class="hi-trap">The SW17 (SW-Bay / Discharge Header) x-connects are normally open and cannot restore flow past the shut 22SW20.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q46</div>
The CFCU SW flow control valve <span class="hi-exam">SW223 has a ~50% position limiter / mechanical stop</span> and opens to that stop on a start from either fan speed, so steady-state SW flow through a CFCU is the SAME in low and high speed.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q53</div>
The <span class="hi-exam">TGA (Turbine Generator Area) SW header pressure is regulated by ST1 to a downstream pressure of <span class="val-normal">80 psig</span></span>, so it modulates to hold pressure stable and does NOT change following a Main Turbine trip.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q63</div>
After a LOOP + manual SI on Unit 2 with the 2B EDG output breaker failing to close (loss of B 4KV/460V/230V power): <span class="hi-exam">2SW26 (TURB AREA SW MOV STOP VLV) remains OPEN</span> — it is always open at 100% power and the loss of power prevents it from closing. <span class="hi-trap">21/22SW122 (CC HX SW INLET) are AOVs that CLOSE on a MODE 3 (their control circuits keep power while 115VAC is available); CFCU 223 (CV FANS SW OUTLET) valves OPEN on MODE 3, but 22 and 24 CFCUs do not start in slow speed due to the loss of 460V power.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
A #2 SW Bay leak with 24 SW pump already C/T leaves <span class="hi-exam">no operable SW loops → TS 3.0.3</span>. After a later LOOP, with the running EDGs and 2C SEC failed to initiate, the crew must manually start <span class="hi-exam">at least one SW pump (on the 2C bus) — CT#1 — so the running EDGs have SW cooling</span>; EDGs running without SW cooling can overheat and fail. Bay isolation: split the bays via 21SW23/22SW23 and 21SW17/22SW17, isolate 2 Bay with 21SW22 and 21SW20. See [[2014 Scenario 3]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q42</div>
<span class="hi-exam">21SW122 (CC HX SW Inlet Valve) is a normally open valve that receives a CLOSE signal only on a MODE III SEC initiation (SI plus Blackout)</span> — its status is displayed on 2RP4. In a MODE 2 LOCA with no SEC initiation, 21SW122 has no close demand, so OPEN is its expected position (NOT a failed-to-reposition condition). See [[RPS/SSPS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q62</div>
For a SW leak in the 2C EDG room just upstream of 23SW39 (2C DIESEL CLG SW VLV): the <span class="hi-exam">standby SW pump auto-starts at 95.5 psig</span>, and per AB.SW-0001 the crew <span class="hi-exam">locks out 2C EDG (declare INOPERABLE) and isolates the leak by shutting BOTH 21SW37 AND 22SW37, the 2C Diesel Clg SW inlet valves</span> (isolating both header supplies to the 2C diesel cooler). <span class="hi-trap">The leak cannot be isolated using 21SW21/22SW21 per Att 4 Steps 4.0 B and C — those valves would render ALL EDGs inoperable. 99.5 psig is the SW header low alarm setpoint (OHA B-13/B-14), not the standby-pump auto-start.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
On the IST of the RHR pump room coolers (S2.OP-ST.SW-0014), the <span class="hi-exam">21SW153 room cooler SW valve stroke time falls in the Required Action Range</span>. Per [[S2.OP-SO.SW-0005 — Service Water System Operation]], an inoperable room cooler renders its RHR pump inoperable, so the CRS <span class="hi-exam">declares 21SW153 and the 21 RHR pump inoperable and enters TSAS 3.5.2</span> (less than two full ECCS trains).
</div>

## Connections

- Related tech specs: [[TS 3/4.7 — Plant Systems]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.SW-0003 — Service Water Bay Leak]], [[AB.SW-0005 — Loss of All Service Water]], [[S2.OP-SO.SW-0005 — Service Water System Operation]], [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[S2.OP-ST.SW-0010 — IST CFCU SW Valves]], [[S1.OP-SO.DG-0005 — EDG Operability Determination]], [[S1.OP-SO.SW-0001 — Service Water Pump Operation]], [[AB.SW-0002 — Loss of Service Water-Turbine Header]]
- Related exam questions: [[2015 Q16]], [[2016 Q42]], [[2016 Q61]], [[2016 Q92]], [[2018 Q24]], [[2019 Q26]], [[2019 Q60]], [[2020 Q14]], [[2020 Q40]], [[2020 Q52]], [[2020 Q53]], [[2020 Q89]], [[2023 Q24]], [[2023 Q50]], [[2023 Q51]], [[2022 Q16]], [[2022 Q52]], [[2022 Q90]], [[2015 Q61]], [[2015 Q69]], [[2015 Q71]], [[2015 Q78]], [[2015 Q80]], [[2015 Q90]], [[2014 Q16]], [[2014 Q46]], [[2014 Q47]], [[2014 Q53]], [[2014 Q63]], [[2014 Q83]], [[2012 Q26]], [[2012 Q42]], [[2012 Q62]], [[2012 Q82]]
- Related JPMs: [[2016 JPM SRO-A1-1]], [[2016 JPM SRO-A1-2]], [[2016 JPM Sim-e]], [[2023 JPM Sim-f]], [[2020 JPM RO-A3]], [[2020 JPM SRO-A3]], [[2015 JPM RO-A1-1]], [[2014 JPM SRO-A1-1]], [[2014 JPM Sim-f]]
- Related scenarios: [[2012 Scenario 1]], [[2018 Scenario 1]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2015 Scenario 3]], [[2014 Scenario 3]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
