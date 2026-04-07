---
title: "TS 1.0 — Definitions"
category: tech-specs
status: draft
aliases:
  - TS definitions
  - operability
  - operational modes
---

# TS 1.0 — Definitions

Key definitions used throughout the Technical Specifications. All defined terms appear in CAPITALIZED TYPE.

## Channel Testing Definitions

| Term | Definition | Source |
|------|-----------|--------|
| CHANNEL CALIBRATION | Adjustment of channel output to respond with necessary range and accuracy to known values. Encompasses entire channel including sensor, alarm, display, and trip functions. Includes CHANNEL FUNCTIONAL TEST. | TS 1.4 |
| CHANNEL CHECK | Qualitative assessment of channel behavior by observation, including comparison with independent channels measuring the same parameter. | TS 1.5 |
| CHANNEL FUNCTIONAL TEST | Injection of simulated signal as close to primary sensor as practicable to verify OPERABILITY including alarm and/or trip functions. | TS 1.6 |

## Operational Definitions

| Term | Definition | Source |
|------|-----------|--------|
| ACTION | Part of a specification prescribing remedial measures required under designated conditions. | TS 1.2 |
| AXIAL FLUX DIFFERENCE | Difference in normalized flux signals between top and bottom halves of a two-section excore neutron detector. | TS 1.3 |
| CONTAINMENT INTEGRITY | Exists when all penetrations closed/capable of closing, equipment hatches closed/sealed, air locks OPERABLE, leakage rates within limits, and sealing mechanisms OPERABLE. | TS 1.7 |
| CORE ALTERATION | Movement of any fuel, sources, or reactivity control components within the reactor vessel with head removed and fuel in vessel. | TS 1.8 |
| CORE OPERATING LIMITS REPORT (COLR) | Unit-specific document providing core operating limits for the current reload cycle. | TS 1.9 |
| FULLY WITHDRAWN | Control/shutdown rod position at or above the full-out position specified in the reload analysis. | TS 1.13 |
| OPERABLE / OPERABILITY | A system, subsystem, train, component, or device is OPERABLE when it is capable of performing its specified safety function(s) and all necessary support systems are also capable of performing their related support functions. | TS 1.18 |
| OPERATIONAL MODE (MODE) | Any one of the conditions in Table 1.1 (see Modes table below). | TS 1.19 |
| RATED THERMAL POWER | Total reactor core heat transfer rate to the reactor coolant (3459 MWt). | TS 1.25 |
| SHUTDOWN MARGIN | Instantaneous amount of reactivity by which the reactor is subcritical assuming all rods fully inserted except the single rod of highest worth fully withdrawn. | TS 1.28 |

## Leakage Definitions

| Term | Definition | Source |
|------|-----------|--------|
| IDENTIFIED LEAKAGE | Leakage into closed systems (e.g., pump seal leakoff, valve packing) that is captured and can be measured. | TS 1.14 |
| UNIDENTIFIED LEAKAGE | All leakage that is not IDENTIFIED LEAKAGE or PRESSURE BOUNDARY LEAKAGE. | TS 1.34 |
| PRESSURE BOUNDARY LEAKAGE | Leakage through a non-isolable fault in an RCS component body, pipe wall, or vessel wall. | TS 1.24 |

## Dose Definitions

| Term | Definition | Source |
|------|-----------|--------|
| DOSE EQUIVALENT I-131 | Concentration of I-131 that alone would produce the same thyroid CDE as the combined iodine isotopes (I-131 through I-135). Uses EPA Federal Guidance Report No. 11 dose conversion factors. | TS 1.10 |
| DOSE EQUIVALENT XE-133 | Concentration of Xe-133 that alone would produce the same acute dose to the whole body as the combined noble gas activities actually present. | TS 1.10a |

## Response Time Definitions

| Term | Definition | Source |
|------|-----------|--------|
| REACTOR TRIP SYSTEM RESPONSE TIME | Time from when monitored parameter exceeds trip setpoint at channel sensor until loss of stationary gripper coil voltage. | TS 1.26 |
| ESF RESPONSE TIME | Time from when monitored parameter exceeds ESF actuation setpoint at channel sensor until ESF equipment is capable of performing its safety function. | TS 1.12 |

## Modes of Operation (Table 1.1)

| Mode | Title | Reactivity (keff) | % Rated Power | Avg Coolant Temp |
|------|-------|-------------------|---------------|------------------|
| 1 | Power Operation | ≥0.99 | >5% | — |
| 2 | Startup | ≥0.99 | ≤5% | — |
| 3 | Hot Standby | <0.99 | — | ≥350°F |
| 4 | Hot Shutdown | <0.99 | — | 200°F ≤ Tavg < 350°F |
| 5 | Cold Shutdown | <0.99 | — | <200°F |
| 6 | Refueling | — | — | — |

<div class="callout callout-exam">
<div class="callout-label">Key Exam Concept</div>
OPERABILITY requires both the component itself AND all necessary support systems (power, cooling, actuation signals) to be capable of performing their functions. A component with an inoperable support system is itself inoperable.
</div>

---

<a href="/salem-study-system/ts-pdfs/ts-1-0.pdf" target="_blank">View Tech Spec PDF</a>

## Connections

- Related tech specs: [[TS 3/4.0 — Applicability]], all other TS sections reference these definitions
