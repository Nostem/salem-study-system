---
title: "AB.LOOP-0001 — Loss of All Offsite Power"
category: abnormals
status: draft
aliases:
  - AB.LOOP-0001
  - loss of offsite power
  - LOOP
---

# AB.LOOP-0001 — Loss of All Offsite Power

## Purpose

Provides operator actions for responding to a complete loss of offsite power (LOOP), including guidance on battery capacity management, load shedding, and cross-unit equipment alignment.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q9</div>
Battery capacity is 2 hours with no load shed performed, and 4 hours with LOPA-1 load shed completed.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q10</div>
If ANY RCP seal inlet temperature is >=225 degrees F, seal injection is NOT permitted. Seal injection must be isolated before starting a cross-unit charging pump. Attachment 10 provides instructions for aligning 13 Charging Pump from Unit 1.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 IP-i</div>
SBO Air Compressor start (SC.OP-SO.CA-0001): when all ECACs are unavailable during LOOP, start SBO diesel compressor. Critical sequence: keep <span class="hi-exam">BY-PASS VALVE pushbutton depressed</span> while starting engine, do NOT release until <span class="hi-exam">oil pressure >15 psig</span>. Align discharge: <span class="hi-exam">1CA1913 → 1CA1886 → 2CA584</span>. Place UNLOADER VALVE in RUN to load.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-i</div>
During LOOP, CRS directs transfer of 22 Backup Group PZR heaters to emergency power supply per <span class="hi-exam">S2.OP-SO.PZR-0010 Section 5.3</span>. This is a manual field action requiring an NCO to physically manipulate disconnects and breakers at the 78 ft. and 84 ft. elevations.
</div>

## Connections

- Related systems: [[DC Power]], [[RCPs]], [[CVCS]], [[Pressurizer & PRT]]
- Related procedures: [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]], [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]]
- Related exam questions: [[2023 Q9]], [[2023 Q10]]
- Related JPMs: [[2023 JPM IP-i]], [[2022 JPM IP-i]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2022 NRC Operating Exam]]
