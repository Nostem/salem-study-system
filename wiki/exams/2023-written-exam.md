---
title: "2023 NRC Written Exam"
category: exams
status: draft
aliases:
  - 2023 exam
---

# 2023 NRC Written Exam

## Overview

- **Exam:** SALEM 2023 NRC Exam (21-01 ILOT) - Rev. 1
- **RO Questions:** 75
- **SRO-Only Questions:** 25

<a href="/salem-study-system/exam-pdfs/2023-written.pdf" target="_blank">View Exam PDF</a>

## RO Questions

### Q1 — RCS Low Flow / P-7 and P-8 Logic

**Given:**

- Salem Unit 2 is at 25% reactor power.
- The RO reports the following flow indications on 21 RC loop:
  - Channel 1 - 89%
  - Channel 2 - 89%
  - Channel 3 - 92%

Which of the following describes the expected response?

**Choices:**

- A. Per the Alarm Response Procedure, manually trip the reactor, stop 21 RCP, and enter 2-EOP-TRIP-1, Reactor Trip or Safety Injection.
- B. RC flows are degraded but above the RPS setpoint for low RCS flow; power operation may continue.
- C. Automatic reactor trip based on 2/3 low flow channels on one RC loop with power greater than P-7; perform immediate actions per 2-EOP-TRIP-1, Reactor Trip or Safety Injection.
- D. Automatic reactor trip based on 1/3 low flow channels on one RC loop with power greater than P-7; perform immediate actions per 2-EOP-TRIP-1, Reactor Trip or Safety Injection.

**Answer:** A

**Explanation:** Two out of three channels less than or equal to 90% of design loop flow indicates degraded RCP. Since reactor power is above P-7 (10%) and below P-8 (36%), no automatic reactor trip will occur with a loss of only one RC loop low flows. However, per S2.OP-AR.ZZ-0004 for OHA D-28, RCP BKR OPEN/FLO LO, with a degraded RCP flow, the RCP must be stopped, the reactor manually tripped, and enter 2-EOP-TRIP-1 since Tech Specs does not allow for three loop operation in Mode 1.

**References:** Logic drawing 221054, simplified ESF-2, S2.OP-AR.ZZ-0004 (R29)
**Learning Objective:** NOS05RXPROT-15, Obj 12.a
**Source:** New
**Cognitive Level:** Fundamental/Memory
**K/A:** EPE 7 EA2.08 (3.0)

---

### Q2 — Small Break LOCA / RCS Heat Removal Methods

**Given:**

- A small break LOCA and a Loss of ALL Offsite Power occurred on Salem Unit 2
- SG pressures are 1015 psig and stable
- RCS pressure is 1600 psig and slowly lowering
- Highest CET temperature is 590°F and lowering
- RCS T-Hot temperatures are 554°F and lowering
- RCS T-Cold temperatures are 548°F and stable
- 2B 4KV Vital Bus is locked out on Bus Differential

What is the primary method for RCS heat removal for current plant conditions?

**Choices:**

- A. Forced RCS Cooling
- B. Natural Circulation
- C. Reflux Boiling
- D. ECCS Injection and Break flow

**Answer:** B

**Explanation:** Forced cooling is not available due to Loss of All Offsite Power. Only one Charging Pump is running and no SI pumps based on RCS pressure above the shutoff head (1540 psig), therefore, ECCS injection flow and break flow are insufficient for RCS heat removal. Natural circulation conditions are met based on the following parameters: (1) subcooling > 0°F. RCS pressure at 1600 psig has a saturation temperature of approx. 606°F. Hottest CET is 590°F, therefore subcooling is approx. 606 - 590 = 16°F of subcooling, (2) SG pressures are stable and lowering, (3) RCS T-Hots are stable or dropping, (4) CETs are lowering, and (5) RCS T-colds are at saturation temp for SG pressure. SG pressure is 1015 psig (pre-set pressure for MS110s) which is a saturated temp from the outlet of the SGs of approx. 548°F. Therefore per 2-EOP-LOCA-2 step 19.1 conditions for Natural Circulation are met and will be the RCS heat removal method.

