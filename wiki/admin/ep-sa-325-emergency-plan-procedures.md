---
title: "EP-SA-325 — Emergency Plan Implementing Procedures"
category: admin
status: draft
aliases:
  - EP-SA-325
  - EP-SA-325-F2
  - EP-SA-325-F6
  - EP-SA-325-F4
  - EP-SA-325-F8
  - ICMF
  - Initial Contact Message Form
  - Emergency Notification
  - Primary Communicator
  - Secondary Communicator Log
  - ERDS
---

# EP-SA-325 — Emergency Plan Implementing Procedures

## Purpose

Emergency Plan implementing procedures for Salem NGS. Provides forms and instructions for emergency classification, notification of offsite agencies, ERDS activation, and emergency communications.

## Form F2 — Initial Contact Message Form (ICMF)

The standardized form for initial notification to offsite agencies (NRC, state, and local) following an emergency declaration. Must be accurately completed and transmitted within required timeframes.

| Section | Content | Common Errors |
|---------|---------|---------------|
| I | Station identification, unit | — |
| II | Emergency classification, declaration time, event description | Time errors, wrong event description |
| III | Release status (in progress / not in progress) | Misidentifying release path status |
| IV | Meteorological data | — |
| V | Protective action recommendations | — |

The event description must match the Table 1 barrier assessment terminology from EP-SA-325-102. For an SGTR, the correct description is "Loss of the Reactor Coolant System Barrier."

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 SRO-A4</div>
ICMF peer check (time-critical, <span class="hi-exam">15-minute limit</span>): three errors to identify — (1) declaration time incorrect (should be 1100), (2) event description wrong (should be <span class="hi-exam">"Loss of the Reactor Coolant System Barrier"</span> per Table 1 of EP-SA-325-102 for SGTR), and (3) release IS in progress because the <span class="hi-exam">TD AFW pump takes steam from 21 and 23 SGs (23 SG is ruptured)</span> and no actions have been taken to close 23MS45 — with no radiation monitor on this release path, it is an unmonitored release.
</div>

## Form F6 — Emergency Notification

Requirements and forms for State and Local emergency notifications following declaration of an emergency classification. The Primary Communicator Log (EP-SA-111-F6) is the companion form used for tracking notification contacts.

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 RO-A4</div>
Primary Communicator notifications during an ALERT (Unit 2 manual trip + SI for RCS leak). <span class="hi-exam">Time-critical: 15 minutes</span> to complete NJ and DE notifications. Alternate path: Delaware State Police cannot be reached on Primary (NETS 5406), Secondary (302-659-2341), or NAWAS backup — operator must recognize notification is <span class="hi-exam">NOT SUCCESSFULLY COMPLETED</span> and contact Delaware counties (New Castle County NETS 5408, Kent County NETS 5409) directly. Must read <span class="hi-exam">sections I thru V of the ICMF form</span> correctly to each contacted organization.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q69</div>
<span class="hi-exam">The 15-minute notification time to State and Local agencies starts when the Shift Manager classifies or declares the emergency classification for the event</span> — NOT from the initiation of the event, NOT from the completion of the initial contact message form, and NOT from the time the communicator acknowledges the briefing. <span class="hi-trap">The primary communicator usually waits until the ICMF is completed before notifying — but the clock starts at classification, not at ICMF completion.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q92</div>
NRC reportability for spurious RPS actuation: when PZR pressure channel failures cause a reactor trip and SI (but actual RCS pressure was normal), the <span class="hi-exam">SI is NOT valid and NOT reportable</span> (RCS pressure was not actually low). The <span class="hi-exam">RPS actuation IS reportable under RAL 11.3.2 as a 4-hour report</span>. RAL 11.3.1 (4-hour, valid ECCS actuation) does not apply. RAL 11.3.3 (8-hour, ESF system listed in Technical Bases) does not apply because the event is already captured under RAL 11.3.2.
</div>

## Form F8 — Secondary Communicator Log

Provides the Secondary Communicator with a structured log and checklist for emergency communications actions, including ERDS activation and NRC notifications.

