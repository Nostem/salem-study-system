---
title: "TS 3/4.6 — Containment"
category: tech-specs
status: draft
aliases:
  - containment tech specs
  - containment integrity TS
  - containment spray TS
  - containment isolation TS
---

# TS 3/4.6 — Containment Systems

## 3/4.6.1 — Primary Containment

### Containment Integrity (3.6.1.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.1</div>
Primary CONTAINMENT INTEGRITY shall be maintained.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** Without CONTAINMENT INTEGRITY, restore within <span class="val-trip">1 hour</span> or be in Hot Standby within 6 hours and Cold Shutdown within 30 hours.

### Internal Pressure (3.6.1.4)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.4</div>
Primary containment internal pressure shall be maintained between <span class="val-alarm">-1.5 psig</span> and <span class="val-alarm">+0.3 psig</span>.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With containment internal pressure not within limits, restore within <span class="val-trip">1 hour</span> or be in Hot Standby within 6 hours and Cold Shutdown within 30 hours.

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q54</div>
<span class="hi-exam">Containment internal pressure limits: -1.5 to +0.3 psig (Modes 1-4).</span> If pressure exceeds +0.3 psig, containment design limits could be exceeded during a DBA. The upper limit ensures peak pressure does not exceed the <span class="val-trip">47 psig</span> design pressure during the limiting pipe break (LOCA or steam line break). The lower limit ensures the containment structure is prevented from exceeding its design negative pressure differential of <span class="val-trip">3.5 psig</span> with respect to outside atmosphere. Restoration time is <span class="hi-exam">1 hour</span>.
</div>

### Containment Air Locks (3.6.1.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.3</div>
Each containment air lock shall be OPERABLE with:<br>
a. Both doors closed except during normal transit (then at least one door closed)<br>
b. Overall air lock leakage rate per Containment Leakage Rate Testing Program
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| One air lock door inoperable | Verify OPERABLE door closed; lock closed | <span class="val-trip">1 hour</span>; then 24 hours |
| Air lock interlock inoperable | Verify an OPERABLE door closed; lock closed | <span class="val-trip">1 hour</span>; then 24 hours |
| Air lock inoperable (other reasons) | Evaluate overall containment leakage; verify one door closed; restore | Immediately; 1 hour; <span class="val-alarm">24 hours</span> |
| Unable to meet actions | Hot Standby in 6 hours, Cold Shutdown in 30 hours | 6 + 30 hrs |

**Notes:** Entry/exit permitted for repairs. Separate condition entry allowed for each air lock.

### Containment Air Temperature (3.6.1.5)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.5</div>
Primary containment average air temperature shall not exceed <span class="val-alarm">120°F</span>.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With average air temperature > 120°F, reduce to within limit within <span class="val-alarm">8 hours</span>, or Hot Standby in 6 hours and Cold Shutdown in 30 hours.

### Containment Structural Integrity (3.6.1.6)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.6</div>
The structural integrity of the containment shall be maintained at a level consistent with the acceptance criteria in SR 4.6.1.6.1.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With structural integrity not conforming, restore within <span class="val-alarm">24 hours</span> or Hot Standby in 6 hours and Cold Shutdown in 30 hours.

**SRs:**
- 4.6.1.6.1 — Inspect exposed accessible interior/exterior surfaces and liner plate per Containment Leakage Rate Testing Program
- 4.6.1.6.2 — Any abnormal degradation evaluated for reportability per 10CFR50.72/50.73

### Containment Leakage (3.6.1.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.1.2</div>
Containment leakage rates shall be limited to:<br>
a. Overall integrated leakage rate (Type A) per Containment Leakage Rate Testing Program<br>
b. Combined leakage rate for Type B and C tests per Containment Leakage Rate Testing Program
</div>

**Action:** If leakage not within limits, restore prior to increasing RCS temperature above 200°F.

---

## 3/4.6.2 — Depressurization and Cooling Systems

