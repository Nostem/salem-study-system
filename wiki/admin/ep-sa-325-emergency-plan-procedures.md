---
title: "EP-SA-325 — Emergency Plan Implementing Procedures"
category: admin
status: draft
aliases:
  - EP-SA-325
  - EP-SA-325-F2
  - EP-SA-325-F6
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

Requirements and forms for State and Local emergency notifications following declaration of an emergency classification.

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

## Connections

- Related systems: [[RPS/SSPS]]
- Related exam questions: [[2023 Q69]], [[2023 Q92]]
- Related JPMs: [[2023 JPM RO-A4]], [[2023 JPM SRO-A4]]
- Related exam: [[2023 NRC Written Exam]], [[2023 NRC Operating Exam]]