**References:** 2-EOP-LOCA-2 (R42), ASME Steam Tables (year 2000)
**Learning Objective:** NOS05LOCA02-06, Obj 5
**Source:** Modified - Callaway 2017 NRC RO8
**Cognitive Level:** Comprehension/Analysis
**K/A:** EPE 9 EK1.03 (4.0)

---

### Q3 — CVCS / CV71 Seal Backpressure Control

**Given:**

- Salem Unit 1 is experiencing a RCS leak inside containment.
- The crew is performing S1.OP-AB.RC-0001, Reactor Coolant System Leak.
- 11 charging pump is in service.
- The RO is attempting to stabilize PZR level by adjusting charging flow using the 1CV55, CHARGING FLOW CONTROL VALVE, and 1CV71, CHG HDR PCV.

Which of the following completes the below statement? When 1CV71 is throttled ...

**Choices:**

- A. open, seal injection rises and charging flow rises.
- B. open, seal injection flow lowers and charging flow lowers.
- C. closed, seal injection flow rises and charging flow lowers.
- D. closed, seal injection lowers and charging flow rises.

**Answer:** C

**Explanation:** When the 1CV71 is closed, then backpressure to the seal injection lines will rise resulting in rising RCP seal injection flows and allowing less charging flow to the non-regen HX, thereby lowering charging flow to the RCS. 1CV71 acts as a backpressure control valve that affects both charging and seal injection flows.

**References:** S1.OP-AB.RC-0001 (R18), CVCS one-line dwg
**Learning Objective:** NOS05CVCS00-18, Obj 4
**Source:** Bank - Byron 2017 NRC RO4
**Cognitive Level:** Comprehension/Analysis
**K/A:** APE 22 AA1.05 (3.3)

---

### Q4 — CCW / Thermal Barrier Rupture Indications

**Given:**

- Salem Unit 2 is at 100% power
- The operating crew suspects an RCP Thermal Barrier rupture.

Which of the following indications would provide corroborating evidence for this condition?

1. 2R17 A/B, Component Cooling Radiation Monitors, in Warning
2. PZR level rising
3. CCW Surge Tank level rising
4. Charging flow lowering
5. 2CC131, RCP Thermal Barrier Valve, goes closed

**Choices:**

- A. 1 and 3 Only
- B. 2 and 4 Only
- C. 2, 4, and 5 Only
- D. 1, 3, and 5 Only

**Answer:** D

**Explanation:** A Thermal Barrier leak will cause CCW surge tank to rise as RCS will be leaking into the CCW system, RCS in-leakage will also be identified as a rise in the 2R17 A or B radiation monitors that monitors activity in the CCW system, and the 2CC131 valve will also close on high CCW flow to the Thermal Barrier due to a thermal barrier leak. Choices 1, 3, and 5 are the correct indications. PZR level would NOT rise (RCS is leaking OUT to CCW). Charging flow would NOT lower.

**References:** S2.OP-AB.CC-0001 (R20)
**Learning Objective:** NOS05CCW000-16, Obj 4.c
**Source:** New
**Cognitive Level:** Comprehension/Analysis
**K/A:** APE 26 G2.1.19 (3.9)

---

### Q5 — PZR Pressure Channel Fails High / OT Delta-T Effect

**Given:**

- Salem Unit 2 is at 100% power
- PZR Pressure controlling channel fails HIGH

Based on the conditions above, the _(1)_ reactor trip setpoint on the unaffected RCS loops will _(2)_.

**Choices:**

- A. (1) OT Delta-T (2) lower
- B. (1) OT Delta-T (2) rise
- C. (1) OP Delta-T (2) rise
- D. (1) OP Delta-T (2) lower

**Answer:** A

**Explanation:** The failed PZR pressure controlling channel will result in PZR pressure lowering. The lowering PZR pressure is one input into OT Delta-T to determine its trip setpoint. As RCS pressure lowers, the OT Delta-T setpoint will lower. With no operator action, the PZR pressure will continue to rapidly lower until the OT Delta-T reactor trip setpoint is reached first (per S2.OP-AB.PZR-0001 bases section for Attachment 1). Note: OP Delta-T does NOT have a pressure input.

