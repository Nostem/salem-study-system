---
title: CVCS
category: systems
status: draft
aliases:
  - CVCS
  - Boration Systems
  - charging and letdown
---

# CVCS

## Function

Controls RCS chemistry, inventory, and boron concentration. Provides charging flow, letdown flow, RCP seal injection, boron concentration control, RCS chemistry control, and RCS inventory control. (UFSAR 9.3.4)

## Design Bases

- **Reactivity hold-down:** Compensates for fuel burnup and fission product poisoning by adjusting boron concentration
- **Hot shutdown capability:** Can borate RCS to hot shutdown boron concentration
- **Cold shutdown capability:** Can borate RCS to cold shutdown conditions
- Provides seal water injection to RCPs (8 gpm per pump)
(UFSAR 9.3.4.1)

## Major Components

- **Centrifugal Charging Pumps:** 2 per unit (21 and 22). Also serve as high-head SI pumps during LOCA. Design pressure 2800 psig, design flow 150 gpm, shutoff head 2670 psig. (UFSAR T6.3-5)
- **Positive Displacement Charging Pump:** 1 per unit (23). Powered from 460V bus.
- **Letdown Orifices:** Control letdown flow rate
- **Letdown Heat Exchanger:** Cools letdown flow (via CCW) before processing
- **Mixed Bed Demineralizers:** Remove ionic impurities and fission products
- **Volume Control Tank (VCT):** Surge volume for charging/letdown mismatch. Hydrogen cover gas for dissolved gas control.
- **Boric Acid Tanks (BATs):** Store concentrated boric acid solution (6560–6990 ppm per TS). Solution temperature maintained ≥63°F to prevent precipitation.
- **Boric Acid Transfer Pumps:** Transfer boric acid from BATs to RCS
- **Excess Letdown Heat Exchanger:** Alternate letdown path
(UFSAR 9.3.4.2)

## Reactor Makeup Control Modes

