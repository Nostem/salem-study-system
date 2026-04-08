---
title: "TS 3/4.4 — Reactor Coolant System"
category: tech-specs
status: draft
aliases:
  - RCS tech specs
  - RCS loops TS
  - PORVs tech specs
  - RCS leakage TS
  - pressurizer TS
---

# TS 3/4.4 — Reactor Coolant System

## 3/4.4.1 — Reactor Coolant Loops and Coolant Circulation

### Startup and Power Operation (3.4.1.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.1</div>
<span class="hi">All reactor coolant loops shall be in operation.</span>
</div>

**Applicability:** Modes 1 and 2

**Action:** With less than required loops in operation, be in Hot Standby within <span class="val-trip">1 hour</span>.

### Hot Standby (3.4.1.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.2</div>
a. At least <span class="hi">two RCS loops</span> shall be OPERABLE<br>
b. At least one loop in operation when rod control system is deenergized<br>
c. All loops in operation when rod control system is energized
</div>

**Applicability:** Mode 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Less than required loops OPERABLE | Restore | <span class="val-alarm">72 hrs</span>, or Hot Shutdown in 12 hrs |
| No loop in operation | Suspend boron dilution; immediately restore a loop | Immediately |

<div class="callout callout-trap">
<div class="callout-label">Rod Control System De-energized Definition</div>
The rod control system is de-energized when: (1) both Rod Drive MG set motor breakers open, OR (2) both Rod Drive MG set generator breakers open, OR (3) at least three reactor trip and/or bypass breakers open. If none met, the system is considered energized.
</div>

All RCPs may be de-energized for up to 1 hour provided: (1) no boron dilution, (2) core outlet temp maintained ≥10°F below saturation, (3) rod control system de-energized. SG secondary level must be ≥5% narrow range. *(Amendment No. 282)*

### Hot Shutdown (3.4.1.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.3</div>
At least <span class="hi">two coolant loops</span> (RCS loops or RHR loops) shall be OPERABLE, and at least one in operation.
</div>

**Applicability:** Mode 4

<div class="callout callout-trap">
<div class="callout-label">RCP Start Restriction</div>
An RCP shall not be started with any RCS cold leg temp ≤ POPS enable temperature unless: (1) PZR water volume <1650 ft³ (~92% level), OR (2) SG secondary water temp <50°F above each RCS cold leg temp.
</div>

*Amendment No. 328*

### Cold Shutdown (3.4.1.4)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.1.4</div>
<span class="hi">Two RHR loops</span> shall be OPERABLE and at least one in operation.
</div>

**Applicability:** Mode 5

One RHR loop may be inoperable for up to 2 hours for surveillance testing if the other is OPERABLE and in operation. Four filled RCS loops with ≥2 SGs at ≥5% NR level may substitute for one RHR loop. *(Amendment No. 328)*

---

## 3/4.4.2 & 3/4.4.3 — Safety Valves

### Safety Valves — Shutdown (3.4.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.2</div>
A minimum of one pressurizer code safety valve shall be OPERABLE with a lift setting of <span class="hi">2485 psig ±3%</span>.
</div>

**Applicability:** Modes 4 and 5

**Action:** With no safety valve OPERABLE, immediately suspend positive reactivity changes and place an OPERABLE RHR loop in shutdown cooling mode. *(In Mode 5, an equivalent size vent pathway may be used.)*

### Safety Valves — Operating (3.4.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.3</div>
<span class="hi">All</span> pressurizer code safety valves shall be OPERABLE with a lift setting of <span class="hi">2485 psig ±3%</span>.
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** With one safety valve inoperable, restore within <span class="val-trip">15 minutes</span> or be in Hot Shutdown within 12 hours.

*Amendment No. 300*

---

## 3/4.4.4 — Pressurizer

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.4</div>
The pressurizer shall be OPERABLE with:<br>
- Water volume ≤ <span class="hi">1650 ft³ (92% indicated level)</span><br>
- At least <span class="hi">two groups of heaters</span>, each ≥150 kW, capable of being powered from emergency power
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Inoperable emergency power to heaters | Restore emergency power | <span class="val-alarm">72 hrs</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |
| Pressurizer otherwise inoperable | Be in Hot Standby with reactor trip breakers open | <span class="val-trip">6 hrs</span>, then Hot Shutdown in 6 hrs |

*Amendment No. 282*

---

