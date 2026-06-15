---
title: "S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0005
---

# S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E

## Purpose

Alarm response procedure for Unit 2 overhead annunciator panel Window E, covering rod-related alarms including ROD INSERT LMT LO (E-8) and ROD INSERT LO-LO (E-16).

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q56</div>
OHA E-8 (ROD INSERT LMT LO) alarms when rods are <span class="hi-exam">10 steps from the Rod Insertion Limit</span>. The RIL from the COLR has NOT been exceeded at this point. The required response is to <span class="hi-exam">initiate a normal boration IAW S2.OP-SO.CVC-0006, Boron Concentration Control</span>, to restore rods to their normal band. <span class="hi-trap">Emergency boration (S2.OP-SO.CVC-0008) was previously required when OHA E-16 (ROD INSERT LO-LO) alarmed, but this requirement has been removed from the OHA alarm procedures.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q19</div>
During dropped rod recovery (AB.ROD-0002): after the P/A converter is reset to zero, <span class="hi-exam">OHA E-8 (RIL LO) and E-16 (RIL LO-LO) WILL annunciate</span> — these are expected alarms. OHA E-40 (ROD BANK URGENT FAILURE) will annunciate following rod withdrawal due to Power Cabinet Regulation failure with lift coil disconnect switches in OFF position. <span class="hi-trap">Resetting the group step counter to zero does NOT cause these alarms — it is the P/A converter reset that triggers the RIL alarms.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q13</div>
OHA E-29 (SR &amp; IR TRIP BYP) annunciation cause during 1N35 IR channel removal: caused by placing the <span class="hi-exam">LEVEL TRIP switch in BYPASS</span> per S1.OP-SO.RPS-0001. This is the expected first alarm during IR channel removal and confirms the IR FLUX HI reactor trip and IR HI FLUX ROD WDRWL STOP are blocked for that channel.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q22</div>
OHA E-29 (SR & IR TRIP BYP): annunciates when <span class="hi-exam">the LEVEL TRIP switch has been placed in bypass</span> during IR channel removal from service per S2.OP-SO.RPS-0001. This alarm is expected and verified as part of the procedural steps for removing an IR channel.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q82</div>
OHA E-20 (PZR HTR ON LVL HI): alarms when PZR level is <span class="hi-exam">5% or more above program level</span>, energizing backup PZR heaters. The ARP for E-20 directs crew to <span class="hi-exam">REDUCE charging IAW S2.OP-SO.CVC-0001</span> (normal operations procedure, NOT AB.CVC-0001). <span class="hi-trap">AB.CVC-0001 (Loss of Charging) addresses charging flow being REDUCED, not increased. A failed-high Charging Master Flow Controller causing increasing charging flow is addressed by the normal SOP, not the abnormal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q28</div>
OHA E-48 (ROD BOTTOM): illuminates when all rod banks are on bottom; during a reactor startup it <span class="hi-exam">clears once Control Bank A is withdrawn past 20 steps</span>. Control Banks B, C, and D are bypassed by their Rod Bottom Bypass Bistable Modules below 35 steps. See [[Control Rod Drive]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q38</div>
OHA E-20 (PZR HTR ON LVL HI) energizes backup PZR heaters at 5% above program. With the controlling PZR level channel failed low (0%), <span class="hi-exam">backup heaters should NOT be energized — the 17% low-level cutoff keeps them OFF</span>. See [[Pressurizer Level & Press Control]], [[AB.CVC-0001 — Loss of Charging]].
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[CVCS]], [[Excore NIs]], [[Pressurizer Level & Press Control]]
- Related procedures: [[S2.OP-SO.RPS-0001 — Nuclear Instrumentation Channel Trip / Restoration]], [[S2.OP-SO.CVC-0001 — CVCS Normal Operations]]
- Related exam questions: [[2016 Q13]], [[2019 Q82]], [[2020 Q19]], [[2020 Q22]], [[2022 Q56]], [[2015 Q28]], [[2015 Q38]]
- Related exam: [[2016 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2015 NRC Written Exam]]
