---
title: Waste Gas
category: systems
status: draft
aliases:
  - gaseous waste
  - rad waste
---

# Waste Gas

## Function

The gaseous waste system collects, processes, monitors, and releases gaseous radioactive waste. Sources include: cover gas from the VCT and RCDT, vent gases from various tanks, and containment purge air. Processing includes decay (holdup tanks), filtration (HEPA and charcoal), and dilution. Monitored before release through the plant vent. (UFSAR 11.3)

## Gaseous Waste Processing

- Waste gas decay tanks (GDTs) provide holdup time for radioactive decay before release
- Gas released through 2WG41 (GDT Vent Control Valve) to the plant vent
- Plant vent radiation monitor (2R41D) provides automatic protection against unmonitored releases

## Radiological Monitoring

- **Process radiation monitors:** Monitor liquid and gaseous effluent pathways
- **Area radiation monitors:** Monitor dose rates in occupied and restricted areas
- **Containment atmosphere monitors:** Monitor containment air for activity
- **Main steam line monitors:** Detect primary-to-secondary leakage (SG tube leaks)
- **Effluent monitors:** Monitor liquid and gaseous releases at the point of discharge
(UFSAR 11.4)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q35</div>
During a 24 GDT release per S2.OP-SO.WG-0011, <span class="hi-exam">2R41 Channel D High Radiation Alarm causes 2WG41 (GDT VENT CONT V) to AUTOMATICALLY close</span>, terminating the release. Other valves open during the release — 24WG34 (GDT STOP TO PLNT), 2WG39 (GDT TO VENT HOR STOP V), 2WG38 (GDT VENT CONTROL VALVE) — <span class="hi-trap">do NOT automatically close on 2R41 high radiation. Only 2WG41 receives the automatic closure signal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q23</div>
2R41D (Plant Vent radiation monitor) in ALARM automatically closes: <span class="hi-exam">2WG41 (GDT Vent Control Valve — terminates waste gas release)</span>, <span class="hi-exam">2VC1 and 2VC4 dampers (containment purge)</span>, and <span class="hi-exam">2VC5 and 2VC6 dampers (containment pressure relief)</span>. Also aligns 2R45 skid to accident sampling loop.
</div>

## Tech Spec LCOs

- **[[TS 3/4.11 — Radioactive Effluents]]** — Gaseous effluent limits, monitoring

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q90</div>
Containment pressure relief and ODCM 3.3.9: per Table 3.3-13 Item 3.a, either <span class="hi-exam">2R12A OR 2R41A & D channels</span> is required for containment pressure relief. If only 2R12A fails (power supply failure) and 2R41 channels remain operable, ODCM 3.3.9 is MET — <span class="hi-exam">no compensatory actions required to recommence the relief</span>. <span class="hi-trap">Trap: Action 37 (two independent samples + verified release rate calculations) only applies if BOTH 2R12A AND 2R41A & D are inoperable. Action 33 (grab samples every 8 hours) applies to the Plant Vent Radiation Monitor, not the containment atmosphere monitor.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-k</div>
Waste Gas Decay Tank release (S2.OP-SO.WG-0008): latch-and-set sequence on 2WG41 must be performed before commencing release. Max release rate <span class="hi-exam">32 SCFM</span> (Flow Bias <=100%). Terminate release at <span class="hi-exam">10 psig</span> tank pressure: reduce Flow Bias to <0%, close 2WG41-SWT, close 21WG34.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q98</div>
GDT release restrictions per S1.OP-SO.WG-0011:
<ul>
<li><span class="hi-exam">"DO NOT release more than one GDT at a time."</span> (P&L 3.2)</li>
<li><span class="hi-exam">"DO NOT transfer Waste Gas from one GDT to another during the GDT Release."</span> (P&L 3.3)</li>
</ul>
<span class="hi-exam">VCT Purge to the plant vent IS allowed during a GDT release</span> — per S1.OP-SO.WG-0005(Q), step 1 of the VCT Purge Radioactive Gaseous Release Form. <span class="hi-trap">Trap: waste gas cannot be transferred between units or between GDTs during a release, and only one GDT may be released at a time, but VCT purge is a separate permitted activity.</span>
</div>

## Connections

- Related concepts: [[Radiation Monitoring]], [[Containment]]
- Related procedures: [[S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent]], [[S2.OP-SO.WG-0011 — Discharge of 24 Gas Decay Tank to Plant Vent]], [[S1.OP-SO.WG-0011 — Discharge of 14 Gas Decay Tank]], [[S1.OP-SO.WG-0005 — VCT Purge to the Plant Vent]]
- Related exam questions: [[2019 Q35]], [[2020 Q59]], [[2020 Q98]], [[2023 Q90]], [[2022 Q23]]
- Related JPMs: [[2023 JPM IP-k]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
