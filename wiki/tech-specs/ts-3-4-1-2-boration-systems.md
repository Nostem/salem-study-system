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

---

## Flow Paths — Operating

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.2</div>
At least <span class="hi">two of three</span> boron injection flow paths shall be OPERABLE:<br>
a. From boric acid tanks via BAT pump and charging pump to RCS<br>
b. Two flow paths from RWST via charging pumps to RCS
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** With only one flow path OPERABLE, restore within <span class="val-alarm">72 hours</span> or be in Hot Standby and borated to SDM ≥ 1% delta k/k at 200°F within 6 hours. Restore within next 7 days or be in Cold Shutdown within 30 hours.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.2 Boration Systems (General)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.2 General</div>

The boron injection system ensures that negative reactivity control is available during each mode of facility operation. The components required include: (1) borated water sources, (2) charging pumps, (3) separate flow paths, (4) boric acid transfer pumps, and (5) offsite power or an emergency power supply from OPERABLE diesel generators.

<span class="hi-exam">With RCS average temperature ≥ 350°F, a minimum of two boron injection flow paths are required to ensure single functional capability in the event an assumed failure renders one flow path inoperable.</span> The boration capability of either flow path is sufficient to provide a SHUTDOWN MARGIN from expected operating conditions of <span class="hi">1.3% delta k/k</span> after xenon decay and cooldown to 200°F.

<span class="hi-exam">The maximum expected boration capability requirement occurs at EOL from full power equilibrium xenon conditions</span> and requires borated water from a boric acid tank in accordance with TS Figure 3.1-2, and additional makeup from either: (1) the second boric acid tank and/or batching, or (2) a maximum of <span class="hi">41800 gallons of 2300 ppm</span> borated water from the RWST. With the RWST as the only borated water source, a maximum of <span class="hi">73800 gallons of 2300 ppm</span> borated water is required. The analysis assumes the most reactive control rod is not inserted into the core.

<span class="hi-exam">With RCS temperature below 350°F, one injection system is acceptable without single failure consideration</span> on the basis of the stable reactivity condition of the reactor and the additional restrictions prohibiting CORE OPERATIONS and positive reactivity changes if the single injection system becomes inoperable.

</div>
</details>

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.2 Boric Acid Temperature and RWST pH</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.2 BAT Temperature / RWST pH</div>

The boric acid tanks, pumps, valves, and piping contain a boric acid solution concentration of between <span class="hi">3.75% and 4% by weight</span>. To ensure the boric acid remains in solution, tank fluid temperature and process pipe wall temperatures are monitored to ensure a temperature of <span class="hi">63°F or above</span> is maintained. <span class="hi-exam">A 5°F margin is provided to ensure the boron will not precipitate out.</span> The tank fluid and pipe wall temperatures are monitored in the main control room.

Should ambient temperature decrease below 63°F, the boric acid tank heaters in conjunction with boric acid pump recirculation are capable of maintaining the boric acid at or above 63°F. <span class="hi-exam">A small amount of boric acid in the flowpath between the boric acid recirculation line and the suction line to the charging pump will precipitate out, but it will not cause flow blockage even with temperatures below 50°F.</span>

The limits on contained water volume and boron concentration of the RWST also ensure a pH value of between <span class="hi">7.0 and 10.0</span> for the solution recirculated within containment after a LOCA. This pH band minimizes the evolution of iodine and minimizes the effect of chloride and caustic stress corrosion on mechanical systems and components.

</div>
</details>

---

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

---

## Charging Pumps — Operating

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.4</div>
At least <span class="hi">two charging pumps</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, and 3

**Action:** With only one OPERABLE, restore within <span class="val-alarm">72 hours</span> or be in Hot Standby and borated to SDM ≥ 1% delta k/k at 200°F within 6 hours. Restore within 7 days or be in Cold Shutdown within 30 hours.

---

## Borated Water Sources — Shutdown

<div class="callout callout-important">
<div class="callout-label">LCO 3.1.2.5</div>
As a minimum, one borated water source shall be OPERABLE:<br>
a. Boric acid storage system: ≥ <span class="val-normal">2600 gal</span>, <span class="val-normal">6560–6990 ppm</span> boron, ≥ <span class="val-normal">63°F</span><br>
b. RWST: ≥ <span class="val-normal">37000 gal</span>, ≥ <span class="val-normal">2300 ppm</span> boron, ≥ <span class="val-normal">35°F</span>
</div>

**Applicability:** Modes 5 and 6

**Action:** With no borated water source OPERABLE, suspend CORE ALTERATIONS or positive reactivity changes.

<details>
<summary style="cursor:pointer;color:#a78bfa;font-size:12px;font-weight:600;padding:8px 0;">▶ Bases — 3/4.1.2.5 Borated Water Sources (Shutdown)</summary>
<div class="callout callout-bases">
<div class="callout-label">Bases — 3/4.1.2.5</div>

<span class="hi-exam">The boron capability required below 200°F is sufficient to provide a SHUTDOWN MARGIN of 1% delta k/k after xenon decay and cooldown from 200°F to 140°F.</span> This condition requires either <span class="hi">2600 gallons of 6560 ppm</span> borated water from the boric acid storage tanks or <span class="hi">7100 gallons of 2300 ppm</span> borated water from the RWST.

<span class="hi-exam">The 37000 gallon RWST limit for Modes 5 and 6 is based upon:</span>
- <span class="hi">21210 gallons</span> that is undetectable due to lower tap location
- <span class="hi">8550 gallons</span> for instrument error
- <span class="hi">7100 gallons</span> required for shutdown margin
- <span class="hi">140 gallons</span> due to rounding up

<span class="hi-exam">The OPERABILITY of one boron injection system during REFUELING ensures that this system is available for reactivity control while in MODE 6.</span>

</div>
</details>

---

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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A2</div>
Post-boration TS evaluation: with RWST at 2350 ppm and BAST at 6650 ppm, <span class="hi-exam">TS 3.1.2.6 Figure 3.1-2 requires combined BAST level > 96.5%</span>. After rapid boration for 3 stuck rods (4200 gal total), BASTs drop from 70% to 43% each (86% combined) — below required level. <span class="hi-exam">LCO 3.1.2.6.a.1 NOT met: restore boric acid storage system within 72 hours or Hot Standby in 6 hours.</span>
</div>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-1-2.pdf" target="_blank">View Tech Spec PDF</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-1.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[CVCS]], [[ECCS]]
- Related JPMs: [[2022 JPM SRO-A2]]
- Related exam: [[2022 NRC Operating Exam]]
