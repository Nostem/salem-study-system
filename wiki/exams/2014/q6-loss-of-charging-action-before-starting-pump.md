---
title: "2014 Q6 — Loss of Charging Action Before Starting Pump"
category: exams
status: draft
aliases:
  - 2014 Q6
  - 2014-Q6
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q6 — Loss of Charging Action Before Starting Pump</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">022 AK1.01 (RO 3.6 / SRO 3.6)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following condition:<br><br>
- Unit 2 was operating at 100% power when 23 Charging Pump tripped.<br><br>
Which of the following identifies an action which must be performed IAW S2.OP-AB.CVC-0001, Loss of Charging, prior to starting a charging pump, and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Check RCP seal inlet temperature &lt;225°F to prevent damage to seals when CVCS flow is restored.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Check VCT pressure &gt; 20 psig to ensure adequate NPSH is available to the charging pump being started.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Shut 2CV55, Charging Flow Control Valve, to prevent water hammer on the Regenerative Heat Exchanger.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Open 2CV71 Charging Header Pressure Control Valve, to prevent seal injection flow from being re-established &gt; Tech Spec limit of 40 gpm total to all RCPs.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> AB.CVC-1 states to check RCP seal inlet temp &lt;225 OR seal injection isolated. Seal isolation is not one of the available choices. The bases for AB.CVC-1 says this is done using LOPA-1 as guidance. LOPA-1 bases doc says that seals are isolated (because in LOPA you have additionally lost all CCW flow and seals HAVE heated up) to protect RCPs from seal and shaft damage that may occur when a centrifugal charging pump is started.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> While VCT is the source of NPSH to the CVCS pumps, it is automatically maintained 15-25 psig, and is not checked.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> 2CV55 is shut prior to starting the centrifugal charging pump, but that is to prevent excessive flow, and the CV55 is normally full open at power.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> The cv71 is not adjusted until after the CVCS pump is started, but the reason is correct.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.CVC-0001 Bases Doc (p 2, Rev 9); 2-EOP-LOPA-1 Bases Doc (p 34, Rev 27) | LO: ABCVC1E002 | Source: New | Cognitive: Memory</div>
</div>
</details>
</div>

## Connections

- Related systems: [[CVCS]], [[RCPs]]
- Related procedures: [[AB.CVC-0001 — Loss of Charging]], [[EOP-LOPA-1 — Loss of All AC Power]]
- Related exam: [[2014 NRC Written Exam]]
