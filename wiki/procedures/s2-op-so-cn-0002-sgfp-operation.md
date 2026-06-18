---
title: "S2.OP-SO.CN-0002 — Steam Generator Feed Pump Operation"
category: procedures
status: draft
aliases:
  - S2.OP-SO.CN-0002
  - SGFP Operation
---

# S2.OP-SO.CN-0002 — Steam Generator Feed Pump Operation

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Provides guidance for operating the Steam Generator Feed Pumps (SGFPs) including startup, shutdown, and removal from service procedures.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q53</div>
SG Feed Delta-P (the delta between feed pressure and SG pressure) is the controlled parameter — it is <span class="hi-exam">controlled by adjusting SGFP speed and is programmed based on total % Steam Flow</span> (actual SGFP rpm is a result, not a controlled parameter). Per Exhibit 1: <span class="hi-exam">minimum D/P is 50 psid from 0-15% steam flow</span>; <span class="hi-exam">100% D/P is 150 psid</span>. At <span class="hi-exam">40% steam flow the programmed SG Feed D/P is closest to 80 psid</span>. <span class="hi-trap">60 psid is the trap value from assuming a simple linear scale across 0-100% steam flow.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2019 Q18</div>
SGFP Turbine Overspeed Trip setpoint: <span class="hi-exam">6080 rpm</span>. The SGFP turbine design capacity is <span class="val-normal">5500 rpm</span>. <span class="hi-trap">Do not confuse with Main Turbine overspeed trips: 108% = 1944 rpm, 110% = 1980 rpm. SGFP turbines operate at much higher RPM.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2020 Q44</div>
When an SGFP is removed from service per S2.OP-SO.CN-0002, the procedure ensures the pump is placed in the <span class="hi-exam">tripped condition</span>. This is significant because the "trip of both SGFPs" signal that generates an automatic MDAFW pump start requires both SGFPs to be in a tripped state. With 22 SGFP already tripped (removed from service), the trip of 21 SGFP satisfies the interlock and <span class="hi-exam">both MDAFW pumps start immediately</span>.
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[AFW]]
- Related procedures: [[S2.OP-IO.ZZ-0004 — Power Operation]]
- Related exam questions: [[2019 Q18]], [[2020 Q44]], [[2012 Q53]]
- Related exam: [[2019 NRC Written Exam]], [[2020 NRC Written Exam]], [[2012 NRC Written Exam]]
