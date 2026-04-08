---
title: Chemical and Volume Control System
category: systems
status: draft
aliases:
  - CVCS
  - Boration Systems
  - charging and letdown
---

# Chemical and Volume Control System

## Function

Controls RCS chemistry, inventory, and boron concentration. Provides charging flow, letdown flow, RCP seal injection, boron concentration control, RCS chemistry control, and RCS inventory control. (UFSAR 9.3.4)

## Design Bases

- **Reactivity hold-down:** Compensates for fuel burnup and fission product poisoning by adjusting boron concentration
- **Hot shutdown capability:** Can borate RCS to hot shutdown boron concentration
- **Cold shutdown capability:** Can borate RCS to cold shutdown conditions
- Provides seal water injection to RCPs (8 gpm per pump)
(UFSAR 9.3.4.1)

## Major Components

- **Centrifugal Charging Pumps:** 2 per unit. Also serve as high-head SI pumps during LOCA. Design pressure 2800 psig, design flow 150 gpm, shutoff head 2670 psig. (UFSAR T6.3-5)
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
<div class="callout-label">Exam — 2023 Q29</div>
VCT level control logic: <span class="hi-exam">only LT-112 actuates automatic make-up</span>. Automatic swapover to RWST requires <span class="hi-exam">2/2 coincidence (LT-112 AND LT-114) at low-low VCT level</span>. CV35 (high level divert valve) opens on LT-112 high signal. If LT-112 fails HIGH: CV35 opens and drains the VCT, auto make-up will NOT actuate (controller sees high level), and auto swapover to RWST will NOT occur (2/2 coincidence not met with LT-112 failed high). The charging pump loses suction as VCT empties, resulting in <span class="hi-exam">charging pump cavitation and damage</span>.
</div>

## Charging and Letdown

- **Normal charging flow:** One charging pump maintains RCS inventory and PZR level
- **Seal injection:** 8 gpm per RCP (32 gpm total for 4 RCPs)
- **Seal return:** 3 gpm per RCP
- **CV55 (Charging Flow Control Valve):** Controls total charging flow to the RCS
- **CV71 (Charging Header PCV):** Backpressure control valve downstream of seal injection takeoff
- **Letdown:** Controlled by letdown orifices, cooled by letdown HX, processed through demineralizers
- **Excess letdown:** Alternate path available if normal letdown is unavailable

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
<div class="callout-label">Exam — 2023 Q22</div>
During high RCS activity (below TS limits), per AB.RC-0002: <span class="hi-exam">maximize letdown flow to accelerate RCS cleanup through the demineralizers</span>. Do NOT reduce letdown — increasing letdown is the correct response to accelerate cleanup.
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

## Tech Spec LCOs

- **[[TS 3/4.1.2 — Boration Systems]]** — Flow paths, charging pumps, borated water sources
- **[[TS 3/4.1.1 — Boration Control]]** — Shutdown margin (boration requirements)

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 Sim-c</div>
EOP-LOCA-2 auxiliary spray depressurization: open <span class="hi-exam">2CV75 (Aux Spray Valve)</span>, close <span class="hi-exam">2CV77 (Charging to Loop 23) and 2CV79 (Charging to Loop 24)</span> to redirect charging flow through the aux spray line to the pressurizer. Restore by closing 2CV75 and reopening 2CV77 or 2CV79.
</div>

## Connections

- Related concepts: [[Nuclear Design]]
- Related EOPs: [[EOP-LOCA-2 — Post LOCA Cooldown and Depressurization]]
- Related exam questions: [[2023 Q3]], [[2023 Q19]], [[2023 Q22]], [[2023 Q28]], [[2023 Q29]], [[2023 Q45]], [[2023 Q87]], [[2023 Q97]], [[2023 Q98]]
- Related JPMs: [[2023 JPM Sim-c]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
