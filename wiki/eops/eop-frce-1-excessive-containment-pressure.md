---
title: "EOP-FRCE-1 — Response to Excessive Containment Pressure"
category: eops
status: draft
aliases:
  - EOP-FRCE-1
  - excessive containment pressure
---

# EOP-FRCE-1 — Response to Excessive Containment Pressure

> Reconstructed from exam materials

## Purpose

Functional restoration procedure for responding to excessive containment pressure by maximizing containment heat removal systems (containment spray and CFCUs).

## Key Actions / Information

<div class="callout callout-exam">
<div class="callout-label">Exam — 2022 Q80</div>
Step C3-1 Caution: <span class="hi-exam">If LOCA-5 is in effect, operation of containment spray pumps should be IAW LOCA-5</span> (not FRCE-1). LOCA-5 has less restrictive criteria that allow reducing the number of operating containment spray pumps based on RWST level and CFCUs to conserve RWST inventory. <span class="hi-trap">FRCE-1 would establish maximum available heat removal (more spray pumps), which conflicts with LOCA-5's priority to conserve RWST inventory. The CRS can transition to FRCE-1 from LOCA-5, but CS pump operation follows LOCA-5 guidance.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2016 Q27</div>
RCP trip basis in FRCE-1: per the FRCE-1 basis document page 4, <span class="hi-exam">"...RCPs are tripped since component cooling water to the RCP seals and motors is isolated."</span> CS actuation occurs at <span class="hi-exam">15 psig in containment</span>, which also triggers <span class="hi-exam">Phase B isolation</span> — Phase B shuts the <span class="hi-exam">RCP CCW cooling inlet and outlet valves</span>. Without CCW, the RCPs must be tripped to prevent motor damage from lack of cooling. <span class="hi-trap">Not "to minimize seal leakoff" (B), not "to prevent thermal barrier backflow" (C), and not "to avoid two-phase pumping" (D — subcooling is indicated in the stem).</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q73</div>
Step 2 — CS pump operation with LOCA-5 in effect: when transitioning to FRCE-1 from LOCA-5, CS pumps are operated <span class="hi-exam">as directed by LOCA-5</span>. If LOCA-5 directed both CS pumps stopped, the crew will <span class="hi-exam">NOT start both CS pumps</span> in FRCE-1 even though containment pressure exceeds 15 psig. <span class="hi-exam">Conserving RWST water IS a reason</span> for how CS pumps are operated in FRCE-1 Step 3 when LOCA-5 is in effect. <span class="hi-trap">Normally FRCE-1 would start both CS pumps when containment pressure exceeds 15 psig. The LOCA-5 provision overrides this to conserve RWST inventory.</span>
</div>

<div class="callout callout-exam">
<div class="callout-label">Exam — 2014 Q27</div>
With a LBLOCA in progress and LOCA-5 in effect, the operator <span class="hi-exam">WILL enter FRCE-1 on the PURPLE path of containment pressure &gt; 15 psig</span>, but FRCE-1 step 3.1 asks if LOCA-5 is in effect and the yes-path directs that the <span class="hi-exam">CS pumps are operated IAW LOCA-5</span>. In FRCE, maximum available heat removal operability is normally warranted; the less-restrictive LOCA-5 criteria is used here because recirculation flow to the RCS is not available and <span class="hi-exam">RWST water must be conserved</span> by stopping containment spray pumps when permitted.
</div>

<div class="callout callout-scenario">
<div class="callout-label">Scenario — 2015 #1</div>
After the LBLOCA and transition out of EOP-TRIP-1, CFST monitoring identifies the <span class="hi-exam">FRCE PURPLE path (excessive containment pressure)</span> as containment pressure rises above 15 psig and CS/Phase B actuate. CRS enters EOP-FRCE-1, verifies Phase A valves shut, verifies 2VC5/2VC6 shut and LOCA-5 not in effect, reports containment spray / Phase B / CFCU / MSIV status and that all RCPs are stopped, then <span class="hi-exam">returns to the procedure in effect (EOP-LOCA-1)</span>. An enter/act/return contingency. See [[EOP-CFST-1 — Critical Safety Function Status Trees]].
</div>

## Connections

- Related systems: [[Containment Spray]], [[CFCUs]], [[Containment]], [[RCPs]], [[CCW]]
- Related EOPs: [[EOP-LOCA-5 — Loss of Emergency Coolant Recirculation]], [[EOP-CFST-1 — Critical Safety Function Status Trees]]
- Related exam questions: [[2016 Q4]], [[2016 Q27]], [[2018 Q73]], [[2020 Q9]], [[2022 Q80]], [[2014 Q27]]
- Related scenarios: [[2015 Scenario 1]]
- Related exam: [[2016 NRC Written Exam]], [[2018 NRC Written Exam]], [[2020 NRC Written Exam]], [[2022 NRC Written Exam]], [[2015 NRC Operating Exam]]
