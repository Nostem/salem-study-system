---
title: "2012 Q20 — LOCA-6 RHR Leak Isolation Component"
category: exams
status: draft
aliases:
  - 2012 Q20
  - 2012-Q20
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q20 — LOCA-6 RHR Leak Isolation Component</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">WE04 EA1.01 (RO 4.0 / SRO 4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is attempting to identify and isolate a 400 gpm LOCA into the RHR system which occurred while operating at 75% power.<br>
- 2-EOP-LOCA-6, LOCA Outside Containment, was entered from 2-EOP-TRIP-1, Rx Trip or Safety Injection.<br>
- The source of the water is back leakage from the 23 cold leg injection line.<br>
- A large leak in the RHR system is located on the piping between 21 and 22RH19s, RHR HX DISCH X-CONN VALVES.<br><br>
Which of the following components, if it failed to respond when directed by LOCA-6, would prevent isolation of the RCS leak outside containment?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> 2SJ69, RHR SUCT FROM RWST.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> 22SJ49, RHR DISCH TO COLD LEGS.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> 22RH19, RHR HX DISCH X-CONN VALVE.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> 21SJ49, RHR DISCH TO COLD LEGS. <span style="color:#6b7280;font-style:italic;">[Printed option D text "RHR HX DISCH X-CONN VALVE." is struck out on the worksheet and corrected by hand to "RHR DISCH TO COLD LEGS."]</span></div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> The leakage from 23 Cold leg flows back through the 21SJ49, then through the 21RH19 cross connect to reach the leak. Leak isolation is attempted first by ensuring closed the RCS-RHR suction isolation valves RH1 and RH2. Then BOTH the RH19s are shut. Since the leakage from the RCS has to flow through the 21RH19 to reach the leak, and it is a normally open valve, its failure to reposition when directed would prevent leak isolation as above. 21 RHR feeds 21 and 23 cold legs, while 22 RHR train feeds 22 and 24.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The SJ69 is closed after the leak is isolated. Candidate also has to know which RHR train feeds which cold legs when not cross connected.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> The 22SJ49 is on the opposite RHR train. (Per the correct-answer explanation: 21 RHR feeds 21 and 23 cold legs, while 22 RHR train feeds 22 and 24, so the 23 cold leg leakage flows back through 21SJ49, not 22SJ49.)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Worksheet does not provide a separate justification for this distractor. (Per the correct-answer explanation, the RCS leakage must flow through the 21RH19 to reach the leak — not the 22RH19 — so failure of the 21RH19, not the 22RH19, is what would prevent isolation.)</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2-EOP-LOCA-6 (Rev 21); ECCS Simplified Drawing 205350-SIMP (Rev 4) | LO: LOCA06E002 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RHR]], [[ECCS]]
- Related procedures: [[EOP-LOCA-6 — LOCA Outside Containment]], [[EOP-TRIP-1]]
- Related exam: [[2012 NRC Written Exam]]
