---
title: "AB.CR-0001 — Control Room Evacuation"
category: abnormals
status: draft
aliases:
  - AB.CR-0001
  - control room evacuation
---

# AB.CR-0001 — Control Room Evacuation

## Purpose
Provides operator actions for evacuating the main control room and establishing plant control from the Hot Shutdown Panel when the control room becomes uninhabitable (e.g., toxic gas, fire, security event).

## Entry Conditions
- Control room determined to be uninhabitable
- Toxic gas, smoke, or other hazard requiring evacuation of both Salem Unit control rooms

## Key Actions

### Immediate Actions
- Trip the reactor (if not already tripped)
- Evacuate control room personnel to designated assembly area

### Important Notes/Cautions
- **EOPs are NOT applicable during Control Room Evacuation** — EOPs should be used for information only or as directed by the TSC
- RCS cooldown limit under this procedure is 25 degrees F per hour (Attachment 3 step 24.0), NOT the normal TS limit of 100 degrees F per hour

### Attachment 3 — Hot Shutdown Panel Actions
- CRS monitors SG pressures at the Hot Shutdown Panel
- **Caution:** Monitor SG pressures to avoid steam line differential pressure SI (DP exceeding 100 psi)

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q83</div>
Per S2.OP-AB.CR-0001, <span class="hi-exam">EOPs are NOT applicable</span> during Control Room Evacuation (information only or as directed by TSC). The Caution in Attachment 3 warns the CRS to monitor SG pressures to avoid <span class="hi-exam">Safety Injection on steam line differential pressure</span> (DP > 100 psi). <span class="hi-trap">Trap: the RCS cooldown limit during CR evacuation is 25 degrees F/hr, NOT the TS limit of 100 degrees F/hr.</span>
</div>

### Seal Injection Control During CR Evacuation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q86</div>
Per AB.CR-0001, local control of RCP seal injection during CR evacuation: <span class="hi-exam">isolate CV-71 (by closing CV-70), open CV-73 (seal injection pressure control bypass valve), and manually adjust the bypass valve</span>. Total charging flow is then controlled locally at <span class="hi-exam">CV-55 (Charging Flow Control Valve) local controller in Panel 216</span> using a centrifugal charging pump. <span class="hi-trap">23 Charging Pump (PD pump) is tripped by the procedure once a centrifugal pump is verified running.</span> <span class="hi-trap">Trap: fire protection procedures direct controlling CV-71 with a hand sender — AB.CR-0001 does NOT (it isolates CV-71 and uses the CV-73 bypass instead).</span>
</div>

### Attachment 5 — Local Trip of Reactor and Boration Isolation

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-j</div>
Unit 1 Control Room Evacuation, Attachment 5 (locally open reactor trip breakers): proceed to <span class="hi-exam">Rod Drive MG Set Control Panel (460V Vital Bus Room - El 84 ft.)</span> and open all four breakers — <span class="hi-exam">Reactor Trip Breaker A, Reactor Trip Breaker B, Reactor Trip Bypass Breaker A, Reactor Trip Bypass Breaker B</span>. Confirm with Hot Shutdown Panel Operator that 11 or 12 Charging Pump is operating. Then open <span class="hi-exam">1AX1AX7X (#13 Charging Pump breaker)</span> and <span class="hi-exam">1CY2AX4I (1CV175 Rapid Borate Stop Valve breaker)</span> at 1C West Valve & Misc 230V Control Center - El 84 ft.
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RPS/SSPS]], [[CVCS]]
- Related exam questions: [[2020 Q86]], [[2023 Q83]]
- Related JPMs: [[2022 JPM IP-j]]
- Related exam: [[2020 NRC Written Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
