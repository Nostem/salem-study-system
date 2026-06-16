---
title: Control Air
category: systems
status: draft
aliases:
  - service air
  - station air
  - control air
---

# Control Air

## Function

Provides clean, dry compressed air for instrument and control valve operation throughout the plant. Includes service air and station air subsystems.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q25</div>
CA330 (Containment Supply Inlet Valves) <span class="hi-exam">fail CLOSED on a loss of Control Air</span> (not on loss of 125 VDC or 28 VDC power). With BOTH 11CA330 and 12CA330 closed, <span class="hi-exam">each PZR PORV CAN still be operated</span> — each PORV has <span class="hi-exam">2 accumulators sized for 100 opening/closing cycles (50/accumulator)</span>. <span class="hi-trap">Trap: CA330s are Containment Isolation Valves — candidates may confuse their fail mode with a DC power loss, but they fail on loss of air, not loss of DC.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q13</div>
The RHR HX flow control valve (21RH18) and HX bypass valve (2RH20) are supplied air <span class="hi-exam">exclusively from the "A" air header, which is fed by the Unit 2 ECAC</span>. On a station blackout with the Unit 2 ECAC failed to start, control air on the "A" header <span class="hi-exam">bleeds away fairly rapidly</span> and both valves <span class="hi-exam">fail AS IS</span>. <span class="hi-trap">115VB inverter power keeps the console valve-position indication accurate for at least 2 hours after a LOPA, so the indicated positions are correct even with no control air.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q34</div>
Because 21RH18 (RHR HX Outlet FCV) is a <span class="hi-exam">fail-as-is</span> valve, an air line break to 21RH18 during stable shutdown cooling has <span class="hi-exam">NO effect on the RHR system</span> — the valve holds its current position. <span class="hi-trap">It does not fail open (which would cause a cooldown) and does not fail shut.</span> Per AB.CA-0001.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q38</div>
The <span class="hi-exam">2CC149 CCW Surge Tank Vent Valve is normally OPEN and fails SHUT on a total loss of air (and loss of control power)</span>; it auto-shuts on high radiation from 2R17A. The valve is automatic (AU) in all Modes. <span class="hi-trap">It does not fail open.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q26</div>
ECAC automatic start setpoint: <span class="hi-exam"><span class="val-trip">&lt; 85 psig</span> control air pressure</span>. <span class="hi-trap">88 psig is the MANUAL start setpoint per AB.CA-0001 — not the auto start setpoint. At 86 psig, the ECAC has NOT reached its auto start setpoint.</span> To MANUALLY start the ECAC from the control room, the <span class="hi-exam">MINIMUM pushbutton manipulation is depressing A then B (two-button sequence)</span>. A single button (B ONLY) is not sufficient.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q53</div>
SAC power supplies: <span class="hi-exam">#1 SAC from 1H 4KV Group Bus, #3 SAC from 1G 4KV Group Bus (both Unit 1), #2 SAC from 2G 4KV Group Bus (Unit 2)</span>. On loss of all Unit 1 4KV Group Buses, #1 and #3 SACs are lost but <span class="hi-exam">#2 SAC auto-starts (or continues running) and one SAC is capable of supplying BOTH units' station air and control air headers at approximately 100 psig</span>. ECACs auto-start at <span class="hi-exam">85-90 psig</span> and maintain headers if ALL SACs are lost.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q77</div>
MS10 atmospheric dump valves remain operable from the control room during loss of all control air: each MS10 has a <span class="hi-exam">nitrogen bottle rack with four bottles at >=2000 psig</span> that provides backup air supply. CA330s fail CLOSED on loss of air (isolating containment air), but MS10s have <span class="hi-exam">DC battery power for control and nitrogen for the air operator</span>. Bottle rack capacity designed for <span class="hi-exam">minimum 72 hours</span> of MS10 operation. Per EOP-LOPA-1, maximum cooldown rate using MS10s is <span class="hi-exam">100F/hr</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q79</div>
On loss of instrument air, <span class="hi-exam">2MS132 (23 AFP Turbine Steam Inlet Valve) fails OPEN</span>, causing the turbine-driven AFW pump to start at power. Cold AFW injection into the SGs causes reactor power to <span class="hi-exam">exceed 3459 MWt (reactor overpower condition)</span>. Per S2.OP-IO.ZZ-0004, <span class="hi-exam">reduce turbine load</span> to lower reactor power below the administrative limit.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q88</div>
On loss of all control air with a centrifugal charging pump in service: <span class="hi-exam">CV55 fails OPEN and CV71 fails CLOSED</span>. With letdown isolated, the charging pump delivers higher flow to the RCP seals → <span class="hi-exam">PZR level RISES</span>. Per AB.CA-0001: locally adjust <span class="hi-exam">CV54 (Centrifugal Charging Pump Flow Control Valve)</span> to control charging flow, OR transfer to <span class="hi-exam">23 PDP charging pump</span> (speed controller failed at low speed stop — minimizes seal flow and extends time before PZR reaches 90%).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q54</div>
ECAC power supplies: <span class="hi-exam">#1 ECAC is powered from the 1C 460V Vital Bus</span>. Loss of 1C 4KV to 460V breaker 1C4D would result in loss of #1 ECAC. <span class="hi-trap">Do not confuse ECAC power supplies with Station Air Compressor (SAC) power supplies — #1 SAC is powered from 1H 4KV Group Bus, #1 Station Air Compressor from 1H group bus (4KV). The 1E 460V Group Bus powers Station Air Compressors, NOT the ECACs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q15</div>
ECAC header sensing and CAS actions: <span class="hi-exam">#2 ECAC senses CA Header A</span> and <span class="hi-exam">#1 ECAC senses CA Header B</span>. Per AB.CA-0001: if 2B CA Header is <span class="val-alarm">&le; 88 psig</span>, notify Unit 1 NCO to start #1 ECAC. CAS (Continuous Action Statement): if <span class="hi-exam">BOTH CA headers lower to &lt; <span class="val-trip">80 psig</span></span>, trip the reactor. <span class="hi-trap">Trap: #1 ECAC is for 2B header (not 2A), and #2 ECAC is for 2A header (not 2B) — the ECAC number does NOT match the header letter. Also, the CAS requires BOTH headers &lt; 80 psig, not EITHER header.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q45</div>
BF19 (Main Feedwater Regulating Valves) behavior on loss of all station air: <span class="hi-exam">BF19s start to close at <span class="val-alarm">80 psig</span> control air header pressure</span>. Per AB.CA-0001 CAS: monitor BF19s for closure and inability to control SG level, or if both CA headers drop below <span class="val-trip">80 psig</span>, trip the reactor. <span class="hi-trap">85 psig is the ECAC auto-start setpoint, NOT the BF19 closure threshold — do not confuse.</span> BF19s receive air from Unit 1 via redundant (Lunkenheimer) air panels, but on total loss of ALL station air, no Unit 1 CA is available. <span class="hi-trap">A check valve prevents either unit's ECAC from supplying the BF19 turbine building control air header, so ECACs cannot maintain BF19 air supply even if running.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 IP-j</div>
SBO Diesel Control Air Compressor start (SC.OP-SO.CA-0001): during loss of offsite power with no ECACs running, start the SBO compressor at the SBO Compressor Building. Key sequence: open engine intake louvers, drain 1CA1920, open 2FZSBO10 battery charger breaker, air dryer ON, record hourmeter, UNLOADER to START, then <span class="hi-exam">PRESS AND HOLD BY-PASS VALVE pushbutton → SBO-IGN-SWT to START → verify oil pressure >15 psig → RELEASE BY-PASS VALVE</span>. Discharge alignment: <span class="hi-exam">1CA1913 → 1CA1886 → 2CA584</span> pressurizes Aux Building 1A and 2A Control Air headers. UNLOADER to RUN to load.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q61</div>
AB.CA-0001 trend analysis: ECAC manual start (Step 3.10) when <span class="hi-exam">2A CA Header &le; <span class="val-alarm">88 psig</span></span>. CAS reactor trip when <span class="hi-exam">BOTH headers &lt; <span class="val-trip">80 psig</span></span>. With declining CA headers, must track each header independently — the trip requires BOTH headers below 80 psig, not just one. <span class="hi-trap">100 psig = Station Air Compressor start threshold (Step 3.7), not ECAC start.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q61</div>
ECACs are manually started when CA headers lower to <span class="hi-exam val-alarm">88 psig</span>. <span class="hi-trap">100 psig is the threshold for starting the remaining Station Air Compressor, not the ECAC manual start setpoint.</span> Check valves in the CA system <span class="hi-exam">prevent ECACs from supplying the BF19 headers</span> — ensuring proper BF19 operation is NOT a reason to start ECACs.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q27</div>
CA330 (Control Air Isolation Valves) operability and isolation: IAW <span class="hi-exam">LCO 3.6.3 (Containment Isolation Valves), CA330s are required to be OPERABLE in MODES 1-4 ONLY</span>. The CA330s automatically close on a <span class="hi-exam">Phase A Containment Isolation signal, which is generated when containment pressure FIRST exceeds <span class="val-trip">4 psig</span></span>. <span class="hi-trap">Trap: 15 psig is the Phase B setpoint — CA330s close on Phase A (4 psig), NOT Phase B (15 psig). Also, LCO 3.6.3 applies in Modes 1-4, not ALL MODES.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q93</div>
Number 1 ECAC provides air to 1B and 2B Control Air Headers <span class="hi-exam">ONLY</span> — <span class="hi-exam">check valves prevent the ECAC from supplying Station Air</span>. Per S1.OP-AB.CA-0001, the CRS will direct performance of Attachment 12, "Local Control Of SG Pressure and Level", when <span class="hi-exam">BOTH 1A and 1B Control Air Headers indicate less than <span class="val-trip">80 psig</span></span>. <span class="hi-trap">Trap: EITHER header below 80 psig is not sufficient — BOTH must be below 80 psig before Attachment 12 is directed.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q62</div>
ECAC power supply (Unit 2): <span class="hi-exam">#2 ECAC is powered from the 2C 460V Vital Bus</span>. With #2 ECAC running loaded for testing per S2.OP-PT.CA-0001, a trip of <span class="hi-exam">2C 4KV to 460V breaker 2C4D</span> de-energizes the ECAC and impacts Control Air Header pressure. <span class="hi-trap">Trap: Station Air Compressors are powered from Group buses (2A4D, 2E6D, 2H5D feed Group buses) — do NOT confuse SAC power supplies with ECAC power supplies. Only the 2C 460V Vital Bus loss affects the running ECAC.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q63</div>
SBO Compressor automatic/manual operation: the <span class="hi-exam">SBO Compressor will NOT automatically start</span> on a loss of all station power, and after starting it <span class="hi-exam">must be manually aligned to</span> the 1A and 2A Control Air Headers. The SBO Compressor is required to be isolated from, and independent of, plant safety related equipment except when required during a station blackout or other situations involving total loss of Control Air. <span class="hi-trap">Trap: SBO compressor is BOTH manually started AND manually aligned — neither action is automatic. Do not confuse with the ECACs which auto-start on low CA pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q90</div>
BF19 (SG FW CONT V) failure on loss of control air: <span class="hi-exam">BF19s fail CLOSED</span> → SG levels lower. AB.CA-0001 CAS directs: if crew manually trips the reactor because SG levels cannot be maintained, perform <span class="hi-exam">EOP-TRIP-1 AND AB.CA-0001 concurrently</span>. <span class="hi-trap">BF19s fail CLOSED (not open). Do not confuse BF19 failure position with other air-operated valves that fail open (MS132, DR6, AF11, etc.).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-h</div>
<strong>Loss of Control Air cascade (alternate path):</strong> #2 SAC trip causes Unit 2 ECAC auto-start (loads at 85 psig); #1 SAC then trips and locks out; #1 ECAC has tripped. Only the 2 ECAC remains. <span class="hi-exam">2A Control Air Header is supplied from #2 ECAC; 2B Control Air Header is supplied from #1 ECAC</span> — with #1 ECAC down, 2B header drops below 80 psig and AB.CA-0001 routes to the alternate path (Step 3.19 → 3.57+). <span class="hi-trap">All three SAC supply breakers open is the auto-start signal for both ECACs, but only the Unit 2 ECAC will auto-start (Unit 1 will not). Next-to-load SAC needs Station Air pressure 5 psig below the 105 psig follow setpoint for ~5 seconds before it auto-starts.</span> Critical alternate-path actions: isolate letdown (close 2CV3/4/5/2/277/7); terminate any liquid/gaseous release (close 2WL51 and 2WG41); manually trip the reactor on BF19 closure with SG levels uncontrollable.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q37</div>
Loss of control air to <span class="hi-exam">2CC215 (EXCESS LETDOWN HX CC INLET V) fails it closed</span> (fail air-and-power), removing CC cooling from the Excess Letdown HX. Excess letdown temperature/pressure rise and operators secure excess letdown. See [[CCW]], [[CVCS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q62</div>
The Emergency Control Air Compressor (ECAC): <span class="hi-exam">at 95 psig and above header pressure the ECAC will NOT supply the Control Air header</span>; after any SEC start the only remaining ECAC trip is motor overload. With both CA headers at 96 psig before and after, a SEC stop/restart of the ECAC has no effect on the CA headers. See [[S2.OP-SO.CA-0001 — Control Air System Operation]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q96</div>
During refueling fuel movement, <span class="hi-exam">a loss of Control Air to containment precludes core alterations because the manipulator crane is air-powered for gripping</span>. See [[Refueling]], [[S2.OP-SO.SF-0009 — Refueling Operations]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q64</div>
On a total loss of Control Air affecting both units (operating SAC tripped/unrestartable, Unit 2 ECAC tripped after starting), the AB.CA-0001 CAS action directs: <span class="hi-exam">if BOTH CA header pressures are &lt;<span class="val-trip">80 psig</span>, trip the Rx — on BOTH units</span>. The <span class="hi-exam">BF19s (Feed Reg Valves) go shut</span> as their air runs out. <span class="hi-trap">The FRVs are NOT supplied backup air from the ECACs (a check valve blocks control air to the BF19s; only Station Air supplies the BF19s). Unit 1 ECAC feeds the 1B/2B headers; Unit 2 ECAC feeds the 1A/2A headers.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q63</div>
Normal Control Air (CA) header pressure and ECAC auto-start (AB.CA Basis Document): when supplied from Station Air through the dryers, CA runs ~5 psig below SA pressure and cycles with the SA cycle, so <span class="hi-exam">CA pressures normally run between 95 and 105 psig (≈100 psig)</span>. The <span class="hi-exam">Emergency Control Air Compressor (ECAC) auto-starts if CA pressure drops to 85 psig</span>. <span class="hi-trap">Normal is ≈100 psig (not 110), and the ECAC auto-start is 85 psig (not 90). 88 psig is the AB.CA-0001 ECAC MANUAL start, and 100 psig is the Station Air Compressor start threshold.</span>
</div>

## Connections

- Related systems: [[CCW]], [[AFW]], [[CVCS]], [[Main Steam]], [[Feed & Condensate]], [[Containment]], [[Waste Gas]], [[Steam Generator & Blowdown]], [[RHR]], [[DC Power]]
- Related procedures: [[AB.CA-0001 — Loss of Control Air]], [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]], [[S1.OP-PT.CA-0001 — Emergency Control Air Compressor Test]], [[SC.OP-SO.SA-0001 — Station Air System Operation]], [[S2.OP-AR.ZZ-0011 — Alarm Response (2CC1)]], [[S2.OP-SO.CA-0001 — Control Air System Operation]]
- Related abnormals: [[AB.460-0003 — Loss of 2C 460/230V Vital Bus]]
- Related exam questions: [[2015 Q13]], [[2016 Q62]], [[2016 Q63]], [[2016 Q80]], [[2016 Q90]], [[2018 Q25]], [[2018 Q26]], [[2018 Q61]], [[2018 Q90]], [[2018 Q93]], [[2019 Q27]], [[2019 Q61]], [[2019 Q93]], [[2020 Q15]], [[2020 Q45]], [[2020 Q54]], [[2022 Q53]], [[2022 Q77]], [[2022 Q79]], [[2022 Q88]], [[2015 Q37]], [[2015 Q62]], [[2015 Q96]], [[2014 Q19]], [[2014 Q64]], [[2012 Q14]], [[2012 Q34]], [[2012 Q38]], [[2012 Q63]]
- Related JPMs: [[2016 JPM Sim-h]], [[2020 JPM IP-j]]
- Related tech specs: [[TS 3/4.6 — Containment]]
- Related exam: [[2015 NRC Written Exam]], [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
