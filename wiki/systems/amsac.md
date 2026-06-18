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

## Function & Design Basis

Provides a diverse backup to the Reactor Protection System for mitigating Anticipated Transients Without Scram (ATWS). If the RPS fails to trip the reactor, AMSAC trips the turbine and actuates auxiliary feedwater to prevent RCS overpressurization and ensure decay heat removal. Required per 10CFR50.62. (UFSAR 7.8)

AMSAC backs up the Reactor Trip System (RTS) and the ESF Actuation System (ESFAS) for initiating turbine trip and auxiliary feedwater flow when an anticipated transient (e.g. a complete loss of main feedwater) is not followed by a reactor trip. It is independent of and diverse from the RTS and ESFAS — except for the final actuation devices, which are shared — and is classified as control-grade (non-safety-related) equipment. It is a highly reliable, microprocessor-based, single-train system powered from a non-Class 1E source. (UFSAR §7.8.1.1)

AMSAC continuously monitors steam generator level (an anticipatory indication of loss of heat sink) and, when level drops below a predetermined setpoint for at least a preselected time delay in three of the four steam generators, it trips the turbine, initiates auxiliary feedwater, and isolates steam-generator blowdown and sample lines. (UFSAR §7.8.1.1)

The AMSAC is designed for the following reasons: to ensure a secondary heat sink following an anticipated transient (ANS Condition II) without a reactor trip; to limit core damage following such a transient; and to ensure energy generated in the core stays within design limits so reactor coolant pressure is held within ASME Stress Level C. (UFSAR §7.8.1.3) Analyses show the most limiting ATWS event is either a loss of feedwater or a loss of load without a reactor trip. (UFSAR §7.8.1.3)

It is designed to be highly reliable, resistant to inadvertent actuation, and easily maintained. Reliability is assured through internal redundancy and continual self-testing; inadvertent actuations are minimized through internal redundancy, majority voting at the output stage, the low-level time delay, and the coincidence logic. (UFSAR §7.8.1.1)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q67</div>
The purpose of AMSAC is to prevent excessive <span class="hi-exam">RCS pressure</span> should the reactor trip breakers fail to open on demand. <span class="hi-trap">Trap: AMSAC does not prevent excessive feed flow (it ADDS AFW), does not reduce reactor power (it cannot scram the reactor), and does not protect SG tube differential pressure.</span> (AMSAC Lesson Plan NOS05AMSAC0-02 page 11; Salem FSAR 7.8)
</div>

### Diversity & Key Design Features

- **Diverse from RPS:** Uses different sensors, logic, and actuation paths than the Reactor Trip System
- **Not safety-related:** But classified as important to safety for ATWS mitigation
- **Power supply:** Independent of RPS power supplies
- **Physically separated** from RTS and ESFAS
- **Testable at power**
(UFSAR 7.8.1, 7.8.2)

AMSAC is digital and microprocessor-based, whereas the RTS is an analog-based protection system; where similar components serve the same function in both, the AMSAC component is sourced from a different manufacturer. This diversity prevents a common-mode failure from disabling AMSAC and the RTS (or ESFAS) simultaneously. A common-mode failure of analog RTS components that prevents a reactor trip will not impair the digital AMSAC's ability to generate its mitigative actuations. (UFSAR §7.8.1.9, §7.8.2.3)

AMSAC is electrically independent of the RTS and ESFAS from the sensor output up to the final actuation devices, with isolation devices separating the non-safety AMSAC circuitry from the safety-related AFW actuation circuits. (UFSAR §7.8.2.4) It is physically separated from the existing protection-system hardware, with AMSAC outputs provided from separate relay panels and trains separated within the cabinet by metal barriers, conduit, and distance. (UFSAR §7.8.2.5)

The AMSAC power supply is a battery-backed, non-Class 1E vital bus, independent of the RTS/ESFAS power supplies and backed by a station battery independent of those serving the RTS. AMSAC is an energize-to-actuate system capable of performing its mitigative functions on a loss of offsite power. (UFSAR §7.8.1.10, §7.8.2.9)

Only the isolation devices are required to meet seismic qualification; the AMSAC output isolation device is qualified per IEEE Standard 344-1975. AMSAC equipment is located outside containment in a mild, controlled environment and follows the design standard for non-Class 1E control-grade equipment; no AMSAC equipment is inside containment. (UFSAR §7.8.2.6, §7.8.2.7, §7.8.1.11) AMSAC meets 10CFR50.62 and the QA requirements of NRC Generic Letter 85-06; no other standards apply. (UFSAR §7.8.3)

### AMSAC vs RPS