**Key Actions:**
- Step 1.2.b: Activate ERDS within 60 minutes of emergency declaration
- Proceed to ERDS computer in Salem Simulator horseshoe area
- Start ERDS_Salem desktop icon, enter PASSWORD, and select Login
- Select the CONNECT button on the correct unit's ERDS Link Control and Status Display Screen
- Confirm YES to connect, verify Status changes to "Transmitting Data"
- Verify "Messages Sent" value increasing from zero

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2023 RO-A4</div>
ERDS activation: must select the correct unit's <span class="hi-exam">CONNECT button on the appropriate Salem 1 or Salem 2 ERDS Link Control and Status Display Screen</span>. Selecting the wrong unit is a critical error. Verify successful activation by observing Status = "Transmitting Data" and "Messages Sent" value increasing above zero.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 RO-A4</div>
ERDS activation during an ALERT (Unit 2 manual trip + SI for RCS leak): same discriminating step as 2023 — must select <span class="hi-exam">Salem 2 CONNECT button</span>. Procedure EP-SA-325-F8 (R0). Steps 1.2.b.1 through 1.2.b.6 are all critical. Work Control NCO designated as Secondary Communicator performs activation within 60 minutes of emergency declaration.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A5</div>
General Emergency classification and ICMF completion (time-critical, <span class="hi-exam">15/15 minutes</span>): Large Break LOCA with ECCS in cold leg recirc, all three fission product barriers lost. <span class="hi-exam">GE — 13 points: RB1.L or RB2.L (5 pts), FB2.L (5 pts), CB2.L or CB3.L (3 pts)</span>. Key indicators: 2R44A/B at <span class="hi-exam">305 R/Hr</span> (fuel damage), 21SJ44 failed to close (unisolable containment sump leak), 2R41D at <span class="hi-exam">5.12E+6 &micro;Ci/sec</span> (release in progress). Uses EP-SA-325-F4 (Attachment 4). Escalated from existing ALERT.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2022 SRO-A5</div>
Emergency classification and ICMF completion (time-critical, <span class="hi-exam">15/15 minutes</span>): loss of all AC power to Unit 2 (3 EDGs + 2 SPTs lost) classifies as <span class="hi-exam">GENERAL EMERGENCY per EAL SG1.1 (Section S — System Malfunction, S1 Loss of AC Power)</span>. ICMF Attachment 4 (EP-SA-325-F4) Sections I-V. PAR determination via Appendix 1: not based on loss of 3 fission product barriers, not hostile action — select <span class="hi-exam">Default PAR (No RPSA): Evacuate 0-5 miles, Monitor & Prepare 5-10 miles</span>.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q86</div>
EAL#CA4.1 (ALERT — Loss of RHR): with RCS intact and RCS temperature &gt; <span class="hi-exam">200 &deg;F for 60 minutes</span>, criteria for declaring an ALERT are met. Key calculation: determine heatup rate from AB.RHR-0001 Attachment 5 (before or after offload curve based on plant status), calculate time to exceed 200 &deg;F, then add 60 minutes. <span class="hi-trap">Must use the correct heatup curve — before offload (5 &deg;F/min for 2 days after shutdown) vs after offload (3.4 &deg;F/min).</span>
</div>

## Connections

- Related procedures: [[EP-SA-111 — Emergency Classification and Protective Action]]
- Related systems: [[RPS/SSPS]], [[EDGs]], [[4KV]], [[RHR]]
- Related abnormals: [[AB.RHR-0001 — Loss of RHR]]
- Related exam questions: [[2019 Q86]], [[2022 Q74]], [[2022 Q75]], [[2023 Q69]], [[2023 Q92]]
- Related JPMs: [[2019 JPM RO-A4]], [[2019 JPM SRO-A5]], [[2023 JPM RO-A4]], [[2023 JPM SRO-A4]], [[2022 JPM SRO-A5]], [[2020 JPM RO-A4]], [[2020 JPM SRO-A5]]
- Related exam: [[2019 NRC Written Exam]], [[2019 NRC Operating Exam]], [[2020 NRC Operating Exam]], [[2022 NRC Written Exam]], [[2022 NRC Operating Exam]], [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
