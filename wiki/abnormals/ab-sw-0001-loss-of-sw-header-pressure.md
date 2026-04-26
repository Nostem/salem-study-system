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

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2020 #3</div>
23 SW Pump trips, 26 SW Pump fails to auto start on low pressure. OHA B-13/B-14/B-15 for SW header pressure low. RO manually starts 26 SW Pump. Only action AB requires is to start standby SW Pump. CRS enters <span class="hi-exam">TS 3.7.4 (72 hours)</span> — 21 and 23 SW Pumps inoperable in one bay (only one operable SW loop).
</div>

## Connections

- Related systems: [[Service Water]], [[CFCUs]]
- Related exam questions: [[2018 Q24]], [[2020 Q14]], [[2020 Q52]], [[2020 Q89]], [[2022 Q16]]
- Related scenarios: [[2020 Scenario 3 — ATWS / Feedwater Line Break]]
- Related exam: [[2018 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2023 NRC Operating Exam]], [[2020 NRC Operating Exam]]
