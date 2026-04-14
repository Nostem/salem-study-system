---
title: "2020 Q53 — SW Pump Trip / 1A 4KV Bus Differential"
category: exams
status: draft
aliases:
  - 2020 Q53
  - 2020-Q53
---

<div style="background:#111827;border:1px solid #1a2035;border-radius:8px;padding:20px;margin-bottom:24px;">
<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
<span style="color:#60a5fa;font-size:14px;font-weight:600;">Q53 — SW Pump Trip / 1A 4KV Bus Differential</span>
<span style="font-size:10px;padding:2px 8px;background:#0d1220;color:#6b7280;border-radius:3px;">076000A2.01 (3.5)</span>
</div>

<div style="font-size:13px;color:#9ca3af;margin-bottom:14px;line-height:1.7;">
<strong>Given:</strong><br>
<br>
Initial Conditions:<br>
&bull; Unit 1 is at 100% Power.<br>
&bull; #3 Service Water Bay is cleared and tagged (isolated) due to a leak on the 15SW3, 15 SW Pump Discharge Valve.<br>
&bull; The 1A EDG is running paralleled to the bus for a normally scheduled monthly surveillance.<br>
&bull; 11 and 13 SW Pumps are in service.<br>
&bull; 12 SW Pump is in AUTO.<br>
<br>
Current Conditions:<br>
&bull; 13 SW Pump trips<br>
&bull; One minute later the 1A EDG output breaker opens due to 1A 4KV Vital Bus Differential.<br>
<br>
Which ONE of the following describes the required mitigating actions for the event?
</div>

<div style="margin-bottom:14px;">
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>A.</strong> Enter S1.OP-AB.4KV-0001, Loss of 1A 4KV Vital Bus, and verify that 12 SW Pump has started and SW header pressure has returned to normal.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>B.</strong> Enter S1.OP-AB.SW-0005, Loss of All Service Water, trip the Rx, confirm the trip, and stop the RCPs to limit heat input to the RCS.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>C.</strong> Enter S1.OP-AB.SW-0005, Loss of All Service Water, trip the Rx, confirm the trip, and stop the RCPs to limit heat input to the CCW System.</div>
<div style="padding:10px 14px;border-left:3px solid #1a2035;margin-bottom:4px;font-size:12px;color:#c8cdd5;background:#0d1220;border-radius:0 4px 4px 0;"><strong>D.</strong> Enter S1.OP-AB.SW-0004, Loss of Service Water During Service Water Header Outage, and verify that 12 SW Pump has started and SW header pressure has returned to normal.</div>
</div>

<details>
<summary style="cursor:pointer;color:#60a5fa;font-size:12px;font-weight:600;padding:8px 0;">▶ Show Answer & Explanation</summary>
<div style="margin-top:10px;padding:16px;background:#0a0e17;border:1px solid #1a2035;border-radius:6px;font-size:12px;">
<div style="padding:8px 12px;background:#052e16;border-left:3px solid #22c55e;border-radius:0 4px 4px 0;margin-bottom:10px;color:#c8cdd5;"><strong style="color:#22c55e;">✓ A. Correct.</strong> The trip of the 13 SW Pump will cause a reduction in SW header pressures and an automatic start of the 12 SW Pump (C Bus). The 1A Bus differential will not effect the service water system as 15 and 16 SW Pumps are powered from 1A Bus and they are already C/Ted for the #3 SW Bay Outage. This involves a unit difference knowledge of which buses power which pumps. (see step 3.33 of AB-4KV-0001)</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ B.</strong> Plausible because the candidate may believe that 11 and 12 SW Pumps are powered from the 1A Bus, therefore resulting in a Loss of All Service Water, requiring entry in AB-SW-0005. They also may believe that the RCPs are tripped to limit heat input to the RCS (like in FRHS).</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ C.</strong> Plausible because the candidate may believe that 11 and 12 SW Pumps are powered from the 1A Bus, therefore resulting in a Loss of All Service Water, requiring entry in AB-SW-0005. The remainder of the actions are correct if entry into AB-SW-005 was required.</div>
<div style="padding:8px 12px;border-left:3px solid #f87171;border-radius:0 4px 4px 0;margin-bottom:6px;color:#9ca3af;"><strong style="color:#f87171;">✗ D.</strong> Plausible because the candidate may believe that S1.OP-AB.SW-0004(Q), Loss of Service Water During Service Water Header Outage is the appropriate procedure to enter due to the #3 SW Bay being C/Ted. AB-SW-0004 is for outage situations.</div>
<div style="margin-top:10px;padding-top:8px;border-top:1px solid #1a2035;font-size:10px;color:#6b7280;">Ref: S1.OP-AB.SW-0001(Q), Loss of Service Water Header Pressure, S1.OP-AB.SW-0005(Q), Loss of All Service Water. S1.OP-AB.4KV-0001(Q), Loss of 1A 4KV Vital Bus. | LO: N/A | Source: New | Cognitive: Comprehension</div>
</div>
</details>
</div>

## Connections

- Related systems: [[Service Water]], [[4KV]], [[EDGs]]
- Related procedures: [[AB.4KV-0001 — Loss of 4KV Vital Bus]], [[AB.SW-0001 — Loss of SW Header Pressure]], [[AB.SW-0005 — Loss of All Service Water]], [[AB.SW-0004 — Loss of SW During SW Header Outage]]
- Related exam: [[2020 NRC Written Exam]]
