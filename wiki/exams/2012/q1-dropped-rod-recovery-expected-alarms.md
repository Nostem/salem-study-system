---
title: "2012 Q1 — Dropped Rod Recovery Expected Alarms"
category: exams
status: draft
aliases:
  - 2012 Q1
  - 2012-Q1
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q1 — Dropped Rod Recovery Expected Alarms</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000003K206 / AK2.05 (RO 2.5 / SRO 2.8)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is at 30% power.<br>
- Control Bank D rod 2D3 drops fully into the core.<br>
- The reactor does not trip.<br>
- The crew is performing actions to recover the rod IAW S2.OP-AB.ROD-0002, Dropped Rod.<br><br>
Which of the following is/are EXPECTED to alarm during the control rod recovery, and when?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> OHA's E-8 RIL LO and E-16 RIL LO LO. These occur when the P/A Converter is reset to zero prior to withdrawing the dropped rod.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> OHA's E-8 RIL LO and E-16 RIL LO LO. These occur when the STARTUP PB is depressed to reset the Rod Step Counter for Control Bank D.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> OHA E-40 ROD BANK URGENT FAIL. This occurs when the Rod Bank Selector Switch is moved past the AUTO position into the Individual Bank Select position for Control Bank D.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> OHA E-40 ROD BANK URGENT FAIL. This occurs when withdrawing the dropped rod after the CRDM lift coil switches for all the unaffected rods in that bank have been opened.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ D. Correct.</strong> D is correct because a Power Cabinet Regulation failure occurs when the rod movement demand signal is sent out to Control Bank D rods and only one rod responds with movement.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because the P/A converter is only reset (and would cause the alarms) for a GROUP 1 rod recovery, and the affected rod is 2D3 (Group 2).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because the STARTUP PB is not depressed during a rod recovery, only when performing a startup.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because control rod movement when passing through auto is a concern, and the alarm would not occur then.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.ROD-0002 (Rev 10); Rod Control Lesson Plan NOS05RODS00-11 (Rev 11) | LO: ABROD2E003 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[Annunciators]]
- Related procedures: [[AB.ROD-0002 — Dropped Rod]]
- Related exam: [[2012 NRC Written Exam]]
