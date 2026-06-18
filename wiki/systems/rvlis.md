---
title: RVLIS
category: systems
status: draft
aliases:
  - reactor vessel level indication system
---

# RVLIS

## Function & Design Basis

The Reactor Vessel Level Instrumentation System (RVLIS) provides the operator with indication of reactor vessel water level to <span class="hi-exam">detect inadequate core cooling</span> during post-accident conditions (UFSAR Table 7.5-1, item 9). It is one of the safety-related display instruments described in UFSAR §7.5; the reactor vessel water level measurement itself is detailed in UFSAR §5.6.5. The display range extends over the maximum expected range of the variable being measured, and the combined indicated accuracies are within the errors assumed in the safety analyses (UFSAR §7.5.1). Power for the safety-related display instruments is obtained from the 115 V power system described in UFSAR Section 8 (UFSAR §7.5.1).

RVLIS uses <span class="hi">three sets of differential-pressure (d/p) cells, with two identical cells per set for redundancy</span>, to measure the water level in the vessel. Each set uses cells with different ranges to obtain three different vessel water level measurements (UFSAR §5.6.5). The system is designated RVLIS-86; the RVLIS-86 software performs the void-fraction computation and the refueling-mode re-scaling described below (UFSAR §5.6.5).

## Key Components

The three d/p-cell sets provide the upper range, full range, and dynamic range measurements (UFSAR §5.6.5):

- **Upper range set (two d/p cells)** — senses the fluid pressure differential between the top of the vessel and the loop piping. One side of each cell is connected to a dedicated RVLIS sensing tap in the reactor vessel closure head (RVCH); the other side is connected to the hot legs of Loops 1 and 4. <span class="hi-exam">Each cell's level indicator shows reactor vessel water level between the hot leg and the top of the vessel.</span> <span class="hi-trap">If any reactor coolant pump (RCP) is operating, the associated level indicator displays "INVALID."</span> (UFSAR §5.6.5)
- **Full range set (two d/p cells)** — senses the fluid pressure differential between the bottom and top of the reactor vessel. One side of each cell is connected to the head vent penetration; the other side is connected to an in-core instrumentation conduit at or near the seal table. <span class="hi-exam">When no RCP is running, these cells measure the differential pressure between the top and bottom of the reactor vessel to measure the water level above and below the reactor core.</span> <span class="hi-trap">The associated level indicator displays "INVALID" if any RCP is operating.</span> (UFSAR §5.6.5)
- **Dynamic range set (two d/p cells)** — installation similar to the upper range cells; measures reactor core and internal pressure drop for any combination of operating RCPs. When compared with the normal single-phase pressure drop, this provides an indication of the relative void content or density of the circulating coolant, and may be used on a continuous basis. The RVLIS-86 stores four values of expected reactor coolant void fraction (one through four RCPs running); the expected value corresponding to the current pump operating status is displayed on the RVLIS-86 remote display panels. <span class="hi-trap">When all pumps are off, the dynamic range indicator displays "INVALID."</span> (UFSAR §5.6.5)

Per UFSAR Table 7.5-1 (item 9), the accident-condition main control room display provides <span class="val-normal">2 channels</span> over the "Hot leg – top of RV" range with an accuracy of <span class="hi">6% without RCPs running</span> (one channel recorded), and <span class="val-normal">4 channels</span> over the "Bottom – top of RV" range (one set recorded), for the purpose of detecting inadequate core cooling (UFSAR Table 7.5-1).

All of the d/p cells are located outside of containment to minimize post-accident environmental effects and to facilitate calibration, cell replacement, reference-leg checks, and filling and venting. Hydraulic sensors (inside containment) and hydraulic isolators (outside containment), connected by a seal sensing line, are installed between each d/p cell and its connection to the vessel/RCS; these features assure containment isolation in case of a sensing-line break and prevent flow of primary coolant to outside containment. To obtain the required accuracy for vessel water level measurement, the d/p cell indications are compensated using measured temperatures of both the d/p cell reference legs and the reactor coolant (UFSAR §5.6.5).

**RCS pressure inputs (POPS-shared):**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q47</div>
<span class="hi-exam">2PT-403 (RCS Narrow Range Pressure) and 2PT-405 (RCS Wide Range Pressure) provide input to both the Pressurizer Overpressure Protection System (POPS) and to the RVLIS Electronics Cabinets.</span> Both 2PT-403 and 2PT-405 are credited as accident monitoring instrumentation per LCO 3.3.3.7. <span class="hi-trap">Trap: POPS is not their only function — they also feed RVLIS. Loss of 2PT-405 affects RVLIS Train B availability (confirmed by 2022 Q84).</span>
</div>

**Power supplies:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q85</div>
RVLIS Train A power supply: <span class="hi-exam">2B Vital Instrument Bus powers the Train A Microprocessor Panel</span>. Loop 22 THOT also provides input to Train A RVLIS. Loss of 2B VIB makes <span class="hi-exam">only Train A inoperable — Train B is unaffected</span>. With Train B available, RVLIS is available and EOP-TRIP-6 (with RVLIS) applies for natural circulation rapid cooldown, not EOP-TRIP-5.
</div>

## Operation

During refueling, the reactor head and associated RVLIS piping are removed. The instrument sensing line normally connected to the RVLIS pressure tap is manually realigned to sense atmospheric pressure. When the refueling mode is selected at the RVLIS-86, the sensors' outputs are re-scaled by the RVLIS-86 software. In refueling mode, <span class="hi-exam">the upper range transmitters provide the reduced inventory level indication from 97.3 feet to 106.0 feet</span>, and <span class="hi-exam">the dynamic range transmitters provide the refueling cavity level indication from 104 feet to 130 feet</span> (UFSAR §5.6.5).

