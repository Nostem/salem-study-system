---
title: "OP-AA-101-111-1003 — Use of Procedures"
category: admin
status: draft
aliases:
  - OP-AA-101-111-1003
  - use of procedures
---

# OP-AA-101-111-1003 — Use of Procedures

## Purpose

Administrative procedure governing the proper use of Emergency Operating Procedures (EOPs), including rules of usage for CFST monitoring, functional restoration procedure transitions, and continuous action steps.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q100</div>
EOP-TRIP-1 contains <span class="hi-exam">specific transitions to EOP-FRHS-1 (Step 20) and EOP-FRSM-1 BEFORE CFST monitoring begins at Step 30</span>. These are procedure-directed transitions that occur within the body of EOP-TRIP-1 — they are NOT CFST-based functional restoration transitions. <span class="hi-trap">Trap: CFST monitoring does not begin until Step 30 of EOP-TRIP-1, but EOP-FRHS-1 and EOP-FRSM-1 have explicit step transitions earlier in TRIP-1. Do not confuse procedure-directed transitions (before Step 30) with CFST-based FRP transitions (after Step 30).</span>
</div>

### Continuous Action Verbs (Step 4.2.9)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q74</div>
Salem EOPs' Continuous Action Steps are either surrounded by a shaded box or contain one of three <span class="hi-exam">continuous action verbs: CONTROL, MAINTAIN, and MONITOR</span>. <span class="hi-trap">Trap: ADJUST, MODIFY, and VERIFY are NOT continuous action verbs — they are common distractors.</span>
</div>

### EOP Usage Rules (Section 4.2.5)

| Rule | Description | Source |
|------|-------------|--------|
| Continuous required actions | Apply as soon as the immediate actions are verified | OP-AA-101-111-1003 |
| CFST monitoring | Directed by EOP-TRIP-1 Step 30; functional restoration transitions apply only after this step | OP-AA-101-111-1003 |
| FRHS-1 and FRSM-1 early transitions | EOP-TRIP-1 Steps 20 and earlier specifically direct these transitions before CFST monitoring begins | EOP-TRIP-1 |
| Continuous action steps during FRPs | Should NOT be performed when a Red or Purple path FRP is in progress (per step 2.16.2) | OP-AA-101-111-1003 |

### CFST Monitoring Frequency

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q47</div>
With verified <span class="hi-exam">Red and Purple CFSTs</span>, OP-AA-101-111-1003 states that the CFSTs should be monitored <span class="hi-exam">continuously</span>. If no condition more serious than YELLOW is encountered, CFSTs may be monitored every <span class="hi-exam">10-20 minutes</span>. <span class="hi-trap">Trap: 10-20 minutes is for Yellow-only conditions — any Red or Purple CFST requires continuous monitoring.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q74</div>
Step 4.2.11 (page 22) requires <span class="hi-exam">CONTINUOUS monitoring of the CFSTs whenever any RED or PURPLE path is indicated</span>. With a Heat Sink RED path (all other CSFs green) following transition from EOP-TRIP-1 to EOP-FRHS-1, monitoring must be continuous and <span class="hi-trap">may NOT be done every 30 minutes, every 10-20 minutes (Yellow-only), or suspended with CRS concurrence.</span>
</div>

### CSF and FRP Implementation Priority

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q46</div>
CSF Hierarchy per OP-AA-101-111-1003 (high to low): <span class="hi-exam">SHUTDOWN MARGIN, CORE COOLING, HEAT SINK, THERMAL SHOCK, CONTAINMENT ENVIRONMENT, COOLANT INVENTORY</span>. CFST Color Hierarchy (high to low): <span class="hi-exam">Red, Purple, Yellow, Green</span>. When multiple CSFs have challenges, <span class="hi-exam">color takes precedence over hierarchy position</span>. A Red path for a lower-priority CSF overrides a Purple path for a higher-priority CSF. Example: Heat Sink Red + Shutdown Margin Purple → address Heat Sink first.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q85</div>
Yellow path FRP implementation: <span class="hi-exam">FRCE-3 (Response to High Containment Radiation) is a yellow path procedure and is NOT required to be performed</span>. The CRS may elect to GO TO a yellow path FRP but is not mandated to do so. <span class="hi-trap">Red and Purple path FRPs are mandatory transitions. Yellow path FRPs are discretionary.</span>
</div>