## 3/4.4.5 — Relief Valves (PORVs and Block Valves)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.5</div>
<span class="hi">Two PORVs</span> and their associated block valves shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, and 3

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| 1 or both PORVs inoperable (seat leakage) | Restore OR close block valve(s) with power maintained | <span class="val-alarm">1 hr</span>, or Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |
| 1 PORV inoperable (other causes) | Restore OR close block valve and remove power | <span class="val-alarm">1 hr</span> to close; restore PORV in 72 hrs |
| Both PORVs inoperable (other causes) | Restore ≥1 OR close block valves and remove power; be in Hot Standby | <span class="val-trip">6 hrs</span> to act; Hot Standby in 6 hrs + Hot Shutdown in 6 hrs |
| 1 block valve inoperable | Restore OR place PORV in manual | <span class="val-alarm">1 hr</span>; restore in 72 hrs |
| Both block valves inoperable | Restore OR place PORVs in manual; restore ≥1 block valve | <span class="val-alarm">1 hr</span>; ≥1 in 6 hrs |

<div class="callout callout-exam">
<div class="callout-label">Key Distinction</div>
When a PORV is inoperable due to seat leakage, the block valve is closed but power is MAINTAINED (so the block valve can be opened if needed for overpressure protection). When inoperable for other causes, the block valve is closed and power is REMOVED (isolating the failed-open path).
</div>

*Amendment No. 177*

---

## 3/4.4.6 — Steam Generator Tube Integrity

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.6</div>
SG tube integrity shall be maintained and all tubes satisfying plugging criteria shall be plugged per the Steam Generator Program.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** If tube integrity not maintained, be in Hot Standby within 6 hours and Cold Shutdown within 30 hours. *(Amendment No. 291)*

---

## 3/4.4.7 — RCS Leakage

### Leakage Detection Systems (3.4.7.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.7.1</div>
The following leakage detection systems shall be OPERABLE:<br>
a. Containment atmosphere particulate radioactivity monitor<br>
b. Containment pocket sump level monitor<br>
c. EITHER containment fan cooler condensate flow rate OR containment atmosphere gaseous radioactivity monitor
</div>

**Action:** With only 2 of 3 OPERABLE, continue up to 30 days with grab samples every 24 hours; otherwise Hot Standby in 6 hours. *(Amendment No. 282)*

### Operational Leakage (3.4.7.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.4.7.2</div>
RCS leakage shall be limited to:<br>
a. <span class="val-trip">No PRESSURE BOUNDARY LEAKAGE</span><br>
b. <span class="hi">≤1 gpm UNIDENTIFIED LEAKAGE</span><br>
c. <span class="hi">≤150 gallons per day</span> primary-to-secondary leakage through any one SG<br>
d. <span class="hi">≤10 gpm IDENTIFIED LEAKAGE</span><br>
f. <span class="hi">≤1 gpm</span> from any RCS Pressure Isolation Valve (at 2230 ±20 psig)
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Any PRESSURE BOUNDARY LEAKAGE or primary-to-secondary not within limit | Hot Standby in 6 hrs; Cold Shutdown in 30 hrs | <span class="val-trip">Immediately</span> |
| Other leakage above limits | Reduce to within limits | <span class="val-alarm">4 hrs</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |
| Pressure Isolation Valve leakage above limit | Isolate with ≥2 closed manual or deactivated auto valves | <span class="val-alarm">4 hrs</span>, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |

*Amendment No. 304*

---

## Bases

### RCS Loops (3/4.4.1)

Plant design requires all 4 RCS loops operating during Modes 1 and 2 for adequate core cooling and to ensure accident analysis assumptions are met. In Mode 3, at least 2 loops provide adequate decay heat removal. The RCP start restriction during low-temperature conditions prevents pressure transients that could exceed POPS capacity.

### PORVs (3/4.4.5)

<span class="hi-exam">The distinction between seat leakage and other causes determines whether the block valve power is maintained or removed.</span> With seat leakage, block valve power is maintained so the PORV path remains available for overpressure protection if needed. With other failures, power is removed to ensure the failed-open path is positively isolated.

### RCS Leakage (3/4.4.7)

<span class="hi-exam">PRESSURE BOUNDARY LEAKAGE of any magnitude requires immediate action because it indicates a potential failure of the RCS pressure boundary.</span> The 1 gpm unidentified leakage limit is well below the smallest leak that could propagate to a LOCA. The 150 gpd primary-to-secondary limit through any one SG minimizes radioactive contamination of the secondary system and limits accident dose consequences.

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-4-1.pdf" target="_blank">View Tech Spec PDF (Loops)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-4-3.pdf" target="_blank">View Tech Spec PDF (Safety Valves)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-4-5.pdf" target="_blank">View Tech Spec PDF (PORVs)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-4-7.pdf" target="_blank">View Tech Spec PDF (Leakage)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-4.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Reactor Coolant System]], [[Pressurizer]], [[Residual Heat Removal]], [[Steam Generators]]
- Related concepts: [[Accident Analysis]]
