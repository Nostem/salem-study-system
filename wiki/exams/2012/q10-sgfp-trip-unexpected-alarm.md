---
title: "2012 Q10 — SGFP Trip Unexpected Alarm"
category: exams
status: draft
aliases:
  - 2012 Q10
  - 2012-Q10
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q10 — SGFP Trip Unexpected Alarm</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">000054G446 / 2.4.46 (RO 4.2 / SRO 4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br><br>
- Unit 2 is operating at 100% power, MOL.<br>
- The Condensate Polisher is in service -full flow.<br>
- 21 SGFP trips.<br>
- The CRS enters S2.OP-AB.CN-0001, Main Feedwater / Condensate System Abnormality.<br>
- The Rx does NOT trip.<br><br>
Which of the following is an UNEXPECTED alarm if it is locked in 2 minutes after 21 SGFP trips?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> OHA G-3, EHC SYS TRBL.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> OHA G-44, COND POL TRBL.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Console Alarm RC PRESS DEVIATION HI.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Console Alarm RC LOOPS TAVG-TREF DEVIATION.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> C is correct because the RC pressure deviation would not be expected, since the setpoint (+75 psig deviation) equates to when the spray valves are full open. The spray valves should be shut after the insurge due to the load rejection and then the large amount of inward rod motion.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ A.</strong> A is incorrect because G-3 will be in alarm since it receives input from the EHC Control and Status computer, which will have a Loss of Feed pump Runback alarm in.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> B is incorrect because the condensate polisher trouble alarm will be in due to the CN108s (auto open on a SGFP trip) AND the CN109 being open at the same time (polisher in service).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> D is incorrect because RC loops Tavg-Tref deviation will be expected as rods are driving in due to the turbine runback to 65%.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.CN-0001 Main Feedwater/Condensate System Abnormality (Rev 26); NOS05CN&FDW09 (Rev 9, p 28) | LO: ABCN01E001, ABCN01E005 | Source: Facility Exam Bank — Editorially Modified | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Feed & Condensate]], [[Pressurizer Level & Press Control]], [[Control Rod Drive]], [[Annunciators]]
- Related procedures: [[AB.CN-0001 — Condensate System Abnormality]], [[S1.OP-AR.ZZ-0007]]
- Related exam: [[2012 NRC Written Exam]]
