---
title: "TS 3/4.1.2 — Boration Systems"
category: tech-specs
status: draft
aliases:
  - boration systems
  - boron injection flow paths
  - charging pumps TS
  - borated water sources
---

# TS 3/4.1.2 — Boration Systems

## Flow Paths — Shutdown

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.1</div>
As a minimum, one boron injection flow path shall be OPERABLE:<br>
a. From boric acid tanks via BAT pump and charging pump to RCS, OR<br>
b. From RWST via charging pump to RCS.
</div>

**Applicability:** Modes 4, 5, and 6

**Action:** With no flow path OPERABLE, suspend all CORE ALTERATIONS or positive reactivity changes until at least one path is restored.

## Flow Paths — Operating

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.2</div>
At least <span class="hi">two of three</span> boron injection flow paths shall be OPERABLE:<br>
a. From boric acid tanks via BAT pump and charging pump to RCS<br>
b. Two flow paths from RWST via charging pumps to RCS
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** With only one flow path OPERABLE, restore within <span class="val-alarm">72 hours</span> or be in Hot Standby and borated to SDM ≥ 1% delta k/k at 200°F within 6 hours. Restore within next 7 days or be in Cold Shutdown within 30 hours.

## Charging Pumps — Shutdown

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.3</div>
At least one charging pump in the required flow path shall be OPERABLE.
</div>

**Applicability:** Modes 4, 5, and 6

**Action:** With no charging pump OPERABLE, suspend all CORE ALTERATIONS or positive reactivity changes.

<div class="callout callout-trap">
<div class="callout-label">POPS Restriction</div>
A maximum of one centrifugal charging pump shall be OPERABLE in Mode 4 (when cold leg temp ≤ POPS enable temp in PTLR), Mode 5, or Mode 6 (head on vessel). This prevents inadvertent mass addition exceeding POPS relief capacity.
</div>

*Amendment No. 328*

## Charging Pumps — Operating

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.4</div>
At least <span class="hi">two charging pumps</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** With only one OPERABLE, restore within <span class="val-alarm">72 hours</span> or be in Hot Standby and borated to SDM ≥ 1% delta k/k at 200°F within 6 hours. Restore within 7 days or be in Cold Shutdown within 30 hours.

## Borated Water Sources — Shutdown

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.5</div>
As a minimum, one borated water source shall be OPERABLE:<br>
a. Boric acid storage system: ≥ <span class="val-normal">2600 gal</span>, <span class="val-normal">6560–6990 ppm</span> boron, ≥ <span class="val-normal">63°F</span><br>
b. RWST: ≥ <span class="val-normal">37000 gal</span>, ≥ <span class="val-normal">2300 ppm</span> boron, ≥ <span class="val-normal">35°F</span>
</div>

**Applicability:** Modes 5 and 6

**Action:** With no borated water source OPERABLE, suspend CORE ALTERATIONS or positive reactivity changes.

## Borated Water Sources — Operating

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.6</div>
Borated water sources shall be OPERABLE:<br>
a. Boric acid storage system: volume and boron per Figure 3.1-2, ≥ <span class="val-normal">63°F</span><br>
b. RWST per Specification 3.5.5
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| Boric acid storage system inoperable | Restore to OPERABLE | 72 hrs, or Hot Standby in 6 hrs + Cold Shutdown in 30 hrs |
| RWST inoperable | Per Specification 3.5.5 | Per Spec 3.5.5 |

*Amendment No. 309*

---

## Bases

The boron injection system ensures negative reactivity control is available during each mode of operation. Required components include: borated water sources, charging pumps, separate flow paths, boric acid transfer pumps, and emergency power.

<span class="hi-exam">With Tavg ≥ 350°F, two flow paths are required to ensure single failure capability.</span> The boration capability of either path is sufficient to provide SDM of 1.3% delta k/k after xenon decay and cooldown to 200°F. The maximum boration requirement occurs at EOL from full power equilibrium xenon conditions.

Boric acid tanks contain 3.75–4% by weight boric acid solution. To prevent precipitation, tank fluid and pipe wall temperatures are maintained ≥ 63°F (5°F margin above precipitation point). Flow path between BAT recirculation line and charging pump suction must be ≥ 50°F.

<span class="hi-exam">Boron capability below 200°F requires either 2600 gallons of 6560 ppm from BATs or 7100 gallons of 2300 ppm from RWST</span> to provide SDM of 1% delta k/k after xenon decay and cooldown from 200°F to 140°F.

The 37000 gallon RWST limit for Modes 5 and 6 is based on: 21210 gal (undetectable below lower tap), 8550 gal (instrument error), 7100 gal (SDM requirement), and 140 gal (rounding).

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-1-2.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-1.pdf" target="_blank">View Bases PDF</a>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A2</div>
Post-boration TS evaluation: with RWST at 2350 ppm and BAST at 6650 ppm, <span class="hi-exam">TS 3.1.2.6 Figure 3.1-2 requires combined BAST level > 96.5%</span>. After rapid boration for 3 stuck rods (4200 gal total), BASTs drop from 70% to 43% each (86% combined) — below required level. <span class="hi-exam">LCO 3.1.2.6.a.1 NOT met: restore boric acid storage system within 72 hours or Hot Standby in 6 hours.</span>
</div>

## Connections

- Related systems: [[CVCS]], [[ECCS]]
- Related JPMs: [[2022 JPM SRO-A2]]
- Related exam: [[2022 NRC Operating Exam]]
