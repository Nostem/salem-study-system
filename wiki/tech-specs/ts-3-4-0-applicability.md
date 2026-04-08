---
title: "TS 3/4.0 — Applicability"
category: tech-specs
status: draft
aliases:
  - applicability
  - LCO 3.0.3
  - LCO 3.0.4
  - SR 4.0
---

# TS 3/4.0 — Applicability

## LCO Applicability Rules

### LCO 3.0.1
Compliance with LCOs is required during the OPERATIONAL MODES or conditions specified. Upon failure to meet an LCO, the associated ACTION requirements shall be met.

### LCO 3.0.2
<span class="hi">Noncompliance exists when the LCO AND associated ACTION requirements are not met within the specified time intervals.</span> If the LCO is restored prior to expiration of the time interval, completion of the ACTION is not required.

### LCO 3.0.3 (Default Shutdown Action)

<div class="callout callout-important">
<div class="callout-label">LCO 3.0.3 — Default Shutdown</div>
When an LCO is not met and no applicable ACTION exists, within <span class="hi">one hour</span> initiate action to place the unit in a MODE where the specification does not apply:<br>
1. At least Hot Standby within the next <span class="val-alarm">6 hours</span><br>
2. At least Hot Shutdown within the following <span class="val-alarm">6 hours</span><br>
3. At least Cold Shutdown within the subsequent <span class="val-alarm">24 hours</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Key Exam Concept</div>
LCO 3.0.3 is the "default" shutdown action when no specific ACTION applies. The 1-hour clock to BEGIN the shutdown starts when the LCO is not met. If corrective measures are completed, the ACTION may be taken per the specified time limits measured from the time of failure.
</div>

### LCO 3.0.4 (Mode Entry Restrictions)

<div class="callout callout-important">
<div class="callout-label">LCO 3.0.4 — Mode Entry</div>
When an LCO is not met, entry into a MODE in the Applicability shall only be made when:<br>
a. The ACTIONS permit continued operation for an unlimited period, OR<br>
b. After a risk assessment addressing inoperable systems, OR<br>
c. An allowance is stated in the individual specification
</div>

<div class="callout callout-trap">
<div class="callout-label">Exam Trap</div>
LCO 3.0.4 does NOT prevent mode changes required to comply with ACTIONS or that are part of a shutdown. You CAN transition through modes during a required shutdown even if other LCOs are not met in those modes.
</div>

### LCO 3.0.6 (Return to Service for Testing)

Equipment removed from service or declared inoperable to comply with ACTIONS may be returned to service under administrative control solely to perform testing required to demonstrate OPERABILITY. *(Amendment No. 234)*

## Surveillance Applicability Rules

### SR 4.0.1
Surveillances shall be met during the applicable MODES. Failure to meet a surveillance = failure to meet the LCO.

### SR 4.0.2
<span class="hi">Each surveillance shall be performed within the specified interval with a maximum allowable extension not to exceed 25% of the specified interval.</span>

### SR 4.0.3 (Missed Surveillance)

<div class="callout callout-important">
<div class="callout-label">SR 4.0.3 — Missed Surveillance</div>
If a surveillance was not performed within its specified frequency, compliance with declaring the LCO not met may be delayed up to <span class="hi">24 hours or the limit of the specified frequency, whichever is greater</span>. A risk evaluation is required for any surveillance delayed >24 hours.
</div>

### SR 4.0.4
Entry into a MODE shall only be made when surveillances have been met within their specified frequency, except as provided by SR 4.0.3.

*(Amendment No. 308)*

---

## Bases

### LCO 3.0.3

<span class="hi-exam">The 1-hour provision to initiate shutdown recognizes that some LCO violations may be correctable in a short time, and an orderly shutdown is preferable to an immediate plant trip.</span> The successive mode reduction times (6/6/24 hours) provide an orderly shutdown without challenging plant systems.

### SR 4.0.2

The 25% extension provides operational flexibility for scheduling surveillances at a time consistent with safe and orderly operation, while ensuring surveillance intervals are not extended indefinitely.

---

<a href="/salem-study-system/ts-pdfs/ts-2-0.pdf" target="_blank">View Tech Spec PDF</a>

## Connections

