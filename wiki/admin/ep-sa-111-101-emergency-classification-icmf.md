---
title: "EP-SA-111-101 — Emergency Classification and ICMF"
category: admin
status: draft
aliases:
  - EP-SA-111-101
  - EP-SA-111-121
  - EP-SA-111-F3
  - EP-SA-111-104
  - EP-SA-111-107
  - EP-SA-111-115
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

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A4-1 (ESG-1)</div>
ESG-1 scenario events drive a single-barrier (RCS) <strong>Potential Loss</strong> classification: <span class="hi-exam">EAL RB3.P → ALERT</span>. Description of Event = "<span class="hi-exam">Potential Loss of the Reactor Coolant System Boundary</span>" (per EAL Description Table). ICMF Section III: checks <span class="hi-exam">IS NOT</span> for radiological release in progress (no release for ESG-1). Section IV: wind speed 10 mph / direction 160° from SPDS. Two 15-minute time-critical clocks: declaration window AND notification window (Primary Communicator ICMF delivery).
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A4-1 (ESG-2)</div>
ESG-2 scenario events drive the same RCS-barrier EAL series, but the <strong>full Loss</strong> threshold is met: <span class="hi-exam">EAL RB3.L → ALERT</span> (still single-barrier so still ALERT, not SAE). Description of Event = "<span class="hi-exam">Loss of the Reactor Coolant System Boundary</span>". ICMF Section III: checks <span class="hi-exam">IS</span> for radiological release in progress (the lost RCS boundary path passes coolant to environment). Same wind data and same dual 15-minute clocks as ESG-1 variant. <span class="hi-trap">Trap: the .L vs .P suffix distinction does not by itself escalate the classification — both are ALERT. The classification escalates only when MULTIPLE barriers degrade.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q99</div>
Loss-of-annunciators (S5) EAL classification: with a significant transient (Rx trip) during a ≥15-minute loss of all annunciators, the classification is an <span class="hi-exam">Alert, declared once the ≥15-minute loss is confirmed</span>. See [[Annunciators]], [[AB.ANN-0001 — Loss of Overhead Annunciator System]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 SRO-A4-1 (ESG-1)</div>
ESG-1 expected classification is an <span class="hi-exam">ALERT under EAL RB2.L</span> (full Loss of the RCS Boundary — single barrier, so ALERT). Description of Event = "<span class="hi-exam">Loss of the Reactor Coolant System Boundary</span>" (per EAL Description Table), uses ECG Attachment 2 (EP-SA-111-F2 Rev. 2). ICMF Section III: <span class="hi-exam">IS NOT</span> for radiological release in progress (for the Alert). <span class="hi-trap">Trap: if the cavitating charging pump is NOT recognized and it fails, a second barrier degrades and the event escalates to a <span class="hi-exam">Site Area Emergency under RB2.L AND CB5.L</span> (Attachment 3, EP-SA-111-F3 Rev. 3) — Section III then checks IS for a release.</span> Two regulatory time-critical clocks: <span class="hi-exam">15 minutes to classify/declare AND 15 minutes from declaration to deliver the ICMF</span> to the Primary Communicator. (Time-critical Admin JPM — Classroom.)
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 SRO-A4-2 (ESG-2)</div>
ESG-2 classifies as an <span class="hi-exam">ALERT under EAL RB3.L</span> (single RCS-barrier full Loss = ALERT), ECG Attachment 2 (EP-SA-111-F2 Rev. 2). Description of Event = "<span class="hi-exam">Loss of the Reactor Coolant System Boundary</span>". Unlike ESG-1, ICMF Section III checks <span class="hi-exam">IS</span> for a Radiological Release in progress (lost RCS boundary passes coolant to the environment). <span class="hi-trap">The .L vs .P suffix does NOT by itself escalate the classification — a single barrier loss (Potential or full) remains an Alert; escalation requires MULTIPLE barriers degrading.</span> Same dual 15-minute declaration/notification clocks. (Time-critical Admin JPM — Classroom.)
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 SRO-A4-3 (ESG-3)</div>
ESG-3 classifies as a <span class="hi-exam">Site Area Emergency under EALs FB2.P AND RB2.P</span> — <span class="hi-exam">Potential Loss of the Fuel Clad Barrier AND Potential Loss of the RCS Barrier</span> (two barriers in Potential Loss = SAE), using ECG Attachment 3 (EP-SA-111-F3 Rev. 3). ICMF Section III: <span class="hi-exam">NO</span> radiological release in progress. <span class="hi-trap">Trap: a single-barrier Potential Loss is only an Alert — it is the simultaneous potential loss of BOTH the fuel-clad and RCS barriers that drives the SAE.</span> Same dual 15-minute declaration/notification clocks. (Time-critical Admin JPM — Classroom.)
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q79</div>
Comparing EAL severity across condition sets (the most severe wins). Salem ECG examples tested:
<ul>
<li><span class="hi-exam">SS3.1 — Site Area Emergency:</span> ATWS in which ALL attempts to trip the Rx from the control room FAIL (the highest of the four in this question).</li>
<li><span class="hi-exam">SA3.1 — Alert:</span> ATWS in which the Rx CAN be tripped from the control room.</li>
<li><span class="hi-exam">RA2.2 — Alert:</span> lowering SFP level that will result in irradiated fuel becoming uncovered (escalates only via a different RAL, e.g., rising radiation).</li>
<li><span class="hi-exam">HA1.1 — Alert:</span> earthquake activating the Hope Creek Seismic Switch and felt in the Control Room.</li>
<li><span class="hi-exam">HA1.2 — Alert:</span> turbine becoming a missile causing visible damage to containment (this happened at Salem — an ALERT was declared even though it was only a UE at the time).</li>
</ul>
Reference sheets: EP-SA-111-115 (p 1), EP-SA-111-104 (p 2), EP-SA-111-107 (p 1,3).
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q100</div>
<span class="hi-exam">Short Duration Events corrected before declaration still require declaration THEN termination</span> — the actual declaration should be no less restrictive. Per EP-SA-111-101 (p 13): "the condition may be corrected before a declaration has been made. The key consideration ... is to determine whether or not further plant damage occurred while the corrective actions were being taken ... Classify the event as indicated and terminate the emergency once assessment shows that there were no consequences from the event and other termination criteria are met." For a declared Unusual Event corrected before the 15-minute notifications are made, the Emergency Coordinator <span class="hi-exam">directs the Primary Communicator to make all required 15-minute notifications, then terminates the UE IAW the proper attachments</span>. <span class="hi-trap">Trap: do NOT terminate/skip the 15-minute notifications, and the UE is terminated (not retracted).</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2014 SRO-A4</div>
General Emergency PAR / ICMF completion (time-critical, <span class="hi-exam">15 minutes</span>) for a 13-point GE (loss of all three fission product barriers, EALs FB3.L, RB2.L, CB.1.L). With wind FROM <span class="hi-exam">050° (NE)</span>, the Predetermined PAR Flowchart (EP-SA-111-F4 Att 4) requires: Evacuate ALL sectors 0-5 miles; Evacuate the downwind +/- 1 sector group <span class="hi-exam">SSW, SW, WSW</span> 5-10 miles; Shelter all remaining sectors. 2R41D reads 2.5E3 µCi/sec, below the Federal Limit of <span class="hi-exam">2.42E+05 µCi/sec</span> Noble Gas, so the ICMF is marked "NO RADIOLOGICAL RELEASE IS IN PROGRESS" and Box IIb (PAR Upgrade) is NOT checked.
</div>

## Connections

- Related systems: [[RCS]]
- Related procedures: [[EP-SA-325 — Emergency Plan Implementing Procedures]], [[EP-SA-111 — Emergency Classification and Protective Action]], [[NC.EP-EP.ZZ-0102 — Emergency Coordinator Response]], [[EP-SA-111-121 — Salem ECG Fission Product Barrier Table]]
- Related exam questions: [[2015 Q99]], [[2014 Q79]], [[2014 Q100]]
- Related JPMs: [[2016 JPM SRO-A4-1 (ESG-1)]], [[2016 JPM SRO-A4-1 (ESG-2)]], [[2018 JPM SRO-A5]], [[2019 JPM SRO-A5]], [[2015 JPM SRO-A4-1 (ESG-1)]], [[2015 JPM SRO-A4-2 (ESG-2)]], [[2015 JPM SRO-A4-3 (ESG-3)]], [[2014 JPM SRO-A4]]
- Related exam: [[2016 NRC Operating Exam]], [[2018 NRC Operating Exam]], [[2019 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]], [[2014 NRC Operating Exam]]
