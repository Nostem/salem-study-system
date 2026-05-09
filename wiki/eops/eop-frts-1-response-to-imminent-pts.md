---
title: "EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock"
category: eops
status: draft
aliases:
  - EOP-FRTS-1
  - 2-EOP-FRTS-1
  - FRTS-1
---

# EOP-FRTS-1 — Response to Imminent Pressurized Thermal Shock

## Purpose

Entered when the Thermal Shock Critical Safety Function Status Tree indicates an imminent Pressurized Thermal Shock (PTS) condition. Directs mitigating actions to reduce the likelihood of brittle fracture of the reactor vessel.

## Entry Conditions

RED path on the Thermal Shock CFST: RCS T-Cold cooldown rate exceeds 100 degrees F in the last 60 minutes AND RCS pressure/temperature points are not to the right of Limit A in Figure 4A.

PURPLE path on the Thermal Shock CFST: RCS Cooldown > 100 degrees F/hr AND RCS T-Colds > 230 degrees F but < 280 degrees F.

## Key Mitigating Actions

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q32</div>
FRTS-1 bases: <span class="hi-exam">ECCS flow may have contributed to the RCS cooldown or may prevent a subsequent reduction in RCS pressure</span> — therefore SI termination is directed. <span class="hi-exam">An RCP restart is attempted to mix the cold incoming ECCS water and the warm reactor coolant water</span>, thereby decreasing the likelihood of a PTS condition. <span class="hi-trap">SI termination is NOT because a soak requires it — some SBLOCA conditions prevent SI termination. RCP restart is NOT for normal spray use or boron equalization — it is specifically for thermal mixing.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q85</div>
RED Path in Thermal Shock Status Tree: all RCS T-Cold cooldown rates not less than 100 degrees F in the last 60 minutes AND RCS pressure/temperature points not to the right of Limit A in Figure 4A (e.g., T-Colds < 230 degrees F at 1100 psig). This RED path takes priority over YELLOW path (Heat Sink) and PURPLE path (Shutdown Margin).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q85</div>
FRTS-1 step 1 (RCS Pressure Status): if <span class="hi-exam">RCS pressure &lt; 300 psig AND RHR flow &ge; 300 gpm</span>, then <span class="hi-exam">return to procedure in effect</span> — no further FRTS-1 actions are implemented. Entry is still required on PURPLE path (cooldown &gt; 100&deg;F/hr, T-Colds 230-280&deg;F), but the low-pressure/adequate-RHR-flow condition means PTS is not a concern. <span class="hi-trap">Trap: entry into FRTS-1 IS required even with low RCS pressure — the CFST drives entry regardless. The one-hour soak is not performed when step 1 directs return. AB.LOCA-0001 (Shutdown LOCA) is only applicable in MODE 4 or MODE 3 with accumulators isolated — not for MODE 3 at normal operating pressure.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q83</div>
PURPLE path entry from MSLB at low power (15% pre-sync) with multiple SGs faulted (Tcolds 270&deg;F lowering) and intact SG Tcolds 330&deg;F: <span class="hi-exam">FRTS-1 is the correct procedure</span>, with key actions <span class="hi-exam">Step 3.5 — maintain AFW flow &gt;22E4 lbm/hr until at least ONE intact SG NR level is &gt;15%</span> and <span class="hi-exam">Step 12 — ECCS pump reduction (stop all ECCS pumps except 21 or 22 charging pump)</span>. <span class="hi-trap">Trap B: depressurizing RCS to within the 100&deg;F/hr cooldown curve with one PORV is an FRTS-2 (Yellow priority) action, NOT FRTS-1. Trap C/D: with SR NIs not energized and IR SUR not more negative than -0.2 dpm a YELLOW path exists for FRSM-2, but FRTS PURPLE is the higher priority. The "establish AFW flow &gt;44E4 lbm/hr, borate until IR SUR negative" action is FRSM-1, not FRSM-2.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q24</div>
After a steam line break inside containment with FRTS-1 entered: <span class="hi-exam">SI termination is directed because Safety Injection flow is a significant contributor to any cold leg temperature decrease or overpressure condition</span>. <span class="hi-exam">RCPs are started to provide mixing of cold SI and warm reactor coolant water</span>, decreasing the likelihood of a PTS condition. <span class="hi-trap">Traps: (1) The "soak" is not the basis for SI termination. (2) RCPs are NOT started to enable PZR spray for primary depressurization, NOR to minimize temperature gradient across S/G tube sheets — they are started for thermal mixing.</span>
</div>

### RCS Soak (Step 29)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q74</div>
FRTS-1 Step 29 RCS soak requirements: during the soak, the crew must maintain <span class="hi-exam">RCS temperature stable AND NOT raise RCS pressure</span>. The RCS soak is designed to reduce temperature stresses present in the <span class="hi-exam">Reactor Vessel</span> (not the RCS piping or pressurizer). <span class="hi-trap">Trap: the soak controls BOTH temperature and pressure — not temperature only. Also, the target component is the reactor vessel specifically, not the RCS piping system in general.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2018 #2</div>
RED path for Thermal Shock entered during EOP-LOCA-1 (LBLOCA). Entry/exit criteria: <span class="hi-exam">RCS pressure NOT > 300 psig (420 psig adverse) AND RHR flow at least 300 gpm</span> on 21 or 22 SJ49 cold leg injection meters. Crew returns to EOP-LOCA-1 immediately (enter/exit — no prolonged actions in FRTS-1).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q99</div>
FRCC-2 → FRTS-1 transition during accumulator depressurization: <span class="hi-exam">crew does NOT immediately transition to FRTS-1 when a RED Thermal Shock CFST is recognized during FRCC-2 step 15 (Continuous Action)</span>. Stopping the depressurization to enter FRTS would cause the cooldown to stop and a thermal soak to be performed; the core would continue to boil away injected accumulator water and could lead to a RED path for CC. The continuous action of FRCC-2 step 15 takes precedence over the higher-priority Thermal Shock CFST in this specific procedural moment.
</div>

## Connections

- Related systems: [[ECCS]], [[RCS]], [[RCPs]], [[RHR]]
- Related procedures: [[AB.LOCA-0001 — Shutdown LOCA]]
- Related EOPs: [[EOP-FRCC-2 — Response to Degraded Core Cooling]]
- Related exam questions: [[2016 Q24]], [[2016 Q83]], [[2016 Q99]], [[2019 Q74]], [[2020 Q32]], [[2020 Q85]], [[2022 Q85]]
- Related scenarios: [[2018 Scenario 2]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]]
