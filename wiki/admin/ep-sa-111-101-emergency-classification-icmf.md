---
title: "EP-SA-111-101 — Emergency Classification and ICMF"
category: admin
status: draft
aliases:
  - EP-SA-111-101
  - EP-SA-111-121
  - EP-SA-111-F3
  - emergency classification
  - EAL
  - emergency action level
---

# EP-SA-111-101 — Emergency Classification and ICMF

> DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for classifying emergency events at Salem NGS using Emergency Action Levels (EALs) and the fission product barrier assessment approach. Also covers completing the Initial Contact Message Form (ICMF) for notification of offsite agencies.

## Key Actions / Information

### Fission Product Barrier Assessment

Emergency classifications can be determined using the fission product barrier assessment (Section F of the ECG). Barriers are assessed as Lost or Potentially Lost with assigned point values:

| Barrier | Points (Lost/Pot. Lost) | Source |
|---------|------------------------|--------|
| Fuel Clad | Varies by EAL | EP-SA-111-101 |
| RCS | Varies by EAL | EP-SA-111-101 |
| Containment | Varies by EAL | EP-SA-111-101 |

Classification thresholds are based on total fission product barrier points.

### ICMF Attachments

| Attachment | Classification Level | Form |
|------------|---------------------|------|
| Attachment 1 | Unusual Event (UE) | EP-SA-111-F1 |
| Attachment 2 | Alert | EP-SA-111-F2 |
| Attachment 3 | Site Area Emergency (SAE) | EP-SA-111-F3 |
| Attachment 4 | General Emergency (GE) | EP-SA-111-F4 |

### ICMF Sections

| Section | Content |
|---------|---------|
| Section I | Plant identification and classification level |
| Section II | Declaration time and event description |
| Section III | Release status (in progress / not in progress) |
| Section IV | Protective action recommendations |

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2018 SRO-A5</div>
RCS leak inside containment with manual trip and auto SI — classified as <span class="hi-exam">Site Area Emergency (SAE)</span>. Fission Product Barrier assessment: <span class="hi-exam">RB2.L (5 pts)</span> — subcooling <= 0 F as a result of RCS leakage (RCS barrier loss). <span class="hi-exam">CB8.P (2 pts)</span> — containment pressure > 15 psig AND one CS train in service AND < 3 CFCUs running in low speed (containment barrier potential loss). Total = <span class="hi-exam">7 points = SAE</span>. 2R41D NOT indicating elevated readings — no release in progress. <span class="hi-trap">Trap: 21 CS pump failed to start and 21 CFCU is C/T, 22 and 23 CFCUs failed to start — only 24 CFCU and 22 CS pump are available. Must recognize degraded containment cooling as CB8.P (potential loss), not CB barrier LOST (which would be GE). This is a time-critical JPM (15 minutes).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 SRO-A5</div>
SGTR with stuck-open MSIV on 23 SG — classified as <span class="hi-exam">Site Area Emergency (SAE)</span>. Fission Product Barrier assessment: <span class="hi-exam">RB3.L (5 pts)</span> for SGTR (RCS barrier loss) and <span class="hi-exam">CB3.L or CB4.L (3 pts)</span> for stuck-open MSIV on affected SG (containment barrier loss — uncontrolled release path from RCS through ruptured SG tube through open MSIV to atmosphere). Total = 8 points = SAE threshold. A release IS in progress. <span class="hi-trap">The loud roaring noise with rapidly lowering 23 SG pressure (850 psig and dropping) and rising steam flow (12%) confirms the stuck-open MSIV is passing steam to atmosphere. This is a time-critical JPM (15 minutes).</span>
</div>

## Connections

- Related procedures: [[EP-SA-325 — Emergency Plan Implementing Procedures]], [[EP-SA-111 — Emergency Classification and Protective Action]]
- Related JPMs: [[2018 JPM SRO-A5]], [[2019 JPM SRO-A5]]
- Related exam: [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]]
