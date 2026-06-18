---
title: "2012 Q78 — SBLOCA Faulted SG Evaluation Procedure Transition"
category: exams
status: draft
aliases:
  - 2012 Q78
  - 2012-Q78
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q78 — SBLOCA Faulted SG Evaluation Procedure Transition</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.2.44 (RO 4.2 / SRO 4.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 1 was tripped from 100% power when a SBLOCA occurred.<br>
- While performing EOP-TRIP-1, 11 SG was identified as being faulted.<br>
- All actions have been completed to isolate 11 SG.<br>
- After transitioning to EOP-LOCA-1, the crew is performing the Faulted SG Evaluation steps.<br>
- 11 SG pressure is 740 psig and lowering.<br>
- 12-14 SG pressures are all 960 psig and lowering very slowly.<br><br>
Which of the following identifies how the CRS should respond, and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Transition first to EOP-LOSC-1, then LOSC-2 because all SGs are now faulted. Faulted SGs require isolation because they may be masking other accidents (or their severity) in progress.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Continue in LOCA-1 since the ECCS injection is cooling the RCS and causing the unisolated SG pressures to lower. Going to LOSC-1 would only perform steps which have already been performed.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Continue in LOCA-1 since the ECCS injection is cooling the RCS and causing the unisolated SG pressures to lower. The additional subcooling provided will allow an earlier transition to TRIP-3 during SI Flow Reduction steps.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Transition directly to EOP-LOSC-2 because all SGs are now faulted. Steps to determine if SI termination can be performed will be adversely affected due to the lowering RCS pressure from the SG fault(s), and cause unnecessary procedure performance.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ B. Correct.</strong> The procedure transition to LOSC-1 is made before LOCA-1 when in TRIP-1. The stem says all actions have been completed to isolated the faulted SG. These actions would have to isolated the faulted SG. The transition out of LOSC-1 is SGTR-1 if there is a rupture or to LOCA-1. The first step in LOCA-1 is to check for faulted SG's that have not been isolated.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because the other SGs are not faulted, they are reacting to the cool ECCS water being pumped into the RCS, but the reason is plausible.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> C is incorrect because RCS pressure will still be lowering (not stable or rising), based on the faulted SG.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because there is no direct transition to LOSC-2, you first have to enter LOSC-1.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 1-EOP-TRIP-1 (Rev 26), Reactor Trip or Safety Injection; 1-EOP-LOCA-1 (Rev 25), Loss of Reactor Coolant; 1-EOP-LOSC-1 (Rev 22), Loss of Secondary Coolant | LO: LOCA01E009, LOSC01E004 | Source: New | Cognitive: Application</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Steam Generator & Blowdown]]
- Related EOPs: [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]], [[EOP-LOSC-1 — Loss of Secondary Coolant]], [[EOP-LOSC-2 — Uncontrolled Depressurization of All Steam Generators]], [[EOP-SGTR-1 — Steam Generator Tube Rupture]]
- Related exam: [[2012 NRC Written Exam]]
