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

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #1</div>
LOPA-1 crew requests assistance to restore power IAW AB.LOOP-0001 while continuing with LOPA-1 CAS. Blackout coping actions in Attachment 2, Part A completed within 30 minutes.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q19</div>
Attachment 3 of S1.OP-AB.LOOP-0001: with a LOOP and <span class="hi-exam">NO SI signal</span>, the SEC strips the 4KV vital bus breakers before sequencing on BLACKOUT loads — neither SI pump starts. Even if 11 SI Pump was running for IST when the LOOP occurred, it trips with the bus strip and is not auto-restarted. Both SI pumps would only restart on an <span class="hi-exam">accident signal coupled with the Blackout signal</span> (SEC Mode III). Bus mapping: <span class="hi-exam">11/12 SI pumps powered from 1A/1C 4KV Vital Buses</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q81</div>
<span class="hi-trap">AB.LOOP-0001 is for a TOTAL loss of offsite power and is NOT entered for a single 500 KV bus section loss.</span> A 2-6 500 KV breaker fault that loses only bus section 2 (Group Buses still fed through the Aux Power Transformer) is a PARTIAL loss — the crew enters AB.LOOP-0003, with no demand for a reactor trip / EOP-TRIP-1.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q12</div>
A loss of all offsite power with NO SI signal is a <span class="hi-exam">SEC MODE II actuation (Blackout)</span>: all 3 EDGs start, each SEC strips all loads off its vital bus, shuts the EDG output breaker, and sequences on BLACKOUT loads. <span class="hi-exam">RHR pumps are NOT blackout loads and are not restarted</span>. AB.LOOP-0001 <span class="hi-exam">step 3.8 asks if a RHR pump was running in SDC mode; if YES it directs initiating AB.RHR-0001</span> (because the SEC trips the running 21 RHR pump and does not restart it when 2A EDG connects to 2A vital bus). <span class="hi-trap">CCW pumps ARE restarted by their respective SECs; AB.RHR is NOT always directed (only if a RHR pump was running in SDC mode); the 22RH18 fails as-is, not the reason for AB.RHR.</span> See [[AB.RHR-0001 — Loss of RHR]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q11</div>
The Station Blackout Compressor is started as part of the Blackout Coping Actions in <span class="hi-exam">Attachment 2 Part A of AB.LOOP-0001</span> (required within 60 minutes of Blackout). See [[EOP-LOPA-1 — Loss of All AC Power]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 IP-k</div>
The SBO Diesel Control Air Compressor start (SC.OP-SO.CA-0001) is the local blackout coping action this procedure directs when both units have tripped on a loss of offsite power and no Emergency Control Air Compressors are running. Operator manually starts the SBO compressor and aligns <span class="hi-exam">1CA1913 → 1CA1886 → 2CA584</span> to restore Control Air to the Aux Building 1A/2A headers. This JPM lists <span class="hi-exam">S2.OP-AB.LOOP-1, Loss of Off-Site Power, Rev 27</span> as a reference.
</div>

## Connections

- Related systems: [[DC Power]], [[RCPs]], [[CVCS]], [[Pressurizer & PRT]], [[ECCS]], [[SECs]], [[4KV]], [[RHR]], [[EDGs]]
- Related procedures: [[SC.OP-SO.CA-0001 — SBO Diesel Control Air Compressor]], [[S2.OP-SO.PZR-0010 — Pressurizer Backup Heaters Power Supply Transfer]], [[AB.LOOP-0003 — Partial Loss of Offsite Power]], [[S1.OP-ST.SJ-0001 — 11 Safety Injection Pump Inservice Testing]], [[AB.RHR-0001 — Loss of RHR]], [[EOP-LOPA-1 — Loss of All AC Power]]
- Related exam questions: [[2016 Q19]], [[2023 Q9]], [[2023 Q10]], [[2014 Q81]], [[2012 Q11]], [[2012 Q12]]
- Related JPMs: [[2020 JPM IP-j]], [[2023 JPM IP-i]], [[2022 JPM IP-i]], [[2012 JPM IP-k]]
- Related scenarios: [[2020 Scenario 1 — Power Ascension / Station Blackout]]
- Related exam: [[2016 NRC Written Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
