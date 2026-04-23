---
title: "2022 Q57 — IR NIS Channel Failure and P-10 Permissive"
category: exams
status: draft
reference: no
aliases:
  - 2022 Q57
  - 2022-Q57
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q57 — IR NIS Channel Failure and P-10 Permissive</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">015 K4.07 (3.7)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br><br>
• Unit 2 is performing a planned shutdown for a refueling outage.<br>
• Current reactor power is 30%.<br>
• 2N35, Intermediate Range NIS channel fails HIGH.<br><br>
Which ONE of the following describes the plant impact from this failure?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Reactor trips immediately on 1/2 Intermediate Range channels exceeding the high flux trip.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Reactor trips ONLY when 2/2 Intermediate Range channels exceed the high flux trip.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Reactor trips when 3/4 Power Range channels are less than the P-10 permissive.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Reactor trips when 2/4 Power Range channels are less than the P-10 permissive.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">&#9654; Show Answer &amp; Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">&#10003; C. Correct.</strong> When at least 3/4 PR NIS channels are less than P-10 setpoint (approx. 9%), P-10 will automatically unblock and reinstate the 1/2 IR high flux trip (25%) and 2/4 PR high flux low setpoint trip (25%). In this case, with the 2N35 failed high, the Rx will automatically trip when below P-10 permissive.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; A.</strong> P-10 (2/4 PR channels > 10%) is blocking the 1/2 IR high flux trip. Plausible because the operator may incorrectly assess the plant conditions and believe that a Rx trip will occur when one IR channel fails high.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; B.</strong> P-10 (2/4 PR channels > 10%) is blocking the 1/2 IR high flux trip. Plausible because the operator may incorrectly believe that both (2/2) IR channels exceeding the high flux setpoint are required to cause a Rx trip.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">&#10007; D.</strong> When at least 3/4 PR NIS channels are less than P-10 setpoint (approx. 9%), P-10 will automatically unblock and reinstate the 1/2 IR high flux trip (25%) and 2/4 PR high flux low setpoint trip (25%). Plausible because the operator may incorrectly determine that P-10 permissive will clear when 2/4 PR channels are less than the P-10 permissive.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: NOS05EXCORE-14 | LO: NOS05EXCORE-14, Obj 7 — Outline the control interlocks associated with Excore NIS: P-10, Enable At-Power trips | Source: Bank — Salem | Cognitive: Comprehension/Analysis</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Excore NIs]], [[RPS/SSPS]]
- Related exam: [[2022 NRC Written Exam]]
