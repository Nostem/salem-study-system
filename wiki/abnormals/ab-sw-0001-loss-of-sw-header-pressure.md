---
title: "AB.SW-0001 — Loss of SW Header Pressure"
category: abnormals
status: draft
aliases:
  - AB.SW-0001
---

# AB.SW-0001 — Loss of SW Header Pressure

## Purpose

Referenced in 2023 NRC Operating Exam simulator scenarios. Details to be backfilled from source documents.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q24</div>
AB.SW-0001 Attachment 4 — leak isolation based on location relative to 21SW22 (NUCLEAR HEADER):<br>
&bull; <span class="hi-exam">Leak DOWNSTREAM of 21SW22 (Step 2.0): CLOSE 21SW22 and ENSURE CLOSE 21SW23 and 22SW23 (TIE VALVES)</span>. After isolation, SW cooling is NOT available to 21CFCU and 22CFCU.<br>
&bull; <span class="hi-exam">Leak UPSTREAM of 21SW22 (Step 3.0): CLOSE 21SW22 and ENSURE OPEN 21SW23 and 22SW23 (TIE VALVES)</span> — maintains cross-header supply to the isolated header's loads.<br>
<span class="hi-trap">Trap: tie valve position (open vs closed) depends entirely on whether the leak is upstream or downstream of 21SW22.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q16</div>
OHA B-48 (<span class="hi-exam">SW VLV RM FLOODED</span>) indicates leak in SW valve room on <span class="hi-exam">78' Mechanical Penetration Area</span>. CFCU piping in this room before containment penetration.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q14</div>
AB.SW-0001 may be the first procedure entered due to OHAs B-13 and B-14 (low SW header pressures). However, with OHA B-29 (21-23 SW PMP SMP AREA LVL HI) also alarming, AB.SW-0001 <span class="hi-exam">immediately transitions the crew to AB.SW-0003 (Service Water Bay Leak)</span> for bay isolation. AB.SW-0001 provides attachments for isolating various leaks but does NOT contain the steps for isolating a SW Bay.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q89</div>
AB.SW-0001 Attachment 5 — isolating a SW leak on a CFCU: <span class="hi-exam">close SW72 (Outlet Water Valve) FIRST, then close SW58 (Inlet Water Valve)</span>. The basis for closing the outlet valve first is to <span class="hi-exam">minimize the possibility of water hammer following restoration</span>. <span class="hi-trap">Trap: closing the inlet valve first (SW58) seems intuitive to stop flow, but it creates conditions for water hammer when the system is restored. The field manual isolation valves (SW54 inlet and SW76 outlet on 78' elevation) are closed after the MOVs.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q61</div>
Entry-condition setpoints: <span class="hi-exam">OHA B-13 (21 SW HDR PRESS LO) and B-14 (22 SW HDR PRESS LO) annunciate at <span class="val-alarm">99.5 psig</span></span>. The <span class="hi-exam">standby SW pump auto-starts at <span class="val-alarm">95.5 psig</span></span> (continued degradation below the alarm setpoint). Reference: S2.OP-AR.ZZ-0002 pages 28-29.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q92</div>
AB.SW-0001 (Loss of SW Header Pressure) <span class="hi-exam">Attachment 2 directs reduction of SW loads (Loads Affected by a Loss of Service Water)</span>. <span class="hi-trap">The charging-pump swap action is NOT in AB.SW-0001 — it lives in AB.SW-0005 (Loss of All Service Water).</span> AB.SW-0001 is the correct entry procedure ONLY when there is actually a degraded header (i.e., a SW pump remains capable of running) — not when a 4KV Bus Differential leaves no powered SW pumps.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
23 SW Pump trips, 26 SW Pump fails to auto start on low pressure. OHA B-13/B-14/B-15 for SW header pressure low. RO manually starts 26 SW Pump. Only action AB requires is to start standby SW Pump. CRS enters <span class="hi-exam">TS 3.7.4 (72 hours)</span> — 21 and 23 SW Pumps inoperable in one bay (only one operable SW loop).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-e</div>
AB.SW-0001 may be the diagnostic entry path for a total loss of SW: OHA B-13/B-14 (low SW header pressure) routes through the ARP S2.OP-AR.ZZ-0002 to AB.SW-0001. <span class="hi-exam">AB.SW-0001 Step 3.8 directs: "IF the Unit is NOT in a Service Water Header Outage, THEN GO TO S2.OP-AB.SW-0005 (Loss of All Service Water)"</span> — the procedure ultimately routes the crew back to AB.SW-0005 for the trip-and-stop-RCPs actions when no SW is available. AB.SW-0001 also confirms there is no unisolated leak (Step 3.2) and that no SW pumps are available (Step 3.4) before transitioning.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q80</div>
AB.SW-0001 Step 3.11: <span class="hi-exam">if a single component can be isolated, isolate it</span> — for a single CFCU supply-line leak (78' Mech Pen Area) identifiable from the control room, isolate that single CFCU. The multiple-CFCU isolations in Attachment 5 are for undetermined CFCU leaks in containment (containment sump pump runs). See [[Service Water]], [[CFCUs]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #3</div>
25 SW pump discharge strainer high D/P presents as <span class="hi-exam">lowering SW header pressures</span> and OHA B-16, 24-26 SW STRAIN TRBL. Field finds the strainer shaft NOT turning with the motor running and D/P ~10.5 psid — manual backwash cannot be performed. CRS declares 25 SW pump inoperable based on <span class="hi-exam">D/P &gt;10 psid</span> (IAW [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]]) and, with 26 SW pump already CIT, enters <span class="hi-exam">LCO 3.7.4</span> (only one SW loop operable; no operable SW pump on "C" vital bus).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q47</div>
With 22SW20 (Nuclear Header Supply) stuck shut isolating the 21 nuc header, <span class="hi-exam">21 and 22 CFCUs lose all cooling water (2 CFCUs)</span>; 23 CFCU is fed from BOTH nuc headers (check-valve arrangement) and 24/25 are on the 22 nuc header, so they are unaffected. Restore SW by <span class="hi-exam">opening 21SW23 / 22SW23 (Nuclear Header X-over valves)</span>. <span class="hi-trap">The SW17 SW-Bay/Discharge Header x-connects are normally open and cannot restore flow past the shut 22SW20.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q83 (DELETED)</div>
(Question deleted from the graded exam.) Diagnosing a SW leak from OHA B-13/B-14 (21/22 SW HDR PRESS LO) with both nuc headers at 98 psig and no other alarms: a <span class="hi-exam">2B EDG Lube Oil Cooler leak</span> is isolated via the EDG's <span class="hi-exam">2 supply header isolation valves (one from each header) and 2 return header isolation valves</span> to the 11/12 discharge path, IAW AB.SW-0001. <span class="hi-trap">TGA SW header pressure is maintained at <span class="val-normal">80 psig</span> by 2ST1 with a low-pressure alarm at <span class="val-alarm">70 psig</span>; a Service Water Bay leak or a leak large enough to drop both nuc headers would also bring in the TGA lo-pressure alarm (and a bay leak the bay sump hi-level alarm) — neither present here. A 21 CCW HX leak can be isolated with manual valves without isolating the whole nuc header.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
A #2 SW Bay leak first brings in unexpected SW alarms and lowering SW header pressure; the crew enters AB.SW-0001 (and a standby SW pump starts to restore header pressure) before transitioning to <span class="hi-exam">AB.SW-0003, Service Water Bay Leak</span>, to split the bays and isolate 2 Bay. See [[2014 Scenario 3]].
</div>

## Connections

- Related systems: [[Service Water]], [[CFCUs]], [[EDGs]], [[CCW]]
- Related procedures: [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]], [[AB.SW-0005 — Loss of All Service Water]], [[AB.SW-0003 — Service Water Bay Leak]]
- Related exam questions: [[2016 Q61]], [[2016 Q92]], [[2018 Q24]], [[2020 Q14]], [[2020 Q52]], [[2020 Q89]], [[2022 Q16]], [[2015 Q80]], [[2014 Q47]], [[2014 Q83]]
- Related JPMs: [[2016 JPM Sim-e]]
- Related scenarios: [[2020 Scenario 3 — ATWS / Feedwater Line Break]], [[2015 Scenario 3]], [[2014 Scenario 3]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]]
