---
title: "AB.ROD-0004 — Rod Position Indication Failure"
category: abnormals
status: draft
aliases:
  - AB.ROD-0004
  - S2.OP-AB.ROD-0004
  - Rod Position Indication Failure
---

# AB.ROD-0004 — Rod Position Indication Failure

## Purpose

Abnormal procedure for a failure of the Rod Position Indication System (IRPIs). Addresses the conservative reactivity assumptions and additional boration required when control rod position cannot be confirmed.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q88</div>
An <span class="hi-exam">unexpected OHA E-48 ROD BOTTOM during a startup</span> (Control Bank A already &gt;20 steps, so the alarm had cleared and this is not a reflash) is investigated by placing the startup on hold and entering AB.ROD-0004 directly, or via AB.ROD-0002 which directs entry into AB.ROD-0004. <span class="hi-trap">Opening the Reactor Trip Breakers is not required — IOP-3 step 5.2.19 gives a 4 hour window to terminate the startup.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q88</div>
When IRPIs fail (rod position unknown), the affected rods are <span class="hi-exam">assumed to remain fully withdrawn (their reactivity unavailable for shutdown)</span>. AB.ROD-0004 CAS action 2.0 requires <span class="hi-exam">an additional 270 ppm boration for EACH failed IRPI</span> if a shutdown is performed before the IRPI is declared operable (so two failed Control Bank D IRPIs → 540 ppm). <span class="hi-trap">Boration to Cold Shutdown SDM is NOT required for a shutdown to Hot Standby.</span>
</div>

## Connections

- Related systems: [[Control Rod Drive]]
- Related procedures: [[AB.ROD-0002 — Dropped Rod]], [[S2.OP-AR.ZZ-0005 — Overhead Annunciators Window E]], [[S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load]]
- Related exam questions: [[2015 Q88]], [[2012 Q88]]
- Related exam: [[2015 NRC Written Exam]], [[2012 NRC Written Exam]]
