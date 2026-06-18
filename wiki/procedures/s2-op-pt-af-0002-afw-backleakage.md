---
title: "S2.OP-PT.AF-0002 — AFW Backleakage Testing"
category: procedures
status: draft
aliases:
  - S2.OP-PT.AF-0002
  - AFW backleakage
---

# S2.OP-PT.AF-0002 — AFW Backleakage Testing

## Purpose

Provides guidance for monitoring and determining auxiliary feedwater system backleakage from the main feedwater system. Backleakage of hot feedwater into the AFW piping can cause steam/vapor binding of motor-driven AFW pumps, disabling them when needed.

## Key Actions / Information

**Exam & operating coverage:**

<div class="callout callout-exam">
<div class="callout-label">Exam — 2018 Q18</div>
Per P&L 3.1, this procedure shall be performed <span class="hi-exam">30 to 60 minutes</span> after an AFW Pump is shutdown in Modes 1-3. Per SOER 84-3, backleakage of hot feedwater has disabled AFW pumps due to <span class="hi-exam">steam binding (vapor binding)</span>. <span class="hi-trap">Trap: the procedure is NOT required to be performed immediately — the 30-60 minute window allows time for backleakage to develop and become detectable. Backward rotation is a concern for RCPs (which have Anti-Reverse-Rotation Devices), not AFW pumps — the AFW failure mode is vapor binding.</span>
</div>

<div class="callout callout-jpm">
<div class="callout-label">JPM — 2016 IP-j</div>
<strong>Section 5.1 — Surveillance evaluation logic (with AFW Pump secured 30 min ago after quarterly run):</strong> Record AFW Line Temperatures from <span class="hi-exam">1TA165551</span> (4 line readings). Calculate average line temperature (sum/4) and temperature difference (highest − average).<br>
&bull; Step 5.1.2: <span class="hi-exam">If each line &lt;120°F AND ΔT (highest − average) ≤ 10°F</span> → record SAT in Attachment 1 §5.0 (no further action).<br>
&bull; Step 5.1.3: If any line is ≥120°F AND &lt;160°F → record AFW piping temps every hour in Control Room Narrative Log AND record results in Attachment 1 §5.0.<br>
&bull; Step 5.1.4: <span class="hi-exam">If ΔT &gt; 10°F</span> → record results UNSAT in Attachment 1 §5.0 (all three categories).<br>
&bull; Step 5.1.6: <span class="hi-exam">If any line is ≥ 160°F → record findings in Control Room Narrative Log AND VENT AFW pumps/piping IAW Section 5.2.</span><br><br>
<strong>Section 5.2.1 — 11 AFW Pump Vent (CRITICAL):</strong> A. Slowly throttle open <span class="hi-exam">11AF83, AF PUMP VENT</span> until a solid stream of water is observed; B. Close 11AF83; C. Slowly throttle open <span class="hi-exam">11AF114, AF PUMP DISCH VENT</span> until a solid stream of water is observed; D. Close 11AF114. Sample exam dataset (104/106/161/108 °F) → average 119.75 °F, ΔT 41.25 °F, highest 161 °F → triggers BOTH §5.1.4 (UNSAT, ΔT &gt; 10 °F) AND §5.1.6 (vent required, ≥ 160 °F).
</div>

## Connections

- Related systems: [[AFW]], [[Feed & Condensate]]
- Related exam questions: [[2018 Q18]]
- Related JPMs: [[2016 JPM IP-j]]
- Related exam: [[2018 NRC Written Exam]], [[2016 NRC Operating Exam]]