### Natural Circulation Cooldown (RVLIS-dependent)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q84</div>
Natural circulation rapid cooldown rate limits depend on RVLIS availability: <span class="hi-exam">with RVLIS: 100&deg;F/hr for the entire cooldown</span>. <span class="hi-exam">Without RVLIS: initial cooldown to 500&deg;F limited to &lt; 50&deg;F/hr, then &lt; 100&deg;F/hr afterwards</span>. RVLIS availability determines which EOP is used for rapid cooldown.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q84</div>
RVLIS Train B requires <span class="hi-exam">2PT-405 (Wide Range RCS Pressure)</span> as an input. If 2PT-405 fails AND Train A is out of service for maintenance, <span class="hi-exam">both trains of RVLIS are unavailable</span> → enter EOP-TRIP-6 (Natural Circulation Cooldown without RVLIS) instead of EOP-TRIP-5 (with RVLIS). In EOP-TRIP-6, maximum RCS cooldown rate is <span class="hi-exam">50F/hr when T-Hots >500F</span>, increasing to <span class="hi-exam">100F/hr when T-Hots <450F</span>. <span class="hi-trap">100F/hr is only allowed below 450F T-Hot — at 540F T-Hot, the maximum is 50F/hr.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q25</div>
TRIP-6 Rapid Cooldown Step 10 minimum: <span class="hi-exam">RVLIS Full Range >= <span class="val-alarm">70%</span></span> (changed from 74% in Dec 2015 EOP revision). Purpose: <span class="hi-exam">limit steam entering the RCS hot legs</span> — preventing void migration to the top of the SG U-tubes that would disrupt the natural circulation flow circuit. <span class="hi-trap">Trap: 70% is NOT for "ensuring positive level indication of RCS" — it is specifically tied to keeping voids out of the SG U-tubes and preserving natural circulation.</span>
</div>

### RCP Restart Evaluation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q79</div>
During SGTR RCP-restart evaluation, with <span class="hi-exam">RVLIS upper range &lt;100%, PZR level and PZR-saturated conditions are required (along with RCS subcooling)</span> before restarting a RCP. See [[RCPs]].
</div>

### Dynamic Range Validity

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q16</div>
<span class="hi-trap">Dynamic range RVLIS would NOT be valid during a small break LOCA</span> because RCPs would have been stopped IAW CAS at &lt; <span class="val-trip">1350 psig</span>. Dynamic range requires RCPs running; with RCPs stopped, only full range RVLIS is available.
</div>

### Core Cooling CSF Status Tree Thresholds

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q44</div>
On the Core Cooling CSF status tree, with CETs &lt;700°F (no superheat), <span class="hi-exam">RVLIS Full Range &lt;39% drives a Core Cooling PURPLE path</span>; RVLIS Full Range above that threshold (e.g., 74%) with CETs ~650°F is a <span class="hi-exam">YELLOW path</span>, not PURPLE. The superheat RED path is set by 5 or more CETs &gt;1200°F, independent of RVLIS. See [[Incores]], [[EOP-CFST-1 — Critical Safety Function Status Trees]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q24</div>
Core Cooling Red Path (no RCPs running): requires <span class="hi-exam">five (5) hottest CETs > 700°F AND RVLIS Full Range ≤ <span class="val-trip">39%</span></span>. <span class="hi-trap">RVLIS Upper Range is NOT applicable for core cooling status — it only provides indication from the hot leg piping connection to the top of the reactor vessel.</span> Purple Path (degraded core cooling with RCPs running): <span class="hi-exam">RVLIS Dynamic Range ≤ <span class="val-alarm">44%</span></span>. CET-based inadequate core cooling Red Path: <span class="hi-exam">five (5) CETs > <span class="val-trip">1200°F</span></span> (not three).
</div>

## Tech Spec LCOs

RVLIS is credited as accident monitoring instrumentation under **LCO 3.3.3.7** (TS Table 3.3-11). The system requires <span class="val-normal">2 OPERABLE channels</span>, with a minimum of 1 channel OPERABLE. With one RVLIS channel inoperable, restore it within <span class="hi">30 days</span> or submit a special report per Spec 6.9.4 (Action 8); with both channels inoperable, restore one within <span class="hi">7 days</span> or submit a special report per Spec 6.9.4 (Action 9) (TS Table 3.3-11, Table 4.3-11, Amend 301). See [[TS 3/4.3 — Instrumentation]].

## Connections

- Related systems: [[RCS]], [[ECCS]], [[Pressurizer Level & Press Control]], [[115V AC]], [[Steam Generator & Blowdown]], [[Incores]]
- Related EOPs: [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-FRCC-1 — Response to Inadequate Core Cooling]], [[EOP-TRIP-4 — Natural Circulation]], [[EOP-TRIP-5 — Natural Circulation Cooldown With RVLIS]], [[EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam questions: [[2016 Q25]], [[2019 Q47]], [[2019 Q85]], [[2020 Q16]], [[2020 Q24]], [[2020 Q84]], [[2022 Q84]], [[2015 Q79]], [[2014 Q25]], [[2014 Q26]], [[2012 Q15]], [[2012 Q24]], [[2012 Q44]], [[2012 Q83]]
- Related exam: [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
