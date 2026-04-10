---
title: "AB.SG-0001 — Steam Generator Tube Leak"
category: abnormals
status: draft
aliases:
  - AB.SG-0001
  - SG tube leak
---

# AB.SG-0001 — Steam Generator Tube Leak

## Purpose
Provides operator actions for responding to a confirmed or suspected steam generator tube leak, including classification of leak severity by action level and required shutdown actions based on leak rate and rate of change.

## Entry Conditions
- Confirmed or suspected primary-to-secondary tube leak on any SG
- Entered based on chemistry sample results, radiation monitor trends, or condenser air ejector monitor alarms

## Key Actions

### Action Levels (Attachment 1 — Continuous Action Summary)
Action levels are based on SG leak rate (gpd) and rate of change (gpd/hr):

| Action Level | Criteria | Required Action |
|---|---|---|
| 1 | Leak rate thresholds met | Be in MODE 3 within 24 hours |
| 2 | Intermediate leak rate criteria | Intermediate shutdown actions |
| 3 (rate of change) | Leak rate >= 75 gpd AND rate of change >= 30 gpd/hr | Reduce power to <= 50% within 1 hour AND be in MODE 3 in following 2 hours |
| 3 (high rate) | Leak rate >= 150 gpd | Be in MODE 3 within 6 hours |
| Emergency | SI criteria met | Trip the reactor and actuate Safety Injection |

<div class="callout callout-exam">
<div class="callout-label">Exam — 2023 Q81</div>
SG tube leak action levels are based on <span class="hi-exam">both leak rate AND rate of change</span>. At Action Level 3 with leak rate <span class="hi-exam">>= 75 gpd</span> and rate of change <span class="hi-exam">>= 30 gpd/hr</span>, the required action is to reduce power to <= 50% in 1 hour and be in MODE 3 in the following 2 hours. <span class="hi-trap">Trap: a leak rate of 125 gpd with a 30 gpd/hr trend meets Action Level 3 (rate of change criterion), NOT the 150 gpd threshold for the 6-hour shutdown.</span>
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2022 #4</div>
23 SG tube leak (25-30 gpm). Entry cue: RMS alarms 2R15, 2R19C (23 SG B/D Rad Monitor), 2R53C (MS Line Rad Monitor) with PZR level lowering. Key actions: transfer to centrifugal charging pump IAW step 3.5 to stabilize PZR level. CRS evaluates <span class="hi-exam">TS 3.4.7.2.c action a — be in Hot Standby within 6 hours</span>. Continuous Action Summary: if leak exceeds makeup capability → trip reactor and actuate SI. In this scenario, the leak worsens to a 650 gpm tube rupture, triggering the CAS trip criteria.
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]]
- Related exam questions: [[2023 Q81]]
- Related scenarios: [[2022 Scenario 4]]
- Related exam: [[2023 NRC Written Exam]], [[2022 NRC Operating Exam]]
