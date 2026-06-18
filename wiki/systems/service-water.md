---
title: Service Water
category: systems
status: draft
aliases:
  - SW
  - service water system
---

# Service Water

## Function & Design Basis

89 active system K/As (catalog system 076). Cover each topic from the UFSAR (then TS / system descriptions / exam bank); mark gaps, never guess.

The Service Water System (SWS) is designed to supply an adequate supply of cooling water to the reactor safeguard and auxiliary equipment under all credible seismic, flood, drought, and storm conditions (UFSAR §9.2.1.1). Coolant flow is divided into two portions — the nuclear area and the turbine generator area (UFSAR §9.2.1.1). The Delaware River is the ultimate heat sink; the system is safety-related and designed for Class I (seismic) conditions except for the turbine area service water piping outside the service water intake structure, which is of non-Class I (seismic) design (UFSAR §9.2.1.2).

The SWS is designed to remain operable under any one pump failure plus one pump under maintenance; any one pump failure plus two pumps under maintenance (provided no more than one pump per intake bay and no more than one pump per vital bus is removed from service); one main supply header failure; and a loss-of-coolant accident coincident with loss of offsite power and subsequent 4 kV vital bus failure (UFSAR §9.2.1.3). Failure or spurious actuation of a remotely operated, manually controlled, or power-operated valve that has no automatic actuation signal is not considered a credible failure; check valves failing to move to their intended position following an accident are treated as passive failures (UFSAR §9.2.1.3).

The system requirements for various plant modes are listed on Table 9.2-1, based on a maximum river temperature of <span class="hi">90°F</span> (UFSAR §9.2.1.2, Table 9.2-1). Required pumps are 4 for Normal Operation, 2 for the LOCA Safety Injection Phase, and 3 for the LOCA Recirculation Phase (minimum recirculation requirements can be met with 2 pumps) (UFSAR §9.2.1.2). The primary method to prevent organic buildup in the heat exchangers and piping is sodium hypochlorite injection into the suction of each service water pump (UFSAR §9.2.1.2).

## Key Components

- **Service water pumps:** Six vertical, multistage, turbine-type pumps per unit, each rated at <span class="val-normal">10875 gpm</span> at <span class="hi">265 ft head</span>, directly driven by <span class="hi">1000-hp</span> induction motors powered from the plant vital buses (UFSAR §9.2.1.2). The pumps are arranged in two groups of three, each group installed in alternate watertight compartments (four independent pump-room compartments total) of the enclosed intake structure (UFSAR §9.2.1.2). Pumps take suction at Elevation <span class="hi">71 ft-6 in</span> and are arranged to afford adequate submergence down to the lowest credible water level of <span class="hi">76.0 ft</span>; motors are protected from flooding by pump-room compartments watertight to Elevation 126 ft-0 in (UFSAR §9.2.1.2).
- **CFCU pressurized storage tanks:** Two tanks per unit, <span class="hi">15000 gallon</span> each (<span class="hi">10000 gallon</span> normal water volume), connected to the SW piping downstream of the SW pumps and pressurized with nitrogen (UFSAR §9.2.1.2). They are normally isolated and designed to be rapidly placed in service through fast-opening isolation valves to keep the CFCU SW piping solid following a LOOP or a LOCA/MSLB concurrent with a LOOP (UFSAR §9.2.1.2). The storage tank discharge valves are air-operated butterfly valves that spring open rapidly on a LOOP, powered from redundant safety-related 125 VDC channels, energized to open and <span class="hi-exam">fail closed on a loss of control power</span>; redundant undervoltage relays on the 4 KV vital buses are combined in a 3-out-of-3 logic to energize the valve solenoid (UFSAR §9.2.1.2).
- **Self-cleaning strainers:** Each pump discharges to an automatic, self-cleaning strainer and check valve prior to entering the compartment supply header (UFSAR §9.2.1.2).
- **Traveling water screens:** Automatic traveling water screens are provided at each intake cell and combine with full-depth trash racks to filter debris; two-foot-wide fish-escape passages minimize fish entrapment. Operation/rotation of the traveling water screens (automatic or manual) is NOT required for functionality of the screens to support operability of the associated SW pump (UFSAR §9.2.1.2, Note 1).
- **Headers:** Two independent, full-sized supply headers per unit, situated in alternating compartments of the intake structure. Each supply line to the nuclear services portion normally feeds approximately 1/2 of the total nuclear-area requirement for one unit; a double-valved, normally open interconnection between the two pump headers permits continued operation with any combination of pumps in the event of a supply-line outage (UFSAR §9.2.1.2). Each service water nuclear discharge header crosses the yard and enters a 120-inch-diameter circulating water discharge pipe that discharges directly to the Delaware River (UFSAR §9.2.1.2).

## Power Supplies

