---
title: "S1.OP-SO.115-0013 — 1C Vital Instrument Bus UPS System Operation"
category: procedures
status: draft
aliases:
  - S1.OP-SO.115-0013
  - SO.115-0013
  - 1C Vital Instrument Bus UPS System Operation
---

# S1.OP-SO.115-0013 — 1C Vital Instrument Bus UPS System Operation

> ⚠️ DRAFT — Reconstructed from exam materials

## Purpose

Governs operation of the 1C Vital Instrument Bus (VIB) Uninterruptible Power Supply (UPS), which supplies a Unit 1 vital instrument bus. The UPS inverter normally powers the vital bus; on loss of the inverter input, the supply transfers (latched transfer) to the alternate source.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q57</div>
A <span class="hi-exam">latched transfer of a VIB inverter takes 2/3 of one cycle (11.1 milli-seconds)</span> — not enough time for control room instrumentation to respond, so instrumentation powered from the bus is <span class="hi-exam">unaffected by the transfer</span>. The VIB and its powered instrumentation <span class="hi-exam">remain OPERABLE as long as the inverter is powering the Vital Bus</span> (P&L 3.5). The transfer does not require declaring instrumentation inoperable, and indication is not lost. <span class="hi-trap">1D VIB is powered from the 1B bus — the C and D VIB inverters are NOT powered from a common 230 VAC source.</span>
</div>

## Connections

- Related systems: [[115V AC]]
- Related procedures: [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]]
- Related exam questions: [[2012 Q57]]
- Related exam: [[2012 NRC Written Exam]]
