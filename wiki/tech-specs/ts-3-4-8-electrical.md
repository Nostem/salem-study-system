---
title: "TS 3/4.8 — Electrical"
category: tech-specs
status: draft
aliases:
  - electrical tech specs
  - AC sources TS
  - DC sources TS
  - diesel generator TS
---

# TS 3/4.8 — Electrical Power Systems

## 3/4.8.1 — AC Sources

### AC Sources — Operating (3.8.1.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.1.1</div>
The following AC electrical power sources shall be OPERABLE:<br>
a. Two physically independent circuits between the offsite transmission network and the onsite Class 1E distribution system<br>
b. Three separate and independent diesel generators, each with a separate fuel supply and day tank
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Key Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 offsite circuit inoperable | Restore | <span class="val-alarm">72 hrs</span> |
| 1 diesel generator inoperable | Demonstrate OPERABILITY of remaining DGs; restore | <span class="val-alarm">72 hrs</span> |
| 2 offsite circuits inoperable | Restore at least one | <span class="val-trip">24 hrs</span> |
| 1 offsite circuit AND 1 DG inoperable | Restore offsite OR DG | <span class="val-trip">12 hrs</span> |

<div class="callout callout-exam">
<div class="callout-label">Cross-Train Check</div>
When one DG is inoperable, the OPERABILITY of the remaining DGs must be demonstrated within 24 hours. This is to ensure the redundant DGs are not affected by a common-cause failure.
</div>

### AC Sources — Shutdown (3.8.1.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.1.2</div>
As a minimum, the following AC sources shall be OPERABLE:<br>
a. One circuit between offsite network and onsite distribution<br>
b. One diesel generator with fuel supply
</div>

**Applicability:** Modes 5 and 6

**Action:** With less than required, suspend CORE ALTERATIONS, handling of irradiated fuel, and operations with positive reactivity changes. Immediately initiate action to restore.

## 3/4.8.2 — DC Sources

### DC Sources — Operating (3.8.2.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.2.1</div>
The following DC power sources shall be OPERABLE:<br>
a. Three 125-volt battery banks with associated chargers<br>
b. Three 28-volt battery supplies for reactor trip breaker UV coils
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Key Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 battery bank or charger inoperable | Restore | <span class="val-alarm">2 hrs</span> (battery) or <span class="val-alarm">24 hrs</span> (charger with spare) |
| 1 of 3 28V supplies inoperable | Restore | <span class="val-alarm">48 hrs</span> |

### DC Sources — Shutdown (3.8.2.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.2.2</div>
As a minimum, the following DC source shall be OPERABLE:<br>
One 125-volt battery bank with associated charger
</div>

**Applicability:** Modes 5 and 6

## 3/4.8.3 — Onsite Power Distribution

<div class="callout callout-important">
<div class="callout-label">LCO 3.8.3.1</div>
The following electrical busses shall be energized and OPERABLE:<br>
- Three 4160V vital busses<br>
- Three 460V vital busses<br>
- Three 115V AC vital instrument busses<br>
- Three 125V DC busses
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With one bus inoperable, restore within <span class="val-alarm">8 hours</span> or be in Hot Standby within 6 hours and Hot Shutdown within 6 hours.

---

## Bases

### AC Sources

<span class="hi-exam">Two independent offsite circuits and three diesel generators provide defense-in-depth for electrical power. The 72-hour completion time for one inoperable source is based on the remaining sources providing adequate redundancy.</span> The shorter 12-hour time for one offsite AND one DG inoperable reflects the reduced defense-in-depth when both offsite and onsite redundancy are degraded simultaneously.

DG OPERABILITY includes verification of fuel oil supply (7-day supply), starting capability (10-second start to rated speed and voltage), and load-carrying capability.

### DC Sources

<span class="hi-exam">The 125V DC batteries provide control power for switchgear operation, diesel generator starting, reactor trip breaker control, and emergency instrumentation.</span> The 2-hour completion time for a battery reflects the critical importance of DC power for safety functions. The 28V supplies power the reactor trip breaker undervoltage coils — loss of these supplies causes a reactor trip (fail-safe design).

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-8-1.pdf" target="_blank">View TS PDF (AC Sources)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-8-2.pdf" target="_blank">View TS PDF (DC Sources)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-8-3.pdf" target="_blank">View TS PDF (Distribution)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-8.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Electrical Power Systems]]
- Related tech specs: [[TS 3/4.5 — ECCS]], [[TS 3/4.6 — Containment]]
