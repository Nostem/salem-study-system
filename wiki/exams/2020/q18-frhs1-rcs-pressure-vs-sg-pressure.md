---
title: "2020 Q18 — FRHS-1 RCS Pressure vs SG Pressure Check"
category: exams
status: draft
reference: no
aliases:
  - 2020 Q18
  - 2020-Q18
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q18 — FRHS-1 RCS Pressure vs SG Pressure Check</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">WE05EA2.1 (3.4)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
&bull; Unit 2 has experienced a Reactor Trip from 100% Power.<br>
&bull; Safety Injection has immediately actuated on low RCS Pressure.<br>
&bull; ALL Auxiliary Feed Pumps have been lost and can't be recovered.<br>
&bull; The CRS has transitioned to 2-EOP-FRHS-1, Response to Loss of Secondary Heat Sink at step 20 of 2-EOP-TRIP-1, Reactor Trip or Safety Injection.<br>
<br>
2-EOP-FRHS-1 Step 3 <span class="hi-trap">(Step 1 in current EOP rev)</span> asks; "IS RCS PRESSURE GREATER THAN ANY INTACT OR RUPTURED SG PRESSURE?"<br>
<br>
Which ONE of the following actions is required if the operator answers NO and why?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Check if RCS T-Hots are &lt; 350 &deg;F and Place RHR in Service. If RCS temperature is low enough to place the RHR System in service, then the RHR System is an alternate heat sink to the secondary system.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Return to Procedure in Effect. When the RCS depressurizes below the intact SG pressures, for larger LOCA break sizes, the secondary heat sink is not required and actions to restore secondary heat sink are not necessary.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Continue attempts to Restore Auxiliary Feed Water flow and if 3/4 SG WR Levels are less than 20% (25% Adverse), initiate Bleed and Feed. There is no decay heat removal through the Steam Generators and the RED Path requiring transition to 2-EOP-FRHS-1 is still valid.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Trip all RCPs and immediately transition to 2-EOP-LOCA-1, Loss of Reactor Coolant. To prevent further loss of reactor coolant through the LOCA, since a LOOP later in the event could cause a more severe loss of coolant or two-phase RCS flow.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; B. Correct.</strong> FRHS-1, Step 3 directs a return to the procedure in effect if it is answered NO. In accordance with the Bases, before implementing actions to restore flow to the SGs, the operator should check if secondary heat sink is required. For larger LOCA break sizes, the RCS will depressurize below the intact SG pressures. The SGs no longer function as a heat sink and the core decay heat is removed by the RCS break flow. For this range of LOCA break sizes, the secondary heat sink is not required and actions to restore secondary heat sink are not necessary. For these cases, the operator returns to the procedure and step in effect.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> Plausible because FRHS-1, Step 3.1 places RHR in service if RCS T-Hots are &lt; 350&deg;F. Incorrect, because this step is only taken if the answer to Step 3 was a YES. Second part is the correct bases for Step 3.1, not Step 3.0.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Plausible because the key mitigation strategies of FRHS-1 are to continue to attempt to restore feed water flow to the SGs and if WR SG Levels in 3/4 SGs are &lt; 20% level to immediately initiate Bleed and Feed. Incorrect because these strategies are not necessary if a large break LOCA has occurred and the break is the heat removal mechanism.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Plausible because LOCA-1 will be the ultimate procedure transition for a large break LOCA from TRIP-1. Also plausible because the second part describes the reasons for tripping the RCPs due to a SBLOCA. Based on this event, the RCPs would have likely been tripped already due to the TRIP-1 CAS. Incorrect because Step 3 will transition you back to procedure in effect (TRIP-1).</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: 2EOP-FRHS-1, Response to Loss of Secondary Heat Sink and Bases | LO: N/A | Source: Modified Bank - Salem 2008 NRC Exam, Q23 | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[RCS]], [[AFW]], [[RHR]]
- Related EOPs: [[EOP-FRHS-1 — Response to Loss of Secondary Heat Sink]], [[EOP-TRIP-1 — Reactor Trip or Safety Injection]], [[EOP-LOCA-1 — Loss of Reactor or Secondary Coolant]]
- Related exam: [[2020 NRC Written Exam]]
