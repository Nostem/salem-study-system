---
title: "2015 Q40 — Consequence of Returning Charging Master Flow Controller to Auto Before Restoring PZR Level (AB.CVC-0001)"
category: exams
status: draft
reference: no
aliases:
  - 2015 Q40
  - 2015-Q40
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q40 — Consequence of Returning Charging Master Flow Controller to Auto Before Restoring PZR Level (AB.CVC-0001)</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">011000 A4.04 (3.2/2.9)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br>
&bull; Unit 2 was operating at 90% power with 21 charging pump in service when the controlling PZR Level Channel I failed low.<br>
&bull; The Charging Master Flow Controller was placed in Manual when directed by S2.OP-AB.CVC-0001, Loss of Charging.<br>
&bull; The alternate PZR level channel has been selected as the controlling channel.<br>
&bull; Letdown has been restored.<br><br>
Which of the following identifies a consequence of returning the Master Flow Controller to auto PRIOR to returning PZR level to program as directed in S2.OP-AB.CVC-0001 ?<br><br>
Charging flow will...
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> rise, and VCT auto makeup may initiate.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> lower, and flashing in the Letdown line could occur.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> rise, and RCP seal injection flow could exceed Tech Spec limit total seal injection flow.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> lower, and 2CC71 LTDWN HX CC CONT VALVE will not respond quickly enough to prevent Mixed Bed Demin isolation on high inlet temperature.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> <em>Explanation of Answers (verbatim from source):</em> 55.41.b(7)With a CCP in service, the failure LOW of the controlling PZR level channel will cause charging flow to RISE. The stem stated that MFC was taken to manual when directed IAW AB, so there was sufficient time for actual charging flow to rise substantially. With actual level higher than programmed level, if the MFC were placed in auto it would force charging flow to lower. If charging flow lowered to &lt;=60 gpm, inadequate cooling of letdown flow would occur in the regenerative heat exchanger, and letdown line flashing would occur. The CC71 is normally only ~10% open, and has plenty of room to open if letdown temp were to rise downstream of the letdown HX, and temps would not reach demin isolation levels. The 2 rises are incorrect because charging flow wouldn't rise, but the actions associated with higher flow are correct.</div>
<div style="margin-top:6px;padding:8px 12px;border-left:3px solid #1a2035;border-radius:0 4px 4px 0;color:#9ca3af;font-size:11px;"><strong>K/A statement:</strong> Ability to manually operate and/or monitor in the control room: Transfer of PZR LCS from automatic to manual control.<br><em>Note: the 2015 NRC worksheet provides a single "Explanation of Answers" (above); it does not contain separate per-distractor justifications, so none are fabricated here.</em></div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of Charging (S2.OP-AB.CVC-0001, Rev 9) | LO: PZRP&amp;LE015 | Source: Bank – Facility Exam Bank (Direct From Source, comment 125676) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Pressurizer Level & Press Control]], [[CVCS]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]]
- Related exam: [[2015 NRC Written Exam]]
