---
title: "S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0001
---

# S2.OP-AR.ZZ-0001 — Overhead Annunciators Window A

## Purpose

Alarm response procedure for Unit 2 overhead annunciator panel Window A, covering alarms such as RMS HI RAD OR TRBL (OHA A-6).

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q51</div>
OHA A-6 (RMS HI RAD OR TRBL): When 2R1B-1 (Control Room Intake Radiation Monitor Channel 1) goes into ALARM, both units' CAV systems should automatically actuate to AP (Accident Pressurize) Mode. If automatic actuation fails, <span class="hi-exam">manually initiate AP Mode from Unit 2</span> (the unit with the high radiation signal). <span class="hi-trap">Manually actuating from Unit 1 would open Unit 2 intake dampers, which is the wrong response since Unit 2 is the unit with the potential radiological release.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q25</div>
OHA A-6 (RMS HI RAD OR TRBL) due to 2R41D Plant Vent Effluent: during SI termination (EOP-TRIP-3), this alarm in combination with <span class="hi-exam">C-34 (22 RHR SUMP OVRFLO) and RHR sump pump starts indicates a LOCA outside containment</span>. Leads to EOP-TRIP-3 CAS → EOP-LOCA-1 → EOP-LOCA-6.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q36</div>
OHA A-6 (RMS HI RAD OR TRBL) due to 2R9 (Fuel Storage Area Monitor) alarm: <span class="hi-exam">both FHB Exhaust Fans receive auto start signal, 21 HEPA ONLY Filter Unit isolates, HEPA 22 PLUS CHAR automatically aligns</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q17</div>
OHA A-7 (FIRE PROT FIRE) and A-15 (FIRE PUMP 1/2 RUN) are Window A alarms; Window A response directs assessing the affected Fire Zone(s) on 2RP5. <span class="hi-trap">A row "Fire" light on 2RP5 can illuminate from a manual fire pull box — it gives indication only and does not initiate fire-protection water flow, so verifying OHA A-15 FIRE PUMP 1/2 RUN does not by itself confirm water is supplied to the affected zone.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q42</div>
OHA A-34 (SSPS TRN A TRBL) alarms on loss of 1 of 2 45VDC power supplies to the Train A logic cabinet. <span class="hi-trap">Deenergizing the 2B Vital Instrument Bus does NOT cause OHA A-34 — Train A 45VDC power comes from A and D vital power, not the 2B bus.</span> See [[RPS/SSPS]].
</div>

## Connections

- Related systems: [[Radiation Monitoring]], [[CAV]], [[FHV]]
- Related exam questions: [[2015 Q17]], [[2019 Q36]], [[2020 Q25]], [[2022 Q51]], [[2015 Q42]]
- Related exam: [[2015 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
