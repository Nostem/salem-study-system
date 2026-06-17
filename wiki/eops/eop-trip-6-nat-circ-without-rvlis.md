---
title: "EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS"
category: eops
status: draft
aliases:
  - EOP-TRIP-6
  - nat circ without RVLIS
---

# EOP-TRIP-6 — Natural Circulation Cooldown Without RVLIS

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for natural circulation cooldown with steam voids in the vessel when RVLIS is NOT available. Entered from EOP-TRIP-4 when both trains of RVLIS are unavailable and rapid cooldown/depressurization is required.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q26</div>
During a TRIP-6 natural-circulation rapid cooldown, the <span class="hi-exam">MINIMUM RVLIS Full Range level to be maintained is 74%</span> (a do-loop at Step 10 holds the cooldown until satisfied). Its significance is to <span class="hi-exam">prevent steam from entering the RCS hot legs</span>: per the Bases Document, steam in the hot legs could reach the top of the SG U-tubes and disrupt the natural circulation flow circuit. <span class="hi-trap">The value is 74% (not 100%), and the reason is preventing voids in the hot legs/SG U-tubes — not merely ensuring positive RCS level indication. [Note: the 2014 exam labels TRIP-6 "RAPID COOLDOWN WITH RVLIS"; this article is titled "Without RVLIS" — flagged for reconciliation.]</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q85</div>
TRIP-6 has a Step 1 caution that <span class="hi-exam">TRIP-4 steps 3-17 must be completed prior to entry</span>. <em>[Note: the 2015 exam source labels TRIP-6 "With RVLIS"; this wiki article is titled "Without RVLIS" — flagged for reconciliation.]</em> See [[EOP-TRIP-4 — Natural Circulation]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q8</div>
Per 1-EOP-TRIP-6 Step 1: before restarting an RCP, <span class="hi-exam">saturated conditions must first be established in the PZR</span>. The reason is to <span class="hi-exam">limit the PZR pressure DECREASE upon RCP restart</span>. Saturation determination requires converting psig to psia: at 2005 psig (2020 psia), T-sat = 637&deg;F. If PZR liquid temperature is 635&deg;F, the PZR is <span class="hi-exam">subcooled (not saturated)</span>. <span class="hi-trap">Trap: steam tables use psia, not psig — must add ~15 psi to convert. Also: the concern is pressure DECREASE, not increase. A water-solid pressurizer concern (pressure rise) applies during different plant conditions.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q84</div>
Rapid natural circulation cooldown rates: <span class="hi-exam">without RVLIS, initial cooldown to 500&deg;F is limited to &lt; 50&deg;F/hr, then &lt; 100&deg;F/hr afterwards</span>. <span class="hi-exam">With RVLIS, maximum rate is 100&deg;F/hr for the entire cooldown.</span> <span class="hi-trap">Note: The 2020 exam labels TRIP-5 as "without RVLIS" and TRIP-6 as "with RVLIS" — this is reversed from the 2022 exam labeling. The cooldown rate values are consistent across both exams. The procedure numbering may reflect a revision change.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q84</div>
Maximum allowable RCS cooldown rate depends on RCS T-Hot temperature: with T-Hots <span class="hi-exam">> 500°F, maximum cooldown is 50°F/hr</span>; with T-Hots <span class="hi-exam">< 450°F, maximum cooldown is 100°F/hr</span>. <span class="hi-trap">2PT-405 (Wide Range RCS Pressure) is an input to Train B RVLIS. If Train A RVLIS is OOS and 2PT-405 fails, both trains of RVLIS are unavailable — enter EOP-TRIP-6, not EOP-TRIP-5.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-c</div>
Step 12 SI Accumulator Isolation during natural circulation rapid cooldown after RCS pressure drops <span class="hi-exam">&lt;1000 psig</span>: REMOVE LOCKOUT FROM 21-24 SJ54 at 2RP4, depress CLOSE on 21-24 SJ54. <span class="hi-exam">Alternate path: 24 SJ54 fails at intermediate position. Vent 24 Accumulator using 2NT35 (N2 HDR VALVE) and 24 SJ93 (N2 SUPPLY VALVE)</span> — RCS pressure must remain &gt; accumulator nitrogen pressure during venting to prevent backflow. Close vent valves when 24 Accumulator pressure reaches ZERO.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 Sim-c</div>
Step 12 — SI Accumulator Isolation during natural circulation cooldown with RCS pressure &lt;1000 psig: remove lockout from 21-24 SJ54 at 2RP4. Close all four SJ54 Accumulator Outlet Valves. <span class="hi-exam">24SJ54 fails at intermediate position</span> (alternate path). Vent 24 Accumulator: verify RCS pressure > accumulator N2 pressure, open <span class="hi-exam">2NT35 (N2 HDR VALVE)</span> and <span class="hi-exam">24SJ93 (N2 SUPPLY VALVE)</span> to vent to atmospheric pressure, then close both vent valves when pressure reaches zero.
</div>

## Connections

- Related systems: [[RVLIS]], [[RCS]], [[ECCS]], [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-4 — Natural Circulation]], [[EOP-TRIP-5 — Natural Circulation Cooldown With RVLIS]]
- Related procedures: [[S2.OP-SO.SJ-0002 — Accumulator Operations]]
- Related exam questions: [[2018 Q8]], [[2022 Q84]], [[2020 Q84]], [[2015 Q85]], [[2014 Q26]]
- Related JPMs: [[2018 JPM Sim-c]], [[2016 JPM Sim-c]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2020 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2014 NRC Written Exam]]
