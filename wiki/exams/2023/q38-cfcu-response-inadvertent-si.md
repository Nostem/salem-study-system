---
title: "2023 Q38 — CFCU Response to Inadvertent SI / SEC Mode 1"
category: exams
status: draft
aliases:
  - 2023 Q38
  - 2023-Q38
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q38 — CFCU Response to Inadvertent SI / SEC Mode 1</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">022 A2.07 (4.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
• Unit 2 at 100% power<br>
• 21-24 CFCUs running in high speed<br>
• 25 CFCU in standby<br>
• An inadvertent SI occurs<br><br>
When do CFCUs restart, and what is required to regain manual control for high speed?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> After 20 seconds; reset SI only.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> After 20 seconds; reset SI and SECs.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Immediately; reset SI and SECs.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Immediately; reset SI only.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> SEC Mode 1 (SI only): running CFCUs are tripped, then all five start 20 seconds later in low speed. The 20-second time delay allows for motor coastdown before restart. To regain manual control for high speed operation: must reset BOTH trains of SI AND reset all SECs. EOP-TRIP-3 step 1 accomplishes this.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> Incorrect. The 20-second delay is correct, but resetting SI alone is not sufficient. Both SI trains AND all SECs must be reset to regain manual control of the CFCUs for high speed operation.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Incorrect. CFCUs do not restart immediately. The 20-second time delay is required to allow motor coastdown before restarting in low speed. The SI and SEC reset requirement is correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Incorrect. CFCUs do not restart immediately (20-second delay required for coastdown), and resetting SI only is not sufficient — all SECs must also be reset to regain manual control.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05SEC000-09, 2-EOP-TRIP-3 (R41) | Source: Modified - Braidwood 2016 NRC RO20 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Containment Fan Coil Units]], [[Instrumentation and Controls]]
- Related exam: [[2023 NRC Written Exam]]
