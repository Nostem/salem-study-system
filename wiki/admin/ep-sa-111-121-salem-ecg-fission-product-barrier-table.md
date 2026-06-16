---
title: "EP-SA-111-121 — Salem ECG Fission Product Barrier Table"
category: admin
status: draft
aliases:
  - EP-SA-111-121
  - Salem ECG Fission Product Barrier Table
  - ECG Fission Product Barrier Table
---

# EP-SA-111-121 — Salem ECG Fission Product Barrier Table

> DRAFT — Reconstructed from exam materials

## Purpose

Salem Emergency Classification Guide (ECG) Fission Product Barrier Table. Provides point values for loss/potential loss of the three fission product barriers (Fuel Clad, Reactor Coolant System, Containment) used to determine the Emergency Classification Level (Notification of Unusual Event, Alert, Site Area Emergency, General Emergency).

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q81</div>
ECG point totals from barrier loss/potential loss:<br>
&bull; <span class="hi-exam">Loss of RCS Barrier (RCS pressure lowering to 350 psig results in subcooling being lost) = 5 points</span><br>
&bull; <span class="hi-exam">Loss of Containment Barrier (containment pressure rise followed by rapid, unexplained pressure drop — 13 psig to 1.5 psig during a LOCA over 6 minutes) = 3 points</span><br>
&bull; Combined (5 + 3) = <span class="hi-exam">8 points → Site Area Emergency</span><br>
<span class="hi-trap">Trap: 4 point Alert if the loss of subcooling was not recognized and the loss of containment not recognized. 5 point Alert if only the loss of the RCS barrier is recognized. 7 point SAE if the RCS barrier loss is only thought to be potential and not actual.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q83</div>
LOCA point classification (identical point logic to 2016 Q81):<br>
&bull; <span class="hi-exam">Loss of RCS Barrier — RCS pressure lowering to 350 psig means subcooling is lost = 5 points</span><br>
&bull; <span class="hi-exam">Loss of Containment Barrier — containment pressure rise then a rapid, unexplained drop (13 psig to 1.5 psig over 6 minutes during a LOCA) = 3 points</span><br>
&bull; Total 5 + 3 = <span class="hi-exam">8 points → Site Area Emergency</span><br>
<span class="hi-trap">Trap: 4 point Alert if neither the loss of subcooling nor the loss of containment is recognized; 5 point Alert if only the RCS-barrier loss is recognized; 7 point SAE if the RCS-barrier loss is judged only POTENTIAL rather than actual.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 SRO-A4-1 (ESG-1 / ESG-2)</div>
RB3 series EAL — RCS-barrier classification under EP-SA-111-F2 (ALERT). <span class="hi-exam">RB3.P (Potential Loss) = ALERT</span>; <span class="hi-exam">RB3.L (Loss) = ALERT</span> as well — both single-barrier conditions classify at ALERT. ESG-1 → RB3.P (no release in progress). ESG-2 → RB3.L (release in progress, Section III "IS"). Description of Event text comes from the EAL Description Table: "Potential Loss of the Reactor Coolant System Boundary" vs "Loss of the Reactor Coolant System Boundary".
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 SRO-A4-1/-2/-3 (ESG-1/-2/-3)</div>
The 2015 ESG classification JPMs reinforce the single-barrier-vs-multiple-barrier rule:<br>
&bull; <span class="hi-exam">ESG-1 → ALERT under RB2.L</span> (single RCS-barrier Loss), escalating to <span class="hi-exam">SAE under RB2.L AND CB5.L</span> if a second barrier degrades (cavitating charging pump not caught).<br>
&bull; <span class="hi-exam">ESG-2 → ALERT under RB3.L</span> (single RCS-barrier Loss; release in progress, Section III "IS").<br>
&bull; <span class="hi-exam">ESG-3 → SAE under FB2.P AND RB2.P</span> — two barriers (Fuel Clad AND RCS) in Potential Loss simultaneously drive the SAE.<br>
<span class="hi-trap">Trap: a single barrier in Potential OR full Loss is only an ALERT; the SAE requires multiple barriers degrading (two Potential Losses, or one Loss + one Potential/Loss).</span> Descriptions of Event come from the EAL Description Table.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2012 SRO-A4-1/-2/-3 (ESG-1/-2/-3)</div>
The 2012 ESG classification JPMs apply the same fission-product-barrier rule:<br>
&bull; <span class="hi-exam">ESG-1 → ALERT under RB2.L</span> (single RCS-barrier Loss), escalating to <span class="hi-exam">SAE under RB2.L AND CB5.L</span> if the cavitating charging pump fails (RCS barrier Loss + Containment barrier Loss).<br>
&bull; <span class="hi-exam">ESG-2 → ALERT under RB3.L</span> (single RCS-barrier Loss).<br>
&bull; <span class="hi-exam">ESG-3 → SAE under FB2.P AND RB2.P</span> — Fuel Clad AND RCS barriers simultaneously in Potential Loss drive the SAE.<br>
<span class="hi-trap">Trap: a single barrier in Potential OR full Loss is only an ALERT; the SAE requires multiple barriers degrading.</span> Descriptions of Event come from the EAL Description Table.
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q85</div>
A SAE driven by FB4.L and RB2.L (Fuel Clad and RCS barriers, 5 points each) escalates to a <span class="hi-exam">General Emergency when containment radiation exceeds 2000 R/hr — adding 2 points from the containment barrier</span>. This more-severe classification is the condition that drives a subsequent NRC notification (required within 60 minutes).
</div>

## Connections

- Related procedures: [[EP-SA-111 — Emergency Classification and Protective Action]], [[EP-SA-111-101 — Emergency Classification and ICMF]]
- Related systems: [[RCS]], [[Containment]]
- Related exam questions: [[2016 Q81]], [[2012 Q83]], [[2012 Q85]]
- Related JPMs: [[2016 JPM SRO-A4-1 (ESG-1)]], [[2016 JPM SRO-A4-1 (ESG-2)]], [[2015 JPM SRO-A4-1 (ESG-1)]], [[2015 JPM SRO-A4-2 (ESG-2)]], [[2015 JPM SRO-A4-3 (ESG-3)]], [[2012 JPM SRO-A4-1 (ESG-1)]], [[2012 JPM SRO-A4-2 (ESG-2)]], [[2012 JPM SRO-A4-3 (ESG-3)]]
- Related exam: [[2016 NRC Written Exam]], [[2016 NRC Operating Exam]], [[2015 NRC Operating Exam]], [[2012 NRC Written Exam]], [[2012 NRC Operating Exam]]
