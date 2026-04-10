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

## Connections

- Related concepts: [[Radiation Monitoring]], [[Containment]]
- Related concepts: [[Radiation Monitoring]]
- Related procedures: [[S2.OP-SO.WG-0008 — 21 Gas Decay Tank to Plant Vent]]
- Related exam questions: [[2023 Q90]], [[2022 Q23]]
- Related JPMs: [[2023 JPM IP-k]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
