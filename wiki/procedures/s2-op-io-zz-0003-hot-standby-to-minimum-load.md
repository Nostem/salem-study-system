---
title: "S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load"
category: procedures
status: draft
aliases:
  - S2.OP-IO.ZZ-0003
  - IOP-3
---

# S2.OP-IO.ZZ-0003 — Hot Standby to Minimum Load

## Purpose

Provides direction for performing a reactor startup from Hot Standby (Mode 3) to Minimum Load, including rod withdrawal, criticality approach, and Mode 2 entry documentation.

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q39</div>
Per S2.OP-IO.ZZ-0003, the crew will <span class="hi-exam">record the time of MODE 2 entry in the Control Room Narrative Log when withdrawal of Control Bank "A" is imminent</span>. <span class="hi-trap">Trap: Mode 2 entry is NOT when the reactor is critical (that occurs later), NOT when the first Shutdown Bank is withdrawn (Shutdown Banks are withdrawn first, but Mode 2 entry is documented when Control Bank A withdrawal begins), and NOT when IR power stabilizes at 2E-3% (that is for Inverse Count Rate Ratio data collection per SC.RE-RA.ZZ-0002).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q69</div>
Step 4.2.21.3 (page 18, Rev 43): when withdrawal of Control Bank "A" is imminent, PERFORM the following: <span class="hi-exam">RECORD time of Mode 2 entry in the Control Room Narrative Log; UPDATE WCM to Mode 2; RECORD Date and Time of Control Banks withdrawal in Attachment 3, Technical Specifications Pre-Criticality Surveillance Data, Section A</span>. <span class="hi-trap">Mode 2 entry is NOT triggered by Rx criticality, RTB closure, or Shutdown Bank withdrawal — only by imminent Control Bank A withdrawal.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q76</div>
During a startup IAW this procedure (low-power physics testing), <span class="hi-trap">a dropped-rod recovery (withdrawing the rod) constitutes an approach to criticality</span> — so if a rod drops while critical, the CRS inserts all rods rather than recovering the dropped rod. See [[Control Rod Drive]], [[AB.ROD-0002 — Dropped Rod]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2015 Q94</div>
During a control-rod startup (Hot Standby to Minimum Load), a predicted-critical-rod-height vs ECC <span class="hi-exam">difference &lt;300 pcm requires no special action</span> (the startup continues). See [[Control Rod Drive]], [[S2-RE-RA.ZZ-0016 — Curve Book (Salem Unit 2 Cycle 23)]].
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2015 Sim-e</div>
During the power ascension under this procedure, the 4KV Group Buses are <span class="hi-exam">transferred from the Station Power Transformers to the Auxiliary Power Transformers IAW S2.OP-SO.4KV-0008</span> once the Main Turbine is synchronized; <span class="hi-exam">Rod Control is held in Manual until the Group Buses are transferred</span>. See [[S2.OP-SO.4KV-0008 — 4KV Group Buses Power Supply Transfer]].
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q55</div>
The operating SGFP(s) are placed on Main Steam supply prior to exceeding <span class="hi-exam">5% power (IOP-3 step 5.4.10)</span>. A spurious MSLI then closes the MSIVs AND the <span class="hi-exam">MS18 bypass valves</span>, removing steam from the SGFP — the SGFP coasts down (it does not trip). As SG level drops to the <span class="hi-exam">lo-lo level setpoint</span>, the MDAFW pumps and TDAFW pump start. <span class="hi-trap">Note: source procedure cited on the worksheet is the Unit 1 equivalent S1.OP-IO.ZZ-0003 (Rev 32); the canonical wiki article is the Unit 2 S2.OP-IO.ZZ-0003.</span>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[Excore NIs]], [[Main Turbine]], [[AFW]], [[Main Steam]]
- Related procedures: [[S2.OP-SO.TRB-0001 — Turbine-Generator Startup Operations]]
- Related exam questions: [[2016 Q69]], [[2018 Q39]], [[2015 Q76]], [[2015 Q94]], [[2014 Q55]]
- Related JPMs: [[2018 JPM Sim-e]], [[2015 JPM Sim-e]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2018 NRC Operating Exam]], [[2015 NRC Written Exam]], [[2015 NRC Operating Exam]], [[2014 NRC Written Exam]]
