---
title: "S1.OP-SO.DG-0005 — EDG Operability Determination"
category: procedures
status: draft
aliases:
  - S1.OP-SO.DG-0005
  - EDG operability determination
---

# S1.OP-SO.DG-0005 — EDG Operability Determination

## Purpose

Provides Unit 1 guidance for determining the impact of inoperable Emergency Diesel Generators on plant systems and the applicable Technical Specification action statements. Contains case studies (Exhibit 1) and supporting system information (Attachment 2) for evaluating SW loop operability when an EDG is declared inoperable.

## Key Content

### Exhibit 1 — Case Studies

Case studies for various EDG inoperability scenarios, including Special Case D (Service Water). Used to determine which TS 3.8.1.1 action statements apply based on the operability of redundant required features.

### Attachment 2 — SW Loop Operability Requirements

Defines the requirements for two independent OPERABLE Service Water loops (per S1.OP-SO.SW-0005):
- One OPERABLE SW pump powered from the A vital bus
- One OPERABLE SW pump powered from the B vital bus
- One OPERABLE SW pump powered from the C vital bus
- Two OPERABLE SW pumps per Bay

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2020 SRO-A3</div>
EDG inoperability with 13 SW Pump C/T: candidate must determine that <span class="hi-exam">TWO SW Loops remain OPERABLE</span> (one pump per bus and two pumps per bay still met) despite 13 SW Pump being C/T. Therefore <span class="hi-exam">TS 3.8.1.1 Action b.2 (4-hour redundant feature verification) does NOT apply</span>. Only standard single-EDG actions apply: <span class="hi-exam">b.1 (1 hr), b.3 (24 hrs), b.4 (72 hrs)</span>. This is Special Case D / Case #1 from Exhibit 1.
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2019 SRO-A3</div>
CRS reviews this procedure prior to CIT of 1B EDG to identify <span class="hi-exam">redundant required features</span> powered from the 1B EDG bus. When 12 Charging pump subsequently trips, the CRS must recognize that 12 Charging pump is a redundant required feature of the 1B EDG. This triggers <span class="hi-exam">TS 3.8.1.1 action b.2 (4 hours)</span> in addition to <span class="hi-exam">TS 3.5.2.a action a (72 hours)</span> for the inoperable ECCS subsystem.
</div>

## Connections

- Related systems: [[EDGs]], [[Service Water]], [[ECCS]]
- Related tech specs: [[TS 3/4.8 — Electrical]], [[TS 3/4.7 — Plant Systems]], [[TS 3/4.5 — ECCS]]
- Related JPMs: [[2019 JPM SRO-A3]], [[2020 JPM SRO-A3]]
- Related exam: [[2019 NRC Operating Exam]], [[2020 NRC Operating Exam]]
