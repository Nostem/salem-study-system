---
title: "TS 3/4.5 — ECCS"
category: tech-specs
status: draft
aliases:
  - ECCS tech specs
  - accumulators TS
  - RWST tech specs
  - safety injection TS
---

# TS 3/4.5 — Emergency Core Cooling Systems

## Accumulators

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.1</div>
Each RCS accumulator shall be OPERABLE with:<br>
a. Isolation valve open<br>
b. Contained volume: <span class="hi">6223–6500 gallons</span><br>
c. Boron concentration: <span class="hi">2200–2500 ppm</span><br>
d. Nitrogen cover-pressure: <span class="hi">595.5–647.5 psig</span>
</div>

**Applicability:** Modes 1, 2, and 3 (pressurizer pressure >1000 psig)

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 accumulator inoperable (not isolation valve or boron) | Restore to OPERABLE | <span class="val-alarm">24 hrs</span>, or Hot Shutdown in 12 hrs |
| 1 accumulator inoperable due to closed isolation valve | Immediately open valve | Or Hot Standby in 24 hrs + Hot Shutdown in 12 hrs |
| 1 accumulator boron concentration outside limits | Restore boron concentration | <span class="val-alarm">72 hrs</span>, or Hot Standby in 6 hrs and reduce PZR pressure to ≤1000 psig in 6 hrs |

*Amendment No. 282*

## ECCS Subsystems — Tavg ≥ 350°F

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.2</div>
<span class="hi">Two independent ECCS subsystems</span> shall be OPERABLE, each comprised of:<br>
a. One centrifugal charging pump + flow path (cold leg injection)<br>
b. One safety injection pump + flow path (cold leg injection; manual hot leg injection)<br>
c. One RHR pump + RHR HX + flow path (cold leg injection)
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 ECCS subsystem inoperable | Restore to OPERABLE | <span class="val-alarm">72 hrs</span>, or Hot Shutdown in 12 hrs |
| Both ECCS subsystems inoperable (surveillance testing) | Restore at least one | <span class="val-trip">1 hr</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs + Cold Shutdown in 24 hrs |

**Key Surveillance Requirements:**

| SR | Requirement | Frequency |
|----|-------------|-----------|
| 4.5.2.a | Verify specific valves in correct position with power removed (see valve list below) | Per SFCP |
| 4.5.2.e | Verify auto-start of charging, SI, and RHR pumps on SI test signal | Per SFCP (during shutdown) |
| 4.5.2.f | Verify pump TDH per IST program: Charging ≥2338 psi, SI ≥1369 psi, RHR ≥165 psi | Per IST |

### ECCS Valve Alignment (SR 4.5.2.a)

| Valve | Function | Required Position |
|-------|----------|------------------|
| 2 SJ 69 | RHR pump suction | Open |
| 2 SJ 30 | SI pump suction | Open |
| 21 SJ 40 | SI discharge to hot legs | Closed |
| 22 SJ 40 | SI discharge to hot legs | Closed |
| 2 RH 26 | RHR discharge to hot legs | Closed |
| 21 SJ 49 | RHR discharge to cold legs | Open |
| 22 SJ 49 | RHR discharge to cold legs | Open |
| 2 SJ 135 | SI discharge to cold legs | Open |
| 21 RH 19 | RHR crosstie valve | Open |
| 22 RH 19 | RHR crosstie valve | Open |

*Amendment No. 282*

## ECCS Subsystems — Tavg < 350°F

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.3</div>
As a minimum, <span class="hi">one ECCS subsystem</span> shall be OPERABLE comprised of:<br>
a. One centrifugal charging pump + flow path (cold leg injection)<br>
b. One RHR pump + RHR HX + flow path (cold leg and hot leg injection)
</div>

**Applicability:** Mode 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| No ECCS subsystem (charging pump or flow path inoperable) | Restore at least one | <span class="val-trip">1 hr</span>, or Cold Shutdown in 20 hrs |
| No ECCS subsystem (RHR pump or HX inoperable) | Restore or maintain Tavg <350°F by alternate heat removal | Immediately |

<div class="callout callout-trap">
<div class="callout-label">POPS Restriction</div>
A maximum of one SI pump or one centrifugal charging pump shall be OPERABLE in Mode 4 (cold leg temp ≤ POPS enable temp), Mode 5, or Mode 6 (head on vessel). Excess pumps must be demonstrated inoperable by breaker removal or verified in recirc with two independent means of preventing RCS injection.
</div>

*Amendment No. 328*

## Seal Injection Flow

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.4</div>
RCP seal injection flow shall be <span class="hi">≤40 gpm</span> with charging pump discharge header pressure ≥2430 psig and charging flow control valve full open.
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** Adjust manual seal injection throttle valves within <span class="val-alarm">4 hrs</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs.

## Refueling Water Storage Tank

<div class="callout callout-important">
<div class="callout-label">LCO 3.5.5</div>
The RWST shall be OPERABLE with:<br>
a. Contained volume ≥ <span class="hi">364500 gallons</span><br>
b. Boron concentration: <span class="hi">2300–2500 ppm</span><br>
c. Temperature: <span class="hi">≥35°F and ≤100°F</span>
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| RWST inoperable (boron or temp) | Restore | <span class="val-alarm">8 hrs</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |
| RWST inoperable (other reasons) | Restore | <span class="val-trip">1 hr</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |

*Amendment No. 309*

---

## Bases

### Accumulators (3/4.5.1)

The OPERABILITY of each accumulator ensures that a sufficient volume of borated water will be immediately forced into the RCS through each cold leg in the event the RCS pressure falls below accumulator pressure. Each accumulator is passive — requires no electrical power or actuation signal.

### ECCS Subsystems (3/4.5.2 and 3/4.5.3)

<span class="hi-exam">Two independent ECCS subsystems ensure that sufficient emergency core cooling capability is available assuming any single active failure in either subsystem.</span> The ECCS flow paths ensure borated water delivery to both cold legs (injection phase) and hot legs (recirculation phase).

The RHR interlock (tested per SR 4.5.2.i) prevents opening the RHR suction isolation valves (2RH1, 2RH2) when RCS pressure is ≥375 psig, protecting the low-pressure RHR system from RCS pressure.

### RWST (3/4.5.5)

The RWST minimum volume of 364500 gallons is based on: filling the refueling canal, adequate injection phase volume, sufficient boron for cold shutdown (with most reactive rod stuck out), filling the containment sump, and fulfilling spray requirements. The boron concentration ensures both shutdown reactivity and post-LOCA sump pH of 7.0–10.0.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-5.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-5.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Emergency Core Cooling Systems]], [[Residual Heat Removal]], [[Chemical and Volume Control System]]
- Related tech specs: [[TS 3/4.1.2 — Boration Systems]], [[TS 3/4.6 — Containment]]
- Related concepts: [[Accident Analysis]]
