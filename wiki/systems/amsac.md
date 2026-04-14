---
title: AMSAC
category: systems
status: draft
aliases:
  - ATWS Mitigation System
  - ATWS mitigation
  - AMSAC
---

# AMSAC (ATWS Mitigation System Actuation Circuitry)

## Function

Provides a diverse backup to the Reactor Protection System for mitigating Anticipated Transients Without Scram (ATWS). If the RPS fails to trip the reactor, AMSAC trips the turbine and actuates auxiliary feedwater to prevent RCS overpressurization and ensure decay heat removal. Required per 10CFR50.62. (UFSAR 7.8)

## Actuation

- **Input:** Low steam generator water level
- **Armed by:** P-20 (turbine steamline inlet pressure above setpoint). Below setpoint, AMSAC is blocked.
- **Actions:** Trips turbine, actuates auxiliary feedwater
(UFSAR 7.8.1)

## Key Design Features

- **Diverse from RPS:** Uses different sensors, logic, and actuation paths than the Reactor Trip System
- **Not safety-related:** But classified as important to safety for ATWS mitigation
- **Power supply:** Independent of RPS power supplies
- **Physically separated** from RTS and ESFAS
- **Testable at power**
(UFSAR 7.8.1, 7.8.2)

## AMSAC vs RPS

| Feature | RPS | AMSAC |
|---------|-----|-------|
| Classification | Safety-related | Non-safety, important to safety |
| Sensors | Nuclear instruments, process instruments | SG level, turbine pressure |
| Logic | Solid State Protection System | Independent microprocessor |
| Trips reactor | Yes (rod insertion) | No — trips turbine and starts AFW |
| Redundancy | 4 channels with 2/4 logic | 2 channels |
| Armed | Always (with permissives) | Only above P-20 (at power) |

## AMSAC Train-to-Pump Mapping

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q31</div>
AMSAC AFW pump start signals by train: <span class="hi-exam">Train A starts 21 AFW (motor-driven)</span>. <span class="hi-exam">Train B starts 22 AFW (motor-driven)</span>. <span class="hi-exam">Either train starts 23 AFW (turbine-driven)</span>. A spurious actuation of ONLY Train A starts <span class="hi-exam">21 and 23 AFW pumps</span> (not 22 AFW). <span class="hi-trap">Common trap: believing all three AFW pumps start on a single train actuation, or that both motor-driven pumps start on a single train.</span>
</div>

## Interlocks

- **C-20:** 2/2 turbine steamline inlet pressure above setpoint arms AMSAC; below setpoint blocks AMSAC
(UFSAR T7.2-2)

## Tech Spec LCOs

- AMSAC operability requirements per 10CFR50.62 implementation

## Connections

- Related systems: [[RPS/SSPS]], [[AFW]]
- Related concepts: [[ESF & Design]] (ATWS section)
- Related exam questions: [[2019 Q31]]
- Related exam: [[2019 NRC Written Exam]]