- **Dilution:** Increases primary water supply flow, decreases boron concentration
- **Boration:** Transfers boric acid from BATs to charging pump suction
- **Automatic Makeup:** Maintains VCT level by automatically adjusting primary water and boric acid flows
(UFSAR 9.3.4.2.4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q3</div>
1CV179 (PRIMARY WATER FLOW) <span class="hi-exam">fails CLOSED on loss of 125 VDC power</span>. During auto makeup with CV179 failed closed, actual boron flow through the blender is higher than the setpoint → RCS boron concentration rises → negative reactivity → Tavg lowers → <span class="hi-exam">control rods step OUT</span> (in auto) to restore Tavg. <span class="hi-trap">If CV179 failed OPEN, primary water flow would be excessive → RCS dilution → rods step IN. The failure mode (closed) is key.</span> Primary Water Flow Deviation Alarm setpoint: <span class="hi-exam"><span class="val-alarm">&plusmn;5.0 gpm</span></span>. Boric Acid Flow Deviation Alarm setpoint: <span class="val-alarm">&plusmn;0.8 gpm</span> (different alarm, common distractor).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q29</div>
VCT level control logic: <span class="hi-exam">only LT-112 actuates automatic make-up</span>. Automatic swapover to RWST requires <span class="hi-exam">2/2 coincidence (LT-112 AND LT-114) at low-low VCT level</span>. CV35 (high level divert valve) opens on LT-112 high signal. If LT-112 fails HIGH: CV35 opens and drains the VCT, auto make-up will NOT actuate (controller sees high level), and auto swapover to RWST will NOT occur (2/2 coincidence not met with LT-112 failed high). The charging pump loses suction as VCT empties, resulting in <span class="hi-exam">charging pump cavitation and damage</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q12</div>
VCT level monitoring and overpressure protection: <span class="hi-exam">LT-114 is only available in the control room via the plant computer</span> (NOT on the control console). LT-114 is also located in Panel 216 in charging pump alley. VCT overpressure protection is provided by <span class="hi-exam">2CV241, VCT relief valve, set to <span class="val-trip">75 psig</span>, relieving to the CVCS HUT</span>. <span class="hi-trap">When either VCT level controller (LT-112 or LT-114) is placed in MANUAL, it overrides the auto function of the other controller. With LT-112 in MANUAL FLOW TO VCT, the LT-114 Hagen controller will NOT automatically divert 2CV35 to the CVCS HUT at 77-87% VCT level.</span>
</div>

## Charging Pump Power Supplies

| Pump | Power Supply | Source |
|---|---|---|
| 21 CV Pump | <span class="hi">2B 4KV Vital Bus</span> | NOS05CVCS00-17 |
| 22 CV Pump | <span class="hi">2C 4KV Vital Bus</span> | NOS05CVCS00-17 |
| 23 CV Pump | <span class="hi">2A 460V Bus</span> | NOS05CVCS00-17 |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q29</div>
On loss of 2C 4KV bus (bus differential): <span class="hi-exam">22 CV Pump is lost (powered from 2C)</span>. Available charging pumps: <span class="hi-exam">21 CV Pump (2B 4KV bus) and 23 CV Pump (2A 460V bus)</span>. <span class="hi-trap">23 CV Pump is powered from the 2A 460V bus, NOT 2C 4KV — a common distractor. It remains available on loss of 2C.</span>
</div>

## Charging Flow Paths and SI Isolation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q30</div>
Post-SI effect on CV71 (Seal Pressure Control Valve): <span class="hi-exam">CV-68 and CV-69 (Charging Header Isolation Valves) go CLOSED on an SI signal</span>. These valves are in series with the CV-71 flow path to the charging header/regenerative HX. Therefore, <span class="hi-exam">throttling CV-71 after SI has NO effect on charging pump discharge pressure or total charging flow</span> — the flow path through CV-71 is already isolated by CV-68/69. <span class="hi-trap">During normal power alignment, throttling CV-71 closed would raise charging pump discharge pressure and redirect flow to RCP seals. After SI, this relationship does not apply because the downstream path is isolated.</span>
</div>

## Charging and Letdown

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q29</div>
Letdown temperature auto-divert: 2CV21 automatically diverts letdown flow to VCT (bypassing mixed bed demineralizers) at <span class="hi-exam"><span class="val-alarm">136°F</span></span>. Procedural limit per S2.OP-SO.CVC-0012 is <span class="hi-exam"><span class="val-trip">140°F</span></span> to prevent resin damage. Rising letdown temperature causes demineralizers to <span class="hi-exam">release boron into the RCS</span> (RCS boron concentration rises). <span class="hi-trap">2CV35 diverts to Hold-Up Tanks on high VCT level — it is downstream of the demineralizers and does NOT bypass them.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q30</div>
2CV3 letdown orifice = <span class="hi-exam">45 gpm</span>. When placing second orifice in service, letdown pressure and flow rise. 2CV18 (Letdown Pressure Control Valve) must be <span class="hi-exam">manually throttled OPEN</span> to maintain letdown pressure at target ~<span class="val-normal">300 psig</span>. 2CV6 (Letdown Relief Valve) setpoint = <span class="val-trip">600 psig</span>. 2CC71 (Letdown HX Temp Control Valve) auto-modulates OPEN to increase CCW flow through the letdown HX as temperature rises.
</div>

- **Normal charging flow:** One charging pump maintains RCS inventory and PZR level
- **Seal injection:** 8 gpm per RCP (32 gpm total for 4 RCPs)
- **Seal return:** 3 gpm per RCP
- **CV55 (Charging Flow Control Valve):** Controls total charging flow to the RCS
- **CV71 (Charging Header PCV):** Backpressure control valve downstream of seal injection takeoff
- **CV73 (Seal Injection Pressure Control Bypass Valve):** Manual bypass around CV71, used during Control Room Evacuation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q86</div>
Seal injection control during CR evacuation (AB.CR-0001): <span class="hi-exam">CV-71 is isolated (by closing CV-70) and CV-73 (seal injection pressure control bypass valve) is opened and manually adjusted</span>. Charging flow is then controlled locally at <span class="hi-exam">CV-55 local controller in Panel 216</span> using a centrifugal charging pump. <span class="hi-trap">23 Charging Pump (PD pump) is tripped by the procedure once a centrifugal pump is verified running — do NOT use the 23 Charging Pump scoop tube for flow control during CR evacuation.</span>
</div>
- **Letdown:** Controlled by letdown orifices, cooled by letdown HX, processed through demineralizers
- **Excess letdown:** Alternate path available if normal letdown is unavailable

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q5</div>
Excess letdown flow path during SI: <span class="hi-exam">Excess Letdown Isolation Valves (2CV278, 2CV131) do NOT receive automatic closure signals</span> on SI/Phase A. <span class="hi-exam">Seal Return Isolation Valves (2CV284, 2CV116) close automatically on Phase A</span>. After SI, seal return path is blocked → excess letdown flow continues through CV278/CV131 but downstream path is closed → <span class="hi-exam">CV115 (Seal Return Relief Valve) cycles, relieving flow to the PRT (not RCDT)</span>. CV134 (3-way valve directing excess letdown to VCT or RCDT) <span class="hi-exam">fails to VCT on loss of power and air</span>. <span class="hi-trap">Trap: eventually control air bleeddown from Phase A CA-330 isolation may fail CV278/CV131 closed, but this takes considerable time — the immediate effect is continued flow relieving to PRT via CV115.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q6</div>
23 Charging Pump speed controller has a low speed stop maintaining <span class="hi-exam">minimum charging flow of <span class="val-normal">47 gpm</span> for RCP seal injection</span>. When MFC demand lowers, charging flow stops at 47 gpm (not zero). Per AB.CVC-0001 step 3.109, if MFC malfunction with 23 Charging Pump in service, <span class="hi-exam">take manual control of 23 Charging Pump Speed Controller</span>. <span class="hi-trap">Not 2CV55 — 2CV55 only controls flow with centrifugal charging pumps, not the positive displacement 23 Charging Pump.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q3</div>
CV71 acts as a backpressure control valve affecting both charging and seal injection flows. <span class="hi-exam">Throttling CV71 CLOSED raises backpressure → seal injection flow RISES and charging flow LOWERS. Throttling CV71 OPEN lowers backpressure → seal injection flow LOWERS and charging flow RISES.</span> This relationship is critical during RCS leak response when adjusting charging to stabilize PZR level.
</div>

## Rapid Boration

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q19</div>
Rapid boration via BAT pump and 2CV175 requires <span class="hi-exam">adequate flow of 36 gpm</span>. If rapid boration flow is inadequate (e.g., only 20 gpm indicated), per EOP-TRIP-2: stop BAT pump, realign charging pump suction to the RWST, and maintain charging flow > 87 gpm. Note: EOP-FRSM-1 has a different pathway (cold leg injection via BIT valves) — do not confuse with EOP-TRIP-2 actions.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q21</div>
EOP-TRIP-2 rapid boration when 2CV175 fails to open: <span class="hi-exam">OPEN 2SJ1 and 2SJ2 (RWST to charging suction), then CLOSE 2CV40 and 2CV41 (VCT to charging suction)</span> to realign charging suction from VCT to RWST. <span class="hi-trap">Alternate rapid boration paths via 2CV174 (Blender Bypass), 2CV172/2CV185 (normal boration), or 2CV172/2CV181 (blender to VCT) exist in S2.OP-SO.CVC-0008 but are NOT directed in TRIP-2. Also note: 2CV181 directs boration flow to the top of VCT (spray nozzle) — boration flow is never directed there.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q22</div>
During high RCS activity (below TS limits), per AB.RC-0002: <span class="hi-exam">maximize letdown flow to accelerate RCS cleanup through the demineralizers</span>. Do NOT reduce letdown — increasing letdown is the correct response to accelerate cleanup.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q2</div>
Per AB.RC-0002 during high RCS activity: Step 3.14 requires a <span class="hi-exam">Centrifugal Charging Pump (CCP) in service</span> — crew is NOT required to swap to the PDP (13 Charging Pump). Step 3.16 directs <span class="hi-exam">maximize letdown flow</span>: place 1CV3 (45 GPM ORIFICE) in service in addition to the already in-service 1CV4 (75 GPM ORIFICE). <span class="hi-trap">Do NOT place both 75 gpm orifices (1CV4 + 1CV5) in service — the maximized lineup is one 75 gpm orifice plus the 45 gpm orifice.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q28</div>
If <span class="hi-exam">2TE-130 (temperature detector for 2CC71, Letdown HX Temp Control Valve) fails LOW</span>, the controller sees low temperature and drives 2CC71 closed (reduces CCW cooling flow through the letdown HX). With less cooling, <span class="hi-exam">letdown HX outlet temperature rises</span>. Hotter letdown water flowing through the mixed bed demineralizers <span class="hi-exam">causes boron release into the RCS</span> (boration effect), which <span class="hi-exam">lowers Tavg</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q45</div>
<span class="hi-exam">23 charging pump is supplied from the 2A 460V bus.</span> Loss of the 2A 460V MCC de-energizes 23 charging pump, causing loss of charging flow and letdown isolation. Per S2.OP-AB.460-0001: start a centrifugal charging pump and restore PZR level, then re-establish letdown.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q97</div>
RCS leak from CVCS (2CV6 Letdown Relief Valve): a <span class="hi-exam">CVCS leak that can be isolated does NOT require entry into TS 3.4.7.2 (Operational Leakage)</span>. The CVCS is considered an <span class="hi-exam">auxiliary system, not part of the RCS pressure boundary</span>. Once letdown is isolated and the leakage stops, TS 3.4.7.2 remains MET and an Emergency Declaration (UE EAL SU5.1) is NOT required. <span class="hi-trap">Trap: the 12 gpm leak from 2CV6 is NOT RCS pressure boundary leakage because the CVCS is auxiliary piping outside the RCS boundary.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q98</div>
CVCS Monitor Tank release with 2R18 inoperable: the <span class="hi-exam">SM/CRS authorizes the liquid radioactive waste release</span> (not the Radiation Protection Manager). Per ODCM 3.3.8, with 2R18 inoperable, Action 26 requires <span class="hi-exam">at least two independent samples analyzed AND at least two technically qualified staff independently verify release rate calculations and discharge line valving</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q77</div>
Loss of one centrifugal charging pump: <span class="hi-exam">23 Charging Pump (positive displacement) counts toward TS 3.1.2.4 (Charging Pumps — Operating) requirement</span> for reactivity addition capability. With 21 CHP tripped and 23 CHP started: <span class="hi-exam">two charging pumps remain OPERABLE (22 + 23) for reactivity TS</span>, and <span class="hi-exam">two boration flow paths remain OPERABLE for TS 3.1.2.2</span>. Only TS 3.5.2 (ECCS) applies — 21 CHP is the high-head ECCS component, and 23 CHP is NOT an ECCS high-head pump.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q50</div>
PZR Safety Valve seat leakage (vapor space LOCA): actual PZR level lowers below program level → <span class="hi-exam">master flow controller automatically raises charging flow</span> to compensate. <span class="hi-trap">Trap: PZR Safety Valves are on top of the PZR — steam leaking out reduces steam space volume, which lowers level. Candidates may incorrectly think level rises because the leak is "at the top."</span> As RCS pressure lowers, the <span class="hi-exam">OT&Delta;T trip setpoint automatically lowers (pressure-dependent variable setpoint)</span>, causing the first automatic reactor trip before reaching the fixed low PZR pressure trip at <span class="val-trip">1865 psig</span>.
</div>

## Cross-Unit Charging

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q91</div>
Per AB.CVC-0001 step 3.50, with <span class="hi-exam">no Unit 2 Charging Pumps available</span>: "COORDINATE with Unit 1 to place <span class="hi-exam">13 Charging Pump</span> in service using <span class="hi-exam">U/1 RWST</span>." This cross-unit alignment provides charging flow when all three Unit 2 pumps (21, 22, 23 CV Pumps) are unavailable. <span class="hi-trap">Trap: Tripping the reactor and initiating SI is NOT the directed action for total loss of charging at 8% power — AB.CVC-0001 provides the cross-unit recovery path first.</span>
</div>

## Tech Spec LCOs

- **[[TS 3/4.1.2 — Boration Systems]]** — Flow paths, charging pumps, borated water sources
- **[[TS 3/4.1.1 — Boration Control]]** — Shutdown margin (boration requirements)

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-c</div>
EOP-LOCA-2 auxiliary spray depressurization: open <span class="hi-exam">2CV75 (Aux Spray Valve)</span>, close <span class="hi-exam">2CV77 (Charging to Loop 23) and 2CV79 (Charging to Loop 24)</span> to redirect charging flow through the aux spray line to the pressurizer. Restore by closing 2CV75 and reopening 2CV77 or 2CV79.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q55</div>
Excess Letdown CCW isolation on Phase A: <span class="hi-exam">CC113 and CC215 (Excess Letdown Component Cooling Valves) receive a Phase A signal to close</span>. This is distinct from normal letdown isolation — <span class="hi-trap">CV2 and CV277 (Letdown Isolation Valves) do NOT close on Phase A; they close only on low PZR level. CV2/CV277 are NOT containment isolation valves.</span> The Phase A letdown isolation valves for normal letdown are <span class="hi-exam">CV3, CV4, CV5, and CV7</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q54</div>
Letdown orifice isolation valves (CV3, CV4, CV5) close on: <span class="hi-exam">Phase A signal, CV2 or CV277 closing, PZR level <17%, trip all charging pumps, or manual Phase A actuation from the safeguards bezel</span>. CV4 receives a closure signal <span class="hi-exam">directly from Phase A</span> (not directly from SI). SI actuates Phase A, which then closes CV4. <span class="hi-trap">CV2 and CV277 (letdown isolation valves) close on PZR low level <17% — NOT directly on SI or Phase A. Do not confuse CV2/CV277 interlocks with the letdown orifice valve (CV4) Phase A closure signal.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 RO-A2</div>
BAST level-to-volume conversions using S2.OP-TM.ZZ-0002 tank curves: <span class="hi-exam">94% = 7400 gal, 76% = 6000 gal</span>. After 105 minutes rapid boration at 40 GPM (4200 gal total, 2100 gal per BAST): 21 BAST final = <span class="hi-exam">5300 gal = 67%</span>, 22 BAST final = <span class="hi-exam">3900 gal = 49%</span>. EOP-TRIP-2 Step 4 requires <span class="hi-exam">35 minutes of rapid boration per stuck rod</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 IP-i</div>
Control Room Evacuation local charging flow control (AB.CR-0001 Attachment 5 Step 8.0): at <span class="hi-exam">Panel 216-1 (Chg Pmps FL & PR Inst Pnl)</span> in Unit 2 RCA, place <span class="hi-exam">E/P Bypass Line Selector Valve in MAN</span>, read <span class="hi-exam">2FI-128A</span>, then use the <span class="hi-exam">MANUAL hand air operator</span> to adjust 2CV55 charging flow to 70 gpm. <span class="hi-trap">2CV55 is air-to-close (fails open on loss of air) — clockwise on the hand air operator raises air pressure and LOWERS flow.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-j</div>
During Unit 1 Control Room Evacuation (AB.CR-0001 Att. 5), after locally opening all four reactor trip/bypass breakers: open <span class="hi-exam">1AX1AX7X (#13 Charging Pump breaker)</span> to stop uncontrolled charging, and open <span class="hi-exam">1CY2AX4I (1CV175 Rapid Borate Stop Valve breaker)</span> to de-energize the valve and stop potential uncontrolled boration.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 Sim-b</div>
Manual makeup to VCT (S2.OP-SO.CVC-0006 Section 5.2): with 900 ppm RCS boron and 6700 ppm BAST concentration, determine boric acid flow setpoint using <span class="hi-exam">Figure 100A</span> from S2.RE-RA.ZZ-0012 for 62 gpm PW flow — setpoint is <span class="hi-exam">~9.6 gpm (9-11 gpm acceptable)</span>. Place 2CV179 and 2CV172 in MANUAL/CLOSE, align blender outlet via <span class="hi-exam">2CV185 (preferred — to charging pump suction)</span> or 2CV181. Start PW pump in MANUAL, BA pump in MANUAL/FAST. Adjust BA flow on FI110A, PW flow on FI111A to 62 gpm. When VCT at 53%, secure makeup.
</div>

## Connections

- Related concepts: [[Rx Vessel & Internals]]
- Related EOPs: [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]], [[EOP-TRIP-2 — Reactor Trip Response]]
- Related procedures: [[S2.OP-TM.ZZ-0002 — Tank Capacity Data]], [[AB.CR-0001 — Control Room Evacuation]], [[S2.OP-SO.CVC-0006 — Boron Concentration Control]], [[S2.OP-SO.CVC-0008 — Rapid Boration]]
- Related exam questions: [[2019 Q2]], [[2019 Q3]], [[2019 Q41]], [[2019 Q50]], [[2020 Q5]], [[2020 Q12]], [[2020 Q21]], [[2020 Q29]], [[2020 Q30]], [[2020 Q55]], [[2020 Q77]], [[2020 Q86]], [[2020 Q91]], [[2020 Q97]], [[2023 Q3]], [[2023 Q19]], [[2023 Q22]], [[2023 Q28]], [[2023 Q29]], [[2023 Q45]], [[2023 Q87]], [[2023 Q97]], [[2023 Q98]], [[2022 Q6]], [[2022 Q29]], [[2022 Q30]], [[2022 Q54]], [[2022 Q61]]
- Related JPMs: [[2020 JPM IP-i]], [[2020 JPM SRO-A4]], [[2023 JPM Sim-c]], [[2022 JPM RO-A2]], [[2022 JPM IP-j]], [[2022 JPM Sim-b]]
- Related scenarios: [[2022 Scenario 3 — Power Ascension / Loss of Heat Sink]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]]