| Feature | RPS | AMSAC |
|---------|-----|-------|
| Classification | Safety-related | Non-safety, important to safety |
| Sensors | Nuclear instruments, process instruments | SG level, turbine pressure |
| Logic | Solid State Protection System | Independent microprocessor |
| Trips reactor | Yes (rod insertion) | No — trips turbine and starts AFW |
| Redundancy | 4 channels with 2/4 logic | 2 channels |
| Armed | Always (with permissives) | Only above C-20 (at power) |

## Key Components

AMSAC is a single train of equipment housed in a seismically qualified cabinet, built on the industry-standard Intel multibus format so that widely used microprocessor cards share a common data bus. (UFSAR §7.8.1.2) Its principal elements are:

- **Steam generator level sensing:** Measured by the four existing differential-pressure level transmitters on each main steam generator; these narrow-range SG level signals are isolated signals taken from the process protection cabinets and routed through the control cabinets. (UFSAR §7.8.1.2, §7.8.1.5)
- **Turbine steamline inlet pressure:** Measured by two existing pressure transmitters in the steam supply line near the turbine; these signals are likewise isolated signals from the process protection cabinets. (UFSAR §7.8.1.2, §7.8.1.6)
- **Actuation Logic System (ALS):** Monitors the analog inputs, performs the functional logic, and provides outputs to trip the turbine and initiate AFW. It comprises three groups of I/O modules, three actuation logic processors (ALPs), two majority voting modules, and two output relay panels. The I/O modules provide signal conditioning, isolation, and test features. Each of the three identical ALPs performs the same analog-to-digital conversion, setpoint comparison, and coincidence logic on the same inputs; the two majority voting modules then perform a two-out-of-three vote on the ALP demands and drive the output relays. (UFSAR §7.8.1.2)
- **Test/Maintenance System (T/MS):** Provides automated continuous self-checking, manual online testing, and a maintenance mode (under administrative control) for modifying setpoints, status, and timer values and initiating channel calibration. It comprises a test/maintenance processor, a digital-to-analog board, a memory board, expansion boards, a self-health board, digital output modules, a test/maintenance panel, and a portable terminal/printer. (UFSAR §7.8.1.2)
- **Equipment actuation:** The output relay panels drive component actuation signals through isolation relays into the existing (final) AFW-initiation and turbine-trip circuits — the component's existing actuation devices are used. AMSAC connections to the process channels are made downstream of Class 1E isolation devices in the process protection cabinets, and AMSAC outputs are buffered from the safety-related final-actuation circuits by qualified relays, so a credible fault in the non-safety AMSAC cannot propagate into and degrade the RTS or ESFAS. (UFSAR §7.8.1.2, §7.8.1.8)

## Operation

AMSAC automatically performs its actuations only when reactor power is above a preselected level, determined from turbine steamline inlet pressure, and remains armed for a preset time after that pressure drops below the setpoint so its function is still performed in the event of a turbine trip. (UFSAR §7.8.1.1)

- **Input:** Low steam generator water level
- **Armed by:** C-20 (turbine steamline inlet pressure above setpoint). Below setpoint, AMSAC is blocked.
- **Actions:** Trips turbine, actuates auxiliary feedwater, and isolates steam-generator blowdown and sample lines
(UFSAR §7.8.1)

**Trip logic:** A trip demand is generated when three of the four steam generators have a low level at a power level above the C-20 permissive. The differential-pressure SG level signal is conditioned and used by each ALP to derive a component-actuation demand; the resulting signal drives the output relays to perform the mitigative actions. (UFSAR §7.8.1.7, §7.8.1.1)

**Setpoints:** AMSAC uses two setpoints in its coincidence logic. The SG low-level setpoint is selected so a true lowering of level is detected while normal small variations do not cause a spurious signal. The C-20 permissive setpoint is set consistent with ATWS investigations showing AMSAC actions need not be automatically actuated below a certain power level (those investigations define the maximum allowable value). To avoid an inadvertent actuation on loss of a single main feedwater pump, AMSAC actuation is delayed a defined time so the reactor protection system provides the first trip signal. The C-20 permissive is also held for a preset time delay after turbine steamline inlet pressure drops below the setpoint, keeping AMSAC armed long enough to function on a turbine trip. The setpoints and the capability to modify them are under administrative control. (UFSAR §7.8.1.12, §7.8.2.13) The UFSAR states the setpoint values descriptively only; it does not list the numeric SG low-level or C-20 permissive setpoint or time-delay values.

### AMSAC Interlocks (C-20)

