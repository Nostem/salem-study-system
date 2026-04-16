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
- **Security event** — AB.CR-0001 is specifically for security-event-driven evacuations

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q48</div>
S2.OP-AB.CR-0001 (Control Room Evacuation) is implemented when the Control Room is evacuated as the result of a <span class="hi-exam">security event</span>. <span class="hi-trap">Trap: a separate Abnormal Procedure deals with control room evacuation due to fire — do not confuse the two.</span> As an immediate action per AB.CR-0001, the crew <span class="hi-exam">WILL initiate a Main Steam Isolation</span> prior to evacuating (if conditions permit). <span class="hi-trap">This differs from EOP-TRIP-1, which only requires MSLI if the turbine cannot be tripped. AB.CR-0001 directs MSLI as an immediate action regardless of turbine trip success.</span>
</div>

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

### Immediate Actions — AFW Flow Reduction

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q71</div>
Per S2.OP-AB.CR-0001 Immediate Actions, if Control Room conditions permit, the crew will <span class="hi-exam">LOWER 23 AFW Pump speed until total flow drops to 22E04 LB/HR</span>. <span class="hi-trap">Trap: the crew lowers 23 AFW (turbine-driven) pump speed — they do NOT throttle 21/22 AFW (motor-driven) pump SG inlet valves.</span>
</div>

### Attachment 6 — Plant Operator RCS Pressure Control

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q71</div>
Per Attachment 6 (Plant Operator), after the Control Room has been evacuated, RCS pressure will be maintained by <span class="hi-exam">cycling PZR Heaters ONLY</span>. <span class="hi-trap">Trap: PZR Spray Valves are NOT used for RCS pressure control after CR evacuation — heaters only.</span>
</div>

### Attachment 5 — Local Control of Charging Flow

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 IP-i</div>
Unit 2 Control Room Evacuation, Attachment 5 Step 8.0: locally control charging flow at <span class="hi-exam">Panel 216-1 (Chg Pmps FL & PR Inst Pnl)</span> in the Unit 2 RCA. Place <span class="hi-exam">local E/P Bypass Line Selector Valve in MAN</span>, read charging flow on <span class="hi-exam">2FI-128A</span>, then use the <span class="hi-exam">MANUAL hand air operator</span> to adjust flow to 70 gpm. <span class="hi-trap">2CV55 (Cent Chg Pmp Flow Cont Valve) is air-to-close (fails open) — rotating the hand air operator CLOCKWISE raises air pressure and LOWERS flow. Rotating counter-clockwise raises flow.</span>
</div>

### Attachment 5 — Local Trip of Reactor and Boration Isolation

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 IP-j</div>
Unit 1 Control Room Evacuation, Attachment 5 (locally open reactor trip breakers): proceed to <span class="hi-exam">Rod Drive MG Set Control Panel (460V Vital Bus Room - El 84 ft.)</span> and open all four breakers — <span class="hi-exam">Reactor Trip Breaker A, Reactor Trip Breaker B, Reactor Trip Bypass Breaker A, Reactor Trip Bypass Breaker B</span>. Confirm with Hot Shutdown Panel Operator that 11 or 12 Charging Pump is operating. Then open <span class="hi-exam">1AX1AX7X (#13 Charging Pump breaker)</span> and <span class="hi-exam">1CY2AX4I (1CV175 Rapid Borate Stop Valve breaker)</span> at 1C West Valve & Misc 230V Control Center - El 84 ft.
</div>

### Defeating Safety Injection After CR Evacuation

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q99</div>
Per AB.CR-0001, after CR evacuation with no damage to the plant: the SM directs SI to be defeated by <span class="hi-exam">opening vital instrument bus breakers to de-energize SSPS and the SEC cabinets per Attachment 7 (#1 NEO)</span>. This is a local action performed by the #1 NEO, not from the control room. <span class="hi-trap">Trap: inserting a P-11 jumper or placing SEC Block switches in Block are control room actions — these would not be performed after evacuation. The SEC Block switches and P-11 jumper are Attachment 5 (Reactor Operator) actions, but de-energizing SSPS and SECs via vital instrument bus breakers is Attachment 7 (#1 NEO) and is the method for defeating SI after evacuation.</span>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]], [[RPS/SSPS]], [[CVCS]], [[Main Steam]], [[SECs]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]]
- Related exam questions: [[2019 Q48]], [[2019 Q71]], [[2019 Q83]], [[2019 Q99]], [[2020 Q86]], [[2023 Q83]]
- Related JPMs: [[2020 JPM IP-i]], [[2022 JPM IP-j]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2020 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
