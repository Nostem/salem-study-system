---
title: "2016 Q7 — MFC return to auto after PZR level channel failure"
category: exams
status: draft
reference: no
aliases:
  - 2016 Q7
  - 2016-Q7

---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q7 — MFC return to auto after PZR level channel failure</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000022 K1.03 (3.0)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong> the following conditions:<br><br>
- Unit 2 was operating at 90% power with 21 charging pump in service when the controlling PZR Level Channel I failed low.<br>
- The Charging Master Flow Controller was placed in Manual when directed by S2.OP-AB.CVC-0001, Loss of Charging.<br>
- The alternate PZR level channel has been selected as the controlling channel.<br>
- Letdown has been restored.<br><br>
Which of the following identifies a consequence of returning the Master Flow Controller to auto PRIOR to returning PZR level to program as directed in S2.OP-AB.CVC-0001 ?<br><br>
Charging flow will…
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
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> 55.41.b(7) With a CCP in service, the failure LOW of the controlling PZR level channel will cause charging flow to RISE. The stem stated that MFC was taken to manual when directed IAW AB, so there was sufficient time for actual charging flow to rise substantially. With actual level higher than programmed level, if the MFC were placed in auto it would force charging flow to lower. If charging flow lowered to &lt;~60 gpm, inadequate cooling of letdown flow would occur in the regenerative heat exchanger, and letdown line flashing would occur. The CC71 is normally only ~10% open, and has plenty of room to open if letdown temp were to rise downstream of the letdown HX, and temps would not reach demin isolation levels. The 2 rises are incorrect because charging flow wouldn't rise, but the actions associated with higher flow are correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> The 2 rises are incorrect because charging flow wouldn't rise, but the actions associated with higher flow are correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> The 2 rises are incorrect because charging flow wouldn't rise, but the actions associated with higher flow are correct.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The CC71 is normally only ~10% open, and has plenty of room to open if letdown temp were to rise downstream of the letdown HX, and temps would not reach demin isolation levels.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of Charging (S2.OP-AB.CVC-0001, Rev 9) | LO: ABCVC1E002 | Source: Facility Exam Bank — Direct From Source (125676) | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[Pressurizer Level & Press Control]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]]
- Related exam: [[2016 NRC Written Exam]]
