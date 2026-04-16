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
<div class="callout-label">Exam — 2019 Q61</div>
ECACs are manually started when CA headers lower to <span class="hi-exam val-alarm">88 psig</span>. <span class="hi-trap">100 psig is the threshold for starting the remaining Station Air Compressor, not the ECAC manual start setpoint.</span> Check valves in the CA system <span class="hi-exam">prevent ECACs from supplying the BF19 headers</span> — ensuring proper BF19 operation is NOT a reason to start ECACs.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q27</div>
CA330 (Control Air Isolation Valves) operability and isolation: IAW <span class="hi-exam">LCO 3.6.3 (Containment Isolation Valves), CA330s are required to be OPERABLE in MODES 1-4 ONLY</span>. The CA330s automatically close on a <span class="hi-exam">Phase A Containment Isolation signal, which is generated when containment pressure FIRST exceeds <span class="val-trip">4 psig</span></span>. <span class="hi-trap">Trap: 15 psig is the Phase B setpoint — CA330s close on Phase A (4 psig), NOT Phase B (15 psig). Also, LCO 3.6.3 applies in Modes 1-4, not ALL MODES.</span>
</div>

## Connections

- Related systems: [[CCW]], [[AFW]], [[CVCS]], [[Main Steam]], [[Feed & Condensate]], [[Containment]]
- Related procedures: [[AB.CA-0001 — Loss of Control Air]], [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]]
- Related procedures: [[S1.OP-PT.CA-0001 — Emergency Control Air Compressor Test]]
- Related exam questions: [[2019 Q27]], [[2019 Q61]], [[2019 Q93]], [[2020 Q15]], [[2020 Q45]], [[2020 Q54]], [[2022 Q53]], [[2022 Q77]], [[2022 Q79]], [[2022 Q88]]
- Related JPMs: [[2020 JPM IP-j]]
- Related tech specs: [[TS 3/4.6 — Containment]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]]
