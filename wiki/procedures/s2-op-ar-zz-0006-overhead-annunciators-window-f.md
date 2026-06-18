---
title: "S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F"
category: procedures
status: draft
aliases:
  - S2.OP-AR.ZZ-0006
---

# S2.OP-AR.ZZ-0006 — Overhead Annunciators Window F

## Purpose

Alarm response procedure for Unit 2 overhead annunciator panel Window F, covering reactor-trip first-out indication. The "F" windows have dual backlights (red and white) and provide reactor trip first-out information.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q52</div>
On a Unit 2 Main Turbine trip from 100% power, the <span class="hi-exam">automatic</span> actions include: <span class="hi-exam">500KV output breakers 1-9 and 9-10 open</span> (every turbine trip), <span class="hi-exam">4KV Group buses swap from APT to Station Power Transformers</span> (off-site power) when the output breakers open, and the <span class="hi-exam">Main Generator Exciter Field Breaker opens</span>. <span class="hi-trap">Running EHC pumps do NOT auto-stop; Emergency Bearing Oil pumps do NOT start (the aux bearing oil pump starts); 4KV VITAL buses do NOT swap (already powered from off-site).</span> See [[500KV]], [[4KV]], [[Main Turbine]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2012 Q87</div>
The <span class="hi-exam">OHA F-17 ARP covers blocking the Intermediate Range channels (BLOCK INTERMEDIATE RANGE A and B pushbuttons)</span>. <span class="hi-trap">Distractor trap: an IR bistable illuminating at 15% power is NOT the expected point to block both IR channels per F-17 — the IR Hi Flux trip was already blocked above P-10, and the bistable illumination at 15% is unexpected and is investigated, not reset by blocking IR.</span> See [[Excore NIs]], [[RPS/SSPS]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q2</div>
The "F" windows have <span class="hi-exam">dual backlights, red and white</span>. The first signal generated to trip the reactor is locked in <span class="hi-exam">RED</span>, and can <span class="hi-exam">only be reset with a keyswitch and SM permission</span>. The RED box indicates the <span class="hi-trap">first TRIP signal — NOT the first AUTO TRIP signal</span>. When both a manual trip is ordered and an auto trip setpoint is exceeded (e.g., SG NR level lowering past the 14% Lo-Lo auto trip setpoint while the manual trip is being carried out), the <span class="hi-exam">Sequence of Events Recorder (SER) on Control Console 2CC1 must be reviewed</span> to determine which signal reached the RPS first and whether an ATWT occurred. Example F windows: F-3/F-11/F-19/F-27 (21–24 SG LVL LO-LO), F-36 (TRB TRIP &amp; P-9), F-44 (MAN RX TRIP INITIATED).
</div>

## Connections

- Related systems: [[Annunciators]], [[RPS/SSPS]], [[Steam Generator & Blowdown]], [[500KV]], [[4KV]], [[Main Turbine]]
- Related exam questions: [[2014 Q2]], [[2012 Q52]], [[2012 Q87]]
- Related exam: [[2014 NRC Written Exam]], [[2012 NRC Written Exam]]
