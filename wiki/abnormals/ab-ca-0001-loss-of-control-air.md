---
title: "AB.CA-0001 — Loss of Control Air"
category: abnormals
status: draft
aliases:
  - AB.CA-0001
  - S2.OP-AB.CA-0001
  - Loss of Control Air
---

# AB.CA-0001 — Loss of Control Air

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for responding to a loss of control/instrument air on Salem Unit 2, including identification of affected equipment and manual operation of air-operated valves.

## Key Information

### Attachment 2 — Auxiliary Feedwater System Valve Failure Positions

| Valve | Fails | Description | Manual Op |
|-------|-------|-------------|-----------|
| 21-24AF11 | FO | 23AFP Disch to 21-24SG | Yes |
| 21-24AF21 | FO | AFP to 21-24SG | Yes |
| 21-23AF52 | FC | AFP Suct XConn | Yes |
| 21-22AF40 | FO | 21-22AF Pump Recirc | Yes |
| 2MS53 | FHSS | 23AFP Turbine Governor | Yes |
| 2MS132 | FO | 23AFP Turbine Steam Inlet | - |
| 2DR6 | FO | Supply to AFW | Yes |

### Other Key Valve Failure Positions

| Valve | Fails | Description | Manual Op |
|-------|-------|-------------|-----------|
| 21/22SW122 | FO | SW Inlet Control Valve to CCW HX | Yes |

> [!exam] 2023 NRC Exam Q43
> 2MS132 (23 AFW Turbine Steam Inlet Valve) fails OPEN on loss of air. This causes 23 AFW pump to start and inject cold feedwater into all SGs, raising reactor power above 100% RTP. Operator should reduce power per S2.OP-IO.ZZ-0004.

> [!exam] 2023 NRC Exam Q44
> 2DR6 (AFW Tank Makeup valve) fails OPEN on loss of air. This causes AFWST level to rise and potentially overflow. Per Attachment 2, 2DR6 can be manually operated from the field to control tank level.

> [!exam] 2023 NRC Exam Q51
> 21SW122 (SW Inlet Control Valve to CCW HX) fails OPEN on loss of air (fails CLOSED on loss of 125VDC). When open, SW flow rises through CCW HX, lowering CCW temperature, which lowers RHR HX outlet temperature and raises cooldown rate. Can be manually operated per Attachment 2.

## Connections

- Related systems: [[Auxiliary Feedwater]], [[Service Water]], [[Component Cooling Water]], [[Residual Heat Removal]], [[Containment Systems]]
- Related procedures: [[S2.OP-IO.ZZ-0004 — Power Operation]]
- Related exam questions: [[2023 NRC Written Exam]]