- **C-20:** 2/2 turbine steamline inlet pressure above setpoint arms AMSAC; below setpoint blocks AMSAC
(UFSAR T7.2-2)

A single interlock, **C-20**, arms and blocks AMSAC automatically. The system is blocked at sufficiently low reactor power, where AMSAC actions need not be automatically initiated; turbine steamline inlet pressure in a two-out-of-two logic scheme is the permissive. Pressure above the setpoint automatically arms AMSAC (defeats the block); dropping below it automatically blocks AMSAC, with removal of the permissive automatically delayed a predetermined time. The operating status of AMSAC is displayed on the main control board. (UFSAR §7.8.1.4, §7.8.2.13)

### Bypasses & Indication

AMSAC is blocked at the system level during maintenance, repair, calibration, or test, with the bypass condition continuously indicated in the control room. (UFSAR §7.8.2.12) The operating (C-20) bypass status is continuously indicated in the control room via an annunciator window. (UFSAR §7.8.2.13) Whenever the mitigative capability is bypassed or rendered inoperable — operating or maintenance bypass — the condition is continuously indicated in the control room, the maintenance bypass via the AMSAC general warning alarm. (UFSAR §7.8.2.14) Bypassing is accomplished with a permanently installed two-position NORMAL/BYPASS selector switch; no temporary jumpers or pulled fuses are needed. (UFSAR §7.8.2.15)

### Completion, Reset & Manual Initiation

AMSAC mitigative actions go to completion as long as the coincidence logic is satisfied through the time delay. If feedwater flow is restored and SG level recovers above the low-low setpoint before the timer expires, the coincidence logic is no longer satisfied and the actuation signal clears. If the conditions persist for the full time delay, the actions latch — the AFW initiation signal latches at the component actuating devices and the turbine trip latches at the turbine electrohydraulic control system — and deliberate operator action is then needed to terminate AFW flow, clear the turbine trip with the main control board turbine trip reset switch, and reopen the turbine stop valves. (UFSAR §7.8.2.16) Automatic manual initiation of the integrated AMSAC is not provided; however, the capability to manually initiate the individual mitigative functions (AFW initiation, turbine trip, SG blowdown/sample isolation) exists at the main control board. (UFSAR §7.8.2.17)

### Testability at Power

AMSAC is testable at power from the test/maintenance panel; its mitigative capability is bypassed at the system level while in test mode. Total system testing is performed as three sequential, partial, overlapping tests: the first checks the analog input modules (each separately) for accuracy; the second checks each ALP (separately) to verify the correct coincidence logic reaches the majority voter; the last exercises the majority voter and the integrity of the output relays by driving all possible input combinations and confirming relay-coil continuity without operating the relays. The capability to individually operate output relays, confirm field wiring, and operate the isolation relays and final actuation devices is provided at plant shutdown. (UFSAR §7.8.2.10) Inadvertent actuation is minimized by three redundant ALPs with majority voting (a single module failure causes neither actuation nor failure to actuate), the three-out-of-four low SG level coincidence, and the time delay. (UFSAR §7.8.2.2, §7.8.2.11)

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q9</div>
<span class="hi-exam">Differential boron worth rises over core life</span> (boron is more effective in a less-borated, harder-spectrum EOL core than in a heavily-borated BOL core). Therefore a rapid boration performed during an ATWS inserts <span class="hi-exam">more negative reactivity at EOL with HIGHER differential boron worth</span> than the same boration at BOL. <span class="hi-trap">Trap: candidates may reason that the higher BOL boron concentration means more boron worth — but it is the differential (per-ppm) worth that matters, and that is HIGHER at EOL.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q31</div>
AMSAC AFW pump start signals by train: <span class="hi-exam">Train A starts 21 AFW (motor-driven)</span>. <span class="hi-exam">Train B starts 22 AFW (motor-driven)</span>. <span class="hi-exam">Either train starts 23 AFW (turbine-driven)</span>. A spurious actuation of ONLY Train A starts <span class="hi-exam">21 and 23 AFW pumps</span> (not 22 AFW). <span class="hi-trap">Common trap: believing all three AFW pumps start on a single train actuation, or that both motor-driven pumps start on a single train.</span>
</div>

## Tech Spec LCOs

- AMSAC operability requirements per 10CFR50.62 implementation

## Connections

- Related systems: [[RPS/SSPS]], [[AFW]]
- Related procedures: [[curve book]]
- Related concepts: [[ESF & Design]] (ATWS section)
- Related exam questions: [[2015 Q9]], [[2019 Q31]], [[2014 Q67]], [[2012 Q8]]
- Related exam: [[2015 NRC Written Exam]], [[2019 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
