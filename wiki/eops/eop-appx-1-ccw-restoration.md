---
title: "EOP-APPX-1 — Component Cooling Water Restoration"
category: eops
status: draft
aliases:
  - EOP-APPX-1
  - APPX-1
---

# EOP-APPX-1 — Component Cooling Water Restoration

## Purpose

Provides guidance for restoring CCW following a MODE III (Loss of Off-Site Power concurrent with Safety Injection) event, where CCW pumps are stripped and not reloaded by the SEC. CCW restoration is needed to support ECCS pump seals during recirculation phases.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q76</div>
EOP-TRIP-1 step 17 directs implementation of EOP-APPX-1 to start one CCW Pump. Per APPX-1 Basis, the CCW pump to start is determined by <span class="hi-exam">which EDG has adequate margin based on out-of-service equipment</span>. Step 2 starts the selected CCW pump. <span class="hi-exam">Both CCW HXs are placed in service</span> because at least three SW pumps are running (primary/lead SW pump starts and loads on each EDG in MODE III). <span class="hi-trap">EOP-TRIP-1 also directs S2.OP-SO.CC-0002(Q) for CCW HX operation, but that transition is only valid if two or more CCW pumps are already in service and HXs are not in Auto. During MODE III SEC loading, no CCW pumps are running — so APPX-1 is the correct transition.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 Sim-h</div>
CCW pump start after a LBLOCA + LOOP (all vital buses on EDGs, no CCW running). Step 1: no vital bus on station power → Step 2. Step 2: all ECCS and MD-AFW pumps running, no CCW pump running → RNO → Step 3. Step 3: <span class="hi-exam">all 4KV vital buses energized → GO TO Step 4</span> to start 22 CCW pump: BLOCK/RESET 2B and 2C SECs, swap switchgear room supply fans (stop 22 / start 23 at RP2), shed 22 CFCU / 24 CFCU / 22 Aux Bldg Exhaust Fan at CC1. <span class="hi-exam">Alternate path: 22 CCW pump fails to start (Step 4.f) → RNO restarts a CFCU and GO TO Step 5 to start 21 CCW pump</span> (BLOCK/RESET 2A and 2B SECs, lock out 21 Chiller, swap RP2 fans, shed/restore CC1 loads, start 21 CCW). Step 6 places both CCW HXs in service IAW S2.OP-SO.CC-0002(Q), requiring <span class="hi-exam">at least 3 SW pumps running</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-h</div>
CCW pump start during LBLOCA with LOOP: Step 1 — no vital bus energized from station power transformers (all on EDGs or de-energized). Step 2 — all ECCS and motor-driven AFW pumps running on A and C buses; NO CCW pumps running. Step 3 — <span class="hi-exam">select strategy C (2B bus de-energized, pumps available = 21 or 23)</span>. Step 6e: attempt <span class="hi-exam">21 CCW on 2A bus — fails to start</span>. RNO: reset CS, restart 21 CS pump, GO TO Step 6h. Step 6h: <span class="hi-exam">Block 2C SEC, Emergency Loading Reset, stop 22 CS pump, start 23 CCW pump</span>, reset spray actuation, close 22CS2. Each CCW start attempt requires stopping a CS pump to create margin on the SEC-loaded EDG.
</div>

## Connections

- Related systems: [[CCW]], [[Service Water]], [[EDGs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]]
- Related procedures: [[AB.CC-0001 — Loss of Component Cooling Water]]
- Related exam questions: [[2020 Q76]]
- Related JPMs: [[2018 JPM Sim-h]], [[2014 JPM Sim-h]]
- Related exam: [[2018 NRC Operating Exam]], [[2020 NRC Written Exam]], [[2014 NRC Operating Exam]]
