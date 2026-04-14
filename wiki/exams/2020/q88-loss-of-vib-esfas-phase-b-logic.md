---
title: "2020 Q88 — Loss of VIB / ESFAS Phase B Logic"
category: exams
status: draft
aliases:
  - 2020 Q88
  - 2020-Q88
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q88 — Loss of VIB / ESFAS Phase B Logic</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">013A2.04 (4.2)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 is at 100% Power.<br>
&bull; A Loss of 2B Vital Instrument Bus has occurred.<br>
&bull; No operator action has been taken.<br><br>
Complete the following statements concerning an impact on Engineered Safety Feature Actuation System (ESFAS) instrumentation due to the loss of the Vital Instrument Bus.<br><br>
(1) Prior to any operator action taken, the current Containment Pressure channel logic (coincidence) for the remaining channels to cause a Phase B actuation is <span class="blank">__(1)__</span>.<br>
(2) In accordance with Technical Specification 3.3.2.1, ESFAS Instrumentation, the CRS will direct maintenance to remove the inoperable channel from service by placing the Containment Pressure HI-HI Bistable in the <span class="blank">__(2)__</span> condition.
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> <span class="blank">(1)</span> 2/3<br><span class="blank">(2)</span> Tripped</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> <span class="blank">(1)</span> 2/3<br><span class="blank">(2)</span> Bypassed</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> <span class="blank">(1)</span> 1/3<br><span class="blank">(2)</span> Tripped</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> <span class="blank">(1)</span> 1/3<br><span class="blank">(2)</span> Bypassed</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; B. Correct.</strong> Containment Spray bi-stables are energized to actuate. The loss of the 2B Vital Instrument Bus will result in the Hi-Hi Containment Pressure bi-stable associated with 2B Vital Instrument Bus remaining in the deenergized state, therefore the logic will go from 2/4 to 2/3. Technical Specifications do not place the Containment Spray bi-stables in the tripped condition, they are bypassed to reduce the possibility of a spurious actuation of Containment Spray.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Incorrect. The first part is correct. The second part is plausible as the candidate may believe the one bi-stable for Hi-Hi Containment Pressure has deenergized with the loss of the 2B Vital Instrument Bus. Incorrect as Containment Spray bi-stables are energized to actuate. Technical Specifications do not place the Containment Spray bi-stables in the tripped condition, they are bypassed to reduce the possibility of a spurious actuation of Containment Spray.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. The first part is plausible because the candidate may remember that the High Containment Pressure SI logic is 2/3 channels and may believe the Hi-Hi Containment Pressure Containment Spray logic is 2/3 as well. Incorrect as the Hi-Hi logic is 2/4 channels. The second part is plausible in that most ESF actuation bi-stables are deenergized to trip and tech specs require those bi-stables to be placed in the tripped condition. Incorrect as Containment Spray bi-stables are energized to actuate. Technical Specifications do not place the Containment Spray bi-stables in the tripped condition, they are bypassed to reduce the possibility of a spurious actuation of Containment Spray.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. The first part is plausible because the candidate may remember that the High Containment Pressure SI logic is 2/3 channels and may believe the Hi-Hi Containment Pressure Containment Spray logic is 2/3 as well. Incorrect as the Hi-Hi logic is 2/4 channels. The second part is correct.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-AB.115-0002(Q), Loss of 2B 115V Vital Instrument Bus and Bases; ESFAS Instrumentation TS 3.3.2.1 and Bases | LO: N/A | Source: Bank &ndash; Catawba 2017 NRC Exam Q87 | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RPS/SSPS]], [[Containment Spray]], [[115V AC]]
- Related procedures: [[AB.115-0002 — Loss of 2B 115V Vital Instrument Bus]]
- Related tech specs: [[TS 3/4.3 — Instrumentation]]
- Related exam: [[2020 NRC Written Exam]]
