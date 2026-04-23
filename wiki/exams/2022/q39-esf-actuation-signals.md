---
title: "2022 Q39 — Containment Pressure Channel Failures / SI and Phase B Logic"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q39
  - 2022-Q39
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q39 — Containment Pressure Channel Failures / SI and Phase B Logic</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">013 K6.01 (2.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is at 100% Power.<br>
• Containment Pressure channel I has failed.<br>
• ALL required actions to remove the channel from service in accordance with S2.OP-SO.RPS-0005, Placing Containment Pressure Channel in Tripped Condition, were completed.<br>
• Subsequently, Containment Pressure channel IV fails HIGH.<br><br>
Which ONE of the following describes the Phase B and Safety Injection response?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> NEITHER Safety Injection or Phase B will actuate</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> BOTH Safety Injection and Phase B will actuate.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> ONLY Phase B will actuate.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> ONLY Safety Injection will actuate.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; A. Correct.</strong> Following the removal of the Containment Pressure channel I from service IAW S2.OP-SO.RPS-0005, the CS/Phase B actuation logic will change from 2/4 to 2/3 and Safety Injection actuation logic will remain at 2/3 since only channels II, III, and IV provide the inputs for containment pressure high SI actuation. Therefore, when Containment Pressure channel IV fails high, no CS/Phase B will actuate since the 2/3 logic is not satisfied. As for the Safety Injection logic, channel I does not input into the 2/3 logic and therefore, channel IV failure will not satisfy the Safety Injection actuation logic of 2/3.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> Incorrect. Plausible if the operator believes that both of these channels input into the SI and Phase B logic. Channel IV only inputs into CS/Phase logic.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; C.</strong> Incorrect. Plausible because a SI on 2/3 high containment pressure is from channels II thru IV only. Containment Spray/Phase B is actuated from 2/4 high containment pressure channels I thru IV. Therefore, the operator may incorrectly interpret that a Phase B will actuate because channels I and IV satisfy the coincidence for Phase B actuation, however, the stem states that channel I was removed from service which makes the Phase B logic now 2/3 and channel I no longer provides an input into Phase B.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> Incorrect. Plausible if the operator believes both these channels input into the SI logic and that Phase B does not actuate since channel was removed from service, it takes the CS/Phase logic to 2/3.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S2.OP-SO.RPS-0005 | LO: NOS05RXPROT-15, Obj 27 — Given an RPS failure, predict the effect on Engineering Safeguards System | Source: Bank — Beaver Valley U1 2018 NRC RO37 | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[ESF & Design]], [[RPS/SSPS]], [[Containment]]
- Related procedures: [[S2.OP-SO.RPS-0005]]
- Related exam: [[2022 NRC Written Exam]]
