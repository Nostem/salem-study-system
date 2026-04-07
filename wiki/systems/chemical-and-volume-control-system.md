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

## Charging and Letdown

- **Normal charging flow:** One charging pump maintains RCS inventory and PZR level
- **Seal injection:** 8 gpm per RCP (32 gpm total for 4 RCPs)
- **Seal return:** 3 gpm per RCP
- **Letdown:** Controlled by letdown orifices, cooled by letdown HX, processed through demineralizers
- **Excess letdown:** Alternate path available if normal letdown is unavailable

## Tech Spec LCOs

- **[[TS 3/4.1.2 — Boration Systems]]** — Flow paths, charging pumps, borated water sources
- **[[TS 3/4.1.1 — Boration Control]]** — Shutdown margin (boration requirements)

## Connections

- Related systems: [[Reactor Coolant System]], [[Reactor Coolant Pumps]], [[Emergency Core Cooling Systems]]
- Related tech specs: [[TS 3/4.1.1 — Boration Control]], [[TS 3/4.1.2 — Boration Systems]]
- Related concepts: [[Nuclear Design]]