### AOP Re-entry After EOP Performance (Step 4.4.1)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q74</div>
Step 4.4.1: if a reactor trip occurs while performing an AOP (intentionally or as directed by the AOP), the <span class="hi-exam">AOP should be exited and the EOP entered</span>. There are cases where steps must be completed as directed in the AOP (e.g., trip affected RCPs) prior to entering the EOPs. When the EOPs are exited or additional personnel become available, the entry conditions for the AOP <span class="hi-exam">should be re-evaluated to determine if performance of the AOP is still required</span>. If performance is required, the <span class="hi-exam">AOP should be re-entered from the beginning</span>. <span class="hi-trap">Trap: AOPs are NOT re-entered automatically (entry conditions must be re-evaluated first), are NOT re-entered from the point left, and are NOT re-entered "regardless if entry conditions are still met."</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 Sim-b</div>
APPX-7 is referenced as one of three procedure revisions checked for the JPM (LOCA-1 Rev. 30, LOCA-3 Rev. 30, APPX-7 Rev. 0, OP-AA-101-111-1003 Rev. 6). The Continuous Action Summary (CAS) at the top of LOCA-3 directs immediate transition to APPX-7 when sump-blockage cavitation is identified — a CAS continuous-action transition rather than a step-by-step linear branch.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q74</div>
Use of Procedures permits entering EOP-TRIP-1 or EOP-LOPA-1 on a total loss of all AC power. <span class="hi-exam">Entering LOPA-1 directly is valid — its immediate actions trip the Rx then trip the Turbine (no Rx-trip confirmation, since there is no power)</span>. If TRIP-1 is entered instead, it kicks out to LOPA-1 before the SI evaluation step. See [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOPA-1 — Loss of All AC Power]].
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #2</div>
Listed among the technical references governing crew conduct throughout the scenario (proper use of Alarm Response Procedures, abnormal procedures, and EOPs during the PZR pressure channel failure, MPT fire reactor trip, Inadvertent SI termination, and SGTR response).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q77</div>
OP-AA-101-111-1003 is cited for the criterion that <span class="hi-exam">on Unit 2 a control rod is considered fully inserted if it indicates ≤10 steps withdrawn</span>, per the evaluation results published in Nuclear Fuels Engineering Letter NFE 96-098, April 13 1989. This criterion governs whether a dropped rod is handled in AB.ROD-0002 (fully inserted) or transitioned to AB.ROD-0001 (not fully inserted).
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2014 #3</div>
Listed among the scenario's technical references — the crew works the SBLOCA/LOOP event using approved station procedures (alarm response, abnormals, and EOPs) <span class="hi-exam">in accordance with OP-AA-101-111-1003, Use of Procedures</span>. See [[2014 Scenario 3]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q68</div>
A <span class="hi-exam">dollar sign ($) under the initials line of a surveillance step marks a Technical Specification acceptance-criteria item</span>; if not satisfactorily completed it may carry reportability requirements and must be brought to the <span class="hi-exam">immediate attention of the SM/CRS</span>. The acceptance-criteria designators are defined in the [[AD-AA-101-1003 — Implementing Procedure Writers Guide|Implementing Procedure Writers Guide]] (Step 4.5.4): <span class="hi-trap">$ = Technical Specification; cent symbol (¢) = UFSAR.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2012 #1</div>
Listed as a Technical Reference for the scenario — it governs the crew's <span class="hi-exam">use of procedures</span> while executing the EOP, AB, SO, and ST procedures throughout the events.
</div>

## Connections

- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-FRSM-1 — Response to Nuclear Power Generation]], [[EOP-CFST-1 — Critical Safety Function Status Trees]], [[EOP-APPX-7 — Containment Sump Blockage]], [[EOP-LOCA-3 — Transfer to Cold Leg Recirculation]]
- Related procedures: [[OP-SA-108-101-2000 — Emergency/Abnormal Operating Procedure Program]], [[AB.ROD-0002 — Dropped Rod]], [[AB.ROD-0001 — Immovable/Misaligned Control Rods]], [[AD-AA-101-1003 — Implementing Procedure Writers Guide]]
- Related exam questions: [[2016 Q74]], [[2018 Q47]], [[2018 Q85]], [[2019 Q46]], [[2020 Q74]], [[2020 Q100]], [[2015 Q74]], [[2014 Q74]], [[2014 Q77]], [[2012 Q68]]
- Related JPMs: [[2016 JPM Sim-b]]
- Related scenarios: [[2012 Scenario 1]], [[2015 Scenario 2]], [[2015 Scenario 3]], [[2015 Scenario 4]], [[2014 Scenario 1]], [[2014 Scenario 2 — Steam Dump Failure / Failure of Auto SI / Loss of All AFW]], [[2014 Scenario 3]], [[2014 Scenario 4 — Steam Generator Tube Rupture without Pressurizer Pressure Control]], [[2012 Scenario 3]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]], [[2012 NRC Operating Exam]]
