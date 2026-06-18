---
title: "2015 Q80 — SW Leak Location and Mitigating Actions for a Sequential SW Header Pressure Alarm Cascade (SRO)"
category: exams
status: draft
reference: no
aliases:
  - 2015 Q80
  - 2015-Q80
  - 2015 SRO 5
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q80 (SRO 5) — SW Leak Location and Mitigating Actions for a Sequential SW Header Pressure Alarm Cascade</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">G2.4.45 (RO 4.1 / SRO 4.3)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
Given the following conditions:<br>
&bull; Unit 1 is operating at 100% power.<br>
&bull; 21, 24 and 26 SW pumps are in service.<br>
&bull; 21 and 22 SW header pressures are 108 psig.<br>
&bull; The following OHAs annunciate sequentially in this order:<br>
&nbsp;&nbsp;&ndash; B-13, 21 SW HDR PRESS LO<br>
&nbsp;&nbsp;&ndash; B-14, 22 SW HDR PRESS LO<br>
&nbsp;&nbsp;&ndash; B-15, TURB AREA SW HDR PRESS LO.<br>
&nbsp;&nbsp;&ndash; B-48, SW VLV RM FLOODED.<br>
The standby SW pump starts automatically, and OHAs B-13, B-14, and B-15 clear.<br><br>
Which of the following describes where a SW leak could be located which would produce these alarms, and the procedurally directed actions which would mitigate the event?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> On a CFCU supply piping in the 78' Mechanical Penetration Area. S2.OP-AB.SW-0001, Loss of Service Water Header Pressure, will direct isolating multiple CFCUs IAW Attachment 5 CFCU leaks, until header pressure stabilizes and sump pump runs stop.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Upstream of the 2ST901, TURB LO CLR ST RET VLV. S2.OP-AB.SW-0002, Loss of Service Water-Turbine Header, will direct operators to adjust 2ST901 TURB LO CLR ST RET V, and 2ST1 TG AREA SW PRESS CONT VLV, to compensate for the SW leak.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> On a CFCU supply piping in the 78' Mechanical Penetration Area. S2.OP-AB.SW-0001, Loss of Service Water Header Pressure, will direct isolating a single CFCU which would be readily identifiable from the control room.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Upstream of the 2ST901, TURB LO CLR ST RET VLV. S2.OP-AB.SW-0002, Loss of Service Water-Turbine Header, will direct removing the Main Turbine from service in preparation for isolating the TGA header.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ C. Correct.</strong> <em>Explanation of Answers (verbatim from source):</em> 55.43.b(5)This question meets SRO only criteria listed in NUREG-1021, ES-401, Attachment 2, II.E. Figure 2, 1st bullet for 5th Block for assessment and implementation of a procedure or section of procedure (assessment), then correct procedure implementation and steps taken in the peocedure. The leak location could be in the TGA with the conditions in the stem except for the SW valve room flooding. Knowledge of where and what piping is there is needed to answer question. The 2ST901 would respond on a TGA leak, and depending on leak size could cause a restoration of header pressures. If it did not operators would be directed to ake manual control of 2ST901 and 2ST1. If it is thought that the TGA header must be isolated to stop the leak, then removing the MT from service would have to occur. The multiple cFCU isolations directed in attachment 5 is for leaks of undetermined CFCUs in containment, and refers to containment sump pump runs and trying to isolate the leak by stopping a bunch of CFCUs. Step 3.11 states if a single component can be isolated, and it can, to isolate it. Additionally, the SW indication in control room would identify that a single CFCU is affected. The sump pump runs referred to are containment sump pump runs, and are if the SW leak is in containment.</div>
<div style="margin-top:6px;padding:8px 12px;border-left:3px solid #1a2035;border-radius:0 4px 4px 0;color:#9ca3af;font-size:11px;"><strong>K/A statement:</strong> Ability to prioritize and interpret the significance of each annunciator or alarm.<br><em>Note: the 2015 NRC worksheet provides a single "Explanation of Answers" (above); it does not contain separate per-distractor justifications, so none are fabricated here.</em></div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: Loss of Service Water Header Pressure (S2.OP-AB.SW-0001, Rev 16); Overhead Annunciators Window B (S2.OP-AR.ZZ-0002, p.81, Rev 36) | LO: ABSW01E004 | Source: Bank – Facility Exam Bank (Significantly Modified — 153928, used on Salem SRO NRC exam more than 2 exams ago) | Cognitive: Application | Exam Level: SRO</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[CFCUs]], [[Annunciators]]
- Related procedures: [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.SW-0002 — Loss of Service Water-Turbine Header]], [[S2.OP-AR.ZZ-0002 — Overhead Annunciators Window B]]
- Related exam: [[2015 NRC Written Exam]]