### Containment Spray (3.6.2.1)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.2.1</div>
<span class="hi">Two independent containment spray systems</span> shall be OPERABLE, each capable of taking suction from RWST and transferring suction to RHR pump discharge.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With one inoperable, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours. Restore within next 48 hours or Cold Shutdown in 30 hours.

**Key SR:** Each spray pump differential pressure ≥204 psid per IST program.

### Spray Additive System (3.6.2.2)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.2.2</div>
Spray additive system shall be OPERABLE with:<br>
a. Spray additive tank: <span class="hi">2568–4000 gallons</span> of <span class="hi">30–32% by weight NaOH</span><br>
b. Two spray additive eductors OPERABLE
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** If inoperable, restore within <span class="val-alarm">72 hours</span> or Hot Standby in 6 hours. Restore within 48 hours or Cold Shutdown in 30 hours.

**Key SR:** Spray additive tank eductor flow shall be 35 ±3.5 gpm to each containment spray system.

### Containment Fan Coolers (3.6.2.3)

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.2.3</div>
At least <span class="hi">three containment fan coil units</span> shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Action:** With one fan cooler inoperable, restore within <span class="val-alarm">7 days</span>. With two inoperable, restore one within <span class="val-alarm">72 hours</span>. Otherwise Hot Standby in 6 hours and Cold Shutdown in 30 hours.

---

## 3/4.6.3 — Containment Isolation Valves

<div class="callout callout-important">
<div class="callout-label">LCO 3.6.3</div>
Each containment isolation valve shall be OPERABLE.
</div>

**Applicability:** Modes 1, 2, 3, and 4

**Actions:**

| Condition | Required Action | Completion Time |
|-----------|----------------|-----------------|
| ≥1 containment isolation valve inoperable | Restore OR isolate affected penetration by: closed/deactivated auto valve, closed manual valve, or blind flange | <span class="val-alarm">4 hrs</span> |
| Unable to isolate | Be in Hot Standby, then Cold Shutdown | 6 hrs + 30 hrs |

<div class="callout callout-exam">
<div class="callout-label">Phase A vs Phase B Isolation</div>
Phase A isolation valves actuate on Safety Injection signal ("T"). Phase B isolation valves actuate on Hi-Hi Containment Pressure (Containment Spray actuation signal, "P"). Containment purge valves are required to be closed and immobilized with control air isolated.
</div>

## 3/4.6.4 — Combustible Gas Control

Pages 3/4 6-16 through 6-22 are intentionally blank. This section has been deleted/relocated from Technical Specifications.

## 3/4.6.5 — Containment Structural Integrity (Visual Inspection)

Covered under SR 4.6.1.6.1 above.

---

## Bases

### Containment Integrity

CONTAINMENT INTEGRITY ensures that the containment will perform its designed safety function of preventing fission product release to the environment following a LOCA or other DBA.

### Containment Spray

<span class="hi-exam">Two independent containment spray systems ensure pressure reduction and iodine removal following a LOCA even with a single active failure.</span> The NaOH spray additive maintains post-LOCA sump pH between 7.0 and 10.0, minimizing iodine re-evolution and chloride stress corrosion.

### Containment Fan Coolers

<span class="hi-exam">Three of five CFCUs provide sufficient post-LOCA heat removal capacity (132 x 10⁶ Btu/hr) to reduce containment pressure below design limits.</span>

---

<a href="/salem-study-system/ts-pdfs/ts-3-4-6-1.pdf" target="_blank">View TS PDF (Containment)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-6-2.pdf" target="_blank">View TS PDF (Spray/Cooling)</a> | <a href="/salem-study-system/ts-pdfs/ts-3-4-6-3.pdf" target="_blank">View TS PDF (Isolation)</a> | <a href="/salem-study-system/ts-pdfs/bases-3-4-6.pdf" target="_blank">View Bases PDF</a>

## Connections

- Related systems: [[Containment Systems]], [[Emergency Core Cooling Systems]]

- Related concepts: [[Accident Analysis]]
- Related exam questions: [[2023 Q54]]
- Related exam: [[2023 NRC Written Exam]]
