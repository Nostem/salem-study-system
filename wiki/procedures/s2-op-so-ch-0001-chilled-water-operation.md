---
title: "S2.OP-SO.CH-0001 — Chilled Water System Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CH-0001
  - chilled water system operation
---

# S2.OP-SO.CH-0001 — Chilled Water System Operation

> DRAFT — Reconstructed from exam materials

## Purpose

System operating procedure for the Chilled Water System on Salem Unit 2. Covers normal operation, shutdown, and isolation of non-essential heat loads when chiller capacity is lost.

## Key Actions / Information

**Section 4.6 — Isolation of Non-Essential Heat Loads:**

Used when chiller units are inoperable and T/S 3.7.10 action requires isolating non-essential loads to maintain cooling for essential components.

**Attachment 2 — Non-Essential Heat Load Determination:**

Step-by-step determination of heat loads to isolate:
- Step 1.A: Record CW inlet water temperature from SC.OP-DL.ZZ-0008(Q) log. Use highest temperature and add 1.5°F for instrument uncertainty.
- Step 1.B: Record number of inoperable chillers.
- Step 1.C: Using Table A, determine Total Heat Load Isolation value based on inlet water temperature, number of inoperable chillers, and operating mode (Maintenance Mode / EACS status).
- Steps 1.D-1.F: Select components from Table B for isolation. Record heat load values. Mark N/A for components to remain available.
- Step 1.G: Sum isolation column values for Total Isolation value.
- Step 1.H: Verify Total Isolation (Table B) exceeds Total Heat Load Isolation (Step 1.C).

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 SRO-A1</div>
Identical scenario to 2022 SRO-A1. Both chillers tripped, inlet water temp 85.1°F (83.6°F + 1.5°F uncertainty), EACS out of service, Maintenance Mode: <span class="hi-exam">Table A yields 902.8 kBTU/HR required isolation</span>. SM directs ECAC NOT isolated. Selected loads (21/22/23 PACU, Secondary Lab, Primary Lab, Counting Room, PASS) total <span class="hi-exam">906.6 kBTU/HR</span> — just exceeds the 902.8 kBTU/HR requirement. T/S 3.7.10 action 'b' entered at 1600 for both chillers inoperable.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A1</div>
With both chillers inoperable, inlet water temp 85.1°F (83.6°F + 1.5°F uncertainty), EACS out of service, and Maintenance Mode: <span class="hi-exam">Table A yields 902.8 kBTU/HR required isolation</span>. ECAC kept available per SM direction. Selected loads (21/22/23 PACU, Secondary Lab, Primary Lab, Counting Room, PASS) total <span class="hi-exam">906.6 kBTU/HR</span> — just exceeds the 902.8 kBTU/HR requirement.
</div>

## Connections

- Related systems: [[Chill Water]], [[Control Air]], [[Service Water]]
- Related tech specs: [[TS 3/4.7 — Plant Systems]]
- Related JPMs: [[2018 JPM SRO-A1]], [[2022 JPM SRO-A1]]
- Related exam: [[2018 NRC Operating Exam]], [[2022 NRC Operating Exam]]