The service water pump motors are powered from the plant vital buses; emergency diesel generators are provided to power three pumps during a failure of normal power supply (UFSAR §9.2.1.2). The storage-tank discharge valves and the SW pump-room undervoltage logic are tied to the 4 KV vital buses, with discharge-valve solenoids powered from redundant safety-related 125 VDC channels (UFSAR §9.2.1.2). The two motor-operated valves in series that isolate the non-Class I turbine-area portion of the SWS (SW-20 and SW-26) are powered from separate vital buses to ensure isolation (UFSAR §9.2.1.2).

### SW Pump Power Supplies & Bus Alignment

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q61</div>
SW pump power supplies (Unit 1): <span class="hi-exam">the A bus powers 15 and 16 SW pumps; normally one SW pump is in AUTO (the rest manual) at power</span>. On a single 1A bus UV / Bus Differential lockout, 16 SW pump is lost, header pressure drops, and the AUTO pump (11) starts — so 11 and 13 run (13 was already in service). <span class="hi-trap">Unit 1 SW pump power supplies are reversed from Unit 2 (Unit 2: 21/22 on A bus, 25/26 on C bus).</span> See [[4KV]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q69</div>
<span class="hi-exam">Unit 1 SW pumps are powered C,C,B,A,A vs Unit 2 A,A,B,B,C,C</span> (reversed). With the 1A bus deenergized, 15 and 16 SW pumps lose power and the AUTO pump (15) will not start (locked out by SEC initiation); the B-bus lead pump (14) and an A-fed pump run (11 and 14). See [[4KV]], [[SECs]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q61</div>
SW Nuclear Header low pressure setpoints: <span class="hi-exam">OHA B-13 (21 SW HDR PRESS LO) and B-14 (22 SW HDR PRESS LO) annunciate at <span class="val-alarm">99.5 psig</span></span>, and the <span class="hi-exam">standby SW pump auto-starts at <span class="val-alarm">95.5 psig</span></span>. Reference: S2.OP-AR.ZZ-0002 (Overhead Annunciator Window B), pages 28-29. <span class="hi-trap">Trap: 105.0 psig is not the alarm setpoint — the alarm is 99.5 psig. Auto-start is below the alarm setpoint, not at the same value.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q92</div>
SW pump bus alignment: <span class="hi-exam">21, 22, 23 SW pumps are powered from AA, BB, CC vital buses</span>. With 4 SW Bay isolated, <span class="hi-exam">24, 25, 26 SW pumps are unavailable</span>. If a 4KV vital-bus differential opens the EDG output breaker AND prevents station-power infeed-breaker reclosure, the de-energized vital bus eliminates pump power — <span class="hi-exam">total loss of all SW capability</span>, since the standby 22 SW pump cannot auto-start without power. <span class="hi-trap">The SW-load reduction action on Attachment 2 belongs to AB.SW-0001 (loss of header pressure), NOT AB.SW-0005. The action to swap charging pumps (place 23 in service / remove 22 from service) is in AB.SW-0005, NOT AB.SW-0001.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q53</div>
Unit 1 SW pump power supplies: <span class="hi-exam">15 and 16 SW Pumps are powered from the 1A 4KV Vital Bus</span>. <span class="hi-exam">12 SW Pump is on the C Bus with AUTO-start capability on low SW header pressure</span>. A 1A 4KV Bus Differential with #3 SW Bay already C/Ted (15 and 16 SW Pumps already isolated) has <span class="hi-exam">no additional impact on SW system operation</span> — the correct procedure entry is AB.4KV-0001, not AB.SW-0005 or AB.SW-0004. <span class="hi-trap">Unit difference: on Unit 2, 21 and 22 SW Pumps are BOTH on the 2A 4KV bus — a 2A bus loss would lose BOTH pumps. On Unit 1, 15 and 16 SW Pumps are on 1A bus but are associated with #3 SW Bay.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q90</div>
Unit difference — SW pump power supplies: <span class="hi-exam">2A EDG supplies 21 AND 22 SW Pumps (both on the same bus)</span>. On Unit 1, SW pumps 15 and 16 have a different bus arrangement. If 23 SW Pump trips and the 2A 4KV Vital Bus locks out (bus differential), <span class="hi-exam">ALL Unit 2 SW pumps are lost</span> — loss of all SW flow. Per S2.OP-AB.SW-0005: <span class="hi-exam">trip the reactor and stop all RCPs</span> to limit heat input to the CCW system.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
Total loss of all SW from <span class="hi-exam">simultaneous trip of all four #4 Service Water Bay pumps (24/25/26 SW pumps)</span> with #2 SW Bay already isolated for an unrelated leak. Loss of all SW eliminates cooling for CCW heat exchangers, which removes the heat sink for RCP thermal barriers, RCP seals via charging, and other CCW-cooled loads. AB.SW-0005 directs <span class="hi-exam">trip the reactor and stop all RCPs</span> as the immediate actions to limit heat input to the now-uncooled CCW system, then swap to 23 Charging Pump (positive displacement) and reduce CCW pumps to one to minimize CCW heating.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
During LOPA-1, <span class="hi-exam">2A EDG running with no SW pumps must be stopped to prevent overheating</span>. After 2C EDG is returned from maintenance and energizes 2C 4KV Vital Bus, crew must immediately start 25 or 26 SW pump for EDG cooling <span class="hi-exam">(CT-25)</span>.
</div>

## Automatic Features & Setpoints

The rupture of a large pipe or other high-flow-demand event is indicated to the operator by decreasing pump header pressure shown on the main control panel; low pump header pressure is alarmed to the control room, and if pump discharge header pressure continues to fall while outside power is available, a backup service water pump starts automatically (UFSAR §9.2.1.2). The standby SW pump auto-starts at <span class="val-alarm">95.5 psig</span>, below the OHA B-13/B-14 SW header low-pressure alarm setpoint of <span class="val-alarm">99.5 psig</span> (see Exam — 2016 Q61).

The Class I (seismic) service water piping inside the intake structure that supplies the turbine area is provided with two motor-operated valves, SW-20 and SW-26, in series, to <span class="hi-exam">isolate the non-Class I (seismic) portion of the system upon receipt of a safety injection signal or a loss of offsite power</span>; the two valves are powered from separate vital buses (UFSAR §9.2.1.2). The CFCU storage-tank fast-opening discharge valves spring open on a LOOP (sensed by 3-out-of-3 undervoltage logic on the 4 KV vital buses) to keep the CFCU SW piping solid (UFSAR §9.2.1.2).

Service water flow through each Component Cooling Heat Exchanger is normally controlled by a cascade control system that simultaneously throttles both the inlet and outlet control valves with a common control-air signal; the valves are throttled to maintain component cooling water outlet temperature as the primary parameter, with flow limited to a nominal operating value of <span class="hi">10000 gpm</span> as the secondary parameter (UFSAR §9.2.1.2). A flow transmitter alarms a service water high-flow condition on the overhead annunciator in the control room (UFSAR §9.2.1.2). The motor-operated valve operators (except the Turbine Area isolation valves) complete their closing or opening cycle in 1 minute, while the containment isolation valves can close in 10 seconds; the Turbine Area isolation motor-operated valves have a more rapid operating time of a maximum of 37 seconds (UFSAR §9.2.1.2).

### CFCU SW Flow & SW223 Valve

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q46</div>
The CFCU SW flow control valve <span class="hi-exam">SW223 has a ~50% position limiter / mechanical stop</span> and opens to that stop on a start from either fan speed, so steady-state SW flow through a CFCU is the SAME in low and high speed.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q42</div>
CFCU SW flow control valve <span class="hi-exam">SW223 has a position limiter (typically 50% travel)</span> — opens to the mechanical stop on a start signal from either Low or High speed. With the mechanical stop employed, <span class="hi-exam">steady-state SW flow is identical for High and Low speed CFCU operation</span>. Note: the CFCU is normally stopped for ~30 seconds during the speed transfer (no flow during transient). Reference: S2.OP-ST.SW-0010 IST CFCU SW Valves.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q50</div>
CFCU SW flow orifices maintain <span class="hi-exam">constant SW flow rate through CFCUs in both high and low speed operation</span>. Because SW flow is the same regardless of CFCU speed, <span class="hi-exam">SW header pressure is also the same</span> when a CFCU switches between high and low speed. (Prior to orifice installation, low speed had higher SW flow.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q51</div>
<span class="hi-exam">SW122 (SW Inlet Control Valve to CCW HX) fails OPEN on loss of instrument air</span> (fails closed on loss of 125VDC). Loss of air to SW122 → valve fails open → increased SW flow through CCW HX → lower CCW temperature → lower RHR HX outlet temperature → <span class="hi-exam">increased RCS cooldown rate</span>. Per AB.CA-0001, SW122 can be manually operated.
</div>

### SW122 (CCW HX Inlet Valve) Behavior

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q42</div>
<span class="hi-exam">21SW122 (CC HX SW Inlet Valve) is a normally open valve that receives a CLOSE signal only on a MODE III SEC initiation (SI plus Blackout)</span> — its status is displayed on 2RP4. In a MODE 2 LOCA with no SEC initiation, 21SW122 has no close demand, so OPEN is its expected position (NOT a failed-to-reposition condition). See [[RPS/SSPS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q63</div>
After a LOOP + manual SI on Unit 2 with the 2B EDG output breaker failing to close (loss of B 4KV/460V/230V power): <span class="hi-exam">2SW26 (TURB AREA SW MOV STOP VLV) remains OPEN</span> — it is always open at 100% power and the loss of power prevents it from closing. <span class="hi-trap">21/22SW122 (CC HX SW INLET) are AOVs that CLOSE on a MODE 3 (their control circuits keep power while 115VAC is available); CFCU 223 (CV FANS SW OUTLET) valves OPEN on MODE 3, but 22 and 24 CFCUs do not start in slow speed due to the loss of 460V power.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q16</div>
Confirms the 21/22SW122 (CC HX SW Inlet Valves) actuation: normally open, they operate in conjunction with the CCW HX SW outlet valves <span class="hi-exam">SW127</span>, and <span class="hi-exam">close on a SI signal coincident with a LOOP (SEC Mode III)</span> — NOT on SI alone — to prevent SW pump runout with all CFCUs in service and only two SW pumps available (EDG/SEC single failure). The SW122s <span class="hi-exam">must stroke closed in less than 30 seconds to ensure the CFCUs are operational within 60 seconds</span> following Mode III initiation (Tech. Spec. 3/4.3.2 Table 3.3-5).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q26</div>
21SW122 (21 CC Hx Control Valve) fail positions: <span class="hi-exam">ONLY a loss of control air causes 21SW122 to go FULLY OPEN</span>. SEC Mode III Operation and loss of 125 VDC power both cause 21SW122 to go fully CLOSED. <span class="hi-trap">All three conditions (loss of air, SEC Mode III, loss of DC) cause 21SW122 to move to a full-travel position, but only loss of air goes OPEN — the other two go CLOSED. Candidates must distinguish the fail-open (air) from fail-closed (DC/SEC) modes.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q52</div>
SW122 (CC HX Inlet Valves) <span class="hi-exam">close on SEC Mode III (SI + LOOP/blackout)</span> to prevent SW pump runout with all CFCUs running and only two SW pumps available (single active failure). During <span class="hi-exam">SEC Mode I (SI only)</span>, SW122s are throttled to maintain CC HX outlet temperature — they do NOT close or fully open. <span class="hi-trap">SW122s do NOT fully open on any SEC mode. They only close on Mode III (SI + LOOP), not on SI alone.</span>
</div>

## Design Features & Interlocks

The SWS is designed for Class I (seismic) conditions except the turbine area service water piping outside the intake structure (non-Class I seismic); the hypochlorite system piping inside the intake structure is Class II (seismic) but its supports are designed to Class I criteria (UFSAR §9.2.1.2). The separated redundant service water lines between the pumps and the Unit 1 component cooling heat exchangers are constructed of reinforced concrete pipe completely buried in the ground (effectively "separate trenches"); the principal supply-line runs are separated by about 13 feet so that, with the burial depth, the lines are essentially invulnerable to damage from a single postulated event (UFSAR §9.2.1.2). The same applies to the Unit 2 CCHX piping except for one section running along the west side of the Auxiliary Building, which is located within a 4 ft-6 in thick reinforced concrete pipe tunnel with the redundant supply lines separated by a 3-foot reinforced concrete wall (UFSAR §9.2.1.2).

The Service Water supply and return piping for each RCFC loop contain two restricting orifices (four total per RCFC) that establish flow during normal and accident modes to meet minimum RCFC containment heat-removal capacity; orifice bore sizes were calculated to prevent flashing in the SWS during post-accident operation, and an air-operated valve with an adjustable open-limit stop downstream of the last orifice provides final flow adjustment (UFSAR §9.2.1.2). The RCFCs start in low speed during the accident mode (UFSAR §9.2.1.2). Bypass lines installed in each RCFC loop discharge back into the SW downstream piping to preclude thermally induced overpressure conditions during automatic valve sequencing (UFSAR §9.2.1.2). As part of the GL 96-06 modifications, RCFCs are maintained free of voids or column separation, above saturation pressure, and protected from thermally induced overpressure events during all normal operating and abnormal events (UFSAR §9.2.1.2, §9.2.1.3).

Pump-runout / single-failure protection: each nuclear supply line is valved at all terminations and provided with double-valved interconnections to permit removal of either supply line from service without affecting plant operations (UFSAR §9.2.1.2). The SW122 CCHX inlet valves close on SEC Mode III to prevent SW pump runout with all CFCUs in service and only two SW pumps available (see Exam — 2015 Q16, Exam — 2022 Q52).

## Interconnections & Loads

The SWS supplies the following equipment (UFSAR §9.2.1.1):

- **Reactor Containment Building:** Reactor containment fan cooler (CFCU/RCFC) units (UFSAR §9.2.1.1). Each RCFC is supplied by individual lines from the containment-area service water header, with each inlet and discharge line through the containment wall provided with a remotely operated, automatically controlled shutoff valve so each fan cooler can be isolated individually from outside containment (UFSAR §9.2.1.2).
- **Auxiliary Building:** Component cooling heat exchangers; diesel generator units; chiller condensers; auxiliary equipment lube oil coolers; auxiliary equipment room coolers (UFSAR §9.2.1.1). Each of the two service water loops provides service water to one component cooling heat exchanger, one charging pump lube oil cooler, one safety injection pump lube oil cooler, and three containment fan cooler units (UFSAR §9.2.1.2).
- **Turbine Generator Building:** Steam generator feed pump coolers; station air compressor units; turbine lube oil coolers; turbine auxiliaries cooling water heat exchangers (UFSAR §9.2.1.1).
- **Pump Intake Structure:** Traveling screenwash and strainer backwash; service water pump bearing lubrication; service water pump motor bearing coolers; sodium hypochlorite dilution water (UFSAR §9.2.1.1).

The diesel generators can be supplied service water from either nuclear supply header through connections upstream of the Auxiliary tie valves; each nuclear-header connection to the diesel generator coolers has a normally open motor-operated isolation valve inside the Auxiliary Building, closable from the control room, with downstream normally open manual inlet/outlet valves and check valves (UFSAR §9.2.1.2). The safety-related auxiliary building pump room and lube oil coolers are fed by two independent room/lube-oil cooler headers, each normally supplied from one of the two main service water headers, with normally locked-closed cross-connections that allow both room/lube-oil cooler headers to be operated from the remaining main header if one main header is out of service downstream of the Auxiliary Building tie-valves (UFSAR §9.2.1.2).

Service water transfers the system heat to the Delaware River (ultimate heat sink). The component cooling heat exchangers transfer heat from the closed-loop CCW system to the SWS, so CCW serves as an intermediate barrier between the RCS and the SWS (UFSAR §9.2.2.3). The currently evaluated minimum (design) CCHX flow is <span class="hi">8000 gpm</span> at 90°F water (Westinghouse transmittal PSE-94-568), versus the original 10000 gpm design flow, which may not be attainable for both heat exchangers in certain post-accident alignments (UFSAR §9.2.1.2, Table 9.2-1 Note 2).

### Nuclear Header Isolation & CFCU Supply

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q47</div>
SW nuclear-header supply to the CFCUs: 21/22 CFCUs from 21 nuc header, 24/25 from 22 nuc header, 23 from BOTH (check-valve arrangement). <span class="hi-exam">22SW20 (Nuclear Header Supply) stuck shut isolates the 21 nuc header → 21 and 22 CFCUs lose all SW (2 CFCUs)</span>. Restore by opening <span class="hi-exam">21SW23 / 22SW23 (Nuclear Header X-over valves)</span>, located downstream of 22SW20/24SW20. <span class="hi-trap">The SW17 (SW-Bay / Discharge Header) x-connects are normally open and cannot restore flow past the shut 22SW20.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q80</div>
A sequential SW header-pressure alarm cascade (OHA B-13/B-14/B-15) plus <span class="hi-exam">B-48 SW VLV RM FLOODED localizes the leak to a single CFCU supply line in the 78' Mechanical Penetration Area</span>, addressed by AB.SW-0001 by isolating that single (control-room-identifiable) CFCU. See [[CFCUs]], [[AB.SW-0001 — Loss of SW Header Pressure]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q90</div>
<span class="hi-exam">Closing a CFCU manual SW cross-connect supply valve (21SW52 / 22SW52) isolates CFCU #23 from a SW supply header → CFCU #23 inoperable (SO.SW-5 Att 2, TS 3.6.2.3)</span>. Knowledge of where the SW isolation valve is located determines that 22 CFCU is NOT also affected. See [[CFCUs]], [[S2.OP-SO.SW-0005 — Service Water System Operation]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q24</div>
SW nuclear header leak isolation per AB.SW-0001 Attachment 4: when leak is <span class="hi-exam">downstream of 21SW22 (NUCLEAR HEADER)</span>, the crew will <span class="hi-exam">CLOSE 21SW22 and ENSURE CLOSE 21SW23 and 22SW23 (TIE VALVES)</span> (Step 2.0). After isolation, <span class="hi-exam">SW cooling is NOT available to 21CFCU and 22CFCU</span>. <span class="hi-trap">Trap: if the leak is UPSTREAM of 21SW22, the procedure directs OPEN the tie valves (Step 3.0) to maintain cross-header supply. Downstream = close ties; Upstream = open ties.</span> Only <span class="hi-exam">23 CFCU can be cooled by both SW headers</span> — 21 and 22 CFCUs are not cross-connected.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q60</div>
SW Nuclear Header leak location: with low SW pressure to loads on the <span class="hi-exam">21 SW Nuclear Header</span> (21 CC Pump, 21 CS Pump, 21 CFCU, etc.), the leak is <span class="hi-exam">downstream of 21SW22 (NUCLEAR HEADER inlet valve)</span>. Key one-line relationships: <span class="hi-exam">2SW26 (TURB AREA SW MOV) is on the turbine area header (non-nuclear)</span>; 22SW22 is the 22 Nuclear Header inlet; 21SW23/22SW23 are Nuclear Header Tie Valves (connecting the two headers). <span class="hi-trap">Trap: the question requires correlating the affected loads to the correct nuclear header — all affected loads are served by the 21 header, so the leak must be downstream of 21SW22 (not 22SW22 or between the tie valves).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q52</div>
SW Nuclear Header isolation with 21SW22 closed: <span class="hi-exam">EDG supply valves (21SW21 & 22SW21) are UPSTREAM of Nuclear Header Inlet Valves (21SW22 & 22SW22)</span> — closing 21SW22 does NOT isolate EDG SW supplies. All 3 EDGs remain supplied by both 21 and 22 SW Headers. For CFCUs: <span class="hi-exam">23 CFCU can be supplied from EITHER 21 or 22 SW Header (check valve locations)</span>, but the remaining CFCUs on the 21 Nuclear Header are isolated. Result: <span class="hi-exam">all 3 EDGs on both headers, only 3 CFCUs on 22 SW Header</span> (22, 24, 25 CFCUs + 23 CFCU via cross-connect). <span class="hi-trap">Not all 5 CFCUs can be supplied by either header — only 23 CFCU has the check valve arrangement allowing cross-header supply.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q16</div>
OHA B-48 (SW VLV RM FLOODED) indicates leak in <span class="hi-exam">SW valve room on 78' Mechanical Penetration Area</span>. CFCU piping passes through this room before entering containment. <span class="hi-exam">A SW leak in this room is most likely from CFCU piping.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q24</div>
<span class="hi-exam">Service Water from CFCUs is the ONLY source of water into containment NOT isolated by Phase A or Phase B containment isolation signals.</span> Fire Protection and Primary Water are isolated by Phase A; CCW is isolated by Phase B. Following a LOCA with both Phase A and B actuated, SW to CFCUs is the only remaining water source into containment — this is the cause of unexpected containment water level rise addressed in EOP-FRCE-2.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 RO-A3</div>
SW leak isolation using P&ID 205342: leak on 2 inch drain valve <span class="hi-exam">21SW268</span> (21 NUC HDR FROM FCV DRAIN) downstream of 21SW76 (21 CFCU SW Outlet Valve) in SW Valve Room, Auxiliary Building. Minimum nine valves to isolate: <span class="hi-exam">21SW472, 21SW355, 21SW50 (sheet 3), 21SW414 (sheet 5), 21SW78, 22SW76, 21SW76, 21SW646, 22SW646 (sheet 6)</span>. Must trace all flow paths on multiple P&ID sheets including cross-connected headers.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #1</div>
#2 SW Bay leak during startup. OHA B-29 (22-23 SW PMP SUMP AREA LVL HI), B-13 (21 SW HDR PRESS LO). <span class="hi-exam">25 SW Pump auto starts</span> on low header pressure. Crew splits headers: open <span class="hi-exam">21SW23 and 22SW23</span> (nuclear header crossover MOVs), close <span class="hi-exam">21SW17 and 22SW17</span> (cross-connects). Leak isolated in #2 Bay by closing <span class="hi-exam">21SW22 and 21SW20</span>. Start Bay 4 pumps (24, 25, 26), stop #2 Bay pumps. SW available to DGs through <span class="hi-exam">22SW21</span> and Turbine Area through <span class="hi-exam">23SW20</span>. CRS enters <span class="hi-exam">TS 3.7.4 (72 hr LCO)</span> for one operable SW loop. PO removes one CCHX from service per AB.SW-0003 CAS item 4.0.
</div>

### Chilled-Water Heat-Load Interface

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A1-1</div>
Chilled-water inlet water temperature for the non-essential heat-load isolation calculation (S2.OP-SO.CH-0001 Att 2) is read from the <span class="hi-exam">Circulating / Service Water Log (SC.OP-DL.ZZ-0008(Q))</span> — service water inlet temperature determines which Table A category (and required isolation kBTU/hr) applies when both chillers are inoperable.
</div>

## Effects of Loss / Malfunction

The maximum postulated leak rate from a crack in the SW piping will not affect the ability of the SWS to provide sufficient flow to all components; operations become aware of such leakage indirectly through increasing sump levels, and action is based on increasing radwaste inventory rather than loss of function of safety-related equipment (UFSAR §9.2.1.2). On a rupture of a main yard supply header, the affected header can be isolated by the control-room operator (remotely closing the intake tie valves and observing which pump header is at low-low pressure); once the ruptured header is isolated, the intake tie valves can be opened and all service water pumps made available (UFSAR §9.2.1.2). For a pipe rupture in a watertight pump compartment beyond the capacity of the sump pump, high sump level is alarmed to the control room, and the operator can remotely close the tie valves and header block valves to isolate the affected compartment and start the remaining pumps in the other compartment for an orderly shutdown (UFSAR §9.2.1.2). Each SWIS pump compartment contains a sump of nominal capacity 49 cu ft (366 gal) with a sump pump capable of removing over 250 gpm (UFSAR §9.2.1.2).

If a pipe rupture occurs inside containment, high-level alarms in the containment sump and the fan-cooler drain pot are transmitted to the control room, and the operator can remotely close the containment isolation valves to isolate the leaking fan cooler unit (UFSAR §9.2.1.2). A temperature detector monitors the fan-cooler outlet temperature; high water temperature could be an indication of inadequate flow (UFSAR §9.2.1.2). If radiation is detected at one of the service water outlets from containment, the condition is alarmed in the control room; the final decision to isolate the coils is based on plant conditions, analyses, and indications (UFSAR §9.2.1.2).

### Total Loss of SW & Bay Leak Response

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q62</div>
For a SW leak in the 2C EDG room just upstream of 23SW39 (2C DIESEL CLG SW VLV): the <span class="hi-exam">standby SW pump auto-starts at 95.5 psig</span>, and per AB.SW-0001 the crew <span class="hi-exam">locks out 2C EDG (declare INOPERABLE) and isolates the leak by shutting BOTH 21SW37 AND 22SW37, the 2C Diesel Clg SW inlet valves</span> (isolating both header supplies to the 2C diesel cooler). <span class="hi-trap">The leak cannot be isolated using 21SW21/22SW21 per Att 4 Steps 4.0 B and C — those valves would render ALL EDGs inoperable. 99.5 psig is the SW header low alarm setpoint (OHA B-13/B-14), not the standby-pump auto-start.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q78</div>
A complete loss of SW in Mode 5 with RHR in service: AB.SW-0005 has a CAS that <span class="hi-exam">directs going to AB.RHR-1 or AB.RHR-2 depending on RPV level</span> — the FIRST action then is to stop the in-service RHR pump (RPV &lt;97.5'). See [[RHR]], [[AB.SW-0005 — Loss of All Service Water]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q14</div>
SW Bay leak with degraded pump availability: OHA B-29, "21-23 SW PUMP SMP AREA LVL HI" indicates <span class="hi-exam">leaking #2 SW Bay requiring isolation</span>. AB.SW-0001 (Loss of SW Header Pressure) immediately transitions to <span class="hi-exam">AB.SW-0003 (Service Water Bay Leak)</span> for bay isolation. An OPERABLE SW loop requires <span class="hi-exam">two SW pumps powered from separate buses</span>. Per S2.OP-SO.SW-0005 P&L 3.2: when a SW Bay is removed from service in Modes 1-4 and the "B" bus SW pump in the operable bay is unavailable (23 or 24 SWP), <span class="hi-exam">LCO 3.0.3 is applicable</span>. <span class="hi-trap">With #2 Bay isolated AND 24 SWP C/Ted, both SW loops are inoperable. TS 3.7.4 (one loop inoperable, 72 hrs) does NOT apply — TS 3.0.3 applies because no operable loops remain.</span>
</div>

## Control-Room Operation

Status is displayed and control of each service water pump is available on the main control panel so an operator can determine if an abnormal number of pumps is operating; indication of the 14 and 24 pump in "TEST" is displayed on the auxiliary annunciator during surveillance testing (UFSAR §9.2.1.2). Status and control of all SWS isolation valves and motor-operated header block and tie valves is available to the operator in the control room (UFSAR §9.2.1.2). Service water flow through the containment fan cooler units is indicated on the control console, and a temperature detector monitors each fan-cooler outlet temperature (UFSAR §9.2.1.2). During normal operations and following a LOOP, the CFCU storage (supply) tanks are filled by a manually controlled makeup water pump located at each storage tank, supplied from the SW system (UFSAR §9.2.1.2). Each non-safety-related CFCU storage tank has redundant level, temperature, and pressure instruments with local indications and a common "tank trouble" overhead annunciator plus an individual alarm for each storage tank in the main control room (UFSAR §9.2.1.2).

### Turbine-Area Header Pressure Control

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q53</div>
The <span class="hi-exam">TGA (Turbine Generator Area) SW header pressure is regulated by ST1 to a downstream pressure of <span class="val-normal">80 psig</span></span>, so it modulates to hold pressure stable and does NOT change following a Main Turbine trip.
</div>

## Tech Spec LCOs

- **[[TS 3/4.7 — Plant Systems]]** — TS 3.7.4 requires at least two independent service water loops OPERABLE in Modes 1–4 (TS 3/4.7.4)
- 1 loop inoperable: 72 hours to restore, or Hot Standby in 6 hours + Cold Shutdown in 30 hours (TS 3/4.7.4)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q71</div>
Tracking an inoperable SW pump per OP-SA-108-115-1001 (Operability Assessment) requires updating the TS Action Statement Status Board, the TS Action Statement Log, and the Control Room Narrative Log — but <span class="hi-trap">the Operational Status Board is NOT required</span> (it is used during emergencies and is located in the control room area). See [[OP-SA-108-115-1001 — Operability Assessment and Equipment Control Program]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-f</div>
SW flow to a CFCU during the 25 CFCU operability surveillance (S2.OP-ST.CBV-0003): per S2.OP-SO.CBV-0001 Step 5.1.3.E, <span class="hi-exam">if SW flow is &lt;1465 gpm the CFCU must be stopped</span> and S2.OP-SO.SW-0005 Operability Guidelines referenced; the step ensures SW flow <span class="hi-exam">≥1465 gpm</span>. Acceptance evaluation also uses 22 SW header DP (reported <span class="hi-exam">91 psid → rounded up to 95 psid</span> per P&L 3.4) read against Exhibit 1 to determine the minimum cooling water flow.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A3</div>
Unit 1 SW loop operability with 13 SW Pump C/T and 1A EDG inoperable: per <span class="hi-exam">S1.OP-SO.SW-0005</span>, two independent operable SW loops require one pump per vital bus and two pumps per bay. With 13 SW Pump C/T: <span class="hi-exam">A bus (15 & 16 Pumps) — YES, B bus (14 Pump) — YES, C bus (11 & 12 Pumps) — YES, #1 Bay (11 & 12) — YES, #3 Bay (15 & 16) — YES</span>. Two SW loops remain operable, so <span class="hi-exam">TS 3.8.1.1 Action b.2 does NOT apply</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-f</div>
CFCU surveillance: SW flow minimum <span class="hi-exam">>=1465 gpm</span> required for CFCU operability. When measured SW header DP falls between Exhibit 1 values, use the <span class="hi-exam">next higher DP value</span> to determine minimum required flow.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
On the IST of the RHR pump room coolers (S2.OP-ST.SW-0014), the <span class="hi-exam">21SW153 room cooler SW valve stroke time falls in the Required Action Range</span>. Per [[S2.OP-SO.SW-0005 — Service Water System Operation]], an inoperable room cooler renders its RHR pump inoperable, so the CRS <span class="hi-exam">declares 21SW153 and the 21 RHR pump inoperable and enters TSAS 3.5.2</span> (less than two full ECCS trains).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
A #2 SW Bay leak with 24 SW pump already C/T leaves <span class="hi-exam">no operable SW loops → TS 3.0.3</span>. After a later LOOP, with the running EDGs and 2C SEC failed to initiate, the crew must manually start <span class="hi-exam">at least one SW pump (on the 2C bus) — CT#1 — so the running EDGs have SW cooling</span>; EDGs running without SW cooling can overheat and fail. Bay isolation: split the bays via 21SW23/22SW23 and 21SW17/22SW17, isolate 2 Bay with 21SW22 and 21SW20. See [[2014 Scenario 3]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
25 SW pump discharge strainer develops high D/P (OHA B-16, 24-26 SW STRAIN TRBL; SW header pressures lowering). Field finds the strainer in auto with backwash red light on and flow through 25SW24, but the <span class="hi-exam">strainer shaft NOT turning</span> with the strainer motor running, D/P ~10.5 psid. CRS collects Trip/High D/P Observations IAW [[S1.OP-SO.SW-0001]] Attachment 2, determines manual backwash cannot be performed (strainer not turning), and declares 25 SW pump inoperable based on <span class="hi-exam">D/P &gt;10 psid</span> across the strainer (IAW S2.OP-AR.ZZ-0002, OHA Window B). With 26 SW pump already CIT, CRS enters <span class="hi-exam">LCO 3.7.4</span> — no operable SW pump powered from "C" vital bus leaves only ONE SW loop operable.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
21 SW Pump C/T for pump repack (initial condition). 21 SW Accumulator Tank pressure drops to <span class="hi-exam">137 psig</span> (operable band is <span class="hi-exam">138-157 psig</span>) — declared inoperable, 21 and 22 CFCUs stopped and isolated. 23 SW Pump trips and 26 SW Pump fails to auto start on low pressure — RO manually starts 26 SW Pump. CRS enters <span class="hi-exam">TS 3.7.4 (72 hours)</span> for 21 and 23 SW Pumps inoperable in one bay (only one operable SW loop).
</div>

## Connections

- Related tech specs: [[TS 3/4.7 — Plant Systems]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.SW-0003 — Service Water Bay Leak]], [[AB.SW-0005 — Loss of All Service Water]], [[S2.OP-SO.SW-0005 — Service Water System Operation]], [[S2.OP-ST.CBV-0003 — Containment Cooling Systems Surveillance]], [[S2.OP-ST.SW-0010 — IST CFCU SW Valves]], [[S1.OP-SO.DG-0005 — EDG Operability Determination]], [[S1.OP-SO.SW-0001 — Service Water Pump Operation]], [[AB.SW-0002 — Loss of Service Water-Turbine Header]]
- Related exam questions: [[2015 Q16]], [[2016 Q42]], [[2016 Q61]], [[2016 Q92]], [[2018 Q24]], [[2019 Q26]], [[2019 Q60]], [[2020 Q14]], [[2020 Q40]], [[2020 Q52]], [[2020 Q53]], [[2020 Q89]], [[2023 Q24]], [[2023 Q50]], [[2023 Q51]], [[2022 Q16]], [[2022 Q52]], [[2022 Q90]], [[2015 Q61]], [[2015 Q69]], [[2015 Q71]], [[2015 Q78]], [[2015 Q80]], [[2015 Q90]], [[2014 Q16]], [[2014 Q46]], [[2014 Q47]], [[2014 Q53]], [[2014 Q63]], [[2014 Q83]], [[2012 Q26]], [[2012 Q42]], [[2012 Q62]], [[2012 Q82]]
- Related JPMs: [[2016 JPM SRO-A1-1]], [[2016 JPM SRO-A1-2]], [[2016 JPM Sim-e]], [[2023 JPM Sim-f]], [[2020 JPM RO-A3]], [[2020 JPM SRO-A3]], [[2015 JPM RO-A1-1]], [[2014 JPM SRO-A1-1]], [[2014 JPM Sim-f]]
- Related scenarios: [[2012 Scenario 1]], [[2018 Scenario 1]], [[2020 Scenario 1 — Power Ascension / Station Blackout]], [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2015 Scenario 3]], [[2014 Scenario 3]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
