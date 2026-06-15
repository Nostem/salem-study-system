---
title: "2015 Q88 — Boration Required for Two Failed Control Bank D IRPIs Before Shutdown (SRO)"
category: exams
status: draft
reference: no
aliases:
  - 2015 Q88
  - 2015-Q88
  - 2015 SRO 13
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q88 (SRO 13) — Boration Required for Two Failed Control Bank D IRPIs Before Shutdown</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">014000 A2.02 (3.1/3.6) — SRO</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br>
&bull; Unit 2 is conducting a rapid plant shutdown due to a loss of condenser vacuum.<br>
&bull; Two IRPIs in control bank D go dark, and their P-250 readings are 0 steps.<br>
&bull; Maintenance Controls Dept. will be unable to repair the IRPIs until after shutdown.<br>
&bull; Rx Engineering has made no specific recommendations outside of procedural direction regarding boration.<br><br>
Which action is required when the plant is placed in Hot Standby?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Borate to Cold Shutdown SDM to prevent a Yellow Path on FRSM from occurring during the shutdown.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Borate an additional 540 ppm to prevent a Yellow Path on FRSM from occurring during the shutdown.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Borate an additional 540 ppm since it is assumed that the reactivity associated with the affected rods is unavailable for shutdown.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Borate to Cold Shutdown SDM since it is assumed that the reactivity associated with the affected rods is unavailable for shutdown.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> <em>Explanation of Answers (verbatim from source):</em> 55.43.b(6,5) This question is SRO level based on having to determine the effect on core reactivity based on the 2 control rods which have to be assumed to remain fully withdrawn in the absence of IRPI indication. Additionally, the sRO must select the portion of AB.ROD-4 (CAS action 2.0) which requires an additional 270 ppm boration for each failed IRPI if a shutdown is performed before the IRPI is declared operable. Boration to cold shutdown conditions is not required for a shutdown to hot standby. It assumes the reactivity associated with the affected rds(s) is/are unavailable, thereby increasing the required reactivity in the core.</div>
<div style="margin-top:6px;padding:8px 12px;border-left:3px solid #1a2035;border-radius:0 4px 4px 0;color:#9ca3af;font-size:11px;"><strong>K/A statement:</strong> Ability to (a) predict the impacts of the following on the Rod Position Indication System and (b) based on those predictions, use procedures to correct, control, or mitigate the consequences of those abnormal operation: Loss of power to the RPIS.<br><em>Note: the 2015 NRC worksheet provides a single "Explanation of Answers" (above); it does not contain separate per-distractor justifications, so none are fabricated here.</em></div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Rod Position Indication Failure (S2.OP-AB.ROD-0004, Rev 10) | LO: ABROD4E002 | Source: Bank – Facility Exam Bank (comment 140829) | Cognitive: Application | Exam Level: SRO</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Control Rod Drive]], [[CVCS]]
- Related procedures: [[AB.ROD-0004 — Rod Position Indication Failure]]
- Related tech specs: [[TS 3/4.1.3 — Movable Control Assemblies]]
- Related exam: [[2015 NRC Written Exam]]