**References:** S2.OP-AB.PZR-0001 (R20)
**Learning Objective:** NOS05ABPZR1-05, Obj 2
**Source:** Bank - Salem
**Cognitive Level:** Comprehension/Analysis
**K/A:** APE 27 AA2.11 (4.0)

---

### Q6 — Conduct of Operations / RO Leaving ATC Area

**Given:**

- Salem Unit 2 is experiencing a Steam Generator Tube Rupture
- The crew is performing actions per 2-EOP-SGTR-1, Steam Generator Tube Rupture
- The CRS, RO, and BOP operators are the only licensed operators in the control room
- The RO needs to go to the Control Equipment Room (back rack area) to perform an action

Per OP-AA-101-111, Roles and Responsibilities of On-Shift Personnel, which of the following describes the requirements for this activity?

**Choices:**

- A. must be relieved by a licensed operator other than the on-shift Unit 2 BOP operator.
- B. may leave as long as the on-shift Unit 2 BOP operator remains "At the Controls" area.
- C. may leave without being relieved by another licensed operator with CRS permission ONLY.
- D. must be relieved by another licensed operator and a full turnover must be performed.

**Answer:** B

**Explanation:** Per OP-AA-101-111, at least one RO must be in the "At The Controls" (ATC) area (or inner-horseshoe) at all times during Modes 1-6, except for the time period required to acknowledge the receipt of an alarm outside this area or to perform actions required for safe plant operation. The BOP operator remaining in the ATC area satisfies this requirement.

**References:** OP-AA-101-111 (R11)
**Learning Objective:** NOS05CONDOP-15, Obj 2.f and 2.g
**Source:** New
**Cognitive Level:** Fundamental/Memory
**K/A:** EPE 38 G2.1.3 (3.7)

---

### Q7 — PZR Backup Heater Power Supplies

**Given:**

- Salem Unit 2 is at 100% power
- A reactor trip and Safety Injection occur due to the rapid depressurization of all steam generators.
- 2H and 2E 4KV Group Buses fail to auto transfer and are now de-energized
- The crew is performing actions in 2-EOP-LOSC-2

Which of the following describes the current status of the PZR Backup Heaters?

**Choices:**

- A. ONLY 21 Backup Group is available, 22 Backup Group can be locally transferred to an emergency backup source.
- B. ONLY 22 Backup Group is available, 21 Backup Group can be locally transferred to an emergency backup source.
- C. NEITHER 21 or 22 Backup Groups are available, Backup Groups can be locally transferred to an emergency backup source.
- D. BOTH 21 and 22 Backup Groups are available, Backup Groups will automatically transfer to an emergency backup source.

**Answer:** A

**Explanation:** The preferred or normal power source for the PZR Heater Backup Groups is: Group 1 (21) - 2G and Group 2 (22) - 2E 4KV Group Buses. The PZR Heaters can be manually transferred to the emergency backup source: Group 1 (21) from 2C and Group 2 (22) from 2A 460V vital bus. With 2H and 2E unavailable, only PZR Heater Group 1 (21) remains available from 2G Group Bus. Group 2 (22) is unavailable but can be locally transferred to the emergency backup power. Transfer is manual, not automatic.

**References:** 2-EOP-LOSC-2 (R41)
**Learning Objective:** NOS05PZRPL-12, Obj 5.b
**Source:** New
**Cognitive Level:** Fundamental/Memory
**K/A:** W E12 EK2.03 (3.2)

---

### Q8 — FW Heater High Level / Effect on Reactor Power

**Given:**

- Unit 2 is at 100% Power
- OHA G-22, FW HTR IN VLV TRIP & LVL HI, is Alarming
- PO reports high level in 21A Low Pressure Feedwater Heater

1. Based on the above condition, _(1)_ CN22(s), Low Pressure FW Heater Inlet Valve, will be closed.
2. Actual reactor thermal power will be _(2)_.

**Choices:**

- A. (1) ALL (2) higher
- B. (1) ALL (2) lower
- C. (1) Only the 21 (2) lower
- D. (1) Only the 21 (2) higher

**Answer:** D

