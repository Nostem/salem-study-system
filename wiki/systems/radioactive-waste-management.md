---
title: Radioactive Waste Management
category: systems
status: draft
aliases:
  - rad waste
  - liquid waste
  - gaseous waste
  - solid waste
---

# Radioactive Waste Management

## Function

The radioactive waste management systems collect, process, store, and dispose of radioactive wastes generated during plant operation. The systems are designed to limit releases to the environment to levels within 10CFR20 and 10CFR50 Appendix I limits. (UFSAR 11)

## Liquid Waste System

Collects, processes, monitors, and releases or recycles liquid radioactive waste. Sources include: equipment drains, floor drains, laundry, decontamination, and laboratory wastes. Processing includes filtration, demineralization, and evaporation. Processed water may be recycled or discharged after monitoring confirms activity levels are within limits. (UFSAR 11.2)

## Gaseous Waste System

Collects, processes, monitors, and releases gaseous radioactive waste. Sources include: cover gas from the VCT and RCDT, vent gases from various tanks, and containment purge air. Processing includes decay (holdup tanks), filtration (HEPA and charcoal), and dilution. Monitored before release through the plant vent. (UFSAR 11.3)

## Radiological Monitoring

- **Process radiation monitors:** Monitor liquid and gaseous effluent pathways
- **Area radiation monitors:** Monitor dose rates in occupied and restricted areas
- **Containment atmosphere monitors:** Monitor containment air for activity
- **Main steam line monitors:** Detect primary-to-secondary leakage (SG tube leaks)
- **Effluent monitors:** Monitor liquid and gaseous releases at the point of discharge
(UFSAR 11.4)

## Solid Radwaste System

Processes and packages solid radioactive waste including spent resins, filter cartridges, dry active waste, and evaporator concentrates for storage and offsite disposal. (UFSAR 11.5)

## Offsite Radiological Monitoring

Environmental monitoring program samples air, water, soil, vegetation, fish, and shellfish around the plant to verify that radiological releases are within regulatory limits. (UFSAR 11.6)

## Tech Spec LCOs

- **[[TS 3/4.11 — Radioactive Effluents]]** — Liquid and gaseous effluent limits, monitoring

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q61</div>
Liquid Radwaste Release (CVCS Monitor Tank): release path through CC Heat Exchanger and CW system. <span class="hi-exam">Only one circulator is required to be in service to allow a release to continue.</span> The 1R18 radiation monitor does not isolate/close the 1WL51 overboard valve on loss of flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q68</div>
ODCM liquid effluent monitoring (3.3.8): <span class="hi-exam">loss of 2FR1064 flow recorder does NOT automatically close the 2WL51 overboard valve</span> — loss of flow is not a design feature of the 2R18 process radiation monitor. Per ODCM Action 29, release may continue if <span class="hi-exam">effluent flow is estimated once per 4 hours</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q90</div>
Containment pressure relief and ODCM 3.3.9: per Table 3.3-13 Item 3.a, either <span class="hi-exam">2R12A OR 2R41A & D channels</span> is required for containment pressure relief. If only 2R12A fails (power supply failure) and 2R41 channels remain operable, ODCM 3.3.9 is MET — <span class="hi-exam">no compensatory actions required to recommence the relief</span>. <span class="hi-trap">Trap: Action 37 (two independent samples + verified release rate calculations) only applies if BOTH 2R12A AND 2R41A & D are inoperable. Action 33 (grab samples every 8 hours) applies to the Plant Vent Radiation Monitor, not the containment atmosphere monitor.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q98</div>
CVCS Monitor Tank release with 2R18 (Radioactive Liquid Effluent Monitor) inoperable: per S2.OP-SO.WL-0001, the <span class="hi-exam">SM/CRS authorizes the liquid radioactive waste release</span> (not the Radiation Protection Manager). Per ODCM 3.3.8 Action 26, with 2R18 inoperable: <span class="hi-exam">at least two independent samples must be analyzed and at least two technically qualified members of staff must independently verify release rate calculations and discharge line valving</span>. <span class="hi-trap">Trap: continuous surveys of discharge piping are performed for other reasons -- the ODCM requirement for inoperable 2R18 is two independent samples, not piping surveys.</span>
</div>

## Connections

- Related concepts: [[Radiation Protection]]
- Related exam questions: [[2023 Q61]], [[2023 Q68]], [[2023 Q90]], [[2023 Q98]]
- Related exam: [[2023 NRC Written Exam]]
