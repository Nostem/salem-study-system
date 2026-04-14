---
title: Waste Liquid
category: systems
status: draft
aliases:
  - liquid waste
---

# Waste Liquid

## Function

The liquid waste system collects, processes, monitors, and releases or recycles liquid radioactive waste. Sources include: equipment drains, floor drains, laundry, decontamination, and laboratory wastes. Processing includes filtration, demineralization, and evaporation. Processed water may be recycled or discharged after monitoring confirms activity levels are within limits. (UFSAR 11.2)

## Solid Radwaste System

Processes and packages solid radioactive waste including spent resins, filter cartridges, dry active waste, and evaporator concentrates for storage and offsite disposal. (UFSAR 11.5)

## Offsite Radiological Monitoring

Environmental monitoring program samples air, water, soil, vegetation, fish, and shellfish around the plant to verify that radiological releases are within regulatory limits. (UFSAR 11.6)

## Tech Spec LCOs

- **[[TS 3/4.11 — Radioactive Effluents]]** — Liquid effluent limits, monitoring

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q43</div>
21 CVCS Monitor Tank release path per S2.OP-SO.WL-0001 is <span class="hi-exam">via SW to CW</span> (not SW only). <span class="hi-exam">2FR1064 (RADWASTE OVERBOARD DISCH FLOW RECORDER) must be OPERABLE</span> during the release — if 2FR1064 becomes inoperable, the crew is required to stop the release (per Step 5.5.8).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q61</div>
Liquid Radwaste Release (CVCS Monitor Tank): release path through CC Heat Exchanger and CW system. <span class="hi-exam">Only one circulator is required to be in service to allow a release to continue.</span> The 1R18 radiation monitor does not isolate/close the 1WL51 overboard valve on loss of flow.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q68</div>
ODCM liquid effluent monitoring (3.3.8): <span class="hi-exam">loss of 2FR1064 flow recorder does NOT automatically close the 2WL51 overboard valve</span> — loss of flow is not a design feature of the 2R18 process radiation monitor. Per ODCM Action 29, release may continue if <span class="hi-exam">effluent flow is estimated once per 4 hours</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam -- 2023 Q98</div>
CVCS Monitor Tank release with 2R18 (Radioactive Liquid Effluent Monitor) inoperable: per S2.OP-SO.WL-0001, the <span class="hi-exam">SM/CRS authorizes the liquid radioactive waste release</span> (not the Radiation Protection Manager). Per ODCM 3.3.8 Action 26, with 2R18 inoperable: <span class="hi-exam">at least two independent samples must be analyzed and at least two technically qualified members of staff must independently verify release rate calculations and discharge line valving</span>. <span class="hi-trap">Trap: continuous surveys of discharge piping are performed for other reasons -- the ODCM requirement for inoperable 2R18 is two independent samples, not piping surveys.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q90</div>
2R18 detector failure (fails LOW): <span class="hi-exam">WL51 will NOT automatically close</span> — only a HIGH alarm triggers WL51 closure. Per S2.OP-SO.WL-0001 (steps 2.3, 3.4, 3.5), if R18 is inoperable, <span class="hi-exam">FR1064 must remain OPERABLE AND two independent samples/calculations/lineups are required</span>. <span class="hi-trap">The release procedure is more restrictive than the ODCM — ODCM allows flow rate estimation with FR1064 inoperable, but the procedure prevents both R18 and FR1064 from being inoperable at the same time.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q72</div>
Direct release of CVCS Monitor Tank to Circulating Water System: requires <span class="hi-exam">rotation of a potentially contaminated spectacle flange outside the RCA</span>, which necessitates <span class="hi-exam">Radiation Protection support</span>. Other evolutions (hydrogen recombiner operation, gas decay tank release, containment pressure relief) do NOT require RP support as their controls are in the control room area.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-k</div>
Release of 21 CVCS MT via SW to CW per S2.OP-SO.WL-0001 Section 5.5: Maximum Release Rate <span class="hi-exam">45 gpm</span> (limited due to high activity content). Control flow using <span class="hi-exam">2WR59 (MT PMPS OB STOP VALVE)</span> and <span class="hi-exam">21WR53 (MT RECIRC V)</span> — throttling 21WR53 CLOSED diverts more flow overboard. If <span class="hi-exam">2R18 Monitor ALARMS</span>, immediately direct NCO to <span class="hi-exam">CLOSE 2WL51 (LIQUID RELEASE STOP VALVE)</span>. Tank volume from S2.OP-TM.ZZ-0002: at 90% level, volume is approximately <span class="hi-exam">19500 gallons</span>.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 IP-k</div>
Place 11 CVCS Monitor Tank in recirculation per S1.OP-SO.WL-0001 Section 5.1 (Unit 1): valve lineup via Attachment 1 — <span class="hi-exam">11WR27 and 11WR31 OPEN, 12WR27 and 12WR31 CLOSED</span>. Start 11 MT Pump, throttle <span class="hi-exam">11WR53 to maintain 80 psig discharge</span>. Calculate minimum recirculation time using S1.OP-TM.ZZ-0002 tank curve: 90% level = <span class="hi-exam">19500 gallons</span>. Formula: <span class="hi-exam">(Volume x 3) / 150 gpm = 6 Hrs 30 Min</span>. <span class="hi-trap">Recirculation ensures the tank is homogeneously mixed before sampling — additions during recirculation invalidate the sample.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A4</div>
Release path selection per S1.OP-SO.WL-0002: with Unit 2 circulators all OOS, 22 CCHX drained, and 12A Circulator C/T, candidate selects <span class="hi-exam">21 CCHX to 12A AND/OR 12B CW Pumps</span> as the release flow path for 12 CVCS Monitor Tank. Chemistry required minimum dilution flow of <span class="hi-exam">100000 gpm</span>. Key: must evaluate all available CCHXs and CW pump configurations to find a path with adequate dilution.
</div>

## Connections

- Related concepts: [[Radiation Monitoring]], [[CVCS]]
- Related procedures: [[S1.OP-SO.WL-0001 — Release of Radioactive Liquid Waste]], [[S2.OP-SO.WL-0001 — Release of Radioactive Liquid Waste]], [[S1.OP-SO.WL-0002 — Release of Radioactive Liquid Waste (Unit 1 CCHX Path)]]
- Related exam questions: [[2019 Q43]], [[2020 Q72]], [[2020 Q90]], [[2023 Q61]], [[2023 Q68]], [[2023 Q98]]
- Related JPMs: [[2020 JPM IP-k]], [[2020 JPM SRO-A4]], [[2022 JPM IP-k]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