**Explanation:** High water level in 21A Low Pressure feedwater heater will only close the associated 21CN22 inlet valve (not all three strings). Based on one LP FW heater string out of service, colder feedwater will enter the reactor. The cooler FW will have the effect of raising reactor thermal power (positive MTC effect from cooler moderator) and also provide some shielding to the PR NIS, resulting in the actual NI reactor power indication being lower than actual. Reactor power should be determined based on RCS delta-Ts and turbine load should be reduced to prevent exceeding reactor thermal power limits.

**References:** S2.OP-AR.ZZ-0007 (R67)
**Learning Objective:** NOS05ABCN01-07, Obj 3
**Source:** New
**Cognitive Level:** Comprehension/Analysis
**K/A:** APE 54 G2.2.44 (4.2)

---

### Q9 — Station Battery Capacity During SBO

Which of the following describes the capacity of the station batteries during a station blackout?

Note: 2-EOP-LOPA-1, Loss of ALL AC Power

**Choices:**

- A. 2 hours assuming 2-EOP-LOPA-1 load shedding.
- B. 2 hours during worst case loading (no 2-EOP-LOPA-1 load shed)
- C. 6 hours during worst case loading (no 2-EOP-LOPA-1 load shed)
- D. 6 hours assuming 2-EOP-LOPA-1 load shedding.

**Answer:** B

**Explanation:** The 125 VDC vital batteries are designed to have adequate capacity to supply its Station Blackout (SBO) coping and restoration loads during the four (4) hour SBO coping duration with manual stripping of some non-essential loads (ref. section 7.2.2.3 in VTD 314204). The batteries are rated for two (2) hours of operation following a Loss of All AC Power without load shed. With load shedding per EOP-LOPA-1, battery life extends to 4 hours. Loss of All AC Power is not a Design Basis Accident (DBA).

**References:** S2.OP-AB.LOOP-0001 (R32), PSBP 314204 (SBO calculation), FSAR Sect 8.1.4.1
**Learning Objective:** NOS05DC ELEC-11, Obj 2
**Source:** Bank - Beaver Valley 2017 NRC RO11
**Cognitive Level:** Fundamental/Memory
**K/A:** EPE 55 K3.01 (4.1)

---

### Q10 — RCP Seal Injection / Seal Inlet Temperature Limit

**Given:**

- Salem Unit 2 experienced a Loss of Off-Site Power
- The crew is performing S2.OP-AB.LOOP-0001
- ALL Charging Pumps on Unit 2 are unavailable
- 13 Charging Pump from Unit 1 is being aligned to supply charging flow to Unit 2
- Power to the 4KV Group Buses have been restored
- RCP seal inlet temperatures: 21 RCP - 227°F, 22 RCP - 220°F, 23 RCP - 219°F, 24 RCP - 221°F

Based on the above conditions, restoring seal injection flow to the RCPs _(1)_ permitted. The reason for checking RCP seal inlet temperatures is to prevent _(2)_.

**Choices:**

- A. (1) is NOT (2) actuation of the Safe Shutdown seal
- B. (1) is (2) actuation of the Safe Shutdown seal
- C. (1) is (2) damage to #1 seal
- D. (1) is NOT (2) damage to #1 seal

**Answer:** D

**Explanation:** Per S2.OP-AB.LOOP-0001, Attachment 10, if ANY one of the RCP seal inlet temperatures is ≥ 225°F, then restoring seal injection flow to the RCPs is NOT permitted. Based on 21 RCP seal inlet temperature of 227°F (≥ 225°F), seal injection must be isolated prior to starting 13 charging pump. The reason is to prevent thermal shock from restoring cold seal injection water and damage to the RCP #1 seal. Note: Safe Shutdown Seal actuation is monitored by seal OUTLET temperature (limit 190°F), not seal inlet temperature.

**References:** S2.OP-AB.LOOP-0001 (R34)
**Learning Objective:** NOS05ABLOP1-09, Obj 2
**Source:** Bank - Salem
**Cognitive Level:** Comprehension/Analysis
**K/A:** APE 56 AK3.02 (4.1)

---

*Questions 11-75 and SRO-Only Questions 76-100 to be continued.*
